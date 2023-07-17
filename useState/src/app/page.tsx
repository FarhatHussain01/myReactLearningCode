'use client'
import React from 'react'
import { useState } from 'react'

// create this project using useSate 

const page = () => {

  const [userInput, setUserInput] = useState("")
  const [count, setCount] = useState(0)
  const [color, setColor] = useState(false)
  const [submittedValue , setSubmittedValue] = useState("")

const styles = {
  backgroundColor : color ? '#c2133f' :  '#4d9969'
}
  return (
    <div className='h-screen mt-5 flex items-center justify-center flex-col' style= {styles}>
      <form className = "flex flex-col items-center">
      <input
        className='p-2 rounded-md'
        type="text"
        value={userInput}
        onChange={e => setUserInput(e.target.value)}
      />

      <button 
      onClick={(e)=> {
        e.preventDefault()
        setSubmittedValue(userInput)
        setUserInput('')
        // By calling setUserInput(''), the input field will be cleared when the submit button is clicked, 
      }
       }
      className='p-2 rounded-md bg-white mt-4  min-w-[150px]' >Submit
      </button>
      </form>
     
      <h1 className='mt-3 text-white font-semibold text-3xl'>{count}</h1>

      <div className='mt-4'>
        <button
          onClick={() => setCount(prev => prev + 1)}
          className='p-2 rounded-md bg-white mr-2  min-w-[100px]'>
          +
        </button>
        <button
          onClick={() => setCount(prev => prev - 1)}
          className='p-2 rounded-md bg-white mr-2  min-w-[100px]'>
          -
        </button>
        <button
          onClick={() => setColor(prev => !prev)}
          className='p-2 rounded-md bg-white mr-2  min-w-[100px]'>
          color
        </button>

      </div>
      {/* <h1 className='mt-5 text-3xl font-bold text-white'>{userInput}</h1> */}
      <h1 className='mt-5 text-3xl font-bold text-white'>{submittedValue}</h1>
    </div>
  )
}

export default page