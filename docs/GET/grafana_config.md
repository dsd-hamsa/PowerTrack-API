# /api/grafana/config

[← Back to Index](../logs.md)

**Methods:** GET  
**Status Codes:** 200, 200, 200  

## Table of Contents

- [General](#general)
- [Example](#example)

## General

```json
{
  "type": "object",
  "properties": {
    "appName": {
      "type": "number"
    },
    "authorization": {
      "type": "string"
    }
  }
}
```

[Return to top](#apigrafanaconfig)

## Example

**Request:**

```http
GET /api/grafana/config
Accept: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
referer: https://apps.alsoenergy.com/powertrack/C8458/overview/sites
```

**Response:**

```json
{
  "appName": 47,
  "authorization": "Basic aW5nZXN0OnczZ2xiSXgzRllGMUdwemlXVk0x"
}
```

[Return to top](#apigrafanaconfig)

