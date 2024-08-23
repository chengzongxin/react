import { useState } from "react";

function App() {
  const [value, setValue] = useState(true);

  const toggle = () => {
    setValue(!value);
  };

  return (
    <div>
      {value && <div>this is a toggle control div!</div>}
      <button onClick={toggle}>toggle div</button>
    </div>
  );
}

export default App;
