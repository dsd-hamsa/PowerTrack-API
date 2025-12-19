# `/api/view/sitehardwareproduction/{site_id}`

[← Back to Index](../README.md)



**Methods:** GET  
**Status Codes:** 200  
**Call Count:** 2  

#### Response Structure

```json
{
  "type": "object",
  "properties": {
    "lastChanged": {
      "type": "string"
    },
    "hardware": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {}
      }
    },
    "timeZone": {
      "type": "string"
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
GET /api/view/sitehardwareproduction/S38292?lastChanged=1900-01-01T00:00:00.000Z
Accept: application/json
Referer: https://www.alsoenergy.com
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
```

**Response:**

```json
{
  "hardware": [
    {
      "capacityKW": null,
      "communicationResult": 0,
      "dataRegisters": [
        {
          "dataType": 0,
          "formattedValue": "24.1 \tV",
          "name": "DevicePower",
          "unit": 2,
          "value": 24.1
        },
        {
          "dataType": 0,
          "formattedValue": "-50 \t ",
          "name": "RSSI",
          "unit": 0,
          "value": -50
        },
        {
          "dataType": 0,
          "formattedValue": "32 \t\u00b0F",
          "name": "BoardTemp",
          "unit": 30,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "52,992,157 \t ",
          "name": "BytesSent",
          "unit": 1,
          "value": 52992157
        },
        {
          "dataType": 0,
          "formattedValue": "33,041,585 \t ",
          "name": "BytesReceived",
          "unit": 1,
          "value": 33041585
        },
        {
          "dataType": 0,
          "formattedValue": "\u2014",
          "name": "IP",
          "unit": 0,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "DailyUsage",
          "unit": 1,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "MonthlyUsage",
          "unit": 1,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "74 \t ",
          "name": "DailyUsageSIM1",
          "unit": 1,
          "value": 74
        },
        {
          "dataType": 0,
          "formattedValue": "1,794 \t ",
          "name": "MonthlyUsageSIM1",
          "unit": 1,
          "value": 1794
        },
        {
          "dataType": 0,
          "formattedValue": "74 \t ",
          "name": "DailyUsageN",
          "unit": 1,
          "value": 74
        },
        {
          "dataType": 0,
          "formattedValue": "1,794 \t ",
          "name": "MonthlyUsageN",
          "unit": 1,
          "value": 1794
        }
      ],
      "defaultChart": 0,
      "description": "Cell Modem (RV50)",
      "deviceImage": {
        "contentType": "",
        "key": "",
        "lastChanged": null,
        "name": "DA_V1562",
        "uri": "https://www.alsoenergy.com/pub/Images/Device/1562.png"
      },
      "functionCode": 11,
      "hardwareStatus": 1,
      "installDate": "2016-08-09",
      "inverterKw": 0,
      "key": "H70698",
      "lastAttempt": "2025-12-19T19:58:18Z",
      "lastChanged": "2024-07-12T13:59:07Z",
      "lastData": "",
      "lastSuccess": "2025-12-19T19:58:12Z",
      "name": "Cell Modem (RV50)",
      "outOfService": false,
      "primaryMetric": "",
      "primaryMetricName": 0,
      "serialNum": "LT62320336011026",
      "sortOrder": 1,
      "units": 0,
      "unitsScale": "NaN"
    },
    {
      "capacityKW": 909,
      "communicationResult": 0,
      "dataRegisters": [],
      "defaultChart": 0,
      "description": "Data Logger #1",
      "deviceImage": {
        "contentType": "",
        "key": "",
        "lastChanged": null,
        "name": "GW_V201",
        "uri": "https://www.alsoenergy.com/pub/Images/Device/201.png"
      },
      "functionCode": 10,
      "hardwareStatus": 1,
      "installDate": "2016-08-07",
      "inverterKw": 0,
      "key": "H70611",
      "lastAttempt": "2025-12-19T19:59:32Z",
      "lastChanged": "2023-02-13T21:27:56Z",
      "lastData": "",
      "lastSuccess": "2025-12-19T19:58:58Z",
      "name": "Data Logger #1",
      "outOfService": false,
      "primaryMetric": "",
      "primaryMetricName": 0,
      "serialNum": "",
      "sortOrder": 3,
      "units": 0,
      "unitsScale": "NaN"
    },
    {
      "capacityKW": 1076,
      "communicationResult": 0,
      "dataRegisters": [],
      "defaultChart": 0,
      "description": "Data Logger #2",
      "deviceImage": {
        "contentType": "",
        "key": "",
        "lastChanged": null,
        "name": "GW_V201",
        "uri": "https://www.alsoenergy.com/pub/Images/Device/201.png"
      },
      "functionCode": 10,
      "hardwareStatus": 1,
      "installDate": "2016-08-08",
      "inverterKw": 0,
      "key": "H70612",
      "lastAttempt": "2025-12-19T20:01:01Z",
      "lastChanged": "2023-02-13T21:32:16Z",
      "lastData": "",
      "lastSuccess": "2025-12-19T20:00:00Z",
      "name": "Data Logger #2",
      "outOfService": false,
      "primaryMetric": "",
      "primaryMetricName": 0,
      "serialNum": "",
      "sortOrder": 4,
      "units": 0,
      "unitsScale": "NaN"
    },
    {
      "capacityKW": 1985,
      "communicationResult": 0,
      "dataRegisters": [],
      "defaultChart": 0,
      "description": "Data Logger #3",
      "deviceImage": {
        "contentType": "",
        "key": "",
        "lastChanged": null,
        "name": "GW_V201",
        "uri": "https://www.alsoenergy.com/pub/Images/Device/201.png"
      },
      "functionCode": 10,
      "hardwareStatus": 1,
      "installDate": "2016-08-07",
      "inverterKw": 0,
      "key": "H70613",
      "lastAttempt": "2025-12-19T20:01:02Z",
      "lastChanged": "2023-02-13T21:26:54Z",
      "lastData": "",
      "lastSuccess": "2025-12-19T20:01:02Z",
      "name": "Data Logger #3",
      "outOfService": false,
      "primaryMetric": "",
      "primaryMetricName": 0,
      "serialNum": "",
      "sortOrder": 5,
      "units": 0,
      "unitsScale": "NaN"
    },
    {
      "capacityKW": null,
      "communicationResult": 0,
      "dataRegisters": [],
      "defaultChart": 0,
      "description": "PowerLogger1000 #4",
      "deviceImage": {
        "contentType": "",
        "key": "",
        "lastChanged": null,
        "name": "GW_V325",
        "uri": "https://www.alsoenergy.com/pub/Images/Device/325.png"
      },
      "functionCode": 10,
      "hardwareStatus": 1,
      "installDate": "2017-09-16",
      "inverterKw": 0,
      "key": "H112193",
      "lastAttempt": "2025-12-19T20:00:29Z",
      "lastChanged": "2023-02-13T21:24:06Z",
      "lastData": "",
      "lastSuccess": "2025-12-19T20:00:17Z",
      "name": "PowerLogger1000 #4",
      "outOfService": false,
      "primaryMetric": "",
      "primaryMetricName": 0,
      "serialNum": "",
      "sortOrder": 6,
      "units": 0,
      "unitsScale": "NaN"
    },
    {
      "capacityKW": 1985,
      "communicationResult": 0,
      "dataRegisters": [
        {
          "dataType": 0,
          "formattedValue": "21.5 \tGWh",
          "name": "KWHnet",
          "unit": 11,
          "value": 21508644
        },
        {
          "dataType": 0,
          "formattedValue": "56.9 \tkW",
          "name": "KW",
          "unit": 10,
          "value": 56.87224578857422
        },
        {
          "dataType": 0,
          "formattedValue": "-0.915 \tPF",
          "name": "PowerFactor",
          "unit": 39,
          "value": -0.9147747755050659
        },
        {
          "dataType": 0,
          "formattedValue": "21.5 \tGWh",
          "name": "KWHrec",
          "unit": 11,
          "value": 21529904
        },
        {
          "dataType": 0,
          "formattedValue": "21.3 \tMWh",
          "name": "KWHdel",
          "unit": 11,
          "value": 21259.767578125
        },
        {
          "dataType": 0,
          "formattedValue": "7,946 \tV",
          "name": "VacA",
          "unit": 2,
          "value": 7945.85986328125
        },
        {
          "dataType": 0,
          "formattedValue": "8,053 \tV",
          "name": "VacB",
          "unit": 2,
          "value": 8052.5517578125
        },
        {
          "dataType": 0,
          "formattedValue": "8,113 \tV",
          "name": "VacC",
          "unit": 2,
          "value": 8113.39208984375
        },
        {
          "dataType": 0,
          "formattedValue": "13,924 \tV",
          "name": "VacAB",
          "unit": 2,
          "value": 13924.400390625
        },
        {
          "dataType": 0,
          "formattedValue": "13,942 \tV",
          "name": "VacBC",
          "unit": 2,
          "value": 13942.4501953125
        },
        {
          "dataType": 0,
          "formattedValue": "13,890 \tV",
          "name": "VacCA",
          "unit": 2,
          "value": 13890.4501953125
        },
        {
          "dataType": 0,
          "formattedValue": "2.81 \tA",
          "name": "IacA",
          "unit": 4,
          "value": 2.8118999004364014
        },
        {
          "dataType": 0,
          "formattedValue": "2.35 \tA",
          "name": "IacB",
          "unit": 4,
          "value": 2.34689998626709
        },
        {
          "dataType": 0,
          "formattedValue": "2.49 \tA",
          "name": "IacC",
          "unit": 4,
          "value": 2.4881250858306885
        }
      ],
      "defaultChart": 15,
      "description": "Production Meter  (MarkII)",
      "deviceImage": {
        "contentType": "",
        "key": "",
        "lastChanged": null,
        "name": "PM_V809",
        "uri": "https://www.alsoenergy.com/pub/Images/Device/809.png"
      },
      "functionCode": 2,
      "hardwareStatus": 1,
      "installDate": "2016-08-04",
      "inverterKw": 0,
      "key": "H70614",
      "lastAttempt": "2025-12-19T19:58:57Z",
      "lastChanged": "2023-05-29T05:05:44Z",
      "lastData": "56.9 kW",
      "lastSuccess": "2025-12-19T19:58:42Z",
      "name": "Production Meter  (MarkII)",
      "outOfService": false,
      "primaryMetric": "56.9 kW",
      "primaryMetricName": 2,
      "serialNum": "10825",
      "sortOrder": 7,
      "units": 10,
      "unitsScale": 1000
    },
    {
      "capacityKW": 36,
      "communicationResult": 0,
      "dataRegisters": [
        {
          "dataType": 0,
          "formattedValue": "0 \tWh",
          "name": "KWHnet",
          "unit": 11,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \tW",
          "name": "KW",
          "unit": 10,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "1 \tPF",
          "name": "PowerFactor",
          "unit": 39,
          "value": 1
        },
        {
          "dataType": 0,
          "formattedValue": "0 \tWh",
          "name": "KWHrec",
          "unit": 11,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \tWh",
          "name": "KWHdel",
          "unit": 11,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \tV",
          "name": "VacA",
          "unit": 2,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \tV",
          "name": "VacB",
          "unit": 2,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \tV",
          "name": "VacC",
          "unit": 2,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \tV",
          "name": "VacAB",
          "unit": 2,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \tV",
          "name": "VacBC",
          "unit": 2,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \tV",
          "name": "VacCA",
          "unit": 2,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \tA",
          "name": "IacA",
          "unit": 4,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \tA",
          "name": "IacB",
          "unit": 4,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \tA",
          "name": "IacC",
          "unit": 4,
          "value": 0
        }
      ],
      "defaultChart": 15,
      "description": "Consumption Meter  (MarkII)",
      "deviceImage": {
        "contentType": "",
        "key": "",
        "lastChanged": null,
        "name": "PM_V809",
        "uri": "https://www.alsoenergy.com/pub/Images/Device/809.png"
      },
      "functionCode": 2,
      "hardwareStatus": 4,
      "installDate": "2016-08-04",
      "inverterKw": 0,
      "key": "H70615",
      "lastAttempt": "2017-01-17T16:53:31Z",
      "lastChanged": "2023-05-29T10:09:35Z",
      "lastData": "0 W",
      "lastSuccess": "2017-01-17T16:53:17Z",
      "name": "Consumption Meter  (MarkII)",
      "outOfService": false,
      "primaryMetric": "0 W",
      "primaryMetricName": 2,
      "serialNum": "10829",
      "sortOrder": 8,
      "units": 8,
      "unitsScale": 1
    },
    {
      "capacityKW": 1926,
      "communicationResult": 0,
      "dataRegisters": [
        {
          "dataType": 0,
          "formattedValue": "9 \tkWh",
          "name": "KWHdel",
          "unit": 11,
          "value": 9
        },
        {
          "dataType": 0,
          "formattedValue": "9 \tkWh",
          "name": "KWHrec",
          "unit": 11,
          "value": 9
        },
        {
          "dataType": 0,
          "formattedValue": "\u2013",
          "name": "KW",
          "unit": 10,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "0 \tWh",
          "name": "KWHnet",
          "unit": 11,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "\u2013",
          "name": "KWRec",
          "unit": 10,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "\u2013",
          "name": "KWDel",
          "unit": 10,
          "value": "NaN"
        }
      ],
      "defaultChart": 15,
      "description": "KYZ Pulse Meter",
      "deviceImage": {
        "contentType": "",
        "key": "",
        "lastChanged": null,
        "name": "PM_V834",
        "uri": "https://www.alsoenergy.com/pub/Images/Device/834.png"
      },
      "functionCode": 2,
      "hardwareStatus": 3,
      "installDate": "2016-12-27",
      "inverterKw": 0,
      "key": "H88448",
      "lastAttempt": "2017-09-11T14:01:06Z",
      "lastChanged": "2023-05-29T10:09:37Z",
      "lastData": "",
      "lastSuccess": "2017-09-11T14:00:34Z",
      "name": "KYZ Pulse Meter",
      "outOfService": false,
      "primaryMetric": "",
      "primaryMetricName": 0,
      "serialNum": "",
      "sortOrder": 9,
      "units": 10,
      "unitsScale": 1000
    },
    {
      "capacityKW": 23,
      "communicationResult": 0,
      "dataRegisters": [
        {
          "dataType": 0,
          "formattedValue": "800 \tW",
          "name": "KwAC",
          "unit": 10,
          "value": 0.8
        },
        {
          "dataType": 0,
          "formattedValue": "265 \tMWh",
          "name": "KwhAC",
          "unit": 11,
          "value": 264750
        },
        {
          "dataType": 0,
          "formattedValue": "484 \tV",
          "name": "VacAB",
          "unit": 2,
          "value": 484.5
        },
        {
          "dataType": 0,
          "formattedValue": "484 \tV",
          "name": "VacBC",
          "unit": 2,
          "value": 484.3
        },
        {
          "dataType": 0,
          "formattedValue": "482 \tV",
          "name": "VacCA",
          "unit": 2,
          "value": 481.8
        },
        {
          "dataType": 0,
          "formattedValue": "1 \tA",
          "name": "IacA",
          "unit": 4,
          "value": 1
        },
        {
          "dataType": 0,
          "formattedValue": "1 \tA",
          "name": "IacB",
          "unit": 4,
          "value": 1
        },
        {
          "dataType": 0,
          "formattedValue": "1 \tA",
          "name": "IacC",
          "unit": 4,
          "value": 1
        },
        {
          "dataType": 0,
          "formattedValue": "693 \tV",
          "name": "Vdc1",
          "unit": 2,
          "value": 693.3000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "0.4 \tA",
          "name": "Idc1",
          "unit": 4,
          "value": 0.4
        },
        {
          "dataType": 0,
          "formattedValue": "693 \tV",
          "name": "Vdc2",
          "unit": 2,
          "value": 692.9000000000001
        },
        {
          "dataType": 0,
          "formattedValue": " \tV",
          "name": "Vdc3",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "0.4 \tA",
          "name": "Idc2",
          "unit": 4,
          "value": 0.4
        },
        {
          "dataType": 0,
          "formattedValue": " \tA",
          "name": "Idc3",
          "unit": 4,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "0.8 \tA",
          "name": "Idc",
          "unit": 4,
          "value": 0.8
        },
        {
          "dataType": 0,
          "formattedValue": "693 \tV",
          "name": "Vdc",
          "unit": 2,
          "value": 693.1
        },
        {
          "dataType": 0,
          "formattedValue": "0.577 \tA",
          "name": "Iac",
          "unit": 4,
          "value": 0.577350538379377
        },
        {
          "dataType": 0,
          "formattedValue": "280 \tV",
          "name": "Vac",
          "unit": 2,
          "value": 279.72633584480815
        },
        {
          "dataType": 0,
          "formattedValue": "62.4 \t\u00b0F",
          "name": "DeviceTemp",
          "unit": 30,
          "value": 16.900000000000002
        },
        {
          "dataType": 0,
          "formattedValue": "46.8 \t\u00b0F",
          "name": "InternalTemp",
          "unit": 30,
          "value": 8.200000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "31.8 \t\u00b0F",
          "name": "Temp_XMFR",
          "unit": 30,
          "value": -0.1
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Warning",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault0",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault1",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault2",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault3",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault4",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "43,690 \t ",
          "name": "OnOff",
          "unit": 0,
          "value": 43690
        },
        {
          "dataType": 0,
          "formattedValue": "100 \t%",
          "name": "LimitKW",
          "unit": 56,
          "value": 100
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rapm",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rrpm",
          "unit": 0,
          "value": 0
        }
      ],
      "defaultChart": 2,
      "description": "INV-01 CP1 - (23kW)",
      "deviceImage": {
        "contentType": "",
        "key": "",
        "lastChanged": null,
        "name": "PV_V1844",
        "uri": "https://www.alsoenergy.com/pub/Images/Device/1844.png"
      },
      "functionCode": 1,
      "hardwareStatus": 1,
      "installDate": "1997-06-15",
      "inverterKw": 23,
      "key": "H70627",
      "lastAttempt": "2025-12-19T19:59:34Z",
      "lastChanged": "2025-12-12T23:26:10Z",
      "lastData": "800 W",
      "lastSuccess": "2025-12-19T19:58:59Z",
      "name": "INV-01 CP1 - (23kW)",
      "outOfService": false,
      "primaryMetric": "800 W",
      "primaryMetricName": 38,
      "serialNum": "1012971545185",
      "sortOrder": 11,
      "units": 8,
      "unitsScale": 1
    },
    {
      "capacityKW": 36,
      "communicationResult": 0,
      "dataRegisters": [
        {
          "dataType": 0,
          "formattedValue": "1.3 \tkW",
          "name": "KwAC",
          "unit": 10,
          "value": 1.3
        },
        {
          "dataType": 0,
          "formattedValue": "410 \tMWh",
          "name": "KwhAC",
          "unit": 11,
          "value": 409990
        },
        {
          "dataType": 0,
          "formattedValue": "484 \tV",
          "name": "VacAB",
          "unit": 2,
          "value": 483.8
        },
        {
          "dataType": 0,
          "formattedValue": "484 \tV",
          "name": "VacBC",
          "unit": 2,
          "value": 483.5
        },
        {
          "dataType": 0,
          "formattedValue": "482 \tV",
          "name": "VacCA",
          "unit": 2,
          "value": 481.5
        },
        {
          "dataType": 0,
          "formattedValue": "1.7 \tA",
          "name": "IacA",
          "unit": 4,
          "value": 1.7000000000000002
        },
        {
          "dataType": 0,
          "formattedValue": "1.5 \tA",
          "name": "IacB",
          "unit": 4,
          "value": 1.5
        },
        {
          "dataType": 0,
          "formattedValue": "1.5 \tA",
          "name": "IacC",
          "unit": 4,
          "value": 1.5
        },
        {
          "dataType": 0,
          "formattedValue": "687 \tV",
          "name": "Vdc1",
          "unit": 2,
          "value": 686.6
        },
        {
          "dataType": 0,
          "formattedValue": "1.1 \tA",
          "name": "Idc1",
          "unit": 4,
          "value": 1.1
        },
        {
          "dataType": 0,
          "formattedValue": "697 \tV",
          "name": "Vdc2",
          "unit": 2,
          "value": 697.4000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "0 \tV",
          "name": "Vdc3",
          "unit": 2,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0.4 \tA",
          "name": "Idc2",
          "unit": 4,
          "value": 0.4
        },
        {
          "dataType": 0,
          "formattedValue": "0 \tA",
          "name": "Idc3",
          "unit": 4,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "1.5 \tA",
          "name": "Idc",
          "unit": 4,
          "value": 1.5
        },
        {
          "dataType": 0,
          "formattedValue": "461 \tV",
          "name": "Vdc",
          "unit": 2,
          "value": 461.3333333333333
        },
        {
          "dataType": 0,
          "formattedValue": "0.905 \tA",
          "name": "Iac",
          "unit": 4,
          "value": 0.904515843461024
        },
        {
          "dataType": 0,
          "formattedValue": "279 \tV",
          "name": "Vac",
          "unit": 2,
          "value": 279.3221904679426
        },
        {
          "dataType": 0,
          "formattedValue": "67.5 \t\u00b0F",
          "name": "DeviceTemp",
          "unit": 30,
          "value": 19.700000000000003
        },
        {
          "dataType": 0,
          "formattedValue": "48.9 \t\u00b0F",
          "name": "InternalTemp",
          "unit": 30,
          "value": 9.4
        },
        {
          "dataType": 0,
          "formattedValue": "31.8 \t\u00b0F",
          "name": "Temp_XMFR",
          "unit": 30,
          "value": -0.1
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Warning",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault0",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault1",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault2",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault3",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault4",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "43,690 \t ",
          "name": "OnOff",
          "unit": 0,
          "value": 43690
        },
        {
          "dataType": 0,
          "formattedValue": "100 \t%",
          "name": "LimitKW",
          "unit": 56,
          "value": 100
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rapm",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rrpm",
          "unit": 0,
          "value": 0
        }
      ],
      "defaultChart": 2,
      "description": "INV-02 CP1 - (36kW)",
      "deviceImage": {
        "contentType": "",
        "key": "",
        "lastChanged": null,
        "name": "PV_V1844",
        "uri": "https://www.alsoenergy.com/pub/Images/Device/1844.png"
      },
      "functionCode": 1,
      "hardwareStatus": 1,
      "installDate": "2016-07-27",
      "inverterKw": 36,
      "key": "H70628",
      "lastAttempt": "2025-12-19T19:59:35Z",
      "lastChanged": "2025-12-12T23:26:15Z",
      "lastData": "1.3 kW",
      "lastSuccess": "2025-12-19T19:59:00Z",
      "name": "INV-02 CP1 - (36kW)",
      "outOfService": false,
      "primaryMetric": "1.3 kW",
      "primaryMetricName": 38,
      "serialNum": "1012791548149",
      "sortOrder": 12,
      "units": 10,
      "unitsScale": 1000
    },
    {
      "capacityKW": 36,
      "communicationResult": 0,
      "dataRegisters": [
        {
          "dataType": 0,
          "formattedValue": "1.3 \tkW",
          "name": "KwAC",
          "unit": 10,
          "value": 1.3
        },
        {
          "dataType": 0,
          "formattedValue": "192 \tMWh",
          "name": "KwhAC",
          "unit": 11,
          "value": 191869
        },
        {
          "dataType": 0,
          "formattedValue": "483 \tV",
          "name": "VacAB",
          "unit": 2,
          "value": 483.1
        },
        {
          "dataType": 0,
          "formattedValue": "484 \tV",
          "name": "VacBC",
          "unit": 2,
          "value": 484.1
        },
        {
          "dataType": 0,
          "formattedValue": "481 \tV",
          "name": "VacCA",
          "unit": 2,
          "value": 481.3
        },
        {
          "dataType": 0,
          "formattedValue": "1.5 \tA",
          "name": "IacA",
          "unit": 4,
          "value": 1.5
        },
        {
          "dataType": 0,
          "formattedValue": "1.3 \tA",
          "name": "IacB",
          "unit": 4,
          "value": 1.3
        },
        {
          "dataType": 0,
          "formattedValue": "1.5 \tA",
          "name": "IacC",
          "unit": 4,
          "value": 1.5
        },
        {
          "dataType": 0,
          "formattedValue": "688 \tV",
          "name": "Vdc1",
          "unit": 2,
          "value": 688.1
        },
        {
          "dataType": 0,
          "formattedValue": "0.7 \tA",
          "name": "Idc1",
          "unit": 4,
          "value": 0.7000000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "691 \tV",
          "name": "Vdc2",
          "unit": 2,
          "value": 691.4000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "0 \tV",
          "name": "Vdc3",
          "unit": 2,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0.6 \tA",
          "name": "Idc2",
          "unit": 4,
          "value": 0.6000000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "0 \tA",
          "name": "Idc3",
          "unit": 4,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "1.3 \tA",
          "name": "Idc",
          "unit": 4,
          "value": 1.3
        },
        {
          "dataType": 0,
          "formattedValue": "460 \tV",
          "name": "Vdc",
          "unit": 2,
          "value": 459.8333333333333
        },
        {
          "dataType": 0,
          "formattedValue": "0.828 \tA",
          "name": "Iac",
          "unit": 4,
          "value": 0.827535771677107
        },
        {
          "dataType": 0,
          "formattedValue": "279 \tV",
          "name": "Vac",
          "unit": 2,
          "value": 278.91804509107703
        },
        {
          "dataType": 0,
          "formattedValue": "67.1 \t\u00b0F",
          "name": "DeviceTemp",
          "unit": 30,
          "value": 19.5
        },
        {
          "dataType": 0,
          "formattedValue": "48.6 \t\u00b0F",
          "name": "InternalTemp",
          "unit": 30,
          "value": 9.200000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "31.8 \t\u00b0F",
          "name": "Temp_XMFR",
          "unit": 30,
          "value": -0.1
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Warning",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault0",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault1",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault2",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault3",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault4",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "43,690 \t ",
          "name": "OnOff",
          "unit": 0,
          "value": 43690
        },
        {
          "dataType": 0,
          "formattedValue": "100 \t%",
          "name": "LimitKW",
          "unit": 56,
          "value": 100
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rapm",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rrpm",
          "unit": 0,
          "value": 0
        }
      ],
      "defaultChart": 2,
      "description": "INV-03 CP1 - (36kW)",
      "deviceImage": {
        "contentType": "",
        "key": "",
        "lastChanged": null,
        "name": "PV_V1844",
        "uri": "https://www.alsoenergy.com/pub/Images/Device/1844.png"
      },
      "functionCode": 1,
      "hardwareStatus": 1,
      "installDate": "2016-07-25",
      "inverterKw": 36,
      "key": "H70629",
      "lastAttempt": "2025-12-19T19:59:39Z",
      "lastChanged": "2025-12-12T23:26:20Z",
      "lastData": "1.3 kW",
      "lastSuccess": "2025-12-19T19:59:01Z",
      "name": "INV-03 CP1 - (36kW)",
      "outOfService": false,
      "primaryMetric": "1.3 kW",
      "primaryMetricName": 38,
      "serialNum": "1012791544066",
      "sortOrder": 13,
      "units": 10,
      "unitsScale": 1000
    },
    {
      "capacityKW": 23,
      "communicationResult": 0,
      "dataRegisters": [
        {
          "dataType": 0,
          "formattedValue": "700 \tW",
          "name": "KwAC",
          "unit": 10,
          "value": 0.7000000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "262 \tMWh",
          "name": "KwhAC",
          "unit": 11,
          "value": 261755
        },
        {
          "dataType": 0,
          "formattedValue": "485 \tV",
          "name": "VacAB",
          "unit": 2,
          "value": 485.1
        },
        {
          "dataType": 0,
          "formattedValue": "485 \tV",
          "name": "VacBC",
          "unit": 2,
          "value": 485.40000000000003
        },
        {
          "dataType": 0,
          "formattedValue": "483 \tV",
          "name": "VacCA",
          "unit": 2,
          "value": 483.3
        },
        {
          "dataType": 0,
          "formattedValue": "1 \tA",
          "name": "IacA",
          "unit": 4,
          "value": 1
        },
        {
          "dataType": 0,
          "formattedValue": "1 \tA",
          "name": "IacB",
          "unit": 4,
          "value": 1
        },
        {
          "dataType": 0,
          "formattedValue": "1 \tA",
          "name": "IacC",
          "unit": 4,
          "value": 1
        },
        {
          "dataType": 0,
          "formattedValue": "695 \tV",
          "name": "Vdc1",
          "unit": 2,
          "value": 695.4000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "0.4 \tA",
          "name": "Idc1",
          "unit": 4,
          "value": 0.4
        },
        {
          "dataType": 0,
          "formattedValue": "695 \tV",
          "name": "Vdc2",
          "unit": 2,
          "value": 694.6
        },
        {
          "dataType": 0,
          "formattedValue": " \tV",
          "name": "Vdc3",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "0.4 \tA",
          "name": "Idc2",
          "unit": 4,
          "value": 0.4
        },
        {
          "dataType": 0,
          "formattedValue": " \tA",
          "name": "Idc3",
          "unit": 4,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "0.8 \tA",
          "name": "Idc",
          "unit": 4,
          "value": 0.8
        },
        {
          "dataType": 0,
          "formattedValue": "695 \tV",
          "name": "Vdc",
          "unit": 2,
          "value": 695
        },
        {
          "dataType": 0,
          "formattedValue": "0.577 \tA",
          "name": "Iac",
          "unit": 4,
          "value": 0.577350538379377
        },
        {
          "dataType": 0,
          "formattedValue": "280 \tV",
          "name": "Vac",
          "unit": 2,
          "value": 280.0727461678358
        },
        {
          "dataType": 0,
          "formattedValue": "63 \t\u00b0F",
          "name": "DeviceTemp",
          "unit": 30,
          "value": 17.2
        },
        {
          "dataType": 0,
          "formattedValue": "46.8 \t\u00b0F",
          "name": "InternalTemp",
          "unit": 30,
          "value": 8.200000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "31.8 \t\u00b0F",
          "name": "Temp_XMFR",
          "unit": 30,
          "value": -0.1
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Warning",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault0",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault1",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault2",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault3",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault4",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "43,690 \t ",
          "name": "OnOff",
          "unit": 0,
          "value": 43690
        },
        {
          "dataType": 0,
          "formattedValue": "100 \t%",
          "name": "LimitKW",
          "unit": 56,
          "value": 100
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rapm",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rrpm",
          "unit": 0,
          "value": 0
        }
      ],
      "defaultChart": 2,
      "description": "INV-04 CP2 - (23kW)",
      "deviceImage": {
        "contentType": "",
        "key": "",
        "lastChanged": null,
        "name": "PV_V1844",
        "uri": "https://www.alsoenergy.com/pub/Images/Device/1844.png"
      },
      "functionCode": 1,
      "hardwareStatus": 1,
      "installDate": "2016-07-26",
      "inverterKw": 23,
      "key": "H70630",
      "lastAttempt": "2025-12-19T19:59:42Z",
      "lastChanged": "2025-12-12T23:26:25Z",
      "lastData": "700 W",
      "lastSuccess": "2025-12-19T19:59:02Z",
      "name": "INV-04 CP2 - (23kW)",
      "outOfService": false,
      "primaryMetric": "700 W",
      "primaryMetricName": 38,
      "serialNum": "1012971545139",
      "sortOrder": 14,
      "units": 8,
      "unitsScale": 1
    },
    {
      "capacityKW": 23,
      "communicationResult": 0,
      "dataRegisters": [
        {
          "dataType": 0,
          "formattedValue": "800 \tW",
          "name": "KwAC",
          "unit": 10,
          "value": 0.8
        },
        {
          "dataType": 0,
          "formattedValue": "266 \tMWh",
          "name": "KwhAC",
          "unit": 11,
          "value": 266325
        },
        {
          "dataType": 0,
          "formattedValue": "484 \tV",
          "name": "VacAB",
          "unit": 2,
          "value": 484.1
        },
        {
          "dataType": 0,
          "formattedValue": "484 \tV",
          "name": "VacBC",
          "unit": 2,
          "value": 484.5
        },
        {
          "dataType": 0,
          "formattedValue": "482 \tV",
          "name": "VacCA",
          "unit": 2,
          "value": 482.40000000000003
        },
        {
          "dataType": 0,
          "formattedValue": "1.2 \tA",
          "name": "IacA",
          "unit": 4,
          "value": 1.2000000000000002
        },
        {
          "dataType": 0,
          "formattedValue": "1.1 \tA",
          "name": "IacB",
          "unit": 4,
          "value": 1.1
        },
        {
          "dataType": 0,
          "formattedValue": "1.2 \tA",
          "name": "IacC",
          "unit": 4,
          "value": 1.2000000000000002
        },
        {
          "dataType": 0,
          "formattedValue": "693 \tV",
          "name": "Vdc1",
          "unit": 2,
          "value": 692.6
        },
        {
          "dataType": 0,
          "formattedValue": "0.4 \tA",
          "name": "Idc1",
          "unit": 4,
          "value": 0.4
        },
        {
          "dataType": 0,
          "formattedValue": "693 \tV",
          "name": "Vdc2",
          "unit": 2,
          "value": 692.6
        },
        {
          "dataType": 0,
          "formattedValue": " \tV",
          "name": "Vdc3",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "0.4 \tA",
          "name": "Idc2",
          "unit": 4,
          "value": 0.4
        },
        {
          "dataType": 0,
          "formattedValue": " \tA",
          "name": "Idc3",
          "unit": 4,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "0.8 \tA",
          "name": "Idc",
          "unit": 4,
          "value": 0.8
        },
        {
          "dataType": 0,
          "formattedValue": "693 \tV",
          "name": "Vdc",
          "unit": 2,
          "value": 692.6
        },
        {
          "dataType": 0,
          "formattedValue": "0.674 \tA",
          "name": "Iac",
          "unit": 4,
          "value": 0.6735756281092732
        },
        {
          "dataType": 0,
          "formattedValue": "279 \tV",
          "name": "Vac",
          "unit": 2,
          "value": 279.4953956294564
        },
        {
          "dataType": 0,
          "formattedValue": "61.2 \t\u00b0F",
          "name": "DeviceTemp",
          "unit": 30,
          "value": 16.2
        },
        {
          "dataType": 0,
          "formattedValue": "46 \t\u00b0F",
          "name": "InternalTemp",
          "unit": 30,
          "value": 7.800000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "31.8 \t\u00b0F",
          "name": "Temp_XMFR",
          "unit": 30,
          "value": -0.1
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Warning",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault0",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault1",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault2",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault3",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault4",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "43,690 \t ",
          "name": "OnOff",
          "unit": 0,
          "value": 43690
        },
        {
          "dataType": 0,
          "formattedValue": "100 \t%",
          "name": "LimitKW",
          "unit": 56,
          "value": 100
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rapm",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rrpm",
          "unit": 0,
          "value": 0
        }
      ],
      "defaultChart": 2,
      "description": "INV-05 CP2 - (23kW)",
      "deviceImage": {
        "contentType": "",
        "key": "",
        "lastChanged": null,
        "name": "PV_V1844",
        "uri": "https://www.alsoenergy.com/pub/Images/Device/1844.png"
      },
      "functionCode": 1,
      "hardwareStatus": 1,
      "installDate": "2016-07-23",
      "inverterKw": 23,
      "key": "H70631",
      "lastAttempt": "2025-12-19T19:59:42Z",
      "lastChanged": "2025-12-12T23:26:30Z",
      "lastData": "800 W",
      "lastSuccess": "2025-12-19T19:59:03Z",
      "name": "INV-05 CP2 - (23kW)",
      "outOfService": false,
      "primaryMetric": "800 W",
      "primaryMetricName": 38,
      "serialNum": "1012971545161",
      "sortOrder": 15,
      "units": 8,
      "unitsScale": 1
    },
    {
      "capacityKW": 23,
      "communicationResult": 0,
      "dataRegisters": [
        {
          "dataType": 0,
          "formattedValue": "700 \tW",
          "name": "KwAC",
          "unit": 10,
          "value": 0.7000000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "257 \tMWh",
          "name": "KwhAC",
          "unit": 11,
          "value": 256896
        },
        {
          "dataType": 0,
          "formattedValue": "483 \tV",
          "name": "VacAB",
          "unit": 2,
          "value": 483.40000000000003
        },
        {
          "dataType": 0,
          "formattedValue": "484 \tV",
          "name": "VacBC",
          "unit": 2,
          "value": 483.6
        },
        {
          "dataType": 0,
          "formattedValue": "482 \tV",
          "name": "VacCA",
          "unit": 2,
          "value": 482.40000000000003
        },
        {
          "dataType": 0,
          "formattedValue": "1.1 \tA",
          "name": "IacA",
          "unit": 4,
          "value": 1.1
        },
        {
          "dataType": 0,
          "formattedValue": "1 \tA",
          "name": "IacB",
          "unit": 4,
          "value": 1
        },
        {
          "dataType": 0,
          "formattedValue": "1 \tA",
          "name": "IacC",
          "unit": 4,
          "value": 1
        },
        {
          "dataType": 0,
          "formattedValue": "688 \tV",
          "name": "Vdc1",
          "unit": 2,
          "value": 687.5
        },
        {
          "dataType": 0,
          "formattedValue": "0.3 \tA",
          "name": "Idc1",
          "unit": 4,
          "value": 0.30000000000000004
        },
        {
          "dataType": 0,
          "formattedValue": "697 \tV",
          "name": "Vdc2",
          "unit": 2,
          "value": 696.9000000000001
        },
        {
          "dataType": 0,
          "formattedValue": " \tV",
          "name": "Vdc3",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "0.3 \tA",
          "name": "Idc2",
          "unit": 4,
          "value": 0.30000000000000004
        },
        {
          "dataType": 0,
          "formattedValue": " \tA",
          "name": "Idc3",
          "unit": 4,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "0.6 \tA",
          "name": "Idc",
          "unit": 4,
          "value": 0.6000000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "692 \tV",
          "name": "Vdc",
          "unit": 2,
          "value": 692.2
        },
        {
          "dataType": 0,
          "formattedValue": "0.597 \tA",
          "name": "Iac",
          "unit": 4,
          "value": 0.5965955563253563
        },
        {
          "dataType": 0,
          "formattedValue": "279 \tV",
          "name": "Vac",
          "unit": 2,
          "value": 279.09125025259084
        },
        {
          "dataType": 0,
          "formattedValue": "64.6 \t\u00b0F",
          "name": "DeviceTemp",
          "unit": 30,
          "value": 18.1
        },
        {
          "dataType": 0,
          "formattedValue": "46.9 \t\u00b0F",
          "name": "InternalTemp",
          "unit": 30,
          "value": 8.3
        },
        {
          "dataType": 0,
          "formattedValue": "31.8 \t\u00b0F",
          "name": "Temp_XMFR",
          "unit": 30,
          "value": -0.1
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Warning",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault0",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault1",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault2",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault3",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault4",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "43,690 \t ",
          "name": "OnOff",
          "unit": 0,
          "value": 43690
        },
        {
          "dataType": 0,
          "formattedValue": "100 \t%",
          "name": "LimitKW",
          "unit": 56,
          "value": 100
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rapm",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rrpm",
          "unit": 0,
          "value": 0
        }
      ],
      "defaultChart": 2,
      "description": "INV-06 CP2 - (23kW)",
      "deviceImage": {
        "contentType": "",
        "key": "",
        "lastChanged": null,
        "name": "PV_V1844",
        "uri": "https://www.alsoenergy.com/pub/Images/Device/1844.png"
      },
      "functionCode": 1,
      "hardwareStatus": 1,
      "installDate": "2016-07-29",
      "inverterKw": 23,
      "key": "H70632",
      "lastAttempt": "2025-12-19T19:59:49Z",
      "lastChanged": "2025-12-12T23:26:36Z",
      "lastData": "700 W",
      "lastSuccess": "2025-12-19T19:59:04Z",
      "name": "INV-06 CP2 - (23kW)",
      "outOfService": false,
      "primaryMetric": "700 W",
      "primaryMetricName": 38,
      "serialNum": "1012971545133",
      "sortOrder": 16,
      "units": 8,
      "unitsScale": 1
    },
    {
      "capacityKW": 36,
      "communicationResult": 0,
      "dataRegisters": [
        {
          "dataType": 0,
          "formattedValue": "1.3 \tkW",
          "name": "KwAC",
          "unit": 10,
          "value": 1.3
        },
        {
          "dataType": 0,
          "formattedValue": "420 \tMWh",
          "name": "KwhAC",
          "unit": 11,
          "value": 419877
        },
        {
          "dataType": 0,
          "formattedValue": "484 \tV",
          "name": "VacAB",
          "unit": 2,
          "value": 484.1
        },
        {
          "dataType": 0,
          "formattedValue": "484 \tV",
          "name": "VacBC",
          "unit": 2,
          "value": 484.20000000000005
        },
        {
          "dataType": 0,
          "formattedValue": "482 \tV",
          "name": "VacCA",
          "unit": 2,
          "value": 482.40000000000003
        },
        {
          "dataType": 0,
          "formattedValue": "1.6 \tA",
          "name": "IacA",
          "unit": 4,
          "value": 1.6
        },
        {
          "dataType": 0,
          "formattedValue": "1.4 \tA",
          "name": "IacB",
          "unit": 4,
          "value": 1.4000000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "1.6 \tA",
          "name": "IacC",
          "unit": 4,
          "value": 1.6
        },
        {
          "dataType": 0,
          "formattedValue": "711 \tV",
          "name": "Vdc1",
          "unit": 2,
          "value": 710.7
        },
        {
          "dataType": 0,
          "formattedValue": "0.8 \tA",
          "name": "Idc1",
          "unit": 4,
          "value": 0.8
        },
        {
          "dataType": 0,
          "formattedValue": "713 \tV",
          "name": "Vdc2",
          "unit": 2,
          "value": 712.9000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "0 \tV",
          "name": "Vdc3",
          "unit": 2,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0.8 \tA",
          "name": "Idc2",
          "unit": 4,
          "value": 0.8
        },
        {
          "dataType": 0,
          "formattedValue": "0 \tA",
          "name": "Idc3",
          "unit": 4,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "1.6 \tA",
          "name": "Idc",
          "unit": 4,
          "value": 1.6
        },
        {
          "dataType": 0,
          "formattedValue": "475 \tV",
          "name": "Vdc",
          "unit": 2,
          "value": 474.53333333333336
        },
        {
          "dataType": 0,
          "formattedValue": "0.885 \tA",
          "name": "Iac",
          "unit": 4,
          "value": 0.8852708255150448
        },
        {
          "dataType": 0,
          "formattedValue": "279 \tV",
          "name": "Vac",
          "unit": 2,
          "value": 279.4953956294564
        },
        {
          "dataType": 0,
          "formattedValue": "63.7 \t\u00b0F",
          "name": "DeviceTemp",
          "unit": 30,
          "value": 17.6
        },
        {
          "dataType": 0,
          "formattedValue": "47.3 \t\u00b0F",
          "name": "InternalTemp",
          "unit": 30,
          "value": 8.5
        },
        {
          "dataType": 0,
          "formattedValue": "31.8 \t\u00b0F",
          "name": "Temp_XMFR",
          "unit": 30,
          "value": -0.1
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Warning",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault0",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault1",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault2",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault3",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault4",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "43,690 \t ",
          "name": "OnOff",
          "unit": 0,
          "value": 43690
        },
        {
          "dataType": 0,
          "formattedValue": "100 \t%",
          "name": "LimitKW",
          "unit": 56,
          "value": 100
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rapm",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rrpm",
          "unit": 0,
          "value": 0
        }
      ],
      "defaultChart": 2,
      "description": "INV-07 CP2 - (36kW)",
      "deviceImage": {
        "contentType": "",
        "key": "",
        "lastChanged": null,
        "name": "PV_V1844",
        "uri": "https://www.alsoenergy.com/pub/Images/Device/1844.png"
      },
      "functionCode": 1,
      "hardwareStatus": 1,
      "installDate": "2016-07-28",
      "inverterKw": 36,
      "key": "H70633",
      "lastAttempt": "2025-12-19T19:59:46Z",
      "lastChanged": "2025-12-12T23:26:41Z",
      "lastData": "1.3 kW",
      "lastSuccess": "2025-12-19T19:59:05Z",
      "name": "INV-07 CP2 - (36kW)",
      "outOfService": false,
      "primaryMetric": "1.3 kW",
      "primaryMetricName": 38,
      "serialNum": "1012791548066",
      "sortOrder": 17,
      "units": 10,
      "unitsScale": 1000
    },
    {
      "capacityKW": 23,
      "communicationResult": 0,
      "dataRegisters": [
        {
          "dataType": 0,
          "formattedValue": "800 \tW",
          "name": "KwAC",
          "unit": 10,
          "value": 0.8
        },
        {
          "dataType": 0,
          "formattedValue": "275 \tMWh",
          "name": "KwhAC",
          "unit": 11,
          "value": 274749
        },
        {
          "dataType": 0,
          "formattedValue": "483 \tV",
          "name": "VacAB",
          "unit": 2,
          "value": 483.40000000000003
        },
        {
          "dataType": 0,
          "formattedValue": "484 \tV",
          "name": "VacBC",
          "unit": 2,
          "value": 484.40000000000003
        },
        {
          "dataType": 0,
          "formattedValue": "482 \tV",
          "name": "VacCA",
          "unit": 2,
          "value": 481.6
        },
        {
          "dataType": 0,
          "formattedValue": "1 \tA",
          "name": "IacA",
          "unit": 4,
          "value": 1
        },
        {
          "dataType": 0,
          "formattedValue": "1 \tA",
          "name": "IacB",
          "unit": 4,
          "value": 1
        },
        {
          "dataType": 0,
          "formattedValue": "1.2 \tA",
          "name": "IacC",
          "unit": 4,
          "value": 1.2000000000000002
        },
        {
          "dataType": 0,
          "formattedValue": "711 \tV",
          "name": "Vdc1",
          "unit": 2,
          "value": 710.9000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "0.4 \tA",
          "name": "Idc1",
          "unit": 4,
          "value": 0.4
        },
        {
          "dataType": 0,
          "formattedValue": "711 \tV",
          "name": "Vdc2",
          "unit": 2,
          "value": 710.9000000000001
        },
        {
          "dataType": 0,
          "formattedValue": " \tV",
          "name": "Vdc3",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "0.4 \tA",
          "name": "Idc2",
          "unit": 4,
          "value": 0.4
        },
        {
          "dataType": 0,
          "formattedValue": " \tA",
          "name": "Idc3",
          "unit": 4,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "0.8 \tA",
          "name": "Idc",
          "unit": 4,
          "value": 0.8
        },
        {
          "dataType": 0,
          "formattedValue": "711 \tV",
          "name": "Vdc",
          "unit": 2,
          "value": 710.9000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "0.616 \tA",
          "name": "Iac",
          "unit": 4,
          "value": 0.6158405742713354
        },
        {
          "dataType": 0,
          "formattedValue": "279 \tV",
          "name": "Vac",
          "unit": 2,
          "value": 279.09125025259084
        },
        {
          "dataType": 0,
          "formattedValue": "60.6 \t\u00b0F",
          "name": "DeviceTemp",
          "unit": 30,
          "value": 15.9
        },
        {
          "dataType": 0,
          "formattedValue": "45.3 \t\u00b0F",
          "name": "InternalTemp",
          "unit": 30,
          "value": 7.4
        },
        {
          "dataType": 0,
          "formattedValue": "31.8 \t\u00b0F",
          "name": "Temp_XMFR",
          "unit": 30,
          "value": -0.1
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Warning",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault0",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault1",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault2",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault3",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault4",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "43,690 \t ",
          "name": "OnOff",
          "unit": 0,
          "value": 43690
        },
        {
          "dataType": 0,
          "formattedValue": "100 \t%",
          "name": "LimitKW",
          "unit": 56,
          "value": 100
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rapm",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rrpm",
          "unit": 0,
          "value": 0
        }
      ],
      "defaultChart": 2,
      "description": "INV-08 CP3 - (23kW)",
      "deviceImage": {
        "contentType": "",
        "key": "",
        "lastChanged": null,
        "name": "PV_V1844",
        "uri": "https://www.alsoenergy.com/pub/Images/Device/1844.png"
      },
      "functionCode": 1,
      "hardwareStatus": 1,
      "installDate": "2016-07-23",
      "inverterKw": 23,
      "key": "H70634",
      "lastAttempt": "2025-12-19T19:59:49Z",
      "lastChanged": "2025-12-12T23:26:46Z",
      "lastData": "800 W",
      "lastSuccess": "2025-12-19T19:59:06Z",
      "name": "INV-08 CP3 - (23kW)",
      "outOfService": false,
      "primaryMetric": "800 W",
      "primaryMetricName": 38,
      "serialNum": "1012971545068",
      "sortOrder": 18,
      "units": 8,
      "unitsScale": 1
    },
    {
      "capacityKW": 23,
      "communicationResult": 0,
      "dataRegisters": [
        {
          "dataType": 0,
          "formattedValue": "800 \tW",
          "name": "KwAC",
          "unit": 10,
          "value": 0.8
        },
        {
          "dataType": 0,
          "formattedValue": "279 \tMWh",
          "name": "KwhAC",
          "unit": 11,
          "value": 279477
        },
        {
          "dataType": 0,
          "formattedValue": "483 \tV",
          "name": "VacAB",
          "unit": 2,
          "value": 483.3
        },
        {
          "dataType": 0,
          "formattedValue": "484 \tV",
          "name": "VacBC",
          "unit": 2,
          "value": 483.90000000000003
        },
        {
          "dataType": 0,
          "formattedValue": "482 \tV",
          "name": "VacCA",
          "unit": 2,
          "value": 482.40000000000003
        },
        {
          "dataType": 0,
          "formattedValue": "1.1 \tA",
          "name": "IacA",
          "unit": 4,
          "value": 1.1
        },
        {
          "dataType": 0,
          "formattedValue": "1 \tA",
          "name": "IacB",
          "unit": 4,
          "value": 1
        },
        {
          "dataType": 0,
          "formattedValue": "1.2 \tA",
          "name": "IacC",
          "unit": 4,
          "value": 1.2000000000000002
        },
        {
          "dataType": 0,
          "formattedValue": "710 \tV",
          "name": "Vdc1",
          "unit": 2,
          "value": 710.1
        },
        {
          "dataType": 0,
          "formattedValue": "0.4 \tA",
          "name": "Idc1",
          "unit": 4,
          "value": 0.4
        },
        {
          "dataType": 0,
          "formattedValue": "715 \tV",
          "name": "Vdc2",
          "unit": 2,
          "value": 714.8000000000001
        },
        {
          "dataType": 0,
          "formattedValue": " \tV",
          "name": "Vdc3",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "0.4 \tA",
          "name": "Idc2",
          "unit": 4,
          "value": 0.4
        },
        {
          "dataType": 0,
          "formattedValue": " \tA",
          "name": "Idc3",
          "unit": 4,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "0.8 \tA",
          "name": "Idc",
          "unit": 4,
          "value": 0.8
        },
        {
          "dataType": 0,
          "formattedValue": "712 \tV",
          "name": "Vdc",
          "unit": 2,
          "value": 712.45
        },
        {
          "dataType": 0,
          "formattedValue": "0.635 \tA",
          "name": "Iac",
          "unit": 4,
          "value": 0.6350855922173148
        },
        {
          "dataType": 0,
          "formattedValue": "279 \tV",
          "name": "Vac",
          "unit": 2,
          "value": 279.0335151987529
        },
        {
          "dataType": 0,
          "formattedValue": "61.3 \t\u00b0F",
          "name": "DeviceTemp",
          "unit": 30,
          "value": 16.3
        },
        {
          "dataType": 0,
          "formattedValue": "46.2 \t\u00b0F",
          "name": "InternalTemp",
          "unit": 30,
          "value": 7.9
        },
        {
          "dataType": 0,
          "formattedValue": "31.8 \t\u00b0F",
          "name": "Temp_XMFR",
          "unit": 30,
          "value": -0.1
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Warning",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault0",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault1",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault2",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault3",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault4",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "43,690 \t ",
          "name": "OnOff",
          "unit": 0,
          "value": 43690
        },
        {
          "dataType": 0,
          "formattedValue": "100 \t%",
          "name": "LimitKW",
          "unit": 56,
          "value": 100
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rapm",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rrpm",
          "unit": 0,
          "value": 0
        }
      ],
      "defaultChart": 2,
      "description": "INV-09 CP3 - (23kW)",
      "deviceImage": {
        "contentType": "",
        "key": "",
        "lastChanged": null,
        "name": "PV_V1844",
        "uri": "https://www.alsoenergy.com/pub/Images/Device/1844.png"
      },
      "functionCode": 1,
      "hardwareStatus": 1,
      "installDate": "2016-07-31",
      "inverterKw": 23,
      "key": "H70635",
      "lastAttempt": "2025-12-19T19:59:53Z",
      "lastChanged": "2025-12-12T23:26:51Z",
      "lastData": "800 W",
      "lastSuccess": "2025-12-19T19:59:07Z",
      "name": "INV-09 CP3 - (23kW)",
      "outOfService": false,
      "primaryMetric": "800 W",
      "primaryMetricName": 38,
      "serialNum": "1012971545155",
      "sortOrder": 19,
      "units": 8,
      "unitsScale": 1
    },
    {
      "capacityKW": 23,
      "communicationResult": 0,
      "dataRegisters": [
        {
          "dataType": 0,
          "formattedValue": "800 \tW",
          "name": "KwAC",
          "unit": 10,
          "value": 0.8
        },
        {
          "dataType": 0,
          "formattedValue": "271 \tMWh",
          "name": "KwhAC",
          "unit": 11,
          "value": 271436
        },
        {
          "dataType": 0,
          "formattedValue": "483 \tV",
          "name": "VacAB",
          "unit": 2,
          "value": 483.40000000000003
        },
        {
          "dataType": 0,
          "formattedValue": "484 \tV",
          "name": "VacBC",
          "unit": 2,
          "value": 483.5
        },
        {
          "dataType": 0,
          "formattedValue": "483 \tV",
          "name": "VacCA",
          "unit": 2,
          "value": 482.6
        },
        {
          "dataType": 0,
          "formattedValue": "1 \tA",
          "name": "IacA",
          "unit": 4,
          "value": 1
        },
        {
          "dataType": 0,
          "formattedValue": "1 \tA",
          "name": "IacB",
          "unit": 4,
          "value": 1
        },
        {
          "dataType": 0,
          "formattedValue": "1 \tA",
          "name": "IacC",
          "unit": 4,
          "value": 1
        },
        {
          "dataType": 0,
          "formattedValue": "709 \tV",
          "name": "Vdc1",
          "unit": 2,
          "value": 708.9000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "0.4 \tA",
          "name": "Idc1",
          "unit": 4,
          "value": 0.4
        },
        {
          "dataType": 0,
          "formattedValue": "708 \tV",
          "name": "Vdc2",
          "unit": 2,
          "value": 708.5
        },
        {
          "dataType": 0,
          "formattedValue": " \tV",
          "name": "Vdc3",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "0.4 \tA",
          "name": "Idc2",
          "unit": 4,
          "value": 0.4
        },
        {
          "dataType": 0,
          "formattedValue": " \tA",
          "name": "Idc3",
          "unit": 4,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "0.8 \tA",
          "name": "Idc",
          "unit": 4,
          "value": 0.8
        },
        {
          "dataType": 0,
          "formattedValue": "709 \tV",
          "name": "Vdc",
          "unit": 2,
          "value": 708.7
        },
        {
          "dataType": 0,
          "formattedValue": "0.577 \tA",
          "name": "Iac",
          "unit": 4,
          "value": 0.577350538379377
        },
        {
          "dataType": 0,
          "formattedValue": "279 \tV",
          "name": "Vac",
          "unit": 2,
          "value": 279.09125025259084
        },
        {
          "dataType": 0,
          "formattedValue": "60.1 \t\u00b0F",
          "name": "DeviceTemp",
          "unit": 30,
          "value": 15.600000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "46 \t\u00b0F",
          "name": "InternalTemp",
          "unit": 30,
          "value": 7.800000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "31.8 \t\u00b0F",
          "name": "Temp_XMFR",
          "unit": 30,
          "value": -0.1
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Warning",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault0",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault1",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault2",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault3",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault4",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "43,690 \t ",
          "name": "OnOff",
          "unit": 0,
          "value": 43690
        },
        {
          "dataType": 0,
          "formattedValue": "100 \t%",
          "name": "LimitKW",
          "unit": 56,
          "value": 100
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rapm",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rrpm",
          "unit": 0,
          "value": 0
        }
      ],
      "defaultChart": 2,
      "description": "INV-10 CP3 - (23kW)",
      "deviceImage": {
        "contentType": "",
        "key": "",
        "lastChanged": null,
        "name": "PV_V1844",
        "uri": "https://www.alsoenergy.com/pub/Images/Device/1844.png"
      },
      "functionCode": 1,
      "hardwareStatus": 1,
      "installDate": "2016-07-28",
      "inverterKw": 23,
      "key": "H70636",
      "lastAttempt": "2025-12-19T19:59:56Z",
      "lastChanged": "2025-12-12T23:26:56Z",
      "lastData": "800 W",
      "lastSuccess": "2025-12-19T19:59:08Z",
      "name": "INV-10 CP3 - (23kW)",
      "outOfService": false,
      "primaryMetric": "800 W",
      "primaryMetricName": 38,
      "serialNum": "1012971545165",
      "sortOrder": 20,
      "units": 8,
      "unitsScale": 1
    },
    {
      "capacityKW": 36,
      "communicationResult": 0,
      "dataRegisters": [
        {
          "dataType": 0,
          "formattedValue": "1.3 \tkW",
          "name": "KwAC",
          "unit": 10,
          "value": 1.3
        },
        {
          "dataType": 0,
          "formattedValue": "428 \tMWh",
          "name": "KwhAC",
          "unit": 11,
          "value": 428478
        },
        {
          "dataType": 0,
          "formattedValue": "484 \tV",
          "name": "VacAB",
          "unit": 2,
          "value": 484.3
        },
        {
          "dataType": 0,
          "formattedValue": "484 \tV",
          "name": "VacBC",
          "unit": 2,
          "value": 484.40000000000003
        },
        {
          "dataType": 0,
          "formattedValue": "482 \tV",
          "name": "VacCA",
          "unit": 2,
          "value": 482.5
        },
        {
          "dataType": 0,
          "formattedValue": "1.8 \tA",
          "name": "IacA",
          "unit": 4,
          "value": 1.8
        },
        {
          "dataType": 0,
          "formattedValue": "1.6 \tA",
          "name": "IacB",
          "unit": 4,
          "value": 1.6
        },
        {
          "dataType": 0,
          "formattedValue": "1.5 \tA",
          "name": "IacC",
          "unit": 4,
          "value": 1.5
        },
        {
          "dataType": 0,
          "formattedValue": "689 \tV",
          "name": "Vdc1",
          "unit": 2,
          "value": 689.3000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "0.8 \tA",
          "name": "Idc1",
          "unit": 4,
          "value": 0.8
        },
        {
          "dataType": 0,
          "formattedValue": "695 \tV",
          "name": "Vdc2",
          "unit": 2,
          "value": 695
        },
        {
          "dataType": 0,
          "formattedValue": "0 \tV",
          "name": "Vdc3",
          "unit": 2,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0.8 \tA",
          "name": "Idc2",
          "unit": 4,
          "value": 0.8
        },
        {
          "dataType": 0,
          "formattedValue": "0 \tA",
          "name": "Idc3",
          "unit": 4,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "1.6 \tA",
          "name": "Idc",
          "unit": 4,
          "value": 1.6
        },
        {
          "dataType": 0,
          "formattedValue": "461 \tV",
          "name": "Vdc",
          "unit": 2,
          "value": 461.4333333333334
        },
        {
          "dataType": 0,
          "formattedValue": "0.943 \tA",
          "name": "Iac",
          "unit": 4,
          "value": 0.9430058793529825
        },
        {
          "dataType": 0,
          "formattedValue": "280 \tV",
          "name": "Vac",
          "unit": 2,
          "value": 279.6108657371323
        },
        {
          "dataType": 0,
          "formattedValue": "67.6 \t\u00b0F",
          "name": "DeviceTemp",
          "unit": 30,
          "value": 19.8
        },
        {
          "dataType": 0,
          "formattedValue": "46 \t\u00b0F",
          "name": "InternalTemp",
          "unit": 30,
          "value": 7.800000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "31.8 \t\u00b0F",
          "name": "Temp_XMFR",
          "unit": 30,
          "value": -0.1
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Warning",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault0",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault1",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault2",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault3",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault4",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "43,690 \t ",
          "name": "OnOff",
          "unit": 0,
          "value": 43690
        },
        {
          "dataType": 0,
          "formattedValue": "100 \t%",
          "name": "LimitKW",
          "unit": 56,
          "value": 100
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rapm",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rrpm",
          "unit": 0,
          "value": 0
        }
      ],
      "defaultChart": 2,
      "description": "INV-11 CP3 - (36kW)",
      "deviceImage": {
        "contentType": "",
        "key": "",
        "lastChanged": null,
        "name": "PV_V1844",
        "uri": "https://www.alsoenergy.com/pub/Images/Device/1844.png"
      },
      "functionCode": 1,
      "hardwareStatus": 1,
      "installDate": "2016-07-31",
      "inverterKw": 36,
      "key": "H70637",
      "lastAttempt": "2025-12-19T19:59:58Z",
      "lastChanged": "2025-12-12T23:27:01Z",
      "lastData": "1.3 kW",
      "lastSuccess": "2025-12-19T19:59:09Z",
      "name": "INV-11 CP3 - (36kW)",
      "outOfService": false,
      "primaryMetric": "1.3 kW",
      "primaryMetricName": 38,
      "serialNum": "1012791548080",
      "sortOrder": 21,
      "units": 10,
      "unitsScale": 1000
    },
    {
      "capacityKW": 23,
      "communicationResult": 0,
      "dataRegisters": [
        {
          "dataType": 0,
          "formattedValue": "800 \tW",
          "name": "KwAC",
          "unit": 10,
          "value": 0.8
        },
        {
          "dataType": 0,
          "formattedValue": "267 \tMWh",
          "name": "KwhAC",
          "unit": 11,
          "value": 266608
        },
        {
          "dataType": 0,
          "formattedValue": "484 \tV",
          "name": "VacAB",
          "unit": 2,
          "value": 484.5
        },
        {
          "dataType": 0,
          "formattedValue": "484 \tV",
          "name": "VacBC",
          "unit": 2,
          "value": 484.40000000000003
        },
        {
          "dataType": 0,
          "formattedValue": "482 \tV",
          "name": "VacCA",
          "unit": 2,
          "value": 481.90000000000003
        },
        {
          "dataType": 0,
          "formattedValue": "1.3 \tA",
          "name": "IacA",
          "unit": 4,
          "value": 1.3
        },
        {
          "dataType": 0,
          "formattedValue": "1.3 \tA",
          "name": "IacB",
          "unit": 4,
          "value": 1.3
        },
        {
          "dataType": 0,
          "formattedValue": "1.3 \tA",
          "name": "IacC",
          "unit": 4,
          "value": 1.3
        },
        {
          "dataType": 0,
          "formattedValue": "693 \tV",
          "name": "Vdc1",
          "unit": 2,
          "value": 692.7
        },
        {
          "dataType": 0,
          "formattedValue": "0.4 \tA",
          "name": "Idc1",
          "unit": 4,
          "value": 0.4
        },
        {
          "dataType": 0,
          "formattedValue": "690 \tV",
          "name": "Vdc2",
          "unit": 2,
          "value": 689.7
        },
        {
          "dataType": 0,
          "formattedValue": " \tV",
          "name": "Vdc3",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "0.4 \tA",
          "name": "Idc2",
          "unit": 4,
          "value": 0.4
        },
        {
          "dataType": 0,
          "formattedValue": " \tA",
          "name": "Idc3",
          "unit": 4,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "0.8 \tA",
          "name": "Idc",
          "unit": 4,
          "value": 0.8
        },
        {
          "dataType": 0,
          "formattedValue": "691 \tV",
          "name": "Vdc",
          "unit": 2,
          "value": 691.2
        },
        {
          "dataType": 0,
          "formattedValue": "0.751 \tA",
          "name": "Iac",
          "unit": 4,
          "value": 0.7505556998931902
        },
        {
          "dataType": 0,
          "formattedValue": "280 \tV",
          "name": "Vac",
          "unit": 2,
          "value": 279.72633584480815
        },
        {
          "dataType": 0,
          "formattedValue": "59.7 \t\u00b0F",
          "name": "DeviceTemp",
          "unit": 30,
          "value": 15.4
        },
        {
          "dataType": 0,
          "formattedValue": "45.7 \t\u00b0F",
          "name": "InternalTemp",
          "unit": 30,
          "value": 7.6000000000000005
        },
        {
          "dataType": 0,
          "formattedValue": "31.8 \t\u00b0F",
          "name": "Temp_XMFR",
          "unit": 30,
          "value": -0.1
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Warning",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault0",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault1",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault2",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault3",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault4",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "43,690 \t ",
          "name": "OnOff",
          "unit": 0,
          "value": 43690
        },
        {
          "dataType": 0,
          "formattedValue": "100 \t%",
          "name": "LimitKW",
          "unit": 56,
          "value": 100
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rapm",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rrpm",
          "unit": 0,
          "value": 0
        }
      ],
      "defaultChart": 2,
      "description": "INV-12 CP4 - (23kW)",
      "deviceImage": {
        "contentType": "",
        "key": "",
        "lastChanged": null,
        "name": "PV_V1844",
        "uri": "https://www.alsoenergy.com/pub/Images/Device/1844.png"
      },
      "functionCode": 1,
      "hardwareStatus": 1,
      "installDate": "2016-07-27",
      "inverterKw": 23,
      "key": "H70638",
      "lastAttempt": "2025-12-19T20:00:02Z",
      "lastChanged": "2025-12-12T23:27:06Z",
      "lastData": "800 W",
      "lastSuccess": "2025-12-19T19:59:10Z",
      "name": "INV-12 CP4 - (23kW)",
      "outOfService": false,
      "primaryMetric": "800 W",
      "primaryMetricName": 38,
      "serialNum": "1012971545003",
      "sortOrder": 22,
      "units": 8,
      "unitsScale": 1
    },
    {
      "capacityKW": 23,
      "communicationResult": 0,
      "dataRegisters": [
        {
          "dataType": 0,
          "formattedValue": "700 \tW",
          "name": "KwAC",
          "unit": 10,
          "value": 0.7000000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "116 \tMWh",
          "name": "KwhAC",
          "unit": 11,
          "value": 115766
        },
        {
          "dataType": 0,
          "formattedValue": "483 \tV",
          "name": "VacAB",
          "unit": 2,
          "value": 482.90000000000003
        },
        {
          "dataType": 0,
          "formattedValue": "482 \tV",
          "name": "VacBC",
          "unit": 2,
          "value": 482.40000000000003
        },
        {
          "dataType": 0,
          "formattedValue": "482 \tV",
          "name": "VacCA",
          "unit": 2,
          "value": 481.6
        },
        {
          "dataType": 0,
          "formattedValue": "1.2 \tA",
          "name": "IacA",
          "unit": 4,
          "value": 1.2000000000000002
        },
        {
          "dataType": 0,
          "formattedValue": "1 \tA",
          "name": "IacB",
          "unit": 4,
          "value": 1
        },
        {
          "dataType": 0,
          "formattedValue": "1 \tA",
          "name": "IacC",
          "unit": 4,
          "value": 1
        },
        {
          "dataType": 0,
          "formattedValue": "702 \tV",
          "name": "Vdc1",
          "unit": 2,
          "value": 702.2
        },
        {
          "dataType": 0,
          "formattedValue": "0.4 \tA",
          "name": "Idc1",
          "unit": 4,
          "value": 0.4
        },
        {
          "dataType": 0,
          "formattedValue": "701 \tV",
          "name": "Vdc2",
          "unit": 2,
          "value": 701.1
        },
        {
          "dataType": 0,
          "formattedValue": " \tV",
          "name": "Vdc3",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "0.4 \tA",
          "name": "Idc2",
          "unit": 4,
          "value": 0.4
        },
        {
          "dataType": 0,
          "formattedValue": " \tA",
          "name": "Idc3",
          "unit": 4,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "0.8 \tA",
          "name": "Idc",
          "unit": 4,
          "value": 0.8
        },
        {
          "dataType": 0,
          "formattedValue": "702 \tV",
          "name": "Vdc",
          "unit": 2,
          "value": 701.6500000000001
        },
        {
          "dataType": 0,
          "formattedValue": "0.616 \tA",
          "name": "Iac",
          "unit": 4,
          "value": 0.6158405742713354
        },
        {
          "dataType": 0,
          "formattedValue": "279 \tV",
          "name": "Vac",
          "unit": 2,
          "value": 278.8025749834012
        },
        {
          "dataType": 0,
          "formattedValue": "58.8 \t\u00b0F",
          "name": "DeviceTemp",
          "unit": 30,
          "value": 14.9
        },
        {
          "dataType": 0,
          "formattedValue": "45.1 \t\u00b0F",
          "name": "InternalTemp",
          "unit": 30,
          "value": 7.300000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "31.8 \t\u00b0F",
          "name": "Temp_XMFR",
          "unit": 30,
          "value": -0.1
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Warning",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault0",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault1",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault2",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault3",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault4",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "43,690 \t ",
          "name": "OnOff",
          "unit": 0,
          "value": 43690
        },
        {
          "dataType": 0,
          "formattedValue": "100 \t%",
          "name": "LimitKW",
          "unit": 56,
          "value": 100
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rapm",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rrpm",
          "unit": 0,
          "value": 0
        }
      ],
      "defaultChart": 2,
      "description": "INV-13 CP4 - (23kW)",
      "deviceImage": {
        "contentType": "",
        "key": "",
        "lastChanged": null,
        "name": "PV_V1844",
        "uri": "https://www.alsoenergy.com/pub/Images/Device/1844.png"
      },
      "functionCode": 1,
      "hardwareStatus": 1,
      "installDate": "2016-07-30",
      "inverterKw": 23,
      "key": "H70639",
      "lastAttempt": "2025-12-19T20:00:06Z",
      "lastChanged": "2025-12-12T23:27:11Z",
      "lastData": "700 W",
      "lastSuccess": "2025-12-19T19:59:11Z",
      "name": "INV-13 CP4 - (23kW)",
      "outOfService": false,
      "primaryMetric": "700 W",
      "primaryMetricName": 38,
      "serialNum": "1012971550044",
      "sortOrder": 23,
      "units": 8,
      "unitsScale": 1
    },
    {
      "capacityKW": 23,
      "communicationResult": 0,
      "dataRegisters": [
        {
          "dataType": 0,
          "formattedValue": "700 \tW",
          "name": "KwAC",
          "unit": 10,
          "value": 0.7000000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "260 \tMWh",
          "name": "KwhAC",
          "unit": 11,
          "value": 260327
        },
        {
          "dataType": 0,
          "formattedValue": "485 \tV",
          "name": "VacAB",
          "unit": 2,
          "value": 485.1
        },
        {
          "dataType": 0,
          "formattedValue": "485 \tV",
          "name": "VacBC",
          "unit": 2,
          "value": 484.8
        },
        {
          "dataType": 0,
          "formattedValue": "482 \tV",
          "name": "VacCA",
          "unit": 2,
          "value": 482.20000000000005
        },
        {
          "dataType": 0,
          "formattedValue": "1 \tA",
          "name": "IacA",
          "unit": 4,
          "value": 1
        },
        {
          "dataType": 0,
          "formattedValue": "1 \tA",
          "name": "IacB",
          "unit": 4,
          "value": 1
        },
        {
          "dataType": 0,
          "formattedValue": "1 \tA",
          "name": "IacC",
          "unit": 4,
          "value": 1
        },
        {
          "dataType": 0,
          "formattedValue": "714 \tV",
          "name": "Vdc1",
          "unit": 2,
          "value": 713.5
        },
        {
          "dataType": 0,
          "formattedValue": "0.3 \tA",
          "name": "Idc1",
          "unit": 4,
          "value": 0.30000000000000004
        },
        {
          "dataType": 0,
          "formattedValue": "714 \tV",
          "name": "Vdc2",
          "unit": 2,
          "value": 713.5
        },
        {
          "dataType": 0,
          "formattedValue": " \tV",
          "name": "Vdc3",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "0.3 \tA",
          "name": "Idc2",
          "unit": 4,
          "value": 0.30000000000000004
        },
        {
          "dataType": 0,
          "formattedValue": " \tA",
          "name": "Idc3",
          "unit": 4,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "0.6 \tA",
          "name": "Idc",
          "unit": 4,
          "value": 0.6000000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "714 \tV",
          "name": "Vdc",
          "unit": 2,
          "value": 713.5
        },
        {
          "dataType": 0,
          "formattedValue": "0.577 \tA",
          "name": "Iac",
          "unit": 4,
          "value": 0.577350538379377
        },
        {
          "dataType": 0,
          "formattedValue": "280 \tV",
          "name": "Vac",
          "unit": 2,
          "value": 280.0727461678358
        },
        {
          "dataType": 0,
          "formattedValue": "60.6 \t\u00b0F",
          "name": "DeviceTemp",
          "unit": 30,
          "value": 15.9
        },
        {
          "dataType": 0,
          "formattedValue": "46 \t\u00b0F",
          "name": "InternalTemp",
          "unit": 30,
          "value": 7.800000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "31.8 \t\u00b0F",
          "name": "Temp_XMFR",
          "unit": 30,
          "value": -0.1
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Warning",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault0",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault1",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault2",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault3",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault4",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "43,690 \t ",
          "name": "OnOff",
          "unit": 0,
          "value": 43690
        },
        {
          "dataType": 0,
          "formattedValue": "100 \t%",
          "name": "LimitKW",
          "unit": 56,
          "value": 100
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rapm",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rrpm",
          "unit": 0,
          "value": 0
        }
      ],
      "defaultChart": 2,
      "description": "INV-14 CP4 - (23kW)",
      "deviceImage": {
        "contentType": "",
        "key": "",
        "lastChanged": null,
        "name": "PV_V1844",
        "uri": "https://www.alsoenergy.com/pub/Images/Device/1844.png"
      },
      "functionCode": 1,
      "hardwareStatus": 1,
      "installDate": "2016-07-30",
      "inverterKw": 23,
      "key": "H70640",
      "lastAttempt": "2025-12-19T20:00:02Z",
      "lastChanged": "2025-12-12T23:27:17Z",
      "lastData": "700 W",
      "lastSuccess": "2025-12-19T19:59:12Z",
      "name": "INV-14 CP4 - (23kW)",
      "outOfService": false,
      "primaryMetric": "700 W",
      "primaryMetricName": 38,
      "serialNum": "1012971545137",
      "sortOrder": 24,
      "units": 8,
      "unitsScale": 1
    },
    {
      "capacityKW": 36,
      "communicationResult": 0,
      "dataRegisters": [
        {
          "dataType": 0,
          "formattedValue": "1.3 \tkW",
          "name": "KwAC",
          "unit": 10,
          "value": 1.3
        },
        {
          "dataType": 0,
          "formattedValue": "414 \tMWh",
          "name": "KwhAC",
          "unit": 11,
          "value": 414306
        },
        {
          "dataType": 0,
          "formattedValue": "483 \tV",
          "name": "VacAB",
          "unit": 2,
          "value": 483.1
        },
        {
          "dataType": 0,
          "formattedValue": "484 \tV",
          "name": "VacBC",
          "unit": 2,
          "value": 483.6
        },
        {
          "dataType": 0,
          "formattedValue": "481 \tV",
          "name": "VacCA",
          "unit": 2,
          "value": 480.90000000000003
        },
        {
          "dataType": 0,
          "formattedValue": "1.5 \tA",
          "name": "IacA",
          "unit": 4,
          "value": 1.5
        },
        {
          "dataType": 0,
          "formattedValue": "1.5 \tA",
          "name": "IacB",
          "unit": 4,
          "value": 1.5
        },
        {
          "dataType": 0,
          "formattedValue": "1.5 \tA",
          "name": "IacC",
          "unit": 4,
          "value": 1.5
        },
        {
          "dataType": 0,
          "formattedValue": "673 \tV",
          "name": "Vdc1",
          "unit": 2,
          "value": 673.1
        },
        {
          "dataType": 0,
          "formattedValue": "0.7 \tA",
          "name": "Idc1",
          "unit": 4,
          "value": 0.7000000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "680 \tV",
          "name": "Vdc2",
          "unit": 2,
          "value": 680
        },
        {
          "dataType": 0,
          "formattedValue": "0 \tV",
          "name": "Vdc3",
          "unit": 2,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0.7 \tA",
          "name": "Idc2",
          "unit": 4,
          "value": 0.7000000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "0 \tA",
          "name": "Idc3",
          "unit": 4,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "1.4 \tA",
          "name": "Idc",
          "unit": 4,
          "value": 1.4000000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "451 \tV",
          "name": "Vdc",
          "unit": 2,
          "value": 451.03333333333336
        },
        {
          "dataType": 0,
          "formattedValue": "0.866 \tA",
          "name": "Iac",
          "unit": 4,
          "value": 0.8660258075690656
        },
        {
          "dataType": 0,
          "formattedValue": "279 \tV",
          "name": "Vac",
          "unit": 2,
          "value": 278.91804509107703
        },
        {
          "dataType": 0,
          "formattedValue": "62.4 \t\u00b0F",
          "name": "DeviceTemp",
          "unit": 30,
          "value": 16.900000000000002
        },
        {
          "dataType": 0,
          "formattedValue": "46.2 \t\u00b0F",
          "name": "InternalTemp",
          "unit": 30,
          "value": 7.9
        },
        {
          "dataType": 0,
          "formattedValue": "31.8 \t\u00b0F",
          "name": "Temp_XMFR",
          "unit": 30,
          "value": -0.1
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Warning",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault0",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault1",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault2",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault3",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault4",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "43,690 \t ",
          "name": "OnOff",
          "unit": 0,
          "value": 43690
        },
        {
          "dataType": 0,
          "formattedValue": "100 \t%",
          "name": "LimitKW",
          "unit": 56,
          "value": 100
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rapm",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rrpm",
          "unit": 0,
          "value": 0
        }
      ],
      "defaultChart": 2,
      "description": "INV-15 CP4 - (36kW)",
      "deviceImage": {
        "contentType": "",
        "key": "",
        "lastChanged": null,
        "name": "PV_V1844",
        "uri": "https://www.alsoenergy.com/pub/Images/Device/1844.png"
      },
      "functionCode": 1,
      "hardwareStatus": 1,
      "installDate": "2016-07-30",
      "inverterKw": 36,
      "key": "H70641",
      "lastAttempt": "2025-12-19T20:00:14Z",
      "lastChanged": "2025-12-12T23:27:22Z",
      "lastData": "1.3 kW",
      "lastSuccess": "2025-12-19T19:59:13Z",
      "name": "INV-15 CP4 - (36kW)",
      "outOfService": false,
      "primaryMetric": "1.3 kW",
      "primaryMetricName": 38,
      "serialNum": "1012791548119",
      "sortOrder": 25,
      "units": 10,
      "unitsScale": 1000
    },
    {
      "capacityKW": 23,
      "communicationResult": 0,
      "dataRegisters": [
        {
          "dataType": 0,
          "formattedValue": "800 \tW",
          "name": "KwAC",
          "unit": 10,
          "value": 0.8
        },
        {
          "dataType": 0,
          "formattedValue": "277 \tMWh",
          "name": "KwhAC",
          "unit": 11,
          "value": 276780
        },
        {
          "dataType": 0,
          "formattedValue": "484 \tV",
          "name": "VacAB",
          "unit": 2,
          "value": 483.8
        },
        {
          "dataType": 0,
          "formattedValue": "484 \tV",
          "name": "VacBC",
          "unit": 2,
          "value": 484.3
        },
        {
          "dataType": 0,
          "formattedValue": "482 \tV",
          "name": "VacCA",
          "unit": 2,
          "value": 482.3
        },
        {
          "dataType": 0,
          "formattedValue": "1.3 \tA",
          "name": "IacA",
          "unit": 4,
          "value": 1.3
        },
        {
          "dataType": 0,
          "formattedValue": "1.3 \tA",
          "name": "IacB",
          "unit": 4,
          "value": 1.3
        },
        {
          "dataType": 0,
          "formattedValue": "1.3 \tA",
          "name": "IacC",
          "unit": 4,
          "value": 1.3
        },
        {
          "dataType": 0,
          "formattedValue": "682 \tV",
          "name": "Vdc1",
          "unit": 2,
          "value": 682.2
        },
        {
          "dataType": 0,
          "formattedValue": "0.4 \tA",
          "name": "Idc1",
          "unit": 4,
          "value": 0.4
        },
        {
          "dataType": 0,
          "formattedValue": "681 \tV",
          "name": "Vdc2",
          "unit": 2,
          "value": 680.9000000000001
        },
        {
          "dataType": 0,
          "formattedValue": " \tV",
          "name": "Vdc3",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "0.4 \tA",
          "name": "Idc2",
          "unit": 4,
          "value": 0.4
        },
        {
          "dataType": 0,
          "formattedValue": " \tA",
          "name": "Idc3",
          "unit": 4,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "0.8 \tA",
          "name": "Idc",
          "unit": 4,
          "value": 0.8
        },
        {
          "dataType": 0,
          "formattedValue": "682 \tV",
          "name": "Vdc",
          "unit": 2,
          "value": 681.5500000000001
        },
        {
          "dataType": 0,
          "formattedValue": "0.751 \tA",
          "name": "Iac",
          "unit": 4,
          "value": 0.7505556998931902
        },
        {
          "dataType": 0,
          "formattedValue": "279 \tV",
          "name": "Vac",
          "unit": 2,
          "value": 279.3221904679426
        },
        {
          "dataType": 0,
          "formattedValue": "60.1 \t\u00b0F",
          "name": "DeviceTemp",
          "unit": 30,
          "value": 15.600000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "45.3 \t\u00b0F",
          "name": "InternalTemp",
          "unit": 30,
          "value": 7.4
        },
        {
          "dataType": 0,
          "formattedValue": "31.8 \t\u00b0F",
          "name": "Temp_XMFR",
          "unit": 30,
          "value": -0.1
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Warning",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault0",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault1",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault2",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault3",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault4",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "43,690 \t ",
          "name": "OnOff",
          "unit": 0,
          "value": 43690
        },
        {
          "dataType": 0,
          "formattedValue": "100 \t%",
          "name": "LimitKW",
          "unit": 56,
          "value": 100
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rapm",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rrpm",
          "unit": 0,
          "value": 0
        }
      ],
      "defaultChart": 2,
      "description": "INV-16 CP5 - (23kW)",
      "deviceImage": {
        "contentType": "",
        "key": "",
        "lastChanged": null,
        "name": "PV_V1844",
        "uri": "https://www.alsoenergy.com/pub/Images/Device/1844.png"
      },
      "functionCode": 1,
      "hardwareStatus": 1,
      "installDate": "2016-08-02",
      "inverterKw": 23,
      "key": "H70642",
      "lastAttempt": "2025-12-19T20:00:21Z",
      "lastChanged": "2025-12-12T23:27:27Z",
      "lastData": "800 W",
      "lastSuccess": "2025-12-19T19:59:14Z",
      "name": "INV-16 CP5 - (23kW)",
      "outOfService": false,
      "primaryMetric": "800 W",
      "primaryMetricName": 38,
      "serialNum": "1012971545152",
      "sortOrder": 26,
      "units": 8,
      "unitsScale": 1
    },
    {
      "capacityKW": 23,
      "communicationResult": 0,
      "dataRegisters": [
        {
          "dataType": 0,
          "formattedValue": "800 \tW",
          "name": "KwAC",
          "unit": 10,
          "value": 0.8
        },
        {
          "dataType": 0,
          "formattedValue": "280 \tMWh",
          "name": "KwhAC",
          "unit": 11,
          "value": 280398
        },
        {
          "dataType": 0,
          "formattedValue": "483 \tV",
          "name": "VacAB",
          "unit": 2,
          "value": 483.3
        },
        {
          "dataType": 0,
          "formattedValue": "484 \tV",
          "name": "VacBC",
          "unit": 2,
          "value": 484.1
        },
        {
          "dataType": 0,
          "formattedValue": "482 \tV",
          "name": "VacCA",
          "unit": 2,
          "value": 482.40000000000003
        },
        {
          "dataType": 0,
          "formattedValue": "1.2 \tA",
          "name": "IacA",
          "unit": 4,
          "value": 1.2000000000000002
        },
        {
          "dataType": 0,
          "formattedValue": "1 \tA",
          "name": "IacB",
          "unit": 4,
          "value": 1
        },
        {
          "dataType": 0,
          "formattedValue": "1.3 \tA",
          "name": "IacC",
          "unit": 4,
          "value": 1.3
        },
        {
          "dataType": 0,
          "formattedValue": "709 \tV",
          "name": "Vdc1",
          "unit": 2,
          "value": 708.9000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "0.4 \tA",
          "name": "Idc1",
          "unit": 4,
          "value": 0.4
        },
        {
          "dataType": 0,
          "formattedValue": "717 \tV",
          "name": "Vdc2",
          "unit": 2,
          "value": 716.9000000000001
        },
        {
          "dataType": 0,
          "formattedValue": " \tV",
          "name": "Vdc3",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "0.4 \tA",
          "name": "Idc2",
          "unit": 4,
          "value": 0.4
        },
        {
          "dataType": 0,
          "formattedValue": " \tA",
          "name": "Idc3",
          "unit": 4,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "0.8 \tA",
          "name": "Idc",
          "unit": 4,
          "value": 0.8
        },
        {
          "dataType": 0,
          "formattedValue": "713 \tV",
          "name": "Vdc",
          "unit": 2,
          "value": 712.9000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "0.674 \tA",
          "name": "Iac",
          "unit": 4,
          "value": 0.6735756281092732
        },
        {
          "dataType": 0,
          "formattedValue": "279 \tV",
          "name": "Vac",
          "unit": 2,
          "value": 279.0335151987529
        },
        {
          "dataType": 0,
          "formattedValue": "61.2 \t\u00b0F",
          "name": "DeviceTemp",
          "unit": 30,
          "value": 16.2
        },
        {
          "dataType": 0,
          "formattedValue": "45.7 \t\u00b0F",
          "name": "InternalTemp",
          "unit": 30,
          "value": 7.6000000000000005
        },
        {
          "dataType": 0,
          "formattedValue": "31.8 \t\u00b0F",
          "name": "Temp_XMFR",
          "unit": 30,
          "value": -0.1
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Warning",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault0",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault1",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault2",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault3",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault4",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "43,690 \t ",
          "name": "OnOff",
          "unit": 0,
          "value": 43690
        },
        {
          "dataType": 0,
          "formattedValue": "100 \t%",
          "name": "LimitKW",
          "unit": 56,
          "value": 100
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rapm",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rrpm",
          "unit": 0,
          "value": 0
        }
      ],
      "defaultChart": 2,
      "description": "INV-17 CP5 - (23kW)",
      "deviceImage": {
        "contentType": "",
        "key": "",
        "lastChanged": null,
        "name": "PV_V1844",
        "uri": "https://www.alsoenergy.com/pub/Images/Device/1844.png"
      },
      "functionCode": 1,
      "hardwareStatus": 1,
      "installDate": "2016-07-28",
      "inverterKw": 23,
      "key": "H70643",
      "lastAttempt": "2025-12-19T20:00:22Z",
      "lastChanged": "2025-12-12T23:27:32Z",
      "lastData": "800 W",
      "lastSuccess": "2025-12-19T19:59:15Z",
      "name": "INV-17 CP5 - (23kW)",
      "outOfService": false,
      "primaryMetric": "800 W",
      "primaryMetricName": 38,
      "serialNum": "1012971545147",
      "sortOrder": 27,
      "units": 8,
      "unitsScale": 1
    },
    {
      "capacityKW": 23,
      "communicationResult": 0,
      "dataRegisters": [
        {
          "dataType": 0,
          "formattedValue": "800 \tW",
          "name": "KwAC",
          "unit": 10,
          "value": 0.8
        },
        {
          "dataType": 0,
          "formattedValue": "270 \tMWh",
          "name": "KwhAC",
          "unit": 11,
          "value": 269511
        },
        {
          "dataType": 0,
          "formattedValue": "483 \tV",
          "name": "VacAB",
          "unit": 2,
          "value": 483
        },
        {
          "dataType": 0,
          "formattedValue": "482 \tV",
          "name": "VacBC",
          "unit": 2,
          "value": 482.3
        },
        {
          "dataType": 0,
          "formattedValue": "481 \tV",
          "name": "VacCA",
          "unit": 2,
          "value": 481.20000000000005
        },
        {
          "dataType": 0,
          "formattedValue": "1.3 \tA",
          "name": "IacA",
          "unit": 4,
          "value": 1.3
        },
        {
          "dataType": 0,
          "formattedValue": "1 \tA",
          "name": "IacB",
          "unit": 4,
          "value": 1
        },
        {
          "dataType": 0,
          "formattedValue": "1 \tA",
          "name": "IacC",
          "unit": 4,
          "value": 1
        },
        {
          "dataType": 0,
          "formattedValue": "699 \tV",
          "name": "Vdc1",
          "unit": 2,
          "value": 699.3000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "0.4 \tA",
          "name": "Idc1",
          "unit": 4,
          "value": 0.4
        },
        {
          "dataType": 0,
          "formattedValue": "700 \tV",
          "name": "Vdc2",
          "unit": 2,
          "value": 699.8000000000001
        },
        {
          "dataType": 0,
          "formattedValue": " \tV",
          "name": "Vdc3",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "0.4 \tA",
          "name": "Idc2",
          "unit": 4,
          "value": 0.4
        },
        {
          "dataType": 0,
          "formattedValue": " \tA",
          "name": "Idc3",
          "unit": 4,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "0.8 \tA",
          "name": "Idc",
          "unit": 4,
          "value": 0.8
        },
        {
          "dataType": 0,
          "formattedValue": "700 \tV",
          "name": "Vdc",
          "unit": 2,
          "value": 699.5500000000001
        },
        {
          "dataType": 0,
          "formattedValue": "0.635 \tA",
          "name": "Iac",
          "unit": 4,
          "value": 0.6350855922173148
        },
        {
          "dataType": 0,
          "formattedValue": "279 \tV",
          "name": "Vac",
          "unit": 2,
          "value": 278.8603100372391
        },
        {
          "dataType": 0,
          "formattedValue": "60.1 \t\u00b0F",
          "name": "DeviceTemp",
          "unit": 30,
          "value": 15.600000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "45.5 \t\u00b0F",
          "name": "InternalTemp",
          "unit": 30,
          "value": 7.5
        },
        {
          "dataType": 0,
          "formattedValue": "31.8 \t\u00b0F",
          "name": "Temp_XMFR",
          "unit": 30,
          "value": -0.1
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Warning",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault0",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault1",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault2",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault3",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault4",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "43,690 \t ",
          "name": "OnOff",
          "unit": 0,
          "value": 43690
        },
        {
          "dataType": 0,
          "formattedValue": "100 \t%",
          "name": "LimitKW",
          "unit": 56,
          "value": 100
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rapm",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rrpm",
          "unit": 0,
          "value": 0
        }
      ],
      "defaultChart": 2,
      "description": "INV-18 CP5 - (23kW)",
      "deviceImage": {
        "contentType": "",
        "key": "",
        "lastChanged": null,
        "name": "PV_V1844",
        "uri": "https://www.alsoenergy.com/pub/Images/Device/1844.png"
      },
      "functionCode": 1,
      "hardwareStatus": 1,
      "installDate": "2016-07-30",
      "inverterKw": 23,
      "key": "H70644",
      "lastAttempt": "2025-12-19T20:00:26Z",
      "lastChanged": "2025-12-12T23:27:36Z",
      "lastData": "800 W",
      "lastSuccess": "2025-12-19T19:59:16Z",
      "name": "INV-18 CP5 - (23kW)",
      "outOfService": false,
      "primaryMetric": "800 W",
      "primaryMetricName": 38,
      "serialNum": "1012971545176",
      "sortOrder": 28,
      "units": 8,
      "unitsScale": 1
    },
    {
      "capacityKW": 36,
      "communicationResult": 0,
      "dataRegisters": [
        {
          "dataType": 0,
          "formattedValue": "1.3 \tkW",
          "name": "KwAC",
          "unit": 10,
          "value": 1.3
        },
        {
          "dataType": 0,
          "formattedValue": "422 \tMWh",
          "name": "KwhAC",
          "unit": 11,
          "value": 422408
        },
        {
          "dataType": 0,
          "formattedValue": "485 \tV",
          "name": "VacAB",
          "unit": 2,
          "value": 484.8
        },
        {
          "dataType": 0,
          "formattedValue": "484 \tV",
          "name": "VacBC",
          "unit": 2,
          "value": 484.3
        },
        {
          "dataType": 0,
          "formattedValue": "482 \tV",
          "name": "VacCA",
          "unit": 2,
          "value": 482.5
        },
        {
          "dataType": 0,
          "formattedValue": "1.6 \tA",
          "name": "IacA",
          "unit": 4,
          "value": 1.6
        },
        {
          "dataType": 0,
          "formattedValue": "1.5 \tA",
          "name": "IacB",
          "unit": 4,
          "value": 1.5
        },
        {
          "dataType": 0,
          "formattedValue": "1.5 \tA",
          "name": "IacC",
          "unit": 4,
          "value": 1.5
        },
        {
          "dataType": 0,
          "formattedValue": "676 \tV",
          "name": "Vdc1",
          "unit": 2,
          "value": 676
        },
        {
          "dataType": 0,
          "formattedValue": "0.9 \tA",
          "name": "Idc1",
          "unit": 4,
          "value": 0.9
        },
        {
          "dataType": 0,
          "formattedValue": "694 \tV",
          "name": "Vdc2",
          "unit": 2,
          "value": 693.9000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "0 \tV",
          "name": "Vdc3",
          "unit": 2,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0.8 \tA",
          "name": "Idc2",
          "unit": 4,
          "value": 0.8
        },
        {
          "dataType": 0,
          "formattedValue": "0 \tA",
          "name": "Idc3",
          "unit": 4,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "1.7 \tA",
          "name": "Idc",
          "unit": 4,
          "value": 1.7000000000000002
        },
        {
          "dataType": 0,
          "formattedValue": "457 \tV",
          "name": "Vdc",
          "unit": 2,
          "value": 456.6333333333334
        },
        {
          "dataType": 0,
          "formattedValue": "0.885 \tA",
          "name": "Iac",
          "unit": 4,
          "value": 0.8852708255150448
        },
        {
          "dataType": 0,
          "formattedValue": "280 \tV",
          "name": "Vac",
          "unit": 2,
          "value": 279.89954100632195
        },
        {
          "dataType": 0,
          "formattedValue": "62.4 \t\u00b0F",
          "name": "DeviceTemp",
          "unit": 30,
          "value": 16.900000000000002
        },
        {
          "dataType": 0,
          "formattedValue": "46.8 \t\u00b0F",
          "name": "InternalTemp",
          "unit": 30,
          "value": 8.200000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "31.8 \t\u00b0F",
          "name": "Temp_XMFR",
          "unit": 30,
          "value": -0.1
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Warning",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault0",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault1",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault2",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault3",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault4",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "43,690 \t ",
          "name": "OnOff",
          "unit": 0,
          "value": 43690
        },
        {
          "dataType": 0,
          "formattedValue": "100 \t%",
          "name": "LimitKW",
          "unit": 56,
          "value": 100
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rapm",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rrpm",
          "unit": 0,
          "value": 0
        }
      ],
      "defaultChart": 2,
      "description": "INV-19 CP5 - (36kW)",
      "deviceImage": {
        "contentType": "",
        "key": "",
        "lastChanged": null,
        "name": "PV_V1844",
        "uri": "https://www.alsoenergy.com/pub/Images/Device/1844.png"
      },
      "functionCode": 1,
      "hardwareStatus": 1,
      "installDate": "2016-07-28",
      "inverterKw": 36,
      "key": "H70645",
      "lastAttempt": "2025-12-19T20:00:33Z",
      "lastChanged": "2025-12-12T23:27:42Z",
      "lastData": "1.3 kW",
      "lastSuccess": "2025-12-19T19:59:17Z",
      "name": "INV-19 CP5 - (36kW)",
      "outOfService": false,
      "primaryMetric": "1.3 kW",
      "primaryMetricName": 38,
      "serialNum": "1012791548073",
      "sortOrder": 29,
      "units": 10,
      "unitsScale": 1000
    },
    {
      "capacityKW": 23,
      "communicationResult": 0,
      "dataRegisters": [
        {
          "dataType": 0,
          "formattedValue": "800 \tW",
          "name": "KwAC",
          "unit": 10,
          "value": 0.8
        },
        {
          "dataType": 0,
          "formattedValue": "271 \tMWh",
          "name": "KwhAC",
          "unit": 11,
          "value": 271048
        },
        {
          "dataType": 0,
          "formattedValue": "483 \tV",
          "name": "VacAB",
          "unit": 2,
          "value": 483.1
        },
        {
          "dataType": 0,
          "formattedValue": "483 \tV",
          "name": "VacBC",
          "unit": 2,
          "value": 482.6
        },
        {
          "dataType": 0,
          "formattedValue": "481 \tV",
          "name": "VacCA",
          "unit": 2,
          "value": 481
        },
        {
          "dataType": 0,
          "formattedValue": "1.3 \tA",
          "name": "IacA",
          "unit": 4,
          "value": 1.3
        },
        {
          "dataType": 0,
          "formattedValue": "1.2 \tA",
          "name": "IacB",
          "unit": 4,
          "value": 1.2000000000000002
        },
        {
          "dataType": 0,
          "formattedValue": "1.2 \tA",
          "name": "IacC",
          "unit": 4,
          "value": 1.2000000000000002
        },
        {
          "dataType": 0,
          "formattedValue": "697 \tV",
          "name": "Vdc1",
          "unit": 2,
          "value": 696.8000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "0.4 \tA",
          "name": "Idc1",
          "unit": 4,
          "value": 0.4
        },
        {
          "dataType": 0,
          "formattedValue": "697 \tV",
          "name": "Vdc2",
          "unit": 2,
          "value": 696.6
        },
        {
          "dataType": 0,
          "formattedValue": " \tV",
          "name": "Vdc3",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "0.4 \tA",
          "name": "Idc2",
          "unit": 4,
          "value": 0.4
        },
        {
          "dataType": 0,
          "formattedValue": " \tA",
          "name": "Idc3",
          "unit": 4,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "0.8 \tA",
          "name": "Idc",
          "unit": 4,
          "value": 0.8
        },
        {
          "dataType": 0,
          "formattedValue": "697 \tV",
          "name": "Vdc",
          "unit": 2,
          "value": 696.7
        },
        {
          "dataType": 0,
          "formattedValue": "0.712 \tA",
          "name": "Iac",
          "unit": 4,
          "value": 0.7120656640012317
        },
        {
          "dataType": 0,
          "formattedValue": "279 \tV",
          "name": "Vac",
          "unit": 2,
          "value": 278.91804509107703
        },
        {
          "dataType": 0,
          "formattedValue": "58.8 \t\u00b0F",
          "name": "DeviceTemp",
          "unit": 30,
          "value": 14.9
        },
        {
          "dataType": 0,
          "formattedValue": "45 \t\u00b0F",
          "name": "InternalTemp",
          "unit": 30,
          "value": 7.2
        },
        {
          "dataType": 0,
          "formattedValue": "31.8 \t\u00b0F",
          "name": "Temp_XMFR",
          "unit": 30,
          "value": -0.1
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Warning",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault0",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault1",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault2",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault3",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault4",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "43,690 \t ",
          "name": "OnOff",
          "unit": 0,
          "value": 43690
        },
        {
          "dataType": 0,
          "formattedValue": "100 \t%",
          "name": "LimitKW",
          "unit": 56,
          "value": 100
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rapm",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rrpm",
          "unit": 0,
          "value": 0
        }
      ],
      "defaultChart": 2,
      "description": "INV-20 CP6 - (23kW)",
      "deviceImage": {
        "contentType": "",
        "key": "",
        "lastChanged": null,
        "name": "PV_V1844",
        "uri": "https://www.alsoenergy.com/pub/Images/Device/1844.png"
      },
      "functionCode": 1,
      "hardwareStatus": 1,
      "installDate": "2016-07-30",
      "inverterKw": 23,
      "key": "H70646",
      "lastAttempt": "2025-12-19T20:00:33Z",
      "lastChanged": "2025-12-12T23:27:47Z",
      "lastData": "800 W",
      "lastSuccess": "2025-12-19T19:59:18Z",
      "name": "INV-20 CP6 - (23kW)",
      "outOfService": false,
      "primaryMetric": "800 W",
      "primaryMetricName": 38,
      "serialNum": "1012971545182",
      "sortOrder": 30,
      "units": 8,
      "unitsScale": 1
    },
    {
      "capacityKW": 23,
      "communicationResult": 0,
      "dataRegisters": [
        {
          "dataType": 0,
          "formattedValue": "800 \tW",
          "name": "KwAC",
          "unit": 10,
          "value": 0.8
        },
        {
          "dataType": 0,
          "formattedValue": "273 \tMWh",
          "name": "KwhAC",
          "unit": 11,
          "value": 273213
        },
        {
          "dataType": 0,
          "formattedValue": "484 \tV",
          "name": "VacAB",
          "unit": 2,
          "value": 484.40000000000003
        },
        {
          "dataType": 0,
          "formattedValue": "484 \tV",
          "name": "VacBC",
          "unit": 2,
          "value": 484.40000000000003
        },
        {
          "dataType": 0,
          "formattedValue": "482 \tV",
          "name": "VacCA",
          "unit": 2,
          "value": 481.8
        },
        {
          "dataType": 0,
          "formattedValue": "1 \tA",
          "name": "IacA",
          "unit": 4,
          "value": 1
        },
        {
          "dataType": 0,
          "formattedValue": "1 \tA",
          "name": "IacB",
          "unit": 4,
          "value": 1
        },
        {
          "dataType": 0,
          "formattedValue": "1 \tA",
          "name": "IacC",
          "unit": 4,
          "value": 1
        },
        {
          "dataType": 0,
          "formattedValue": "693 \tV",
          "name": "Vdc1",
          "unit": 2,
          "value": 692.9000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "0.4 \tA",
          "name": "Idc1",
          "unit": 4,
          "value": 0.4
        },
        {
          "dataType": 0,
          "formattedValue": "693 \tV",
          "name": "Vdc2",
          "unit": 2,
          "value": 692.6
        },
        {
          "dataType": 0,
          "formattedValue": " \tV",
          "name": "Vdc3",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "0.4 \tA",
          "name": "Idc2",
          "unit": 4,
          "value": 0.4
        },
        {
          "dataType": 0,
          "formattedValue": " \tA",
          "name": "Idc3",
          "unit": 4,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "0.8 \tA",
          "name": "Idc",
          "unit": 4,
          "value": 0.8
        },
        {
          "dataType": 0,
          "formattedValue": "693 \tV",
          "name": "Vdc",
          "unit": 2,
          "value": 692.75
        },
        {
          "dataType": 0,
          "formattedValue": "0.577 \tA",
          "name": "Iac",
          "unit": 4,
          "value": 0.577350538379377
        },
        {
          "dataType": 0,
          "formattedValue": "280 \tV",
          "name": "Vac",
          "unit": 2,
          "value": 279.66860079097023
        },
        {
          "dataType": 0,
          "formattedValue": "60.1 \t\u00b0F",
          "name": "DeviceTemp",
          "unit": 30,
          "value": 15.600000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "44.8 \t\u00b0F",
          "name": "InternalTemp",
          "unit": 30,
          "value": 7.1000000000000005
        },
        {
          "dataType": 0,
          "formattedValue": "31.8 \t\u00b0F",
          "name": "Temp_XMFR",
          "unit": 30,
          "value": -0.1
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Warning",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault0",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault1",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault2",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault3",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault4",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "43,690 \t ",
          "name": "OnOff",
          "unit": 0,
          "value": 43690
        },
        {
          "dataType": 0,
          "formattedValue": "100 \t%",
          "name": "LimitKW",
          "unit": 56,
          "value": 100
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rapm",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rrpm",
          "unit": 0,
          "value": 0
        }
      ],
      "defaultChart": 2,
      "description": "INV-21 CP6 - (23kW)",
      "deviceImage": {
        "contentType": "",
        "key": "",
        "lastChanged": null,
        "name": "PV_V1844",
        "uri": "https://www.alsoenergy.com/pub/Images/Device/1844.png"
      },
      "functionCode": 1,
      "hardwareStatus": 1,
      "installDate": "2016-08-01",
      "inverterKw": 23,
      "key": "H70647",
      "lastAttempt": "2025-12-19T20:00:38Z",
      "lastChanged": "2025-12-12T23:27:52Z",
      "lastData": "800 W",
      "lastSuccess": "2025-12-19T19:59:19Z",
      "name": "INV-21 CP6 - (23kW)",
      "outOfService": false,
      "primaryMetric": "800 W",
      "primaryMetricName": 38,
      "serialNum": "1012971543037",
      "sortOrder": 31,
      "units": 8,
      "unitsScale": 1
    },
    {
      "capacityKW": 23,
      "communicationResult": 0,
      "dataRegisters": [
        {
          "dataType": 0,
          "formattedValue": "800 \tW",
          "name": "KwAC",
          "unit": 10,
          "value": 0.8
        },
        {
          "dataType": 0,
          "formattedValue": "273 \tMWh",
          "name": "KwhAC",
          "unit": 11,
          "value": 272938
        },
        {
          "dataType": 0,
          "formattedValue": "484 \tV",
          "name": "VacAB",
          "unit": 2,
          "value": 483.5
        },
        {
          "dataType": 0,
          "formattedValue": "483 \tV",
          "name": "VacBC",
          "unit": 2,
          "value": 483.1
        },
        {
          "dataType": 0,
          "formattedValue": "482 \tV",
          "name": "VacCA",
          "unit": 2,
          "value": 481.8
        },
        {
          "dataType": 0,
          "formattedValue": "1.1 \tA",
          "name": "IacA",
          "unit": 4,
          "value": 1.1
        },
        {
          "dataType": 0,
          "formattedValue": "1 \tA",
          "name": "IacB",
          "unit": 4,
          "value": 1
        },
        {
          "dataType": 0,
          "formattedValue": "1 \tA",
          "name": "IacC",
          "unit": 4,
          "value": 1
        },
        {
          "dataType": 0,
          "formattedValue": "714 \tV",
          "name": "Vdc1",
          "unit": 2,
          "value": 714.4000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "0.4 \tA",
          "name": "Idc1",
          "unit": 4,
          "value": 0.4
        },
        {
          "dataType": 0,
          "formattedValue": "714 \tV",
          "name": "Vdc2",
          "unit": 2,
          "value": 714.4000000000001
        },
        {
          "dataType": 0,
          "formattedValue": " \tV",
          "name": "Vdc3",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "0.4 \tA",
          "name": "Idc2",
          "unit": 4,
          "value": 0.4
        },
        {
          "dataType": 0,
          "formattedValue": " \tA",
          "name": "Idc3",
          "unit": 4,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "0.8 \tA",
          "name": "Idc",
          "unit": 4,
          "value": 0.8
        },
        {
          "dataType": 0,
          "formattedValue": "714 \tV",
          "name": "Vdc",
          "unit": 2,
          "value": 714.4000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "0.597 \tA",
          "name": "Iac",
          "unit": 4,
          "value": 0.5965955563253563
        },
        {
          "dataType": 0,
          "formattedValue": "279 \tV",
          "name": "Vac",
          "unit": 2,
          "value": 279.14898530642876
        },
        {
          "dataType": 0,
          "formattedValue": "59.5 \t\u00b0F",
          "name": "DeviceTemp",
          "unit": 30,
          "value": 15.3
        },
        {
          "dataType": 0,
          "formattedValue": "46 \t\u00b0F",
          "name": "InternalTemp",
          "unit": 30,
          "value": 7.800000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "31.8 \t\u00b0F",
          "name": "Temp_XMFR",
          "unit": 30,
          "value": -0.1
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Warning",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault0",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault1",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault2",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault3",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault4",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "43,690 \t ",
          "name": "OnOff",
          "unit": 0,
          "value": 43690
        },
        {
          "dataType": 0,
          "formattedValue": "100 \t%",
          "name": "LimitKW",
          "unit": 56,
          "value": 100
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rapm",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rrpm",
          "unit": 0,
          "value": 0
        }
      ],
      "defaultChart": 2,
      "description": "INV-22 CP6 - (23kW)",
      "deviceImage": {
        "contentType": "",
        "key": "",
        "lastChanged": null,
        "name": "PV_V1844",
        "uri": "https://www.alsoenergy.com/pub/Images/Device/1844.png"
      },
      "functionCode": 1,
      "hardwareStatus": 1,
      "installDate": "2016-07-31",
      "inverterKw": 23,
      "key": "H70648",
      "lastAttempt": "2025-12-19T20:00:45Z",
      "lastChanged": "2025-12-12T23:27:57Z",
      "lastData": "800 W",
      "lastSuccess": "2025-12-19T19:59:20Z",
      "name": "INV-22 CP6 - (23kW)",
      "outOfService": false,
      "primaryMetric": "800 W",
      "primaryMetricName": 38,
      "serialNum": "1012971545208",
      "sortOrder": 32,
      "units": 8,
      "unitsScale": 1
    },
    {
      "capacityKW": 36,
      "communicationResult": 0,
      "dataRegisters": [
        {
          "dataType": 0,
          "formattedValue": "1.4 \tkW",
          "name": "KwAC",
          "unit": 10,
          "value": 1.4000000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "435 \tMWh",
          "name": "KwhAC",
          "unit": 11,
          "value": 435428
        },
        {
          "dataType": 0,
          "formattedValue": "484 \tV",
          "name": "VacAB",
          "unit": 2,
          "value": 484.40000000000003
        },
        {
          "dataType": 0,
          "formattedValue": "484 \tV",
          "name": "VacBC",
          "unit": 2,
          "value": 484.5
        },
        {
          "dataType": 0,
          "formattedValue": "483 \tV",
          "name": "VacCA",
          "unit": 2,
          "value": 482.70000000000005
        },
        {
          "dataType": 0,
          "formattedValue": "1.8 \tA",
          "name": "IacA",
          "unit": 4,
          "value": 1.8
        },
        {
          "dataType": 0,
          "formattedValue": "1.5 \tA",
          "name": "IacB",
          "unit": 4,
          "value": 1.5
        },
        {
          "dataType": 0,
          "formattedValue": "1.5 \tA",
          "name": "IacC",
          "unit": 4,
          "value": 1.5
        },
        {
          "dataType": 0,
          "formattedValue": "671 \tV",
          "name": "Vdc1",
          "unit": 2,
          "value": 670.8000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "0.9 \tA",
          "name": "Idc1",
          "unit": 4,
          "value": 0.9
        },
        {
          "dataType": 0,
          "formattedValue": "690 \tV",
          "name": "Vdc2",
          "unit": 2,
          "value": 690
        },
        {
          "dataType": 0,
          "formattedValue": "0 \tV",
          "name": "Vdc3",
          "unit": 2,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0.8 \tA",
          "name": "Idc2",
          "unit": 4,
          "value": 0.8
        },
        {
          "dataType": 0,
          "formattedValue": "0 \tA",
          "name": "Idc3",
          "unit": 4,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "1.7 \tA",
          "name": "Idc",
          "unit": 4,
          "value": 1.7000000000000002
        },
        {
          "dataType": 0,
          "formattedValue": "454 \tV",
          "name": "Vdc",
          "unit": 2,
          "value": 453.6000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "0.924 \tA",
          "name": "Iac",
          "unit": 4,
          "value": 0.9237608614070034
        },
        {
          "dataType": 0,
          "formattedValue": "280 \tV",
          "name": "Vac",
          "unit": 2,
          "value": 279.66860079097023
        },
        {
          "dataType": 0,
          "formattedValue": "60.6 \t\u00b0F",
          "name": "DeviceTemp",
          "unit": 30,
          "value": 15.9
        },
        {
          "dataType": 0,
          "formattedValue": "45.7 \t\u00b0F",
          "name": "InternalTemp",
          "unit": 30,
          "value": 7.6000000000000005
        },
        {
          "dataType": 0,
          "formattedValue": "31.8 \t\u00b0F",
          "name": "Temp_XMFR",
          "unit": 30,
          "value": -0.1
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Warning",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault0",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault1",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault2",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault3",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault4",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "43,690 \t ",
          "name": "OnOff",
          "unit": 0,
          "value": 43690
        },
        {
          "dataType": 0,
          "formattedValue": "100 \t%",
          "name": "LimitKW",
          "unit": 56,
          "value": 100
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rapm",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rrpm",
          "unit": 0,
          "value": 0
        }
      ],
      "defaultChart": 2,
      "description": "INV-23 CP6 - (36kW)",
      "deviceImage": {
        "contentType": "",
        "key": "",
        "lastChanged": null,
        "name": "PV_V1844",
        "uri": "https://www.alsoenergy.com/pub/Images/Device/1844.png"
      },
      "functionCode": 1,
      "hardwareStatus": 1,
      "installDate": "2016-07-29",
      "inverterKw": 36,
      "key": "H70649",
      "lastAttempt": "2025-12-19T20:00:46Z",
      "lastChanged": "2025-12-12T23:28:02Z",
      "lastData": "1.4 kW",
      "lastSuccess": "2025-12-19T19:59:21Z",
      "name": "INV-23 CP6 - (36kW)",
      "outOfService": false,
      "primaryMetric": "1.4 kW",
      "primaryMetricName": 38,
      "serialNum": "1012791548084",
      "sortOrder": 33,
      "units": 10,
      "unitsScale": 1000
    },
    {
      "capacityKW": 23,
      "communicationResult": 0,
      "dataRegisters": [
        {
          "dataType": 0,
          "formattedValue": "800 \tW",
          "name": "KwAC",
          "unit": 10,
          "value": 0.8
        },
        {
          "dataType": 0,
          "formattedValue": "279 \tMWh",
          "name": "KwhAC",
          "unit": 11,
          "value": 278771
        },
        {
          "dataType": 0,
          "formattedValue": "483 \tV",
          "name": "VacAB",
          "unit": 2,
          "value": 482.8
        },
        {
          "dataType": 0,
          "formattedValue": "484 \tV",
          "name": "VacBC",
          "unit": 2,
          "value": 483.6
        },
        {
          "dataType": 0,
          "formattedValue": "482 \tV",
          "name": "VacCA",
          "unit": 2,
          "value": 482.40000000000003
        },
        {
          "dataType": 0,
          "formattedValue": "1.3 \tA",
          "name": "IacA",
          "unit": 4,
          "value": 1.3
        },
        {
          "dataType": 0,
          "formattedValue": "1 \tA",
          "name": "IacB",
          "unit": 4,
          "value": 1
        },
        {
          "dataType": 0,
          "formattedValue": "1.3 \tA",
          "name": "IacC",
          "unit": 4,
          "value": 1.3
        },
        {
          "dataType": 0,
          "formattedValue": "703 \tV",
          "name": "Vdc1",
          "unit": 2,
          "value": 702.7
        },
        {
          "dataType": 0,
          "formattedValue": "0.4 \tA",
          "name": "Idc1",
          "unit": 4,
          "value": 0.4
        },
        {
          "dataType": 0,
          "formattedValue": "702 \tV",
          "name": "Vdc2",
          "unit": 2,
          "value": 701.9000000000001
        },
        {
          "dataType": 0,
          "formattedValue": " \tV",
          "name": "Vdc3",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "0.4 \tA",
          "name": "Idc2",
          "unit": 4,
          "value": 0.4
        },
        {
          "dataType": 0,
          "formattedValue": " \tA",
          "name": "Idc3",
          "unit": 4,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "0.8 \tA",
          "name": "Idc",
          "unit": 4,
          "value": 0.8
        },
        {
          "dataType": 0,
          "formattedValue": "702 \tV",
          "name": "Vdc",
          "unit": 2,
          "value": 702.3000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "0.693 \tA",
          "name": "Iac",
          "unit": 4,
          "value": 0.6928206460552524
        },
        {
          "dataType": 0,
          "formattedValue": "279 \tV",
          "name": "Vac",
          "unit": 2,
          "value": 278.7448399295632
        },
        {
          "dataType": 0,
          "formattedValue": "57.6 \t\u00b0F",
          "name": "DeviceTemp",
          "unit": 30,
          "value": 14.200000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "45.1 \t\u00b0F",
          "name": "InternalTemp",
          "unit": 30,
          "value": 7.300000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "31.8 \t\u00b0F",
          "name": "Temp_XMFR",
          "unit": 30,
          "value": -0.1
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Warning",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault0",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault1",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault2",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault3",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault4",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "43,690 \t ",
          "name": "OnOff",
          "unit": 0,
          "value": 43690
        },
        {
          "dataType": 0,
          "formattedValue": "100 \t%",
          "name": "LimitKW",
          "unit": 56,
          "value": 100
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rapm",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rrpm",
          "unit": 0,
          "value": 0
        }
      ],
      "defaultChart": 2,
      "description": "INV-24 CP7 - (23kW)",
      "deviceImage": {
        "contentType": "",
        "key": "",
        "lastChanged": null,
        "name": "PV_V1844",
        "uri": "https://www.alsoenergy.com/pub/Images/Device/1844.png"
      },
      "functionCode": 1,
      "hardwareStatus": 1,
      "installDate": "2016-08-01",
      "inverterKw": 23,
      "key": "H70650",
      "lastAttempt": "2025-12-19T20:00:49Z",
      "lastChanged": "2025-12-12T23:28:07Z",
      "lastData": "800 W",
      "lastSuccess": "2025-12-19T19:59:23Z",
      "name": "INV-24 CP7 - (23kW)",
      "outOfService": false,
      "primaryMetric": "800 W",
      "primaryMetricName": 38,
      "serialNum": "1012971545078",
      "sortOrder": 34,
      "units": 8,
      "unitsScale": 1
    },
    {
      "capacityKW": 23,
      "communicationResult": 0,
      "dataRegisters": [
        {
          "dataType": 0,
          "formattedValue": "800 \tW",
          "name": "KwAC",
          "unit": 10,
          "value": 0.8
        },
        {
          "dataType": 0,
          "formattedValue": "266 \tMWh",
          "name": "KwhAC",
          "unit": 11,
          "value": 266331
        },
        {
          "dataType": 0,
          "formattedValue": "482 \tV",
          "name": "VacAB",
          "unit": 2,
          "value": 482.1
        },
        {
          "dataType": 0,
          "formattedValue": "484 \tV",
          "name": "VacBC",
          "unit": 2,
          "value": 483.90000000000003
        },
        {
          "dataType": 0,
          "formattedValue": "484 \tV",
          "name": "VacCA",
          "unit": 2,
          "value": 483.90000000000003
        },
        {
          "dataType": 0,
          "formattedValue": "1 \tA",
          "name": "IacA",
          "unit": 4,
          "value": 1
        },
        {
          "dataType": 0,
          "formattedValue": "0.8 \tA",
          "name": "IacB",
          "unit": 4,
          "value": 0.8
        },
        {
          "dataType": 0,
          "formattedValue": "1.3 \tA",
          "name": "IacC",
          "unit": 4,
          "value": 1.3
        },
        {
          "dataType": 0,
          "formattedValue": "706 \tV",
          "name": "Vdc1",
          "unit": 2,
          "value": 705.5
        },
        {
          "dataType": 0,
          "formattedValue": "0.4 \tA",
          "name": "Idc1",
          "unit": 4,
          "value": 0.4
        },
        {
          "dataType": 0,
          "formattedValue": "705 \tV",
          "name": "Vdc2",
          "unit": 2,
          "value": 705.1
        },
        {
          "dataType": 0,
          "formattedValue": " \tV",
          "name": "Vdc3",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "0.4 \tA",
          "name": "Idc2",
          "unit": 4,
          "value": 0.4
        },
        {
          "dataType": 0,
          "formattedValue": " \tA",
          "name": "Idc3",
          "unit": 4,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "0.8 \tA",
          "name": "Idc",
          "unit": 4,
          "value": 0.8
        },
        {
          "dataType": 0,
          "formattedValue": "705 \tV",
          "name": "Vdc",
          "unit": 2,
          "value": 705.3000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "0.597 \tA",
          "name": "Iac",
          "unit": 4,
          "value": 0.5965955563253563
        },
        {
          "dataType": 0,
          "formattedValue": "278 \tV",
          "name": "Vac",
          "unit": 2,
          "value": 278.34069455269764
        },
        {
          "dataType": 0,
          "formattedValue": "62.8 \t\u00b0F",
          "name": "DeviceTemp",
          "unit": 30,
          "value": 17.1
        },
        {
          "dataType": 0,
          "formattedValue": "43.5 \t\u00b0F",
          "name": "InternalTemp",
          "unit": 30,
          "value": 6.4
        },
        {
          "dataType": 0,
          "formattedValue": "31.8 \t\u00b0F",
          "name": "Temp_XMFR",
          "unit": 30,
          "value": -0.1
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Warning",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault0",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault1",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault2",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault3",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault4",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "43,690 \t ",
          "name": "OnOff",
          "unit": 0,
          "value": 43690
        },
        {
          "dataType": 0,
          "formattedValue": "100 \t%",
          "name": "LimitKW",
          "unit": 56,
          "value": 100
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rapm",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "3 \t ",
          "name": "rrpm",
          "unit": 0,
          "value": 3
        }
      ],
      "defaultChart": 2,
      "description": "INV-25 CP7 - (23kW)",
      "deviceImage": {
        "contentType": "",
        "key": "",
        "lastChanged": null,
        "name": "PV_V1844",
        "uri": "https://www.alsoenergy.com/pub/Images/Device/1844.png"
      },
      "functionCode": 1,
      "hardwareStatus": 1,
      "installDate": "2016-07-31",
      "inverterKw": 23,
      "key": "H70651",
      "lastAttempt": "2025-12-19T20:00:51Z",
      "lastChanged": "2025-12-12T23:31:19Z",
      "lastData": "800 W",
      "lastSuccess": "2025-12-19T19:59:23Z",
      "name": "INV-25 CP7 - (23kW)",
      "outOfService": false,
      "primaryMetric": "800 W",
      "primaryMetricName": 38,
      "serialNum": "1012971545128",
      "sortOrder": 35,
      "units": 8,
      "unitsScale": 1
    },
    {
      "capacityKW": 23,
      "communicationResult": 0,
      "dataRegisters": [
        {
          "dataType": 0,
          "formattedValue": "700 \tW",
          "name": "KwAC",
          "unit": 10,
          "value": 0.7000000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "266 \tMWh",
          "name": "KwhAC",
          "unit": 11,
          "value": 266229
        },
        {
          "dataType": 0,
          "formattedValue": "484 \tV",
          "name": "VacAB",
          "unit": 2,
          "value": 484.1
        },
        {
          "dataType": 0,
          "formattedValue": "484 \tV",
          "name": "VacBC",
          "unit": 2,
          "value": 484.20000000000005
        },
        {
          "dataType": 0,
          "formattedValue": "482 \tV",
          "name": "VacCA",
          "unit": 2,
          "value": 481.90000000000003
        },
        {
          "dataType": 0,
          "formattedValue": "1 \tA",
          "name": "IacA",
          "unit": 4,
          "value": 1
        },
        {
          "dataType": 0,
          "formattedValue": "1 \tA",
          "name": "IacB",
          "unit": 4,
          "value": 1
        },
        {
          "dataType": 0,
          "formattedValue": "1 \tA",
          "name": "IacC",
          "unit": 4,
          "value": 1
        },
        {
          "dataType": 0,
          "formattedValue": "713 \tV",
          "name": "Vdc1",
          "unit": 2,
          "value": 713.4000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "0.4 \tA",
          "name": "Idc1",
          "unit": 4,
          "value": 0.4
        },
        {
          "dataType": 0,
          "formattedValue": "714 \tV",
          "name": "Vdc2",
          "unit": 2,
          "value": 713.8000000000001
        },
        {
          "dataType": 0,
          "formattedValue": " \tV",
          "name": "Vdc3",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "0.4 \tA",
          "name": "Idc2",
          "unit": 4,
          "value": 0.4
        },
        {
          "dataType": 0,
          "formattedValue": " \tA",
          "name": "Idc3",
          "unit": 4,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "0.8 \tA",
          "name": "Idc",
          "unit": 4,
          "value": 0.8
        },
        {
          "dataType": 0,
          "formattedValue": "714 \tV",
          "name": "Vdc",
          "unit": 2,
          "value": 713.6
        },
        {
          "dataType": 0,
          "formattedValue": "0.577 \tA",
          "name": "Iac",
          "unit": 4,
          "value": 0.577350538379377
        },
        {
          "dataType": 0,
          "formattedValue": "279 \tV",
          "name": "Vac",
          "unit": 2,
          "value": 279.4953956294564
        },
        {
          "dataType": 0,
          "formattedValue": "57.9 \t\u00b0F",
          "name": "DeviceTemp",
          "unit": 30,
          "value": 14.4
        },
        {
          "dataType": 0,
          "formattedValue": "45.3 \t\u00b0F",
          "name": "InternalTemp",
          "unit": 30,
          "value": 7.4
        },
        {
          "dataType": 0,
          "formattedValue": "31.8 \t\u00b0F",
          "name": "Temp_XMFR",
          "unit": 30,
          "value": -0.1
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Warning",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault0",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault1",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault2",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault3",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault4",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "43,690 \t ",
          "name": "OnOff",
          "unit": 0,
          "value": 43690
        },
        {
          "dataType": 0,
          "formattedValue": "100 \t%",
          "name": "LimitKW",
          "unit": 56,
          "value": 100
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rapm",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rrpm",
          "unit": 0,
          "value": 0
        }
      ],
      "defaultChart": 2,
      "description": "INV-26 CP7 - (23kW)",
      "deviceImage": {
        "contentType": "",
        "key": "",
        "lastChanged": null,
        "name": "PV_V1844",
        "uri": "https://www.alsoenergy.com/pub/Images/Device/1844.png"
      },
      "functionCode": 1,
      "hardwareStatus": 1,
      "installDate": "2016-07-31",
      "inverterKw": 23,
      "key": "H70652",
      "lastAttempt": "2025-12-19T20:00:59Z",
      "lastChanged": "2025-12-12T23:31:25Z",
      "lastData": "700 W",
      "lastSuccess": "2025-12-19T19:59:25Z",
      "name": "INV-26 CP7 - (23kW)",
      "outOfService": false,
      "primaryMetric": "700 W",
      "primaryMetricName": 38,
      "serialNum": "1012971545148",
      "sortOrder": 36,
      "units": 8,
      "unitsScale": 1
    },
    {
      "capacityKW": 36,
      "communicationResult": 0,
      "dataRegisters": [
        {
          "dataType": 0,
          "formattedValue": "1.3 \tkW",
          "name": "KwAC",
          "unit": 10,
          "value": 1.3
        },
        {
          "dataType": 0,
          "formattedValue": "417 \tMWh",
          "name": "KwhAC",
          "unit": 11,
          "value": 416867
        },
        {
          "dataType": 0,
          "formattedValue": "484 \tV",
          "name": "VacAB",
          "unit": 2,
          "value": 483.70000000000005
        },
        {
          "dataType": 0,
          "formattedValue": "484 \tV",
          "name": "VacBC",
          "unit": 2,
          "value": 484.1
        },
        {
          "dataType": 0,
          "formattedValue": "482 \tV",
          "name": "VacCA",
          "unit": 2,
          "value": 481.6
        },
        {
          "dataType": 0,
          "formattedValue": "1.6 \tA",
          "name": "IacA",
          "unit": 4,
          "value": 1.6
        },
        {
          "dataType": 0,
          "formattedValue": "1.5 \tA",
          "name": "IacB",
          "unit": 4,
          "value": 1.5
        },
        {
          "dataType": 0,
          "formattedValue": "1.5 \tA",
          "name": "IacC",
          "unit": 4,
          "value": 1.5
        },
        {
          "dataType": 0,
          "formattedValue": "719 \tV",
          "name": "Vdc1",
          "unit": 2,
          "value": 719.1
        },
        {
          "dataType": 0,
          "formattedValue": "0.8 \tA",
          "name": "Idc1",
          "unit": 4,
          "value": 0.8
        },
        {
          "dataType": 0,
          "formattedValue": "684 \tV",
          "name": "Vdc2",
          "unit": 2,
          "value": 683.8000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "0 \tV",
          "name": "Vdc3",
          "unit": 2,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0.8 \tA",
          "name": "Idc2",
          "unit": 4,
          "value": 0.8
        },
        {
          "dataType": 0,
          "formattedValue": "0 \tA",
          "name": "Idc3",
          "unit": 4,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "1.6 \tA",
          "name": "Idc",
          "unit": 4,
          "value": 1.6
        },
        {
          "dataType": 0,
          "formattedValue": "468 \tV",
          "name": "Vdc",
          "unit": 2,
          "value": 467.6333333333334
        },
        {
          "dataType": 0,
          "formattedValue": "0.885 \tA",
          "name": "Iac",
          "unit": 4,
          "value": 0.8852708255150448
        },
        {
          "dataType": 0,
          "formattedValue": "279 \tV",
          "name": "Vac",
          "unit": 2,
          "value": 279.2644554141047
        },
        {
          "dataType": 0,
          "formattedValue": "61.9 \t\u00b0F",
          "name": "DeviceTemp",
          "unit": 30,
          "value": 16.6
        },
        {
          "dataType": 0,
          "formattedValue": "46.2 \t\u00b0F",
          "name": "InternalTemp",
          "unit": 30,
          "value": 7.9
        },
        {
          "dataType": 0,
          "formattedValue": "31.8 \t\u00b0F",
          "name": "Temp_XMFR",
          "unit": 30,
          "value": -0.1
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Warning",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault0",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault1",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault2",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault3",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault4",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "43,690 \t ",
          "name": "OnOff",
          "unit": 0,
          "value": 43690
        },
        {
          "dataType": 0,
          "formattedValue": "100 \t%",
          "name": "LimitKW",
          "unit": 56,
          "value": 100
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rapm",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rrpm",
          "unit": 0,
          "value": 0
        }
      ],
      "defaultChart": 2,
      "description": "INV-27 CP7 - (36kW)",
      "deviceImage": {
        "contentType": "",
        "key": "",
        "lastChanged": null,
        "name": "PV_V1844",
        "uri": "https://www.alsoenergy.com/pub/Images/Device/1844.png"
      },
      "functionCode": 1,
      "hardwareStatus": 1,
      "installDate": "2016-07-27",
      "inverterKw": 36,
      "key": "H70653",
      "lastAttempt": "2025-12-19T20:00:55Z",
      "lastChanged": "2025-12-12T23:31:30Z",
      "lastData": "1.3 kW",
      "lastSuccess": "2025-12-19T19:59:26Z",
      "name": "INV-27 CP7 - (36kW)",
      "outOfService": false,
      "primaryMetric": "1.3 kW",
      "primaryMetricName": 38,
      "serialNum": "1012791547029",
      "sortOrder": 37,
      "units": 10,
      "unitsScale": 1000
    },
    {
      "capacityKW": 36,
      "communicationResult": 0,
      "dataRegisters": [
        {
          "dataType": 0,
          "formattedValue": "1.3 \tkW",
          "name": "KwAC",
          "unit": 10,
          "value": 1.3
        },
        {
          "dataType": 0,
          "formattedValue": "418 \tMWh",
          "name": "KwhAC",
          "unit": 11,
          "value": 417937
        },
        {
          "dataType": 0,
          "formattedValue": "484 \tV",
          "name": "VacAB",
          "unit": 2,
          "value": 484.1
        },
        {
          "dataType": 0,
          "formattedValue": "483 \tV",
          "name": "VacBC",
          "unit": 2,
          "value": 482.6
        },
        {
          "dataType": 0,
          "formattedValue": "482 \tV",
          "name": "VacCA",
          "unit": 2,
          "value": 481.6
        },
        {
          "dataType": 0,
          "formattedValue": "1.6 \tA",
          "name": "IacA",
          "unit": 4,
          "value": 1.6
        },
        {
          "dataType": 0,
          "formattedValue": "1.5 \tA",
          "name": "IacB",
          "unit": 4,
          "value": 1.5
        },
        {
          "dataType": 0,
          "formattedValue": "1.5 \tA",
          "name": "IacC",
          "unit": 4,
          "value": 1.5
        },
        {
          "dataType": 0,
          "formattedValue": "702 \tV",
          "name": "Vdc1",
          "unit": 2,
          "value": 701.7
        },
        {
          "dataType": 0,
          "formattedValue": "0.8 \tA",
          "name": "Idc1",
          "unit": 4,
          "value": 0.8
        },
        {
          "dataType": 0,
          "formattedValue": "701 \tV",
          "name": "Vdc2",
          "unit": 2,
          "value": 701.1
        },
        {
          "dataType": 0,
          "formattedValue": "0 \tV",
          "name": "Vdc3",
          "unit": 2,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0.8 \tA",
          "name": "Idc2",
          "unit": 4,
          "value": 0.8
        },
        {
          "dataType": 0,
          "formattedValue": "0 \tA",
          "name": "Idc3",
          "unit": 4,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "1.6 \tA",
          "name": "Idc",
          "unit": 4,
          "value": 1.6
        },
        {
          "dataType": 0,
          "formattedValue": "468 \tV",
          "name": "Vdc",
          "unit": 2,
          "value": 467.6000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "0.885 \tA",
          "name": "Iac",
          "unit": 4,
          "value": 0.8852708255150448
        },
        {
          "dataType": 0,
          "formattedValue": "279 \tV",
          "name": "Vac",
          "unit": 2,
          "value": 279.4953956294564
        },
        {
          "dataType": 0,
          "formattedValue": "69.1 \t\u00b0F",
          "name": "DeviceTemp",
          "unit": 30,
          "value": 20.6
        },
        {
          "dataType": 0,
          "formattedValue": "48.7 \t\u00b0F",
          "name": "InternalTemp",
          "unit": 30,
          "value": 9.3
        },
        {
          "dataType": 0,
          "formattedValue": "31.8 \t\u00b0F",
          "name": "Temp_XMFR",
          "unit": 30,
          "value": -0.1
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Warning",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault0",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault1",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault2",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault3",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault4",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "43,690 \t ",
          "name": "OnOff",
          "unit": 0,
          "value": 43690
        },
        {
          "dataType": 0,
          "formattedValue": "100 \t%",
          "name": "LimitKW",
          "unit": 56,
          "value": 100
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rapm",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rrpm",
          "unit": 0,
          "value": 0
        }
      ],
      "defaultChart": 2,
      "description": "INV-28 CP8 - (36kW)",
      "deviceImage": {
        "contentType": "",
        "key": "",
        "lastChanged": null,
        "name": "PV_V1844",
        "uri": "https://www.alsoenergy.com/pub/Images/Device/1844.png"
      },
      "functionCode": 1,
      "hardwareStatus": 1,
      "installDate": "2016-07-27",
      "inverterKw": 36,
      "key": "H70654",
      "lastAttempt": "2025-12-19T20:01:09Z",
      "lastChanged": "2025-12-12T23:31:36Z",
      "lastData": "1.3 kW",
      "lastSuccess": "2025-12-19T19:59:27Z",
      "name": "INV-28 CP8 - (36kW)",
      "outOfService": false,
      "primaryMetric": "1.3 kW",
      "primaryMetricName": 38,
      "serialNum": "1012791534075",
      "sortOrder": 38,
      "units": 10,
      "unitsScale": 1000
    },
    {
      "capacityKW": 28,
      "communicationResult": 0,
      "dataRegisters": [
        {
          "dataType": 0,
          "formattedValue": "1 \tkW",
          "name": "KwAC",
          "unit": 10,
          "value": 1
        },
        {
          "dataType": 0,
          "formattedValue": "322 \tMWh",
          "name": "KwhAC",
          "unit": 11,
          "value": 322175
        },
        {
          "dataType": 0,
          "formattedValue": "483 \tV",
          "name": "VacAB",
          "unit": 2,
          "value": 482.6
        },
        {
          "dataType": 0,
          "formattedValue": "484 \tV",
          "name": "VacBC",
          "unit": 2,
          "value": 483.8
        },
        {
          "dataType": 0,
          "formattedValue": "481 \tV",
          "name": "VacCA",
          "unit": 2,
          "value": 481.1
        },
        {
          "dataType": 0,
          "formattedValue": "1.3 \tA",
          "name": "IacA",
          "unit": 4,
          "value": 1.3
        },
        {
          "dataType": 0,
          "formattedValue": "1.3 \tA",
          "name": "IacB",
          "unit": 4,
          "value": 1.3
        },
        {
          "dataType": 0,
          "formattedValue": "1.3 \tA",
          "name": "IacC",
          "unit": 4,
          "value": 1.3
        },
        {
          "dataType": 0,
          "formattedValue": "693 \tV",
          "name": "Vdc1",
          "unit": 2,
          "value": 693.3000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "0.6 \tA",
          "name": "Idc1",
          "unit": 4,
          "value": 0.6000000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "693 \tV",
          "name": "Vdc2",
          "unit": 2,
          "value": 693.2
        },
        {
          "dataType": 0,
          "formattedValue": " \tV",
          "name": "Vdc3",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "0.5 \tA",
          "name": "Idc2",
          "unit": 4,
          "value": 0.5
        },
        {
          "dataType": 0,
          "formattedValue": " \tA",
          "name": "Idc3",
          "unit": 4,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "1.1 \tA",
          "name": "Idc",
          "unit": 4,
          "value": 1.1
        },
        {
          "dataType": 0,
          "formattedValue": "693 \tV",
          "name": "Vdc",
          "unit": 2,
          "value": 693.25
        },
        {
          "dataType": 0,
          "formattedValue": "0.751 \tA",
          "name": "Iac",
          "unit": 4,
          "value": 0.7505556998931902
        },
        {
          "dataType": 0,
          "formattedValue": "279 \tV",
          "name": "Vac",
          "unit": 2,
          "value": 278.62936982188734
        },
        {
          "dataType": 0,
          "formattedValue": "64 \t\u00b0F",
          "name": "DeviceTemp",
          "unit": 30,
          "value": 17.8
        },
        {
          "dataType": 0,
          "formattedValue": "48.9 \t\u00b0F",
          "name": "InternalTemp",
          "unit": 30,
          "value": 9.4
        },
        {
          "dataType": 0,
          "formattedValue": "31.8 \t\u00b0F",
          "name": "Temp_XMFR",
          "unit": 30,
          "value": -0.1
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Warning",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault0",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault1",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault2",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault3",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault4",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "43,690 \t ",
          "name": "OnOff",
          "unit": 0,
          "value": 43690
        },
        {
          "dataType": 0,
          "formattedValue": "100 \t%",
          "name": "LimitKW",
          "unit": 56,
          "value": 100
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rapm",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rrpm",
          "unit": 0,
          "value": 0
        }
      ],
      "defaultChart": 2,
      "description": "INV-29 CP8 - (28kW)",
      "deviceImage": {
        "contentType": "",
        "key": "",
        "lastChanged": null,
        "name": "PV_V1844",
        "uri": "https://www.alsoenergy.com/pub/Images/Device/1844.png"
      },
      "functionCode": 1,
      "hardwareStatus": 1,
      "installDate": "2016-07-29",
      "inverterKw": 28,
      "key": "H70655",
      "lastAttempt": "2025-12-19T20:01:07Z",
      "lastChanged": "2025-12-12T23:31:43Z",
      "lastData": "1 kW",
      "lastSuccess": "2025-12-19T19:59:28Z",
      "name": "INV-29 CP8 - (28kW)",
      "outOfService": false,
      "primaryMetric": "1 kW",
      "primaryMetricName": 38,
      "serialNum": "1012981545186",
      "sortOrder": 39,
      "units": 10,
      "unitsScale": 1000
    },
    {
      "capacityKW": 28,
      "communicationResult": 0,
      "dataRegisters": [
        {
          "dataType": 0,
          "formattedValue": "1 \tkW",
          "name": "KwAC",
          "unit": 10,
          "value": 1
        },
        {
          "dataType": 0,
          "formattedValue": "314 \tMWh",
          "name": "KwhAC",
          "unit": 11,
          "value": 313706
        },
        {
          "dataType": 0,
          "formattedValue": "482 \tV",
          "name": "VacAB",
          "unit": 2,
          "value": 482
        },
        {
          "dataType": 0,
          "formattedValue": "482 \tV",
          "name": "VacBC",
          "unit": 2,
          "value": 482.3
        },
        {
          "dataType": 0,
          "formattedValue": "480 \tV",
          "name": "VacCA",
          "unit": 2,
          "value": 480.20000000000005
        },
        {
          "dataType": 0,
          "formattedValue": "1.2 \tA",
          "name": "IacA",
          "unit": 4,
          "value": 1.2000000000000002
        },
        {
          "dataType": 0,
          "formattedValue": "1.1 \tA",
          "name": "IacB",
          "unit": 4,
          "value": 1.1
        },
        {
          "dataType": 0,
          "formattedValue": "1.2 \tA",
          "name": "IacC",
          "unit": 4,
          "value": 1.2000000000000002
        },
        {
          "dataType": 0,
          "formattedValue": "693 \tV",
          "name": "Vdc1",
          "unit": 2,
          "value": 693.1
        },
        {
          "dataType": 0,
          "formattedValue": "0.6 \tA",
          "name": "Idc1",
          "unit": 4,
          "value": 0.6000000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "693 \tV",
          "name": "Vdc2",
          "unit": 2,
          "value": 692.7
        },
        {
          "dataType": 0,
          "formattedValue": " \tV",
          "name": "Vdc3",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "0.6 \tA",
          "name": "Idc2",
          "unit": 4,
          "value": 0.6000000000000001
        },
        {
          "dataType": 0,
          "formattedValue": " \tA",
          "name": "Idc3",
          "unit": 4,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "1.2 \tA",
          "name": "Idc",
          "unit": 4,
          "value": 1.2000000000000002
        },
        {
          "dataType": 0,
          "formattedValue": "693 \tV",
          "name": "Vdc",
          "unit": 2,
          "value": 692.9000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "0.674 \tA",
          "name": "Iac",
          "unit": 4,
          "value": 0.6735756281092732
        },
        {
          "dataType": 0,
          "formattedValue": "278 \tV",
          "name": "Vac",
          "unit": 2,
          "value": 278.2829594988597
        },
        {
          "dataType": 0,
          "formattedValue": "67.3 \t\u00b0F",
          "name": "DeviceTemp",
          "unit": 30,
          "value": 19.6
        },
        {
          "dataType": 0,
          "formattedValue": "48.7 \t\u00b0F",
          "name": "InternalTemp",
          "unit": 30,
          "value": 9.3
        },
        {
          "dataType": 0,
          "formattedValue": "31.8 \t\u00b0F",
          "name": "Temp_XMFR",
          "unit": 30,
          "value": -0.1
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Warning",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault0",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault1",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault2",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault3",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault4",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "43,690 \t ",
          "name": "OnOff",
          "unit": 0,
          "value": 43690
        },
        {
          "dataType": 0,
          "formattedValue": "100 \t%",
          "name": "LimitKW",
          "unit": 56,
          "value": 100
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rapm",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rrpm",
          "unit": 0,
          "value": 0
        }
      ],
      "defaultChart": 2,
      "description": "INV-30 CP8 - (28kW)",
      "deviceImage": {
        "contentType": "",
        "key": "",
        "lastChanged": null,
        "name": "PV_V1844",
        "uri": "https://www.alsoenergy.com/pub/Images/Device/1844.png"
      },
      "functionCode": 1,
      "hardwareStatus": 1,
      "installDate": "2016-07-30",
      "inverterKw": 28,
      "key": "H70656",
      "lastAttempt": "2025-12-19T20:01:07Z",
      "lastChanged": "2025-12-12T23:31:48Z",
      "lastData": "1 kW",
      "lastSuccess": "2025-12-19T19:59:29Z",
      "name": "INV-30 CP8 - (28kW)",
      "outOfService": false,
      "primaryMetric": "1 kW",
      "primaryMetricName": 38,
      "serialNum": "1012981602205",
      "sortOrder": 40,
      "units": 10,
      "unitsScale": 1000
    },
    {
      "capacityKW": 36,
      "communicationResult": 0,
      "dataRegisters": [
        {
          "dataType": 0,
          "formattedValue": "1.2 \tkW",
          "name": "KwAC",
          "unit": 10,
          "value": 1.2000000000000002
        },
        {
          "dataType": 0,
          "formattedValue": "425 \tMWh",
          "name": "KwhAC",
          "unit": 11,
          "value": 425231
        },
        {
          "dataType": 0,
          "formattedValue": "484 \tV",
          "name": "VacAB",
          "unit": 2,
          "value": 483.70000000000005
        },
        {
          "dataType": 0,
          "formattedValue": "484 \tV",
          "name": "VacBC",
          "unit": 2,
          "value": 484.20000000000005
        },
        {
          "dataType": 0,
          "formattedValue": "482 \tV",
          "name": "VacCA",
          "unit": 2,
          "value": 481.90000000000003
        },
        {
          "dataType": 0,
          "formattedValue": "1.5 \tA",
          "name": "IacA",
          "unit": 4,
          "value": 1.5
        },
        {
          "dataType": 0,
          "formattedValue": "1.3 \tA",
          "name": "IacB",
          "unit": 4,
          "value": 1.3
        },
        {
          "dataType": 0,
          "formattedValue": "1.5 \tA",
          "name": "IacC",
          "unit": 4,
          "value": 1.5
        },
        {
          "dataType": 0,
          "formattedValue": "694 \tV",
          "name": "Vdc1",
          "unit": 2,
          "value": 693.8000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "0.8 \tA",
          "name": "Idc1",
          "unit": 4,
          "value": 0.8
        },
        {
          "dataType": 0,
          "formattedValue": "689 \tV",
          "name": "Vdc2",
          "unit": 2,
          "value": 688.6
        },
        {
          "dataType": 0,
          "formattedValue": "0 \tV",
          "name": "Vdc3",
          "unit": 2,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0.7 \tA",
          "name": "Idc2",
          "unit": 4,
          "value": 0.7000000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "0 \tA",
          "name": "Idc3",
          "unit": 4,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "1.5 \tA",
          "name": "Idc",
          "unit": 4,
          "value": 1.5
        },
        {
          "dataType": 0,
          "formattedValue": "461 \tV",
          "name": "Vdc",
          "unit": 2,
          "value": 460.8
        },
        {
          "dataType": 0,
          "formattedValue": "0.828 \tA",
          "name": "Iac",
          "unit": 4,
          "value": 0.827535771677107
        },
        {
          "dataType": 0,
          "formattedValue": "279 \tV",
          "name": "Vac",
          "unit": 2,
          "value": 279.2644554141047
        },
        {
          "dataType": 0,
          "formattedValue": "67.5 \t\u00b0F",
          "name": "DeviceTemp",
          "unit": 30,
          "value": 19.700000000000003
        },
        {
          "dataType": 0,
          "formattedValue": "50.5 \t\u00b0F",
          "name": "InternalTemp",
          "unit": 30,
          "value": 10.3
        },
        {
          "dataType": 0,
          "formattedValue": "31.8 \t\u00b0F",
          "name": "Temp_XMFR",
          "unit": 30,
          "value": -0.1
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Warning",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault0",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault1",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault2",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault3",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault4",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "43,690 \t ",
          "name": "OnOff",
          "unit": 0,
          "value": 43690
        },
        {
          "dataType": 0,
          "formattedValue": "100 \t%",
          "name": "LimitKW",
          "unit": 56,
          "value": 100
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rapm",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rrpm",
          "unit": 0,
          "value": 0
        }
      ],
      "defaultChart": 2,
      "description": "INV-31 CP9 - (36kW)",
      "deviceImage": {
        "contentType": "",
        "key": "",
        "lastChanged": null,
        "name": "PV_V1844",
        "uri": "https://www.alsoenergy.com/pub/Images/Device/1844.png"
      },
      "functionCode": 1,
      "hardwareStatus": 1,
      "installDate": "2016-07-30",
      "inverterKw": 36,
      "key": "H70657",
      "lastAttempt": "2025-12-19T19:59:23Z",
      "lastChanged": "2025-12-12T23:31:54Z",
      "lastData": "1.2 kW",
      "lastSuccess": "2025-12-19T19:57:54Z",
      "name": "INV-31 CP9 - (36kW)",
      "outOfService": false,
      "primaryMetric": "1.2 kW",
      "primaryMetricName": 38,
      "serialNum": "1012791548096",
      "sortOrder": 41,
      "units": 10,
      "unitsScale": 1000
    },
    {
      "capacityKW": 28,
      "communicationResult": 0,
      "dataRegisters": [
        {
          "dataType": 0,
          "formattedValue": "800 \tW",
          "name": "KwAC",
          "unit": 10,
          "value": 0.8
        },
        {
          "dataType": 0,
          "formattedValue": "313 \tMWh",
          "name": "KwhAC",
          "unit": 11,
          "value": 313427
        },
        {
          "dataType": 0,
          "formattedValue": "484 \tV",
          "name": "VacAB",
          "unit": 2,
          "value": 484.40000000000003
        },
        {
          "dataType": 0,
          "formattedValue": "485 \tV",
          "name": "VacBC",
          "unit": 2,
          "value": 484.8
        },
        {
          "dataType": 0,
          "formattedValue": "482 \tV",
          "name": "VacCA",
          "unit": 2,
          "value": 482
        },
        {
          "dataType": 0,
          "formattedValue": "1 \tA",
          "name": "IacA",
          "unit": 4,
          "value": 1
        },
        {
          "dataType": 0,
          "formattedValue": "1.2 \tA",
          "name": "IacB",
          "unit": 4,
          "value": 1.2000000000000002
        },
        {
          "dataType": 0,
          "formattedValue": "1.3 \tA",
          "name": "IacC",
          "unit": 4,
          "value": 1.3
        },
        {
          "dataType": 0,
          "formattedValue": "702 \tV",
          "name": "Vdc1",
          "unit": 2,
          "value": 702.2
        },
        {
          "dataType": 0,
          "formattedValue": "0.4 \tA",
          "name": "Idc1",
          "unit": 4,
          "value": 0.4
        },
        {
          "dataType": 0,
          "formattedValue": "707 \tV",
          "name": "Vdc2",
          "unit": 2,
          "value": 707.2
        },
        {
          "dataType": 0,
          "formattedValue": " \tV",
          "name": "Vdc3",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "0.4 \tA",
          "name": "Idc2",
          "unit": 4,
          "value": 0.4
        },
        {
          "dataType": 0,
          "formattedValue": " \tA",
          "name": "Idc3",
          "unit": 4,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "0.8 \tA",
          "name": "Idc",
          "unit": 4,
          "value": 0.8
        },
        {
          "dataType": 0,
          "formattedValue": "705 \tV",
          "name": "Vdc",
          "unit": 2,
          "value": 704.7
        },
        {
          "dataType": 0,
          "formattedValue": "0.674 \tA",
          "name": "Iac",
          "unit": 4,
          "value": 0.6735756281092732
        },
        {
          "dataType": 0,
          "formattedValue": "280 \tV",
          "name": "Vac",
          "unit": 2,
          "value": 279.66860079097023
        },
        {
          "dataType": 0,
          "formattedValue": "64.4 \t\u00b0F",
          "name": "DeviceTemp",
          "unit": 30,
          "value": 18
        },
        {
          "dataType": 0,
          "formattedValue": "48.9 \t\u00b0F",
          "name": "InternalTemp",
          "unit": 30,
          "value": 9.4
        },
        {
          "dataType": 0,
          "formattedValue": "31.8 \t\u00b0F",
          "name": "Temp_XMFR",
          "unit": 30,
          "value": -0.1
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Warning",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault0",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault1",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault2",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault3",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault4",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "43,690 \t ",
          "name": "OnOff",
          "unit": 0,
          "value": 43690
        },
        {
          "dataType": 0,
          "formattedValue": "100 \t%",
          "name": "LimitKW",
          "unit": 56,
          "value": 100
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rapm",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rrpm",
          "unit": 0,
          "value": 0
        }
      ],
      "defaultChart": 2,
      "description": "INV-32 CP9 - (28kW)",
      "deviceImage": {
        "contentType": "",
        "key": "",
        "lastChanged": null,
        "name": "PV_V1844",
        "uri": "https://www.alsoenergy.com/pub/Images/Device/1844.png"
      },
      "functionCode": 1,
      "hardwareStatus": 1,
      "installDate": "2016-07-31",
      "inverterKw": 28,
      "key": "H70658",
      "lastAttempt": "2025-12-19T19:59:26Z",
      "lastChanged": "2025-12-12T23:31:59Z",
      "lastData": "800 W",
      "lastSuccess": "2025-12-19T19:57:55Z",
      "name": "INV-32 CP9 - (28kW)",
      "outOfService": false,
      "primaryMetric": "800 W",
      "primaryMetricName": 38,
      "serialNum": "1012981550227",
      "sortOrder": 42,
      "units": 8,
      "unitsScale": 1
    },
    {
      "capacityKW": 28,
      "communicationResult": 0,
      "dataRegisters": [
        {
          "dataType": 0,
          "formattedValue": "800 \tW",
          "name": "KwAC",
          "unit": 10,
          "value": 0.8
        },
        {
          "dataType": 0,
          "formattedValue": "316 \tMWh",
          "name": "KwhAC",
          "unit": 11,
          "value": 315785
        },
        {
          "dataType": 0,
          "formattedValue": "484 \tV",
          "name": "VacAB",
          "unit": 2,
          "value": 483.6
        },
        {
          "dataType": 0,
          "formattedValue": "484 \tV",
          "name": "VacBC",
          "unit": 2,
          "value": 484.40000000000003
        },
        {
          "dataType": 0,
          "formattedValue": "483 \tV",
          "name": "VacCA",
          "unit": 2,
          "value": 482.6
        },
        {
          "dataType": 0,
          "formattedValue": "1.1 \tA",
          "name": "IacA",
          "unit": 4,
          "value": 1.1
        },
        {
          "dataType": 0,
          "formattedValue": "1 \tA",
          "name": "IacB",
          "unit": 4,
          "value": 1
        },
        {
          "dataType": 0,
          "formattedValue": "1.2 \tA",
          "name": "IacC",
          "unit": 4,
          "value": 1.2000000000000002
        },
        {
          "dataType": 0,
          "formattedValue": "708 \tV",
          "name": "Vdc1",
          "unit": 2,
          "value": 707.9000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "0.4 \tA",
          "name": "Idc1",
          "unit": 4,
          "value": 0.4
        },
        {
          "dataType": 0,
          "formattedValue": "708 \tV",
          "name": "Vdc2",
          "unit": 2,
          "value": 707.6
        },
        {
          "dataType": 0,
          "formattedValue": " \tV",
          "name": "Vdc3",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "0.4 \tA",
          "name": "Idc2",
          "unit": 4,
          "value": 0.4
        },
        {
          "dataType": 0,
          "formattedValue": " \tA",
          "name": "Idc3",
          "unit": 4,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "0.8 \tA",
          "name": "Idc",
          "unit": 4,
          "value": 0.8
        },
        {
          "dataType": 0,
          "formattedValue": "708 \tV",
          "name": "Vdc",
          "unit": 2,
          "value": 707.75
        },
        {
          "dataType": 0,
          "formattedValue": "0.635 \tA",
          "name": "Iac",
          "unit": 4,
          "value": 0.6350855922173148
        },
        {
          "dataType": 0,
          "formattedValue": "279 \tV",
          "name": "Vac",
          "unit": 2,
          "value": 279.20672036026673
        },
        {
          "dataType": 0,
          "formattedValue": "63.7 \t\u00b0F",
          "name": "DeviceTemp",
          "unit": 30,
          "value": 17.6
        },
        {
          "dataType": 0,
          "formattedValue": "47.8 \t\u00b0F",
          "name": "InternalTemp",
          "unit": 30,
          "value": 8.8
        },
        {
          "dataType": 0,
          "formattedValue": "31.8 \t\u00b0F",
          "name": "Temp_XMFR",
          "unit": 30,
          "value": -0.1
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Warning",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault0",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault1",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault2",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault3",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault4",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "43,690 \t ",
          "name": "OnOff",
          "unit": 0,
          "value": 43690
        },
        {
          "dataType": 0,
          "formattedValue": "100 \t%",
          "name": "LimitKW",
          "unit": 56,
          "value": 100
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rapm",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rrpm",
          "unit": 0,
          "value": 0
        }
      ],
      "defaultChart": 2,
      "description": "INV-33 CP9 - (28kW)",
      "deviceImage": {
        "contentType": "",
        "key": "",
        "lastChanged": null,
        "name": "PV_V1844",
        "uri": "https://www.alsoenergy.com/pub/Images/Device/1844.png"
      },
      "functionCode": 1,
      "hardwareStatus": 1,
      "installDate": "2016-07-31",
      "inverterKw": 28,
      "key": "H70659",
      "lastAttempt": "2025-12-19T19:59:29Z",
      "lastChanged": "2025-12-12T23:32:04Z",
      "lastData": "800 W",
      "lastSuccess": "2025-12-19T19:57:56Z",
      "name": "INV-33 CP9 - (28kW)",
      "outOfService": false,
      "primaryMetric": "800 W",
      "primaryMetricName": 38,
      "serialNum": "1012981531042",
      "sortOrder": 43,
      "units": 8,
      "unitsScale": 1
    },
    {
      "capacityKW": 28,
      "communicationResult": 0,
      "dataRegisters": [
        {
          "dataType": 0,
          "formattedValue": "800 \tW",
          "name": "KwAC",
          "unit": 10,
          "value": 0.8
        },
        {
          "dataType": 0,
          "formattedValue": "319 \tMWh",
          "name": "KwhAC",
          "unit": 11,
          "value": 318514
        },
        {
          "dataType": 0,
          "formattedValue": "484 \tV",
          "name": "VacAB",
          "unit": 2,
          "value": 483.90000000000003
        },
        {
          "dataType": 0,
          "formattedValue": "485 \tV",
          "name": "VacBC",
          "unit": 2,
          "value": 485.3
        },
        {
          "dataType": 0,
          "formattedValue": "483 \tV",
          "name": "VacCA",
          "unit": 2,
          "value": 483.40000000000003
        },
        {
          "dataType": 0,
          "formattedValue": "1 \tA",
          "name": "IacA",
          "unit": 4,
          "value": 1
        },
        {
          "dataType": 0,
          "formattedValue": "1 \tA",
          "name": "IacB",
          "unit": 4,
          "value": 1
        },
        {
          "dataType": 0,
          "formattedValue": "1.1 \tA",
          "name": "IacC",
          "unit": 4,
          "value": 1.1
        },
        {
          "dataType": 0,
          "formattedValue": "685 \tV",
          "name": "Vdc1",
          "unit": 2,
          "value": 684.6
        },
        {
          "dataType": 0,
          "formattedValue": "0.4 \tA",
          "name": "Idc1",
          "unit": 4,
          "value": 0.4
        },
        {
          "dataType": 0,
          "formattedValue": "684 \tV",
          "name": "Vdc2",
          "unit": 2,
          "value": 684.5
        },
        {
          "dataType": 0,
          "formattedValue": " \tV",
          "name": "Vdc3",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "0.4 \tA",
          "name": "Idc2",
          "unit": 4,
          "value": 0.4
        },
        {
          "dataType": 0,
          "formattedValue": " \tA",
          "name": "Idc3",
          "unit": 4,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "0.8 \tA",
          "name": "Idc",
          "unit": 4,
          "value": 0.8
        },
        {
          "dataType": 0,
          "formattedValue": "685 \tV",
          "name": "Vdc",
          "unit": 2,
          "value": 684.5500000000001
        },
        {
          "dataType": 0,
          "formattedValue": "0.597 \tA",
          "name": "Iac",
          "unit": 4,
          "value": 0.5965955563253563
        },
        {
          "dataType": 0,
          "formattedValue": "279 \tV",
          "name": "Vac",
          "unit": 2,
          "value": 279.37992552178054
        },
        {
          "dataType": 0,
          "formattedValue": "63 \t\u00b0F",
          "name": "DeviceTemp",
          "unit": 30,
          "value": 17.2
        },
        {
          "dataType": 0,
          "formattedValue": "47.8 \t\u00b0F",
          "name": "InternalTemp",
          "unit": 30,
          "value": 8.8
        },
        {
          "dataType": 0,
          "formattedValue": "31.8 \t\u00b0F",
          "name": "Temp_XMFR",
          "unit": 30,
          "value": -0.1
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Warning",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault0",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault1",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault2",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault3",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault4",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "43,690 \t ",
          "name": "OnOff",
          "unit": 0,
          "value": 43690
        },
        {
          "dataType": 0,
          "formattedValue": "100 \t%",
          "name": "LimitKW",
          "unit": 56,
          "value": 100
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rapm",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rrpm",
          "unit": 0,
          "value": 0
        }
      ],
      "defaultChart": 2,
      "description": "INV-34 CP9 - (28kW)",
      "deviceImage": {
        "contentType": "",
        "key": "",
        "lastChanged": null,
        "name": "PV_V1844",
        "uri": "https://www.alsoenergy.com/pub/Images/Device/1844.png"
      },
      "functionCode": 1,
      "hardwareStatus": 1,
      "installDate": "2016-07-29",
      "inverterKw": 28,
      "key": "H70660",
      "lastAttempt": "2025-12-19T20:01:02Z",
      "lastChanged": "2025-12-12T23:32:09Z",
      "lastData": "800 W",
      "lastSuccess": "2025-12-19T20:00:01Z",
      "name": "INV-34 CP9 - (28kW)",
      "outOfService": false,
      "primaryMetric": "800 W",
      "primaryMetricName": 38,
      "serialNum": "1012981545263",
      "sortOrder": 44,
      "units": 8,
      "unitsScale": 1
    },
    {
      "capacityKW": 36,
      "communicationResult": 0,
      "dataRegisters": [
        {
          "dataType": 0,
          "formattedValue": "1.2 \tkW",
          "name": "KwAC",
          "unit": 10,
          "value": 1.2000000000000002
        },
        {
          "dataType": 0,
          "formattedValue": "434 \tMWh",
          "name": "KwhAC",
          "unit": 11,
          "value": 433863
        },
        {
          "dataType": 0,
          "formattedValue": "484 \tV",
          "name": "VacAB",
          "unit": 2,
          "value": 483.6
        },
        {
          "dataType": 0,
          "formattedValue": "484 \tV",
          "name": "VacBC",
          "unit": 2,
          "value": 483.6
        },
        {
          "dataType": 0,
          "formattedValue": "482 \tV",
          "name": "VacCA",
          "unit": 2,
          "value": 481.5
        },
        {
          "dataType": 0,
          "formattedValue": "1.5 \tA",
          "name": "IacA",
          "unit": 4,
          "value": 1.5
        },
        {
          "dataType": 0,
          "formattedValue": "1.3 \tA",
          "name": "IacB",
          "unit": 4,
          "value": 1.3
        },
        {
          "dataType": 0,
          "formattedValue": "1.5 \tA",
          "name": "IacC",
          "unit": 4,
          "value": 1.5
        },
        {
          "dataType": 0,
          "formattedValue": "690 \tV",
          "name": "Vdc1",
          "unit": 2,
          "value": 689.9000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "0.7 \tA",
          "name": "Idc1",
          "unit": 4,
          "value": 0.7000000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "688 \tV",
          "name": "Vdc2",
          "unit": 2,
          "value": 688.1
        },
        {
          "dataType": 0,
          "formattedValue": "0 \tV",
          "name": "Vdc3",
          "unit": 2,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0.7 \tA",
          "name": "Idc2",
          "unit": 4,
          "value": 0.7000000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "0 \tA",
          "name": "Idc3",
          "unit": 4,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "1.4 \tA",
          "name": "Idc",
          "unit": 4,
          "value": 1.4000000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "459 \tV",
          "name": "Vdc",
          "unit": 2,
          "value": 459.3333333333333
        },
        {
          "dataType": 0,
          "formattedValue": "0.828 \tA",
          "name": "Iac",
          "unit": 4,
          "value": 0.827535771677107
        },
        {
          "dataType": 0,
          "formattedValue": "279 \tV",
          "name": "Vac",
          "unit": 2,
          "value": 279.20672036026673
        },
        {
          "dataType": 0,
          "formattedValue": "63.5 \t\u00b0F",
          "name": "DeviceTemp",
          "unit": 30,
          "value": 17.5
        },
        {
          "dataType": 0,
          "formattedValue": "48.7 \t\u00b0F",
          "name": "InternalTemp",
          "unit": 30,
          "value": 9.3
        },
        {
          "dataType": 0,
          "formattedValue": "31.8 \t\u00b0F",
          "name": "Temp_XMFR",
          "unit": 30,
          "value": -0.1
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Warning",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault0",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault1",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault2",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault3",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault4",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "43,690 \t ",
          "name": "OnOff",
          "unit": 0,
          "value": 43690
        },
        {
          "dataType": 0,
          "formattedValue": "100 \t%",
          "name": "LimitKW",
          "unit": 56,
          "value": 100
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rapm",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rrpm",
          "unit": 0,
          "value": 0
        }
      ],
      "defaultChart": 2,
      "description": "INV-35 CP10 - (36kW)",
      "deviceImage": {
        "contentType": "",
        "key": "",
        "lastChanged": null,
        "name": "PV_V1844",
        "uri": "https://www.alsoenergy.com/pub/Images/Device/1844.png"
      },
      "functionCode": 1,
      "hardwareStatus": 1,
      "installDate": "2016-08-01",
      "inverterKw": 36,
      "key": "H70661",
      "lastAttempt": "2025-12-19T20:01:06Z",
      "lastChanged": "2025-12-12T23:32:15Z",
      "lastData": "1.2 kW",
      "lastSuccess": "2025-12-19T20:00:02Z",
      "name": "INV-35 CP10 - (36kW)",
      "outOfService": false,
      "primaryMetric": "1.2 kW",
      "primaryMetricName": 38,
      "serialNum": "1012791548097",
      "sortOrder": 45,
      "units": 10,
      "unitsScale": 1000
    },
    {
      "capacityKW": 28,
      "communicationResult": 0,
      "dataRegisters": [
        {
          "dataType": 0,
          "formattedValue": "900 \tW",
          "name": "KwAC",
          "unit": 10,
          "value": 0.9
        },
        {
          "dataType": 0,
          "formattedValue": "324 \tMWh",
          "name": "KwhAC",
          "unit": 11,
          "value": 323574
        },
        {
          "dataType": 0,
          "formattedValue": "489 \tV",
          "name": "VacAB",
          "unit": 2,
          "value": 489.40000000000003
        },
        {
          "dataType": 0,
          "formattedValue": "489 \tV",
          "name": "VacBC",
          "unit": 2,
          "value": 488.8
        },
        {
          "dataType": 0,
          "formattedValue": "487 \tV",
          "name": "VacCA",
          "unit": 2,
          "value": 487.20000000000005
        },
        {
          "dataType": 0,
          "formattedValue": "1.3 \tA",
          "name": "IacA",
          "unit": 4,
          "value": 1.3
        },
        {
          "dataType": 0,
          "formattedValue": "1 \tA",
          "name": "IacB",
          "unit": 4,
          "value": 1
        },
        {
          "dataType": 0,
          "formattedValue": "1.2 \tA",
          "name": "IacC",
          "unit": 4,
          "value": 1.2000000000000002
        },
        {
          "dataType": 0,
          "formattedValue": "700 \tV",
          "name": "Vdc1",
          "unit": 2,
          "value": 699.5
        },
        {
          "dataType": 0,
          "formattedValue": "0.5 \tA",
          "name": "Idc1",
          "unit": 4,
          "value": 0.5
        },
        {
          "dataType": 0,
          "formattedValue": "706 \tV",
          "name": "Vdc2",
          "unit": 2,
          "value": 706.1
        },
        {
          "dataType": 0,
          "formattedValue": " \tV",
          "name": "Vdc3",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "0.5 \tA",
          "name": "Idc2",
          "unit": 4,
          "value": 0.5
        },
        {
          "dataType": 0,
          "formattedValue": " \tA",
          "name": "Idc3",
          "unit": 4,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "1 \tA",
          "name": "Idc",
          "unit": 4,
          "value": 1
        },
        {
          "dataType": 0,
          "formattedValue": "703 \tV",
          "name": "Vdc",
          "unit": 2,
          "value": 702.8000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "0.674 \tA",
          "name": "Iac",
          "unit": 4,
          "value": 0.6735756281092732
        },
        {
          "dataType": 0,
          "formattedValue": "283 \tV",
          "name": "Vac",
          "unit": 2,
          "value": 282.55535348286713
        },
        {
          "dataType": 0,
          "formattedValue": "67.1 \t\u00b0F",
          "name": "DeviceTemp",
          "unit": 30,
          "value": 19.5
        },
        {
          "dataType": 0,
          "formattedValue": "49.3 \t\u00b0F",
          "name": "InternalTemp",
          "unit": 30,
          "value": 9.600000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "31.8 \t\u00b0F",
          "name": "Temp_XMFR",
          "unit": 30,
          "value": -0.1
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Warning",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault0",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault1",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault2",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault3",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault4",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "43,690 \t ",
          "name": "OnOff",
          "unit": 0,
          "value": 43690
        },
        {
          "dataType": 0,
          "formattedValue": "100 \t%",
          "name": "LimitKW",
          "unit": 56,
          "value": 100
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rapm",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rrpm",
          "unit": 0,
          "value": 0
        }
      ],
      "defaultChart": 2,
      "description": "INV-36 CP10 - (28kW)",
      "deviceImage": {
        "contentType": "",
        "key": "",
        "lastChanged": null,
        "name": "PV_V1844",
        "uri": "https://www.alsoenergy.com/pub/Images/Device/1844.png"
      },
      "functionCode": 1,
      "hardwareStatus": 1,
      "installDate": "2016-07-31",
      "inverterKw": 28,
      "key": "H70662",
      "lastAttempt": "2025-12-19T19:59:05Z",
      "lastChanged": "2025-12-12T23:32:20Z",
      "lastData": "900 W",
      "lastSuccess": "2025-12-19T19:58:23Z",
      "name": "INV-36 CP10 - (28kW)",
      "outOfService": false,
      "primaryMetric": "900 W",
      "primaryMetricName": 38,
      "serialNum": "1012981549014",
      "sortOrder": 46,
      "units": 8,
      "unitsScale": 1
    },
    {
      "capacityKW": 28,
      "communicationResult": 0,
      "dataRegisters": [
        {
          "dataType": 0,
          "formattedValue": "900 \tW",
          "name": "KwAC",
          "unit": 10,
          "value": 0.9
        },
        {
          "dataType": 0,
          "formattedValue": "329 \tMWh",
          "name": "KwhAC",
          "unit": 11,
          "value": 329077
        },
        {
          "dataType": 0,
          "formattedValue": "484 \tV",
          "name": "VacAB",
          "unit": 2,
          "value": 483.90000000000003
        },
        {
          "dataType": 0,
          "formattedValue": "484 \tV",
          "name": "VacBC",
          "unit": 2,
          "value": 484.20000000000005
        },
        {
          "dataType": 0,
          "formattedValue": "482 \tV",
          "name": "VacCA",
          "unit": 2,
          "value": 482.40000000000003
        },
        {
          "dataType": 0,
          "formattedValue": "1.3 \tA",
          "name": "IacA",
          "unit": 4,
          "value": 1.3
        },
        {
          "dataType": 0,
          "formattedValue": "1.3 \tA",
          "name": "IacB",
          "unit": 4,
          "value": 1.3
        },
        {
          "dataType": 0,
          "formattedValue": "1.3 \tA",
          "name": "IacC",
          "unit": 4,
          "value": 1.3
        },
        {
          "dataType": 0,
          "formattedValue": "696 \tV",
          "name": "Vdc1",
          "unit": 2,
          "value": 696.3000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "0.5 \tA",
          "name": "Idc1",
          "unit": 4,
          "value": 0.5
        },
        {
          "dataType": 0,
          "formattedValue": "697 \tV",
          "name": "Vdc2",
          "unit": 2,
          "value": 696.9000000000001
        },
        {
          "dataType": 0,
          "formattedValue": " \tV",
          "name": "Vdc3",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "0.6 \tA",
          "name": "Idc2",
          "unit": 4,
          "value": 0.6000000000000001
        },
        {
          "dataType": 0,
          "formattedValue": " \tA",
          "name": "Idc3",
          "unit": 4,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "1.1 \tA",
          "name": "Idc",
          "unit": 4,
          "value": 1.1
        },
        {
          "dataType": 0,
          "formattedValue": "697 \tV",
          "name": "Vdc",
          "unit": 2,
          "value": 696.6
        },
        {
          "dataType": 0,
          "formattedValue": "0.751 \tA",
          "name": "Iac",
          "unit": 4,
          "value": 0.7505556998931902
        },
        {
          "dataType": 0,
          "formattedValue": "279 \tV",
          "name": "Vac",
          "unit": 2,
          "value": 279.37992552178054
        },
        {
          "dataType": 0,
          "formattedValue": "62.8 \t\u00b0F",
          "name": "DeviceTemp",
          "unit": 30,
          "value": 17.1
        },
        {
          "dataType": 0,
          "formattedValue": "47.7 \t\u00b0F",
          "name": "InternalTemp",
          "unit": 30,
          "value": 8.700000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "31.8 \t\u00b0F",
          "name": "Temp_XMFR",
          "unit": 30,
          "value": -0.1
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Warning",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault0",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault1",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault2",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault3",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault4",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "43,690 \t ",
          "name": "OnOff",
          "unit": 0,
          "value": 43690
        },
        {
          "dataType": 0,
          "formattedValue": "100 \t%",
          "name": "LimitKW",
          "unit": 56,
          "value": 100
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rapm",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rrpm",
          "unit": 0,
          "value": 0
        }
      ],
      "defaultChart": 2,
      "description": "INV-37 CP10 - (28kW)",
      "deviceImage": {
        "contentType": "",
        "key": "",
        "lastChanged": null,
        "name": "PV_V1844",
        "uri": "https://www.alsoenergy.com/pub/Images/Device/1844.png"
      },
      "functionCode": 1,
      "hardwareStatus": 1,
      "installDate": "2016-07-31",
      "inverterKw": 28,
      "key": "H70663",
      "lastAttempt": "2025-12-19T19:59:07Z",
      "lastChanged": "2025-12-12T23:32:25Z",
      "lastData": "900 W",
      "lastSuccess": "2025-12-19T19:58:24Z",
      "name": "INV-37 CP10 - (28kW)",
      "outOfService": false,
      "primaryMetric": "900 W",
      "primaryMetricName": 38,
      "serialNum": "1012981545075",
      "sortOrder": 47,
      "units": 8,
      "unitsScale": 1
    },
    {
      "capacityKW": 28,
      "communicationResult": 0,
      "dataRegisters": [
        {
          "dataType": 0,
          "formattedValue": "1 \tkW",
          "name": "KwAC",
          "unit": 10,
          "value": 1
        },
        {
          "dataType": 0,
          "formattedValue": "331 \tMWh",
          "name": "KwhAC",
          "unit": 11,
          "value": 330571
        },
        {
          "dataType": 0,
          "formattedValue": "484 \tV",
          "name": "VacAB",
          "unit": 2,
          "value": 483.90000000000003
        },
        {
          "dataType": 0,
          "formattedValue": "485 \tV",
          "name": "VacBC",
          "unit": 2,
          "value": 485
        },
        {
          "dataType": 0,
          "formattedValue": "483 \tV",
          "name": "VacCA",
          "unit": 2,
          "value": 482.70000000000005
        },
        {
          "dataType": 0,
          "formattedValue": "1.3 \tA",
          "name": "IacA",
          "unit": 4,
          "value": 1.3
        },
        {
          "dataType": 0,
          "formattedValue": "1.3 \tA",
          "name": "IacB",
          "unit": 4,
          "value": 1.3
        },
        {
          "dataType": 0,
          "formattedValue": "1.4 \tA",
          "name": "IacC",
          "unit": 4,
          "value": 1.4000000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "689 \tV",
          "name": "Vdc1",
          "unit": 2,
          "value": 688.7
        },
        {
          "dataType": 0,
          "formattedValue": "0.5 \tA",
          "name": "Idc1",
          "unit": 4,
          "value": 0.5
        },
        {
          "dataType": 0,
          "formattedValue": "687 \tV",
          "name": "Vdc2",
          "unit": 2,
          "value": 686.6
        },
        {
          "dataType": 0,
          "formattedValue": " \tV",
          "name": "Vdc3",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "0.5 \tA",
          "name": "Idc2",
          "unit": 4,
          "value": 0.5
        },
        {
          "dataType": 0,
          "formattedValue": " \tA",
          "name": "Idc3",
          "unit": 4,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "1 \tA",
          "name": "Idc",
          "unit": 4,
          "value": 1
        },
        {
          "dataType": 0,
          "formattedValue": "688 \tV",
          "name": "Vdc",
          "unit": 2,
          "value": 687.6500000000001
        },
        {
          "dataType": 0,
          "formattedValue": "0.77 \tA",
          "name": "Iac",
          "unit": 4,
          "value": 0.7698007178391693
        },
        {
          "dataType": 0,
          "formattedValue": "279 \tV",
          "name": "Vac",
          "unit": 2,
          "value": 279.37992552178054
        },
        {
          "dataType": 0,
          "formattedValue": "62.6 \t\u00b0F",
          "name": "DeviceTemp",
          "unit": 30,
          "value": 17
        },
        {
          "dataType": 0,
          "formattedValue": "48 \t\u00b0F",
          "name": "InternalTemp",
          "unit": 30,
          "value": 8.9
        },
        {
          "dataType": 0,
          "formattedValue": "31.8 \t\u00b0F",
          "name": "Temp_XMFR",
          "unit": 30,
          "value": -0.1
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Warning",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault0",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault1",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault2",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault3",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault4",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "43,690 \t ",
          "name": "OnOff",
          "unit": 0,
          "value": 43690
        },
        {
          "dataType": 0,
          "formattedValue": "100 \t%",
          "name": "LimitKW",
          "unit": 56,
          "value": 100
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rapm",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rrpm",
          "unit": 0,
          "value": 0
        }
      ],
      "defaultChart": 2,
      "description": "INV-38 CP10 - (28kW)",
      "deviceImage": {
        "contentType": "",
        "key": "",
        "lastChanged": null,
        "name": "PV_V1844",
        "uri": "https://www.alsoenergy.com/pub/Images/Device/1844.png"
      },
      "functionCode": 1,
      "hardwareStatus": 1,
      "installDate": "2016-07-30",
      "inverterKw": 28,
      "key": "H70664",
      "lastAttempt": "2025-12-19T19:59:11Z",
      "lastChanged": "2025-12-12T23:32:29Z",
      "lastData": "1 kW",
      "lastSuccess": "2025-12-19T19:58:25Z",
      "name": "INV-38 CP10 - (28kW)",
      "outOfService": false,
      "primaryMetric": "1 kW",
      "primaryMetricName": 38,
      "serialNum": "1012981552044",
      "sortOrder": 48,
      "units": 10,
      "unitsScale": 1000
    },
    {
      "capacityKW": 36,
      "communicationResult": 0,
      "dataRegisters": [
        {
          "dataType": 0,
          "formattedValue": "1.2 \tkW",
          "name": "KwAC",
          "unit": 10,
          "value": 1.2000000000000002
        },
        {
          "dataType": 0,
          "formattedValue": "424 \tMWh",
          "name": "KwhAC",
          "unit": 11,
          "value": 423747
        },
        {
          "dataType": 0,
          "formattedValue": "484 \tV",
          "name": "VacAB",
          "unit": 2,
          "value": 484
        },
        {
          "dataType": 0,
          "formattedValue": "484 \tV",
          "name": "VacBC",
          "unit": 2,
          "value": 484.1
        },
        {
          "dataType": 0,
          "formattedValue": "482 \tV",
          "name": "VacCA",
          "unit": 2,
          "value": 481.90000000000003
        },
        {
          "dataType": 0,
          "formattedValue": "1.5 \tA",
          "name": "IacA",
          "unit": 4,
          "value": 1.5
        },
        {
          "dataType": 0,
          "formattedValue": "1.3 \tA",
          "name": "IacB",
          "unit": 4,
          "value": 1.3
        },
        {
          "dataType": 0,
          "formattedValue": "1.5 \tA",
          "name": "IacC",
          "unit": 4,
          "value": 1.5
        },
        {
          "dataType": 0,
          "formattedValue": "727 \tV",
          "name": "Vdc1",
          "unit": 2,
          "value": 727.4000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "0.6 \tA",
          "name": "Idc1",
          "unit": 4,
          "value": 0.6000000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "704 \tV",
          "name": "Vdc2",
          "unit": 2,
          "value": 704.4000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "0 \tV",
          "name": "Vdc3",
          "unit": 2,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0.6 \tA",
          "name": "Idc2",
          "unit": 4,
          "value": 0.6000000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "0 \tA",
          "name": "Idc3",
          "unit": 4,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "1.2 \tA",
          "name": "Idc",
          "unit": 4,
          "value": 1.2000000000000002
        },
        {
          "dataType": 0,
          "formattedValue": "477 \tV",
          "name": "Vdc",
          "unit": 2,
          "value": 477.2666666666667
        },
        {
          "dataType": 0,
          "formattedValue": "0.828 \tA",
          "name": "Iac",
          "unit": 4,
          "value": 0.827535771677107
        },
        {
          "dataType": 0,
          "formattedValue": "279 \tV",
          "name": "Vac",
          "unit": 2,
          "value": 279.43766057561845
        },
        {
          "dataType": 0,
          "formattedValue": "64.2 \t\u00b0F",
          "name": "DeviceTemp",
          "unit": 30,
          "value": 17.900000000000002
        },
        {
          "dataType": 0,
          "formattedValue": "48.7 \t\u00b0F",
          "name": "InternalTemp",
          "unit": 30,
          "value": 9.3
        },
        {
          "dataType": 0,
          "formattedValue": "31.8 \t\u00b0F",
          "name": "Temp_XMFR",
          "unit": 30,
          "value": -0.1
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Warning",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault0",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault1",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault2",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault3",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault4",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "43,690 \t ",
          "name": "OnOff",
          "unit": 0,
          "value": 43690
        },
        {
          "dataType": 0,
          "formattedValue": "100 \t%",
          "name": "LimitKW",
          "unit": 56,
          "value": 100
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rapm",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rrpm",
          "unit": 0,
          "value": 0
        }
      ],
      "defaultChart": 2,
      "description": "INV-39 CP11 - (36kW)",
      "deviceImage": {
        "contentType": "",
        "key": "",
        "lastChanged": null,
        "name": "PV_V1844",
        "uri": "https://www.alsoenergy.com/pub/Images/Device/1844.png"
      },
      "functionCode": 1,
      "hardwareStatus": 1,
      "installDate": "2016-07-29",
      "inverterKw": 36,
      "key": "H70665",
      "lastAttempt": "2025-12-19T19:59:16Z",
      "lastChanged": "2025-12-12T23:32:34Z",
      "lastData": "1.2 kW",
      "lastSuccess": "2025-12-19T19:58:26Z",
      "name": "INV-39 CP11 - (36kW)",
      "outOfService": false,
      "primaryMetric": "1.2 kW",
      "primaryMetricName": 38,
      "serialNum": "1012791548046",
      "sortOrder": 49,
      "units": 10,
      "unitsScale": 1000
    },
    {
      "capacityKW": 28,
      "communicationResult": 0,
      "dataRegisters": [
        {
          "dataType": 0,
          "formattedValue": "900 \tW",
          "name": "KwAC",
          "unit": 10,
          "value": 0.9
        },
        {
          "dataType": 0,
          "formattedValue": "299 \tMWh",
          "name": "KwhAC",
          "unit": 11,
          "value": 298633
        },
        {
          "dataType": 0,
          "formattedValue": "482 \tV",
          "name": "VacAB",
          "unit": 2,
          "value": 482.20000000000005
        },
        {
          "dataType": 0,
          "formattedValue": "482 \tV",
          "name": "VacBC",
          "unit": 2,
          "value": 482.5
        },
        {
          "dataType": 0,
          "formattedValue": "481 \tV",
          "name": "VacCA",
          "unit": 2,
          "value": 481.1
        },
        {
          "dataType": 0,
          "formattedValue": "1.3 \tA",
          "name": "IacA",
          "unit": 4,
          "value": 1.3
        },
        {
          "dataType": 0,
          "formattedValue": "1.3 \tA",
          "name": "IacB",
          "unit": 4,
          "value": 1.3
        },
        {
          "dataType": 0,
          "formattedValue": "1.3 \tA",
          "name": "IacC",
          "unit": 4,
          "value": 1.3
        },
        {
          "dataType": 0,
          "formattedValue": "697 \tV",
          "name": "Vdc1",
          "unit": 2,
          "value": 696.7
        },
        {
          "dataType": 0,
          "formattedValue": "0.5 \tA",
          "name": "Idc1",
          "unit": 4,
          "value": 0.5
        },
        {
          "dataType": 0,
          "formattedValue": "693 \tV",
          "name": "Vdc2",
          "unit": 2,
          "value": 693.1
        },
        {
          "dataType": 0,
          "formattedValue": " \tV",
          "name": "Vdc3",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "0.6 \tA",
          "name": "Idc2",
          "unit": 4,
          "value": 0.6000000000000001
        },
        {
          "dataType": 0,
          "formattedValue": " \tA",
          "name": "Idc3",
          "unit": 4,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "1.1 \tA",
          "name": "Idc",
          "unit": 4,
          "value": 1.1
        },
        {
          "dataType": 0,
          "formattedValue": "695 \tV",
          "name": "Vdc",
          "unit": 2,
          "value": 694.9000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "0.751 \tA",
          "name": "Iac",
          "unit": 4,
          "value": 0.7505556998931902
        },
        {
          "dataType": 0,
          "formattedValue": "278 \tV",
          "name": "Vac",
          "unit": 2,
          "value": 278.3984296065356
        },
        {
          "dataType": 0,
          "formattedValue": "64.4 \t\u00b0F",
          "name": "DeviceTemp",
          "unit": 30,
          "value": 18
        },
        {
          "dataType": 0,
          "formattedValue": "48.2 \t\u00b0F",
          "name": "InternalTemp",
          "unit": 30,
          "value": 9
        },
        {
          "dataType": 0,
          "formattedValue": "31.8 \t\u00b0F",
          "name": "Temp_XMFR",
          "unit": 30,
          "value": -0.1
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Warning",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault0",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault1",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault2",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault3",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault4",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "43,690 \t ",
          "name": "OnOff",
          "unit": 0,
          "value": 43690
        },
        {
          "dataType": 0,
          "formattedValue": "100 \t%",
          "name": "LimitKW",
          "unit": 56,
          "value": 100
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rapm",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rrpm",
          "unit": 0,
          "value": 0
        }
      ],
      "defaultChart": 2,
      "description": "INV-40 CP11 - (28kW)",
      "deviceImage": {
        "contentType": "",
        "key": "",
        "lastChanged": null,
        "name": "PV_V1844",
        "uri": "https://www.alsoenergy.com/pub/Images/Device/1844.png"
      },
      "functionCode": 1,
      "hardwareStatus": 1,
      "installDate": "2016-07-27",
      "inverterKw": 28,
      "key": "H70666",
      "lastAttempt": "2025-12-19T19:59:19Z",
      "lastChanged": "2025-12-12T23:32:39Z",
      "lastData": "900 W",
      "lastSuccess": "2025-12-19T19:58:27Z",
      "name": "INV-40 CP11 - (28kW)",
      "outOfService": false,
      "primaryMetric": "900 W",
      "primaryMetricName": 38,
      "serialNum": "1012981552089",
      "sortOrder": 50,
      "units": 8,
      "unitsScale": 1
    },
    {
      "capacityKW": 28,
      "communicationResult": 0,
      "dataRegisters": [
        {
          "dataType": 0,
          "formattedValue": "900 \tW",
          "name": "KwAC",
          "unit": 10,
          "value": 0.9
        },
        {
          "dataType": 0,
          "formattedValue": "308 \tMWh",
          "name": "KwhAC",
          "unit": 11,
          "value": 308491
        },
        {
          "dataType": 0,
          "formattedValue": "482 \tV",
          "name": "VacAB",
          "unit": 2,
          "value": 481.5
        },
        {
          "dataType": 0,
          "formattedValue": "481 \tV",
          "name": "VacBC",
          "unit": 2,
          "value": 480.8
        },
        {
          "dataType": 0,
          "formattedValue": "480 \tV",
          "name": "VacCA",
          "unit": 2,
          "value": 479.6
        },
        {
          "dataType": 0,
          "formattedValue": "1.3 \tA",
          "name": "IacA",
          "unit": 4,
          "value": 1.3
        },
        {
          "dataType": 0,
          "formattedValue": "1.3 \tA",
          "name": "IacB",
          "unit": 4,
          "value": 1.3
        },
        {
          "dataType": 0,
          "formattedValue": "1.3 \tA",
          "name": "IacC",
          "unit": 4,
          "value": 1.3
        },
        {
          "dataType": 0,
          "formattedValue": "705 \tV",
          "name": "Vdc1",
          "unit": 2,
          "value": 704.9000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "0.4 \tA",
          "name": "Idc1",
          "unit": 4,
          "value": 0.4
        },
        {
          "dataType": 0,
          "formattedValue": "704 \tV",
          "name": "Vdc2",
          "unit": 2,
          "value": 704.2
        },
        {
          "dataType": 0,
          "formattedValue": " \tV",
          "name": "Vdc3",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "0.4 \tA",
          "name": "Idc2",
          "unit": 4,
          "value": 0.4
        },
        {
          "dataType": 0,
          "formattedValue": " \tA",
          "name": "Idc3",
          "unit": 4,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "0.8 \tA",
          "name": "Idc",
          "unit": 4,
          "value": 0.8
        },
        {
          "dataType": 0,
          "formattedValue": "705 \tV",
          "name": "Vdc",
          "unit": 2,
          "value": 704.5500000000001
        },
        {
          "dataType": 0,
          "formattedValue": "0.751 \tA",
          "name": "Iac",
          "unit": 4,
          "value": 0.7505556998931902
        },
        {
          "dataType": 0,
          "formattedValue": "278 \tV",
          "name": "Vac",
          "unit": 2,
          "value": 277.99428422967003
        },
        {
          "dataType": 0,
          "formattedValue": "66.4 \t\u00b0F",
          "name": "DeviceTemp",
          "unit": 30,
          "value": 19.1
        },
        {
          "dataType": 0,
          "formattedValue": "48.2 \t\u00b0F",
          "name": "InternalTemp",
          "unit": 30,
          "value": 9
        },
        {
          "dataType": 0,
          "formattedValue": "31.8 \t\u00b0F",
          "name": "Temp_XMFR",
          "unit": 30,
          "value": -0.1
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Warning",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault0",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault1",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault2",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault3",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault4",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "43,690 \t ",
          "name": "OnOff",
          "unit": 0,
          "value": 43690
        },
        {
          "dataType": 0,
          "formattedValue": "100 \t%",
          "name": "LimitKW",
          "unit": 56,
          "value": 100
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rapm",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rrpm",
          "unit": 0,
          "value": 0
        }
      ],
      "defaultChart": 2,
      "description": "INV-41 CP11 - (28kW)",
      "deviceImage": {
        "contentType": "",
        "key": "",
        "lastChanged": null,
        "name": "PV_V1844",
        "uri": "https://www.alsoenergy.com/pub/Images/Device/1844.png"
      },
      "functionCode": 1,
      "hardwareStatus": 1,
      "installDate": "2016-07-26",
      "inverterKw": 28,
      "key": "H70667",
      "lastAttempt": "2025-12-19T19:59:20Z",
      "lastChanged": "2025-12-12T23:32:44Z",
      "lastData": "900 W",
      "lastSuccess": "2025-12-19T19:58:28Z",
      "name": "INV-41 CP11 - (28kW)",
      "outOfService": false,
      "primaryMetric": "900 W",
      "primaryMetricName": 38,
      "serialNum": "1012981550020",
      "sortOrder": 51,
      "units": 8,
      "unitsScale": 1
    },
    {
      "capacityKW": 28,
      "communicationResult": 0,
      "dataRegisters": [
        {
          "dataType": 0,
          "formattedValue": "900 \tW",
          "name": "KwAC",
          "unit": 10,
          "value": 0.9
        },
        {
          "dataType": 0,
          "formattedValue": "326 \tMWh",
          "name": "KwhAC",
          "unit": 11,
          "value": 325975
        },
        {
          "dataType": 0,
          "formattedValue": "484 \tV",
          "name": "VacAB",
          "unit": 2,
          "value": 484.3
        },
        {
          "dataType": 0,
          "formattedValue": "485 \tV",
          "name": "VacBC",
          "unit": 2,
          "value": 485.40000000000003
        },
        {
          "dataType": 0,
          "formattedValue": "483 \tV",
          "name": "VacCA",
          "unit": 2,
          "value": 482.90000000000003
        },
        {
          "dataType": 0,
          "formattedValue": "1.2 \tA",
          "name": "IacA",
          "unit": 4,
          "value": 1.2000000000000002
        },
        {
          "dataType": 0,
          "formattedValue": "1.3 \tA",
          "name": "IacB",
          "unit": 4,
          "value": 1.3
        },
        {
          "dataType": 0,
          "formattedValue": "1.3 \tA",
          "name": "IacC",
          "unit": 4,
          "value": 1.3
        },
        {
          "dataType": 0,
          "formattedValue": "702 \tV",
          "name": "Vdc1",
          "unit": 2,
          "value": 702.5
        },
        {
          "dataType": 0,
          "formattedValue": "0.5 \tA",
          "name": "Idc1",
          "unit": 4,
          "value": 0.5
        },
        {
          "dataType": 0,
          "formattedValue": "713 \tV",
          "name": "Vdc2",
          "unit": 2,
          "value": 713
        },
        {
          "dataType": 0,
          "formattedValue": " \tV",
          "name": "Vdc3",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "0.6 \tA",
          "name": "Idc2",
          "unit": 4,
          "value": 0.6000000000000001
        },
        {
          "dataType": 0,
          "formattedValue": " \tA",
          "name": "Idc3",
          "unit": 4,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "1.1 \tA",
          "name": "Idc",
          "unit": 4,
          "value": 1.1
        },
        {
          "dataType": 0,
          "formattedValue": "708 \tV",
          "name": "Vdc",
          "unit": 2,
          "value": 707.75
        },
        {
          "dataType": 0,
          "formattedValue": "0.731 \tA",
          "name": "Iac",
          "unit": 4,
          "value": 0.7313106819472109
        },
        {
          "dataType": 0,
          "formattedValue": "280 \tV",
          "name": "Vac",
          "unit": 2,
          "value": 279.6108657371323
        },
        {
          "dataType": 0,
          "formattedValue": "60.6 \t\u00b0F",
          "name": "DeviceTemp",
          "unit": 30,
          "value": 15.9
        },
        {
          "dataType": 0,
          "formattedValue": "47.5 \t\u00b0F",
          "name": "InternalTemp",
          "unit": 30,
          "value": 8.6
        },
        {
          "dataType": 0,
          "formattedValue": "31.8 \t\u00b0F",
          "name": "Temp_XMFR",
          "unit": 30,
          "value": -0.1
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Warning",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault0",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault1",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault2",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault3",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault4",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "43,690 \t ",
          "name": "OnOff",
          "unit": 0,
          "value": 43690
        },
        {
          "dataType": 0,
          "formattedValue": "100 \t%",
          "name": "LimitKW",
          "unit": 56,
          "value": 100
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rapm",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rrpm",
          "unit": 0,
          "value": 0
        }
      ],
      "defaultChart": 2,
      "description": "INV-42 CP11 - (28kW)",
      "deviceImage": {
        "contentType": "",
        "key": "",
        "lastChanged": null,
        "name": "PV_V1844",
        "uri": "https://www.alsoenergy.com/pub/Images/Device/1844.png"
      },
      "functionCode": 1,
      "hardwareStatus": 1,
      "installDate": "2016-07-28",
      "inverterKw": 28,
      "key": "H70668",
      "lastAttempt": "2025-12-19T19:59:20Z",
      "lastChanged": "2025-12-12T23:32:49Z",
      "lastData": "900 W",
      "lastSuccess": "2025-12-19T19:58:29Z",
      "name": "INV-42 CP11 - (28kW)",
      "outOfService": false,
      "primaryMetric": "900 W",
      "primaryMetricName": 38,
      "serialNum": "1012981550084",
      "sortOrder": 52,
      "units": 8,
      "unitsScale": 1
    },
    {
      "capacityKW": 36,
      "communicationResult": 0,
      "dataRegisters": [
        {
          "dataType": 0,
          "formattedValue": "1.2 \tkW",
          "name": "KwAC",
          "unit": 10,
          "value": 1.2000000000000002
        },
        {
          "dataType": 0,
          "formattedValue": "339 \tMWh",
          "name": "KwhAC",
          "unit": 11,
          "value": 338684
        },
        {
          "dataType": 0,
          "formattedValue": "484 \tV",
          "name": "VacAB",
          "unit": 2,
          "value": 483.90000000000003
        },
        {
          "dataType": 0,
          "formattedValue": "484 \tV",
          "name": "VacBC",
          "unit": 2,
          "value": 484.1
        },
        {
          "dataType": 0,
          "formattedValue": "482 \tV",
          "name": "VacCA",
          "unit": 2,
          "value": 482.3
        },
        {
          "dataType": 0,
          "formattedValue": "1.5 \tA",
          "name": "IacA",
          "unit": 4,
          "value": 1.5
        },
        {
          "dataType": 0,
          "formattedValue": "1.3 \tA",
          "name": "IacB",
          "unit": 4,
          "value": 1.3
        },
        {
          "dataType": 0,
          "formattedValue": "1.5 \tA",
          "name": "IacC",
          "unit": 4,
          "value": 1.5
        },
        {
          "dataType": 0,
          "formattedValue": "686 \tV",
          "name": "Vdc1",
          "unit": 2,
          "value": 686.5
        },
        {
          "dataType": 0,
          "formattedValue": "0.8 \tA",
          "name": "Idc1",
          "unit": 4,
          "value": 0.8
        },
        {
          "dataType": 0,
          "formattedValue": "708 \tV",
          "name": "Vdc2",
          "unit": 2,
          "value": 707.9000000000001
        },
        {
          "dataType": 0,
          "formattedValue": " \tV",
          "name": "Vdc3",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "0.8 \tA",
          "name": "Idc2",
          "unit": 4,
          "value": 0.8
        },
        {
          "dataType": 0,
          "formattedValue": " \tA",
          "name": "Idc3",
          "unit": 4,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "1.6 \tA",
          "name": "Idc",
          "unit": 4,
          "value": 1.6
        },
        {
          "dataType": 0,
          "formattedValue": "697 \tV",
          "name": "Vdc",
          "unit": 2,
          "value": 697.2
        },
        {
          "dataType": 0,
          "formattedValue": "0.828 \tA",
          "name": "Iac",
          "unit": 4,
          "value": 0.827535771677107
        },
        {
          "dataType": 0,
          "formattedValue": "279 \tV",
          "name": "Vac",
          "unit": 2,
          "value": 279.37992552178054
        },
        {
          "dataType": 0,
          "formattedValue": "62.2 \t\u00b0F",
          "name": "DeviceTemp",
          "unit": 30,
          "value": 16.8
        },
        {
          "dataType": 0,
          "formattedValue": "48.4 \t\u00b0F",
          "name": "InternalTemp",
          "unit": 30,
          "value": 9.1
        },
        {
          "dataType": 0,
          "formattedValue": "31.8 \t\u00b0F",
          "name": "Temp_XMFR",
          "unit": 30,
          "value": -0.1
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Warning",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault0",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault1",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault2",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault3",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault4",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "43,690 \t ",
          "name": "OnOff",
          "unit": 0,
          "value": 43690
        },
        {
          "dataType": 0,
          "formattedValue": "100 \t%",
          "name": "LimitKW",
          "unit": 56,
          "value": 100
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rapm",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rrpm",
          "unit": 0,
          "value": 0
        }
      ],
      "defaultChart": 2,
      "description": "INV-43 CP12 - (36kW)",
      "deviceImage": {
        "contentType": "",
        "key": "",
        "lastChanged": null,
        "name": "PV_V1844",
        "uri": "https://www.alsoenergy.com/pub/Images/Device/1844.png"
      },
      "functionCode": 1,
      "hardwareStatus": 1,
      "installDate": "2016-07-31",
      "inverterKw": 36,
      "key": "H70669",
      "lastAttempt": "2025-12-19T19:59:26Z",
      "lastChanged": "2025-12-12T23:35:44Z",
      "lastData": "1.2 kW",
      "lastSuccess": "2025-12-19T19:58:30Z",
      "name": "INV-43 CP12 - (36kW)",
      "outOfService": false,
      "primaryMetric": "1.2 kW",
      "primaryMetricName": 38,
      "serialNum": "1012791548037",
      "sortOrder": 53,
      "units": 10,
      "unitsScale": 1000
    },
    {
      "capacityKW": 28,
      "communicationResult": 0,
      "dataRegisters": [
        {
          "dataType": 0,
          "formattedValue": "900 \tW",
          "name": "KwAC",
          "unit": 10,
          "value": 0.9
        },
        {
          "dataType": 0,
          "formattedValue": "331 \tMWh",
          "name": "KwhAC",
          "unit": 11,
          "value": 330966
        },
        {
          "dataType": 0,
          "formattedValue": "485 \tV",
          "name": "VacAB",
          "unit": 2,
          "value": 484.6
        },
        {
          "dataType": 0,
          "formattedValue": "485 \tV",
          "name": "VacBC",
          "unit": 2,
          "value": 484.8
        },
        {
          "dataType": 0,
          "formattedValue": "482 \tV",
          "name": "VacCA",
          "unit": 2,
          "value": 482.20000000000005
        },
        {
          "dataType": 0,
          "formattedValue": "1.3 \tA",
          "name": "IacA",
          "unit": 4,
          "value": 1.3
        },
        {
          "dataType": 0,
          "formattedValue": "1.3 \tA",
          "name": "IacB",
          "unit": 4,
          "value": 1.3
        },
        {
          "dataType": 0,
          "formattedValue": "1.3 \tA",
          "name": "IacC",
          "unit": 4,
          "value": 1.3
        },
        {
          "dataType": 0,
          "formattedValue": "693 \tV",
          "name": "Vdc1",
          "unit": 2,
          "value": 692.6
        },
        {
          "dataType": 0,
          "formattedValue": "0.6 \tA",
          "name": "Idc1",
          "unit": 4,
          "value": 0.6000000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "692 \tV",
          "name": "Vdc2",
          "unit": 2,
          "value": 692.3000000000001
        },
        {
          "dataType": 0,
          "formattedValue": " \tV",
          "name": "Vdc3",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "0.6 \tA",
          "name": "Idc2",
          "unit": 4,
          "value": 0.6000000000000001
        },
        {
          "dataType": 0,
          "formattedValue": " \tA",
          "name": "Idc3",
          "unit": 4,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "1.2 \tA",
          "name": "Idc",
          "unit": 4,
          "value": 1.2000000000000002
        },
        {
          "dataType": 0,
          "formattedValue": "692 \tV",
          "name": "Vdc",
          "unit": 2,
          "value": 692.45
        },
        {
          "dataType": 0,
          "formattedValue": "0.751 \tA",
          "name": "Iac",
          "unit": 4,
          "value": 0.7505556998931902
        },
        {
          "dataType": 0,
          "formattedValue": "280 \tV",
          "name": "Vac",
          "unit": 2,
          "value": 279.7840708986461
        },
        {
          "dataType": 0,
          "formattedValue": "58.6 \t\u00b0F",
          "name": "DeviceTemp",
          "unit": 30,
          "value": 14.8
        },
        {
          "dataType": 0,
          "formattedValue": "46.2 \t\u00b0F",
          "name": "InternalTemp",
          "unit": 30,
          "value": 7.9
        },
        {
          "dataType": 0,
          "formattedValue": "31.8 \t\u00b0F",
          "name": "Temp_XMFR",
          "unit": 30,
          "value": -0.1
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Warning",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault0",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault1",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault2",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault3",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault4",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "43,690 \t ",
          "name": "OnOff",
          "unit": 0,
          "value": 43690
        },
        {
          "dataType": 0,
          "formattedValue": "100 \t%",
          "name": "LimitKW",
          "unit": 56,
          "value": 100
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rapm",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rrpm",
          "unit": 0,
          "value": 0
        }
      ],
      "defaultChart": 2,
      "description": "INV-44 CP12 - (28kW)",
      "deviceImage": {
        "contentType": "",
        "key": "",
        "lastChanged": null,
        "name": "PV_V1844",
        "uri": "https://www.alsoenergy.com/pub/Images/Device/1844.png"
      },
      "functionCode": 1,
      "hardwareStatus": 1,
      "installDate": "2016-07-29",
      "inverterKw": 28,
      "key": "H70670",
      "lastAttempt": "2025-12-19T19:59:30Z",
      "lastChanged": "2025-12-12T23:35:50Z",
      "lastData": "900 W",
      "lastSuccess": "2025-12-19T19:58:31Z",
      "name": "INV-44 CP12 - (28kW)",
      "outOfService": false,
      "primaryMetric": "900 W",
      "primaryMetricName": 38,
      "serialNum": "1012981545245",
      "sortOrder": 54,
      "units": 8,
      "unitsScale": 1
    },
    {
      "capacityKW": 28,
      "communicationResult": 0,
      "dataRegisters": [
        {
          "dataType": 0,
          "formattedValue": "1 \tkW",
          "name": "KwAC",
          "unit": 10,
          "value": 1
        },
        {
          "dataType": 0,
          "formattedValue": "319 \tMWh",
          "name": "KwhAC",
          "unit": 11,
          "value": 319257
        },
        {
          "dataType": 0,
          "formattedValue": "485 \tV",
          "name": "VacAB",
          "unit": 2,
          "value": 484.8
        },
        {
          "dataType": 0,
          "formattedValue": "486 \tV",
          "name": "VacBC",
          "unit": 2,
          "value": 485.6
        },
        {
          "dataType": 0,
          "formattedValue": "483 \tV",
          "name": "VacCA",
          "unit": 2,
          "value": 483.3
        },
        {
          "dataType": 0,
          "formattedValue": "1.3 \tA",
          "name": "IacA",
          "unit": 4,
          "value": 1.3
        },
        {
          "dataType": 0,
          "formattedValue": "1.3 \tA",
          "name": "IacB",
          "unit": 4,
          "value": 1.3
        },
        {
          "dataType": 0,
          "formattedValue": "1.4 \tA",
          "name": "IacC",
          "unit": 4,
          "value": 1.4000000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "693 \tV",
          "name": "Vdc1",
          "unit": 2,
          "value": 692.8000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "0.6 \tA",
          "name": "Idc1",
          "unit": 4,
          "value": 0.6000000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "699 \tV",
          "name": "Vdc2",
          "unit": 2,
          "value": 698.8000000000001
        },
        {
          "dataType": 0,
          "formattedValue": " \tV",
          "name": "Vdc3",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "0.5 \tA",
          "name": "Idc2",
          "unit": 4,
          "value": 0.5
        },
        {
          "dataType": 0,
          "formattedValue": " \tA",
          "name": "Idc3",
          "unit": 4,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "1.1 \tA",
          "name": "Idc",
          "unit": 4,
          "value": 1.1
        },
        {
          "dataType": 0,
          "formattedValue": "696 \tV",
          "name": "Vdc",
          "unit": 2,
          "value": 695.8000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "0.77 \tA",
          "name": "Iac",
          "unit": 4,
          "value": 0.7698007178391693
        },
        {
          "dataType": 0,
          "formattedValue": "280 \tV",
          "name": "Vac",
          "unit": 2,
          "value": 279.89954100632195
        },
        {
          "dataType": 0,
          "formattedValue": "59 \t\u00b0F",
          "name": "DeviceTemp",
          "unit": 30,
          "value": 15
        },
        {
          "dataType": 0,
          "formattedValue": "46.8 \t\u00b0F",
          "name": "InternalTemp",
          "unit": 30,
          "value": 8.200000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "31.8 \t\u00b0F",
          "name": "Temp_XMFR",
          "unit": 30,
          "value": -0.1
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Warning",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault0",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault1",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault2",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault3",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault4",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "43,690 \t ",
          "name": "OnOff",
          "unit": 0,
          "value": 43690
        },
        {
          "dataType": 0,
          "formattedValue": "100 \t%",
          "name": "LimitKW",
          "unit": 56,
          "value": 100
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rapm",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rrpm",
          "unit": 0,
          "value": 0
        }
      ],
      "defaultChart": 2,
      "description": "INV-45 CP12 - (28kW)",
      "deviceImage": {
        "contentType": "",
        "key": "",
        "lastChanged": null,
        "name": "PV_V1844",
        "uri": "https://www.alsoenergy.com/pub/Images/Device/1844.png"
      },
      "functionCode": 1,
      "hardwareStatus": 1,
      "installDate": "2016-07-26",
      "inverterKw": 28,
      "key": "H70671",
      "lastAttempt": "2025-12-19T19:59:29Z",
      "lastChanged": "2025-12-12T23:35:55Z",
      "lastData": "1 kW",
      "lastSuccess": "2025-12-19T19:58:32Z",
      "name": "INV-45 CP12 - (28kW)",
      "outOfService": false,
      "primaryMetric": "1 kW",
      "primaryMetricName": 38,
      "serialNum": "1012981552063",
      "sortOrder": 55,
      "units": 10,
      "unitsScale": 1000
    },
    {
      "capacityKW": 28,
      "communicationResult": 0,
      "dataRegisters": [
        {
          "dataType": 0,
          "formattedValue": "900 \tW",
          "name": "KwAC",
          "unit": 10,
          "value": 0.9
        },
        {
          "dataType": 0,
          "formattedValue": "327 \tMWh",
          "name": "KwhAC",
          "unit": 11,
          "value": 326824
        },
        {
          "dataType": 0,
          "formattedValue": "483 \tV",
          "name": "VacAB",
          "unit": 2,
          "value": 483.3
        },
        {
          "dataType": 0,
          "formattedValue": "484 \tV",
          "name": "VacBC",
          "unit": 2,
          "value": 484.5
        },
        {
          "dataType": 0,
          "formattedValue": "480 \tV",
          "name": "VacCA",
          "unit": 2,
          "value": 480
        },
        {
          "dataType": 0,
          "formattedValue": "1.3 \tA",
          "name": "IacA",
          "unit": 4,
          "value": 1.3
        },
        {
          "dataType": 0,
          "formattedValue": "1.5 \tA",
          "name": "IacB",
          "unit": 4,
          "value": 1.5
        },
        {
          "dataType": 0,
          "formattedValue": "1.3 \tA",
          "name": "IacC",
          "unit": 4,
          "value": 1.3
        },
        {
          "dataType": 0,
          "formattedValue": "715 \tV",
          "name": "Vdc1",
          "unit": 2,
          "value": 715.3000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "0.5 \tA",
          "name": "Idc1",
          "unit": 4,
          "value": 0.5
        },
        {
          "dataType": 0,
          "formattedValue": "704 \tV",
          "name": "Vdc2",
          "unit": 2,
          "value": 704.5
        },
        {
          "dataType": 0,
          "formattedValue": " \tV",
          "name": "Vdc3",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "0.6 \tA",
          "name": "Idc2",
          "unit": 4,
          "value": 0.6000000000000001
        },
        {
          "dataType": 0,
          "formattedValue": " \tA",
          "name": "Idc3",
          "unit": 4,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "1.1 \tA",
          "name": "Idc",
          "unit": 4,
          "value": 1.1
        },
        {
          "dataType": 0,
          "formattedValue": "710 \tV",
          "name": "Vdc",
          "unit": 2,
          "value": 709.9000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "0.789 \tA",
          "name": "Iac",
          "unit": 4,
          "value": 0.7890457357851487
        },
        {
          "dataType": 0,
          "formattedValue": "279 \tV",
          "name": "Vac",
          "unit": 2,
          "value": 279.0335151987529
        },
        {
          "dataType": 0,
          "formattedValue": "57.4 \t\u00b0F",
          "name": "DeviceTemp",
          "unit": 30,
          "value": 14.100000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "46.2 \t\u00b0F",
          "name": "InternalTemp",
          "unit": 30,
          "value": 7.9
        },
        {
          "dataType": 0,
          "formattedValue": "31.8 \t\u00b0F",
          "name": "Temp_XMFR",
          "unit": 30,
          "value": -0.1
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Warning",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault0",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault1",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault2",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault3",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault4",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "43,690 \t ",
          "name": "OnOff",
          "unit": 0,
          "value": 43690
        },
        {
          "dataType": 0,
          "formattedValue": "100 \t%",
          "name": "LimitKW",
          "unit": 56,
          "value": 100
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rapm",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rrpm",
          "unit": 0,
          "value": 0
        }
      ],
      "defaultChart": 2,
      "description": "INV-46 CP12 - (28kW)",
      "deviceImage": {
        "contentType": "",
        "key": "",
        "lastChanged": null,
        "name": "PV_V1844",
        "uri": "https://www.alsoenergy.com/pub/Images/Device/1844.png"
      },
      "functionCode": 1,
      "hardwareStatus": 1,
      "installDate": "2016-07-25",
      "inverterKw": 28,
      "key": "H70672",
      "lastAttempt": "2025-12-19T19:59:34Z",
      "lastChanged": "2025-12-12T23:36:00Z",
      "lastData": "900 W",
      "lastSuccess": "2025-12-19T19:58:33Z",
      "name": "INV-46 CP12 - (28kW)",
      "outOfService": false,
      "primaryMetric": "900 W",
      "primaryMetricName": 38,
      "serialNum": "1012981552020",
      "sortOrder": 56,
      "units": 8,
      "unitsScale": 1
    },
    {
      "capacityKW": 23,
      "communicationResult": 0,
      "dataRegisters": [
        {
          "dataType": 0,
          "formattedValue": "700 \tW",
          "name": "KwAC",
          "unit": 10,
          "value": 0.7000000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "257 \tMWh",
          "name": "KwhAC",
          "unit": 11,
          "value": 257019
        },
        {
          "dataType": 0,
          "formattedValue": "484 \tV",
          "name": "VacAB",
          "unit": 2,
          "value": 484.3
        },
        {
          "dataType": 0,
          "formattedValue": "485 \tV",
          "name": "VacBC",
          "unit": 2,
          "value": 484.8
        },
        {
          "dataType": 0,
          "formattedValue": "482 \tV",
          "name": "VacCA",
          "unit": 2,
          "value": 482.5
        },
        {
          "dataType": 0,
          "formattedValue": "1 \tA",
          "name": "IacA",
          "unit": 4,
          "value": 1
        },
        {
          "dataType": 0,
          "formattedValue": "1 \tA",
          "name": "IacB",
          "unit": 4,
          "value": 1
        },
        {
          "dataType": 0,
          "formattedValue": "1 \tA",
          "name": "IacC",
          "unit": 4,
          "value": 1
        },
        {
          "dataType": 0,
          "formattedValue": "699 \tV",
          "name": "Vdc1",
          "unit": 2,
          "value": 699.3000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "0.3 \tA",
          "name": "Idc1",
          "unit": 4,
          "value": 0.30000000000000004
        },
        {
          "dataType": 0,
          "formattedValue": "699 \tV",
          "name": "Vdc2",
          "unit": 2,
          "value": 699.4000000000001
        },
        {
          "dataType": 0,
          "formattedValue": " \tV",
          "name": "Vdc3",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "0.3 \tA",
          "name": "Idc2",
          "unit": 4,
          "value": 0.30000000000000004
        },
        {
          "dataType": 0,
          "formattedValue": " \tA",
          "name": "Idc3",
          "unit": 4,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "0.6 \tA",
          "name": "Idc",
          "unit": 4,
          "value": 0.6000000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "699 \tV",
          "name": "Vdc",
          "unit": 2,
          "value": 699.35
        },
        {
          "dataType": 0,
          "formattedValue": "0.577 \tA",
          "name": "Iac",
          "unit": 4,
          "value": 0.577350538379377
        },
        {
          "dataType": 0,
          "formattedValue": "280 \tV",
          "name": "Vac",
          "unit": 2,
          "value": 279.6108657371323
        },
        {
          "dataType": 0,
          "formattedValue": "61.7 \t\u00b0F",
          "name": "DeviceTemp",
          "unit": 30,
          "value": 16.5
        },
        {
          "dataType": 0,
          "formattedValue": "48.9 \t\u00b0F",
          "name": "InternalTemp",
          "unit": 30,
          "value": 9.4
        },
        {
          "dataType": 0,
          "formattedValue": "31.8 \t\u00b0F",
          "name": "Temp_XMFR",
          "unit": 30,
          "value": -0.1
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Warning",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault0",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault1",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault2",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault3",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault4",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "43,690 \t ",
          "name": "OnOff",
          "unit": 0,
          "value": 43690
        },
        {
          "dataType": 0,
          "formattedValue": "100 \t%",
          "name": "LimitKW",
          "unit": 56,
          "value": 100
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rapm",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rrpm",
          "unit": 0,
          "value": 0
        }
      ],
      "defaultChart": 2,
      "description": "INV-47 CP13 - (23kW)",
      "deviceImage": {
        "contentType": "",
        "key": "",
        "lastChanged": null,
        "name": "PV_V1844",
        "uri": "https://www.alsoenergy.com/pub/Images/Device/1844.png"
      },
      "functionCode": 1,
      "hardwareStatus": 1,
      "installDate": "2016-07-25",
      "inverterKw": 23,
      "key": "H70673",
      "lastAttempt": "2025-12-19T19:59:35Z",
      "lastChanged": "2025-12-12T23:36:06Z",
      "lastData": "700 W",
      "lastSuccess": "2025-12-19T19:58:34Z",
      "name": "INV-47 CP13 - (23kW)",
      "outOfService": false,
      "primaryMetric": "700 W",
      "primaryMetricName": 38,
      "serialNum": "1012971545183",
      "sortOrder": 57,
      "units": 8,
      "unitsScale": 1
    },
    {
      "capacityKW": 23,
      "communicationResult": 0,
      "dataRegisters": [
        {
          "dataType": 0,
          "formattedValue": "700 \tW",
          "name": "KwAC",
          "unit": 10,
          "value": 0.7000000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "262 \tMWh",
          "name": "KwhAC",
          "unit": 11,
          "value": 261664
        },
        {
          "dataType": 0,
          "formattedValue": "484 \tV",
          "name": "VacAB",
          "unit": 2,
          "value": 483.5
        },
        {
          "dataType": 0,
          "formattedValue": "483 \tV",
          "name": "VacBC",
          "unit": 2,
          "value": 483.20000000000005
        },
        {
          "dataType": 0,
          "formattedValue": "481 \tV",
          "name": "VacCA",
          "unit": 2,
          "value": 481.3
        },
        {
          "dataType": 0,
          "formattedValue": "1 \tA",
          "name": "IacA",
          "unit": 4,
          "value": 1
        },
        {
          "dataType": 0,
          "formattedValue": "1 \tA",
          "name": "IacB",
          "unit": 4,
          "value": 1
        },
        {
          "dataType": 0,
          "formattedValue": "1 \tA",
          "name": "IacC",
          "unit": 4,
          "value": 1
        },
        {
          "dataType": 0,
          "formattedValue": "682 \tV",
          "name": "Vdc1",
          "unit": 2,
          "value": 681.8000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "0.4 \tA",
          "name": "Idc1",
          "unit": 4,
          "value": 0.4
        },
        {
          "dataType": 0,
          "formattedValue": "681 \tV",
          "name": "Vdc2",
          "unit": 2,
          "value": 680.8000000000001
        },
        {
          "dataType": 0,
          "formattedValue": " \tV",
          "name": "Vdc3",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "0.4 \tA",
          "name": "Idc2",
          "unit": 4,
          "value": 0.4
        },
        {
          "dataType": 0,
          "formattedValue": " \tA",
          "name": "Idc3",
          "unit": 4,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "0.8 \tA",
          "name": "Idc",
          "unit": 4,
          "value": 0.8
        },
        {
          "dataType": 0,
          "formattedValue": "681 \tV",
          "name": "Vdc",
          "unit": 2,
          "value": 681.3000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "0.577 \tA",
          "name": "Iac",
          "unit": 4,
          "value": 0.577350538379377
        },
        {
          "dataType": 0,
          "formattedValue": "279 \tV",
          "name": "Vac",
          "unit": 2,
          "value": 279.14898530642876
        },
        {
          "dataType": 0,
          "formattedValue": "63 \t\u00b0F",
          "name": "DeviceTemp",
          "unit": 30,
          "value": 17.2
        },
        {
          "dataType": 0,
          "formattedValue": "48.6 \t\u00b0F",
          "name": "InternalTemp",
          "unit": 30,
          "value": 9.200000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "31.8 \t\u00b0F",
          "name": "Temp_XMFR",
          "unit": 30,
          "value": -0.1
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Warning",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault0",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault1",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault2",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault3",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault4",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "43,690 \t ",
          "name": "OnOff",
          "unit": 0,
          "value": 43690
        },
        {
          "dataType": 0,
          "formattedValue": "100 \t%",
          "name": "LimitKW",
          "unit": 56,
          "value": 100
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rapm",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rrpm",
          "unit": 0,
          "value": 0
        }
      ],
      "defaultChart": 2,
      "description": "INV-48 CP13 - (23kW)",
      "deviceImage": {
        "contentType": "",
        "key": "",
        "lastChanged": null,
        "name": "PV_V1844",
        "uri": "https://www.alsoenergy.com/pub/Images/Device/1844.png"
      },
      "functionCode": 1,
      "hardwareStatus": 1,
      "installDate": "2016-07-28",
      "inverterKw": 23,
      "key": "H70674",
      "lastAttempt": "2025-12-19T19:59:40Z",
      "lastChanged": "2025-12-12T23:36:11Z",
      "lastData": "700 W",
      "lastSuccess": "2025-12-19T19:58:35Z",
      "name": "INV-48 CP13 - (23kW)",
      "outOfService": false,
      "primaryMetric": "700 W",
      "primaryMetricName": 38,
      "serialNum": "1012971545017",
      "sortOrder": 58,
      "units": 8,
      "unitsScale": 1
    },
    {
      "capacityKW": 23,
      "communicationResult": 0,
      "dataRegisters": [
        {
          "dataType": 0,
          "formattedValue": "700 \tW",
          "name": "KwAC",
          "unit": 10,
          "value": 0.7000000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "263 \tMWh",
          "name": "KwhAC",
          "unit": 11,
          "value": 263104
        },
        {
          "dataType": 0,
          "formattedValue": "484 \tV",
          "name": "VacAB",
          "unit": 2,
          "value": 484.3
        },
        {
          "dataType": 0,
          "formattedValue": "484 \tV",
          "name": "VacBC",
          "unit": 2,
          "value": 484.40000000000003
        },
        {
          "dataType": 0,
          "formattedValue": "482 \tV",
          "name": "VacCA",
          "unit": 2,
          "value": 482.40000000000003
        },
        {
          "dataType": 0,
          "formattedValue": "1 \tA",
          "name": "IacA",
          "unit": 4,
          "value": 1
        },
        {
          "dataType": 0,
          "formattedValue": "1 \tA",
          "name": "IacB",
          "unit": 4,
          "value": 1
        },
        {
          "dataType": 0,
          "formattedValue": "1 \tA",
          "name": "IacC",
          "unit": 4,
          "value": 1
        },
        {
          "dataType": 0,
          "formattedValue": "700 \tV",
          "name": "Vdc1",
          "unit": 2,
          "value": 700.1
        },
        {
          "dataType": 0,
          "formattedValue": "0.3 \tA",
          "name": "Idc1",
          "unit": 4,
          "value": 0.30000000000000004
        },
        {
          "dataType": 0,
          "formattedValue": "700 \tV",
          "name": "Vdc2",
          "unit": 2,
          "value": 700.2
        },
        {
          "dataType": 0,
          "formattedValue": " \tV",
          "name": "Vdc3",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "0.3 \tA",
          "name": "Idc2",
          "unit": 4,
          "value": 0.30000000000000004
        },
        {
          "dataType": 0,
          "formattedValue": " \tA",
          "name": "Idc3",
          "unit": 4,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "0.6 \tA",
          "name": "Idc",
          "unit": 4,
          "value": 0.6000000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "700 \tV",
          "name": "Vdc",
          "unit": 2,
          "value": 700.1500000000001
        },
        {
          "dataType": 0,
          "formattedValue": "0.577 \tA",
          "name": "Iac",
          "unit": 4,
          "value": 0.577350538379377
        },
        {
          "dataType": 0,
          "formattedValue": "280 \tV",
          "name": "Vac",
          "unit": 2,
          "value": 279.6108657371323
        },
        {
          "dataType": 0,
          "formattedValue": "61.3 \t\u00b0F",
          "name": "DeviceTemp",
          "unit": 30,
          "value": 16.3
        },
        {
          "dataType": 0,
          "formattedValue": "48 \t\u00b0F",
          "name": "InternalTemp",
          "unit": 30,
          "value": 8.9
        },
        {
          "dataType": 0,
          "formattedValue": "31.8 \t\u00b0F",
          "name": "Temp_XMFR",
          "unit": 30,
          "value": -0.1
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Warning",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault0",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault1",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault2",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault3",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault4",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "43,690 \t ",
          "name": "OnOff",
          "unit": 0,
          "value": 43690
        },
        {
          "dataType": 0,
          "formattedValue": "100 \t%",
          "name": "LimitKW",
          "unit": 56,
          "value": 100
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rapm",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rrpm",
          "unit": 0,
          "value": 0
        }
      ],
      "defaultChart": 2,
      "description": "INV-49 CP13 - (23kW)",
      "deviceImage": {
        "contentType": "",
        "key": "",
        "lastChanged": null,
        "name": "PV_V1844",
        "uri": "https://www.alsoenergy.com/pub/Images/Device/1844.png"
      },
      "functionCode": 1,
      "hardwareStatus": 1,
      "installDate": "2016-07-26",
      "inverterKw": 23,
      "key": "H70675",
      "lastAttempt": "2025-12-19T19:59:43Z",
      "lastChanged": "2025-12-12T23:36:15Z",
      "lastData": "700 W",
      "lastSuccess": "2025-12-19T19:58:36Z",
      "name": "INV-49 CP13 - (23kW)",
      "outOfService": false,
      "primaryMetric": "700 W",
      "primaryMetricName": 38,
      "serialNum": "1012971545174",
      "sortOrder": 59,
      "units": 8,
      "unitsScale": 1
    },
    {
      "capacityKW": 36,
      "communicationResult": 0,
      "dataRegisters": [
        {
          "dataType": 0,
          "formattedValue": "1.2 \tkW",
          "name": "KwAC",
          "unit": 10,
          "value": 1.2000000000000002
        },
        {
          "dataType": 0,
          "formattedValue": "408 \tMWh",
          "name": "KwhAC",
          "unit": 11,
          "value": 408047
        },
        {
          "dataType": 0,
          "formattedValue": "484 \tV",
          "name": "VacAB",
          "unit": 2,
          "value": 484.3
        },
        {
          "dataType": 0,
          "formattedValue": "484 \tV",
          "name": "VacBC",
          "unit": 2,
          "value": 484.1
        },
        {
          "dataType": 0,
          "formattedValue": "483 \tV",
          "name": "VacCA",
          "unit": 2,
          "value": 482.70000000000005
        },
        {
          "dataType": 0,
          "formattedValue": "1.5 \tA",
          "name": "IacA",
          "unit": 4,
          "value": 1.5
        },
        {
          "dataType": 0,
          "formattedValue": "1.3 \tA",
          "name": "IacB",
          "unit": 4,
          "value": 1.3
        },
        {
          "dataType": 0,
          "formattedValue": "1.5 \tA",
          "name": "IacC",
          "unit": 4,
          "value": 1.5
        },
        {
          "dataType": 0,
          "formattedValue": "689 \tV",
          "name": "Vdc1",
          "unit": 2,
          "value": 688.9000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "0.7 \tA",
          "name": "Idc1",
          "unit": 4,
          "value": 0.7000000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "694 \tV",
          "name": "Vdc2",
          "unit": 2,
          "value": 693.5
        },
        {
          "dataType": 0,
          "formattedValue": "0 \tV",
          "name": "Vdc3",
          "unit": 2,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0.7 \tA",
          "name": "Idc2",
          "unit": 4,
          "value": 0.7000000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "0 \tA",
          "name": "Idc3",
          "unit": 4,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "1.4 \tA",
          "name": "Idc",
          "unit": 4,
          "value": 1.4000000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "461 \tV",
          "name": "Vdc",
          "unit": 2,
          "value": 460.8
        },
        {
          "dataType": 0,
          "formattedValue": "0.828 \tA",
          "name": "Iac",
          "unit": 4,
          "value": 0.827535771677107
        },
        {
          "dataType": 0,
          "formattedValue": "280 \tV",
          "name": "Vac",
          "unit": 2,
          "value": 279.6108657371323
        },
        {
          "dataType": 0,
          "formattedValue": "64.6 \t\u00b0F",
          "name": "DeviceTemp",
          "unit": 30,
          "value": 18.1
        },
        {
          "dataType": 0,
          "formattedValue": "48.9 \t\u00b0F",
          "name": "InternalTemp",
          "unit": 30,
          "value": 9.4
        },
        {
          "dataType": 0,
          "formattedValue": "31.8 \t\u00b0F",
          "name": "Temp_XMFR",
          "unit": 30,
          "value": -0.1
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Warning",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault0",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault1",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault2",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault3",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault4",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "43,690 \t ",
          "name": "OnOff",
          "unit": 0,
          "value": 43690
        },
        {
          "dataType": 0,
          "formattedValue": "100 \t%",
          "name": "LimitKW",
          "unit": 56,
          "value": 100
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rapm",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rrpm",
          "unit": 0,
          "value": 0
        }
      ],
      "defaultChart": 2,
      "description": "INV-50 CP14 - (36kW)",
      "deviceImage": {
        "contentType": "",
        "key": "",
        "lastChanged": null,
        "name": "PV_V1844",
        "uri": "https://www.alsoenergy.com/pub/Images/Device/1844.png"
      },
      "functionCode": 1,
      "hardwareStatus": 1,
      "installDate": "2016-07-30",
      "inverterKw": 36,
      "key": "H70676",
      "lastAttempt": "2025-12-19T19:59:43Z",
      "lastChanged": "2025-12-12T23:36:21Z",
      "lastData": "1.2 kW",
      "lastSuccess": "2025-12-19T19:58:37Z",
      "name": "INV-50 CP14 - (36kW)",
      "outOfService": false,
      "primaryMetric": "1.2 kW",
      "primaryMetricName": 38,
      "serialNum": "1012791548055",
      "sortOrder": 60,
      "units": 10,
      "unitsScale": 1000
    },
    {
      "capacityKW": 36,
      "communicationResult": 0,
      "dataRegisters": [
        {
          "dataType": 0,
          "formattedValue": "1.2 \tkW",
          "name": "KwAC",
          "unit": 10,
          "value": 1.2000000000000002
        },
        {
          "dataType": 0,
          "formattedValue": "406 \tMWh",
          "name": "KwhAC",
          "unit": 11,
          "value": 405576
        },
        {
          "dataType": 0,
          "formattedValue": "484 \tV",
          "name": "VacAB",
          "unit": 2,
          "value": 484.3
        },
        {
          "dataType": 0,
          "formattedValue": "484 \tV",
          "name": "VacBC",
          "unit": 2,
          "value": 484.40000000000003
        },
        {
          "dataType": 0,
          "formattedValue": "483 \tV",
          "name": "VacCA",
          "unit": 2,
          "value": 483.20000000000005
        },
        {
          "dataType": 0,
          "formattedValue": "1.5 \tA",
          "name": "IacA",
          "unit": 4,
          "value": 1.5
        },
        {
          "dataType": 0,
          "formattedValue": "1.3 \tA",
          "name": "IacB",
          "unit": 4,
          "value": 1.3
        },
        {
          "dataType": 0,
          "formattedValue": "1.3 \tA",
          "name": "IacC",
          "unit": 4,
          "value": 1.3
        },
        {
          "dataType": 0,
          "formattedValue": "686 \tV",
          "name": "Vdc1",
          "unit": 2,
          "value": 686.3000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "0.7 \tA",
          "name": "Idc1",
          "unit": 4,
          "value": 0.7000000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "695 \tV",
          "name": "Vdc2",
          "unit": 2,
          "value": 694.9000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "0 \tV",
          "name": "Vdc3",
          "unit": 2,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0.7 \tA",
          "name": "Idc2",
          "unit": 4,
          "value": 0.7000000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "0 \tA",
          "name": "Idc3",
          "unit": 4,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "1.4 \tA",
          "name": "Idc",
          "unit": 4,
          "value": 1.4000000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "460 \tV",
          "name": "Vdc",
          "unit": 2,
          "value": 460.40000000000003
        },
        {
          "dataType": 0,
          "formattedValue": "0.789 \tA",
          "name": "Iac",
          "unit": 4,
          "value": 0.7890457357851487
        },
        {
          "dataType": 0,
          "formattedValue": "280 \tV",
          "name": "Vac",
          "unit": 2,
          "value": 279.6108657371323
        },
        {
          "dataType": 0,
          "formattedValue": "63.5 \t\u00b0F",
          "name": "DeviceTemp",
          "unit": 30,
          "value": 17.5
        },
        {
          "dataType": 0,
          "formattedValue": "49.3 \t\u00b0F",
          "name": "InternalTemp",
          "unit": 30,
          "value": 9.600000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "31.8 \t\u00b0F",
          "name": "Temp_XMFR",
          "unit": 30,
          "value": -0.1
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Warning",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault0",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault1",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault2",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault3",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault4",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "43,690 \t ",
          "name": "OnOff",
          "unit": 0,
          "value": 43690
        },
        {
          "dataType": 0,
          "formattedValue": "100 \t%",
          "name": "LimitKW",
          "unit": 56,
          "value": 100
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rapm",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rrpm",
          "unit": 0,
          "value": 0
        }
      ],
      "defaultChart": 2,
      "description": "INV-51 CP14 - (36kW)",
      "deviceImage": {
        "contentType": "",
        "key": "",
        "lastChanged": null,
        "name": "PV_V1844",
        "uri": "https://www.alsoenergy.com/pub/Images/Device/1844.png"
      },
      "functionCode": 1,
      "hardwareStatus": 1,
      "installDate": "2016-07-26",
      "inverterKw": 36,
      "key": "H70677",
      "lastAttempt": "2025-12-19T19:59:45Z",
      "lastChanged": "2025-12-12T23:36:26Z",
      "lastData": "1.2 kW",
      "lastSuccess": "2025-12-19T19:58:38Z",
      "name": "INV-51 CP14 - (36kW)",
      "outOfService": false,
      "primaryMetric": "1.2 kW",
      "primaryMetricName": 38,
      "serialNum": "1012791548017",
      "sortOrder": 61,
      "units": 10,
      "unitsScale": 1000
    },
    {
      "capacityKW": 28,
      "communicationResult": 0,
      "dataRegisters": [
        {
          "dataType": 0,
          "formattedValue": "900 \tW",
          "name": "KwAC",
          "unit": 10,
          "value": 0.9
        },
        {
          "dataType": 0,
          "formattedValue": "313 \tMWh",
          "name": "KwhAC",
          "unit": 11,
          "value": 313482
        },
        {
          "dataType": 0,
          "formattedValue": "483 \tV",
          "name": "VacAB",
          "unit": 2,
          "value": 483.3
        },
        {
          "dataType": 0,
          "formattedValue": "484 \tV",
          "name": "VacBC",
          "unit": 2,
          "value": 484.40000000000003
        },
        {
          "dataType": 0,
          "formattedValue": "481 \tV",
          "name": "VacCA",
          "unit": 2,
          "value": 481.20000000000005
        },
        {
          "dataType": 0,
          "formattedValue": "1 \tA",
          "name": "IacA",
          "unit": 4,
          "value": 1
        },
        {
          "dataType": 0,
          "formattedValue": "1 \tA",
          "name": "IacB",
          "unit": 4,
          "value": 1
        },
        {
          "dataType": 0,
          "formattedValue": "1.2 \tA",
          "name": "IacC",
          "unit": 4,
          "value": 1.2000000000000002
        },
        {
          "dataType": 0,
          "formattedValue": "696 \tV",
          "name": "Vdc1",
          "unit": 2,
          "value": 696.1
        },
        {
          "dataType": 0,
          "formattedValue": "0.5 \tA",
          "name": "Idc1",
          "unit": 4,
          "value": 0.5
        },
        {
          "dataType": 0,
          "formattedValue": "697 \tV",
          "name": "Vdc2",
          "unit": 2,
          "value": 697.2
        },
        {
          "dataType": 0,
          "formattedValue": " \tV",
          "name": "Vdc3",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "0.5 \tA",
          "name": "Idc2",
          "unit": 4,
          "value": 0.5
        },
        {
          "dataType": 0,
          "formattedValue": " \tA",
          "name": "Idc3",
          "unit": 4,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "1 \tA",
          "name": "Idc",
          "unit": 4,
          "value": 1
        },
        {
          "dataType": 0,
          "formattedValue": "697 \tV",
          "name": "Vdc",
          "unit": 2,
          "value": 696.6500000000001
        },
        {
          "dataType": 0,
          "formattedValue": "0.616 \tA",
          "name": "Iac",
          "unit": 4,
          "value": 0.6158405742713354
        },
        {
          "dataType": 0,
          "formattedValue": "279 \tV",
          "name": "Vac",
          "unit": 2,
          "value": 279.0335151987529
        },
        {
          "dataType": 0,
          "formattedValue": "61.5 \t\u00b0F",
          "name": "DeviceTemp",
          "unit": 30,
          "value": 16.400000000000002
        },
        {
          "dataType": 0,
          "formattedValue": "47.5 \t\u00b0F",
          "name": "InternalTemp",
          "unit": 30,
          "value": 8.6
        },
        {
          "dataType": 0,
          "formattedValue": "31.8 \t\u00b0F",
          "name": "Temp_XMFR",
          "unit": 30,
          "value": -0.1
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Warning",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault0",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault1",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault2",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault3",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault4",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "43,690 \t ",
          "name": "OnOff",
          "unit": 0,
          "value": 43690
        },
        {
          "dataType": 0,
          "formattedValue": "100 \t%",
          "name": "LimitKW",
          "unit": 56,
          "value": 100
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rapm",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rrpm",
          "unit": 0,
          "value": 0
        }
      ],
      "defaultChart": 2,
      "description": "INV-52 CP14 - (28kW)",
      "deviceImage": {
        "contentType": "",
        "key": "",
        "lastChanged": null,
        "name": "PV_V1844",
        "uri": "https://www.alsoenergy.com/pub/Images/Device/1844.png"
      },
      "functionCode": 1,
      "hardwareStatus": 1,
      "installDate": "2016-07-25",
      "inverterKw": 28,
      "key": "H70678",
      "lastAttempt": "2025-12-19T19:59:45Z",
      "lastChanged": "2025-12-12T23:36:31Z",
      "lastData": "900 W",
      "lastSuccess": "2025-12-19T19:58:39Z",
      "name": "INV-52 CP14 - (28kW)",
      "outOfService": false,
      "primaryMetric": "900 W",
      "primaryMetricName": 38,
      "serialNum": "1012981545145",
      "sortOrder": 62,
      "units": 8,
      "unitsScale": 1
    },
    {
      "capacityKW": 28,
      "communicationResult": 0,
      "dataRegisters": [
        {
          "dataType": 0,
          "formattedValue": "900 \tW",
          "name": "KwAC",
          "unit": 10,
          "value": 0.9
        },
        {
          "dataType": 0,
          "formattedValue": "317 \tMWh",
          "name": "KwhAC",
          "unit": 11,
          "value": 316532
        },
        {
          "dataType": 0,
          "formattedValue": "484 \tV",
          "name": "VacAB",
          "unit": 2,
          "value": 483.90000000000003
        },
        {
          "dataType": 0,
          "formattedValue": "484 \tV",
          "name": "VacBC",
          "unit": 2,
          "value": 484.5
        },
        {
          "dataType": 0,
          "formattedValue": "482 \tV",
          "name": "VacCA",
          "unit": 2,
          "value": 482.40000000000003
        },
        {
          "dataType": 0,
          "formattedValue": "1.3 \tA",
          "name": "IacA",
          "unit": 4,
          "value": 1.3
        },
        {
          "dataType": 0,
          "formattedValue": "1.3 \tA",
          "name": "IacB",
          "unit": 4,
          "value": 1.3
        },
        {
          "dataType": 0,
          "formattedValue": "1.3 \tA",
          "name": "IacC",
          "unit": 4,
          "value": 1.3
        },
        {
          "dataType": 0,
          "formattedValue": "673 \tV",
          "name": "Vdc1",
          "unit": 2,
          "value": 673.2
        },
        {
          "dataType": 0,
          "formattedValue": "0.6 \tA",
          "name": "Idc1",
          "unit": 4,
          "value": 0.6000000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "684 \tV",
          "name": "Vdc2",
          "unit": 2,
          "value": 683.7
        },
        {
          "dataType": 0,
          "formattedValue": " \tV",
          "name": "Vdc3",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "0.5 \tA",
          "name": "Idc2",
          "unit": 4,
          "value": 0.5
        },
        {
          "dataType": 0,
          "formattedValue": " \tA",
          "name": "Idc3",
          "unit": 4,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "1.1 \tA",
          "name": "Idc",
          "unit": 4,
          "value": 1.1
        },
        {
          "dataType": 0,
          "formattedValue": "678 \tV",
          "name": "Vdc",
          "unit": 2,
          "value": 678.45
        },
        {
          "dataType": 0,
          "formattedValue": "0.751 \tA",
          "name": "Iac",
          "unit": 4,
          "value": 0.7505556998931902
        },
        {
          "dataType": 0,
          "formattedValue": "279 \tV",
          "name": "Vac",
          "unit": 2,
          "value": 279.37992552178054
        },
        {
          "dataType": 0,
          "formattedValue": "55.9 \t\u00b0F",
          "name": "DeviceTemp",
          "unit": 30,
          "value": 13.3
        },
        {
          "dataType": 0,
          "formattedValue": "43.3 \t\u00b0F",
          "name": "InternalTemp",
          "unit": 30,
          "value": 6.300000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "31.8 \t\u00b0F",
          "name": "Temp_XMFR",
          "unit": 30,
          "value": -0.1
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Warning",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault0",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault1",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault2",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault3",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault4",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "43,690 \t ",
          "name": "OnOff",
          "unit": 0,
          "value": 43690
        },
        {
          "dataType": 0,
          "formattedValue": "100 \t%",
          "name": "LimitKW",
          "unit": 56,
          "value": 100
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rapm",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rrpm",
          "unit": 0,
          "value": 0
        }
      ],
      "defaultChart": 2,
      "description": "INV-53 CP15 - (28kW)",
      "deviceImage": {
        "contentType": "",
        "key": "",
        "lastChanged": null,
        "name": "PV_V1844",
        "uri": "https://www.alsoenergy.com/pub/Images/Device/1844.png"
      },
      "functionCode": 1,
      "hardwareStatus": 1,
      "installDate": "2016-07-27",
      "inverterKw": 28,
      "key": "H70679",
      "lastAttempt": "2025-12-19T19:59:52Z",
      "lastChanged": "2025-12-12T23:36:36Z",
      "lastData": "900 W",
      "lastSuccess": "2025-12-19T19:58:40Z",
      "name": "INV-53 CP15 - (28kW)",
      "outOfService": false,
      "primaryMetric": "900 W",
      "primaryMetricName": 38,
      "serialNum": "1012981545459",
      "sortOrder": 63,
      "units": 8,
      "unitsScale": 1
    },
    {
      "capacityKW": 23,
      "communicationResult": 0,
      "dataRegisters": [
        {
          "dataType": 0,
          "formattedValue": "600 \tW",
          "name": "KwAC",
          "unit": 10,
          "value": 0.6000000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "246 \tMWh",
          "name": "KwhAC",
          "unit": 11,
          "value": 245752
        },
        {
          "dataType": 0,
          "formattedValue": "485 \tV",
          "name": "VacAB",
          "unit": 2,
          "value": 484.6
        },
        {
          "dataType": 0,
          "formattedValue": "483 \tV",
          "name": "VacBC",
          "unit": 2,
          "value": 482.6
        },
        {
          "dataType": 0,
          "formattedValue": "481 \tV",
          "name": "VacCA",
          "unit": 2,
          "value": 480.8
        },
        {
          "dataType": 0,
          "formattedValue": "1 \tA",
          "name": "IacA",
          "unit": 4,
          "value": 1
        },
        {
          "dataType": 0,
          "formattedValue": "1 \tA",
          "name": "IacB",
          "unit": 4,
          "value": 1
        },
        {
          "dataType": 0,
          "formattedValue": "1 \tA",
          "name": "IacC",
          "unit": 4,
          "value": 1
        },
        {
          "dataType": 0,
          "formattedValue": "695 \tV",
          "name": "Vdc1",
          "unit": 2,
          "value": 695
        },
        {
          "dataType": 0,
          "formattedValue": "0.3 \tA",
          "name": "Idc1",
          "unit": 4,
          "value": 0.30000000000000004
        },
        {
          "dataType": 0,
          "formattedValue": "697 \tV",
          "name": "Vdc2",
          "unit": 2,
          "value": 697.1
        },
        {
          "dataType": 0,
          "formattedValue": " \tV",
          "name": "Vdc3",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "0.3 \tA",
          "name": "Idc2",
          "unit": 4,
          "value": 0.30000000000000004
        },
        {
          "dataType": 0,
          "formattedValue": " \tA",
          "name": "Idc3",
          "unit": 4,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "0.6 \tA",
          "name": "Idc",
          "unit": 4,
          "value": 0.6000000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "696 \tV",
          "name": "Vdc",
          "unit": 2,
          "value": 696.0500000000001
        },
        {
          "dataType": 0,
          "formattedValue": "0.577 \tA",
          "name": "Iac",
          "unit": 4,
          "value": 0.577350538379377
        },
        {
          "dataType": 0,
          "formattedValue": "280 \tV",
          "name": "Vac",
          "unit": 2,
          "value": 279.7840708986461
        },
        {
          "dataType": 0,
          "formattedValue": "57.4 \t\u00b0F",
          "name": "DeviceTemp",
          "unit": 30,
          "value": 14.100000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "44.8 \t\u00b0F",
          "name": "InternalTemp",
          "unit": 30,
          "value": 7.1000000000000005
        },
        {
          "dataType": 0,
          "formattedValue": "31.8 \t\u00b0F",
          "name": "Temp_XMFR",
          "unit": 30,
          "value": -0.1
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Warning",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault0",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault1",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault2",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault3",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault4",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "43,690 \t ",
          "name": "OnOff",
          "unit": 0,
          "value": 43690
        },
        {
          "dataType": 0,
          "formattedValue": "100 \t%",
          "name": "LimitKW",
          "unit": 56,
          "value": 100
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rapm",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rrpm",
          "unit": 0,
          "value": 0
        }
      ],
      "defaultChart": 2,
      "description": "INV-54 CP15 - (23kW)",
      "deviceImage": {
        "contentType": "",
        "key": "",
        "lastChanged": null,
        "name": "PV_V1844",
        "uri": "https://www.alsoenergy.com/pub/Images/Device/1844.png"
      },
      "functionCode": 1,
      "hardwareStatus": 1,
      "installDate": "2016-07-27",
      "inverterKw": 23,
      "key": "H70680",
      "lastAttempt": "2025-12-19T19:59:52Z",
      "lastChanged": "2025-12-12T23:36:41Z",
      "lastData": "600 W",
      "lastSuccess": "2025-12-19T19:58:41Z",
      "name": "INV-54 CP15 - (23kW)",
      "outOfService": false,
      "primaryMetric": "600 W",
      "primaryMetricName": 38,
      "serialNum": "1012971545100",
      "sortOrder": 64,
      "units": 8,
      "unitsScale": 1
    },
    {
      "capacityKW": 23,
      "communicationResult": 0,
      "dataRegisters": [
        {
          "dataType": 0,
          "formattedValue": "700 \tW",
          "name": "KwAC",
          "unit": 10,
          "value": 0.7000000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "268 \tMWh",
          "name": "KwhAC",
          "unit": 11,
          "value": 268316
        },
        {
          "dataType": 0,
          "formattedValue": "484 \tV",
          "name": "VacAB",
          "unit": 2,
          "value": 483.5
        },
        {
          "dataType": 0,
          "formattedValue": "484 \tV",
          "name": "VacBC",
          "unit": 2,
          "value": 484.3
        },
        {
          "dataType": 0,
          "formattedValue": "482 \tV",
          "name": "VacCA",
          "unit": 2,
          "value": 482.1
        },
        {
          "dataType": 0,
          "formattedValue": "1 \tA",
          "name": "IacA",
          "unit": 4,
          "value": 1
        },
        {
          "dataType": 0,
          "formattedValue": "1 \tA",
          "name": "IacB",
          "unit": 4,
          "value": 1
        },
        {
          "dataType": 0,
          "formattedValue": "1 \tA",
          "name": "IacC",
          "unit": 4,
          "value": 1
        },
        {
          "dataType": 0,
          "formattedValue": "683 \tV",
          "name": "Vdc1",
          "unit": 2,
          "value": 682.6
        },
        {
          "dataType": 0,
          "formattedValue": "0.3 \tA",
          "name": "Idc1",
          "unit": 4,
          "value": 0.30000000000000004
        },
        {
          "dataType": 0,
          "formattedValue": "682 \tV",
          "name": "Vdc2",
          "unit": 2,
          "value": 682.2
        },
        {
          "dataType": 0,
          "formattedValue": " \tV",
          "name": "Vdc3",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "0.3 \tA",
          "name": "Idc2",
          "unit": 4,
          "value": 0.30000000000000004
        },
        {
          "dataType": 0,
          "formattedValue": " \tA",
          "name": "Idc3",
          "unit": 4,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "0.6 \tA",
          "name": "Idc",
          "unit": 4,
          "value": 0.6000000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "682 \tV",
          "name": "Vdc",
          "unit": 2,
          "value": 682.4000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "0.577 \tA",
          "name": "Iac",
          "unit": 4,
          "value": 0.577350538379377
        },
        {
          "dataType": 0,
          "formattedValue": "279 \tV",
          "name": "Vac",
          "unit": 2,
          "value": 279.14898530642876
        },
        {
          "dataType": 0,
          "formattedValue": "58.1 \t\u00b0F",
          "name": "DeviceTemp",
          "unit": 30,
          "value": 14.5
        },
        {
          "dataType": 0,
          "formattedValue": "45.1 \t\u00b0F",
          "name": "InternalTemp",
          "unit": 30,
          "value": 7.300000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "31.8 \t\u00b0F",
          "name": "Temp_XMFR",
          "unit": 30,
          "value": -0.1
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Warning",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault0",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault1",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault2",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault3",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault4",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "43,690 \t ",
          "name": "OnOff",
          "unit": 0,
          "value": 43690
        },
        {
          "dataType": 0,
          "formattedValue": "100 \t%",
          "name": "LimitKW",
          "unit": 56,
          "value": 100
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rapm",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rrpm",
          "unit": 0,
          "value": 0
        }
      ],
      "defaultChart": 2,
      "description": "INV-55 CP16 - (23kW)",
      "deviceImage": {
        "contentType": "",
        "key": "",
        "lastChanged": null,
        "name": "PV_V1844",
        "uri": "https://www.alsoenergy.com/pub/Images/Device/1844.png"
      },
      "functionCode": 1,
      "hardwareStatus": 1,
      "installDate": "2016-07-27",
      "inverterKw": 23,
      "key": "H70681",
      "lastAttempt": "2025-12-19T19:59:56Z",
      "lastChanged": "2025-12-12T23:36:46Z",
      "lastData": "700 W",
      "lastSuccess": "2025-12-19T19:58:42Z",
      "name": "INV-55 CP16 - (23kW)",
      "outOfService": false,
      "primaryMetric": "700 W",
      "primaryMetricName": 38,
      "serialNum": "1012971545126",
      "sortOrder": 65,
      "units": 8,
      "unitsScale": 1
    },
    {
      "capacityKW": 28,
      "communicationResult": 0,
      "dataRegisters": [
        {
          "dataType": 0,
          "formattedValue": "900 \tW",
          "name": "KwAC",
          "unit": 10,
          "value": 0.9
        },
        {
          "dataType": 0,
          "formattedValue": "318 \tMWh",
          "name": "KwhAC",
          "unit": 11,
          "value": 317512
        },
        {
          "dataType": 0,
          "formattedValue": "485 \tV",
          "name": "VacAB",
          "unit": 2,
          "value": 484.6
        },
        {
          "dataType": 0,
          "formattedValue": "485 \tV",
          "name": "VacBC",
          "unit": 2,
          "value": 484.90000000000003
        },
        {
          "dataType": 0,
          "formattedValue": "482 \tV",
          "name": "VacCA",
          "unit": 2,
          "value": 482.3
        },
        {
          "dataType": 0,
          "formattedValue": "1.3 \tA",
          "name": "IacA",
          "unit": 4,
          "value": 1.3
        },
        {
          "dataType": 0,
          "formattedValue": "1.2 \tA",
          "name": "IacB",
          "unit": 4,
          "value": 1.2000000000000002
        },
        {
          "dataType": 0,
          "formattedValue": "1.3 \tA",
          "name": "IacC",
          "unit": 4,
          "value": 1.3
        },
        {
          "dataType": 0,
          "formattedValue": "738 \tV",
          "name": "Vdc1",
          "unit": 2,
          "value": 738
        },
        {
          "dataType": 0,
          "formattedValue": "0.6 \tA",
          "name": "Idc1",
          "unit": 4,
          "value": 0.6000000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "727 \tV",
          "name": "Vdc2",
          "unit": 2,
          "value": 726.7
        },
        {
          "dataType": 0,
          "formattedValue": " \tV",
          "name": "Vdc3",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "0.5 \tA",
          "name": "Idc2",
          "unit": 4,
          "value": 0.5
        },
        {
          "dataType": 0,
          "formattedValue": " \tA",
          "name": "Idc3",
          "unit": 4,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "1.1 \tA",
          "name": "Idc",
          "unit": 4,
          "value": 1.1
        },
        {
          "dataType": 0,
          "formattedValue": "732 \tV",
          "name": "Vdc",
          "unit": 2,
          "value": 732.35
        },
        {
          "dataType": 0,
          "formattedValue": "0.731 \tA",
          "name": "Iac",
          "unit": 4,
          "value": 0.7313106819472109
        },
        {
          "dataType": 0,
          "formattedValue": "280 \tV",
          "name": "Vac",
          "unit": 2,
          "value": 279.7840708986461
        },
        {
          "dataType": 0,
          "formattedValue": "58.5 \t\u00b0F",
          "name": "DeviceTemp",
          "unit": 30,
          "value": 14.700000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "44.8 \t\u00b0F",
          "name": "InternalTemp",
          "unit": 30,
          "value": 7.1000000000000005
        },
        {
          "dataType": 0,
          "formattedValue": "31.8 \t\u00b0F",
          "name": "Temp_XMFR",
          "unit": 30,
          "value": -0.1
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Warning",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault0",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault1",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault2",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault3",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault4",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "43,690 \t ",
          "name": "OnOff",
          "unit": 0,
          "value": 43690
        },
        {
          "dataType": 0,
          "formattedValue": "100 \t%",
          "name": "LimitKW",
          "unit": 56,
          "value": 100
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rapm",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rrpm",
          "unit": 0,
          "value": 0
        }
      ],
      "defaultChart": 2,
      "description": "INV-56 CP16 - (28kW)",
      "deviceImage": {
        "contentType": "",
        "key": "",
        "lastChanged": null,
        "name": "PV_V1844",
        "uri": "https://www.alsoenergy.com/pub/Images/Device/1844.png"
      },
      "functionCode": 1,
      "hardwareStatus": 1,
      "installDate": "2016-07-30",
      "inverterKw": 28,
      "key": "H70682",
      "lastAttempt": "2025-12-19T19:59:59Z",
      "lastChanged": "2025-12-12T23:36:52Z",
      "lastData": "900 W",
      "lastSuccess": "2025-12-19T19:58:43Z",
      "name": "INV-56 CP16 - (28kW)",
      "outOfService": false,
      "primaryMetric": "900 W",
      "primaryMetricName": 38,
      "serialNum": "1012981549045",
      "sortOrder": 66,
      "units": 8,
      "unitsScale": 1
    },
    {
      "capacityKW": 28,
      "communicationResult": 0,
      "dataRegisters": [
        {
          "dataType": 0,
          "formattedValue": "900 \tW",
          "name": "KwAC",
          "unit": 10,
          "value": 0.9
        },
        {
          "dataType": 0,
          "formattedValue": "299 \tMWh",
          "name": "KwhAC",
          "unit": 11,
          "value": 298963
        },
        {
          "dataType": 0,
          "formattedValue": "483 \tV",
          "name": "VacAB",
          "unit": 2,
          "value": 483.20000000000005
        },
        {
          "dataType": 0,
          "formattedValue": "483 \tV",
          "name": "VacBC",
          "unit": 2,
          "value": 482.6
        },
        {
          "dataType": 0,
          "formattedValue": "481 \tV",
          "name": "VacCA",
          "unit": 2,
          "value": 481.1
        },
        {
          "dataType": 0,
          "formattedValue": "1.3 \tA",
          "name": "IacA",
          "unit": 4,
          "value": 1.3
        },
        {
          "dataType": 0,
          "formattedValue": "1.3 \tA",
          "name": "IacB",
          "unit": 4,
          "value": 1.3
        },
        {
          "dataType": 0,
          "formattedValue": "1.3 \tA",
          "name": "IacC",
          "unit": 4,
          "value": 1.3
        },
        {
          "dataType": 0,
          "formattedValue": "722 \tV",
          "name": "Vdc1",
          "unit": 2,
          "value": 722.4000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "0.5 \tA",
          "name": "Idc1",
          "unit": 4,
          "value": 0.5
        },
        {
          "dataType": 0,
          "formattedValue": "731 \tV",
          "name": "Vdc2",
          "unit": 2,
          "value": 730.9000000000001
        },
        {
          "dataType": 0,
          "formattedValue": " \tV",
          "name": "Vdc3",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "0.5 \tA",
          "name": "Idc2",
          "unit": 4,
          "value": 0.5
        },
        {
          "dataType": 0,
          "formattedValue": " \tA",
          "name": "Idc3",
          "unit": 4,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "1 \tA",
          "name": "Idc",
          "unit": 4,
          "value": 1
        },
        {
          "dataType": 0,
          "formattedValue": "727 \tV",
          "name": "Vdc",
          "unit": 2,
          "value": 726.6500000000001
        },
        {
          "dataType": 0,
          "formattedValue": "0.751 \tA",
          "name": "Iac",
          "unit": 4,
          "value": 0.7505556998931902
        },
        {
          "dataType": 0,
          "formattedValue": "279 \tV",
          "name": "Vac",
          "unit": 2,
          "value": 278.975780144915
        },
        {
          "dataType": 0,
          "formattedValue": "59.5 \t\u00b0F",
          "name": "DeviceTemp",
          "unit": 30,
          "value": 15.3
        },
        {
          "dataType": 0,
          "formattedValue": "45.7 \t\u00b0F",
          "name": "InternalTemp",
          "unit": 30,
          "value": 7.6000000000000005
        },
        {
          "dataType": 0,
          "formattedValue": "31.8 \t\u00b0F",
          "name": "Temp_XMFR",
          "unit": 30,
          "value": -0.1
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Warning",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault0",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault1",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault2",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault3",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault4",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "43,690 \t ",
          "name": "OnOff",
          "unit": 0,
          "value": 43690
        },
        {
          "dataType": 0,
          "formattedValue": "100 \t%",
          "name": "LimitKW",
          "unit": 56,
          "value": 100
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rapm",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rrpm",
          "unit": 0,
          "value": 0
        }
      ],
      "defaultChart": 2,
      "description": "INV-57 CP16 - (28kW)",
      "deviceImage": {
        "contentType": "",
        "key": "",
        "lastChanged": null,
        "name": "PV_V1844",
        "uri": "https://www.alsoenergy.com/pub/Images/Device/1844.png"
      },
      "functionCode": 1,
      "hardwareStatus": 1,
      "installDate": "2016-08-01",
      "inverterKw": 28,
      "key": "H70683",
      "lastAttempt": "2025-12-19T20:00:01Z",
      "lastChanged": "2025-12-12T23:39:19Z",
      "lastData": "900 W",
      "lastSuccess": "2025-12-19T19:58:44Z",
      "name": "INV-57 CP16 - (28kW)",
      "outOfService": false,
      "primaryMetric": "900 W",
      "primaryMetricName": 38,
      "serialNum": "1012981552006",
      "sortOrder": 67,
      "units": 8,
      "unitsScale": 1
    },
    {
      "capacityKW": 23,
      "communicationResult": 0,
      "dataRegisters": [
        {
          "dataType": 0,
          "formattedValue": "700 \tW",
          "name": "KwAC",
          "unit": 10,
          "value": 0.7000000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "277 \tMWh",
          "name": "KwhAC",
          "unit": 11,
          "value": 277132
        },
        {
          "dataType": 0,
          "formattedValue": "484 \tV",
          "name": "VacAB",
          "unit": 2,
          "value": 484.40000000000003
        },
        {
          "dataType": 0,
          "formattedValue": "485 \tV",
          "name": "VacBC",
          "unit": 2,
          "value": 485
        },
        {
          "dataType": 0,
          "formattedValue": "482 \tV",
          "name": "VacCA",
          "unit": 2,
          "value": 482
        },
        {
          "dataType": 0,
          "formattedValue": "1 \tA",
          "name": "IacA",
          "unit": 4,
          "value": 1
        },
        {
          "dataType": 0,
          "formattedValue": "1.1 \tA",
          "name": "IacB",
          "unit": 4,
          "value": 1.1
        },
        {
          "dataType": 0,
          "formattedValue": "1.1 \tA",
          "name": "IacC",
          "unit": 4,
          "value": 1.1
        },
        {
          "dataType": 0,
          "formattedValue": "700 \tV",
          "name": "Vdc1",
          "unit": 2,
          "value": 700
        },
        {
          "dataType": 0,
          "formattedValue": "0.3 \tA",
          "name": "Idc1",
          "unit": 4,
          "value": 0.30000000000000004
        },
        {
          "dataType": 0,
          "formattedValue": "700 \tV",
          "name": "Vdc2",
          "unit": 2,
          "value": 700
        },
        {
          "dataType": 0,
          "formattedValue": " \tV",
          "name": "Vdc3",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "0.3 \tA",
          "name": "Idc2",
          "unit": 4,
          "value": 0.30000000000000004
        },
        {
          "dataType": 0,
          "formattedValue": " \tA",
          "name": "Idc3",
          "unit": 4,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "0.6 \tA",
          "name": "Idc",
          "unit": 4,
          "value": 0.6000000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "700 \tV",
          "name": "Vdc",
          "unit": 2,
          "value": 700
        },
        {
          "dataType": 0,
          "formattedValue": "0.616 \tA",
          "name": "Iac",
          "unit": 4,
          "value": 0.6158405742713354
        },
        {
          "dataType": 0,
          "formattedValue": "280 \tV",
          "name": "Vac",
          "unit": 2,
          "value": 279.66860079097023
        },
        {
          "dataType": 0,
          "formattedValue": "57.7 \t\u00b0F",
          "name": "DeviceTemp",
          "unit": 30,
          "value": 14.3
        },
        {
          "dataType": 0,
          "formattedValue": "44.6 \t\u00b0F",
          "name": "InternalTemp",
          "unit": 30,
          "value": 7
        },
        {
          "dataType": 0,
          "formattedValue": "31.8 \t\u00b0F",
          "name": "Temp_XMFR",
          "unit": 30,
          "value": -0.1
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Warning",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault0",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault1",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault2",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault3",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault4",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "43,690 \t ",
          "name": "OnOff",
          "unit": 0,
          "value": 43690
        },
        {
          "dataType": 0,
          "formattedValue": "100 \t%",
          "name": "LimitKW",
          "unit": 56,
          "value": 100
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rapm",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rrpm",
          "unit": 0,
          "value": 0
        }
      ],
      "defaultChart": 2,
      "description": "INV-58 CP17 - (23kW)",
      "deviceImage": {
        "contentType": "",
        "key": "",
        "lastChanged": null,
        "name": "PV_V1844",
        "uri": "https://www.alsoenergy.com/pub/Images/Device/1844.png"
      },
      "functionCode": 1,
      "hardwareStatus": 1,
      "installDate": "2016-08-01",
      "inverterKw": 23,
      "key": "H70684",
      "lastAttempt": "2025-12-19T20:00:01Z",
      "lastChanged": "2025-12-12T23:39:24Z",
      "lastData": "700 W",
      "lastSuccess": "2025-12-19T19:58:45Z",
      "name": "INV-58 CP17 - (23kW)",
      "outOfService": false,
      "primaryMetric": "700 W",
      "primaryMetricName": 38,
      "serialNum": "1012971545112",
      "sortOrder": 68,
      "units": 8,
      "unitsScale": 1
    },
    {
      "capacityKW": 23,
      "communicationResult": 0,
      "dataRegisters": [
        {
          "dataType": 0,
          "formattedValue": "700 \tW",
          "name": "KwAC",
          "unit": 10,
          "value": 0.7000000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "271 \tMWh",
          "name": "KwhAC",
          "unit": 11,
          "value": 271499
        },
        {
          "dataType": 0,
          "formattedValue": "483 \tV",
          "name": "VacAB",
          "unit": 2,
          "value": 483.20000000000005
        },
        {
          "dataType": 0,
          "formattedValue": "484 \tV",
          "name": "VacBC",
          "unit": 2,
          "value": 484.1
        },
        {
          "dataType": 0,
          "formattedValue": "482 \tV",
          "name": "VacCA",
          "unit": 2,
          "value": 481.6
        },
        {
          "dataType": 0,
          "formattedValue": "1 \tA",
          "name": "IacA",
          "unit": 4,
          "value": 1
        },
        {
          "dataType": 0,
          "formattedValue": "1 \tA",
          "name": "IacB",
          "unit": 4,
          "value": 1
        },
        {
          "dataType": 0,
          "formattedValue": "1 \tA",
          "name": "IacC",
          "unit": 4,
          "value": 1
        },
        {
          "dataType": 0,
          "formattedValue": "694 \tV",
          "name": "Vdc1",
          "unit": 2,
          "value": 694
        },
        {
          "dataType": 0,
          "formattedValue": "0.4 \tA",
          "name": "Idc1",
          "unit": 4,
          "value": 0.4
        },
        {
          "dataType": 0,
          "formattedValue": "694 \tV",
          "name": "Vdc2",
          "unit": 2,
          "value": 694.1
        },
        {
          "dataType": 0,
          "formattedValue": " \tV",
          "name": "Vdc3",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "0.4 \tA",
          "name": "Idc2",
          "unit": 4,
          "value": 0.4
        },
        {
          "dataType": 0,
          "formattedValue": " \tA",
          "name": "Idc3",
          "unit": 4,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "0.8 \tA",
          "name": "Idc",
          "unit": 4,
          "value": 0.8
        },
        {
          "dataType": 0,
          "formattedValue": "694 \tV",
          "name": "Vdc",
          "unit": 2,
          "value": 694.0500000000001
        },
        {
          "dataType": 0,
          "formattedValue": "0.577 \tA",
          "name": "Iac",
          "unit": 4,
          "value": 0.577350538379377
        },
        {
          "dataType": 0,
          "formattedValue": "279 \tV",
          "name": "Vac",
          "unit": 2,
          "value": 278.975780144915
        },
        {
          "dataType": 0,
          "formattedValue": "58.8 \t\u00b0F",
          "name": "DeviceTemp",
          "unit": 30,
          "value": 14.9
        },
        {
          "dataType": 0,
          "formattedValue": "44.8 \t\u00b0F",
          "name": "InternalTemp",
          "unit": 30,
          "value": 7.1000000000000005
        },
        {
          "dataType": 0,
          "formattedValue": "31.8 \t\u00b0F",
          "name": "Temp_XMFR",
          "unit": 30,
          "value": -0.1
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Warning",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault0",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault1",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault2",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault3",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault4",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "43,690 \t ",
          "name": "OnOff",
          "unit": 0,
          "value": 43690
        },
        {
          "dataType": 0,
          "formattedValue": "100 \t%",
          "name": "LimitKW",
          "unit": 56,
          "value": 100
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rapm",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rrpm",
          "unit": 0,
          "value": 0
        }
      ],
      "defaultChart": 2,
      "description": "INV-59 CP17 - (23kW)",
      "deviceImage": {
        "contentType": "",
        "key": "",
        "lastChanged": null,
        "name": "PV_V1844",
        "uri": "https://www.alsoenergy.com/pub/Images/Device/1844.png"
      },
      "functionCode": 1,
      "hardwareStatus": 1,
      "installDate": "2016-08-01",
      "inverterKw": 23,
      "key": "H70685",
      "lastAttempt": "2025-12-19T20:00:08Z",
      "lastChanged": "2025-12-12T23:39:29Z",
      "lastData": "700 W",
      "lastSuccess": "2025-12-19T19:58:46Z",
      "name": "INV-59 CP17 - (23kW)",
      "outOfService": false,
      "primaryMetric": "700 W",
      "primaryMetricName": 38,
      "serialNum": "1012971545146",
      "sortOrder": 69,
      "units": 8,
      "unitsScale": 1
    },
    {
      "capacityKW": 23,
      "communicationResult": 0,
      "dataRegisters": [
        {
          "dataType": 0,
          "formattedValue": "700 \tW",
          "name": "KwAC",
          "unit": 10,
          "value": 0.7000000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "249 \tMWh",
          "name": "KwhAC",
          "unit": 11,
          "value": 248614
        },
        {
          "dataType": 0,
          "formattedValue": "485 \tV",
          "name": "VacAB",
          "unit": 2,
          "value": 484.6
        },
        {
          "dataType": 0,
          "formattedValue": "485 \tV",
          "name": "VacBC",
          "unit": 2,
          "value": 484.70000000000005
        },
        {
          "dataType": 0,
          "formattedValue": "482 \tV",
          "name": "VacCA",
          "unit": 2,
          "value": 482.1
        },
        {
          "dataType": 0,
          "formattedValue": "1 \tA",
          "name": "IacA",
          "unit": 4,
          "value": 1
        },
        {
          "dataType": 0,
          "formattedValue": "1 \tA",
          "name": "IacB",
          "unit": 4,
          "value": 1
        },
        {
          "dataType": 0,
          "formattedValue": "1 \tA",
          "name": "IacC",
          "unit": 4,
          "value": 1
        },
        {
          "dataType": 0,
          "formattedValue": "691 \tV",
          "name": "Vdc1",
          "unit": 2,
          "value": 690.9000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "0.4 \tA",
          "name": "Idc1",
          "unit": 4,
          "value": 0.4
        },
        {
          "dataType": 0,
          "formattedValue": "679 \tV",
          "name": "Vdc2",
          "unit": 2,
          "value": 678.6
        },
        {
          "dataType": 0,
          "formattedValue": " \tV",
          "name": "Vdc3",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "0.2 \tA",
          "name": "Idc2",
          "unit": 4,
          "value": 0.2
        },
        {
          "dataType": 0,
          "formattedValue": " \tA",
          "name": "Idc3",
          "unit": 4,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "0.6 \tA",
          "name": "Idc",
          "unit": 4,
          "value": 0.6000000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "685 \tV",
          "name": "Vdc",
          "unit": 2,
          "value": 684.75
        },
        {
          "dataType": 0,
          "formattedValue": "0.577 \tA",
          "name": "Iac",
          "unit": 4,
          "value": 0.577350538379377
        },
        {
          "dataType": 0,
          "formattedValue": "280 \tV",
          "name": "Vac",
          "unit": 2,
          "value": 279.7840708986461
        },
        {
          "dataType": 0,
          "formattedValue": "57.9 \t\u00b0F",
          "name": "DeviceTemp",
          "unit": 30,
          "value": 14.4
        },
        {
          "dataType": 0,
          "formattedValue": "44.8 \t\u00b0F",
          "name": "InternalTemp",
          "unit": 30,
          "value": 7.1000000000000005
        },
        {
          "dataType": 0,
          "formattedValue": "31.8 \t\u00b0F",
          "name": "Temp_XMFR",
          "unit": 30,
          "value": -0.1
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Warning",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault0",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault1",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault2",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault3",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault4",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "43,690 \t ",
          "name": "OnOff",
          "unit": 0,
          "value": 43690
        },
        {
          "dataType": 0,
          "formattedValue": "100 \t%",
          "name": "LimitKW",
          "unit": 56,
          "value": 100
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rapm",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rrpm",
          "unit": 0,
          "value": 0
        }
      ],
      "defaultChart": 2,
      "description": "INV-60 CP17 - (23kW)",
      "deviceImage": {
        "contentType": "",
        "key": "",
        "lastChanged": null,
        "name": "PV_V1844",
        "uri": "https://www.alsoenergy.com/pub/Images/Device/1844.png"
      },
      "functionCode": 1,
      "hardwareStatus": 1,
      "installDate": "2016-08-01",
      "inverterKw": 23,
      "key": "H70686",
      "lastAttempt": "2025-12-19T20:00:17Z",
      "lastChanged": "2025-12-12T23:39:34Z",
      "lastData": "700 W",
      "lastSuccess": "2025-12-19T19:58:47Z",
      "name": "INV-60 CP17 - (23kW)",
      "outOfService": false,
      "primaryMetric": "700 W",
      "primaryMetricName": 38,
      "serialNum": "1012971545036",
      "sortOrder": 70,
      "units": 8,
      "unitsScale": 1
    },
    {
      "capacityKW": 23,
      "communicationResult": 0,
      "dataRegisters": [
        {
          "dataType": 0,
          "formattedValue": "700 \tW",
          "name": "KwAC",
          "unit": 10,
          "value": 0.7000000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "270 \tMWh",
          "name": "KwhAC",
          "unit": 11,
          "value": 269803
        },
        {
          "dataType": 0,
          "formattedValue": "484 \tV",
          "name": "VacAB",
          "unit": 2,
          "value": 483.5
        },
        {
          "dataType": 0,
          "formattedValue": "484 \tV",
          "name": "VacBC",
          "unit": 2,
          "value": 484.3
        },
        {
          "dataType": 0,
          "formattedValue": "481 \tV",
          "name": "VacCA",
          "unit": 2,
          "value": 481.3
        },
        {
          "dataType": 0,
          "formattedValue": "1 \tA",
          "name": "IacA",
          "unit": 4,
          "value": 1
        },
        {
          "dataType": 0,
          "formattedValue": "1 \tA",
          "name": "IacB",
          "unit": 4,
          "value": 1
        },
        {
          "dataType": 0,
          "formattedValue": "1 \tA",
          "name": "IacC",
          "unit": 4,
          "value": 1
        },
        {
          "dataType": 0,
          "formattedValue": "674 \tV",
          "name": "Vdc1",
          "unit": 2,
          "value": 673.9000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "0.4 \tA",
          "name": "Idc1",
          "unit": 4,
          "value": 0.4
        },
        {
          "dataType": 0,
          "formattedValue": "673 \tV",
          "name": "Vdc2",
          "unit": 2,
          "value": 673.2
        },
        {
          "dataType": 0,
          "formattedValue": " \tV",
          "name": "Vdc3",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "0.4 \tA",
          "name": "Idc2",
          "unit": 4,
          "value": 0.4
        },
        {
          "dataType": 0,
          "formattedValue": " \tA",
          "name": "Idc3",
          "unit": 4,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "0.8 \tA",
          "name": "Idc",
          "unit": 4,
          "value": 0.8
        },
        {
          "dataType": 0,
          "formattedValue": "674 \tV",
          "name": "Vdc",
          "unit": 2,
          "value": 673.5500000000001
        },
        {
          "dataType": 0,
          "formattedValue": "0.577 \tA",
          "name": "Iac",
          "unit": 4,
          "value": 0.577350538379377
        },
        {
          "dataType": 0,
          "formattedValue": "279 \tV",
          "name": "Vac",
          "unit": 2,
          "value": 279.14898530642876
        },
        {
          "dataType": 0,
          "formattedValue": "55.6 \t\u00b0F",
          "name": "DeviceTemp",
          "unit": 30,
          "value": 13.100000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "44.2 \t\u00b0F",
          "name": "InternalTemp",
          "unit": 30,
          "value": 6.800000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "31.8 \t\u00b0F",
          "name": "Temp_XMFR",
          "unit": 30,
          "value": -0.1
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Warning",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault0",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault1",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault2",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault3",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault4",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "43,690 \t ",
          "name": "OnOff",
          "unit": 0,
          "value": 43690
        },
        {
          "dataType": 0,
          "formattedValue": "100 \t%",
          "name": "LimitKW",
          "unit": 56,
          "value": 100
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rapm",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rrpm",
          "unit": 0,
          "value": 0
        }
      ],
      "defaultChart": 2,
      "description": "INV-61 CP18 - (23kW)",
      "deviceImage": {
        "contentType": "",
        "key": "",
        "lastChanged": null,
        "name": "PV_V1844",
        "uri": "https://www.alsoenergy.com/pub/Images/Device/1844.png"
      },
      "functionCode": 1,
      "hardwareStatus": 1,
      "installDate": "2016-07-29",
      "inverterKw": 23,
      "key": "H70687",
      "lastAttempt": "2025-12-19T20:00:19Z",
      "lastChanged": "2025-12-12T23:39:39Z",
      "lastData": "700 W",
      "lastSuccess": "2025-12-19T19:58:48Z",
      "name": "INV-61 CP18 - (23kW)",
      "outOfService": false,
      "primaryMetric": "700 W",
      "primaryMetricName": 38,
      "serialNum": "1012971545105",
      "sortOrder": 71,
      "units": 8,
      "unitsScale": 1
    },
    {
      "capacityKW": 28,
      "communicationResult": 0,
      "dataRegisters": [
        {
          "dataType": 0,
          "formattedValue": "900 \tW",
          "name": "KwAC",
          "unit": 10,
          "value": 0.9
        },
        {
          "dataType": 0,
          "formattedValue": "317 \tMWh",
          "name": "KwhAC",
          "unit": 11,
          "value": 316732
        },
        {
          "dataType": 0,
          "formattedValue": "486 \tV",
          "name": "VacAB",
          "unit": 2,
          "value": 485.90000000000003
        },
        {
          "dataType": 0,
          "formattedValue": "485 \tV",
          "name": "VacBC",
          "unit": 2,
          "value": 485.1
        },
        {
          "dataType": 0,
          "formattedValue": "482 \tV",
          "name": "VacCA",
          "unit": 2,
          "value": 482.20000000000005
        },
        {
          "dataType": 0,
          "formattedValue": "1.2 \tA",
          "name": "IacA",
          "unit": 4,
          "value": 1.2000000000000002
        },
        {
          "dataType": 0,
          "formattedValue": "1.3 \tA",
          "name": "IacB",
          "unit": 4,
          "value": 1.3
        },
        {
          "dataType": 0,
          "formattedValue": "1 \tA",
          "name": "IacC",
          "unit": 4,
          "value": 1
        },
        {
          "dataType": 0,
          "formattedValue": "689 \tV",
          "name": "Vdc1",
          "unit": 2,
          "value": 688.7
        },
        {
          "dataType": 0,
          "formattedValue": "0.6 \tA",
          "name": "Idc1",
          "unit": 4,
          "value": 0.6000000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "682 \tV",
          "name": "Vdc2",
          "unit": 2,
          "value": 681.9000000000001
        },
        {
          "dataType": 0,
          "formattedValue": " \tV",
          "name": "Vdc3",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "0.5 \tA",
          "name": "Idc2",
          "unit": 4,
          "value": 0.5
        },
        {
          "dataType": 0,
          "formattedValue": " \tA",
          "name": "Idc3",
          "unit": 4,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "1.1 \tA",
          "name": "Idc",
          "unit": 4,
          "value": 1.1
        },
        {
          "dataType": 0,
          "formattedValue": "685 \tV",
          "name": "Vdc",
          "unit": 2,
          "value": 685.3000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "0.674 \tA",
          "name": "Iac",
          "unit": 4,
          "value": 0.6735756281092732
        },
        {
          "dataType": 0,
          "formattedValue": "281 \tV",
          "name": "Vac",
          "unit": 2,
          "value": 280.5346265985393
        },
        {
          "dataType": 0,
          "formattedValue": "61.7 \t\u00b0F",
          "name": "DeviceTemp",
          "unit": 30,
          "value": 16.5
        },
        {
          "dataType": 0,
          "formattedValue": "45.1 \t\u00b0F",
          "name": "InternalTemp",
          "unit": 30,
          "value": 7.300000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "31.8 \t\u00b0F",
          "name": "Temp_XMFR",
          "unit": 30,
          "value": -0.1
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Warning",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault0",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault1",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault2",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault3",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault4",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "43,690 \t ",
          "name": "OnOff",
          "unit": 0,
          "value": 43690
        },
        {
          "dataType": 0,
          "formattedValue": "100 \t%",
          "name": "LimitKW",
          "unit": 56,
          "value": 100
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rapm",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rrpm",
          "unit": 0,
          "value": 0
        }
      ],
      "defaultChart": 2,
      "description": "INV-62 CP18 - (28kW)",
      "deviceImage": {
        "contentType": "",
        "key": "",
        "lastChanged": null,
        "name": "PV_V1844",
        "uri": "https://www.alsoenergy.com/pub/Images/Device/1844.png"
      },
      "functionCode": 1,
      "hardwareStatus": 1,
      "installDate": "2016-07-25",
      "inverterKw": 28,
      "key": "H70688",
      "lastAttempt": "2025-12-19T20:00:27Z",
      "lastChanged": "2025-12-12T23:39:44Z",
      "lastData": "900 W",
      "lastSuccess": "2025-12-19T19:58:49Z",
      "name": "INV-62 CP18 - (28kW)",
      "outOfService": false,
      "primaryMetric": "900 W",
      "primaryMetricName": 38,
      "serialNum": "1012981550213",
      "sortOrder": 72,
      "units": 8,
      "unitsScale": 1
    },
    {
      "capacityKW": 36,
      "communicationResult": 0,
      "dataRegisters": [
        {
          "dataType": 0,
          "formattedValue": "1.3 \tkW",
          "name": "KwAC",
          "unit": 10,
          "value": 1.3
        },
        {
          "dataType": 0,
          "formattedValue": "438 \tMWh",
          "name": "KwhAC",
          "unit": 11,
          "value": 437981
        },
        {
          "dataType": 0,
          "formattedValue": "485 \tV",
          "name": "VacAB",
          "unit": 2,
          "value": 484.90000000000003
        },
        {
          "dataType": 0,
          "formattedValue": "484 \tV",
          "name": "VacBC",
          "unit": 2,
          "value": 484.40000000000003
        },
        {
          "dataType": 0,
          "formattedValue": "483 \tV",
          "name": "VacCA",
          "unit": 2,
          "value": 483.20000000000005
        },
        {
          "dataType": 0,
          "formattedValue": "1.5 \tA",
          "name": "IacA",
          "unit": 4,
          "value": 1.5
        },
        {
          "dataType": 0,
          "formattedValue": "1.5 \tA",
          "name": "IacB",
          "unit": 4,
          "value": 1.5
        },
        {
          "dataType": 0,
          "formattedValue": "1.5 \tA",
          "name": "IacC",
          "unit": 4,
          "value": 1.5
        },
        {
          "dataType": 0,
          "formattedValue": "686 \tV",
          "name": "Vdc1",
          "unit": 2,
          "value": 685.6
        },
        {
          "dataType": 0,
          "formattedValue": "0.8 \tA",
          "name": "Idc1",
          "unit": 4,
          "value": 0.8
        },
        {
          "dataType": 0,
          "formattedValue": "696 \tV",
          "name": "Vdc2",
          "unit": 2,
          "value": 696.4000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "0 \tV",
          "name": "Vdc3",
          "unit": 2,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0.8 \tA",
          "name": "Idc2",
          "unit": 4,
          "value": 0.8
        },
        {
          "dataType": 0,
          "formattedValue": "0 \tA",
          "name": "Idc3",
          "unit": 4,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "1.6 \tA",
          "name": "Idc",
          "unit": 4,
          "value": 1.6
        },
        {
          "dataType": 0,
          "formattedValue": "461 \tV",
          "name": "Vdc",
          "unit": 2,
          "value": 460.6666666666667
        },
        {
          "dataType": 0,
          "formattedValue": "0.866 \tA",
          "name": "Iac",
          "unit": 4,
          "value": 0.8660258075690656
        },
        {
          "dataType": 0,
          "formattedValue": "280 \tV",
          "name": "Vac",
          "unit": 2,
          "value": 279.9572760601599
        },
        {
          "dataType": 0,
          "formattedValue": "60.1 \t\u00b0F",
          "name": "DeviceTemp",
          "unit": 30,
          "value": 15.600000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "44.8 \t\u00b0F",
          "name": "InternalTemp",
          "unit": 30,
          "value": 7.1000000000000005
        },
        {
          "dataType": 0,
          "formattedValue": "31.8 \t\u00b0F",
          "name": "Temp_XMFR",
          "unit": 30,
          "value": -0.1
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Warning",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault0",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault1",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault2",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault3",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault4",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "43,690 \t ",
          "name": "OnOff",
          "unit": 0,
          "value": 43690
        },
        {
          "dataType": 0,
          "formattedValue": "100 \t%",
          "name": "LimitKW",
          "unit": 56,
          "value": 100
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rapm",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rrpm",
          "unit": 0,
          "value": 0
        }
      ],
      "defaultChart": 2,
      "description": "INV-63 CP19 - (36kW)",
      "deviceImage": {
        "contentType": "",
        "key": "",
        "lastChanged": null,
        "name": "PV_V1844",
        "uri": "https://www.alsoenergy.com/pub/Images/Device/1844.png"
      },
      "functionCode": 1,
      "hardwareStatus": 1,
      "installDate": "2016-07-27",
      "inverterKw": 36,
      "key": "H70689",
      "lastAttempt": "2025-12-19T20:00:31Z",
      "lastChanged": "2025-12-12T23:39:49Z",
      "lastData": "1.3 kW",
      "lastSuccess": "2025-12-19T19:58:50Z",
      "name": "INV-63 CP19 - (36kW)",
      "outOfService": false,
      "primaryMetric": "1.3 kW",
      "primaryMetricName": 38,
      "serialNum": "1012791548086",
      "sortOrder": 73,
      "units": 10,
      "unitsScale": 1000
    },
    {
      "capacityKW": 36,
      "communicationResult": 0,
      "dataRegisters": [
        {
          "dataType": 0,
          "formattedValue": "1.3 \tkW",
          "name": "KwAC",
          "unit": 10,
          "value": 1.3
        },
        {
          "dataType": 0,
          "formattedValue": "446 \tMWh",
          "name": "KwhAC",
          "unit": 11,
          "value": 446436
        },
        {
          "dataType": 0,
          "formattedValue": "485 \tV",
          "name": "VacAB",
          "unit": 2,
          "value": 484.8
        },
        {
          "dataType": 0,
          "formattedValue": "484 \tV",
          "name": "VacBC",
          "unit": 2,
          "value": 484.3
        },
        {
          "dataType": 0,
          "formattedValue": "483 \tV",
          "name": "VacCA",
          "unit": 2,
          "value": 482.90000000000003
        },
        {
          "dataType": 0,
          "formattedValue": "1.8 \tA",
          "name": "IacA",
          "unit": 4,
          "value": 1.8
        },
        {
          "dataType": 0,
          "formattedValue": "1.5 \tA",
          "name": "IacB",
          "unit": 4,
          "value": 1.5
        },
        {
          "dataType": 0,
          "formattedValue": "1.5 \tA",
          "name": "IacC",
          "unit": 4,
          "value": 1.5
        },
        {
          "dataType": 0,
          "formattedValue": "700 \tV",
          "name": "Vdc1",
          "unit": 2,
          "value": 700.3000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "0.9 \tA",
          "name": "Idc1",
          "unit": 4,
          "value": 0.9
        },
        {
          "dataType": 0,
          "formattedValue": "706 \tV",
          "name": "Vdc2",
          "unit": 2,
          "value": 706.1
        },
        {
          "dataType": 0,
          "formattedValue": "0 \tV",
          "name": "Vdc3",
          "unit": 2,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0.9 \tA",
          "name": "Idc2",
          "unit": 4,
          "value": 0.9
        },
        {
          "dataType": 0,
          "formattedValue": "0 \tA",
          "name": "Idc3",
          "unit": 4,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "1.8 \tA",
          "name": "Idc",
          "unit": 4,
          "value": 1.8
        },
        {
          "dataType": 0,
          "formattedValue": "469 \tV",
          "name": "Vdc",
          "unit": 2,
          "value": 468.8
        },
        {
          "dataType": 0,
          "formattedValue": "0.924 \tA",
          "name": "Iac",
          "unit": 4,
          "value": 0.9237608614070034
        },
        {
          "dataType": 0,
          "formattedValue": "280 \tV",
          "name": "Vac",
          "unit": 2,
          "value": 279.89954100632195
        },
        {
          "dataType": 0,
          "formattedValue": "59.2 \t\u00b0F",
          "name": "DeviceTemp",
          "unit": 30,
          "value": 15.100000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "45 \t\u00b0F",
          "name": "InternalTemp",
          "unit": 30,
          "value": 7.2
        },
        {
          "dataType": 0,
          "formattedValue": "31.8 \t\u00b0F",
          "name": "Temp_XMFR",
          "unit": 30,
          "value": -0.1
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Warning",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault0",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault1",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault2",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault3",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault4",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "43,690 \t ",
          "name": "OnOff",
          "unit": 0,
          "value": 43690
        },
        {
          "dataType": 0,
          "formattedValue": "100 \t%",
          "name": "LimitKW",
          "unit": 56,
          "value": 100
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rapm",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rrpm",
          "unit": 0,
          "value": 0
        }
      ],
      "defaultChart": 2,
      "description": "INV-64 CP20 - (36kW)",
      "deviceImage": {
        "contentType": "",
        "key": "",
        "lastChanged": null,
        "name": "PV_V1844",
        "uri": "https://www.alsoenergy.com/pub/Images/Device/1844.png"
      },
      "functionCode": 1,
      "hardwareStatus": 1,
      "installDate": "2016-07-19",
      "inverterKw": 36,
      "key": "H70690",
      "lastAttempt": "2025-12-19T20:00:32Z",
      "lastChanged": "2025-12-12T23:39:54Z",
      "lastData": "1.3 kW",
      "lastSuccess": "2025-12-19T19:58:51Z",
      "name": "INV-64 CP20 - (36kW)",
      "outOfService": false,
      "primaryMetric": "1.3 kW",
      "primaryMetricName": 38,
      "serialNum": "1012971541182",
      "sortOrder": 74,
      "units": 10,
      "unitsScale": 1000
    },
    {
      "capacityKW": 36,
      "communicationResult": 0,
      "dataRegisters": [
        {
          "dataType": 0,
          "formattedValue": "1.2 \tkW",
          "name": "KwAC",
          "unit": 10,
          "value": 1.2000000000000002
        },
        {
          "dataType": 0,
          "formattedValue": "391 \tMWh",
          "name": "KwhAC",
          "unit": 11,
          "value": 390854
        },
        {
          "dataType": 0,
          "formattedValue": "484 \tV",
          "name": "VacAB",
          "unit": 2,
          "value": 484.3
        },
        {
          "dataType": 0,
          "formattedValue": "484 \tV",
          "name": "VacBC",
          "unit": 2,
          "value": 484.3
        },
        {
          "dataType": 0,
          "formattedValue": "483 \tV",
          "name": "VacCA",
          "unit": 2,
          "value": 482.70000000000005
        },
        {
          "dataType": 0,
          "formattedValue": "1.5 \tA",
          "name": "IacA",
          "unit": 4,
          "value": 1.5
        },
        {
          "dataType": 0,
          "formattedValue": "1.3 \tA",
          "name": "IacB",
          "unit": 4,
          "value": 1.3
        },
        {
          "dataType": 0,
          "formattedValue": "1.5 \tA",
          "name": "IacC",
          "unit": 4,
          "value": 1.5
        },
        {
          "dataType": 0,
          "formattedValue": "613 \tV",
          "name": "Vdc1",
          "unit": 2,
          "value": 612.8000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "0.8 \tA",
          "name": "Idc1",
          "unit": 4,
          "value": 0.8
        },
        {
          "dataType": 0,
          "formattedValue": "608 \tV",
          "name": "Vdc2",
          "unit": 2,
          "value": 607.5
        },
        {
          "dataType": 0,
          "formattedValue": "0 \tV",
          "name": "Vdc3",
          "unit": 2,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0.7 \tA",
          "name": "Idc2",
          "unit": 4,
          "value": 0.7000000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "0 \tA",
          "name": "Idc3",
          "unit": 4,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "1.5 \tA",
          "name": "Idc",
          "unit": 4,
          "value": 1.5
        },
        {
          "dataType": 0,
          "formattedValue": "407 \tV",
          "name": "Vdc",
          "unit": 2,
          "value": 406.76666666666665
        },
        {
          "dataType": 0,
          "formattedValue": "0.828 \tA",
          "name": "Iac",
          "unit": 4,
          "value": 0.827535771677107
        },
        {
          "dataType": 0,
          "formattedValue": "280 \tV",
          "name": "Vac",
          "unit": 2,
          "value": 279.6108657371323
        },
        {
          "dataType": 0,
          "formattedValue": "55.2 \t\u00b0F",
          "name": "DeviceTemp",
          "unit": 30,
          "value": 12.9
        },
        {
          "dataType": 0,
          "formattedValue": "45 \t\u00b0F",
          "name": "InternalTemp",
          "unit": 30,
          "value": 7.2
        },
        {
          "dataType": 0,
          "formattedValue": "31.8 \t\u00b0F",
          "name": "Temp_XMFR",
          "unit": 30,
          "value": -0.1
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Warning",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault0",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault1",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault2",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault3",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault4",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "43,690 \t ",
          "name": "OnOff",
          "unit": 0,
          "value": 43690
        },
        {
          "dataType": 0,
          "formattedValue": "100 \t%",
          "name": "LimitKW",
          "unit": 56,
          "value": 100
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rapm",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rrpm",
          "unit": 0,
          "value": 0
        }
      ],
      "defaultChart": 2,
      "description": "INV-65 CP20 - (36kW)",
      "deviceImage": {
        "contentType": "",
        "key": "",
        "lastChanged": null,
        "name": "PV_V1844",
        "uri": "https://www.alsoenergy.com/pub/Images/Device/1844.png"
      },
      "functionCode": 1,
      "hardwareStatus": 1,
      "installDate": "2016-07-21",
      "inverterKw": 36,
      "key": "H70691",
      "lastAttempt": "2025-12-19T20:00:37Z",
      "lastChanged": "2025-12-12T23:39:58Z",
      "lastData": "1.2 kW",
      "lastSuccess": "2025-12-19T19:58:52Z",
      "name": "INV-65 CP20 - (36kW)",
      "outOfService": false,
      "primaryMetric": "1.2 kW",
      "primaryMetricName": 38,
      "serialNum": "1012791548183",
      "sortOrder": 75,
      "units": 10,
      "unitsScale": 1000
    },
    {
      "capacityKW": 23,
      "communicationResult": 0,
      "dataRegisters": [
        {
          "dataType": 0,
          "formattedValue": "400 \tW",
          "name": "KwAC",
          "unit": 10,
          "value": 0.4
        },
        {
          "dataType": 0,
          "formattedValue": "187 \tMWh",
          "name": "KwhAC",
          "unit": 11,
          "value": 187343
        },
        {
          "dataType": 0,
          "formattedValue": "483 \tV",
          "name": "VacAB",
          "unit": 2,
          "value": 482.6
        },
        {
          "dataType": 0,
          "formattedValue": "484 \tV",
          "name": "VacBC",
          "unit": 2,
          "value": 484.1
        },
        {
          "dataType": 0,
          "formattedValue": "481 \tV",
          "name": "VacCA",
          "unit": 2,
          "value": 481.1
        },
        {
          "dataType": 0,
          "formattedValue": "0.8 \tA",
          "name": "IacA",
          "unit": 4,
          "value": 0.8
        },
        {
          "dataType": 0,
          "formattedValue": "0.8 \tA",
          "name": "IacB",
          "unit": 4,
          "value": 0.8
        },
        {
          "dataType": 0,
          "formattedValue": "0.8 \tA",
          "name": "IacC",
          "unit": 4,
          "value": 0.8
        },
        {
          "dataType": 0,
          "formattedValue": "650 \tV",
          "name": "Vdc1",
          "unit": 2,
          "value": 650.1
        },
        {
          "dataType": 0,
          "formattedValue": "0.1 \tA",
          "name": "Idc1",
          "unit": 4,
          "value": 0.1
        },
        {
          "dataType": 0,
          "formattedValue": "649 \tV",
          "name": "Vdc2",
          "unit": 2,
          "value": 649
        },
        {
          "dataType": 0,
          "formattedValue": " \tV",
          "name": "Vdc3",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "0.1 \tA",
          "name": "Idc2",
          "unit": 4,
          "value": 0.1
        },
        {
          "dataType": 0,
          "formattedValue": " \tA",
          "name": "Idc3",
          "unit": 4,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "0.2 \tA",
          "name": "Idc",
          "unit": 4,
          "value": 0.2
        },
        {
          "dataType": 0,
          "formattedValue": "650 \tV",
          "name": "Vdc",
          "unit": 2,
          "value": 649.5500000000001
        },
        {
          "dataType": 0,
          "formattedValue": "0.462 \tA",
          "name": "Iac",
          "unit": 4,
          "value": 0.4618804307035017
        },
        {
          "dataType": 0,
          "formattedValue": "279 \tV",
          "name": "Vac",
          "unit": 2,
          "value": 278.62936982188734
        },
        {
          "dataType": 0,
          "formattedValue": "55 \t\u00b0F",
          "name": "DeviceTemp",
          "unit": 30,
          "value": 12.8
        },
        {
          "dataType": 0,
          "formattedValue": "44.2 \t\u00b0F",
          "name": "InternalTemp",
          "unit": 30,
          "value": 6.800000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "31.8 \t\u00b0F",
          "name": "Temp_XMFR",
          "unit": 30,
          "value": -0.1
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Warning",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault0",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault1",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault2",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault3",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault4",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "43,690 \t ",
          "name": "OnOff",
          "unit": 0,
          "value": 43690
        },
        {
          "dataType": 0,
          "formattedValue": "100 \t%",
          "name": "LimitKW",
          "unit": 56,
          "value": 100
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rapm",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rrpm",
          "unit": 0,
          "value": 0
        }
      ],
      "defaultChart": 2,
      "description": "INV-66 CP20 - (23kW)",
      "deviceImage": {
        "contentType": "",
        "key": "",
        "lastChanged": null,
        "name": "PV_V1844",
        "uri": "https://www.alsoenergy.com/pub/Images/Device/1844.png"
      },
      "functionCode": 1,
      "hardwareStatus": 1,
      "installDate": "2016-07-29",
      "inverterKw": 23,
      "key": "H70692",
      "lastAttempt": "2025-12-19T20:00:37Z",
      "lastChanged": "2025-12-12T23:40:03Z",
      "lastData": "400 W",
      "lastSuccess": "2025-12-19T19:58:53Z",
      "name": "INV-66 CP20 - (23kW)",
      "outOfService": false,
      "primaryMetric": "400 W",
      "primaryMetricName": 38,
      "serialNum": "1012791545161",
      "sortOrder": 76,
      "units": 8,
      "unitsScale": 1
    },
    {
      "capacityKW": 28,
      "communicationResult": 0,
      "dataRegisters": [
        {
          "dataType": 0,
          "formattedValue": "1.1 \tkW",
          "name": "KwAC",
          "unit": 10,
          "value": 1.1
        },
        {
          "dataType": 0,
          "formattedValue": "322 \tMWh",
          "name": "KwhAC",
          "unit": 11,
          "value": 322280
        },
        {
          "dataType": 0,
          "formattedValue": "484 \tV",
          "name": "VacAB",
          "unit": 2,
          "value": 484.3
        },
        {
          "dataType": 0,
          "formattedValue": "485 \tV",
          "name": "VacBC",
          "unit": 2,
          "value": 485.1
        },
        {
          "dataType": 0,
          "formattedValue": "483 \tV",
          "name": "VacCA",
          "unit": 2,
          "value": 483
        },
        {
          "dataType": 0,
          "formattedValue": "1.3 \tA",
          "name": "IacA",
          "unit": 4,
          "value": 1.3
        },
        {
          "dataType": 0,
          "formattedValue": "1.3 \tA",
          "name": "IacB",
          "unit": 4,
          "value": 1.3
        },
        {
          "dataType": 0,
          "formattedValue": "1.5 \tA",
          "name": "IacC",
          "unit": 4,
          "value": 1.5
        },
        {
          "dataType": 0,
          "formattedValue": "724 \tV",
          "name": "Vdc1",
          "unit": 2,
          "value": 723.7
        },
        {
          "dataType": 0,
          "formattedValue": "0.6 \tA",
          "name": "Idc1",
          "unit": 4,
          "value": 0.6000000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "719 \tV",
          "name": "Vdc2",
          "unit": 2,
          "value": 719.1
        },
        {
          "dataType": 0,
          "formattedValue": " \tV",
          "name": "Vdc3",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "0.7 \tA",
          "name": "Idc2",
          "unit": 4,
          "value": 0.7000000000000001
        },
        {
          "dataType": 0,
          "formattedValue": " \tA",
          "name": "Idc3",
          "unit": 4,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "1.3 \tA",
          "name": "Idc",
          "unit": 4,
          "value": 1.3
        },
        {
          "dataType": 0,
          "formattedValue": "721 \tV",
          "name": "Vdc",
          "unit": 2,
          "value": 721.4000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "0.789 \tA",
          "name": "Iac",
          "unit": 4,
          "value": 0.7890457357851487
        },
        {
          "dataType": 0,
          "formattedValue": "280 \tV",
          "name": "Vac",
          "unit": 2,
          "value": 279.6108657371323
        },
        {
          "dataType": 0,
          "formattedValue": "61.3 \t\u00b0F",
          "name": "DeviceTemp",
          "unit": 30,
          "value": 16.3
        },
        {
          "dataType": 0,
          "formattedValue": "44.8 \t\u00b0F",
          "name": "InternalTemp",
          "unit": 30,
          "value": 7.1000000000000005
        },
        {
          "dataType": 0,
          "formattedValue": "31.8 \t\u00b0F",
          "name": "Temp_XMFR",
          "unit": 30,
          "value": -0.1
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Warning",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault0",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault1",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault2",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault3",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault4",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "43,690 \t ",
          "name": "OnOff",
          "unit": 0,
          "value": 43690
        },
        {
          "dataType": 0,
          "formattedValue": "100 \t%",
          "name": "LimitKW",
          "unit": 56,
          "value": 100
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rapm",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rrpm",
          "unit": 0,
          "value": 0
        }
      ],
      "defaultChart": 2,
      "description": "INV-67 CP21 - (28kW)",
      "deviceImage": {
        "contentType": "",
        "key": "",
        "lastChanged": null,
        "name": "PV_V1844",
        "uri": "https://www.alsoenergy.com/pub/Images/Device/1844.png"
      },
      "functionCode": 1,
      "hardwareStatus": 1,
      "installDate": "2016-07-27",
      "inverterKw": 28,
      "key": "H70693",
      "lastAttempt": "2025-12-19T20:00:42Z",
      "lastChanged": "2025-12-12T23:40:08Z",
      "lastData": "1.1 kW",
      "lastSuccess": "2025-12-19T19:58:54Z",
      "name": "INV-67 CP21 - (28kW)",
      "outOfService": false,
      "primaryMetric": "1.1 kW",
      "primaryMetricName": 38,
      "serialNum": "1012981602059",
      "sortOrder": 77,
      "units": 10,
      "unitsScale": 1000
    },
    {
      "capacityKW": 36,
      "communicationResult": 0,
      "dataRegisters": [
        {
          "dataType": 0,
          "formattedValue": "800 \tW",
          "name": "KwAC",
          "unit": 10,
          "value": 0.8
        },
        {
          "dataType": 0,
          "formattedValue": "370 \tMWh",
          "name": "KwhAC",
          "unit": 11,
          "value": 369877
        },
        {
          "dataType": 0,
          "formattedValue": "484 \tV",
          "name": "VacAB",
          "unit": 2,
          "value": 484.20000000000005
        },
        {
          "dataType": 0,
          "formattedValue": "484 \tV",
          "name": "VacBC",
          "unit": 2,
          "value": 484.20000000000005
        },
        {
          "dataType": 0,
          "formattedValue": "484 \tV",
          "name": "VacCA",
          "unit": 2,
          "value": 483.8
        },
        {
          "dataType": 0,
          "formattedValue": "1 \tA",
          "name": "IacA",
          "unit": 4,
          "value": 1
        },
        {
          "dataType": 0,
          "formattedValue": "0.8 \tA",
          "name": "IacB",
          "unit": 4,
          "value": 0.8
        },
        {
          "dataType": 0,
          "formattedValue": "1.2 \tA",
          "name": "IacC",
          "unit": 4,
          "value": 1.2000000000000002
        },
        {
          "dataType": 0,
          "formattedValue": "693 \tV",
          "name": "Vdc1",
          "unit": 2,
          "value": 693.3000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "0.4 \tA",
          "name": "Idc1",
          "unit": 4,
          "value": 0.4
        },
        {
          "dataType": 0,
          "formattedValue": "671 \tV",
          "name": "Vdc2",
          "unit": 2,
          "value": 670.8000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "0 \tV",
          "name": "Vdc3",
          "unit": 2,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0.4 \tA",
          "name": "Idc2",
          "unit": 4,
          "value": 0.4
        },
        {
          "dataType": 0,
          "formattedValue": "0 \tA",
          "name": "Idc3",
          "unit": 4,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0.8 \tA",
          "name": "Idc",
          "unit": 4,
          "value": 0.8
        },
        {
          "dataType": 0,
          "formattedValue": "455 \tV",
          "name": "Vdc",
          "unit": 2,
          "value": 454.70000000000005
        },
        {
          "dataType": 0,
          "formattedValue": "0.577 \tA",
          "name": "Iac",
          "unit": 4,
          "value": 0.577350538379377
        },
        {
          "dataType": 0,
          "formattedValue": "280 \tV",
          "name": "Vac",
          "unit": 2,
          "value": 279.5531306832944
        },
        {
          "dataType": 0,
          "formattedValue": "63 \t\u00b0F",
          "name": "DeviceTemp",
          "unit": 30,
          "value": 17.2
        },
        {
          "dataType": 0,
          "formattedValue": "48.2 \t\u00b0F",
          "name": "InternalTemp",
          "unit": 30,
          "value": 9
        },
        {
          "dataType": 0,
          "formattedValue": "31.8 \t\u00b0F",
          "name": "Temp_XMFR",
          "unit": 30,
          "value": -0.1
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Warning",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault0",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault1",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault2",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault3",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault4",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "43,690 \t ",
          "name": "OnOff",
          "unit": 0,
          "value": 43690
        },
        {
          "dataType": 0,
          "formattedValue": "100 \t%",
          "name": "LimitKW",
          "unit": 56,
          "value": 100
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rapm",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rrpm",
          "unit": 0,
          "value": 0
        }
      ],
      "defaultChart": 2,
      "description": "INV-68 CP22 - (36kW)",
      "deviceImage": {
        "contentType": "",
        "key": "",
        "lastChanged": null,
        "name": "PV_V1844",
        "uri": "https://www.alsoenergy.com/pub/Images/Device/1844.png"
      },
      "functionCode": 1,
      "hardwareStatus": 1,
      "installDate": "2016-07-26",
      "inverterKw": 36,
      "key": "H70694",
      "lastAttempt": "2025-12-19T20:00:43Z",
      "lastChanged": "2025-12-12T23:40:13Z",
      "lastData": "800 W",
      "lastSuccess": "2025-12-19T19:58:55Z",
      "name": "INV-68 CP22 - (36kW)",
      "outOfService": false,
      "primaryMetric": "800 W",
      "primaryMetricName": 38,
      "serialNum": "1012791548156",
      "sortOrder": 78,
      "units": 8,
      "unitsScale": 1
    },
    {
      "capacityKW": 28,
      "communicationResult": 0,
      "dataRegisters": [
        {
          "dataType": 0,
          "formattedValue": "700 \tW",
          "name": "KwAC",
          "unit": 10,
          "value": 0.7000000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "304 \tMWh",
          "name": "KwhAC",
          "unit": 11,
          "value": 303722
        },
        {
          "dataType": 0,
          "formattedValue": "484 \tV",
          "name": "VacAB",
          "unit": 2,
          "value": 483.6
        },
        {
          "dataType": 0,
          "formattedValue": "485 \tV",
          "name": "VacBC",
          "unit": 2,
          "value": 484.6
        },
        {
          "dataType": 0,
          "formattedValue": "482 \tV",
          "name": "VacCA",
          "unit": 2,
          "value": 482.5
        },
        {
          "dataType": 0,
          "formattedValue": "1 \tA",
          "name": "IacA",
          "unit": 4,
          "value": 1
        },
        {
          "dataType": 0,
          "formattedValue": "1 \tA",
          "name": "IacB",
          "unit": 4,
          "value": 1
        },
        {
          "dataType": 0,
          "formattedValue": "1 \tA",
          "name": "IacC",
          "unit": 4,
          "value": 1
        },
        {
          "dataType": 0,
          "formattedValue": "681 \tV",
          "name": "Vdc1",
          "unit": 2,
          "value": 680.6
        },
        {
          "dataType": 0,
          "formattedValue": "0.4 \tA",
          "name": "Idc1",
          "unit": 4,
          "value": 0.4
        },
        {
          "dataType": 0,
          "formattedValue": "680 \tV",
          "name": "Vdc2",
          "unit": 2,
          "value": 680.3000000000001
        },
        {
          "dataType": 0,
          "formattedValue": " \tV",
          "name": "Vdc3",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "0.4 \tA",
          "name": "Idc2",
          "unit": 4,
          "value": 0.4
        },
        {
          "dataType": 0,
          "formattedValue": " \tA",
          "name": "Idc3",
          "unit": 4,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "0.8 \tA",
          "name": "Idc",
          "unit": 4,
          "value": 0.8
        },
        {
          "dataType": 0,
          "formattedValue": "680 \tV",
          "name": "Vdc",
          "unit": 2,
          "value": 680.45
        },
        {
          "dataType": 0,
          "formattedValue": "0.577 \tA",
          "name": "Iac",
          "unit": 4,
          "value": 0.577350538379377
        },
        {
          "dataType": 0,
          "formattedValue": "279 \tV",
          "name": "Vac",
          "unit": 2,
          "value": 279.20672036026673
        },
        {
          "dataType": 0,
          "formattedValue": "64.6 \t\u00b0F",
          "name": "DeviceTemp",
          "unit": 30,
          "value": 18.1
        },
        {
          "dataType": 0,
          "formattedValue": "49.3 \t\u00b0F",
          "name": "InternalTemp",
          "unit": 30,
          "value": 9.600000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "31.8 \t\u00b0F",
          "name": "Temp_XMFR",
          "unit": 30,
          "value": -0.1
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Warning",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault0",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault1",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault2",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault3",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault4",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "43,690 \t ",
          "name": "OnOff",
          "unit": 0,
          "value": 43690
        },
        {
          "dataType": 0,
          "formattedValue": "100 \t%",
          "name": "LimitKW",
          "unit": 56,
          "value": 100
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rapm",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rrpm",
          "unit": 0,
          "value": 0
        }
      ],
      "defaultChart": 2,
      "description": "INV-69 CP22 - (28kW)",
      "deviceImage": {
        "contentType": "",
        "key": "",
        "lastChanged": null,
        "name": "PV_V1844",
        "uri": "https://www.alsoenergy.com/pub/Images/Device/1844.png"
      },
      "functionCode": 1,
      "hardwareStatus": 1,
      "installDate": "2016-07-26",
      "inverterKw": 28,
      "key": "H70695",
      "lastAttempt": "2025-12-19T20:00:49Z",
      "lastChanged": "2025-12-12T23:42:56Z",
      "lastData": "700 W",
      "lastSuccess": "2025-12-19T20:00:37Z",
      "name": "INV-69 CP22 - (28kW)",
      "outOfService": false,
      "primaryMetric": "700 W",
      "primaryMetricName": 38,
      "serialNum": "1012981549001",
      "sortOrder": 79,
      "units": 8,
      "unitsScale": 1
    },
    {
      "capacityKW": 23,
      "communicationResult": 0,
      "dataRegisters": [
        {
          "dataType": 0,
          "formattedValue": "400 \tW",
          "name": "KwAC",
          "unit": 10,
          "value": 0.4
        },
        {
          "dataType": 0,
          "formattedValue": "223 \tMWh",
          "name": "KwhAC",
          "unit": 11,
          "value": 223238
        },
        {
          "dataType": 0,
          "formattedValue": "485 \tV",
          "name": "VacAB",
          "unit": 2,
          "value": 484.8
        },
        {
          "dataType": 0,
          "formattedValue": "485 \tV",
          "name": "VacBC",
          "unit": 2,
          "value": 484.70000000000005
        },
        {
          "dataType": 0,
          "formattedValue": "482 \tV",
          "name": "VacCA",
          "unit": 2,
          "value": 482.3
        },
        {
          "dataType": 0,
          "formattedValue": "0.9 \tA",
          "name": "IacA",
          "unit": 4,
          "value": 0.9
        },
        {
          "dataType": 0,
          "formattedValue": "0.8 \tA",
          "name": "IacB",
          "unit": 4,
          "value": 0.8
        },
        {
          "dataType": 0,
          "formattedValue": "0.8 \tA",
          "name": "IacC",
          "unit": 4,
          "value": 0.8
        },
        {
          "dataType": 0,
          "formattedValue": "655 \tV",
          "name": "Vdc1",
          "unit": 2,
          "value": 655
        },
        {
          "dataType": 0,
          "formattedValue": "0.2 \tA",
          "name": "Idc1",
          "unit": 4,
          "value": 0.2
        },
        {
          "dataType": 0,
          "formattedValue": "655 \tV",
          "name": "Vdc2",
          "unit": 2,
          "value": 654.6
        },
        {
          "dataType": 0,
          "formattedValue": " \tV",
          "name": "Vdc3",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "0.1 \tA",
          "name": "Idc2",
          "unit": 4,
          "value": 0.1
        },
        {
          "dataType": 0,
          "formattedValue": " \tA",
          "name": "Idc3",
          "unit": 4,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "0.3 \tA",
          "name": "Idc",
          "unit": 4,
          "value": 0.30000000000000004
        },
        {
          "dataType": 0,
          "formattedValue": "655 \tV",
          "name": "Vdc",
          "unit": 2,
          "value": 654.8000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "0.481 \tA",
          "name": "Iac",
          "unit": 4,
          "value": 0.48112544864948087
        },
        {
          "dataType": 0,
          "formattedValue": "280 \tV",
          "name": "Vac",
          "unit": 2,
          "value": 279.89954100632195
        },
        {
          "dataType": 0,
          "formattedValue": "62.2 \t\u00b0F",
          "name": "DeviceTemp",
          "unit": 30,
          "value": 16.8
        },
        {
          "dataType": 0,
          "formattedValue": "46 \t\u00b0F",
          "name": "InternalTemp",
          "unit": 30,
          "value": 7.800000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "31.8 \t\u00b0F",
          "name": "Temp_XMFR",
          "unit": 30,
          "value": -0.1
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Warning",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault0",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault1",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault2",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault3",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault4",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "43,690 \t ",
          "name": "OnOff",
          "unit": 0,
          "value": 43690
        },
        {
          "dataType": 0,
          "formattedValue": "100 \t%",
          "name": "LimitKW",
          "unit": 56,
          "value": 100
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rapm",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rrpm",
          "unit": 0,
          "value": 0
        }
      ],
      "defaultChart": 2,
      "description": "INV-70 CP22 - (23kW)",
      "deviceImage": {
        "contentType": "",
        "key": "",
        "lastChanged": null,
        "name": "PV_V1844",
        "uri": "https://www.alsoenergy.com/pub/Images/Device/1844.png"
      },
      "functionCode": 1,
      "hardwareStatus": 1,
      "installDate": "2016-07-24",
      "inverterKw": 23,
      "key": "H70696",
      "lastAttempt": "2025-12-19T20:00:53Z",
      "lastChanged": "2025-12-12T23:43:02Z",
      "lastData": "400 W",
      "lastSuccess": "2025-12-19T20:00:38Z",
      "name": "INV-70 CP22 - (23kW)",
      "outOfService": false,
      "primaryMetric": "400 W",
      "primaryMetricName": 38,
      "serialNum": "1012971545117",
      "sortOrder": 80,
      "units": 8,
      "unitsScale": 1
    },
    {
      "capacityKW": 23,
      "communicationResult": 0,
      "dataRegisters": [
        {
          "dataType": 0,
          "formattedValue": "300 \tW",
          "name": "KwAC",
          "unit": 10,
          "value": 0.30000000000000004
        },
        {
          "dataType": 0,
          "formattedValue": "202 \tMWh",
          "name": "KwhAC",
          "unit": 11,
          "value": 201908
        },
        {
          "dataType": 0,
          "formattedValue": "483 \tV",
          "name": "VacAB",
          "unit": 2,
          "value": 482.8
        },
        {
          "dataType": 0,
          "formattedValue": "484 \tV",
          "name": "VacBC",
          "unit": 2,
          "value": 484.3
        },
        {
          "dataType": 0,
          "formattedValue": "480 \tV",
          "name": "VacCA",
          "unit": 2,
          "value": 479.6
        },
        {
          "dataType": 0,
          "formattedValue": "0.8 \tA",
          "name": "IacA",
          "unit": 4,
          "value": 0.8
        },
        {
          "dataType": 0,
          "formattedValue": "0.8 \tA",
          "name": "IacB",
          "unit": 4,
          "value": 0.8
        },
        {
          "dataType": 0,
          "formattedValue": "0.8 \tA",
          "name": "IacC",
          "unit": 4,
          "value": 0.8
        },
        {
          "dataType": 0,
          "formattedValue": "617 \tV",
          "name": "Vdc1",
          "unit": 2,
          "value": 617.2
        },
        {
          "dataType": 0,
          "formattedValue": "0.1 \tA",
          "name": "Idc1",
          "unit": 4,
          "value": 0.1
        },
        {
          "dataType": 0,
          "formattedValue": "635 \tV",
          "name": "Vdc2",
          "unit": 2,
          "value": 634.8000000000001
        },
        {
          "dataType": 0,
          "formattedValue": " \tV",
          "name": "Vdc3",
          "unit": 2,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "0.1 \tA",
          "name": "Idc2",
          "unit": 4,
          "value": 0.1
        },
        {
          "dataType": 0,
          "formattedValue": " \tA",
          "name": "Idc3",
          "unit": 4,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "0.2 \tA",
          "name": "Idc",
          "unit": 4,
          "value": 0.2
        },
        {
          "dataType": 0,
          "formattedValue": "626 \tV",
          "name": "Vdc",
          "unit": 2,
          "value": 626
        },
        {
          "dataType": 0,
          "formattedValue": "0.462 \tA",
          "name": "Iac",
          "unit": 4,
          "value": 0.4618804307035017
        },
        {
          "dataType": 0,
          "formattedValue": "279 \tV",
          "name": "Vac",
          "unit": 2,
          "value": 278.7448399295632
        },
        {
          "dataType": 0,
          "formattedValue": "57.2 \t\u00b0F",
          "name": "DeviceTemp",
          "unit": 30,
          "value": 14
        },
        {
          "dataType": 0,
          "formattedValue": "46 \t\u00b0F",
          "name": "InternalTemp",
          "unit": 30,
          "value": 7.800000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "31.8 \t\u00b0F",
          "name": "Temp_XMFR",
          "unit": 30,
          "value": -0.1
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Warning",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault0",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault1",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault2",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault3",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "Fault4",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "43,690 \t ",
          "name": "OnOff",
          "unit": 0,
          "value": 43690
        },
        {
          "dataType": 0,
          "formattedValue": "100 \t%",
          "name": "LimitKW",
          "unit": 56,
          "value": 100
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rapm",
          "unit": 0,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "0 \t ",
          "name": "rrpm",
          "unit": 0,
          "value": 0
        }
      ],
      "defaultChart": 2,
      "description": "INV-71 CP23 - (23kW)",
      "deviceImage": {
        "contentType": "",
        "key": "",
        "lastChanged": null,
        "name": "PV_V1844",
        "uri": "https://www.alsoenergy.com/pub/Images/Device/1844.png"
      },
      "functionCode": 1,
      "hardwareStatus": 1,
      "installDate": "2016-07-26",
      "inverterKw": 23,
      "key": "H70697",
      "lastAttempt": "2025-12-19T20:00:53Z",
      "lastChanged": "2025-12-12T23:43:07Z",
      "lastData": "300 W",
      "lastSuccess": "2025-12-19T20:00:39Z",
      "name": "INV-71 CP23 - (23kW)",
      "outOfService": false,
      "primaryMetric": "300 W",
      "primaryMetricName": 38,
      "serialNum": "1012971603039",
      "sortOrder": 81,
      "units": 8,
      "unitsScale": 1
    },
    {
      "capacityKW": null,
      "communicationResult": 0,
      "dataRegisters": [
        {
          "dataType": 0,
          "formattedValue": "331 \t\u00b0",
          "name": "WindDirection",
          "unit": 40,
          "value": 331.25274725274727
        },
        {
          "dataType": 0,
          "formattedValue": "43.2 \t\u00b0F",
          "name": "TempF",
          "unit": 31,
          "value": 43.2130859375
        },
        {
          "dataType": 0,
          "formattedValue": "42.8 \t\u00b0F",
          "name": "Temp1",
          "unit": 31,
          "value": 42.785937499999996
        },
        {
          "dataType": 0,
          "formattedValue": "0 \tmph",
          "name": "WindSpeed",
          "unit": 50,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "78.8 \t\u00b0F",
          "name": "CabF",
          "unit": 30,
          "value": 26
        },
        {
          "dataType": 0,
          "formattedValue": "1,239 \tW/m\u00b2",
          "name": "MaxSun",
          "unit": 57,
          "value": 1238.7275790308197
        },
        {
          "dataType": 0,
          "formattedValue": "24.8 \tkW/m\u00b2",
          "name": "MaxSun2",
          "unit": 57,
          "value": 24752.47524752475
        }
      ],
      "defaultChart": 21,
      "description": "Weather Station (Standard)",
      "deviceImage": {
        "contentType": "",
        "key": "",
        "lastChanged": null,
        "name": "WS_V506",
        "uri": "https://www.alsoenergy.com/pub/Images/Device/506.png"
      },
      "functionCode": 5,
      "hardwareStatus": 1,
      "installDate": "2016-08-06",
      "inverterKw": 0,
      "key": "H70616",
      "lastAttempt": "2025-12-19T19:59:01Z",
      "lastChanged": "2017-07-24T19:45:01Z",
      "lastData": "42.8 \u00b0F",
      "lastSuccess": "2025-12-19T19:58:43Z",
      "name": "Weather Station (Standard)",
      "outOfService": false,
      "primaryMetric": "42.8 \u00b0F",
      "primaryMetricName": 105,
      "serialNum": "",
      "sortOrder": 91,
      "units": 31,
      "unitsScale": "NaN"
    },
    {
      "capacityKW": null,
      "communicationResult": 0,
      "dataRegisters": [
        {
          "dataType": 0,
          "formattedValue": "43.5 \t\u00b0F",
          "name": "Temp1",
          "unit": 31,
          "value": 43.537402343749996
        },
        {
          "dataType": 0,
          "formattedValue": "69.8 \t\u00b0F",
          "name": "CabF",
          "unit": 30,
          "value": 21
        },
        {
          "dataType": 0,
          "formattedValue": "2.45 \tkW/m\u00b2",
          "name": "MaxSun",
          "unit": 57,
          "value": 2448.316048222033
        },
        {
          "dataType": 0,
          "formattedValue": "2.45 \tkW/m\u00b2",
          "name": "MaxSun2",
          "unit": 57,
          "value": 2448.316048222033
        }
      ],
      "defaultChart": 21,
      "description": "Weather Station (Module)",
      "deviceImage": {
        "contentType": "",
        "key": "",
        "lastChanged": null,
        "name": "WS_V506",
        "uri": "https://www.alsoenergy.com/pub/Images/Device/506.png"
      },
      "functionCode": 5,
      "hardwareStatus": 1,
      "installDate": "2016-07-31",
      "inverterKw": 0,
      "key": "H70617",
      "lastAttempt": "2025-12-19T19:59:02Z",
      "lastChanged": "2017-10-17T15:42:09Z",
      "lastData": "43.5 \u00b0F",
      "lastSuccess": "2025-12-19T19:58:44Z",
      "name": "Weather Station (Module)",
      "outOfService": false,
      "primaryMetric": "43.5 \u00b0F",
      "primaryMetricName": 105,
      "serialNum": "",
      "sortOrder": 92,
      "units": 31,
      "unitsScale": "NaN"
    },
    {
      "capacityKW": null,
      "communicationResult": 0,
      "dataRegisters": [
        {
          "dataType": 0,
          "formattedValue": "1,463 \tin",
          "name": "Rain",
          "unit": 48,
          "value": 1462.8400000000001
        }
      ],
      "defaultChart": 21,
      "description": "Rain Gauge",
      "deviceImage": {
        "contentType": "",
        "key": "",
        "lastChanged": null,
        "name": "WS_V2059",
        "uri": "https://www.alsoenergy.com/pub/Images/Device/2059.png"
      },
      "functionCode": 5,
      "hardwareStatus": 1,
      "installDate": "2016-08-08",
      "inverterKw": 0,
      "key": "H70618",
      "lastAttempt": "2025-12-19T19:59:06Z",
      "lastChanged": "2021-03-23T06:37:35Z",
      "lastData": "",
      "lastSuccess": "2025-12-19T19:58:45Z",
      "name": "Rain Gauge",
      "outOfService": false,
      "primaryMetric": "",
      "primaryMetricName": 0,
      "serialNum": "",
      "sortOrder": 92,
      "units": 0,
      "unitsScale": "NaN"
    },
    {
      "capacityKW": null,
      "communicationResult": 0,
      "dataRegisters": [
        {
          "dataType": 0,
          "formattedValue": "36.5 \tW/m\u00b2",
          "name": "Sun",
          "unit": 57,
          "value": 36.5
        },
        {
          "dataType": 0,
          "formattedValue": "45.9 \t\u00b0F",
          "name": "Temp2",
          "unit": 30,
          "value": 7.700000000000003
        },
        {
          "dataType": 0,
          "formattedValue": "43.2 \t\u00b0F",
          "name": "Temp1",
          "unit": 30,
          "value": 6.200000000000003
        }
      ],
      "defaultChart": 21,
      "description": "IMT Reference Cell #1 - CP20",
      "deviceImage": {
        "contentType": "",
        "key": "",
        "lastChanged": null,
        "name": "WS_V250",
        "uri": "https://www.alsoenergy.com/pub/Images/Device/250.png"
      },
      "functionCode": 5,
      "hardwareStatus": 1,
      "installDate": "2016-07-31",
      "inverterKw": 0,
      "key": "H70619",
      "lastAttempt": "2025-12-19T19:59:13Z",
      "lastChanged": "2018-07-28T21:56:59Z",
      "lastData": "36.5 W/m\u00b2",
      "lastSuccess": "2025-12-19T19:58:46Z",
      "name": "IMT Reference Cell #1 - CP20",
      "outOfService": false,
      "primaryMetric": "36.5 W/m\u00b2",
      "primaryMetricName": 108,
      "serialNum": "485-32003-05-16270941",
      "sortOrder": 93,
      "units": 57,
      "unitsScale": 1
    },
    {
      "capacityKW": null,
      "communicationResult": 0,
      "dataRegisters": [
        {
          "dataType": 0,
          "formattedValue": "36.7 \tW/m\u00b2",
          "name": "Sun",
          "unit": 57,
          "value": 36.7
        },
        {
          "dataType": 0,
          "formattedValue": "46 \t\u00b0F",
          "name": "Temp2",
          "unit": 30,
          "value": 7.800000000000004
        },
        {
          "dataType": 0,
          "formattedValue": "43.7 \t\u00b0F",
          "name": "Temp1",
          "unit": 30,
          "value": 6.5
        }
      ],
      "defaultChart": 21,
      "description": "IMT Reference Cell #2 - CP22",
      "deviceImage": {
        "contentType": "",
        "key": "",
        "lastChanged": null,
        "name": "WS_V250",
        "uri": "https://www.alsoenergy.com/pub/Images/Device/250.png"
      },
      "functionCode": 5,
      "hardwareStatus": 1,
      "installDate": "2016-08-05",
      "inverterKw": 0,
      "key": "H70620",
      "lastAttempt": "2025-12-19T19:59:17Z",
      "lastChanged": "2018-07-28T21:57:06Z",
      "lastData": "36.7 W/m\u00b2",
      "lastSuccess": "2025-12-19T19:58:47Z",
      "name": "IMT Reference Cell #2 - CP22",
      "outOfService": false,
      "primaryMetric": "36.7 W/m\u00b2",
      "primaryMetricName": 108,
      "serialNum": "485-32003-05-16240799",
      "sortOrder": 94,
      "units": 57,
      "unitsScale": 1
    },
    {
      "capacityKW": null,
      "communicationResult": 0,
      "dataRegisters": [
        {
          "dataType": 0,
          "formattedValue": "36.7 \tW/m\u00b2",
          "name": "Sun",
          "unit": 57,
          "value": 36.7
        },
        {
          "dataType": 0,
          "formattedValue": "45.9 \t\u00b0F",
          "name": "Temp2",
          "unit": 30,
          "value": 7.700000000000003
        }
      ],
      "defaultChart": 21,
      "description": "IMT Reference Cell #3 - CP12",
      "deviceImage": {
        "contentType": "",
        "key": "",
        "lastChanged": null,
        "name": "WS_V250",
        "uri": "https://www.alsoenergy.com/pub/Images/Device/250.png"
      },
      "functionCode": 5,
      "hardwareStatus": 1,
      "installDate": "2016-08-07",
      "inverterKw": 0,
      "key": "H70621",
      "lastAttempt": "2025-12-19T19:59:14Z",
      "lastChanged": "2017-06-13T15:26:23Z",
      "lastData": "36.7 W/m\u00b2",
      "lastSuccess": "2025-12-19T19:58:48Z",
      "name": "IMT Reference Cell #3 - CP12",
      "outOfService": false,
      "primaryMetric": "36.7 W/m\u00b2",
      "primaryMetricName": 108,
      "serialNum": "485-32003-05-16160507",
      "sortOrder": 95,
      "units": 57,
      "unitsScale": 1
    },
    {
      "capacityKW": 0,
      "communicationResult": 0,
      "dataRegisters": [
        {
          "dataType": 0,
          "formattedValue": "29 \tW/m\u00b2",
          "name": "Sun",
          "unit": 57,
          "value": 29.01
        },
        {
          "dataType": 0,
          "formattedValue": "48.1 \t\u00b0F",
          "name": "bodyTemp",
          "unit": 30,
          "value": 8.97
        },
        {
          "dataType": 0,
          "formattedValue": "48.8 \t\u00b0F",
          "name": "temp",
          "unit": 30,
          "value": 9.31
        },
        {
          "dataType": 0,
          "formattedValue": "10.2 \t\u00b0",
          "name": "tilt",
          "unit": 40,
          "value": 10.25
        },
        {
          "dataType": 0,
          "formattedValue": "9,084 \t ",
          "name": "RPM",
          "unit": 1,
          "value": 9084
        },
        {
          "dataType": 0,
          "formattedValue": "1.54 \tW",
          "name": "heat",
          "unit": 8,
          "value": 1.545
        }
      ],
      "defaultChart": 21,
      "description": "SR-30 (POA) (158\u00b0/10\u00b0)",
      "deviceImage": {
        "contentType": "",
        "key": "",
        "lastChanged": null,
        "name": "WS_V1581",
        "uri": "https://www.alsoenergy.com/pub/Images/Device/1581.png"
      },
      "functionCode": 5,
      "hardwareStatus": 1,
      "installDate": "2016-08-31",
      "inverterKw": 0,
      "key": "H73009",
      "lastAttempt": "2025-12-19T20:00:34Z",
      "lastChanged": "2025-09-24T15:41:22Z",
      "lastData": "29 W/m\u00b2",
      "lastSuccess": "2025-12-19T20:00:17Z",
      "name": "SR-30 (POA) (158\u00b0/10\u00b0)",
      "outOfService": false,
      "primaryMetric": "29 W/m\u00b2",
      "primaryMetricName": 108,
      "serialNum": "32312",
      "sortOrder": 96,
      "units": 57,
      "unitsScale": 1
    },
    {
      "capacityKW": 0,
      "communicationResult": 0,
      "dataRegisters": [
        {
          "dataType": 0,
          "formattedValue": "29.4 \tW/m\u00b2",
          "name": "Sun2",
          "unit": 57,
          "value": 29.37
        },
        {
          "dataType": 0,
          "formattedValue": "48.8 \t\u00b0F",
          "name": "bodyTemp",
          "unit": 30,
          "value": 9.32
        },
        {
          "dataType": 0,
          "formattedValue": "49.2 \t\u00b0F",
          "name": "temp",
          "unit": 30,
          "value": 9.540000000000001
        },
        {
          "dataType": 0,
          "formattedValue": "1.77 \t\u00b0",
          "name": "tilt",
          "unit": 40,
          "value": 1.77
        },
        {
          "dataType": 0,
          "formattedValue": "9,127 \t ",
          "name": "RPM",
          "unit": 1,
          "value": 9127
        },
        {
          "dataType": 0,
          "formattedValue": "1.62 \tW",
          "name": "heat",
          "unit": 8,
          "value": 1.62
        }
      ],
      "defaultChart": 21,
      "description": "SR-30 (GHI 1)",
      "deviceImage": {
        "contentType": "",
        "key": "",
        "lastChanged": null,
        "name": "WS_V1581",
        "uri": "https://www.alsoenergy.com/pub/Images/Device/1581.png"
      },
      "functionCode": 5,
      "hardwareStatus": 1,
      "installDate": "2016-08-31",
      "inverterKw": 0,
      "key": "H73010",
      "lastAttempt": "2025-12-19T20:00:39Z",
      "lastChanged": "2025-09-24T15:41:47Z",
      "lastData": "29.4 W/m\u00b2",
      "lastSuccess": "2025-12-19T20:00:18Z",
      "name": "SR-30 (GHI 1)",
      "outOfService": false,
      "primaryMetric": "29.4 W/m\u00b2",
      "primaryMetricName": 114,
      "serialNum": "32318",
      "sortOrder": 97,
      "units": 57,
      "unitsScale": 1
    },
    {
      "capacityKW": 0,
      "communicationResult": 0,
      "dataRegisters": [
        {
          "dataType": 0,
          "formattedValue": "29.4 \tW/m\u00b2",
          "name": "Sun2",
          "unit": 57,
          "value": 29.36
        },
        {
          "dataType": 0,
          "formattedValue": "48.3 \t\u00b0F",
          "name": "bodyTemp",
          "unit": 30,
          "value": 9.03
        },
        {
          "dataType": 0,
          "formattedValue": "48.7 \t\u00b0F",
          "name": "temp",
          "unit": 30,
          "value": 9.28
        },
        {
          "dataType": 0,
          "formattedValue": "0.92 \t\u00b0",
          "name": "tilt",
          "unit": 40,
          "value": 0.92
        },
        {
          "dataType": 0,
          "formattedValue": "9,254 \t ",
          "name": "RPM",
          "unit": 1,
          "value": 9254
        },
        {
          "dataType": 0,
          "formattedValue": "1.6 \tW",
          "name": "heat",
          "unit": 8,
          "value": 1.6
        }
      ],
      "defaultChart": 21,
      "description": "SR-30 (GHI 2)",
      "deviceImage": {
        "contentType": "",
        "key": "",
        "lastChanged": null,
        "name": "WS_V1581",
        "uri": "https://www.alsoenergy.com/pub/Images/Device/1581.png"
      },
      "functionCode": 5,
      "hardwareStatus": 1,
      "installDate": "2017-10-11",
      "inverterKw": 0,
      "key": "H116295",
      "lastAttempt": "2025-12-19T20:00:44Z",
      "lastChanged": "2025-09-24T15:54:33Z",
      "lastData": "29.4 W/m\u00b2",
      "lastSuccess": "2025-12-19T20:00:18Z",
      "name": "SR-30 (GHI 2)",
      "outOfService": false,
      "primaryMetric": "29.4 W/m\u00b2",
      "primaryMetricName": 114,
      "serialNum": "32320",
      "sortOrder": 98,
      "units": 57,
      "unitsScale": 1
    },
    {
      "capacityKW": null,
      "communicationResult": 0,
      "dataRegisters": [
        {
          "dataType": 0,
          "formattedValue": "\u2014",
          "name": "VIghi",
          "unit": 57,
          "value": "NaN"
        }
      ],
      "defaultChart": 21,
      "description": "Locus Virtual GHI",
      "deviceImage": {
        "contentType": "",
        "key": "",
        "lastChanged": null,
        "name": "WS_V2693",
        "uri": "https://www.alsoenergy.com/pub/Images/Device/2693.png"
      },
      "functionCode": 5,
      "hardwareStatus": 1,
      "installDate": "2018-11-15",
      "inverterKw": 0,
      "key": "H159633",
      "lastAttempt": null,
      "lastChanged": "2018-11-16T03:27:03Z",
      "lastData": "",
      "lastSuccess": null,
      "name": "Locus Virtual GHI",
      "outOfService": false,
      "primaryMetric": "",
      "primaryMetricName": 0,
      "serialNum": "",
      "sortOrder": 0,
      "units": 57,
      "unitsScale": 1
    },
    {
      "capacityKW": null,
      "communicationResult": 0,
      "dataRegisters": [
        {
          "dataType": 0,
          "formattedValue": "\u2014",
          "name": "WindDirection",
          "unit": 40,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "\u2014",
          "name": "GHI",
          "unit": 57,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "\u2014",
          "name": "DNI",
          "unit": 57,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "\u2014",
          "name": "DHI",
          "unit": 57,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "\u2014",
          "name": "Ambient",
          "unit": 31,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "\u2014",
          "name": "WindSpeed",
          "unit": 50,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "\u2014",
          "name": "Rain",
          "unit": 48,
          "value": "NaN"
        },
        {
          "dataType": 0,
          "formattedValue": "\u2014",
          "name": "Snow",
          "unit": 48,
          "value": "NaN"
        }
      ],
      "defaultChart": 21,
      "description": "Solar Anywhere (extended)",
      "deviceImage": {
        "contentType": "",
        "key": "",
        "lastChanged": null,
        "name": "WS_V19015",
        "uri": "https://www.alsoenergy.com/pub/Images/weather.png"
      },
      "functionCode": 5,
      "hardwareStatus": 1,
      "installDate": "2022-01-14",
      "inverterKw": 0,
      "key": "H356123",
      "lastAttempt": null,
      "lastChanged": "2022-01-13T19:44:51Z",
      "lastData": "",
      "lastSuccess": null,
      "name": "Solar Anywhere (extended)",
      "outOfService": false,
      "primaryMetric": "",
      "primaryMetricName": 0,
      "serialNum": "",
      "sortOrder": 0,
      "units": 31,
      "unitsScale": "NaN"
    },
    {
      "capacityKW": null,
      "communicationResult": 0,
      "dataRegisters": [
        {
          "dataType": 0,
          "formattedValue": "295 \t\u00b0",
          "name": "WindDirection",
          "unit": 40,
          "value": 295
        },
        {
          "dataType": 0,
          "formattedValue": "24 \tW/m\u00b2",
          "name": "GHI",
          "unit": 57,
          "value": 24
        },
        {
          "dataType": 0,
          "formattedValue": "0 \tW/m\u00b2",
          "name": "DNI",
          "unit": 57,
          "value": 0
        },
        {
          "dataType": 0,
          "formattedValue": "24 \tW/m\u00b2",
          "name": "DHI",
          "unit": 57,
          "value": 24
        },
        {
          "dataType": 0,
          "formattedValue": "41 \t\u00b0F",
          "name": "Ambient",
          "unit": 31,
          "value": 41
        },
        {
          "dataType": 0,
          "formattedValue": "6.04 \tmph",
          "name": "WindSpeed",
          "unit": 50,
          "value": 6.039728164672852
        },
        {
          "dataType": 0,
          "formattedValue": "0.02 \tin",
          "name": "Snow",
          "unit": 48,
          "value": 0.019685039296746254
        }
      ],
      "defaultChart": 21,
      "description": "Solcast Virtual Weather Station",
      "deviceImage": {
        "contentType": "",
        "key": "",
        "lastChanged": null,
        "name": "WS_V19015",
        "uri": "https://www.alsoenergy.com/pub/Images/weather.png"
      },
      "functionCode": 5,
      "hardwareStatus": 1,
      "installDate": "2023-01-24",
      "inverterKw": 0,
      "key": "H430229",
      "lastAttempt": "2025-12-19T19:46:58Z",
      "lastChanged": "2023-01-24T06:13:56Z",
      "lastData": "24 W/m\u00b2",
      "lastSuccess": "2025-12-19T19:45:00Z",
      "name": "Solcast Virtual Weather Station",
      "outOfService": false,
      "primaryMetric": "24 W/m\u00b2",
      "primaryMetricName": 115,
      "serialNum": "",
      "sortOrder": 0,
      "units": 57,
      "unitsScale": 1
    }
  ],
  "key": "S38292",
  "lastChanged": "2025-12-19T20:01:09Z",
  "timeZone": ""
}
```

