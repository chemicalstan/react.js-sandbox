import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpenseChart";

const Expenses = (props) => {
  // Set default filter to null
  const [filteredYear, setFilteredYear] = useState("");

  // Set new filter year
  const newFilterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  // Apply filter if any
  const filteredExpenseItems = filteredYear
    ? props.items.filter(
        (item) => item.date.getFullYear().toString() === filteredYear
      )
    : props.items;

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onFilterChange={newFilterHandler}
        />
        <ExpenseChart expenses={filteredExpenseItems} />

        <ExpensesList expenseItems={filteredExpenseItems} />
      </Card>
    </div>
  );
};

export default Expenses;
