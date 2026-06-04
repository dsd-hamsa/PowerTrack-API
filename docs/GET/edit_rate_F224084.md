<a id="top"></a>
# /api/edit/rate/F224084

[← Back to Index](../logs.md)

**Methods:** GET  
**Status Codes:** 200  

## Table of Contents

- [General](#general)
- [Example](#example)

## General

```json
{
  "type": "object",
  "properties": {
    "content": {
      "type": "object",
      "properties": {}
    },
    "customSymbol": {
      "type": "string"
    },
    "customUnit": {
      "type": "string"
    },
    "key": {
      "type": "string"
    },
    "name": {
      "type": "string"
    },
    "parentKey": {
      "type": "string"
    },
    "rate": {
      "type": "object",
      "properties": {
        "capacityFee": {
          "type": "number"
        },
        "demandFee": {
          "type": "number"
        },
        "demandReduction": {
          "type": "number"
        },
        "endDate": {
          "type": "string"
        },
        "energyAdjFee": {
          "type": "number"
        },
        "energyFee": {
          "type": "number"
        },
        "fees": {
          "type": "number"
        },
        "index": {
          "type": "number"
        },
        "monthlyIncrease": {
          "type": "number"
        },
        "noFixedFeeOnNaN": {
          "type": "boolean"
        },
        "peakAdjFee": {
          "type": "number"
        },
        "peakCapacityFee": {
          "type": "number"
        },
        "peakDemandFee": {
          "type": "number"
        },
        "peakEnd": {
          "type": "number"
        },
        "peakExcludeSaturday": {
          "type": "boolean"
        },
        "peakExcludeSunday": {
          "type": "boolean"
        },
        "peakFee": {
          "type": "number"
        },
        "peakStart": {
          "type": "number"
        },
        "scheduleKey": {
          "type": "number"
        },
        "semiPeakAdjFee": {
          "type": "number"
        },
        "semiPeakCapacityFee": {
          "type": "number"
        },
        "semiPeakDemandFee": {
          "type": "number"
        },
        "semiPeakEnd1": {
          "type": "number"
        },
        "semiPeakEnd2": {
          "type": "number"
        },
        "semiPeakExcludeSaturday": {
          "type": "boolean"
        },
        "semiPeakExcludeSunday": {
          "type": "boolean"
        },
        "semiPeakFee": {
          "type": "number"
        },
        "semiPeakStart1": {
          "type": "number"
        },
        "semiPeakStart2": {
          "type": "number"
        },
        "serviceFee": {
          "type": "number"
        },
        "siteServiceFee": {
          "type": "number"
        },
        "siteYearlyFee": {
          "type": "number"
        },
        "startDate": {
          "type": "string"
        },
        "table": {
          "type": "array",
          "items": {
            "type": "unknown"
          }
        },
        "tax": {
          "type": "number"
        },
        "yearlyFee": {
          "type": "number"
        },
        "yearlyIncrease": {
          "type": "number"
        }
      }
    },
    "rateUnit": {
      "type": "number"
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
    "ts": {
      "type": "string"
    },
    "type": {
      "type": "number"
    },
    "units": {
      "type": "number"
    },
    "userCurrency": {
      "type": "string"
    },
    "userSymbol": {
      "type": "string"
    }
  }
}
```

[Return to top](#top)

## Example

**Request:**

```http
GET /api/edit/rate/F224084
Accept: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: 05fc89
referer: https://apps.alsoenergy.com/powertrack/S66746/files/D104464/F224084
```

**Response:**

```json
{
  "content": null,
  "customSymbol": "kWh",
  "customUnit": "Kilowatt hours",
  "key": "F224084",
  "name": "NEE - McCue Community Solar",
  "parentKey": "D104464",
  "rate": [
    {
      "capacityFee": 0,
      "demandFee": 0,
      "demandReduction": 0,
      "endDate": "2026-06-04",
      "energyAdjFee": 0,
      "energyFee": 0,
      "fees": 0,
      "index": 0,
      "monthlyIncrease": 0,
      "noFixedFeeOnNaN": false,
      "peakAdjFee": 0,
      "peakCapacityFee": 0,
      "peakDemandFee": 0,
      "peakEnd": 0,
      "peakExcludeSaturday": false,
      "peakExcludeSunday": false,
      "peakFee": 0,
      "peakStart": 0,
      "scheduleKey": 0,
      "semiPeakAdjFee": 0,
      "semiPeakCapacityFee": 0,
      "semiPeakDemandFee": 0,
      "semiPeakEnd1": 0,
      "semiPeakEnd2": 0,
      "semiPeakExcludeSaturday": false,
      "semiPeakExcludeSunday": false,
      "semiPeakFee": 0,
      "semiPeakStart1": 0,
      "semiPeakStart2": 0,
      "serviceFee": 0,
      "siteServiceFee": 0,
      "siteYearlyFee": 0,
      "startDate": "2026-06-04",
      "table": [],
      "tax": 0,
      "yearlyFee": 0,
      "yearlyIncrease": 0
    }
  ],
  "rateUnit": 11,
  "tags": {
    "attributes": [],
    "key": "",
    "keywords": [],
    "lastChanged": null,
    "notes": [],
    "powerDisplays": []
  },
  "ts": "2026-06-04T01:36:52Z",
  "type": 5,
  "units": 64,
  "userCurrency": "Dollars",
  "userSymbol": "$"
}
```

[Return to top](#top)

