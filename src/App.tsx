import ExpenseTracker from "./expense-tracker/components/ExpenseTracker";
import ExpenseDetails from "./expense-tracker/components/ExpenseDetails";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import EditExpenseForm from "./expense-tracker/components/EditExpenseForm";
import { useState } from "react";
import categories from "./expense-tracker/categories";
import ExpandableDescription from "./expense-tracker/components/ExpandableDescription";

interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string;
}

function App() {
  const [editingExpense, setEditingExpense] = useState<Expense | null>(null);

  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      description: "bread",
      amount: 8,
      category: "Groceries",
    },
    {
      id: 2,
      description: "movies",
      amount: 20,
      category: "Entertainment",
    },
    {
      id: 3,
      description: "fuel",
      amount: 15,
      category: "Utilities",
    },
    {
      id: 4,
      description:
        "An Expandable Text component provides  features like, allowing users to toggle between viewing more or less content with a simple click of a button. Initially, a portion of the text is displayed, and the user can click View More to reveal the full content. Once expanded, the button changes to View Less, enabling the user to collapse the text back to its original state. This functionality is ideal for displaying large blocks of text in a concise and user-friendly manner, enhancing the overall user experience by reducing visual clutter.",
      amount: 15,
      category: "Entertainment",
    },
  ]);

  const handleEdit = (expense: Expense) => {
    setEditingExpense(expense);
  };

  const handleSave = (updatedExpense: Expense) => {
    setExpenses(
      expenses.map((e) => (e.id === updatedExpense.id ? updatedExpense : e))
    );
    setEditingExpense(null);
  };

  const handleCancel = () => {
    setEditingExpense(null);
  };

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <div>
      {editingExpense ? (
        <EditExpenseForm
          expense={editingExpense}
          onSave={handleSave}
          onCancel={handleCancel}
        />
      ) : (
        <>
          <ExpenseTracker
            onSubmit={(newexpense) =>
              setExpenses([
                ...expenses,
                { ...newexpense, id: expenses.length + 1 },
              ])
            }
          />
          <div className="mb-3">
            <ExpenseFilter
              onSelectCategory={(category) => setSelectedCategory(category)}
            />
          </div>
          <ExpenseDetails
            expenseList={visibleExpenses}
            onEdit={handleEdit}
            onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
          />
        </>
      )}
    </div>
  );
}

export default App;
