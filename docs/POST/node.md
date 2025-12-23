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
      "type": "object"
    }
  }
}
```

[Return to top](#top)

## Example

**Request:**

```http
POST /api/node?lastChanged=2025-12-23T00:11:34Z
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
Content-Type: application/json
Accept: application/json
referer: https://apps.alsoenergy.com/powertrack/H511575/administration/config
```

**Payload:**

```json
{
  "key": "H511575",
  "context": "path",
  "kinds": [
    "customer",
    "hardware",
    "site",
    "user",
    "file",
    "folder",
    "report"
  ],
  "subKinds": [],
  "nodes": [],
  "filter": "",
  "filterBy": ""
}
```

**Response:**

```json
{
  "key": "{\"key\":\"H511575\",\"context\":\"path\",\"kinds\":[\"customer\",\"hardware\",\"site\",\"user\",\"file\",\"folder\",\"report\"],\"subKinds\":[],\"nodes\":[],\"filter\":\"\",\"filterBy\":\"\"}",
  "lastChanged": "2025-12-23T00:11:41Z",
  "node": null,
  "nodes": [
    {
      "key": "C8458",
      "lastChanged": "2023-11-01T20:51:32Z",
      "name": "Distributed Solar Development",
      "sort": 2147483647,
      "icon": "CustAccount",
      "flags": 0,
      "parentKey": "C2",
      "kind": "customer",
      "subKind": 0,
      "path": [],
      "isHidden": false,
      "validationStatus": 0,
      "permissions": 27
    },
    {
      "key": "C25228",
      "lastChanged": "2023-09-26T16:51:20Z",
      "name": "1.1_Direct",
      "sort": 2147483647,
      "icon": "Customer",
      "flags": 0,
      "parentKey": "C8458",
      "kind": "customer",
      "subKind": 0,
      "path": [
        "C8458"
      ],
      "isHidden": false,
      "validationStatus": 0,
      "permissions": 27
    },
    {
      "key": "S68143",
      "lastChanged": "2025-12-22T22:02:50Z",
      "name": "*** LOST?* THD CA - 2304 Monterey Park",
      "sort": 2147483647,
      "icon": "Site",
      "flags": 0,
      "parentKey": "C25228",
      "kind": "site",
      "subKind": 0,
      "path": [
        "C8458",
        "C25228"
      ],
      "isHidden": false,
      "validationStatus": 1,
      "permissions": 27
    },
    {
      "key": "H511575",
      "lastChanged": "2025-12-23T00:11:41Z",
      "name": "REFERENCE CELL - POA",
      "sort": 41,
      "icon": "https://www.alsoenergy.com/pub/Images/Device/3588.png",
      "flags": 0,
      "parentKey": "S68143",
      "kind": "hardware",
      "subKind": 5,
      "path": [
        "C8458",
        "C25228",
        "S68143"
      ],
      "isHidden": false,
      "validationStatus": 0,
      "permissions": 27
    }
  ]
}
```

[Return to top](#top)

