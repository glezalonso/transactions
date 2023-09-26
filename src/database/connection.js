const mongoose = require('mongoose')

// Database local connection without user
const connection = async () => {
    const db = await mongoose
        .connect(
           process.env.DATABASE_URL
        )
        .then((res) =>
            console.log(
                `Se ha conectado correctamente a la base de datos`
            )
        )
        .catch((err) =>
            console.log(
                `Ha ocurrido un error al conectarse a la base de datos ${err}`
            )
        )
}
module.exports = connection
