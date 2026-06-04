<a id="top"></a>
# /api/edit/rate

[← Back to Index](../logs.md)

**Methods:** POST  
**Status Codes:** 200  

## Table of Contents

- [Payload Structure](#payload-structure)
- [General](#general)
- [Example](#example)

## Payload Structure

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
    "parentKey": {
      "type": "string"
    },
    "content": {
      "type": "object",
      "properties": {}
    },
    "name": {
      "type": "string"
    },
    "units": {
      "type": "number"
    },
    "type": {
      "type": "number"
    },
    "userCurrency": {
      "type": "string"
    },
    "userSymbol": {
      "type": "string"
    },
    "rateUnit": {
      "type": "number"
    },
    "customUnit": {
      "type": "string"
    },
    "customSymbol": {
      "type": "string"
    },
    "rate": {
      "type": "object",
      "properties": {
        "startDate": {
          "type": "string"
        },
        "endDate": {
          "type": "string"
        },
        "energyFee": {
          "type": "number"
        },
        "tax": {
          "type": "number"
        },
        "fees": {
          "type": "number"
        },
        "noFixedFeeOnNaN": {
          "type": "boolean"
        },
        "siteServiceFee": {
          "type": "number"
        },
        "siteYearlyFee": {
          "type": "number"
        },
        "serviceFee": {
          "type": "number"
        },
        "yearlyFee": {
          "type": "number"
        },
        "monthlyIncrease": {
          "type": "number"
        },
        "yearlyIncrease": {
          "type": "number"
        },
        "demandReduction": {
          "type": "number"
        },
        "energyAdjFee": {
          "type": "number"
        },
        "capacityFee": {
          "type": "number"
        },
        "demandFee": {
          "type": "number"
        },
        "semiPeakStart1": {
          "type": "number"
        },
        "semiPeakEnd1": {
          "type": "number"
        },
        "semiPeakStart2": {
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
        "semiPeakAdjFee": {
          "type": "number"
        },
        "semiPeakCapacityFee": {
          "type": "number"
        },
        "semiPeakDemandFee": {
          "type": "number"
        },
        "peakStart": {
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
        "peakAdjFee": {
          "type": "number"
        },
        "peakCapacityFee": {
          "type": "number"
        },
        "peakDemandFee": {
          "type": "number"
        },
        "scheduleKey": {
          "type": "number"
        },
        "index": {
          "type": "number"
        },
        "table": {
          "type": "array",
          "items": {
            "type": "unknown"
          }
        }
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
    "selectedIdx": {
      "type": "number"
    }
  }
}
```

[Return to top](#top)

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
    "parentKey": {
      "type": "string"
    },
    "content": {
      "type": "object",
      "properties": {}
    },
    "name": {
      "type": "string"
    },
    "units": {
      "type": "number"
    },
    "type": {
      "type": "number"
    },
    "userCurrency": {
      "type": "string"
    },
    "userSymbol": {
      "type": "string"
    },
    "rateUnit": {
      "type": "number"
    },
    "customUnit": {
      "type": "string"
    },
    "customSymbol": {
      "type": "string"
    },
    "rate": {
      "type": "object",
      "properties": {
        "startDate": {
          "type": "string"
        },
        "endDate": {
          "type": "string"
        },
        "energyFee": {
          "type": "number"
        },
        "tax": {
          "type": "number"
        },
        "fees": {
          "type": "number"
        },
        "noFixedFeeOnNaN": {
          "type": "boolean"
        },
        "siteServiceFee": {
          "type": "number"
        },
        "siteYearlyFee": {
          "type": "number"
        },
        "serviceFee": {
          "type": "number"
        },
        "yearlyFee": {
          "type": "number"
        },
        "monthlyIncrease": {
          "type": "number"
        },
        "yearlyIncrease": {
          "type": "number"
        },
        "demandReduction": {
          "type": "number"
        },
        "energyAdjFee": {
          "type": "number"
        },
        "capacityFee": {
          "type": "number"
        },
        "demandFee": {
          "type": "number"
        },
        "semiPeakStart1": {
          "type": "number"
        },
        "semiPeakEnd1": {
          "type": "number"
        },
        "semiPeakStart2": {
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
        "semiPeakAdjFee": {
          "type": "number"
        },
        "semiPeakCapacityFee": {
          "type": "number"
        },
        "semiPeakDemandFee": {
          "type": "number"
        },
        "peakStart": {
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
        "peakAdjFee": {
          "type": "number"
        },
        "peakCapacityFee": {
          "type": "number"
        },
        "peakDemandFee": {
          "type": "number"
        },
        "scheduleKey": {
          "type": "number"
        },
        "index": {
          "type": "number"
        },
        "table": {
          "type": "array",
          "items": {
            "type": "unknown"
          }
        }
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
    }
  }
}
```

[Return to top](#top)

## Example

**Request:**

```http
POST /api/edit/rate
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: 05fc89
Content-Type: application/json
Accept: application/json
referer: https://apps.alsoenergy.com/powertrack/S70110/files/D104465/new-rate-config
```

**Payload:**

```json
{
  "key": "",
  "ts": "2026-06-04T02:04:22Z",
  "parentKey": "D104465",
  "content": null,
  "name": "PPA Rate",
  "units": 64,
  "type": 1,
  "userCurrency": "Dollars",
  "userSymbol": "$",
  "rateUnit": 11,
  "customUnit": "Kilowatt hours",
  "customSymbol": "kWh",
  "rate": [
    {
      "startDate": "2026-06-04",
      "endDate": "2026-06-04",
      "energyFee": 0.145,
      "tax": 0,
      "fees": 0,
      "noFixedFeeOnNaN": false,
      "siteServiceFee": 0,
      "siteYearlyFee": 0,
      "serviceFee": 0,
      "yearlyFee": 0,
      "monthlyIncrease": 0,
      "yearlyIncrease": 0,
      "demandReduction": 0,
      "energyAdjFee": 0,
      "capacityFee": 0,
      "demandFee": 0,
      "semiPeakStart1": 0,
      "semiPeakEnd1": 0,
      "semiPeakStart2": 0,
      "semiPeakEnd2": 0,
      "semiPeakExcludeSaturday": false,
      "semiPeakExcludeSunday": false,
      "semiPeakFee": 0,
      "semiPeakAdjFee": 0,
      "semiPeakCapacityFee": 0,
      "semiPeakDemandFee": 0,
      "peakStart": 0,
      "peakEnd": 0,
      "peakExcludeSaturday": false,
      "peakExcludeSunday": false,
      "peakFee": 0,
      "peakAdjFee": 0,
      "peakCapacityFee": 0,
      "peakDemandFee": 0,
      "scheduleKey": 0,
      "index": 0,
      "table": []
    }
  ],
  "tags": {
    "key": "",
    "lastChanged": null,
    "attributes": [],
    "keywords": [],
    "notes": [],
    "powerDisplays": []
  },
  "selectedIdx": 0
}
```

**Response:**

```json
{
  "key": "F224085",
  "ts": "2026-06-04T02:12:42Z",
  "parentKey": "D104465",
  "content": null,
  "name": "PPA Rate",
  "units": 64,
  "type": 1,
  "userCurrency": "Dollars",
  "userSymbol": "$",
  "rateUnit": 11,
  "customUnit": "Kilowatt hours",
  "customSymbol": "kWh",
  "rate": [
    {
      "startDate": "2026-06-04",
      "endDate": "2026-06-04",
      "energyFee": 0.145,
      "tax": 0,
      "fees": 0,
      "noFixedFeeOnNaN": false,
      "siteServiceFee": 0,
      "siteYearlyFee": 0,
      "serviceFee": 0,
      "yearlyFee": 0,
      "monthlyIncrease": 0,
      "yearlyIncrease": 0,
      "demandReduction": 0,
      "energyAdjFee": 0,
      "capacityFee": 0,
      "demandFee": 0,
      "semiPeakStart1": 0,
      "semiPeakEnd1": 0,
      "semiPeakStart2": 0,
      "semiPeakEnd2": 0,
      "semiPeakExcludeSaturday": false,
      "semiPeakExcludeSunday": false,
      "semiPeakFee": 0,
      "semiPeakAdjFee": 0,
      "semiPeakCapacityFee": 0,
      "semiPeakDemandFee": 0,
      "peakStart": 0,
      "peakEnd": 0,
      "peakExcludeSaturday": false,
      "peakExcludeSunday": false,
      "peakFee": 0,
      "peakAdjFee": 0,
      "peakCapacityFee": 0,
      "peakDemandFee": 0,
      "scheduleKey": 0,
      "index": 0,
      "table": []
    }
  ],
  "tags": {
    "key": "",
    "lastChanged": null,
    "attributes": [],
    "keywords": [],
    "notes": [],
    "powerDisplays": []
  }
}
```

[Return to top](#top)

