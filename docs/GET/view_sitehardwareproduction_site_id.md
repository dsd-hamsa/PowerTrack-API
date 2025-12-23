<a id="top"></a>
# /api/view/sitehardwareproduction/{site_id}

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
    "hardware": {
      "type": "object",
      "properties": {
        "capacityKW": {
          "type": "object",
          "properties": {}
        },
        "communicationResult": {
          "type": "number"
        },
        "dataRegisters": {
          "type": "object",
          "properties": {
            "dataType": {
              "type": "number"
            },
            "formattedValue": {
              "type": "string"
            },
            "name": {
              "type": "string"
            },
            "unit": {
              "type": "number"
            },
            "value": {
              "type": "string"
            }
          }
        },
        "defaultChart": {
          "type": "number"
        },
        "description": {
          "type": "string"
        },
        "deviceImage": {
          "type": "object",
          "properties": {
            "contentType": {
              "type": "string"
            },
            "key": {
              "type": "string"
            },
            "lastChanged": {
              "type": "object",
              "properties": {}
            },
            "name": {
              "type": "string"
            },
            "uri": {
              "type": "string"
            }
          }
        },
        "functionCode": {
          "type": "number"
        },
        "hardwareStatus": {
          "type": "number"
        },
        "installDate": {
          "type": "string"
        },
        "inverterKw": {
          "type": "number"
        },
        "key": {
          "type": "string"
        },
        "lastAttempt": {
          "type": "object",
          "properties": {}
        },
        "lastChanged": {
          "type": "string"
        },
        "lastData": {
          "type": "string"
        },
        "lastSuccess": {
          "type": "object",
          "properties": {}
        },
        "name": {
          "type": "string"
        },
        "outOfService": {
          "type": "boolean"
        },
        "primaryMetric": {
          "type": "string"
        },
        "primaryMetricName": {
          "type": "number"
        },
        "serialNum": {
          "type": "string"
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
    },
    "key": {
      "type": "string"
    },
    "lastChanged": {
      "type": "object",
      "properties": {}
    },
    "timeZone": {
      "type": "string"
    }
  }
}
```

[Return to top](#top)

## Example

**Request:**

```http
GET /api/view/sitehardwareproduction/S67109?lastChanged=1900-01-01T00:00:00.000Z
Accept: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
referer: https://apps.alsoenergy.com/powertrack/S67109/overview/dashboard
```

**Response:**

```json
{
  "hardware": [
    {
      "capacityKW": null,
      "communicationResult": 0,
      "dataRegisters": [
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "WindDirection",
          "unit": 40,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "GHI",
          "unit": 57,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "DNI",
          "unit": 57,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "DHI",
          "unit": 57,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "Ambient",
          "unit": 31,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "WindSpeed",
          "unit": 50,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "—",
          "name": "Snow",
          "unit": 48,
          "value": "NaN"
        }
      ],
      "defaultChart": 21,
      "description": "Solcast Virtual Weather Station",
      "deviceImage": {
        "contentType": "",
        "key": "",
        "lastChanged": null,
        "name": "WS_V19015",
        "uri": "https://www.alsoenergy.com/pub/Images/weather.png"
      },
      "functionCode": 5,
      "hardwareStatus": 1,
      "installDate": "2023-09-26",
      "inverterKw": 0,
      "key": "H471291",
      "lastAttempt": null,
      "lastChanged": "2023-09-25T18:12:36Z",
      "lastData": "",
      "lastSuccess": null,
      "name": "Solcast Virtual Weather Station",
      "outOfService": false,
      "primaryMetric": "",
      "primaryMetricName": 0,
      "serialNum": "",
      "sortOrder": 0,
      "units": 31,
      "unitsScale": "NaN"
    }
  ],
  "key": "S67109",
  "lastChanged": null,
  "timeZone": ""
}
```

[Return to top](#top)

