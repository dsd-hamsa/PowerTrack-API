<a id="top"></a>
# /api/node

[← Back to Index](../logs.md)

**Methods:** POST  
**Status Codes:** 200  

## Table of Contents

- [Payload Structure](#payload-structure)
- [General](#general)
- [Example](#example)

## Payload Structure

```json
{
  "type": "object",
  "properties": {
    "context": {
      "type": "string"
    },
    "filter": {
      "type": "string"
    },
    "filterBy": {
      "type": "string"
    },
    "key": {
      "type": "string"
    },
    "kinds": {
      "type": "string"
    },
    "nodes": {
      "type": "array",
      "items": {
        "type": "unknown"
      }
    },
    "subKinds": {
      "type": "array",
      "items": {
        "type": "unknown"
      }
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
      "type": "object",
      "properties": {
        "flags": {
          "type": "number"
        },
        "icon": {
          "type": "string"
        },
        "isHidden": {
          "type": "boolean"
        },
        "key": {
          "type": "string"
        },
        "kind": {
          "type": "string"
        },
        "lastChanged": {
          "type": "string"
        },
        "name": {
          "type": "string"
        },
        "parentKey": {
          "type": "string"
        },
        "path": {
          "type": "array",
          "items": {
            "type": "unknown"
          }
        },
        "permissions": {
          "type": "number"
        },
        "sort": {
          "type": "number"
        },
        "subKind": {
          "type": "number"
        },
        "validationStatus": {
          "type": "number"
        }
      }
    }
  }
}
```

[Return to top](#top)

## Example

**Request:**

```http
POST /api/node?lastChanged=2025-12-22T21:57:18Z
Accept: application/json
Content-Type: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
referer: https://apps.alsoenergy.com/powertrack/S68143/administration/config
```

**Payload:**

```json
{
  "context": "path",
  "filter": "",
  "filterBy": "",
  "key": "S68143",
  "kinds": [
    "customer",
    "hardware",
    "site",
    "user",
    "file",
    "folder",
    "report"
  ],
  "nodes": [],
  "subKinds": []
}
```

**Response:**

```json
{
  "key": "{\"key\":\"S68143\",\"context\":\"path\",\"kinds\":[\"customer\",\"hardware\",\"site\",\"user\",\"file\",\"folder\",\"report\"],\"subKinds\":[],\"nodes\":[],\"filter\":\"\",\"filterBy\":\"\"}",
  "lastChanged": "2025-12-22T21:58:47Z",
  "node": null,
  "nodes": [
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
    },
    {
      "flags": 0,
      "icon": "Customer",
      "isHidden": false,
      "key": "C25228",
      "kind": "customer",
      "lastChanged": "2023-09-26T16:51:20Z",
      "name": "1.1_Direct",
      "parentKey": "C8458",
      "path": [
        "C8458"
      ],
      "permissions": 27,
      "sort": 2147483647,
      "subKind": 0,
      "validationStatus": 0
    },
    {
      "flags": 0,
      "icon": "Site",
      "isHidden": false,
      "key": "S68143",
      "kind": "site",
      "lastChanged": "2025-12-22T21:58:47Z",
      "name": "*** LOST?* THD CA - 2304 Monterey Park",
      "parentKey": "C25228",
      "path": [
        "C8458",
        "C25228"
      ],
      "permissions": 27,
      "sort": 2147483647,
      "subKind": 0,
      "validationStatus": 1
    }
  ]
}
```

[Return to top](#top)

