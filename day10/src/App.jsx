import { useState } from 'react'

import './App.css'
import Components from './Components/Task3'
import Component from './Components/task2'
import Counter from './Components/Task4'
import UserProfile from './Components/Task5'
import MyComponent from './Components/Task6'
import Task7 from './Components/Task7'
import Counters from './Components/Task8'
import Task9 from './Components/Task9'
import Task10 from './Components/Task10'
import Users from './Components/Task11'
import DelayedApiFetching from './Components/Task12'
import ButtonClickApiFetching from './Components/Task13'
import Mini1 from './Components/Mini1'
import Mini2 from './Components/Mini2'
import Timer from './Components/Mini3'
import Mini4 from './Components/Mini4'


function App() {
   const [isVisible, setIsVisible] = useState(true);
  
    const toggleVisibility = () => {
      setIsVisible(!isVisible);
    };
  
 
  return (
    <>
 <Component/>
  <Components/>
  <Counter/>
  <UserProfile/>
   <div>
      {isVisible && <MyComponent/>}
      <button onClick={toggleVisibility}>
        {isVisible ? "Unmount" : "Mount"}
      </button>
    </div>
    <Task7/>
    <Counters/>
    <Task9/>
    <Task10/>
    <Users/>
    <DelayedApiFetching/>
    <ButtonClickApiFetching/>
    <Mini1/>
    <Mini2/>
    <Timer/>
    <Mini4/>
    </>
  )
}

export default App
