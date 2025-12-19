# Endpoint 5

[← Back to Index](../README.md)


### `/api/auditlog`

**Methods:** POST  
**Status Codes:** 200  
**Call Count:** 2  

#### Response Structure

```json
{
  "type": "object",
  "properties": {
    "auditLogs": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {}
      }
    },
    "lastChanged": {
      "type": "unknown"
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
POST /api/auditlog?lastChanged=1900-01-01T00:00:00.000Z
Accept: application/json
Content-Type: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
```

**Response:**

```json
{
  "auditLogs": [
    {
      "authorKey": "U35696",
      "authorName": "Jim Oakley",
      "changeType": "Changed, Created",
      "changes": [],
      "changesAsString": "",
      "date": "2024-05-22T20:58:03Z",
      "key": "AE104401905",
      "kind": "change",
      "parentKey": "H504058",
      "text": ""
    },
    {
      "authorKey": "U35696",
      "authorName": "Jim Oakley",
      "changeType": "Changed",
      "changes": [],
      "changesAsString": "",
      "date": "2024-05-22T21:07:36Z",
      "key": "AE104402797",
      "kind": "change",
      "parentKey": "H504058",
      "text": ""
    },
    {
      "authorKey": "U35696",
      "authorName": "Jim Oakley",
      "changeType": "Created",
      "changes": [],
      "changesAsString": "",
      "date": "2024-05-22T21:12:48Z",
      "key": "AE104403108",
      "kind": "change",
      "parentKey": "H504058",
      "text": "Password created"
    },
    {
      "authorKey": "U35696",
      "authorName": "Jim Oakley",
      "changeType": "Changed",
      "changes": [],
      "changesAsString": "",
      "date": "2024-05-22T21:13:42Z",
      "key": "AE104403165",
      "kind": "change",
      "parentKey": "H504058",
      "text": ""
    },
    {
      "authorKey": "U36721",
      "authorName": "Tashi Nangchen",
      "changeType": "Changed",
      "changes": [],
      "changesAsString": "",
      "date": "2024-05-23T15:56:46Z",
      "key": "AE104463644",
      "kind": "change",
      "parentKey": "H504058",
      "text": ""
    },
    {
      "authorKey": "U10846",
      "authorName": "Brian Smith",
      "changeType": "Changed",
      "changes": [],
      "changesAsString": "",
      "date": "2024-06-04T17:55:31Z",
      "key": "AE105321693",
      "kind": "change",
      "parentKey": "H504058",
      "text": ""
    },
    {
      "authorKey": "U10846",
      "authorName": "Brian Smith",
      "changeType": "Changed",
      "changes": [],
      "changesAsString": "",
      "date": "2024-06-04T21:02:25Z",
      "key": "AE105336508",
      "kind": "change",
      "parentKey": "H504058",
      "text": ""
    },
    {
      "authorKey": "U10846",
      "authorName": "Brian Smith",
      "changeType": "Changed",
      "changes": [],
      "changesAsString": "",
      "date": "2024-06-10T14:57:27Z",
      "key": "AE105761137",
      "kind": "change",
      "parentKey": "H504058",
      "text": ""
    },
    {
      "authorKey": "U10846",
      "authorName": "Brian Smith",
      "changeType": "Changed",
      "changes": [],
      "changesAsString": "",
      "date": "2024-06-10T15:52:43Z",
      "key": "AE105766030",
      "kind": "change",
      "parentKey": "H504058",
      "text": ""
    },
    {
      "authorKey": "U10846",
      "authorName": "Brian Smith",
      "changeType": "Changed",
      "changes": [],
      "changesAsString": "",
      "date": "2024-06-11T16:43:08Z",
      "key": "AE105853889",
      "kind": "change",
      "parentKey": "H504058",
      "text": ""
    },
    {
      "authorKey": "U10846",
      "authorName": "Brian Smith",
      "changeType": "Changed",
      "changes": [],
      "changesAsString": "",
      "date": "2024-12-23T19:58:49Z",
      "key": "AE120734735",
      "kind": "change",
      "parentKey": "H504058",
      "text": ""
    },
    {
      "authorKey": "U27161",
      "authorName": "Stephen Toth",
      "changeType": "Changed",
      "changes": [],
      "changesAsString": "",
      "date": "2025-03-13T18:25:32Z",
      "key": "AE125772305",
      "kind": "change",
      "parentKey": "H504058",
      "text": ""
    }
  ],
  "key": "{\"ancestorKey\":\"H504058\",\"isRecursive\":false}",
  "lastChanged": null
}
```

