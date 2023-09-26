const mongoose = require('mongoose')

// Database local connection without user
const connection = async () => {
    const db = await mongoose
        .connect(
            `mongodb://mongo:jRJj7akmIa7wvKT6EEaK@containers-us-west-90.railway.app:7266`
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
