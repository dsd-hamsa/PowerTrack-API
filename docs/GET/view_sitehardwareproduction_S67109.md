# /api/view/sitehardwareproduction/S67109

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
      "type": "object"
    },
    "timeZone": {
      "type": "string"
    },
    "hardware": {
      "type": "object",
      "properties": {
        "key": {
          "type": "string"
        },
        "name": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "hardwareStatus": {
          "type": "number"
        },
        "serialNum": {
          "type": "string"
        },
        "installDate": {
          "type": "string"
        },
        "lastChanged": {
          "type": "string"
        },
        "communicationResult": {
          "type": "number"
        },
        "lastAttempt": {
          "type": "object"
        },
        "lastSuccess": {
          "type": "object"
        },
        "lastData": {
          "type": "string"
        },
        "primaryMetricName": {
          "type": "number"
        },
        "primaryMetric": {
          "type": "string"
        },
        "inverterKw": {
          "type": "number"
        },
        "dataRegisters": {
          "type": "object",
          "properties": {
            "name": {
              "type": "string"
            },
            "dataType": {
              "type": "number"
            },
            "value": {
              "type": "string"
            },
            "unit": {
              "type": "number"
            },
            "formattedValue": {
              "type": "string"
            }
          }
        },
        "deviceImage": {
          "type": "object",
          "properties": {
            "uri": {
              "type": "string"
            },
            "key": {
              "type": "string"
            },
            "name": {
              "type": "string"
            },
            "lastChanged": {
              "type": "object"
            },
            "contentType": {
              "type": "string"
            }
          }
        },
        "functionCode": {
          "type": "number"
        },
        "defaultChart": {
          "type": "number"
        },
        "outOfService": {
          "type": "boolean"
        },
        "capacityKW": {
          "type": "object"
        },
        "sortOrder": {
          "type": "number"
        },
        "units": {
          "type": "number"
        },
        "unitsScale": {
          "type": "string"
        }
      }
    }
  }
}
```

[Return to top](#apiviewsitehardwareproductions67109)

## Example

**Request:**

```http
GET /api/view/sitehardwareproduction/S67109?lastChanged=1900-01-01T00:00:00.000Z
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
Accept: application/json
referer: https://apps.alsoenergy.com/powertrack/S67109/overview/dashboard
```

**Response:**

```json
{
  "key": "S67109",
  "lastChanged": null,
  "timeZone": "",
  "hardware": [
    {
      "key": "H471291",
      "name": "Solcast Virtual Weather Station",
      "description": "Solcast Virtual Weather Station",
      "hardwareStatus": 1,
      "serialNum": "",
      "installDate": "2023-09-26",
      "lastChanged": "2023-09-25T18:12:36Z",
      "communicationResult": 0,
      "lastAttempt": null,
      "lastSuccess": null,
      "lastData": "",
      "primaryMetricName": 0,
      "primaryMetric": "",
      "inverterKw": 0,
      "dataRegisters": [
        {
          "name": "WindDirection",
          "dataType": 0,
          "value": "NaN",
          "unit": 40,
          "formattedValue": "—"
        },
        {
          "name": "GHI",
          "dataType": 0,
          "value": "NaN",
          "unit": 57,
          "formattedValue": "—"
        },
        {
          "name": "DNI",
          "dataType": 0,
          "value": "NaN",
          "unit": 57,
          "formattedValue": "—"
        },
        {
          "name": "DHI",
          "dataType": 0,
          "value": "NaN",
          "unit": 57,
          "formattedValue": "—"
        },
        {
          "name": "Ambient",
          "dataType": 0,
          "value": "NaN",
          "unit": 31,
          "formattedValue": "—"
        },
        {
          "name": "WindSpeed",
          "dataType": 0,
          "value": "NaN",
          "unit": 50,
          "formattedValue": "—"
        },
        {
          "name": "Snow",
          "dataType": 0,
          "value": "NaN",
          "unit": 48,
          "formattedValue": "—"
        }
      ],
      "deviceImage": {
        "uri": "https://www.alsoenergy.com/pub/Images/weather.png",
        "key": "",
        "name": "WS_V19015",
        "lastChanged": null,
        "contentType": ""
      },
      "functionCode": 5,
      "defaultChart": 21,
      "outOfService": false,
      "capacityKW": null,
      "sortOrder": 0,
      "units": 31,
      "unitsScale": "NaN"
    }
  ]
}
```

[Return to top](#apiviewsitehardwareproductions67109)

