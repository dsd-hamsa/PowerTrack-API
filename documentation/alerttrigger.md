# `/api/alerttrigger`

[← Back to Index](../README.md)


### `/api/alerttrigger`

**Methods:** POST, PUT  
**Status Codes:** 200  
**Call Count:** 1  

#### Response Structure

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
    "id": {
      "type": "integer"
    },
    "alertTypeKey": {
      "type": "string"
    },
    "parentKey": {
      "type": "string"
    },
    "name": {
      "type": "string"
    },
    "description": {
      "type": "string"
    },
    "isActive": {
      "type": "boolean"
    },
    "priorityLevel": {
      "type": "integer"
    },
    "checkSun": {
      "type": "boolean"
    },
    "checkTime": {
      "type": "boolean"
    },
    "checkNoSnow": {
      "type": "boolean"
    },
    "hasImpact": {
      "type": "boolean"
    },
    "impact": {
      "type": "number"
    },
    "delayHoursTrigger": {
      "type": "number"
    },
    "delayHoursResolve": {
      "type": "number"
    },
    "startTime": {
      "type": "integer"
    },
    "endTime": {
      "type": "integer"
    },
    "sunMinElevation": {
      "type": "integer"
    },
    "sunMinAzimuth": {
      "type": "integer"
    },
    "sunMaxAzimuth": {
      "type": "integer"
    },
    "parameters": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "source": {
            "type": "integer"
          },
          "info": {
            "type": "string"
          },
          "readOnly": {
            "type": "boolean"
          },
          "index": {
            "type": "integer"
          },
          "name": {
            "type": "string"
          },
          "value": {
            "type": "unknown"
          },
          "type": {
            "type": "integer"
          }
        }
      }
    },
    "ownerKey": {
      "type": "string"
    },
    "sharing": {
      "type": "integer"
    }
  }
}
```

#### Example

**Request:**

```http
POST /api/alerttrigger
Accept: application/json
Referer: https://www.alsoenergy.com
Content-Type: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711

{
  "key": "",
  "lastChanged": "2025-11-14T00:00:12Z",
  "id": 0,
  "alertTypeKey": "AI362",
  "parentKey": "H347559",
  "name": "Inverter / irradiance check",
  "description": "Generate an alert if the inverter is not running for 60 minutes while the irradiance exceeds a threshold.",
  "isActive": true,
  "priorityLevel": 0,
  "checkSun": true,
  "checkTime": false,
  "checkNoSnow": true,
  "hasImpact": false,
  "impact": 100,
  "delayHoursTrigger": 1,
  "delayHoursResolve": 0.5,
  "startTime": 0,
  "endTime": 0,
  "sunMinElevation": 10,
  "sunMinAzimuth": 0,
  "sunMaxAzimuth": 0,
  "parameters": [
    {
      "source": 2,
      "info": "",
      "readOnly": false,
      "index": 0,
      "name": "Weather station",
      "value": "",
      "type": 5
    },
    {
      "source": 2,
      "info": "Minimum irradiance level",
      "readOnly": false,
      "index": 0,
      "name": "Threshold",
      "value": 200,
      "type": 3
    },
    {
      "source": 2,
      "info": "Do not trigger if the AC voltage for the production meter is zero.",
      "readOnly": false,
      "index": 0,
      "name": "SuppressIfNoAC",
      "value": true,
      "type": 16
    }
  ],
  "ownerKey": "",
  "sharing": 0
}
```

**Response:**

```json
{
  "key": "",
  "lastChanged": "2025-11-14T00:00:12Z",
  "id": 0,
  "alertTypeKey": "AI362",
  "parentKey": "H347559",
  "name": "Inverter / irradiance check",
  "description": "Generate an alert if the inverter is not running for 60 minutes while the irradiance exceeds a threshold.",
  "isActive": true,
  "priorityLevel": 0,
  "checkSun": true,
  "checkTime": false,
  "checkNoSnow": true,
  "hasImpact": false,
  "impact": 100,
  "delayHoursTrigger": 1,
  "delayHoursResolve": 0.5,
  "startTime": 0,
  "endTime": 0,
  "sunMinElevation": 10,
  "sunMinAzimuth": 0,
  "sunMaxAzimuth": 0,
  "parameters": [
    {
      "source": 2,
      "info": "",
      "readOnly": false,
      "index": 0,
      "name": "Weather station",
      "value": "",
      "type": 5
    },
    {
      "source": 2,
      "info": "Minimum irradiance level",
      "readOnly": false,
      "index": 0,
      "name": "Threshold",
      "value": 200,
      "type": 3
    },
    {
      "source": 2,
      "info": "Do not trigger if the AC voltage for the production meter is zero.",
      "readOnly": false,
      "index": 0,
      "name": "SuppressIfNoAC",
      "value": true,
      "type": 16
    }
  ],
  "ownerKey": "",
  "sharing": 0
}
```

#### PUT Example

**Request:**

```http
PUT /api/alerttrigger
Accept: application/json
Referer: https://www.alsoenergy.com
Content-Type: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711

{
  "key": "x2d1aee87",
  "lastChanged": "2025-11-14T00:05:11Z",
  "id": 1764999,
  "alertTypeKey": "AI862",
  "parentKey": "H347559",
  "name": "SMA STP/TriPower Fault Alert",
  "description": "SMA TriPower Fault Alert following the SMA Event Messages Document.",
  "isActive": true,
  "priorityLevel": 0,
  "checkSun": true,
  "checkTime": false,
  "checkNoSnow": false,
  "hasImpact": true,
  "impact": 0,
  "delayHoursTrigger": 1,
  "delayHoursResolve": 0.5,
  "startTime": 0,
  "endTime": 0,
  "sunMinElevation": 10,
  "sunMinAzimuth": 0,
  "sunMaxAzimuth": 0,
  "parameters": [],
  "ownerKey": "",
  "sharing": 0
}
```

**Response:**

```json
{
  "key": "x2d1aee87",
  "lastChanged": "2025-11-14T00:05:11Z",
  "id": 1764999,
  "alertTypeKey": "AI862",
  "parentKey": "H347559",
  "name": "SMA STP/TriPower Fault Alert",
  "description": "SMA TriPower Fault Alert following the SMA Event Messages Document.",
  "isActive": true,
  "priorityLevel": 0,
  "checkSun": true,
  "checkTime": false,
  "checkNoSnow": false,
  "hasImpact": true,
  "impact": 0,
  "delayHoursTrigger": 1,
  "delayHoursResolve": 0.5,
  "startTime": 0,
  "endTime": 0,
  "sunMinElevation": 10,
  "sunMinAzimuth": 0,
  "sunMaxAzimuth": 0,
  "parameters": [],
  "ownerKey": "",
  "sharing": 0
}
```
