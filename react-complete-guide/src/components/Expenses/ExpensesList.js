import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

function ExpensesList(props) {
  if (props.expenseItems.length === 0) {
    return <h2 className="expenses-list__fallback">No expenses found</h2>;
  }
  return (
    <ul className="expenses-list">
      {props.expenseItems.map((item) => (
        <ExpenseItem key={item.id} {...item} />
      ))}
    </ul>
  );
}
export default ExpensesList;
