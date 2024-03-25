import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";


function App() {
  let expenses = [
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
  return (
      <div className="main-container">
      <h2>Welcome  !</h2>
      <NewExpense/>
     <Expenses item={expenses}/>
    </div>
  );
}

export default App;
