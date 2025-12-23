<a id="top"></a>
# /api/edit/hardware/{hardware_id}

[← Back to Index](../logs.md)

**Methods:** GET  
**Status Codes:** 200, 200, 200  

## Table of Contents

- [Inverter (functionCode: 1)](#inverter-functioncode-1)
- [Example](#example)

## Inverter (functionCode: 1)

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
      "type": "number"
    },
    "groupKey": {
      "type": "string"
    },
    "outputAllowed": {
      "type": "number"
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
      "properties": {
        "pvModelType": {
          "type": "number"
        },
        "acDcType": {
          "type": "number"
        },
        "acInfo": {
          "type": "number"
        },
        "inverters": {
          "type": "object",
          "properties": {
            "mppWatts": {
              "type": "number"
            },
            "pvSystOutOfSync": {
              "type": "boolean"
            },
            "pvSystModuleId": {
              "type": "number"
            },
            "pvSystConfig": {
              "type": "object",
              "properties": {
                "key": {
                  "type": "string"
                },
                "manufacturer": {
                  "type": "string"
                },
                "model": {
                  "type": "string"
                },
                "cellType": {
                  "type": "number"
                },
                "cellsSeries": {
                  "type": "number"
                },
                "cellsParallel": {
                  "type": "number"
                },
                "cellArea": {
                  "type": "number"
                },
                "isc": {
                  "type": "number"
                },
                "voc": {
                  "type": "number"
                },
                "impp": {
                  "type": "number"
                },
                "vmpp": {
                  "type": "number"
                },
                "muIsc": {
                  "type": "number"
                },
                "rShunt": {
                  "type": "number"
                },
                "rSeries": {
                  "type": "number"
                },
                "rShuntGinc": {
                  "type": "number"
                },
                "rShuntExp": {
                  "type": "number"
                },
                "muPMax": {
                  "type": "number"
                }
              }
            },
            "pvUsaConfig": {
              "type": "object",
              "properties": {
                "irradiance": {
                  "type": "number"
                },
                "irradianceSquared": {
                  "type": "number"
                },
                "windSpeed": {
                  "type": "number"
                },
                "ambientTemperature": {
                  "type": "number"
                }
              }
            },
            "installationType": {
              "type": "number"
            },
            "bifacialRatio": {
              "type": "number"
            },
            "efficiency": {
              "type": "number"
            },
            "moduleArea": {
              "type": "number"
            },
            "limitOne": {
              "type": "number"
            },
            "limitTempOne": {
              "type": "number"
            },
            "limitTwo": {
              "type": "number"
            },
            "limitTempTwo": {
              "type": "number"
            },
            "acVoltage": {
              "type": "number"
            },
            "dcAmps": {
              "type": "number"
            },
            "dcSize": {
              "type": "number"
            },
            "dcVoltage": {
              "type": "number"
            },
            "inverterLoss": {
              "type": "number"
            },
            "inverterKw": {
              "type": "number"
            },
            "inverterName": {
              "type": "string"
            },
            "inverterKva": {
              "type": "number"
            },
            "shadeModel": {
              "type": "object",
              "properties": {
                "hasInterRowShadeModel": {
                  "type": "number"
                },
                "albedoWeight": {
                  "type": "number"
                },
                "diffuseWeight": {
                  "type": "number"
                },
                "regions": {
                  "type": "array",
                  "items": {
                    "type": "unknown"
                  }
                },
                "interRowShadeModel": {
                  "type": "object",
                  "properties": {
                    "azimuth": {
                      "type": "number"
                    },
                    "panelLength": {
                      "type": "number"
                    },
                    "pitch": {
                      "type": "number"
                    },
                    "rows": {
                      "type": "number"
                    },
                    "tilt": {
                      "type": "number"
                    },
                    "topBorderLength": {
                      "type": "number"
                    }
                  }
                }
              }
            },
            "numOfStrings": {
              "type": "number"
            },
            "panelsPerString": {
              "type": "number"
            },
            "derate": {
              "type": "number"
            },
            "wattsPerPanel": {
              "type": "number"
            },
            "mppVoltage": {
              "type": "number"
            },
            "mppAmps": {
              "type": "number"
            },
            "tempCoefficient": {
              "type": "number"
            },
            "azimuth": {
              "type": "number"
            },
            "tilt": {
              "type": "number"
            },
            "tracking": {
              "type": "number"
            },
            "trackingAngle": {
              "type": "number"
            },
            "derateDetail": {
              "type": "boolean"
            },
            "lightInducedDegradation": {
              "type": "number"
            },
            "pmaxDeviation": {
              "type": "number"
            },
            "mismatch": {
              "type": "number"
            },
            "dcLoss": {
              "type": "number"
            },
            "acLoss": {
              "type": "number"
            },
            "transformerLoss": {
              "type": "number"
            },
            "regressionFunctionList": {
              "type": "array",
              "items": {
                "type": "unknown"
              }
            },
            "efficiencyCurveId": {
              "type": "number"
            },
            "efficiencyCurveModel": {
              "type": "object",
              "properties": {
                "key": {
                  "type": "string"
                },
                "modelType": {
                  "type": "number"
                },
                "manufacturer": {
                  "type": "string"
                },
                "modelName": {
                  "type": "string"
                },
                "pointsList": {
                  "type": "array",
                  "items": {
                    "type": "unknown"
                  }
                },
                "scaleX": {
                  "type": "number"
                },
                "scaleY": {
                  "type": "number"
                }
              }
            },
            "incidenceAngleCurveId": {
              "type": "number"
            },
            "incidenceAngleCurveModel": {
              "type": "object",
              "properties": {
                "key": {
                  "type": "string"
                },
                "modelType": {
                  "type": "number"
                },
                "manufacturer": {
                  "type": "string"
                },
                "modelName": {
                  "type": "string"
                },
                "pointsList": {
                  "type": "array",
                  "items": {
                    "type": "unknown"
                  }
                },
                "scaleX": {
                  "type": "number"
                },
                "scaleY": {
                  "type": "number"
                }
              }
            }
          }
        },
        "fileAKey": {
          "type": "string"
        },
        "fileBKey": {
          "type": "string"
        },
        "combinerInputs": {
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
        "degrade": {
          "type": "number"
        },
        "monthlyDerate": {
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
        },
        "monthlyOutput": {
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
        },
        "canIntegrateCombiners": {
          "type": "boolean"
        },
        "hasIntegratedCombiners": {
          "type": "boolean"
        }
      }
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
GET /api/edit/hardware/H511568
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
Accept: application/json
referer: https://apps.alsoenergy.com/powertrack/H511568/administration/config
```

**Response:**

```json
{
  "key": "H511568",
  "parentKey": "S68143",
  "ts": "2025-12-22T22:06:35Z",
  "description": "INVERTER 1",
  "assetId": "",
  "hardwareId": "C20909_S68143_PV0",
  "instance": 0,
  "functionId": "PV0",
  "functionCode": 1,
  "hardwareStatus": 1,
  "capacityKw": 62.5,
  "sort": 11,
  "gatewayKey": "H511564",
  "gatewayId": "000CC68FAF30",
  "gatewayFwVersion": "",
  "gatewayScriptCount": "",
  "gatewayType": 7,
  "serialNum": "",
  "modelNum": "SMA CORE 1 STP62-US-41",
  "installDate": "2024-07-12",
  "driverId": 19880,
  "driverDescription": "Tri-Power Core1 inverter with no Controls",
  "driverFlags": 18434,
  "driverName": "SMA Tri-Power Core1 Inverter (SS) Standard",
  "driverNotes": "Legacy Drivers: 2136, 3227, 566, 707\r\r[06.08.2023 - Sagar]\rUpdated the frequency scaling expression.",
  "validatedByKey": "",
  "validatedDateTime": "0001-01-01T00:00:00",
  "debug": false,
  "outOfService": false,
  "outOfServiceNote": "",
  "outOfServiceUntil": "2025-12-23T00:11:22.0234312Z",
  "reportExclude": false,
  "limitedCommunication": false,
  "primary": false,
  "address": "192.168.13.51",
  "unitId": 3,
  "isTcp": true,
  "port": 0,
  "serialMode": 0,
  "baud": "",
  "newNote": "",
  "dashboardKey": "",
  "dcRating": 8720,
  "defaultChart": 2,
  "chartSectionCode": 1,
  "conflictNames": null,
  "isConflictAcknowledged": false,
  "settings": [
    {
      "originalValue": "N/A",
      "index": 0,
      "name": "dev:portMode",
      "value": "N/A",
      "type": 0
    },
    {
      "originalValue": 3,
      "index": 1,
      "name": "dev:UnitID",
      "value": 3,
      "type": 1
    },
    {
      "originalValue": 0,
      "index": 2,
      "name": "dev:RegOffset",
      "value": 0,
      "type": 1
    },
    {
      "originalValue": "3",
      "index": 3,
      "name": "dev:tcpretry",
      "value": "3",
      "type": 0
    },
    {
      "originalValue": 1,
      "index": 4,
      "name": "dev:ScaleKWH",
      "value": 1,
      "type": 2
    },
    {
      "originalValue": 0.001,
      "index": 5,
      "name": "dev:ScaleKW",
      "value": 0.001,
      "type": 2
    },
    {
      "originalValue": "0.01",
      "index": 6,
      "name": "dev:ScaleV",
      "value": "0.01",
      "type": 0
    },
    {
      "originalValue": "0.001",
      "index": 7,
      "name": "dev:ScaleI",
      "value": "0.001",
      "type": 0
    },
    {
      "originalValue": "0.01",
      "index": 8,
      "name": "dev:ScaleFrequency",
      "value": "0.01",
      "type": 0
    },
    {
      "originalValue": "0.001",
      "index": 9,
      "name": "dev:ScaleKVAR",
      "value": "0.001",
      "type": 0
    },
    {
      "originalValue": "0.001",
      "index": 10,
      "name": "dev:ScalePF",
      "value": "0.001",
      "type": 0
    },
    {
      "originalValue": "0.1",
      "index": 11,
      "name": "dev:ScaleTemp",
      "value": "0.1",
      "type": 0
    },
    {
      "originalValue": "0.001",
      "index": 12,
      "name": "dev:ScaleKVA",
      "value": "0.001",
      "type": 0
    },
    {
      "originalValue": "PV0",
      "index": 13,
      "name": "ShortName",
      "value": "PV0",
      "type": 0
    }
  ],
  "deviceRegisters": [
    {
      "index": 0,
      "name": "Active Energy Net",
      "localizedName": "Active Energy Net (with Offset)",
      "dataName": "KwhAC",
      "standardDataName": "Active_Energy_Gross",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "kWh",
      "dataNameDetail": null
    },
    {
      "index": 1,
      "name": "Active Power",
      "localizedName": "Active Power",
      "dataName": "KwAC",
      "standardDataName": "Active_Power",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "kW",
      "dataNameDetail": null
    },
    {
      "index": 2,
      "name": "Active Power A",
      "localizedName": "Active Power A",
      "dataName": "Active_Power_A",
      "standardDataName": "Active_Power_A",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "kW",
      "dataNameDetail": null
    },
    {
      "index": 3,
      "name": "Active Power B",
      "localizedName": "Active Power B",
      "dataName": "Active_Power_B",
      "standardDataName": "Active_Power_B",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "kW",
      "dataNameDetail": null
    },
    {
      "index": 4,
      "name": "Active Power C",
      "localizedName": "Active Power C",
      "dataName": "Active_Power_C",
      "standardDataName": "Active_Power_C",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "kW",
      "dataNameDetail": null
    },
    {
      "index": 5,
      "name": "AC Voltage AN",
      "localizedName": "AC Voltage A (Line-Neutral)",
      "dataName": "VacA",
      "standardDataName": "Voltage_AN",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "V",
      "dataNameDetail": null
    },
    {
      "index": 6,
      "name": "AC Voltage BN",
      "localizedName": "AC Voltage B (Line-Neutral)",
      "dataName": "VacB",
      "standardDataName": "Voltage_BN",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "V",
      "dataNameDetail": null
    },
    {
      "index": 7,
      "name": "AC Voltage CN",
      "localizedName": "AC Voltage C (Line-Neutral)",
      "dataName": "VacC",
      "standardDataName": "Voltage_CN",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "V",
      "dataNameDetail": null
    },
    {
      "index": 8,
      "name": "AC Current Average",
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
      "index": 9,
      "name": "AC Current A",
      "localizedName": "AC Current A",
      "dataName": "IacA",
      "standardDataName": "Current_A",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "A",
      "dataNameDetail": null
    },
    {
      "index": 10,
      "name": "AC Current B",
      "localizedName": "AC Current B",
      "dataName": "IacB",
      "standardDataName": "Current_B",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "A",
      "dataNameDetail": null
    },
    {
      "index": 11,
      "name": "AC Current C",
      "localizedName": "AC Current C",
      "dataName": "IacC",
      "standardDataName": "Current_C",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "A",
      "dataNameDetail": null
    },
    {
      "index": 12,
      "name": "Frequency",
      "localizedName": "Frequency",
      "dataName": "Frequency",
      "standardDataName": "Frequency",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "Hz",
      "dataNameDetail": null
    },
    {
      "index": 13,
      "name": "Device Temperature",
      "localizedName": "Device Temperature",
      "dataName": "DeviceTemp",
      "standardDataName": "Temp_Device",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "°F",
      "dataNameDetail": null
    },
    {
      "index": 14,
      "name": "AC Voltage AB",
      "localizedName": "AC Voltage A-B (Line-Line)",
      "dataName": "VacAB",
      "standardDataName": "Voltage_AB",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "V",
      "dataNameDetail": null
    },
    {
      "index": 15,
      "name": "AC Voltage BC",
      "localizedName": "AC Voltage B-C (Line-Line)",
      "dataName": "VacBC",
      "standardDataName": "Voltage_BC",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "V",
      "dataNameDetail": null
    },
    {
      "index": 16,
      "name": "AC Voltage CA",
      "localizedName": "AC Voltage C-A (Line-Line)",
      "dataName": "VacCA",
      "standardDataName": "Voltage_CA",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "V",
      "dataNameDetail": null
    },
    {
      "index": 17,
      "name": "Reactive Power ",
      "localizedName": "Reactive Power A",
      "dataName": "Reactive_Power_A",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "kVAR",
      "dataNameDetail": null
    },
    {
      "index": 18,
      "name": "Reactive Power B",
      "localizedName": "Reactive Power B",
      "dataName": "Reactive_Power_B",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "kVAR",
      "dataNameDetail": null
    },
    {
      "index": 19,
      "name": "Reactive Power C",
      "localizedName": "Reactive Power C",
      "dataName": "Reactive_Power_C",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "kVAR",
      "dataNameDetail": null
    },
    {
      "index": 20,
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
      "index": 21,
      "name": "Apparent Power",
      "localizedName": "Apparent Power",
      "dataName": "KVA",
      "standardDataName": "Apparent_Power",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "kVA",
      "dataNameDetail": null
    },
    {
      "index": 22,
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
      "index": 23,
      "name": "Internal Temperature",
      "localizedName": "Internal Temperature",
      "dataName": "InternalTemp",
      "standardDataName": "Temp_Internal",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "°F",
      "dataNameDetail": null
    },
    {
      "index": 24,
      "name": "Active Energy Net Raw",
      "localizedName": "Active Energy Net (without Offset)",
      "dataName": "KwhACraw",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "kWh",
      "dataNameDetail": null
    },
    {
      "index": 25,
      "name": "DC Current Input 1",
      "localizedName": "DC current 1",
      "dataName": "Idc1",
      "standardDataName": "DC_Current1",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "A",
      "dataNameDetail": null
    },
    {
      "index": 26,
      "name": "DC Voltage Input 1",
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
      "index": 27,
      "name": "DC Power 1",
      "localizedName": "DC power 1",
      "dataName": "KwDC1",
      "standardDataName": "DC_Power1",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "kW",
      "dataNameDetail": null
    },
    {
      "index": 28,
      "name": "DC Current Input 2",
      "localizedName": "DC current 2",
      "dataName": "Idc2",
      "standardDataName": "DC_Current2",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "A",
      "dataNameDetail": null
    },
    {
      "index": 29,
      "name": "DC Voltage Input 2",
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
      "index": 30,
      "name": "DC Power 2",
      "localizedName": "DC power 2",
      "dataName": "KwDC2",
      "standardDataName": "DC_Power2",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "kW",
      "dataNameDetail": null
    },
    {
      "index": 31,
      "name": "DC Current Input 3",
      "localizedName": "DC current 3",
      "dataName": "Idc3",
      "standardDataName": "DC_Current3",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "A",
      "dataNameDetail": null
    },
    {
      "index": 32,
      "name": "DC Voltage Input 3",
      "localizedName": "DC Voltage 3",
      "dataName": "Vdc3",
      "standardDataName": "DC_Voltage3",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "V",
      "dataNameDetail": null
    },
    {
      "index": 33,
      "name": "DC Power 3",
      "localizedName": "DC power 3",
      "dataName": "KwDC3",
      "standardDataName": "DC_Power3",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "kW",
      "dataNameDetail": null
    },
    {
      "index": 34,
      "name": "DC Current Input 4",
      "localizedName": "DC current 4",
      "dataName": "Idc4",
      "standardDataName": "DC_Current4",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "A",
      "dataNameDetail": null
    },
    {
      "index": 35,
      "name": "DC Voltage Input 4",
      "localizedName": "DC voltage 4",
      "dataName": "Vdc4",
      "standardDataName": "DC_Voltage4",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "V",
      "dataNameDetail": null
    },
    {
      "index": 36,
      "name": "DC Power 4",
      "localizedName": "DC power 4",
      "dataName": "KwDC4",
      "standardDataName": "DC_Power4",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "kW",
      "dataNameDetail": null
    },
    {
      "index": 37,
      "name": "DC Current Input 5",
      "localizedName": "DC current 5",
      "dataName": "Idc5",
      "standardDataName": "DC_Current5",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "A",
      "dataNameDetail": null
    },
    {
      "index": 38,
      "name": "DC Voltage Input 5",
      "localizedName": "DC Voltage 5",
      "dataName": "Vdc5",
      "standardDataName": "DC_Voltage5",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "V",
      "dataNameDetail": null
    },
    {
      "index": 39,
      "name": "DC Power 5",
      "localizedName": "DC power 5",
      "dataName": "KwDC5",
      "standardDataName": "DC_Power5",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "kW",
      "dataNameDetail": null
    },
    {
      "index": 40,
      "name": "DC Current Input 6",
      "localizedName": "DC current 6",
      "dataName": "Idc6",
      "standardDataName": "DC_Current6",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "A",
      "dataNameDetail": null
    },
    {
      "index": 41,
      "name": "DC Voltage Input 6",
      "localizedName": "DC Voltage 6",
      "dataName": "Vdc6",
      "standardDataName": "DC_Voltage6",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "V",
      "dataNameDetail": null
    },
    {
      "index": 42,
      "name": "DC Power 6",
      "localizedName": "DC power 6",
      "dataName": "KwDC6",
      "standardDataName": "DC_Power6",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "kW",
      "dataNameDetail": null
    },
    {
      "index": 43,
      "name": "DC Current Input (total)",
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
      "index": 44,
      "name": "DC Voltage Input (average)",
      "localizedName": "DC Voltage Average",
      "dataName": "Vdc",
      "standardDataName": "DC_Voltage_Avg",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "V",
      "dataNameDetail": null
    },
    {
      "index": 45,
      "name": "DC Power (total)",
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
      "index": 46,
      "name": "Serial Number",
      "localizedName": "Serial Number",
      "dataName": "Serial_Number",
      "standardDataName": "Serial_Number",
      "isIgnored": false,
      "isRaw": false,
      "isArchived": false,
      "units": "",
      "dataNameDetail": null
    },
    {
      "index": 47,
      "name": "EventID",
      "localizedName": "EventID",
      "dataName": "Fault",
      "standardDataName": "Fault",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "",
      "dataNameDetail": null
    },
    {
      "index": 48,
      "name": "Condition",
      "localizedName": "Operating Status",
      "dataName": "Status",
      "standardDataName": "Op_Status",
      "isIgnored": false,
      "isRaw": true,
      "isArchived": true,
      "units": "",
      "dataNameDetail": null
    },
    {
      "index": 49,
      "name": "Firmware",
      "localizedName": "Firmware Version",
      "dataName": "Firmware_Version",
      "standardDataName": "Firmware_Version",
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
    "key": "{\"ancestorKey\":\"H511568\",\"isRecursive\":false,\"types\":[\"attribute\",\"keyword\",\"note\"]}",
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
  "groupAllowed": [
    28
  ],
  "groupKey": "",
  "outputAllowed": [
    2
  ],
  "outputKey": "",
  "weatherStationKey1": "",
  "weatherStationKey2": "",
  "configs": [
    "Pv"
  ],
  "array": null,
  "eGauge": null,
  "gateway": null,
  "kiosk": null,
  "meter": null,
  "pvConfig": {
    "pvModelType": 2,
    "acDcType": 1,
    "acInfo": 2,
    "inverters": [
      {
        "mppWatts": 545.0719999999999,
        "pvSystOutOfSync": false,
        "pvSystModuleId": 937,
        "pvSystConfig": {
          "key": "",
          "manufacturer": "Longi Solar",
          "model": "LR5-72HBD-545M",
          "cellType": 0,
          "cellsSeries": 72,
          "cellsParallel": 2,
          "cellArea": 166.5,
          "isc": 13.92,
          "voc": 49.65,
          "impp": 13.04,
          "vmpp": 41.8,
          "muIsc": 0.063971119133574,
          "rShunt": 241,
          "rSeries": 0.19,
          "rShuntGinc": 3000,
          "rShuntExp": 3,
          "muPMax": -0.34
        },
        "pvUsaConfig": {
          "irradiance": 0,
          "irradianceSquared": 0,
          "windSpeed": 0,
          "ambientTemperature": 0
        },
        "installationType": 2,
        "bifacialRatio": 0,
        "efficiency": 0,
        "moduleArea": 0,
        "limitOne": 0,
        "limitTempOne": 0,
        "limitTwo": 0,
        "limitTempTwo": 0,
        "acVoltage": 480,
        "dcAmps": 0,
        "dcSize": 8.72,
        "dcVoltage": 1000,
        "inverterLoss": 0,
        "inverterKw": 62.5,
        "inverterName": "",
        "inverterKva": 0,
        "shadeModel": {
          "hasInterRowShadeModel": 0,
          "albedoWeight": 0,
          "diffuseWeight": 0,
          "regions": [],
          "interRowShadeModel": {
            "azimuth": 0,
            "panelLength": 0,
            "pitch": 0,
            "rows": 0,
            "tilt": 0,
            "topBorderLength": 0
          }
        },
        "numOfStrings": 1,
        "panelsPerString": 16,
        "derate": 0.9,
        "wattsPerPanel": 545,
        "mppVoltage": 41.8,
        "mppAmps": 13.04,
        "tempCoefficient": -0.34,
        "azimuth": 180,
        "tilt": 1,
        "tracking": 0,
        "trackingAngle": 0,
        "derateDetail": false,
        "lightInducedDegradation": 0,
        "pmaxDeviation": 0,
        "mismatch": 0,
        "dcLoss": 0,
        "acLoss": 0,
        "transformerLoss": 0,
        "regressionFunctionList": [],
        "efficiencyCurveId": 0,
        "efficiencyCurveModel": {
          "key": "",
          "modelType": 0,
          "manufacturer": "",
          "modelName": "",
          "pointsList": [],
          "scaleX": 0,
          "scaleY": 0
        },
        "incidenceAngleCurveId": 0,
        "incidenceAngleCurveModel": {
          "key": "",
          "modelType": 0,
          "manufacturer": "",
          "modelName": "",
          "pointsList": [],
          "scaleX": 0,
          "scaleY": 0
        }
      },
      {
        "mppWatts": 545.0719999999999,
        "pvSystOutOfSync": false,
        "pvSystModuleId": 937,
        "pvSystConfig": {
          "key": "",
          "manufacturer": "Longi Solar",
          "model": "LR5-72HBD-545M",
          "cellType": 0,
          "cellsSeries": 72,
          "cellsParallel": 2,
          "cellArea": 166.5,
          "isc": 13.92,
          "voc": 49.65,
          "impp": 13.04,
          "vmpp": 41.8,
          "muIsc": 0.063971119133574,
          "rShunt": 241,
          "rSeries": 0.19,
          "rShuntGinc": 3000,
          "rShuntExp": 3,
          "muPMax": -0.34
        },
        "pvUsaConfig": {
          "irradiance": 0,
          "irradianceSquared": 0,
          "windSpeed": 0,
          "ambientTemperature": 0
        },
        "installationType": 2,
        "bifacialRatio": 0,
        "efficiency": 0,
        "moduleArea": 0,
        "limitOne": 0,
        "limitTempOne": 0,
        "limitTwo": 0,
        "limitTempTwo": 0,
        "acVoltage": 480,
        "dcAmps": 0,
        "dcSize": 16.35,
        "dcVoltage": 0,
        "inverterLoss": 0,
        "inverterKw": 62.5,
        "inverterName": "",
        "inverterKva": 0,
        "shadeModel": {
          "hasInterRowShadeModel": 0,
          "albedoWeight": 0,
          "diffuseWeight": 0,
          "regions": [],
          "interRowShadeModel": {
            "azimuth": 0,
            "panelLength": 0,
            "pitch": 0,
            "rows": 0,
            "tilt": 0,
            "topBorderLength": 0
          }
        },
        "numOfStrings": 2,
        "panelsPerString": 15,
        "derate": 0.9,
        "wattsPerPanel": 545,
        "mppVoltage": 41.8,
        "mppAmps": 13.04,
        "tempCoefficient": -0.34,
        "azimuth": 180,
        "tilt": 2,
        "tracking": 0,
        "trackingAngle": 0,
        "derateDetail": false,
        "lightInducedDegradation": 0,
        "pmaxDeviation": 0,
        "mismatch": 0,
        "dcLoss": 0,
        "acLoss": 0,
        "transformerLoss": 0,
        "regressionFunctionList": [],
        "efficiencyCurveId": 0,
        "efficiencyCurveModel": {
          "key": "",
          "modelType": 0,
          "manufacturer": "",
          "modelName": "",
          "pointsList": [],
          "scaleX": 0,
          "scaleY": 0
        },
        "incidenceAngleCurveId": 0,
        "incidenceAngleCurveModel": {
          "key": "",
          "modelType": 0,
          "manufacturer": "",
          "modelName": "",
          "pointsList": [],
          "scaleX": 0,
          "scaleY": 0
        }
      },
      {
        "mppWatts": 545.0719999999999,
        "pvSystOutOfSync": false,
        "pvSystModuleId": 937,
        "pvSystConfig": {
          "key": "",
          "manufacturer": "Longi Solar",
          "model": "LR5-72HBD-545M",
          "cellType": 0,
          "cellsSeries": 72,
          "cellsParallel": 2,
          "cellArea": 166.5,
          "isc": 13.92,
          "voc": 49.65,
          "impp": 13.04,
          "vmpp": 41.8,
          "muIsc": 0.063971119133574,
          "rShunt": 241,
          "rSeries": 0.19,
          "rShuntGinc": 3000,
          "rShuntExp": 3,
          "muPMax": -0.34
        },
        "pvUsaConfig": {
          "irradiance": 0,
          "irradianceSquared": 0,
          "windSpeed": 0,
          "ambientTemperature": 0
        },
        "installationType": 2,
        "bifacialRatio": 0,
        "efficiency": 0,
        "moduleArea": 0,
        "limitOne": 0,
        "limitTempOne": 0,
        "limitTwo": 0,
        "limitTempTwo": 0,
        "acVoltage": 480,
        "dcAmps": 0,
        "dcSize": 8.72,
        "dcVoltage": 0,
        "inverterLoss": 0,
        "inverterKw": 62.5,
        "inverterName": "",
        "inverterKva": 0,
        "shadeModel": {
          "hasInterRowShadeModel": 0,
          "albedoWeight": 0,
          "diffuseWeight": 0,
          "regions": [],
          "interRowShadeModel": {
            "azimuth": 0,
            "panelLength": 0,
            "pitch": 0,
            "rows": 0,
            "tilt": 0,
            "topBorderLength": 0
          }
        },
        "numOfStrings": 1,
        "panelsPerString": 16,
        "derate": 0.9,
        "wattsPerPanel": 545,
        "mppVoltage": 41.8,
        "mppAmps": 13.04,
        "tempCoefficient": -0.34,
        "azimuth": 180,
        "tilt": 3,
        "tracking": 0,
        "trackingAngle": 0,
        "derateDetail": false,
        "lightInducedDegradation": 0,
        "pmaxDeviation": 0,
        "mismatch": 0,
        "dcLoss": 0,
        "acLoss": 0,
        "transformerLoss": 0,
        "regressionFunctionList": [],
        "efficiencyCurveId": 0,
        "efficiencyCurveModel": {
          "key": "",
          "modelType": 0,
          "manufacturer": "",
          "modelName": "",
          "pointsList": [],
          "scaleX": 0,
          "scaleY": 0
        },
        "incidenceAngleCurveId": 0,
        "incidenceAngleCurveModel": {
          "key": "",
          "modelType": 0,
          "manufacturer": "",
          "modelName": "",
          "pointsList": [],
          "scaleX": 0,
          "scaleY": 0
        }
      },
      {
        "mppWatts": 545.0719999999999,
        "pvSystOutOfSync": false,
        "pvSystModuleId": 937,
        "pvSystConfig": {
          "key": "",
          "manufacturer": "Longi Solar",
          "model": "LR5-72HBD-545M",
          "cellType": 0,
          "cellsSeries": 72,
          "cellsParallel": 2,
          "cellArea": 166.5,
          "isc": 13.92,
          "voc": 49.65,
          "impp": 13.04,
          "vmpp": 41.8,
          "muIsc": 0.063971119133574,
          "rShunt": 241,
          "rSeries": 0.19,
          "rShuntGinc": 3000,
          "rShuntExp": 3,
          "muPMax": -0.34
        },
        "pvUsaConfig": {
          "irradiance": 0,
          "irradianceSquared": 0,
          "windSpeed": 0,
          "ambientTemperature": 0
        },
        "installationType": 2,
        "bifacialRatio": 0,
        "efficiency": 0,
        "moduleArea": 0,
        "limitOne": 0,
        "limitTempOne": 0,
        "limitTwo": 0,
        "limitTempTwo": 0,
        "acVoltage": 480,
        "dcAmps": 0,
        "dcSize": 16.35,
        "dcVoltage": 0,
        "inverterLoss": 0,
        "inverterKw": 62.5,
        "inverterName": "",
        "inverterKva": 0,
        "shadeModel": {
          "hasInterRowShadeModel": 0,
          "albedoWeight": 0,
          "diffuseWeight": 0,
          "regions": [],
          "interRowShadeModel": {
            "azimuth": 0,
            "panelLength": 0,
            "pitch": 0,
            "rows": 0,
            "tilt": 0,
            "topBorderLength": 0
          }
        },
        "numOfStrings": 2,
        "panelsPerString": 15,
        "derate": 0.9,
        "wattsPerPanel": 545,
        "mppVoltage": 41.8,
        "mppAmps": 13.04,
        "tempCoefficient": -0.34,
        "azimuth": 180,
        "tilt": 5,
        "tracking": 0,
        "trackingAngle": 0,
        "derateDetail": false,
        "lightInducedDegradation": 0,
        "pmaxDeviation": 0,
        "mismatch": 0,
        "dcLoss": 0,
        "acLoss": 0,
        "transformerLoss": 0,
        "regressionFunctionList": [],
        "efficiencyCurveId": 0,
        "efficiencyCurveModel": {
          "key": "",
          "modelType": 0,
          "manufacturer": "",
          "modelName": "",
          "pointsList": [],
          "scaleX": 0,
          "scaleY": 0
        },
        "incidenceAngleCurveId": 0,
        "incidenceAngleCurveModel": {
          "key": "",
          "modelType": 0,
          "manufacturer": "",
          "modelName": "",
          "pointsList": [],
          "scaleX": 0,
          "scaleY": 0
        }
      },
      {
        "mppWatts": 545.0719999999999,
        "pvSystOutOfSync": false,
        "pvSystModuleId": 937,
        "pvSystConfig": {
          "key": "",
          "manufacturer": "Longi Solar",
          "model": "LR5-72HBD-545M",
          "cellType": 0,
          "cellsSeries": 72,
          "cellsParallel": 2,
          "cellArea": 166.5,
          "isc": 13.92,
          "voc": 49.65,
          "impp": 13.04,
          "vmpp": 41.8,
          "muIsc": 0.063971119133574,
          "rShunt": 241,
          "rSeries": 0.19,
          "rShuntGinc": 3000,
          "rShuntExp": 3,
          "muPMax": -0.34
        },
        "pvUsaConfig": {
          "irradiance": 0,
          "irradianceSquared": 0,
          "windSpeed": 0,
          "ambientTemperature": 0
        },
        "installationType": 2,
        "bifacialRatio": 0,
        "efficiency": 0,
        "moduleArea": 0,
        "limitOne": 0,
        "limitTempOne": 0,
        "limitTwo": 0,
        "limitTempTwo": 0,
        "acVoltage": 480,
        "dcAmps": 0,
        "dcSize": 8.72,
        "dcVoltage": 0,
        "inverterLoss": 0,
        "inverterKw": 62.5,
        "inverterName": "",
        "inverterKva": 0,
        "shadeModel": {
          "hasInterRowShadeModel": 0,
          "albedoWeight": 0,
          "diffuseWeight": 0,
          "regions": [],
          "interRowShadeModel": {
            "azimuth": 0,
            "panelLength": 0,
            "pitch": 0,
            "rows": 0,
            "tilt": 0,
            "topBorderLength": 0
          }
        },
        "numOfStrings": 1,
        "panelsPerString": 16,
        "derate": 0.9,
        "wattsPerPanel": 545,
        "mppVoltage": 41.8,
        "mppAmps": 13.04,
        "tempCoefficient": -0.34,
        "azimuth": 180,
        "tilt": 6,
        "tracking": 0,
        "trackingAngle": 0,
        "derateDetail": false,
        "lightInducedDegradation": 0,
        "pmaxDeviation": 0,
        "mismatch": 0,
        "dcLoss": 0,
        "acLoss": 0,
        "transformerLoss": 0,
        "regressionFunctionList": [],
        "efficiencyCurveId": 0,
        "efficiencyCurveModel": {
          "key": "",
          "modelType": 0,
          "manufacturer": "",
          "modelName": "",
          "pointsList": [],
          "scaleX": 0,
          "scaleY": 0
        },
        "incidenceAngleCurveId": 0,
        "incidenceAngleCurveModel": {
          "key": "",
          "modelType": 0,
          "manufacturer": "",
          "modelName": "",
          "pointsList": [],
          "scaleX": 0,
          "scaleY": 0
        }
      },
      {
        "mppWatts": 545.0719999999999,
        "pvSystOutOfSync": false,
        "pvSystModuleId": 937,
        "pvSystConfig": {
          "key": "",
          "manufacturer": "Longi Solar",
          "model": "LR5-72HBD-545M",
          "cellType": 0,
          "cellsSeries": 72,
          "cellsParallel": 2,
          "cellArea": 166.5,
          "isc": 13.92,
          "voc": 49.65,
          "impp": 13.04,
          "vmpp": 41.8,
          "muIsc": 0.063971119133574,
          "rShunt": 241,
          "rSeries": 0.19,
          "rShuntGinc": 3000,
          "rShuntExp": 3,
          "muPMax": -0.34
        },
        "pvUsaConfig": {
          "irradiance": 0,
          "irradianceSquared": 0,
          "windSpeed": 0,
          "ambientTemperature": 0
        },
        "installationType": 2,
        "bifacialRatio": 0,
        "efficiency": 0,
        "moduleArea": 0,
        "limitOne": 0,
        "limitTempOne": 0,
        "limitTwo": 0,
        "limitTempTwo": 0,
        "acVoltage": 480,
        "dcAmps": 0,
        "dcSize": 16.35,
        "dcVoltage": 1000,
        "inverterLoss": 0,
        "inverterKw": 62.5,
        "inverterName": "",
        "inverterKva": 0,
        "shadeModel": {
          "hasInterRowShadeModel": 0,
          "albedoWeight": 0,
          "diffuseWeight": 0,
          "regions": [],
          "interRowShadeModel": {
            "azimuth": 0,
            "panelLength": 0,
            "pitch": 0,
            "rows": 0,
            "tilt": 0,
            "topBorderLength": 0
          }
        },
        "numOfStrings": 2,
        "panelsPerString": 15,
        "derate": 0.9,
        "wattsPerPanel": 545,
        "mppVoltage": 41.8,
        "mppAmps": 13.04,
        "tempCoefficient": -0.34,
        "azimuth": 180,
        "tilt": 10,
        "tracking": 0,
        "trackingAngle": 0,
        "derateDetail": false,
        "lightInducedDegradation": 0,
        "pmaxDeviation": 0,
        "mismatch": 0,
        "dcLoss": 0,
        "acLoss": 0,
        "transformerLoss": 0,
        "regressionFunctionList": [],
        "efficiencyCurveId": 0,
        "efficiencyCurveModel": {
          "key": "",
          "modelType": 0,
          "manufacturer": "",
          "modelName": "",
          "pointsList": [],
          "scaleX": 0,
          "scaleY": 0
        },
        "incidenceAngleCurveId": 0,
        "incidenceAngleCurveModel": {
          "key": "",
          "modelType": 0,
          "manufacturer": "",
          "modelName": "",
          "pointsList": [],
          "scaleX": 0,
          "scaleY": 0
        }
      }
    ],
    "fileAKey": "",
    "fileBKey": "",
    "combinerInputs": [
      {
        "name": "Idc1",
        "value": 0
      },
      {
        "name": "Idc2",
        "value": 0
      },
      {
        "name": "Idc3",
        "value": 0
      },
      {
        "name": "Idc4",
        "value": 0
      },
      {
        "name": "Idc5",
        "value": 0
      },
      {
        "name": "Idc6",
        "value": 0
      }
    ],
    "degrade": 0.5,
    "monthlyDerate": {
      "jan": 1,
      "feb": 1,
      "mar": 1,
      "apr": 1,
      "may": 1,
      "jun": 1,
      "jul": 1,
      "aug": 1,
      "sep": 1,
      "oct": 1,
      "nov": 1,
      "dec": 1
    },
    "monthlyOutput": {
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
    },
    "canIntegrateCombiners": true,
    "hasIntegratedCombiners": false
  },
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
  "isReportable": true,
  "latitude": 34.0371297,
  "longitude": -118.1014776,
  "hash": "",
  "hasCapacity": true,
  "inverterKw": 0,
  "siteDcShare": 75.21000000000001,
  "pullData": false
}
```

[Return to top](#top)

