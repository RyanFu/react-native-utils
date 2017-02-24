# react-native-utils
### 自己使用过程中，慢慢收集的工具，如网络请求，解析等等
- Clone or Download

- import Utils from 'xxx/utils'

1. Get

> `Utils.get(uri, callback)`

2. Post

> ```
> //type默认是application/json，可不填，如需修改再填写
> Utils.post(uri, object, callback, type)
> ```

3. 去除英文括号

> `xxx = Utils.clearBracket(xxx)`

4. 解析普通链接参数

> `let params = Utils.analysisUriQuery(uri)`
