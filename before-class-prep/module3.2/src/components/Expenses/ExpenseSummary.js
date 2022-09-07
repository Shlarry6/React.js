import Card from '../UI/Card';
import './ExpenseSummary.css';

const count = (expenses) => {
    let counter = 0;
    for (let i = 0; i < expenses.length; i++) {
        counter++;
    };
    return counter;
};
const total = (expenses) => {
    let runningTotal = 0;
    expenses.map((expense) => {
        runningTotal = runningTotal + expense.amount;
        return runningTotal;
    });
    return runningTotal;
};

const ExpenseSummary = (props) => {
    const expensesCount = count(props.value);
    const expensesTotal = total(props.value).toLocaleString('en-us', {style: 'currency', currency: 'USD'});

    return (
        <Card className="summary">
            <div className="summary-count">Total of {expensesCount} Expenses:</div>
            <div className="summary-total">{expensesTotal}</div>
        </Card>
    )
};

export default ExpenseSummary;