import { useState } from 'react'
import './App.css'

function NameList(){
  const [list, setList] = useState(["Jack", "Jill", "John"]);
  const [name, setName] = useState("");

  const onAddName= () => {
    // we do not use list.push(name) as using setList after that the same reference to 
    // list is returned, hence React does not update the dom
    // so we will use a new copy of the array and add the name to it 
    // list.push(name);
    // setList(list);
    setList([...list, name]);
    setName("");
  }

  return (<div>
    <ul>
      {list.map((name) => (
        <li key={name}>{name}</li>
      ))}
    </ul>
    <input type='text' 
    value={name}
    onChange={(e) => setName(e.target.value)}
    />
    <button onClick={onAddName}>Click Me</button>
  </div>);
}
function Counter() {
  const [count, setCount] = useState(10);

  function addOne(){
    setCount(count + 1);
  }
  return (<div className="counter">
    <button onClick={addOne}>Count = {count}</button>
  </div>);
}
function App(){
  return(
    <div>
      <Counter/>
      <NameList/>
    </div>
  );
}
export default App;
