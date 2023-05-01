import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import ExpenseTitle from "./ExpenseTitle";

function ExpenseItem(props) {


  return (
    <div className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <ExpenseTitle title={props.title} />
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
