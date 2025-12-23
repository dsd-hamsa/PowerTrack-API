<a id="top"></a>
# /api/view/chart

[← Back to Index](../logs.md)

**Methods:** POST  
**Status Codes:** 400, 200  

## Table of Contents

- [Payload Structure](#payload-structure)
- [General](#general)
- [Example](#example)

## Payload Structure

```json
{
  "type": "object",
  "properties": {
    "binSize": {
      "type": "object"
    },
    "chartType": {
      "type": "number"
    },
    "context": {
      "type": "string"
    },
    "end": {
      "type": "string"
    },
    "sectionCode": {
      "type": "number"
    },
    "source": {
      "type": "string"
    },
    "start": {
      "type": "string"
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
    "allowSmallBinSize": {
      "type": "boolean"
    },
    "binSize": {
      "type": "number"
    },
    "currentNowBinIndex": {
      "type": "number"
    },
    "dataNotAvailable": {
      "type": "boolean"
    },
    "durations": {
      "type": "array",
      "items": {
        "type": "unknown"
      }
    },
    "end": {
      "type": "string"
    },
    "errorString": {
      "type": "string"
    },
    "hardwareKeys": {
      "type": "array",
      "items": {
        "type": "unknown"
      }
    },
    "hasAlertMessages": {
      "type": "boolean"
    },
    "hasOverriddenQuery": {
      "type": "boolean"
    },
    "isCategoryChart": {
      "type": "boolean"
    },
    "isSummaryChart": {
      "type": "boolean"
    },
    "isUsingDaylightSavings": {
      "type": "object",
      "properties": {}
    },
    "key": {
      "type": "string"
    },
    "lastChanged": {
      "type": "string"
    },
    "lastDataDatetime": {
      "type": "object",
      "properties": {}
    },
    "namedResults": {
      "type": "object",
      "properties": {}
    },
    "renderType": {
      "type": "number"
    },
    "series": {
      "type": "array",
      "items": {
        "type": "unknown"
      }
    },
    "showTable": {
      "type": "boolean"
    },
    "start": {
      "type": "string"
    },
    "summaryTable": {
      "type": "array",
      "items": {
        "type": "unknown"
      }
    },
    "timeZone": {
      "type": "string"
    },
    "timeZoneExport": {
      "type": "object",
      "properties": {}
    },
    "title": {
      "type": "string"
    },
    "validationError": {
      "type": "string"
    }
  }
}
```

[Return to top](#top)

## Example

**Request:**

```http
POST /api/view/chart?lastChanged=1900-01-01T00:00:00.000Z
Accept: application/json
Content-Type: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
referer: https://apps.alsoenergy.com/powertrack/S67109/overview/dashboard
```

**Payload:**

```json
{
  "binSize": null,
  "chartType": 255,
  "context": "site",
  "end": "2025-12-22",
  "query": null,
  "sectionCode": -1,
  "source": [
    "S67109"
  ],
  "start": "2025-12-20"
}
```

[Return to top](#top)

