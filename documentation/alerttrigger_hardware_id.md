# Endpoint 1

[← Back to Index](../README.md)


### `/api/alerttrigger/{hardware_id}`

**Methods:** GET  
**Status Codes:** 200  
**Call Count:** 4  

#### Response Structure

```json
{
  "type": "object",
  "properties": {
    "capacity": {
      "type": "unknown"
    },
    "assetCode": {
      "type": "integer"
    },
    "lastChanged": {
      "type": "string"
    },
    "defaultTriggers": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {}
      }
    },
    "key": {
      "type": "string"
    },
    "calculatedCapacity": {
      "type": "integer"
    },
    "triggers": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {}
      }
    }
  }
}
```

#### Example

**Request:**

```http
GET /api/alerttrigger/H70617?lastChanged=2025-12-12T17:53:01Z
Accept: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
```

**Response:**

```json
{
  "assetCode": 5,
  "calculatedCapacity": 0,
  "capacity": null,
  "defaultTriggers": [
    {
      "alertTypeKey": "AI250",
      "checkNoSnow": false,
      "checkSun": false,
      "checkTime": false,
      "delayHoursResolve": 0,
      "delayHoursTrigger": 0,
      "description": "Detects when a device is not talking to the data logger, or invalid data is received from the device.",
      "endTime": 0,
      "hasImpact": false,
      "id": 0,
      "impact": 0,
      "isActive": false,
      "key": "",
      "lastChanged": "2017-10-17T15:42:09Z",
      "name": "Device communication",
      "ownerKey": "",
      "parameters": [
        {
          "index": 0,
          "info": "Ignore invalid data",
          "name": "IgnoreInvalidData",
          "readOnly": true,
          "source": 2,
          "type": 7,
          "value": 0
        }
      ],
      "parentKey": "H70617",
      "priorityLevel": 0,
      "sharing": 0,
      "startTime": 0,
      "sunMaxAzimuth": 0,
      "sunMinAzimuth": 0,
      "sunMinElevation": 0
    },
    {
      "alertTypeKey": "AI499",
      "checkNoSnow": false,
      "checkSun": false,
      "checkTime": false,
      "delayHoursResolve": 0,
      "delayHoursTrigger": 0,
      "description": "Detects weather station problems - Invalid irradiance values - Low mid-day irradiance (less than 25 w/m\u00b2) - Invalid temperatures - Module temperature less than 3 \u00b0C higher than ambient when there's at least 500 w/m\u00b2",
      "endTime": 0,
      "hasImpact": false,
      "id": 0,
      "impact": 0,
      "isActive": false,
      "key": "",
      "lastChanged": "2017-10-17T15:42:09Z",
      "name": "Weather Station Alert",
      "ownerKey": "",
      "parameters": [],
      "parentKey": "H70617",
      "priorityLevel": 0,
      "sharing": 0,
      "startTime": 0,
      "sunMaxAzimuth": 0,
      "sunMinAzimuth": 0,
      "sunMinElevation": 0
    }
  ],
  "key": "H70617",
  "lastChanged": "2017-10-17T15:42:09Z",
  "triggers": [
    {
      "alertTypeKey": "AI250",
      "checkNoSnow": false,
      "checkSun": false,
      "checkTime": false,
      "delayHoursResolve": 0,
      "delayHoursTrigger": 0.25,
      "description": "Detects when a device is not talking to the data logger, or invalid data is received from the device.",
      "endTime": 0,
      "hasImpact": false,
      "id": 138373,
      "impact": 0,
      "isActive": true,
      "key": "AS138373",
      "lastChanged": "2017-10-17T15:42:09Z",
      "name": "Device communication",
      "ownerKey": "",
      "parameters": [
        {
          "index": 0,
          "info": "Ignore invalid data",
          "name": "IgnoreInvalidData",
          "readOnly": true,
          "source": 2,
          "type": 7,
          "value": 0
        }
      ],
      "parentKey": "H70617",
      "priorityLevel": 0,
      "sharing": 0,
      "startTime": 0,
      "sunMaxAzimuth": 0,
      "sunMinAzimuth": 0,
      "sunMinElevation": 0
    },
    {
      "alertTypeKey": "AI499",
      "checkNoSnow": false,
      "checkSun": false,
      "checkTime": false,
      "delayHoursResolve": 0.25,
      "delayHoursTrigger": 0.5,
      "description": "Detects weather station problems - Invalid irradiance values - Low mid-day irradiance (less than 25 w/m\u00b2) - Invalid temperatures - Module temperature less than 3 \u00b0C higher than ambient when there's at least 500 w/m\u00b2",
      "endTime": 0,
      "hasImpact": false,
      "id": 138374,
      "impact": 0,
      "isActive": true,
      "key": "AS138374",
      "lastChanged": "2017-10-17T15:42:09Z",
      "name": "Weather Station Alert",
      "ownerKey": "",
      "parameters": [],
      "parentKey": "H70617",
      "priorityLevel": 0,
      "sharing": 0,
      "startTime": 0,
      "sunMaxAzimuth": 0,
      "sunMinAzimuth": 0,
      "sunMinElevation": 0
    }
  ]
}
```

