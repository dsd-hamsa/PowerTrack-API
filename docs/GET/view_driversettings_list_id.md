<a id="top"></a>
# /api/view/driversettings/list/{id}

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
GET /api/view/driversettings/list/19880
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
Accept: application/json
referer: https://apps.alsoenergy.com/powertrack/H511568/administration/config
```

**Response:**

```json
[
  {
    "name": "dev:RegOffset",
    "value": "0",
    "type": 0
  },
  {
    "name": "dev:UnitID",
    "value": "3",
    "type": 1
  },
  {
    "name": "dev:tcpretry",
    "value": "3",
    "type": 0
  },
  {
    "name": "dev:KWHoffset",
    "value": "0",
    "type": 0
  },
  {
    "name": "dev:ScaleKWH",
    "value": "1",
    "type": 0
  },
  {
    "name": "dev:ScaleKW",
    "value": "0.001",
    "type": 0
  },
  {
    "name": "dev:ScaleV",
    "value": "0.01",
    "type": 0
  },
  {
    "name": "dev:ScaleI",
    "value": "0.001",
    "type": 0
  },
  {
    "name": "dev:ScaleFrequency",
    "value": "0.01",
    "type": 0
  },
  {
    "name": "dev:ScaleKVAR",
    "value": "0.001",
    "type": 0
  },
  {
    "name": "dev:ScalePF",
    "value": "0.001",
    "type": 0
  },
  {
    "name": "dev:ScaleTemp",
    "value": "0.1",
    "type": 0
  },
  {
    "name": "dev:ScaleKVA",
    "value": "0.001",
    "type": 0
  }
]
```

[Return to top](#top)

