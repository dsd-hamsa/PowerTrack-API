<a id="top"></a>
# /api/edit/hardware/{hardware_id}

[← Back to Index](../logs.md)

**Methods:** GET  
**Status Codes:** 200  

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
      "properties": {
        "installationType": {
          "type": "number"
        },
        "serviceWeight": {
          "type": "number"
        },
        "remoteSourceId": {
          "type": "number"
        },
        "sourceList": {
          "type": "array",
          "items": {
            "type": "unknown"
          }
        },
        "forecast": {
          "type": "boolean"
        },
        "virtualIrradiance": {
          "type": "boolean"
        },
        "moduleTempEstimate": {
          "type": "boolean"
        },
        "hasSolarAnywhereLicense": {
          "type": "boolean"
        },
        "saUser": {
          "type": "string"
        },
        "saPassword": {
          "type": "string"
        },
        "saLicense": {
          "type": "string"
        }
      }
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
          "type": "object",
          "properties": {}
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
GET /api/edit/hardware/H494021
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
Accept: application/json
referer: https://apps.alsoenergy.com/powertrack/H494021/administration/config
```

**Response:**

```json
{
  "key": "H494021",
  "parentKey": "S68143",
  "ts": "2024-03-08T14:48:26Z",
  "description": "Solcast Virtual Weather Station",
  "assetId": "",
  "hardwareId": "C8458_S68143_WS0",
  "instance": 0,
  "functionId": "WS0",
  "functionCode": 5,
  "hardwareStatus": 1,
  "capacityKw": 0,
  "sort": 0,
  "gatewayKey": "",
  "gatewayId": "",
  "gatewayFwVersion": "",
  "gatewayScriptCount": "",
  "gatewayType": 0,
  "serialNum": "",
  "modelNum": "",
  "installDate": "2024-03-09",
  "driverId": 19015,
  "driverDescription": "Weather data from external sources such as SolarGIS and Clean Power Research, including DNI, DHI, Rain and Snow",
  "driverFlags": 64,
  "driverName": "External Weather Source (full)",
  "driverNotes": "",
  "validatedByKey": "",
  "validatedDateTime": "0001-01-01T00:00:00",
  "debug": false,
  "outOfService": false,
  "outOfServiceNote": "",
  "outOfServiceUntil": "2025-12-23T00:07:06.7884151Z",
  "reportExclude": false,
  "limitedCommunication": false,
  "primary": false,
  "address": "0",
  "unitId": 0,
  "isTcp": false,
  "port": 0,
  "serialMode": -1,
  "baud": "",
  "newNote": "",
  "dashboardKey": "",
  "dcRating": 0,
  "defaultChart": 21,
  "chartSectionCode": 4,
  "conflictNames": null,
  "isConflictAcknowledged": false,
  "settings": [
    {
      "originalValue": "SolCast",
      "index": 0,
      "name": "Source",
      "value": "SolCast",
      "type": 0
    },
    {
      "originalValue": 1057,
      "index": 1,
      "name": "Weather",
      "value": 1057,
      "type": 1
    },
    {
      "originalValue": "0",
      "index": 2,
      "name": "MinTemp",
      "value": "0",
      "type": 0
    },
    {
      "originalValue": "160",
      "index": 3,
      "name": "MaxTemp",
      "value": "160",
      "type": 0
    },
    {
      "originalValue": "WS0",
      "index": 4,
      "name": "ShortName",
      "value": "WS0",
      "type": 0
    }
  ],
  "deviceRegisters": [
    {
      "index": 0,
      "name": "Wind Direction",
      "localizedName": "Wind Direction",
      "dataName": "WindDirection",
      "standardDataName": "Wind_Direction",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "°",
      "dataNameDetail": null
    },
    {
      "index": 1,
      "name": "Global Horizontal Irradiance ",
      "localizedName": "Global Horizontal Irradiance (with Offset)",
      "dataName": "GHI",
      "standardDataName": "GHI_Irradiance",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "W/m²",
      "dataNameDetail": null
    },
    {
      "index": 2,
      "name": "Direct Normal Irradiance",
      "localizedName": "Direct Normal Irradiance",
      "dataName": "DNI",
      "standardDataName": "DNI_Irradiance",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "W/m²",
      "dataNameDetail": null
    },
    {
      "index": 3,
      "name": "Direct Horizontal Irradiance",
      "localizedName": "Diffuse Horizontal Irradiance",
      "dataName": "DHI",
      "standardDataName": "DHI_Irradiance",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "W/m²",
      "dataNameDetail": null
    },
    {
      "index": 4,
      "name": "Ambient Temperature",
      "localizedName": "Ambient Air Temperature",
      "dataName": "Ambient",
      "standardDataName": "Temp_Ambient",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "°F",
      "dataNameDetail": null
    },
    {
      "index": 5,
      "name": "Wind Speed",
      "localizedName": "Wind Speed",
      "dataName": "WindSpeed",
      "standardDataName": "Wind_Speed",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "mph",
      "dataNameDetail": null
    },
    {
      "index": 6,
      "name": "Absolute Precipitation",
      "localizedName": "Absolute Precipitation",
      "dataName": "Rain",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": false,
      "isArchived": false,
      "units": "in",
      "dataNameDetail": null
    },
    {
      "index": 7,
      "name": "Snow Depth",
      "localizedName": "Snow Depth",
      "dataName": "Snow",
      "standardDataName": "Snow_Depth",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "in",
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
    "key": "{\"ancestorKey\":\"H494021\",\"isRecursive\":false,\"types\":[\"attribute\",\"keyword\",\"note\"]}",
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
    "VirtualWeather",
    "VirtualWeatherDevice"
  ],
  "array": null,
  "eGauge": null,
  "gateway": null,
  "kiosk": null,
  "meter": null,
  "pvConfig": null,
  "thermal": null,
  "turbine": null,
  "virtualWeather": {
    "installationType": 2,
    "serviceWeight": 1,
    "remoteSourceId": 0,
    "sourceList": [],
    "forecast": false,
    "virtualIrradiance": false,
    "moduleTempEstimate": true,
    "hasSolarAnywhereLicense": false,
    "saUser": "",
    "saPassword": "",
    "saLicense": ""
  },
  "weather": {
    "azimuth": 0,
    "tilt": 0,
    "tracking": 0,
    "maxTempF": 160,
    "minTempF": 0,
    "sensors": {
      "ambientTemp": {
        "isChecked": true,
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
        "isChecked": false,
        "isAllowed": false
      },
      "panelTemp2": {
        "isChecked": false,
        "isAllowed": false
      },
      "pyranometer1": {
        "isChecked": false,
        "isAllowed": false
      },
      "pyranometer2": {
        "isChecked": true,
        "isAllowed": true
      },
      "pyrheliometer": {
        "isChecked": false,
        "isAllowed": false
      },
      "rain": {
        "isChecked": false,
        "isAllowed": true
      },
      "snow": {
        "isChecked": false,
        "isAllowed": true
      },
      "wind": {
        "isChecked": true,
        "isAllowed": true
      }
    },
    "insolationType": 0,
    "interpolateDailyInsolation": true,
    "hasPyranometer": false,
    "pyranometerData": null,
    "isPyranometerHigh": false,
    "pyranometerUnit": 0,
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

