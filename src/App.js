import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const initialState = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: 'e5',
    title: 'Piscine Visa',
    amount: 200,
    date: new Date(2024, 0, 1),
  },{
    id: 'e6',
    title: 'Plane ticket to Germany',
    amount: 300,
    date: new Date(2024, 0, 14),
  },
  {
    id: 'e7',
    title: 'Youth hostel cost',
    amount: 450,
    date: new Date(2024, 0, 15),
  },
];

function App() {

  const [expenses, setExpenses] = useState(initialState)

  const addExpenseHandler = (expense) => {
    
    setExpenses( prevExpenses => {
      return [expense, ...expenses]
    } )
    
  }
 
  return (
   <>
   <NewExpense onAddExpense={addExpenseHandler} />
<Expenses items={expenses} />
   </>
    
   
  );
}

export default App;
