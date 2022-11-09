import "./ExpenseItem.css";

const ExpenseItem = () => {
  const expenseDate = new Date(2022,2,28);
  const expenseTitle = "Car Insurance";
  const expenseValue = 1495.58
  return (
    <div className="expense-item">
      <div>{expenseDate.toDateString()}</div>
      <div className="expense-item__description">
        <h2 className="expense-item__h2">{expenseTitle}</h2>
        <div className="expense-item__price">R{expenseValue}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
