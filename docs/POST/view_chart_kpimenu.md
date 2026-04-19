<a id="top"></a>
# /api/view/chart/kpimenu

[← Back to Index](../logs.md)

**Methods:** POST  
**Status Codes:** 200, 200, 200, 200  

## Table of Contents

- [Payload Structure](#payload-structure)
- [General](#general)
- [Example](#example)

## Payload Structure

```json
{
  "type": "object",
  "properties": {
    "hardwareSet": {
      "type": "string"
    },
    "siteKeys": {
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
    "availabilityPassMode": {
      "type": "number"
    },
    "availabilityPowerThreshold": {
      "type": "number"
    },
    "availabilityReferenceMode": {
      "type": "number"
    },
    "categories": {
      "type": "object",
      "properties": {
        "calculations": {
          "type": "object",
          "properties": {
            "checked": {
              "type": "boolean"
            },
            "enabled": {
              "type": "boolean"
            },
            "modelOptions": {
              "type": "object",
              "properties": {
                "showCalcModTemp": {
                  "type": "boolean"
                },
                "showLocusVi": {
                  "type": "boolean"
                },
                "showOnSiteWeather": {
                  "type": "boolean"
                },
                "showSolarSight": {
                  "type": "boolean"
                }
              }
            },
            "value": {
              "type": "number"
            }
          }
        },
        "events": {
          "type": "object",
          "properties": {
            "checked": {
              "type": "boolean"
            },
            "enabled": {
              "type": "boolean"
            },
            "modelOptions": {
              "type": "object",
              "properties": {}
            },
            "value": {
              "type": "number"
            }
          }
        },
        "financials": {
          "type": "object",
          "properties": {
            "checked": {
              "type": "boolean"
            },
            "enabled": {
              "type": "boolean"
            },
            "modelOptions": {
              "type": "object",
              "properties": {}
            },
            "value": {
              "type": "number"
            }
          }
        },
        "losses": {
          "type": "object",
          "properties": {
            "checked": {
              "type": "boolean"
            },
            "enabled": {
              "type": "boolean"
            },
            "modelOptions": {
              "type": "object",
              "properties": {}
            },
            "value": {
              "type": "number"
            }
          }
        },
        "measurements": {
          "type": "object",
          "properties": {
            "checked": {
              "type": "boolean"
            },
            "enabled": {
              "type": "boolean"
            },
            "modelOptions": {
              "type": "object",
              "properties": {}
            },
            "value": {
              "type": "number"
            }
          }
        },
        "special": {
          "type": "object",
          "properties": {
            "checked": {
              "type": "boolean"
            },
            "enabled": {
              "type": "boolean"
            },
            "modelOptions": {
              "type": "object",
              "properties": {}
            },
            "value": {
              "type": "number"
            }
          }
        }
      }
    },
    "showAlbedoIrradianceOption": {
      "type": "boolean"
    },
    "showApparentPowerOption": {
      "type": "boolean"
    },
    "showBacksidePOAIrradianceOption": {
      "type": "boolean"
    },
    "showDHIIrradianceOption": {
      "type": "boolean"
    },
    "showDNIIrradianceOption": {
      "type": "boolean"
    },
    "showReactivePowerOption": {
      "type": "boolean"
    },
    "siteKeys": {
      "type": "string"
    },
    "weatherModes": {
      "type": "number"
    },
    "weatherSources": {
      "type": "number"
    }
  }
}
```

[Return to top](#top)

## Example

**Request:**

```http
POST /api/view/chart/kpimenu
Accept: application/json
Content-Type: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: 05fc89
referer: https://apps.alsoenergy.com/powertrack/S66942/analysis/chartbuilder?start=2026-04-15&end=2026-04-17&d=3day&bin=15&k=%7B%7D&m=b&a=0&h=1*2&c=15&s=2
```

**Payload:**

```json
{
  "hardwareSet": [
    "H492482",
    "H492483",
    "H492484",
    "H492485",
    "H492486",
    "H492487",
    "H492488",
    "H492489",
    "H492490",
    "H492491",
    "H492492",
    "H492493",
    "H492494",
    "H492480"
  ],
  "siteKeys": [
    "S66942"
  ]
}
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
        "enabled": false,
        "modelOptions": {
          "showCalcModTemp": false,
          "showLocusVi": false,
          "showOnSiteWeather": false,
          "showSolarSight": false
        },
        "value": 1
      },
      {
        "checked": false,
        "enabled": false,
        "modelOptions": {
          "showCalcModTemp": false,
          "showLocusVi": false,
          "showOnSiteWeather": false,
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
        "enabled": false,
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
        "enabled": false,
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
        "enabled": false,
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
        "enabled": true,
        "modelOptions": null,
        "value": 8192
      },
      {
        "checked": false,
        "enabled": false,
        "modelOptions": {
          "showCalcModTemp": false,
          "showLocusVi": false,
          "showOnSiteWeather": false,
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
          "showCalcModTemp": false,
          "showLocusVi": false,
          "showOnSiteWeather": false,
          "showSolarSight": false
        },
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
        "modelOptions": {
          "showCalcModTemp": false,
          "showLocusVi": false,
          "showOnSiteWeather": false,
          "showSolarSight": false
        },
        "value": 524288
      },
      {
        "checked": false,
        "enabled": false,
        "modelOptions": {
          "showCalcModTemp": false,
          "showLocusVi": false,
          "showOnSiteWeather": false,
          "showSolarSight": false
        },
        "value": 1048576
      },
      {
        "checked": false,
        "enabled": false,
        "modelOptions": {
          "showCalcModTemp": false,
          "showLocusVi": false,
          "showOnSiteWeather": false,
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
        "enabled": false,
        "modelOptions": null,
        "value": 2
      }
    ],
    "financials": [
      {
        "checked": false,
        "enabled": false,
        "modelOptions": null,
        "value": 1
      },
      {
        "checked": false,
        "enabled": false,
        "modelOptions": {
          "showCalcModTemp": false,
          "showLocusVi": false,
          "showOnSiteWeather": false,
          "showSolarSight": false
        },
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
        "enabled": false,
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
        "enabled": false,
        "modelOptions": null,
        "value": 256
      },
      {
        "checked": false,
        "enabled": false,
        "modelOptions": null,
        "value": 512
      },
      {
        "checked": false,
        "enabled": false,
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
      },
      {
        "checked": false,
        "enabled": false,
        "modelOptions": null,
        "value": 2097152
      },
      {
        "checked": false,
        "enabled": false,
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
        "enabled": false,
        "modelOptions": {
          "showCalcModTemp": false,
          "showLocusVi": false,
          "showOnSiteWeather": false,
          "showSolarSight": false
        },
        "value": 4
      },
      {
        "checked": false,
        "enabled": true,
        "modelOptions": {
          "showCalcModTemp": false,
          "showLocusVi": false,
          "showOnSiteWeather": false,
          "showSolarSight": false
        },
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
        "enabled": false,
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
      },
      {
        "checked": false,
        "enabled": false,
        "modelOptions": null,
        "value": 8192
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
          "showCalcModTemp": false,
          "showLocusVi": false,
          "showOnSiteWeather": false,
          "showSolarSight": false
        },
        "value": 64
      },
      {
        "checked": false,
        "enabled": true,
        "modelOptions": {
          "showCalcModTemp": false,
          "showLocusVi": false,
          "showOnSiteWeather": false,
          "showSolarSight": false
        },
        "value": 128
      },
      {
        "checked": false,
        "enabled": false,
        "modelOptions": {
          "showCalcModTemp": false,
          "showLocusVi": false,
          "showOnSiteWeather": false,
          "showSolarSight": false
        },
        "value": 256
      },
      {
        "checked": false,
        "enabled": true,
        "modelOptions": {
          "showCalcModTemp": false,
          "showLocusVi": false,
          "showOnSiteWeather": false,
          "showSolarSight": false
        },
        "value": 512
      },
      {
        "checked": false,
        "enabled": true,
        "modelOptions": {
          "showCalcModTemp": false,
          "showLocusVi": false,
          "showOnSiteWeather": false,
          "showSolarSight": false
        },
        "value": 1024
      },
      {
        "checked": false,
        "enabled": false,
        "modelOptions": {
          "showCalcModTemp": false,
          "showLocusVi": false,
          "showOnSiteWeather": false,
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
  "showApparentPowerOption": true,
  "showBacksidePOAIrradianceOption": false,
  "showDHIIrradianceOption": false,
  "showDNIIrradianceOption": false,
  "showReactivePowerOption": true,
  "siteKeys": [
    "S66942"
  ],
  "weatherModes": [],
  "weatherSources": [
    0
  ]
}
```

[Return to top](#top)

