# Endpoint 19

[← Back to Index](../README.md)


### `/api/node/{site_id}`

**Methods:** GET  
**Status Codes:** 200  
**Call Count:** 2  

#### Response Structure

```json
{
  "type": "object",
  "properties": {
    "path": {
      "type": "array",
      "items": {
        "type": "string"
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
GET /api/node/S38292?lastChanged=2025-12-16T16:52:13Z
Accept: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
```

**Response:**

```json
{
  "flags": 0,
  "icon": "Site",
  "isHidden": false,
  "key": "S38292",
  "kind": "site",
  "lastChanged": "2025-12-12T17:53:01Z",
  "name": "Smith & Wesson - MA-21-C273",
  "parentKey": "C16300",
  "path": [
    "C8458",
    "C25592",
    "C16298",
    "C16299",
    "C16300"
  ],
  "permissions": 27,
  "sort": 2147483647,
  "subKind": 0,
  "validationStatus": 0
}
```

