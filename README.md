# PowerTrack API Documentation

This repository contains automatically generated documentation for the AlsoEnergy PowerTrack Web API endpoints. The documentation is derived from intercepted API calls during browser usage and is intended for use with a client wrapper that handles authentication via session cookies.

**Important Notes:**
- This documentation is not related to AlsoEnergy's official SOAP or REST APIs.
- It documents the internal JSON-based endpoints used by the PowerTrack web application.
- Authentication must be handled via browser session cookies (AE-S, AE-V, etc.).
- Endpoints may change without notice as they are internal to the web app.

## Table of Contents

### GET Endpoints
- [/api/alerttrigger/{alert_id}](docs/GET/alerttrigger_alert_id.md)
- [/api/alerttrigger/{hardware_id}](docs/GET/alerttrigger_hardware_id.md)
- [/api/alerttrigger/new/{hardware_id}/AI250](docs/GET/alerttrigger_new_hardware_id_AI250.md)
- [/api/alerttrigger/{site_id}](docs/GET/alerttrigger_site_id.md)
- [/api/applinks](docs/GET/applinks.md)
- [/api/appsettings/powertrack](docs/GET/appsettings_powertrack.md)
- [/api/edit/customer/{customer_id}](docs/GET/edit_customer_customer_id.md)
- [/api/edit/hardware/{hardware_id}](docs/GET/edit_hardware_hardware_id.md)
- [/api/edit/modeling/{site_id}](docs/GET/edit_modeling_site_id.md)
- [/api/edit/site/{site_id}](docs/GET/edit_site_site_id.md)
- [/api/edit/sitehardware/{site_id}](docs/GET/edit_sitehardware_site_id.md)
- [/api/grafana/config](docs/GET/grafana_config.md)
- [/api/lookuplist/alertTypes/{hardware_id}](docs/GET/lookuplist_alertTypes_hardware_id.md)
- [/api/lookuplist/timeZones](docs/GET/lookuplist_timeZones.md)
- [/api/netsuite/cases/{site_id}](docs/GET/netsuite_cases_site_id.md)
- [/api/node/favorites](docs/GET/node_favorites.md)
- [/api/node/{hardware_id}](docs/GET/node_hardware_id.md)
- [/api/node/{site_id}](docs/GET/node_site_id.md)
- [/api/node/{user_id}](docs/GET/node_user_id.md)
- [/api/production/{site_id}](docs/GET/production_site_id.md)
- [/api/projectmanagement/{site_id}](docs/GET/projectmanagement_site_id.md)
- [/api/subscription/{hardware_id}](docs/GET/subscription_hardware_id.md)
- [/api/subscription/{site_id}](docs/GET/subscription_site_id.md)
- [/api/task/all](docs/GET/task_all.md)
- [/api/userpreferences](docs/GET/userpreferences.md)
- [/api/view/activealerts/activesummary/{customer_id}](docs/GET/view_activealerts_activesummary_customer_id.md)
- [/api/view/activealerts/activesummary/{hardware_id}](docs/GET/view_activealerts_activesummary_hardware_id.md)
- [/api/view/activealerts/activesummary/{site_id}](docs/GET/view_activealerts_activesummary_site_id.md)
- [/api/view/activealerts/{customer_id}](docs/GET/view_activealerts_customer_id.md)
- [/api/view/driversettings/list/{id}](docs/GET/view_driversettings_list_id.md)
- [/api/view/hardwarenavigatorstatus/{site_id}](docs/GET/view_hardwarenavigatorstatus_site_id.md)
- [/api/view/hardwarestatus/status/{hardware_id}](docs/GET/view_hardwarestatus_status_hardware_id.md)
- [/api/view/portfolio/{customer_id}](docs/GET/view_portfolio_customer_id.md)
- [/api/view/pvsystmodules/{site_id}](docs/GET/view_pvsystmodules_site_id.md)
- [/api/view/registeroffsets/{hardware_id}](docs/GET/view_registeroffsets_hardware_id.md)
- [/api/view/site/{site_id}](docs/GET/view_site_site_id.md)
- [/api/view/sitehardwareproduction/{site_id}](docs/GET/view_sitehardwareproduction_site_id.md)
- [/api/view/sitelinks/{site_id}](docs/GET/view_sitelinks_site_id.md)
- [/api/view/sitesharelocations/{site_id}](docs/GET/view_sitesharelocations_site_id.md)
- [/api/view/siteshares/{site_id}](docs/GET/view_siteshares_site_id.md)
- [/api/view/siteweather/{site_id}](docs/GET/view_siteweather_site_id.md)
- [/api/view/tickets/{site_id}/activecount](docs/GET/view_tickets_site_id_activecount.md)

### POST Endpoints
- [/api/alerttrigger](docs/POST/alerttrigger.md)
- [/api/alerttrigger/test](docs/POST/alerttrigger_test.md)
- [/api/alerttriggers](docs/POST/alerttriggers.md)
- [/api/edit/site/getCalculatedElevation](docs/POST/edit_site_getCalculatedElevation.md)
- [/api/edit/sitehardware/checkallhardware](docs/POST/edit_sitehardware_checkallhardware.md)
- [/api/node](docs/POST/node.md)
- [/api/node/batch](docs/POST/node_batch.md)
- [/api/tag](docs/POST/tag.md)
- [/api/userpreferences](docs/POST/userpreferences.md)
- [/api/view/chart](docs/POST/view_chart.md)
- [/api/view/chart/builtin](docs/POST/view_chart_builtin.md)
- [/api/view/sitehardware](docs/POST/view_sitehardware.md)

### PUT Endpoints
- [/api/alerttrigger](docs/PUT/alerttrigger.md)
- [/api/edit/hardware](docs/PUT/edit_hardware.md)
- [/api/edit/site](docs/PUT/edit_site.md)
- [/api/edit/sitehardware](docs/PUT/edit_sitehardware.md)

### DELETE Endpoints
- [/api/alerttrigger/{hardware_id}/{alert_id}](docs/DELETE/alerttrigger_hardware_id_alert_id.md)

## Generation Details
- Generated: 2025-12-22
- Total Endpoints: 52
- Source: Browser-intercepted API calls from PowerTrack web application
- Tool: Custom extension for AlsoEnergy PowerTrack API documentation

## Usage
These endpoints require valid session authentication via cookies. Use a browser automation tool or custom client that maintains session state with AlsoEnergy's PowerTrack application.