<a id="top"></a>
# /api/edit/hardware

[← Back to Index](../logs.md)

**Methods:** PUT  
**Status Codes:** 200, 200  

## Table of Contents

- [Payload Structure](#payload-structure)
- [Camera (functionCode: 14)](#camera-functioncode-14)
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
      "type": "array",
      "items": {
        "type": "unknown"
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
          "type": "string"
        },
        "type": {
          "type": "number"
        },
        "value": {
          "type": "string"
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
      "properties": {}
    }
  }
}
```

[Return to top](#top)

## Camera (functionCode: 14)

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
      "type": "array",
      "items": {
        "type": "unknown"
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
          "type": "string"
        },
        "type": {
          "type": "number"
        },
        "value": {
          "type": "string"
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
referer: https://apps.alsoenergy.com/powertrack/H534513/administration/config
```

**Payload:**

```json
{
  "additionalRegisters": [],
  "address": "192.168.13.201",
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
  "description": "Security Camera (Advidia)",
  "deviceRegisters": [],
  "driverDescription": "",
  "driverFlags": 0,
  "driverId": 671,
  "driverName": "Generic Camera",
  "driverNotes": "Supplied url is for panasonic cameras, change the URL for the specific camera being used on that system.",
  "driverRegisters": [],
  "eGauge": null,
  "fixedEnergyOffset": 0,
  "functionCode": 14,
  "functionId": "VC0",
  "gateway": null,
  "gatewayFwVersion": "",
  "gatewayId": "SCADAFFPRUGGIRELLO",
  "gatewayKey": "H534489",
  "gatewayScriptCount": "",
  "gatewayType": 2,
  "groupAllowed": [],
  "groupKey": "",
  "hardwareId": "C23024_S67737_VC0",
  "hardwareStatus": 1,
  "hasCapacity": false,
  "hash": "",
  "increaseDifference": -1,
  "installDate": "2024-11-15",
  "instance": 0,
  "inverterKw": 0,
  "isConflictAcknowledged": false,
  "isReportable": false,
  "isTcp": true,
  "isThermal": false,
  "key": "H534513",
  "kiosk": null,
  "latitude": 41.5636667,
  "limitedCommunication": false,
  "locusId": "",
  "longitude": -74.1412835,
  "meter": null,
  "modelNum": "ADVIDIA M-200-P",
  "newNote": null,
  "oneMinuteData": false,
  "outOfService": false,
  "outOfServiceNote": "",
  "outOfServiceUntil": "2025-12-23T00:52:56.5579784Z",
  "outputAllowed": [],
  "outputKey": "",
  "parentKey": "S67737",
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
  "serialNum": "210235TQGY3246000060",
  "settings": [
    {
      "index": 0,
      "name": "dev:portMode",
      "originalValue": "N/A",
      "type": 0,
      "value": "N/A"
    },
    {
      "index": 1,
      "name": "dev:url",
      "originalValue": "http://{0}:80/images/snapshot.jpg",
      "type": 0,
      "value": "http://{0}:80/images/snapshot.jpg"
    },
    {
      "index": 2,
      "name": "dev:username",
      "originalValue": "admin",
      "type": 0,
      "value": "admin"
    },
    {
      "index": 3,
      "name": "dev:password",
      "originalValue": "DsD1234!!!",
      "type": 0,
      "value": "DsD1234!!!"
    },
    {
      "index": 4,
      "name": "ShortName",
      "originalValue": "VC0",
      "type": 0,
      "value": "VC0"
    }
  ],
  "siteDcShare": 0,
  "siteHasInverterGroups": false,
  "sort": 51,
  "syncToLocus": false,
  "tags": {
    "attributes": [],
    "key": "{\"ancestorKey\":\"H534513\",\"isRecursive\":false,\"types\":[\"attribute\",\"keyword\",\"note\"]}",
    "keywords": [],
    "lastChanged": null,
    "notes": [
      {
        "authorKey": "U47434",
        "authorName": "Franco Breezy",
        "date": "2024-11-14T20:27:34Z",
        "isEvent": true,
        "key": "x05a19361",
        "kind": "text",
        "parentKey": "H534513",
        "text": "Password created"
      },
      {
        "authorKey": "U51911",
        "authorName": "John Buchanan",
        "date": "2025-12-22T21:19:43Z",
        "isEvent": true,
        "key": "x050a4979",
        "kind": "text",
        "parentKey": "H534513",
        "text": "Password updated"
      }
    ],
    "powerDisplays": []
  },
  "taskKey": "",
  "thermal": null,
  "thread": 0,
  "ts": "2025-12-23T00:52:56Z",
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
  "address": "192.168.13.201",
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
  "description": "Security Camera (Advidia)",
  "deviceRegisters": [],
  "driverDescription": "",
  "driverFlags": 0,
  "driverId": 671,
  "driverName": "Generic Camera",
  "driverNotes": "Supplied url is for panasonic cameras, change the URL for the specific camera being used on that system.",
  "driverRegisters": [],
  "eGauge": null,
  "fixedEnergyOffset": 0,
  "functionCode": 14,
  "functionId": "VC0",
  "gateway": null,
  "gatewayFwVersion": "",
  "gatewayId": "SCADAFFPRUGGIRELLO",
  "gatewayKey": "H534489",
  "gatewayScriptCount": "",
  "gatewayType": 2,
  "groupAllowed": [],
  "groupKey": "",
  "hardwareId": "C23024_S67737_VC0",
  "hardwareStatus": 1,
  "hasCapacity": false,
  "hash": "",
  "increaseDifference": -1,
  "installDate": "2024-11-15",
  "instance": 0,
  "inverterKw": 0,
  "isConflictAcknowledged": false,
  "isReportable": false,
  "isTcp": true,
  "isThermal": false,
  "key": "H534513",
  "kiosk": null,
  "latitude": 41.5636667,
  "limitedCommunication": false,
  "locusId": "",
  "longitude": -74.1412835,
  "meter": null,
  "modelNum": "ADVIDIA M-200-P",
  "newNote": "",
  "oneMinuteData": false,
  "outOfService": false,
  "outOfServiceNote": "",
  "outOfServiceUntil": "2025-12-23T00:52:59.5240852Z",
  "outputAllowed": [],
  "outputKey": "",
  "parentKey": "S67737",
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
  "serialNum": "210235TQGY3246000060",
  "settings": [
    {
      "index": 0,
      "name": "dev:portMode",
      "originalValue": "N/A",
      "type": 0,
      "value": "N/A"
    },
    {
      "index": 1,
      "name": "dev:url",
      "originalValue": "http://{0}:80/images/snapshot.jpg",
      "type": 0,
      "value": "http://{0}:80/images/snapshot.jpg"
    },
    {
      "index": 2,
      "name": "dev:username",
      "originalValue": "admin",
      "type": 0,
      "value": "admin"
    },
    {
      "index": 3,
      "name": "dev:password",
      "originalValue": "DsD1234!!!",
      "type": 0,
      "value": "DsD1234!!!"
    },
    {
      "index": 4,
      "name": "ShortName",
      "originalValue": "VC0",
      "type": 0,
      "value": "VC0"
    }
  ],
  "siteDcShare": 0,
  "siteHasInverterGroups": false,
  "sort": 51,
  "syncToLocus": false,
  "tags": {
    "attributes": [],
    "key": "{\"ancestorKey\":\"H534513\",\"isRecursive\":false,\"types\":[\"attribute\",\"keyword\",\"note\"]}",
    "keywords": [],
    "lastChanged": null,
    "notes": [
      {
        "authorKey": "U47434",
        "authorName": "Franco Breezy",
        "date": "2024-11-14T20:27:34Z",
        "isEvent": true,
        "key": "x05a19361",
        "kind": "text",
        "parentKey": "H534513",
        "text": "Password created"
      },
      {
        "authorKey": "U51911",
        "authorName": "John Buchanan",
        "date": "2025-12-22T21:19:43Z",
        "isEvent": true,
        "key": "x050a4979",
        "kind": "text",
        "parentKey": "H534513",
        "text": "Password updated"
      }
    ],
    "powerDisplays": []
  },
  "taskKey": "",
  "thermal": null,
  "thread": 0,
  "ts": "2025-12-23T00:52:59Z",
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

