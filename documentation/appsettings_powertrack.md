# Endpoint 4

[← Back to Index](../README.md)


### `/api/appsettings/powertrack`

**Methods:** GET  
**Status Codes:** 200  
**Call Count:** 3  

#### Response Structure

```json
{
  "type": "object",
  "properties": {
    "instance": {
      "type": "string"
    },
    "authenticationType": {
      "type": "string"
    },
    "operations": {
      "type": "boolean"
    },
    "cmmsIntegration": {
      "type": "boolean"
    },
    "isEuroEnvironment": {
      "type": "boolean"
    },
    "version": {
      "type": "string"
    },
    "ruleTool": {
      "type": "boolean"
    },
    "databaseVersion": {
      "type": "string"
    },
    "athenaPortalBaseUrl": {
      "type": "string"
    },
    "managedEvents": {
      "type": "boolean"
    },
    "coreVersion": {
      "type": "string"
    },
    "reportWizard": {
      "type": "boolean"
    },
    "databaseVersionString": {
      "type": "string"
    },
    "build": {
      "type": "string"
    },
    "isFederatedAuthentication": {
      "type": "boolean"
    }
  }
}
```

#### Example

**Request:**

```http
GET /api/appsettings/powertrack
Accept: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
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

