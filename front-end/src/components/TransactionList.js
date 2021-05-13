import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';

import Transaction from './Transaction';

const TransactionList = () => {

    const { transactions, getTransactions } = useContext(GlobalContext);

    useEffect(() => {
        getTransactions();
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <h3>History</h3>
            <ul className="list">

                {transactions.map(trans => (
                    <Transaction key={trans._id} transaction={trans} />
                ))}

            </ul>
        </>
    )
}

export default TransactionList
