import React from "react"

export default function App() {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false
    })
    
    let starIcon = contact.isFavorite ? "star-filled.png" : "star-empty.png"
    
    function toggleFavorite() {
        setContact(prevContact => {
            return { // {} brackets is bcz we return the object here

                // firstName: "John",
                // lastName: "Doe",
                // phone: "+1 (719) 555-1212",
                // email: "itsmyrealname@example.com",
                // isFavorite: true,   
                // isFavorite: !prevContact.isFavorite
                ...prevContact,  // using spread operator to update state else over all object becomes update i
                // if we dont use this
                isFavorite: !prevContact.isFavorite
            }
        })
    }
    
    return (
        <main>
            <article className="card">
                <img src="./images/user.png" className="card--image" />
                <div className="card--info">
                    <img 
                        src={`../images/${starIcon}`} 
                        className="card--favorite"
                        onClick={toggleFavorite}
                    />
                    <h2 className="card--name">
                        {contact.firstName} {contact.lastName}
                    </h2>
                    <p className="card--contact">{contact.phone}</p>
                    <p className="card--contact">{contact.email}</p>
                </div>
                
            </article>
        </main>
    )
}
