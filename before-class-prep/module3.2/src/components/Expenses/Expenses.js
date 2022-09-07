import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';
import ExpenseSummary from "./ExpenseSummary";

const Expenses = (props) => {
  return (
    <Card className="expenses">
      {props.value.map((expense) => (
        <ExpenseItem value={expense} />
      ))}
      <ExpenseSummary value={props.value}/>
    </Card>
  );
};

export default Expenses;
