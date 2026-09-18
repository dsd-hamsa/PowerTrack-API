<a id="top"></a>
# /api/edit/query/new/dataitem

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
    "newIndex": {
      "type": "number"
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
    "autoGenLine": {
      "type": "boolean"
    },
    "chartField": {
      "type": "number"
    },
    "codeName": {
      "type": "string"
    },
    "columnName": {
      "type": "string"
    },
    "custom": {
      "type": "string"
    },
    "customUnits": {
      "type": "string"
    },
    "degree": {
      "type": "number"
    },
    "dynamicLineType": {
      "type": "number"
    },
    "fillColor": {
      "type": "string"
    },
    "fillDiameter": {
      "type": "number"
    },
    "fitMode": {
      "type": "number"
    },
    "format": {
      "type": "string"
    },
    "function": {
      "type": "number"
    },
    "hardwareKey": {
      "type": "string"
    },
    "index": {
      "type": "number"
    },
    "isDisabled": {
      "type": "boolean"
    },
    "isOverview": {
      "type": "boolean"
    },
    "layer": {
      "type": "number"
    },
    "line": {
      "type": "number"
    },
    "lineColor": {
      "type": "string"
    },
    "lineWidth": {
      "type": "number"
    },
    "linkedUnits": {
      "type": "number"
    },
    "name": {
      "type": "string"
    },
    "nameOverride": {
      "type": "boolean"
    },
    "outputBin": {
      "type": "number"
    },
    "resultName": {
      "type": "string"
    },
    "siteKey": {
      "type": "string"
    },
    "source": {
      "type": "string"
    },
    "title": {
      "type": "string"
    },
    "units": {
      "type": "number"
    },
    "useStandardAlertMessage": {
      "type": "boolean"
    },
    "yAxis": {
      "type": "number"
    },
    "yMax": {
      "type": "object",
      "properties": {}
    },
    "yMin": {
      "type": "number"
    },
    "yZero": {
      "type": "boolean"
    }
  }
}
```

[Return to top](#top)

## Example

**Request:**

```http
POST /api/edit/query/new/dataitem
Accept: application/json
Content-Type: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: 3fefeb
referer: https://apps.alsoenergy.com/powertrack/S66821/analysis/chartbuilder/new?request=fromchart
```

**Payload:**

```json
{
  "newIndex": 12,
  "siteKey": ""
}
```

**Response:**

```json
{
  "autoGenLine": true,
  "chartField": 0,
  "codeName": "",
  "columnName": "",
  "custom": "",
  "customUnits": "",
  "degree": 0,
  "dynamicLineType": 15,
  "fillColor": "",
  "fillDiameter": 0,
  "fitMode": 0,
  "format": "",
  "function": 0,
  "hardwareKey": "",
  "index": 12,
  "isDisabled": false,
  "isOverview": false,
  "layer": 0,
  "line": 0,
  "lineColor": "",
  "lineWidth": 1,
  "linkedUnits": 0,
  "name": "",
  "nameOverride": false,
  "outputBin": -1,
  "resultName": "",
  "siteKey": "",
  "source": "",
  "title": "",
  "units": 0,
  "useStandardAlertMessage": false,
  "yAxis": 0,
  "yMax": null,
  "yMin": 0,
  "yZero": false
}
```

[Return to top](#top)

