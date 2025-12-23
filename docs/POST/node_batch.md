<a id="top"></a>
# /api/node/batch

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
    "key": {
      "type": "string"
    },
    "lastChanged": {
      "type": "string"
    },
    "mergeHash": {
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
    "item": {
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
    },
    "key": {
      "type": "string"
    }
  }
}
```

[Return to top](#top)

## Example

**Request:**

```http
POST /api/node/batch
Accept: application/json
Content-Type: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
referer: https://apps.alsoenergy.com/powertrack/S68143/administration/hardware/list
```

**Payload:**

```json
[
  {
    "key": "H511563",
    "lastChanged": "2025-12-22T21:58:47Z",
    "mergeHash": ""
  },
  {
    "key": "H511564",
    "lastChanged": "2025-12-22T21:58:47Z",
    "mergeHash": ""
  },
  {
    "key": "H511565",
    "lastChanged": "2025-12-22T21:58:47Z",
    "mergeHash": ""
  },
  {
    "key": "H511566",
    "lastChanged": "2025-12-22T21:58:47Z",
    "mergeHash": ""
  },
  {
    "key": "H511567",
    "lastChanged": "2025-12-22T21:58:47Z",
    "mergeHash": ""
  },
  {
    "key": "H511568",
    "lastChanged": "2025-12-22T21:58:47Z",
    "mergeHash": ""
  },
  {
    "key": "H511569",
    "lastChanged": "2025-12-22T21:58:47Z",
    "mergeHash": ""
  },
  {
    "key": "H511570",
    "lastChanged": "2025-12-22T21:58:47Z",
    "mergeHash": ""
  },
  {
    "key": "H511571",
    "lastChanged": "2025-12-22T21:58:47Z",
    "mergeHash": ""
  },
  {
    "key": "H511572",
    "lastChanged": "2025-12-22T21:58:47Z",
    "mergeHash": ""
  },
  {
    "key": "H511573",
    "lastChanged": "2025-12-22T21:58:47Z",
    "mergeHash": ""
  },
  {
    "key": "H511574",
    "lastChanged": "2025-12-22T21:58:47Z",
    "mergeHash": ""
  },
  {
    "key": "H511575",
    "lastChanged": "2025-12-22T21:58:47Z",
    "mergeHash": ""
  },
  {
    "key": "H511576",
    "lastChanged": "2025-12-22T21:58:47Z",
    "mergeHash": ""
  },
  {
    "key": "H494021",
    "lastChanged": "2025-12-22T21:58:47Z",
    "mergeHash": ""
  }
]
```

**Response:**

```json
[
  {
    "item": {
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
    "key": "H494021"
  },
  {
    "item": {
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
    "key": "H511563"
  },
  {
    "item": {
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
    "key": "H511564"
  },
  {
    "item": {
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
    "key": "H511565"
  },
  {
    "item": {
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
    "key": "H511566"
  },
  {
    "item": {
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
    "key": "H511567"
  },
  {
    "item": {
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
    "key": "H511568"
  },
  {
    "item": {
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
    "key": "H511569"
  },
  {
    "item": {
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
    "key": "H511570"
  },
  {
    "item": {
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
    "key": "H511571"
  },
  {
    "item": {
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
    "key": "H511572"
  },
  {
    "item": {
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
    "key": "H511573"
  },
  {
    "item": {
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
    "key": "H511574"
  },
  {
    "item": {
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
    "key": "H511575"
  },
  {
    "item": {
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
    },
    "key": "H511576"
  }
]
```

[Return to top](#top)

