import React from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) =>{

    const saveExpenseDataHandler =(reciveExpenseData)=>{
            const newExpenses = {
                ...reciveExpenseData,
                id:Math.random().toString()
            }
          console.log(newExpenses)
           props.onAddData(newExpenses);
       
    }
   
    return(
           <div className="New-Expenses">
                <ExpenseForm onSaveData={saveExpenseDataHandler}/>
           </div>
    )
}

export default NewExpense;