<a id="top"></a>
# /api/edit/hardware/{hardware_id}

[← Back to Index](../logs.md)

**Methods:** GET  
**Status Codes:** 200  

## Table of Contents

- [DC Combiner (functionCode: 6)](#dc-combiner-functioncode-6)
- [Example](#example)

## DC Combiner (functionCode: 6)

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
      "type": "number"
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
      "properties": {
        "channels": {
          "type": "object",
          "properties": {
            "azimuth": {
              "type": "number"
            },
            "elevation": {
              "type": "number"
            },
            "gain": {
              "type": "number"
            },
            "index": {
              "type": "number"
            },
            "maxAzimuth": {
              "type": "number"
            },
            "minAzimuth": {
              "type": "number"
            },
            "name": {
              "type": "string"
            },
            "offset": {
              "type": "number"
            },
            "strings": {
              "type": "number"
            },
            "tilt": {
              "type": "number"
            }
          }
        },
        "prefix": {
          "type": "string"
        },
        "scale": {
          "type": "number"
        }
      }
    }
  }
}
```

[Return to top](#top)

## Example

**Request:**

```http
GET /api/edit/hardware/H38211
Accept: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
referer: https://apps.alsoenergy.com/powertrack/H38211/administration/config
```

**Response:**

```json
{
  "additionalRegisters": [],
  "address": "192.168.13.15",
  "alsoHardwareId": 0,
  "alsoSiteId": 0,
  "array": null,
  "assetId": "",
  "autoCorrectDecrease": false,
  "autoCorrectIncrease": false,
  "baud": "",
  "capacityKw": 1069.2,
  "chartSectionCode": 6,
  "commonDC": false,
  "commonDCAllMatch": true,
  "configs": [
    "Zone"
  ],
  "conflictNames": null,
  "dashboardKey": "",
  "dcRating": 0,
  "debug": false,
  "decreaseDifference": 100,
  "defaultChart": 13,
  "description": "Bentek Combiner 1",
  "deviceRegisters": [
    {
      "dataName": "ZoneAmps1",
      "dataNameDetail": null,
      "index": 0,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "PV combiner input 1",
      "name": "1.1",
      "standardDataName": "DC_Current1",
      "units": "A"
    },
    {
      "dataName": "ZoneAmps2",
      "dataNameDetail": null,
      "index": 1,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "PV combiner input 2",
      "name": "1.2",
      "standardDataName": "DC_Current2",
      "units": "A"
    },
    {
      "dataName": "ZoneAmps3",
      "dataNameDetail": null,
      "index": 2,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "PV combiner input 3",
      "name": "1.3",
      "standardDataName": "DC_Current3",
      "units": "A"
    },
    {
      "dataName": "ZoneAmps4",
      "dataNameDetail": null,
      "index": 3,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "PV combiner input 4",
      "name": "1.4",
      "standardDataName": "DC_Current4",
      "units": "A"
    },
    {
      "dataName": "ZoneAmps5",
      "dataNameDetail": null,
      "index": 4,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "PV combiner input 5",
      "name": "1.5",
      "standardDataName": "DC_Current5",
      "units": "A"
    },
    {
      "dataName": "ZoneAmps6",
      "dataNameDetail": null,
      "index": 5,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "PV combiner input 6",
      "name": "1.6",
      "standardDataName": "DC_Current6",
      "units": "A"
    },
    {
      "dataName": "ZoneAmps7",
      "dataNameDetail": null,
      "index": 6,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "PV combiner input 7",
      "name": "1.7",
      "standardDataName": "DC_Current7",
      "units": "A"
    },
    {
      "dataName": "ZoneAmps8",
      "dataNameDetail": null,
      "index": 7,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "PV combiner input 8",
      "name": "1.8",
      "standardDataName": "DC_Current8",
      "units": "A"
    },
    {
      "dataName": "ZoneAmps9",
      "dataNameDetail": null,
      "index": 8,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "PV combiner input 9",
      "name": "1.9",
      "standardDataName": "DC_Current9",
      "units": "A"
    }
  ],
  "driverDescription": "ICP DAS USA ET-7017-10 - +-5V input",
  "driverFlags": 0,
  "driverId": 606,
  "driverName": "Bentek Recombiner Ethernet (ICP DAS ET-7017)",
  "driverNotes": "If values are high, write 1 to Data Format register under system tab.\r\rBentek use all Tamura Hall Effect Current Sensors L03S***D15 Series.\r\rFor 400A CT (L03S400D15) -> Scale = 0.1\r\rFor 200A CT (L03S200D15) -> Scale = 0.05",
  "driverRegisters": [],
  "eGauge": null,
  "fixedEnergyOffset": 0,
  "functionCode": 6,
  "functionId": "SA0",
  "gateway": null,
  "gatewayFwVersion": "",
  "gatewayId": "0090E8487557",
  "gatewayKey": "H38119",
  "gatewayScriptCount": "",
  "gatewayType": 2,
  "groupAllowed": [],
  "groupKey": "",
  "hardwareId": "GPW8458_PC34924_SC0",
  "hardwareStatus": 1,
  "hasCapacity": true,
  "hash": "",
  "increaseDifference": -1,
  "installDate": "2015-08-29",
  "instance": 0,
  "inverterKw": 1070,
  "isConflictAcknowledged": false,
  "isReportable": false,
  "isTcp": true,
  "isThermal": false,
  "key": "H38211",
  "kiosk": null,
  "latitude": 41.4550359,
  "limitedCommunication": false,
  "locusId": "",
  "longitude": -74.3609511,
  "meter": null,
  "modelNum": "",
  "newNote": "",
  "oneMinuteData": false,
  "outOfService": false,
  "outOfServiceNote": "",
  "outOfServiceUntil": "2026-01-07T18:50:29.3621958Z",
  "outputAllowed": [
    1,
    28
  ],
  "outputKey": "H38213",
  "parentKey": "S34924",
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
  "serialNum": "05150950",
  "settings": [
    {
      "index": 0,
      "name": "dev:Scale",
      "originalValue": 0.1,
      "type": 2,
      "value": 0.1
    },
    {
      "index": 1,
      "name": "dev:UnitID",
      "originalValue": 1,
      "type": 1,
      "value": 1
    },
    {
      "index": 2,
      "name": "dev:RegOffset",
      "originalValue": 0,
      "type": 1,
      "value": 0
    }
  ],
  "siteDcShare": 0,
  "siteHasInverterGroups": false,
  "sort": 31,
  "syncToLocus": false,
  "tags": {
    "attributes": [],
    "key": "{\"ancestorKey\":\"H38211\",\"isRecursive\":false,\"types\":[\"attribute\",\"keyword\",\"note\"]}",
    "keywords": [],
    "lastChanged": null,
    "notes": [
      {
        "authorKey": "U788",
        "authorName": "Kevin Suhr",
        "date": "2015-10-23T16:11:23Z",
        "isEvent": true,
        "key": "x1c9f07fc",
        "kind": "text",
        "parentKey": "H38211",
        "text": "Changed device register value\r\nRegister: Data Format (Eng=1, Hex=0)\r\nOld value: 0\r\nNew value: 1\r\nUser: kevin (Kevin Suhr)"
      },
      {
        "authorKey": "U788",
        "authorName": "Kevin Suhr",
        "date": "2015-10-23T16:04:34Z",
        "isEvent": true,
        "key": "x1c9f07f4",
        "kind": "text",
        "parentKey": "H38211",
        "text": "Changing device register value\r\nRegister: Data Format (Eng=1, Hex=0)\r\nOld value: 0\r\nNew value: 1\r\nUser: kevin (Kevin Suhr)"
      }
    ],
    "powerDisplays": []
  },
  "taskKey": "",
  "thermal": null,
  "thread": 0,
  "ts": "2025-12-23T00:49:08Z",
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
  "zone": {
    "channels": [
      {
        "azimuth": 0,
        "elevation": 0,
        "gain": 1,
        "index": 1,
        "maxAzimuth": 0,
        "minAzimuth": 0,
        "name": "1",
        "offset": 0,
        "strings": 108,
        "tilt": 0
      },
      {
        "azimuth": 0,
        "elevation": 0,
        "gain": 1,
        "index": 2,
        "maxAzimuth": 0,
        "minAzimuth": 0,
        "name": "2",
        "offset": 0,
        "strings": 108,
        "tilt": 0
      },
      {
        "azimuth": 0,
        "elevation": 0,
        "gain": 1,
        "index": 3,
        "maxAzimuth": 0,
        "minAzimuth": 0,
        "name": "3",
        "offset": 0,
        "strings": 108,
        "tilt": 0
      },
      {
        "azimuth": 0,
        "elevation": 0,
        "gain": 1,
        "index": 4,
        "maxAzimuth": 0,
        "minAzimuth": 0,
        "name": "4",
        "offset": 0,
        "strings": 108,
        "tilt": 0
      },
      {
        "azimuth": 0,
        "elevation": 0,
        "gain": 1,
        "index": 5,
        "maxAzimuth": 0,
        "minAzimuth": 0,
        "name": "5",
        "offset": 0,
        "strings": 108,
        "tilt": 0
      },
      {
        "azimuth": 0,
        "elevation": 0,
        "gain": 1,
        "index": 6,
        "maxAzimuth": 0,
        "minAzimuth": 0,
        "name": "6",
        "offset": 0,
        "strings": 108,
        "tilt": 0
      },
      {
        "azimuth": 0,
        "elevation": 0,
        "gain": 1,
        "index": 7,
        "maxAzimuth": 0,
        "minAzimuth": 0,
        "name": "7",
        "offset": 0,
        "strings": 108,
        "tilt": 0
      },
      {
        "azimuth": 0,
        "elevation": 0,
        "gain": 1,
        "index": 8,
        "maxAzimuth": 0,
        "minAzimuth": 0,
        "name": "8",
        "offset": 0,
        "strings": 108,
        "tilt": 0
      },
      {
        "azimuth": 0,
        "elevation": 0,
        "gain": 1,
        "index": 9,
        "maxAzimuth": 0,
        "minAzimuth": 0,
        "name": "9",
        "offset": 0,
        "strings": 108,
        "tilt": 0
      }
    ],
    "prefix": "1.",
    "scale": 0.1
  }
}
```

[Return to top](#top)

