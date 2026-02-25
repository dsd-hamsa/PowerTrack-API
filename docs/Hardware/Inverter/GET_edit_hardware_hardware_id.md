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
GET /api/edit/hardware/H517985
Accept: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: 442641
referer: https://apps.alsoenergy.com/powertrack/S69211/administration/modeling
```

**Response:**

```json
{
  "additionalRegisters": [],
  "address": "3",
  "alsoHardwareId": 0,
  "alsoSiteId": 0,
  "array": null,
  "assetId": "",
  "autoCorrectDecrease": false,
  "autoCorrectIncrease": false,
  "baud": "9600",
  "capacityKw": 60,
  "chartSectionCode": 1,
  "commonDC": false,
  "commonDCAllMatch": true,
  "configs": [
    "Pv"
  ],
  "conflictNames": null,
  "dashboardKey": "",
  "dcRating": 29880,
  "debug": false,
  "decreaseDifference": 100,
  "defaultChart": 2,
  "description": "Inv 3 (60KW) (43) (CPY) CPS SCA60KTL-DO/US-480",
  "deviceRegisters": [
    {
      "dataName": "KwAC",
      "dataNameDetail": null,
      "index": 0,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Active Power",
      "name": "Active Power",
      "standardDataName": "Active_Power",
      "units": "kW"
    },
    {
      "dataName": "KwhAC",
      "dataNameDetail": null,
      "index": 1,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Active Energy Net (with Offset)",
      "name": "Active Energy Gross",
      "standardDataName": "Active_Energy_Gross",
      "units": "kWh"
    },
    {
      "dataName": "KwhACraw",
      "dataNameDetail": null,
      "index": 2,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Active Energy Net (without Offset)",
      "name": "Active Energy Gross Raw",
      "standardDataName": "",
      "units": "kWh"
    },
    {
      "dataName": "Frequency",
      "dataNameDetail": null,
      "index": 3,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Frequency",
      "name": "Frequency",
      "standardDataName": "Frequency",
      "units": "Hz"
    },
    {
      "dataName": "VacAB",
      "dataNameDetail": null,
      "index": 4,
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
      "index": 5,
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
      "index": 6,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "AC Voltage C-A (Line-Line)",
      "name": "AC Voltage CA",
      "standardDataName": "Voltage_CA",
      "units": "V"
    },
    {
      "dataName": "IacA",
      "dataNameDetail": null,
      "index": 7,
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
      "index": 8,
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
      "index": 9,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "AC Current C",
      "name": "AC Current C",
      "standardDataName": "Current_C",
      "units": "A"
    },
    {
      "dataName": "Iac",
      "dataNameDetail": null,
      "index": 10,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "AC Current Average",
      "name": "AC Current Average",
      "standardDataName": "Current_Avg",
      "units": "A"
    },
    {
      "dataName": "Vac",
      "dataNameDetail": null,
      "index": 11,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "AC Voltage Average L-N",
      "name": "AC Voltage Average L-N",
      "standardDataName": "Voltage_LN_Avg",
      "units": "V"
    },
    {
      "dataName": "KVA",
      "dataNameDetail": null,
      "index": 12,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Apparent Power",
      "name": "Apparent Power",
      "standardDataName": "Apparent_Power",
      "units": "kVA"
    },
    {
      "dataName": "KVAR",
      "dataNameDetail": null,
      "index": 13,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Reactive Power",
      "name": "Reactive Power",
      "standardDataName": "Reactive_Power",
      "units": "kVAR"
    },
    {
      "dataName": "PowerFactor",
      "dataNameDetail": null,
      "index": 14,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Power Factor",
      "name": "Power Factor",
      "standardDataName": "Power_Factor",
      "units": "PF"
    },
    {
      "dataName": "Vdc1",
      "dataNameDetail": null,
      "index": 15,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "DC Voltage 1",
      "name": "DC Voltage 1",
      "standardDataName": "DC_Voltage1",
      "units": "V"
    },
    {
      "dataName": "Idc1",
      "dataNameDetail": null,
      "index": 16,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "DC current 1",
      "name": "DC Current 1",
      "standardDataName": "DC_Current1",
      "units": "A"
    },
    {
      "dataName": "Vdc2",
      "dataNameDetail": null,
      "index": 17,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "DC Voltage 2",
      "name": "DC Voltage 2",
      "standardDataName": "DC_Voltage2",
      "units": "V"
    },
    {
      "dataName": "Idc2",
      "dataNameDetail": null,
      "index": 18,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "DC current 2",
      "name": "DC Current 2",
      "standardDataName": "DC_Current2",
      "units": "A"
    },
    {
      "dataName": "Vdc3",
      "dataNameDetail": null,
      "index": 19,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "DC Voltage 3",
      "name": "DC Voltage 3",
      "standardDataName": "DC_Voltage3",
      "units": "V"
    },
    {
      "dataName": "Idc3",
      "dataNameDetail": null,
      "index": 20,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "DC current 3",
      "name": "DC Current 3",
      "standardDataName": "DC_Current3",
      "units": "A"
    },
    {
      "dataName": "Idc",
      "dataNameDetail": null,
      "index": 21,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "DC Current Total",
      "name": "DC Current Total",
      "standardDataName": "DC_Current_Total",
      "units": "A"
    },
    {
      "dataName": "Vdc",
      "dataNameDetail": null,
      "index": 22,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "DC Voltage Average",
      "name": "DC Voltage Average",
      "standardDataName": "DC_Voltage_Avg",
      "units": "V"
    },
    {
      "dataName": "KwDC",
      "dataNameDetail": null,
      "index": 23,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "DC Power",
      "name": "DC Power Total",
      "standardDataName": "DC_Power_Total",
      "units": "kW"
    },
    {
      "dataName": "DeviceTemp",
      "dataNameDetail": null,
      "index": 24,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Device Temperature",
      "name": "Device Temperature",
      "standardDataName": "Temp_Device",
      "units": "°F"
    },
    {
      "dataName": "InternalTemp",
      "dataNameDetail": null,
      "index": 25,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Internal Temperature",
      "name": "Internal Temperature",
      "standardDataName": "Temp_Internal",
      "units": "°F"
    },
    {
      "dataName": "Temp_XMFR",
      "dataNameDetail": null,
      "index": 26,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "XMFR Temperature",
      "name": "XMFR Temperature",
      "standardDataName": "Temp_XMFR",
      "units": "°F"
    },
    {
      "dataName": "Fault",
      "dataNameDetail": null,
      "index": 27,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Fault Code",
      "name": "Fault Code",
      "standardDataName": "Fault",
      "units": ""
    },
    {
      "dataName": "Warning",
      "dataNameDetail": null,
      "index": 28,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Warn Code",
      "name": "Warn Code",
      "standardDataName": "",
      "units": ""
    },
    {
      "dataName": "Fault0",
      "dataNameDetail": null,
      "index": 29,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Fault Code 0",
      "name": "Fault Code 0",
      "standardDataName": "Fault0",
      "units": ""
    },
    {
      "dataName": "Fault1",
      "dataNameDetail": null,
      "index": 30,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Fault 1",
      "name": "Fault Code 1",
      "standardDataName": "Fault1",
      "units": ""
    },
    {
      "dataName": "Fault2",
      "dataNameDetail": null,
      "index": 31,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Fault 2",
      "name": "Fault Code 2",
      "standardDataName": "Fault2",
      "units": ""
    },
    {
      "dataName": "Fault3",
      "dataNameDetail": null,
      "index": 32,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Fault 3",
      "name": "Fault Code 3",
      "standardDataName": "Fault3",
      "units": ""
    },
    {
      "dataName": "Fault4",
      "dataNameDetail": null,
      "index": 33,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Fault 4",
      "name": "Fault Code 4",
      "standardDataName": "Fault4",
      "units": ""
    },
    {
      "dataName": "opmode",
      "dataNameDetail": null,
      "index": 34,
      "isArchived": true,
      "isIgnored": false,
      "isRaw": true,
      "localizedName": "Operating Mode",
      "name": "Inverter Work Mode",
      "standardDataName": "Op_Mode",
      "units": "Derate: 0x800;Running:0x1000;Standby:0x2000;Check:0x4000;Fault:0x8000"
    },
    {
      "dataName": "Firmware_Version",
      "dataNameDetail": null,
      "index": 35,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "Firmware Version",
      "name": "Firmware Version",
      "standardDataName": "Firmware_Version",
      "units": ""
    },
    {
      "dataName": "Serial_Number",
      "dataNameDetail": null,
      "index": 36,
      "isArchived": false,
      "isIgnored": false,
      "isRaw": false,
      "localizedName": "Serial Number",
      "name": "Serial Number",
      "standardDataName": "Serial_Number",
      "units": ""
    }
  ],
  "driverDescription": "Chint / Solectria TL String Inverter [without Control]",
  "driverFlags": 16386,
  "driverId": 20630,
  "driverName": "Chint / Solectria TL String Inverter w/o Control (SS) Standard",
  "driverNotes": "Know issue on some firmware with kWh Energy not counting through the day, and only adding daily values everynight, FW 1797, 2053, 1284\r\rModbus Map: https://www.chintpowersystems.com/downloads/\r\r14-20-23-28-36kW Modbus Map\r25kW-208V Modbus Map\r25kW-408V Modbus Map\r50-60kW Modbus Map\r100/125kW-600V and 100kW-480 Modbus Map\r250/275kW-800 Modbus Map",
  "driverRegisters": [],
  "eGauge": null,
  "fixedEnergyOffset": 0,
  "functionCode": 1,
  "functionId": "PV2",
  "gateway": null,
  "gatewayFwVersion": "",
  "gatewayId": "000CC694422B",
  "gatewayKey": "H574835",
  "gatewayScriptCount": "",
  "gatewayType": 2,
  "groupAllowed": [
    28
  ],
  "groupKey": "",
  "hardwareId": "C20909_S69211_PV2",
  "hardwareStatus": 1,
  "hasCapacity": true,
  "hash": "",
  "increaseDifference": -1,
  "installDate": "2024-08-17",
  "instance": 2,
  "inverterKw": 0,
  "isConflictAcknowledged": false,
  "isReportable": true,
  "isTcp": false,
  "isThermal": false,
  "key": "H517985",
  "kiosk": null,
  "latitude": 37.7643595,
  "limitedCommunication": false,
  "locusId": "",
  "longitude": -121.9539616,
  "meter": null,
  "modelNum": "CHINT SCA60KTL-DO/US-480",
  "newNote": "",
  "oneMinuteData": false,
  "outOfService": false,
  "outOfServiceNote": "",
  "outOfServiceUntil": "2026-02-24T20:47:04.2012723Z",
  "outputAllowed": [
    2
  ],
  "outputKey": "H517979",
  "parentKey": "S69211",
  "port": 1,
  "primary": false,
  "pullData": false,
  "pvConfig": {
    "acDcType": 1,
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
      }
    ],
    "degrade": 0.5,
    "fileAKey": "",
    "fileBKey": "",
    "hasIntegratedCombiners": false,
    "inverters": [
      {
        "acLoss": 0,
        "acVoltage": 480,
        "azimuth": 243,
        "bifacialRatio": 0,
        "dcAmps": 204,
        "dcLoss": 0,
        "dcSize": 29.88,
        "dcVoltage": 1000,
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
        "inverterKva": 66,
        "inverterKw": 60,
        "inverterLoss": 1,
        "inverterName": "",
        "lightInducedDegradation": 0,
        "limitOne": 0,
        "limitTempOne": 0,
        "limitTempTwo": 0,
        "limitTwo": 0,
        "mismatch": 0,
        "moduleArea": 0,
        "mppAmps": 10.23,
        "mppVoltage": 40.58,
        "mppWatts": 415.1334,
        "numOfStrings": 4,
        "panelsPerString": 18,
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
        "tempCoefficient": -0.35,
        "tilt": 5,
        "tracking": 0,
        "trackingAngle": 0,
        "transformerLoss": 0,
        "wattsPerPanel": 415
      },
      {
        "acLoss": 0,
        "acVoltage": 480,
        "azimuth": 243,
        "bifacialRatio": 0,
        "dcAmps": 204,
        "dcLoss": 0,
        "dcSize": 22.41,
        "dcVoltage": 1000,
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
        "inverterKva": 66,
        "inverterKw": 60,
        "inverterLoss": 1,
        "inverterName": "",
        "lightInducedDegradation": 0,
        "limitOne": 0,
        "limitTempOne": 0,
        "limitTempTwo": 0,
        "limitTwo": 0,
        "mismatch": 0,
        "moduleArea": 0,
        "mppAmps": 10.23,
        "mppVoltage": 40.58,
        "mppWatts": 415.1334,
        "numOfStrings": 3,
        "panelsPerString": 18,
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
        "tempCoefficient": -0.35,
        "tilt": 5,
        "tracking": 0,
        "trackingAngle": 0,
        "transformerLoss": 0,
        "wattsPerPanel": 415
      },
      {
        "acLoss": 0,
        "acVoltage": 480,
        "azimuth": 243,
        "bifacialRatio": 0,
        "dcAmps": 204,
        "dcLoss": 0,
        "dcSize": 22.41,
        "dcVoltage": 1000,
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
        "inverterKva": 66,
        "inverterKw": 60,
        "inverterLoss": 1,
        "inverterName": "",
        "lightInducedDegradation": 0,
        "limitOne": 0,
        "limitTempOne": 0,
        "limitTempTwo": 0,
        "limitTwo": 0,
        "mismatch": 0,
        "moduleArea": 0,
        "mppAmps": 10.23,
        "mppVoltage": 40.58,
        "mppWatts": 415.1334,
        "numOfStrings": 3,
        "panelsPerString": 18,
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
        "tempCoefficient": -0.35,
        "tilt": 5,
        "tracking": 0,
        "trackingAngle": 0,
        "transformerLoss": 0,
        "wattsPerPanel": 415
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
  "sampleRate": 60,
  "serialMode": 2,
  "serialNum": "",
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
      "name": "dev:ScaleKW",
      "originalValue": 0.1,
      "type": 2,
      "value": 0.1
    },
    {
      "index": 4,
      "name": "dev:ScaleV",
      "originalValue": "0.1",
      "type": 0,
      "value": "0.1"
    },
    {
      "index": 5,
      "name": "dev:ScaleI",
      "originalValue": "0.1",
      "type": 0,
      "value": "0.1"
    },
    {
      "index": 6,
      "name": "dev:ScaleVDC",
      "originalValue": "0.1",
      "type": 0,
      "value": "0.1"
    },
    {
      "index": 7,
      "name": "dev:ScaleIDC",
      "originalValue": "0.1",
      "type": 0,
      "value": "0.1"
    },
    {
      "index": 8,
      "name": "dev:ScaleFrequency",
      "originalValue": "0.1",
      "type": 0,
      "value": "0.1"
    },
    {
      "index": 9,
      "name": "dev:ScaleKWH",
      "originalValue": 0.1,
      "type": 2,
      "value": 0.1
    },
    {
      "index": 10,
      "name": "dev:ScaleT",
      "originalValue": "0.1",
      "type": 0,
      "value": "0.1"
    },
    {
      "index": 11,
      "name": "dev:ScaleKVA",
      "originalValue": "0.1",
      "type": 0,
      "value": "0.1"
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
      "name": "dev:ScaleKVAR",
      "originalValue": "0.1",
      "type": 0,
      "value": "0.1"
    },
    {
      "index": 14,
      "name": "dev:Rollover",
      "originalValue": "Neg:100x,Pos:100x",
      "type": 0,
      "value": "Neg:100x,Pos:100x"
    },
    {
      "index": 15,
      "name": "dev:ScaleKWDC",
      "originalValue": "0.1",
      "type": 0,
      "value": "0.1"
    },
    {
      "index": 16,
      "name": "dev:Alias",
      "originalValue": "Status=opmode",
      "type": 0,
      "value": "Status=opmode"
    },
    {
      "index": 17,
      "name": "ShortName",
      "originalValue": "PV2",
      "type": 0,
      "value": "PV2"
    }
  ],
  "siteDcShare": 1960.44,
  "siteHasInverterGroups": false,
  "sort": 13,
  "syncToLocus": false,
  "tags": {
    "attributes": [],
    "key": "{\"ancestorKey\":\"H517985\",\"isRecursive\":false,\"types\":[\"attribute\",\"keyword\",\"note\"]}",
    "keywords": [],
    "lastChanged": null,
    "notes": [],
    "powerDisplays": []
  },
  "taskKey": "",
  "thermal": null,
  "thread": 0,
  "ts": "2026-02-24T16:33:29Z",
  "turbine": null,
  "unitId": 0,
  "uploadRate": 0,
  "validatedByKey": "",
  "validatedDateTime": "0001-01-01T00:00:00",
  "virtualRegisters": [],
  "virtualWeather": null,
  "weather": null,
  "weatherStationKey1": "H518013",
  "weatherStationKey2": "H518012",
  "zone": null
}
```

[Return to top](#top)

