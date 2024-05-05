import React, {useState} from 'react'
import ExpenseForm from './ExpenseForm'

import './NewExpense.css'

const NewExpense = ({onAddExpense}) => {

    const [showForm, setShowForm] = useState(false)

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        onAddExpense(expenseData)
        setShowForm(false)
    }

    const showFormHandler = () => {
        setShowForm(true)
    }
    const UnshowFormHandler = () => {
        setShowForm(false)
    }

  return (
    <div className='new-expense' >
    {
        !showForm &&
        <button onClick={showFormHandler} >Add New Expense</button>
    }
    
    {
        showForm && <ExpenseForm onCancelClick={UnshowFormHandler} onSaveExpenseData={saveExpenseDataHandler} />
       
    }
        
        
    </div>
  )
}

export default NewExpense