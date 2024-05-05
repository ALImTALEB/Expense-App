import React from 'react'
import ExpenseItem from './ExpenseItem'
import './ExpensesList.css'

const ExpensesList = ({items}) => {

    

  return (

    <ul className="expenses-list">

 { items.length === 0 ? <h2 className='expenses-list__fallback'>No expenses found.</h2> 
 :
 items.map((item, i) => 
    
    <ExpenseItem
  key={i}
  title={item.title} 
  amount={item.amount}
  date={item.date}
   />
   )
 }
    </ul>

   
  )
}

export default ExpensesList