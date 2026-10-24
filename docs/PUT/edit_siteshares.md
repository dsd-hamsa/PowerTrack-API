<a id="top"></a>
# /api/edit/siteshares

[← Back to Index](../logs.md)

**Methods:** PUT  
**Status Codes:** 200, 200  

## Table of Contents

- [Payload Structure](#payload-structure)
- [General](#general)
- [Example](#example)

## Payload Structure

```json
{
  "type": "object",
  "properties": {
    "additionalLocations": {
      "type": "array",
      "items": {
        "type": "unknown"
      }
    },
    "originalParentKey": {
      "type": "string"
    },
    "primaryLocation": {
      "type": "object",
      "properties": {
        "customerKey": {
          "type": "string"
        }
      }
    },
    "siteKey": {
      "type": "string"
    }
  }
}
```

[Return to top](#top)

## General

```json
{
  "type": "object",
  "properties": {
    "additionalLocations": {
      "type": "array",
      "items": {
        "type": "unknown"
      }
    },
    "primaryLocation": {
      "type": "object",
      "properties": {
        "customerKey": {
          "type": "string"
        },
        "virtualLinkKey": {
          "type": "string"
        }
      }
    },
    "siteKey": {
      "type": "string"
    }
  }
}
```

[Return to top](#top)

## Example

**Request:**

```http
PUT /api/edit/siteshares
Accept: application/json
Content-Type: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: ac3a35
referer: https://apps.alsoenergy.com/powertrack/S60134/administration/config
```

**Payload:**

```json
{
  "additionalLocations": [],
  "originalParentKey": "C25436",
  "primaryLocation": {
    "customerKey": "C16295"
  },
  "siteKey": "S60134"
}
```

**Response:**

```json
{
  "additionalLocations": [],
  "primaryLocation": {
    "customerKey": "C16295",
    "virtualLinkKey": ""
  },
  "siteKey": "S60134"
}
```

[Return to top](#top)

