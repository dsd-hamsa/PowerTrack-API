<a id="top"></a>
# /api/lookuplist/alertTypes/{site_id}

[← Back to Index](../logs.md)

**Methods:** GET  
**Status Codes:** 200  

## Table of Contents

- [Alert Type: General](#alert-type-general)
- [Example](#example)

## Alert Type: General

```json
{
  "type": "object",
  "properties": {
    "description": {
      "type": "string"
    },
    "deviceIds": {
      "type": "array",
      "items": {
        "type": "unknown"
      }
    },
    "functionCodes": {
      "type": "array",
      "items": {
        "type": "unknown"
      }
    },
    "name": {
      "type": "string"
    },
    "value": {
      "type": "string"
    }
  }
}
```

[Return to top](#top)

## Example

**Request:**

```http
GET /api/lookuplist/alertTypes/S34924
Accept: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
referer: https://apps.alsoenergy.com/powertrack/S34924/administration/alertsettings
```

**Response:**

```json
[
  {
    "description": "Runs a set of alerts for all devices of a given type and provides a summary of the results.",
    "deviceIds": [],
    "functionCodes": [],
    "name": "Group Alert",
    "value": "AI1213"
  },
  {
    "description": "Check the Energy Ratio over the last 24 hours each inverter",
    "deviceIds": [],
    "functionCodes": [],
    "name": "Inverter Energy Ratio",
    "value": "AI1188"
  },
  {
    "description": "Check inverter inputs and output for normal operation:\r- Inverter producing power when sunlight is available\r- Zone/string inputs operating at expected levels\r- Inverter outputs match production meter",
    "deviceIds": [],
    "functionCodes": [],
    "name": "Inverter site data analyzer",
    "value": "AI375"
  },
  {
    "description": "Generates an alert if the average site performance index over the last 24 hours is below the specified limit.",
    "deviceIds": [],
    "functionCodes": [],
    "name": "Performance Index Alert",
    "value": "AI401"
  },
  {
    "description": "Check performance ratio",
    "deviceIds": [],
    "functionCodes": [],
    "name": "Performance Ratio Analyzer",
    "value": "AI372"
  },
  {
    "description": "Generates an alert from PowerTrack Queries that have an alert condition defined",
    "deviceIds": [],
    "functionCodes": [],
    "name": "Query Condition Analyzer Alert",
    "value": "AI493"
  },
  {
    "description": "Analyzes site configuration and data for a report",
    "deviceIds": [],
    "functionCodes": [],
    "name": "Report analysis alert",
    "value": "AI359"
  },
  {
    "description": "Alerts that are generated while running a report.",
    "deviceIds": [],
    "functionCodes": [],
    "name": "Report run-time alert",
    "value": "AI358"
  },
  {
    "description": "Detects communication issues from ITRON devices, this is a place holder alert and should not be physically attached to any device.",
    "deviceIds": [],
    "functionCodes": [],
    "name": "Residential ITRON No Comm",
    "value": "AI439"
  },
  {
    "description": "Generates an alert notification if any of the Rule Tool tests fail.",
    "deviceIds": [],
    "functionCodes": [],
    "name": "Rule Tool Alert",
    "value": "AI614"
  },
  {
    "description": "Generates an alert notification if a specific Rule Tool message occurs.",
    "deviceIds": [],
    "functionCodes": [],
    "name": "Rule Tool Alert - Specific",
    "value": "AI1060"
  },
  {
    "description": "Checks site configuration and operation",
    "deviceIds": [],
    "functionCodes": [],
    "name": "Site Analyzer",
    "value": "AI354"
  },
  {
    "description": "Compare performance of nearby sites",
    "deviceIds": [],
    "functionCodes": [],
    "name": "Site Comparison",
    "value": "AI345"
  },
  {
    "description": "Run a query on recent data to generate an alert.",
    "deviceIds": [],
    "functionCodes": [],
    "name": "Site data alert",
    "value": "AI429"
  },
  {
    "description": "Executes PowerTrack Analyzer files, containing queries for performing complex analysis of site and device data.",
    "deviceIds": [],
    "functionCodes": [],
    "name": "Site Data Analyzer processor",
    "value": "AI391"
  },
  {
    "description": "Looks for inverter failures by comparing the Normalized Yield (kW / kWDC) for all inverters",
    "deviceIds": [],
    "functionCodes": [],
    "name": "Site PV Normalized Yield Analyzer",
    "value": "AI479"
  },
  {
    "description": "Looks for inverter failures by comparing the power output of each inverter to the average of the other inverters.",
    "deviceIds": [],
    "functionCodes": [],
    "name": "Site PV Power Analyzer",
    "value": "AI356"
  },
  {
    "description": "Looks for string failures by comparing DC zone currents at a site",
    "deviceIds": [],
    "functionCodes": [],
    "name": "Site Zone Analyzer",
    "value": "AI355"
  },
  {
    "description": "Executes PowerTrack Query files, for notifications based on analysis of data output from a query summary script.",
    "deviceIds": [],
    "functionCodes": [],
    "name": "User-defined Query processor",
    "value": "AI379"
  }
]
```

[Return to top](#top)

