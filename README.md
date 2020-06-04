# React-Testing-Template

React 测试模板, 基于:

- [x] Jest
- [x] Enzyme
- [ ] Puppeteer

## 已实现测试用例

> 均以函数式组件进行测试

### 基本React UI测试

- [x] 以`map`或类似的方式, 基于可迭代对象遍历生成DOM.
- [ ] 快照(`snapshot`)测试
- [ ] ...

### 基本React组件/事件

- [x] 在初始化时调用来自props的普通函数
- [x] 在初始化时调用来自props的异步函数
- [x] props中的属性参与组件DOM渲染
- [ ] props中的方法参与组件DOM渲染(如三目运算符)
- [x] 点击来触发外部普通函数
- [ ] 输入来触发外部普通函数
- [x] 点击来触发外部异步函数
- [ ] 输入来触发外部异步函数
- [x] 点击来触发内部定义的函数
- [ ] 输入来触发内部定义的函数

### React Hooks 测试

- [x] 点击触发`useState`, 并造成DOM更新
- [ ] useEffect副作用正确调用, 实现细节(`Implemention Details`)是否应该被测试到?
- [ ] useLayoutEffect
- [ ] useContext
- [ ] useRef
- [ ] useReducer

### 自定义Hooks测试

- [ ] useCounter
- [ ] useAxios
