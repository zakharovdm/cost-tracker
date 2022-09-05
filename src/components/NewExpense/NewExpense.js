import ExpenseForm from "./ExpenseForm";
import { useState } from "react";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setEditing] = useState(false);

  const onSaveExpenseDataHandler = (enteredData) => {
    const expenseData = {
      ...enteredData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
    setEditing(false);
  };

  const startEditingHandler = () => {
    setEditing(true);
  };

  const stopEditingHandler = () => {
    setEditing(false);
  };

  let newExpenseContent = (
    <button type="button" onClick={startEditingHandler}>
      Add new expense
    </button>
  );

  if (isEditing) {
    newExpenseContent = (
      <ExpenseForm
        onCancel={stopEditingHandler}
        onSaveExpenseData={onSaveExpenseDataHandler}
      />
    );
  }

  return <div className="new-expense">{newExpenseContent}</div>;
};

export default NewExpense;
