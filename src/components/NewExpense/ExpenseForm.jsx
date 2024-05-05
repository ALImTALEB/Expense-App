import React, { useState } from 'react'

import './ExpenseForm.css'

const ExpenseForm = ({onSaveExpenseData, UnshowFormHandler }) => {
    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')
    const [amount, setAmount] = useState('')


    const titleChangeHandler = (e) => {
        setTitle(e.target.value)

    }

    const amountChangeHandler = (e) => {
        setAmount(e.target.value)
    }

    const dateChangeHandler = (e) => {
        setDate(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault()

        const expenseData = {
            title,
            amount,
            date: new Date(date)
        }
        onSaveExpenseData(expenseData)
        setTitle('')
        setAmount('')
        setDate('')
    }

  return (

    
    <form onSubmit={submitHandler} >
    <div className='new-expense__controls'>

        <div className='new-expense__control' >
        <label>Title</label>
        <input type='text' value={title} onChange={titleChangeHandler} />
        </div>

        <div className='new-expense__control' >
        <label>Amount</label>
        <input type='number' min='0.01' step='0.01' value={amount} onChange={amountChangeHandler} />
        </div>

        <div className='new-expense__control' >
        <label>Date</label>
        <input type='date' value={date} onChange={dateChangeHandler} />
        </div>

    </div>
    <div className='new-expense__actions'>
    <button type="submit" onClick={UnshowFormHandler} >Cancel</button>
    <button type="submit" >add expense</button>
    </div>
    </form>

  )
}

export default ExpenseForm