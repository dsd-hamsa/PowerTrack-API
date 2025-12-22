# /api/applinks

[← Back to Index](../README.md)

**Methods:** GET
**Status Codes:** 200
**Call Count:** 1

## Response Structure

```json
{
  "type": "object",
  "properties": {
    "appLinks": {
      "type": "object",
      "properties": {
        "appLink": {
          "type": "number"
        },
        "description": {
          "type": "string"
        },
        "id": {
          "type": "string"
        },
        "name": {
          "type": "string"
        },
        "url": {
          "type": "string"
        }
      }
    },
    "email": {
      "type": "string"
    }
  }
}
```

## Example

**Request:**

```http
GET /api/applinks
Accept: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
referer: https://apps.alsoenergy.com/powertrack/H511568/administration/config
```

**Response:**

```json
{
  "appLinks": [
    {
      "appLink": 1,
      "description": "Monitor, control, and optimize clean energy portfolio.",
      "id": "2SLDzzCpqTW2",
      "name": "PowerTrack",
      "url": "/powertrack"
    }
  ],
  "email": "josh.hamsa@dsdrenewables.com"
}
```

