import React from 'react'
import { useState } from 'react'
import Card from '../UI/Card'
import ExpenseFilter from './ExpenseFilter'
import './Expenses.css'
import ExpensesChart from './ExpensesChart'
import ExpensesList from './ExpensesList'


const Expenses = ({items}) => {

  const [ filteredYear, setFilteredYear ] = useState('2024')

  const addExpenseYear = (selectedYear) => {
    
    setFilteredYear(selectedYear)
  }

  const filteredExpenses = items.filter( (item, i) => {
    return item.date.getFullYear().toString() === filteredYear
  } )
   
  return (
  
   
    <Card className='expenses' >
    <ExpenseFilter selected={filteredYear} onYearHandler={addExpenseYear} />
    <ExpensesChart expenses={filteredExpenses} />
    <ExpensesList items={filteredExpenses} />



    </Card>
 
  )
}

export default Expenses