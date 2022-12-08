import Card from "./Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(props) {
  return (
    <Card className="expenses">
      <ExpenseItem {...props.items[0]} />
      <ExpenseItem {...props.items[1]} />
      <ExpenseItem {...props.items[2]} />
      <ExpenseItem {...props.items[3]} />
    </Card>
  );
}

export default Expenses;
