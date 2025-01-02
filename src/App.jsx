import { useState } from "react"

function App() {
  // const us = useState(0)
  // const counter = us[0]
  // const setCounter = us[1]
  const [counter, setCounter] = useState(0)
  const name = "Monkey D Luffy"
  const isLogged = true
  const myClass = "text-2xl font-bold text-green-700"
  const crewMembers = ["Mustafaa","Zoro", "Sanji", "Jinbe", "Robin", "Franky","Brook", "Chopper", "Nami", "Ussop"]
  const handleClick = () => {
    setCounter(counter + 1)
  }
  // console.log(counter)

  return (
    <>
      <div className="flex justify-between item-center">
        <h1 className={myClass}>{isLogged == true ? name : 'Anonymous'}</h1>
        {/* <p>Kaizoku oni <br /><br />Crew Members</p>

        {
          crewMembers.map((crewMembers, index) => (
            <p key={index}>{crewMembers}</p>
          ))
        } */}
        <h1 className = "text-2xl">Counter : {counter}</h1>
        <button 
        onClick = {handleClick}
        className = "bg-green-500 hover:bg-green-700 hover:border-2 hover:border-black py-2 px-4 rounded text-white font-bold">+</button>
      </div>
    </>
  )
}

export default App
