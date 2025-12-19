# PowerTrack API Documentation

Currently Documented Endpoints: 67

---

## Table of Contents

1. [/api/alerttrigger](documentation/alerttrigger.md)
2. [/api/alerttrigger/{alertKey}](documentation/alerttrigger_alertkey.md)
3. [/api/alerttrigger/{hardware_id}](documentation/alerttrigger_hardware_id.md)
4. [/api/alerttrigger/{parentKey}/{key}](documentation/alerttrigger_delete.md)
5. [/api/alerttrigger/{site_id}](documentation/alerttrigger_site_id.md)
6. [/api/applinks](documentation/applinks.md)
7. [/api/appsettings/powertrack](documentation/appsettings_powertrack.md)
8. [/api/auditlog](documentation/auditlog.md)
9. [/api/binding/batch](documentation/binding_batch.md)
10. [/api/edit/customer/{customer_id}](documentation/edit_customer_customer_id.md)
11. [/api/edit/hardware](documentation/edit_hardware.md)
12. [/api/edit/hardware/gateway/defaultparams/{id}E855C584](documentation/edit_hardware_gateway_defaultparams_idE855C584.md)
13. [/api/edit/hardware/gateway/info/{hardwareId}](documentation/edit_hardware_gateway_info_hardwareid.md)
14. [/api/edit/hardware/{hardware_id}](documentation/edit_hardware_hardware_id.md)
15. [/api/edit/modeling](documentation/edit_modeling.md)
16. [/api/edit/modeling/{site_id}](documentation/edit_modeling_site_id.md)
17. [/api/edit/pvsystmodule](documentation/edit_pvsystmodule.md)
18. [/api/edit/site/{site_id}](documentation/edit_site_site_id.md)
19. [/api/edit/sitehardware/{site_id}](documentation/edit_sitehardware_site_id.md)
20. [/api/grafana/config](documentation/grafana_config.md)
21. [/api/lookuplist/timeZones](documentation/lookuplist_timeZones.md)
22. [/api/node](documentation/node.md)
23. [/api/node/batch](documentation/node_batch.md)
24. [/api/node/favorites](documentation/node_favorites.md)
25. [/api/node/{customer_id}](documentation/node_customer_id.md)
26. [/api/node/{site_id}](documentation/node_site_id.md)
27. [/api/node/{user_id}](documentation/node_user_id.md)
28. [/api/notifications/session](documentation/notifications_session.md)
29. [/api/projectmanagement/{site_id}](documentation/projectmanagement_site_id.md)
30. [/api/reportconfig](documentation/reportconfig.md)
31. [/api/reportconfig/new/{customerId}/{type}/{undefined}](documentation/reportconfig_new_customerid_type_undefined.md)
32. [/api/reporting](documentation/reporting.md)
33. [/api/subscription/{subscriptionId}](documentation/subscription_subscriptionid.md)
34. [/api/tag](documentation/tag.md)
35. [/api/task/all](documentation/task_all.md)
36. [/api/task/start](documentation/task_start.md)
37. [/api/userpreferences](documentation/userpreferences.md)
38. [/api/view/activealerts/activesummary/{customer_id}](documentation/view_activealerts_activesummary_customer_id.md)
39. [/api/view/activealerts/activesummary/{hardware_id}](documentation/view_activealerts_activesummary_hardware_id.md)
40. [/api/view/activealerts/activesummary/{site_id}](documentation/view_activealerts_activesummary_site_id.md)
41. [/api/view/activealerts/{customer_id}](documentation/view_activealerts_customer_id.md)
42. [/api/view/activealerts/{hardware_id}](documentation/view_activealerts_hardware_id.md)
43. [/api/view/activealerts/{site_id}](documentation/view_activealerts_site_id.md)
44. [/api/view/alerthistory](documentation/view_alerthistory.md)
45. [/api/view/chart](documentation/view_chart.md)
46. [/api/view/chart/builtin](documentation/view_chart_builtin.md)
47. [/api/view/chart/kpimenu](documentation/view_chart_kpimenu.md)
48. [/api/view/chart/kpioptions/{site_id}](documentation/view_chart_kpioptions_site_id.md)
49. [/api/view/driverregisters/{hardware_id}](documentation/view_driverregisters_hardware_id.md)
50. [/api/view/driversettings/list/{id}](documentation/view_driversettings_list_id.md)
51. [/api/view/driversettings/{hardware_id}](documentation/view_driversettings_hardware_id.md)
52. [/api/view/hardwarenavigatorstatus/{site_id}](documentation/view_hardwarenavigatorstatus_site_id.md)
53. [/api/view/hardwarestatus/status/{hardware_id}](documentation/view_hardwarestatus_status_hardware_id.md)
54. [/api/view/hardwarestatus/{hardware_id}](documentation/view_hardwarestatus_hardware_id.md)
55. [/api/view/portfolio/{customer_id}](documentation/view_portfolio_customer_id.md)
56. [/api/view/pvcurvemodels/efficiencycurvemodels](documentation/view_pvcurvemodels_efficiencycurvemodels.md)
57. [/api/view/pvcurvemodels/incidenceanglemodels](documentation/view_pvcurvemodels_incidenceanglemodels.md)
58. [/api/view/pvsystmodules/{hardware_id}](documentation/view_pvsystmodules_hardware_id.md)
59. [/api/view/pvsystmodules/{site_id}](documentation/view_pvsystmodules_site_id.md)
60. [/api/view/registeroffsets/{hardware_id}](documentation/view_registeroffsets_hardware_id.md)
61. [/api/view/reportconfigs](documentation/view_reportconfigs.md)
62. [/api/view/site/{site_id}](documentation/view_site_site_id.md)
63. [/api/view/sitehardware](documentation/view_sitehardware.md)
64. [/api/view/sitehardwareproduction/{site_id}](documentation/view_sitehardwareproduction_site_id.md)
65. [/api/view/sitelinks/{site_id}](documentation/view_sitelinks_site_id.md)
66. [/api/view/sitesharelocations/{site_id}](documentation/view_sitesharelocations_site_id.md)
67. [/api/view/siteshares/{site_id}](documentation/view_siteshares_site_id.md)

---

## API Usage Guide

### Authentication & Access Methods

PowerTrack provides two primary ways to access API data:

#### 1. Internal API Access (Current Documentation)
- **Method**: Direct access using session tokens captured from browser DevTools
- **Authentication**: Requires `ae_s` (session token), `ae_v` (version), and full PowerTrack session cookie
- **Usage**: Suitable for internal automation and scripts that need full access
- **Headers Required**:
  - `ae_s`: Session-specific HMAC token (changes per session)
  - `ae_v`: Client version (typically "c75711" or "9bacbb")
  - `cookie`: Complete `.AspNet.Cookies` bundle from active session
  - `Referer`: Must match the PowerTrack page being emulated

#### 2. Read-Only Public API (Recommended for External Use)
- **Method**: OAuth 2.0 authentication via `/Auth/token` endpoint
- **Authentication**: Client credentials or authorization code flow
- **Usage**: For third-party applications and read-only data access
- **Base URL**: `https://api.alsoenergy.com/v1/`
- **Supported Endpoints**: Sites, Hardware, Charts, Data, Alerts (read-only operations)

**Public API Authentication Flow:**
1. Register for API credentials (client_id, client_secret)
2. POST to `/Auth/token` with grant_type=password:
   ```bash
   curl -X POST https://api.alsoenergy.com/Auth/token \
     -H "Content-Type: application/x-www-form-urlencoded" \
     -d "grant_type=password&username=YOUR_USERNAME&password=YOUR_PASSWORD&client_id=YOUR_CLIENT_ID&client_secret=YOUR_CLIENT_SECRET"
   ```
3. Receive access_token and refresh_token
4. Use Bearer token in Authorization header for subsequent requests

**Example Public API Call:**
```bash
curl -X GET "https://api.alsoenergy.com/v1/Sites" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN"
```

### Key Differences

| Feature | Internal API | Public API |
|---------|-------------|------------|
| Authentication | Session cookies + tokens | OAuth 2.0 |
| Access Level | Full read/write | Read-only |
| Rate Limits | None enforced | Rate limited |
| Documentation | Internal captures | OpenAPI/Swagger |
| Stability | Subject to UI changes | Versioned API |

### Choosing the Right Method

- **Use Internal API** for:
  - Writing data (PUT/POST operations)
  - Internal automation scripts
  - Full hardware configuration access
  - When you have active PowerTrack web sessions

- **Use Public API** for:
  - Third-party applications
  - Read-only data retrieval
  - Production integrations
  - When OAuth authentication is preferred

For detailed endpoint specifications, see the [OpenAPI documentation](api reference/v1-swagger.json) and the [API usage reference](API_USAGE.md).

---