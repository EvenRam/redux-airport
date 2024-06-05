import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'


function App() {

    // * Local state for the airlines. (To hold the airline before we send in our dispatch with handleSubmit)

  const [airline,setAirline] = useState('')

    // * Getting the value, useSelector hook
const planeList = useSelector(store => store.planeList)

// * useDispatch to set the value of state, needs to be initialized
  // Dispatch, will communicate with all reducers.
  // Actions distinguish wich reducers should react.

  const dispatch = useDispatch()

  let handleSubmit = (event) => { 
    event.preventDefault()
    console.log("handleSubmit() is activated! ... adding...", airline)
  

  // will make a dispatch to add a new airline

  dispatch({
    type: "ADD_AIRLINE",
    payload: airline
  })

  // Need to clear the form
    setAirline('')
}

  return (
    <>
    <div>
      <h1>Redux Airport</h1>
      <form onSubmit={handleSubmit}>
      <input placeholder='Airline Name' 
      value={airline}
      onChange={event => setAirline(event.target.value)}/>
      <button type='submit' >Add Airline</button>
       </form>
      <table>{/* Airlines should be listed here */}
      {planeList.map(item => <li key={item}>{item}</li>)}

      </table>
     
    </div>
    </>
  );
}

export default App;
