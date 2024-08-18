import ExpenseDetails from "./expense-tracker/components/ExpenseDetails";
import { useState } from "react";

function App() {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      description: "milk",
      amount: 5,
      category: "Groceries",
    },
    {
      id: 2,
      description: "milk",
      amount: 5,
      category: "Groceries",
    },
  ]);

  return (
    <div>
      <ExpenseDetails
        expenseList={expenses}
        onEdit={(id) => console.log("edited", id)}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </div>
  );
}

export default App;
