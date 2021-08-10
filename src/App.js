import logo from "./logo.svg";
import "./App.css";
import Profile from "./Profile";
import HookCounter from "./HookCounter";

function App() {
  return (
    <div>
      <Profile username="jeongwonHan" name="한정원" />
      <HookCounter />
    </div>
  );
}

export default App;
