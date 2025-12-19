# `/api/view/sitelinks/{site_id}`

[← Back to Index](../README.md)



**Methods:** GET  
**Status Codes:** 200  
**Call Count:** 2  

#### Response Structure

```json
{
  "type": "object",
  "properties": {
    "lastChanged": {
      "type": "string"
    },
    "list": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {}
      }
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
GET /api/view/sitelinks/S38292?lastChanged=1900-01-01T00:00:00.000Z
Accept: application/json
Referer: https://www.alsoenergy.com
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
```

**Response:**

```json
{
  "key": "S38292",
  "lastChanged": "2025-12-12T17:53:01Z",
  "list": [
    {
      "key": "F119023",
      "kind": "dashboard",
      "name": "Smith & Wesson Inverter Control #1"
    },
    {
      "key": "F119050",
      "kind": "dashboard",
      "name": "Smith & Wesson Inverter Control #2"
    },
    {
      "key": "https://hmi.alsoenergy.com/powerhmi/publicdisplay/a22ccd42-762a-4d24-9a19-c1463ba40835/main?arg=MzgyOTI%3d&lang=en-US",
      "kind": "external",
      "name": "MiniSite"
    },
    {
      "key": "http://www.alsoenergy.com/preview/PowerTrack/PowerDisplay.aspx?Dyn=*Solar;*Environment;*Media;;Kiosk&sid=38292&tag=772835&Lang=en-US",
      "kind": "external",
      "name": "Smith & Wesson Kiosk"
    }
  ]
}
```

