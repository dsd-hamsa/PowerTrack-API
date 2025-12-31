<a id="top"></a>
# /api/edit/hardware/{hardware_id}

[← Back to Index](../logs.md)

**Methods:** GET  
**Status Codes:** 200  

## Table of Contents

- [Inverter (functionCode: 1)](#inverter-functioncode-1)
- [Example](#example)

## Inverter (functionCode: 1)

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
      "type": "number"
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
      "properties": {
        "acDcType": {
          "type": "number"
        },
        "acInfo": {
          "type": "number"
        },
        "canIntegrateCombiners": {
          "type": "boolean"
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
        "fileAKey": {
          "type": "string"
        },
        "fileBKey": {
          "type": "string"
        },
        "hasIntegratedCombiners": {
          "type": "boolean"
        },
        "inverters": {
          "type": "object",
          "properties": {
            "acLoss": {
              "type": "number"
            },
            "acVoltage": {
              "type": "number"
            },
            "azimuth": {
              "type": "number"
            },
            "bifacialRatio": {
              "type": "number"
            },
            "dcAmps": {
              "type": "number"
            },
            "dcLoss": {
              "type": "number"
            },
            "dcSize": {
              "type": "number"
            },
            "dcVoltage": {
              "type": "number"
            },
            "derate": {
              "type": "number"
            },
            "derateDetail": {
              "type": "boolean"
            },
            "efficiency": {
              "type": "number"
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
                "manufacturer": {
                  "type": "string"
                },
                "modelName": {
                  "type": "string"
                },
                "modelType": {
                  "type": "number"
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
                "manufacturer": {
                  "type": "string"
                },
                "modelName": {
                  "type": "string"
                },
                "modelType": {
                  "type": "number"
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
            "installationType": {
              "type": "number"
            },
            "inverterKva": {
              "type": "number"
            },
            "inverterKw": {
              "type": "number"
            },
            "inverterLoss": {
              "type": "number"
            },
            "inverterName": {
              "type": "string"
            },
            "lightInducedDegradation": {
              "type": "number"
            },
            "limitOne": {
              "type": "number"
            },
            "limitTempOne": {
              "type": "number"
            },
            "limitTempTwo": {
              "type": "number"
            },
            "limitTwo": {
              "type": "number"
            },
            "mismatch": {
              "type": "number"
            },
            "moduleArea": {
              "type": "number"
            },
            "mppAmps": {
              "type": "number"
            },
            "mppVoltage": {
              "type": "number"
            },
            "mppWatts": {
              "type": "number"
            },
            "numOfStrings": {
              "type": "number"
            },
            "panelsPerString": {
              "type": "number"
            },
            "pmaxDeviation": {
              "type": "number"
            },
            "pvSystConfig": {
              "type": "object",
              "properties": {
                "cellArea": {
                  "type": "number"
                },
                "cellType": {
                  "type": "number"
                },
                "cellsParallel": {
                  "type": "number"
                },
                "cellsSeries": {
                  "type": "number"
                },
                "impp": {
                  "type": "number"
                },
                "isc": {
                  "type": "number"
                },
                "key": {
                  "type": "string"
                },
                "manufacturer": {
                  "type": "string"
                },
                "model": {
                  "type": "string"
                },
                "muIsc": {
                  "type": "number"
                },
                "muPMax": {
                  "type": "number"
                },
                "rSeries": {
                  "type": "number"
                },
                "rShunt": {
                  "type": "number"
                },
                "rShuntExp": {
                  "type": "number"
                },
                "rShuntGinc": {
                  "type": "number"
                },
                "vmpp": {
                  "type": "number"
                },
                "voc": {
                  "type": "number"
                }
              }
            },
            "pvSystModuleId": {
              "type": "number"
            },
            "pvSystOutOfSync": {
              "type": "boolean"
            },
            "pvUsaConfig": {
              "type": "object",
              "properties": {
                "ambientTemperature": {
                  "type": "number"
                },
                "irradiance": {
                  "type": "number"
                },
                "irradianceSquared": {
                  "type": "number"
                },
                "windSpeed": {
                  "type": "number"
                }
              }
            },
            "regressionFunctionList": {
              "type": "array",
              "items": {
                "type": "unknown"
              }
            },
            "shadeModel": {
              "type": "object",
              "properties": {
                "albedoWeight": {
                  "type": "number"
                },
                "diffuseWeight": {
                  "type": "number"
                },
                "hasInterRowShadeModel": {
                  "type": "number"
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
                },
                "regions": {
                  "type": "array",
                  "items": {
                    "type": "unknown"
                  }
                }
              }
            },
            "tempCoefficient": {
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
            "transformerLoss": {
              "type": "number"
            },
            "wattsPerPanel": {
              "type": "number"
            }
          }
        },
        "monthlyDerate": {
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
        "monthlyOutput": {
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
        "pvModelType": {
          "type": "number"
        }
      }
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
GET /api/edit/hardware/H563256
Accept: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
referer: https://apps.alsoenergy.com/powertrack/H563256/administration/config
```

**Response:**

```json
{
  "additionalRegisters": [],
  "address": "192.168.13.51",
  "alsoHardwareId": 0,
  "alsoSiteId": 0,
  "array": null,
  "assetId": "",
  "autoCorrectDecrease": false,
  "autoCorrectIncrease": false,
  "baud": "",
  "capacityKw": 0,
  "chartSectionCode": 1,
  "commonDC": false,
  "commonDCAllMatch": true,
  "configs": [
    "Pv"
  ],
  "conflictNames": null,
  "dashboardKey": "",
  "dcRating": 0,
  "debug": false,
  "decreaseDifference": 100,
  "defaultChart": 2,
  "description": "INVERTER 1",
  "deviceRegisters": [
    {
      "dataName": "KwhAC",
      "dataNameDetail": null,
      "index": 0,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Active Energy Net (with Offset)",
      "name": "Active Energy Net",
      "standardDataName": "Active_Energy_Gross",
      "units": "kWh"
    },
    {
      "dataName": "KwAC",
      "dataNameDetail": null,
      "index": 1,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Active Power",
      "name": "Active Power",
      "standardDataName": "Active_Power",
      "units": "kW"
    },
    {
      "dataName": "Active_Power_A",
      "dataNameDetail": null,
      "index": 2,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Active Power A",
      "name": "Active Power A",
      "standardDataName": "Active_Power_A",
      "units": "kW"
    },
    {
      "dataName": "Active_Power_B",
      "dataNameDetail": null,
      "index": 3,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Active Power B",
      "name": "Active Power B",
      "standardDataName": "Active_Power_B",
      "units": "kW"
    },
    {
      "dataName": "Active_Power_C",
      "dataNameDetail": null,
      "index": 4,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Active Power C",
      "name": "Active Power C",
      "standardDataName": "Active_Power_C",
      "units": "kW"
    },
    {
      "dataName": "VacA",
      "dataNameDetail": null,
      "index": 5,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "AC Voltage A (Line-Neutral)",
      "name": "AC Voltage AN",
      "standardDataName": "Voltage_AN",
      "units": "V"
    },
    {
      "dataName": "VacB",
      "dataNameDetail": null,
      "index": 6,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "AC Voltage B (Line-Neutral)",
      "name": "AC Voltage BN",
      "standardDataName": "Voltage_BN",
      "units": "V"
    },
    {
      "dataName": "VacC",
      "dataNameDetail": null,
      "index": 7,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "AC Voltage C (Line-Neutral)",
      "name": "AC Voltage CN",
      "standardDataName": "Voltage_CN",
      "units": "V"
    },
    {
      "dataName": "Iac",
      "dataNameDetail": null,
      "index": 8,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "AC Current Average",
      "name": "AC Current Average",
      "standardDataName": "Current_Avg",
      "units": "A"
    },
    {
      "dataName": "IacA",
      "dataNameDetail": null,
      "index": 9,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "AC Current A",
      "name": "AC Current A",
      "standardDataName": "Current_A",
      "units": "A"
    },
    {
      "dataName": "IacB",
      "dataNameDetail": null,
      "index": 10,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "AC Current B",
      "name": "AC Current B",
      "standardDataName": "Current_B",
      "units": "A"
    },
    {
      "dataName": "IacC",
      "dataNameDetail": null,
      "index": 11,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "AC Current C",
      "name": "AC Current C",
      "standardDataName": "Current_C",
      "units": "A"
    },
    {
      "dataName": "Frequency",
      "dataNameDetail": null,
      "index": 12,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Frequency",
      "name": "Frequency",
      "standardDataName": "Frequency",
      "units": "Hz"
    },
    {
      "dataName": "DeviceTemp",
      "dataNameDetail": null,
      "index": 13,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Device Temperature",
      "name": "Device Temperature",
      "standardDataName": "Temp_Device",
      "units": "°F"
    },
    {
      "dataName": "VacAB",
      "dataNameDetail": null,
      "index": 14,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "AC Voltage A-B (Line-Line)",
      "name": "AC Voltage AB",
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
      "name": "AC Voltage BC",
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
      "name": "AC Voltage CA",
      "standardDataName": "Voltage_CA",
      "units": "V"
    },
    {
      "dataName": "Reactive_Power_A",
      "dataNameDetail": null,
      "index": 17,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Reactive Power A",
      "name": "Reactive Power ",
      "standardDataName": "",
      "units": "kVAR"
    },
    {
      "dataName": "Reactive_Power_B",
      "dataNameDetail": null,
      "index": 18,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Reactive Power B",
      "name": "Reactive Power B",
      "standardDataName": "",
      "units": "kVAR"
    },
    {
      "dataName": "Reactive_Power_C",
      "dataNameDetail": null,
      "index": 19,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Reactive Power C",
      "name": "Reactive Power C",
      "standardDataName": "",
      "units": "kVAR"
    },
    {
      "dataName": "KVAR",
      "dataNameDetail": null,
      "index": 20,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Reactive Power",
      "name": "Reactive Power",
      "standardDataName": "Reactive_Power",
      "units": "kVAR"
    },
    {
      "dataName": "KVA",
      "dataNameDetail": null,
      "index": 21,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Apparent Power",
      "name": "Apparent Power",
      "standardDataName": "Apparent_Power",
      "units": "kVA"
    },
    {
      "dataName": "PowerFactor",
      "dataNameDetail": null,
      "index": 22,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Power Factor",
      "name": "Power Factor",
      "standardDataName": "Power_Factor",
      "units": "PF"
    },
    {
      "dataName": "InternalTemp",
      "dataNameDetail": null,
      "index": 23,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Internal Temperature",
      "name": "Internal Temperature",
      "standardDataName": "Temp_Internal",
      "units": "°F"
    },
    {
      "dataName": "KwhACraw",
      "dataNameDetail": null,
      "index": 24,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Active Energy Net (without Offset)",
      "name": "Active Energy Net Raw",
      "standardDataName": "",
      "units": "kWh"
    },
    {
      "dataName": "Idc1",
      "dataNameDetail": null,
      "index": 25,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "DC current 1",
      "name": "DC Current Input 1",
      "standardDataName": "DC_Current1",
      "units": "A"
    },
    {
      "dataName": "Vdc1",
      "dataNameDetail": null,
      "index": 26,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "DC Voltage 1",
      "name": "DC Voltage Input 1",
      "standardDataName": "DC_Voltage1",
      "units": "V"
    },
    {
      "dataName": "KwDC1",
      "dataNameDetail": null,
      "index": 27,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "DC power 1",
      "name": "DC Power 1",
      "standardDataName": "DC_Power1",
      "units": "kW"
    },
    {
      "dataName": "Idc2",
      "dataNameDetail": null,
      "index": 28,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "DC current 2",
      "name": "DC Current Input 2",
      "standardDataName": "DC_Current2",
      "units": "A"
    },
    {
      "dataName": "Vdc2",
      "dataNameDetail": null,
      "index": 29,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "DC Voltage 2",
      "name": "DC Voltage Input 2",
      "standardDataName": "DC_Voltage2",
      "units": "V"
    },
    {
      "dataName": "KwDC2",
      "dataNameDetail": null,
      "index": 30,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "DC power 2",
      "name": "DC Power 2",
      "standardDataName": "DC_Power2",
      "units": "kW"
    },
    {
      "dataName": "Idc3",
      "dataNameDetail": null,
      "index": 31,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "DC current 3",
      "name": "DC Current Input 3",
      "standardDataName": "DC_Current3",
      "units": "A"
    },
    {
      "dataName": "Vdc3",
      "dataNameDetail": null,
      "index": 32,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "DC Voltage 3",
      "name": "DC Voltage Input 3",
      "standardDataName": "DC_Voltage3",
      "units": "V"
    },
    {
      "dataName": "KwDC3",
      "dataNameDetail": null,
      "index": 33,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "DC power 3",
      "name": "DC Power 3",
      "standardDataName": "DC_Power3",
      "units": "kW"
    },
    {
      "dataName": "Idc4",
      "dataNameDetail": null,
      "index": 34,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "DC current 4",
      "name": "DC Current Input 4",
      "standardDataName": "DC_Current4",
      "units": "A"
    },
    {
      "dataName": "Vdc4",
      "dataNameDetail": null,
      "index": 35,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "DC voltage 4",
      "name": "DC Voltage Input 4",
      "standardDataName": "DC_Voltage4",
      "units": "V"
    },
    {
      "dataName": "KwDC4",
      "dataNameDetail": null,
      "index": 36,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "DC power 4",
      "name": "DC Power 4",
      "standardDataName": "DC_Power4",
      "units": "kW"
    },
    {
      "dataName": "Idc5",
      "dataNameDetail": null,
      "index": 37,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "DC current 5",
      "name": "DC Current Input 5",
      "standardDataName": "DC_Current5",
      "units": "A"
    },
    {
      "dataName": "Vdc5",
      "dataNameDetail": null,
      "index": 38,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "DC Voltage 5",
      "name": "DC Voltage Input 5",
      "standardDataName": "DC_Voltage5",
      "units": "V"
    },
    {
      "dataName": "KwDC5",
      "dataNameDetail": null,
      "index": 39,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "DC power 5",
      "name": "DC Power 5",
      "standardDataName": "DC_Power5",
      "units": "kW"
    },
    {
      "dataName": "Idc6",
      "dataNameDetail": null,
      "index": 40,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "DC current 6",
      "name": "DC Current Input 6",
      "standardDataName": "DC_Current6",
      "units": "A"
    },
    {
      "dataName": "Vdc6",
      "dataNameDetail": null,
      "index": 41,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "DC Voltage 6",
      "name": "DC Voltage Input 6",
      "standardDataName": "DC_Voltage6",
      "units": "V"
    },
    {
      "dataName": "KwDC6",
      "dataNameDetail": null,
      "index": 42,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "DC power 6",
      "name": "DC Power 6",
      "standardDataName": "DC_Power6",
      "units": "kW"
    },
    {
      "dataName": "Idc",
      "dataNameDetail": null,
      "index": 43,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "DC Current Total",
      "name": "DC Current Input (total)",
      "standardDataName": "DC_Current_Total",
      "units": "A"
    },
    {
      "dataName": "Vdc",
      "dataNameDetail": null,
      "index": 44,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "DC Voltage Average",
      "name": "DC Voltage Input (average)",
      "standardDataName": "DC_Voltage_Avg",
      "units": "V"
    },
    {
      "dataName": "KwDC",
      "dataNameDetail": null,
      "index": 45,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "DC Power",
      "name": "DC Power (total)",
      "standardDataName": "DC_Power_Total",
      "units": "kW"
    },
    {
      "dataName": "Serial_Number",
      "dataNameDetail": null,
      "index": 46,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "Serial Number",
      "name": "Serial Number",
      "standardDataName": "Serial_Number",
      "units": ""
    },
    {
      "dataName": "Fault",
      "dataNameDetail": null,
      "index": 47,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "EventID",
      "name": "EventID",
      "standardDataName": "Fault",
      "units": ""
    },
    {
      "dataName": "Status",
      "dataNameDetail": null,
      "index": 48,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Operating Status",
      "name": "Condition",
      "standardDataName": "Op_Status",
      "units": ""
    },
    {
      "dataName": "Firmware_Version",
      "dataNameDetail": null,
      "index": 49,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "Firmware Version",
      "name": "Firmware",
      "standardDataName": "Firmware_Version",
      "units": ""
    }
  ],
  "driverDescription": "Tri-Power Core1 inverter with no Controls",
  "driverFlags": 18434,
  "driverId": 19880,
  "driverName": "SMA Tri-Power Core1 Inverter (SS) Standard",
  "driverNotes": "Legacy Drivers: 2136, 3227, 566, 707\r\r[06.08.2023 - Sagar]\rUpdated the frequency scaling expression.",
  "driverRegisters": [],
  "eGauge": null,
  "fixedEnergyOffset": 0,
  "functionCode": 1,
  "functionId": "PV0",
  "gateway": null,
  "gatewayFwVersion": "",
  "gatewayId": "000CC693712D",
  "gatewayKey": "H563252",
  "gatewayScriptCount": "",
  "gatewayType": 7,
  "groupAllowed": [
    28
  ],
  "groupKey": "",
  "hardwareId": "C17254_S71191_PV0",
  "hardwareStatus": 1,
  "hasCapacity": true,
  "hash": "",
  "increaseDifference": -1,
  "installDate": "2025-06-03",
  "instance": 0,
  "inverterKw": 0,
  "isConflictAcknowledged": false,
  "isReportable": true,
  "isTcp": true,
  "isThermal": false,
  "key": "H563256",
  "kiosk": null,
  "latitude": 34.0999968,
  "limitedCommunication": false,
  "locusId": "",
  "longitude": -117.2812734,
  "meter": null,
  "modelNum": "SMA CORE 1 STP50-US-41",
  "newNote": "",
  "oneMinuteData": false,
  "outOfService": false,
  "outOfServiceNote": "",
  "outOfServiceUntil": "2025-12-31T19:20:35.105295Z",
  "outputAllowed": [
    2
  ],
  "outputKey": "",
  "parentKey": "S71191",
  "port": 0,
  "primary": false,
  "pullData": false,
  "pvConfig": {
    "acDcType": 0,
    "acInfo": 2,
    "canIntegrateCombiners": true,
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
    "fileAKey": "",
    "fileBKey": "",
    "hasIntegratedCombiners": false,
    "inverters": [
      {
        "acLoss": 0,
        "acVoltage": 0,
        "azimuth": 180,
        "bifacialRatio": 0,
        "dcAmps": 0,
        "dcLoss": 0,
        "dcSize": 0,
        "dcVoltage": 0,
        "derate": 0.9,
        "derateDetail": false,
        "efficiency": 0,
        "efficiencyCurveId": 0,
        "efficiencyCurveModel": {
          "key": "",
          "manufacturer": "",
          "modelName": "",
          "modelType": 0,
          "pointsList": [],
          "scaleX": 0,
          "scaleY": 0
        },
        "incidenceAngleCurveId": 0,
        "incidenceAngleCurveModel": {
          "key": "",
          "manufacturer": "",
          "modelName": "",
          "modelType": 0,
          "pointsList": [],
          "scaleX": 0,
          "scaleY": 0
        },
        "installationType": 2,
        "inverterKva": 0,
        "inverterKw": 0,
        "inverterLoss": 0,
        "inverterName": "",
        "lightInducedDegradation": 0,
        "limitOne": 0,
        "limitTempOne": 0,
        "limitTempTwo": 0,
        "limitTwo": 0,
        "mismatch": 0,
        "moduleArea": 0,
        "mppAmps": 7.61,
        "mppVoltage": 26.3,
        "mppWatts": 200.143,
        "numOfStrings": 0,
        "panelsPerString": 0,
        "pmaxDeviation": 0,
        "pvSystConfig": {
          "cellArea": 0,
          "cellType": -1,
          "cellsParallel": 0,
          "cellsSeries": 0,
          "impp": 0,
          "isc": 0,
          "key": "",
          "manufacturer": "",
          "model": "",
          "muIsc": 0,
          "muPMax": 0,
          "rSeries": 0,
          "rShunt": 0,
          "rShuntExp": 0,
          "rShuntGinc": 0,
          "vmpp": 0,
          "voc": 0
        },
        "pvSystModuleId": 0,
        "pvSystOutOfSync": false,
        "pvUsaConfig": {
          "ambientTemperature": 0,
          "irradiance": 0,
          "irradianceSquared": 0,
          "windSpeed": 0
        },
        "regressionFunctionList": [],
        "shadeModel": {
          "albedoWeight": 0,
          "diffuseWeight": 0,
          "hasInterRowShadeModel": 0,
          "interRowShadeModel": {
            "azimuth": 0,
            "panelLength": 0,
            "pitch": 0,
            "rows": 0,
            "tilt": 0,
            "topBorderLength": 0
          },
          "regions": []
        },
        "tempCoefficient": -0.5,
        "tilt": 0,
        "tracking": 0,
        "trackingAngle": 0,
        "transformerLoss": 0,
        "wattsPerPanel": 0
      }
    ],
    "monthlyDerate": {
      "apr": 1,
      "aug": 1,
      "dec": 1,
      "feb": 1,
      "jan": 1,
      "jul": 1,
      "jun": 1,
      "mar": 1,
      "may": 1,
      "nov": 1,
      "oct": 1,
      "sep": 1
    },
    "monthlyOutput": {
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
    "pvModelType": 0
  },
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
      "name": "dev:portMode",
      "originalValue": "N/A",
      "type": 0,
      "value": "N/A"
    },
    {
      "index": 1,
      "name": "dev:UnitID",
      "originalValue": 3,
      "type": 1,
      "value": 3
    },
    {
      "index": 2,
      "name": "dev:TCPport",
      "originalValue": 502,
      "type": 1,
      "value": 502
    },
    {
      "index": 3,
      "name": "dev:RegOffset",
      "originalValue": 0,
      "type": 1,
      "value": 0
    },
    {
      "index": 4,
      "name": "dev:tcpretry",
      "originalValue": "3",
      "type": 0,
      "value": "3"
    },
    {
      "index": 5,
      "name": "dev:KWHoffset",
      "originalValue": "0",
      "type": 0,
      "value": "0"
    },
    {
      "index": 6,
      "name": "dev:ScaleKWH",
      "originalValue": "1",
      "type": 0,
      "value": "1"
    },
    {
      "index": 7,
      "name": "dev:ScaleKW",
      "originalValue": "0.001",
      "type": 0,
      "value": "0.001"
    },
    {
      "index": 8,
      "name": "dev:ScaleV",
      "originalValue": "0.01",
      "type": 0,
      "value": "0.01"
    },
    {
      "index": 9,
      "name": "dev:ScaleI",
      "originalValue": "0.001",
      "type": 0,
      "value": "0.001"
    },
    {
      "index": 10,
      "name": "dev:ScaleFrequency",
      "originalValue": "0.01",
      "type": 0,
      "value": "0.01"
    },
    {
      "index": 11,
      "name": "dev:ScaleKVAR",
      "originalValue": "0.001",
      "type": 0,
      "value": "0.001"
    },
    {
      "index": 12,
      "name": "dev:ScalePF",
      "originalValue": "0.001",
      "type": 0,
      "value": "0.001"
    },
    {
      "index": 13,
      "name": "dev:ScaleTemp",
      "originalValue": "0.1",
      "type": 0,
      "value": "0.1"
    },
    {
      "index": 14,
      "name": "dev:ScaleKVA",
      "originalValue": "0.001",
      "type": 0,
      "value": "0.001"
    },
    {
      "index": 15,
      "name": "ShortName",
      "originalValue": "PV0",
      "type": 0,
      "value": "PV0"
    }
  ],
  "siteDcShare": 0,
  "siteHasInverterGroups": false,
  "sort": 11,
  "syncToLocus": false,
  "tags": {
    "attributes": [],
    "key": "{\"ancestorKey\":\"H563256\",\"isRecursive\":false,\"types\":[\"attribute\",\"keyword\",\"note\"]}",
    "keywords": [],
    "lastChanged": null,
    "notes": [],
    "powerDisplays": []
  },
  "taskKey": "",
  "thermal": null,
  "thread": 0,
  "ts": "2025-11-25T22:46:18Z",
  "turbine": null,
  "unitId": 3,
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

