# `/api/view/driversettings/list/{id}`

[← Back to Index](../README.md)



**Methods:** GET  
**Status Codes:** 200  
**Call Count:** 5  

#### Response Structure

```json
{
  "type": "array",
  "items": {
    "type": "object",
    "properties": {}
  }
}
```

#### Example

**Request:**

```http
GET /api/view/driversettings/list/20630
Accept: application/json
Referer: https://www.alsoenergy.com
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
```

**Response:**

```json
[
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
]
```

