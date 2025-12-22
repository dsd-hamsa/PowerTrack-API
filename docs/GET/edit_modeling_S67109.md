# /api/edit/modeling/S67109

[← Back to Index](../README.md)

**Methods:** GET
**Status Codes:** 200
**Call Count:** 1

## Table of Contents

- [Response Structure](#response-structure)
- [Example](#example)

## Response Structure

```json
{
  "type": "object",
  "properties": {
    "key": {
      "type": "string"
    },
    "ts": {
      "type": "string"
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
              "type": "object"
            },
            "incidenceAngleCurveId": {
              "type": "number"
            },
            "incidenceAngleCurveModel": {
              "type": "object"
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
          "type": "array",
          "items": {
            "type": "unknown"
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
    "siteHasInverterGroups": {
      "type": "boolean"
    },
    "selectedHardware": {
      "type": "array",
      "items": {
        "type": "unknown"
      }
    },
    "latitude": {
      "type": "number"
    },
    "longitude": {
      "type": "number"
    },
    "dcRating": {
      "type": "number"
    },
    "groupKey": {
      "type": "string"
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
    "siteDcShare": {
      "type": "number"
    }
  }
}
```

[Return to top](#apieditmodelings67109)

## Example

**Request:**

```http
GET /api/edit/modeling/S67109
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
Accept: application/json
referer: https://apps.alsoenergy.com/powertrack/S67109/administration/modeling
```

**Response:**

```json
{
  "key": "S67109",
  "ts": "2025-12-22T17:42:15Z",
  "pvConfig": {
    "pvModelType": 8,
    "acDcType": 0,
    "acInfo": 0,
    "inverters": [
      {
        "mppWatts": 0,
        "pvSystOutOfSync": false,
        "pvSystModuleId": 0,
        "pvSystConfig": {
          "key": "",
          "manufacturer": "",
          "model": "",
          "cellType": -1,
          "cellsSeries": 0,
          "cellsParallel": 0,
          "cellArea": 0,
          "isc": 0,
          "voc": 0,
          "impp": 0,
          "vmpp": 0,
          "muIsc": 0,
          "rShunt": 0,
          "rSeries": 0,
          "rShuntGinc": 0,
          "rShuntExp": 0,
          "muPMax": 0
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
        "acVoltage": 0,
        "dcAmps": 0,
        "dcSize": 0,
        "dcVoltage": 0,
        "inverterLoss": 0,
        "inverterKw": 0,
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
        "numOfStrings": 0,
        "panelsPerString": 0,
        "derate": 0.9,
        "wattsPerPanel": 0,
        "mppVoltage": 0,
        "mppAmps": 0,
        "tempCoefficient": -0.5,
        "azimuth": 180,
        "tilt": 0,
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
        "efficiencyCurveModel": null,
        "incidenceAngleCurveId": 0,
        "incidenceAngleCurveModel": null
      }
    ],
    "fileAKey": "",
    "fileBKey": "",
    "combinerInputs": [],
    "degrade": 0.5,
    "monthlyDerate": {
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
    "canIntegrateCombiners": false,
    "hasIntegratedCombiners": false
  },
  "siteHasInverterGroups": false,
  "selectedHardware": [],
  "latitude": 41.7309535,
  "longitude": -88.2062573,
  "dcRating": 0,
  "groupKey": "",
  "outputKey": "",
  "weatherStationKey1": "",
  "weatherStationKey2": "",
  "siteDcShare": 0
}
```

[Return to top](#apieditmodelings67109)

