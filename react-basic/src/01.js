let count = 1020
function getName(){
  return "Jack"
}

function countAdd() {
  count++
  console.log(count);
  console.log("count");
}


function App() {
  return (
    <div className="App">
      this is my first app, hahahaha!
      {/* {string} */}
      {' tgus us a message'}
      <div>{count}</div>
      {getName()}
      {'111'}
      {'222'}
      {getName()}
      <Button></Button>
      <Button></Button>
    </div>
  );
}

export default App;
