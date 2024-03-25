import './Card.css';

function Card(props){
    const myclass = 'Card ' + props.className;
    return(
          <div className={myclass}>{props.children}</div>
    );
}

export default Card;