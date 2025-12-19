# `/api/binding/batch`

[← Back to Index](../README.md)



**Methods:** POST  
**Status Codes:** 200  
**Call Count:** 2  

#### Response Structure

```json
{
  "type": "array",
  "items": {
    "type": "object",
    "properties": {}
  }
}
```

#### Example

**Request:**

```http
POST /api/binding/batch
Accept: application/json
Referer: https://www.alsoenergy.com
Content-Type: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
```

**Response:**

```json
[
  {
    "item": {
      "key": "{\"mode\":0,\"source\":\"hardwareRegister\",\"parentKey\":\"S40158\",\"key\":\"H104176\",\"field\":\"Inverter Work Mode Description\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": null,
      "value": ""
    },
    "key": "{\"mode\":0,\"source\":\"hardwareRegister\",\"parentKey\":\"S40158\",\"key\":\"H104176\",\"field\":\"Inverter Work Mode Description\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":0,\"source\":\"hardwareInfo\",\"parentKey\":\"S38292\",\"key\":\"H70638\",\"field\":\"name\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:10Z",
      "value": "INV-12 CP4 - (23kW)"
    },
    "key": "{\"mode\":0,\"source\":\"hardwareInfo\",\"parentKey\":\"S38292\",\"key\":\"H70638\",\"field\":\"name\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70638\",\"field\":\"OnOff\",\"writeValue\":\"21845\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:10Z",
      "value": {
        "address": "4096",
        "bustestCommand": "bustest adr=12 port=1 reg=4096",
        "canModify": true,
        "hide": false,
        "identifier": "",
        "ipAddress": "12",
        "isIgnored": false,
        "isStored": true,
        "legacyDataName": "OnOff",
        "localizedName": "OnOff",
        "modpollCommand": "modpoll -m rtu -1 -a 12 -r 4096 -0 -t 4 -b 9600 -p none COM1",
        "name": "OnOff",
        "pingCommand": "",
        "register": "43690",
        "scale": "",
        "standardAlertMessage": [],
        "standardDataName": "",
        "units": "",
        "value": "0xAAAA",
        "writeFunction": "write6"
      }
    },
    "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70638\",\"field\":\"OnOff\",\"writeValue\":\"21845\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70638\",\"field\":\"OnOff\",\"writeValue\":\"43690\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:10Z",
      "value": {
        "address": "4096",
        "bustestCommand": "bustest adr=12 port=1 reg=4096",
        "canModify": true,
        "hide": false,
        "identifier": "",
        "ipAddress": "12",
        "isIgnored": false,
        "isStored": true,
        "legacyDataName": "OnOff",
        "localizedName": "OnOff",
        "modpollCommand": "modpoll -m rtu -1 -a 12 -r 4096 -0 -t 4 -b 9600 -p none COM1",
        "name": "OnOff",
        "pingCommand": "",
        "register": "43690",
        "scale": "",
        "standardAlertMessage": [],
        "standardDataName": "",
        "units": "",
        "value": "0xAAAA",
        "writeFunction": "write6"
      }
    },
    "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70638\",\"field\":\"OnOff\",\"writeValue\":\"43690\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":0,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70632\",\"field\":\"Inverter Work Mode Description\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:10Z",
      "value": {
        "address": "996",
        "bustestCommand": "bustest adr=6 port=1 reg=996 function=0",
        "canModify": false,
        "hide": false,
        "identifier": "",
        "ipAddress": "6",
        "isIgnored": false,
        "isStored": false,
        "legacyDataName": "",
        "localizedName": "Inverter Work Mode Description",
        "modpollCommand": "Invalid function: 0",
        "name": "Inverter Work Mode Description",
        "pingCommand": "",
        "register": "0",
        "scale": "if ('@47' == 0x0800)\r    return \"Derate\";\rif ('@47' == 0x1000)\r    return \"Running\";\rif ('@47' == 0x2000)\r    return \"Standby\";\rif ('@47' == 0x4000)\r    return \"Check\";\rif ('@47' == 0x8000);\r    return \"Fault\";",
        "standardAlertMessage": [],
        "standardDataName": "",
        "units": "",
        "value": "Running",
        "writeFunction": ""
      }
    },
    "key": "{\"mode\":0,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70632\",\"field\":\"Inverter Work Mode Description\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70632\",\"field\":\"OnOff\",\"writeValue\":\"21845\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:10Z",
      "value": {
        "address": "4096",
        "bustestCommand": "bustest adr=6 port=1 reg=4096",
        "canModify": true,
        "hide": false,
        "identifier": "",
        "ipAddress": "6",
        "isIgnored": false,
        "isStored": true,
        "legacyDataName": "OnOff",
        "localizedName": "OnOff",
        "modpollCommand": "modpoll -m rtu -1 -a 6 -r 4096 -0 -t 4 -b 9600 -p none COM1",
        "name": "OnOff",
        "pingCommand": "",
        "register": "43690",
        "scale": "",
        "standardAlertMessage": [],
        "standardDataName": "",
        "units": "",
        "value": "0xAAAA",
        "writeFunction": "write6"
      }
    },
    "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70632\",\"field\":\"OnOff\",\"writeValue\":\"21845\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70632\",\"field\":\"OnOff\",\"writeValue\":\"43690\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:10Z",
      "value": {
        "address": "4096",
        "bustestCommand": "bustest adr=6 port=1 reg=4096",
        "canModify": true,
        "hide": false,
        "identifier": "",
        "ipAddress": "6",
        "isIgnored": false,
        "isStored": true,
        "legacyDataName": "OnOff",
        "localizedName": "OnOff",
        "modpollCommand": "modpoll -m rtu -1 -a 6 -r 4096 -0 -t 4 -b 9600 -p none COM1",
        "name": "OnOff",
        "pingCommand": "",
        "register": "43690",
        "scale": "",
        "standardAlertMessage": [],
        "standardDataName": "",
        "units": "",
        "value": "0xAAAA",
        "writeFunction": "write6"
      }
    },
    "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70632\",\"field\":\"OnOff\",\"writeValue\":\"43690\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":0,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70631\",\"field\":\"Inverter Work Mode Description\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:10Z",
      "value": {
        "address": "996",
        "bustestCommand": "bustest adr=5 port=1 reg=996 function=0",
        "canModify": false,
        "hide": false,
        "identifier": "",
        "ipAddress": "5",
        "isIgnored": false,
        "isStored": false,
        "legacyDataName": "",
        "localizedName": "Inverter Work Mode Description",
        "modpollCommand": "Invalid function: 0",
        "name": "Inverter Work Mode Description",
        "pingCommand": "",
        "register": "0",
        "scale": "if ('@47' == 0x0800)\r    return \"Derate\";\rif ('@47' == 0x1000)\r    return \"Running\";\rif ('@47' == 0x2000)\r    return \"Standby\";\rif ('@47' == 0x4000)\r    return \"Check\";\rif ('@47' == 0x8000);\r    return \"Fault\";",
        "standardAlertMessage": [],
        "standardDataName": "",
        "units": "",
        "value": "Running",
        "writeFunction": ""
      }
    },
    "key": "{\"mode\":0,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70631\",\"field\":\"Inverter Work Mode Description\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":0,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70630\",\"field\":\"Inverter Work Mode Description\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:10Z",
      "value": {
        "address": "996",
        "bustestCommand": "bustest adr=4 port=1 reg=996 function=0",
        "canModify": false,
        "hide": false,
        "identifier": "",
        "ipAddress": "4",
        "isIgnored": false,
        "isStored": false,
        "legacyDataName": "",
        "localizedName": "Inverter Work Mode Description",
        "modpollCommand": "Invalid function: 0",
        "name": "Inverter Work Mode Description",
        "pingCommand": "",
        "register": "0",
        "scale": "if ('@47' == 0x0800)\r    return \"Derate\";\rif ('@47' == 0x1000)\r    return \"Running\";\rif ('@47' == 0x2000)\r    return \"Standby\";\rif ('@47' == 0x4000)\r    return \"Check\";\rif ('@47' == 0x8000);\r    return \"Fault\";",
        "standardAlertMessage": [],
        "standardDataName": "",
        "units": "",
        "value": "Running",
        "writeFunction": ""
      }
    },
    "key": "{\"mode\":0,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70630\",\"field\":\"Inverter Work Mode Description\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":0,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70629\",\"field\":\"Inverter Work Mode Description\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:10Z",
      "value": {
        "address": "996",
        "bustestCommand": "bustest adr=3 port=1 reg=996 function=0",
        "canModify": false,
        "hide": false,
        "identifier": "",
        "ipAddress": "3",
        "isIgnored": false,
        "isStored": false,
        "legacyDataName": "",
        "localizedName": "Inverter Work Mode Description",
        "modpollCommand": "Invalid function: 0",
        "name": "Inverter Work Mode Description",
        "pingCommand": "",
        "register": "0",
        "scale": "if ('@47' == 0x0800)\r    return \"Derate\";\rif ('@47' == 0x1000)\r    return \"Running\";\rif ('@47' == 0x2000)\r    return \"Standby\";\rif ('@47' == 0x4000)\r    return \"Check\";\rif ('@47' == 0x8000);\r    return \"Fault\";",
        "standardAlertMessage": [],
        "standardDataName": "",
        "units": "",
        "value": "Running",
        "writeFunction": ""
      }
    },
    "key": "{\"mode\":0,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70629\",\"field\":\"Inverter Work Mode Description\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":0,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70628\",\"field\":\"Inverter Work Mode Description\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:10Z",
      "value": {
        "address": "996",
        "bustestCommand": "bustest adr=2 port=1 reg=996 function=0",
        "canModify": false,
        "hide": false,
        "identifier": "",
        "ipAddress": "2",
        "isIgnored": false,
        "isStored": false,
        "legacyDataName": "",
        "localizedName": "Inverter Work Mode Description",
        "modpollCommand": "Invalid function: 0",
        "name": "Inverter Work Mode Description",
        "pingCommand": "",
        "register": "0",
        "scale": "if ('@47' == 0x0800)\r    return \"Derate\";\rif ('@47' == 0x1000)\r    return \"Running\";\rif ('@47' == 0x2000)\r    return \"Standby\";\rif ('@47' == 0x4000)\r    return \"Check\";\rif ('@47' == 0x8000);\r    return \"Fault\";",
        "standardAlertMessage": [],
        "standardDataName": "",
        "units": "",
        "value": "Running",
        "writeFunction": ""
      }
    },
    "key": "{\"mode\":0,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70628\",\"field\":\"Inverter Work Mode Description\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":0,\"source\":\"hardwareInfo\",\"parentKey\":\"S38292\",\"key\":\"H70631\",\"field\":\"name\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:10Z",
      "value": "INV-05 CP2 - (23kW)"
    },
    "key": "{\"mode\":0,\"source\":\"hardwareInfo\",\"parentKey\":\"S38292\",\"key\":\"H70631\",\"field\":\"name\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":0,\"source\":\"hardwareInfo\",\"parentKey\":\"S38292\",\"key\":\"H70630\",\"field\":\"name\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:10Z",
      "value": "INV-04 CP2 - (23kW)"
    },
    "key": "{\"mode\":0,\"source\":\"hardwareInfo\",\"parentKey\":\"S38292\",\"key\":\"H70630\",\"field\":\"name\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":0,\"source\":\"hardwareInfo\",\"parentKey\":\"S38292\",\"key\":\"H70628\",\"field\":\"name\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:10Z",
      "value": "INV-02 CP1 - (36kW)"
    },
    "key": "{\"mode\":0,\"source\":\"hardwareInfo\",\"parentKey\":\"S38292\",\"key\":\"H70628\",\"field\":\"name\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":0,\"source\":\"hardwareInfo\",\"parentKey\":\"S38292\",\"key\":\"H70629\",\"field\":\"name\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:10Z",
      "value": "INV-03 CP1 - (36kW)"
    },
    "key": "{\"mode\":0,\"source\":\"hardwareInfo\",\"parentKey\":\"S38292\",\"key\":\"H70629\",\"field\":\"name\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70631\",\"field\":\"OnOff\",\"writeValue\":\"21845\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:10Z",
      "value": {
        "address": "4096",
        "bustestCommand": "bustest adr=5 port=1 reg=4096",
        "canModify": true,
        "hide": false,
        "identifier": "",
        "ipAddress": "5",
        "isIgnored": false,
        "isStored": true,
        "legacyDataName": "OnOff",
        "localizedName": "OnOff",
        "modpollCommand": "modpoll -m rtu -1 -a 5 -r 4096 -0 -t 4 -b 9600 -p none COM1",
        "name": "OnOff",
        "pingCommand": "",
        "register": "43690",
        "scale": "",
        "standardAlertMessage": [],
        "standardDataName": "",
        "units": "",
        "value": "0xAAAA",
        "writeFunction": "write6"
      }
    },
    "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70631\",\"field\":\"OnOff\",\"writeValue\":\"21845\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70630\",\"field\":\"OnOff\",\"writeValue\":\"21845\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:10Z",
      "value": {
        "address": "4096",
        "bustestCommand": "bustest adr=4 port=1 reg=4096",
        "canModify": true,
        "hide": false,
        "identifier": "",
        "ipAddress": "4",
        "isIgnored": false,
        "isStored": true,
        "legacyDataName": "OnOff",
        "localizedName": "OnOff",
        "modpollCommand": "modpoll -m rtu -1 -a 4 -r 4096 -0 -t 4 -b 9600 -p none COM1",
        "name": "OnOff",
        "pingCommand": "",
        "register": "43690",
        "scale": "",
        "standardAlertMessage": [],
        "standardDataName": "",
        "units": "",
        "value": "0xAAAA",
        "writeFunction": "write6"
      }
    },
    "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70630\",\"field\":\"OnOff\",\"writeValue\":\"21845\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70631\",\"field\":\"OnOff\",\"writeValue\":\"43690\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:10Z",
      "value": {
        "address": "4096",
        "bustestCommand": "bustest adr=5 port=1 reg=4096",
        "canModify": true,
        "hide": false,
        "identifier": "",
        "ipAddress": "5",
        "isIgnored": false,
        "isStored": true,
        "legacyDataName": "OnOff",
        "localizedName": "OnOff",
        "modpollCommand": "modpoll -m rtu -1 -a 5 -r 4096 -0 -t 4 -b 9600 -p none COM1",
        "name": "OnOff",
        "pingCommand": "",
        "register": "43690",
        "scale": "",
        "standardAlertMessage": [],
        "standardDataName": "",
        "units": "",
        "value": "0xAAAA",
        "writeFunction": "write6"
      }
    },
    "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70631\",\"field\":\"OnOff\",\"writeValue\":\"43690\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70630\",\"field\":\"OnOff\",\"writeValue\":\"43690\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:10Z",
      "value": {
        "address": "4096",
        "bustestCommand": "bustest adr=4 port=1 reg=4096",
        "canModify": true,
        "hide": false,
        "identifier": "",
        "ipAddress": "4",
        "isIgnored": false,
        "isStored": true,
        "legacyDataName": "OnOff",
        "localizedName": "OnOff",
        "modpollCommand": "modpoll -m rtu -1 -a 4 -r 4096 -0 -t 4 -b 9600 -p none COM1",
        "name": "OnOff",
        "pingCommand": "",
        "register": "43690",
        "scale": "",
        "standardAlertMessage": [],
        "standardDataName": "",
        "units": "",
        "value": "0xAAAA",
        "writeFunction": "write6"
      }
    },
    "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70630\",\"field\":\"OnOff\",\"writeValue\":\"43690\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70629\",\"field\":\"OnOff\",\"writeValue\":\"43690\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:10Z",
      "value": {
        "address": "4096",
        "bustestCommand": "bustest adr=3 port=1 reg=4096",
        "canModify": true,
        "hide": false,
        "identifier": "",
        "ipAddress": "3",
        "isIgnored": false,
        "isStored": true,
        "legacyDataName": "OnOff",
        "localizedName": "OnOff",
        "modpollCommand": "modpoll -m rtu -1 -a 3 -r 4096 -0 -t 4 -b 9600 -p none COM1",
        "name": "OnOff",
        "pingCommand": "",
        "register": "43690",
        "scale": "",
        "standardAlertMessage": [],
        "standardDataName": "",
        "units": "",
        "value": "0xAAAA",
        "writeFunction": "write6"
      }
    },
    "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70629\",\"field\":\"OnOff\",\"writeValue\":\"43690\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70629\",\"field\":\"OnOff\",\"writeValue\":\"21845\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:10Z",
      "value": {
        "address": "4096",
        "bustestCommand": "bustest adr=3 port=1 reg=4096",
        "canModify": true,
        "hide": false,
        "identifier": "",
        "ipAddress": "3",
        "isIgnored": false,
        "isStored": true,
        "legacyDataName": "OnOff",
        "localizedName": "OnOff",
        "modpollCommand": "modpoll -m rtu -1 -a 3 -r 4096 -0 -t 4 -b 9600 -p none COM1",
        "name": "OnOff",
        "pingCommand": "",
        "register": "43690",
        "scale": "",
        "standardAlertMessage": [],
        "standardDataName": "",
        "units": "",
        "value": "0xAAAA",
        "writeFunction": "write6"
      }
    },
    "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70629\",\"field\":\"OnOff\",\"writeValue\":\"21845\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":0,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70636\",\"field\":\"Inverter Work Mode Description\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:10Z",
      "value": {
        "address": "996",
        "bustestCommand": "bustest adr=10 port=1 reg=996 function=0",
        "canModify": false,
        "hide": false,
        "identifier": "",
        "ipAddress": "10",
        "isIgnored": false,
        "isStored": false,
        "legacyDataName": "",
        "localizedName": "Inverter Work Mode Description",
        "modpollCommand": "Invalid function: 0",
        "name": "Inverter Work Mode Description",
        "pingCommand": "",
        "register": "0",
        "scale": "if ('@47' == 0x0800)\r    return \"Derate\";\rif ('@47' == 0x1000)\r    return \"Running\";\rif ('@47' == 0x2000)\r    return \"Standby\";\rif ('@47' == 0x4000)\r    return \"Check\";\rif ('@47' == 0x8000);\r    return \"Fault\";",
        "standardAlertMessage": [],
        "standardDataName": "",
        "units": "",
        "value": "Running",
        "writeFunction": ""
      }
    },
    "key": "{\"mode\":0,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70636\",\"field\":\"Inverter Work Mode Description\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":0,\"source\":\"hardwareInfo\",\"parentKey\":\"S38292\",\"key\":\"H70636\",\"field\":\"name\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:10Z",
      "value": "INV-10 CP3 - (23kW)"
    },
    "key": "{\"mode\":0,\"source\":\"hardwareInfo\",\"parentKey\":\"S38292\",\"key\":\"H70636\",\"field\":\"name\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70636\",\"field\":\"OnOff\",\"writeValue\":\"21845\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:10Z",
      "value": {
        "address": "4096",
        "bustestCommand": "bustest adr=10 port=1 reg=4096",
        "canModify": true,
        "hide": false,
        "identifier": "",
        "ipAddress": "10",
        "isIgnored": false,
        "isStored": true,
        "legacyDataName": "OnOff",
        "localizedName": "OnOff",
        "modpollCommand": "modpoll -m rtu -1 -a 10 -r 4096 -0 -t 4 -b 9600 -p none COM1",
        "name": "OnOff",
        "pingCommand": "",
        "register": "43690",
        "scale": "",
        "standardAlertMessage": [],
        "standardDataName": "",
        "units": "",
        "value": "0xAAAA",
        "writeFunction": "write6"
      }
    },
    "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70636\",\"field\":\"OnOff\",\"writeValue\":\"21845\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70636\",\"field\":\"OnOff\",\"writeValue\":\"43690\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:10Z",
      "value": {
        "address": "4096",
        "bustestCommand": "bustest adr=10 port=1 reg=4096",
        "canModify": true,
        "hide": false,
        "identifier": "",
        "ipAddress": "10",
        "isIgnored": false,
        "isStored": true,
        "legacyDataName": "OnOff",
        "localizedName": "OnOff",
        "modpollCommand": "modpoll -m rtu -1 -a 10 -r 4096 -0 -t 4 -b 9600 -p none COM1",
        "name": "OnOff",
        "pingCommand": "",
        "register": "43690",
        "scale": "",
        "standardAlertMessage": [],
        "standardDataName": "",
        "units": "",
        "value": "0xAAAA",
        "writeFunction": "write6"
      }
    },
    "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70636\",\"field\":\"OnOff\",\"writeValue\":\"43690\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":0,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70634\",\"field\":\"Inverter Work Mode Description\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:10Z",
      "value": {
        "address": "996",
        "bustestCommand": "bustest adr=8 port=1 reg=996 function=0",
        "canModify": false,
        "hide": false,
        "identifier": "",
        "ipAddress": "8",
        "isIgnored": false,
        "isStored": false,
        "legacyDataName": "",
        "localizedName": "Inverter Work Mode Description",
        "modpollCommand": "Invalid function: 0",
        "name": "Inverter Work Mode Description",
        "pingCommand": "",
        "register": "0",
        "scale": "if ('@47' == 0x0800)\r    return \"Derate\";\rif ('@47' == 0x1000)\r    return \"Running\";\rif ('@47' == 0x2000)\r    return \"Standby\";\rif ('@47' == 0x4000)\r    return \"Check\";\rif ('@47' == 0x8000);\r    return \"Fault\";",
        "standardAlertMessage": [],
        "standardDataName": "",
        "units": "",
        "value": "Running",
        "writeFunction": ""
      }
    },
    "key": "{\"mode\":0,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70634\",\"field\":\"Inverter Work Mode Description\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":0,\"source\":\"hardwareInfo\",\"parentKey\":\"S38292\",\"key\":\"H70634\",\"field\":\"name\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:10Z",
      "value": "INV-08 CP3 - (23kW)"
    },
    "key": "{\"mode\":0,\"source\":\"hardwareInfo\",\"parentKey\":\"S38292\",\"key\":\"H70634\",\"field\":\"name\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70634\",\"field\":\"OnOff\",\"writeValue\":\"21845\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:10Z",
      "value": {
        "address": "4096",
        "bustestCommand": "bustest adr=8 port=1 reg=4096",
        "canModify": true,
        "hide": false,
        "identifier": "",
        "ipAddress": "8",
        "isIgnored": false,
        "isStored": true,
        "legacyDataName": "OnOff",
        "localizedName": "OnOff",
        "modpollCommand": "modpoll -m rtu -1 -a 8 -r 4096 -0 -t 4 -b 9600 -p none COM1",
        "name": "OnOff",
        "pingCommand": "",
        "register": "43690",
        "scale": "",
        "standardAlertMessage": [],
        "standardDataName": "",
        "units": "",
        "value": "0xAAAA",
        "writeFunction": "write6"
      }
    },
    "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70634\",\"field\":\"OnOff\",\"writeValue\":\"21845\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70634\",\"field\":\"OnOff\",\"writeValue\":\"43690\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:10Z",
      "value": {
        "address": "4096",
        "bustestCommand": "bustest adr=8 port=1 reg=4096",
        "canModify": true,
        "hide": false,
        "identifier": "",
        "ipAddress": "8",
        "isIgnored": false,
        "isStored": true,
        "legacyDataName": "OnOff",
        "localizedName": "OnOff",
        "modpollCommand": "modpoll -m rtu -1 -a 8 -r 4096 -0 -t 4 -b 9600 -p none COM1",
        "name": "OnOff",
        "pingCommand": "",
        "register": "43690",
        "scale": "",
        "standardAlertMessage": [],
        "standardDataName": "",
        "units": "",
        "value": "0xAAAA",
        "writeFunction": "write6"
      }
    },
    "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70634\",\"field\":\"OnOff\",\"writeValue\":\"43690\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":0,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70627\",\"field\":\"Inverter Work Mode Description\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:10Z",
      "value": {
        "address": "996",
        "bustestCommand": "bustest adr=1 port=1 reg=996 function=0",
        "canModify": false,
        "hide": false,
        "identifier": "",
        "ipAddress": "1",
        "isIgnored": false,
        "isStored": false,
        "legacyDataName": "",
        "localizedName": "Inverter Work Mode Description",
        "modpollCommand": "Invalid function: 0",
        "name": "Inverter Work Mode Description",
        "pingCommand": "",
        "register": "0",
        "scale": "if ('@47' == 0x0800)\r    return \"Derate\";\rif ('@47' == 0x1000)\r    return \"Running\";\rif ('@47' == 0x2000)\r    return \"Standby\";\rif ('@47' == 0x4000)\r    return \"Check\";\rif ('@47' == 0x8000);\r    return \"Fault\";",
        "standardAlertMessage": [],
        "standardDataName": "",
        "units": "",
        "value": "Running",
        "writeFunction": ""
      }
    },
    "key": "{\"mode\":0,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70627\",\"field\":\"Inverter Work Mode Description\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":3,\"source\":\"hardwareInfo\",\"parentKey\":\"S38292\",\"key\":\"H70627\",\"field\":\"name\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:10Z",
      "value": "INV-01 CP1 - (23kW)"
    },
    "key": "{\"mode\":3,\"source\":\"hardwareInfo\",\"parentKey\":\"S38292\",\"key\":\"H70627\",\"field\":\"name\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":0,\"source\":\"hardwareInfo\",\"parentKey\":\"S38292\",\"key\":\"H70646\",\"field\":\"name\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:10Z",
      "value": "INV-20 CP6 - (23kW)"
    },
    "key": "{\"mode\":0,\"source\":\"hardwareInfo\",\"parentKey\":\"S38292\",\"key\":\"H70646\",\"field\":\"name\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":0,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70646\",\"field\":\"Inverter Work Mode Description\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:10Z",
      "value": {
        "address": "996",
        "bustestCommand": "bustest adr=20 port=2 reg=996 function=0",
        "canModify": false,
        "hide": false,
        "identifier": "",
        "ipAddress": "20",
        "isIgnored": false,
        "isStored": false,
        "legacyDataName": "",
        "localizedName": "Inverter Work Mode Description",
        "modpollCommand": "Invalid function: 0",
        "name": "Inverter Work Mode Description",
        "pingCommand": "",
        "register": "0",
        "scale": "if ('@47' == 0x0800)\r    return \"Derate\";\rif ('@47' == 0x1000)\r    return \"Running\";\rif ('@47' == 0x2000)\r    return \"Standby\";\rif ('@47' == 0x4000)\r    return \"Check\";\rif ('@47' == 0x8000);\r    return \"Fault\";",
        "standardAlertMessage": [],
        "standardDataName": "",
        "units": "",
        "value": "Running",
        "writeFunction": ""
      }
    },
    "key": "{\"mode\":0,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70646\",\"field\":\"Inverter Work Mode Description\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70645\",\"field\":\"OnOff\",\"writeValue\":\"21845\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:10Z",
      "value": {
        "address": "4096",
        "bustestCommand": "bustest adr=19 port=2 reg=4096",
        "canModify": true,
        "hide": false,
        "identifier": "",
        "ipAddress": "19",
        "isIgnored": false,
        "isStored": true,
        "legacyDataName": "OnOff",
        "localizedName": "OnOff",
        "modpollCommand": "modpoll -m rtu -1 -a 19 -r 4096 -0 -t 4 -b 9600 -p none COM2",
        "name": "OnOff",
        "pingCommand": "",
        "register": "43690",
        "scale": "",
        "standardAlertMessage": [],
        "standardDataName": "",
        "units": "",
        "value": "0xAAAA",
        "writeFunction": "write6"
      }
    },
    "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70645\",\"field\":\"OnOff\",\"writeValue\":\"21845\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70645\",\"field\":\"OnOff\",\"writeValue\":\"43690\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:10Z",
      "value": {
        "address": "4096",
        "bustestCommand": "bustest adr=19 port=2 reg=4096",
        "canModify": true,
        "hide": false,
        "identifier": "",
        "ipAddress": "19",
        "isIgnored": false,
        "isStored": true,
        "legacyDataName": "OnOff",
        "localizedName": "OnOff",
        "modpollCommand": "modpoll -m rtu -1 -a 19 -r 4096 -0 -t 4 -b 9600 -p none COM2",
        "name": "OnOff",
        "pingCommand": "",
        "register": "43690",
        "scale": "",
        "standardAlertMessage": [],
        "standardDataName": "",
        "units": "",
        "value": "0xAAAA",
        "writeFunction": "write6"
      }
    },
    "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70645\",\"field\":\"OnOff\",\"writeValue\":\"43690\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":0,\"source\":\"hardwareInfo\",\"parentKey\":\"S38292\",\"key\":\"H70645\",\"field\":\"name\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:10Z",
      "value": "INV-19 CP5 - (36kW)"
    },
    "key": "{\"mode\":0,\"source\":\"hardwareInfo\",\"parentKey\":\"S38292\",\"key\":\"H70645\",\"field\":\"name\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":0,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70645\",\"field\":\"Inverter Work Mode Description\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:10Z",
      "value": {
        "address": "996",
        "bustestCommand": "bustest adr=19 port=2 reg=996 function=0",
        "canModify": false,
        "hide": false,
        "identifier": "",
        "ipAddress": "19",
        "isIgnored": false,
        "isStored": false,
        "legacyDataName": "",
        "localizedName": "Inverter Work Mode Description",
        "modpollCommand": "Invalid function: 0",
        "name": "Inverter Work Mode Description",
        "pingCommand": "",
        "register": "0",
        "scale": "if ('@47' == 0x0800)\r    return \"Derate\";\rif ('@47' == 0x1000)\r    return \"Running\";\rif ('@47' == 0x2000)\r    return \"Standby\";\rif ('@47' == 0x4000)\r    return \"Check\";\rif ('@47' == 0x8000);\r    return \"Fault\";",
        "standardAlertMessage": [],
        "standardDataName": "",
        "units": "",
        "value": "Running",
        "writeFunction": ""
      }
    },
    "key": "{\"mode\":0,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70645\",\"field\":\"Inverter Work Mode Description\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70639\",\"field\":\"OnOff\",\"writeValue\":\"43690\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:10Z",
      "value": {
        "address": "4096",
        "bustestCommand": "bustest adr=13 port=1 reg=4096",
        "canModify": true,
        "hide": false,
        "identifier": "",
        "ipAddress": "13",
        "isIgnored": false,
        "isStored": true,
        "legacyDataName": "OnOff",
        "localizedName": "OnOff",
        "modpollCommand": "modpoll -m rtu -1 -a 13 -r 4096 -0 -t 4 -b 9600 -p none COM1",
        "name": "OnOff",
        "pingCommand": "",
        "register": "43690",
        "scale": "",
        "standardAlertMessage": [],
        "standardDataName": "",
        "units": "",
        "value": "0xAAAA",
        "writeFunction": "write6"
      }
    },
    "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70639\",\"field\":\"OnOff\",\"writeValue\":\"43690\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":2,\"source\":\"hardwareInfo\",\"parentKey\":\"S38292\",\"key\":\"H70639\",\"field\":\"\",\"writeValue\":\"21845\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:10Z",
      "value": ""
    },
    "key": "{\"mode\":2,\"source\":\"hardwareInfo\",\"parentKey\":\"S38292\",\"key\":\"H70639\",\"field\":\"\",\"writeValue\":\"21845\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":0,\"source\":\"hardwareInfo\",\"parentKey\":\"S38292\",\"key\":\"H70639\",\"field\":\"name\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:10Z",
      "value": "INV-13 CP4 - (23kW)"
    },
    "key": "{\"mode\":0,\"source\":\"hardwareInfo\",\"parentKey\":\"S38292\",\"key\":\"H70639\",\"field\":\"name\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":0,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70638\",\"field\":\"Inverter Work Mode Description\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:10Z",
      "value": {
        "address": "996",
        "bustestCommand": "bustest adr=12 port=1 reg=996 function=0",
        "canModify": false,
        "hide": false,
        "identifier": "",
        "ipAddress": "12",
        "isIgnored": false,
        "isStored": false,
        "legacyDataName": "",
        "localizedName": "Inverter Work Mode Description",
        "modpollCommand": "Invalid function: 0",
        "name": "Inverter Work Mode Description",
        "pingCommand": "",
        "register": "0",
        "scale": "if ('@47' == 0x0800)\r    return \"Derate\";\rif ('@47' == 0x1000)\r    return \"Running\";\rif ('@47' == 0x2000)\r    return \"Standby\";\rif ('@47' == 0x4000)\r    return \"Check\";\rif ('@47' == 0x8000);\r    return \"Fault\";",
        "standardAlertMessage": [],
        "standardDataName": "",
        "units": "",
        "value": "Running",
        "writeFunction": ""
      }
    },
    "key": "{\"mode\":0,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70638\",\"field\":\"Inverter Work Mode Description\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70633\",\"field\":\"OnOff\",\"writeValue\":\"43690\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:10Z",
      "value": {
        "address": "4096",
        "bustestCommand": "bustest adr=7 port=1 reg=4096",
        "canModify": true,
        "hide": false,
        "identifier": "",
        "ipAddress": "7",
        "isIgnored": false,
        "isStored": true,
        "legacyDataName": "OnOff",
        "localizedName": "OnOff",
        "modpollCommand": "modpoll -m rtu -1 -a 7 -r 4096 -0 -t 4 -b 9600 -p none COM1",
        "name": "OnOff",
        "pingCommand": "",
        "register": "43690",
        "scale": "",
        "standardAlertMessage": [],
        "standardDataName": "",
        "units": "",
        "value": "0xAAAA",
        "writeFunction": "write6"
      }
    },
    "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70633\",\"field\":\"OnOff\",\"writeValue\":\"43690\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70633\",\"field\":\"OnOff\",\"writeValue\":\"21845\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:10Z",
      "value": {
        "address": "4096",
        "bustestCommand": "bustest adr=7 port=1 reg=4096",
        "canModify": true,
        "hide": false,
        "identifier": "",
        "ipAddress": "7",
        "isIgnored": false,
        "isStored": true,
        "legacyDataName": "OnOff",
        "localizedName": "OnOff",
        "modpollCommand": "modpoll -m rtu -1 -a 7 -r 4096 -0 -t 4 -b 9600 -p none COM1",
        "name": "OnOff",
        "pingCommand": "",
        "register": "43690",
        "scale": "",
        "standardAlertMessage": [],
        "standardDataName": "",
        "units": "",
        "value": "0xAAAA",
        "writeFunction": "write6"
      }
    },
    "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70633\",\"field\":\"OnOff\",\"writeValue\":\"21845\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":0,\"source\":\"hardwareInfo\",\"parentKey\":\"S38292\",\"key\":\"H70633\",\"field\":\"name\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:10Z",
      "value": "INV-07 CP2 - (36kW)"
    },
    "key": "{\"mode\":0,\"source\":\"hardwareInfo\",\"parentKey\":\"S38292\",\"key\":\"H70633\",\"field\":\"name\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":0,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70633\",\"field\":\"Inverter Work Mode Description\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:10Z",
      "value": {
        "address": "996",
        "bustestCommand": "bustest adr=7 port=1 reg=996 function=0",
        "canModify": false,
        "hide": false,
        "identifier": "",
        "ipAddress": "7",
        "isIgnored": false,
        "isStored": false,
        "legacyDataName": "",
        "localizedName": "Inverter Work Mode Description",
        "modpollCommand": "Invalid function: 0",
        "name": "Inverter Work Mode Description",
        "pingCommand": "",
        "register": "0",
        "scale": "if ('@47' == 0x0800)\r    return \"Derate\";\rif ('@47' == 0x1000)\r    return \"Running\";\rif ('@47' == 0x2000)\r    return \"Standby\";\rif ('@47' == 0x4000)\r    return \"Check\";\rif ('@47' == 0x8000);\r    return \"Fault\";",
        "standardAlertMessage": [],
        "standardDataName": "",
        "units": "",
        "value": "Running",
        "writeFunction": ""
      }
    },
    "key": "{\"mode\":0,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70633\",\"field\":\"Inverter Work Mode Description\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70637\",\"field\":\"OnOff\",\"writeValue\":\"43690\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:10Z",
      "value": {
        "address": "4096",
        "bustestCommand": "bustest adr=11 port=1 reg=4096",
        "canModify": true,
        "hide": false,
        "identifier": "",
        "ipAddress": "11",
        "isIgnored": false,
        "isStored": true,
        "legacyDataName": "OnOff",
        "localizedName": "OnOff",
        "modpollCommand": "modpoll -m rtu -1 -a 11 -r 4096 -0 -t 4 -b 9600 -p none COM1",
        "name": "OnOff",
        "pingCommand": "",
        "register": "43690",
        "scale": "",
        "standardAlertMessage": [],
        "standardDataName": "",
        "units": "",
        "value": "0xAAAA",
        "writeFunction": "write6"
      }
    },
    "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70637\",\"field\":\"OnOff\",\"writeValue\":\"43690\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70637\",\"field\":\"OnOff\",\"writeValue\":\"21845\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:10Z",
      "value": {
        "address": "4096",
        "bustestCommand": "bustest adr=11 port=1 reg=4096",
        "canModify": true,
        "hide": false,
        "identifier": "",
        "ipAddress": "11",
        "isIgnored": false,
        "isStored": true,
        "legacyDataName": "OnOff",
        "localizedName": "OnOff",
        "modpollCommand": "modpoll -m rtu -1 -a 11 -r 4096 -0 -t 4 -b 9600 -p none COM1",
        "name": "OnOff",
        "pingCommand": "",
        "register": "43690",
        "scale": "",
        "standardAlertMessage": [],
        "standardDataName": "",
        "units": "",
        "value": "0xAAAA",
        "writeFunction": "write6"
      }
    },
    "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70637\",\"field\":\"OnOff\",\"writeValue\":\"21845\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":0,\"source\":\"hardwareInfo\",\"parentKey\":\"S38292\",\"key\":\"H70637\",\"field\":\"name\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:10Z",
      "value": "INV-11 CP3 - (36kW)"
    },
    "key": "{\"mode\":0,\"source\":\"hardwareInfo\",\"parentKey\":\"S38292\",\"key\":\"H70637\",\"field\":\"name\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":0,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70637\",\"field\":\"Inverter Work Mode Description\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:10Z",
      "value": {
        "address": "996",
        "bustestCommand": "bustest adr=11 port=1 reg=996 function=0",
        "canModify": false,
        "hide": false,
        "identifier": "",
        "ipAddress": "11",
        "isIgnored": false,
        "isStored": false,
        "legacyDataName": "",
        "localizedName": "Inverter Work Mode Description",
        "modpollCommand": "Invalid function: 0",
        "name": "Inverter Work Mode Description",
        "pingCommand": "",
        "register": "0",
        "scale": "if ('@47' == 0x0800)\r    return \"Derate\";\rif ('@47' == 0x1000)\r    return \"Running\";\rif ('@47' == 0x2000)\r    return \"Standby\";\rif ('@47' == 0x4000)\r    return \"Check\";\rif ('@47' == 0x8000);\r    return \"Fault\";",
        "standardAlertMessage": [],
        "standardDataName": "",
        "units": "",
        "value": "Running",
        "writeFunction": ""
      }
    },
    "key": "{\"mode\":0,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70637\",\"field\":\"Inverter Work Mode Description\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70647\",\"field\":\"OnOff\",\"writeValue\":\"43690\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:10Z",
      "value": {
        "address": "4096",
        "bustestCommand": "bustest adr=21 port=2 reg=4096",
        "canModify": true,
        "hide": false,
        "identifier": "",
        "ipAddress": "21",
        "isIgnored": false,
        "isStored": true,
        "legacyDataName": "OnOff",
        "localizedName": "OnOff",
        "modpollCommand": "modpoll -m rtu -1 -a 21 -r 4096 -0 -t 4 -b 9600 -p none COM2",
        "name": "OnOff",
        "pingCommand": "",
        "register": "43690",
        "scale": "",
        "standardAlertMessage": [],
        "standardDataName": "",
        "units": "",
        "value": "0xAAAA",
        "writeFunction": "write6"
      }
    },
    "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70647\",\"field\":\"OnOff\",\"writeValue\":\"43690\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70647\",\"field\":\"OnOff\",\"writeValue\":\"21845\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:10Z",
      "value": {
        "address": "4096",
        "bustestCommand": "bustest adr=21 port=2 reg=4096",
        "canModify": true,
        "hide": false,
        "identifier": "",
        "ipAddress": "21",
        "isIgnored": false,
        "isStored": true,
        "legacyDataName": "OnOff",
        "localizedName": "OnOff",
        "modpollCommand": "modpoll -m rtu -1 -a 21 -r 4096 -0 -t 4 -b 9600 -p none COM2",
        "name": "OnOff",
        "pingCommand": "",
        "register": "43690",
        "scale": "",
        "standardAlertMessage": [],
        "standardDataName": "",
        "units": "",
        "value": "0xAAAA",
        "writeFunction": "write6"
      }
    },
    "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70647\",\"field\":\"OnOff\",\"writeValue\":\"21845\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":0,\"source\":\"hardwareInfo\",\"parentKey\":\"S38292\",\"key\":\"H70647\",\"field\":\"name\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:10Z",
      "value": "INV-21 CP6 - (23kW)"
    },
    "key": "{\"mode\":0,\"source\":\"hardwareInfo\",\"parentKey\":\"S38292\",\"key\":\"H70647\",\"field\":\"name\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":0,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70647\",\"field\":\"Inverter Work Mode Description\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:10Z",
      "value": {
        "address": "996",
        "bustestCommand": "bustest adr=21 port=2 reg=996 function=0",
        "canModify": false,
        "hide": false,
        "identifier": "",
        "ipAddress": "21",
        "isIgnored": false,
        "isStored": false,
        "legacyDataName": "",
        "localizedName": "Inverter Work Mode Description",
        "modpollCommand": "Invalid function: 0",
        "name": "Inverter Work Mode Description",
        "pingCommand": "",
        "register": "0",
        "scale": "if ('@47' == 0x0800)\r    return \"Derate\";\rif ('@47' == 0x1000)\r    return \"Running\";\rif ('@47' == 0x2000)\r    return \"Standby\";\rif ('@47' == 0x4000)\r    return \"Check\";\rif ('@47' == 0x8000);\r    return \"Fault\";",
        "standardAlertMessage": [],
        "standardDataName": "",
        "units": "",
        "value": "Running",
        "writeFunction": ""
      }
    },
    "key": "{\"mode\":0,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70647\",\"field\":\"Inverter Work Mode Description\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":0,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70635\",\"field\":\"Inverter Work Mode Description\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:10Z",
      "value": {
        "address": "996",
        "bustestCommand": "bustest adr=9 port=1 reg=996 function=0",
        "canModify": false,
        "hide": false,
        "identifier": "",
        "ipAddress": "9",
        "isIgnored": false,
        "isStored": false,
        "legacyDataName": "",
        "localizedName": "Inverter Work Mode Description",
        "modpollCommand": "Invalid function: 0",
        "name": "Inverter Work Mode Description",
        "pingCommand": "",
        "register": "0",
        "scale": "if ('@47' == 0x0800)\r    return \"Derate\";\rif ('@47' == 0x1000)\r    return \"Running\";\rif ('@47' == 0x2000)\r    return \"Standby\";\rif ('@47' == 0x4000)\r    return \"Check\";\rif ('@47' == 0x8000);\r    return \"Fault\";",
        "standardAlertMessage": [],
        "standardDataName": "",
        "units": "",
        "value": "Running",
        "writeFunction": ""
      }
    },
    "key": "{\"mode\":0,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70635\",\"field\":\"Inverter Work Mode Description\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":0,\"source\":\"hardwareInfo\",\"parentKey\":\"S38292\",\"key\":\"H70635\",\"field\":\"name\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:10Z",
      "value": "INV-09 CP3 - (23kW)"
    },
    "key": "{\"mode\":0,\"source\":\"hardwareInfo\",\"parentKey\":\"S38292\",\"key\":\"H70635\",\"field\":\"name\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70635\",\"field\":\"OnOff\",\"writeValue\":\"21845\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:10Z",
      "value": {
        "address": "4096",
        "bustestCommand": "bustest adr=9 port=1 reg=4096",
        "canModify": true,
        "hide": false,
        "identifier": "",
        "ipAddress": "9",
        "isIgnored": false,
        "isStored": true,
        "legacyDataName": "OnOff",
        "localizedName": "OnOff",
        "modpollCommand": "modpoll -m rtu -1 -a 9 -r 4096 -0 -t 4 -b 9600 -p none COM1",
        "name": "OnOff",
        "pingCommand": "",
        "register": "43690",
        "scale": "",
        "standardAlertMessage": [],
        "standardDataName": "",
        "units": "",
        "value": "0xAAAA",
        "writeFunction": "write6"
      }
    },
    "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70635\",\"field\":\"OnOff\",\"writeValue\":\"21845\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70635\",\"field\":\"OnOff\",\"writeValue\":\"43690\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:10Z",
      "value": {
        "address": "4096",
        "bustestCommand": "bustest adr=9 port=1 reg=4096",
        "canModify": true,
        "hide": false,
        "identifier": "",
        "ipAddress": "9",
        "isIgnored": false,
        "isStored": true,
        "legacyDataName": "OnOff",
        "localizedName": "OnOff",
        "modpollCommand": "modpoll -m rtu -1 -a 9 -r 4096 -0 -t 4 -b 9600 -p none COM1",
        "name": "OnOff",
        "pingCommand": "",
        "register": "43690",
        "scale": "",
        "standardAlertMessage": [],
        "standardDataName": "",
        "units": "",
        "value": "0xAAAA",
        "writeFunction": "write6"
      }
    },
    "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70635\",\"field\":\"OnOff\",\"writeValue\":\"43690\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":0,\"source\":\"hardwareInfo\",\"parentKey\":\"S38292\",\"key\":\"H70648\",\"field\":\"name\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:10Z",
      "value": "INV-22 CP6 - (23kW)"
    },
    "key": "{\"mode\":0,\"source\":\"hardwareInfo\",\"parentKey\":\"S38292\",\"key\":\"H70648\",\"field\":\"name\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70648\",\"field\":\"OnOff\",\"writeValue\":\"21845\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:10Z",
      "value": {
        "address": "4096",
        "bustestCommand": "bustest adr=22 port=2 reg=4096",
        "canModify": true,
        "hide": false,
        "identifier": "",
        "ipAddress": "22",
        "isIgnored": false,
        "isStored": true,
        "legacyDataName": "OnOff",
        "localizedName": "OnOff",
        "modpollCommand": "modpoll -m rtu -1 -a 22 -r 4096 -0 -t 4 -b 9600 -p none COM2",
        "name": "OnOff",
        "pingCommand": "",
        "register": "43690",
        "scale": "",
        "standardAlertMessage": [],
        "standardDataName": "",
        "units": "",
        "value": "0xAAAA",
        "writeFunction": "write6"
      }
    },
    "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70648\",\"field\":\"OnOff\",\"writeValue\":\"21845\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70648\",\"field\":\"OnOff\",\"writeValue\":\"43690\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:10Z",
      "value": {
        "address": "4096",
        "bustestCommand": "bustest adr=22 port=2 reg=4096",
        "canModify": true,
        "hide": false,
        "identifier": "",
        "ipAddress": "22",
        "isIgnored": false,
        "isStored": true,
        "legacyDataName": "OnOff",
        "localizedName": "OnOff",
        "modpollCommand": "modpoll -m rtu -1 -a 22 -r 4096 -0 -t 4 -b 9600 -p none COM2",
        "name": "OnOff",
        "pingCommand": "",
        "register": "43690",
        "scale": "",
        "standardAlertMessage": [],
        "standardDataName": "",
        "units": "",
        "value": "0xAAAA",
        "writeFunction": "write6"
      }
    },
    "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70648\",\"field\":\"OnOff\",\"writeValue\":\"43690\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":0,\"source\":\"hardwareInfo\",\"parentKey\":\"S38292\",\"key\":\"H70649\",\"field\":\"name\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:10Z",
      "value": "INV-23 CP6 - (36kW)"
    },
    "key": "{\"mode\":0,\"source\":\"hardwareInfo\",\"parentKey\":\"S38292\",\"key\":\"H70649\",\"field\":\"name\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70649\",\"field\":\"OnOff\",\"writeValue\":\"21845\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:10Z",
      "value": {
        "address": "4096",
        "bustestCommand": "bustest adr=23 port=2 reg=4096",
        "canModify": true,
        "hide": false,
        "identifier": "",
        "ipAddress": "23",
        "isIgnored": false,
        "isStored": true,
        "legacyDataName": "OnOff",
        "localizedName": "OnOff",
        "modpollCommand": "modpoll -m rtu -1 -a 23 -r 4096 -0 -t 4 -b 9600 -p none COM2",
        "name": "OnOff",
        "pingCommand": "",
        "register": "43690",
        "scale": "",
        "standardAlertMessage": [],
        "standardDataName": "",
        "units": "",
        "value": "0xAAAA",
        "writeFunction": "write6"
      }
    },
    "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70649\",\"field\":\"OnOff\",\"writeValue\":\"21845\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70649\",\"field\":\"OnOff\",\"writeValue\":\"43690\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:10Z",
      "value": {
        "address": "4096",
        "bustestCommand": "bustest adr=23 port=2 reg=4096",
        "canModify": true,
        "hide": false,
        "identifier": "",
        "ipAddress": "23",
        "isIgnored": false,
        "isStored": true,
        "legacyDataName": "OnOff",
        "localizedName": "OnOff",
        "modpollCommand": "modpoll -m rtu -1 -a 23 -r 4096 -0 -t 4 -b 9600 -p none COM2",
        "name": "OnOff",
        "pingCommand": "",
        "register": "43690",
        "scale": "",
        "standardAlertMessage": [],
        "standardDataName": "",
        "units": "",
        "value": "0xAAAA",
        "writeFunction": "write6"
      }
    },
    "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70649\",\"field\":\"OnOff\",\"writeValue\":\"43690\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70628\",\"field\":\"OnOff\",\"writeValue\":\"21845\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:10Z",
      "value": {
        "address": "4096",
        "bustestCommand": "bustest adr=2 port=1 reg=4096",
        "canModify": true,
        "hide": false,
        "identifier": "",
        "ipAddress": "2",
        "isIgnored": false,
        "isStored": true,
        "legacyDataName": "OnOff",
        "localizedName": "OnOff",
        "modpollCommand": "modpoll -m rtu -1 -a 2 -r 4096 -0 -t 4 -b 9600 -p none COM1",
        "name": "OnOff",
        "pingCommand": "",
        "register": "43690",
        "scale": "",
        "standardAlertMessage": [],
        "standardDataName": "",
        "units": "",
        "value": "0xAAAA",
        "writeFunction": "write6"
      }
    },
    "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70628\",\"field\":\"OnOff\",\"writeValue\":\"21845\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70627\",\"field\":\"OnOff\",\"writeValue\":\"21845\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:10Z",
      "value": {
        "address": "4096",
        "bustestCommand": "bustest adr=1 port=1 reg=4096",
        "canModify": true,
        "hide": false,
        "identifier": "",
        "ipAddress": "1",
        "isIgnored": false,
        "isStored": true,
        "legacyDataName": "OnOff",
        "localizedName": "OnOff",
        "modpollCommand": "modpoll -m rtu -1 -a 1 -r 4096 -0 -t 4 -b 9600 -p none COM1",
        "name": "OnOff",
        "pingCommand": "",
        "register": "43690",
        "scale": "",
        "standardAlertMessage": [],
        "standardDataName": "",
        "units": "",
        "value": "0xAAAA",
        "writeFunction": "write6"
      }
    },
    "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70627\",\"field\":\"OnOff\",\"writeValue\":\"21845\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70628\",\"field\":\"OnOff\",\"writeValue\":\"43690\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:10Z",
      "value": {
        "address": "4096",
        "bustestCommand": "bustest adr=2 port=1 reg=4096",
        "canModify": true,
        "hide": false,
        "identifier": "",
        "ipAddress": "2",
        "isIgnored": false,
        "isStored": true,
        "legacyDataName": "OnOff",
        "localizedName": "OnOff",
        "modpollCommand": "modpoll -m rtu -1 -a 2 -r 4096 -0 -t 4 -b 9600 -p none COM1",
        "name": "OnOff",
        "pingCommand": "",
        "register": "43690",
        "scale": "",
        "standardAlertMessage": [],
        "standardDataName": "",
        "units": "",
        "value": "0xAAAA",
        "writeFunction": "write6"
      }
    },
    "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70628\",\"field\":\"OnOff\",\"writeValue\":\"43690\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70627\",\"field\":\"OnOff\",\"writeValue\":\"43690\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:10Z",
      "value": {
        "address": "4096",
        "bustestCommand": "bustest adr=1 port=1 reg=4096",
        "canModify": true,
        "hide": false,
        "identifier": "",
        "ipAddress": "1",
        "isIgnored": false,
        "isStored": true,
        "legacyDataName": "OnOff",
        "localizedName": "OnOff",
        "modpollCommand": "modpoll -m rtu -1 -a 1 -r 4096 -0 -t 4 -b 9600 -p none COM1",
        "name": "OnOff",
        "pingCommand": "",
        "register": "43690",
        "scale": "",
        "standardAlertMessage": [],
        "standardDataName": "",
        "units": "",
        "value": "0xAAAA",
        "writeFunction": "write6"
      }
    },
    "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70627\",\"field\":\"OnOff\",\"writeValue\":\"43690\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":0,\"source\":\"hardwareInfo\",\"parentKey\":\"S38292\",\"key\":\"H70650\",\"field\":\"name\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:10Z",
      "value": "INV-24 CP7 - (23kW)"
    },
    "key": "{\"mode\":0,\"source\":\"hardwareInfo\",\"parentKey\":\"S38292\",\"key\":\"H70650\",\"field\":\"name\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70650\",\"field\":\"OnOff\",\"writeValue\":\"21845\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:10Z",
      "value": {
        "address": "4096",
        "bustestCommand": "bustest adr=24 port=2 reg=4096",
        "canModify": true,
        "hide": false,
        "identifier": "",
        "ipAddress": "24",
        "isIgnored": false,
        "isStored": true,
        "legacyDataName": "OnOff",
        "localizedName": "OnOff",
        "modpollCommand": "modpoll -m rtu -1 -a 24 -r 4096 -0 -t 4 -b 9600 -p none COM2",
        "name": "OnOff",
        "pingCommand": "",
        "register": "43690",
        "scale": "",
        "standardAlertMessage": [],
        "standardDataName": "",
        "units": "",
        "value": "0xAAAA",
        "writeFunction": "write6"
      }
    },
    "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70650\",\"field\":\"OnOff\",\"writeValue\":\"21845\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70650\",\"field\":\"OnOff\",\"writeValue\":\"43690\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:10Z",
      "value": {
        "address": "4096",
        "bustestCommand": "bustest adr=24 port=2 reg=4096",
        "canModify": true,
        "hide": false,
        "identifier": "",
        "ipAddress": "24",
        "isIgnored": false,
        "isStored": true,
        "legacyDataName": "OnOff",
        "localizedName": "OnOff",
        "modpollCommand": "modpoll -m rtu -1 -a 24 -r 4096 -0 -t 4 -b 9600 -p none COM2",
        "name": "OnOff",
        "pingCommand": "",
        "register": "43690",
        "scale": "",
        "standardAlertMessage": [],
        "standardDataName": "",
        "units": "",
        "value": "0xAAAA",
        "writeFunction": "write6"
      }
    },
    "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70650\",\"field\":\"OnOff\",\"writeValue\":\"43690\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":0,\"source\":\"hardwareInfo\",\"parentKey\":\"S38292\",\"key\":\"H70651\",\"field\":\"name\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:10Z",
      "value": "INV-25 CP7 - (23kW)"
    },
    "key": "{\"mode\":0,\"source\":\"hardwareInfo\",\"parentKey\":\"S38292\",\"key\":\"H70651\",\"field\":\"name\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70651\",\"field\":\"OnOff\",\"writeValue\":\"21845\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:10Z",
      "value": {
        "address": "4096",
        "bustestCommand": "bustest adr=25 port=2 reg=4096",
        "canModify": true,
        "hide": false,
        "identifier": "",
        "ipAddress": "25",
        "isIgnored": false,
        "isStored": true,
        "legacyDataName": "OnOff",
        "localizedName": "OnOff",
        "modpollCommand": "modpoll -m rtu -1 -a 25 -r 4096 -0 -t 4 -b 9600 -p none COM2",
        "name": "OnOff",
        "pingCommand": "",
        "register": "43690",
        "scale": "",
        "standardAlertMessage": [],
        "standardDataName": "",
        "units": "",
        "value": "0xAAAA",
        "writeFunction": "write6"
      }
    },
    "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70651\",\"field\":\"OnOff\",\"writeValue\":\"21845\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70651\",\"field\":\"OnOff\",\"writeValue\":\"43690\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:10Z",
      "value": {
        "address": "4096",
        "bustestCommand": "bustest adr=25 port=2 reg=4096",
        "canModify": true,
        "hide": false,
        "identifier": "",
        "ipAddress": "25",
        "isIgnored": false,
        "isStored": true,
        "legacyDataName": "OnOff",
        "localizedName": "OnOff",
        "modpollCommand": "modpoll -m rtu -1 -a 25 -r 4096 -0 -t 4 -b 9600 -p none COM2",
        "name": "OnOff",
        "pingCommand": "",
        "register": "43690",
        "scale": "",
        "standardAlertMessage": [],
        "standardDataName": "",
        "units": "",
        "value": "0xAAAA",
        "writeFunction": "write6"
      }
    },
    "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70651\",\"field\":\"OnOff\",\"writeValue\":\"43690\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":0,\"source\":\"hardwareInfo\",\"parentKey\":\"S38292\",\"key\":\"H70652\",\"field\":\"name\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:10Z",
      "value": "INV-26 CP7 - (23kW)"
    },
    "key": "{\"mode\":0,\"source\":\"hardwareInfo\",\"parentKey\":\"S38292\",\"key\":\"H70652\",\"field\":\"name\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70652\",\"field\":\"OnOff\",\"writeValue\":\"21845\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:11Z",
      "value": {
        "address": "4096",
        "bustestCommand": "bustest adr=26 port=2 reg=4096",
        "canModify": true,
        "hide": false,
        "identifier": "",
        "ipAddress": "26",
        "isIgnored": false,
        "isStored": true,
        "legacyDataName": "OnOff",
        "localizedName": "OnOff",
        "modpollCommand": "modpoll -m rtu -1 -a 26 -r 4096 -0 -t 4 -b 9600 -p none COM2",
        "name": "OnOff",
        "pingCommand": "",
        "register": "43690",
        "scale": "",
        "standardAlertMessage": [],
        "standardDataName": "",
        "units": "",
        "value": "0xAAAA",
        "writeFunction": "write6"
      }
    },
    "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70652\",\"field\":\"OnOff\",\"writeValue\":\"21845\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70652\",\"field\":\"OnOff\",\"writeValue\":\"43690\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:11Z",
      "value": {
        "address": "4096",
        "bustestCommand": "bustest adr=26 port=2 reg=4096",
        "canModify": true,
        "hide": false,
        "identifier": "",
        "ipAddress": "26",
        "isIgnored": false,
        "isStored": true,
        "legacyDataName": "OnOff",
        "localizedName": "OnOff",
        "modpollCommand": "modpoll -m rtu -1 -a 26 -r 4096 -0 -t 4 -b 9600 -p none COM2",
        "name": "OnOff",
        "pingCommand": "",
        "register": "43690",
        "scale": "",
        "standardAlertMessage": [],
        "standardDataName": "",
        "units": "",
        "value": "0xAAAA",
        "writeFunction": "write6"
      }
    },
    "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70652\",\"field\":\"OnOff\",\"writeValue\":\"43690\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":0,\"source\":\"hardwareInfo\",\"parentKey\":\"S38292\",\"key\":\"H70653\",\"field\":\"name\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:11Z",
      "value": "INV-27 CP7 - (36kW)"
    },
    "key": "{\"mode\":0,\"source\":\"hardwareInfo\",\"parentKey\":\"S38292\",\"key\":\"H70653\",\"field\":\"name\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70653\",\"field\":\"OnOff\",\"writeValue\":\"21845\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:11Z",
      "value": {
        "address": "4096",
        "bustestCommand": "bustest adr=27 port=2 reg=4096",
        "canModify": true,
        "hide": false,
        "identifier": "",
        "ipAddress": "27",
        "isIgnored": false,
        "isStored": true,
        "legacyDataName": "OnOff",
        "localizedName": "OnOff",
        "modpollCommand": "modpoll -m rtu -1 -a 27 -r 4096 -0 -t 4 -b 9600 -p none COM2",
        "name": "OnOff",
        "pingCommand": "",
        "register": "43690",
        "scale": "",
        "standardAlertMessage": [],
        "standardDataName": "",
        "units": "",
        "value": "0xAAAA",
        "writeFunction": "write6"
      }
    },
    "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70653\",\"field\":\"OnOff\",\"writeValue\":\"21845\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70653\",\"field\":\"OnOff\",\"writeValue\":\"43690\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:11Z",
      "value": {
        "address": "4096",
        "bustestCommand": "bustest adr=27 port=2 reg=4096",
        "canModify": true,
        "hide": false,
        "identifier": "",
        "ipAddress": "27",
        "isIgnored": false,
        "isStored": true,
        "legacyDataName": "OnOff",
        "localizedName": "OnOff",
        "modpollCommand": "modpoll -m rtu -1 -a 27 -r 4096 -0 -t 4 -b 9600 -p none COM2",
        "name": "OnOff",
        "pingCommand": "",
        "register": "43690",
        "scale": "",
        "standardAlertMessage": [],
        "standardDataName": "",
        "units": "",
        "value": "0xAAAA",
        "writeFunction": "write6"
      }
    },
    "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70653\",\"field\":\"OnOff\",\"writeValue\":\"43690\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":0,\"source\":\"hardwareInfo\",\"parentKey\":\"S38292\",\"key\":\"H70654\",\"field\":\"name\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:11Z",
      "value": "INV-28 CP8 - (36kW)"
    },
    "key": "{\"mode\":0,\"source\":\"hardwareInfo\",\"parentKey\":\"S38292\",\"key\":\"H70654\",\"field\":\"name\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70654\",\"field\":\"OnOff\",\"writeValue\":\"21845\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:11Z",
      "value": {
        "address": "4096",
        "bustestCommand": "bustest adr=28 port=2 reg=4096",
        "canModify": true,
        "hide": false,
        "identifier": "",
        "ipAddress": "28",
        "isIgnored": false,
        "isStored": true,
        "legacyDataName": "OnOff",
        "localizedName": "OnOff",
        "modpollCommand": "modpoll -m rtu -1 -a 28 -r 4096 -0 -t 4 -b 9600 -p none COM2",
        "name": "OnOff",
        "pingCommand": "",
        "register": "43690",
        "scale": "",
        "standardAlertMessage": [],
        "standardDataName": "",
        "units": "",
        "value": "0xAAAA",
        "writeFunction": "write6"
      }
    },
    "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70654\",\"field\":\"OnOff\",\"writeValue\":\"21845\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70654\",\"field\":\"OnOff\",\"writeValue\":\"43690\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:11Z",
      "value": {
        "address": "4096",
        "bustestCommand": "bustest adr=28 port=2 reg=4096",
        "canModify": true,
        "hide": false,
        "identifier": "",
        "ipAddress": "28",
        "isIgnored": false,
        "isStored": true,
        "legacyDataName": "OnOff",
        "localizedName": "OnOff",
        "modpollCommand": "modpoll -m rtu -1 -a 28 -r 4096 -0 -t 4 -b 9600 -p none COM2",
        "name": "OnOff",
        "pingCommand": "",
        "register": "43690",
        "scale": "",
        "standardAlertMessage": [],
        "standardDataName": "",
        "units": "",
        "value": "0xAAAA",
        "writeFunction": "write6"
      }
    },
    "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70654\",\"field\":\"OnOff\",\"writeValue\":\"43690\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":0,\"source\":\"hardwareInfo\",\"parentKey\":\"S38292\",\"key\":\"H70655\",\"field\":\"name\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:11Z",
      "value": "INV-29 CP8 - (28kW)"
    },
    "key": "{\"mode\":0,\"source\":\"hardwareInfo\",\"parentKey\":\"S38292\",\"key\":\"H70655\",\"field\":\"name\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70655\",\"field\":\"OnOff\",\"writeValue\":\"21845\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:11Z",
      "value": {
        "address": "4096",
        "bustestCommand": "bustest adr=29 port=2 reg=4096",
        "canModify": true,
        "hide": false,
        "identifier": "",
        "ipAddress": "29",
        "isIgnored": false,
        "isStored": true,
        "legacyDataName": "OnOff",
        "localizedName": "OnOff",
        "modpollCommand": "modpoll -m rtu -1 -a 29 -r 4096 -0 -t 4 -b 9600 -p none COM2",
        "name": "OnOff",
        "pingCommand": "",
        "register": "43690",
        "scale": "",
        "standardAlertMessage": [],
        "standardDataName": "",
        "units": "",
        "value": "0xAAAA",
        "writeFunction": "write6"
      }
    },
    "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70655\",\"field\":\"OnOff\",\"writeValue\":\"21845\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70655\",\"field\":\"OnOff\",\"writeValue\":\"43690\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:11Z",
      "value": {
        "address": "4096",
        "bustestCommand": "bustest adr=29 port=2 reg=4096",
        "canModify": true,
        "hide": false,
        "identifier": "",
        "ipAddress": "29",
        "isIgnored": false,
        "isStored": true,
        "legacyDataName": "OnOff",
        "localizedName": "OnOff",
        "modpollCommand": "modpoll -m rtu -1 -a 29 -r 4096 -0 -t 4 -b 9600 -p none COM2",
        "name": "OnOff",
        "pingCommand": "",
        "register": "43690",
        "scale": "",
        "standardAlertMessage": [],
        "standardDataName": "",
        "units": "",
        "value": "0xAAAA",
        "writeFunction": "write6"
      }
    },
    "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70655\",\"field\":\"OnOff\",\"writeValue\":\"43690\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":0,\"source\":\"hardwareInfo\",\"parentKey\":\"S38292\",\"key\":\"H70656\",\"field\":\"name\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:11Z",
      "value": "INV-30 CP8 - (28kW)"
    },
    "key": "{\"mode\":0,\"source\":\"hardwareInfo\",\"parentKey\":\"S38292\",\"key\":\"H70656\",\"field\":\"name\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70656\",\"field\":\"OnOff\",\"writeValue\":\"21845\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:11Z",
      "value": {
        "address": "4096",
        "bustestCommand": "bustest adr=30 port=2 reg=4096",
        "canModify": true,
        "hide": false,
        "identifier": "",
        "ipAddress": "30",
        "isIgnored": false,
        "isStored": true,
        "legacyDataName": "OnOff",
        "localizedName": "OnOff",
        "modpollCommand": "modpoll -m rtu -1 -a 30 -r 4096 -0 -t 4 -b 9600 -p none COM2",
        "name": "OnOff",
        "pingCommand": "",
        "register": "43690",
        "scale": "",
        "standardAlertMessage": [],
        "standardDataName": "",
        "units": "",
        "value": "0xAAAA",
        "writeFunction": "write6"
      }
    },
    "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70656\",\"field\":\"OnOff\",\"writeValue\":\"21845\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70656\",\"field\":\"OnOff\",\"writeValue\":\"43690\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:11Z",
      "value": {
        "address": "4096",
        "bustestCommand": "bustest adr=30 port=2 reg=4096",
        "canModify": true,
        "hide": false,
        "identifier": "",
        "ipAddress": "30",
        "isIgnored": false,
        "isStored": true,
        "legacyDataName": "OnOff",
        "localizedName": "OnOff",
        "modpollCommand": "modpoll -m rtu -1 -a 30 -r 4096 -0 -t 4 -b 9600 -p none COM2",
        "name": "OnOff",
        "pingCommand": "",
        "register": "43690",
        "scale": "",
        "standardAlertMessage": [],
        "standardDataName": "",
        "units": "",
        "value": "0xAAAA",
        "writeFunction": "write6"
      }
    },
    "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70656\",\"field\":\"OnOff\",\"writeValue\":\"43690\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":0,\"source\":\"hardwareInfo\",\"parentKey\":\"S38292\",\"key\":\"H70657\",\"field\":\"name\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:11Z",
      "value": "INV-31 CP9 - (36kW)"
    },
    "key": "{\"mode\":0,\"source\":\"hardwareInfo\",\"parentKey\":\"S38292\",\"key\":\"H70657\",\"field\":\"name\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70657\",\"field\":\"OnOff\",\"writeValue\":\"21845\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:11Z",
      "value": {
        "address": "4096",
        "bustestCommand": "bustest adr=31 port=2 reg=4096",
        "canModify": true,
        "hide": false,
        "identifier": "",
        "ipAddress": "31",
        "isIgnored": false,
        "isStored": true,
        "legacyDataName": "OnOff",
        "localizedName": "OnOff",
        "modpollCommand": "modpoll -m rtu -1 -a 31 -r 4096 -0 -t 4 -b 9600 -p none COM2",
        "name": "OnOff",
        "pingCommand": "",
        "register": "43690",
        "scale": "",
        "standardAlertMessage": [],
        "standardDataName": "",
        "units": "",
        "value": "0xAAAA",
        "writeFunction": "write6"
      }
    },
    "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70657\",\"field\":\"OnOff\",\"writeValue\":\"21845\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70657\",\"field\":\"OnOff\",\"writeValue\":\"43690\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:11Z",
      "value": {
        "address": "4096",
        "bustestCommand": "bustest adr=31 port=2 reg=4096",
        "canModify": true,
        "hide": false,
        "identifier": "",
        "ipAddress": "31",
        "isIgnored": false,
        "isStored": true,
        "legacyDataName": "OnOff",
        "localizedName": "OnOff",
        "modpollCommand": "modpoll -m rtu -1 -a 31 -r 4096 -0 -t 4 -b 9600 -p none COM2",
        "name": "OnOff",
        "pingCommand": "",
        "register": "43690",
        "scale": "",
        "standardAlertMessage": [],
        "standardDataName": "",
        "units": "",
        "value": "0xAAAA",
        "writeFunction": "write6"
      }
    },
    "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70657\",\"field\":\"OnOff\",\"writeValue\":\"43690\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70646\",\"field\":\"OnOff\",\"writeValue\":\"21845\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:11Z",
      "value": {
        "address": "4096",
        "bustestCommand": "bustest adr=20 port=2 reg=4096",
        "canModify": true,
        "hide": false,
        "identifier": "",
        "ipAddress": "20",
        "isIgnored": false,
        "isStored": true,
        "legacyDataName": "OnOff",
        "localizedName": "OnOff",
        "modpollCommand": "modpoll -m rtu -1 -a 20 -r 4096 -0 -t 4 -b 9600 -p none COM2",
        "name": "OnOff",
        "pingCommand": "",
        "register": "43690",
        "scale": "",
        "standardAlertMessage": [],
        "standardDataName": "",
        "units": "",
        "value": "0xAAAA",
        "writeFunction": "write6"
      }
    },
    "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70646\",\"field\":\"OnOff\",\"writeValue\":\"21845\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70646\",\"field\":\"OnOff\",\"writeValue\":\"43690\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:11Z",
      "value": {
        "address": "4096",
        "bustestCommand": "bustest adr=20 port=2 reg=4096",
        "canModify": true,
        "hide": false,
        "identifier": "",
        "ipAddress": "20",
        "isIgnored": false,
        "isStored": true,
        "legacyDataName": "OnOff",
        "localizedName": "OnOff",
        "modpollCommand": "modpoll -m rtu -1 -a 20 -r 4096 -0 -t 4 -b 9600 -p none COM2",
        "name": "OnOff",
        "pingCommand": "",
        "register": "43690",
        "scale": "",
        "standardAlertMessage": [],
        "standardDataName": "",
        "units": "",
        "value": "0xAAAA",
        "writeFunction": "write6"
      }
    },
    "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70646\",\"field\":\"OnOff\",\"writeValue\":\"43690\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":0,\"source\":\"hardwareInfo\",\"parentKey\":\"S38292\",\"key\":\"H70632\",\"field\":\"name\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:11Z",
      "value": "INV-06 CP2 - (23kW)"
    },
    "key": "{\"mode\":0,\"source\":\"hardwareInfo\",\"parentKey\":\"S38292\",\"key\":\"H70632\",\"field\":\"name\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":0,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70649\",\"field\":\"Inverter Work Mode Description\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:11Z",
      "value": {
        "address": "996",
        "bustestCommand": "bustest adr=23 port=2 reg=996 function=0",
        "canModify": false,
        "hide": false,
        "identifier": "",
        "ipAddress": "23",
        "isIgnored": false,
        "isStored": false,
        "legacyDataName": "",
        "localizedName": "Inverter Work Mode Description",
        "modpollCommand": "Invalid function: 0",
        "name": "Inverter Work Mode Description",
        "pingCommand": "",
        "register": "0",
        "scale": "if ('@47' == 0x0800)\r    return \"Derate\";\rif ('@47' == 0x1000)\r    return \"Running\";\rif ('@47' == 0x2000)\r    return \"Standby\";\rif ('@47' == 0x4000)\r    return \"Check\";\rif ('@47' == 0x8000);\r    return \"Fault\";",
        "standardAlertMessage": [],
        "standardDataName": "",
        "units": "",
        "value": "Running",
        "writeFunction": ""
      }
    },
    "key": "{\"mode\":0,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70649\",\"field\":\"Inverter Work Mode Description\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":0,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70648\",\"field\":\"Inverter Work Mode Description\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:11Z",
      "value": {
        "address": "996",
        "bustestCommand": "bustest adr=22 port=2 reg=996 function=0",
        "canModify": false,
        "hide": false,
        "identifier": "",
        "ipAddress": "22",
        "isIgnored": false,
        "isStored": false,
        "legacyDataName": "",
        "localizedName": "Inverter Work Mode Description",
        "modpollCommand": "Invalid function: 0",
        "name": "Inverter Work Mode Description",
        "pingCommand": "",
        "register": "0",
        "scale": "if ('@47' == 0x0800)\r    return \"Derate\";\rif ('@47' == 0x1000)\r    return \"Running\";\rif ('@47' == 0x2000)\r    return \"Standby\";\rif ('@47' == 0x4000)\r    return \"Check\";\rif ('@47' == 0x8000);\r    return \"Fault\";",
        "standardAlertMessage": [],
        "standardDataName": "",
        "units": "",
        "value": "Running",
        "writeFunction": ""
      }
    },
    "key": "{\"mode\":0,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70648\",\"field\":\"Inverter Work Mode Description\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":0,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70651\",\"field\":\"Inverter Work Mode Description\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:11Z",
      "value": {
        "address": "996",
        "bustestCommand": "bustest adr=25 port=2 reg=996 function=0",
        "canModify": false,
        "hide": false,
        "identifier": "",
        "ipAddress": "25",
        "isIgnored": false,
        "isStored": false,
        "legacyDataName": "",
        "localizedName": "Inverter Work Mode Description",
        "modpollCommand": "Invalid function: 0",
        "name": "Inverter Work Mode Description",
        "pingCommand": "",
        "register": "0",
        "scale": "if ('@47' == 0x0800)\r    return \"Derate\";\rif ('@47' == 0x1000)\r    return \"Running\";\rif ('@47' == 0x2000)\r    return \"Standby\";\rif ('@47' == 0x4000)\r    return \"Check\";\rif ('@47' == 0x8000);\r    return \"Fault\";",
        "standardAlertMessage": [],
        "standardDataName": "",
        "units": "",
        "value": "Running",
        "writeFunction": ""
      }
    },
    "key": "{\"mode\":0,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70651\",\"field\":\"Inverter Work Mode Description\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":0,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70650\",\"field\":\"Inverter Work Mode Description\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:11Z",
      "value": {
        "address": "996",
        "bustestCommand": "bustest adr=24 port=2 reg=996 function=0",
        "canModify": false,
        "hide": false,
        "identifier": "",
        "ipAddress": "24",
        "isIgnored": false,
        "isStored": false,
        "legacyDataName": "",
        "localizedName": "Inverter Work Mode Description",
        "modpollCommand": "Invalid function: 0",
        "name": "Inverter Work Mode Description",
        "pingCommand": "",
        "register": "0",
        "scale": "if ('@47' == 0x0800)\r    return \"Derate\";\rif ('@47' == 0x1000)\r    return \"Running\";\rif ('@47' == 0x2000)\r    return \"Standby\";\rif ('@47' == 0x4000)\r    return \"Check\";\rif ('@47' == 0x8000);\r    return \"Fault\";",
        "standardAlertMessage": [],
        "standardDataName": "",
        "units": "",
        "value": "Running",
        "writeFunction": ""
      }
    },
    "key": "{\"mode\":0,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70650\",\"field\":\"Inverter Work Mode Description\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":0,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70652\",\"field\":\"Inverter Work Mode Description\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:11Z",
      "value": {
        "address": "996",
        "bustestCommand": "bustest adr=26 port=2 reg=996 function=0",
        "canModify": false,
        "hide": false,
        "identifier": "",
        "ipAddress": "26",
        "isIgnored": false,
        "isStored": false,
        "legacyDataName": "",
        "localizedName": "Inverter Work Mode Description",
        "modpollCommand": "Invalid function: 0",
        "name": "Inverter Work Mode Description",
        "pingCommand": "",
        "register": "0",
        "scale": "if ('@47' == 0x0800)\r    return \"Derate\";\rif ('@47' == 0x1000)\r    return \"Running\";\rif ('@47' == 0x2000)\r    return \"Standby\";\rif ('@47' == 0x4000)\r    return \"Check\";\rif ('@47' == 0x8000);\r    return \"Fault\";",
        "standardAlertMessage": [],
        "standardDataName": "",
        "units": "",
        "value": "Running",
        "writeFunction": ""
      }
    },
    "key": "{\"mode\":0,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70652\",\"field\":\"Inverter Work Mode Description\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":0,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70653\",\"field\":\"Inverter Work Mode Description\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:11Z",
      "value": {
        "address": "996",
        "bustestCommand": "bustest adr=27 port=2 reg=996 function=0",
        "canModify": false,
        "hide": false,
        "identifier": "",
        "ipAddress": "27",
        "isIgnored": false,
        "isStored": false,
        "legacyDataName": "",
        "localizedName": "Inverter Work Mode Description",
        "modpollCommand": "Invalid function: 0",
        "name": "Inverter Work Mode Description",
        "pingCommand": "",
        "register": "0",
        "scale": "if ('@47' == 0x0800)\r    return \"Derate\";\rif ('@47' == 0x1000)\r    return \"Running\";\rif ('@47' == 0x2000)\r    return \"Standby\";\rif ('@47' == 0x4000)\r    return \"Check\";\rif ('@47' == 0x8000);\r    return \"Fault\";",
        "standardAlertMessage": [],
        "standardDataName": "",
        "units": "",
        "value": "Running",
        "writeFunction": ""
      }
    },
    "key": "{\"mode\":0,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70653\",\"field\":\"Inverter Work Mode Description\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":0,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70654\",\"field\":\"Inverter Work Mode Description\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:11Z",
      "value": {
        "address": "996",
        "bustestCommand": "bustest adr=28 port=2 reg=996 function=0",
        "canModify": false,
        "hide": false,
        "identifier": "",
        "ipAddress": "28",
        "isIgnored": false,
        "isStored": false,
        "legacyDataName": "",
        "localizedName": "Inverter Work Mode Description",
        "modpollCommand": "Invalid function: 0",
        "name": "Inverter Work Mode Description",
        "pingCommand": "",
        "register": "0",
        "scale": "if ('@47' == 0x0800)\r    return \"Derate\";\rif ('@47' == 0x1000)\r    return \"Running\";\rif ('@47' == 0x2000)\r    return \"Standby\";\rif ('@47' == 0x4000)\r    return \"Check\";\rif ('@47' == 0x8000);\r    return \"Fault\";",
        "standardAlertMessage": [],
        "standardDataName": "",
        "units": "",
        "value": "Running",
        "writeFunction": ""
      }
    },
    "key": "{\"mode\":0,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70654\",\"field\":\"Inverter Work Mode Description\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":0,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70657\",\"field\":\"Inverter Work Mode Description\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:11Z",
      "value": {
        "address": "996",
        "bustestCommand": "bustest adr=31 port=2 reg=996 function=0",
        "canModify": false,
        "hide": false,
        "identifier": "",
        "ipAddress": "31",
        "isIgnored": false,
        "isStored": false,
        "legacyDataName": "",
        "localizedName": "Inverter Work Mode Description",
        "modpollCommand": "Invalid function: 0",
        "name": "Inverter Work Mode Description",
        "pingCommand": "",
        "register": "0",
        "scale": "if ('@47' == 0x0800)\r    return \"Derate\";\rif ('@47' == 0x1000)\r    return \"Running\";\rif ('@47' == 0x2000)\r    return \"Standby\";\rif ('@47' == 0x4000)\r    return \"Check\";\rif ('@47' == 0x8000);\r    return \"Fault\";",
        "standardAlertMessage": [],
        "standardDataName": "",
        "units": "",
        "value": "Running",
        "writeFunction": ""
      }
    },
    "key": "{\"mode\":0,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70657\",\"field\":\"Inverter Work Mode Description\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":0,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70656\",\"field\":\"Inverter Work Mode Description\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:11Z",
      "value": {
        "address": "996",
        "bustestCommand": "bustest adr=30 port=2 reg=996 function=0",
        "canModify": false,
        "hide": false,
        "identifier": "",
        "ipAddress": "30",
        "isIgnored": false,
        "isStored": false,
        "legacyDataName": "",
        "localizedName": "Inverter Work Mode Description",
        "modpollCommand": "Invalid function: 0",
        "name": "Inverter Work Mode Description",
        "pingCommand": "",
        "register": "0",
        "scale": "if ('@47' == 0x0800)\r    return \"Derate\";\rif ('@47' == 0x1000)\r    return \"Running\";\rif ('@47' == 0x2000)\r    return \"Standby\";\rif ('@47' == 0x4000)\r    return \"Check\";\rif ('@47' == 0x8000);\r    return \"Fault\";",
        "standardAlertMessage": [],
        "standardDataName": "",
        "units": "",
        "value": "Running",
        "writeFunction": ""
      }
    },
    "key": "{\"mode\":0,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70656\",\"field\":\"Inverter Work Mode Description\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":0,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70655\",\"field\":\"Inverter Work Mode Description\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:11Z",
      "value": {
        "address": "996",
        "bustestCommand": "bustest adr=29 port=2 reg=996 function=0",
        "canModify": false,
        "hide": false,
        "identifier": "",
        "ipAddress": "29",
        "isIgnored": false,
        "isStored": false,
        "legacyDataName": "",
        "localizedName": "Inverter Work Mode Description",
        "modpollCommand": "Invalid function: 0",
        "name": "Inverter Work Mode Description",
        "pingCommand": "",
        "register": "0",
        "scale": "if ('@47' == 0x0800)\r    return \"Derate\";\rif ('@47' == 0x1000)\r    return \"Running\";\rif ('@47' == 0x2000)\r    return \"Standby\";\rif ('@47' == 0x4000)\r    return \"Check\";\rif ('@47' == 0x8000);\r    return \"Fault\";",
        "standardAlertMessage": [],
        "standardDataName": "",
        "units": "",
        "value": "Running",
        "writeFunction": ""
      }
    },
    "key": "{\"mode\":0,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70655\",\"field\":\"Inverter Work Mode Description\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":0,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70639\",\"field\":\"Inverter Work Mode Description\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:11Z",
      "value": {
        "address": "996",
        "bustestCommand": "bustest adr=13 port=1 reg=996 function=0",
        "canModify": false,
        "hide": false,
        "identifier": "",
        "ipAddress": "13",
        "isIgnored": false,
        "isStored": false,
        "legacyDataName": "",
        "localizedName": "Inverter Work Mode Description",
        "modpollCommand": "Invalid function: 0",
        "name": "Inverter Work Mode Description",
        "pingCommand": "",
        "register": "0",
        "scale": "if ('@47' == 0x0800)\r    return \"Derate\";\rif ('@47' == 0x1000)\r    return \"Running\";\rif ('@47' == 0x2000)\r    return \"Standby\";\rif ('@47' == 0x4000)\r    return \"Check\";\rif ('@47' == 0x8000);\r    return \"Fault\";",
        "standardAlertMessage": [],
        "standardDataName": "",
        "units": "",
        "value": "Running",
        "writeFunction": ""
      }
    },
    "key": "{\"mode\":0,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70639\",\"field\":\"Inverter Work Mode Description\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":0,\"source\":\"hardwareInfo\",\"parentKey\":\"S38292\",\"key\":\"H70641\",\"field\":\"name\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:11Z",
      "value": "INV-15 CP4 - (36kW)"
    },
    "key": "{\"mode\":0,\"source\":\"hardwareInfo\",\"parentKey\":\"S38292\",\"key\":\"H70641\",\"field\":\"name\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70641\",\"field\":\"OnOff\",\"writeValue\":\"21845\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:11Z",
      "value": {
        "address": "4096",
        "bustestCommand": "bustest adr=15 port=1 reg=4096",
        "canModify": true,
        "hide": false,
        "identifier": "",
        "ipAddress": "15",
        "isIgnored": false,
        "isStored": true,
        "legacyDataName": "OnOff",
        "localizedName": "OnOff",
        "modpollCommand": "modpoll -m rtu -1 -a 15 -r 4096 -0 -t 4 -b 9600 -p none COM1",
        "name": "OnOff",
        "pingCommand": "",
        "register": "43690",
        "scale": "",
        "standardAlertMessage": [],
        "standardDataName": "",
        "units": "",
        "value": "0xAAAA",
        "writeFunction": "write6"
      }
    },
    "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70641\",\"field\":\"OnOff\",\"writeValue\":\"21845\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70641\",\"field\":\"OnOff\",\"writeValue\":\"43690\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:11Z",
      "value": {
        "address": "4096",
        "bustestCommand": "bustest adr=15 port=1 reg=4096",
        "canModify": true,
        "hide": false,
        "identifier": "",
        "ipAddress": "15",
        "isIgnored": false,
        "isStored": true,
        "legacyDataName": "OnOff",
        "localizedName": "OnOff",
        "modpollCommand": "modpoll -m rtu -1 -a 15 -r 4096 -0 -t 4 -b 9600 -p none COM1",
        "name": "OnOff",
        "pingCommand": "",
        "register": "43690",
        "scale": "",
        "standardAlertMessage": [],
        "standardDataName": "",
        "units": "",
        "value": "0xAAAA",
        "writeFunction": "write6"
      }
    },
    "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70641\",\"field\":\"OnOff\",\"writeValue\":\"43690\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":0,\"source\":\"hardwareInfo\",\"parentKey\":\"S38292\",\"key\":\"H70642\",\"field\":\"name\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:11Z",
      "value": "INV-16 CP5 - (23kW)"
    },
    "key": "{\"mode\":0,\"source\":\"hardwareInfo\",\"parentKey\":\"S38292\",\"key\":\"H70642\",\"field\":\"name\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70642\",\"field\":\"OnOff\",\"writeValue\":\"21845\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:11Z",
      "value": {
        "address": "4096",
        "bustestCommand": "bustest adr=16 port=1 reg=4096",
        "canModify": true,
        "hide": false,
        "identifier": "",
        "ipAddress": "16",
        "isIgnored": false,
        "isStored": true,
        "legacyDataName": "OnOff",
        "localizedName": "OnOff",
        "modpollCommand": "modpoll -m rtu -1 -a 16 -r 4096 -0 -t 4 -b 9600 -p none COM1",
        "name": "OnOff",
        "pingCommand": "",
        "register": "43690",
        "scale": "",
        "standardAlertMessage": [],
        "standardDataName": "",
        "units": "",
        "value": "0xAAAA",
        "writeFunction": "write6"
      }
    },
    "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70642\",\"field\":\"OnOff\",\"writeValue\":\"21845\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70642\",\"field\":\"OnOff\",\"writeValue\":\"43690\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:11Z",
      "value": {
        "address": "4096",
        "bustestCommand": "bustest adr=16 port=1 reg=4096",
        "canModify": true,
        "hide": false,
        "identifier": "",
        "ipAddress": "16",
        "isIgnored": false,
        "isStored": true,
        "legacyDataName": "OnOff",
        "localizedName": "OnOff",
        "modpollCommand": "modpoll -m rtu -1 -a 16 -r 4096 -0 -t 4 -b 9600 -p none COM1",
        "name": "OnOff",
        "pingCommand": "",
        "register": "43690",
        "scale": "",
        "standardAlertMessage": [],
        "standardDataName": "",
        "units": "",
        "value": "0xAAAA",
        "writeFunction": "write6"
      }
    },
    "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70642\",\"field\":\"OnOff\",\"writeValue\":\"43690\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":0,\"source\":\"hardwareInfo\",\"parentKey\":\"S38292\",\"key\":\"H70643\",\"field\":\"name\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:11Z",
      "value": "INV-17 CP5 - (23kW)"
    },
    "key": "{\"mode\":0,\"source\":\"hardwareInfo\",\"parentKey\":\"S38292\",\"key\":\"H70643\",\"field\":\"name\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70643\",\"field\":\"OnOff\",\"writeValue\":\"21845\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:11Z",
      "value": {
        "address": "4096",
        "bustestCommand": "bustest adr=17 port=2 reg=4096",
        "canModify": true,
        "hide": false,
        "identifier": "",
        "ipAddress": "17",
        "isIgnored": false,
        "isStored": true,
        "legacyDataName": "OnOff",
        "localizedName": "OnOff",
        "modpollCommand": "modpoll -m rtu -1 -a 17 -r 4096 -0 -t 4 -b 9600 -p none COM2",
        "name": "OnOff",
        "pingCommand": "",
        "register": "43690",
        "scale": "",
        "standardAlertMessage": [],
        "standardDataName": "",
        "units": "",
        "value": "0xAAAA",
        "writeFunction": "write6"
      }
    },
    "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70643\",\"field\":\"OnOff\",\"writeValue\":\"21845\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70643\",\"field\":\"OnOff\",\"writeValue\":\"43690\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:11Z",
      "value": {
        "address": "4096",
        "bustestCommand": "bustest adr=17 port=2 reg=4096",
        "canModify": true,
        "hide": false,
        "identifier": "",
        "ipAddress": "17",
        "isIgnored": false,
        "isStored": true,
        "legacyDataName": "OnOff",
        "localizedName": "OnOff",
        "modpollCommand": "modpoll -m rtu -1 -a 17 -r 4096 -0 -t 4 -b 9600 -p none COM2",
        "name": "OnOff",
        "pingCommand": "",
        "register": "43690",
        "scale": "",
        "standardAlertMessage": [],
        "standardDataName": "",
        "units": "",
        "value": "0xAAAA",
        "writeFunction": "write6"
      }
    },
    "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70643\",\"field\":\"OnOff\",\"writeValue\":\"43690\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":0,\"source\":\"hardwareInfo\",\"parentKey\":\"S38292\",\"key\":\"H70640\",\"field\":\"name\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:11Z",
      "value": "INV-14 CP4 - (23kW)"
    },
    "key": "{\"mode\":0,\"source\":\"hardwareInfo\",\"parentKey\":\"S38292\",\"key\":\"H70640\",\"field\":\"name\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70640\",\"field\":\"OnOff\",\"writeValue\":\"43690\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:11Z",
      "value": {
        "address": "4096",
        "bustestCommand": "bustest adr=14 port=1 reg=4096",
        "canModify": true,
        "hide": false,
        "identifier": "",
        "ipAddress": "14",
        "isIgnored": false,
        "isStored": true,
        "legacyDataName": "OnOff",
        "localizedName": "OnOff",
        "modpollCommand": "modpoll -m rtu -1 -a 14 -r 4096 -0 -t 4 -b 9600 -p none COM1",
        "name": "OnOff",
        "pingCommand": "",
        "register": "43690",
        "scale": "",
        "standardAlertMessage": [],
        "standardDataName": "",
        "units": "",
        "value": "0xAAAA",
        "writeFunction": "write6"
      }
    },
    "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70640\",\"field\":\"OnOff\",\"writeValue\":\"43690\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":0,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70641\",\"field\":\"Inverter Work Mode Description\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:11Z",
      "value": {
        "address": "996",
        "bustestCommand": "bustest adr=15 port=1 reg=996 function=0",
        "canModify": false,
        "hide": false,
        "identifier": "",
        "ipAddress": "15",
        "isIgnored": false,
        "isStored": false,
        "legacyDataName": "",
        "localizedName": "Inverter Work Mode Description",
        "modpollCommand": "Invalid function: 0",
        "name": "Inverter Work Mode Description",
        "pingCommand": "",
        "register": "0",
        "scale": "if ('@47' == 0x0800)\r    return \"Derate\";\rif ('@47' == 0x1000)\r    return \"Running\";\rif ('@47' == 0x2000)\r    return \"Standby\";\rif ('@47' == 0x4000)\r    return \"Check\";\rif ('@47' == 0x8000);\r    return \"Fault\";",
        "standardAlertMessage": [],
        "standardDataName": "",
        "units": "",
        "value": "Running",
        "writeFunction": ""
      }
    },
    "key": "{\"mode\":0,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70641\",\"field\":\"Inverter Work Mode Description\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":0,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70640\",\"field\":\"Inverter Work Mode Description\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:11Z",
      "value": {
        "address": "996",
        "bustestCommand": "bustest adr=14 port=1 reg=996 function=0",
        "canModify": false,
        "hide": false,
        "identifier": "",
        "ipAddress": "14",
        "isIgnored": false,
        "isStored": false,
        "legacyDataName": "",
        "localizedName": "Inverter Work Mode Description",
        "modpollCommand": "Invalid function: 0",
        "name": "Inverter Work Mode Description",
        "pingCommand": "",
        "register": "0",
        "scale": "if ('@47' == 0x0800)\r    return \"Derate\";\rif ('@47' == 0x1000)\r    return \"Running\";\rif ('@47' == 0x2000)\r    return \"Standby\";\rif ('@47' == 0x4000)\r    return \"Check\";\rif ('@47' == 0x8000);\r    return \"Fault\";",
        "standardAlertMessage": [],
        "standardDataName": "",
        "units": "",
        "value": "Running",
        "writeFunction": ""
      }
    },
    "key": "{\"mode\":0,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70640\",\"field\":\"Inverter Work Mode Description\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":0,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70643\",\"field\":\"Inverter Work Mode Description\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:11Z",
      "value": {
        "address": "996",
        "bustestCommand": "bustest adr=17 port=2 reg=996 function=0",
        "canModify": false,
        "hide": false,
        "identifier": "",
        "ipAddress": "17",
        "isIgnored": false,
        "isStored": false,
        "legacyDataName": "",
        "localizedName": "Inverter Work Mode Description",
        "modpollCommand": "Invalid function: 0",
        "name": "Inverter Work Mode Description",
        "pingCommand": "",
        "register": "0",
        "scale": "if ('@47' == 0x0800)\r    return \"Derate\";\rif ('@47' == 0x1000)\r    return \"Running\";\rif ('@47' == 0x2000)\r    return \"Standby\";\rif ('@47' == 0x4000)\r    return \"Check\";\rif ('@47' == 0x8000);\r    return \"Fault\";",
        "standardAlertMessage": [],
        "standardDataName": "",
        "units": "",
        "value": "Running",
        "writeFunction": ""
      }
    },
    "key": "{\"mode\":0,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70643\",\"field\":\"Inverter Work Mode Description\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":0,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70642\",\"field\":\"Inverter Work Mode Description\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:11Z",
      "value": {
        "address": "996",
        "bustestCommand": "bustest adr=16 port=1 reg=996 function=0",
        "canModify": false,
        "hide": false,
        "identifier": "",
        "ipAddress": "16",
        "isIgnored": false,
        "isStored": false,
        "legacyDataName": "",
        "localizedName": "Inverter Work Mode Description",
        "modpollCommand": "Invalid function: 0",
        "name": "Inverter Work Mode Description",
        "pingCommand": "",
        "register": "0",
        "scale": "if ('@47' == 0x0800)\r    return \"Derate\";\rif ('@47' == 0x1000)\r    return \"Running\";\rif ('@47' == 0x2000)\r    return \"Standby\";\rif ('@47' == 0x4000)\r    return \"Check\";\rif ('@47' == 0x8000);\r    return \"Fault\";",
        "standardAlertMessage": [],
        "standardDataName": "",
        "units": "",
        "value": "Running",
        "writeFunction": ""
      }
    },
    "key": "{\"mode\":0,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70642\",\"field\":\"Inverter Work Mode Description\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":0,\"source\":\"hardwareInfo\",\"parentKey\":\"S38292\",\"key\":\"H70658\",\"field\":\"name\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:11Z",
      "value": "INV-32 CP9 - (28kW)"
    },
    "key": "{\"mode\":0,\"source\":\"hardwareInfo\",\"parentKey\":\"S38292\",\"key\":\"H70658\",\"field\":\"name\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70658\",\"field\":\"OnOff\",\"writeValue\":\"21845\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:11Z",
      "value": {
        "address": "4096",
        "bustestCommand": "bustest adr=32 port=2 reg=4096",
        "canModify": true,
        "hide": false,
        "identifier": "",
        "ipAddress": "32",
        "isIgnored": false,
        "isStored": true,
        "legacyDataName": "OnOff",
        "localizedName": "OnOff",
        "modpollCommand": "modpoll -m rtu -1 -a 32 -r 4096 -0 -t 4 -b 9600 -p none COM2",
        "name": "OnOff",
        "pingCommand": "",
        "register": "43690",
        "scale": "",
        "standardAlertMessage": [],
        "standardDataName": "",
        "units": "",
        "value": "0xAAAA",
        "writeFunction": "write6"
      }
    },
    "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70658\",\"field\":\"OnOff\",\"writeValue\":\"21845\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70658\",\"field\":\"OnOff\",\"writeValue\":\"43690\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:11Z",
      "value": {
        "address": "4096",
        "bustestCommand": "bustest adr=32 port=2 reg=4096",
        "canModify": true,
        "hide": false,
        "identifier": "",
        "ipAddress": "32",
        "isIgnored": false,
        "isStored": true,
        "legacyDataName": "OnOff",
        "localizedName": "OnOff",
        "modpollCommand": "modpoll -m rtu -1 -a 32 -r 4096 -0 -t 4 -b 9600 -p none COM2",
        "name": "OnOff",
        "pingCommand": "",
        "register": "43690",
        "scale": "",
        "standardAlertMessage": [],
        "standardDataName": "",
        "units": "",
        "value": "0xAAAA",
        "writeFunction": "write6"
      }
    },
    "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70658\",\"field\":\"OnOff\",\"writeValue\":\"43690\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":0,\"source\":\"hardwareInfo\",\"parentKey\":\"S38292\",\"key\":\"H70659\",\"field\":\"name\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:11Z",
      "value": "INV-33 CP9 - (28kW)"
    },
    "key": "{\"mode\":0,\"source\":\"hardwareInfo\",\"parentKey\":\"S38292\",\"key\":\"H70659\",\"field\":\"name\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70659\",\"field\":\"OnOff\",\"writeValue\":\"21845\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:11Z",
      "value": {
        "address": "4096",
        "bustestCommand": "bustest adr=33 port=2 reg=4096",
        "canModify": true,
        "hide": false,
        "identifier": "",
        "ipAddress": "33",
        "isIgnored": false,
        "isStored": true,
        "legacyDataName": "OnOff",
        "localizedName": "OnOff",
        "modpollCommand": "modpoll -m rtu -1 -a 33 -r 4096 -0 -t 4 -b 9600 -p none COM2",
        "name": "OnOff",
        "pingCommand": "",
        "register": "43690",
        "scale": "",
        "standardAlertMessage": [],
        "standardDataName": "",
        "units": "",
        "value": "0xAAAA",
        "writeFunction": "write6"
      }
    },
    "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70659\",\"field\":\"OnOff\",\"writeValue\":\"21845\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70659\",\"field\":\"OnOff\",\"writeValue\":\"43690\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:11Z",
      "value": {
        "address": "4096",
        "bustestCommand": "bustest adr=33 port=2 reg=4096",
        "canModify": true,
        "hide": false,
        "identifier": "",
        "ipAddress": "33",
        "isIgnored": false,
        "isStored": true,
        "legacyDataName": "OnOff",
        "localizedName": "OnOff",
        "modpollCommand": "modpoll -m rtu -1 -a 33 -r 4096 -0 -t 4 -b 9600 -p none COM2",
        "name": "OnOff",
        "pingCommand": "",
        "register": "43690",
        "scale": "",
        "standardAlertMessage": [],
        "standardDataName": "",
        "units": "",
        "value": "0xAAAA",
        "writeFunction": "write6"
      }
    },
    "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70659\",\"field\":\"OnOff\",\"writeValue\":\"43690\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":0,\"source\":\"hardwareInfo\",\"parentKey\":\"S38292\",\"key\":\"H70660\",\"field\":\"name\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:11Z",
      "value": "INV-34 CP9 - (28kW)"
    },
    "key": "{\"mode\":0,\"source\":\"hardwareInfo\",\"parentKey\":\"S38292\",\"key\":\"H70660\",\"field\":\"name\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70660\",\"field\":\"OnOff\",\"writeValue\":\"21845\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:11Z",
      "value": {
        "address": "4096",
        "bustestCommand": "bustest adr=34 port=1 reg=4096",
        "canModify": true,
        "hide": false,
        "identifier": "",
        "ipAddress": "34",
        "isIgnored": false,
        "isStored": true,
        "legacyDataName": "OnOff",
        "localizedName": "OnOff",
        "modpollCommand": "modpoll -m rtu -1 -a 34 -r 4096 -0 -t 4 -b 9600 -p none COM1",
        "name": "OnOff",
        "pingCommand": "",
        "register": "43690",
        "scale": "",
        "standardAlertMessage": [],
        "standardDataName": "",
        "units": "",
        "value": "0xAAAA",
        "writeFunction": "write6"
      }
    },
    "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70660\",\"field\":\"OnOff\",\"writeValue\":\"21845\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70660\",\"field\":\"OnOff\",\"writeValue\":\"43690\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:11Z",
      "value": {
        "address": "4096",
        "bustestCommand": "bustest adr=34 port=1 reg=4096",
        "canModify": true,
        "hide": false,
        "identifier": "",
        "ipAddress": "34",
        "isIgnored": false,
        "isStored": true,
        "legacyDataName": "OnOff",
        "localizedName": "OnOff",
        "modpollCommand": "modpoll -m rtu -1 -a 34 -r 4096 -0 -t 4 -b 9600 -p none COM1",
        "name": "OnOff",
        "pingCommand": "",
        "register": "43690",
        "scale": "",
        "standardAlertMessage": [],
        "standardDataName": "",
        "units": "",
        "value": "0xAAAA",
        "writeFunction": "write6"
      }
    },
    "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70660\",\"field\":\"OnOff\",\"writeValue\":\"43690\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":0,\"source\":\"hardwareInfo\",\"parentKey\":\"S38292\",\"key\":\"H70644\",\"field\":\"name\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:11Z",
      "value": "INV-18 CP5 - (23kW)"
    },
    "key": "{\"mode\":0,\"source\":\"hardwareInfo\",\"parentKey\":\"S38292\",\"key\":\"H70644\",\"field\":\"name\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70644\",\"field\":\"OnOff\",\"writeValue\":\"21845\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:11Z",
      "value": {
        "address": "4096",
        "bustestCommand": "bustest adr=18 port=2 reg=4096",
        "canModify": true,
        "hide": false,
        "identifier": "",
        "ipAddress": "18",
        "isIgnored": false,
        "isStored": true,
        "legacyDataName": "OnOff",
        "localizedName": "OnOff",
        "modpollCommand": "modpoll -m rtu -1 -a 18 -r 4096 -0 -t 4 -b 9600 -p none COM2",
        "name": "OnOff",
        "pingCommand": "",
        "register": "43690",
        "scale": "",
        "standardAlertMessage": [],
        "standardDataName": "",
        "units": "",
        "value": "0xAAAA",
        "writeFunction": "write6"
      }
    },
    "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70644\",\"field\":\"OnOff\",\"writeValue\":\"21845\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70644\",\"field\":\"OnOff\",\"writeValue\":\"43690\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:11Z",
      "value": {
        "address": "4096",
        "bustestCommand": "bustest adr=18 port=2 reg=4096",
        "canModify": true,
        "hide": false,
        "identifier": "",
        "ipAddress": "18",
        "isIgnored": false,
        "isStored": true,
        "legacyDataName": "OnOff",
        "localizedName": "OnOff",
        "modpollCommand": "modpoll -m rtu -1 -a 18 -r 4096 -0 -t 4 -b 9600 -p none COM2",
        "name": "OnOff",
        "pingCommand": "",
        "register": "43690",
        "scale": "",
        "standardAlertMessage": [],
        "standardDataName": "",
        "units": "",
        "value": "0xAAAA",
        "writeFunction": "write6"
      }
    },
    "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70644\",\"field\":\"OnOff\",\"writeValue\":\"43690\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":0,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70658\",\"field\":\"Inverter Work Mode Description\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:11Z",
      "value": {
        "address": "996",
        "bustestCommand": "bustest adr=32 port=2 reg=996 function=0",
        "canModify": false,
        "hide": false,
        "identifier": "",
        "ipAddress": "32",
        "isIgnored": false,
        "isStored": false,
        "legacyDataName": "",
        "localizedName": "Inverter Work Mode Description",
        "modpollCommand": "Invalid function: 0",
        "name": "Inverter Work Mode Description",
        "pingCommand": "",
        "register": "0",
        "scale": "if ('@47' == 0x0800)\r    return \"Derate\";\rif ('@47' == 0x1000)\r    return \"Running\";\rif ('@47' == 0x2000)\r    return \"Standby\";\rif ('@47' == 0x4000)\r    return \"Check\";\rif ('@47' == 0x8000);\r    return \"Fault\";",
        "standardAlertMessage": [],
        "standardDataName": "",
        "units": "",
        "value": "Running",
        "writeFunction": ""
      }
    },
    "key": "{\"mode\":0,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70658\",\"field\":\"Inverter Work Mode Description\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":0,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70644\",\"field\":\"Inverter Work Mode Description\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:11Z",
      "value": {
        "address": "996",
        "bustestCommand": "bustest adr=18 port=2 reg=996 function=0",
        "canModify": false,
        "hide": false,
        "identifier": "",
        "ipAddress": "18",
        "isIgnored": false,
        "isStored": false,
        "legacyDataName": "",
        "localizedName": "Inverter Work Mode Description",
        "modpollCommand": "Invalid function: 0",
        "name": "Inverter Work Mode Description",
        "pingCommand": "",
        "register": "0",
        "scale": "if ('@47' == 0x0800)\r    return \"Derate\";\rif ('@47' == 0x1000)\r    return \"Running\";\rif ('@47' == 0x2000)\r    return \"Standby\";\rif ('@47' == 0x4000)\r    return \"Check\";\rif ('@47' == 0x8000);\r    return \"Fault\";",
        "standardAlertMessage": [],
        "standardDataName": "",
        "units": "",
        "value": "Running",
        "writeFunction": ""
      }
    },
    "key": "{\"mode\":0,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70644\",\"field\":\"Inverter Work Mode Description\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":0,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70660\",\"field\":\"Inverter Work Mode Description\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:11Z",
      "value": {
        "address": "996",
        "bustestCommand": "bustest adr=34 port=1 reg=996 function=0",
        "canModify": false,
        "hide": false,
        "identifier": "",
        "ipAddress": "34",
        "isIgnored": false,
        "isStored": false,
        "legacyDataName": "",
        "localizedName": "Inverter Work Mode Description",
        "modpollCommand": "Invalid function: 0",
        "name": "Inverter Work Mode Description",
        "pingCommand": "",
        "register": "0",
        "scale": "if ('@47' == 0x0800)\r    return \"Derate\";\rif ('@47' == 0x1000)\r    return \"Running\";\rif ('@47' == 0x2000)\r    return \"Standby\";\rif ('@47' == 0x4000)\r    return \"Check\";\rif ('@47' == 0x8000);\r    return \"Fault\";",
        "standardAlertMessage": [],
        "standardDataName": "",
        "units": "",
        "value": "Running",
        "writeFunction": ""
      }
    },
    "key": "{\"mode\":0,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70660\",\"field\":\"Inverter Work Mode Description\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":0,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70659\",\"field\":\"Inverter Work Mode Description\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:11Z",
      "value": {
        "address": "996",
        "bustestCommand": "bustest adr=33 port=2 reg=996 function=0",
        "canModify": false,
        "hide": false,
        "identifier": "",
        "ipAddress": "33",
        "isIgnored": false,
        "isStored": false,
        "legacyDataName": "",
        "localizedName": "Inverter Work Mode Description",
        "modpollCommand": "Invalid function: 0",
        "name": "Inverter Work Mode Description",
        "pingCommand": "",
        "register": "0",
        "scale": "if ('@47' == 0x0800)\r    return \"Derate\";\rif ('@47' == 0x1000)\r    return \"Running\";\rif ('@47' == 0x2000)\r    return \"Standby\";\rif ('@47' == 0x4000)\r    return \"Check\";\rif ('@47' == 0x8000);\r    return \"Fault\";",
        "standardAlertMessage": [],
        "standardDataName": "",
        "units": "",
        "value": "Running",
        "writeFunction": ""
      }
    },
    "key": "{\"mode\":0,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70659\",\"field\":\"Inverter Work Mode Description\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":0,\"source\":\"hardwareInfo\",\"parentKey\":\"S38292\",\"key\":\"H70662\",\"field\":\"name\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:11Z",
      "value": "INV-36 CP10 - (28kW)"
    },
    "key": "{\"mode\":0,\"source\":\"hardwareInfo\",\"parentKey\":\"S38292\",\"key\":\"H70662\",\"field\":\"name\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70662\",\"field\":\"OnOff\",\"writeValue\":\"21845\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:11Z",
      "value": {
        "address": "4096",
        "bustestCommand": "bustest adr=36 port=1 reg=4096",
        "canModify": true,
        "hide": false,
        "identifier": "",
        "ipAddress": "36",
        "isIgnored": false,
        "isStored": true,
        "legacyDataName": "OnOff",
        "localizedName": "OnOff",
        "modpollCommand": "modpoll -m rtu -1 -a 36 -r 4096 -0 -t 4 -b 9600 -p none COM1",
        "name": "OnOff",
        "pingCommand": "",
        "register": "43690",
        "scale": "",
        "standardAlertMessage": [],
        "standardDataName": "",
        "units": "",
        "value": "0xAAAA",
        "writeFunction": "write6"
      }
    },
    "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70662\",\"field\":\"OnOff\",\"writeValue\":\"21845\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70662\",\"field\":\"OnOff\",\"writeValue\":\"43690\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:11Z",
      "value": {
        "address": "4096",
        "bustestCommand": "bustest adr=36 port=1 reg=4096",
        "canModify": true,
        "hide": false,
        "identifier": "",
        "ipAddress": "36",
        "isIgnored": false,
        "isStored": true,
        "legacyDataName": "OnOff",
        "localizedName": "OnOff",
        "modpollCommand": "modpoll -m rtu -1 -a 36 -r 4096 -0 -t 4 -b 9600 -p none COM1",
        "name": "OnOff",
        "pingCommand": "",
        "register": "43690",
        "scale": "",
        "standardAlertMessage": [],
        "standardDataName": "",
        "units": "",
        "value": "0xAAAA",
        "writeFunction": "write6"
      }
    },
    "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70662\",\"field\":\"OnOff\",\"writeValue\":\"43690\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":0,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70662\",\"field\":\"Inverter Work Mode Description\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:11Z",
      "value": {
        "address": "996",
        "bustestCommand": "bustest adr=36 port=1 reg=996 function=0",
        "canModify": false,
        "hide": false,
        "identifier": "",
        "ipAddress": "36",
        "isIgnored": false,
        "isStored": false,
        "legacyDataName": "",
        "localizedName": "Inverter Work Mode Description",
        "modpollCommand": "Invalid function: 0",
        "name": "Inverter Work Mode Description",
        "pingCommand": "",
        "register": "0",
        "scale": "if ('@47' == 0x0800)\r    return \"Derate\";\rif ('@47' == 0x1000)\r    return \"Running\";\rif ('@47' == 0x2000)\r    return \"Standby\";\rif ('@47' == 0x4000)\r    return \"Check\";\rif ('@47' == 0x8000);\r    return \"Fault\";",
        "standardAlertMessage": [],
        "standardDataName": "",
        "units": "",
        "value": "Running",
        "writeFunction": ""
      }
    },
    "key": "{\"mode\":0,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70662\",\"field\":\"Inverter Work Mode Description\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":0,\"source\":\"hardwareInfo\",\"parentKey\":\"S38292\",\"key\":\"H70661\",\"field\":\"name\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:11Z",
      "value": "INV-35 CP10 - (36kW)"
    },
    "key": "{\"mode\":0,\"source\":\"hardwareInfo\",\"parentKey\":\"S38292\",\"key\":\"H70661\",\"field\":\"name\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70661\",\"field\":\"OnOff\",\"writeValue\":\"21845\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:11Z",
      "value": {
        "address": "4096",
        "bustestCommand": "bustest adr=35 port=1 reg=4096",
        "canModify": true,
        "hide": false,
        "identifier": "",
        "ipAddress": "35",
        "isIgnored": false,
        "isStored": true,
        "legacyDataName": "OnOff",
        "localizedName": "OnOff",
        "modpollCommand": "modpoll -m rtu -1 -a 35 -r 4096 -0 -t 4 -b 9600 -p none COM1",
        "name": "OnOff",
        "pingCommand": "",
        "register": "43690",
        "scale": "",
        "standardAlertMessage": [],
        "standardDataName": "",
        "units": "",
        "value": "0xAAAA",
        "writeFunction": "write6"
      }
    },
    "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70661\",\"field\":\"OnOff\",\"writeValue\":\"21845\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70661\",\"field\":\"OnOff\",\"writeValue\":\"43690\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:11Z",
      "value": {
        "address": "4096",
        "bustestCommand": "bustest adr=35 port=1 reg=4096",
        "canModify": true,
        "hide": false,
        "identifier": "",
        "ipAddress": "35",
        "isIgnored": false,
        "isStored": true,
        "legacyDataName": "OnOff",
        "localizedName": "OnOff",
        "modpollCommand": "modpoll -m rtu -1 -a 35 -r 4096 -0 -t 4 -b 9600 -p none COM1",
        "name": "OnOff",
        "pingCommand": "",
        "register": "43690",
        "scale": "",
        "standardAlertMessage": [],
        "standardDataName": "",
        "units": "",
        "value": "0xAAAA",
        "writeFunction": "write6"
      }
    },
    "key": "{\"mode\":2,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70661\",\"field\":\"OnOff\",\"writeValue\":\"43690\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  },
  {
    "item": {
      "key": "{\"mode\":0,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70661\",\"field\":\"Inverter Work Mode Description\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}",
      "lastChanged": "2025-12-19T20:06:11Z",
      "value": {
        "address": "996",
        "bustestCommand": "bustest adr=35 port=1 reg=996 function=0",
        "canModify": false,
        "hide": false,
        "identifier": "",
        "ipAddress": "35",
        "isIgnored": false,
        "isStored": false,
        "legacyDataName": "",
        "localizedName": "Inverter Work Mode Description",
        "modpollCommand": "Invalid function: 0",
        "name": "Inverter Work Mode Description",
        "pingCommand": "",
        "register": "0",
        "scale": "if ('@47' == 0x0800)\r    return \"Derate\";\rif ('@47' == 0x1000)\r    return \"Running\";\rif ('@47' == 0x2000)\r    return \"Standby\";\rif ('@47' == 0x4000)\r    return \"Check\";\rif ('@47' == 0x8000);\r    return \"Fault\";",
        "standardAlertMessage": [],
        "standardDataName": "",
        "units": "",
        "value": "Running",
        "writeFunction": ""
      }
    },
    "key": "{\"mode\":0,\"source\":\"hardwareRegister\",\"parentKey\":\"S38292\",\"key\":\"H70661\",\"field\":\"Inverter Work Mode Description\",\"writeValue\":\"\",\"writeValueAdditional\":\"\",\"useGlobalSite\":false}"
  }
]
```

