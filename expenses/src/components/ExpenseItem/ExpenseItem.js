import "./ExpenseItem.css";

const ExpenseItem = ({ title, amount, date }) => {
  return (
    <div className="expense-item">
      <div>{date.toDateString()}</div>
      <div className="expense-item__description">
        <h2 className="expense-item__h2">{title}</h2>
        <div className="expense-item__price">R{amount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
