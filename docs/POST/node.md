<a id="top"></a>
# /api/node

[← Back to Index](../logs.md)

**Methods:** POST  
**Status Codes:** 200, 200  

## Table of Contents

- [Payload Structure](#payload-structure)
- [General](#general)
- [Example](#example)

## Payload Structure

```json
{
  "type": "object",
  "properties": {
    "key": {
      "type": "string"
    },
    "context": {
      "type": "string"
    },
    "kinds": {
      "type": "string"
    },
    "subKinds": {
      "type": "array",
      "items": {
        "type": "unknown"
      }
    },
    "nodes": {
      "type": "array",
      "items": {
        "type": "unknown"
      }
    },
    "filter": {
      "type": "string"
    },
    "filterBy": {
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
    "key": {
      "type": "string"
    },
    "lastChanged": {
      "type": "string"
    },
    "node": {
      "type": "object",
      "properties": {}
    },
    "nodes": {
      "type": "array"
    }
  }
}
```

[Return to top](#top)

## Example

**Request:**

```http
POST /api/node?lastChanged=2025-12-23T00:11:18Z
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
Content-Type: application/json
Accept: application/json
referer: https://apps.alsoenergy.com/powertrack/H511568/administration/config
```

**Payload:**

```json
{
  "key": "H511568",
  "context": "query",
  "kinds": [
    "customer",
    "site",
    "hardware"
  ],
  "subKinds": [],
  "nodes": [],
  "filter": "",
  "filterBy": "Name"
}
```

**Response:**

```json
{
  "key": "{\"key\":\"H511568\",\"context\":\"query\",\"kinds\":[\"customer\",\"site\",\"hardware\"],\"subKinds\":[],\"nodes\":[],\"filter\":\"\",\"filterBy\":\"Name\"}",
  "lastChanged": "1900-01-01T00:00:00Z",
  "node": {
    "key": "H511568",
    "lastChanged": "2025-12-23T00:11:25Z",
    "name": "INVERTER 1",
    "sort": 11,
    "icon": "https://www.alsoenergy.com/pub/Images/Device/19880.png",
    "flags": 0,
    "parentKey": "S68143",
    "kind": "hardware",
    "subKind": 1,
    "path": [
      "C8458",
      "C25228",
      "S68143"
    ],
    "isHidden": false,
    "validationStatus": 0,
    "permissions": 27
  },
  "nodes": []
}
```

[Return to top](#top)

