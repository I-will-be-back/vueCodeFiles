- 正则知识点
  贪婪匹配 [0-9]+
  +出现一次或多次
  *出现零次或多次
  ^的第二种用法
  [^>]
- 函数参数
  写一个函数, 返回最大的两个数 
  [2, 6, 'a'] [8, 4, 6] [10]
  返回[10, 8]
  1. Math.max 最前面的两个求最大值
  2. ... spread 展开一个数组
  3. n个数?  slice方法

- args
  1. map + spread 运算符
  2. 闭包 遍历每一项(map), 取前n个(slice+n) 求最大值(Math.max)

  map callback
  取前两个 + 求最大值 作为一个功能封装起来
  Math.max.slice(n)
