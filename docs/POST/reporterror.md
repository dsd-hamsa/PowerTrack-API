<a id="top"></a>
# /api/reporterror

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
    "details": {
      "type": "string"
    },
    "environment": {
      "type": "string"
    },
    "errorDescription": {
      "type": "string"
    },
    "errorType": {
      "type": "string"
    },
    "location": {
      "type": "string"
    },
    "stackTrace": {
      "type": "string"
    },
    "state": {
      "type": "string"
    },
    "userId": {
      "type": "string"
    }
  }
}
```

[Return to top](#top)

## Example

**Request:**

```http
POST /api/reporterror
Content-Type: application/json
ae_s: *WPOMs1+UDquA3lmqjIlKm9mGjr7uixpBspy0HA==
ae_v: 05fc89
referer: https://apps.alsoenergy.com/powertrack/C16295/overview/dashboard
```

**Payload:**

```json
{
  "details": "{\"context\":{\"autoLogoff\":60,\"customerKey\":\"C8458\",\"customerName\":\"Distributed Solar Development\",\"customerPath\":\"C1 C2 C8458\",\"topCustomerName\":\"Distributed Solar Development\",\"email\":\"josh.hamsa@dsdrenewables.com\",\"metric\":false,\"userId\":\"57916\",\"userKey\":\"U57916\",\"userName\":\"josh.hamsa@dsdrenewables.com\",\"userFirstName\":\"Josh\",\"userLastName\":\"Hamsa\",\"userLanguage\":\"en-US\",\"authAsName\":\"josh.hamsa@dsdrenewables.com\",\"obfuscate\":false,\"isImpersonating\":false,\"roles\":{\"customer_view\":true,\"customer_add\":true,\"customer_edit\":true,\"site_view\":true,\"site_edit\":true,\"hardware_view\":true,\"hardware_edit\":true,\"user_view\":true,\"user_add\":true,\"user_edit\":true,\"user_delete\":true,\"alert_view\":true,\"alert_add\":true,\"alert_disable\":true,\"alert_resolve\":true,\"alert_ui\":true,\"folder_view\":true,\"folder_add\":true,\"folder_edit\":true,\"folder_delete\":true,\"file_view\":true,\"file_add\":true,\"file_edit\":true,\"file_delete\":true,\"file_upload\":true,\"file_resolve\":true,\"externallink_view\":true,\"tag_view\":true,\"workflow_view\":true,\"maintenance_view\":true,\"maintenance_add\":true,\"maintenance_edit\":true,\"maintenance_delete\":true,\"maintenance_resolve\":true,\"shipping_view\":true,\"shipping_add\":true,\"shipping_edit\":true,\"shipping_resolve\":true,\"ticket_view\":true,\"ticket_add\":true,\"ticket_edit\":true,\"ticket_resolve\":true,\"alertticket_view\":true,\"alertticket_add\":true,\"alertticket_edit\":true,\"alertticket_delete\":true,\"alertticket_resolve\":true,\"task_view\":true,\"task_add\":true,\"task_edit\":true,\"task_resolve\":true,\"sitesetup_view\":true,\"sitesetup_add\":true,\"sitesetup_edit\":true,\"sitesetup_resolve\":true,\"advancedhardware_edit\":true,\"device_command_ask\":true,\"tech\":true,\"site_admin\":true,\"cust_admin\":true,\"finance_view\":true,\"finance_edit\":true,\"virtuallink_edit\":true,\"accountnotice\":true,\"marketplace\":true,\"projectmanagement_view\":true,\"projectmanagement_edit\":true,\"role_view\":true,\"role_manage\":true,\"event_view\":true,\"event_add\":true,\"event_edit\":true,\"event_delete\":true,\"event_manage\":true,\"event_control\":true,\"hardware_dev_edit\":true,\"virtuallink_view\":true,\"device_command_syncconfig\":true},\"featureFlags\":{\"hardware_comm_status\":true,\"site_status\":true,\"portfolio_tune_up\":false,\"is_support_case_api_enabled\":false,\"is_vpn_audit_report_enabled\":true,\"is_simulate_alert_enabled\":false,\"ai_site_summary_enabled\":true,\"ai_site_summary_instant_refresh\":false},\"announcements\":[],\"nodeHistory\":[{\"key\":\"C16295\",\"kind\":\"customer\"}],\"appName\":\"ptweb-3\"},\"history\":[{\"title\":\"Beta Views Navigation\"},{\"title\":\"Click on Sub Nav Link\",\"meta\":{\"label\":\"Dashboard\",\"to\":\"/C16295/overview/dashboard\"}},{\"title\":\"Beta Views Navigation\"},{\"title\":\"Beta Views Navigation\"},{\"title\":\"Beta Views Navigation\"},{\"title\":\"Beta Views Navigation\"},{\"title\":\"Beta Views Navigation\"},{\"title\":\"Beta Views Navigation\"},{\"title\":\"Beta Views Navigation\"},{\"title\":\"Beta Views Navigation\"}]}",
  "environment": "",
  "errorDescription": "Highcharts error #10: www.highcharts.com/errors/10/",
  "errorType": "Error",
  "location": "https://apps.alsoenergy.com/powertrack/C16295/overview/dashboard",
  "stackTrace": "Error: Highcharts error #10: www.highcharts.com/errors/10/\n    at Object.<anonymous> (https://apps.alsoenergy.com/Scripts/powertrack.en-US.js?hash=160c9ff0f27034307987be0cdef73634&lang=en-US:9640:138)\n    at C (https://apps.alsoenergy.com/Scripts/powertrack.en-US.js?hash=160c9ff0f27034307987be0cdef73634&lang=en-US:9640:2591)\n    at r (https://apps.alsoenergy.com/Scripts/powertrack.en-US.js?hash=160c9ff0f27034307987be0cdef73634&lang=en-US:9640:61)\n    at G.setTickInterval (https://apps.alsoenergy.com/Scripts/powertrack.en-US.js?hash=160c9ff0f27034307987be0cdef73634&lang=en-US:9640:87396)\n    at G.setScale (https://apps.alsoenergy.com/Scripts/powertrack.en-US.js?hash=160c9ff0f27034307987be0cdef73634&lang=en-US:9640:93630)\n    at https://apps.alsoenergy.com/Scripts/powertrack.en-US.js?hash=160c9ff0f27034307987be0cdef73634&lang=en-US:9640:199503\n    at Array.forEach (<anonymous>)\n    at Q.redraw (https://apps.alsoenergy.com/Scripts/powertrack.en-US.js?hash=160c9ff0f27034307987be0cdef73634&lang=en-US:9640:199465)\n    at Q.update (https://apps.alsoenergy.com/Scripts/powertrack.en-US.js?hash=160c9ff0f27034307987be0cdef73634&lang=en-US:9640:216574)\n    at https://apps.alsoenergy.com/Scripts/12.cb008f0d342c8ca22dc6.js:6:2863",
  "state": "{\"browser\":\"Chrome 147\",\"platform\":\"Win32\",\"cookieEnabled\":true,\"language\":\"en-US\",\"plugins\":[\"PDF Viewer\",\"Chrome PDF Viewer\",\"Chromium PDF Viewer\",\"Microsoft Edge PDF Viewer\",\"WebKit built-in PDF\"]}",
  "userId": "$anonymous"
}
```

[Return to top](#top)

