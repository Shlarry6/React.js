import React, {useState} from 'react';
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseSummary from "./ExpenseSummary";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2020");

  const onYearSelectHandler = (selectedYear) => {
    setSelectedYear(selectedYear);
  };

  const filteredExpenses = props.value.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selected={selectedYear} onYearSelect={onYearSelectHandler} />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList value={filteredExpenses} />
        <ExpenseSummary value={props.value} />
      </Card>
    </div>
  );
};

export default Expenses;
