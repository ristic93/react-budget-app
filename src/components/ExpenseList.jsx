import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';
import ExpenseTransaction from './ExpenseTransaction';

const ExpenseList = () => {

  const {expenseTransactions} = useContext(GlobalContext);

  console.log(expenseTransactions);

  return (
    <div className='transactions transactions-expense'>
        <h2>EXPENSE</h2>
        <ul className='transaction-list'>
          {expenseTransactions.map(expTrans => (

           <ExpenseTransaction key={expTrans.id} expTrans={expTrans}/>

          ))}
        </ul>
    </div>
  )
}

export default ExpenseList;