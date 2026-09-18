<a id="top"></a>
# /api/netsuite/contactsupport

[← Back to Index](../logs.md)

**Methods:** POST  
**Status Codes:** 200  

## Table of Contents

- [Payload Structure](#payload-structure)
- [General](#general)
- [Example](#example)

## Payload Structure

```json
{
  "type": "object",
  "properties": {
    "caseTypeId": {
      "type": "number"
    },
    "caseTypeList": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string"
        },
        "value": {
          "type": "number"
        }
      }
    },
    "ccEmails": {
      "type": "string"
    },
    "dateCreated": {
      "type": "string"
    },
    "description": {
      "type": "string"
    },
    "displayStatusId": {
      "type": "number"
    },
    "externalUserId": {
      "type": "string"
    },
    "isCallIn": {
      "type": "boolean"
    },
    "isGeneralSupportIssue": {
      "type": "boolean"
    },
    "messageList": {
      "type": "object",
      "properties": {}
    },
    "name": {
      "type": "string"
    },
    "nsCaseId": {
      "type": "string"
    },
    "nsCaseNumber": {
      "type": "string"
    },
    "nsSiteId": {
      "type": "string"
    },
    "originId": {
      "type": "number"
    },
    "phoneNumber": {
      "type": "string"
    },
    "primaryEmail": {
      "type": "string"
    },
    "ptSiteId": {
      "type": "string"
    },
    "ptSiteName": {
      "type": "string"
    },
    "siteKey": {
      "type": "string"
    },
    "sourceApp": {
      "type": "number"
    },
    "statusId": {
      "type": "string"
    },
    "statusName": {
      "type": "string"
    },
    "subjectTitle": {
      "type": "string"
    },
    "userKey": {
      "type": "string"
    }
  }
}
```

[Return to top](#top)

## Example

**Request:**

```http
POST /api/netsuite/contactsupport
Content-Type: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: 3fefeb
referer: https://apps.alsoenergy.com/powertrack/S66821/analysis/chartbuilder?k=%7B~calculations~%3A%5B65536%5D%2C~measurements~%3A%5B32768%5D%7D&m=k&a=0&h=1*5&c=6&s=1&i=%7B~aggregationMode~%3A3%7D&v=2
```

**Payload:**

```json
{
  "caseTypeId": 248,
  "caseTypeList": [
    {
      "name": "Alerts",
      "value": 249
    },
    {
      "name": "Charting",
      "value": 248
    },
    {
      "name": "Data",
      "value": 251
    },
    {
      "name": "Hardware",
      "value": 76
    },
    {
      "name": "Hierarchy",
      "value": 247
    },
    {
      "name": "Ingest Issue",
      "value": 315
    },
    {
      "name": "Initial Site Setup",
      "value": 270
    },
    {
      "name": "Other",
      "value": 252
    },
    {
      "name": "Public Displays",
      "value": 250
    },
    {
      "name": "Reports/Invoices",
      "value": 246
    },
    {
      "name": "User Management",
      "value": 269
    }
  ],
  "ccEmails": "trevor.christman@stem.com",
  "dateCreated": "0001-01-01T00:00:00",
  "description": "With DC Power and Expected Power (DC) selected, only 4 of the 6 inverters are showing Expected values in the Table view; Invs 3 and 6 are missing columns.",
  "displayStatusId": 0,
  "externalUserId": "",
  "isCallIn": false,
  "isGeneralSupportIssue": false,
  "messageList": null,
  "name": "Josh Hamsa",
  "nsCaseId": "",
  "nsCaseNumber": "",
  "nsSiteId": "",
  "originId": 0,
  "phoneNumber": "8057677906",
  "primaryEmail": "josh.hamsa@dsdrenewables.com",
  "ptSiteId": "",
  "ptSiteName": "",
  "siteKey": "S66821",
  "sourceApp": 1,
  "statusId": "",
  "statusName": "",
  "subjectTitle": "Missing Expected Power Columns",
  "userKey": "U57916"
}
```

[Return to top](#top)

