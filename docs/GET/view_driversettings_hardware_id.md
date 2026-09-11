<a id="top"></a>
# /api/view/driversettings/{hardware_id}

[← Back to Index](../logs.md)

**Methods:** GET  
**Status Codes:** 200  

## Table of Contents

- [General](#general)
- [Example](#example)

## General

```json
{
  "type": "object",
  "properties": {
    "driverSettings": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string"
        },
        "type": {
          "type": "number"
        },
        "value": {
          "type": "string"
        }
      }
    },
    "key": {
      "type": "string"
    },
    "lastChanged": {
      "type": "string"
    }
  }
}
```

[Return to top](#top)

## Example

**Request:**

```http
GET /api/view/driversettings/H70694?lastChanged=1900-01-01T00:00:00.000Z
Accept: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: 3fefeb
referer: https://apps.alsoenergy.com/powertrack/H70694/administration/config
```

**Response:**

```json
{
  "driverSettings": [
    {
      "name": "dev:KWHoffset",
      "type": 2,
      "value": "0"
    }
  ],
  "key": "H70694",
  "lastChanged": "2026-06-24T16:02:09Z"
}
```

[Return to top](#top)

