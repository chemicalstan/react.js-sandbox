import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = ({ onAddExpenseData }) => {
  function saveExpenseDataHandler(savedExpenseData) {
    const expenseData = {
      ...savedExpenseData,
      id: Math.random(),
    };
    onAddExpenseData(expenseData);
  }
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;