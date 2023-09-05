import React, { useState} from 'react'

export const TodoForm = () => {
    const [value, setValue] = useState("")
    const handleSubmit = e => {
      e.preventDefault();
      console.log(value)

    }
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
      <input type='text' classname='todo-input' placeholder='what is the task?' onChange=
      {(e) => setValue(e.target.value)}/>
      <button type='submit' className='todo-btn'>add
      task</button>
    </form>
  )
}
