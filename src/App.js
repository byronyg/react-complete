import React from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 5, 3),
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.99,
      date: new Date(2021, 6, 28),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.78,
      date: new Date(2020, 6, 8),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450.78,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <div>
      <NewExpense />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
