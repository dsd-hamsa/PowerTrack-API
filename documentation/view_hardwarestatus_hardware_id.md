# `/api/view/hardwarestatus/{hardware_id}`

[← Back to Index](../README.md)



**Methods:** GET  
**Status Codes:** 200  
**Call Count:** 4  

#### Response Structure

```json
{
  "type": "object",
  "properties": {
    "gatewayType": {
      "type": "integer"
    },
    "jwt": {
      "type": "string"
    },
    "outOfService": {
      "type": "boolean"
    },
    "parity": {
      "type": "string"
    },
    "registerSets": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {}
      }
    },
    "readOnly": {
      "type": "boolean"
    },
    "parentKey": {
      "type": "string"
    },
    "baseUrl": {
      "type": "string"
    },
    "outOfServiceUntil": {
      "type": "unknown"
    },
    "lastChanged": {
      "type": "string"
    },
    "unitId": {
      "type": "integer"
    },
    "lastAttempt": {
      "type": "string"
    },
    "lastSuccessImageUrl": {
      "type": "string"
    },
    "stopBits": {
      "type": "string"
    },
    "tcpPort": {
      "type": "unknown"
    },
    "controlUrl": {
      "type": "string"
    },
    "lastSuccess": {
      "type": "string"
    },
    "dataBits": {
      "type": "string"
    },
    "hardwareName": {
      "type": "string"
    },
    "outOfServiceNote": {
      "type": "string"
    },
    "easyConfigLink": {
      "type": "string"
    },
    "easyConfigBaseUrl": {
      "type": "string"
    },
    "isPMCE": {
      "type": "boolean"
    },
    "obviusNetworkInfo": {
      "type": "unknown"
    },
    "ipAddress": {
      "type": "integer"
    },
    "baudRate": {
      "type": "string"
    },
    "dashboardKey": {
      "type": "string"
    },
    "key": {
      "type": "string"
    },
    "isTcp": {
      "type": "boolean"
    },
    "devicePath": {
      "type": "string"
    },
    "timeZone": {
      "type": "string"
    },
    "lastCommunication": {
      "type": "integer"
    }
  }
}
```

#### Example

**Request:**

```http
GET /api/view/hardwarestatus/H70617?lastChanged=1900-01-01T00:00:00.000Z
Accept: application/json
Referer: https://www.alsoenergy.com
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
```

**Response:**

```json
{
  "baseUrl": "",
  "baudRate": "",
  "controlUrl": "",
  "dashboardKey": "",
  "dataBits": "",
  "devicePath": "",
  "easyConfigBaseUrl": "",
  "easyConfigLink": "",
  "gatewayType": 2,
  "hardwareName": "Weather Station (Module)",
  "ipAddress": 0,
  "isPMCE": false,
  "isTcp": false,
  "jwt": "",
  "key": "H70617",
  "lastAttempt": "2025-12-19T20:18:49Z",
  "lastChanged": "2017-10-17T15:42:09Z",
  "lastCommunication": 0,
  "lastSuccess": "2025-12-19T20:18:19Z",
  "lastSuccessImageUrl": "",
  "obviusNetworkInfo": null,
  "outOfService": false,
  "outOfServiceNote": "",
  "outOfServiceUntil": null,
  "parentKey": "S38292",
  "parity": "",
  "readOnly": false,
  "registerSets": [
    {
      "brokenRegisters": [],
      "name": "Data",
      "registers": [
        {
          "address": "0",
          "bustestCommand": "bustest adr=42 port=2 reg=0",
          "canModify": false,
          "hide": true,
          "identifier": "",
          "ipAddress": "42",
          "isIgnored": false,
          "isStored": false,
          "legacyDataName": "",
          "localizedName": "Wind Direction",
          "modpollCommand": "modpoll -m rtu -1 -a 42 -r 1 -t 4 -b 9600 -p none COM2",
          "name": "Wind Direction",
          "pingCommand": "",
          "register": "4090",
          "scale": "P2==\"W\" ? (this*360.0/4095) : 0",
          "standardAlertMessage": [],
          "standardDataName": "",
          "units": "\u00b0",
          "value": "0",
          "writeFunction": ""
        },
        {
          "address": "100",
          "bustestCommand": "bustest adr=42 port=2 reg=100",
          "canModify": false,
          "hide": true,
          "identifier": "",
          "ipAddress": "42",
          "isIgnored": false,
          "isStored": false,
          "legacyDataName": "",
          "localizedName": "Global Horizontal Irradiance (with Offset)",
          "modpollCommand": "modpoll -m rtu -1 -a 42 -r 100 -0 -t 4 -b 9600 -p none COM2",
          "name": "Sun (GHI)",
          "pingCommand": "",
          "register": "0",
          "scale": "SWAP ?  \r   (P1==\"A\" ? (2.5 * ('@1')/4095.0) * (1.0/10.091) * 5000 : \r    (P1==\"L\" ? (2.5 * ('@1')/4095.0) * (1000/(101*0.010)) : \r       (2.5 * ('@1')/4095.0)* (1000000.0/(K2 * 101))))\r: (P2==\"A\" ? (2.5 * ('@0')/4095.0) * (1.0/10.091) * 5000 : \r    (P2==\"L\" ? (2.5 * ('@0')/4095.0) * (1000/(101*0.010)) : \r       (2.5 * ('@0')/4095.0)* (1000000.0/(K2 * 101))))",
          "standardAlertMessage": [],
          "standardDataName": "",
          "units": "W/m\u00b2",
          "value": "2445.327",
          "writeFunction": ""
        },
        {
          "address": "1",
          "bustestCommand": "bustest adr=42 port=2 reg=1",
          "canModify": false,
          "hide": true,
          "identifier": "",
          "ipAddress": "42",
          "isIgnored": false,
          "isStored": false,
          "legacyDataName": "",
          "localizedName": "Plane of Array Irradiation (with Offset)",
          "modpollCommand": "modpoll -m rtu -1 -a 42 -r 1 -0 -t 4 -b 9600 -p none COM2",
          "name": "Sun (POA)",
          "pingCommand": "",
          "register": "4090",
          "scale": "SWAP ? \r(P2==\"A\" ? (2.5 * ('@0')/4095.0) * (1.0/10.091) * 5000 :\r(P2==\"L\" ? (2.5 * ('@0')/4095.0) * (1000/(101*0.010)) :\r   (2.5 * ('@0')/4095.0)* (1000000.0/(K1 * 101))))\r: (P1==\"A\" ? (2.5 * (this)/4095.0) * (1.0/10.091) * 5000 :\r(P1==\"L\" ? (2.5 * (this)/4095.0) * (1000/(101*0.010)) :\r   (2.5 * (this)/4095.0)* (1000000.0/(K1 * 101))))",
          "standardAlertMessage": [],
          "standardDataName": "",
          "units": "W/m\u00b2",
          "value": "2445.327",
          "writeFunction": ""
        },
        {
          "address": "2",
          "bustestCommand": "bustest adr=42 port=2 reg=2",
          "canModify": false,
          "hide": true,
          "identifier": "",
          "ipAddress": "42",
          "isIgnored": false,
          "isStored": false,
          "legacyDataName": "",
          "localizedName": "Ambient Air Temperature",
          "modpollCommand": "modpoll -m rtu -1 -a 42 -r 2 -0 -t 4 -b 9600 -p none COM2",
          "name": "Ambient temp",
          "pingCommand": "",
          "register": "0",
          "scale": "T1 ? (TR1==\"S\" ? this*140.4/4096-20.2 :\r(TR1==\"A\" ? ((this*1000000.0/27000*10/4095-273.15)*1.8+32) :\rTR1==\"W\" ? (this)*225.0/4096-40 :\rthis*180.0/4096-4))\r: 0",
          "standardAlertMessage": [],
          "standardDataName": "",
          "units": "\u00b0F",
          "value": "-20.2",
          "writeFunction": ""
        },
        {
          "address": "101",
          "bustestCommand": "bustest adr=42 port=2 reg=101",
          "canModify": false,
          "hide": true,
          "identifier": "",
          "ipAddress": "42",
          "isIgnored": false,
          "isStored": false,
          "legacyDataName": "",
          "localizedName": "Module temperature 2",
          "modpollCommand": "modpoll -m rtu -1 -a 42 -r 101 -0 -t 4 -b 9600 -p none COM2",
          "name": "Module temp 2",
          "pingCommand": "",
          "register": "0",
          "scale": "T1 ? 0 : \r(TR2==\"S\" ? ('@2')*205.2/4096-52.6 :\rTR2==\"P\" ? ('@2')*126.0/4096+32 :\rTR2==\"W\" ? ('@2')*225.0/4096-40 :\rTR2==\"HH\" ? ('@2')* 270.0/4096+30.2 :\r    ('@2')*180.0/4096-4)",
          "standardAlertMessage": [],
          "standardDataName": "",
          "units": "\u00b0F",
          "value": "0",
          "writeFunction": ""
        },
        {
          "address": "3",
          "bustestCommand": "bustest adr=42 port=2 reg=3",
          "canModify": false,
          "hide": false,
          "identifier": "",
          "ipAddress": "42",
          "isIgnored": false,
          "isStored": true,
          "legacyDataName": "Temp1",
          "localizedName": "Module Temperature",
          "modpollCommand": "modpoll -m rtu -1 -a 42 -r 3 -0 -t 4 -b 9600 -p none COM2",
          "name": "Module temp",
          "pingCommand": "",
          "register": "1902",
          "scale": "TR2==\"S\" ? (this)*205.2/4096-52.6 : \rTR2==\"P\" ? (this)*126.0/4096+32 :\rTR2==\"W\" ? (this)*225.0/4096-40 :\rTR2==\"HH\" ? (this)* 270.0/4096+30.2 :\r(this)*180.0/4096-4",
          "standardAlertMessage": [],
          "standardDataName": "Temp_Module",
          "units": "\u00b0F",
          "value": "42.686",
          "writeFunction": ""
        },
        {
          "address": "25",
          "bustestCommand": "bustest adr=42 port=2 reg=25",
          "canModify": false,
          "hide": true,
          "identifier": "",
          "ipAddress": "42",
          "isIgnored": false,
          "isStored": false,
          "legacyDataName": "",
          "localizedName": "Wind Speed",
          "modpollCommand": "modpoll -m rtu -1 -a 42 -r 25 -0 -t 4 -b 9600 -p none COM2",
          "name": "Wind speed",
          "pingCommand": "",
          "register": "0",
          "scale": "Int(2.25*this/60)",
          "standardAlertMessage": [],
          "standardDataName": "",
          "units": "mph",
          "value": "0",
          "writeFunction": ""
        },
        {
          "address": "26",
          "bustestCommand": "bustest adr=42 port=2 reg=26",
          "canModify": false,
          "hide": false,
          "identifier": "",
          "ipAddress": "42",
          "isIgnored": false,
          "isStored": false,
          "legacyDataName": "",
          "localizedName": "CabHigh",
          "modpollCommand": "modpoll -m rtu -1 -a 42 -r 26 -0 -t 4 -b 9600 -p none COM2",
          "name": "CabHigh",
          "pingCommand": "",
          "register": "2696",
          "scale": "",
          "standardAlertMessage": [],
          "standardDataName": "",
          "units": "",
          "value": "2696",
          "writeFunction": ""
        },
        {
          "address": "27",
          "bustestCommand": "bustest adr=42 port=2 reg=27",
          "canModify": false,
          "hide": false,
          "identifier": "",
          "ipAddress": "42",
          "isIgnored": false,
          "isStored": false,
          "legacyDataName": "",
          "localizedName": "CabLow",
          "modpollCommand": "modpoll -m rtu -1 -a 42 -r 27 -0 -t 4 -b 9600 -p none COM2",
          "name": "CabLow",
          "pingCommand": "",
          "register": "5119",
          "scale": "",
          "standardAlertMessage": [],
          "standardDataName": "",
          "units": "",
          "value": "5119",
          "writeFunction": ""
        },
        {
          "address": "103",
          "bustestCommand": "bustest adr=42 port=2 reg=103 function=0",
          "canModify": false,
          "hide": false,
          "identifier": "",
          "ipAddress": "42",
          "isIgnored": false,
          "isStored": true,
          "legacyDataName": "CabF",
          "localizedName": "Cabinet Temperature",
          "modpollCommand": "Invalid function: 0",
          "name": "CabF",
          "pingCommand": "",
          "register": "0",
          "scale": "Int(421.0 - (751.0*CabHigh/CabLow))",
          "standardAlertMessage": [],
          "standardDataName": "Temp_Cabinet",
          "units": "\u00b0F",
          "value": "77",
          "writeFunction": ""
        },
        {
          "address": "12",
          "bustestCommand": "bustest adr=42 port=2 reg=12",
          "canModify": true,
          "hide": false,
          "identifier": "",
          "ipAddress": "42",
          "isIgnored": false,
          "isStored": false,
          "legacyDataName": "",
          "localizedName": "Operating Status",
          "modpollCommand": "modpoll -m rtu -1 -a 42 -r 12 -0 -t 4 -b 9600 -p none COM2",
          "name": "Status",
          "pingCommand": "",
          "register": "7",
          "scale": "",
          "standardAlertMessage": [],
          "standardDataName": "",
          "units": "",
          "value": "0000.0000.0000.0111",
          "writeFunction": "write6"
        },
        {
          "address": "13",
          "bustestCommand": "bustest adr=42 port=2 reg=13",
          "canModify": false,
          "hide": false,
          "identifier": "",
          "ipAddress": "42",
          "isIgnored": false,
          "isStored": false,
          "legacyDataName": "",
          "localizedName": "Firmware version",
          "modpollCommand": "modpoll -m rtu -1 -a 42 -r 13 -0 -t 4 -b 9600 -p none COM2",
          "name": "Firmware Version",
          "pingCommand": "",
          "register": "115",
          "scale": "",
          "standardAlertMessage": [],
          "standardDataName": "",
          "units": "",
          "value": "115",
          "writeFunction": ""
        },
        {
          "address": "105",
          "bustestCommand": "bustest adr=42 port=2 reg=105 function=0",
          "canModify": false,
          "hide": false,
          "identifier": "",
          "ipAddress": "42",
          "isIgnored": false,
          "isStored": false,
          "legacyDataName": "",
          "localizedName": "P2&P6 Status (Ambient or Module Temp 2)",
          "modpollCommand": "Invalid function: 0",
          "name": "P2&P6 Status (Ambient or Module Temp 2)",
          "pingCommand": "",
          "register": "0",
          "scale": "'@12' & (1<<10) ? \"Temp Sensor Not Connected\" : \"OK\"",
          "standardAlertMessage": [],
          "standardDataName": "",
          "units": "",
          "value": "OK",
          "writeFunction": ""
        },
        {
          "address": "106",
          "bustestCommand": "bustest adr=42 port=2 reg=106 function=0",
          "canModify": false,
          "hide": false,
          "identifier": "",
          "ipAddress": "42",
          "isIgnored": false,
          "isStored": false,
          "legacyDataName": "",
          "localizedName": "P1&P4 Status (Module Temp 1)",
          "modpollCommand": "Invalid function: 0",
          "name": "P1&P4 Status (Module Temp 1)",
          "pingCommand": "",
          "register": "0",
          "scale": "'@12' & (1<<11) ? \"Temp Sensor Not Connected\" : \"OK\"",
          "standardAlertMessage": [],
          "standardDataName": "",
          "units": "",
          "value": "OK",
          "writeFunction": ""
        },
        {
          "address": "201",
          "bustestCommand": "bustest adr=42 port=2 reg=201 function=0",
          "canModify": false,
          "hide": false,
          "identifier": "",
          "ipAddress": "42",
          "isIgnored": false,
          "isStored": false,
          "legacyDataName": "MaxSun",
          "localizedName": "Max Sun (POA)",
          "modpollCommand": "Invalid function: 0",
          "name": "Max Sun (POA)",
          "pingCommand": "",
          "register": "0",
          "scale": "SWAP ? \r(P2==\"A\" ? 2.5 * (1.0/10.091) * 5000 :\r(P2==\"L\" ? 2.5 * (1000/(101*0.010)) : \r    2.5 * (1000000.0/(K1 * 101))))\r: (P1==\"A\" ? 2.5 * (1.0/10.091) * 5000 :\r    (P1==\"L\" ? 2.5 * (1000/(101*0.010)) :\r   2.5 * (1000000.0/(K1 * 101))))",
          "standardAlertMessage": [],
          "standardDataName": "",
          "units": "W/m\u00b2",
          "value": "2448.316",
          "writeFunction": ""
        },
        {
          "address": "202",
          "bustestCommand": "bustest adr=42 port=2 reg=202 function=0",
          "canModify": false,
          "hide": false,
          "identifier": "",
          "ipAddress": "42",
          "isIgnored": false,
          "isStored": false,
          "legacyDataName": "MaxSun2",
          "localizedName": "Max Sun (GHI)",
          "modpollCommand": "Invalid function: 0",
          "name": "Max Sun (GHI)",
          "pingCommand": "",
          "register": "0",
          "scale": "SWAP ?  \r   (P1==\"A\" ? (2.5) * (1.0/10.091) * 5000 : \r    (P1==\"L\" ? (2.5) * (1000/(101*0.010)) : \r       (2.5)* (1000000.0/(K2 * 101))))\r: (P2==\"A\" ? (2.5) * (1.0/10.091) * 5000 : \r    (P2==\"L\" ? (2.5) * (1000/(101*0.010)) : \r       (2.5)* (1000000.0/(K2 * 101))))",
          "standardAlertMessage": [],
          "standardDataName": "",
          "units": "W/m\u00b2",
          "value": "2448.316",
          "writeFunction": ""
        }
      ]
    }
  ],
  "stopBits": "",
  "tcpPort": null,
  "timeZone": "US/Eastern",
  "unitId": 0
}
```

