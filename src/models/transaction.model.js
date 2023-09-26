const {Schema, default:mongoose} = require('mongoose')

const transactionSchema = new Schema ( {
    date:{
        type:String,
        require:[true,' La fecha es requerida']
    },
    concept:{
        type:String,
        require:[true,' El concepto es requerido']
    },
    amount:{
        type:Number,
        require:[true, 'El monto es requerido']
    },
    reciver:{
        type:String
    },
    details:{
        type:String,
    }

})

module.exports = mongoose.model('Transactions', transactionSchema)