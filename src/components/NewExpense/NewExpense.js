import React from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";
const NewExpense = () =>{

    const saveExpenseDataHandler =(reciveExpenseData)=>{
            //  console.log("data recived successfully" +reciveExpenseData);
    }

    return(
           <div className="New-Expenses">
                <ExpenseForm onSaveData={saveExpenseDataHandler}/>
           </div>
    )
}

export default NewExpense;