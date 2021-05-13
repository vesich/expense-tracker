import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

const IncomeExpenses = () => {
    const { transactions } = useContext(GlobalContext);
    const amounts = transactions.map(one => one.amount);

    const income = amounts.filter(one => one > 0).reduce((acc, curr) => (acc + curr), 0).toFixed(2);
    const expense = amounts.filter(one => one < 0).reduce((acc, curr) => (acc + curr), 0).toFixed(2);

    return (
        <div className='inc-exp-container'>
            <div>
                <h4>Income</h4>
                <p className='money plus'>  ${income}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className='money minus'> ${Math.abs(expense)}</p>
            </div>
        </div>
    )
}

export default IncomeExpenses
