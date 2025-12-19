# `/api/subscription/{subscriptionId}`

[← Back to Index](../README.md)


### `/api/subscription/{subscriptionId}`

**Methods:** GET  
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
      "type": "null"
    },
    "subscriptions": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "key": {
            "type": "string"
          },
          "lastChanged": {
            "type": "null"
          },
          "name": {
            "type": "string"
          },
          "siteKey": {
            "type": "string"
          },
          "subscriberKey": {
            "type": "string"
          },
          "subscribeToKey": {
            "type": "string"
          },
          "frequency": {
            "type": "integer"
          },
          "delayNotifyUntilActiveDays": {
            "type": "integer"
          },
          "delayNotifyUnlessUrgent": {
            "type": "boolean"
          },
          "priorityLevel": {
            "type": "integer"
          },
          "sendEmail": {
            "type": "boolean"
          },
          "sendText": {
            "type": "boolean"
          },
          "email": {
            "type": "string"
          },
          "mode": {
            "type": "integer"
          },
          "sendReminders": {
            "type": "boolean"
          },
          "includeEventSummary": {
            "type": "boolean"
          },
          "showResolved": {
            "type": "boolean"
          },
          "subscribeToPath": {
            "type": "array",
            "items": {
              "type": "string"
            }
          }
        }
      }
    }
  }
}
```

#### Example

**Request:**

```http
GET /api/subscription/S51811?lastChanged=1900-01-01T00:00:00.000Z
Accept: application/json
Referer: https://www.alsoenergy.com
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
```

**Response:**

```json
{
    "key": "S51811",
    "lastChanged": null,
    "subscriptions": [
        {
            "key": "SB49738",
            "lastChanged": null,
            "name": "Distributed Solar Development",
            "siteKey": "",
            "subscriberKey": "U26704",
            "subscribeToKey": "C8458",
            "frequency": 1,
            "delayNotifyUntilActiveDays": 1,
            "delayNotifyUnlessUrgent": false,
            "priorityLevel": 8,
            "sendEmail": false,
            "sendText": true,
            "email": "",
            "mode": 1,
            "sendReminders": false,
            "includeEventSummary": false,
            "showResolved": true,
            "subscribeToPath": [
                "C1",
                "C2",
                "C8458"
            ]
        },
        {
            "key": "SB50401",
            "lastChanged": null,
            "name": "5.1_Asset Operation",
            "siteKey": "",
            "subscriberKey": "U52409",
            "subscribeToKey": "C16295",
            "frequency": 0,
            "delayNotifyUntilActiveDays": 1,
            "delayNotifyUnlessUrgent": false,
            "priorityLevel": 4,
            "sendEmail": true,
            "sendText": true,
            "email": "",
            "mode": 1,
            "sendReminders": false,
            "includeEventSummary": false,
            "showResolved": true,
            "subscribeToPath": [
                "C1",
                "C2",
                "C8458",
                "C16295"
            ]
        },
        {
            "key": "SB8540",
            "lastChanged": null,
            "name": "Distributed Solar Development",
            "siteKey": "",
            "subscriberKey": "U9967",
            "subscribeToKey": "C8458",
            "frequency": 0,
            "delayNotifyUntilActiveDays": 0,
            "delayNotifyUnlessUrgent": true,
            "priorityLevel": 4,
            "sendEmail": true,
            "sendText": false,
            "email": "",
            "mode": 1,
            "sendReminders": true,
            "includeEventSummary": false,
            "showResolved": true,
            "subscribeToPath": [
                "C1",
                "C2",
                "C8458"
            ]
        },
        {
            "key": "SB30430",
            "lastChanged": null,
            "name": "THD - Passaic, NJ - (Store #950)",
            "siteKey": "",
            "subscriberKey": "",
            "subscribeToKey": "S51811",
            "frequency": 0,
            "delayNotifyUntilActiveDays": 1,
            "delayNotifyUnlessUrgent": false,
            "priorityLevel": 4,
            "sendEmail": true,
            "sendText": false,
            "email": "monitoring@omnidian.com",
            "mode": 1,
            "sendReminders": true,
            "includeEventSummary": false,
            "showResolved": true,
            "subscribeToPath": [
                "C1",
                "C2",
                "C8458",
                "C16295",
                "C16297",
                "S51811"
            ]
        },
        {
            "key": "SB30204",
            "lastChanged": null,
            "name": "THD - Passaic, NJ - (Store #950)",
            "siteKey": "",
            "subscriberKey": "U29929",
            "subscribeToKey": "S51811",
            "frequency": 0,
            "delayNotifyUntilActiveDays": 0,
            "delayNotifyUnlessUrgent": true,
            "priorityLevel": 4,
            "sendEmail": true,
            "sendText": false,
            "email": "",
            "mode": 1,
            "sendReminders": true,
            "includeEventSummary": false,
            "showResolved": true,
            "subscribeToPath": [
                "C1",
                "C2",
                "C8458",
                "C16295",
                "C16297",
                "S51811"
            ]
        }
    ]
}
```
