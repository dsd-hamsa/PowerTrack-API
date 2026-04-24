<a id="top"></a>
# /api/view/reportconfigs

[← Back to Index](../logs.md)

**Methods:** POST  
**Status Codes:** 401, 200, 200  

## Table of Contents

- [Payload Structure](#payload-structure)
- [General](#general)
- [Example](#example)

## Payload Structure

```json
{
  "type": "object",
  "properties": {
    "filter": {
      "type": "string"
    },
    "key": {
      "type": "string"
    }
  }
}
```

[Return to top](#top)

## General

```json
{
  "type": "object",
  "properties": {
    "isMore": {
      "type": "boolean"
    },
    "key": {
      "type": "string"
    },
    "lastChanged": {
      "type": "string"
    },
    "list": {
      "type": "array",
      "items": {
        "type": "unknown"
      }
    }
  }
}
```

[Return to top](#top)

## Example

**Request:**

```http
POST /api/view/reportconfigs?lastChanged=1900-01-01T00:00:00Z
Accept: application/json
Content-Type: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: 05fc89
referer: https://apps.alsoenergy.com/powertrack/C25709/reports/reportconfigs
```

**Payload:**

```json
{
  "filter": "",
  "key": "C25709"
}
```

[Return to top](#top)

