import StateProvider from "./Context/State";
import Router from "./Components/Router";

function App() {
  return (
    <StateProvider>
      <Router />
    </StateProvider>
  );
}

export default App;
