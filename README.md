# typescript-pipeline
typescript-pipeline

```json
input:
    {"a":{"c":"ccccc"},"b":"bbbbbbb","c":"{c.a}","ee":{"a":"aaaaaaaa"}}
exp:
    {"test":{a}}
result:
    { test: { c: 'ccccc' } }
```