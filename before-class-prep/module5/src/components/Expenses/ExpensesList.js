import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.value.length === 0) {
    return <h2 className="expenses-list__fallback">No expenses found.</h2>;
  }

  return (
    <li>
      <ul className="expenses-list">
        {props.value.map((expense) => (
          <ExpenseItem value={expense} key={expense.id} />
        ))}
      </ul>
    </li>
  );
};

export default ExpensesList;
