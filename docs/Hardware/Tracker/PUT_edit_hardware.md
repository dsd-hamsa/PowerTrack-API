<a id="top"></a>
# /api/edit/hardware

[← Back to Index](../logs.md)

**Methods:** PUT  
**Status Codes:** 200, 200  

## Table of Contents

- [Payload Structure](#payload-structure)
- [Tracker (functionCode: 24)](#tracker-functioncode-24)
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
      "properties": {
        "azimuth": {
          "type": "number"
        },
        "firstIndex": {
          "type": "number"
        },
        "initialAngle": {
          "type": "number"
        },
        "serials": {
          "type": "array",
          "items": {
            "type": "unknown"
          }
        },
        "tilt": {
          "type": "number"
        },
        "trackerGcr": {
          "type": "number"
        },
        "trackerGcrWest": {
          "type": "number"
        },
        "tracking": {
          "type": "number"
        }
      }
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
      "properties": {}
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

## Tracker (functionCode: 24)

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
      "properties": {
        "azimuth": {
          "type": "number"
        },
        "firstIndex": {
          "type": "number"
        },
        "initialAngle": {
          "type": "number"
        },
        "serials": {
          "type": "array",
          "items": {
            "type": "unknown"
          }
        },
        "tilt": {
          "type": "number"
        },
        "trackerGcr": {
          "type": "number"
        },
        "trackerGcrWest": {
          "type": "number"
        },
        "tracking": {
          "type": "number"
        }
      }
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
referer: https://apps.alsoenergy.com/powertrack/H462027/administration/config
```

**Payload:**

```json
{
  "additionalRegisters": [],
  "address": "192.168.13.171",
  "alsoHardwareId": 0,
  "alsoSiteId": 0,
  "array": {
    "azimuth": 180,
    "firstIndex": 0,
    "initialAngle": -55,
    "serials": [],
    "tilt": 0,
    "trackerGcr": 0.4,
    "trackerGcrWest": 0,
    "tracking": 1
  },
  "assetId": "",
  "autoCorrectDecrease": false,
  "autoCorrectIncrease": false,
  "baud": "",
  "capacityKw": 0,
  "chartSectionCode": 16,
  "commonDC": false,
  "commonDCAllMatch": true,
  "configs": [
    "Array"
  ],
  "conflictNames": null,
  "dashboardKey": "",
  "dcRating": 0,
  "debug": false,
  "decreaseDifference": 100,
  "defaultChart": 74,
  "description": "Solar FlexRack Tracker Control",
  "deviceRegisters": [
    {
      "dataName": "Op_Status",
      "dataNameDetail": null,
      "index": 0,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Operating Status",
      "name": "Operating Status",
      "standardDataName": "Op_Status",
      "units": ""
    },
    {
      "dataName": "Fault1",
      "dataNameDetail": null,
      "index": 1,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Fault 1",
      "name": "Alarm 1 TCU 1",
      "standardDataName": "Fault1",
      "units": ""
    },
    {
      "dataName": "Status1",
      "dataNameDetail": null,
      "index": 2,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Status 1",
      "name": "Alarm 2 TCU 1",
      "standardDataName": "Op_Status1",
      "units": ""
    },
    {
      "dataName": "TrackerPos1",
      "dataNameDetail": null,
      "index": 3,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker position 1",
      "name": "Tracker Position TCU 1",
      "standardDataName": "Tracker_Position1",
      "units": "°"
    },
    {
      "dataName": "CommandedTilt1",
      "dataNameDetail": null,
      "index": 4,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker setpoint 1",
      "name": "Tracker Setpoint TCU 1",
      "standardDataName": "Tracker_Setpoint1",
      "units": "°"
    },
    {
      "dataName": "Fault2",
      "dataNameDetail": null,
      "index": 5,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Fault 2",
      "name": "Alarm 1 TCU 2",
      "standardDataName": "Fault2",
      "units": ""
    },
    {
      "dataName": "Status2",
      "dataNameDetail": null,
      "index": 6,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Status 2",
      "name": "Alarm 2 TCU 2",
      "standardDataName": "Op_Status2",
      "units": ""
    },
    {
      "dataName": "TrackerPos2",
      "dataNameDetail": null,
      "index": 7,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker position 2",
      "name": "Tracker Position TCU 2",
      "standardDataName": "Tracker_Position2",
      "units": "°"
    },
    {
      "dataName": "CommandedTilt2",
      "dataNameDetail": null,
      "index": 8,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker setpoint 2",
      "name": "Tracker Setpoint TCU 2",
      "standardDataName": "Tracker_Setpoint2",
      "units": "°"
    },
    {
      "dataName": "Fault3",
      "dataNameDetail": null,
      "index": 9,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Fault 3",
      "name": "Alarm 1 TCU 3",
      "standardDataName": "Fault3",
      "units": ""
    },
    {
      "dataName": "Status3",
      "dataNameDetail": null,
      "index": 10,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Status 3",
      "name": "Alarm 2 TCU 3",
      "standardDataName": "Op_Status3",
      "units": ""
    },
    {
      "dataName": "TrackerPos3",
      "dataNameDetail": null,
      "index": 11,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker position 3",
      "name": "Tracker Position TCU 3",
      "standardDataName": "Tracker_Position3",
      "units": "°"
    },
    {
      "dataName": "CommandedTilt3",
      "dataNameDetail": null,
      "index": 12,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker setpoint 3",
      "name": "Tracker Setpoint TCU 3",
      "standardDataName": "Tracker_Setpoint3",
      "units": "°"
    },
    {
      "dataName": "Fault4",
      "dataNameDetail": null,
      "index": 13,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Fault 4",
      "name": "Alarm 1 TCU 4",
      "standardDataName": "Fault4",
      "units": ""
    },
    {
      "dataName": "Status4",
      "dataNameDetail": null,
      "index": 14,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Status 4",
      "name": "Alarm 2 TCU 4",
      "standardDataName": "Op_Status4",
      "units": ""
    },
    {
      "dataName": "TrackerPos4",
      "dataNameDetail": null,
      "index": 15,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker position 4",
      "name": "Tracker Position TCU 4",
      "standardDataName": "Tracker_Position4",
      "units": "°"
    },
    {
      "dataName": "CommandedTilt4",
      "dataNameDetail": null,
      "index": 16,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker setpoint 4",
      "name": "Tracker Setpoint TCU 4",
      "standardDataName": "Tracker_Setpoint4",
      "units": "°"
    },
    {
      "dataName": "Fault5",
      "dataNameDetail": null,
      "index": 17,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Fault 5",
      "name": "Alarm 1 TCU 5",
      "standardDataName": "Fault5",
      "units": ""
    },
    {
      "dataName": "Status5",
      "dataNameDetail": null,
      "index": 18,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Status 5",
      "name": "Alarm 2 TCU 5",
      "standardDataName": "Op_Status5",
      "units": ""
    },
    {
      "dataName": "TrackerPos5",
      "dataNameDetail": null,
      "index": 19,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker position 5",
      "name": "Tracker Position TCU 5",
      "standardDataName": "Tracker_Position5",
      "units": "°"
    },
    {
      "dataName": "CommandedTilt5",
      "dataNameDetail": null,
      "index": 20,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker setpoint 5",
      "name": "Tracker Setpoint TCU 5",
      "standardDataName": "Tracker_Setpoint5",
      "units": "°"
    },
    {
      "dataName": "Fault6",
      "dataNameDetail": null,
      "index": 21,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Fault 6",
      "name": "Alarm 1 TCU 6",
      "standardDataName": "Fault6",
      "units": ""
    },
    {
      "dataName": "Status6",
      "dataNameDetail": null,
      "index": 22,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Status 6",
      "name": "Alarm 2 TCU 6",
      "standardDataName": "Op_Status6",
      "units": ""
    },
    {
      "dataName": "TrackerPos6",
      "dataNameDetail": null,
      "index": 23,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker position 6",
      "name": "Tracker Position TCU 6",
      "standardDataName": "Tracker_Position6",
      "units": "°"
    },
    {
      "dataName": "CommandedTilt6",
      "dataNameDetail": null,
      "index": 24,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker setpoint 6",
      "name": "Tracker Setpoint TCU 6",
      "standardDataName": "Tracker_Setpoint6",
      "units": "°"
    },
    {
      "dataName": "Fault7",
      "dataNameDetail": null,
      "index": 25,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Fault 7",
      "name": "Alarm 1 TCU 7",
      "standardDataName": "Fault7",
      "units": ""
    },
    {
      "dataName": "Status7",
      "dataNameDetail": null,
      "index": 26,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Status 7",
      "name": "Alarm 2 TCU 7",
      "standardDataName": "Op_Status7",
      "units": ""
    },
    {
      "dataName": "TrackerPos7",
      "dataNameDetail": null,
      "index": 27,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker position 7",
      "name": "Tracker Position TCU 7",
      "standardDataName": "Tracker_Position7",
      "units": "°"
    },
    {
      "dataName": "CommandedTilt7",
      "dataNameDetail": null,
      "index": 28,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker setpoint 7",
      "name": "Tracker Setpoint TCU 7",
      "standardDataName": "Tracker_Setpoint7",
      "units": "°"
    },
    {
      "dataName": "Fault8",
      "dataNameDetail": null,
      "index": 29,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Fault 8",
      "name": "Alarm 1 TCU 8",
      "standardDataName": "Fault8",
      "units": ""
    },
    {
      "dataName": "Status8",
      "dataNameDetail": null,
      "index": 30,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Status 8",
      "name": "Alarm 2 TCU 8",
      "standardDataName": "Op_Status8",
      "units": ""
    },
    {
      "dataName": "TrackerPos8",
      "dataNameDetail": null,
      "index": 31,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker position 8",
      "name": "Tracker Position TCU 8",
      "standardDataName": "Tracker_Position8",
      "units": "°"
    },
    {
      "dataName": "CommandedTilt8",
      "dataNameDetail": null,
      "index": 32,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker setpoint 8",
      "name": "Tracker Setpoint TCU 8",
      "standardDataName": "Tracker_Setpoint8",
      "units": "°"
    },
    {
      "dataName": "Fault9",
      "dataNameDetail": null,
      "index": 33,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Fault 9",
      "name": "Alarm 1 TCU 9",
      "standardDataName": "Fault9",
      "units": ""
    },
    {
      "dataName": "Status9",
      "dataNameDetail": null,
      "index": 34,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Status 9",
      "name": "Alarm 2 TCU 9",
      "standardDataName": "Op_Status9",
      "units": ""
    },
    {
      "dataName": "TrackerPos9",
      "dataNameDetail": null,
      "index": 35,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker position 9",
      "name": "Tracker Position TCU 9",
      "standardDataName": "Tracker_Position9",
      "units": "°"
    },
    {
      "dataName": "CommandedTilt9",
      "dataNameDetail": null,
      "index": 36,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker setpoint 9",
      "name": "Tracker Setpoint TCU 9",
      "standardDataName": "Tracker_Setpoint9",
      "units": "°"
    },
    {
      "dataName": "Fault10",
      "dataNameDetail": null,
      "index": 37,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Fault 10",
      "name": "Alarm 1 TCU 10",
      "standardDataName": "Fault10",
      "units": ""
    },
    {
      "dataName": "Status10",
      "dataNameDetail": null,
      "index": 38,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Status 10",
      "name": "Alarm 2 TCU 10",
      "standardDataName": "Op_Status10",
      "units": ""
    },
    {
      "dataName": "TrackerPos10",
      "dataNameDetail": null,
      "index": 39,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker position 10",
      "name": "Tracker Position TCU 10",
      "standardDataName": "Tracker_Position10",
      "units": "°"
    },
    {
      "dataName": "CommandedTilt10",
      "dataNameDetail": null,
      "index": 40,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker setpoint 10",
      "name": "Tracker Setpoint TCU 10",
      "standardDataName": "Tracker_Setpoint10",
      "units": "°"
    },
    {
      "dataName": "Fault11",
      "dataNameDetail": null,
      "index": 41,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Fault 11",
      "name": "Alarm 1 TCU 11",
      "standardDataName": "Fault11",
      "units": ""
    },
    {
      "dataName": "Status11",
      "dataNameDetail": null,
      "index": 42,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Status 11",
      "name": "Alarm 2 TCU 11",
      "standardDataName": "Op_Status11",
      "units": ""
    },
    {
      "dataName": "TrackerPos11",
      "dataNameDetail": null,
      "index": 43,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker position 11",
      "name": "Tracker Position TCU 11",
      "standardDataName": "Tracker_Position11",
      "units": "°"
    },
    {
      "dataName": "CommandedTilt11",
      "dataNameDetail": null,
      "index": 44,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker setpoint 11",
      "name": "Tracker Setpoint TCU 11",
      "standardDataName": "Tracker_Setpoint11",
      "units": "°"
    },
    {
      "dataName": "Fault12",
      "dataNameDetail": null,
      "index": 45,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Fault 12",
      "name": "Alarm 1 TCU 12",
      "standardDataName": "Fault12",
      "units": ""
    },
    {
      "dataName": "Status12",
      "dataNameDetail": null,
      "index": 46,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Status 12",
      "name": "Alarm 2 TCU 12",
      "standardDataName": "Op_Status12",
      "units": ""
    },
    {
      "dataName": "TrackerPos12",
      "dataNameDetail": null,
      "index": 47,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker position 12",
      "name": "Tracker Position TCU 12",
      "standardDataName": "Tracker_Position12",
      "units": "°"
    },
    {
      "dataName": "CommandedTilt12",
      "dataNameDetail": null,
      "index": 48,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker setpoint 12",
      "name": "Tracker Setpoint TCU 12",
      "standardDataName": "Tracker_Setpoint12",
      "units": "°"
    },
    {
      "dataName": "Fault13",
      "dataNameDetail": null,
      "index": 49,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Fault 13",
      "name": "Alarm 1 TCU 13",
      "standardDataName": "Fault13",
      "units": ""
    },
    {
      "dataName": "Status13",
      "dataNameDetail": null,
      "index": 50,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Status 13",
      "name": "Alarm 2 TCU 13",
      "standardDataName": "Op_Status13",
      "units": ""
    },
    {
      "dataName": "TrackerPos13",
      "dataNameDetail": null,
      "index": 51,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker position 13",
      "name": "Tracker Position TCU 13",
      "standardDataName": "Tracker_Position13",
      "units": "°"
    },
    {
      "dataName": "CommandedTilt13",
      "dataNameDetail": null,
      "index": 52,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker setpoint 13",
      "name": "Tracker Setpoint TCU 13",
      "standardDataName": "Tracker_Setpoint13",
      "units": "°"
    },
    {
      "dataName": "Fault14",
      "dataNameDetail": null,
      "index": 53,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Fault 14",
      "name": "Alarm 1 TCU 14",
      "standardDataName": "Fault14",
      "units": ""
    },
    {
      "dataName": "Status14",
      "dataNameDetail": null,
      "index": 54,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Status 14",
      "name": "Alarm 2 TCU 14",
      "standardDataName": "Op_Status14",
      "units": ""
    },
    {
      "dataName": "TrackerPos14",
      "dataNameDetail": null,
      "index": 55,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker position 14",
      "name": "Tracker Position TCU 14",
      "standardDataName": "Tracker_Position14",
      "units": "°"
    },
    {
      "dataName": "CommandedTilt14",
      "dataNameDetail": null,
      "index": 56,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker setpoint 14",
      "name": "Tracker Setpoint TCU 14",
      "standardDataName": "Tracker_Setpoint14",
      "units": "°"
    },
    {
      "dataName": "Fault15",
      "dataNameDetail": null,
      "index": 57,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Fault 15",
      "name": "Alarm 1 TCU 15",
      "standardDataName": "Fault15",
      "units": ""
    },
    {
      "dataName": "Status15",
      "dataNameDetail": null,
      "index": 58,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Status 15",
      "name": "Alarm 2 TCU 15",
      "standardDataName": "Op_Status15",
      "units": ""
    },
    {
      "dataName": "TrackerPos15",
      "dataNameDetail": null,
      "index": 59,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker position 15",
      "name": "Tracker Position TCU 15",
      "standardDataName": "Tracker_Position15",
      "units": "°"
    },
    {
      "dataName": "CommandedTilt15",
      "dataNameDetail": null,
      "index": 60,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker setpoint 15",
      "name": "Tracker Setpoint TCU 15",
      "standardDataName": "Tracker_Setpoint15",
      "units": "°"
    },
    {
      "dataName": "Fault16",
      "dataNameDetail": null,
      "index": 61,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Fault 16",
      "name": "Alarm 1 TCU 16",
      "standardDataName": "Fault16",
      "units": ""
    },
    {
      "dataName": "Status16",
      "dataNameDetail": null,
      "index": 62,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Status 16",
      "name": "Alarm 2 TCU 16",
      "standardDataName": "Op_Status16",
      "units": ""
    },
    {
      "dataName": "TrackerPos16",
      "dataNameDetail": null,
      "index": 63,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker position 16",
      "name": "Tracker Position TCU 16",
      "standardDataName": "Tracker_Position16",
      "units": "°"
    },
    {
      "dataName": "CommandedTilt16",
      "dataNameDetail": null,
      "index": 64,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker setpoint 16",
      "name": "Tracker Setpoint TCU 16",
      "standardDataName": "Tracker_Setpoint16",
      "units": "°"
    },
    {
      "dataName": "Fault17",
      "dataNameDetail": null,
      "index": 65,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Fault 17",
      "name": "Alarm 1 TCU 17",
      "standardDataName": "Fault17",
      "units": ""
    },
    {
      "dataName": "Status17",
      "dataNameDetail": null,
      "index": 66,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Status 17",
      "name": "Alarm 2 TCU 17",
      "standardDataName": "Op_Status17",
      "units": ""
    },
    {
      "dataName": "TrackerPos17",
      "dataNameDetail": null,
      "index": 67,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker position 17",
      "name": "Tracker Position TCU 17",
      "standardDataName": "Tracker_Position17",
      "units": "°"
    },
    {
      "dataName": "CommandedTilt17",
      "dataNameDetail": null,
      "index": 68,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker setpoint 17",
      "name": "Tracker Setpoint TCU 17",
      "standardDataName": "Tracker_Setpoint17",
      "units": "°"
    },
    {
      "dataName": "Fault18",
      "dataNameDetail": null,
      "index": 69,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Fault 18",
      "name": "Alarm 1 TCU 18",
      "standardDataName": "Fault18",
      "units": ""
    },
    {
      "dataName": "Status18",
      "dataNameDetail": null,
      "index": 70,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Status 18",
      "name": "Alarm 2 TCU 18",
      "standardDataName": "Op_Status18",
      "units": ""
    },
    {
      "dataName": "TrackerPos18",
      "dataNameDetail": null,
      "index": 71,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker position 18",
      "name": "Tracker Position TCU 18",
      "standardDataName": "Tracker_Position18",
      "units": "°"
    },
    {
      "dataName": "CommandedTilt18",
      "dataNameDetail": null,
      "index": 72,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker setpoint 18",
      "name": "Tracker Setpoint TCU 18",
      "standardDataName": "Tracker_Setpoint18",
      "units": "°"
    },
    {
      "dataName": "Fault19",
      "dataNameDetail": null,
      "index": 73,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Fault 19",
      "name": "Alarm 1 TCU 19",
      "standardDataName": "Fault19",
      "units": ""
    },
    {
      "dataName": "Status19",
      "dataNameDetail": null,
      "index": 74,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Status 19",
      "name": "Alarm 2 TCU 19",
      "standardDataName": "Op_Status19",
      "units": ""
    },
    {
      "dataName": "TrackerPos19",
      "dataNameDetail": null,
      "index": 75,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker position 19",
      "name": "Tracker Position TCU 19",
      "standardDataName": "Tracker_Position19",
      "units": "°"
    },
    {
      "dataName": "CommandedTilt19",
      "dataNameDetail": null,
      "index": 76,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker setpoint 19",
      "name": "Tracker Setpoint TCU 19",
      "standardDataName": "Tracker_Setpoint19",
      "units": "°"
    },
    {
      "dataName": "Fault20",
      "dataNameDetail": null,
      "index": 77,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Fault 20",
      "name": "Alarm 1 TCU 20",
      "standardDataName": "Fault20",
      "units": ""
    },
    {
      "dataName": "Status20",
      "dataNameDetail": null,
      "index": 78,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Status 20",
      "name": "Alarm 2 TCU 20",
      "standardDataName": "Op_Status20",
      "units": ""
    },
    {
      "dataName": "TrackerPos20",
      "dataNameDetail": null,
      "index": 79,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker position 20",
      "name": "Tracker Position TCU 20",
      "standardDataName": "Tracker_Position20",
      "units": "°"
    },
    {
      "dataName": "CommandedTilt20",
      "dataNameDetail": null,
      "index": 80,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker setpoint 20",
      "name": "Tracker Setpoint TCU 20",
      "standardDataName": "Tracker_Setpoint20",
      "units": "°"
    },
    {
      "dataName": "Fault21",
      "dataNameDetail": null,
      "index": 81,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Fault 21",
      "name": "Alarm 1 TCU 21",
      "standardDataName": "Fault21",
      "units": ""
    },
    {
      "dataName": "Status21",
      "dataNameDetail": null,
      "index": 82,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Status 21",
      "name": "Alarm 2 TCU 21",
      "standardDataName": "Op_Status21",
      "units": ""
    },
    {
      "dataName": "TrackerPos21",
      "dataNameDetail": null,
      "index": 83,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker position 21",
      "name": "Tracker Position TCU 21",
      "standardDataName": "Tracker_Position21",
      "units": "°"
    },
    {
      "dataName": "CommandedTilt21",
      "dataNameDetail": null,
      "index": 84,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker setpoint 21",
      "name": "Tracker Setpoint TCU 21",
      "standardDataName": "Tracker_Setpoint21",
      "units": "°"
    },
    {
      "dataName": "Fault22",
      "dataNameDetail": null,
      "index": 85,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Fault 22",
      "name": "Alarm 1 TCU 22",
      "standardDataName": "Fault22",
      "units": ""
    },
    {
      "dataName": "Status22",
      "dataNameDetail": null,
      "index": 86,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Status 22",
      "name": "Alarm 2 TCU 22",
      "standardDataName": "Op_Status22",
      "units": ""
    },
    {
      "dataName": "TrackerPos22",
      "dataNameDetail": null,
      "index": 87,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker position 22",
      "name": "Tracker Position TCU 22",
      "standardDataName": "Tracker_Position22",
      "units": "°"
    },
    {
      "dataName": "CommandedTilt22",
      "dataNameDetail": null,
      "index": 88,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker setpoint 22",
      "name": "Tracker Setpoint TCU 22",
      "standardDataName": "Tracker_Setpoint22",
      "units": "°"
    },
    {
      "dataName": "Fault23",
      "dataNameDetail": null,
      "index": 89,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Fault 23",
      "name": "Alarm 1 TCU 23",
      "standardDataName": "Fault23",
      "units": ""
    },
    {
      "dataName": "Status23",
      "dataNameDetail": null,
      "index": 90,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Status 23",
      "name": "Alarm 2 TCU 23",
      "standardDataName": "Op_Status23",
      "units": ""
    },
    {
      "dataName": "TrackerPos23",
      "dataNameDetail": null,
      "index": 91,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker position 23",
      "name": "Tracker Position TCU 23",
      "standardDataName": "Tracker_Position23",
      "units": "°"
    },
    {
      "dataName": "CommandedTilt23",
      "dataNameDetail": null,
      "index": 92,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker setpoint 23",
      "name": "Tracker Setpoint TCU 23",
      "standardDataName": "Tracker_Setpoint23",
      "units": "°"
    },
    {
      "dataName": "Fault24",
      "dataNameDetail": null,
      "index": 93,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Fault 24",
      "name": "Alarm 1 TCU 24",
      "standardDataName": "Fault24",
      "units": ""
    },
    {
      "dataName": "Status24",
      "dataNameDetail": null,
      "index": 94,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Status 24",
      "name": "Alarm 2 TCU 24",
      "standardDataName": "Op_Status24",
      "units": ""
    },
    {
      "dataName": "TrackerPos24",
      "dataNameDetail": null,
      "index": 95,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker position 24",
      "name": "Tracker Position TCU 24",
      "standardDataName": "Tracker_Position24",
      "units": "°"
    },
    {
      "dataName": "CommandedTilt24",
      "dataNameDetail": null,
      "index": 96,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker setpoint 24",
      "name": "Tracker Setpoint TCU 24",
      "standardDataName": "Tracker_Setpoint24",
      "units": "°"
    },
    {
      "dataName": "Fault25",
      "dataNameDetail": null,
      "index": 97,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Fault 25",
      "name": "Alarm 1 TCU 25",
      "standardDataName": "Fault25",
      "units": ""
    },
    {
      "dataName": "Status25",
      "dataNameDetail": null,
      "index": 98,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Status 25",
      "name": "Alarm 2 TCU 25",
      "standardDataName": "Op_Status25",
      "units": ""
    },
    {
      "dataName": "TrackerPos25",
      "dataNameDetail": null,
      "index": 99,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker position 25",
      "name": "Tracker Position TCU 25",
      "standardDataName": "Tracker_Position25",
      "units": "°"
    },
    {
      "dataName": "CommandedTilt25",
      "dataNameDetail": null,
      "index": 100,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker setpoint 25",
      "name": "Tracker Setpoint TCU 25",
      "standardDataName": "Tracker_Setpoint25",
      "units": "°"
    },
    {
      "dataName": "Fault26",
      "dataNameDetail": null,
      "index": 101,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Fault 26",
      "name": "Alarm 1 TCU 26",
      "standardDataName": "Fault26",
      "units": ""
    },
    {
      "dataName": "Status26",
      "dataNameDetail": null,
      "index": 102,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Status 26",
      "name": "Alarm 2 TCU 26",
      "standardDataName": "Op_Status26",
      "units": ""
    },
    {
      "dataName": "TrackerPos26",
      "dataNameDetail": null,
      "index": 103,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker position 26",
      "name": "Tracker Position TCU 26",
      "standardDataName": "Tracker_Position26",
      "units": "°"
    },
    {
      "dataName": "CommandedTilt26",
      "dataNameDetail": null,
      "index": 104,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker setpoint 26",
      "name": "Tracker Setpoint TCU 26",
      "standardDataName": "Tracker_Setpoint26",
      "units": "°"
    },
    {
      "dataName": "Fault27",
      "dataNameDetail": null,
      "index": 105,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Fault 27",
      "name": "Alarm 1 TCU 27",
      "standardDataName": "Fault27",
      "units": ""
    },
    {
      "dataName": "Status27",
      "dataNameDetail": null,
      "index": 106,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Status 27",
      "name": "Alarm 2 TCU 27",
      "standardDataName": "Op_Status27",
      "units": ""
    },
    {
      "dataName": "TrackerPos27",
      "dataNameDetail": null,
      "index": 107,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker position 27",
      "name": "Tracker Position TCU 27",
      "standardDataName": "Tracker_Position27",
      "units": "°"
    },
    {
      "dataName": "CommandedTilt27",
      "dataNameDetail": null,
      "index": 108,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker setpoint 27",
      "name": "Tracker Setpoint TCU 27",
      "standardDataName": "Tracker_Setpoint27",
      "units": "°"
    },
    {
      "dataName": "Fault28",
      "dataNameDetail": null,
      "index": 109,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Fault 28",
      "name": "Alarm 1 TCU 28",
      "standardDataName": "Fault28",
      "units": ""
    },
    {
      "dataName": "Status28",
      "dataNameDetail": null,
      "index": 110,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Status 28",
      "name": "Alarm 2 TCU 28",
      "standardDataName": "Op_Status28",
      "units": ""
    },
    {
      "dataName": "TrackerPos28",
      "dataNameDetail": null,
      "index": 111,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker position 28",
      "name": "Tracker Position TCU 28",
      "standardDataName": "Tracker_Position28",
      "units": "°"
    },
    {
      "dataName": "CommandedTilt28",
      "dataNameDetail": null,
      "index": 112,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker setpoint 28",
      "name": "Tracker Setpoint TCU 28",
      "standardDataName": "Tracker_Setpoint28",
      "units": "°"
    },
    {
      "dataName": "Fault29",
      "dataNameDetail": null,
      "index": 113,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Fault 29",
      "name": "Alarm 1 TCU 29",
      "standardDataName": "Fault29",
      "units": ""
    },
    {
      "dataName": "Status29",
      "dataNameDetail": null,
      "index": 114,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Status 29",
      "name": "Alarm 2 TCU 29",
      "standardDataName": "Op_Status29",
      "units": ""
    },
    {
      "dataName": "TrackerPos29",
      "dataNameDetail": null,
      "index": 115,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker position 29",
      "name": "Tracker Position TCU 29",
      "standardDataName": "Tracker_Position29",
      "units": "°"
    },
    {
      "dataName": "CommandedTilt29",
      "dataNameDetail": null,
      "index": 116,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker setpoint 29",
      "name": "Tracker Setpoint TCU 29",
      "standardDataName": "Tracker_Setpoint29",
      "units": "°"
    },
    {
      "dataName": "Fault30",
      "dataNameDetail": null,
      "index": 117,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Fault 30",
      "name": "Alarm 1 TCU 30",
      "standardDataName": "Fault30",
      "units": ""
    },
    {
      "dataName": "Status30",
      "dataNameDetail": null,
      "index": 118,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Status 30",
      "name": "Alarm 2 TCU 30",
      "standardDataName": "Op_Status30",
      "units": ""
    },
    {
      "dataName": "TrackerPos30",
      "dataNameDetail": null,
      "index": 119,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker position 30",
      "name": "Tracker Position TCU 30",
      "standardDataName": "Tracker_Position30",
      "units": "°"
    },
    {
      "dataName": "CommandedTilt30",
      "dataNameDetail": null,
      "index": 120,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker setpoint 30",
      "name": "Tracker Setpoint TCU 30",
      "standardDataName": "Tracker_Setpoint30",
      "units": "°"
    },
    {
      "dataName": "Fault31",
      "dataNameDetail": null,
      "index": 121,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Fault 31",
      "name": "Alarm 1 TCU 31",
      "standardDataName": "Fault31",
      "units": ""
    },
    {
      "dataName": "Status31",
      "dataNameDetail": null,
      "index": 122,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Status 31",
      "name": "Alarm 2 TCU 31",
      "standardDataName": "Op_Status31",
      "units": ""
    },
    {
      "dataName": "TrackerPos31",
      "dataNameDetail": null,
      "index": 123,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker position 31",
      "name": "Tracker Position TCU 31",
      "standardDataName": "Tracker_Position31",
      "units": "°"
    },
    {
      "dataName": "CommandedTilt31",
      "dataNameDetail": null,
      "index": 124,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker setpoint 31",
      "name": "Tracker Setpoint TCU 31",
      "standardDataName": "Tracker_Setpoint31",
      "units": "°"
    },
    {
      "dataName": "Fault32",
      "dataNameDetail": null,
      "index": 125,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Fault 32",
      "name": "Alarm 1 TCU 32",
      "standardDataName": "Fault32",
      "units": ""
    },
    {
      "dataName": "Status32",
      "dataNameDetail": null,
      "index": 126,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Status 32",
      "name": "Alarm 2 TCU 32",
      "standardDataName": "Op_Status32",
      "units": ""
    },
    {
      "dataName": "TrackerPos32",
      "dataNameDetail": null,
      "index": 127,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker position 32",
      "name": "Tracker Position TCU 32",
      "standardDataName": "Tracker_Position32",
      "units": "°"
    },
    {
      "dataName": "CommandedTilt32",
      "dataNameDetail": null,
      "index": 128,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker setpoint 32",
      "name": "Tracker Setpoint TCU 32",
      "standardDataName": "Tracker_Setpoint32",
      "units": "°"
    },
    {
      "dataName": "Fault33",
      "dataNameDetail": null,
      "index": 129,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Fault 33",
      "name": "Alarm 1 TCU 33",
      "standardDataName": "Fault33",
      "units": ""
    },
    {
      "dataName": "Status33",
      "dataNameDetail": null,
      "index": 130,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Status 33",
      "name": "Alarm 2 TCU 33",
      "standardDataName": "Op_Status33",
      "units": ""
    },
    {
      "dataName": "TrackerPos33",
      "dataNameDetail": null,
      "index": 131,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker position 33",
      "name": "Tracker Position TCU 33",
      "standardDataName": "Tracker_Position33",
      "units": "°"
    },
    {
      "dataName": "CommandedTilt33",
      "dataNameDetail": null,
      "index": 132,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker setpoint 33",
      "name": "Tracker Setpoint TCU 33",
      "standardDataName": "Tracker_Setpoint33",
      "units": "°"
    },
    {
      "dataName": "Fault34",
      "dataNameDetail": null,
      "index": 133,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Fault 34",
      "name": "Alarm 1 TCU 34",
      "standardDataName": "Fault34",
      "units": ""
    },
    {
      "dataName": "Status34",
      "dataNameDetail": null,
      "index": 134,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Status 34",
      "name": "Alarm 2 TCU 34",
      "standardDataName": "Op_Status34",
      "units": ""
    },
    {
      "dataName": "TrackerPos34",
      "dataNameDetail": null,
      "index": 135,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker position 34",
      "name": "Tracker Position TCU 34",
      "standardDataName": "Tracker_Position34",
      "units": "°"
    },
    {
      "dataName": "CommandedTilt34",
      "dataNameDetail": null,
      "index": 136,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker setpoint 34",
      "name": "Tracker Setpoint TCU 34",
      "standardDataName": "Tracker_Setpoint34",
      "units": "°"
    },
    {
      "dataName": "Fault35",
      "dataNameDetail": null,
      "index": 137,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Fault 35",
      "name": "Alarm 1 TCU 35",
      "standardDataName": "Fault35",
      "units": ""
    },
    {
      "dataName": "Status35",
      "dataNameDetail": null,
      "index": 138,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Status 35",
      "name": "Alarm 2 TCU 35",
      "standardDataName": "Op_Status35",
      "units": ""
    },
    {
      "dataName": "TrackerPos35",
      "dataNameDetail": null,
      "index": 139,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker position 35",
      "name": "Tracker Position TCU 35",
      "standardDataName": "Tracker_Position35",
      "units": "°"
    },
    {
      "dataName": "CommandedTilt35",
      "dataNameDetail": null,
      "index": 140,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker setpoint 35",
      "name": "Tracker Setpoint TCU 35",
      "standardDataName": "Tracker_Setpoint35",
      "units": "°"
    },
    {
      "dataName": "Fault36",
      "dataNameDetail": null,
      "index": 141,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Fault 36",
      "name": "Alarm 1 TCU 36",
      "standardDataName": "Fault36",
      "units": ""
    },
    {
      "dataName": "Status36",
      "dataNameDetail": null,
      "index": 142,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Status 36",
      "name": "Alarm 2 TCU 36",
      "standardDataName": "Op_Status36",
      "units": ""
    },
    {
      "dataName": "TrackerPos36",
      "dataNameDetail": null,
      "index": 143,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker position 36",
      "name": "Tracker Position TCU 36",
      "standardDataName": "Tracker_Position36",
      "units": "°"
    },
    {
      "dataName": "CommandedTilt36",
      "dataNameDetail": null,
      "index": 144,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker setpoint 36",
      "name": "Tracker Setpoint TCU 36",
      "standardDataName": "Tracker_Setpoint36",
      "units": "°"
    },
    {
      "dataName": "Fault37",
      "dataNameDetail": null,
      "index": 145,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Fault 37",
      "name": "Alarm 1 TCU 37",
      "standardDataName": "Fault37",
      "units": ""
    },
    {
      "dataName": "Status37",
      "dataNameDetail": null,
      "index": 146,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Status 37",
      "name": "Alarm 2 TCU 37",
      "standardDataName": "Op_Status37",
      "units": ""
    },
    {
      "dataName": "TrackerPos37",
      "dataNameDetail": null,
      "index": 147,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker position 37",
      "name": "Tracker Position TCU 37",
      "standardDataName": "Tracker_Position37",
      "units": "°"
    },
    {
      "dataName": "CommandedTilt37",
      "dataNameDetail": null,
      "index": 148,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker setpoint 37",
      "name": "Tracker Setpoint TCU 37",
      "standardDataName": "Tracker_Setpoint37",
      "units": "°"
    },
    {
      "dataName": "Fault38",
      "dataNameDetail": null,
      "index": 149,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Fault 38",
      "name": "Alarm 1 TCU 38",
      "standardDataName": "Fault38",
      "units": ""
    },
    {
      "dataName": "Status38",
      "dataNameDetail": null,
      "index": 150,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Status 38",
      "name": "Alarm 2 TCU 38",
      "standardDataName": "Op_Status38",
      "units": ""
    },
    {
      "dataName": "TrackerPos38",
      "dataNameDetail": null,
      "index": 151,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker position 38",
      "name": "Tracker Position TCU 38",
      "standardDataName": "Tracker_Position38",
      "units": "°"
    },
    {
      "dataName": "CommandedTilt38",
      "dataNameDetail": null,
      "index": 152,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker setpoint 38",
      "name": "Tracker Setpoint TCU 38",
      "standardDataName": "Tracker_Setpoint38",
      "units": "°"
    },
    {
      "dataName": "Fault39",
      "dataNameDetail": null,
      "index": 153,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Fault 39",
      "name": "Alarm 1 TCU 39",
      "standardDataName": "Fault39",
      "units": ""
    },
    {
      "dataName": "Status39",
      "dataNameDetail": null,
      "index": 154,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Status 39",
      "name": "Alarm 2 TCU 39",
      "standardDataName": "Op_Status39",
      "units": ""
    },
    {
      "dataName": "TrackerPos39",
      "dataNameDetail": null,
      "index": 155,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker position 39",
      "name": "Tracker Position TCU 39",
      "standardDataName": "Tracker_Position39",
      "units": "°"
    },
    {
      "dataName": "CommandedTilt39",
      "dataNameDetail": null,
      "index": 156,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker setpoint 39",
      "name": "Tracker Setpoint TCU 39",
      "standardDataName": "Tracker_Setpoint39",
      "units": "°"
    },
    {
      "dataName": "Fault40",
      "dataNameDetail": null,
      "index": 157,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Fault 40",
      "name": "Alarm 1 TCU 40",
      "standardDataName": "Fault40",
      "units": ""
    },
    {
      "dataName": "Status40",
      "dataNameDetail": null,
      "index": 158,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Status 40",
      "name": "Alarm 2 TCU 40",
      "standardDataName": "Op_Status40",
      "units": ""
    },
    {
      "dataName": "TrackerPos40",
      "dataNameDetail": null,
      "index": 159,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker position 40",
      "name": "Tracker Position TCU 40",
      "standardDataName": "Tracker_Position40",
      "units": "°"
    },
    {
      "dataName": "CommandedTilt40",
      "dataNameDetail": null,
      "index": 160,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker setpoint 40",
      "name": "Tracker Setpoint TCU 40",
      "standardDataName": "Tracker_Setpoint40",
      "units": "°"
    },
    {
      "dataName": "Fault41",
      "dataNameDetail": null,
      "index": 161,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Fault 41",
      "name": "Alarm 1 TCU 41",
      "standardDataName": "Fault41",
      "units": ""
    },
    {
      "dataName": "Status41",
      "dataNameDetail": null,
      "index": 162,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Status 41",
      "name": "Alarm 2 TCU 41",
      "standardDataName": "Op_Status41",
      "units": ""
    },
    {
      "dataName": "TrackerPos41",
      "dataNameDetail": null,
      "index": 163,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker position 41",
      "name": "Tracker Position TCU 41",
      "standardDataName": "Tracker_Position41",
      "units": "°"
    },
    {
      "dataName": "CommandedTilt41",
      "dataNameDetail": null,
      "index": 164,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker setpoint 41",
      "name": "Tracker Setpoint TCU 41",
      "standardDataName": "Tracker_Setpoint41",
      "units": "°"
    },
    {
      "dataName": "Fault42",
      "dataNameDetail": null,
      "index": 165,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Fault 42",
      "name": "Alarm 1 TCU 42",
      "standardDataName": "Fault42",
      "units": ""
    },
    {
      "dataName": "Status42",
      "dataNameDetail": null,
      "index": 166,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Status 42",
      "name": "Alarm 2 TCU 42",
      "standardDataName": "Op_Status42",
      "units": ""
    },
    {
      "dataName": "TrackerPos42",
      "dataNameDetail": null,
      "index": 167,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker position 42",
      "name": "Tracker Position TCU 42",
      "standardDataName": "Tracker_Position42",
      "units": "°"
    },
    {
      "dataName": "CommandedTilt42",
      "dataNameDetail": null,
      "index": 168,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker setpoint 42",
      "name": "Tracker Setpoint TCU 42",
      "standardDataName": "Tracker_Setpoint42",
      "units": "°"
    },
    {
      "dataName": "Fault43",
      "dataNameDetail": null,
      "index": 169,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Fault 43",
      "name": "Alarm 1 TCU 43",
      "standardDataName": "Fault43",
      "units": ""
    },
    {
      "dataName": "Status43",
      "dataNameDetail": null,
      "index": 170,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Status 43",
      "name": "Alarm 2 TCU 43",
      "standardDataName": "Op_Status43",
      "units": ""
    },
    {
      "dataName": "TrackerPos43",
      "dataNameDetail": null,
      "index": 171,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker position 43",
      "name": "Tracker Position TCU 43",
      "standardDataName": "Tracker_Position43",
      "units": "°"
    },
    {
      "dataName": "CommandedTilt43",
      "dataNameDetail": null,
      "index": 172,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker setpoint 43",
      "name": "Tracker Setpoint TCU 43",
      "standardDataName": "Tracker_Setpoint43",
      "units": "°"
    },
    {
      "dataName": "Fault44",
      "dataNameDetail": null,
      "index": 173,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Fault 44",
      "name": "Alarm 1 TCU 44",
      "standardDataName": "Fault44",
      "units": ""
    },
    {
      "dataName": "Status44",
      "dataNameDetail": null,
      "index": 174,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Status 44",
      "name": "Alarm 2 TCU 44",
      "standardDataName": "Op_Status44",
      "units": ""
    },
    {
      "dataName": "TrackerPos44",
      "dataNameDetail": null,
      "index": 175,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker position 44",
      "name": "Tracker Position TCU 44",
      "standardDataName": "Tracker_Position44",
      "units": "°"
    },
    {
      "dataName": "CommandedTilt44",
      "dataNameDetail": null,
      "index": 176,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker setpoint 44",
      "name": "Tracker Setpoint TCU 44",
      "standardDataName": "Tracker_Setpoint44",
      "units": "°"
    },
    {
      "dataName": "Fault45",
      "dataNameDetail": null,
      "index": 177,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Fault 45",
      "name": "Alarm 1 TCU 45",
      "standardDataName": "Fault45",
      "units": ""
    },
    {
      "dataName": "Status45",
      "dataNameDetail": null,
      "index": 178,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Status 45",
      "name": "Alarm 2 TCU 45",
      "standardDataName": "Op_Status45",
      "units": ""
    },
    {
      "dataName": "TrackerPos45",
      "dataNameDetail": null,
      "index": 179,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker position 45",
      "name": "Tracker Position TCU 45",
      "standardDataName": "Tracker_Position45",
      "units": "°"
    },
    {
      "dataName": "CommandedTilt45",
      "dataNameDetail": null,
      "index": 180,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker setpoint 45",
      "name": "Tracker Setpoint TCU 45",
      "standardDataName": "Tracker_Setpoint45",
      "units": "°"
    },
    {
      "dataName": "Fault0",
      "dataNameDetail": null,
      "index": 181,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Alarm 1 TCU 0",
      "name": "Alarm 1 TCU 0",
      "standardDataName": "Fault0",
      "units": ""
    },
    {
      "dataName": "Status0",
      "dataNameDetail": null,
      "index": 182,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Status 0",
      "name": "Alarm 2 TCU 0",
      "standardDataName": "Op_Status0",
      "units": ""
    },
    {
      "dataName": "TrackerPos0",
      "dataNameDetail": null,
      "index": 183,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker position 0",
      "name": "Tracker Position TCU 0",
      "standardDataName": "Tracker_Position0",
      "units": "°"
    },
    {
      "dataName": "CommandedTilt0",
      "dataNameDetail": null,
      "index": 184,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker setpoint 0",
      "name": "Tracker Setpoint TCU 0",
      "standardDataName": "Tracker_Setpoint0",
      "units": "°"
    }
  ],
  "driverDescription": "SolarFlexRack and Polar Trackers using RevM/O/P/Q mappings. Newer mapping for trackers starting in 2023",
  "driverFlags": 18432,
  "driverId": 21612,
  "driverName": "SolarFlexRack/Polar Trackers (RevM/O/P/Q Mapping) w/o Controls (SS) Standard",
  "driverNotes": "Newer mapping for SolarFlexRack and Polar trackers starting in 2023. dev:RegisterSets defaults to 100 tracker control units (TCUs), adjust as necessary for the correct number of TCUs.\nFirst TCU starts at register 30502 and there is a 22 register jump between TCUs.",
  "driverRegisters": [],
  "eGauge": null,
  "fixedEnergyOffset": 0,
  "functionCode": 24,
  "functionId": "ST0",
  "gateway": null,
  "gatewayFwVersion": "",
  "gatewayId": "000CC68CC1DE",
  "gatewayKey": "H462013",
  "gatewayScriptCount": "",
  "gatewayType": 2,
  "groupAllowed": [],
  "groupKey": "",
  "hardwareId": "C15235_S66336_ST0",
  "hardwareStatus": 1,
  "hasCapacity": false,
  "hash": "",
  "increaseDifference": -1,
  "installDate": "2023-07-25",
  "instance": 0,
  "inverterKw": 0,
  "isConflictAcknowledged": false,
  "isReportable": false,
  "isTcp": true,
  "isThermal": false,
  "key": "H462027",
  "kiosk": null,
  "latitude": 45.3979966,
  "limitedCommunication": false,
  "locusId": "",
  "longitude": -92.7003511,
  "meter": null,
  "modelNum": "FLEXRACK TRACKER CONTROL",
  "newNote": null,
  "oneMinuteData": false,
  "outOfService": false,
  "outOfServiceNote": "",
  "outOfServiceUntil": "2025-12-23T00:54:18.3514666Z",
  "outputAllowed": [],
  "outputKey": "",
  "parentKey": "S66336",
  "port": 0,
  "primary": false,
  "pullData": false,
  "pvConfig": null,
  "readOnly": false,
  "registerOffsets": [],
  "reportExclude": false,
  "reverse": false,
  "sampleRate": 0,
  "serialMode": 0,
  "serialNum": "",
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
      "name": "dev:RegisterSets",
      "originalValue": "1,30502;2,30524;3,30546;4,30568;5,30590;6,30612;7,30634;8,30656;9,30678;10,30700;11,30722;12,30744;13,30766;14,30788;15,30810;16,30832;17,30854;18,30876;19,30898;20,30920;21,30942;22,30964;23,30986;24,31008;25,31030;26,31052;27,31074;28,31096;29,31118;30,31140;31,31162;32,31184;33,31206;34,31228;35,31250;36,31272;37,31294;38,31316;39,31338;40,31360;41,31382;42,31404;43,31426;44,31448;45,31470;",
      "type": 0,
      "value": "1,30502;2,30524;3,30546;4,30568;5,30590;6,30612;7,30634;8,30656;9,30678;10,30700;11,30722;12,30744;13,30766;14,30788;15,30810;16,30832;17,30854;18,30876;19,30898;20,30920;21,30942;22,30964;23,30986;24,31008;25,31030;26,31052;27,31074;28,31096;29,31118;30,31140;31,31162;32,31184;33,31206;34,31228;35,31250;36,31272;37,31294;38,31316;39,31338;40,31360;41,31382;42,31404;43,31426;44,31448;45,31470;"
    },
    {
      "index": 2,
      "name": "TrackerGCR",
      "originalValue": 0.4,
      "type": 2,
      "value": 0.4
    },
    {
      "index": 3,
      "name": "dev:portMode",
      "originalValue": "N/A",
      "type": 0,
      "value": "N/A"
    }
  ],
  "siteDcShare": 0,
  "siteHasInverterGroups": false,
  "sort": 71,
  "syncToLocus": false,
  "tags": {
    "attributes": [],
    "key": "{\"ancestorKey\":\"H462027\",\"isRecursive\":false,\"types\":[\"attribute\",\"keyword\",\"note\"]}",
    "keywords": [],
    "lastChanged": null,
    "notes": [],
    "powerDisplays": []
  },
  "taskKey": "",
  "thermal": null,
  "thread": 0,
  "ts": "2025-12-23T00:54:18Z",
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

**Response:**

```json
{
  "additionalRegisters": [],
  "address": "192.168.13.171",
  "alsoHardwareId": 0,
  "alsoSiteId": 0,
  "array": {
    "azimuth": 180,
    "firstIndex": 0,
    "initialAngle": -55,
    "serials": [],
    "tilt": 0,
    "trackerGcr": 0.4,
    "trackerGcrWest": 0,
    "tracking": 1
  },
  "assetId": "",
  "autoCorrectDecrease": false,
  "autoCorrectIncrease": false,
  "baud": "",
  "capacityKw": 0,
  "chartSectionCode": 16,
  "commonDC": false,
  "commonDCAllMatch": true,
  "configs": [
    "Array"
  ],
  "conflictNames": null,
  "dashboardKey": "",
  "dcRating": 0,
  "debug": false,
  "decreaseDifference": 100,
  "defaultChart": 74,
  "description": "Solar FlexRack Tracker Control",
  "deviceRegisters": [
    {
      "dataName": "Op_Status",
      "dataNameDetail": null,
      "index": 0,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Operating Status",
      "name": "Operating Status",
      "standardDataName": "Op_Status",
      "units": ""
    },
    {
      "dataName": "Fault1",
      "dataNameDetail": null,
      "index": 1,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Fault 1",
      "name": "Alarm 1 TCU 1",
      "standardDataName": "Fault1",
      "units": ""
    },
    {
      "dataName": "Status1",
      "dataNameDetail": null,
      "index": 2,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Status 1",
      "name": "Alarm 2 TCU 1",
      "standardDataName": "Op_Status1",
      "units": ""
    },
    {
      "dataName": "TrackerPos1",
      "dataNameDetail": null,
      "index": 3,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker position 1",
      "name": "Tracker Position TCU 1",
      "standardDataName": "Tracker_Position1",
      "units": "°"
    },
    {
      "dataName": "CommandedTilt1",
      "dataNameDetail": null,
      "index": 4,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker setpoint 1",
      "name": "Tracker Setpoint TCU 1",
      "standardDataName": "Tracker_Setpoint1",
      "units": "°"
    },
    {
      "dataName": "Fault2",
      "dataNameDetail": null,
      "index": 5,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Fault 2",
      "name": "Alarm 1 TCU 2",
      "standardDataName": "Fault2",
      "units": ""
    },
    {
      "dataName": "Status2",
      "dataNameDetail": null,
      "index": 6,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Status 2",
      "name": "Alarm 2 TCU 2",
      "standardDataName": "Op_Status2",
      "units": ""
    },
    {
      "dataName": "TrackerPos2",
      "dataNameDetail": null,
      "index": 7,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker position 2",
      "name": "Tracker Position TCU 2",
      "standardDataName": "Tracker_Position2",
      "units": "°"
    },
    {
      "dataName": "CommandedTilt2",
      "dataNameDetail": null,
      "index": 8,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker setpoint 2",
      "name": "Tracker Setpoint TCU 2",
      "standardDataName": "Tracker_Setpoint2",
      "units": "°"
    },
    {
      "dataName": "Fault3",
      "dataNameDetail": null,
      "index": 9,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Fault 3",
      "name": "Alarm 1 TCU 3",
      "standardDataName": "Fault3",
      "units": ""
    },
    {
      "dataName": "Status3",
      "dataNameDetail": null,
      "index": 10,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Status 3",
      "name": "Alarm 2 TCU 3",
      "standardDataName": "Op_Status3",
      "units": ""
    },
    {
      "dataName": "TrackerPos3",
      "dataNameDetail": null,
      "index": 11,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker position 3",
      "name": "Tracker Position TCU 3",
      "standardDataName": "Tracker_Position3",
      "units": "°"
    },
    {
      "dataName": "CommandedTilt3",
      "dataNameDetail": null,
      "index": 12,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker setpoint 3",
      "name": "Tracker Setpoint TCU 3",
      "standardDataName": "Tracker_Setpoint3",
      "units": "°"
    },
    {
      "dataName": "Fault4",
      "dataNameDetail": null,
      "index": 13,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Fault 4",
      "name": "Alarm 1 TCU 4",
      "standardDataName": "Fault4",
      "units": ""
    },
    {
      "dataName": "Status4",
      "dataNameDetail": null,
      "index": 14,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Status 4",
      "name": "Alarm 2 TCU 4",
      "standardDataName": "Op_Status4",
      "units": ""
    },
    {
      "dataName": "TrackerPos4",
      "dataNameDetail": null,
      "index": 15,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker position 4",
      "name": "Tracker Position TCU 4",
      "standardDataName": "Tracker_Position4",
      "units": "°"
    },
    {
      "dataName": "CommandedTilt4",
      "dataNameDetail": null,
      "index": 16,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker setpoint 4",
      "name": "Tracker Setpoint TCU 4",
      "standardDataName": "Tracker_Setpoint4",
      "units": "°"
    },
    {
      "dataName": "Fault5",
      "dataNameDetail": null,
      "index": 17,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Fault 5",
      "name": "Alarm 1 TCU 5",
      "standardDataName": "Fault5",
      "units": ""
    },
    {
      "dataName": "Status5",
      "dataNameDetail": null,
      "index": 18,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Status 5",
      "name": "Alarm 2 TCU 5",
      "standardDataName": "Op_Status5",
      "units": ""
    },
    {
      "dataName": "TrackerPos5",
      "dataNameDetail": null,
      "index": 19,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker position 5",
      "name": "Tracker Position TCU 5",
      "standardDataName": "Tracker_Position5",
      "units": "°"
    },
    {
      "dataName": "CommandedTilt5",
      "dataNameDetail": null,
      "index": 20,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker setpoint 5",
      "name": "Tracker Setpoint TCU 5",
      "standardDataName": "Tracker_Setpoint5",
      "units": "°"
    },
    {
      "dataName": "Fault6",
      "dataNameDetail": null,
      "index": 21,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Fault 6",
      "name": "Alarm 1 TCU 6",
      "standardDataName": "Fault6",
      "units": ""
    },
    {
      "dataName": "Status6",
      "dataNameDetail": null,
      "index": 22,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Status 6",
      "name": "Alarm 2 TCU 6",
      "standardDataName": "Op_Status6",
      "units": ""
    },
    {
      "dataName": "TrackerPos6",
      "dataNameDetail": null,
      "index": 23,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker position 6",
      "name": "Tracker Position TCU 6",
      "standardDataName": "Tracker_Position6",
      "units": "°"
    },
    {
      "dataName": "CommandedTilt6",
      "dataNameDetail": null,
      "index": 24,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker setpoint 6",
      "name": "Tracker Setpoint TCU 6",
      "standardDataName": "Tracker_Setpoint6",
      "units": "°"
    },
    {
      "dataName": "Fault7",
      "dataNameDetail": null,
      "index": 25,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Fault 7",
      "name": "Alarm 1 TCU 7",
      "standardDataName": "Fault7",
      "units": ""
    },
    {
      "dataName": "Status7",
      "dataNameDetail": null,
      "index": 26,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Status 7",
      "name": "Alarm 2 TCU 7",
      "standardDataName": "Op_Status7",
      "units": ""
    },
    {
      "dataName": "TrackerPos7",
      "dataNameDetail": null,
      "index": 27,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker position 7",
      "name": "Tracker Position TCU 7",
      "standardDataName": "Tracker_Position7",
      "units": "°"
    },
    {
      "dataName": "CommandedTilt7",
      "dataNameDetail": null,
      "index": 28,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker setpoint 7",
      "name": "Tracker Setpoint TCU 7",
      "standardDataName": "Tracker_Setpoint7",
      "units": "°"
    },
    {
      "dataName": "Fault8",
      "dataNameDetail": null,
      "index": 29,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Fault 8",
      "name": "Alarm 1 TCU 8",
      "standardDataName": "Fault8",
      "units": ""
    },
    {
      "dataName": "Status8",
      "dataNameDetail": null,
      "index": 30,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Status 8",
      "name": "Alarm 2 TCU 8",
      "standardDataName": "Op_Status8",
      "units": ""
    },
    {
      "dataName": "TrackerPos8",
      "dataNameDetail": null,
      "index": 31,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker position 8",
      "name": "Tracker Position TCU 8",
      "standardDataName": "Tracker_Position8",
      "units": "°"
    },
    {
      "dataName": "CommandedTilt8",
      "dataNameDetail": null,
      "index": 32,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker setpoint 8",
      "name": "Tracker Setpoint TCU 8",
      "standardDataName": "Tracker_Setpoint8",
      "units": "°"
    },
    {
      "dataName": "Fault9",
      "dataNameDetail": null,
      "index": 33,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Fault 9",
      "name": "Alarm 1 TCU 9",
      "standardDataName": "Fault9",
      "units": ""
    },
    {
      "dataName": "Status9",
      "dataNameDetail": null,
      "index": 34,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Status 9",
      "name": "Alarm 2 TCU 9",
      "standardDataName": "Op_Status9",
      "units": ""
    },
    {
      "dataName": "TrackerPos9",
      "dataNameDetail": null,
      "index": 35,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker position 9",
      "name": "Tracker Position TCU 9",
      "standardDataName": "Tracker_Position9",
      "units": "°"
    },
    {
      "dataName": "CommandedTilt9",
      "dataNameDetail": null,
      "index": 36,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker setpoint 9",
      "name": "Tracker Setpoint TCU 9",
      "standardDataName": "Tracker_Setpoint9",
      "units": "°"
    },
    {
      "dataName": "Fault10",
      "dataNameDetail": null,
      "index": 37,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Fault 10",
      "name": "Alarm 1 TCU 10",
      "standardDataName": "Fault10",
      "units": ""
    },
    {
      "dataName": "Status10",
      "dataNameDetail": null,
      "index": 38,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Status 10",
      "name": "Alarm 2 TCU 10",
      "standardDataName": "Op_Status10",
      "units": ""
    },
    {
      "dataName": "TrackerPos10",
      "dataNameDetail": null,
      "index": 39,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker position 10",
      "name": "Tracker Position TCU 10",
      "standardDataName": "Tracker_Position10",
      "units": "°"
    },
    {
      "dataName": "CommandedTilt10",
      "dataNameDetail": null,
      "index": 40,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker setpoint 10",
      "name": "Tracker Setpoint TCU 10",
      "standardDataName": "Tracker_Setpoint10",
      "units": "°"
    },
    {
      "dataName": "Fault11",
      "dataNameDetail": null,
      "index": 41,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Fault 11",
      "name": "Alarm 1 TCU 11",
      "standardDataName": "Fault11",
      "units": ""
    },
    {
      "dataName": "Status11",
      "dataNameDetail": null,
      "index": 42,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Status 11",
      "name": "Alarm 2 TCU 11",
      "standardDataName": "Op_Status11",
      "units": ""
    },
    {
      "dataName": "TrackerPos11",
      "dataNameDetail": null,
      "index": 43,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker position 11",
      "name": "Tracker Position TCU 11",
      "standardDataName": "Tracker_Position11",
      "units": "°"
    },
    {
      "dataName": "CommandedTilt11",
      "dataNameDetail": null,
      "index": 44,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker setpoint 11",
      "name": "Tracker Setpoint TCU 11",
      "standardDataName": "Tracker_Setpoint11",
      "units": "°"
    },
    {
      "dataName": "Fault12",
      "dataNameDetail": null,
      "index": 45,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Fault 12",
      "name": "Alarm 1 TCU 12",
      "standardDataName": "Fault12",
      "units": ""
    },
    {
      "dataName": "Status12",
      "dataNameDetail": null,
      "index": 46,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Status 12",
      "name": "Alarm 2 TCU 12",
      "standardDataName": "Op_Status12",
      "units": ""
    },
    {
      "dataName": "TrackerPos12",
      "dataNameDetail": null,
      "index": 47,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker position 12",
      "name": "Tracker Position TCU 12",
      "standardDataName": "Tracker_Position12",
      "units": "°"
    },
    {
      "dataName": "CommandedTilt12",
      "dataNameDetail": null,
      "index": 48,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker setpoint 12",
      "name": "Tracker Setpoint TCU 12",
      "standardDataName": "Tracker_Setpoint12",
      "units": "°"
    },
    {
      "dataName": "Fault13",
      "dataNameDetail": null,
      "index": 49,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Fault 13",
      "name": "Alarm 1 TCU 13",
      "standardDataName": "Fault13",
      "units": ""
    },
    {
      "dataName": "Status13",
      "dataNameDetail": null,
      "index": 50,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Status 13",
      "name": "Alarm 2 TCU 13",
      "standardDataName": "Op_Status13",
      "units": ""
    },
    {
      "dataName": "TrackerPos13",
      "dataNameDetail": null,
      "index": 51,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker position 13",
      "name": "Tracker Position TCU 13",
      "standardDataName": "Tracker_Position13",
      "units": "°"
    },
    {
      "dataName": "CommandedTilt13",
      "dataNameDetail": null,
      "index": 52,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker setpoint 13",
      "name": "Tracker Setpoint TCU 13",
      "standardDataName": "Tracker_Setpoint13",
      "units": "°"
    },
    {
      "dataName": "Fault14",
      "dataNameDetail": null,
      "index": 53,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Fault 14",
      "name": "Alarm 1 TCU 14",
      "standardDataName": "Fault14",
      "units": ""
    },
    {
      "dataName": "Status14",
      "dataNameDetail": null,
      "index": 54,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Status 14",
      "name": "Alarm 2 TCU 14",
      "standardDataName": "Op_Status14",
      "units": ""
    },
    {
      "dataName": "TrackerPos14",
      "dataNameDetail": null,
      "index": 55,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker position 14",
      "name": "Tracker Position TCU 14",
      "standardDataName": "Tracker_Position14",
      "units": "°"
    },
    {
      "dataName": "CommandedTilt14",
      "dataNameDetail": null,
      "index": 56,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker setpoint 14",
      "name": "Tracker Setpoint TCU 14",
      "standardDataName": "Tracker_Setpoint14",
      "units": "°"
    },
    {
      "dataName": "Fault15",
      "dataNameDetail": null,
      "index": 57,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Fault 15",
      "name": "Alarm 1 TCU 15",
      "standardDataName": "Fault15",
      "units": ""
    },
    {
      "dataName": "Status15",
      "dataNameDetail": null,
      "index": 58,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Status 15",
      "name": "Alarm 2 TCU 15",
      "standardDataName": "Op_Status15",
      "units": ""
    },
    {
      "dataName": "TrackerPos15",
      "dataNameDetail": null,
      "index": 59,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker position 15",
      "name": "Tracker Position TCU 15",
      "standardDataName": "Tracker_Position15",
      "units": "°"
    },
    {
      "dataName": "CommandedTilt15",
      "dataNameDetail": null,
      "index": 60,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker setpoint 15",
      "name": "Tracker Setpoint TCU 15",
      "standardDataName": "Tracker_Setpoint15",
      "units": "°"
    },
    {
      "dataName": "Fault16",
      "dataNameDetail": null,
      "index": 61,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Fault 16",
      "name": "Alarm 1 TCU 16",
      "standardDataName": "Fault16",
      "units": ""
    },
    {
      "dataName": "Status16",
      "dataNameDetail": null,
      "index": 62,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Status 16",
      "name": "Alarm 2 TCU 16",
      "standardDataName": "Op_Status16",
      "units": ""
    },
    {
      "dataName": "TrackerPos16",
      "dataNameDetail": null,
      "index": 63,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker position 16",
      "name": "Tracker Position TCU 16",
      "standardDataName": "Tracker_Position16",
      "units": "°"
    },
    {
      "dataName": "CommandedTilt16",
      "dataNameDetail": null,
      "index": 64,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker setpoint 16",
      "name": "Tracker Setpoint TCU 16",
      "standardDataName": "Tracker_Setpoint16",
      "units": "°"
    },
    {
      "dataName": "Fault17",
      "dataNameDetail": null,
      "index": 65,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Fault 17",
      "name": "Alarm 1 TCU 17",
      "standardDataName": "Fault17",
      "units": ""
    },
    {
      "dataName": "Status17",
      "dataNameDetail": null,
      "index": 66,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Status 17",
      "name": "Alarm 2 TCU 17",
      "standardDataName": "Op_Status17",
      "units": ""
    },
    {
      "dataName": "TrackerPos17",
      "dataNameDetail": null,
      "index": 67,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker position 17",
      "name": "Tracker Position TCU 17",
      "standardDataName": "Tracker_Position17",
      "units": "°"
    },
    {
      "dataName": "CommandedTilt17",
      "dataNameDetail": null,
      "index": 68,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker setpoint 17",
      "name": "Tracker Setpoint TCU 17",
      "standardDataName": "Tracker_Setpoint17",
      "units": "°"
    },
    {
      "dataName": "Fault18",
      "dataNameDetail": null,
      "index": 69,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Fault 18",
      "name": "Alarm 1 TCU 18",
      "standardDataName": "Fault18",
      "units": ""
    },
    {
      "dataName": "Status18",
      "dataNameDetail": null,
      "index": 70,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Status 18",
      "name": "Alarm 2 TCU 18",
      "standardDataName": "Op_Status18",
      "units": ""
    },
    {
      "dataName": "TrackerPos18",
      "dataNameDetail": null,
      "index": 71,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker position 18",
      "name": "Tracker Position TCU 18",
      "standardDataName": "Tracker_Position18",
      "units": "°"
    },
    {
      "dataName": "CommandedTilt18",
      "dataNameDetail": null,
      "index": 72,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker setpoint 18",
      "name": "Tracker Setpoint TCU 18",
      "standardDataName": "Tracker_Setpoint18",
      "units": "°"
    },
    {
      "dataName": "Fault19",
      "dataNameDetail": null,
      "index": 73,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Fault 19",
      "name": "Alarm 1 TCU 19",
      "standardDataName": "Fault19",
      "units": ""
    },
    {
      "dataName": "Status19",
      "dataNameDetail": null,
      "index": 74,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Status 19",
      "name": "Alarm 2 TCU 19",
      "standardDataName": "Op_Status19",
      "units": ""
    },
    {
      "dataName": "TrackerPos19",
      "dataNameDetail": null,
      "index": 75,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker position 19",
      "name": "Tracker Position TCU 19",
      "standardDataName": "Tracker_Position19",
      "units": "°"
    },
    {
      "dataName": "CommandedTilt19",
      "dataNameDetail": null,
      "index": 76,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker setpoint 19",
      "name": "Tracker Setpoint TCU 19",
      "standardDataName": "Tracker_Setpoint19",
      "units": "°"
    },
    {
      "dataName": "Fault20",
      "dataNameDetail": null,
      "index": 77,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Fault 20",
      "name": "Alarm 1 TCU 20",
      "standardDataName": "Fault20",
      "units": ""
    },
    {
      "dataName": "Status20",
      "dataNameDetail": null,
      "index": 78,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Status 20",
      "name": "Alarm 2 TCU 20",
      "standardDataName": "Op_Status20",
      "units": ""
    },
    {
      "dataName": "TrackerPos20",
      "dataNameDetail": null,
      "index": 79,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker position 20",
      "name": "Tracker Position TCU 20",
      "standardDataName": "Tracker_Position20",
      "units": "°"
    },
    {
      "dataName": "CommandedTilt20",
      "dataNameDetail": null,
      "index": 80,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker setpoint 20",
      "name": "Tracker Setpoint TCU 20",
      "standardDataName": "Tracker_Setpoint20",
      "units": "°"
    },
    {
      "dataName": "Fault21",
      "dataNameDetail": null,
      "index": 81,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Fault 21",
      "name": "Alarm 1 TCU 21",
      "standardDataName": "Fault21",
      "units": ""
    },
    {
      "dataName": "Status21",
      "dataNameDetail": null,
      "index": 82,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Status 21",
      "name": "Alarm 2 TCU 21",
      "standardDataName": "Op_Status21",
      "units": ""
    },
    {
      "dataName": "TrackerPos21",
      "dataNameDetail": null,
      "index": 83,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker position 21",
      "name": "Tracker Position TCU 21",
      "standardDataName": "Tracker_Position21",
      "units": "°"
    },
    {
      "dataName": "CommandedTilt21",
      "dataNameDetail": null,
      "index": 84,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker setpoint 21",
      "name": "Tracker Setpoint TCU 21",
      "standardDataName": "Tracker_Setpoint21",
      "units": "°"
    },
    {
      "dataName": "Fault22",
      "dataNameDetail": null,
      "index": 85,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Fault 22",
      "name": "Alarm 1 TCU 22",
      "standardDataName": "Fault22",
      "units": ""
    },
    {
      "dataName": "Status22",
      "dataNameDetail": null,
      "index": 86,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Status 22",
      "name": "Alarm 2 TCU 22",
      "standardDataName": "Op_Status22",
      "units": ""
    },
    {
      "dataName": "TrackerPos22",
      "dataNameDetail": null,
      "index": 87,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker position 22",
      "name": "Tracker Position TCU 22",
      "standardDataName": "Tracker_Position22",
      "units": "°"
    },
    {
      "dataName": "CommandedTilt22",
      "dataNameDetail": null,
      "index": 88,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker setpoint 22",
      "name": "Tracker Setpoint TCU 22",
      "standardDataName": "Tracker_Setpoint22",
      "units": "°"
    },
    {
      "dataName": "Fault23",
      "dataNameDetail": null,
      "index": 89,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Fault 23",
      "name": "Alarm 1 TCU 23",
      "standardDataName": "Fault23",
      "units": ""
    },
    {
      "dataName": "Status23",
      "dataNameDetail": null,
      "index": 90,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Status 23",
      "name": "Alarm 2 TCU 23",
      "standardDataName": "Op_Status23",
      "units": ""
    },
    {
      "dataName": "TrackerPos23",
      "dataNameDetail": null,
      "index": 91,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker position 23",
      "name": "Tracker Position TCU 23",
      "standardDataName": "Tracker_Position23",
      "units": "°"
    },
    {
      "dataName": "CommandedTilt23",
      "dataNameDetail": null,
      "index": 92,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker setpoint 23",
      "name": "Tracker Setpoint TCU 23",
      "standardDataName": "Tracker_Setpoint23",
      "units": "°"
    },
    {
      "dataName": "Fault24",
      "dataNameDetail": null,
      "index": 93,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Fault 24",
      "name": "Alarm 1 TCU 24",
      "standardDataName": "Fault24",
      "units": ""
    },
    {
      "dataName": "Status24",
      "dataNameDetail": null,
      "index": 94,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Status 24",
      "name": "Alarm 2 TCU 24",
      "standardDataName": "Op_Status24",
      "units": ""
    },
    {
      "dataName": "TrackerPos24",
      "dataNameDetail": null,
      "index": 95,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker position 24",
      "name": "Tracker Position TCU 24",
      "standardDataName": "Tracker_Position24",
      "units": "°"
    },
    {
      "dataName": "CommandedTilt24",
      "dataNameDetail": null,
      "index": 96,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker setpoint 24",
      "name": "Tracker Setpoint TCU 24",
      "standardDataName": "Tracker_Setpoint24",
      "units": "°"
    },
    {
      "dataName": "Fault25",
      "dataNameDetail": null,
      "index": 97,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Fault 25",
      "name": "Alarm 1 TCU 25",
      "standardDataName": "Fault25",
      "units": ""
    },
    {
      "dataName": "Status25",
      "dataNameDetail": null,
      "index": 98,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Status 25",
      "name": "Alarm 2 TCU 25",
      "standardDataName": "Op_Status25",
      "units": ""
    },
    {
      "dataName": "TrackerPos25",
      "dataNameDetail": null,
      "index": 99,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker position 25",
      "name": "Tracker Position TCU 25",
      "standardDataName": "Tracker_Position25",
      "units": "°"
    },
    {
      "dataName": "CommandedTilt25",
      "dataNameDetail": null,
      "index": 100,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker setpoint 25",
      "name": "Tracker Setpoint TCU 25",
      "standardDataName": "Tracker_Setpoint25",
      "units": "°"
    },
    {
      "dataName": "Fault26",
      "dataNameDetail": null,
      "index": 101,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Fault 26",
      "name": "Alarm 1 TCU 26",
      "standardDataName": "Fault26",
      "units": ""
    },
    {
      "dataName": "Status26",
      "dataNameDetail": null,
      "index": 102,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Status 26",
      "name": "Alarm 2 TCU 26",
      "standardDataName": "Op_Status26",
      "units": ""
    },
    {
      "dataName": "TrackerPos26",
      "dataNameDetail": null,
      "index": 103,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker position 26",
      "name": "Tracker Position TCU 26",
      "standardDataName": "Tracker_Position26",
      "units": "°"
    },
    {
      "dataName": "CommandedTilt26",
      "dataNameDetail": null,
      "index": 104,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker setpoint 26",
      "name": "Tracker Setpoint TCU 26",
      "standardDataName": "Tracker_Setpoint26",
      "units": "°"
    },
    {
      "dataName": "Fault27",
      "dataNameDetail": null,
      "index": 105,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Fault 27",
      "name": "Alarm 1 TCU 27",
      "standardDataName": "Fault27",
      "units": ""
    },
    {
      "dataName": "Status27",
      "dataNameDetail": null,
      "index": 106,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Status 27",
      "name": "Alarm 2 TCU 27",
      "standardDataName": "Op_Status27",
      "units": ""
    },
    {
      "dataName": "TrackerPos27",
      "dataNameDetail": null,
      "index": 107,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker position 27",
      "name": "Tracker Position TCU 27",
      "standardDataName": "Tracker_Position27",
      "units": "°"
    },
    {
      "dataName": "CommandedTilt27",
      "dataNameDetail": null,
      "index": 108,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker setpoint 27",
      "name": "Tracker Setpoint TCU 27",
      "standardDataName": "Tracker_Setpoint27",
      "units": "°"
    },
    {
      "dataName": "Fault28",
      "dataNameDetail": null,
      "index": 109,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Fault 28",
      "name": "Alarm 1 TCU 28",
      "standardDataName": "Fault28",
      "units": ""
    },
    {
      "dataName": "Status28",
      "dataNameDetail": null,
      "index": 110,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Status 28",
      "name": "Alarm 2 TCU 28",
      "standardDataName": "Op_Status28",
      "units": ""
    },
    {
      "dataName": "TrackerPos28",
      "dataNameDetail": null,
      "index": 111,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker position 28",
      "name": "Tracker Position TCU 28",
      "standardDataName": "Tracker_Position28",
      "units": "°"
    },
    {
      "dataName": "CommandedTilt28",
      "dataNameDetail": null,
      "index": 112,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker setpoint 28",
      "name": "Tracker Setpoint TCU 28",
      "standardDataName": "Tracker_Setpoint28",
      "units": "°"
    },
    {
      "dataName": "Fault29",
      "dataNameDetail": null,
      "index": 113,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Fault 29",
      "name": "Alarm 1 TCU 29",
      "standardDataName": "Fault29",
      "units": ""
    },
    {
      "dataName": "Status29",
      "dataNameDetail": null,
      "index": 114,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Status 29",
      "name": "Alarm 2 TCU 29",
      "standardDataName": "Op_Status29",
      "units": ""
    },
    {
      "dataName": "TrackerPos29",
      "dataNameDetail": null,
      "index": 115,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker position 29",
      "name": "Tracker Position TCU 29",
      "standardDataName": "Tracker_Position29",
      "units": "°"
    },
    {
      "dataName": "CommandedTilt29",
      "dataNameDetail": null,
      "index": 116,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker setpoint 29",
      "name": "Tracker Setpoint TCU 29",
      "standardDataName": "Tracker_Setpoint29",
      "units": "°"
    },
    {
      "dataName": "Fault30",
      "dataNameDetail": null,
      "index": 117,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Fault 30",
      "name": "Alarm 1 TCU 30",
      "standardDataName": "Fault30",
      "units": ""
    },
    {
      "dataName": "Status30",
      "dataNameDetail": null,
      "index": 118,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Status 30",
      "name": "Alarm 2 TCU 30",
      "standardDataName": "Op_Status30",
      "units": ""
    },
    {
      "dataName": "TrackerPos30",
      "dataNameDetail": null,
      "index": 119,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker position 30",
      "name": "Tracker Position TCU 30",
      "standardDataName": "Tracker_Position30",
      "units": "°"
    },
    {
      "dataName": "CommandedTilt30",
      "dataNameDetail": null,
      "index": 120,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker setpoint 30",
      "name": "Tracker Setpoint TCU 30",
      "standardDataName": "Tracker_Setpoint30",
      "units": "°"
    },
    {
      "dataName": "Fault31",
      "dataNameDetail": null,
      "index": 121,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Fault 31",
      "name": "Alarm 1 TCU 31",
      "standardDataName": "Fault31",
      "units": ""
    },
    {
      "dataName": "Status31",
      "dataNameDetail": null,
      "index": 122,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Status 31",
      "name": "Alarm 2 TCU 31",
      "standardDataName": "Op_Status31",
      "units": ""
    },
    {
      "dataName": "TrackerPos31",
      "dataNameDetail": null,
      "index": 123,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker position 31",
      "name": "Tracker Position TCU 31",
      "standardDataName": "Tracker_Position31",
      "units": "°"
    },
    {
      "dataName": "CommandedTilt31",
      "dataNameDetail": null,
      "index": 124,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker setpoint 31",
      "name": "Tracker Setpoint TCU 31",
      "standardDataName": "Tracker_Setpoint31",
      "units": "°"
    },
    {
      "dataName": "Fault32",
      "dataNameDetail": null,
      "index": 125,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Fault 32",
      "name": "Alarm 1 TCU 32",
      "standardDataName": "Fault32",
      "units": ""
    },
    {
      "dataName": "Status32",
      "dataNameDetail": null,
      "index": 126,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Status 32",
      "name": "Alarm 2 TCU 32",
      "standardDataName": "Op_Status32",
      "units": ""
    },
    {
      "dataName": "TrackerPos32",
      "dataNameDetail": null,
      "index": 127,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker position 32",
      "name": "Tracker Position TCU 32",
      "standardDataName": "Tracker_Position32",
      "units": "°"
    },
    {
      "dataName": "CommandedTilt32",
      "dataNameDetail": null,
      "index": 128,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker setpoint 32",
      "name": "Tracker Setpoint TCU 32",
      "standardDataName": "Tracker_Setpoint32",
      "units": "°"
    },
    {
      "dataName": "Fault33",
      "dataNameDetail": null,
      "index": 129,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Fault 33",
      "name": "Alarm 1 TCU 33",
      "standardDataName": "Fault33",
      "units": ""
    },
    {
      "dataName": "Status33",
      "dataNameDetail": null,
      "index": 130,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Status 33",
      "name": "Alarm 2 TCU 33",
      "standardDataName": "Op_Status33",
      "units": ""
    },
    {
      "dataName": "TrackerPos33",
      "dataNameDetail": null,
      "index": 131,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker position 33",
      "name": "Tracker Position TCU 33",
      "standardDataName": "Tracker_Position33",
      "units": "°"
    },
    {
      "dataName": "CommandedTilt33",
      "dataNameDetail": null,
      "index": 132,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker setpoint 33",
      "name": "Tracker Setpoint TCU 33",
      "standardDataName": "Tracker_Setpoint33",
      "units": "°"
    },
    {
      "dataName": "Fault34",
      "dataNameDetail": null,
      "index": 133,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Fault 34",
      "name": "Alarm 1 TCU 34",
      "standardDataName": "Fault34",
      "units": ""
    },
    {
      "dataName": "Status34",
      "dataNameDetail": null,
      "index": 134,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Status 34",
      "name": "Alarm 2 TCU 34",
      "standardDataName": "Op_Status34",
      "units": ""
    },
    {
      "dataName": "TrackerPos34",
      "dataNameDetail": null,
      "index": 135,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker position 34",
      "name": "Tracker Position TCU 34",
      "standardDataName": "Tracker_Position34",
      "units": "°"
    },
    {
      "dataName": "CommandedTilt34",
      "dataNameDetail": null,
      "index": 136,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker setpoint 34",
      "name": "Tracker Setpoint TCU 34",
      "standardDataName": "Tracker_Setpoint34",
      "units": "°"
    },
    {
      "dataName": "Fault35",
      "dataNameDetail": null,
      "index": 137,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Fault 35",
      "name": "Alarm 1 TCU 35",
      "standardDataName": "Fault35",
      "units": ""
    },
    {
      "dataName": "Status35",
      "dataNameDetail": null,
      "index": 138,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Status 35",
      "name": "Alarm 2 TCU 35",
      "standardDataName": "Op_Status35",
      "units": ""
    },
    {
      "dataName": "TrackerPos35",
      "dataNameDetail": null,
      "index": 139,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker position 35",
      "name": "Tracker Position TCU 35",
      "standardDataName": "Tracker_Position35",
      "units": "°"
    },
    {
      "dataName": "CommandedTilt35",
      "dataNameDetail": null,
      "index": 140,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker setpoint 35",
      "name": "Tracker Setpoint TCU 35",
      "standardDataName": "Tracker_Setpoint35",
      "units": "°"
    },
    {
      "dataName": "Fault36",
      "dataNameDetail": null,
      "index": 141,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Fault 36",
      "name": "Alarm 1 TCU 36",
      "standardDataName": "Fault36",
      "units": ""
    },
    {
      "dataName": "Status36",
      "dataNameDetail": null,
      "index": 142,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Status 36",
      "name": "Alarm 2 TCU 36",
      "standardDataName": "Op_Status36",
      "units": ""
    },
    {
      "dataName": "TrackerPos36",
      "dataNameDetail": null,
      "index": 143,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker position 36",
      "name": "Tracker Position TCU 36",
      "standardDataName": "Tracker_Position36",
      "units": "°"
    },
    {
      "dataName": "CommandedTilt36",
      "dataNameDetail": null,
      "index": 144,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker setpoint 36",
      "name": "Tracker Setpoint TCU 36",
      "standardDataName": "Tracker_Setpoint36",
      "units": "°"
    },
    {
      "dataName": "Fault37",
      "dataNameDetail": null,
      "index": 145,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Fault 37",
      "name": "Alarm 1 TCU 37",
      "standardDataName": "Fault37",
      "units": ""
    },
    {
      "dataName": "Status37",
      "dataNameDetail": null,
      "index": 146,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Status 37",
      "name": "Alarm 2 TCU 37",
      "standardDataName": "Op_Status37",
      "units": ""
    },
    {
      "dataName": "TrackerPos37",
      "dataNameDetail": null,
      "index": 147,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker position 37",
      "name": "Tracker Position TCU 37",
      "standardDataName": "Tracker_Position37",
      "units": "°"
    },
    {
      "dataName": "CommandedTilt37",
      "dataNameDetail": null,
      "index": 148,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker setpoint 37",
      "name": "Tracker Setpoint TCU 37",
      "standardDataName": "Tracker_Setpoint37",
      "units": "°"
    },
    {
      "dataName": "Fault38",
      "dataNameDetail": null,
      "index": 149,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Fault 38",
      "name": "Alarm 1 TCU 38",
      "standardDataName": "Fault38",
      "units": ""
    },
    {
      "dataName": "Status38",
      "dataNameDetail": null,
      "index": 150,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Status 38",
      "name": "Alarm 2 TCU 38",
      "standardDataName": "Op_Status38",
      "units": ""
    },
    {
      "dataName": "TrackerPos38",
      "dataNameDetail": null,
      "index": 151,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker position 38",
      "name": "Tracker Position TCU 38",
      "standardDataName": "Tracker_Position38",
      "units": "°"
    },
    {
      "dataName": "CommandedTilt38",
      "dataNameDetail": null,
      "index": 152,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker setpoint 38",
      "name": "Tracker Setpoint TCU 38",
      "standardDataName": "Tracker_Setpoint38",
      "units": "°"
    },
    {
      "dataName": "Fault39",
      "dataNameDetail": null,
      "index": 153,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Fault 39",
      "name": "Alarm 1 TCU 39",
      "standardDataName": "Fault39",
      "units": ""
    },
    {
      "dataName": "Status39",
      "dataNameDetail": null,
      "index": 154,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Status 39",
      "name": "Alarm 2 TCU 39",
      "standardDataName": "Op_Status39",
      "units": ""
    },
    {
      "dataName": "TrackerPos39",
      "dataNameDetail": null,
      "index": 155,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker position 39",
      "name": "Tracker Position TCU 39",
      "standardDataName": "Tracker_Position39",
      "units": "°"
    },
    {
      "dataName": "CommandedTilt39",
      "dataNameDetail": null,
      "index": 156,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker setpoint 39",
      "name": "Tracker Setpoint TCU 39",
      "standardDataName": "Tracker_Setpoint39",
      "units": "°"
    },
    {
      "dataName": "Fault40",
      "dataNameDetail": null,
      "index": 157,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Fault 40",
      "name": "Alarm 1 TCU 40",
      "standardDataName": "Fault40",
      "units": ""
    },
    {
      "dataName": "Status40",
      "dataNameDetail": null,
      "index": 158,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Status 40",
      "name": "Alarm 2 TCU 40",
      "standardDataName": "Op_Status40",
      "units": ""
    },
    {
      "dataName": "TrackerPos40",
      "dataNameDetail": null,
      "index": 159,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker position 40",
      "name": "Tracker Position TCU 40",
      "standardDataName": "Tracker_Position40",
      "units": "°"
    },
    {
      "dataName": "CommandedTilt40",
      "dataNameDetail": null,
      "index": 160,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker setpoint 40",
      "name": "Tracker Setpoint TCU 40",
      "standardDataName": "Tracker_Setpoint40",
      "units": "°"
    },
    {
      "dataName": "Fault41",
      "dataNameDetail": null,
      "index": 161,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Fault 41",
      "name": "Alarm 1 TCU 41",
      "standardDataName": "Fault41",
      "units": ""
    },
    {
      "dataName": "Status41",
      "dataNameDetail": null,
      "index": 162,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Status 41",
      "name": "Alarm 2 TCU 41",
      "standardDataName": "Op_Status41",
      "units": ""
    },
    {
      "dataName": "TrackerPos41",
      "dataNameDetail": null,
      "index": 163,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker position 41",
      "name": "Tracker Position TCU 41",
      "standardDataName": "Tracker_Position41",
      "units": "°"
    },
    {
      "dataName": "CommandedTilt41",
      "dataNameDetail": null,
      "index": 164,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker setpoint 41",
      "name": "Tracker Setpoint TCU 41",
      "standardDataName": "Tracker_Setpoint41",
      "units": "°"
    },
    {
      "dataName": "Fault42",
      "dataNameDetail": null,
      "index": 165,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Fault 42",
      "name": "Alarm 1 TCU 42",
      "standardDataName": "Fault42",
      "units": ""
    },
    {
      "dataName": "Status42",
      "dataNameDetail": null,
      "index": 166,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Status 42",
      "name": "Alarm 2 TCU 42",
      "standardDataName": "Op_Status42",
      "units": ""
    },
    {
      "dataName": "TrackerPos42",
      "dataNameDetail": null,
      "index": 167,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker position 42",
      "name": "Tracker Position TCU 42",
      "standardDataName": "Tracker_Position42",
      "units": "°"
    },
    {
      "dataName": "CommandedTilt42",
      "dataNameDetail": null,
      "index": 168,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker setpoint 42",
      "name": "Tracker Setpoint TCU 42",
      "standardDataName": "Tracker_Setpoint42",
      "units": "°"
    },
    {
      "dataName": "Fault43",
      "dataNameDetail": null,
      "index": 169,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Fault 43",
      "name": "Alarm 1 TCU 43",
      "standardDataName": "Fault43",
      "units": ""
    },
    {
      "dataName": "Status43",
      "dataNameDetail": null,
      "index": 170,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Status 43",
      "name": "Alarm 2 TCU 43",
      "standardDataName": "Op_Status43",
      "units": ""
    },
    {
      "dataName": "TrackerPos43",
      "dataNameDetail": null,
      "index": 171,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker position 43",
      "name": "Tracker Position TCU 43",
      "standardDataName": "Tracker_Position43",
      "units": "°"
    },
    {
      "dataName": "CommandedTilt43",
      "dataNameDetail": null,
      "index": 172,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker setpoint 43",
      "name": "Tracker Setpoint TCU 43",
      "standardDataName": "Tracker_Setpoint43",
      "units": "°"
    },
    {
      "dataName": "Fault44",
      "dataNameDetail": null,
      "index": 173,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Fault 44",
      "name": "Alarm 1 TCU 44",
      "standardDataName": "Fault44",
      "units": ""
    },
    {
      "dataName": "Status44",
      "dataNameDetail": null,
      "index": 174,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Status 44",
      "name": "Alarm 2 TCU 44",
      "standardDataName": "Op_Status44",
      "units": ""
    },
    {
      "dataName": "TrackerPos44",
      "dataNameDetail": null,
      "index": 175,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker position 44",
      "name": "Tracker Position TCU 44",
      "standardDataName": "Tracker_Position44",
      "units": "°"
    },
    {
      "dataName": "CommandedTilt44",
      "dataNameDetail": null,
      "index": 176,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker setpoint 44",
      "name": "Tracker Setpoint TCU 44",
      "standardDataName": "Tracker_Setpoint44",
      "units": "°"
    },
    {
      "dataName": "Fault45",
      "dataNameDetail": null,
      "index": 177,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Fault 45",
      "name": "Alarm 1 TCU 45",
      "standardDataName": "Fault45",
      "units": ""
    },
    {
      "dataName": "Status45",
      "dataNameDetail": null,
      "index": 178,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Status 45",
      "name": "Alarm 2 TCU 45",
      "standardDataName": "Op_Status45",
      "units": ""
    },
    {
      "dataName": "TrackerPos45",
      "dataNameDetail": null,
      "index": 179,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker position 45",
      "name": "Tracker Position TCU 45",
      "standardDataName": "Tracker_Position45",
      "units": "°"
    },
    {
      "dataName": "CommandedTilt45",
      "dataNameDetail": null,
      "index": 180,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker setpoint 45",
      "name": "Tracker Setpoint TCU 45",
      "standardDataName": "Tracker_Setpoint45",
      "units": "°"
    },
    {
      "dataName": "Fault0",
      "dataNameDetail": null,
      "index": 181,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Alarm 1 TCU 0",
      "name": "Alarm 1 TCU 0",
      "standardDataName": "Fault0",
      "units": ""
    },
    {
      "dataName": "Status0",
      "dataNameDetail": null,
      "index": 182,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Status 0",
      "name": "Alarm 2 TCU 0",
      "standardDataName": "Op_Status0",
      "units": ""
    },
    {
      "dataName": "TrackerPos0",
      "dataNameDetail": null,
      "index": 183,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker position 0",
      "name": "Tracker Position TCU 0",
      "standardDataName": "Tracker_Position0",
      "units": "°"
    },
    {
      "dataName": "CommandedTilt0",
      "dataNameDetail": null,
      "index": 184,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Tracker setpoint 0",
      "name": "Tracker Setpoint TCU 0",
      "standardDataName": "Tracker_Setpoint0",
      "units": "°"
    }
  ],
  "driverDescription": "SolarFlexRack and Polar Trackers using RevM/O/P/Q mappings. Newer mapping for trackers starting in 2023",
  "driverFlags": 18432,
  "driverId": 21612,
  "driverName": "SolarFlexRack/Polar Trackers (RevM/O/P/Q Mapping) w/o Controls (SS) Standard",
  "driverNotes": "Newer mapping for SolarFlexRack and Polar trackers starting in 2023. dev:RegisterSets defaults to 100 tracker control units (TCUs), adjust as necessary for the correct number of TCUs.\nFirst TCU starts at register 30502 and there is a 22 register jump between TCUs.",
  "driverRegisters": [],
  "eGauge": null,
  "fixedEnergyOffset": 0,
  "functionCode": 24,
  "functionId": "ST0",
  "gateway": null,
  "gatewayFwVersion": "",
  "gatewayId": "000CC68CC1DE",
  "gatewayKey": "H462013",
  "gatewayScriptCount": "",
  "gatewayType": 2,
  "groupAllowed": [],
  "groupKey": "",
  "hardwareId": "C15235_S66336_ST0",
  "hardwareStatus": 1,
  "hasCapacity": false,
  "hash": "",
  "increaseDifference": -1,
  "installDate": "2023-07-25",
  "instance": 0,
  "inverterKw": 0,
  "isConflictAcknowledged": false,
  "isReportable": false,
  "isTcp": true,
  "isThermal": false,
  "key": "H462027",
  "kiosk": null,
  "latitude": 45.3979966,
  "limitedCommunication": false,
  "locusId": "",
  "longitude": -92.7003511,
  "meter": null,
  "modelNum": "FLEXRACK TRACKER CONTROL",
  "newNote": "",
  "oneMinuteData": false,
  "outOfService": false,
  "outOfServiceNote": "",
  "outOfServiceUntil": "2025-12-23T00:54:21.3273295Z",
  "outputAllowed": [],
  "outputKey": "",
  "parentKey": "S66336",
  "port": 0,
  "primary": false,
  "pullData": false,
  "pvConfig": null,
  "readOnly": false,
  "registerOffsets": [],
  "reportExclude": false,
  "reverse": false,
  "sampleRate": 0,
  "serialMode": 0,
  "serialNum": "",
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
      "name": "dev:RegisterSets",
      "originalValue": "1,30502;2,30524;3,30546;4,30568;5,30590;6,30612;7,30634;8,30656;9,30678;10,30700;11,30722;12,30744;13,30766;14,30788;15,30810;16,30832;17,30854;18,30876;19,30898;20,30920;21,30942;22,30964;23,30986;24,31008;25,31030;26,31052;27,31074;28,31096;29,31118;30,31140;31,31162;32,31184;33,31206;34,31228;35,31250;36,31272;37,31294;38,31316;39,31338;40,31360;41,31382;42,31404;43,31426;44,31448;45,31470;",
      "type": 0,
      "value": "1,30502;2,30524;3,30546;4,30568;5,30590;6,30612;7,30634;8,30656;9,30678;10,30700;11,30722;12,30744;13,30766;14,30788;15,30810;16,30832;17,30854;18,30876;19,30898;20,30920;21,30942;22,30964;23,30986;24,31008;25,31030;26,31052;27,31074;28,31096;29,31118;30,31140;31,31162;32,31184;33,31206;34,31228;35,31250;36,31272;37,31294;38,31316;39,31338;40,31360;41,31382;42,31404;43,31426;44,31448;45,31470;"
    },
    {
      "index": 2,
      "name": "TrackerGCR",
      "originalValue": 0.4,
      "type": 2,
      "value": 0.4
    },
    {
      "index": 3,
      "name": "dev:portMode",
      "originalValue": "N/A",
      "type": 0,
      "value": "N/A"
    }
  ],
  "siteDcShare": 0,
  "siteHasInverterGroups": false,
  "sort": 71,
  "syncToLocus": false,
  "tags": {
    "attributes": [],
    "key": "{\"ancestorKey\":\"H462027\",\"isRecursive\":false,\"types\":[\"attribute\",\"keyword\",\"note\"]}",
    "keywords": [],
    "lastChanged": null,
    "notes": [],
    "powerDisplays": []
  },
  "taskKey": "",
  "thermal": null,
  "thread": 0,
  "ts": "2025-12-23T00:54:21Z",
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

