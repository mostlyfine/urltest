# Setup

## Use Docker

```
docker pull node:10-slim
./docker yarn install
```

# Quickstart

```
./docker yarn test
```


## watch

```
./docker yarn run watch
```

# Example config.json

```json
{
  "headers": {                                        // optional (request header)
    "Fastly-Debug": 1
  },
  "targets": [
    {
      "url": "https://www.yahoo.co.jp",               // required
      "status": 200,                                  // required (expect http status)
      "contain": "Yahoo! JAPAN",                      // optional (expect content regexp match)
      "headers": {                                    // optional (expect response header match)
        "content-type": ".*html.*UTF-8"
      }
    }
  ]
}
```
