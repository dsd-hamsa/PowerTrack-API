# /api/node

[← Back to Index](../README.md)

**Methods:** POST
**Status Codes:** 200
**Call Count:** 1

## Table of Contents

- [Payload Structure](#payload-structure)
- [Response Structure](#response-structure)
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

[Return to top](#apinode)

## Response Structure

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
      "type": "object"
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

[Return to top](#apinode)

## Example

**Request:**

```http
POST /api/node?lastChanged=2025-12-22T19:21:26Z
Accept: application/json
Content-Type: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
referer: https://apps.alsoenergy.com/powertrack/H511568/administration/config
```

**Payload:**

```json
{
  "context": "path",
  "filter": "",
  "filterBy": "",
  "key": "H511568",
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
  "key": "{\"key\":\"H511568\",\"context\":\"path\",\"kinds\":[\"customer\",\"hardware\",\"site\",\"user\",\"file\",\"folder\",\"report\"],\"subKinds\":[],\"nodes\":[],\"filter\":\"\",\"filterBy\":\"\"}",
  "lastChanged": "2025-12-22T19:21:53Z",
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
      "lastChanged": "2025-12-16T16:37:49Z",
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
    },
    {
      "flags": 0,
      "icon": "https://www.alsoenergy.com/pub/Images/Device/19880.png",
      "isHidden": false,
      "key": "H511568",
      "kind": "hardware",
      "lastChanged": "2025-12-22T19:21:53Z",
      "name": "INVERTER 1",
      "parentKey": "S68143",
      "path": [
        "C8458",
        "C25228",
        "S68143"
      ],
      "permissions": 27,
      "sort": 11,
      "subKind": 1,
      "validationStatus": 0
    }
  ]
}
```

[Return to top](#apinode)

