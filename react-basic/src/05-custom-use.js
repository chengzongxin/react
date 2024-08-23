import { useEffect, useState } from "react";

const useToggle = () => {
  const [value, setValue] = useState(true);

  const toggle = () => {
    setValue(!value);
  };

  return [value, toggle];
};

function App() {
  const [value, toggle] = useToggle();

  useEffect(()=>{
    function onInit() {
      console.log("on init")
    }
    onInit()
  },[])

  return (
    <div>
      {value && <div>this is a toggle control div!</div>}
      <button onClick={toggle}>toggle div</button>
    </div>
  );
}

export default App;
