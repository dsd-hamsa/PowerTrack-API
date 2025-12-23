<a id="top"></a>
# /api/edit/hardware

[← Back to Index](../logs.md)

**Methods:** PUT  
**Status Codes:** 200, 200  

## Table of Contents

- [Payload Structure](#payload-structure)
- [BESS Controller (functionCode: 25)](#bess-controller-functioncode-25)
- [Example](#example)

## Payload Structure

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
      "type": "object",
      "properties": {}
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
      "type": "array"
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

## BESS Controller (functionCode: 25)

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
PUT /api/edit/hardware
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: e4dcd1
Content-Type: application/json
Accept: application/json
referer: https://apps.alsoenergy.com/powertrack/H298742/administration/config
```

**Payload:**

```json
{
  "key": "H298742",
  "parentKey": "S58613",
  "ts": "2025-12-23T00:55:04Z",
  "description": "Sungrow Controller Unit",
  "assetId": "",
  "hardwareId": "C16293_S58613_BS0",
  "instance": 0,
  "functionId": "BS0",
  "functionCode": 25,
  "hardwareStatus": 1,
  "capacityKw": 0,
  "sort": 15,
  "gatewayKey": "H298735",
  "gatewayId": "SCADARICHLAND",
  "gatewayFwVersion": "",
  "gatewayScriptCount": "",
  "gatewayType": 12,
  "serialNum": "",
  "modelNum": "",
  "installDate": "2021-03-30",
  "driverId": 18920,
  "driverDescription": "Modbus Map, STEM APC - DAS, DC-Coupled NEC System STEM Final Version doc for New Marlborough II",
  "driverFlags": 2048,
  "driverName": "STEM_APC(PT)[NM-2]",
  "driverNotes": "",
  "validatedByKey": "",
  "validatedDateTime": "0001-01-01T00:00:00",
  "debug": false,
  "outOfService": false,
  "outOfServiceNote": "",
  "outOfServiceUntil": "2025-12-23T00:55:04.2250611Z",
  "reportExclude": false,
  "limitedCommunication": false,
  "primary": false,
  "address": "192.168.13.166",
  "unitId": 0,
  "isTcp": true,
  "port": 0,
  "serialMode": -1,
  "baud": "",
  "newNote": null,
  "dashboardKey": "",
  "dcRating": 0,
  "defaultChart": 262,
  "chartSectionCode": 12,
  "conflictNames": null,
  "isConflictAcknowledged": false,
  "settings": [
    {
      "originalValue": "0",
      "index": 0,
      "name": "dev:RegOffset",
      "value": "0",
      "type": 0
    },
    {
      "originalValue": 0.001,
      "index": 1,
      "name": "dev:ScaleKW",
      "value": 0.001,
      "type": 2
    },
    {
      "originalValue": 1,
      "index": 2,
      "name": "dev:ScaleKWH",
      "value": 1,
      "type": 2
    },
    {
      "originalValue": "1034",
      "index": 3,
      "name": "dev:tcpport",
      "value": "1034",
      "type": 0
    },
    {
      "originalValue": "Format(\"{0:0) kW\", Calc(\"Total Power\"))",
      "index": 4,
      "name": "dev:info",
      "value": "Format(\"{0:0) kW\", Calc(\"Total Power\"))",
      "type": 0
    },
    {
      "originalValue": "0.001",
      "index": 5,
      "name": "dev:ScaleKVAR",
      "value": "0.001",
      "type": 0
    },
    {
      "originalValue": "0.001",
      "index": 6,
      "name": "dev:ScaleKVA",
      "value": "0.001",
      "type": 0
    },
    {
      "originalValue": "1",
      "index": 7,
      "name": "dev:ScalePF",
      "value": "1",
      "type": 0
    },
    {
      "originalValue": "1",
      "index": 8,
      "name": "dev:ScaleI",
      "value": "1",
      "type": 0
    },
    {
      "originalValue": "1",
      "index": 9,
      "name": "dev:ScaleV",
      "value": "1",
      "type": 0
    },
    {
      "originalValue": "1",
      "index": 10,
      "name": "dev:ScaleFrequency",
      "value": "1",
      "type": 0
    },
    {
      "originalValue": "1,50151;2,50181;3,50211;4,50241",
      "index": 11,
      "name": "dev:RegisterSets",
      "value": "1,50151;2,50181;3,50211;4,50241",
      "type": 0
    }
  ],
  "deviceRegisters": [
    {
      "index": 0,
      "name": "Operating State",
      "localizedName": "Operating State",
      "dataName": "OpState",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "",
      "dataNameDetail": null
    },
    {
      "index": 1,
      "name": "Grid Connection State",
      "localizedName": "Grid Connection State",
      "dataName": "GCState",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "",
      "dataNameDetail": null
    },
    {
      "index": 2,
      "name": "Alarm Bitfield",
      "localizedName": "Alarm Bitfield",
      "dataName": "Alarm",
      "standardDataName": "Alarm",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "",
      "dataNameDetail": null
    },
    {
      "index": 3,
      "name": "Active Power",
      "localizedName": "Active Power",
      "dataName": "KW",
      "standardDataName": "Active_Power",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "kW",
      "dataNameDetail": null
    },
    {
      "index": 4,
      "name": "Apparent Power",
      "localizedName": "Apparent Power",
      "dataName": "KVA",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "kVA",
      "dataNameDetail": null
    },
    {
      "index": 5,
      "name": "Reactive Power",
      "localizedName": "Reactive Power",
      "dataName": "KVAR",
      "standardDataName": "Reactive_Power",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "kVAR",
      "dataNameDetail": null
    },
    {
      "index": 6,
      "name": "Power Factor",
      "localizedName": "Power Factor",
      "dataName": "PowerFactor",
      "standardDataName": "Power_Factor",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "PF",
      "dataNameDetail": null
    },
    {
      "index": 7,
      "name": "Total AC Current",
      "localizedName": "AC Current Average",
      "dataName": "Iac",
      "standardDataName": "Current_Avg",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "A",
      "dataNameDetail": null
    },
    {
      "index": 8,
      "name": "Voltage LL",
      "localizedName": "Voltage LL",
      "dataName": "VoltageLL",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "V",
      "dataNameDetail": null
    },
    {
      "index": 9,
      "name": "Frequency",
      "localizedName": "Frequency",
      "dataName": "Hz",
      "standardDataName": "Frequency",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "Hz",
      "dataNameDetail": null
    },
    {
      "index": 10,
      "name": "Current L1",
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
      "index": 11,
      "name": "Voltage L1-L2",
      "localizedName": "AC Voltage A-B (Line-Line)",
      "dataName": "VacAB",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "V",
      "dataNameDetail": null
    },
    {
      "index": 12,
      "name": "Current L2",
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
      "index": 13,
      "name": "Votlage L2-L3",
      "localizedName": "AC Voltage B-C (Line-Line)",
      "dataName": "VacBC",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "V",
      "dataNameDetail": null
    },
    {
      "index": 14,
      "name": "Current L3",
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
      "index": 15,
      "name": "Phase voltage L3-L1",
      "localizedName": "AC Voltage C-A (Line-Line)",
      "dataName": "VacCA",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "V",
      "dataNameDetail": null
    },
    {
      "index": 16,
      "name": "PortAlarms",
      "localizedName": "PortAlarms",
      "dataName": "PortAlarms",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "",
      "dataNameDetail": null
    },
    {
      "index": 17,
      "name": "DC Current",
      "localizedName": "DC Current Total",
      "dataName": "Idc",
      "standardDataName": "DC_Current_Total",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "A",
      "dataNameDetail": null
    },
    {
      "index": 18,
      "name": "DC Power",
      "localizedName": "DC Power",
      "dataName": "KwDC",
      "standardDataName": "DC_Power_Total",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "kW",
      "dataNameDetail": null
    },
    {
      "index": 19,
      "name": "DC Current(1)",
      "localizedName": "DC current 1",
      "dataName": "Idc1",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "A",
      "dataNameDetail": null
    },
    {
      "index": 20,
      "name": "DC Voltage(1)",
      "localizedName": "DC Voltage 1",
      "dataName": "Vdc1",
      "standardDataName": "DC_Voltage1",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "V",
      "dataNameDetail": null
    },
    {
      "index": 21,
      "name": "DC Power(1)",
      "localizedName": "DC power 1",
      "dataName": "KwDC1",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "kW",
      "dataNameDetail": null
    },
    {
      "index": 22,
      "name": "DC Energy Injected(1)",
      "localizedName": "DC Energy Injected(1)",
      "dataName": "DC_kWh_Injected1",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "kWh",
      "dataNameDetail": null
    },
    {
      "index": 23,
      "name": "DC Energy Absorbed(1)",
      "localizedName": "DC Energy Absorbed(1)",
      "dataName": "DC_kWh_Absorbed1",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "kWh",
      "dataNameDetail": null
    },
    {
      "index": 24,
      "name": "DC Current(2)",
      "localizedName": "DC current 2",
      "dataName": "Idc2",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "A",
      "dataNameDetail": null
    },
    {
      "index": 25,
      "name": "DC Voltage(2)",
      "localizedName": "DC Voltage 2",
      "dataName": "Vdc2",
      "standardDataName": "DC_Voltage2",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "V",
      "dataNameDetail": null
    },
    {
      "index": 26,
      "name": "DC Power(2)",
      "localizedName": "DC power 2",
      "dataName": "KwDC2",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "kW",
      "dataNameDetail": null
    },
    {
      "index": 27,
      "name": "DC Energy Injected(2)",
      "localizedName": "DC Energy Injected(2)",
      "dataName": "DC_kWh_Injected2",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "kWh",
      "dataNameDetail": null
    },
    {
      "index": 28,
      "name": "DC Energy Absorbed(2)",
      "localizedName": "DC Energy Absorbed(2)",
      "dataName": "DC_kWh_Absorbed2",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "kWh",
      "dataNameDetail": null
    },
    {
      "index": 29,
      "name": "State of Charge",
      "localizedName": "Battery State of Charge",
      "dataName": "SoC",
      "standardDataName": "State_of_Charge",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "%",
      "dataNameDetail": null
    },
    {
      "index": 30,
      "name": "State of Health",
      "localizedName": "Battery State of Health",
      "dataName": "SoH",
      "standardDataName": "State_of_Health",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "%",
      "dataNameDetail": null
    },
    {
      "index": 31,
      "name": "Charge Status",
      "localizedName": "Charge Status",
      "dataName": "ChargeStatus",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "",
      "dataNameDetail": null
    },
    {
      "index": 32,
      "name": "Control Mode",
      "localizedName": "Control Mode",
      "dataName": "ControlMode",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "",
      "dataNameDetail": null
    },
    {
      "index": 33,
      "name": "External Battery Voltage",
      "localizedName": "Battery voltage",
      "dataName": "Vbatt",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "V",
      "dataNameDetail": null
    },
    {
      "index": 34,
      "name": "Total DC Current",
      "localizedName": "Battery current 0",
      "dataName": "Ibatt0",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "A",
      "dataNameDetail": null
    },
    {
      "index": 35,
      "name": "Total Power",
      "localizedName": "Total Power",
      "dataName": "KWBatt",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "kW",
      "dataNameDetail": null
    },
    {
      "index": 36,
      "name": "Control Mode",
      "localizedName": "Control mode",
      "dataName": "ControlMode",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": false,
      "isArchived": false,
      "units": "",
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
    "key": "{\"ancestorKey\":\"H298742\",\"isRecursive\":false,\"types\":[\"attribute\",\"keyword\",\"note\"]}",
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
  "latitude": 43.5116113,
  "longitude": -76.1182022,
  "hash": "",
  "hasCapacity": false,
  "inverterKw": 0,
  "siteDcShare": 0,
  "pullData": false
}
```

**Response:**

```json
{
  "key": "H298742",
  "parentKey": "S58613",
  "ts": "2025-12-23T00:55:07Z",
  "description": "Sungrow Controller Unit",
  "assetId": "",
  "hardwareId": "C16293_S58613_BS0",
  "instance": 0,
  "functionId": "BS0",
  "functionCode": 25,
  "hardwareStatus": 1,
  "capacityKw": 0,
  "sort": 15,
  "gatewayKey": "H298735",
  "gatewayId": "SCADARICHLAND",
  "gatewayFwVersion": "",
  "gatewayScriptCount": "",
  "gatewayType": 12,
  "serialNum": "",
  "modelNum": "",
  "installDate": "2021-03-30",
  "driverId": 18920,
  "driverDescription": "Modbus Map, STEM APC - DAS, DC-Coupled NEC System STEM Final Version doc for New Marlborough II",
  "driverFlags": 2048,
  "driverName": "STEM_APC(PT)[NM-2]",
  "driverNotes": "",
  "validatedByKey": "",
  "validatedDateTime": "0001-01-01T00:00:00",
  "debug": false,
  "outOfService": false,
  "outOfServiceNote": "",
  "outOfServiceUntil": "2025-12-23T00:55:07.7215045Z",
  "reportExclude": false,
  "limitedCommunication": false,
  "primary": false,
  "address": "192.168.13.166",
  "unitId": 0,
  "isTcp": true,
  "port": 0,
  "serialMode": -1,
  "baud": "",
  "newNote": "",
  "dashboardKey": "",
  "dcRating": 0,
  "defaultChart": 262,
  "chartSectionCode": 12,
  "conflictNames": null,
  "isConflictAcknowledged": false,
  "settings": [
    {
      "originalValue": "0",
      "index": 0,
      "name": "dev:RegOffset",
      "value": "0",
      "type": 0
    },
    {
      "originalValue": 0.001,
      "index": 1,
      "name": "dev:ScaleKW",
      "value": 0.001,
      "type": 2
    },
    {
      "originalValue": 1,
      "index": 2,
      "name": "dev:ScaleKWH",
      "value": 1,
      "type": 2
    },
    {
      "originalValue": "1034",
      "index": 3,
      "name": "dev:tcpport",
      "value": "1034",
      "type": 0
    },
    {
      "originalValue": "Format(\"{0:0) kW\", Calc(\"Total Power\"))",
      "index": 4,
      "name": "dev:info",
      "value": "Format(\"{0:0) kW\", Calc(\"Total Power\"))",
      "type": 0
    },
    {
      "originalValue": "0.001",
      "index": 5,
      "name": "dev:ScaleKVAR",
      "value": "0.001",
      "type": 0
    },
    {
      "originalValue": "0.001",
      "index": 6,
      "name": "dev:ScaleKVA",
      "value": "0.001",
      "type": 0
    },
    {
      "originalValue": "1",
      "index": 7,
      "name": "dev:ScalePF",
      "value": "1",
      "type": 0
    },
    {
      "originalValue": "1",
      "index": 8,
      "name": "dev:ScaleI",
      "value": "1",
      "type": 0
    },
    {
      "originalValue": "1",
      "index": 9,
      "name": "dev:ScaleV",
      "value": "1",
      "type": 0
    },
    {
      "originalValue": "1",
      "index": 10,
      "name": "dev:ScaleFrequency",
      "value": "1",
      "type": 0
    },
    {
      "originalValue": "1,50151;2,50181;3,50211;4,50241",
      "index": 11,
      "name": "dev:RegisterSets",
      "value": "1,50151;2,50181;3,50211;4,50241",
      "type": 0
    }
  ],
  "deviceRegisters": [
    {
      "index": 0,
      "name": "Operating State",
      "localizedName": "Operating State",
      "dataName": "OpState",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "",
      "dataNameDetail": null
    },
    {
      "index": 1,
      "name": "Grid Connection State",
      "localizedName": "Grid Connection State",
      "dataName": "GCState",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "",
      "dataNameDetail": null
    },
    {
      "index": 2,
      "name": "Alarm Bitfield",
      "localizedName": "Alarm Bitfield",
      "dataName": "Alarm",
      "standardDataName": "Alarm",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "",
      "dataNameDetail": null
    },
    {
      "index": 3,
      "name": "Active Power",
      "localizedName": "Active Power",
      "dataName": "KW",
      "standardDataName": "Active_Power",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "kW",
      "dataNameDetail": null
    },
    {
      "index": 4,
      "name": "Apparent Power",
      "localizedName": "Apparent Power",
      "dataName": "KVA",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "kVA",
      "dataNameDetail": null
    },
    {
      "index": 5,
      "name": "Reactive Power",
      "localizedName": "Reactive Power",
      "dataName": "KVAR",
      "standardDataName": "Reactive_Power",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "kVAR",
      "dataNameDetail": null
    },
    {
      "index": 6,
      "name": "Power Factor",
      "localizedName": "Power Factor",
      "dataName": "PowerFactor",
      "standardDataName": "Power_Factor",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "PF",
      "dataNameDetail": null
    },
    {
      "index": 7,
      "name": "Total AC Current",
      "localizedName": "AC Current Average",
      "dataName": "Iac",
      "standardDataName": "Current_Avg",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "A",
      "dataNameDetail": null
    },
    {
      "index": 8,
      "name": "Voltage LL",
      "localizedName": "Voltage LL",
      "dataName": "VoltageLL",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "V",
      "dataNameDetail": null
    },
    {
      "index": 9,
      "name": "Frequency",
      "localizedName": "Frequency",
      "dataName": "Hz",
      "standardDataName": "Frequency",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "Hz",
      "dataNameDetail": null
    },
    {
      "index": 10,
      "name": "Current L1",
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
      "index": 11,
      "name": "Voltage L1-L2",
      "localizedName": "AC Voltage A-B (Line-Line)",
      "dataName": "VacAB",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "V",
      "dataNameDetail": null
    },
    {
      "index": 12,
      "name": "Current L2",
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
      "index": 13,
      "name": "Votlage L2-L3",
      "localizedName": "AC Voltage B-C (Line-Line)",
      "dataName": "VacBC",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "V",
      "dataNameDetail": null
    },
    {
      "index": 14,
      "name": "Current L3",
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
      "index": 15,
      "name": "Phase voltage L3-L1",
      "localizedName": "AC Voltage C-A (Line-Line)",
      "dataName": "VacCA",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "V",
      "dataNameDetail": null
    },
    {
      "index": 16,
      "name": "PortAlarms",
      "localizedName": "PortAlarms",
      "dataName": "PortAlarms",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "",
      "dataNameDetail": null
    },
    {
      "index": 17,
      "name": "DC Current",
      "localizedName": "DC Current Total",
      "dataName": "Idc",
      "standardDataName": "DC_Current_Total",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "A",
      "dataNameDetail": null
    },
    {
      "index": 18,
      "name": "DC Power",
      "localizedName": "DC Power",
      "dataName": "KwDC",
      "standardDataName": "DC_Power_Total",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "kW",
      "dataNameDetail": null
    },
    {
      "index": 19,
      "name": "DC Current(1)",
      "localizedName": "DC current 1",
      "dataName": "Idc1",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "A",
      "dataNameDetail": null
    },
    {
      "index": 20,
      "name": "DC Voltage(1)",
      "localizedName": "DC Voltage 1",
      "dataName": "Vdc1",
      "standardDataName": "DC_Voltage1",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "V",
      "dataNameDetail": null
    },
    {
      "index": 21,
      "name": "DC Power(1)",
      "localizedName": "DC power 1",
      "dataName": "KwDC1",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "kW",
      "dataNameDetail": null
    },
    {
      "index": 22,
      "name": "DC Energy Injected(1)",
      "localizedName": "DC Energy Injected(1)",
      "dataName": "DC_kWh_Injected1",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "kWh",
      "dataNameDetail": null
    },
    {
      "index": 23,
      "name": "DC Energy Absorbed(1)",
      "localizedName": "DC Energy Absorbed(1)",
      "dataName": "DC_kWh_Absorbed1",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "kWh",
      "dataNameDetail": null
    },
    {
      "index": 24,
      "name": "DC Current(2)",
      "localizedName": "DC current 2",
      "dataName": "Idc2",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "A",
      "dataNameDetail": null
    },
    {
      "index": 25,
      "name": "DC Voltage(2)",
      "localizedName": "DC Voltage 2",
      "dataName": "Vdc2",
      "standardDataName": "DC_Voltage2",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "V",
      "dataNameDetail": null
    },
    {
      "index": 26,
      "name": "DC Power(2)",
      "localizedName": "DC power 2",
      "dataName": "KwDC2",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "kW",
      "dataNameDetail": null
    },
    {
      "index": 27,
      "name": "DC Energy Injected(2)",
      "localizedName": "DC Energy Injected(2)",
      "dataName": "DC_kWh_Injected2",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "kWh",
      "dataNameDetail": null
    },
    {
      "index": 28,
      "name": "DC Energy Absorbed(2)",
      "localizedName": "DC Energy Absorbed(2)",
      "dataName": "DC_kWh_Absorbed2",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "kWh",
      "dataNameDetail": null
    },
    {
      "index": 29,
      "name": "State of Charge",
      "localizedName": "Battery State of Charge",
      "dataName": "SoC",
      "standardDataName": "State_of_Charge",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "%",
      "dataNameDetail": null
    },
    {
      "index": 30,
      "name": "State of Health",
      "localizedName": "Battery State of Health",
      "dataName": "SoH",
      "standardDataName": "State_of_Health",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "%",
      "dataNameDetail": null
    },
    {
      "index": 31,
      "name": "Charge Status",
      "localizedName": "Charge Status",
      "dataName": "ChargeStatus",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "",
      "dataNameDetail": null
    },
    {
      "index": 32,
      "name": "Control Mode",
      "localizedName": "Control Mode",
      "dataName": "ControlMode",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "",
      "dataNameDetail": null
    },
    {
      "index": 33,
      "name": "External Battery Voltage",
      "localizedName": "Battery voltage",
      "dataName": "Vbatt",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "V",
      "dataNameDetail": null
    },
    {
      "index": 34,
      "name": "Total DC Current",
      "localizedName": "Battery current 0",
      "dataName": "Ibatt0",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "A",
      "dataNameDetail": null
    },
    {
      "index": 35,
      "name": "Total Power",
      "localizedName": "Total Power",
      "dataName": "KWBatt",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "kW",
      "dataNameDetail": null
    },
    {
      "index": 36,
      "name": "Control Mode",
      "localizedName": "Control mode",
      "dataName": "ControlMode",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": false,
      "isArchived": false,
      "units": "",
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
    "key": "{\"ancestorKey\":\"H298742\",\"isRecursive\":false,\"types\":[\"attribute\",\"keyword\",\"note\"]}",
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
  "latitude": 43.5116113,
  "longitude": -76.1182022,
  "hash": "",
  "hasCapacity": false,
  "inverterKw": 0,
  "siteDcShare": 0,
  "pullData": false
}
```

[Return to top](#top)

