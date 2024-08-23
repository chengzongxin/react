import { createSlice } from "@reduxjs/toolkit";

const counterStore = createSlice({
  name: "counter",
  // 初始状态数据
  initialState: {
    count: 0,
  },
  // 修改数据的同步方法
  reducers: {
    increament(state) {
      state.count++;
    },
    decreament(state) {
      state.count--;
    },
    addToNum(state, actions) {
      state.count = actions.payload
    }
  },
});

// 结构处创建action对象的函数 （actionCreator）
const { increament, decreament, addToNum } = counterStore.actions;
// 获取reducer函数
const counterReducer = counterStore.reducer;
// 导出创建action对象的函数和reducer函数
export { increament, decreament, addToNum };
export default counterReducer;
