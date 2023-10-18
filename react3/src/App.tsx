import Counter from "./components/Counter";
import StyleChanger from "./components/StyleChanger";
import Users from "./components/Users";
import AddUsers from "./components/AddUser";

function App() {
  return (
    <div className="container">
      <Counter />
      <StyleChanger />
      {/* <AddUsers /> */}
      <Users />
    </div>
  );
}

export default App;
