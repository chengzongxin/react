import { useDispatch, useSelector } from "react-redux";
// 导入创建action对象方法
import { increament, decreament, addToNum } from "./store/module/counterStore";

function App() {

  const {count } = useSelector(state => state.counter)
  // 得到dispatch函数
  const dispatch = useDispatch()

  return (
    <div>
      hello cheng!!!
      {/* 调用dispatch提交action对象 */}
      <button onClick={() => dispatch(decreament())}>-</button>
      <span>{count}</span>
      <button onClick={() => dispatch(increament())}>+</button>
      <button onClick={() => dispatch(addToNum(100))}>add to 100</button>
      <button onClick={() => dispatch(addToNum(10000))}>add to 10000</button>
    </div>
  );
}

export default App;
