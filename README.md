# typescript-pipeline
typescript-pipeline  
基于pipeline任意格式转换操纵语言。
### 基本操作  

#### 点号标识符
```json
输入:
    {"a":{"c":"ccccc"}}
表达式:
    {.}
结果:
    {"a":{"c":"ccccc"}}
```

#### 对象标识符
获取a字段
```json
输入:
    {"a":{"c":"ccccc"},"b":"bbbbbbb","c":"{c.a}","ee":{"a":"aaaaaaaa"}}
表达式:
    {"test":{a}}
结果:
    { test: { c: 'ccccc' } }
```

#### 管道 |
1. pick
 挑选a字段
```json
输入:
    {"a":{"c":"ccccc"},"_b":"_b_b_","$b":"bbbbbbb","c":"{c.a}","ee":{"a":"aaaaaaaa","b":"bbbbbbb","cccc":"哈哈"}}
表达式:
    {.|pick:a}
结果:
    { a: { c: 'ccccc' } }
```

2. omit
排除a字段
```json
输入:
    {"a":{"c":"ccccc"},"b":"_b_b_",}
表达式:
    {.|omit:a}
结果:
    { b: '_b_b_' }
```

3. base64
```json
输入:
    {"a":{"c":"ccccc"},"b":"_b_b_",}
表达式:
    {.|base64}
结果:
    eyJhIjp7ImMiOiJjY2NjYyJ9LCJiIjoiX2JfYl8ifQ==
```

4. value

```json
输入:
    [{"a":"a1"},{"a":"a2"},{"a":"a3"}]
表达式:
    {.|value:a}
结果:
    [ [ 'a1' ], [ 'a2' ], [ 'a3' ] ]
```

5. map

```json
输入:
    [{"a":"a1"},{"a":"a2"},{"a":"a3"}]
表达式:
    {.|map:a}
结果:
    [ 'a1', 'a2', 'a3' ]
```

6. nth

```json
输入:
    [{"a":"a1"},{"a":"a2"},{"a":"a3"}]
表达式:
    {.|nth:2}
结果:
    {"a":"a2"}
```

7. first

```json
输入:
    [{"a":"a1"},{"a":"a2"},{"a":"a3"}]
表达式:
    {.|first:a}
结果:
    {"a":"a1"}
```

8. last

```json
输入:
    [{"a":"a1"},{"a":"a2"},{"a":"a3"}]
表达式:
    {.|last}
结果:
    {"a":"a3"}
```

9. toUrl

```json
输入:
   {"a":"a1","b":"a2","c":"a3"}
表达式:
    {.|toUrl}
结果:
     a=a1&b=a2&c=a3
```
#### 生成任意字符模版

```json
输入:
    {"IDCARD":"34234234","XB":"男性"}
表达式:
    <html><head></head><body><div>编号：{IDCARD}</div><div>性别：{XB}</div></head><body></html>
结果:
    <html><head></head><body><div>编号：34234234</div><div>性别：男性</div></head><body></html>
```

# Todo
#### 数组标识符
1. 索引 `.[2]` 
2. 切片 `.[10:15]` 

```json
输入:
    [{"a":{"c":"ccccc"}},{"b":"bbbbbbb"},{"c":"{c.a}"}]}
表达式:
    {"test":{[0]}}
结果:
    { test: { c: 'ccccc' } }
```