# /api/node

[← Back to Index](../logs.md)

**Methods:** POST  
**Status Codes:** 200, 200, 200  

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

[Return to top](#apinode)

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
          "type": "string"
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
POST /api/node?lastChanged=2025-12-22T21:58:47Z
Accept: application/json
Content-Type: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
referer: https://apps.alsoenergy.com/powertrack/S68143/administration/hardware/list
```

**Payload:**

```json
{
  "context": "query",
  "filter": "",
  "filterBy": "Name",
  "key": "S68143",
  "kinds": [
    "customer",
    "site",
    "hardware"
  ],
  "nodes": [],
  "subKinds": []
}
```

**Response:**

```json
{
  "key": "{\"key\":\"S68143\",\"context\":\"query\",\"kinds\":[\"customer\",\"site\",\"hardware\"],\"subKinds\":[],\"nodes\":[],\"filter\":\"\",\"filterBy\":\"Name\"}",
  "lastChanged": "2025-12-22T22:01:11Z",
  "node": {
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
  },
  "nodes": [
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
    },
    {
      "flags": 0,
      "icon": "https://www.alsoenergy.com/pub/Images/weather.png",
      "isHidden": false,
      "key": "H494021",
      "kind": "hardware",
      "lastChanged": "2024-03-08T14:48:26Z",
      "name": "Solcast Virtual Weather Station",
      "parentKey": "S68143",
      "path": [
        "C8458",
        "C25228",
        "S68143"
      ],
      "permissions": 27,
      "sort": 0,
      "subKind": 5,
      "validationStatus": 0
    },
    {
      "flags": 0,
      "icon": "https://www.alsoenergy.com/pub/Images/Device/19759.png",
      "isHidden": false,
      "key": "H511563",
      "kind": "hardware",
      "lastChanged": "2025-03-13T18:25:44Z",
      "name": "Cell Modem (Pepwave)",
      "parentKey": "S68143",
      "path": [
        "C8458",
        "C25228",
        "S68143"
      ],
      "permissions": 27,
      "sort": 1,
      "subKind": 31,
      "validationStatus": 0
    },
    {
      "flags": 0,
      "icon": "https://www.alsoenergy.com/pub/Images/Device/325.png",
      "isHidden": false,
      "key": "H511564",
      "kind": "hardware",
      "lastChanged": "2024-07-15T13:27:46Z",
      "name": "PowerLogger 1000",
      "parentKey": "S68143",
      "path": [
        "C8458",
        "C25228",
        "S68143"
      ],
      "permissions": 27,
      "sort": 2,
      "subKind": 10,
      "validationStatus": 0
    },
    {
      "flags": 0,
      "icon": "https://www.alsoenergy.com/pub/Images/meter.png",
      "isHidden": false,
      "key": "H511565",
      "kind": "hardware",
      "lastChanged": "2024-07-15T13:28:32Z",
      "name": "Accuvim II - PV Prod Meter - M0",
      "parentKey": "S68143",
      "path": [
        "C8458",
        "C25228",
        "S68143"
      ],
      "permissions": 27,
      "sort": 3,
      "subKind": 2,
      "validationStatus": 0
    },
    {
      "flags": 0,
      "icon": "https://www.alsoenergy.com/pub/Images/meter.png",
      "isHidden": false,
      "key": "H511566",
      "kind": "hardware",
      "lastChanged": "2025-12-22T22:01:11Z",
      "name": "Accuvim II - SITE??  Meter - M1",
      "parentKey": "S68143",
      "path": [
        "C8458",
        "C25228",
        "S68143"
      ],
      "permissions": 27,
      "sort": 4,
      "subKind": 2,
      "validationStatus": 0
    },
    {
      "flags": 0,
      "icon": "https://www.alsoenergy.com/pub/Images/Device/2442.png",
      "isHidden": false,
      "key": "H511567",
      "kind": "hardware",
      "lastChanged": "2024-07-15T13:29:12Z",
      "name": "SMA Data Manager",
      "parentKey": "S68143",
      "path": [
        "C8458",
        "C25228",
        "S68143"
      ],
      "permissions": 27,
      "sort": 10,
      "subKind": 28,
      "validationStatus": 0
    },
    {
      "flags": 0,
      "icon": "https://www.alsoenergy.com/pub/Images/Device/19880.png",
      "isHidden": false,
      "key": "H511569",
      "kind": "hardware",
      "lastChanged": "2025-11-25T22:12:40Z",
      "name": "INVERTER 2",
      "parentKey": "S68143",
      "path": [
        "C8458",
        "C25228",
        "S68143"
      ],
      "permissions": 27,
      "sort": 12,
      "subKind": 1,
      "validationStatus": 0
    },
    {
      "flags": 0,
      "icon": "https://www.alsoenergy.com/pub/Images/Device/19880.png",
      "isHidden": false,
      "key": "H511570",
      "kind": "hardware",
      "lastChanged": "2025-11-25T22:12:43Z",
      "name": "INVERTER 3",
      "parentKey": "S68143",
      "path": [
        "C8458",
        "C25228",
        "S68143"
      ],
      "permissions": 27,
      "sort": 13,
      "subKind": 1,
      "validationStatus": 0
    },
    {
      "flags": 0,
      "icon": "https://www.alsoenergy.com/pub/Images/Device/19880.png",
      "isHidden": false,
      "key": "H511571",
      "kind": "hardware",
      "lastChanged": "2025-11-25T22:12:47Z",
      "name": "INVERTER 4",
      "parentKey": "S68143",
      "path": [
        "C8458",
        "C25228",
        "S68143"
      ],
      "permissions": 27,
      "sort": 14,
      "subKind": 1,
      "validationStatus": 0
    },
    {
      "flags": 0,
      "icon": "https://www.alsoenergy.com/pub/Images/Device/19880.png",
      "isHidden": false,
      "key": "H511572",
      "kind": "hardware",
      "lastChanged": "2025-11-25T22:12:52Z",
      "name": "INVERTER 5",
      "parentKey": "S68143",
      "path": [
        "C8458",
        "C25228",
        "S68143"
      ],
      "permissions": 27,
      "sort": 15,
      "subKind": 1,
      "validationStatus": 0
    },
    {
      "flags": 0,
      "icon": "https://www.alsoenergy.com/pub/Images/Device/19880.png",
      "isHidden": false,
      "key": "H511573",
      "kind": "hardware",
      "lastChanged": "2025-11-25T22:12:55Z",
      "name": "INVERTER 6",
      "parentKey": "S68143",
      "path": [
        "C8458",
        "C25228",
        "S68143"
      ],
      "permissions": 27,
      "sort": 16,
      "subKind": 1,
      "validationStatus": 0
    },
    {
      "flags": 0,
      "icon": "https://www.alsoenergy.com/pub/Images/Device/19880.png",
      "isHidden": false,
      "key": "H511574",
      "kind": "hardware",
      "lastChanged": "2025-11-25T22:12:59Z",
      "name": "INVERTER 7",
      "parentKey": "S68143",
      "path": [
        "C8458",
        "C25228",
        "S68143"
      ],
      "permissions": 27,
      "sort": 17,
      "subKind": 1,
      "validationStatus": 0
    },
    {
      "flags": 0,
      "icon": "https://www.alsoenergy.com/pub/Images/Device/3588.png",
      "isHidden": false,
      "key": "H511575",
      "kind": "hardware",
      "lastChanged": "2024-07-11T21:17:30Z",
      "name": "REFERENCE CELL - POA",
      "parentKey": "S68143",
      "path": [
        "C8458",
        "C25228",
        "S68143"
      ],
      "permissions": 27,
      "sort": 41,
      "subKind": 5,
      "validationStatus": 0
    },
    {
      "flags": 0,
      "icon": "https://www.alsoenergy.com/pub/Images/Device/8164.png",
      "isHidden": false,
      "key": "H511576",
      "kind": "hardware",
      "lastChanged": "2024-07-11T21:18:06Z",
      "name": "WEATHER STATION",
      "parentKey": "S68143",
      "path": [
        "C8458",
        "C25228",
        "S68143"
      ],
      "permissions": 27,
      "sort": 42,
      "subKind": 5,
      "validationStatus": 0
    }
  ]
}
```

[Return to top](#apinode)

