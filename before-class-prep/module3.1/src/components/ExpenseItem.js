import './ExpenseItem.css';

const ExpenseItem = () => {
  return (
    <div className="expense-item">
      <div>March 24, 1994</div>
      <div className="expense-item__description">
        <h2>Car Insurance</h2>
        <div className="expense-item__price">$258.99</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
