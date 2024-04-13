import './Expenses.css';
import ExpenseItem from './ExpenseItem';


let Expenses = (props) =>{
     return(
      
        <div>
         {
            props.item.map(
               expense =>(
                  <ExpenseItem
                  date = {expense.date}
                  title = {expense.title}
                  amount = {expense.amount}/>
               )
            )
         }
   
      </div>
     );
}

export default Expenses;