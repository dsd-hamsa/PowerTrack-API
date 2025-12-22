# /api/view/siteweather/S67109

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
    "lastChanged": {
      "type": "string"
    },
    "high": {
      "type": "number"
    },
    "low": {
      "type": "number"
    },
    "temperature": {
      "type": "number"
    },
    "condition": {
      "type": "string"
    },
    "date": {
      "type": "string"
    },
    "temperatureUnit": {
      "type": "number"
    },
    "windSpeed": {
      "type": "number"
    },
    "windSpeedUnit": {
      "type": "string"
    },
    "windDirection": {
      "type": "number"
    },
    "icon": {
      "type": "string"
    },
    "forecast": {
      "type": "object",
      "properties": {
        "high": {
          "type": "number"
        },
        "low": {
          "type": "number"
        },
        "temperature": {
          "type": "number"
        },
        "condition": {
          "type": "string"
        },
        "date": {
          "type": "string"
        },
        "icon": {
          "type": "string"
        }
      }
    }
  }
}
```

[Return to top](#apiviewsiteweathers67109)

## Example

**Request:**

```http
GET /api/view/siteweather/S67109?lastChanged=2025-12-22T17:21:08Z
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
Accept: application/json
referer: https://apps.alsoenergy.com/powertrack/S67109/overview/dashboard
```

**Response:**

```json
{
  "key": "S67109",
  "lastChanged": "2025-12-22T21:43:39Z",
  "high": 41,
  "low": 36,
  "temperature": 39,
  "condition": "Clear",
  "date": "2025-12-22T15:00:00",
  "temperatureUnit": 31,
  "windSpeed": 0,
  "windSpeedUnit": "",
  "windDirection": 0,
  "icon": "sunny",
  "forecast": [
    {
      "high": 45,
      "low": 32,
      "temperature": 36,
      "condition": "Clear",
      "date": "2025-12-23T00:00:00",
      "icon": "sunny"
    },
    {
      "high": 41,
      "low": 32,
      "temperature": 32,
      "condition": "Light rain",
      "date": "2025-12-24T00:00:00",
      "icon": "rain"
    },
    {
      "high": 43,
      "low": 34,
      "temperature": 39,
      "condition": "Light rain",
      "date": "2025-12-25T00:00:00",
      "icon": "rain"
    }
  ]
}
```

[Return to top](#apiviewsiteweathers67109)

