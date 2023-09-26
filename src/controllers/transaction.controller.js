const transactionModel = require("../models/transaction.model");

const getTransactions = (req,res) => {
    transactionModel.find({})
    .then (data => res.status(200).json(data))
    .catch(error => res.status(500).json({error}))
}

const addTransaction = (req, res) => {
    const {date, concept,amount,reciver,details} = req.body
    const newTransacion = new transactionModel( {
 date,
 concept,
 amount,
 reciver,
 details
    })

    newTransacion.save()
    .then(data => res.status(200).json(data))
    .catch(error => res.status(500).json({error}))
}

module.exports = {
    addTransaction,
    getTransactions
}