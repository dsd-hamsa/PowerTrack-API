# Endpoint 20

[← Back to Index](../README.md)


### `/api/node/{user_id}`

**Methods:** GET  
**Status Codes:** 200  
**Call Count:** 3  

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
GET /api/node/U36721?lastChanged=2025-12-16T16:52:13Z
Accept: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
```

**Response:**

```json
{
  "flags": 0,
  "icon": "user",
  "isHidden": false,
  "key": "U36721",
  "kind": "user",
  "lastChanged": "2024-09-30T16:47:32Z",
  "name": "Tashi Nangchen (tnangchen)",
  "parentKey": "C2",
  "path": [],
  "permissions": 0,
  "sort": 2147483647,
  "subKind": 0,
  "validationStatus": 0
}
```

