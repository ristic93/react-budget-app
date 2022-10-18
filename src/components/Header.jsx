import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

const Header = () => {

  // date and month

  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December',
  ];

  const current = new Date();
  const date = `${current.getDate()} ${months[current.getMonth()]} ${current.getFullYear()}`;


  // budget for income and expenses

  const {incomeTransactions, expenseTransactions} = useContext(GlobalContext);

  // income

  let totalIncome = 0;
  incomeTransactions.forEach((totInc) => {
    totalIncome += totInc.amount;
  })

  // expense

  let totalExpense = 0
  expenseTransactions.forEach((expInc) => {
    totalExpense += expInc.amount;
  })

  // budget balance

  const balance = totalIncome - totalExpense;

  // expense percentage

  const percentage = Math.round((totalExpense / totalIncome) * 100);

  
  return (
    <div className='header'>
        <h2>Available Budget for {date}</h2>
        <h1 style={{color: balance >= 0 ? "#5a9b67" : "#cf5856"}}>{balance > 0 ? "+" : ""}${balance}</h1>
        <div className="income-expence">
          <div className="plus">
            <h3>INCOME</h3>
            <p>+${totalIncome}</p>
          </div>
          <div className="minus">
            <h3>EXPENSE</h3>
            <div className='percentage'>
              <p>-${totalExpense}</p>
              <small> {percentage > 0 ? `%${percentage}` : "---"}</small>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Header;