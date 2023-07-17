import React from 'react'
import jokesData from '@/app/components/JokesData'
import Joke from "@/app/components/Joke"
import Messages from './components/Messages'

const page = () => {
  const jokeElements = jokesData.map(joke => {
    return (
        <Joke 
            key={joke.id}
            setup={joke.setup} 
            punchline={joke.punchline} 
        />
    )
})
return (
    <div>
        {jokeElements}
        <Messages/>
    </div>
)


}



export default page