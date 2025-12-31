<a id="top"></a>
# /api/edit/hardware/{hardware_id}

[← Back to Index](../logs.md)

**Methods:** GET  
**Status Codes:** 200  

## Table of Contents

- [Data Capture (functionCode: 11)](#data-capture-functioncode-11)
- [Example](#example)

## Data Capture (functionCode: 11)

```json
{
  "type": "object",
  "properties": {
    "additionalRegisters": {
      "type": "array",
      "items": {
        "type": "unknown"
      }
    },
    "address": {
      "type": "string"
    },
    "alsoHardwareId": {
      "type": "number"
    },
    "alsoSiteId": {
      "type": "number"
    },
    "array": {
      "type": "object",
      "properties": {}
    },
    "assetId": {
      "type": "string"
    },
    "autoCorrectDecrease": {
      "type": "boolean"
    },
    "autoCorrectIncrease": {
      "type": "boolean"
    },
    "baud": {
      "type": "string"
    },
    "capacityKw": {
      "type": "number"
    },
    "chartSectionCode": {
      "type": "number"
    },
    "commonDC": {
      "type": "boolean"
    },
    "commonDCAllMatch": {
      "type": "boolean"
    },
    "configs": {
      "type": "array",
      "items": {
        "type": "unknown"
      }
    },
    "conflictNames": {
      "type": "object",
      "properties": {}
    },
    "dashboardKey": {
      "type": "string"
    },
    "dcRating": {
      "type": "number"
    },
    "debug": {
      "type": "boolean"
    },
    "decreaseDifference": {
      "type": "number"
    },
    "defaultChart": {
      "type": "number"
    },
    "description": {
      "type": "string"
    },
    "deviceRegisters": {
      "type": "object",
      "properties": {
        "dataName": {
          "type": "string"
        },
        "dataNameDetail": {
          "type": "object",
          "properties": {}
        },
        "index": {
          "type": "number"
        },
        "isArchived": {
          "type": "boolean"
        },
        "isIgnored": {
          "type": "boolean"
        },
        "isRaw": {
          "type": "boolean"
        },
        "localizedName": {
          "type": "string"
        },
        "name": {
          "type": "string"
        },
        "standardDataName": {
          "type": "string"
        },
        "units": {
          "type": "string"
        }
      }
    },
    "driverDescription": {
      "type": "string"
    },
    "driverFlags": {
      "type": "number"
    },
    "driverId": {
      "type": "number"
    },
    "driverName": {
      "type": "string"
    },
    "driverNotes": {
      "type": "string"
    },
    "driverRegisters": {
      "type": "array",
      "items": {
        "type": "unknown"
      }
    },
    "eGauge": {
      "type": "object",
      "properties": {}
    },
    "fixedEnergyOffset": {
      "type": "number"
    },
    "functionCode": {
      "type": "number"
    },
    "functionId": {
      "type": "string"
    },
    "gateway": {
      "type": "object",
      "properties": {}
    },
    "gatewayFwVersion": {
      "type": "string"
    },
    "gatewayId": {
      "type": "string"
    },
    "gatewayKey": {
      "type": "string"
    },
    "gatewayScriptCount": {
      "type": "string"
    },
    "gatewayType": {
      "type": "number"
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
    "hardwareId": {
      "type": "string"
    },
    "hardwareStatus": {
      "type": "number"
    },
    "hasCapacity": {
      "type": "boolean"
    },
    "hash": {
      "type": "string"
    },
    "increaseDifference": {
      "type": "number"
    },
    "installDate": {
      "type": "string"
    },
    "instance": {
      "type": "number"
    },
    "inverterKw": {
      "type": "number"
    },
    "isConflictAcknowledged": {
      "type": "boolean"
    },
    "isReportable": {
      "type": "boolean"
    },
    "isTcp": {
      "type": "boolean"
    },
    "isThermal": {
      "type": "boolean"
    },
    "key": {
      "type": "string"
    },
    "kiosk": {
      "type": "object",
      "properties": {}
    },
    "latitude": {
      "type": "number"
    },
    "limitedCommunication": {
      "type": "boolean"
    },
    "locusId": {
      "type": "string"
    },
    "longitude": {
      "type": "number"
    },
    "meter": {
      "type": "object",
      "properties": {}
    },
    "modelNum": {
      "type": "string"
    },
    "newNote": {
      "type": "string"
    },
    "oneMinuteData": {
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
    "outputAllowed": {
      "type": "array",
      "items": {
        "type": "unknown"
      }
    },
    "outputKey": {
      "type": "string"
    },
    "parentKey": {
      "type": "string"
    },
    "port": {
      "type": "number"
    },
    "primary": {
      "type": "boolean"
    },
    "pullData": {
      "type": "boolean"
    },
    "pvConfig": {
      "type": "object",
      "properties": {}
    },
    "readOnly": {
      "type": "boolean"
    },
    "registerOffsets": {
      "type": "array",
      "items": {
        "type": "unknown"
      }
    },
    "reportExclude": {
      "type": "boolean"
    },
    "reverse": {
      "type": "boolean"
    },
    "sampleRate": {
      "type": "number"
    },
    "serialMode": {
      "type": "number"
    },
    "serialNum": {
      "type": "string"
    },
    "settings": {
      "type": "array",
      "items": {
        "type": "unknown"
      }
    },
    "siteDcShare": {
      "type": "number"
    },
    "siteHasInverterGroups": {
      "type": "boolean"
    },
    "sort": {
      "type": "number"
    },
    "syncToLocus": {
      "type": "boolean"
    },
    "tags": {
      "type": "object",
      "properties": {
        "attributes": {
          "type": "array",
          "items": {
            "type": "unknown"
          }
        },
        "key": {
          "type": "string"
        },
        "keywords": {
          "type": "array",
          "items": {
            "type": "unknown"
          }
        },
        "lastChanged": {
          "type": "object",
          "properties": {}
        },
        "notes": {
          "type": "object",
          "properties": {
            "authorKey": {
              "type": "string"
            },
            "authorName": {
              "type": "string"
            },
            "date": {
              "type": "string"
            },
            "isEvent": {
              "type": "boolean"
            },
            "key": {
              "type": "string"
            },
            "kind": {
              "type": "string"
            },
            "parentKey": {
              "type": "string"
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
    "taskKey": {
      "type": "string"
    },
    "thermal": {
      "type": "object",
      "properties": {}
    },
    "thread": {
      "type": "number"
    },
    "ts": {
      "type": "string"
    },
    "turbine": {
      "type": "object",
      "properties": {}
    },
    "unitId": {
      "type": "number"
    },
    "uploadRate": {
      "type": "number"
    },
    "validatedByKey": {
      "type": "string"
    },
    "validatedDateTime": {
      "type": "string"
    },
    "virtualRegisters": {
      "type": "array",
      "items": {
        "type": "unknown"
      }
    },
    "virtualWeather": {
      "type": "object",
      "properties": {}
    },
    "weather": {
      "type": "object",
      "properties": {}
    },
    "weatherStationKey1": {
      "type": "string"
    },
    "weatherStationKey2": {
      "type": "string"
    },
    "zone": {
      "type": "object",
      "properties": {}
    }
  }
}
```

[Return to top](#top)

## Example

**Request:**

```http
GET /api/edit/hardware/H332772
Accept: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
referer: https://apps.alsoenergy.com/powertrack/H332772/administration/config
```

**Response:**

```json
{
  "additionalRegisters": [],
  "address": "0",
  "alsoHardwareId": 0,
  "alsoSiteId": 0,
  "array": null,
  "assetId": "",
  "autoCorrectDecrease": false,
  "autoCorrectIncrease": false,
  "baud": "",
  "capacityKw": 0,
  "chartSectionCode": 0,
  "commonDC": false,
  "commonDCAllMatch": true,
  "configs": [],
  "conflictNames": null,
  "dashboardKey": "",
  "dcRating": 0,
  "debug": false,
  "decreaseDifference": 100,
  "defaultChart": 0,
  "description": "Cell Modem (RV55) - 1 (RT)",
  "deviceRegisters": [
    {
      "dataName": "DevicePower",
      "dataNameDetail": null,
      "index": 0,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Power In",
      "name": "Power In",
      "standardDataName": "",
      "units": "V"
    },
    {
      "dataName": "RSSI",
      "dataNameDetail": null,
      "index": 1,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "RSSI",
      "name": "RSSI",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "BoardTemp",
      "dataNameDetail": null,
      "index": 2,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Board Temp",
      "name": "Board Temp",
      "standardDataName": "",
      "units": "°F"
    },
    {
      "dataName": "BytesSent",
      "dataNameDetail": null,
      "index": 3,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "Bytes Sent",
      "name": "Bytes Sent",
      "standardDataName": "",
      "units": "bytes"
    },
    {
      "dataName": "BytesReceived",
      "dataNameDetail": null,
      "index": 4,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "Bytes Received",
      "name": "Bytes Received",
      "standardDataName": "",
      "units": "bytes"
    },
    {
      "dataName": "IP",
      "dataNameDetail": null,
      "index": 5,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "IP Address",
      "name": "IP Address",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "DailyUsage",
      "dataNameDetail": null,
      "index": 6,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "Daily Usage",
      "name": "Daily Usage",
      "standardDataName": "",
      "units": "MB"
    },
    {
      "dataName": "MonthlyUsage",
      "dataNameDetail": null,
      "index": 7,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "Monthly Usage",
      "name": "Monthly Usage",
      "standardDataName": "",
      "units": "MB"
    },
    {
      "dataName": "DailyUsageSIM1",
      "dataNameDetail": null,
      "index": 8,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "Daily Usage SIM 1",
      "name": "Daily Usage SIM 1",
      "standardDataName": "",
      "units": "MB"
    },
    {
      "dataName": "MonthlyUsageSIM1",
      "dataNameDetail": null,
      "index": 9,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "Monthly Usage SIM 1",
      "name": "Monthly Usage SIM 1",
      "standardDataName": "",
      "units": "MB"
    },
    {
      "dataName": "DailyUsageN",
      "dataNameDetail": null,
      "index": 10,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Daily Usage Normalized",
      "name": "Daily Usage Normalized",
      "standardDataName": "",
      "units": "MB"
    },
    {
      "dataName": "MonthlyUsageN",
      "dataNameDetail": null,
      "index": 11,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Monthly Usage Normalized",
      "name": "Monthly Usage Normalized",
      "standardDataName": "",
      "units": "MB"
    }
  ],
  "driverDescription": "Events Reporting Upload",
  "driverFlags": 0,
  "driverId": 1562,
  "driverName": "Sierra Wireless Event Reporting",
  "driverNotes": "",
  "driverRegisters": [],
  "eGauge": null,
  "fixedEnergyOffset": 0,
  "functionCode": 11,
  "functionId": "DA0",
  "gateway": null,
  "gatewayFwVersion": "",
  "gatewayId": "601125779901B101",
  "gatewayKey": "",
  "gatewayScriptCount": "",
  "gatewayType": 14,
  "groupAllowed": [],
  "groupKey": "",
  "hardwareId": "C16293_S60308_DA0",
  "hardwareStatus": 1,
  "hasCapacity": false,
  "hash": "",
  "increaseDifference": -1,
  "installDate": "2021-10-15",
  "instance": 0,
  "inverterKw": 0,
  "isConflictAcknowledged": false,
  "isReportable": false,
  "isTcp": false,
  "isThermal": false,
  "key": "H332772",
  "kiosk": null,
  "latitude": 39.6825824,
  "limitedCommunication": false,
  "locusId": "",
  "longitude": -75.01073,
  "meter": null,
  "modelNum": "",
  "newNote": "",
  "oneMinuteData": false,
  "outOfService": false,
  "outOfServiceNote": "",
  "outOfServiceUntil": "2025-12-31T19:18:58.5867913Z",
  "outputAllowed": [],
  "outputKey": "",
  "parentKey": "S60308",
  "port": 0,
  "primary": false,
  "pullData": false,
  "pvConfig": null,
  "readOnly": false,
  "registerOffsets": [],
  "reportExclude": false,
  "reverse": false,
  "sampleRate": 0,
  "serialMode": -1,
  "serialNum": "601125779901B101",
  "settings": [],
  "siteDcShare": 0,
  "siteHasInverterGroups": false,
  "sort": 1,
  "syncToLocus": false,
  "tags": {
    "attributes": [],
    "key": "{\"ancestorKey\":\"H332772\",\"isRecursive\":false,\"types\":[\"attribute\",\"keyword\",\"note\"]}",
    "keywords": [],
    "lastChanged": null,
    "notes": [
      {
        "authorKey": "U36721",
        "authorName": "Tashi Nangchen",
        "date": "2021-10-14T15:46:18Z",
        "isEvent": true,
        "key": "x058aff4b",
        "kind": "text",
        "parentKey": "H332772",
        "text": "Password created"
      }
    ],
    "powerDisplays": []
  },
  "taskKey": "",
  "thermal": null,
  "thread": 0,
  "ts": "2025-06-05T21:55:47Z",
  "turbine": null,
  "unitId": 0,
  "uploadRate": 0,
  "validatedByKey": "",
  "validatedDateTime": "0001-01-01T00:00:00",
  "virtualRegisters": [],
  "virtualWeather": null,
  "weather": null,
  "weatherStationKey1": "",
  "weatherStationKey2": "",
  "zone": null
}
```

[Return to top](#top)

