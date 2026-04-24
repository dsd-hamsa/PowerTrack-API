<a id="top"></a>
# /api/reportconfig/public/dashboardlistitems

[← Back to Index](../logs.md)

**Methods:** GET  
**Status Codes:** 200  

## Table of Contents

- [General](#general)
- [Example](#example)

## General

```json
{
  "type": "object",
  "properties": {
    "items": {
      "type": "object",
      "properties": {
        "fileName": {
          "type": "string"
        },
        "hierarchy": {
          "type": "string"
        },
        "key": {
          "type": "string"
        },
        "language": {
          "type": "string"
        },
        "lastChanged": {
          "type": "string"
        },
        "name": {
          "type": "string"
        },
        "parentKey": {
          "type": "string"
        },
        "reportTitle": {
          "type": "string"
        }
      }
    }
  }
}
```

[Return to top](#top)

## Example

**Request:**

```http
GET /api/reportconfig/public/dashboardlistitems
Accept: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: 05fc89
referer: https://apps.alsoenergy.com/powertrack/C16295/reports/reportconfigs/F221210
```

**Response:**

```json
{
  "items": [
    {
      "fileName": "",
      "hierarchy": "Distributed Solar Development : Public Documents : AlsoEnergy Public Docs : Dashboards : Kiosk Dashboards",
      "key": "F2563",
      "language": "en-US",
      "lastChanged": "2015-06-11T23:52:05Z",
      "name": "Environment",
      "parentKey": "D7575",
      "reportTitle": ""
    },
    {
      "fileName": "",
      "hierarchy": "Distributed Solar Development : Public Documents : AlsoEnergy Public Docs : Dashboards : Kiosk Dashboards",
      "key": "F2567",
      "language": "",
      "lastChanged": "2015-06-12T00:08:59Z",
      "name": "Environment2-NoCars",
      "parentKey": "D7575",
      "reportTitle": ""
    },
    {
      "fileName": "",
      "hierarchy": "Distributed Solar Development : Public Documents : AlsoEnergy Public Docs : Dashboards : Kiosk Dashboards",
      "key": "F2568",
      "language": "en-US",
      "lastChanged": "2015-06-11T23:54:01Z",
      "name": "Environment2",
      "parentKey": "D7575",
      "reportTitle": ""
    },
    {
      "fileName": "",
      "hierarchy": "Distributed Solar Development : Public Documents : AlsoEnergy Public Docs : Dashboards : Kiosk Dashboards",
      "key": "F2569",
      "language": "en-US",
      "lastChanged": "2015-06-11T23:53:42Z",
      "name": "HowItWorks",
      "parentKey": "D7575",
      "reportTitle": ""
    },
    {
      "fileName": "",
      "hierarchy": "Distributed Solar Development : Public Documents : AlsoEnergy Public Docs : Dashboards : Kiosk Dashboards",
      "key": "F2574",
      "language": "",
      "lastChanged": "2015-06-12T00:09:53Z",
      "name": "HowItWorks2",
      "parentKey": "D7575",
      "reportTitle": ""
    },
    {
      "fileName": "",
      "hierarchy": "Distributed Solar Development : Public Documents : AlsoEnergy Public Docs : Dashboards : Kiosk Dashboards",
      "key": "F4917",
      "language": "",
      "lastChanged": "2015-06-12T00:09:40Z",
      "name": "HowItWorks_OffGrid",
      "parentKey": "D7575",
      "reportTitle": ""
    },
    {
      "fileName": "",
      "hierarchy": "Distributed Solar Development : Public Documents : AlsoEnergy Public Docs : Help Docs : Help Quick Links",
      "key": "F7542",
      "language": "",
      "lastChanged": "2013-01-15T03:13:15Z",
      "name": "PowerTrack™ 101",
      "parentKey": "D3002",
      "reportTitle": ""
    },
    {
      "fileName": "",
      "hierarchy": "Distributed Solar Development : Public Documents : AlsoEnergy Public Docs : Dashboards : Components",
      "key": "F7661",
      "language": "",
      "lastChanged": "2012-09-09T14:42:48Z",
      "name": "Satcon Inverter",
      "parentKey": "D3034",
      "reportTitle": ""
    },
    {
      "fileName": "",
      "hierarchy": "Distributed Solar Development : Public Documents : AlsoEnergy Public Docs : Dashboards : Components",
      "key": "F7666",
      "language": "",
      "lastChanged": "2012-09-07T04:02:58Z",
      "name": "Elkor meter",
      "parentKey": "D3034",
      "reportTitle": ""
    },
    {
      "fileName": "",
      "hierarchy": "Distributed Solar Development : Public Documents : AlsoEnergy Public Docs : Dashboards : Components",
      "key": "F7683",
      "language": "",
      "lastChanged": "2017-02-27T04:41:13Z",
      "name": "Bentek 10 zone combiner",
      "parentKey": "D3034",
      "reportTitle": ""
    },
    {
      "fileName": "",
      "hierarchy": "Distributed Solar Development : Public Documents : AlsoEnergy Public Docs : Dashboards : Kiosk Dashboards",
      "key": "F8740",
      "language": "",
      "lastChanged": "2015-06-11T23:51:47Z",
      "name": "DOE Video - How solar works",
      "parentKey": "D7575",
      "reportTitle": ""
    },
    {
      "fileName": "",
      "hierarchy": "Distributed Solar Development : Public Documents : AlsoEnergy Public Docs : Help Docs : Help Quick Links",
      "key": "F9135",
      "language": "",
      "lastChanged": "2013-01-15T03:16:19Z",
      "name": "Charts & Data",
      "parentKey": "D3002",
      "reportTitle": ""
    },
    {
      "fileName": "",
      "hierarchy": "Distributed Solar Development : Public Documents : AlsoEnergy Public Docs : Dashboards : Sample Site Info Dashboards",
      "key": "F9246",
      "language": "",
      "lastChanged": "2013-01-27T15:57:05Z",
      "name": "Aurora 300 Mini-Dash",
      "parentKey": "D3472",
      "reportTitle": ""
    },
    {
      "fileName": "",
      "hierarchy": "Distributed Solar Development : Public Documents : AlsoEnergy Public Docs : Dashboards : Kiosk Dashboards",
      "key": "F12411",
      "language": "en-US",
      "lastChanged": "2015-06-12T00:10:27Z",
      "name": "HowSolarThermalWorks",
      "parentKey": "D7575",
      "reportTitle": ""
    },
    {
      "fileName": "",
      "hierarchy": "Distributed Solar Development : Public Documents : AlsoEnergy Public Docs : New PL Dashboards",
      "key": "F12524",
      "language": "",
      "lastChanged": "2013-09-24T11:01:36Z",
      "name": "New PL Production",
      "parentKey": "D4451",
      "reportTitle": ""
    },
    {
      "fileName": "",
      "hierarchy": "Distributed Solar Development : Public Documents : AlsoEnergy Public Docs : Dashboards : Kiosk Dashboards",
      "key": "F13176",
      "language": "",
      "lastChanged": "2015-06-12T00:10:13Z",
      "name": "Kiosk Thumbnail Overlay",
      "parentKey": "D7575",
      "reportTitle": ""
    },
    {
      "fileName": "",
      "hierarchy": "Distributed Solar Development : Public Documents : AlsoEnergy Public Docs : Dashboards : Kiosk Dashboards",
      "key": "F13541",
      "language": "en-US",
      "lastChanged": "2015-06-11T23:52:31Z",
      "name": "Environment Weather Page",
      "parentKey": "D7575",
      "reportTitle": ""
    },
    {
      "fileName": "",
      "hierarchy": "Distributed Solar Development : Public Documents : AlsoEnergy Public Docs : Dashboards : Kiosk Dashboards",
      "key": "F22807",
      "language": "",
      "lastChanged": "2017-07-26T21:46:57Z",
      "name": "HowItWorks Localized",
      "parentKey": "D7575",
      "reportTitle": ""
    },
    {
      "fileName": "",
      "hierarchy": "Distributed Solar Development : Public Documents : AlsoEnergy Public Docs : Reports : Timeline Reports",
      "key": "F25775",
      "language": "",
      "lastChanged": "2020-04-08T19:14:33Z",
      "name": "Timeline Report (alert percentage uptime)",
      "parentKey": "D8742",
      "reportTitle": ""
    },
    {
      "fileName": "",
      "hierarchy": "Distributed Solar Development : Public Documents : AlsoEnergy Public Docs : Invoices",
      "key": "F108970",
      "language": "",
      "lastChanged": "2021-08-24T19:32:26Z",
      "name": "Rate Schedule Invoice (new)",
      "parentKey": "D4099",
      "reportTitle": ""
    },
    {
      "fileName": "",
      "hierarchy": "Distributed Solar Development : Public Documents : AlsoEnergy Public Docs : Invoices",
      "key": "F11405",
      "language": "",
      "lastChanged": "2021-06-22T19:45:47Z",
      "name": "Rate Schedule Invoice",
      "parentKey": "D4099",
      "reportTitle": ""
    },
    {
      "fileName": "",
      "hierarchy": "Distributed Solar Development : Public Documents : AlsoEnergy Public Docs : Reports : PV Reports",
      "key": "F12510",
      "language": "",
      "lastChanged": "2019-06-15T18:18:28Z",
      "name": "Insolation Page",
      "parentKey": "D4427",
      "reportTitle": ""
    },
    {
      "fileName": "",
      "hierarchy": "Distributed Solar Development : Public Documents : AlsoEnergy Public Docs : Reports : PV Reports",
      "key": "F12511",
      "language": "",
      "lastChanged": "2014-07-09T14:24:11Z",
      "name": "Title Page",
      "parentKey": "D4427",
      "reportTitle": ""
    },
    {
      "fileName": "",
      "hierarchy": "Distributed Solar Development : Public Documents : AlsoEnergy Public Docs : Reports : PV Reports",
      "key": "F12513",
      "language": "",
      "lastChanged": "2020-02-14T18:20:29Z",
      "name": "PV Model Page",
      "parentKey": "D4427",
      "reportTitle": ""
    },
    {
      "fileName": "",
      "hierarchy": "Distributed Solar Development : Public Documents : AlsoEnergy Public Docs : Reports : PV Reports",
      "key": "F12515",
      "language": "",
      "lastChanged": "2026-02-06T22:51:26Z",
      "name": "TMY Estimate Page",
      "parentKey": "D4427",
      "reportTitle": ""
    },
    {
      "fileName": "",
      "hierarchy": "Distributed Solar Development : Public Documents : AlsoEnergy Public Docs : Reports : PV Reports",
      "key": "F12517",
      "language": "",
      "lastChanged": "2016-02-07T19:00:31Z",
      "name": "Inverter Performance Index Page",
      "parentKey": "D4427",
      "reportTitle": ""
    },
    {
      "fileName": "",
      "hierarchy": "Distributed Solar Development : Public Documents : AlsoEnergy Public Docs : Reports : PV Reports",
      "key": "F12518",
      "language": "",
      "lastChanged": "2015-02-19T18:04:41Z",
      "name": "Alert Summary Page",
      "parentKey": "D4427",
      "reportTitle": ""
    },
    {
      "fileName": "",
      "hierarchy": "Distributed Solar Development : Public Documents : AlsoEnergy Public Docs : Reports : PV Reports",
      "key": "F12520",
      "language": "",
      "lastChanged": "2015-02-19T18:14:45Z",
      "name": "Uptime page",
      "parentKey": "D4427",
      "reportTitle": ""
    },
    {
      "fileName": "",
      "hierarchy": "Distributed Solar Development : Public Documents : AlsoEnergy Public Docs : Reports : PV Reports",
      "key": "F12521",
      "language": "",
      "lastChanged": "2020-02-14T18:00:14Z",
      "name": "Finance page",
      "parentKey": "D4427",
      "reportTitle": ""
    },
    {
      "fileName": "",
      "hierarchy": "Distributed Solar Development : Public Documents : AlsoEnergy Public Docs : Reports : PV Reports",
      "key": "F13844",
      "language": "",
      "lastChanged": "2015-02-19T18:26:51Z",
      "name": "PV Losses",
      "parentKey": "D4427",
      "reportTitle": ""
    },
    {
      "fileName": "",
      "hierarchy": "Distributed Solar Development : Public Documents : AlsoEnergy Public Docs : Reports : Operations & Management Reports",
      "key": "F14358",
      "language": "",
      "lastChanged": "2014-09-29T01:59:13Z",
      "name": "Operations Report",
      "parentKey": "D5218",
      "reportTitle": ""
    },
    {
      "fileName": "",
      "hierarchy": "Distributed Solar Development : Public Documents : AlsoEnergy Public Docs : Reports : Operations & Management Reports",
      "key": "F14359",
      "language": "",
      "lastChanged": "2015-01-31T08:07:05Z",
      "name": "Costs Report",
      "parentKey": "D5218",
      "reportTitle": ""
    },
    {
      "fileName": "",
      "hierarchy": "Distributed Solar Development : Public Documents : AlsoEnergy Public Docs : Reports : Operations & Management Reports",
      "key": "F14360",
      "language": "",
      "lastChanged": "2015-01-31T08:05:16Z",
      "name": "Production Impact Report",
      "parentKey": "D5218",
      "reportTitle": ""
    },
    {
      "fileName": "",
      "hierarchy": "Distributed Solar Development : Public Documents : AlsoEnergy Public Docs : Reports : PV Reports",
      "key": "F14580",
      "language": "",
      "lastChanged": "2015-02-19T18:27:29Z",
      "name": "PV Losses summary w/Financials",
      "parentKey": "D4427",
      "reportTitle": ""
    },
    {
      "fileName": "",
      "hierarchy": "Distributed Solar Development : Public Documents : AlsoEnergy Public Docs : Reports : Timeline Reports",
      "key": "F14589",
      "language": "",
      "lastChanged": "2026-02-06T22:56:25Z",
      "name": "Timeline Expected Report",
      "parentKey": "D8742",
      "reportTitle": ""
    },
    {
      "fileName": "",
      "hierarchy": "Distributed Solar Development : Public Documents : AlsoEnergy Public Docs : Dashboards : Page Generators",
      "key": "F14635",
      "language": "",
      "lastChanged": "2014-05-06T18:58:41Z",
      "name": "PV Losses data",
      "parentKey": "D5386",
      "reportTitle": ""
    },
    {
      "fileName": "",
      "hierarchy": "Distributed Solar Development : Public Documents : AlsoEnergy Public Docs : Dashboards : Page Generators",
      "key": "F14637",
      "language": "",
      "lastChanged": "2014-03-28T13:22:41Z",
      "name": "Summary Table Page",
      "parentKey": "D5386",
      "reportTitle": ""
    },
    {
      "fileName": "",
      "hierarchy": "Distributed Solar Development : Public Documents : AlsoEnergy Public Docs : Dashboards : Page Generators",
      "key": "F14665",
      "language": "",
      "lastChanged": "2014-05-06T18:58:59Z",
      "name": "Site Hardware Page Generator",
      "parentKey": "D5386",
      "reportTitle": ""
    },
    {
      "fileName": "",
      "hierarchy": "Distributed Solar Development : Public Documents : AlsoEnergy Public Docs : Dashboards : Page Generators",
      "key": "F14676",
      "language": "",
      "lastChanged": "2014-05-06T18:57:28Z",
      "name": "Customer Hardware Page Generator",
      "parentKey": "D5386",
      "reportTitle": ""
    },
    {
      "fileName": "",
      "hierarchy": "Distributed Solar Development : Public Documents : AlsoEnergy Public Docs : Dashboards : Page Generators",
      "key": "F14716",
      "language": "",
      "lastChanged": "2014-05-06T18:58:02Z",
      "name": "Customer Site Excel Generator",
      "parentKey": "D5386",
      "reportTitle": ""
    },
    {
      "fileName": "",
      "hierarchy": "Distributed Solar Development : Public Documents : AlsoEnergy Public Docs : Reports : PV Reports",
      "key": "F14994",
      "language": "",
      "lastChanged": "2014-07-08T13:49:50Z",
      "name": "Treasury 1603 Report",
      "parentKey": "D4427",
      "reportTitle": ""
    },
    {
      "fileName": "",
      "hierarchy": "Distributed Solar Development : Public Documents : AlsoEnergy Public Docs : Invoices",
      "key": "F15007",
      "language": "",
      "lastChanged": "2026-02-06T22:37:22Z",
      "name": "Meter Invoice 3",
      "parentKey": "D4099",
      "reportTitle": ""
    },
    {
      "fileName": "",
      "hierarchy": "Distributed Solar Development : Public Documents : AlsoEnergy Public Docs : Dashboards : Page Generators",
      "key": "F15011",
      "language": "",
      "lastChanged": "2014-05-06T18:58:20Z",
      "name": "Customer Site Page Generator",
      "parentKey": "D5386",
      "reportTitle": ""
    },
    {
      "fileName": "",
      "hierarchy": "Distributed Solar Development : Public Documents : AlsoEnergy Public Docs : Reports : Portfolio Reports",
      "key": "F22013",
      "language": "",
      "lastChanged": "2015-01-20T18:32:11Z",
      "name": "Main Portfolio Template",
      "parentKey": "D6901",
      "reportTitle": ""
    },
    {
      "fileName": "",
      "hierarchy": "Distributed Solar Development : Public Documents : AlsoEnergy Public Docs : Invoices",
      "key": "F22177",
      "language": "",
      "lastChanged": "2026-02-06T22:36:51Z",
      "name": "6 Meter Invoice",
      "parentKey": "D4099",
      "reportTitle": ""
    },
    {
      "fileName": "",
      "hierarchy": "Distributed Solar Development : Public Documents : AlsoEnergy Public Docs : Invoices",
      "key": "F22463",
      "language": "",
      "lastChanged": "2026-02-06T22:38:16Z",
      "name": "Meter Invoice 3 - kWhrec",
      "parentKey": "D4099",
      "reportTitle": ""
    },
    {
      "fileName": "",
      "hierarchy": "Distributed Solar Development : Public Documents : AlsoEnergy Public Docs : Invoices",
      "key": "F22773",
      "language": "",
      "lastChanged": "2026-02-06T22:39:09Z",
      "name": "Meter Invoice 8 - kWhrec",
      "parentKey": "D4099",
      "reportTitle": ""
    },
    {
      "fileName": "",
      "hierarchy": "Distributed Solar Development : Public Documents : AlsoEnergy Public Docs : Invoices",
      "key": "F23133",
      "language": "",
      "lastChanged": "2026-02-06T22:36:33Z",
      "name": "DECK invoice",
      "parentKey": "D4099",
      "reportTitle": ""
    },
    {
      "fileName": "",
      "hierarchy": "Distributed Solar Development : Public Documents : AlsoEnergy Public Docs : Reports : Wizard Reports",
      "key": "F24169",
      "language": "",
      "lastChanged": "2016-07-10T19:04:56Z",
      "name": "Wizard report single chart template",
      "parentKey": "D10085",
      "reportTitle": ""
    },
    {
      "fileName": "",
      "hierarchy": "Distributed Solar Development : Public Documents : AlsoEnergy Public Docs : Reports : Monthly Portfolio Report Templates",
      "key": "F24479",
      "language": "",
      "lastChanged": "2016-01-30T00:23:27Z",
      "name": "Monthly Portfolio Report Site Estimate Table",
      "parentKey": "D7960",
      "reportTitle": ""
    },
    {
      "fileName": "",
      "hierarchy": "Distributed Solar Development : Public Documents : AlsoEnergy Public Docs : Reports : Monthly Portfolio Report Templates",
      "key": "F24480",
      "language": "",
      "lastChanged": "2016-01-30T00:22:51Z",
      "name": "Monthly Portfolio Report Site Revenue Table",
      "parentKey": "D7960",
      "reportTitle": ""
    },
    {
      "fileName": "",
      "hierarchy": "Distributed Solar Development : Public Documents : AlsoEnergy Public Docs : Invoices",
      "key": "F25671",
      "language": "",
      "lastChanged": "2026-02-06T22:37:52Z",
      "name": "Meter Invoice 3 - kWhdel",
      "parentKey": "D4099",
      "reportTitle": ""
    },
    {
      "fileName": "",
      "hierarchy": "Distributed Solar Development : Public Documents : AlsoEnergy Public Docs : Reports : Timeline Reports",
      "key": "F25855",
      "language": "",
      "lastChanged": "2026-02-06T22:57:19Z",
      "name": "Timeline Report (simple uptime)",
      "parentKey": "D8742",
      "reportTitle": ""
    },
    {
      "fileName": "",
      "hierarchy": "Distributed Solar Development : Public Documents : AlsoEnergy Public Docs : Reports : Timeline Reports",
      "key": "F25990",
      "language": "",
      "lastChanged": "2018-07-26T16:59:22Z",
      "name": "Timeline Report (simple uptime from inverters)",
      "parentKey": "D8742",
      "reportTitle": ""
    },
    {
      "fileName": "",
      "hierarchy": "Distributed Solar Development : Public Documents : AlsoEnergy Public Docs : Reports : Timeline Reports",
      "key": "F25991",
      "language": "",
      "lastChanged": "2026-02-06T22:56:59Z",
      "name": "Timeline Report (alert percentage uptime from inverters)",
      "parentKey": "D8742",
      "reportTitle": ""
    },
    {
      "fileName": "",
      "hierarchy": "Distributed Solar Development : Public Documents : AlsoEnergy Public Docs : Reports : PV Reports",
      "key": "F26431",
      "language": "",
      "lastChanged": "2016-02-07T19:13:29Z",
      "name": "Site Performance Index Page",
      "parentKey": "D4427",
      "reportTitle": ""
    },
    {
      "fileName": "",
      "hierarchy": "Distributed Solar Development : Public Documents : AlsoEnergy Public Docs : Reports : PV Reports",
      "key": "F26432",
      "language": "",
      "lastChanged": "2016-02-07T20:39:43Z",
      "name": "Site Actual, Expected and Estimated energy production",
      "parentKey": "D4427",
      "reportTitle": ""
    },
    {
      "fileName": "",
      "hierarchy": "Distributed Solar Development : Public Documents : AlsoEnergy Public Docs : Reports : PV Reports",
      "key": "F26433",
      "language": "",
      "lastChanged": "2026-02-06T22:48:59Z",
      "name": "Site Production and Alert Summary",
      "parentKey": "D4427",
      "reportTitle": ""
    },
    {
      "fileName": "",
      "hierarchy": "Distributed Solar Development : Public Documents : AlsoEnergy Public Docs : Invoices",
      "key": "F35261",
      "language": "",
      "lastChanged": "2017-05-24T22:31:46Z",
      "name": "Rate Schedule Invoice w/ ATTN: Row",
      "parentKey": "D4099",
      "reportTitle": ""
    },
    {
      "fileName": "",
      "hierarchy": "Distributed Solar Development : Public Documents : AlsoEnergy Public Docs : Reports : PV Reports",
      "key": "F35897",
      "language": "",
      "lastChanged": "2017-06-15T20:10:12Z",
      "name": "Treasury 1603 Report (Test)",
      "parentKey": "D4427",
      "reportTitle": ""
    },
    {
      "fileName": "",
      "hierarchy": "Distributed Solar Development : Public Documents : AlsoEnergy Public Docs : Reports : Timeline Reports",
      "key": "F42792",
      "language": "",
      "lastChanged": "2026-02-06T22:56:42Z",
      "name": "Timeline Expected Report (Operations)",
      "parentKey": "D8742",
      "reportTitle": ""
    },
    {
      "fileName": "",
      "hierarchy": "Distributed Solar Development : Public Documents : AlsoEnergy Public Docs : Reports : PV Reports",
      "key": "F46317",
      "language": "",
      "lastChanged": "2026-02-06T22:47:20Z",
      "name": "Draker Forecast vs Actual Report",
      "parentKey": "D4427",
      "reportTitle": ""
    },
    {
      "fileName": "",
      "hierarchy": "Distributed Solar Development : Public Documents : AlsoEnergy Public Docs : Reports : PV Reports",
      "key": "F51163",
      "language": "en-US",
      "lastChanged": "2026-02-06T22:49:46Z",
      "name": "Site Validation Report",
      "parentKey": "D4427",
      "reportTitle": ""
    },
    {
      "fileName": "",
      "hierarchy": "Distributed Solar Development : Public Documents : AlsoEnergy Public Docs : Reports : Timeline Reports",
      "key": "F71310",
      "language": "en-US",
      "lastChanged": "2026-02-06T22:55:37Z",
      "name": "Draker Weather Adjusted Performance Report",
      "parentKey": "D8742",
      "reportTitle": ""
    },
    {
      "fileName": "",
      "hierarchy": "Distributed Solar Development : Public Documents : AlsoEnergy Public Docs : Marketplace : Reports",
      "key": "F88063",
      "language": "",
      "lastChanged": "2021-12-24T00:45:18Z",
      "name": "Sample Controlled Report Dashboard",
      "parentKey": "D10086",
      "reportTitle": ""
    },
    {
      "fileName": "",
      "hierarchy": "Distributed Solar Development : Public Documents : AlsoEnergy Public Docs : Reports : PV Reports",
      "key": "F91224",
      "language": "de-DE",
      "lastChanged": "2020-12-10T20:25:05Z",
      "name": "Site Actual, Expected and Estimated energy production (German)",
      "parentKey": "D4427",
      "reportTitle": ""
    },
    {
      "fileName": "",
      "hierarchy": "Distributed Solar Development : Public Documents : AlsoEnergy Public Docs : Reports : Timeline Reports",
      "key": "F98246",
      "language": "en-US",
      "lastChanged": "2026-02-06T22:56:04Z",
      "name": "Timeline Estimated Report",
      "parentKey": "D8742",
      "reportTitle": ""
    },
    {
      "fileName": "",
      "hierarchy": "Distributed Solar Development : Public Documents : AlsoEnergy Public Docs : Reports : PV Reports",
      "key": "F26434",
      "language": "",
      "lastChanged": "2026-02-06T22:54:02Z",
      "name": "Site Production and Alert Summary with Losses",
      "parentKey": "D4427",
      "reportTitle": ""
    },
    {
      "fileName": "",
      "hierarchy": "Distributed Solar Development : Public Documents : AlsoEnergy Public Docs : Reports : PV Reports",
      "key": "F26718",
      "language": "",
      "lastChanged": "2026-02-06T22:53:21Z",
      "name": "Site Capacity Analysis",
      "parentKey": "D4427",
      "reportTitle": ""
    },
    {
      "fileName": "",
      "hierarchy": "Distributed Solar Development : Public Documents : AlsoEnergy Public Docs : Reports : PV Reports",
      "key": "F84579",
      "language": "",
      "lastChanged": "2026-02-06T22:53:38Z",
      "name": "Site Capacity Analysis v2",
      "parentKey": "D4427",
      "reportTitle": ""
    },
    {
      "fileName": "",
      "hierarchy": "Distributed Solar Development : Public Documents : AlsoEnergy Public Docs : Reports : Monthly Portfolio Report Templates",
      "key": "F24478",
      "language": "",
      "lastChanged": "2018-03-23T22:22:20Z",
      "name": "Monthly Portfolio Report Template (production impact)",
      "parentKey": "D7960",
      "reportTitle": ""
    },
    {
      "fileName": "",
      "hierarchy": "Distributed Solar Development : Public Documents : AlsoEnergy Public Docs : Reports : Monthly Portfolio Report Templates",
      "key": "F29395",
      "language": "",
      "lastChanged": "2018-03-23T22:23:21Z",
      "name": "Monthly Portfolio Report Template",
      "parentKey": "D7960",
      "reportTitle": ""
    },
    {
      "fileName": "",
      "hierarchy": "Distributed Solar Development : Public Documents : AlsoEnergy Public Docs : Reports : Asset Management Reports : O&M Quarterly Report",
      "key": "F29861",
      "language": "",
      "lastChanged": "2016-09-09T19:23:04Z",
      "name": "Operations & Maintenance Quarterly Report Template",
      "parentKey": "D10322",
      "reportTitle": ""
    },
    {
      "fileName": "",
      "hierarchy": "Distributed Solar Development : GE - External Sites : External - None : GE Mobile Water - San Jose, CA : GE Mobile Water - San Jose, CA : Dashboards",
      "key": "F24166",
      "language": "",
      "lastChanged": "2015-08-20T22:48:58Z",
      "name": "Drone Video Dashboard",
      "parentKey": "D7856",
      "reportTitle": ""
    },
    {
      "fileName": "",
      "hierarchy": "Distributed Solar Development : GE - External Sites : External - None : GE Mobile Water - San Jose, CA : GE Mobile Water - San Jose, CA : Dashboards",
      "key": "F24261",
      "language": "",
      "lastChanged": "2015-08-21T01:20:37Z",
      "name": "Kiosk Building Consumption",
      "parentKey": "D7856",
      "reportTitle": ""
    },
    {
      "fileName": "",
      "hierarchy": "Distributed Solar Development : 5.2_Asset Operation External : External : NO O&M : Factory Pipe - Ukiah, CA : Dashboards",
      "key": "F27162",
      "language": "",
      "lastChanged": "2016-04-05T16:55:19Z",
      "name": "Buidling Profile Dash",
      "parentKey": "D9260",
      "reportTitle": ""
    },
    {
      "fileName": "",
      "hierarchy": "Distributed Solar Development : 5.2_Asset Operation External : External : O&M : Full Scope : MD-21-C408 Home Depot - Silver Spring, MD - (Store #2551) : INV Contol Dashboard",
      "key": "F93910",
      "language": "",
      "lastChanged": "2021-02-18T20:50:02Z",
      "name": "Home Depot Silver Spring, MD - (Store #2551) INV Control",
      "parentKey": "D45362",
      "reportTitle": ""
    },
    {
      "fileName": "",
      "hierarchy": "Distributed Solar Development : 5.2_Asset Operation External : External : O&M : Full Scope : MD-21-C412 THD 2018 PG County Bowie MD #2562 : INV Control Dashboard",
      "key": "F94059",
      "language": "",
      "lastChanged": "2021-02-17T11:31:44Z",
      "name": "THD Bowie Inv Control",
      "parentKey": "D45445",
      "reportTitle": ""
    },
    {
      "fileName": "",
      "hierarchy": "Distributed Solar Development : 5.2_Asset Operation External : External : O&M : Full Scope : MD-21-C409 Home Depot - Oxon Hill, MD - (Store #2554) : INV Control Dashboard",
      "key": "F94139",
      "language": "",
      "lastChanged": "2021-02-18T21:22:16Z",
      "name": "Home Depot Oxon Hill, MD (Store #2554) Inv Control",
      "parentKey": "D45499",
      "reportTitle": ""
    },
    {
      "fileName": "",
      "hierarchy": "Distributed Solar Development : 5.2_Asset Operation External : External : O&M : Full Scope : MD-21-C410 Home Depot - Capitol Heights, MD - (Store #2555) : INV Control Dashboard",
      "key": "F94143",
      "language": "",
      "lastChanged": "2021-02-18T21:34:14Z",
      "name": "Home Depot Capitol Heights, MD (Store #2555) Inv Control",
      "parentKey": "D45501",
      "reportTitle": ""
    },
    {
      "fileName": "",
      "hierarchy": "Distributed Solar Development : 5.2_Asset Operation External : External : O&M : Full Scope : MD-21-C411 Home Depot - Aspen Hill, MD - (Store #2558) : INV Control Dashboard",
      "key": "F94144",
      "language": "",
      "lastChanged": "2021-02-18T21:41:21Z",
      "name": "Home Depot Aspen Hill, MD (Store #2558) Inv Control",
      "parentKey": "D45502",
      "reportTitle": ""
    },
    {
      "fileName": "",
      "hierarchy": "Distributed Solar Development : 5.2_Asset Operation External : External : O&M : Full Scope : MD-21-C413 THD 2018 PG County Hyattsville MD #2564 : Inverter Control Dashboard",
      "key": "F94354",
      "language": "",
      "lastChanged": "2021-06-15T17:17:23Z",
      "name": "THD Hynattsville Inv Control",
      "parentKey": "D45620",
      "reportTitle": ""
    },
    {
      "fileName": "",
      "hierarchy": "Distributed Solar Development : 5.1_Asset Operation : EOS FUND : THD - Phillipsburg, NJ- (Store #931) : Queries",
      "key": "F98975",
      "language": "",
      "lastChanged": "2021-06-16T13:54:59Z",
      "name": "5 & 15 minute comparison",
      "parentKey": "D44830",
      "reportTitle": ""
    },
    {
      "fileName": "",
      "hierarchy": "Distributed Solar Development : 5.2_Asset Operation External : External : O&M : Full Scope : DC-21-C407 Home Depot - East Washington : INV Control Dashboard",
      "key": "F99572",
      "language": "",
      "lastChanged": "2021-06-29T06:19:42Z",
      "name": "Home Depot - NE Washington DC - (Store #2583) Inv Control",
      "parentKey": "D48297",
      "reportTitle": ""
    },
    {
      "fileName": "",
      "hierarchy": "Distributed Solar Development : 5.2_Asset Operation External : External : O&M : Full scope (Unplanned not included) : Verizon - Temple Terrace : INV Control Dashboard",
      "key": "F99642",
      "language": "",
      "lastChanged": "2021-06-30T08:44:00Z",
      "name": "Verizon - Temple Terrace Inv Control",
      "parentKey": "D48324",
      "reportTitle": ""
    },
    {
      "fileName": "",
      "hierarchy": "Distributed Solar Development : 5.2_Asset Operation External : External : O&M : Full Scope : Smith & Wesson - MA-21-C273 : Dashboards",
      "key": "F119023",
      "language": "",
      "lastChanged": "2021-12-16T21:18:51Z",
      "name": "Smith & Wesson Inverter Control #1",
      "parentKey": "D52288",
      "reportTitle": ""
    },
    {
      "fileName": "",
      "hierarchy": "Distributed Solar Development : 5.2_Asset Operation External : External : O&M : Full Scope : Smith & Wesson - MA-21-C273 : Dashboards",
      "key": "F119050",
      "language": "",
      "lastChanged": "2021-12-16T21:36:14Z",
      "name": "Smith & Wesson Inverter Control #2",
      "parentKey": "D52288",
      "reportTitle": ""
    },
    {
      "fileName": "",
      "hierarchy": "Distributed Solar Development : 5.2_Asset Operation External : External : O&M : Full Scope : DC-21-C407 Home Depot - East Washington : Dashboards",
      "key": "F119183",
      "language": "",
      "lastChanged": "2021-12-17T18:09:10Z",
      "name": "Home Depot Store #2583 Inv Control",
      "parentKey": "D16810",
      "reportTitle": ""
    },
    {
      "fileName": "",
      "hierarchy": "Distributed Solar Development : 3.0_Commissioning : Highland Ave : Dashboards",
      "key": "F163164",
      "language": "",
      "lastChanged": "2023-08-18T21:22:20Z",
      "name": "Highland Ave Recloser Control Dashboard",
      "parentKey": "D71055",
      "reportTitle": ""
    },
    {
      "fileName": "",
      "hierarchy": "Distributed Solar Development : 5.2_Asset Operation External : External : O&M : Full scope (Unplanned not included) : IKEA - San Diego : Dashboards",
      "key": "F203261",
      "language": "",
      "lastChanged": "2025-08-20T19:06:45Z",
      "name": "Inverter Control Dashboard",
      "parentKey": "D94941",
      "reportTitle": ""
    },
    {
      "fileName": "",
      "hierarchy": "Distributed Solar Development : 3.0_Commissioning : IKEA - East Palo Alto : Dashboards",
      "key": "F205314",
      "language": "",
      "lastChanged": "2025-09-24T21:01:59Z",
      "name": "Inverter Control Dashboard",
      "parentKey": "D96109",
      "reportTitle": ""
    },
    {
      "fileName": "",
      "hierarchy": "Distributed Solar Development : 5.2_Asset Operation External : External : O&M : IKEA - Tempe RT : Dashboards",
      "key": "F205323",
      "language": "",
      "lastChanged": "2025-09-23T17:23:06Z",
      "name": "Inverter Control Dashboard",
      "parentKey": "D96110",
      "reportTitle": ""
    },
    {
      "fileName": "",
      "hierarchy": "Distributed Solar Development : Invoices",
      "key": "F38297",
      "language": "",
      "lastChanged": "2017-10-06T17:17:25Z",
      "name": "Rate Schedule Invoice (GE)",
      "parentKey": "D7912",
      "reportTitle": ""
    }
  ]
}
```

[Return to top](#top)

