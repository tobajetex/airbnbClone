import React from "react"
import Navbar from "./component/navbar"
import Main from "./component/main"
import Cards from "./component/cards"
import data from "./data"

export default function App(){
    const northAmerica = data.filter(function(dataObj){
        return dataObj.Region ==="North America"
    })
     const europe = data.filter(function(dataObj){
        return dataObj.Region ==="Europe"
    })
    const africa = data.filter(function(dataObj){
        return dataObj.Region ==="Africa"
    })
    const americaCardsElement = northAmerica.map(function(item){
        return <Cards
                {...item} />
    })
    const europeCardsElement = europe.map(function(item){
        return <Cards
                {...item} />
    })
    
    const africaCardsElement = africa.map(function(item){
        return <Cards
                {...item} />
    })
    
   
console.log(africa)
    return (
        <div>
        <Navbar />
        <Main />
        <div className="All--cards--container">
        <section className="cards--layout--container">
        <h1>North America Region</h1>
        <div className="cards--layout">{americaCardsElement}</div>
        </section>
        <section className="cards--layout--container">
        <h1>European Region</h1>
        <div className="cards--layout">
         {europeCardsElement}
        </div>
        </section>
        <section className="cards--layout--container">
        <h1>African Region</h1>
        <div className="cards--layout">{africaCardsElement}</div>
        </section>
        </div>
        </div>
    )
}