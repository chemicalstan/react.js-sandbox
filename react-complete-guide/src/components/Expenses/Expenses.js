import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("");
  const filteredItems = filteredYear
    ? props.items.filter(
        (item) => item.date.getFullYear().toString() === filteredYear
      )
    : props.items;
  const expenseItems = filteredItems.length ? (
    filteredItems.map((item) => <ExpenseItem key={item.id} {...item} />)
  ) : (
    <h3>No expenses found</h3>
  );
  const newFilterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onFilterChange={newFilterHandler}
        />
        {expenseItems}
      </Card>
    </div>
  );
};

export default Expenses;
