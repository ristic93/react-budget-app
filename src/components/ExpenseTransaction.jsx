import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';
import { MdDelete } from 'react-icons/md';

const ExpenseTransaction = ({expTrans}) => {

  const {deleteTransaction} = useContext(GlobalContext);


  return (
    <li className='transaction'>
      <span className='transaction-text'>{expTrans.desc}</span>
      <span className='transaction-amount'>-${expTrans.amount}</span>
      <button className='delete-btn' onClick={() => {deleteTransaction(expTrans.id)}}><MdDelete /></button>
    </li>
  )
}

export default ExpenseTransaction;