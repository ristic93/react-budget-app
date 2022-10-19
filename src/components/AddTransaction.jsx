import React, {useState, useContext} from 'react';
import {v4 as uuidv4} from 'uuid';
import { GlobalContext } from '../context/GlobalState';
import { GrCheckmark } from 'react-icons/gr';

const AddTransaction = () => {

  const {addIncome, addExpense} = useContext(GlobalContext);
  const [type, setType] = useState("inc");
  

  const [newItem, setNewItem] = useState({
    desc: "",
    amount: "",
  });

  const {desc, amount} = newItem;

  const onChangeValue = (event) => {
    setNewItem({...newItem, [event.target.name]: event.target.value})

    // console.log(newItem);
  }

  const onTypeChange = (value) => {
    setType(value);
  }
  
  // console.log(type);

  const onSubmitValue = (event) => {
    event.preventDefault();

    if (desc !== "") {
      const newTransaction = {
        id: uuidv4(),
        desc: desc,
        amount: parseInt(amount)
      };
  
      setNewItem({
        desc: "",
        amount: ""
      });

      if (type === "inc") {
        addIncome(newTransaction);
      } else if (type === "exp") {
        addExpense(newTransaction)
      }
    }
  };

  return (
    <div className='form-wrapper'>
        <form onSubmit={onSubmitValue}>
            <select className='form-type' name='type' onChange={(event) => onTypeChange(event.target.value)}>
                <option value="inc">+</option>
                <option value="exp">-</option>
            </select>
            <input 
              type="text" 
              name="desc"
              value={desc}
              placeholder="Add description" 
              autoComplete="off" 
              maxLength="20" 
              onChange={onChangeValue}/>
            <input 
              type="number" 
              name="amount"
              value={amount}
              placeholder="Add amount" 
              autoComplete="off" 
              min="0" 
              onChange={onChangeValue}/>
            <button style={{background: type === "inc" ? "#5a9b67" : "#cf5856"}} className='btn-add'><GrCheckmark/></button>
        </form>
    </div>
  )
}

export default AddTransaction;