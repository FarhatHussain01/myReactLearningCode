import React from "react"

export default function App() {
    /**
     * Challenge: 
     * Add functionality to the minus button
     */
    const [count, setCount] = React.useState(0)
    
    function add() {

        // setCount(function(oldValue) { // this is the best practice to add a callback function to update state
        //     return oldValue + 1
        // })

        //  using arror function

        setCount(prevCount => prevCount + 1)

        // setCount(count + 1) // this is also allowed
    }
    
      function sub() {
          
          if(count > 0){
            setCount(prevCount => prevCount - 1)
                // setCount(count - 1)
          }
          else {
              console.log("do Nothing")
          }
      
    }
    
    return (
        <div className="counter">
            <button className="counter--minus" onClick={sub}>–</button>
            <div className="counter--count">
                <h1>{count}</h1>
            </div>
            <button className="counter--plus" onClick={add}>+</button>
        </div>
    )
}
