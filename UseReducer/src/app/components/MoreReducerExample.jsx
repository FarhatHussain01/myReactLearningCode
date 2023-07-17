import React ,{useReducer} from 'react'
// solve the problem with useReducer firstly i solved this by using useSate .. for that code go to UseState folder 

const reducer= (state , action) =>{
if(action.type === "INCREMENT") return {...state , count : state.count + 1}
if(action.type === "DECREMENT") return {...state , count : state.count - 1}
if(action.type === "toggle-Color") return {...state , color : !state.color}
if(action.type === "newUserInput") return {...state , userInput : action.payload}
if(action.type === "setSubmittedValue") return {...state , submittedValue: action.data }
if(action.type === "SUBMIT") return {...state , userInput : "" }
else {
  return new Error("type is invalid")
}
}

const MoreReducerExample = () => {
  const initialValue = {
    count:0,
    userInput: "",
    color : false ,
    submittedValue: ""
  }
const [state , dispatch] = useReducer(reducer , initialValue)

const styles = {
  backgroundColor : state.color ? '#c2133f' :  '#4d9969'
}

   return (
    <div className='h-screen mt-5 flex items-center justify-center flex-col' style= {styles}>
      <form className = "flex flex-col items-center">
      <input
        className='p-2 rounded-md'
        type="text"
        value={state.userInput}
        onChange={e => dispatch({
          type : "newUserInput",
          payload : (e.target.value) // extra data along with type
          //  term "payload" refers to the data that is transmitted or 
          // carried within a communication or message.
        })
        } 
      />

      <button 
      onClick={(e)=> {
        e.preventDefault()
        dispatch({type:"setSubmittedValue" , data : state.userInput})
        dispatch({type : "SUBMIT"})
        // By calling setUserInput(''), the input field will be cleared when the submit button is clicked, 
      }
       }
      className='p-2 rounded-md bg-white mt-4  min-w-[150px]' >Submit
      </button>
      </form>
     
      <h1 className='mt-3 text-white font-semibold text-3xl'>{state.count}</h1>

      <div className='mt-4'>
        <button
          onClick={() => dispatch({type : "INCREMENT"})}
          className='p-2 rounded-md bg-white mr-2  min-w-[100px]'>
          +
        </button>
        <button
           onClick={() => dispatch({type : "DECREMENT"})}
          className='p-2 rounded-md bg-white mr-2  min-w-[100px]'>
          -
        </button>
        <button
          onClick={() => dispatch({type : "toggle-Color"})}
          className='p-2 rounded-md bg-white mr-2  min-w-[100px]'>
          color
        </button>

      </div>
      {/* <h1 className='mt-5 text-3xl font-bold text-white'>{userInput}</h1> */}
      <h1 className='mt-5 text-3xl font-bold text-white'>{state.submittedValue}</h1>
    </div>
  )
}

export default MoreReducerExample
