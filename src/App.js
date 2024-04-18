import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";
import Table from "./components/Table";

let dummy_expenses = [
  {
    id:'e1',
    title : 'petrol',
    amount : 500,
    date:new Date (2024,3,15)
  },
  {
    id:'e2',
    title : 'abc',
    amount:200,
    date:new Date (2024,3,18)
  },
  {
    id:'e3',
    title : 'xyz',
    amount : 700,
    date : new Date (2024,3,17)
  },
  {
    id :'e4',
    title : 'lm',
    amount :900,
    date : new Date (2024,3,12)
  }
  ];

const App = () =>{

  
   const [expenses, setExpense] = useState(dummy_expenses)

    const addExpenseHandlerNew = (expense) =>{
      const updated_Expense = [expense , ...expenses];
      setExpense(updated_Expense)
      console.log(expense)
 }

  return (
      <div className="main-container">
      <h2>Welcome !</h2>
      <NewExpense  onAddExpense={addExpenseHandlerNew}/>
      <Expenses item={expenses}/>
      <Table/>
    </div>
  );
}

export default App;
