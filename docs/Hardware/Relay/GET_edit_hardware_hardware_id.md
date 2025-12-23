<a id="top"></a>
# /api/edit/hardware/{hardware_id}

[← Back to Index](../logs.md)

**Methods:** GET  
**Status Codes:** 200  

## Table of Contents

- [Relay (functionCode: 34)](#relay-functioncode-34)
- [Example](#example)

## Relay (functionCode: 34)

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
          "type": "number"
        },
        "index": {
          "type": "number"
        },
        "name": {
          "type": "string"
        },
        "value": {
          "type": "number"
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
          "type": "array",
          "items": {
            "type": "unknown"
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
GET /api/edit/hardware/H582342
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: e4dcd1
Accept: application/json
referer: https://apps.alsoenergy.com/powertrack/H582342/administration/config
```

**Response:**

```json
{
  "key": "H582342",
  "parentKey": "S68624",
  "ts": "2025-10-14T14:42:58Z",
  "description": "SEL 351 Relay (EFG)",
  "assetId": "",
  "hardwareId": "C16294_S68624_SW2",
  "instance": 2,
  "functionId": "SW2",
  "functionCode": 34,
  "hardwareStatus": 1,
  "capacityKw": 0,
  "sort": 303,
  "gatewayKey": "",
  "gatewayId": "",
  "gatewayFwVersion": "",
  "gatewayScriptCount": "",
  "gatewayType": 20,
  "serialNum": "",
  "modelNum": "",
  "installDate": "2025-09-17",
  "driverId": 7684,
  "driverDescription": "SEL 351 (DMID 2701)",
  "driverFlags": 2048,
  "driverName": "SEL 351 (DMID 2701)",
  "driverNotes": "SEL 351 (DMID 2701)\n*** Do not check Energy Flags on KWHrec, KWHdel, KVAR_rec, or KVAR_del ***",
  "validatedByKey": "",
  "validatedDateTime": "0001-01-01T00:00:00",
  "debug": false,
  "outOfService": false,
  "outOfServiceNote": "",
  "outOfServiceUntil": "2025-12-23T00:55:35.2417586Z",
  "reportExclude": false,
  "limitedCommunication": false,
  "primary": false,
  "address": "192.168.13.183",
  "unitId": 0,
  "isTcp": true,
  "port": 0,
  "serialMode": -1,
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
      "originalValue": 0.001,
      "index": 0,
      "name": "dev:ScaleKW",
      "value": 0.001,
      "type": 2
    },
    {
      "originalValue": 0.001,
      "index": 1,
      "name": "dev:ScaleKWH",
      "value": 0.001,
      "type": 2
    },
    {
      "originalValue": 0,
      "index": 2,
      "name": "dev:KWHrecOffset",
      "value": 0,
      "type": 2
    },
    {
      "originalValue": 0,
      "index": 3,
      "name": "dev:KWHdelOffset",
      "value": 0,
      "type": 2
    },
    {
      "originalValue": "SW2",
      "index": 4,
      "name": "ShortName",
      "value": "SW2",
      "type": 0
    },
    {
      "originalValue": "Format(\"{0:0.0}\", Calc(\"Status\"))",
      "index": 5,
      "name": "dev:Info",
      "value": "Format(\"{0:0.0}\", Calc(\"Status\"))",
      "type": 0
    }
  ],
  "deviceRegisters": [
    {
      "index": 0,
      "name": "AC Phase A Current",
      "localizedName": "AC Current A",
      "dataName": "IacA",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "A",
      "dataNameDetail": null
    },
    {
      "index": 1,
      "name": "AC Phase B Current",
      "localizedName": "AC Current B",
      "dataName": "IacB",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "A",
      "dataNameDetail": null
    },
    {
      "index": 2,
      "name": "AC Phase C Current",
      "localizedName": "AC Current C",
      "dataName": "IacC",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "A",
      "dataNameDetail": null
    },
    {
      "index": 3,
      "name": "AC Power factor",
      "localizedName": "Power Factor",
      "dataName": "PowerFactor",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "PF",
      "dataNameDetail": null
    },
    {
      "index": 4,
      "name": "AC Phase A Voltage",
      "localizedName": "AC Voltage A (Line-Neutral)",
      "dataName": "VacA",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "V",
      "dataNameDetail": null
    },
    {
      "index": 5,
      "name": "AC Phase B Voltage",
      "localizedName": "AC Voltage B (Line-Neutral)",
      "dataName": "VacB",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "V",
      "dataNameDetail": null
    },
    {
      "index": 6,
      "name": "AC Phase C Voltage",
      "localizedName": "AC Voltage C (Line-Neutral)",
      "dataName": "VacC",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "V",
      "dataNameDetail": null
    },
    {
      "index": 7,
      "name": "AC Reactive power",
      "localizedName": "Reactive Power",
      "dataName": "KVAR",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "kVAR",
      "dataNameDetail": null
    },
    {
      "index": 8,
      "name": "AC Power",
      "localizedName": "Active Power",
      "dataName": "KW",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "kW",
      "dataNameDetail": null
    },
    {
      "index": 9,
      "name": "AC Energy",
      "localizedName": "Active Energy Net",
      "dataName": "KWHnet",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "kWh",
      "dataNameDetail": null
    },
    {
      "index": 10,
      "name": "AC Total Imported Real Energy",
      "localizedName": "Active Energy Received (with Offset)",
      "dataName": "KWHrec",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "kWh",
      "dataNameDetail": null
    },
    {
      "index": 11,
      "name": "AC Total Imported Reactive Energy",
      "localizedName": "AC Total Imported Reactive Energy",
      "dataName": "KVAR_rec",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "VARh",
      "dataNameDetail": null
    },
    {
      "index": 12,
      "name": "AC Total Exported Real Energy",
      "localizedName": "Active Energy Delivered (with Offset)",
      "dataName": "KWHdel",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "kWh",
      "dataNameDetail": null
    },
    {
      "index": 13,
      "name": "AC Total Exported Reactive Energy",
      "localizedName": "AC Total Exported Reactive Energy",
      "dataName": "KVAR_del",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "VARh",
      "dataNameDetail": null
    },
    {
      "index": 14,
      "name": "DC Current Ground",
      "localizedName": "DC Current Ground",
      "dataName": "Idcg",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": false,
      "units": "A",
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
    "key": "{\"ancestorKey\":\"H582342\",\"isRecursive\":false,\"types\":[\"attribute\",\"keyword\",\"note\"]}",
    "lastChanged": null,
    "attributes": [],
    "keywords": [],
    "notes": [],
    "powerDisplays": []
  },
  "sampleRate": 0,
  "uploadRate": 0,
  "oneMinuteData": false,
  "thread": 0,
  "alsoHardwareId": 0,
  "alsoSiteId": 0,
  "siteHasInverterGroups": false,
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
  "latitude": 34.425341,
  "longitude": -118.5971947,
  "hash": "",
  "hasCapacity": false,
  "inverterKw": 0,
  "siteDcShare": 0,
  "pullData": false
}
```

[Return to top](#top)

