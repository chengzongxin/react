import _ from "lodash";
const list = ["412", "132", "355"];

const obj = [
  {
    id: 1,
    name: "eren",
    age: 19,
  },
  {
    id: 2,
    name: "mikasa",
    age: 20,
  },
  {
    id: 3,
    name: "ermin",
    age: 17,
  },
];
function App() {
  return (
    <div className="App">
      this is my first app, hahahaha!!!!
      <div></div>
      <ul>
        {_.orderBy(list).map((v) => (
          <li>{v}</li>
        ))}
      </ul>
      <ul>
        {_.orderBy(obj,'age','asc').map((v) => (
          <li>{JSON.stringify(v)}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
