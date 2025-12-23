<a id="top"></a>
# /api/edit/hardware/{hardware_id}

[← Back to Index](../logs.md)

**Methods:** GET  
**Status Codes:** 200, 200  

## Table of Contents

- [Weather Station (functionCode: 5)](#weather-station-functioncode-5)
- [Example](#example)

## Weather Station (functionCode: 5)

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
      "properties": {
        "azimuth": {
          "type": "number"
        },
        "hasPyranometer": {
          "type": "boolean"
        },
        "hasRefPyranometer": {
          "type": "boolean"
        },
        "insolationType": {
          "type": "number"
        },
        "interpolateDailyInsolation": {
          "type": "boolean"
        },
        "isPyranometerHigh": {
          "type": "boolean"
        },
        "isRefPyranometerHigh": {
          "type": "boolean"
        },
        "maxTempF": {
          "type": "number"
        },
        "minTempF": {
          "type": "number"
        },
        "monthlyInsolation": {
          "type": "object",
          "properties": {
            "apr": {
              "type": "number"
            },
            "aug": {
              "type": "number"
            },
            "dec": {
              "type": "number"
            },
            "feb": {
              "type": "number"
            },
            "jan": {
              "type": "number"
            },
            "jul": {
              "type": "number"
            },
            "jun": {
              "type": "number"
            },
            "mar": {
              "type": "number"
            },
            "may": {
              "type": "number"
            },
            "nov": {
              "type": "number"
            },
            "oct": {
              "type": "number"
            },
            "sep": {
              "type": "number"
            }
          }
        },
        "pyranometerData": {
          "type": "string"
        },
        "pyranometerUnit": {
          "type": "number"
        },
        "refPyranometerData": {
          "type": "object",
          "properties": {}
        },
        "refPyranometerUnit": {
          "type": "number"
        },
        "sensors": {
          "type": "object",
          "properties": {
            "ambientTemp": {
              "type": "object",
              "properties": {
                "isAllowed": {
                  "type": "boolean"
                },
                "isChecked": {
                  "type": "boolean"
                }
              }
            },
            "barometer": {
              "type": "object",
              "properties": {
                "isAllowed": {
                  "type": "boolean"
                },
                "isChecked": {
                  "type": "boolean"
                }
              }
            },
            "humidity": {
              "type": "object",
              "properties": {
                "isAllowed": {
                  "type": "boolean"
                },
                "isChecked": {
                  "type": "boolean"
                }
              }
            },
            "panelTemp1": {
              "type": "object",
              "properties": {
                "isAllowed": {
                  "type": "boolean"
                },
                "isChecked": {
                  "type": "boolean"
                }
              }
            },
            "panelTemp2": {
              "type": "object",
              "properties": {
                "isAllowed": {
                  "type": "boolean"
                },
                "isChecked": {
                  "type": "boolean"
                }
              }
            },
            "pyranometer1": {
              "type": "object",
              "properties": {
                "isAllowed": {
                  "type": "boolean"
                },
                "isChecked": {
                  "type": "boolean"
                }
              }
            },
            "pyranometer2": {
              "type": "object",
              "properties": {
                "isAllowed": {
                  "type": "boolean"
                },
                "isChecked": {
                  "type": "boolean"
                }
              }
            },
            "pyrheliometer": {
              "type": "object",
              "properties": {
                "isAllowed": {
                  "type": "boolean"
                },
                "isChecked": {
                  "type": "boolean"
                }
              }
            },
            "rain": {
              "type": "object",
              "properties": {
                "isAllowed": {
                  "type": "boolean"
                },
                "isChecked": {
                  "type": "boolean"
                }
              }
            },
            "snow": {
              "type": "object",
              "properties": {
                "isAllowed": {
                  "type": "boolean"
                },
                "isChecked": {
                  "type": "boolean"
                }
              }
            },
            "wind": {
              "type": "object",
              "properties": {
                "isAllowed": {
                  "type": "boolean"
                },
                "isChecked": {
                  "type": "boolean"
                }
              }
            }
          }
        },
        "tilt": {
          "type": "number"
        },
        "tracker": {
          "type": "object",
          "properties": {
            "dataName": {
              "type": "string"
            },
            "hid": {
              "type": "number"
            }
          }
        },
        "trackerOptions": {
          "type": "object",
          "properties": {}
        },
        "tracking": {
          "type": "number"
        }
      }
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
GET /api/edit/hardware/H511575
Accept: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
referer: https://apps.alsoenergy.com/powertrack/H511575/administration/config
```

**Response:**

```json
{
  "additionalRegisters": [],
  "address": "6",
  "alsoHardwareId": 0,
  "alsoSiteId": 0,
  "array": null,
  "assetId": "",
  "autoCorrectDecrease": false,
  "autoCorrectIncrease": false,
  "baud": "9600",
  "capacityKw": 0,
  "chartSectionCode": 4,
  "commonDC": false,
  "commonDCAllMatch": true,
  "configs": [
    "Weather"
  ],
  "conflictNames": null,
  "dashboardKey": "",
  "dcRating": 0,
  "debug": false,
  "decreaseDifference": 100,
  "defaultChart": 21,
  "description": "REFERENCE CELL - POA",
  "deviceRegisters": [
    {
      "dataName": "Sun",
      "dataNameDetail": null,
      "index": 0,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Plane of Array Irradiation (with Offset)",
      "name": "Plane of Array Irradiance",
      "standardDataName": "POA_Irradiance",
      "units": "W/m²"
    },
    {
      "dataName": "Temp2",
      "dataNameDetail": null,
      "index": 1,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "Module temperature 2",
      "name": "Module Temperature 1",
      "standardDataName": "",
      "units": "°F"
    },
    {
      "dataName": "Temp1",
      "dataNameDetail": null,
      "index": 2,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Module Temperature",
      "name": "Module Temperature",
      "standardDataName": "Temp_Module",
      "units": "°F"
    },
    {
      "dataName": "WindSpeed",
      "dataNameDetail": null,
      "index": 3,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "Wind Speed",
      "name": "Wind Speed",
      "standardDataName": "",
      "units": "mph"
    },
    {
      "dataName": "TempF",
      "dataNameDetail": null,
      "index": 4,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "Ambient Air Temperature",
      "name": "Ambient Air Temperature",
      "standardDataName": "",
      "units": "°F"
    },
    {
      "dataName": "Temp3",
      "dataNameDetail": null,
      "index": 5,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Module temperature 3",
      "name": "Module Temperature 2",
      "standardDataName": "Temp_Module3",
      "units": "°F"
    },
    {
      "dataName": "Ambient1",
      "dataNameDetail": null,
      "index": 6,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "Ambient temperature 1",
      "name": "Ambient Air Temperature 1",
      "standardDataName": "",
      "units": "°F"
    },
    {
      "dataName": "Sun2",
      "dataNameDetail": null,
      "index": 7,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "Global Horizontal Irradiance (with Offset)",
      "name": "Global Horizontal Irradiance",
      "standardDataName": "",
      "units": "W/m²"
    }
  ],
  "driverDescription": "Reference cell standard driver",
  "driverFlags": 16384,
  "driverId": 3588,
  "driverName": "IMT Reference Cell (Standard) 3x Mod Temp",
  "driverNotes": "Legacy DID : 3580\rStandard DID : 3588\r--------------------------------------------------------------------------------------------------------\rDriver Manual link : https://www.dropbox.com/home/_AE%20Vendor%20Docs/IMT%20solar?preview=Specification_Si-RS485_MODBUS.pdf\r--------------------------------------------------------------------------------------------------------\rThis standard driver can be consolidated with 3580, 250.",
  "driverRegisters": [],
  "eGauge": null,
  "fixedEnergyOffset": 0,
  "functionCode": 5,
  "functionId": "WS1",
  "gateway": null,
  "gatewayFwVersion": "",
  "gatewayId": "000CC68FAF30",
  "gatewayKey": "H511564",
  "gatewayScriptCount": "",
  "gatewayType": 2,
  "groupAllowed": [],
  "groupKey": "",
  "hardwareId": "C20909_S68143_WS1",
  "hardwareStatus": 1,
  "hasCapacity": false,
  "hash": "",
  "increaseDifference": -1,
  "installDate": "2024-07-12",
  "instance": 1,
  "inverterKw": 0,
  "isConflictAcknowledged": false,
  "isReportable": false,
  "isTcp": false,
  "isThermal": false,
  "key": "H511575",
  "kiosk": null,
  "latitude": 34.0371297,
  "limitedCommunication": false,
  "locusId": "",
  "longitude": -118.1014776,
  "meter": null,
  "modelNum": "IMT Si-RS485TC-2T-v-MB",
  "newNote": "",
  "oneMinuteData": false,
  "outOfService": false,
  "outOfServiceNote": "",
  "outOfServiceUntil": "2025-12-23T00:11:30.00433Z",
  "outputAllowed": [],
  "outputKey": "",
  "parentKey": "S68143",
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
  "serialNum": "485-32003-23-24211210",
  "settings": [
    {
      "index": 0,
      "name": "dev:baud",
      "originalValue": 9600,
      "type": 1,
      "value": 9600
    },
    {
      "index": 1,
      "name": "dev:portMode",
      "originalValue": "rs485",
      "type": 0,
      "value": "rs485"
    },
    {
      "index": 2,
      "name": "dev:RegOffset",
      "originalValue": 0,
      "type": 1,
      "value": 0
    },
    {
      "index": 3,
      "name": "MinTemp",
      "originalValue": -30,
      "type": 2,
      "value": -30
    },
    {
      "index": 4,
      "name": "MaxTemp",
      "originalValue": 160,
      "type": 2,
      "value": 160
    },
    {
      "index": 5,
      "name": "weather",
      "originalValue": 132,
      "type": 1,
      "value": 132
    },
    {
      "index": 6,
      "name": "dev:ScalePOA",
      "originalValue": "0.1",
      "type": 0,
      "value": "0.1"
    },
    {
      "index": 7,
      "name": "dev:POAOffset",
      "originalValue": "0",
      "type": 0,
      "value": "0"
    },
    {
      "index": 8,
      "name": "dev:ScaleT",
      "originalValue": "0.1",
      "type": 0,
      "value": "0.1"
    },
    {
      "index": 9,
      "name": "dev:ScaleWindSP",
      "originalValue": "0.1",
      "type": 0,
      "value": "0.1"
    },
    {
      "index": 10,
      "name": "dev:ScaleGHI",
      "originalValue": "0.1",
      "type": 0,
      "value": "0.1"
    },
    {
      "index": 11,
      "name": "dev:GHIOffset",
      "originalValue": "0",
      "type": 0,
      "value": "0"
    },
    {
      "index": 12,
      "name": "ShortName",
      "originalValue": "WS1",
      "type": 0,
      "value": "WS1"
    }
  ],
  "siteDcShare": 0,
  "siteHasInverterGroups": true,
  "sort": 41,
  "syncToLocus": false,
  "tags": {
    "attributes": [],
    "key": "{\"ancestorKey\":\"H511575\",\"isRecursive\":false,\"types\":[\"attribute\",\"keyword\",\"note\"]}",
    "keywords": [],
    "lastChanged": null,
    "notes": [],
    "powerDisplays": []
  },
  "taskKey": "",
  "thermal": null,
  "thread": 0,
  "ts": "2024-07-11T21:17:30Z",
  "turbine": null,
  "unitId": 0,
  "uploadRate": 0,
  "validatedByKey": "",
  "validatedDateTime": "0001-01-01T00:00:00",
  "virtualRegisters": [],
  "virtualWeather": null,
  "weather": {
    "azimuth": 0,
    "hasPyranometer": true,
    "hasRefPyranometer": false,
    "insolationType": 0,
    "interpolateDailyInsolation": true,
    "isPyranometerHigh": false,
    "isRefPyranometerHigh": false,
    "maxTempF": 160,
    "minTempF": -30,
    "monthlyInsolation": {
      "apr": 0,
      "aug": 0,
      "dec": 0,
      "feb": 0,
      "jan": 0,
      "jul": 0,
      "jun": 0,
      "mar": 0,
      "may": 0,
      "nov": 0,
      "oct": 0,
      "sep": 0
    },
    "pyranometerData": "NaN",
    "pyranometerUnit": 57,
    "refPyranometerData": null,
    "refPyranometerUnit": 0,
    "sensors": {
      "ambientTemp": {
        "isAllowed": true,
        "isChecked": false
      },
      "barometer": {
        "isAllowed": false,
        "isChecked": false
      },
      "humidity": {
        "isAllowed": false,
        "isChecked": false
      },
      "panelTemp1": {
        "isAllowed": true,
        "isChecked": true
      },
      "panelTemp2": {
        "isAllowed": true,
        "isChecked": false
      },
      "pyranometer1": {
        "isAllowed": true,
        "isChecked": true
      },
      "pyranometer2": {
        "isAllowed": true,
        "isChecked": false
      },
      "pyrheliometer": {
        "isAllowed": false,
        "isChecked": false
      },
      "rain": {
        "isAllowed": false,
        "isChecked": false
      },
      "snow": {
        "isAllowed": false,
        "isChecked": false
      },
      "wind": {
        "isAllowed": true,
        "isChecked": false
      }
    },
    "tilt": 0,
    "tracker": {
      "dataName": "",
      "hid": 0
    },
    "trackerOptions": {},
    "tracking": 0
  },
  "weatherStationKey1": "",
  "weatherStationKey2": "",
  "zone": null
}
```

[Return to top](#top)

