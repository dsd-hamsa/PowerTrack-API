# /api/task/all

[← Back to Index](../README.md)

**Methods:** GET
**Status Codes:** 200
**Call Count:** 1

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
    "tasks": {
      "type": "array",
      "items": {
        "type": "unknown"
      }
    }
  }
}
```

## Example

**Request:**

```http
GET /api/task/all?lastChanged=2025-12-22T19:18:13Z
Accept: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
referer: https://apps.alsoenergy.com/powertrack/H511568/administration/config
```

**Response:**

```json
{
  "key": "all",
  "lastChanged": "2025-12-22T19:21:41Z",
  "tasks": []
}
```

