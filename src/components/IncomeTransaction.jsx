import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';
import { MdDelete } from 'react-icons/md';

const IncomeTransaction = ({incTrans}) => {

  const {deleteTransaction} = useContext(GlobalContext);

  return (
    <li className='transaction'>
      <span className='transaction-text'>{incTrans.desc}</span>
      <span className='transaction-amount'>+${incTrans.amount}</span>
      <button className='delete-btn' onClick={() => {deleteTransaction(incTrans.id)}}><MdDelete /></button>
    </li>
  )
}

export default IncomeTransaction;