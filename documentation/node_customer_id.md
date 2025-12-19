# `/api/node/{customer_id}`

[← Back to Index](../README.md)



**Methods:** GET  
**Status Codes:** 200  
**Call Count:** 1  

#### Response Structure

```json
{
  "type": "object",
  "properties": {
    "path": {
      "type": "array",
      "items": {
        "type": "unknown"
      }
    },
    "sort": {
      "type": "integer"
    },
    "permissions": {
      "type": "integer"
    },
    "lastChanged": {
      "type": "string"
    },
    "parentKey": {
      "type": "string"
    },
    "name": {
      "type": "string"
    },
    "key": {
      "type": "string"
    },
    "isHidden": {
      "type": "boolean"
    },
    "validationStatus": {
      "type": "integer"
    },
    "flags": {
      "type": "integer"
    },
    "icon": {
      "type": "string"
    },
    "kind": {
      "type": "string"
    },
    "subKind": {
      "type": "integer"
    }
  }
}
```

#### Example

**Request:**

```http
GET /api/node/C8458?lastChanged=1900-01-01T00:00:00.000Z
Accept: application/json
Referer: https://www.alsoenergy.com
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
```

**Response:**

```json
{
  "flags": 0,
  "icon": "CustAccount",
  "isHidden": false,
  "key": "C8458",
  "kind": "customer",
  "lastChanged": "2023-11-01T20:51:32Z",
  "name": "Distributed Solar Development",
  "parentKey": "C2",
  "path": [],
  "permissions": 27,
  "sort": 2147483647,
  "subKind": 0,
  "validationStatus": 0
}
```

