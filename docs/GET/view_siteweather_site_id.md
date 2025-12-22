# /api/view/siteweather/{site_id}

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
    "condition": {
      "type": "string"
    },
    "date": {
      "type": "string"
    },
    "forecast": {
      "type": "object",
      "properties": {
        "condition": {
          "type": "string"
        },
        "date": {
          "type": "string"
        },
        "high": {
          "type": "number"
        },
        "icon": {
          "type": "string"
        },
        "low": {
          "type": "number"
        },
        "temperature": {
          "type": "number"
        }
      }
    },
    "high": {
      "type": "number"
    },
    "icon": {
      "type": "string"
    },
    "key": {
      "type": "string"
    },
    "lastChanged": {
      "type": "string"
    },
    "low": {
      "type": "number"
    },
    "temperature": {
      "type": "number"
    },
    "temperatureUnit": {
      "type": "number"
    },
    "windDirection": {
      "type": "number"
    },
    "windSpeed": {
      "type": "number"
    },
    "windSpeedUnit": {
      "type": "string"
    }
  }
}
```

[Return to top](#apiviewsiteweather{site_id})

## Example

**Request:**

```http
GET /api/view/siteweather/S67109?lastChanged=2025-12-22T17:21:08Z
Accept: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
referer: https://apps.alsoenergy.com/powertrack/S67109/overview/dashboard
```

**Response:**

```json
{
  "condition": "Clear",
  "date": "2025-12-22T15:00:00",
  "forecast": [
    {
      "condition": "Clear",
      "date": "2025-12-23T00:00:00",
      "high": 45,
      "icon": "sunny",
      "low": 32,
      "temperature": 36
    },
    {
      "condition": "Light rain",
      "date": "2025-12-24T00:00:00",
      "high": 41,
      "icon": "rain",
      "low": 32,
      "temperature": 32
    },
    {
      "condition": "Light rain",
      "date": "2025-12-25T00:00:00",
      "high": 43,
      "icon": "rain",
      "low": 34,
      "temperature": 39
    }
  ],
  "high": 41,
  "icon": "sunny",
  "key": "S67109",
  "lastChanged": "2025-12-22T21:43:39Z",
  "low": 36,
  "temperature": 39,
  "temperatureUnit": 31,
  "windDirection": 0,
  "windSpeed": 0,
  "windSpeedUnit": ""
}
```

[Return to top](#apiviewsiteweather{site_id})

