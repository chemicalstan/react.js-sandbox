import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  // const Expenses = props.items.map((item) => {
  //   return <ExpenseItem {...item} />;
  // });
  // console.log(props.items);
  const [filteredYear, setFilteredYear] = useState("2020");
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
        <ExpenseItem {...props.items[0]} />
        <ExpenseItem {...props.items[1]} />
        <ExpenseItem {...props.items[2]} />
        <ExpenseItem {...props.items[3]} />
      </Card>
    </div>
  );
};

export default Expenses;
