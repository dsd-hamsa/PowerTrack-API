# Endpoint 40

[← Back to Index](../README.md)


### `/api/view/driversettings/{hardware_id}`

**Methods:** GET  
**Status Codes:** 200  
**Call Count:** 3  

#### Response Structure

```json
{
  "type": "object",
  "properties": {
    "driverSettings": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {}
      }
    },
    "lastChanged": {
      "type": "string"
    },
    "key": {
      "type": "string"
    }
  }
}
```

#### Example

**Request:**

```http
GET /api/view/driversettings/H504061?lastChanged=1900-01-01T00:00:00.000Z
Accept: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
```

**Response:**

```json
{
  "driverSettings": [
    {
      "name": "dev:KWHoffset",
      "type": 2,
      "value": "0"
    },
    {
      "name": "dev:ScaleKW",
      "type": 0,
      "value": "0.1"
    },
    {
      "name": "dev:ScaleV",
      "type": 0,
      "value": "0.1"
    },
    {
      "name": "dev:ScaleI",
      "type": 0,
      "value": "0.1"
    },
    {
      "name": "dev:ScaleVDC",
      "type": 0,
      "value": "0.1"
    },
    {
      "name": "dev:ScaleIDC",
      "type": 0,
      "value": "0.1"
    },
    {
      "name": "dev:ScaleFrequency",
      "type": 0,
      "value": "0.1"
    },
    {
      "name": "dev:ScaleKWH",
      "type": 0,
      "value": "0.1"
    },
    {
      "name": "dev:ScaleT",
      "type": 0,
      "value": "0.1"
    },
    {
      "name": "dev:ScaleKVA",
      "type": 0,
      "value": "0.1"
    },
    {
      "name": "dev:ScalePF",
      "type": 0,
      "value": "0.001"
    },
    {
      "name": "dev:ScaleKVAR",
      "type": 0,
      "value": "0.1"
    },
    {
      "name": "dev:ScaleKWDC",
      "type": 0,
      "value": "0.1"
    },
    {
      "name": "dev:Alias",
      "type": 0,
      "value": "Status=opmode"
    },
    {
      "name": "dev:Regoffset",
      "type": 0,
      "value": "0"
    }
  ],
  "key": "H504061",
  "lastChanged": "2025-11-25T22:15:24Z"
}
```

