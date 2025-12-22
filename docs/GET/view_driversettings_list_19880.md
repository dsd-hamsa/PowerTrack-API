# /api/view/driversettings/list/19880

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
}
```

[Return to top](#apiviewdriversettingslist19880)

## Example

**Request:**

```http
GET /api/view/driversettings/list/19880
Accept: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
referer: https://apps.alsoenergy.com/powertrack/H511568/administration/config
```

**Response:**

```json
[
  {
    "name": "dev:RegOffset",
    "type": 0,
    "value": "0"
  },
  {
    "name": "dev:UnitID",
    "type": 1,
    "value": "3"
  },
  {
    "name": "dev:tcpretry",
    "type": 0,
    "value": "3"
  },
  {
    "name": "dev:KWHoffset",
    "type": 0,
    "value": "0"
  },
  {
    "name": "dev:ScaleKWH",
    "type": 0,
    "value": "1"
  },
  {
    "name": "dev:ScaleKW",
    "type": 0,
    "value": "0.001"
  },
  {
    "name": "dev:ScaleV",
    "type": 0,
    "value": "0.01"
  },
  {
    "name": "dev:ScaleI",
    "type": 0,
    "value": "0.001"
  },
  {
    "name": "dev:ScaleFrequency",
    "type": 0,
    "value": "0.01"
  },
  {
    "name": "dev:ScaleKVAR",
    "type": 0,
    "value": "0.001"
  },
  {
    "name": "dev:ScalePF",
    "type": 0,
    "value": "0.001"
  },
  {
    "name": "dev:ScaleTemp",
    "type": 0,
    "value": "0.1"
  },
  {
    "name": "dev:ScaleKVA",
    "type": 0,
    "value": "0.001"
  }
]
```

[Return to top](#apiviewdriversettingslist19880)

