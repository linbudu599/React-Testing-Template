# React-Testing-Template

[![GitHub license](https://img.shields.io/github/license/linbudu599/React-Testing-Template)](https://github.com/linbudu599/React-Testing-Template/blob/master/LICENSE)
![stars](https://img.shields.io/github/stars/linbudu599/React-Testing-Template)
![David](https://img.shields.io/david/dev/linbudu599/React-Testing-Template)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/linbudu599/React-Testing-Template)
![Travis (.com)](https://img.shields.io/travis/com/linbudu599/React-Testing-Template)
![codecov](https://codecov.io/gh/linbudu599/React-Testing-Template/branch/master/graph/badge.svg)

React 测试模板, 基于:

- [x] Jest
- [x] Enzyme
- [ ] Puppeteer

## 已实现测试用例

> 均以函数式组件进行测试

### 基本 React UI 测试

- [x] 以`map`或类似的方式, 基于可迭代对象遍历生成 DOM.
- [ ] 快照(`snapshot`)测试
- [ ] ~~在崩溃时正确的显示错误界面~~
- [ ] ...

### 基本 React 组件/事件

- [x] 在初始化时调用来自 props 的普通函数
- [x] 在初始化时调用来自 props 的异步函数
- [x] props 中的属性参与组件 DOM 渲染
- [x] props 中的方法参与组件 DOM 渲染(如三目运算符)
- [x] 点击来触发外部普通函数
- [ ] 输入来触发外部普通函数
- [x] 点击来触发外部异步函数
- [ ] 输入来触发外部异步函数
- [x] 点击来触发内部定义的函数
- [ ] 输入来触发内部定义的函数
- [x] 手动设置传入的属性
- [x] 手动设置传入的方法

### React Hooks 测试

- [x] 点击触发`useState`, 并造成 DOM 更新
- [ ] useEffect 副作用正确调用, 实现细节(`Implemention Details`)是否应该被测试到?
- [ ] useLayoutEffect
- [ ] useContext
- [ ] useRef
- [ ] useReducer

### 自定义 Hooks 测试

- [ ] useCounter
- [ ] useAxios
