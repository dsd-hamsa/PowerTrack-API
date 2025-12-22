# /api/node/batch

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

[Return to top](#apinodebatch)

## Response Structure

```json
{
  "type": "object",
  "properties": {
    "key": {
      "type": "string"
    },
    "item": {
      "type": "object",
      "properties": {
        "key": {
          "type": "string"
        },
        "lastChanged": {
          "type": "string"
        },
        "name": {
          "type": "string"
        },
        "sort": {
          "type": "number"
        },
        "icon": {
          "type": "string"
        },
        "flags": {
          "type": "number"
        },
        "parentKey": {
          "type": "string"
        },
        "kind": {
          "type": "string"
        },
        "subKind": {
          "type": "number"
        },
        "path": {
          "type": "string"
        },
        "isHidden": {
          "type": "boolean"
        },
        "validationStatus": {
          "type": "number"
        },
        "permissions": {
          "type": "number"
        }
      }
    }
  }
}
```

[Return to top](#apinodebatch)

## Example

**Request:**

```http
POST /api/node/batch
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
Content-Type: application/json
Accept: application/json
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
    "key": "H494021",
    "item": {
      "key": "H494021",
      "lastChanged": "2024-03-08T14:48:26Z",
      "name": "Solcast Virtual Weather Station",
      "sort": 0,
      "icon": "https://www.alsoenergy.com/pub/Images/weather.png",
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
  },
  {
    "key": "H511563",
    "item": {
      "key": "H511563",
      "lastChanged": "2025-03-13T18:25:44Z",
      "name": "Cell Modem (Pepwave)",
      "sort": 1,
      "icon": "https://www.alsoenergy.com/pub/Images/Device/19759.png",
      "flags": 0,
      "parentKey": "S68143",
      "kind": "hardware",
      "subKind": 31,
      "path": [
        "C8458",
        "C25228",
        "S68143"
      ],
      "isHidden": false,
      "validationStatus": 0,
      "permissions": 27
    }
  },
  {
    "key": "H511564",
    "item": {
      "key": "H511564",
      "lastChanged": "2024-07-15T13:27:46Z",
      "name": "PowerLogger 1000",
      "sort": 2,
      "icon": "https://www.alsoenergy.com/pub/Images/Device/325.png",
      "flags": 0,
      "parentKey": "S68143",
      "kind": "hardware",
      "subKind": 10,
      "path": [
        "C8458",
        "C25228",
        "S68143"
      ],
      "isHidden": false,
      "validationStatus": 0,
      "permissions": 27
    }
  },
  {
    "key": "H511565",
    "item": {
      "key": "H511565",
      "lastChanged": "2024-07-15T13:28:32Z",
      "name": "Accuvim II - PV Prod Meter - M0",
      "sort": 3,
      "icon": "https://www.alsoenergy.com/pub/Images/meter.png",
      "flags": 0,
      "parentKey": "S68143",
      "kind": "hardware",
      "subKind": 2,
      "path": [
        "C8458",
        "C25228",
        "S68143"
      ],
      "isHidden": false,
      "validationStatus": 0,
      "permissions": 27
    }
  },
  {
    "key": "H511566",
    "item": {
      "key": "H511566",
      "lastChanged": "2025-12-22T22:01:11Z",
      "name": "Accuvim II - SITE??  Meter - M1",
      "sort": 4,
      "icon": "https://www.alsoenergy.com/pub/Images/meter.png",
      "flags": 0,
      "parentKey": "S68143",
      "kind": "hardware",
      "subKind": 2,
      "path": [
        "C8458",
        "C25228",
        "S68143"
      ],
      "isHidden": false,
      "validationStatus": 0,
      "permissions": 27
    }
  },
  {
    "key": "H511567",
    "item": {
      "key": "H511567",
      "lastChanged": "2024-07-15T13:29:12Z",
      "name": "SMA Data Manager",
      "sort": 10,
      "icon": "https://www.alsoenergy.com/pub/Images/Device/2442.png",
      "flags": 0,
      "parentKey": "S68143",
      "kind": "hardware",
      "subKind": 28,
      "path": [
        "C8458",
        "C25228",
        "S68143"
      ],
      "isHidden": false,
      "validationStatus": 0,
      "permissions": 27
    }
  },
  {
    "key": "H511568",
    "item": {
      "key": "H511568",
      "lastChanged": "2025-12-22T19:21:53Z",
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
    }
  },
  {
    "key": "H511569",
    "item": {
      "key": "H511569",
      "lastChanged": "2025-11-25T22:12:40Z",
      "name": "INVERTER 2",
      "sort": 12,
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
    }
  },
  {
    "key": "H511570",
    "item": {
      "key": "H511570",
      "lastChanged": "2025-11-25T22:12:43Z",
      "name": "INVERTER 3",
      "sort": 13,
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
    }
  },
  {
    "key": "H511571",
    "item": {
      "key": "H511571",
      "lastChanged": "2025-11-25T22:12:47Z",
      "name": "INVERTER 4",
      "sort": 14,
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
    }
  },
  {
    "key": "H511572",
    "item": {
      "key": "H511572",
      "lastChanged": "2025-11-25T22:12:52Z",
      "name": "INVERTER 5",
      "sort": 15,
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
    }
  },
  {
    "key": "H511573",
    "item": {
      "key": "H511573",
      "lastChanged": "2025-11-25T22:12:55Z",
      "name": "INVERTER 6",
      "sort": 16,
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
    }
  },
  {
    "key": "H511574",
    "item": {
      "key": "H511574",
      "lastChanged": "2025-11-25T22:12:59Z",
      "name": "INVERTER 7",
      "sort": 17,
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
    }
  },
  {
    "key": "H511575",
    "item": {
      "key": "H511575",
      "lastChanged": "2024-07-11T21:17:30Z",
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
  },
  {
    "key": "H511576",
    "item": {
      "key": "H511576",
      "lastChanged": "2024-07-11T21:18:06Z",
      "name": "WEATHER STATION",
      "sort": 42,
      "icon": "https://www.alsoenergy.com/pub/Images/Device/8164.png",
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
  }
]
```

[Return to top](#apinodebatch)

