<a id="top"></a>
# /api/edit/rate/new/rateitem

[← Back to Index](../logs.md)

**Methods:** GET  
**Status Codes:** 200, 200, 200  

## Table of Contents

- [General](#general)
- [Example](#example)

## General

```json
{
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
}
```

[Return to top](#top)

## Example

**Request:**

```http
GET /api/edit/rate/new/rateitem
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: 05fc89
Accept: application/json
referer: https://apps.alsoenergy.com/powertrack/S70110/files/D104465/F224085
```

**Response:**

```json
{
  "startDate": "2026-06-04",
  "endDate": "2026-06-04",
  "energyFee": 0,
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
```

[Return to top](#top)

