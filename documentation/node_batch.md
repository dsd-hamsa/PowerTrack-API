# Endpoint 16

[← Back to Index](../README.md)


### `/api/node/batch`

**Methods:** POST  
**Status Codes:** 200  
**Call Count:** 4  

#### Response Structure

```json
{
  "type": "array",
  "items": {
    "type": "object",
    "properties": {}
  }
}
```

#### Example

**Request:**

```http
POST /api/node/batch
Accept: application/json
Content-Type: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
```

**Response:**

```json
[
  {
    "item": {
      "flags": 0,
      "icon": "user",
      "isHidden": false,
      "key": "U10846",
      "kind": "user",
      "lastChanged": "2025-08-28T17:54:05Z",
      "name": "Brian Smith (brianrsmith1)",
      "parentKey": "C8458",
      "path": [
        "C8458"
      ],
      "permissions": 31,
      "sort": 2147483647,
      "subKind": 0,
      "validationStatus": 0
    },
    "key": "U10846"
  },
  {
    "item": {
      "flags": 0,
      "icon": "user",
      "isHidden": false,
      "key": "U27161",
      "kind": "user",
      "lastChanged": "2025-05-20T15:33:36Z",
      "name": "Stephen Toth (toth)",
      "parentKey": "C2",
      "path": [],
      "permissions": 0,
      "sort": 2147483647,
      "subKind": 0,
      "validationStatus": 0
    },
    "key": "U27161"
  },
  {
    "item": {
      "flags": 0,
      "icon": "user",
      "isHidden": false,
      "key": "U42786",
      "kind": "user",
      "lastChanged": "2023-06-29T14:10:40Z",
      "name": "Monali Jogi (mjogi)",
      "parentKey": "C2",
      "path": [],
      "permissions": 0,
      "sort": 2147483647,
      "subKind": 0,
      "validationStatus": 0
    },
    "key": "U42786"
  },
  {
    "item": {
      "flags": 0,
      "icon": "user",
      "isHidden": false,
      "key": "U57916",
      "kind": "user",
      "lastChanged": "2025-11-18T18:41:44Z",
      "name": "Josh Hamsa (josh.hamsa@dsdrenewables.com)",
      "parentKey": "C8458",
      "path": [
        "C8458"
      ],
      "permissions": 27,
      "sort": 2147483647,
      "subKind": 0,
      "validationStatus": 0
    },
    "key": "U57916"
  }
]
```

