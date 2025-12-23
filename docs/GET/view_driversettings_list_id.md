<a id="top"></a>
# /api/view/driversettings/list/{id}

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
    "name": {
      "type": "string"
    },
    "value": {
      "type": "string"
    },
    "type": {
      "type": "number"
    }
  }
}
```

[Return to top](#top)

## Example

**Request:**

```http
GET /api/view/driversettings/list/19759
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
Accept: application/json
referer: https://apps.alsoenergy.com/powertrack/H511563/administration/config
```

**Response:**

```json
[
  {
    "name": "dev:community",
    "value": "ae",
    "type": 0
  },
  {
    "name": "dev:authentication",
    "value": "alsoenergy",
    "type": 0
  },
  {
    "name": "dev:privacy",
    "value": "alsoenergy",
    "type": 0
  }
]
```

[Return to top](#top)

