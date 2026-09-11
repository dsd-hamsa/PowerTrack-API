<a id="top"></a>
# /api/edit/pvmodel/F74102

[← Back to Index](../logs.md)

**Methods:** GET  
**Status Codes:** 200, 200  

## Table of Contents

- [General](#general)
- [Example](#example)

## General

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
    "name": {
      "type": "string"
    },
    "parentKey": {
      "type": "string"
    },
    "description": {
      "type": "string"
    },
    "fileType": {
      "type": "number"
    },
    "language": {
      "type": "string"
    },
    "revision": {
      "type": "number"
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
                  "type": "object",
                  "properties": {
                    "index": {
                      "type": "number"
                    },
                    "x": {
                      "type": "number"
                    },
                    "y": {
                      "type": "number"
                    }
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
    "canEdit": {
      "type": "boolean"
    },
    "canDownload": {
      "type": "boolean"
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
    }
  }
}
```

[Return to top](#top)

## Example

**Request:**

```http
GET /api/edit/pvmodel/F74102
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: 3fefeb
Accept: application/json
referer: https://apps.alsoenergy.com/powertrack/S38292/files/D36825/F74102
```

**Response:**

```json
{
  "key": "F74102",
  "ts": "2020-02-12T19:46:12Z",
  "name": "Inv 71 Alt",
  "parentKey": "D36825",
  "description": "",
  "fileType": 63,
  "language": "",
  "revision": 3,
  "pvConfig": {
    "pvModelType": 0,
    "acDcType": 0,
    "acInfo": 0,
    "inverters": [
      {
        "mppWatts": 342.38,
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
        "acVoltage": 480,
        "dcAmps": 54,
        "dcSize": 24.48,
        "dcVoltage": 1000,
        "inverterLoss": 1,
        "inverterKw": 23,
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
        "numOfStrings": 4,
        "panelsPerString": 18,
        "derate": 1,
        "wattsPerPanel": 340,
        "mppVoltage": 38,
        "mppAmps": 9.01,
        "tempCoefficient": -0.41,
        "azimuth": 158,
        "tilt": 10,
        "tracking": 0,
        "trackingAngle": 0,
        "derateDetail": true,
        "lightInducedDegradation": 4,
        "pmaxDeviation": 1.35,
        "mismatch": 1,
        "dcLoss": 0.0394,
        "acLoss": 0.0947,
        "transformerLoss": 1,
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
        "incidenceAngleCurveId": 420,
        "incidenceAngleCurveModel": {
          "key": "420",
          "modelType": 2,
          "manufacturer": "ASHRAE",
          "modelName": "IAM MODEL bo 0.080",
          "pointsList": [
            {
              "index": 0,
              "x": 0,
              "y": 1
            },
            {
              "index": 1,
              "x": 30,
              "y": 0.988
            },
            {
              "index": 2,
              "x": 50,
              "y": 0.956
            },
            {
              "index": 3,
              "x": 60,
              "y": 0.92
            },
            {
              "index": 4,
              "x": 70,
              "y": 0.846
            },
            {
              "index": 5,
              "x": 75,
              "y": 0.771
            },
            {
              "index": 6,
              "x": 80,
              "y": 0.619
            },
            {
              "index": 7,
              "x": 85,
              "y": 0.162
            },
            {
              "index": 8,
              "x": 90,
              "y": 0
            }
          ],
          "scaleX": 100,
          "scaleY": 1
        }
      }
    ],
    "fileAKey": "",
    "fileBKey": "",
    "combinerInputs": [],
    "degrade": 0,
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
      "jan": 976,
      "feb": 1280,
      "mar": 2190,
      "apr": 2831,
      "may": 3247,
      "jun": 3373,
      "jul": 3391,
      "aug": 3156,
      "sep": 2622,
      "oct": 1962,
      "nov": 1368,
      "dec": 857
    },
    "canIntegrateCombiners": false,
    "hasIntegratedCombiners": false
  },
  "canEdit": false,
  "canDownload": false,
  "tags": {
    "key": "{\"ancestorKey\":\"F74102\",\"isRecursive\":false,\"types\":[\"attribute\",\"keyword\"]}",
    "lastChanged": null,
    "attributes": [],
    "keywords": [],
    "notes": [],
    "powerDisplays": []
  }
}
```

[Return to top](#top)

