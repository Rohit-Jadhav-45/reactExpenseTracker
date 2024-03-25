import './Expensedate.css';
const Expensedate = (props) =>{
        
    const day = props.date.toLocaleString('en-US',{day:'2-digit'});
    const month = props.date.toLocaleString('en-US',{month:'long'})
    const year = props.date.getFullYear();
   
    return(
        <div className="date">
        <div>{day}</div>
        <div>{month}</div>
        <div>{year}</div>
        <h2></h2>
        <h2></h2>
        <h2></h2>
       </div>
    );
}

export default Expensedate;