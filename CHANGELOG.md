# CHANGELOG

## v2.12.2
- 支持配置 `init_urls?: string[]` 当服务器启动时初始化这些url
- 目录自动更新BUG修改
- 支持配置 `authorization?: string` 
  - 提供验证账户密码 格式为 `${name}:${password}`
  - 配置后支持目录页面下新增删除文件(夹)

## v2.12.0
- 支持 `page` 相关配置
  - page_404
  - page_50x
  - page_dir
- 移除 `onDirectory` 配置

## v2.11.0
- 支持指定配置文件 命令 `f2e start -c [.f2econfig.js文件相对路径]`
- build模式对js、css后缀文件 不生效严重BUG修复
- 将服务初始化时机从 *首次接收到访问* 修改为 *启动时打开浏览器之前*

## v2.10.0
- 支持 `onServerCreate` 事件，可以在启动时接受 `server` 参数用于创建 Websocket等服务
- 修改支持 `no_host: true` 配置，端口服务单例化 （默认同一端口支持根据不同的host访问不同的配置服务）
- 添加启动参数判断， 当 `process.argv.includes('start')` 时，启动后打开浏览器

## v2.9.16
- `querystring.parse` 直接解析search参数 `+` 字符处理
- babel 中间件默认sourceMap配置项修改为false

## v2.9.4
- 支持 range 请求， 默认大小 1024 * 1024，支持配置参数 `range_size`
- 增加 ts 描述文档
