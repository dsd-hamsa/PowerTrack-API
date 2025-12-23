<a id="top"></a>
# /api/edit/hardware/{hardware_id}

[← Back to Index](../logs.md)

**Methods:** GET  
**Status Codes:** 200  

## Table of Contents

- [Cell Modem (functionCode: 31)](#cell-modem-functioncode-31)
- [Example](#example)

## Cell Modem (functionCode: 31)

```json
{
  "type": "object",
  "properties": {
    "key": {
      "type": "string"
    },
    "parentKey": {
      "type": "string"
    },
    "ts": {
      "type": "string"
    },
    "description": {
      "type": "string"
    },
    "assetId": {
      "type": "string"
    },
    "hardwareId": {
      "type": "string"
    },
    "instance": {
      "type": "number"
    },
    "functionId": {
      "type": "string"
    },
    "functionCode": {
      "type": "number"
    },
    "hardwareStatus": {
      "type": "number"
    },
    "capacityKw": {
      "type": "number"
    },
    "sort": {
      "type": "number"
    },
    "gatewayKey": {
      "type": "string"
    },
    "gatewayId": {
      "type": "string"
    },
    "gatewayFwVersion": {
      "type": "string"
    },
    "gatewayScriptCount": {
      "type": "string"
    },
    "gatewayType": {
      "type": "number"
    },
    "serialNum": {
      "type": "string"
    },
    "modelNum": {
      "type": "string"
    },
    "installDate": {
      "type": "string"
    },
    "driverId": {
      "type": "number"
    },
    "driverDescription": {
      "type": "string"
    },
    "driverFlags": {
      "type": "number"
    },
    "driverName": {
      "type": "string"
    },
    "driverNotes": {
      "type": "string"
    },
    "validatedByKey": {
      "type": "string"
    },
    "validatedDateTime": {
      "type": "string"
    },
    "debug": {
      "type": "boolean"
    },
    "outOfService": {
      "type": "boolean"
    },
    "outOfServiceNote": {
      "type": "string"
    },
    "outOfServiceUntil": {
      "type": "string"
    },
    "reportExclude": {
      "type": "boolean"
    },
    "limitedCommunication": {
      "type": "boolean"
    },
    "primary": {
      "type": "boolean"
    },
    "address": {
      "type": "string"
    },
    "unitId": {
      "type": "number"
    },
    "isTcp": {
      "type": "boolean"
    },
    "port": {
      "type": "number"
    },
    "serialMode": {
      "type": "number"
    },
    "baud": {
      "type": "string"
    },
    "newNote": {
      "type": "string"
    },
    "dashboardKey": {
      "type": "string"
    },
    "dcRating": {
      "type": "number"
    },
    "defaultChart": {
      "type": "number"
    },
    "chartSectionCode": {
      "type": "number"
    },
    "conflictNames": {
      "type": "object",
      "properties": {}
    },
    "isConflictAcknowledged": {
      "type": "boolean"
    },
    "settings": {
      "type": "object",
      "properties": {
        "originalValue": {
          "type": "string"
        },
        "index": {
          "type": "number"
        },
        "name": {
          "type": "string"
        },
        "value": {
          "type": "string"
        },
        "type": {
          "type": "number"
        }
      }
    },
    "deviceRegisters": {
      "type": "object",
      "properties": {
        "index": {
          "type": "number"
        },
        "name": {
          "type": "string"
        },
        "localizedName": {
          "type": "string"
        },
        "dataName": {
          "type": "string"
        },
        "standardDataName": {
          "type": "string"
        },
        "isIgnored": {
          "type": "boolean"
        },
        "isRaw": {
          "type": "boolean"
        },
        "isArchived": {
          "type": "boolean"
        },
        "units": {
          "type": "string"
        },
        "dataNameDetail": {
          "type": "object",
          "properties": {}
        }
      }
    },
    "additionalRegisters": {
      "type": "array",
      "items": {
        "type": "unknown"
      }
    },
    "decreaseDifference": {
      "type": "number"
    },
    "autoCorrectDecrease": {
      "type": "boolean"
    },
    "fixedEnergyOffset": {
      "type": "number"
    },
    "increaseDifference": {
      "type": "number"
    },
    "autoCorrectIncrease": {
      "type": "boolean"
    },
    "isThermal": {
      "type": "boolean"
    },
    "reverse": {
      "type": "boolean"
    },
    "registerOffsets": {
      "type": "array",
      "items": {
        "type": "unknown"
      }
    },
    "driverRegisters": {
      "type": "array",
      "items": {
        "type": "unknown"
      }
    },
    "virtualRegisters": {
      "type": "array",
      "items": {
        "type": "unknown"
      }
    },
    "tags": {
      "type": "object",
      "properties": {
        "key": {
          "type": "string"
        },
        "lastChanged": {
          "type": "object",
          "properties": {}
        },
        "attributes": {
          "type": "array",
          "items": {
            "type": "unknown"
          }
        },
        "keywords": {
          "type": "array",
          "items": {
            "type": "unknown"
          }
        },
        "notes": {
          "type": "object",
          "properties": {
            "key": {
              "type": "string"
            },
            "parentKey": {
              "type": "string"
            },
            "authorKey": {
              "type": "string"
            },
            "authorName": {
              "type": "string"
            },
            "date": {
              "type": "string"
            },
            "kind": {
              "type": "string"
            },
            "isEvent": {
              "type": "boolean"
            },
            "text": {
              "type": "string"
            }
          }
        },
        "powerDisplays": {
          "type": "array",
          "items": {
            "type": "unknown"
          }
        }
      }
    },
    "sampleRate": {
      "type": "number"
    },
    "uploadRate": {
      "type": "number"
    },
    "oneMinuteData": {
      "type": "boolean"
    },
    "thread": {
      "type": "number"
    },
    "alsoHardwareId": {
      "type": "number"
    },
    "alsoSiteId": {
      "type": "number"
    },
    "siteHasInverterGroups": {
      "type": "boolean"
    },
    "groupAllowed": {
      "type": "array",
      "items": {
        "type": "unknown"
      }
    },
    "groupKey": {
      "type": "string"
    },
    "outputAllowed": {
      "type": "array",
      "items": {
        "type": "unknown"
      }
    },
    "outputKey": {
      "type": "string"
    },
    "weatherStationKey1": {
      "type": "string"
    },
    "weatherStationKey2": {
      "type": "string"
    },
    "configs": {
      "type": "array",
      "items": {
        "type": "unknown"
      }
    },
    "array": {
      "type": "object",
      "properties": {}
    },
    "eGauge": {
      "type": "object",
      "properties": {}
    },
    "gateway": {
      "type": "object",
      "properties": {}
    },
    "kiosk": {
      "type": "object",
      "properties": {}
    },
    "meter": {
      "type": "object",
      "properties": {}
    },
    "pvConfig": {
      "type": "object",
      "properties": {}
    },
    "thermal": {
      "type": "object",
      "properties": {}
    },
    "turbine": {
      "type": "object",
      "properties": {}
    },
    "virtualWeather": {
      "type": "object",
      "properties": {}
    },
    "weather": {
      "type": "object",
      "properties": {}
    },
    "zone": {
      "type": "object",
      "properties": {}
    },
    "commonDC": {
      "type": "boolean"
    },
    "commonDCAllMatch": {
      "type": "boolean"
    },
    "locusId": {
      "type": "string"
    },
    "syncToLocus": {
      "type": "boolean"
    },
    "taskKey": {
      "type": "string"
    },
    "readOnly": {
      "type": "boolean"
    },
    "isReportable": {
      "type": "boolean"
    },
    "latitude": {
      "type": "number"
    },
    "longitude": {
      "type": "number"
    },
    "hash": {
      "type": "string"
    },
    "hasCapacity": {
      "type": "boolean"
    },
    "inverterKw": {
      "type": "number"
    },
    "siteDcShare": {
      "type": "number"
    },
    "pullData": {
      "type": "boolean"
    }
  }
}
```

[Return to top](#top)

## Example

**Request:**

```http
GET /api/edit/hardware/H511563
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
Accept: application/json
referer: https://apps.alsoenergy.com/powertrack/H511563/administration/config
```

**Response:**

```json
{
  "key": "H511563",
  "parentKey": "S68143",
  "ts": "2025-03-13T18:25:44Z",
  "description": "Cell Modem (Pepwave)",
  "assetId": "",
  "hardwareId": "C20909_S68143_CE0",
  "instance": 0,
  "functionId": "CE0",
  "functionCode": 31,
  "hardwareStatus": 1,
  "capacityKw": 0,
  "sort": 1,
  "gatewayKey": "",
  "gatewayId": "1932-1C3F-8F71",
  "gatewayFwVersion": "",
  "gatewayScriptCount": "",
  "gatewayType": 2,
  "serialNum": "1932-1C3F-8F71",
  "modelNum": "PEPLINK MAX-BR1-MINI-LTE-US-DC-T-M-RPM",
  "installDate": "2024-07-12",
  "driverId": 19759,
  "driverDescription": "SNMP from a pepwave wireless modem",
  "driverFlags": 0,
  "driverName": "Pepwave Wireless SNMP",
  "driverNotes": "",
  "validatedByKey": "",
  "validatedDateTime": "0001-01-01T00:00:00",
  "debug": false,
  "outOfService": false,
  "outOfServiceNote": "",
  "outOfServiceUntil": "2025-12-23T00:06:57.4370644Z",
  "reportExclude": false,
  "limitedCommunication": false,
  "primary": false,
  "address": "0",
  "unitId": 0,
  "isTcp": false,
  "port": 0,
  "serialMode": 0,
  "baud": "",
  "newNote": "",
  "dashboardKey": "",
  "dcRating": 0,
  "defaultChart": 0,
  "chartSectionCode": 0,
  "conflictNames": null,
  "isConflictAcknowledged": false,
  "settings": [
    {
      "originalValue": "N/A",
      "index": 0,
      "name": "dev:portMode",
      "value": "N/A",
      "type": 0
    },
    {
      "originalValue": "ae",
      "index": 1,
      "name": "dev:community",
      "value": "ae",
      "type": 0
    },
    {
      "originalValue": "alsoenergy",
      "index": 2,
      "name": "dev:authentication",
      "value": "alsoenergy",
      "type": 0
    },
    {
      "originalValue": "alsoenergy",
      "index": 3,
      "name": "dev:privacy",
      "value": "alsoenergy",
      "type": 0
    },
    {
      "originalValue": "CE0",
      "index": 4,
      "name": "ShortName",
      "value": "CE0",
      "type": 0
    }
  ],
  "deviceRegisters": [
    {
      "index": 0,
      "name": "RSSI",
      "localizedName": "RSSI",
      "dataName": "RSSI",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": false,
      "isArchived": true,
      "units": "dB",
      "dataNameDetail": null
    },
    {
      "index": 1,
      "name": "Cell Bytes Sent Since Install",
      "localizedName": "Cell Bytes Sent Since Install",
      "dataName": "BytesSent",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "MB",
      "dataNameDetail": null
    },
    {
      "index": 2,
      "name": "Cell Bytes Received Since Install",
      "localizedName": "Cell Bytes Received Since Install",
      "dataName": "BytesReceived",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "MB",
      "dataNameDetail": null
    }
  ],
  "additionalRegisters": [],
  "decreaseDifference": 100,
  "autoCorrectDecrease": false,
  "fixedEnergyOffset": 0,
  "increaseDifference": -1,
  "autoCorrectIncrease": false,
  "isThermal": false,
  "reverse": false,
  "registerOffsets": [],
  "driverRegisters": [],
  "virtualRegisters": [],
  "tags": {
    "key": "{\"ancestorKey\":\"H511563\",\"isRecursive\":false,\"types\":[\"attribute\",\"keyword\",\"note\"]}",
    "lastChanged": null,
    "attributes": [],
    "keywords": [],
    "notes": [
      {
        "key": "x050b5387",
        "parentKey": "H511563",
        "authorKey": "U39142",
        "authorName": "Reuben Brazeal",
        "date": "2024-07-11T21:20:46Z",
        "kind": "text",
        "isEvent": true,
        "text": "Password created"
      },
      {
        "key": "x050b53e2",
        "parentKey": "H511563",
        "authorKey": "U39142",
        "authorName": "Reuben Brazeal",
        "date": "2024-07-11T21:22:08Z",
        "kind": "text",
        "isEvent": true,
        "text": "Password updated"
      }
    ],
    "powerDisplays": []
  },
  "sampleRate": 0,
  "uploadRate": 0,
  "oneMinuteData": false,
  "thread": 0,
  "alsoHardwareId": 0,
  "alsoSiteId": 0,
  "siteHasInverterGroups": true,
  "groupAllowed": [],
  "groupKey": "",
  "outputAllowed": [],
  "outputKey": "",
  "weatherStationKey1": "",
  "weatherStationKey2": "",
  "configs": [],
  "array": null,
  "eGauge": null,
  "gateway": null,
  "kiosk": null,
  "meter": null,
  "pvConfig": null,
  "thermal": null,
  "turbine": null,
  "virtualWeather": null,
  "weather": null,
  "zone": null,
  "commonDC": false,
  "commonDCAllMatch": true,
  "locusId": "",
  "syncToLocus": false,
  "taskKey": "",
  "readOnly": false,
  "isReportable": false,
  "latitude": 34.0371297,
  "longitude": -118.1014776,
  "hash": "",
  "hasCapacity": false,
  "inverterKw": 0,
  "siteDcShare": 0,
  "pullData": false
}
```

[Return to top](#top)

