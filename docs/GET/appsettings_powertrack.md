<a id="top"></a>
# /api/appsettings/powertrack

[← Back to Index](../logs.md)

**Methods:** GET  
**Status Codes:** 200, 200, 200, 200  

## Table of Contents

- [General](#general)
- [Example](#example)

## General

```json
{
  "type": "object",
  "properties": {
    "athenaPortalBaseUrl": {
      "type": "string"
    },
    "authenticationType": {
      "type": "string"
    },
    "build": {
      "type": "string"
    },
    "cmmsIntegration": {
      "type": "boolean"
    },
    "coreVersion": {
      "type": "string"
    },
    "databaseVersion": {
      "type": "string"
    },
    "databaseVersionString": {
      "type": "string"
    },
    "instance": {
      "type": "string"
    },
    "isEuroEnvironment": {
      "type": "boolean"
    },
    "isFederatedAuthentication": {
      "type": "boolean"
    },
    "managedEvents": {
      "type": "boolean"
    },
    "operations": {
      "type": "boolean"
    },
    "reportWizard": {
      "type": "boolean"
    },
    "ruleTool": {
      "type": "boolean"
    },
    "version": {
      "type": "string"
    }
  }
}
```

[Return to top](#top)

## Example

**Request:**

```http
GET /api/appsettings/powertrack
Accept: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
referer: https://apps.alsoenergy.com/powertrack/H511575/administration/config
```

**Response:**

```json
{
  "athenaPortalBaseUrl": "https://portal.stem.com",
  "authenticationType": "Unknown",
  "build": "main 81eead14cbd45ddc02bc04a569280874c126ec76",
  "cmmsIntegration": false,
  "coreVersion": "2025.11211.4.0",
  "databaseVersion": "",
  "databaseVersionString": "",
  "instance": "",
  "isEuroEnvironment": false,
  "isFederatedAuthentication": true,
  "managedEvents": false,
  "operations": true,
  "reportWizard": true,
  "ruleTool": true,
  "version": "0.0.0.0"
}
```

[Return to top](#top)

