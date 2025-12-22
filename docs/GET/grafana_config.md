# /api/grafana/config

[← Back to Index](../README.md)

**Methods:** GET
**Status Codes:** 200
**Call Count:** 1

## Table of Contents

- [Response Structure](#response-structure)
- [Example](#example)

## Response Structure

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
referer: https://apps.alsoenergy.com/powertrack/H511568/administration/config
```

**Response:**

```json
{
  "appName": 47,
  "authorization": "Basic aW5nZXN0OnczZ2xiSXgzRllGMUdwemlXVk0x"
}
```

[Return to top](#apigrafanaconfig)

