# `/api/edit/hardware/gateway/info/{hardwareId}`

[← Back to Index](../README.md)


### `/api/edit/hardware/gateway/info/{hardwareId}`

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
    "parentKey": {
      "type": "string"
    },
    "ts": {
      "type": "string"
    },
    "description": {
      "type": "string"
    },
    "assetId": {
      "type": "string"
    },
    "hardwareId": {
      "type": "string"
    },
    "instance": {
      "type": "integer"
    },
    "functionId": {
      "type": "string"
    },
    "functionCode": {
      "type": "integer"
    },
    "hardwareStatus": {
      "type": "integer"
    },
    "capacityKw": {
      "type": "number"
    },
    "sort": {
      "type": "integer"
    },
    "gatewayKey": {
      "type": "string"
    },
    "gatewayId": {
      "type": "string"
    },
    "gatewayFwVersion": {
      "type": "string"
    },
    "gatewayScriptCount": {
      "type": "string"
    },
    "gatewayType": {
      "type": "integer"
    },
    "serialNum": {
      "type": "string"
    },
    "modelNum": {
      "type": "string"
    },
    "installDate": {
      "type": "string"
    },
    "driverId": {
      "type": "integer"
    },
    "driverDescription": {
      "type": "string"
    },
    "driverFlags": {
      "type": "integer"
    },
    "driverName": {
      "type": "string"
    },
    "driverNotes": {
      "type": "string"
    },
    "validatedByKey": {
      "type": "string"
    },
    "validatedDateTime": {
      "type": "string"
    },
    "debug": {
      "type": "boolean"
    },
    "outOfService": {
      "type": "boolean"
    },
    "outOfServiceNote": {
      "type": "string"
    },
    "outOfServiceUntil": {
      "type": "string"
    },
    "reportExclude": {
      "type": "boolean"
    },
    "limitedCommunication": {
      "type": "boolean"
    },
    "primary": {
      "type": "boolean"
    },
    "address": {
      "type": "string"
    },
    "unitId": {
      "type": "integer"
    },
    "isTcp": {
      "type": "boolean"
    },
    "port": {
      "type": "integer"
    },
    "serialMode": {
      "type": "integer"
    },
    "baud": {
      "type": "string"
    },
    "newNote": {
      "type": "string"
    },
    "dashboardKey": {
      "type": "string"
    },
    "dcRating": {
      "type": "number"
    },
    "defaultChart": {
      "type": "integer"
    },
    "chartSectionCode": {
      "type": "integer"
    },
    "conflictNames": {
      "type": "null"
    },
    "isConflictAcknowledged": {
      "type": "boolean"
    },
    "settings": {
      "type": "array"
    },
    "deviceRegisters": {
      "type": "array"
    },
    "additionalRegisters": {
      "type": "array"
    },
    "decreaseDifference": {
      "type": "integer"
    },
    "autoCorrectDecrease": {
      "type": "boolean"
    },
    "fixedEnergyOffset": {
      "type": "number"
    },
    "increaseDifference": {
      "type": "integer"
    },
    "autoCorrectIncrease": {
      "type": "boolean"
    },
    "isThermal": {
      "type": "boolean"
    },
    "reverse": {
      "type": "boolean"
    },
    "registerOffsets": {
      "type": "array"
    },
    "driverRegisters": {
      "type": "array"
    },
    "virtualRegisters": {
      "type": "array"
    },
    "tags": {
      "type": "object"
    },
    "sampleRate": {
      "type": "number"
    },
    "uploadRate": {
      "type": "number"
    },
    "oneMinuteData": {
      "type": "boolean"
    },
    "thread": {
      "type": "integer"
    },
    "alsoHardwareId": {
      "type": "integer"
    },
    "alsoSiteId": {
      "type": "integer"
    },
    "siteHasInverterGroups": {
      "type": "boolean"
    },
    "groupAllowed": {
      "type": "array"
    },
    "groupKey": {
      "type": "string"
    },
    "outputAllowed": {
      "type": "array"
    },
    "outputKey": {
      "type": "string"
    },
    "weatherStationKey1": {
      "type": "string"
    },
    "weatherStationKey2": {
      "type": "string"
    },
    "configs": {
      "type": "array"
    },
    "array": {
      "type": "null"
    },
    "eGauge": {
      "type": "null"
    },
    "gateway": {
      "type": "object"
    },
    "kiosk": {
      "type": "null"
    },
    "meter": {
      "type": "null"
    },
    "pvConfig": {
      "type": "null"
    },
    "thermal": {
      "type": "null"
    },
    "turbine": {
      "type": "null"
    },
    "virtualWeather": {
      "type": "null"
    },
    "weather": {
      "type": "null"
    },
    "zone": {
      "type": "null"
    },
    "commonDC": {
      "type": "boolean"
    },
    "commonDCAllMatch": {
      "type": "boolean"
    },
    "locusId": {
      "type": "string"
    },
    "syncToLocus": {
      "type": "boolean"
    },
    "taskKey": {
      "type": "string"
    },
    "readOnly": {
      "type": "boolean"
    },
    "isReportable": {
      "type": "boolean"
    },
    "latitude": {
      "type": "number"
    },
    "longitude": {
      "type": "number"
    },
    "hash": {
      "type": "string"
    },
    "hasCapacity": {
      "type": "boolean"
    },
    "inverterKw": {
      "type": "number"
    },
    "siteDcShare": {
      "type": "number"
    },
    "pullData": {
      "type": "boolean"
    }
  }
}
```

#### Example

**Request:**

```http
GET /api/edit/hardware/gateway/info/H541350
Accept: application/json
Referer: https://www.alsoenergy.com
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
```

**Response:**

```json
{
  "key": "H541350",
  "parentKey": "S70513",
  "ts": "2025-04-03T16:29:00Z",
  "description": "PowerLogger 1000",
  "assetId": "",
  "hardwareId": "C44418_S70513_GW0",
  "instance": 0,
  "functionId": "GW0",
  "functionCode": 10,
  "hardwareStatus": 1,
  "capacityKw": 625.0,
  "sort": 2,
  "gatewayKey": "H541350",
  "gatewayId": "000CC68E608F",
  "gatewayFwVersion": "1.16.3.7",
  "gatewayScriptCount": "",
  "gatewayType": 7,
  "serialNum": "",
  "modelNum": "ALSOENERGY POWERLOGGER 1000",
  "installDate": "2025-01-09",
  "driverId": 325,
  "driverDescription": "Interactive Data Logger",
  "driverFlags": 18497,
  "driverName": "PowerLogger 1000",
  "driverNotes": "",
  "validatedByKey": "",
  "validatedDateTime": "0001-01-01T00:00:00",
  "debug": false,
  "outOfService": false,
  "outOfServiceNote": "",
  "outOfServiceUntil": "2025-12-01T19:50:27.0167289Z",
  "reportExclude": false,
  "limitedCommunication": false,
  "primary": false,
  "address": "0",
  "unitId": 0,
  "isTcp": false,
  "port": 0,
  "serialMode": 0,
  "baud": "",
  "newNote": "",
  "dashboardKey": "",
  "dcRating": 0.0,
  "defaultChart": 0,
  "chartSectionCode": 0,
  "conflictNames": null,
  "isConflictAcknowledged": false,
  "settings": [
    {
      "originalValue": "N/A",
      "index": 0,
      "name": "dev:portMode",
      "value": "N/A",
      "type": 0
    },
    {
      "originalValue": "200",
      "index": 1,
      "name": "dev:rate",
      "value": "200",
      "type": 0
    },
    {
      "originalValue": "GW0",
      "index": 2,
      "name": "ShortName",
      "value": "GW0",
      "type": 0
    }
  ],
  "deviceRegisters": [
    {
      "index": 0,
      "name": "Firmware Build",
      "localizedName": "Firmware Build",
      "dataName": "fw",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": false,
      "isArchived": false,
      "units": "",
      "dataNameDetail": null
    },
    {
      "index": 1,
      "name": "LAN IPv4 Address",
      "localizedName": "LAN IPv4 Address",
      "dataName": "localip",
      "standardDataName": "",
      "isIgnored": false,
      "isRaw": false,
      "isArchived": true,
      "units": "",
      "dataNameDetail": null
    }
  ],
  "additionalRegisters": [],
  "decreaseDifference": 100,
  "autoCorrectDecrease": false,
  "fixedEnergyOffset": 0.0,
  "increaseDifference": -1,
  "autoCorrectIncrease": false,
  "isThermal": false,
  "reverse": false,
  "registerOffsets": [],
  "driverRegisters": [],
  "virtualRegisters": [],
  "tags": {
    "key": "{\"ancestorKey\":\"H541350\",\"isRecursive\":false,\"types\":[\"attribute\",\"keyword\",\"note\"]}",
    "lastChanged": null,
    "attributes": [],
    "keywords": [],
    "notes": [],
    "powerDisplays": []
  },
  "sampleRate": 0.0,
  "uploadRate": 0.0,
  "oneMinuteData": false,
  "thread": 0,
  "alsoHardwareId": 0,
  "alsoSiteId": 0,
  "siteHasInverterGroups": false,
  "groupAllowed": [],
  "groupKey": "",
  "outputAllowed": [],
  "outputKey": "",
  "weatherStationKey1": "",
  "weatherStationKey2": "",
  "configs": [
    "Gateway"
  ],
  "array": null,
  "eGauge": null,
  "gateway": {
    "gatewayType": 0,
    "deviceGatewayType": 7,
    "connectionType": 2,
    "ipAddress": "192.168.13.151",
    "mask": "255.255.255.0",
    "gatewayIp": "192.168.13.1",
    "dns1": "8.8.8.8",
    "dns2": "8.8.4.4",
    "firmware": {
      "gatewayId": "000CC68E608F",
      "client": "maki.exe;1.16.3.7|protobuf-net.dll;2.0.0.668\rModel:, Version:, Build:, ExtIP:172.24.96.118\rModel:, Version:, Build:, ExtIP:172.24.96.118",
      "server": "maki.exe;1.16.3.7|protobuf-net.dll;2.0.0.668",
      "enable": true,
      "debug": false,
      "lastUpdate": "4 minutes",
      "lastBoot": "14 d 7:24 (h:m)",
      "ip1": "192.168.13.151",
      "ip2": "",
      "gatewayParams": []
    },
    "commandAccessLevel": 1
  },
  "kiosk": null,
  "meter": null,
  "pvConfig": null,
  "thermal": null,
  "turbine": null,
  "virtualWeather": null,
  "weather": null,
  "zone": null,
  "commonDC": false,
  "commonDCAllMatch": true,
  "locusId": "",
  "syncToLocus": false,
  "taskKey": "",
  "readOnly": false,
  "isReportable": false,
  "latitude": 41.0931543,
  "longitude": -73.4488108,
  "hash": "",
  "hasCapacity": true,
  "inverterKw": 787.0,
  "siteDcShare": 0.0,
  "pullData": false
}
```
