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
      "type": "string"
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
      "properties": {
        "azimuth": {
          "type": "number"
        },
        "tilt": {
          "type": "number"
        },
        "tracking": {
          "type": "number"
        },
        "maxTempF": {
          "type": "number"
        },
        "minTempF": {
          "type": "number"
        },
        "sensors": {
          "type": "object",
          "properties": {
            "ambientTemp": {
              "type": "object",
              "properties": {
                "isChecked": {
                  "type": "boolean"
                },
                "isAllowed": {
                  "type": "boolean"
                }
              }
            },
            "barometer": {
              "type": "object",
              "properties": {
                "isChecked": {
                  "type": "boolean"
                },
                "isAllowed": {
                  "type": "boolean"
                }
              }
            },
            "humidity": {
              "type": "object",
              "properties": {
                "isChecked": {
                  "type": "boolean"
                },
                "isAllowed": {
                  "type": "boolean"
                }
              }
            },
            "panelTemp1": {
              "type": "object",
              "properties": {
                "isChecked": {
                  "type": "boolean"
                },
                "isAllowed": {
                  "type": "boolean"
                }
              }
            },
            "panelTemp2": {
              "type": "object",
              "properties": {
                "isChecked": {
                  "type": "boolean"
                },
                "isAllowed": {
                  "type": "boolean"
                }
              }
            },
            "pyranometer1": {
              "type": "object",
              "properties": {
                "isChecked": {
                  "type": "boolean"
                },
                "isAllowed": {
                  "type": "boolean"
                }
              }
            },
            "pyranometer2": {
              "type": "object",
              "properties": {
                "isChecked": {
                  "type": "boolean"
                },
                "isAllowed": {
                  "type": "boolean"
                }
              }
            },
            "pyrheliometer": {
              "type": "object",
              "properties": {
                "isChecked": {
                  "type": "boolean"
                },
                "isAllowed": {
                  "type": "boolean"
                }
              }
            },
            "rain": {
              "type": "object",
              "properties": {
                "isChecked": {
                  "type": "boolean"
                },
                "isAllowed": {
                  "type": "boolean"
                }
              }
            },
            "snow": {
              "type": "object",
              "properties": {
                "isChecked": {
                  "type": "boolean"
                },
                "isAllowed": {
                  "type": "boolean"
                }
              }
            },
            "wind": {
              "type": "object",
              "properties": {
                "isChecked": {
                  "type": "boolean"
                },
                "isAllowed": {
                  "type": "boolean"
                }
              }
            }
          }
        },
        "insolationType": {
          "type": "number"
        },
        "interpolateDailyInsolation": {
          "type": "boolean"
        },
        "hasPyranometer": {
          "type": "boolean"
        },
        "pyranometerData": {
          "type": "string"
        },
        "isPyranometerHigh": {
          "type": "boolean"
        },
        "pyranometerUnit": {
          "type": "number"
        },
        "hasRefPyranometer": {
          "type": "boolean"
        },
        "refPyranometerData": {
          "type": "object",
          "properties": {}
        },
        "isRefPyranometerHigh": {
          "type": "boolean"
        },
        "refPyranometerUnit": {
          "type": "number"
        },
        "tracker": {
          "type": "object",
          "properties": {
            "hid": {
              "type": "number"
            },
            "dataName": {
              "type": "string"
            }
          }
        },
        "trackerOptions": {
          "type": "object",
          "properties": {}
        },
        "monthlyInsolation": {
          "type": "object",
          "properties": {
            "jan": {
              "type": "number"
            },
            "feb": {
              "type": "number"
            },
            "mar": {
              "type": "number"
            },
            "apr": {
              "type": "number"
            },
            "may": {
              "type": "number"
            },
            "jun": {
              "type": "number"
            },
            "jul": {
              "type": "number"
            },
            "aug": {
              "type": "number"
            },
            "sep": {
              "type": "number"
            },
            "oct": {
              "type": "number"
            },
            "nov": {
              "type": "number"
            },
            "dec": {
              "type": "number"
            }
          }
        }
      }
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
GET /api/edit/hardware/H511575
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
Accept: application/json
referer: https://apps.alsoenergy.com/powertrack/H511575/administration/config
```

**Response:**

```json
{
  "key": "H511575",
  "parentKey": "S68143",
  "ts": "2024-07-11T21:17:30Z",
  "description": "REFERENCE CELL - POA",
  "assetId": "",
  "hardwareId": "C20909_S68143_WS1",
  "instance": 1,
  "functionId": "WS1",
  "functionCode": 5,
  "hardwareStatus": 1,
  "capacityKw": 0,
  "sort": 41,
  "gatewayKey": "H511564",
  "gatewayId": "000CC68FAF30",
  "gatewayFwVersion": "",
  "gatewayScriptCount": "",
  "gatewayType": 2,
  "serialNum": "485-32003-23-24211210",
  "modelNum": "IMT Si-RS485TC-2T-v-MB",
  "installDate": "2024-07-12",
  "driverId": 3588,
  "driverDescription": "Reference cell standard driver",
  "driverFlags": 16384,
  "driverName": "IMT Reference Cell (Standard) 3x Mod Temp",
  "driverNotes": "Legacy DID : 3580\rStandard DID : 3588\r--------------------------------------------------------------------------------------------------------\rDriver Manual link : https://www.dropbox.com/home/_AE%20Vendor%20Docs/IMT%20solar?preview=Specification_Si-RS485_MODBUS.pdf\r--------------------------------------------------------------------------------------------------------\rThis standard driver can be consolidated with 3580, 250.",
  "validatedByKey": "",
  "validatedDateTime": "0001-01-01T00:00:00",
  "debug": false,
  "outOfService": false,
  "outOfServiceNote": "",
  "outOfServiceUntil": "2025-12-23T00:11:30.00433Z",
  "reportExclude": false,
  "limitedCommunication": false,
  "primary": false,
  "address": "6",
  "unitId": 0,
  "isTcp": false,
  "port": 2,
  "serialMode": 2,
  "baud": "9600",
  "newNote": "",
  "dashboardKey": "",
  "dcRating": 0,
  "defaultChart": 21,
  "chartSectionCode": 4,
  "conflictNames": null,
  "isConflictAcknowledged": false,
  "settings": [
    {
      "originalValue": 9600,
      "index": 0,
      "name": "dev:baud",
      "value": 9600,
      "type": 1
    },
    {
      "originalValue": "rs485",
      "index": 1,
      "name": "dev:portMode",
      "value": "rs485",
      "type": 0
    },
    {
      "originalValue": 0,
      "index": 2,
      "name": "dev:RegOffset",
      "value": 0,
      "type": 1
    },
    {
      "originalValue": -30,
      "index": 3,
      "name": "MinTemp",
      "value": -30,
      "type": 2
    },
    {
      "originalValue": 160,
      "index": 4,
      "name": "MaxTemp",
      "value": 160,
      "type": 2
    },
    {
      "originalValue": 132,
      "index": 5,
      "name": "weather",
      "value": 132,
      "type": 1
    },
    {
      "originalValue": "0.1",
      "index": 6,
      "name": "dev:ScalePOA",
      "value": "0.1",
      "type": 0
    },
    {
      "originalValue": "0",
      "index": 7,
      "name": "dev:POAOffset",
      "value": "0",
      "type": 0
    },
    {
      "originalValue": "0.1",
      "index": 8,
      "name": "dev:ScaleT",
      "value": "0.1",
      "type": 0
    },
    {
      "originalValue": "0.1",
      "index": 9,
      "name": "dev:ScaleWindSP",
      "value": "0.1",
      "type": 0
    },
    {
      "originalValue": "0.1",
      "index": 10,
      "name": "dev:ScaleGHI",
      "value": "0.1",
      "type": 0
    },
    {
      "originalValue": "0",
      "index": 11,
      "name": "dev:GHIOffset",
      "value": "0",
      "type": 0
    },
    {
      "originalValue": "WS1",
      "index": 12,
      "name": "ShortName",
      "value": "WS1",
      "type": 0
    }
  ],
  "deviceRegisters": [
    {
      "index": 0,
      "name": "Plane of Array Irradiance",
      "localizedName": "Plane of Array Irradiation (with Offset)",
      "dataName": "Sun",
      "standardDataName": "POA_Irradiance",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "W/m²",
      "dataNameDetail": null
    },
    {
      "index": 1,
      "name": "Module Temperature 1",
      "localizedName": "Module temperature 2",
      "dataName": "Temp2",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": false,
      "isArchived": false,
      "units": "°F",
      "dataNameDetail": null
    },
    {
      "index": 2,
      "name": "Module Temperature",
      "localizedName": "Module Temperature",
      "dataName": "Temp1",
      "standardDataName": "Temp_Module",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "°F",
      "dataNameDetail": null
    },
    {
      "index": 3,
      "name": "Wind Speed",
      "localizedName": "Wind Speed",
      "dataName": "WindSpeed",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": false,
      "isArchived": false,
      "units": "mph",
      "dataNameDetail": null
    },
    {
      "index": 4,
      "name": "Ambient Air Temperature",
      "localizedName": "Ambient Air Temperature",
      "dataName": "TempF",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": false,
      "isArchived": false,
      "units": "°F",
      "dataNameDetail": null
    },
    {
      "index": 5,
      "name": "Module Temperature 2",
      "localizedName": "Module temperature 3",
      "dataName": "Temp3",
      "standardDataName": "Temp_Module3",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "°F",
      "dataNameDetail": null
    },
    {
      "index": 6,
      "name": "Ambient Air Temperature 1",
      "localizedName": "Ambient temperature 1",
      "dataName": "Ambient1",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": false,
      "isArchived": false,
      "units": "°F",
      "dataNameDetail": null
    },
    {
      "index": 7,
      "name": "Global Horizontal Irradiance",
      "localizedName": "Global Horizontal Irradiance (with Offset)",
      "dataName": "Sun2",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": false,
      "isArchived": false,
      "units": "W/m²",
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
    "key": "{\"ancestorKey\":\"H511575\",\"isRecursive\":false,\"types\":[\"attribute\",\"keyword\",\"note\"]}",
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
  "siteHasInverterGroups": true,
  "groupAllowed": [],
  "groupKey": "",
  "outputAllowed": [],
  "outputKey": "",
  "weatherStationKey1": "",
  "weatherStationKey2": "",
  "configs": [
    "Weather"
  ],
  "array": null,
  "eGauge": null,
  "gateway": null,
  "kiosk": null,
  "meter": null,
  "pvConfig": null,
  "thermal": null,
  "turbine": null,
  "virtualWeather": null,
  "weather": {
    "azimuth": 0,
    "tilt": 0,
    "tracking": 0,
    "maxTempF": 160,
    "minTempF": -30,
    "sensors": {
      "ambientTemp": {
        "isChecked": false,
        "isAllowed": true
      },
      "barometer": {
        "isChecked": false,
        "isAllowed": false
      },
      "humidity": {
        "isChecked": false,
        "isAllowed": false
      },
      "panelTemp1": {
        "isChecked": true,
        "isAllowed": true
      },
      "panelTemp2": {
        "isChecked": false,
        "isAllowed": true
      },
      "pyranometer1": {
        "isChecked": true,
        "isAllowed": true
      },
      "pyranometer2": {
        "isChecked": false,
        "isAllowed": true
      },
      "pyrheliometer": {
        "isChecked": false,
        "isAllowed": false
      },
      "rain": {
        "isChecked": false,
        "isAllowed": false
      },
      "snow": {
        "isChecked": false,
        "isAllowed": false
      },
      "wind": {
        "isChecked": false,
        "isAllowed": true
      }
    },
    "insolationType": 0,
    "interpolateDailyInsolation": true,
    "hasPyranometer": true,
    "pyranometerData": "NaN",
    "isPyranometerHigh": false,
    "pyranometerUnit": 57,
    "hasRefPyranometer": false,
    "refPyranometerData": null,
    "isRefPyranometerHigh": false,
    "refPyranometerUnit": 0,
    "tracker": {
      "hid": 0,
      "dataName": ""
    },
    "trackerOptions": {},
    "monthlyInsolation": {
      "jan": 0,
      "feb": 0,
      "mar": 0,
      "apr": 0,
      "may": 0,
      "jun": 0,
      "jul": 0,
      "aug": 0,
      "sep": 0,
      "oct": 0,
      "nov": 0,
      "dec": 0
    }
  },
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

