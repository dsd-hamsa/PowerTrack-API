# `/api/view/chart/kpimenu`

[← Back to Index](../README.md)



**Methods:** POST  
**Status Codes:** 200  
**Call Count:** 6  

#### Response Structure

```json
{
  "type": "object",
  "properties": {
    "showApparentPowerOption": {
      "type": "boolean"
    },
    "showDHIIrradianceOption": {
      "type": "boolean"
    },
    "weatherSources": {
      "type": "array",
      "items": {
        "type": "integer"
      }
    },
    "showAlbedoIrradianceOption": {
      "type": "boolean"
    },
    "showDNIIrradianceOption": {
      "type": "boolean"
    },
    "showReactivePowerOption": {
      "type": "boolean"
    },
    "categories": {
      "type": "object",
      "properties": {
        "calculations": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {}
          }
        },
        "measurements": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {}
          }
        },
        "special": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {}
          }
        },
        "events": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {}
          }
        },
        "financials": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {}
          }
        },
        "losses": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {}
          }
        }
      }
    },
    "availabilityPowerThreshold": {
      "type": "integer"
    },
    "availabilityPassMode": {
      "type": "integer"
    },
    "availabilityReferenceMode": {
      "type": "integer"
    },
    "siteKeys": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "weatherModes": {
      "type": "array",
      "items": {
        "type": "integer"
      }
    },
    "showBacksidePOAIrradianceOption": {
      "type": "boolean"
    }
  }
}
```

#### Example

**Request:**

```http
POST /api/view/chart/kpimenu
Accept: application/json
Referer: https://www.alsoenergy.com
Content-Type: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: c75711
```

**Response:**

```json
{
  "availabilityPassMode": 0,
  "availabilityPowerThreshold": 0,
  "availabilityReferenceMode": 0,
  "categories": {
    "calculations": [
      {
        "checked": false,
        "enabled": true,
        "modelOptions": {
          "showCalcModTemp": true,
          "showLocusVi": true,
          "showOnSiteWeather": true,
          "showSolarSight": false
        },
        "value": 1
      },
      {
        "checked": false,
        "enabled": true,
        "modelOptions": {
          "showCalcModTemp": true,
          "showLocusVi": true,
          "showOnSiteWeather": true,
          "showSolarSight": false
        },
        "value": 2
      },
      {
        "checked": false,
        "enabled": true,
        "modelOptions": null,
        "value": 4
      },
      {
        "checked": false,
        "enabled": true,
        "modelOptions": null,
        "value": 8
      },
      {
        "checked": false,
        "enabled": true,
        "modelOptions": null,
        "value": 16
      },
      {
        "checked": false,
        "enabled": false,
        "modelOptions": null,
        "value": 32
      },
      {
        "checked": false,
        "enabled": true,
        "modelOptions": null,
        "value": 64
      },
      {
        "checked": false,
        "enabled": false,
        "modelOptions": null,
        "value": 128
      },
      {
        "checked": false,
        "enabled": true,
        "modelOptions": null,
        "value": 256
      },
      {
        "checked": false,
        "enabled": true,
        "modelOptions": null,
        "value": 512
      },
      {
        "checked": false,
        "enabled": true,
        "modelOptions": null,
        "value": 1024
      },
      {
        "checked": false,
        "enabled": true,
        "modelOptions": null,
        "value": 2048
      },
      {
        "checked": false,
        "enabled": true,
        "modelOptions": null,
        "value": 4096
      },
      {
        "checked": false,
        "enabled": true,
        "modelOptions": null,
        "value": 8192
      },
      {
        "checked": false,
        "enabled": false,
        "modelOptions": {
          "showCalcModTemp": true,
          "showLocusVi": true,
          "showOnSiteWeather": true,
          "showSolarSight": false
        },
        "value": 16384
      },
      {
        "checked": false,
        "enabled": true,
        "modelOptions": null,
        "value": 32768
      },
      {
        "checked": false,
        "enabled": true,
        "modelOptions": null,
        "value": 65536
      },
      {
        "checked": false,
        "enabled": false,
        "modelOptions": {
          "showCalcModTemp": true,
          "showLocusVi": true,
          "showOnSiteWeather": true,
          "showSolarSight": false
        },
        "value": 131072
      },
      {
        "checked": false,
        "enabled": true,
        "modelOptions": null,
        "value": 262144
      },
      {
        "checked": false,
        "enabled": false,
        "modelOptions": {
          "showCalcModTemp": true,
          "showLocusVi": true,
          "showOnSiteWeather": true,
          "showSolarSight": false
        },
        "value": 524288
      },
      {
        "checked": false,
        "enabled": false,
        "modelOptions": {
          "showCalcModTemp": true,
          "showLocusVi": true,
          "showOnSiteWeather": true,
          "showSolarSight": false
        },
        "value": 1048576
      },
      {
        "checked": false,
        "enabled": false,
        "modelOptions": {
          "showCalcModTemp": true,
          "showLocusVi": true,
          "showOnSiteWeather": true,
          "showSolarSight": false
        },
        "value": 2097152
      }
    ],
    "events": [
      {
        "checked": false,
        "enabled": true,
        "modelOptions": null,
        "value": 1
      },
      {
        "checked": false,
        "enabled": true,
        "modelOptions": null,
        "value": 2
      }
    ],
    "financials": [
      {
        "checked": false,
        "enabled": true,
        "modelOptions": null,
        "value": 1
      },
      {
        "checked": false,
        "enabled": true,
        "modelOptions": {
          "showCalcModTemp": true,
          "showLocusVi": true,
          "showOnSiteWeather": true,
          "showSolarSight": false
        },
        "value": 2
      },
      {
        "checked": false,
        "enabled": true,
        "modelOptions": null,
        "value": 4
      },
      {
        "checked": false,
        "enabled": false,
        "modelOptions": null,
        "value": 8
      },
      {
        "checked": false,
        "enabled": false,
        "modelOptions": null,
        "value": 16
      },
      {
        "checked": false,
        "enabled": false,
        "modelOptions": null,
        "value": 32
      },
      {
        "checked": false,
        "enabled": false,
        "modelOptions": null,
        "value": 64
      },
      {
        "checked": false,
        "enabled": false,
        "modelOptions": null,
        "value": 128
      }
    ],
    "losses": [
      {
        "checked": false,
        "enabled": true,
        "modelOptions": null,
        "value": 1
      },
      {
        "checked": false,
        "enabled": true,
        "modelOptions": null,
        "value": 2
      },
      {
        "checked": false,
        "enabled": true,
        "modelOptions": null,
        "value": 4
      },
      {
        "checked": false,
        "enabled": false,
        "modelOptions": null,
        "value": 8
      },
      {
        "checked": false,
        "enabled": true,
        "modelOptions": null,
        "value": 16
      },
      {
        "checked": false,
        "enabled": true,
        "modelOptions": null,
        "value": 32
      },
      {
        "checked": false,
        "enabled": true,
        "modelOptions": null,
        "value": 64
      },
      {
        "checked": false,
        "enabled": true,
        "modelOptions": null,
        "value": 128
      },
      {
        "checked": false,
        "enabled": true,
        "modelOptions": null,
        "value": 256
      },
      {
        "checked": false,
        "enabled": true,
        "modelOptions": null,
        "value": 512
      },
      {
        "checked": false,
        "enabled": true,
        "modelOptions": null,
        "value": 1024
      },
      {
        "checked": false,
        "enabled": true,
        "modelOptions": null,
        "value": 2048
      },
      {
        "checked": false,
        "enabled": false,
        "modelOptions": null,
        "value": 4096
      },
      {
        "checked": false,
        "enabled": false,
        "modelOptions": null,
        "value": 8192
      },
      {
        "checked": false,
        "enabled": false,
        "modelOptions": null,
        "value": 16384
      },
      {
        "checked": false,
        "enabled": false,
        "modelOptions": null,
        "value": 32768
      },
      {
        "checked": false,
        "enabled": false,
        "modelOptions": null,
        "value": 65536
      },
      {
        "checked": false,
        "enabled": true,
        "modelOptions": null,
        "value": 131072
      },
      {
        "checked": false,
        "enabled": true,
        "modelOptions": null,
        "value": 262144
      },
      {
        "checked": false,
        "enabled": false,
        "modelOptions": null,
        "value": 524288
      },
      {
        "checked": false,
        "enabled": true,
        "modelOptions": null,
        "value": 2097152
      },
      {
        "checked": false,
        "enabled": true,
        "modelOptions": null,
        "value": 4194304
      }
    ],
    "measurements": [
      {
        "checked": false,
        "enabled": true,
        "modelOptions": null,
        "value": 1
      },
      {
        "checked": false,
        "enabled": true,
        "modelOptions": null,
        "value": 2
      },
      {
        "checked": false,
        "enabled": true,
        "modelOptions": {
          "showCalcModTemp": true,
          "showLocusVi": true,
          "showOnSiteWeather": true,
          "showSolarSight": false
        },
        "value": 4
      },
      {
        "checked": false,
        "enabled": true,
        "modelOptions": {
          "showCalcModTemp": true,
          "showLocusVi": true,
          "showOnSiteWeather": true,
          "showSolarSight": false
        },
        "value": 8
      },
      {
        "checked": false,
        "enabled": false,
        "modelOptions": null,
        "value": 16
      },
      {
        "checked": false,
        "enabled": false,
        "modelOptions": null,
        "value": 32
      },
      {
        "checked": false,
        "enabled": true,
        "modelOptions": null,
        "value": 64
      },
      {
        "checked": false,
        "enabled": true,
        "modelOptions": null,
        "value": 128
      },
      {
        "checked": false,
        "enabled": true,
        "modelOptions": null,
        "value": 256
      },
      {
        "checked": false,
        "enabled": true,
        "modelOptions": null,
        "value": 512
      },
      {
        "checked": false,
        "enabled": true,
        "modelOptions": null,
        "value": 1024
      },
      {
        "checked": false,
        "enabled": false,
        "modelOptions": null,
        "value": 2048
      },
      {
        "checked": false,
        "enabled": true,
        "modelOptions": null,
        "value": 4096
      }
    ],
    "special": [
      {
        "checked": false,
        "enabled": false,
        "modelOptions": null,
        "value": 1
      },
      {
        "checked": false,
        "enabled": false,
        "modelOptions": null,
        "value": 2
      },
      {
        "checked": false,
        "enabled": false,
        "modelOptions": null,
        "value": 4
      },
      {
        "checked": false,
        "enabled": false,
        "modelOptions": null,
        "value": 8
      },
      {
        "checked": false,
        "enabled": false,
        "modelOptions": null,
        "value": 16
      },
      {
        "checked": false,
        "enabled": false,
        "modelOptions": null,
        "value": 32
      },
      {
        "checked": false,
        "enabled": true,
        "modelOptions": {
          "showCalcModTemp": true,
          "showLocusVi": true,
          "showOnSiteWeather": true,
          "showSolarSight": false
        },
        "value": 64
      },
      {
        "checked": false,
        "enabled": true,
        "modelOptions": {
          "showCalcModTemp": true,
          "showLocusVi": true,
          "showOnSiteWeather": true,
          "showSolarSight": false
        },
        "value": 128
      },
      {
        "checked": false,
        "enabled": true,
        "modelOptions": {
          "showCalcModTemp": true,
          "showLocusVi": true,
          "showOnSiteWeather": true,
          "showSolarSight": false
        },
        "value": 256
      },
      {
        "checked": false,
        "enabled": true,
        "modelOptions": {
          "showCalcModTemp": true,
          "showLocusVi": true,
          "showOnSiteWeather": true,
          "showSolarSight": false
        },
        "value": 512
      },
      {
        "checked": false,
        "enabled": true,
        "modelOptions": {
          "showCalcModTemp": true,
          "showLocusVi": true,
          "showOnSiteWeather": true,
          "showSolarSight": false
        },
        "value": 1024
      },
      {
        "checked": false,
        "enabled": true,
        "modelOptions": {
          "showCalcModTemp": true,
          "showLocusVi": true,
          "showOnSiteWeather": true,
          "showSolarSight": false
        },
        "value": 2048
      },
      {
        "checked": false,
        "enabled": false,
        "modelOptions": null,
        "value": 4096
      },
      {
        "checked": false,
        "enabled": false,
        "modelOptions": null,
        "value": 8192
      },
      {
        "checked": false,
        "enabled": false,
        "modelOptions": null,
        "value": 16384
      },
      {
        "checked": false,
        "enabled": false,
        "modelOptions": null,
        "value": 32768
      },
      {
        "checked": false,
        "enabled": false,
        "modelOptions": null,
        "value": 65536
      },
      {
        "checked": false,
        "enabled": false,
        "modelOptions": null,
        "value": 131072
      },
      {
        "checked": false,
        "enabled": false,
        "modelOptions": null,
        "value": 262144
      },
      {
        "checked": false,
        "enabled": false,
        "modelOptions": null,
        "value": 524288
      }
    ]
  },
  "showAlbedoIrradianceOption": false,
  "showApparentPowerOption": false,
  "showBacksidePOAIrradianceOption": false,
  "showDHIIrradianceOption": true,
  "showDNIIrradianceOption": true,
  "showReactivePowerOption": false,
  "siteKeys": [
    "S38292"
  ],
  "weatherModes": [
    0,
    1
  ],
  "weatherSources": [
    0,
    1,
    5,
    7,
    8
  ]
}
```

