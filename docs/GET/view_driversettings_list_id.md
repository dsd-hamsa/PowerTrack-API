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
GET /api/view/driversettings/list/8164
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
Accept: application/json
referer: https://apps.alsoenergy.com/powertrack/H511576/administration/config
```

**Response:**

```json
[
  {
    "name": "dev:P1",
    "value": "A",
    "type": 0
  },
  {
    "name": "dev:P2",
    "value": "W",
    "type": 0
  },
  {
    "name": "dev:K1",
    "value": "1.00",
    "type": 0
  },
  {
    "name": "dev:K2",
    "value": "1.00",
    "type": 0
  },
  {
    "name": "dev:T1",
    "value": "1",
    "type": 0
  },
  {
    "name": "dev:TR1",
    "value": "S",
    "type": 0
  },
  {
    "name": "dev:TR2",
    "value": "W",
    "type": 0
  },
  {
    "name": "dev:SWAP",
    "value": "0",
    "type": 0
  }
]
```

[Return to top](#top)

