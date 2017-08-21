# table组件

## 基于vue视觉组件

主要配合[pcadmin](https://github.com/ksc-fx/pcadmin)使用。
使用方法：
```
npm install pcadmin-pagination
```

```javascript
import pagination from 'pcadmin-pagination';
```

total: Number  必须 总条数
current: Number  可选 当前选中页数。（默认1，建议添加，使用sync）（支持current.sync，子元素修改父级元素）
showNumber: showNumber  可选 下面页码数量，（默认7个），
pageSize: Number  可选 每页显示多少条（默认10）
changePage: Function 必须  回调函数，返回选择的页码
-->


### Data
| 参数      | 说明          | 类型      | 是否必选                           | 可选值  | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |-------- |
| total | 数据总条数 | Number | 必选 | — | — |
| current | 当前选中页数(支持current.sync，子元素修改父级元素) | Number | - | - | 1 |
| showNumber | 下面页码数量 | Number | — | — | 7 |
| pageSize | 每页显示多少条 | Number | — |  - | 10 |


### Events(对应headData的所需要的solt)
| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| changePage | 回调函数 | 返回选择的页码 |