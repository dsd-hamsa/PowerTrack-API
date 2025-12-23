<a id="top"></a>
# /api/edit/hardware

[← Back to Index](../logs.md)

**Methods:** PUT  
**Status Codes:** 200, 200  

## Table of Contents

- [Payload Structure](#payload-structure)
- [Consumption Meter (functionCode: 3)](#consumption-meter-functioncode-3)
- [Example](#example)

## Payload Structure

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
      "type": "string"
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
      "type": "array"
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
      "properties": {
        "acInfo": {
          "type": "number"
        },
        "grossEnergy": {
          "type": "number"
        },
        "grossEnergyOptions": {
          "type": "object",
          "properties": {
            "name": {
              "type": "string"
            },
            "value": {
              "type": "number"
            }
          }
        },
        "kw": {
          "type": "number"
        },
        "kwhDelivered": {
          "type": "number"
        },
        "kwhNet": {
          "type": "number"
        },
        "kwhReceived": {
          "type": "number"
        },
        "lineResistance": {
          "type": "number"
        },
        "load": {
          "type": "number"
        },
        "loadLoss": {
          "type": "number"
        },
        "maxCurrent": {
          "type": "number"
        },
        "maxPower": {
          "type": "number"
        },
        "maxVoltage": {
          "type": "number"
        },
        "noLoadLoss": {
          "type": "number"
        },
        "scale": {
          "type": "number"
        },
        "scaleKw": {
          "type": "number"
        },
        "scaleKwh": {
          "type": "number"
        },
        "showLoad": {
          "type": "boolean"
        }
      }
    },
    "modelNum": {
      "type": "string"
    },
    "newNote": {
      "type": "object",
      "properties": {}
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
      "type": "array"
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
      "type": "object",
      "properties": {
        "index": {
          "type": "number"
        },
        "name": {
          "type": "string"
        },
        "originalValue": {
          "type": "number"
        },
        "type": {
          "type": "number"
        },
        "value": {
          "type": "number"
        }
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

## Consumption Meter (functionCode: 3)

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
      "type": "string"
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
      "properties": {
        "acInfo": {
          "type": "number"
        },
        "grossEnergy": {
          "type": "number"
        },
        "grossEnergyOptions": {
          "type": "object",
          "properties": {
            "name": {
              "type": "string"
            },
            "value": {
              "type": "number"
            }
          }
        },
        "kw": {
          "type": "number"
        },
        "kwhDelivered": {
          "type": "number"
        },
        "kwhNet": {
          "type": "number"
        },
        "kwhReceived": {
          "type": "number"
        },
        "lineResistance": {
          "type": "number"
        },
        "load": {
          "type": "number"
        },
        "loadLoss": {
          "type": "number"
        },
        "maxCurrent": {
          "type": "number"
        },
        "maxPower": {
          "type": "number"
        },
        "maxVoltage": {
          "type": "number"
        },
        "noLoadLoss": {
          "type": "number"
        },
        "scale": {
          "type": "number"
        },
        "scaleKw": {
          "type": "number"
        },
        "scaleKwh": {
          "type": "number"
        },
        "showLoad": {
          "type": "boolean"
        }
      }
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
      "type": "object",
      "properties": {
        "index": {
          "type": "number"
        },
        "name": {
          "type": "string"
        },
        "originalValue": {
          "type": "number"
        },
        "type": {
          "type": "number"
        },
        "value": {
          "type": "number"
        }
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
PUT /api/edit/hardware
Accept: application/json
Content-Type: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: e4dcd1
referer: https://apps.alsoenergy.com/powertrack/H452226/administration/config
```

**Payload:**

```json
{
  "additionalRegisters": [],
  "address": "192.168.13.42",
  "alsoHardwareId": 0,
  "alsoSiteId": 0,
  "array": null,
  "assetId": "",
  "autoCorrectDecrease": false,
  "autoCorrectIncrease": false,
  "baud": "",
  "capacityKw": 0,
  "chartSectionCode": 3,
  "commonDC": false,
  "commonDCAllMatch": true,
  "configs": [
    "Meter"
  ],
  "conflictNames": null,
  "dashboardKey": "",
  "dcRating": 495720,
  "debug": false,
  "decreaseDifference": 100,
  "defaultChart": 16,
  "description": "Acuvim II - Site Meter",
  "deviceRegisters": [
    {
      "dataName": "Hz",
      "dataNameDetail": null,
      "index": 0,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Frequency",
      "name": "iFreq",
      "standardDataName": "Frequency",
      "units": "Hz"
    },
    {
      "dataName": "PowerFactor",
      "dataNameDetail": null,
      "index": 1,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Power Factor",
      "name": "Power factor",
      "standardDataName": "Power_Factor",
      "units": "PF"
    },
    {
      "dataName": "KWHrec",
      "dataNameDetail": null,
      "index": 2,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Active Energy Received (with Offset)",
      "name": "Import energy",
      "standardDataName": "Active_Energy_Rec",
      "units": "kWh"
    },
    {
      "dataName": "KWHdel",
      "dataNameDetail": null,
      "index": 3,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Active Energy Delivered (with Offset)",
      "name": "Export energy",
      "standardDataName": "Active_Energy_Del",
      "units": "kWh"
    },
    {
      "dataName": "Reactive_Energy_Rec",
      "dataNameDetail": null,
      "index": 4,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Reactive Energy Received",
      "name": "Reactive Import energy",
      "standardDataName": "Reactive_Energy_Rec",
      "units": "kVARh"
    },
    {
      "dataName": "Reactive_Energy_Del",
      "dataNameDetail": null,
      "index": 5,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Reactive Energy Delivered",
      "name": "Reactive Export energy",
      "standardDataName": "Reactive_Energy_Del",
      "units": "kVARh"
    },
    {
      "dataName": "KWHnet",
      "dataNameDetail": null,
      "index": 6,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Active Energy Net",
      "name": "Total energy net",
      "standardDataName": "Active_Energy_Net",
      "units": "kWh"
    },
    {
      "dataName": "Reactive_Energy_Net",
      "dataNameDetail": null,
      "index": 7,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Reactive Energy Net",
      "name": "Reactive Total energy net",
      "standardDataName": "Reactive_Energy_Net",
      "units": "kVARh"
    },
    {
      "dataName": "KVAh",
      "dataNameDetail": null,
      "index": 8,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Apparent Energy Net",
      "name": "Apparent Energy",
      "standardDataName": "Apparent_Energy_Net",
      "units": "kVAh"
    },
    {
      "dataName": "KVAR",
      "dataNameDetail": null,
      "index": 9,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Reactive Power",
      "name": "Reactive Power",
      "standardDataName": "Reactive_Power",
      "units": "kVAR"
    },
    {
      "dataName": "VacA",
      "dataNameDetail": null,
      "index": 10,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "AC Voltage A (Line-Neutral)",
      "name": "Volts A-N",
      "standardDataName": "Voltage_AN",
      "units": "V"
    },
    {
      "dataName": "VacB",
      "dataNameDetail": null,
      "index": 11,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "AC Voltage B (Line-Neutral)",
      "name": "Volts B-N",
      "standardDataName": "Voltage_BN",
      "units": "V"
    },
    {
      "dataName": "VacC",
      "dataNameDetail": null,
      "index": 12,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "AC Voltage C (Line-Neutral)",
      "name": "Volts C-N",
      "standardDataName": "Voltage_CN",
      "units": "V"
    },
    {
      "dataName": "VacLN",
      "dataNameDetail": null,
      "index": 13,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "AC Voltage Average L-N",
      "name": "Average voltage L-N",
      "standardDataName": "Voltage_LN_Avg",
      "units": "V"
    },
    {
      "dataName": "VacAB",
      "dataNameDetail": null,
      "index": 14,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "AC Voltage A-B (Line-Line)",
      "name": "Volts A-B",
      "standardDataName": "Voltage_AB",
      "units": "V"
    },
    {
      "dataName": "VacBC",
      "dataNameDetail": null,
      "index": 15,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "AC Voltage B-C (Line-Line)",
      "name": "Volts B-C",
      "standardDataName": "Voltage_BC",
      "units": "V"
    },
    {
      "dataName": "VacCA",
      "dataNameDetail": null,
      "index": 16,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "AC Voltage C-A (Line-Line)",
      "name": "Volts C-A",
      "standardDataName": "Voltage_CA",
      "units": "V"
    },
    {
      "dataName": "VacLL",
      "dataNameDetail": null,
      "index": 17,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Line to Line voltage",
      "name": "Average voltage L-L",
      "standardDataName": "Voltage_LL_Avg",
      "units": "V"
    },
    {
      "dataName": "IacA",
      "dataNameDetail": null,
      "index": 18,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "AC Current A",
      "name": "Amps A",
      "standardDataName": "Current_A",
      "units": "A"
    },
    {
      "dataName": "IacB",
      "dataNameDetail": null,
      "index": 19,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "AC Current B",
      "name": "Amps B",
      "standardDataName": "Current_B",
      "units": "A"
    },
    {
      "dataName": "IacC",
      "dataNameDetail": null,
      "index": 20,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "AC Current C",
      "name": "Amps C",
      "standardDataName": "Current_C",
      "units": "A"
    },
    {
      "dataName": "Active_Power_A",
      "dataNameDetail": null,
      "index": 21,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Active Power A",
      "name": "Power A",
      "standardDataName": "Active_Power_A",
      "units": "kW"
    },
    {
      "dataName": "Active_Power_B",
      "dataNameDetail": null,
      "index": 22,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Active Power B",
      "name": "Power B",
      "standardDataName": "Active_Power_B",
      "units": "kW"
    },
    {
      "dataName": "Active_Power_C",
      "dataNameDetail": null,
      "index": 23,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Active Power C",
      "name": "Power C",
      "standardDataName": "Active_Power_C",
      "units": "kW"
    },
    {
      "dataName": "KW",
      "dataNameDetail": null,
      "index": 24,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Active Power",
      "name": "Total Power",
      "standardDataName": "Active_Power",
      "units": "kW"
    },
    {
      "dataName": "PFA",
      "dataNameDetail": null,
      "index": 25,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Power Factor A",
      "name": "Power factor A",
      "standardDataName": "Power_Factor_A",
      "units": "PF"
    },
    {
      "dataName": "PFB",
      "dataNameDetail": null,
      "index": 26,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Power Factor B",
      "name": "Power factor B",
      "standardDataName": "Power_Factor_B",
      "units": "PF"
    },
    {
      "dataName": "PFC",
      "dataNameDetail": null,
      "index": 27,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Power Factor C",
      "name": "Power factor C",
      "standardDataName": "Power_Factor_C",
      "units": "PF"
    },
    {
      "dataName": "kVARA",
      "dataNameDetail": null,
      "index": 28,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Reactive Power A",
      "name": "Phase A Reactive Power ",
      "standardDataName": "Reactive_Power_A",
      "units": "kVAR"
    },
    {
      "dataName": "kVARB",
      "dataNameDetail": null,
      "index": 29,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Reactive Power B",
      "name": "Phase B Reactive Power",
      "standardDataName": "Reactive_Power_B",
      "units": "kVAR"
    },
    {
      "dataName": "kVARC",
      "dataNameDetail": null,
      "index": 30,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Reactive Power C",
      "name": "Phase C Reactive Power ",
      "standardDataName": "Reactive_Power_C",
      "units": "kVAR"
    },
    {
      "dataName": "KWHdelRaw",
      "dataNameDetail": null,
      "index": 31,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Active Energy Delivered (without Offset)",
      "name": "Active Energy Delivered Raw",
      "standardDataName": "Active_Energy_Raw_Del",
      "units": "kWh"
    },
    {
      "dataName": "KWHrecRaw",
      "dataNameDetail": null,
      "index": 32,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Active Energy Received (without Offset)",
      "name": "Active Energy Received Raw",
      "standardDataName": "Active_Energy_Raw_Rec",
      "units": "kWh"
    },
    {
      "dataName": "KWHnetRaw",
      "dataNameDetail": null,
      "index": 33,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Active Energy Net Raw",
      "name": "Active Energy Net Raw",
      "standardDataName": "Active_Energy_Raw_Net",
      "units": "kWh"
    },
    {
      "dataName": "THD_Current",
      "dataNameDetail": null,
      "index": 34,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Phase Total Harmonic Current Distortion",
      "name": "Phase Total Harmonic Current Distortion",
      "standardDataName": "THD_Current",
      "units": "A"
    },
    {
      "dataName": "THD_Voltage",
      "dataNameDetail": null,
      "index": 35,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Phase Total Harmonic Voltage Distortion",
      "name": "Phase Total Harmonic Voltage Distortion",
      "standardDataName": "THD_Voltage",
      "units": "V"
    },
    {
      "dataName": "Potential_XMFR_Primary",
      "dataNameDetail": null,
      "index": 36,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "Potential Transformer Primary Ratio",
      "name": "PT Ratio (primary)",
      "standardDataName": "Potential_XMFR_Primary",
      "units": ""
    },
    {
      "dataName": "Potential_XMFR_Secondary",
      "dataNameDetail": null,
      "index": 37,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "Potential Transformer Secondary Ratio",
      "name": "PT Ratio (secondary)",
      "standardDataName": "Potential_XMFR_Secondary",
      "units": ""
    },
    {
      "dataName": "Current_XMFR_Primary",
      "dataNameDetail": null,
      "index": 38,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "Current Transformer Primary Ratio",
      "name": "CT Ratio (primary)",
      "standardDataName": "Current_XMFR_Primary",
      "units": ""
    },
    {
      "dataName": "Current_XMFR_Secondary",
      "dataNameDetail": null,
      "index": 39,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "Current Transformer Secondary Ratio",
      "name": "CT Ratio (secondary)",
      "standardDataName": "Current_XMFR_Secondary",
      "units": ""
    }
  ],
  "driverDescription": "Meters USA Acuvim II Power meter - Primary Mode",
  "driverFlags": 16385,
  "driverId": 19601,
  "driverName": "AccuEnergy Acuvim II(R-D-5A) Primary Mode(SS)Standard",
  "driverNotes": "Driver conforms to Standard IO, supercedes all Acuvim Primary Mode Drivers. If Acuvim is in Secondary mode, please use DID 19604.\n\nBustest kW:\nreg=16418 numreg=2\nRogowski Coil Meters: Apply ScaleKW value of 100.\n\n*If Basic Parameter Mode =1 & Energy Display Mode = 0 this means Primary Mode is selected.  ScaleKW = 0.001 |ScaleKWH = 0.1 | ScaleAmps = 1.0 | ScaleVolts = 1.0\n*If vice versa, Secondary Mode is enabled, use DID 19604\n\nConfirmed to work with versions below:\nMeter Firmware - v4.10\nModule Firmware Version - v1.19",
  "driverRegisters": [],
  "eGauge": null,
  "fixedEnergyOffset": 0,
  "functionCode": 3,
  "functionId": "CM0",
  "gateway": null,
  "gatewayFwVersion": "",
  "gatewayId": "000CC68CBCE4",
  "gatewayKey": "H452224",
  "gatewayScriptCount": "",
  "gatewayType": 2,
  "groupAllowed": [],
  "groupKey": "",
  "hardwareId": "C20909_S65082_CM0",
  "hardwareStatus": 1,
  "hasCapacity": true,
  "hash": "",
  "increaseDifference": -1,
  "installDate": "2023-06-07",
  "instance": 0,
  "inverterKw": 0,
  "isConflictAcknowledged": false,
  "isReportable": true,
  "isTcp": true,
  "isThermal": false,
  "key": "H452226",
  "kiosk": null,
  "latitude": 33.1108632,
  "limitedCommunication": false,
  "locusId": "",
  "longitude": -117.1060686,
  "meter": {
    "acInfo": 2,
    "grossEnergy": 0,
    "grossEnergyOptions": [
      {
        "name": "Undefined",
        "value": 0
      },
      {
        "name": "Export energy",
        "value": 2
      },
      {
        "name": "Import energy",
        "value": 3
      }
    ],
    "kw": 101.043109375,
    "kwhDelivered": 126409.70000000001,
    "kwhNet": 1342000.7000000002,
    "kwhReceived": 1468410.5,
    "lineResistance": 0,
    "load": 0,
    "loadLoss": 0,
    "maxCurrent": 1050,
    "maxPower": 495.72,
    "maxVoltage": 480,
    "noLoadLoss": 0,
    "scale": 0,
    "scaleKw": 0.001,
    "scaleKwh": 0.1,
    "showLoad": false
  },
  "modelNum": "ACCUENERGY IIR-D-mV-P1V3",
  "newNote": null,
  "oneMinuteData": false,
  "outOfService": false,
  "outOfServiceNote": "",
  "outOfServiceUntil": "2025-12-23T00:46:25.8411281Z",
  "outputAllowed": [],
  "outputKey": "",
  "parentKey": "S65082",
  "port": 2,
  "primary": false,
  "pullData": false,
  "pvConfig": null,
  "readOnly": false,
  "registerOffsets": [],
  "reportExclude": false,
  "reverse": false,
  "sampleRate": 0,
  "serialMode": 2,
  "serialNum": "AHB53032239",
  "settings": [
    {
      "index": 0,
      "name": "dev:RegOffset",
      "originalValue": 0,
      "type": 1,
      "value": 0
    },
    {
      "index": 1,
      "name": "dev:ScaleKW",
      "originalValue": 0.001,
      "type": 2,
      "value": 0.001
    },
    {
      "index": 2,
      "name": "dev:Reverse",
      "originalValue": "0",
      "type": 0,
      "value": "0"
    },
    {
      "index": 3,
      "name": "dev:ScaleKWH",
      "originalValue": 0.1,
      "type": 2,
      "value": 0.1
    },
    {
      "index": 4,
      "name": "dev:Enable",
      "originalValue": 0,
      "type": 1,
      "value": 0
    },
    {
      "index": 5,
      "name": "dev:ScaleAmps",
      "originalValue": 1,
      "type": 2,
      "value": 1
    },
    {
      "index": 6,
      "name": "dev:ScaleVolts",
      "originalValue": 1,
      "type": 2,
      "value": 1
    },
    {
      "index": 7,
      "name": "dev:portMode",
      "originalValue": "rs485",
      "type": 0,
      "value": "rs485"
    }
  ],
  "siteDcShare": 0,
  "siteHasInverterGroups": false,
  "sort": 4,
  "syncToLocus": false,
  "tags": {
    "attributes": [],
    "key": "{\"ancestorKey\":\"H452226\",\"isRecursive\":false,\"types\":[\"attribute\",\"keyword\",\"note\"]}",
    "keywords": [],
    "lastChanged": null,
    "notes": [],
    "powerDisplays": []
  },
  "taskKey": "",
  "thermal": null,
  "thread": 0,
  "ts": "2025-12-23T00:46:25Z",
  "turbine": null,
  "unitId": 1,
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

**Response:**

```json
{
  "additionalRegisters": [],
  "address": "192.168.13.42",
  "alsoHardwareId": 0,
  "alsoSiteId": 0,
  "array": null,
  "assetId": "",
  "autoCorrectDecrease": false,
  "autoCorrectIncrease": false,
  "baud": "",
  "capacityKw": 0,
  "chartSectionCode": 3,
  "commonDC": false,
  "commonDCAllMatch": true,
  "configs": [
    "Meter"
  ],
  "conflictNames": null,
  "dashboardKey": "",
  "dcRating": 495720,
  "debug": false,
  "decreaseDifference": 100,
  "defaultChart": 16,
  "description": "Acuvim II - Site Meter",
  "deviceRegisters": [
    {
      "dataName": "Hz",
      "dataNameDetail": null,
      "index": 0,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Frequency",
      "name": "iFreq",
      "standardDataName": "Frequency",
      "units": "Hz"
    },
    {
      "dataName": "PowerFactor",
      "dataNameDetail": null,
      "index": 1,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Power Factor",
      "name": "Power factor",
      "standardDataName": "Power_Factor",
      "units": "PF"
    },
    {
      "dataName": "KWHrec",
      "dataNameDetail": null,
      "index": 2,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Active Energy Received (with Offset)",
      "name": "Import energy",
      "standardDataName": "Active_Energy_Rec",
      "units": "kWh"
    },
    {
      "dataName": "KWHdel",
      "dataNameDetail": null,
      "index": 3,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Active Energy Delivered (with Offset)",
      "name": "Export energy",
      "standardDataName": "Active_Energy_Del",
      "units": "kWh"
    },
    {
      "dataName": "Reactive_Energy_Rec",
      "dataNameDetail": null,
      "index": 4,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Reactive Energy Received",
      "name": "Reactive Import energy",
      "standardDataName": "Reactive_Energy_Rec",
      "units": "kVARh"
    },
    {
      "dataName": "Reactive_Energy_Del",
      "dataNameDetail": null,
      "index": 5,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Reactive Energy Delivered",
      "name": "Reactive Export energy",
      "standardDataName": "Reactive_Energy_Del",
      "units": "kVARh"
    },
    {
      "dataName": "KWHnet",
      "dataNameDetail": null,
      "index": 6,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Active Energy Net",
      "name": "Total energy net",
      "standardDataName": "Active_Energy_Net",
      "units": "kWh"
    },
    {
      "dataName": "Reactive_Energy_Net",
      "dataNameDetail": null,
      "index": 7,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Reactive Energy Net",
      "name": "Reactive Total energy net",
      "standardDataName": "Reactive_Energy_Net",
      "units": "kVARh"
    },
    {
      "dataName": "KVAh",
      "dataNameDetail": null,
      "index": 8,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Apparent Energy Net",
      "name": "Apparent Energy",
      "standardDataName": "Apparent_Energy_Net",
      "units": "kVAh"
    },
    {
      "dataName": "KVAR",
      "dataNameDetail": null,
      "index": 9,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Reactive Power",
      "name": "Reactive Power",
      "standardDataName": "Reactive_Power",
      "units": "kVAR"
    },
    {
      "dataName": "VacA",
      "dataNameDetail": null,
      "index": 10,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "AC Voltage A (Line-Neutral)",
      "name": "Volts A-N",
      "standardDataName": "Voltage_AN",
      "units": "V"
    },
    {
      "dataName": "VacB",
      "dataNameDetail": null,
      "index": 11,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "AC Voltage B (Line-Neutral)",
      "name": "Volts B-N",
      "standardDataName": "Voltage_BN",
      "units": "V"
    },
    {
      "dataName": "VacC",
      "dataNameDetail": null,
      "index": 12,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "AC Voltage C (Line-Neutral)",
      "name": "Volts C-N",
      "standardDataName": "Voltage_CN",
      "units": "V"
    },
    {
      "dataName": "VacLN",
      "dataNameDetail": null,
      "index": 13,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "AC Voltage Average L-N",
      "name": "Average voltage L-N",
      "standardDataName": "Voltage_LN_Avg",
      "units": "V"
    },
    {
      "dataName": "VacAB",
      "dataNameDetail": null,
      "index": 14,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "AC Voltage A-B (Line-Line)",
      "name": "Volts A-B",
      "standardDataName": "Voltage_AB",
      "units": "V"
    },
    {
      "dataName": "VacBC",
      "dataNameDetail": null,
      "index": 15,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "AC Voltage B-C (Line-Line)",
      "name": "Volts B-C",
      "standardDataName": "Voltage_BC",
      "units": "V"
    },
    {
      "dataName": "VacCA",
      "dataNameDetail": null,
      "index": 16,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "AC Voltage C-A (Line-Line)",
      "name": "Volts C-A",
      "standardDataName": "Voltage_CA",
      "units": "V"
    },
    {
      "dataName": "VacLL",
      "dataNameDetail": null,
      "index": 17,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Line to Line voltage",
      "name": "Average voltage L-L",
      "standardDataName": "Voltage_LL_Avg",
      "units": "V"
    },
    {
      "dataName": "IacA",
      "dataNameDetail": null,
      "index": 18,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "AC Current A",
      "name": "Amps A",
      "standardDataName": "Current_A",
      "units": "A"
    },
    {
      "dataName": "IacB",
      "dataNameDetail": null,
      "index": 19,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "AC Current B",
      "name": "Amps B",
      "standardDataName": "Current_B",
      "units": "A"
    },
    {
      "dataName": "IacC",
      "dataNameDetail": null,
      "index": 20,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "AC Current C",
      "name": "Amps C",
      "standardDataName": "Current_C",
      "units": "A"
    },
    {
      "dataName": "Active_Power_A",
      "dataNameDetail": null,
      "index": 21,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Active Power A",
      "name": "Power A",
      "standardDataName": "Active_Power_A",
      "units": "kW"
    },
    {
      "dataName": "Active_Power_B",
      "dataNameDetail": null,
      "index": 22,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Active Power B",
      "name": "Power B",
      "standardDataName": "Active_Power_B",
      "units": "kW"
    },
    {
      "dataName": "Active_Power_C",
      "dataNameDetail": null,
      "index": 23,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Active Power C",
      "name": "Power C",
      "standardDataName": "Active_Power_C",
      "units": "kW"
    },
    {
      "dataName": "KW",
      "dataNameDetail": null,
      "index": 24,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Active Power",
      "name": "Total Power",
      "standardDataName": "Active_Power",
      "units": "kW"
    },
    {
      "dataName": "PFA",
      "dataNameDetail": null,
      "index": 25,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Power Factor A",
      "name": "Power factor A",
      "standardDataName": "Power_Factor_A",
      "units": "PF"
    },
    {
      "dataName": "PFB",
      "dataNameDetail": null,
      "index": 26,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Power Factor B",
      "name": "Power factor B",
      "standardDataName": "Power_Factor_B",
      "units": "PF"
    },
    {
      "dataName": "PFC",
      "dataNameDetail": null,
      "index": 27,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Power Factor C",
      "name": "Power factor C",
      "standardDataName": "Power_Factor_C",
      "units": "PF"
    },
    {
      "dataName": "kVARA",
      "dataNameDetail": null,
      "index": 28,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Reactive Power A",
      "name": "Phase A Reactive Power ",
      "standardDataName": "Reactive_Power_A",
      "units": "kVAR"
    },
    {
      "dataName": "kVARB",
      "dataNameDetail": null,
      "index": 29,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Reactive Power B",
      "name": "Phase B Reactive Power",
      "standardDataName": "Reactive_Power_B",
      "units": "kVAR"
    },
    {
      "dataName": "kVARC",
      "dataNameDetail": null,
      "index": 30,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Reactive Power C",
      "name": "Phase C Reactive Power ",
      "standardDataName": "Reactive_Power_C",
      "units": "kVAR"
    },
    {
      "dataName": "KWHdelRaw",
      "dataNameDetail": null,
      "index": 31,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Active Energy Delivered (without Offset)",
      "name": "Active Energy Delivered Raw",
      "standardDataName": "Active_Energy_Raw_Del",
      "units": "kWh"
    },
    {
      "dataName": "KWHrecRaw",
      "dataNameDetail": null,
      "index": 32,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Active Energy Received (without Offset)",
      "name": "Active Energy Received Raw",
      "standardDataName": "Active_Energy_Raw_Rec",
      "units": "kWh"
    },
    {
      "dataName": "KWHnetRaw",
      "dataNameDetail": null,
      "index": 33,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Active Energy Net Raw",
      "name": "Active Energy Net Raw",
      "standardDataName": "Active_Energy_Raw_Net",
      "units": "kWh"
    },
    {
      "dataName": "THD_Current",
      "dataNameDetail": null,
      "index": 34,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Phase Total Harmonic Current Distortion",
      "name": "Phase Total Harmonic Current Distortion",
      "standardDataName": "THD_Current",
      "units": "A"
    },
    {
      "dataName": "THD_Voltage",
      "dataNameDetail": null,
      "index": 35,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Phase Total Harmonic Voltage Distortion",
      "name": "Phase Total Harmonic Voltage Distortion",
      "standardDataName": "THD_Voltage",
      "units": "V"
    },
    {
      "dataName": "Potential_XMFR_Primary",
      "dataNameDetail": null,
      "index": 36,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "Potential Transformer Primary Ratio",
      "name": "PT Ratio (primary)",
      "standardDataName": "Potential_XMFR_Primary",
      "units": ""
    },
    {
      "dataName": "Potential_XMFR_Secondary",
      "dataNameDetail": null,
      "index": 37,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "Potential Transformer Secondary Ratio",
      "name": "PT Ratio (secondary)",
      "standardDataName": "Potential_XMFR_Secondary",
      "units": ""
    },
    {
      "dataName": "Current_XMFR_Primary",
      "dataNameDetail": null,
      "index": 38,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "Current Transformer Primary Ratio",
      "name": "CT Ratio (primary)",
      "standardDataName": "Current_XMFR_Primary",
      "units": ""
    },
    {
      "dataName": "Current_XMFR_Secondary",
      "dataNameDetail": null,
      "index": 39,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "Current Transformer Secondary Ratio",
      "name": "CT Ratio (secondary)",
      "standardDataName": "Current_XMFR_Secondary",
      "units": ""
    }
  ],
  "driverDescription": "Meters USA Acuvim II Power meter - Primary Mode",
  "driverFlags": 16385,
  "driverId": 19601,
  "driverName": "AccuEnergy Acuvim II(R-D-5A) Primary Mode(SS)Standard",
  "driverNotes": "Driver conforms to Standard IO, supercedes all Acuvim Primary Mode Drivers. If Acuvim is in Secondary mode, please use DID 19604.\n\nBustest kW:\nreg=16418 numreg=2\nRogowski Coil Meters: Apply ScaleKW value of 100.\n\n*If Basic Parameter Mode =1 & Energy Display Mode = 0 this means Primary Mode is selected.  ScaleKW = 0.001 |ScaleKWH = 0.1 | ScaleAmps = 1.0 | ScaleVolts = 1.0\n*If vice versa, Secondary Mode is enabled, use DID 19604\n\nConfirmed to work with versions below:\nMeter Firmware - v4.10\nModule Firmware Version - v1.19",
  "driverRegisters": [],
  "eGauge": null,
  "fixedEnergyOffset": 0,
  "functionCode": 3,
  "functionId": "CM0",
  "gateway": null,
  "gatewayFwVersion": "",
  "gatewayId": "000CC68CBCE4",
  "gatewayKey": "H452224",
  "gatewayScriptCount": "",
  "gatewayType": 2,
  "groupAllowed": [],
  "groupKey": "",
  "hardwareId": "C20909_S65082_CM0",
  "hardwareStatus": 1,
  "hasCapacity": true,
  "hash": "",
  "increaseDifference": -1,
  "installDate": "2023-06-07",
  "instance": 0,
  "inverterKw": 0,
  "isConflictAcknowledged": false,
  "isReportable": true,
  "isTcp": true,
  "isThermal": false,
  "key": "H452226",
  "kiosk": null,
  "latitude": 33.1108632,
  "limitedCommunication": false,
  "locusId": "",
  "longitude": -117.1060686,
  "meter": {
    "acInfo": 2,
    "grossEnergy": 0,
    "grossEnergyOptions": [
      {
        "name": "Undefined",
        "value": 0
      },
      {
        "name": "Export energy",
        "value": 2
      },
      {
        "name": "Import energy",
        "value": 3
      }
    ],
    "kw": 101.043109375,
    "kwhDelivered": 126409.70000000001,
    "kwhNet": 1342000.7000000002,
    "kwhReceived": 1468410.5,
    "lineResistance": 0,
    "load": 0,
    "loadLoss": 0,
    "maxCurrent": 1050,
    "maxPower": 495.72,
    "maxVoltage": 480,
    "noLoadLoss": 0,
    "scale": 0,
    "scaleKw": 0.001,
    "scaleKwh": 0.1,
    "showLoad": false
  },
  "modelNum": "ACCUENERGY IIR-D-mV-P1V3",
  "newNote": "",
  "oneMinuteData": false,
  "outOfService": false,
  "outOfServiceNote": "",
  "outOfServiceUntil": "2025-12-23T00:46:44.9572398Z",
  "outputAllowed": [],
  "outputKey": "",
  "parentKey": "S65082",
  "port": 2,
  "primary": false,
  "pullData": false,
  "pvConfig": null,
  "readOnly": false,
  "registerOffsets": [],
  "reportExclude": false,
  "reverse": false,
  "sampleRate": 0,
  "serialMode": 2,
  "serialNum": "AHB53032239",
  "settings": [
    {
      "index": 0,
      "name": "dev:RegOffset",
      "originalValue": 0,
      "type": 1,
      "value": 0
    },
    {
      "index": 1,
      "name": "dev:ScaleKW",
      "originalValue": 0.001,
      "type": 2,
      "value": 0.001
    },
    {
      "index": 2,
      "name": "dev:Reverse",
      "originalValue": "0",
      "type": 0,
      "value": "0"
    },
    {
      "index": 3,
      "name": "dev:ScaleKWH",
      "originalValue": 0.1,
      "type": 2,
      "value": 0.1
    },
    {
      "index": 4,
      "name": "dev:Enable",
      "originalValue": 0,
      "type": 1,
      "value": 0
    },
    {
      "index": 5,
      "name": "dev:ScaleAmps",
      "originalValue": 1,
      "type": 2,
      "value": 1
    },
    {
      "index": 6,
      "name": "dev:ScaleVolts",
      "originalValue": 1,
      "type": 2,
      "value": 1
    },
    {
      "index": 7,
      "name": "dev:portMode",
      "originalValue": "rs485",
      "type": 0,
      "value": "rs485"
    },
    {
      "index": 8,
      "name": "dev:UnitID",
      "originalValue": 1,
      "type": 1,
      "value": 1
    }
  ],
  "siteDcShare": 0,
  "siteHasInverterGroups": false,
  "sort": 4,
  "syncToLocus": false,
  "tags": {
    "attributes": [],
    "key": "{\"ancestorKey\":\"H452226\",\"isRecursive\":false,\"types\":[\"attribute\",\"keyword\",\"note\"]}",
    "keywords": [],
    "lastChanged": null,
    "notes": [],
    "powerDisplays": []
  },
  "taskKey": "",
  "thermal": null,
  "thread": 0,
  "ts": "2025-12-23T00:46:44Z",
  "turbine": null,
  "unitId": 1,
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

