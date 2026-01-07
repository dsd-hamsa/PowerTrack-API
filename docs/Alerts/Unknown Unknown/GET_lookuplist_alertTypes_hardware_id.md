<a id="top"></a>
# /api/lookuplist/alertTypes/{hardware_id}

[← Back to Index](../logs.md)

**Methods:** GET  
**Status Codes:** 200, 200, 200, 200  

## Table of Contents

- [Alert Type: General](#alert-type-general)
- [Example](#example)

## Alert Type: General

```json
{
  "type": "object",
  "properties": {
    "description": {
      "type": "string"
    },
    "deviceIds": {
      "type": "array",
      "items": {
        "type": "unknown"
      }
    },
    "functionCodes": {
      "type": "object",
      "properties": {}
    },
    "name": {
      "type": "string"
    },
    "value": {
      "type": "string"
    }
  }
}
```

[Return to top](#top)

## Example

**Request:**

```http
GET /api/lookuplist/alertTypes/H511568
Accept: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
referer: https://apps.alsoenergy.com/powertrack/H511568/administration/alertsettings
```

**Response:**

```json
[
  {
    "description": "Always generate an alert (for testing.)",
    "deviceIds": [],
    "functionCodes": null,
    "name": "Always alert",
    "value": "AI248"
  },
  {
    "description": "Generate an alert for how a register value compares to a setpoint.",
    "deviceIds": [],
    "functionCodes": null,
    "name": "Data Comparison Alert",
    "value": "AI443"
  },
  {
    "description": "Generate an alert if a register value is outside of the specified range.",
    "deviceIds": [],
    "functionCodes": null,
    "name": "Data range alert",
    "value": "AI399"
  },
  {
    "description": "Detects when a device is not talking to the data logger, or invalid data is received from the device.",
    "deviceIds": [],
    "functionCodes": null,
    "name": "Device communication",
    "value": "AI250"
  },
  {
    "description": "Detects missing communication from a device that uploads directly (without a data logger or gateway). NOTE: This alert will trigger after the expected communication delay (a built-in constant) plus the Threshold.  To override the expected communication delay, add a Setting named \"UploadRateMins\" (type = integer) and set it to the maximum number of minutes expected between uploads.  The alert will trigger if an upload doesn't occur within the total amount of time specified by the UploadRateMins setting plus the Threshold.",
    "deviceIds": [],
    "functionCodes": null,
    "name": "Device heartbeat",
    "value": "AI344"
  },
  {
    "description": "SUNGROW SG60KU Draker Alerts.",
    "deviceIds": [],
    "functionCodes": null,
    "name": "Draker SUNGROW SG60KU",
    "value": "AI812"
  },
  {
    "description": "Detects missing communication from a device that uploads directly (without a data logger or gateway). The default delay has been up updated (diff from 344) to accomodate residential egauge installs.",
    "deviceIds": [],
    "functionCodes": null,
    "name": "Egauge Heartbeat Check for Guam",
    "value": "AI517"
  },
  {
    "description": "Reports changes in energy readings that exceed the device offset settings",
    "deviceIds": [],
    "functionCodes": null,
    "name": "Energy check",
    "value": "AI352"
  },
  {
    "description": "String Alert for Huawei Sun 2000 with 14 DC Strings.\rCustom Alert for the Project La Victoria, PTW.eu\rUsed for Inverters with 12 Strings Connected, but in tis Case String 5 and String 12 are not connected",
    "deviceIds": [],
    "functionCodes": null,
    "name": "Huawei DC String Alert (14 String DC)_LaVictoria#3",
    "value": "AI2812"
  },
  {
    "description": "Generate an alert if the inverter is not running for 60 minutes while the irradiance exceeds a threshold.",
    "deviceIds": [],
    "functionCodes": null,
    "name": "Inverter / irradiance check",
    "value": "AI362"
  },
  {
    "description": "Generate an alert if the inverter is not running while the irradiance exceeds a threshold of 100M/W2 on POA",
    "deviceIds": [],
    "functionCodes": null,
    "name": "Inverter / irradiance check Altiplano-LaPuna",
    "value": "AI2485"
  },
  {
    "description": "Check inverter output vs. measured irradiance in real time during inverter data upload. NOTE: Requires a weather station with POA and Module temperature (1).",
    "deviceIds": [],
    "functionCodes": null,
    "name": "Inverter Performance Ratio (upload)",
    "value": "AI393"
  },
  {
    "description": "Generate an alert if the inverter power and energy outputs don't change.  Use this alert only when inverter status data is unavailable.",
    "deviceIds": [],
    "functionCodes": null,
    "name": "Inverter stopped alert",
    "value": "AI509"
  },
  {
    "description": "Detects the inverter's line to line voltage fluctuation by a given lower and upper percentage.",
    "deviceIds": [],
    "functionCodes": null,
    "name": "Inverter Voltage Fluctuation Alert",
    "value": "AI684"
  },
  {
    "description": "Alerts for Skytron_Kostal PIKO 12L_Faults",
    "deviceIds": [],
    "functionCodes": null,
    "name": "Skytron_Kostal PIKO 12L_Faults",
    "value": "AI1130"
  },
  {
    "description": "Detects fault conditions for SMA inverters that are uploading using a data logger via Modbus and a Cluster controller.",
    "deviceIds": [],
    "functionCodes": null,
    "name": "SMA Inverter  / Cluster controller (copy)",
    "value": "AI2838"
  },
  {
    "description": "Alerts for SMA SC250U Modbus TCP from Draker",
    "deviceIds": [],
    "functionCodes": null,
    "name": "SMA SC250U Draker Modbus TCP Codes",
    "value": "AI758"
  },
  {
    "description": "Generate an alert for how a register string compares to a user-defined string",
    "deviceIds": [],
    "functionCodes": null,
    "name": "String Comparison Alert",
    "value": "AI1302"
  },
  {
    "description": "Triggers when a register value changes.  This must be manually reset and will retrigger when a change occurs.",
    "deviceIds": [],
    "functionCodes": null,
    "name": "Value changed alert",
    "value": "AI1045"
  }
]
```

[Return to top](#top)

