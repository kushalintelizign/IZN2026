
import './App.css'

import UserData from './feature/userdata/UserData'
import UserComponent from './feature/users/UserComponents'
import Counter from './feature/counter/Counter'
import CounterDisplay from './components/CounterDisplay'
import CounterControl from './components/CounterControl'
import AuthControl from './components/AuthControl'



function App() {


  return (
    <>

      <h1>Welcome to Redux React App</h1>
      {/* <Counter/> */}
      {/* <UserData/> */}
      <UserComponent/>
{/* <CounterDisplay/>
<CounterControl/>
<div style={{marginTop : "20px"}}>
  <AuthControl/>
</div> */}


    </>
  )
}

export default App
