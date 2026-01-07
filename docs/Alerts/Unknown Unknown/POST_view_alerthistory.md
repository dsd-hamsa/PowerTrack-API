<a id="top"></a>
# /api/view/alerthistory

[← Back to Index](../logs.md)

**Methods:** POST  
**Status Codes:** 200, 200, 200, 200, 200, 200  

## Table of Contents

- [Payload Structure](#payload-structure)
- [Alert Type: General](#alert-type-general)
- [Example](#example)

## Payload Structure

```json
{
  "type": "object",
  "properties": {
    "from": {
      "type": "string"
    },
    "key": {
      "type": "string"
    },
    "offset": {
      "type": "number"
    },
    "to": {
      "type": "string"
    }
  }
}
```

[Return to top](#top)

## Alert Type: General

```json
{
  "type": "object",
  "properties": {}
}
```

[Return to top](#top)

## Example

**Request:**

```http
POST /api/view/alerthistory?lastChanged=1900-01-01T00:00:00.000Z
Accept: application/json
Content-Type: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
referer: https://apps.alsoenergy.com/powertrack/H511568/operations/alerts
```

**Payload:**

```json
{
  "from": "2026-01-07",
  "key": "H511568",
  "offset": 480,
  "to": "2026-01-07"
}
```

**Response:**

```json
{
  "key": "H511568",
  "lastChanged": "1900-01-01T00:00:00Z",
  "list": []
}
```

[Return to top](#top)

