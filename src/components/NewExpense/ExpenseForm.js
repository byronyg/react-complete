import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState(""); //destructure the state
  const [amountEntered, setAmountEntered] = useState(""); //initialize all states with a string
  const [dateSelected, setDateSelected] = useState("");

  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });

  const titleInputHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput({
    //   ...userInput, //spreading the object
    //   enteredTitle: event.target.value,
    // });
  };

  const amountInputHandler = (event) => {
    setAmountEntered(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
  };

  const dateChangeHandler = (event) => {
    setDateSelected(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: amountEntered,
      date: new Date(dateSelected),
    };
    console.log(expenseData);
    setEnteredTitle("");
    setAmountEntered("");
    setDateSelected("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleInputHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={amountEntered}
            onChange={amountInputHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2020-01-01"
            max="2022-12-31"
            value={dateSelected}
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-expense__actoions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
