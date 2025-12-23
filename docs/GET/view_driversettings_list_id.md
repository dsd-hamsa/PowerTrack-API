<a id="top"></a>
# /api/view/driversettings/list/{id}

[← Back to Index](../logs.md)

**Methods:** GET  
**Status Codes:** 200, 200, 200, 200  

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
GET /api/view/driversettings/list/19601
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
Accept: application/json
referer: https://apps.alsoenergy.com/powertrack/H511566/administration/config
```

**Response:**

```json
[
  {
    "name": "dev:Enable",
    "value": "0",
    "type": 1
  },
  {
    "name": "dev:KWHoffset",
    "value": "0",
    "type": 0
  },
  {
    "name": "dev:ScaleKW",
    "value": "0.001",
    "type": 2
  },
  {
    "name": "dev:Reverse",
    "value": "0",
    "type": 0
  },
  {
    "name": "dev:RegOffset",
    "value": "0",
    "type": 0
  },
  {
    "name": "dev:ScaleKWH",
    "value": "0.1",
    "type": 2
  },
  {
    "name": "dev:KWHrecOffset",
    "value": "0",
    "type": 2
  },
  {
    "name": "dev:KWHdelOffset",
    "value": "0",
    "type": 2
  },
  {
    "name": "dev:ScaleAmps",
    "value": "1",
    "type": 2
  },
  {
    "name": "dev:ScaleVolts",
    "value": "1.0",
    "type": 2
  }
]
```

[Return to top](#top)

