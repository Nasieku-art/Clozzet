import StateProvider from "./Context/state"
import Router from "./Components/Router"

function App() {

  return (
    <StateProvider>
    <Router/>
   </StateProvider>
  )
}

export default App
