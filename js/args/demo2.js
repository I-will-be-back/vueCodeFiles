// userObj 一个参数带来了新的问题,
// 代码的函数编写者, user 里面的key要去了解
// 只需要用一部分, 解构可以帮助, 提高代码的可读性
function information({name, age, height, sex}) {
  console.log(name, age, height, sex);
}

const user = {name: '杨鹏', age: 22, height: 180, sex: '男', hobbies: ['打游戏']};
information(user);