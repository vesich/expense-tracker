import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

const AddTransaction = () => {

    const { addTransaction } = useContext(GlobalContext)

    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const onFormSubmit = (e) => {
        e.preventDefault();
        const newTransaction = {
            id: Math.floor(Math.random() * 100000),
            text: text,
            amount: Number(amount)
        }

        addTransaction(newTransaction)
        setText('');
        setAmount('');
    }

    return (
        <>
            <h3>Add new transaction</h3>
            <form onSubmit={onFormSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" name='text' value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount <br />
            (negative - expense, positive - income) </label>
                    <input type="number" name='amount' value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </>
    )
}

export default AddTransaction
