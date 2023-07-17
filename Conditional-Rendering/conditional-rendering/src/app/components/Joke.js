import React from 'react'

const Joke = (props) => {
    const [isShown, setIsShown] = React.useState(false)
    /**
     * Challenge:
     * - Only display the punchline paragraph if `isShown` is true
     */
    function toggleShown(){
        setIsShown(prevShown => !prevShown)
    }
    return (
        <div>
            {props.setup && <h3>{props.setup}</h3>}
            {isShown && <p>{props.punchline}</p>} 
            {/* if isShown value is true it shows punchline else not */}

            {/* if punchline is showed button description is hide punchline */}
            <button onClick={toggleShown}>
           {isShown ? "Hide Punchline" : "Show Punchline" } 
            </button> 

            {/* <button onClick={toggleShown}>Show Punchline</button> */}
            <hr />
        </div>
    )
}

export default Joke