# react-native-utils
### 自己使用过程中，慢慢收集的工具，如网络请求，解析等等
- Clone or Download

- import Utils from 'xxx/utils'

- Get

> `Utils.get(uri, callback)`

- Post

> ```
> //如果解析不出来，可能是服务器解析方式与fetch不合，请将type改为application/x-www-form-urlencode，且body: queryString.stringify(data)
> //type默认是application/json，可不填，如需修改再填写
> Utils.post(uri, object, callback, type)
> ```

- 去除英文括号

> `xxx = Utils.clearBracket(xxx)`

- 解析普通链接参数

> `let params = Utils.analysisUriQuery(uri)`
