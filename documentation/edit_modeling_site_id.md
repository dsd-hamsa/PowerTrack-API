# Endpoint 10

[← Back to Index](../README.md)


### `/api/edit/modeling/{site_id}`

**Methods:** GET  
**Status Codes:** 200  
**Call Count:** 1  

#### Response Structure

```json
{
  "type": "object",
  "properties": {
    "siteHasInverterGroups": {
      "type": "boolean"
    },
    "pvConfig": {
      "type": "object",
      "properties": {
        "degrade": {
          "type": "number"
        },
        "canIntegrateCombiners": {
          "type": "boolean"
        },
        "hasIntegratedCombiners": {
          "type": "boolean"
        },
        "fileAKey": {
          "type": "string"
        },
        "acInfo": {
          "type": "integer"
        },
        "monthlyOutput": {
          "type": "object",
          "properties": {
            "dec": {
              "type": "integer"
            },
            "feb": {
              "type": "integer"
            },
            "jan": {
              "type": "integer"
            },
            "sep": {
              "type": "integer"
            },
            "mar": {
              "type": "integer"
            },
            "nov": {
              "type": "integer"
            },
            "jun": {
              "type": "integer"
            },
            "apr": {
              "type": "integer"
            },
            "jul": {
              "type": "integer"
            },
            "oct": {
              "type": "integer"
            },
            "may": {
              "type": "integer"
            },
            "aug": {
              "type": "integer"
            }
          }
        },
        "pvModelType": {
          "type": "integer"
        },
        "inverters": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {}
          }
        },
        "acDcType": {
          "type": "integer"
        },
        "combinerInputs": {
          "type": "array",
          "items": {
            "type": "unknown"
          }
        },
        "monthlyDerate": {
          "type": "object",
          "properties": {
            "dec": {
              "type": "integer"
            },
            "feb": {
              "type": "integer"
            },
            "jan": {
              "type": "integer"
            },
            "sep": {
              "type": "integer"
            },
            "mar": {
              "type": "integer"
            },
            "nov": {
              "type": "integer"
            },
            "jun": {
              "type": "integer"
            },
            "apr": {
              "type": "integer"
            },
            "jul": {
              "type": "integer"
            },
            "oct": {
              "type": "integer"
            },
            "may": {
              "type": "integer"
            },
            "aug": {
              "type": "integer"
            }
          }
        },
        "fileBKey": {
          "type": "string"
        }
      }
    },
    "weatherStationKey2": {
      "type": "string"
    },
    "dcRating": {
      "type": "number"
    },
    "ts": {
      "type": "string"
    },
    "siteDcShare": {
      "type": "integer"
    },
    "key": {
      "type": "string"
    },
    "weatherStationKey1": {
      "type": "string"
    },
    "longitude": {
      "type": "number"
    },
    "groupKey": {
      "type": "string"
    },
    "latitude": {
      "type": "number"
    },
    "selectedHardware": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {}
      }
    },
    "outputKey": {
      "type": "string"
    }
  }
}
```

#### Example

**Request:**

```http
GET /api/edit/modeling/S68624
Accept: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
```

**Response:**

```json
{
  "dcRating": 12350.34000000004,
  "groupKey": "",
  "key": "S68624",
  "latitude": 34.425341,
  "longitude": -118.5971947,
  "outputKey": "H504184",
  "pvConfig": {
    "acDcType": 0,
    "acInfo": 0,
    "canIntegrateCombiners": false,
    "combinerInputs": [],
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
        "efficiencyCurveModel": null,
        "incidenceAngleCurveId": 0,
        "incidenceAngleCurveModel": null,
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
        "mppAmps": 0,
        "mppVoltage": 0,
        "mppWatts": 0,
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
    "pvModelType": 8
  },
  "selectedHardware": [
    {
      "key": "H504061",
      "name": "Inv 1 (A) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 21
    },
    {
      "key": "H504062",
      "name": "Inv 2 (A) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 22
    },
    {
      "key": "H504063",
      "name": "Inv 3 (A) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 23
    },
    {
      "key": "H504064",
      "name": "Inv 4 (A) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 24
    },
    {
      "key": "H504065",
      "name": "Inv 5 (A) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 25
    },
    {
      "key": "H504066",
      "name": "Inv 6 (A) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 26
    },
    {
      "key": "H504067",
      "name": "Inv 7 (A) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 27
    },
    {
      "key": "H504068",
      "name": "Inv 8 (A) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 28
    },
    {
      "key": "H504069",
      "name": "Inv 9 (A) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 29
    },
    {
      "key": "H504070",
      "name": "Inv 10 (A) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 30
    },
    {
      "key": "H504071",
      "name": "Inv 11 (A) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 31
    },
    {
      "key": "H504072",
      "name": "Inv 12 (A) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 32
    },
    {
      "key": "H504073",
      "name": "Inv 13 (A) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 33
    },
    {
      "key": "H504074",
      "name": "Inv 14 (A) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 34
    },
    {
      "key": "H504075",
      "name": "Inv 15 (A) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 35
    },
    {
      "key": "H504076",
      "name": "Inv 16 (A) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 36
    },
    {
      "key": "H504077",
      "name": "Inv 17 (A) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 37
    },
    {
      "key": "H504078",
      "name": "Inv 18 (A) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 38
    },
    {
      "key": "H504079",
      "name": "Inv 19 (A) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 39
    },
    {
      "key": "H504080",
      "name": "Inv 20 (B) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 40
    },
    {
      "key": "H504081",
      "name": "Inv 21 (B) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 41
    },
    {
      "key": "H504082",
      "name": "Inv 22 (B) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 42
    },
    {
      "key": "H504083",
      "name": "Inv 23 (B) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 43
    },
    {
      "key": "H504084",
      "name": "Inv 24 (B) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 44
    },
    {
      "key": "H504085",
      "name": "Inv 25 (B) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 45
    },
    {
      "key": "H504086",
      "name": "Inv 26 (B) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 46
    },
    {
      "key": "H504087",
      "name": "Inv 27 (B) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 47
    },
    {
      "key": "H504088",
      "name": "Inv 28 (B) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 48
    },
    {
      "key": "H504089",
      "name": "Inv 29 (B) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 49
    },
    {
      "key": "H504090",
      "name": "Inv 30 (B) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 50
    },
    {
      "key": "H504091",
      "name": "Inv 31 (B) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 51
    },
    {
      "key": "H504092",
      "name": "Inv 32 (B) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 52
    },
    {
      "key": "H504093",
      "name": "Inv 33 (B) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 53
    },
    {
      "key": "H504094",
      "name": "Inv 34 (B) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 54
    },
    {
      "key": "H504095",
      "name": "Inv 35 (B) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 55
    },
    {
      "key": "H504096",
      "name": "Inv 36 (B) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 56
    },
    {
      "key": "H504097",
      "name": "Inv 37 (B) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 57
    },
    {
      "key": "H504098",
      "name": "Inv 38 (B) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 58
    },
    {
      "key": "H504099",
      "name": "Inv 39 (B) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 58
    },
    {
      "key": "H504100",
      "name": "Inv 40 (B) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 60
    },
    {
      "key": "H504101",
      "name": "Inv 41 (B) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 61
    },
    {
      "key": "H504289",
      "name": "Inv 42 (C) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 62
    },
    {
      "key": "H504290",
      "name": "Inv 43 (C) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 63
    },
    {
      "key": "H504291",
      "name": "Inv 44 (C) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 64
    },
    {
      "key": "H504292",
      "name": "Inv 45 (C) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 65
    },
    {
      "key": "H504293",
      "name": "Inv 46 (C) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 66
    },
    {
      "key": "H504294",
      "name": "Inv 47 (C) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 67
    },
    {
      "key": "H504295",
      "name": "Inv 48 (C) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 68
    },
    {
      "key": "H504296",
      "name": "Inv 49 (C) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 69
    },
    {
      "key": "H504297",
      "name": "Inv 50 (C) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 70
    },
    {
      "key": "H504298",
      "name": "Inv 51 (C) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 71
    },
    {
      "key": "H504299",
      "name": "Inv 52 (C) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 72
    },
    {
      "key": "H504300",
      "name": "Inv 53 (C) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 73
    },
    {
      "key": "H504301",
      "name": "Inv 54 (C) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 74
    },
    {
      "key": "H504302",
      "name": "Inv 55 (C) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 75
    },
    {
      "key": "H504303",
      "name": "Inv 56 (C) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 76
    },
    {
      "key": "H504304",
      "name": "Inv 57 (C) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 77
    },
    {
      "key": "H504305",
      "name": "Inv 58 (C) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 78
    },
    {
      "key": "H504306",
      "name": "Inv 59 (C) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 79
    },
    {
      "key": "H504307",
      "name": "Inv 60 (C) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 80
    },
    {
      "key": "H504308",
      "name": "Inv 61 (C) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 81
    },
    {
      "key": "H504309",
      "name": "Inv 62 (C) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 82
    },
    {
      "key": "H504310",
      "name": "Inv 63 (C) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 83
    },
    {
      "key": "H504311",
      "name": "Inv 64 (C) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 84
    },
    {
      "key": "H504312",
      "name": "Inv 65 (C) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 85
    },
    {
      "key": "H504313",
      "name": "Inv 66 (C) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 86
    },
    {
      "key": "H504314",
      "name": "Inv 67 (C) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 87
    },
    {
      "key": "H504315",
      "name": "Inv 68 (C) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 88
    },
    {
      "key": "H504316",
      "name": "Inv 69 (C) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 89
    },
    {
      "key": "H504317",
      "name": "Inv 70 (D) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 90
    },
    {
      "key": "H504318",
      "name": "Inv 71 (D) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 91
    },
    {
      "key": "H504319",
      "name": "Inv 72 (D) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 92
    },
    {
      "key": "H504320",
      "name": "Inv 73 (D) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 93
    },
    {
      "key": "H504321",
      "name": "Inv 74 (D) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 94
    },
    {
      "key": "H504322",
      "name": "Inv 75 (D) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 95
    },
    {
      "key": "H504323",
      "name": "Inv 76 (D) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 96
    },
    {
      "key": "H504324",
      "name": "Inv 77 (D) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 97
    },
    {
      "key": "H504325",
      "name": "Inv 78 (D) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 98
    },
    {
      "key": "H504326",
      "name": "Inv 79 (D) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 99
    },
    {
      "key": "H504328",
      "name": "Inv 80 (D) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 100
    },
    {
      "key": "H504329",
      "name": "Inv 81 (D) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 101
    },
    {
      "key": "H504330",
      "name": "Inv 82 (D) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 102
    },
    {
      "key": "H504331",
      "name": "Inv 83 (D) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 103
    },
    {
      "key": "H504332",
      "name": "Inv 84 (D) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 104
    },
    {
      "key": "H504333",
      "name": "Inv 85 (D) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 105
    },
    {
      "key": "H504334",
      "name": "Inv 86 (D) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 106
    },
    {
      "key": "H504335",
      "name": "Inv 87 (D) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 107
    },
    {
      "key": "H504327",
      "name": "Inv 88 (D) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 108
    },
    {
      "key": "H504240",
      "name": "Inv 89 (E) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 109
    },
    {
      "key": "H504241",
      "name": "Inv 90 (E) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 110
    },
    {
      "key": "H504242",
      "name": "Inv 91 (E) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 111
    },
    {
      "key": "H504243",
      "name": "Inv 92 (E) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 112
    },
    {
      "key": "H504244",
      "name": "Inv 93 (E) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 113
    },
    {
      "key": "H504245",
      "name": "Inv 94 (E) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 114
    },
    {
      "key": "H504246",
      "name": "Inv 95 (E) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 115
    },
    {
      "key": "H504247",
      "name": "Inv 96 (E) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 116
    },
    {
      "key": "H504248",
      "name": "Inv 97 (E) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 117
    },
    {
      "key": "H504249",
      "name": "Inv 98 (E) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 118
    },
    {
      "key": "H504250",
      "name": "Inv 99 (E) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 119
    },
    {
      "key": "H504251",
      "name": "Inv 100 (E) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 120
    },
    {
      "key": "H504252",
      "name": "Inv 101 (E) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 121
    },
    {
      "key": "H504253",
      "name": "Inv 102 (E) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 122
    },
    {
      "key": "H504254",
      "name": "Inv 103 (E) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 123
    },
    {
      "key": "H504255",
      "name": "Inv 104 (E) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 124
    },
    {
      "key": "H504256",
      "name": "Inv 105 (E) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 125
    },
    {
      "key": "H504257",
      "name": "Inv 106 (E) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 126
    },
    {
      "key": "H504258",
      "name": "Inv 107 (E) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 127
    },
    {
      "key": "H504259",
      "name": "Inv 108 (E) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 128
    },
    {
      "key": "H504260",
      "name": "Inv 109 (E) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 129
    },
    {
      "key": "H504261",
      "name": "Inv 110 (E) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 130
    },
    {
      "key": "H504262",
      "name": "Inv 111 (E) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 131
    },
    {
      "key": "H504165",
      "name": "Inv 112 (F)  (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 132
    },
    {
      "key": "H504166",
      "name": "Inv 113 (F)  (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 133
    },
    {
      "key": "H504167",
      "name": "Inv 114 (F)  (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 134
    },
    {
      "key": "H504168",
      "name": "Inv 115 (F)  (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 135
    },
    {
      "key": "H504169",
      "name": "Inv 116 (F)  (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 136
    },
    {
      "key": "H504170",
      "name": "Inv 117 (F)  (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 137
    },
    {
      "key": "H504171",
      "name": "Inv 118 (F)  (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 138
    },
    {
      "key": "H504172",
      "name": "Inv 119 (F)  (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 139
    },
    {
      "key": "H504173",
      "name": "Inv 120 (F)  (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 140
    },
    {
      "key": "H504174",
      "name": "Inv 121 (F)  (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 141
    },
    {
      "key": "H504175",
      "name": "Inv 122 (F)  (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 142
    },
    {
      "key": "H504176",
      "name": "Inv 123 (F)  (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 143
    },
    {
      "key": "H504177",
      "name": "Inv 124 (F)  (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 143
    },
    {
      "key": "H504178",
      "name": "Inv 125 (F)  (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 144
    },
    {
      "key": "H504179",
      "name": "Inv 126 (F)  (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 145
    },
    {
      "key": "H504186",
      "name": "Inv 127 (G) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 147
    },
    {
      "key": "H504187",
      "name": "Inv 128 (G) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 148
    },
    {
      "key": "H504188",
      "name": "Inv 129 (G) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 149
    },
    {
      "key": "H504189",
      "name": "Inv 130 (G) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 150
    },
    {
      "key": "H504190",
      "name": "Inv 131 (G) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 151
    },
    {
      "key": "H504191",
      "name": "Inv 132 (G) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 152
    },
    {
      "key": "H504192",
      "name": "Inv 133 (G) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 153
    },
    {
      "key": "H504193",
      "name": "Inv 134 (G) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 154
    },
    {
      "key": "H504194",
      "name": "Inv 135 (G) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 155
    },
    {
      "key": "H504195",
      "name": "Inv 136 (G) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 156
    },
    {
      "key": "H504196",
      "name": "Inv 137 (G) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 157
    },
    {
      "key": "H504197",
      "name": "Inv 138 (G) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 158
    },
    {
      "key": "H504198",
      "name": "Inv 139 (G) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 159
    },
    {
      "key": "H504199",
      "name": "Inv 140 (G) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 160
    },
    {
      "key": "H504200",
      "name": "Inv 141 (G) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 161
    },
    {
      "key": "H504264",
      "name": "Inv 142 (H) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 162
    },
    {
      "key": "H504265",
      "name": "Inv 143 (H) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 163
    },
    {
      "key": "H504266",
      "name": "Inv 144 (H) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 164
    },
    {
      "key": "H504267",
      "name": "Inv 145 (H) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 165
    },
    {
      "key": "H504268",
      "name": "Inv 146 (H) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 166
    },
    {
      "key": "H504269",
      "name": "Inv 147 (H) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 167
    },
    {
      "key": "H504270",
      "name": "Inv 148 (H) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 168
    },
    {
      "key": "H504271",
      "name": "Inv 149 (H) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 169
    },
    {
      "key": "H504272",
      "name": "Inv 150 (H) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 170
    },
    {
      "key": "H504273",
      "name": "Inv 151 (H) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 171
    },
    {
      "key": "H504274",
      "name": "Inv 152 (H) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 172
    },
    {
      "key": "H504275",
      "name": "Inv 153 (H) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 173
    },
    {
      "key": "H504276",
      "name": "Inv 154 (H) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 174
    },
    {
      "key": "H504277",
      "name": "Inv 155 (H) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 175
    },
    {
      "key": "H504278",
      "name": "Inv 156 (H) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 176
    },
    {
      "key": "H504279",
      "name": "Inv 157 (H) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 177
    },
    {
      "key": "H504280",
      "name": "Inv 158 (H) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 178
    },
    {
      "key": "H504281",
      "name": "Inv 159 (H) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 179
    },
    {
      "key": "H504282",
      "name": "Inv 160 (H) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 180
    },
    {
      "key": "H504283",
      "name": "Inv 161 (H) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 181
    },
    {
      "key": "H504284",
      "name": "Inv 162 (H) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 182
    },
    {
      "key": "H504285",
      "name": "Inv 163 (H) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 183
    },
    {
      "key": "H504286",
      "name": "Inv 164 (H) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 184
    },
    {
      "key": "H504287",
      "name": "Inv 165 (H) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 185
    },
    {
      "key": "H504288",
      "name": "Inv 166 (H) (60KW) CPS SCA60KTL-DO/US-480",
      "selected": false,
      "sortIndex": 186
    }
  ],
  "siteDcShare": 0,
  "siteHasInverterGroups": false,
  "ts": "2025-12-16T16:45:50Z",
  "weatherStationKey1": "",
  "weatherStationKey2": ""
}
```

