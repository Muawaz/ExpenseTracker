import ExpenseDetails from "./expense-tracker/components/ExpenseDetails";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import { useState } from "react";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");

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

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(catergory) => setSelectedCategory(catergory)}
        />
      </div>

      <ExpenseDetails
        expenseList={visibleExpenses}
        onEdit={(id) => console.log("edited", id)}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </div>
  );
}

export default App;
