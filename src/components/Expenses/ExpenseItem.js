import './ExpenseItem.css'
import Card from '../UI/Card';
import Expensedate from './Expensedate';


const ExpenseItem = (props) =>{
     return(
        <Card className='expense-item'>
             {/* <Expensedate date={props.date}/> */}
            <div className='expense-itrem-description'>
                <h2 className="expTitle">{props.title}</h2>
                <div className='expense-item-price'>
                    INR {props.amount}
                </div>
            </div>
        </Card>
     );
}

export default ExpenseItem;