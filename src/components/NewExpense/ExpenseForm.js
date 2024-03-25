import React, {useState} from "react";
import './ExpenseForm.css';

const ExpenseForm = ()=>{
 
    const [enteredTitle,setEnteredTitle] = useState('');
    const [enteredAmount,setEnteredAmount] = useState('');
    const [enteredDate,setEnteredDate] = useState('');

    const titleChangeHandler = (event) =>{
        setEnteredTitle(event.target.value);
    }
    const amountChangeHandler = (event) =>{
        setEnteredAmount(event.target.value);
    }
    const dateChangeHandler = (event) =>{
        setEnteredDate(event.target.value);
    }
    return(
        <form>
         <div className="new-Expense-controls-Form">
               <div className="individual-Expense-Control">
                       <label>Title</label>
                       <input type="text" onChange={titleChangeHandler} value={enteredTitle}/>
               </div>
               <div className="individual-Expense-Control">
                       <label>Amount</label>
                       <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} value={enteredAmount} />
               </div>
               <div className="individual-Expense-Control">
                       <label>Date</label>
                       <input type="date" onChange={dateChangeHandler} value={enteredDate}/>
               </div>
            </div>
             <div className="new-Expense-Button">
              <button type="submit">Add Expense</button>
             </div>
        </form>
    )
}

export default ExpenseForm;