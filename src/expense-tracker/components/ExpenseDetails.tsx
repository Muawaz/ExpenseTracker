import React from "react";

import ExpandableDescription from "./ExpandableDescription";

interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string;
}

interface Props {
  expenseList: Expense[];
  onEdit: (Expense: Expense) => void;
  onDelete: (id: number) => void;
}

const ExpenseDetails = ({ expenseList, onEdit, onDelete }: Props) => {
  if (expenseList.length === 0) return null;
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Description</th>
          <th>Amount</th>
          <th>Category</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {expenseList.map((expense) => (
          <tr key={expense.id}>
            <td>
              <ExpandableDescription>
                {expense.description}
              </ExpandableDescription>
            </td>
            <td>{expense.amount}</td>
            <td>{expense.category}</td>
            <td>
              <button
                onClick={(e) => onEdit(expense)}
                className="btn btn-outline-danger"
              >
                Edit
              </button>
            </td>
            <td>
              <button
                onClick={() => onDelete(expense.id)}
                className="btn btn-outline-danger"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td>Total</td>
          <td>
            $
            {expenseList
              .reduce((acc, expense) => expense.amount + acc, 0)
              .toFixed(2)}
          </td>
          <td></td>
          <td></td>
        </tr>
      </tfoot>
    </table>
  );
};

export default ExpenseDetails;
