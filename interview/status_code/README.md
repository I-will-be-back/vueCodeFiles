HTTP协议 req res
状态码: HTTP响应(response)中包含状态码
浏览器 代理 proxy
1XX 请求正在处理, 继续等待
2XX 请求已经成功处理掉了 200 OK
3XX 重定向 Location
4XX 客户端出现错误 地址错了 未授权限 受限资源 404 not found
5XX 服务器端出现错误

301 永久跳转
用户 www.xiaomi.com www.mi.com
告诉蜘蛛
www.xiaomi.com/a.html 被废弃了 发301 应去 www.mi.com/a.html
3XX 区别 永久跳转, 告诉蜘蛛把记录更新掉
301 可以在改变状态码, 不变, 来展示理解
http://localhost:3000 301 永久跳转,
再次访问,  浏览器有缓存, 不需要再走服务器
302 临时跳转， 不会告知蜘蛛 或者在前端缓存