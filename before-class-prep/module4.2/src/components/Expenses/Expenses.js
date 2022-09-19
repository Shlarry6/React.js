import React, {useState} from 'react';
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseSummary from "./ExpenseSummary";
import ExpenseFilter from "./ExpenseFilter";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2022");

  const onYearSelectHandler = (selectedYear) => {
    setSelectedYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selected={selectedYear} onYearSelect={onYearSelectHandler} />
        {props.value.map((expense, index) => (
          <ExpenseItem value={expense} key={index} />
        ))}
        <ExpenseSummary value={props.value} />
      </Card>
    </div>
  );
};

export default Expenses;
