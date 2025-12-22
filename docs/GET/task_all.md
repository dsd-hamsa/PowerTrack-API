# /api/task/all

[← Back to Index](../logs.md)

**Methods:** GET  
**Status Codes:** 200  

## Table of Contents

- [Response Structure](#response-structure)
- [Example](#example)

## Response Structure

```json
{
  "type": "object",
  "properties": {
    "key": {
      "type": "string"
    },
    "lastChanged": {
      "type": "string"
    },
    "tasks": {
      "type": "array",
      "items": {
        "type": "unknown"
      }
    }
  }
}
```

[Return to top](#apitaskall)

## Example

**Request:**

```http
GET /api/task/all?lastChanged=2025-12-22T21:59:52Z
Accept: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
referer: https://apps.alsoenergy.com/powertrack/S68143/administration/hardware
```

**Response:**

```json
{
  "key": "all",
  "lastChanged": "2025-12-22T22:00:51Z",
  "tasks": []
}
```

[Return to top](#apitaskall)

