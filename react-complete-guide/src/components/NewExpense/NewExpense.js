import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = ({ onAddExpenseData }) => {
  function saveExpenseDataHandler(savedExpenseData) {
    const expenseData = {
      id: Math.random(),
      ...savedExpenseData,
    };
    onAddExpenseData(expenseData);
    stopEditingHandler();
  }

  const [formVisibility, setFormVisibility] = useState(false);

  const startEditingHandler = () => {
    setFormVisibility(true);
  };

  const stopEditingHandler = () => {
    setFormVisibility(false);
  };

  const ExpenseFormComponent = (
    <ExpenseForm
      stopEditingHandler={stopEditingHandler}
      onSaveExpenseData={saveExpenseDataHandler}
    />
  );

  const addNewExpenseButton = (
    <button onClick={startEditingHandler} type="button">
      Add New Expense
    </button>
  );

  return (
    <div className="new-expense">
      {formVisibility ? ExpenseFormComponent : addNewExpenseButton}
    </div>
  );
};

export default NewExpense;
