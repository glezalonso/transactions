const express = require('express')
const cors = require('cors')

const dotenv = require('dotenv')

const app = express()

dotenv.config({ path: 'src/.env' })
app.use(express.json())
app.use(cors())
app.set('title', 'transaction')
app.set('port', process.env.PORT || 3000)

const connection = require('./database/connection')
const {addTransaction, getTransactions, removeTransaction} = require('./controllers/transaction.controller')

app.get('/',getTransactions)
app.post('/', addTransaction)
app.delete('/:id', removeTransaction)

connection()
    .then(() => {
        try {
            app.listen(app.get('port'), () =>
                console.log(
                    `${app.get(
                        'title'
                    )} esta corriendo por el puerto: ${app.get('port')}`
                )
            )
        } catch (error) {
            console.log('No se podido acceder al servidor')
        }
    })
    .catch((error) =>
        console.log(
            `El servidor no se pudo conectar a la base de datos ${error}`
        )
    )

module.export = app
