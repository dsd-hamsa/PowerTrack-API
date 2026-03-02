# Pacific Ridge School

_Generated from `chart_enums.json`_

| Field | Value |
| --- | --- |
| name | Pacific Ridge School |
| timeZoneOffset | -8.0 |
| defaultChart | 15 |
| chartMenuSections | 9 |

## Chart Menu Sections

| # | Title | Section Code | Hardware Options | Charts |
| --- | --- | --- | --- | --- |
| 1 | [Inverter](#section-1-inverter) | 1 | 1 | 56 |
| 2 | [Production](#section-2-production) | 2 | 2 | 38 |
| 3 | [Weather](#section-4-weather) | 4 | 5 | 9 |
| 4 | [Strings](#section-5-strings) | 5 | 1, 6, 7, 8 | 1 |
| 5 | [Zones](#section-6-zones) | 6 | 1, 6, 7, 8 | 1 |
| 6 | [Site Aggregate](#section-17-site-aggregate) | 17 |  | 28 |
| 7 | [Summary](#section-18-summary) | 18 |  | 16 |
| 8 | [Admin](#section-20-admin) | 20 |  | 7 |
| 9 | [Alert](#section-21-alert) | 21 |  | 4 |

<a id="section-1-inverter"></a>
## Inverter

| Field | Value |
| --- | --- |
| sectionCode | 1 |
| hardwareOptions | 1 |
| predefinedCharts | 56 |

### Charts

| # | Display Name | Chart Type | Advanced | Parameters | Description |
| --- | --- | --- | --- | --- | --- |
| 1 | [Actual & Expected Sum](#chart-1-77-actual-expected-sum) | 77 | true | 4 | Shows the sum of all inverters, along with the sum of the expected (modeled) output for all inverters. |
| 2 | [Analyzer: (PV / model ratio)](#chart-1-53-analyzer-pv-model-ratio) | 53 | true | 2 | The performance index, along with module temperature and irradiance |
| 3 | [Analyzer: normalized inverter yield](#chart-1-51-analyzer-normalized-inverter-yield) | 51 | true | 0 | The normalized yield is the output divided by the DC system size, adjusted for orientation. This shows the what the relative performance of different systems would be if they were all the same size and facing the same direction. |
| 4 | [Cumulative Energy](#chart-1-24-cumulative-energy) | 24 | true | 1 |  |
| 5 | [Data Classification](#chart-1-204-data-classification) | 204 | true | 4 | Determine classification of data based on machine learning algorithms (currently only works for shading). |
| 6 | [DC Current vs. Expected](#chart-1-201-dc-current-vs-expected) | 201 | true | 0 | Scatter plot showing DC current relative to the expected DC current |
| 7 | [DC Voltage vs. Module Temperature](#chart-1-199-dc-voltage-vs-module-temperature) | 199 | true | 0 | Scatter plot showing inverter DC voltage relative to module temperature |
| 8 | [Efficiency](#chart-1-5-efficiency) | 5 | true | 0 | Inverter AC power output divided by DC power input. |
| 9 | [Energy Ratio](#chart-1-176-energy-ratio) | 176 | false | 1 | The Energy Ratio is the ratio of energy to Plane of Array insolation.  This can be calculated using insolation, insolation normalized to 25 °C, or the expected energy based on the PV model.  Change the type of calculation with the "Energy Ratio Mode" chart input parameter or the Performance Test Type (on the Site Setup / Performance page). |
| 10 | [Energy weighted availability](#chart-1-248-energy-weighted-availability) | 248 | false | 0 | Availability for all inverters on a site, as the ratio of energy loss to modeled energy (based on IEC 63019, section B.3).  This calculation uses expected energy when available and estimated energy when expected energy can't be calculated. |
| 11 | [Environmental Impact](#chart-1-61-environmental-impact) | 61 | true | 1 |  |
| 12 | [Fill Energy Gaps](#chart-1-249-fill-energy-gaps) | 249 | true | 0 | Fill gaps in energy and power when generation appears to have occurred during a data outage. |
| 13 | [Hourly Yield](#chart-1-171-hourly-yield) | 171 | true | 0 | The hourly yield is the ratio of energy output to DC system size.  It represents the energy production as the equivalent percentage of time at full DC power output. |
| 14 | [Inverter AC](#chart-1-8-inverter-ac) | 8 | true | 0 | Inverter output voltage and current. |
| 15 | [Inverter Availability](#chart-1-259-inverter-availability) | 259 | false | 2 | Inverter Availability, based on the site availability settings |
| 16 | [Inverter DC](#chart-1-7-inverter-dc) | 7 | true | 0 | Inverter input voltage and current. |
| 17 | [Inverter Downtime Days](#chart-1-246-inverter-downtime-days) | 246 | true | 0 | Show the number of days for each inverter with less than 95% availability. |
| 18 | [Inverter faults](#chart-1-252-inverter-faults) | 252 | true | 0 | Show inverter fault data. |
| 19 | [Inverter Performance](#chart-1-73-inverter-performance) | 73 | true | 5 | Inverter production with reference models |
| 20 | [Inverter Phases](#chart-1-84-inverter-phases) | 84 | true | 0 | Detailed inverter data, including individual phase voltages, currents and power factor |
| 21 | [Inverter variance](#chart-1-198-inverter-variance) | 198 | true | 0 | Show the variance between the yield of each inverter relative to the maximum yield from all inverters for each time interval.  View as a data table to see variances highlighted in color. |
| 22 | [Inverter/Model variance](#chart-1-196-inverter-model-variance) | 196 | true | 0 | Show the variance between the power produced relative to the expected modeled power.  View as a data table to see variances highlighted in color. |
| 23 | [Maximum power output](#chart-1-167-maximum-power-output) | 167 | true | 1 | The sum of the maximum power output for production meters or inverters for each interval.  Also calculates the maximum power over the entire query span. |
| 24 | [Module Degrade Inverter](#chart-1-226-module-degrade-inverter) | 226 | true | 0 | Calculate module degradation per inverter using the NREL Module Degradation Algorithm (requires at least two years of data, more years of data will give better results).  This calculation may not produce useful results if the data is inconsistent.  This query takes a long time to run and is therefore not suitable for interactive charts.  Please use this query in reports. |
| 25 | [Module Degrade Site](#chart-1-203-module-degrade-site) | 203 | true | 0 | Calculate module degradation of the entire site using the NREL Module Degradation Algorithm (requires at least two years of data, more years of data will give better results).  This calculation may not produce useful results if the data is inconsistent.  This query takes a long time to run and is therefore not suitable for interactive charts.  Please use this query in reports. |
| 26 | [MPPT](#chart-1-120-mppt) | 120 | true | 0 | Show individual inverter Max Power Point Tracker data. |
| 27 | [MPPT Normalized Yield](#chart-1-122-mppt-normalized-yield) | 122 | true | 0 | Show individual inverter Max Power Point Tracker yield, adjusted for orientation. This shows the what the relative performance of different systems would be if they were all the same size and facing the same direction. |
| 28 | [MPPT Yield](#chart-1-121-mppt-yield) | 121 | true | 0 | Show individual inverter Max Power Point Tracker yield. |
| 29 | [Normalized Yield](#chart-1-22-normalized-yield) | 22 | true | 0 | The normalized yield is the output divided by the DC system size, adjusted for orientation. This shows the what the relative performance of different systems would be if they were all the same size and facing the same direction. |
| 30 | [NREL Performance Ratio](#chart-1-185-nrel-performance-ratio) | 185 | true | 5 | Temperature adjusted performance ratio using the methodology described in NREL/TP-5200-57991 (module temperature calculated from ambient temperature, irradiance and wind speed). |
| 31 | [Peak daily power](#chart-1-233-peak-daily-power) | 233 | true | 0 | Peak power for the given meters or inverters |
| 32 | [Peak kW to DC Size Comparison](#chart-1-100-peak-kw-to-dc-size-comparison) | 100 | true | 0 | Shows relative peak performance over time |
| 33 | [Performance (side by side)](#chart-1-3-performance-side-by-side) | 3 | true | 3 | This chart shows the output each inverter or meter in the system side-by-side. For systems with similarly sized components, this is a simple way to evaluate the relative performance of each component in the system. |
| 34 | [Performance Histogram](#chart-1-30-performance-histogram) | 30 | true | 0 | Performance ratio relative to reference. |
| 35 | [Performance Index](#chart-1-57-performance-index) | 57 | true | 4 | Power output divided by the expected output using the PV model for each inverter, based on module temperature and irradiance. |
| 36 | [Performance Ratio](#chart-1-23-performance-ratio) | 23 | true | 5 | Performance ratio shows power output relative to irradiance and system size, adjusted for module temperature. |
| 37 | [Power vs. Expected](#chart-1-200-power-vs-expected) | 200 | true | 0 | Scatter plot showing power output relative to the expected (modeled) power |
| 38 | [Production and Estimate](#chart-1-2-production-and-estimate) | 2 | false | 4 | The Production and Estimate chart shows inverter output along with the estimated output.  When viewing individual days, performance is shown in terms of power.  Energy is shown when viewing longer time spans. |
| 39 | [Production and Expected](#chart-1-6-production-and-expected) | 6 | false | 4 | Inverter production and expected production based on the PV model using measured irradiance and module temperature |
| 40 | [PV Model Components](#chart-1-80-pv-model-components) | 80 | true | 0 | Individual model components contributing to the expected production, based on irradiance and module temperature |
| 41 | [PV Model Error](#chart-1-81-pv-model-error) | 81 | true | 0 | The difference between the full PV model and the actual production |
| 42 | [PV Model Incidence Angle Setup](#chart-1-68-pv-model-incidence-angle-setup) | 68 | true | 0 | Performance as a function of incidence angle, for fine-tuning the incidence angle modifier |
| 43 | [PV Model Losses](#chart-1-72-pv-model-losses) | 72 | true | 3 | Inverter model results and associated losses |
| 44 | [PV Model Scatter](#chart-1-82-pv-model-scatter) | 82 | true | 0 | The correlation between inverter output and the PV Model as a scatter plot |
| 45 | [PV Model Setup](#chart-1-58-pv-model-setup) | 58 | true | 0 | Detailed data used by the PV model and allows fine-tuning of the PV model parameters based on analysis of the data |
| 46 | [PV Model Shade Impact Setup](#chart-1-69-pv-model-shade-impact-setup) | 69 | true | 3 | Performance, solar azimuth/elevation and incidence angle, for creating a shade impact model. |
| 47 | [PVG: Adjusted Power Curve Method (BnetzA – Germany)](#chart-1-241-pvg-adjusted-power-curve-method-bnetza-germany) | 241 | true | 1 | Skytron PV Guard energy loss calculation using the Adjusted Power Curve Method.  Requires irradiance data without gaps. |
| 48 | [PVG: Flat rate without registering power measurement](#chart-1-244-pvg-flat-rate-without-registering-power-measurement) | 244 | true | 0 | Energy loss calculation using the flat-rate procedure without reference data (Bundesnetzagentur Guide to feed-in management, version 3.0 section 2.3.4.2). |
| 49 | [PVG: Last Measured Value Method (BnetzA – Germany)](#chart-1-242-pvg-last-measured-value-method-bnetza-germany) | 242 | true | 0 | Skytron PV Guard energy loss calculation using the Last Measured Value Method |
| 50 | [PVG: Reference Inverter](#chart-1-243-pvg-reference-inverter) | 243 | true | 0 | Skytron PV Guard energy loss calculation for a meter using a nearby reference inverter |
| 51 | [Soiling Detector](#chart-1-78-soiling-detector) | 78 | true | 1 | Analyzes inverter performance data to identify when production is being impacted by dirt on the modules and calculates the resulting energy loss. |
| 52 | [String Availability](#chart-1-271-string-availability) | 271 | true | 3 | Shows the availability for DC strings (number of operating strings / number of strings) |
| 53 | [Synthesized Power](#chart-1-228-synthesized-power) | 228 | true | 2 | Estimates power for an inverter or meter, using the best available nearby device or weather data. |
| 54 | [Uptime](#chart-1-28-uptime) | 28 | true | 1 | The uptime is calculated when the required minimum irradiance is configured within the Site Setup Performance options (default = 100 w/m²).  The percentage is 100% for every 15 minute interval when the inverter is producing power.  If no weather data is available for a sample, then that 15 minute period is ignored.  The weighted-average for the time span is calculated for all inverters based on their relative system size. |
| 55 | [Year over year production](#chart-1-54-year-over-year-production) | 54 | true | 0 |  |
| 56 | [Yield](#chart-1-4-yield) | 4 | false | 1 | The yield is the output divided by the DC system size. This is used to evaluate performance between difference size systems. |

<a id="chart-1-77-actual-expected-sum"></a>
### Actual & Expected Sum

| Field | Value |
| --- | --- |
| chartType | 77 |
| isAdvanced | true |
| chartDescription | Shows the sum of all inverters, along with the sum of the expected (modeled) output for all inverters. |
| parameters | 4 |

#### Parameters

| # | Id | Type | Value | Selection Items |
| --- | --- | --- | --- | --- |
| 1 | [52](#param-1-77-actual-expected-sum-52) | 29 | Pow | 7 |
| 2 | [4](#param-1-77-actual-expected-sum-4) | 16 | False | 0 |
| 3 | [31](#param-1-77-actual-expected-sum-31) | 16 | False | 0 |
| 4 | [21](#param-1-77-actual-expected-sum-21) | 16 | False | 0 |

<a id="param-1-77-actual-expected-sum-52"></a>
#### Parameter 52 Selection Items

| Field | Value |
| --- | --- |
| type | 29 |
| value | Pow |
| selectionItems | 7 |

| # | Name | Value |
| --- | --- | --- |
| 1 | Annual compound percentage | Pow |
| 2 | Annual linear percentage | Linear |
| 3 | No aged derate | None |
| 4 | Monthly straight line | FlatMonth |
| 5 | Annual straight line | FlatYear |
| 6 | Ignore production guarantee | NoProdGuarantee |
| 7 | Annual linear straight line | LinearFlatYear |

<a id="chart-1-53-analyzer-pv-model-ratio"></a>
### Analyzer: (PV / model ratio)

| Field | Value |
| --- | --- |
| chartType | 53 |
| isAdvanced | true |
| chartDescription | The performance index, along with module temperature and irradiance |
| parameters | 2 |

#### Parameters

| # | Id | Type | Value | Selection Items |
| --- | --- | --- | --- | --- |
| 1 | [21](#param-1-53-analyzer-pv-model-ratio-21) | 16 | False | 0 |
| 2 | [69](#param-1-53-analyzer-pv-model-ratio-69) | 1 | 0 | 0 |

<a id="chart-1-51-analyzer-normalized-inverter-yield"></a>
### Analyzer: normalized inverter yield

| Field | Value |
| --- | --- |
| chartType | 51 |
| isAdvanced | true |
| chartDescription | The normalized yield is the output divided by the DC system size, adjusted for orientation. This shows the what the relative performance of different systems would be if they were all the same size and facing the same direction. |
| parameters | 0 |

(No parameters)

<a id="chart-1-24-cumulative-energy"></a>
### Cumulative Energy

| Field | Value |
| --- | --- |
| chartType | 24 |
| isAdvanced | true |
| chartDescription |  |
| parameters | 1 |

#### Parameters

| # | Id | Type | Value | Selection Items |
| --- | --- | --- | --- | --- |
| 1 | [21](#param-1-24-cumulative-energy-21) | 16 | True | 0 |

<a id="chart-1-204-data-classification"></a>
### Data Classification

| Field | Value |
| --- | --- |
| chartType | 204 |
| isAdvanced | true |
| chartDescription | Determine classification of data based on machine learning algorithms (currently only works for shading). |
| parameters | 4 |

#### Parameters

| # | Id | Type | Value | Selection Items |
| --- | --- | --- | --- | --- |
| 1 | [21](#param-1-204-data-classification-21) | 16 | False | 0 |
| 2 | [9](#param-1-204-data-classification-9) | 16 | False | 0 |
| 3 | [10](#param-1-204-data-classification-10) | 16 | False | 0 |
| 4 | [70](#param-1-204-data-classification-70) | 1 | 0 | 0 |

<a id="chart-1-201-dc-current-vs-expected"></a>
### DC Current vs. Expected

| Field | Value |
| --- | --- |
| chartType | 201 |
| isAdvanced | true |
| chartDescription | Scatter plot showing DC current relative to the expected DC current |
| parameters | 0 |

(No parameters)

<a id="chart-1-199-dc-voltage-vs-module-temperature"></a>
### DC Voltage vs. Module Temperature

| Field | Value |
| --- | --- |
| chartType | 199 |
| isAdvanced | true |
| chartDescription | Scatter plot showing inverter DC voltage relative to module temperature |
| parameters | 0 |

(No parameters)

<a id="chart-1-5-efficiency"></a>
### Efficiency

| Field | Value |
| --- | --- |
| chartType | 5 |
| isAdvanced | true |
| chartDescription | Inverter AC power output divided by DC power input. |
| parameters | 0 |

(No parameters)

<a id="chart-1-176-energy-ratio"></a>
### Energy Ratio

| Field | Value |
| --- | --- |
| chartType | 176 |
| isAdvanced | false |
| chartDescription | The Energy Ratio is the ratio of energy to Plane of Array insolation.  This can be calculated using insolation, insolation normalized to 25 °C, or the expected energy based on the PV model.  Change the type of calculation with the "Energy Ratio Mode" chart input parameter or the Performance Test Type (on the Site Setup / Performance page). |
| parameters | 1 |

#### Parameters

| # | Id | Type | Value | Selection Items |
| --- | --- | --- | --- | --- |
| 1 | [62](#param-1-176-energy-ratio-62) | 34 | 2 | 6 |

<a id="param-1-176-energy-ratio-62"></a>
#### Parameter 62 Selection Items

| Field | Value |
| --- | --- |
| type | 34 |
| value | 2 |
| selectionItems | 6 |

| # | Name | Value |
| --- | --- | --- |
| 1 | POA insolation | 0 |
| 2 | POA insolation, normalized to 25 °C | 1 |
| 3 | Full PV model | 2 |
| 4 | POA insolation, Gross energy | 16 |
| 5 | POA insolation, normalized to 25 °C, Gross energy | 17 |
| 6 | Full PV model, Gross energy | 18 |

<a id="chart-1-248-energy-weighted-availability"></a>
### Energy weighted availability

| Field | Value |
| --- | --- |
| chartType | 248 |
| isAdvanced | false |
| chartDescription | Availability for all inverters on a site, as the ratio of energy loss to modeled energy (based on IEC 63019, section B.3).  This calculation uses expected energy when available and estimated energy when expected energy can't be calculated. |
| parameters | 0 |

(No parameters)

<a id="chart-1-61-environmental-impact"></a>
### Environmental Impact

| Field | Value |
| --- | --- |
| chartType | 61 |
| isAdvanced | true |
| chartDescription |  |
| parameters | 1 |

#### Parameters

| # | Id | Type | Value | Selection Items |
| --- | --- | --- | --- | --- |
| 1 | [21](#param-1-61-environmental-impact-21) | 16 | False | 0 |

<a id="chart-1-249-fill-energy-gaps"></a>
### Fill Energy Gaps

| Field | Value |
| --- | --- |
| chartType | 249 |
| isAdvanced | true |
| chartDescription | Fill gaps in energy and power when generation appears to have occurred during a data outage. |
| parameters | 0 |

(No parameters)

<a id="chart-1-171-hourly-yield"></a>
### Hourly Yield

| Field | Value |
| --- | --- |
| chartType | 171 |
| isAdvanced | true |
| chartDescription | The hourly yield is the ratio of energy output to DC system size.  It represents the energy production as the equivalent percentage of time at full DC power output. |
| parameters | 0 |

(No parameters)

<a id="chart-1-8-inverter-ac"></a>
### Inverter AC

| Field | Value |
| --- | --- |
| chartType | 8 |
| isAdvanced | true |
| chartDescription | Inverter output voltage and current. |
| parameters | 0 |

(No parameters)

<a id="chart-1-259-inverter-availability"></a>
### Inverter Availability

| Field | Value |
| --- | --- |
| chartType | 259 |
| isAdvanced | false |
| chartDescription | Inverter Availability, based on the site availability settings |
| parameters | 2 |

#### Parameters

| # | Id | Type | Value | Selection Items |
| --- | --- | --- | --- | --- |
| 1 | [0](#param-1-259-inverter-availability-0) | 16 | False | 0 |
| 2 | [61](#param-1-259-inverter-availability-61) | 16 | False | 0 |

<a id="chart-1-7-inverter-dc"></a>
### Inverter DC

| Field | Value |
| --- | --- |
| chartType | 7 |
| isAdvanced | true |
| chartDescription | Inverter input voltage and current. |
| parameters | 0 |

(No parameters)

<a id="chart-1-246-inverter-downtime-days"></a>
### Inverter Downtime Days

| Field | Value |
| --- | --- |
| chartType | 246 |
| isAdvanced | true |
| chartDescription | Show the number of days for each inverter with less than 95% availability. |
| parameters | 0 |

(No parameters)

<a id="chart-1-252-inverter-faults"></a>
### Inverter faults

| Field | Value |
| --- | --- |
| chartType | 252 |
| isAdvanced | true |
| chartDescription | Show inverter fault data. |
| parameters | 0 |

(No parameters)

<a id="chart-1-73-inverter-performance"></a>
### Inverter Performance

| Field | Value |
| --- | --- |
| chartType | 73 |
| isAdvanced | true |
| chartDescription | Inverter production with reference models |
| parameters | 5 |

#### Parameters

| # | Id | Type | Value | Selection Items |
| --- | --- | --- | --- | --- |
| 1 | [21](#param-1-73-inverter-performance-21) | 16 | False | 0 |
| 2 | [10](#param-1-73-inverter-performance-10) | 16 | True | 0 |
| 3 | [6](#param-1-73-inverter-performance-6) | 16 | True | 0 |
| 4 | [7](#param-1-73-inverter-performance-7) | 16 | False | 0 |
| 5 | [8](#param-1-73-inverter-performance-8) | 36 | 1 | 3 |

<a id="param-1-73-inverter-performance-8"></a>
#### Parameter 8 Selection Items

| Field | Value |
| --- | --- |
| type | 36 |
| value | 1 |
| selectionItems | 3 |

| # | Name | Value |
| --- | --- | --- |
| 1 | None | 0 |
| 2 | Line | 1 |
| 3 | Shadow | 2 |

<a id="chart-1-84-inverter-phases"></a>
### Inverter Phases

| Field | Value |
| --- | --- |
| chartType | 84 |
| isAdvanced | true |
| chartDescription | Detailed inverter data, including individual phase voltages, currents and power factor |
| parameters | 0 |

(No parameters)

<a id="chart-1-198-inverter-variance"></a>
### Inverter variance

| Field | Value |
| --- | --- |
| chartType | 198 |
| isAdvanced | true |
| chartDescription | Show the variance between the yield of each inverter relative to the maximum yield from all inverters for each time interval.  View as a data table to see variances highlighted in color. |
| parameters | 0 |

(No parameters)

<a id="chart-1-196-inverter-model-variance"></a>
### Inverter/Model variance

| Field | Value |
| --- | --- |
| chartType | 196 |
| isAdvanced | true |
| chartDescription | Show the variance between the power produced relative to the expected modeled power.  View as a data table to see variances highlighted in color. |
| parameters | 0 |

(No parameters)

<a id="chart-1-167-maximum-power-output"></a>
### Maximum power output

| Field | Value |
| --- | --- |
| chartType | 167 |
| isAdvanced | true |
| chartDescription | The sum of the maximum power output for production meters or inverters for each interval.  Also calculates the maximum power over the entire query span. |
| parameters | 1 |

#### Parameters

| # | Id | Type | Value | Selection Items |
| --- | --- | --- | --- | --- |
| 1 | [87](#param-1-167-maximum-power-output-87) | 16 | False | 0 |

<a id="chart-1-226-module-degrade-inverter"></a>
### Module Degrade Inverter

| Field | Value |
| --- | --- |
| chartType | 226 |
| isAdvanced | true |
| chartDescription | Calculate module degradation per inverter using the NREL Module Degradation Algorithm (requires at least two years of data, more years of data will give better results).  This calculation may not produce useful results if the data is inconsistent.  This query takes a long time to run and is therefore not suitable for interactive charts.  Please use this query in reports. |
| parameters | 0 |

(No parameters)

<a id="chart-1-203-module-degrade-site"></a>
### Module Degrade Site

| Field | Value |
| --- | --- |
| chartType | 203 |
| isAdvanced | true |
| chartDescription | Calculate module degradation of the entire site using the NREL Module Degradation Algorithm (requires at least two years of data, more years of data will give better results).  This calculation may not produce useful results if the data is inconsistent.  This query takes a long time to run and is therefore not suitable for interactive charts.  Please use this query in reports. |
| parameters | 0 |

(No parameters)

<a id="chart-1-120-mppt"></a>
### MPPT

| Field | Value |
| --- | --- |
| chartType | 120 |
| isAdvanced | true |
| chartDescription | Show individual inverter Max Power Point Tracker data. |
| parameters | 0 |

(No parameters)

<a id="chart-1-122-mppt-normalized-yield"></a>
### MPPT Normalized Yield

| Field | Value |
| --- | --- |
| chartType | 122 |
| isAdvanced | true |
| chartDescription | Show individual inverter Max Power Point Tracker yield, adjusted for orientation. This shows the what the relative performance of different systems would be if they were all the same size and facing the same direction. |
| parameters | 0 |

(No parameters)

<a id="chart-1-121-mppt-yield"></a>
### MPPT Yield

| Field | Value |
| --- | --- |
| chartType | 121 |
| isAdvanced | true |
| chartDescription | Show individual inverter Max Power Point Tracker yield. |
| parameters | 0 |

(No parameters)

<a id="chart-1-22-normalized-yield"></a>
### Normalized Yield

| Field | Value |
| --- | --- |
| chartType | 22 |
| isAdvanced | true |
| chartDescription | The normalized yield is the output divided by the DC system size, adjusted for orientation. This shows the what the relative performance of different systems would be if they were all the same size and facing the same direction. |
| parameters | 0 |

(No parameters)

<a id="chart-1-185-nrel-performance-ratio"></a>
### NREL Performance Ratio

| Field | Value |
| --- | --- |
| chartType | 185 |
| isAdvanced | true |
| chartDescription | Temperature adjusted performance ratio using the methodology described in NREL/TP-5200-57991 (module temperature calculated from ambient temperature, irradiance and wind speed). |
| parameters | 5 |

#### Parameters

| # | Id | Type | Value | Selection Items |
| --- | --- | --- | --- | --- |
| 1 | [93](#param-1-185-nrel-performance-ratio-93) | 16 | False | 0 |
| 2 | [92](#param-1-185-nrel-performance-ratio-92) | 42 | 0 | 4 |
| 3 | [99](#param-1-185-nrel-performance-ratio-99) | 43 | 0 | 11 |
| 4 | [73](#param-1-185-nrel-performance-ratio-73) | 2 | 200 | 0 |
| 5 | [100](#param-1-185-nrel-performance-ratio-100) | 2 | 45.0 | 0 |

<a id="param-1-185-nrel-performance-ratio-92"></a>
#### Parameter 92 Selection Items

| Field | Value |
| --- | --- |
| type | 42 |
| value | 0 |
| selectionItems | 4 |

| # | Name | Value |
| --- | --- | --- |
| 1 | NREL Clear Sky | 0 |
| 2 | AE Enhanced | 1 |
| 3 | Isotropic | 2 |
| 4 | Perez | 3 |

<a id="param-1-185-nrel-performance-ratio-99"></a>
#### Parameter 99 Selection Items

| Field | Value |
| --- | --- |
| type | 43 |
| value | 0 |
| selectionItems | 11 |

| # | Name | Value |
| --- | --- | --- |
| 1 | None | 0 |
| 2 | Physical On-site Primary | 1 |
| 3 | Physical On-site Secondary | 2 |
| 4 | Physical Off-site | 3 |
| 5 | SolarSight | 4 |
| 6 | Locus VI | 5 |
| 7 | Solargis | 6 |
| 8 | SolarAnywhere | 7 |
| 9 | Solcast | 8 |
| 10 | Tomorrow.io | 9 |
| 11 | Automatic | 10 |

<a id="chart-1-233-peak-daily-power"></a>
### Peak daily power

| Field | Value |
| --- | --- |
| chartType | 233 |
| isAdvanced | true |
| chartDescription | Peak power for the given meters or inverters |
| parameters | 0 |

(No parameters)

<a id="chart-1-100-peak-kw-to-dc-size-comparison"></a>
### Peak kW to DC Size Comparison

| Field | Value |
| --- | --- |
| chartType | 100 |
| isAdvanced | true |
| chartDescription | Shows relative peak performance over time |
| parameters | 0 |

(No parameters)

<a id="chart-1-3-performance-side-by-side"></a>
### Performance (side by side)

| Field | Value |
| --- | --- |
| chartType | 3 |
| isAdvanced | true |
| chartDescription | This chart shows the output each inverter or meter in the system side-by-side. For systems with similarly sized components, this is a simple way to evaluate the relative performance of each component in the system. |
| parameters | 3 |

#### Parameters

| # | Id | Type | Value | Selection Items |
| --- | --- | --- | --- | --- |
| 1 | [21](#param-1-3-performance-side-by-side-21) | 16 | False | 0 |
| 2 | [10](#param-1-3-performance-side-by-side-10) | 16 | True | 0 |
| 3 | [6](#param-1-3-performance-side-by-side-6) | 16 | False | 0 |

<a id="chart-1-30-performance-histogram"></a>
### Performance Histogram

| Field | Value |
| --- | --- |
| chartType | 30 |
| isAdvanced | true |
| chartDescription | Performance ratio relative to reference. |
| parameters | 0 |

(No parameters)

<a id="chart-1-57-performance-index"></a>
### Performance Index

| Field | Value |
| --- | --- |
| chartType | 57 |
| isAdvanced | true |
| chartDescription | Power output divided by the expected output using the PV model for each inverter, based on module temperature and irradiance. |
| parameters | 4 |

#### Parameters

| # | Id | Type | Value | Selection Items |
| --- | --- | --- | --- | --- |
| 1 | [2](#param-1-57-performance-index-2) | 16 | False | 0 |
| 2 | [0](#param-1-57-performance-index-0) | 16 | False | 0 |
| 3 | [91](#param-1-57-performance-index-91) | 16 | False | 0 |
| 4 | [93](#param-1-57-performance-index-93) | 16 | False | 0 |

<a id="chart-1-23-performance-ratio"></a>
### Performance Ratio

| Field | Value |
| --- | --- |
| chartType | 23 |
| isAdvanced | true |
| chartDescription | Performance ratio shows power output relative to irradiance and system size, adjusted for module temperature. |
| parameters | 5 |

#### Parameters

| # | Id | Type | Value | Selection Items |
| --- | --- | --- | --- | --- |
| 1 | [88](#param-1-23-performance-ratio-88) | 40 | 1 | 9 |
| 2 | [0](#param-1-23-performance-ratio-0) | 16 | False | 0 |
| 3 | [91](#param-1-23-performance-ratio-91) | 16 | False | 0 |
| 4 | [93](#param-1-23-performance-ratio-93) | 16 | False | 0 |
| 5 | [60](#param-1-23-performance-ratio-60) | 16 | False | 0 |

<a id="param-1-23-performance-ratio-88"></a>
#### Parameter 88 Selection Items

| Field | Value |
| --- | --- |
| type | 40 |
| value | 1 |
| selectionItems | 9 |

| # | Name | Value |
| --- | --- | --- |
| 1 | Standard | 0 |
| 2 | ModuleSTC | 1 |
| 3 | PerformanceIndex | 2 |
| 4 | NREL | 3 |
| 5 | CustomPR1 | 4 |
| 6 | CustomPR2 | 5 |
| 7 | SiteStatsPR | 6 |
| 8 | SiteStatsPRT | 7 |
| 9 | SiteStatsPI | 8 |

<a id="chart-1-200-power-vs-expected"></a>
### Power vs. Expected

| Field | Value |
| --- | --- |
| chartType | 200 |
| isAdvanced | true |
| chartDescription | Scatter plot showing power output relative to the expected (modeled) power |
| parameters | 0 |

(No parameters)

<a id="chart-1-2-production-and-estimate"></a>
### Production and Estimate

| Field | Value |
| --- | --- |
| chartType | 2 |
| isAdvanced | false |
| chartDescription | The Production and Estimate chart shows inverter output along with the estimated output.  When viewing individual days, performance is shown in terms of power.  Energy is shown when viewing longer time spans. |
| parameters | 4 |

#### Parameters

| # | Id | Type | Value | Selection Items |
| --- | --- | --- | --- | --- |
| 1 | [21](#param-1-2-production-and-estimate-21) | 16 | False | 0 |
| 2 | [10](#param-1-2-production-and-estimate-10) | 16 | True | 0 |
| 3 | [6](#param-1-2-production-and-estimate-6) | 16 | True | 0 |
| 4 | [9](#param-1-2-production-and-estimate-9) | 16 | True | 0 |

<a id="chart-1-6-production-and-expected"></a>
### Production and Expected

| Field | Value |
| --- | --- |
| chartType | 6 |
| isAdvanced | false |
| chartDescription | Inverter production and expected production based on the PV model using measured irradiance and module temperature |
| parameters | 4 |

#### Parameters

| # | Id | Type | Value | Selection Items |
| --- | --- | --- | --- | --- |
| 1 | [21](#param-1-6-production-and-expected-21) | 16 | False | 0 |
| 2 | [9](#param-1-6-production-and-expected-9) | 16 | True | 0 |
| 3 | [10](#param-1-6-production-and-expected-10) | 16 | True | 0 |
| 4 | [69](#param-1-6-production-and-expected-69) | 1 | 0 | 0 |

<a id="chart-1-80-pv-model-components"></a>
### PV Model Components

| Field | Value |
| --- | --- |
| chartType | 80 |
| isAdvanced | true |
| chartDescription | Individual model components contributing to the expected production, based on irradiance and module temperature |
| parameters | 0 |

(No parameters)

<a id="chart-1-81-pv-model-error"></a>
### PV Model Error

| Field | Value |
| --- | --- |
| chartType | 81 |
| isAdvanced | true |
| chartDescription | The difference between the full PV model and the actual production |
| parameters | 0 |

(No parameters)

<a id="chart-1-68-pv-model-incidence-angle-setup"></a>
### PV Model Incidence Angle Setup

| Field | Value |
| --- | --- |
| chartType | 68 |
| isAdvanced | true |
| chartDescription | Performance as a function of incidence angle, for fine-tuning the incidence angle modifier |
| parameters | 0 |

(No parameters)

<a id="chart-1-72-pv-model-losses"></a>
### PV Model Losses

| Field | Value |
| --- | --- |
| chartType | 72 |
| isAdvanced | true |
| chartDescription | Inverter model results and associated losses |
| parameters | 3 |

#### Parameters

| # | Id | Type | Value | Selection Items |
| --- | --- | --- | --- | --- |
| 1 | [0](#param-1-72-pv-model-losses-0) | 16 | False | 0 |
| 2 | [7](#param-1-72-pv-model-losses-7) | 16 | False | 0 |
| 3 | [63](#param-1-72-pv-model-losses-63) | 16 | False | 0 |

<a id="chart-1-82-pv-model-scatter"></a>
### PV Model Scatter

| Field | Value |
| --- | --- |
| chartType | 82 |
| isAdvanced | true |
| chartDescription | The correlation between inverter output and the PV Model as a scatter plot |
| parameters | 0 |

(No parameters)

<a id="chart-1-58-pv-model-setup"></a>
### PV Model Setup

| Field | Value |
| --- | --- |
| chartType | 58 |
| isAdvanced | true |
| chartDescription | Detailed data used by the PV model and allows fine-tuning of the PV model parameters based on analysis of the data |
| parameters | 0 |

(No parameters)

<a id="chart-1-69-pv-model-shade-impact-setup"></a>
### PV Model Shade Impact Setup

| Field | Value |
| --- | --- |
| chartType | 69 |
| isAdvanced | true |
| chartDescription | Performance, solar azimuth/elevation and incidence angle, for creating a shade impact model. |
| parameters | 3 |

#### Parameters

| # | Id | Type | Value | Selection Items |
| --- | --- | --- | --- | --- |
| 1 | [21](#param-1-69-pv-model-shade-impact-setup-21) | 16 | False | 0 |
| 2 | [10](#param-1-69-pv-model-shade-impact-setup-10) | 16 | True | 0 |
| 3 | [6](#param-1-69-pv-model-shade-impact-setup-6) | 16 | False | 0 |

<a id="chart-1-241-pvg-adjusted-power-curve-method-bnetza-germany"></a>
### PVG: Adjusted Power Curve Method (BnetzA – Germany)

| Field | Value |
| --- | --- |
| chartType | 241 |
| isAdvanced | true |
| chartDescription | Skytron PV Guard energy loss calculation using the Adjusted Power Curve Method.  Requires irradiance data without gaps. |
| parameters | 1 |

#### Parameters

| # | Id | Type | Value | Selection Items |
| --- | --- | --- | --- | --- |
| 1 | [32](#param-1-241-pvg-adjusted-power-curve-method-bnetza-germany-32) | 16 | False | 0 |

<a id="chart-1-244-pvg-flat-rate-without-registering-power-measurement"></a>
### PVG: Flat rate without registering power measurement

| Field | Value |
| --- | --- |
| chartType | 244 |
| isAdvanced | true |
| chartDescription | Energy loss calculation using the flat-rate procedure without reference data (Bundesnetzagentur Guide to feed-in management, version 3.0 section 2.3.4.2). |
| parameters | 0 |

(No parameters)

<a id="chart-1-242-pvg-last-measured-value-method-bnetza-germany"></a>
### PVG: Last Measured Value Method (BnetzA – Germany)

| Field | Value |
| --- | --- |
| chartType | 242 |
| isAdvanced | true |
| chartDescription | Skytron PV Guard energy loss calculation using the Last Measured Value Method |
| parameters | 0 |

(No parameters)

<a id="chart-1-243-pvg-reference-inverter"></a>
### PVG: Reference Inverter

| Field | Value |
| --- | --- |
| chartType | 243 |
| isAdvanced | true |
| chartDescription | Skytron PV Guard energy loss calculation for a meter using a nearby reference inverter |
| parameters | 0 |

(No parameters)

<a id="chart-1-78-soiling-detector"></a>
### Soiling Detector

| Field | Value |
| --- | --- |
| chartType | 78 |
| isAdvanced | true |
| chartDescription | Analyzes inverter performance data to identify when production is being impacted by dirt on the modules and calculates the resulting energy loss. |
| parameters | 1 |

#### Parameters

| # | Id | Type | Value | Selection Items |
| --- | --- | --- | --- | --- |
| 1 | [63](#param-1-78-soiling-detector-63) | 16 | False | 0 |

<a id="chart-1-271-string-availability"></a>
### String Availability

| Field | Value |
| --- | --- |
| chartType | 271 |
| isAdvanced | true |
| chartDescription | Shows the availability for DC strings (number of operating strings / number of strings) |
| parameters | 3 |

#### Parameters

| # | Id | Type | Value | Selection Items |
| --- | --- | --- | --- | --- |
| 1 | [2](#param-1-271-string-availability-2) | 16 | False | 0 |
| 2 | [101](#param-1-271-string-availability-101) | 2 | 0.5 | 0 |
| 3 | [102](#param-1-271-string-availability-102) | 2 | 0.1 | 0 |

<a id="chart-1-228-synthesized-power"></a>
### Synthesized Power

| Field | Value |
| --- | --- |
| chartType | 228 |
| isAdvanced | true |
| chartDescription | Estimates power for an inverter or meter, using the best available nearby device or weather data. |
| parameters | 2 |

#### Parameters

| # | Id | Type | Value | Selection Items |
| --- | --- | --- | --- | --- |
| 1 | [71](#param-1-228-synthesized-power-71) | 1 | 0 | 0 |
| 2 | [72](#param-1-228-synthesized-power-72) | 16 | False | 0 |

<a id="chart-1-28-uptime"></a>
### Uptime

| Field | Value |
| --- | --- |
| chartType | 28 |
| isAdvanced | true |
| chartDescription | The uptime is calculated when the required minimum irradiance is configured within the Site Setup Performance options (default = 100 w/m²).  The percentage is 100% for every 15 minute interval when the inverter is producing power.  If no weather data is available for a sample, then that 15 minute period is ignored.  The weighted-average for the time span is calculated for all inverters based on their relative system size. |
| parameters | 1 |

#### Parameters

| # | Id | Type | Value | Selection Items |
| --- | --- | --- | --- | --- |
| 1 | [21](#param-1-28-uptime-21) | 16 | False | 0 |

<a id="chart-1-54-year-over-year-production"></a>
### Year over year production

| Field | Value |
| --- | --- |
| chartType | 54 |
| isAdvanced | true |
| chartDescription |  |
| parameters | 0 |

(No parameters)

<a id="chart-1-4-yield"></a>
### Yield

| Field | Value |
| --- | --- |
| chartType | 4 |
| isAdvanced | false |
| chartDescription | The yield is the output divided by the DC system size. This is used to evaluate performance between difference size systems. |
| parameters | 1 |

#### Parameters

| # | Id | Type | Value | Selection Items |
| --- | --- | --- | --- | --- |
| 1 | [0](#param-1-4-yield-0) | 16 | False | 0 |

<a id="section-2-production"></a>
## Production

| Field | Value |
| --- | --- |
| sectionCode | 2 |
| hardwareOptions | 2 |
| predefinedCharts | 38 |

### Charts

| # | Display Name | Chart Type | Advanced | Parameters | Description |
| --- | --- | --- | --- | --- | --- |
| 1 | [Actual vs. Expected Power and Irradiance](#chart-2-255-actual-vs-expected-power-and-irradiance) | 255 | true | 0 | Line plot showing actual power, expected power and POA irradiance. |
| 2 | [Cumulative Energy](#chart-2-24-cumulative-energy) | 24 | true | 1 |  |
| 3 | [Energy Availability](#chart-2-234-energy-availability) | 234 | true | 0 | Availability based on the ratio of production meter energy to inverter energy.  This calculation estimates inverter availability by comparing the energy from each production meter to the expected energy based on the energy measured from each associated inverter.  The expected energy is calculated from the inverters that are communicating and the relative size of those inverters to all inverters. |
| 4 | [Energy Production Comparison](#chart-2-101-energy-production-comparison) | 101 | true | 1 | Shows relative production over time |
| 5 | [Energy Ratio](#chart-2-176-energy-ratio) | 176 | false | 1 | The Energy Ratio is the ratio of energy to Plane of Array insolation.  This can be calculated using insolation, insolation normalized to 25 °C, or the expected energy based on the PV model.  Change the type of calculation with the "Energy Ratio Mode" chart input parameter or the Performance Test Type (on the Site Setup / Performance page). |
| 6 | [Fill Energy Gaps](#chart-2-249-fill-energy-gaps) | 249 | true | 0 | Fill gaps in energy and power when generation appears to have occurred during a data outage. |
| 7 | [Inverter Availability](#chart-2-259-inverter-availability) | 259 | false | 2 | Inverter Availability, based on the site availability settings |
| 8 | [Maximum power output](#chart-2-167-maximum-power-output) | 167 | true | 1 | The sum of the maximum power output for production meters or inverters for each interval.  Also calculates the maximum power over the entire query span. |
| 9 | [Meter Model Losses](#chart-2-207-meter-model-losses) | 207 | true | 3 | Inverter model results and associated losses, per production meter |
| 10 | [Meter Yield](#chart-2-11-meter-yield) | 11 | true | 0 | The yield is the output divided by the DC system size. This is used to evaluate performance between difference size systems. |
| 11 | [NREL Performance Ratio](#chart-2-185-nrel-performance-ratio) | 185 | true | 5 | Temperature adjusted performance ratio using the methodology described in NREL/TP-5200-57991 (module temperature calculated from ambient temperature, irradiance and wind speed). |
| 12 | [Peak daily power](#chart-2-233-peak-daily-power) | 233 | true | 0 | Peak power for the given meters or inverters |
| 13 | [Performance Index](#chart-2-57-performance-index) | 57 | true | 4 | Power output divided by the expected output using the PV model for each inverter, based on module temperature and irradiance. |
| 14 | [Performance Ratio](#chart-2-23-performance-ratio) | 23 | true | 5 | Performance ratio shows power output relative to irradiance and system size, adjusted for module temperature. |
| 15 | [Power vs. Expected](#chart-2-200-power-vs-expected) | 200 | true | 0 | Scatter plot showing power output relative to the expected (modeled) power |
| 16 | [Production & Model](#chart-2-64-production-model) | 64 | false | 5 | Actual production and expected production based on the PV model and weather data |
| 17 | [Production Meter](#chart-2-15-production-meter) | 15 | false | 4 | The Production Meter chart shows inverter output at the meter along with the expected or estimated output under ideal conditions.  When viewing individual days, performance is shown in terms of power.  Energy is shown when viewing longer time spans. |
| 18 | [Production Meter Phases](#chart-2-38-production-meter-phases) | 38 | true | 0 | Detailed meter data, including individual phase voltages, currents and power factor |
| 19 | [Production Performance Index](#chart-2-79-production-performance-index) | 79 | true | 1 | Power output divided by the expected output using the PV model, based on module temperature and irradiance |
| 20 | [PV System Capacity Analyzer](#chart-2-123-pv-system-capacity-analyzer) | 123 | true | 14 | Perform a capacity analysis test by filtering data and calculating a curve fit for power output as a function of irradiance, adjusted for temperature.  Based on ASTM E2848-13 |
| 21 | [PV System Capacity Analyzer, Ambient](#chart-2-250-pv-system-capacity-analyzer-ambient) | 250 | true | 7 | Perform a capacity analysis test by filtering data and calculating regression for power output as a function of irradiance, ambient temperature and wind speed.  Based on ASTM E2848-13 |
| 22 | [PVG: Adjusted Power Curve Method (BnetzA – Germany)](#chart-2-241-pvg-adjusted-power-curve-method-bnetza-germany) | 241 | true | 1 | Skytron PV Guard energy loss calculation using the Adjusted Power Curve Method.  Requires irradiance data without gaps. |
| 23 | [PVG: Flat rate without registering power measurement](#chart-2-244-pvg-flat-rate-without-registering-power-measurement) | 244 | true | 0 | Energy loss calculation using the flat-rate procedure without reference data (Bundesnetzagentur Guide to feed-in management, version 3.0 section 2.3.4.2). |
| 24 | [PVG: Last Measured Value Method (BnetzA – Germany)](#chart-2-242-pvg-last-measured-value-method-bnetza-germany) | 242 | true | 0 | Skytron PV Guard energy loss calculation using the Last Measured Value Method |
| 25 | [PVG: Reference Inverter](#chart-2-243-pvg-reference-inverter) | 243 | true | 0 | Skytron PV Guard energy loss calculation for a meter using a nearby reference inverter |
| 26 | [Received & Delivered](#chart-2-156-received-delivered) | 156 | true | 1 | Energy Received, Delivered and Net |
| 27 | [Recorded allocation (cost)](#chart-2-219-recorded-allocation-cost) | 219 | true | 2 | Recorded energy costs for specified time-periods allocated evenly or weighted over the span. |
| 28 | [Recorded allocation (savings)](#chart-2-220-recorded-allocation-savings) | 220 | true | 2 | Recorded energy savings for specified time-periods allocated evenly or weighted over the span. |
| 29 | [Recorded downtime (excluded)](#chart-2-218-recorded-downtime-excluded) | 218 | true | 2 | Recorded downtime and production impacts categorized as Excluded, such as out of contract or guarantee scope. |
| 30 | [Recorded downtime (included)](#chart-2-217-recorded-downtime-included) | 217 | true | 2 | Recorded downtime and production impacts categorized as Included, such as in contract or guarantee scope. |
| 31 | [Recorded downtime (uncategorized)](#chart-2-229-recorded-downtime-uncategorized) | 229 | true | 2 | Recorded downtime and production impacts categorized as Other, such as out of contract or guarantee scope. |
| 32 | [Site Performance Index](#chart-2-59-site-performance-index) | 59 | true | 0 | The performance index for the total production at a site (actual output divided by the expected output).  Data from individual meters and inverters is not shown. |
| 33 | [Soiling Detector](#chart-2-78-soiling-detector) | 78 | true | 1 | Analyzes inverter performance data to identify when production is being impacted by dirt on the modules and calculates the resulting energy loss. |
| 34 | [SREC Report Query](#chart-2-227-srec-report-query) | 227 | true | 1 | Returns daily and cumulative energy. |
| 35 | [Synthesized Power](#chart-2-228-synthesized-power) | 228 | true | 2 | Estimates power for an inverter or meter, using the best available nearby device or weather data. |
| 36 | [Uptime](#chart-2-28-uptime) | 28 | true | 1 | The uptime is calculated when the required minimum irradiance is configured within the Site Setup Performance options (default = 100 w/m²).  The percentage is 100% for every 15 minute interval when the inverter is producing power.  If no weather data is available for a sample, then that 15 minute period is ignored.  The weighted-average for the time span is calculated for all inverters based on their relative system size. |
| 37 | [Year over year production](#chart-2-54-year-over-year-production) | 54 | true | 0 |  |
| 38 | [Yield](#chart-2-4-yield) | 4 | false | 1 | The yield is the output divided by the DC system size. This is used to evaluate performance between difference size systems. |

<a id="chart-2-255-actual-vs-expected-power-and-irradiance"></a>
### Actual vs. Expected Power and Irradiance

| Field | Value |
| --- | --- |
| chartType | 255 |
| isAdvanced | true |
| chartDescription | Line plot showing actual power, expected power and POA irradiance. |
| parameters | 0 |

(No parameters)

<a id="chart-2-24-cumulative-energy"></a>
### Cumulative Energy

| Field | Value |
| --- | --- |
| chartType | 24 |
| isAdvanced | true |
| chartDescription |  |
| parameters | 1 |

#### Parameters

| # | Id | Type | Value | Selection Items |
| --- | --- | --- | --- | --- |
| 1 | [21](#param-2-24-cumulative-energy-21) | 16 | True | 0 |

<a id="chart-2-234-energy-availability"></a>
### Energy Availability

| Field | Value |
| --- | --- |
| chartType | 234 |
| isAdvanced | true |
| chartDescription | Availability based on the ratio of production meter energy to inverter energy.  This calculation estimates inverter availability by comparing the energy from each production meter to the expected energy based on the energy measured from each associated inverter.  The expected energy is calculated from the inverters that are communicating and the relative size of those inverters to all inverters. |
| parameters | 0 |

(No parameters)

<a id="chart-2-101-energy-production-comparison"></a>
### Energy Production Comparison

| Field | Value |
| --- | --- |
| chartType | 101 |
| isAdvanced | true |
| chartDescription | Shows relative production over time |
| parameters | 1 |

#### Parameters

| # | Id | Type | Value | Selection Items |
| --- | --- | --- | --- | --- |
| 1 | [21](#param-2-101-energy-production-comparison-21) | 16 | False | 0 |

<a id="chart-2-176-energy-ratio"></a>
### Energy Ratio

| Field | Value |
| --- | --- |
| chartType | 176 |
| isAdvanced | false |
| chartDescription | The Energy Ratio is the ratio of energy to Plane of Array insolation.  This can be calculated using insolation, insolation normalized to 25 °C, or the expected energy based on the PV model.  Change the type of calculation with the "Energy Ratio Mode" chart input parameter or the Performance Test Type (on the Site Setup / Performance page). |
| parameters | 1 |

#### Parameters

| # | Id | Type | Value | Selection Items |
| --- | --- | --- | --- | --- |
| 1 | [62](#param-2-176-energy-ratio-62) | 34 | 2 | 6 |

<a id="param-2-176-energy-ratio-62"></a>
#### Parameter 62 Selection Items

| Field | Value |
| --- | --- |
| type | 34 |
| value | 2 |
| selectionItems | 6 |

| # | Name | Value |
| --- | --- | --- |
| 1 | POA insolation | 0 |
| 2 | POA insolation, normalized to 25 °C | 1 |
| 3 | Full PV model | 2 |
| 4 | POA insolation, Gross energy | 16 |
| 5 | POA insolation, normalized to 25 °C, Gross energy | 17 |
| 6 | Full PV model, Gross energy | 18 |

<a id="chart-2-249-fill-energy-gaps"></a>
### Fill Energy Gaps

| Field | Value |
| --- | --- |
| chartType | 249 |
| isAdvanced | true |
| chartDescription | Fill gaps in energy and power when generation appears to have occurred during a data outage. |
| parameters | 0 |

(No parameters)

<a id="chart-2-259-inverter-availability"></a>
### Inverter Availability

| Field | Value |
| --- | --- |
| chartType | 259 |
| isAdvanced | false |
| chartDescription | Inverter Availability, based on the site availability settings |
| parameters | 2 |

#### Parameters

| # | Id | Type | Value | Selection Items |
| --- | --- | --- | --- | --- |
| 1 | [0](#param-2-259-inverter-availability-0) | 16 | False | 0 |
| 2 | [61](#param-2-259-inverter-availability-61) | 16 | False | 0 |

<a id="chart-2-167-maximum-power-output"></a>
### Maximum power output

| Field | Value |
| --- | --- |
| chartType | 167 |
| isAdvanced | true |
| chartDescription | The sum of the maximum power output for production meters or inverters for each interval.  Also calculates the maximum power over the entire query span. |
| parameters | 1 |

#### Parameters

| # | Id | Type | Value | Selection Items |
| --- | --- | --- | --- | --- |
| 1 | [87](#param-2-167-maximum-power-output-87) | 16 | False | 0 |

<a id="chart-2-207-meter-model-losses"></a>
### Meter Model Losses

| Field | Value |
| --- | --- |
| chartType | 207 |
| isAdvanced | true |
| chartDescription | Inverter model results and associated losses, per production meter |
| parameters | 3 |

#### Parameters

| # | Id | Type | Value | Selection Items |
| --- | --- | --- | --- | --- |
| 1 | [0](#param-2-207-meter-model-losses-0) | 16 | False | 0 |
| 2 | [7](#param-2-207-meter-model-losses-7) | 16 | False | 0 |
| 3 | [63](#param-2-207-meter-model-losses-63) | 16 | False | 0 |

<a id="chart-2-11-meter-yield"></a>
### Meter Yield

| Field | Value |
| --- | --- |
| chartType | 11 |
| isAdvanced | true |
| chartDescription | The yield is the output divided by the DC system size. This is used to evaluate performance between difference size systems. |
| parameters | 0 |

(No parameters)

<a id="chart-2-185-nrel-performance-ratio"></a>
### NREL Performance Ratio

| Field | Value |
| --- | --- |
| chartType | 185 |
| isAdvanced | true |
| chartDescription | Temperature adjusted performance ratio using the methodology described in NREL/TP-5200-57991 (module temperature calculated from ambient temperature, irradiance and wind speed). |
| parameters | 5 |

#### Parameters

| # | Id | Type | Value | Selection Items |
| --- | --- | --- | --- | --- |
| 1 | [93](#param-2-185-nrel-performance-ratio-93) | 16 | False | 0 |
| 2 | [92](#param-2-185-nrel-performance-ratio-92) | 42 | 0 | 4 |
| 3 | [99](#param-2-185-nrel-performance-ratio-99) | 43 | 0 | 11 |
| 4 | [73](#param-2-185-nrel-performance-ratio-73) | 2 | 200 | 0 |
| 5 | [100](#param-2-185-nrel-performance-ratio-100) | 2 | 45.0 | 0 |

<a id="param-2-185-nrel-performance-ratio-92"></a>
#### Parameter 92 Selection Items

| Field | Value |
| --- | --- |
| type | 42 |
| value | 0 |
| selectionItems | 4 |

| # | Name | Value |
| --- | --- | --- |
| 1 | NREL Clear Sky | 0 |
| 2 | AE Enhanced | 1 |
| 3 | Isotropic | 2 |
| 4 | Perez | 3 |

<a id="param-2-185-nrel-performance-ratio-99"></a>
#### Parameter 99 Selection Items

| Field | Value |
| --- | --- |
| type | 43 |
| value | 0 |
| selectionItems | 11 |

| # | Name | Value |
| --- | --- | --- |
| 1 | None | 0 |
| 2 | Physical On-site Primary | 1 |
| 3 | Physical On-site Secondary | 2 |
| 4 | Physical Off-site | 3 |
| 5 | SolarSight | 4 |
| 6 | Locus VI | 5 |
| 7 | Solargis | 6 |
| 8 | SolarAnywhere | 7 |
| 9 | Solcast | 8 |
| 10 | Tomorrow.io | 9 |
| 11 | Automatic | 10 |

<a id="chart-2-233-peak-daily-power"></a>
### Peak daily power

| Field | Value |
| --- | --- |
| chartType | 233 |
| isAdvanced | true |
| chartDescription | Peak power for the given meters or inverters |
| parameters | 0 |

(No parameters)

<a id="chart-2-57-performance-index"></a>
### Performance Index

| Field | Value |
| --- | --- |
| chartType | 57 |
| isAdvanced | true |
| chartDescription | Power output divided by the expected output using the PV model for each inverter, based on module temperature and irradiance. |
| parameters | 4 |

#### Parameters

| # | Id | Type | Value | Selection Items |
| --- | --- | --- | --- | --- |
| 1 | [2](#param-2-57-performance-index-2) | 16 | False | 0 |
| 2 | [0](#param-2-57-performance-index-0) | 16 | False | 0 |
| 3 | [91](#param-2-57-performance-index-91) | 16 | False | 0 |
| 4 | [93](#param-2-57-performance-index-93) | 16 | False | 0 |

<a id="chart-2-23-performance-ratio"></a>
### Performance Ratio

| Field | Value |
| --- | --- |
| chartType | 23 |
| isAdvanced | true |
| chartDescription | Performance ratio shows power output relative to irradiance and system size, adjusted for module temperature. |
| parameters | 5 |

#### Parameters

| # | Id | Type | Value | Selection Items |
| --- | --- | --- | --- | --- |
| 1 | [88](#param-2-23-performance-ratio-88) | 40 | 1 | 9 |
| 2 | [0](#param-2-23-performance-ratio-0) | 16 | False | 0 |
| 3 | [91](#param-2-23-performance-ratio-91) | 16 | False | 0 |
| 4 | [93](#param-2-23-performance-ratio-93) | 16 | False | 0 |
| 5 | [60](#param-2-23-performance-ratio-60) | 16 | False | 0 |

<a id="param-2-23-performance-ratio-88"></a>
#### Parameter 88 Selection Items

| Field | Value |
| --- | --- |
| type | 40 |
| value | 1 |
| selectionItems | 9 |

| # | Name | Value |
| --- | --- | --- |
| 1 | Standard | 0 |
| 2 | ModuleSTC | 1 |
| 3 | PerformanceIndex | 2 |
| 4 | NREL | 3 |
| 5 | CustomPR1 | 4 |
| 6 | CustomPR2 | 5 |
| 7 | SiteStatsPR | 6 |
| 8 | SiteStatsPRT | 7 |
| 9 | SiteStatsPI | 8 |

<a id="chart-2-200-power-vs-expected"></a>
### Power vs. Expected

| Field | Value |
| --- | --- |
| chartType | 200 |
| isAdvanced | true |
| chartDescription | Scatter plot showing power output relative to the expected (modeled) power |
| parameters | 0 |

(No parameters)

<a id="chart-2-64-production-model"></a>
### Production & Model

| Field | Value |
| --- | --- |
| chartType | 64 |
| isAdvanced | false |
| chartDescription | Actual production and expected production based on the PV model and weather data |
| parameters | 5 |

#### Parameters

| # | Id | Type | Value | Selection Items |
| --- | --- | --- | --- | --- |
| 1 | [21](#param-2-64-production-model-21) | 16 | False | 0 |
| 2 | [52](#param-2-64-production-model-52) | 29 | Pow | 7 |
| 3 | [2](#param-2-64-production-model-2) | 16 | True | 0 |
| 4 | [4](#param-2-64-production-model-4) | 16 | True | 0 |
| 5 | [69](#param-2-64-production-model-69) | 1 | 0 | 0 |

<a id="param-2-64-production-model-52"></a>
#### Parameter 52 Selection Items

| Field | Value |
| --- | --- |
| type | 29 |
| value | Pow |
| selectionItems | 7 |

| # | Name | Value |
| --- | --- | --- |
| 1 | Annual compound percentage | Pow |
| 2 | Annual linear percentage | Linear |
| 3 | No aged derate | None |
| 4 | Monthly straight line | FlatMonth |
| 5 | Annual straight line | FlatYear |
| 6 | Ignore production guarantee | NoProdGuarantee |
| 7 | Annual linear straight line | LinearFlatYear |

<a id="chart-2-15-production-meter"></a>
### Production Meter

| Field | Value |
| --- | --- |
| chartType | 15 |
| isAdvanced | false |
| chartDescription | The Production Meter chart shows inverter output at the meter along with the expected or estimated output under ideal conditions.  When viewing individual days, performance is shown in terms of power.  Energy is shown when viewing longer time spans. |
| parameters | 4 |

#### Parameters

| # | Id | Type | Value | Selection Items |
| --- | --- | --- | --- | --- |
| 1 | [21](#param-2-15-production-meter-21) | 16 | False | 0 |
| 2 | [52](#param-2-15-production-meter-52) | 29 | Pow | 7 |
| 3 | [2](#param-2-15-production-meter-2) | 16 | True | 0 |
| 4 | [4](#param-2-15-production-meter-4) | 16 | True | 0 |

<a id="param-2-15-production-meter-52"></a>
#### Parameter 52 Selection Items

| Field | Value |
| --- | --- |
| type | 29 |
| value | Pow |
| selectionItems | 7 |

| # | Name | Value |
| --- | --- | --- |
| 1 | Annual compound percentage | Pow |
| 2 | Annual linear percentage | Linear |
| 3 | No aged derate | None |
| 4 | Monthly straight line | FlatMonth |
| 5 | Annual straight line | FlatYear |
| 6 | Ignore production guarantee | NoProdGuarantee |
| 7 | Annual linear straight line | LinearFlatYear |

<a id="chart-2-38-production-meter-phases"></a>
### Production Meter Phases

| Field | Value |
| --- | --- |
| chartType | 38 |
| isAdvanced | true |
| chartDescription | Detailed meter data, including individual phase voltages, currents and power factor |
| parameters | 0 |

(No parameters)

<a id="chart-2-79-production-performance-index"></a>
### Production Performance Index

| Field | Value |
| --- | --- |
| chartType | 79 |
| isAdvanced | true |
| chartDescription | Power output divided by the expected output using the PV model, based on module temperature and irradiance |
| parameters | 1 |

#### Parameters

| # | Id | Type | Value | Selection Items |
| --- | --- | --- | --- | --- |
| 1 | [61](#param-2-79-production-performance-index-61) | 16 | False | 0 |

<a id="chart-2-123-pv-system-capacity-analyzer"></a>
### PV System Capacity Analyzer

| Field | Value |
| --- | --- |
| chartType | 123 |
| isAdvanced | true |
| chartDescription | Perform a capacity analysis test by filtering data and calculating a curve fit for power output as a function of irradiance, adjusted for temperature.  Based on ASTM E2848-13 |
| parameters | 14 |

#### Parameters

| # | Id | Type | Value | Selection Items |
| --- | --- | --- | --- | --- |
| 1 | [73](#param-2-123-pv-system-capacity-analyzer-73) | 1 | 500 | 0 |
| 2 | [74](#param-2-123-pv-system-capacity-analyzer-74) | 2 | 10.0 | 0 |
| 3 | [75](#param-2-123-pv-system-capacity-analyzer-75) | 2 | 1.0 | 0 |
| 4 | [76](#param-2-123-pv-system-capacity-analyzer-76) | 2 | 5.0 | 0 |
| 5 | [77](#param-2-123-pv-system-capacity-analyzer-77) | 2 | 3.0 | 0 |
| 6 | [78](#param-2-123-pv-system-capacity-analyzer-78) | 2 | 0.98 | 0 |
| 7 | [79](#param-2-123-pv-system-capacity-analyzer-79) | 2 | 0.2 | 0 |
| 8 | [80](#param-2-123-pv-system-capacity-analyzer-80) | 1 | 1 | 0 |
| 9 | [81](#param-2-123-pv-system-capacity-analyzer-81) | 1 | 800 | 0 |
| 10 | [82](#param-2-123-pv-system-capacity-analyzer-82) | 1 | 25 | 0 |
| 11 | [83](#param-2-123-pv-system-capacity-analyzer-83) | 1 | 0 | 0 |
| 12 | [84](#param-2-123-pv-system-capacity-analyzer-84) | 1 | 0 | 0 |
| 13 | [85](#param-2-123-pv-system-capacity-analyzer-85) | 2 | 0.0 | 0 |
| 14 | [86](#param-2-123-pv-system-capacity-analyzer-86) | 2 | 5.3 | 0 |

<a id="chart-2-250-pv-system-capacity-analyzer-ambient"></a>
### PV System Capacity Analyzer, Ambient

| Field | Value |
| --- | --- |
| chartType | 250 |
| isAdvanced | true |
| chartDescription | Perform a capacity analysis test by filtering data and calculating regression for power output as a function of irradiance, ambient temperature and wind speed.  Based on ASTM E2848-13 |
| parameters | 7 |

#### Parameters

| # | Id | Type | Value | Selection Items |
| --- | --- | --- | --- | --- |
| 1 | [78](#param-2-250-pv-system-capacity-analyzer-ambient-78) | 2 | 0.98 | 0 |
| 2 | [73](#param-2-250-pv-system-capacity-analyzer-ambient-73) | 1 | 100 | 0 |
| 3 | [74](#param-2-250-pv-system-capacity-analyzer-ambient-74) | 2 | 10.0 | 0 |
| 4 | [77](#param-2-250-pv-system-capacity-analyzer-ambient-77) | 2 | 3.0 | 0 |
| 5 | [81](#param-2-250-pv-system-capacity-analyzer-ambient-81) | 1 | 800 | 0 |
| 6 | [95](#param-2-250-pv-system-capacity-analyzer-ambient-95) | 1 | 25 | 0 |
| 7 | [96](#param-2-250-pv-system-capacity-analyzer-ambient-96) | 1 | 1 | 0 |

<a id="chart-2-241-pvg-adjusted-power-curve-method-bnetza-germany"></a>
### PVG: Adjusted Power Curve Method (BnetzA – Germany)

| Field | Value |
| --- | --- |
| chartType | 241 |
| isAdvanced | true |
| chartDescription | Skytron PV Guard energy loss calculation using the Adjusted Power Curve Method.  Requires irradiance data without gaps. |
| parameters | 1 |

#### Parameters

| # | Id | Type | Value | Selection Items |
| --- | --- | --- | --- | --- |
| 1 | [32](#param-2-241-pvg-adjusted-power-curve-method-bnetza-germany-32) | 16 | False | 0 |

<a id="chart-2-244-pvg-flat-rate-without-registering-power-measurement"></a>
### PVG: Flat rate without registering power measurement

| Field | Value |
| --- | --- |
| chartType | 244 |
| isAdvanced | true |
| chartDescription | Energy loss calculation using the flat-rate procedure without reference data (Bundesnetzagentur Guide to feed-in management, version 3.0 section 2.3.4.2). |
| parameters | 0 |

(No parameters)

<a id="chart-2-242-pvg-last-measured-value-method-bnetza-germany"></a>
### PVG: Last Measured Value Method (BnetzA – Germany)

| Field | Value |
| --- | --- |
| chartType | 242 |
| isAdvanced | true |
| chartDescription | Skytron PV Guard energy loss calculation using the Last Measured Value Method |
| parameters | 0 |

(No parameters)

<a id="chart-2-243-pvg-reference-inverter"></a>
### PVG: Reference Inverter

| Field | Value |
| --- | --- |
| chartType | 243 |
| isAdvanced | true |
| chartDescription | Skytron PV Guard energy loss calculation for a meter using a nearby reference inverter |
| parameters | 0 |

(No parameters)

<a id="chart-2-156-received-delivered"></a>
### Received & Delivered

| Field | Value |
| --- | --- |
| chartType | 156 |
| isAdvanced | true |
| chartDescription | Energy Received, Delivered and Net |
| parameters | 1 |

#### Parameters

| # | Id | Type | Value | Selection Items |
| --- | --- | --- | --- | --- |
| 1 | [21](#param-2-156-received-delivered-21) | 16 | True | 0 |

<a id="chart-2-219-recorded-allocation-cost"></a>
### Recorded allocation (cost)

| Field | Value |
| --- | --- |
| chartType | 219 |
| isAdvanced | true |
| chartDescription | Recorded energy costs for specified time-periods allocated evenly or weighted over the span. |
| parameters | 2 |

#### Parameters

| # | Id | Type | Value | Selection Items |
| --- | --- | --- | --- | --- |
| 1 | [0](#param-2-219-recorded-allocation-cost-0) | 16 | True | 0 |
| 2 | [59](#param-2-219-recorded-allocation-cost-59) | 16 | True | 0 |

<a id="chart-2-220-recorded-allocation-savings"></a>
### Recorded allocation (savings)

| Field | Value |
| --- | --- |
| chartType | 220 |
| isAdvanced | true |
| chartDescription | Recorded energy savings for specified time-periods allocated evenly or weighted over the span. |
| parameters | 2 |

#### Parameters

| # | Id | Type | Value | Selection Items |
| --- | --- | --- | --- | --- |
| 1 | [0](#param-2-220-recorded-allocation-savings-0) | 16 | True | 0 |
| 2 | [59](#param-2-220-recorded-allocation-savings-59) | 16 | True | 0 |

<a id="chart-2-218-recorded-downtime-excluded"></a>
### Recorded downtime (excluded)

| Field | Value |
| --- | --- |
| chartType | 218 |
| isAdvanced | true |
| chartDescription | Recorded downtime and production impacts categorized as Excluded, such as out of contract or guarantee scope. |
| parameters | 2 |

#### Parameters

| # | Id | Type | Value | Selection Items |
| --- | --- | --- | --- | --- |
| 1 | [0](#param-2-218-recorded-downtime-excluded-0) | 16 | True | 0 |
| 2 | [59](#param-2-218-recorded-downtime-excluded-59) | 16 | True | 0 |

<a id="chart-2-217-recorded-downtime-included"></a>
### Recorded downtime (included)

| Field | Value |
| --- | --- |
| chartType | 217 |
| isAdvanced | true |
| chartDescription | Recorded downtime and production impacts categorized as Included, such as in contract or guarantee scope. |
| parameters | 2 |

#### Parameters

| # | Id | Type | Value | Selection Items |
| --- | --- | --- | --- | --- |
| 1 | [0](#param-2-217-recorded-downtime-included-0) | 16 | True | 0 |
| 2 | [59](#param-2-217-recorded-downtime-included-59) | 16 | True | 0 |

<a id="chart-2-229-recorded-downtime-uncategorized"></a>
### Recorded downtime (uncategorized)

| Field | Value |
| --- | --- |
| chartType | 229 |
| isAdvanced | true |
| chartDescription | Recorded downtime and production impacts categorized as Other, such as out of contract or guarantee scope. |
| parameters | 2 |

#### Parameters

| # | Id | Type | Value | Selection Items |
| --- | --- | --- | --- | --- |
| 1 | [0](#param-2-229-recorded-downtime-uncategorized-0) | 16 | True | 0 |
| 2 | [59](#param-2-229-recorded-downtime-uncategorized-59) | 16 | True | 0 |

<a id="chart-2-59-site-performance-index"></a>
### Site Performance Index

| Field | Value |
| --- | --- |
| chartType | 59 |
| isAdvanced | true |
| chartDescription | The performance index for the total production at a site (actual output divided by the expected output).  Data from individual meters and inverters is not shown. |
| parameters | 0 |

(No parameters)

<a id="chart-2-78-soiling-detector"></a>
### Soiling Detector

| Field | Value |
| --- | --- |
| chartType | 78 |
| isAdvanced | true |
| chartDescription | Analyzes inverter performance data to identify when production is being impacted by dirt on the modules and calculates the resulting energy loss. |
| parameters | 1 |

#### Parameters

| # | Id | Type | Value | Selection Items |
| --- | --- | --- | --- | --- |
| 1 | [63](#param-2-78-soiling-detector-63) | 16 | False | 0 |

<a id="chart-2-227-srec-report-query"></a>
### SREC Report Query

| Field | Value |
| --- | --- |
| chartType | 227 |
| isAdvanced | true |
| chartDescription | Returns daily and cumulative energy. |
| parameters | 1 |

#### Parameters

| # | Id | Type | Value | Selection Items |
| --- | --- | --- | --- | --- |
| 1 | [21](#param-2-227-srec-report-query-21) | 16 | False | 0 |

<a id="chart-2-228-synthesized-power"></a>
### Synthesized Power

| Field | Value |
| --- | --- |
| chartType | 228 |
| isAdvanced | true |
| chartDescription | Estimates power for an inverter or meter, using the best available nearby device or weather data. |
| parameters | 2 |

#### Parameters

| # | Id | Type | Value | Selection Items |
| --- | --- | --- | --- | --- |
| 1 | [71](#param-2-228-synthesized-power-71) | 1 | 0 | 0 |
| 2 | [72](#param-2-228-synthesized-power-72) | 16 | False | 0 |

<a id="chart-2-28-uptime"></a>
### Uptime

| Field | Value |
| --- | --- |
| chartType | 28 |
| isAdvanced | true |
| chartDescription | The uptime is calculated when the required minimum irradiance is configured within the Site Setup Performance options (default = 100 w/m²).  The percentage is 100% for every 15 minute interval when the inverter is producing power.  If no weather data is available for a sample, then that 15 minute period is ignored.  The weighted-average for the time span is calculated for all inverters based on their relative system size. |
| parameters | 1 |

#### Parameters

| # | Id | Type | Value | Selection Items |
| --- | --- | --- | --- | --- |
| 1 | [21](#param-2-28-uptime-21) | 16 | False | 0 |

<a id="chart-2-54-year-over-year-production"></a>
### Year over year production

| Field | Value |
| --- | --- |
| chartType | 54 |
| isAdvanced | true |
| chartDescription |  |
| parameters | 0 |

(No parameters)

<a id="chart-2-4-yield"></a>
### Yield

| Field | Value |
| --- | --- |
| chartType | 4 |
| isAdvanced | false |
| chartDescription | The yield is the output divided by the DC system size. This is used to evaluate performance between difference size systems. |
| parameters | 1 |

#### Parameters

| # | Id | Type | Value | Selection Items |
| --- | --- | --- | --- | --- |
| 1 | [0](#param-2-4-yield-0) | 16 | False | 0 |

<a id="section-4-weather"></a>
## Weather

| Field | Value |
| --- | --- |
| sectionCode | 4 |
| hardwareOptions | 5 |
| predefinedCharts | 9 |

### Charts

| # | Display Name | Chart Type | Advanced | Parameters | Description |
| --- | --- | --- | --- | --- | --- |
| 1 | [Clean average weather data](#chart-4-257-clean-average-weather-data) | 257 | false | 0 | Filters weather data and substitutes alternate data from alternate source if necessary to produce the best possible representation of weather conditions. |
| 2 | [GHI comparison](#chart-4-187-ghi-comparison) | 187 | false | 2 | Compare irradiance data from multiple sources, normalized to GHI. |
| 3 | [Irradiance](#chart-4-21-irradiance) | 21 | false | 1 | Measured, GHI, POA and modeled irradiance and insolation.  Use the "Blue-sky ratio" to compare sensor data on clear days to the calculated reference data. |
| 4 | [Irradiance scatter comparison](#chart-4-186-irradiance-scatter-comparison) | 186 | true | 1 | Compare irradiance data from multiple sources using a scatter chart.  All data is normalized to GHI.  The first data set is used for the X axis, all others are used for the Y axis. |
| 5 | [Irradiance Sensor Degrade](#chart-4-245-irradiance-sensor-degrade) | 245 | false | 1 | Calculates irradiance sensor degradation (requires at least 3 years of data). |
| 6 | [Irradiance sensor orientation](#chart-4-258-irradiance-sensor-orientation) | 258 | true | 1 | Show the correlation of POA sensor data to the clear sky model, and estimates the orientation of an irradiance sensor for maximum correlation. |
| 7 | [POA comparison](#chart-4-240-poa-comparison) | 240 | false | 1 | Compare irradiance data from multiple sources, normalized to POA. |
| 8 | [Temperature](#chart-4-19-temperature) | 19 | false | 1 | Ambient and module temperature. |
| 9 | [Wind](#chart-4-20-wind) | 20 | false | 0 |  |

<a id="chart-4-257-clean-average-weather-data"></a>
### Clean average weather data

| Field | Value |
| --- | --- |
| chartType | 257 |
| isAdvanced | false |
| chartDescription | Filters weather data and substitutes alternate data from alternate source if necessary to produce the best possible representation of weather conditions. |
| parameters | 0 |

(No parameters)

<a id="chart-4-187-ghi-comparison"></a>
### GHI comparison

| Field | Value |
| --- | --- |
| chartType | 187 |
| isAdvanced | false |
| chartDescription | Compare irradiance data from multiple sources, normalized to GHI. |
| parameters | 2 |

#### Parameters

| # | Id | Type | Value | Selection Items |
| --- | --- | --- | --- | --- |
| 1 | [92](#param-4-187-ghi-comparison-92) | 42 | 0 | 4 |
| 2 | [97](#param-4-187-ghi-comparison-97) | 16 | False | 0 |

<a id="param-4-187-ghi-comparison-92"></a>
#### Parameter 92 Selection Items

| Field | Value |
| --- | --- |
| type | 42 |
| value | 0 |
| selectionItems | 4 |

| # | Name | Value |
| --- | --- | --- |
| 1 | NREL Clear Sky | 0 |
| 2 | AE Enhanced | 1 |
| 3 | Isotropic | 2 |
| 4 | Perez | 3 |

<a id="chart-4-21-irradiance"></a>
### Irradiance

| Field | Value |
| --- | --- |
| chartType | 21 |
| isAdvanced | false |
| chartDescription | Measured, GHI, POA and modeled irradiance and insolation.  Use the "Blue-sky ratio" to compare sensor data on clear days to the calculated reference data. |
| parameters | 1 |

#### Parameters

| # | Id | Type | Value | Selection Items |
| --- | --- | --- | --- | --- |
| 1 | [5](#param-4-21-irradiance-5) | 35 | [{'value': 0, 'isChecked': False}, {'value': 1, 'isChecked': True}, {'value': 2, 'isChecked': False}, {'value': 4, 'isChecked': False}, {'value': 8, 'isChecked': False}, {'value': 16, 'isChecked': False}, {'value': 32, 'isChecked': False}, {'value': 64, 'isChecked': False}, {'value': 128, 'isChecked': False}] | 0 |

<a id="chart-4-186-irradiance-scatter-comparison"></a>
### Irradiance scatter comparison

| Field | Value |
| --- | --- |
| chartType | 186 |
| isAdvanced | true |
| chartDescription | Compare irradiance data from multiple sources using a scatter chart.  All data is normalized to GHI.  The first data set is used for the X axis, all others are used for the Y axis. |
| parameters | 1 |

#### Parameters

| # | Id | Type | Value | Selection Items |
| --- | --- | --- | --- | --- |
| 1 | [64](#param-4-186-irradiance-scatter-comparison-64) | 1 | 0 | 0 |

<a id="chart-4-245-irradiance-sensor-degrade"></a>
### Irradiance Sensor Degrade

| Field | Value |
| --- | --- |
| chartType | 245 |
| isAdvanced | false |
| chartDescription | Calculates irradiance sensor degradation (requires at least 3 years of data). |
| parameters | 1 |

#### Parameters

| # | Id | Type | Value | Selection Items |
| --- | --- | --- | --- | --- |
| 1 | [64](#param-4-245-irradiance-sensor-degrade-64) | 1 | 0 | 0 |

<a id="chart-4-258-irradiance-sensor-orientation"></a>
### Irradiance sensor orientation

| Field | Value |
| --- | --- |
| chartType | 258 |
| isAdvanced | true |
| chartDescription | Show the correlation of POA sensor data to the clear sky model, and estimates the orientation of an irradiance sensor for maximum correlation. |
| parameters | 1 |

#### Parameters

| # | Id | Type | Value | Selection Items |
| --- | --- | --- | --- | --- |
| 1 | [0](#param-4-258-irradiance-sensor-orientation-0) | 16 | False | 0 |

<a id="chart-4-240-poa-comparison"></a>
### POA comparison

| Field | Value |
| --- | --- |
| chartType | 240 |
| isAdvanced | false |
| chartDescription | Compare irradiance data from multiple sources, normalized to POA. |
| parameters | 1 |

#### Parameters

| # | Id | Type | Value | Selection Items |
| --- | --- | --- | --- | --- |
| 1 | [92](#param-4-240-poa-comparison-92) | 42 | 0 | 4 |

<a id="param-4-240-poa-comparison-92"></a>
#### Parameter 92 Selection Items

| Field | Value |
| --- | --- |
| type | 42 |
| value | 0 |
| selectionItems | 4 |

| # | Name | Value |
| --- | --- | --- |
| 1 | NREL Clear Sky | 0 |
| 2 | AE Enhanced | 1 |
| 3 | Isotropic | 2 |
| 4 | Perez | 3 |

<a id="chart-4-19-temperature"></a>
### Temperature

| Field | Value |
| --- | --- |
| chartType | 19 |
| isAdvanced | false |
| chartDescription | Ambient and module temperature. |
| parameters | 1 |

#### Parameters

| # | Id | Type | Value | Selection Items |
| --- | --- | --- | --- | --- |
| 1 | [4](#param-4-19-temperature-4) | 16 | False | 0 |

<a id="chart-4-20-wind"></a>
### Wind

| Field | Value |
| --- | --- |
| chartType | 20 |
| isAdvanced | false |
| chartDescription |  |
| parameters | 0 |

(No parameters)

<a id="section-5-strings"></a>
## Strings

| Field | Value |
| --- | --- |
| sectionCode | 5 |
| hardwareOptions | 1, 6, 7, 8 |
| predefinedCharts | 1 |

### Charts

| # | Display Name | Chart Type | Advanced | Parameters | Description |
| --- | --- | --- | --- | --- | --- |
| 1 | [String Availability](#chart-5-271-string-availability) | 271 | true | 3 | Shows the availability for DC strings (number of operating strings / number of strings) |

<a id="chart-5-271-string-availability"></a>
### String Availability

| Field | Value |
| --- | --- |
| chartType | 271 |
| isAdvanced | true |
| chartDescription | Shows the availability for DC strings (number of operating strings / number of strings) |
| parameters | 3 |

#### Parameters

| # | Id | Type | Value | Selection Items |
| --- | --- | --- | --- | --- |
| 1 | [2](#param-5-271-string-availability-2) | 16 | False | 0 |
| 2 | [101](#param-5-271-string-availability-101) | 2 | 0.5 | 0 |
| 3 | [102](#param-5-271-string-availability-102) | 2 | 0.1 | 0 |

<a id="section-6-zones"></a>
## Zones

| Field | Value |
| --- | --- |
| sectionCode | 6 |
| hardwareOptions | 1, 6, 7, 8 |
| predefinedCharts | 1 |

### Charts

| # | Display Name | Chart Type | Advanced | Parameters | Description |
| --- | --- | --- | --- | --- | --- |
| 1 | [String Availability](#chart-6-271-string-availability) | 271 | true | 3 | Shows the availability for DC strings (number of operating strings / number of strings) |

<a id="chart-6-271-string-availability"></a>
### String Availability

| Field | Value |
| --- | --- |
| chartType | 271 |
| isAdvanced | true |
| chartDescription | Shows the availability for DC strings (number of operating strings / number of strings) |
| parameters | 3 |

#### Parameters

| # | Id | Type | Value | Selection Items |
| --- | --- | --- | --- | --- |
| 1 | [2](#param-6-271-string-availability-2) | 16 | False | 0 |
| 2 | [101](#param-6-271-string-availability-101) | 2 | 0.5 | 0 |
| 3 | [102](#param-6-271-string-availability-102) | 2 | 0.1 | 0 |

<a id="section-17-site-aggregate"></a>
## Site Aggregate

| Field | Value |
| --- | --- |
| sectionCode | 17 |
| hardwareOptions |  |
| predefinedCharts | 28 |

### Charts

| # | Display Name | Chart Type | Advanced | Parameters | Description |
| --- | --- | --- | --- | --- | --- |
| 1 | [Cumulative production: actual, expected and estimated](#chart-17-195-cumulative-production-actual-expected-and-estimated) | 195 | true | 4 | Cumulative production compared against the expected (modeled) production, along with the estimated site production |
| 2 | [Device availability](#chart-17-197-device-availability) | 197 | true | 2 | Device availability based on recorded downtime percentages weighted by device size relative to system size. |
| 3 | [Generation](#chart-17-94-generation) | 94 | false | 5 | Total generation, as reported by all production meters on a site.  If production meters aren't available, then inverter data is used. |
| 4 | [Generation by Inverter](#chart-17-98-generation-by-inverter) | 98 | true | 4 | Power output for all inverters |
| 5 | [Generation vs. Baseline](#chart-17-102-generation-vs-baseline) | 102 | true | 4 | Shows cumulative site production and the site estimate |
| 6 | [Meter, Inverter & GHI](#chart-17-93-meter-inverter-ghi) | 93 | true | 1 | Total production reported by the production meters and inverters, along with the Global Horizontal Irradiance |
| 7 | [Predicted Power](#chart-17-97-predicted-power) | 97 | true | 4 | Predicted and actual PV power |
| 8 | [Production: actual, expected and estimated](#chart-17-89-production-actual-expected-and-estimated) | 89 | false | 4 | Production compared against the expected (modeled) production, along with the estimated site production |
| 9 | [Site availability](#chart-17-119-site-availability) | 119 | true | 2 | Site availability based on recorded downtime percentages. |
| 10 | [Site Production](#chart-17-99-site-production) | 99 | true | 4 | Shows total energy production for a site (uses production meters if available, otherwise use inverters) |
| 11 | [Site: ambient](#chart-17-110-site-ambient) | 110 | true | 0 | Ambient temperature |
| 12 | [Site: budgeted production](#chart-17-118-site-budgeted-production) | 118 | true | 0 | Shows budget energy production for a site, based on preconfigured monthly production estimates degraded annually without interpolation between months |
| 13 | [Site: cumulative production](#chart-17-105-site-cumulative-production) | 105 | true | 1 | Shows cumulative energy production for a site (use production meters if available, otherwise use inverters) |
| 14 | [Site: DNI](#chart-17-115-site-dni) | 115 | true | 0 | Direct Normal Irradiance |
| 15 | [Site: estimated GHI insolation](#chart-17-159-site-estimated-ghi-insolation) | 159 | true | 0 | Estimated GHI insolation, based on preconfigured monthly insolation estimates |
| 16 | [Site: estimated GHI insolation (annual degrade)](#chart-17-160-site-estimated-ghi-insolation-annual-degrade) | 160 | true | 0 | Estimated GHI insolation, based on preconfigured monthly insolation estimates degraded annually without interpolation between months |
| 17 | [Site: estimated insolation](#chart-17-116-site-estimated-insolation) | 116 | true | 0 | Estimated insolation, based on preconfigured monthly insolation estimates |
| 18 | [Site: estimated insolation (annual degrade)](#chart-17-117-site-estimated-insolation-annual-degrade) | 117 | true | 0 | Estimated insolation, based on preconfigured monthly insolation estimates degraded annually without interpolation between months |
| 19 | [Site: estimated production](#chart-17-106-site-estimated-production) | 106 | true | 0 | Shows estimated energy production for a site, based on preconfigured monthly production estimates |
| 20 | [Site: expected production](#chart-17-107-site-expected-production) | 107 | true | 1 | Shows expected energy production for a site, based on measured irradiance and module temperature |
| 21 | [Site: GHI](#chart-17-109-site-ghi) | 109 | true | 0 | Global Horizontal Irradiance |
| 22 | [Site: interval production](#chart-17-104-site-interval-production) | 104 | true | 1 | Shows energy production for a site (use production meters if available, otherwise use inverters) |
| 23 | [Site: inverter uptime](#chart-17-113-site-inverter-uptime) | 113 | true | 0 | The uptime is calculated when there’s the required minimum irradiance (default = 100 w/m², configurable on Site Setup page, Performance tab).  The percentage is 100% for every 15 minute interval when the inverter is producing power.  If there’s no weather data, then that 15 minute period is ignored.  The weighted-average for the time span is calculated for all inverters based on their relative system size. |
| 24 | [Site: module](#chart-17-111-site-module) | 111 | true | 0 | Module temperature |
| 25 | [Site: POA](#chart-17-108-site-poa) | 108 | true | 0 | Plane of Array Irradiance |
| 26 | [Site: Uptime](#chart-17-168-site-uptime) | 168 | true | 3 | The uptime for the site is calculated as a weighted average percentage of each inverter (or each meter if no inverters are present), when the required minimum irradiance is configured within the Site Setup Performance options (default = 100 w/m²).  For each device, the percentage is 100% for every 15 minute interval when the inverter is producing power. If no weather data is available for a sample, then that 15 minute period is ignored. |
| 27 | [Volts & Amps](#chart-17-95-volts-amps) | 95 | false | 3 | AC voltage and current |
| 28 | [Weather](#chart-17-96-weather) | 96 | true | 3 | Site weather data |

<a id="chart-17-195-cumulative-production-actual-expected-and-estimated"></a>
### Cumulative production: actual, expected and estimated

| Field | Value |
| --- | --- |
| chartType | 195 |
| isAdvanced | true |
| chartDescription | Cumulative production compared against the expected (modeled) production, along with the estimated site production |
| parameters | 4 |

#### Parameters

| # | Id | Type | Value | Selection Items |
| --- | --- | --- | --- | --- |
| 1 | [52](#param-17-195-cumulative-production-actual-expected-and-estimated-52) | 29 | Pow | 7 |
| 2 | [4](#param-17-195-cumulative-production-actual-expected-and-estimated-4) | 16 | True | 0 |
| 3 | [31](#param-17-195-cumulative-production-actual-expected-and-estimated-31) | 16 | True | 0 |
| 4 | [21](#param-17-195-cumulative-production-actual-expected-and-estimated-21) | 16 | False | 0 |

<a id="param-17-195-cumulative-production-actual-expected-and-estimated-52"></a>
#### Parameter 52 Selection Items

| Field | Value |
| --- | --- |
| type | 29 |
| value | Pow |
| selectionItems | 7 |

| # | Name | Value |
| --- | --- | --- |
| 1 | Annual compound percentage | Pow |
| 2 | Annual linear percentage | Linear |
| 3 | No aged derate | None |
| 4 | Monthly straight line | FlatMonth |
| 5 | Annual straight line | FlatYear |
| 6 | Ignore production guarantee | NoProdGuarantee |
| 7 | Annual linear straight line | LinearFlatYear |

<a id="chart-17-197-device-availability"></a>
### Device availability

| Field | Value |
| --- | --- |
| chartType | 197 |
| isAdvanced | true |
| chartDescription | Device availability based on recorded downtime percentages weighted by device size relative to system size. |
| parameters | 2 |

#### Parameters

| # | Id | Type | Value | Selection Items |
| --- | --- | --- | --- | --- |
| 1 | [0](#param-17-197-device-availability-0) | 16 | False | 0 |
| 2 | [61](#param-17-197-device-availability-61) | 16 | False | 0 |

<a id="chart-17-94-generation"></a>
### Generation

| Field | Value |
| --- | --- |
| chartType | 94 |
| isAdvanced | false |
| chartDescription | Total generation, as reported by all production meters on a site.  If production meters aren't available, then inverter data is used. |
| parameters | 5 |

#### Parameters

| # | Id | Type | Value | Selection Items |
| --- | --- | --- | --- | --- |
| 1 | [10](#param-17-94-generation-10) | 16 | False | 0 |
| 2 | [21](#param-17-94-generation-21) | 16 | False | 0 |
| 3 | [55](#param-17-94-generation-55) | 37 | 0 | 25 |
| 4 | [56](#param-17-94-generation-56) | 1 | 0 | 0 |
| 5 | [57](#param-17-94-generation-57) | 31 | 0 | 0 |

<a id="param-17-94-generation-55"></a>
#### Parameter 55 Selection Items

| Field | Value |
| --- | --- |
| type | 37 |
| value | 0 |
| selectionItems | 25 |

| # | Name | Value |
| --- | --- | --- |
| 1 | Unknown | 0 |
| 2 | Generation | 1 |
| 3 | Volts | 2 |
| 4 | Amps | 3 |
| 5 | Predicted | 4 |
| 6 | Actual | 5 |
| 7 | Cumulative | 6 |
| 8 | Delta | 7 |
| 9 | Baseline | 8 |
| 10 | Irradiance | 9 |
| 11 | GHI Irradiance | 10 |
| 12 | Cell Temperature | 11 |
| 13 | Cell Temperature 2 | 12 |
| 14 | Ambient Temperature | 13 |
| 15 | Wind Speed | 14 |
| 16 | Estimated | 15 |
| 17 | AnnualDegrade | 16 |
| 18 | DNIIrradiance | 17 |
| 19 | EstimatedGHI | 18 |
| 20 | AnnualDegradeGHI | 19 |
| 21 | Uptime | 20 |
| 22 | WeightedUptime | 21 |
| 23 | First | -3 |
| 24 | Last | -2 |
| 25 | Total | -1 |

<a id="chart-17-98-generation-by-inverter"></a>
### Generation by Inverter

| Field | Value |
| --- | --- |
| chartType | 98 |
| isAdvanced | true |
| chartDescription | Power output for all inverters |
| parameters | 4 |

#### Parameters

| # | Id | Type | Value | Selection Items |
| --- | --- | --- | --- | --- |
| 1 | [55](#param-17-98-generation-by-inverter-55) | 37 | 0 | 25 |
| 2 | [56](#param-17-98-generation-by-inverter-56) | 1 | 0 | 0 |
| 3 | [57](#param-17-98-generation-by-inverter-57) | 31 | 0 | 0 |
| 4 | [21](#param-17-98-generation-by-inverter-21) | 16 | False | 0 |

<a id="param-17-98-generation-by-inverter-55"></a>
#### Parameter 55 Selection Items

| Field | Value |
| --- | --- |
| type | 37 |
| value | 0 |
| selectionItems | 25 |

| # | Name | Value |
| --- | --- | --- |
| 1 | Unknown | 0 |
| 2 | Generation | 1 |
| 3 | Volts | 2 |
| 4 | Amps | 3 |
| 5 | Predicted | 4 |
| 6 | Actual | 5 |
| 7 | Cumulative | 6 |
| 8 | Delta | 7 |
| 9 | Baseline | 8 |
| 10 | Irradiance | 9 |
| 11 | GHI Irradiance | 10 |
| 12 | Cell Temperature | 11 |
| 13 | Cell Temperature 2 | 12 |
| 14 | Ambient Temperature | 13 |
| 15 | Wind Speed | 14 |
| 16 | Estimated | 15 |
| 17 | AnnualDegrade | 16 |
| 18 | DNIIrradiance | 17 |
| 19 | EstimatedGHI | 18 |
| 20 | AnnualDegradeGHI | 19 |
| 21 | Uptime | 20 |
| 22 | WeightedUptime | 21 |
| 23 | First | -3 |
| 24 | Last | -2 |
| 25 | Total | -1 |

<a id="chart-17-102-generation-vs-baseline"></a>
### Generation vs. Baseline

| Field | Value |
| --- | --- |
| chartType | 102 |
| isAdvanced | true |
| chartDescription | Shows cumulative site production and the site estimate |
| parameters | 4 |

#### Parameters

| # | Id | Type | Value | Selection Items |
| --- | --- | --- | --- | --- |
| 1 | [55](#param-17-102-generation-vs-baseline-55) | 37 | 0 | 25 |
| 2 | [56](#param-17-102-generation-vs-baseline-56) | 1 | 0 | 0 |
| 3 | [57](#param-17-102-generation-vs-baseline-57) | 31 | 0 | 0 |
| 4 | [21](#param-17-102-generation-vs-baseline-21) | 16 | False | 0 |

<a id="param-17-102-generation-vs-baseline-55"></a>
#### Parameter 55 Selection Items

| Field | Value |
| --- | --- |
| type | 37 |
| value | 0 |
| selectionItems | 25 |

| # | Name | Value |
| --- | --- | --- |
| 1 | Unknown | 0 |
| 2 | Generation | 1 |
| 3 | Volts | 2 |
| 4 | Amps | 3 |
| 5 | Predicted | 4 |
| 6 | Actual | 5 |
| 7 | Cumulative | 6 |
| 8 | Delta | 7 |
| 9 | Baseline | 8 |
| 10 | Irradiance | 9 |
| 11 | GHI Irradiance | 10 |
| 12 | Cell Temperature | 11 |
| 13 | Cell Temperature 2 | 12 |
| 14 | Ambient Temperature | 13 |
| 15 | Wind Speed | 14 |
| 16 | Estimated | 15 |
| 17 | AnnualDegrade | 16 |
| 18 | DNIIrradiance | 17 |
| 19 | EstimatedGHI | 18 |
| 20 | AnnualDegradeGHI | 19 |
| 21 | Uptime | 20 |
| 22 | WeightedUptime | 21 |
| 23 | First | -3 |
| 24 | Last | -2 |
| 25 | Total | -1 |

<a id="chart-17-93-meter-inverter-ghi"></a>
### Meter, Inverter & GHI

| Field | Value |
| --- | --- |
| chartType | 93 |
| isAdvanced | true |
| chartDescription | Total production reported by the production meters and inverters, along with the Global Horizontal Irradiance |
| parameters | 1 |

#### Parameters

| # | Id | Type | Value | Selection Items |
| --- | --- | --- | --- | --- |
| 1 | [21](#param-17-93-meter-inverter-ghi-21) | 16 | False | 0 |

<a id="chart-17-97-predicted-power"></a>
### Predicted Power

| Field | Value |
| --- | --- |
| chartType | 97 |
| isAdvanced | true |
| chartDescription | Predicted and actual PV power |
| parameters | 4 |

#### Parameters

| # | Id | Type | Value | Selection Items |
| --- | --- | --- | --- | --- |
| 1 | [55](#param-17-97-predicted-power-55) | 37 | 0 | 25 |
| 2 | [56](#param-17-97-predicted-power-56) | 1 | 0 | 0 |
| 3 | [57](#param-17-97-predicted-power-57) | 31 | 0 | 0 |
| 4 | [21](#param-17-97-predicted-power-21) | 16 | False | 0 |

<a id="param-17-97-predicted-power-55"></a>
#### Parameter 55 Selection Items

| Field | Value |
| --- | --- |
| type | 37 |
| value | 0 |
| selectionItems | 25 |

| # | Name | Value |
| --- | --- | --- |
| 1 | Unknown | 0 |
| 2 | Generation | 1 |
| 3 | Volts | 2 |
| 4 | Amps | 3 |
| 5 | Predicted | 4 |
| 6 | Actual | 5 |
| 7 | Cumulative | 6 |
| 8 | Delta | 7 |
| 9 | Baseline | 8 |
| 10 | Irradiance | 9 |
| 11 | GHI Irradiance | 10 |
| 12 | Cell Temperature | 11 |
| 13 | Cell Temperature 2 | 12 |
| 14 | Ambient Temperature | 13 |
| 15 | Wind Speed | 14 |
| 16 | Estimated | 15 |
| 17 | AnnualDegrade | 16 |
| 18 | DNIIrradiance | 17 |
| 19 | EstimatedGHI | 18 |
| 20 | AnnualDegradeGHI | 19 |
| 21 | Uptime | 20 |
| 22 | WeightedUptime | 21 |
| 23 | First | -3 |
| 24 | Last | -2 |
| 25 | Total | -1 |

<a id="chart-17-89-production-actual-expected-and-estimated"></a>
### Production: actual, expected and estimated

| Field | Value |
| --- | --- |
| chartType | 89 |
| isAdvanced | false |
| chartDescription | Production compared against the expected (modeled) production, along with the estimated site production |
| parameters | 4 |

#### Parameters

| # | Id | Type | Value | Selection Items |
| --- | --- | --- | --- | --- |
| 1 | [52](#param-17-89-production-actual-expected-and-estimated-52) | 29 | Pow | 7 |
| 2 | [4](#param-17-89-production-actual-expected-and-estimated-4) | 16 | True | 0 |
| 3 | [31](#param-17-89-production-actual-expected-and-estimated-31) | 16 | False | 0 |
| 4 | [21](#param-17-89-production-actual-expected-and-estimated-21) | 16 | False | 0 |

<a id="param-17-89-production-actual-expected-and-estimated-52"></a>
#### Parameter 52 Selection Items

| Field | Value |
| --- | --- |
| type | 29 |
| value | Pow |
| selectionItems | 7 |

| # | Name | Value |
| --- | --- | --- |
| 1 | Annual compound percentage | Pow |
| 2 | Annual linear percentage | Linear |
| 3 | No aged derate | None |
| 4 | Monthly straight line | FlatMonth |
| 5 | Annual straight line | FlatYear |
| 6 | Ignore production guarantee | NoProdGuarantee |
| 7 | Annual linear straight line | LinearFlatYear |

<a id="chart-17-119-site-availability"></a>
### Site availability

| Field | Value |
| --- | --- |
| chartType | 119 |
| isAdvanced | true |
| chartDescription | Site availability based on recorded downtime percentages. |
| parameters | 2 |

#### Parameters

| # | Id | Type | Value | Selection Items |
| --- | --- | --- | --- | --- |
| 1 | [0](#param-17-119-site-availability-0) | 16 | False | 0 |
| 2 | [61](#param-17-119-site-availability-61) | 16 | False | 0 |

<a id="chart-17-99-site-production"></a>
### Site Production

| Field | Value |
| --- | --- |
| chartType | 99 |
| isAdvanced | true |
| chartDescription | Shows total energy production for a site (uses production meters if available, otherwise use inverters) |
| parameters | 4 |

#### Parameters

| # | Id | Type | Value | Selection Items |
| --- | --- | --- | --- | --- |
| 1 | [55](#param-17-99-site-production-55) | 37 | 0 | 25 |
| 2 | [56](#param-17-99-site-production-56) | 1 | 0 | 0 |
| 3 | [57](#param-17-99-site-production-57) | 31 | 0 | 0 |
| 4 | [21](#param-17-99-site-production-21) | 16 | False | 0 |

<a id="param-17-99-site-production-55"></a>
#### Parameter 55 Selection Items

| Field | Value |
| --- | --- |
| type | 37 |
| value | 0 |
| selectionItems | 25 |

| # | Name | Value |
| --- | --- | --- |
| 1 | Unknown | 0 |
| 2 | Generation | 1 |
| 3 | Volts | 2 |
| 4 | Amps | 3 |
| 5 | Predicted | 4 |
| 6 | Actual | 5 |
| 7 | Cumulative | 6 |
| 8 | Delta | 7 |
| 9 | Baseline | 8 |
| 10 | Irradiance | 9 |
| 11 | GHI Irradiance | 10 |
| 12 | Cell Temperature | 11 |
| 13 | Cell Temperature 2 | 12 |
| 14 | Ambient Temperature | 13 |
| 15 | Wind Speed | 14 |
| 16 | Estimated | 15 |
| 17 | AnnualDegrade | 16 |
| 18 | DNIIrradiance | 17 |
| 19 | EstimatedGHI | 18 |
| 20 | AnnualDegradeGHI | 19 |
| 21 | Uptime | 20 |
| 22 | WeightedUptime | 21 |
| 23 | First | -3 |
| 24 | Last | -2 |
| 25 | Total | -1 |

<a id="chart-17-110-site-ambient"></a>
### Site: ambient

| Field | Value |
| --- | --- |
| chartType | 110 |
| isAdvanced | true |
| chartDescription | Ambient temperature |
| parameters | 0 |

(No parameters)

<a id="chart-17-118-site-budgeted-production"></a>
### Site: budgeted production

| Field | Value |
| --- | --- |
| chartType | 118 |
| isAdvanced | true |
| chartDescription | Shows budget energy production for a site, based on preconfigured monthly production estimates degraded annually without interpolation between months |
| parameters | 0 |

(No parameters)

<a id="chart-17-105-site-cumulative-production"></a>
### Site: cumulative production

| Field | Value |
| --- | --- |
| chartType | 105 |
| isAdvanced | true |
| chartDescription | Shows cumulative energy production for a site (use production meters if available, otherwise use inverters) |
| parameters | 1 |

#### Parameters

| # | Id | Type | Value | Selection Items |
| --- | --- | --- | --- | --- |
| 1 | [21](#param-17-105-site-cumulative-production-21) | 16 | False | 0 |

<a id="chart-17-115-site-dni"></a>
### Site: DNI

| Field | Value |
| --- | --- |
| chartType | 115 |
| isAdvanced | true |
| chartDescription | Direct Normal Irradiance |
| parameters | 0 |

(No parameters)

<a id="chart-17-159-site-estimated-ghi-insolation"></a>
### Site: estimated GHI insolation

| Field | Value |
| --- | --- |
| chartType | 159 |
| isAdvanced | true |
| chartDescription | Estimated GHI insolation, based on preconfigured monthly insolation estimates |
| parameters | 0 |

(No parameters)

<a id="chart-17-160-site-estimated-ghi-insolation-annual-degrade"></a>
### Site: estimated GHI insolation (annual degrade)

| Field | Value |
| --- | --- |
| chartType | 160 |
| isAdvanced | true |
| chartDescription | Estimated GHI insolation, based on preconfigured monthly insolation estimates degraded annually without interpolation between months |
| parameters | 0 |

(No parameters)

<a id="chart-17-116-site-estimated-insolation"></a>
### Site: estimated insolation

| Field | Value |
| --- | --- |
| chartType | 116 |
| isAdvanced | true |
| chartDescription | Estimated insolation, based on preconfigured monthly insolation estimates |
| parameters | 0 |

(No parameters)

<a id="chart-17-117-site-estimated-insolation-annual-degrade"></a>
### Site: estimated insolation (annual degrade)

| Field | Value |
| --- | --- |
| chartType | 117 |
| isAdvanced | true |
| chartDescription | Estimated insolation, based on preconfigured monthly insolation estimates degraded annually without interpolation between months |
| parameters | 0 |

(No parameters)

<a id="chart-17-106-site-estimated-production"></a>
### Site: estimated production

| Field | Value |
| --- | --- |
| chartType | 106 |
| isAdvanced | true |
| chartDescription | Shows estimated energy production for a site, based on preconfigured monthly production estimates |
| parameters | 0 |

(No parameters)

<a id="chart-17-107-site-expected-production"></a>
### Site: expected production

| Field | Value |
| --- | --- |
| chartType | 107 |
| isAdvanced | true |
| chartDescription | Shows expected energy production for a site, based on measured irradiance and module temperature |
| parameters | 1 |

#### Parameters

| # | Id | Type | Value | Selection Items |
| --- | --- | --- | --- | --- |
| 1 | [21](#param-17-107-site-expected-production-21) | 16 | False | 0 |

<a id="chart-17-109-site-ghi"></a>
### Site: GHI

| Field | Value |
| --- | --- |
| chartType | 109 |
| isAdvanced | true |
| chartDescription | Global Horizontal Irradiance |
| parameters | 0 |

(No parameters)

<a id="chart-17-104-site-interval-production"></a>
### Site: interval production

| Field | Value |
| --- | --- |
| chartType | 104 |
| isAdvanced | true |
| chartDescription | Shows energy production for a site (use production meters if available, otherwise use inverters) |
| parameters | 1 |

#### Parameters

| # | Id | Type | Value | Selection Items |
| --- | --- | --- | --- | --- |
| 1 | [21](#param-17-104-site-interval-production-21) | 16 | False | 0 |

<a id="chart-17-113-site-inverter-uptime"></a>
### Site: inverter uptime

| Field | Value |
| --- | --- |
| chartType | 113 |
| isAdvanced | true |
| chartDescription | The uptime is calculated when there’s the required minimum irradiance (default = 100 w/m², configurable on Site Setup page, Performance tab).  The percentage is 100% for every 15 minute interval when the inverter is producing power.  If there’s no weather data, then that 15 minute period is ignored.  The weighted-average for the time span is calculated for all inverters based on their relative system size. |
| parameters | 0 |

(No parameters)

<a id="chart-17-111-site-module"></a>
### Site: module

| Field | Value |
| --- | --- |
| chartType | 111 |
| isAdvanced | true |
| chartDescription | Module temperature |
| parameters | 0 |

(No parameters)

<a id="chart-17-108-site-poa"></a>
### Site: POA

| Field | Value |
| --- | --- |
| chartType | 108 |
| isAdvanced | true |
| chartDescription | Plane of Array Irradiance |
| parameters | 0 |

(No parameters)

<a id="chart-17-168-site-uptime"></a>
### Site: Uptime

| Field | Value |
| --- | --- |
| chartType | 168 |
| isAdvanced | true |
| chartDescription | The uptime for the site is calculated as a weighted average percentage of each inverter (or each meter if no inverters are present), when the required minimum irradiance is configured within the Site Setup Performance options (default = 100 w/m²).  For each device, the percentage is 100% for every 15 minute interval when the inverter is producing power. If no weather data is available for a sample, then that 15 minute period is ignored. |
| parameters | 3 |

#### Parameters

| # | Id | Type | Value | Selection Items |
| --- | --- | --- | --- | --- |
| 1 | [21](#param-17-168-site-uptime-21) | 16 | False | 0 |
| 2 | [55](#param-17-168-site-uptime-55) | 37 | 0 | 25 |
| 3 | [56](#param-17-168-site-uptime-56) | 1 | 0 | 0 |

<a id="param-17-168-site-uptime-55"></a>
#### Parameter 55 Selection Items

| Field | Value |
| --- | --- |
| type | 37 |
| value | 0 |
| selectionItems | 25 |

| # | Name | Value |
| --- | --- | --- |
| 1 | Unknown | 0 |
| 2 | Generation | 1 |
| 3 | Volts | 2 |
| 4 | Amps | 3 |
| 5 | Predicted | 4 |
| 6 | Actual | 5 |
| 7 | Cumulative | 6 |
| 8 | Delta | 7 |
| 9 | Baseline | 8 |
| 10 | Irradiance | 9 |
| 11 | GHI Irradiance | 10 |
| 12 | Cell Temperature | 11 |
| 13 | Cell Temperature 2 | 12 |
| 14 | Ambient Temperature | 13 |
| 15 | Wind Speed | 14 |
| 16 | Estimated | 15 |
| 17 | AnnualDegrade | 16 |
| 18 | DNIIrradiance | 17 |
| 19 | EstimatedGHI | 18 |
| 20 | AnnualDegradeGHI | 19 |
| 21 | Uptime | 20 |
| 22 | WeightedUptime | 21 |
| 23 | First | -3 |
| 24 | Last | -2 |
| 25 | Total | -1 |

<a id="chart-17-95-volts-amps"></a>
### Volts & Amps

| Field | Value |
| --- | --- |
| chartType | 95 |
| isAdvanced | false |
| chartDescription | AC voltage and current |
| parameters | 3 |

#### Parameters

| # | Id | Type | Value | Selection Items |
| --- | --- | --- | --- | --- |
| 1 | [55](#param-17-95-volts-amps-55) | 37 | 0 | 25 |
| 2 | [56](#param-17-95-volts-amps-56) | 1 | 0 | 0 |
| 3 | [57](#param-17-95-volts-amps-57) | 31 | 0 | 0 |

<a id="param-17-95-volts-amps-55"></a>
#### Parameter 55 Selection Items

| Field | Value |
| --- | --- |
| type | 37 |
| value | 0 |
| selectionItems | 25 |

| # | Name | Value |
| --- | --- | --- |
| 1 | Unknown | 0 |
| 2 | Generation | 1 |
| 3 | Volts | 2 |
| 4 | Amps | 3 |
| 5 | Predicted | 4 |
| 6 | Actual | 5 |
| 7 | Cumulative | 6 |
| 8 | Delta | 7 |
| 9 | Baseline | 8 |
| 10 | Irradiance | 9 |
| 11 | GHI Irradiance | 10 |
| 12 | Cell Temperature | 11 |
| 13 | Cell Temperature 2 | 12 |
| 14 | Ambient Temperature | 13 |
| 15 | Wind Speed | 14 |
| 16 | Estimated | 15 |
| 17 | AnnualDegrade | 16 |
| 18 | DNIIrradiance | 17 |
| 19 | EstimatedGHI | 18 |
| 20 | AnnualDegradeGHI | 19 |
| 21 | Uptime | 20 |
| 22 | WeightedUptime | 21 |
| 23 | First | -3 |
| 24 | Last | -2 |
| 25 | Total | -1 |

<a id="chart-17-96-weather"></a>
### Weather

| Field | Value |
| --- | --- |
| chartType | 96 |
| isAdvanced | true |
| chartDescription | Site weather data |
| parameters | 3 |

#### Parameters

| # | Id | Type | Value | Selection Items |
| --- | --- | --- | --- | --- |
| 1 | [55](#param-17-96-weather-55) | 37 | 0 | 25 |
| 2 | [56](#param-17-96-weather-56) | 1 | 0 | 0 |
| 3 | [57](#param-17-96-weather-57) | 31 | 0 | 0 |

<a id="param-17-96-weather-55"></a>
#### Parameter 55 Selection Items

| Field | Value |
| --- | --- |
| type | 37 |
| value | 0 |
| selectionItems | 25 |

| # | Name | Value |
| --- | --- | --- |
| 1 | Unknown | 0 |
| 2 | Generation | 1 |
| 3 | Volts | 2 |
| 4 | Amps | 3 |
| 5 | Predicted | 4 |
| 6 | Actual | 5 |
| 7 | Cumulative | 6 |
| 8 | Delta | 7 |
| 9 | Baseline | 8 |
| 10 | Irradiance | 9 |
| 11 | GHI Irradiance | 10 |
| 12 | Cell Temperature | 11 |
| 13 | Cell Temperature 2 | 12 |
| 14 | Ambient Temperature | 13 |
| 15 | Wind Speed | 14 |
| 16 | Estimated | 15 |
| 17 | AnnualDegrade | 16 |
| 18 | DNIIrradiance | 17 |
| 19 | EstimatedGHI | 18 |
| 20 | AnnualDegradeGHI | 19 |
| 21 | Uptime | 20 |
| 22 | WeightedUptime | 21 |
| 23 | First | -3 |
| 24 | Last | -2 |
| 25 | Total | -1 |

<a id="section-18-summary"></a>
## Summary

| Field | Value |
| --- | --- |
| sectionCode | 18 |
| hardwareOptions |  |
| predefinedCharts | 16 |

### Charts

| # | Display Name | Chart Type | Advanced | Parameters | Description |
| --- | --- | --- | --- | --- | --- |
| 1 | [Environmental Impact Summary](#chart-18-62-environmental-impact-summary) | 62 | true | 0 |  |
| 2 | [Estimate Comparison](#chart-18-47-estimate-comparison) | 47 | true | 3 |  |
| 3 | [Estimate Comparison (daily)](#chart-18-75-estimate-comparison-daily) | 75 | true | 3 |  |
| 4 | [Model Comparison](#chart-18-46-model-comparison) | 46 | true | 3 |  |
| 5 | [Performance Ratio (detail)](#chart-18-49-performance-ratio-detail) | 49 | true | 0 | Site Performance Ratio, not adjusted for temperature (kW / DC size / irradiance) or (kWh / DC size / insolation) |
| 6 | [Performance Ratio (summary)](#chart-18-48-performance-ratio-summary) | 48 | true | 3 | Power output divided by DC system size and irradiance |
| 7 | [Production Comparison](#chart-18-44-production-comparison) | 44 | true | 3 | Compare production between multiple sites |
| 8 | [Site Production Comparison](#chart-18-90-site-production-comparison) | 90 | true | 2 | Production for each site compared against the expected production, and estimated production. Shows individual site results. |
| 9 | [Site Production Total](#chart-18-91-site-production-total) | 91 | true | 2 | Total site production compared against the expected and estimated production.  Adds results for multiple sites. |
| 10 | [Site Projected vs. Actual](#chart-18-173-site-projected-vs-actual) | 173 | true | 2 | Production for each site compared against the projected production. Shows individual site results. |
| 11 | [Site Yield](#chart-18-45-site-yield) | 45 | true | 3 | Total site output divided by DC system size |
| 12 | [Total Production](#chart-18-43-total-production) | 43 | true | 3 | The Total Production chart shows a summary of inverter output at the meter for multiple sites. |
| 13 | [Total Production & Estimate](#chart-18-60-total-production-estimate) | 60 | true | 3 |  |
| 14 | [Total Production & Model Estimate](#chart-18-67-total-production-model-estimate) | 67 | true | 0 |  |
| 15 | [Uptime Comparison (unweighted)](#chart-18-169-uptime-comparison-unweighted) | 169 | true | 3 | The uptime for each site is calculated as an average percentage of each inverter (or each meter if no inverters are present), when the required minimum irradiance is configured within the Site Setup Performance options (default = 100 w/m²).  |
| 16 | [Uptime Comparison (weighted)](#chart-18-170-uptime-comparison-weighted) | 170 | true | 3 | The uptime for each site is calculated as a weighted average percentage of each inverter (or each meter if no inverters are present), when the required minimum irradiance is configured within the Site Setup Performance options (default = 100 w/m²).  |

<a id="chart-18-62-environmental-impact-summary"></a>
### Environmental Impact Summary

| Field | Value |
| --- | --- |
| chartType | 62 |
| isAdvanced | true |
| chartDescription |  |
| parameters | 0 |

(No parameters)

<a id="chart-18-47-estimate-comparison"></a>
### Estimate Comparison

| Field | Value |
| --- | --- |
| chartType | 47 |
| isAdvanced | true |
| chartDescription |  |
| parameters | 3 |

#### Parameters

| # | Id | Type | Value | Selection Items |
| --- | --- | --- | --- | --- |
| 1 | [10](#param-18-47-estimate-comparison-10) | 16 | False | 0 |
| 2 | [6](#param-18-47-estimate-comparison-6) | 16 | True | 0 |
| 3 | [52](#param-18-47-estimate-comparison-52) | 29 | Pow | 7 |

<a id="param-18-47-estimate-comparison-52"></a>
#### Parameter 52 Selection Items

| Field | Value |
| --- | --- |
| type | 29 |
| value | Pow |
| selectionItems | 7 |

| # | Name | Value |
| --- | --- | --- |
| 1 | Annual compound percentage | Pow |
| 2 | Annual linear percentage | Linear |
| 3 | No aged derate | None |
| 4 | Monthly straight line | FlatMonth |
| 5 | Annual straight line | FlatYear |
| 6 | Ignore production guarantee | NoProdGuarantee |
| 7 | Annual linear straight line | LinearFlatYear |

<a id="chart-18-75-estimate-comparison-daily"></a>
### Estimate Comparison (daily)

| Field | Value |
| --- | --- |
| chartType | 75 |
| isAdvanced | true |
| chartDescription |  |
| parameters | 3 |

#### Parameters

| # | Id | Type | Value | Selection Items |
| --- | --- | --- | --- | --- |
| 1 | [10](#param-18-75-estimate-comparison-daily-10) | 16 | False | 0 |
| 2 | [6](#param-18-75-estimate-comparison-daily-6) | 16 | True | 0 |
| 3 | [52](#param-18-75-estimate-comparison-daily-52) | 29 | Pow | 7 |

<a id="param-18-75-estimate-comparison-daily-52"></a>
#### Parameter 52 Selection Items

| Field | Value |
| --- | --- |
| type | 29 |
| value | Pow |
| selectionItems | 7 |

| # | Name | Value |
| --- | --- | --- |
| 1 | Annual compound percentage | Pow |
| 2 | Annual linear percentage | Linear |
| 3 | No aged derate | None |
| 4 | Monthly straight line | FlatMonth |
| 5 | Annual straight line | FlatYear |
| 6 | Ignore production guarantee | NoProdGuarantee |
| 7 | Annual linear straight line | LinearFlatYear |

<a id="chart-18-46-model-comparison"></a>
### Model Comparison

| Field | Value |
| --- | --- |
| chartType | 46 |
| isAdvanced | true |
| chartDescription |  |
| parameters | 3 |

#### Parameters

| # | Id | Type | Value | Selection Items |
| --- | --- | --- | --- | --- |
| 1 | [10](#param-18-46-model-comparison-10) | 16 | False | 0 |
| 2 | [6](#param-18-46-model-comparison-6) | 16 | True | 0 |
| 3 | [52](#param-18-46-model-comparison-52) | 29 | Pow | 7 |

<a id="param-18-46-model-comparison-52"></a>
#### Parameter 52 Selection Items

| Field | Value |
| --- | --- |
| type | 29 |
| value | Pow |
| selectionItems | 7 |

| # | Name | Value |
| --- | --- | --- |
| 1 | Annual compound percentage | Pow |
| 2 | Annual linear percentage | Linear |
| 3 | No aged derate | None |
| 4 | Monthly straight line | FlatMonth |
| 5 | Annual straight line | FlatYear |
| 6 | Ignore production guarantee | NoProdGuarantee |
| 7 | Annual linear straight line | LinearFlatYear |

<a id="chart-18-49-performance-ratio-detail"></a>
### Performance Ratio (detail)

| Field | Value |
| --- | --- |
| chartType | 49 |
| isAdvanced | true |
| chartDescription | Site Performance Ratio, not adjusted for temperature (kW / DC size / irradiance) or (kWh / DC size / insolation) |
| parameters | 0 |

(No parameters)

<a id="chart-18-48-performance-ratio-summary"></a>
### Performance Ratio (summary)

| Field | Value |
| --- | --- |
| chartType | 48 |
| isAdvanced | true |
| chartDescription | Power output divided by DC system size and irradiance |
| parameters | 3 |

#### Parameters

| # | Id | Type | Value | Selection Items |
| --- | --- | --- | --- | --- |
| 1 | [10](#param-18-48-performance-ratio-summary-10) | 16 | False | 0 |
| 2 | [6](#param-18-48-performance-ratio-summary-6) | 16 | True | 0 |
| 3 | [52](#param-18-48-performance-ratio-summary-52) | 29 | Pow | 7 |

<a id="param-18-48-performance-ratio-summary-52"></a>
#### Parameter 52 Selection Items

| Field | Value |
| --- | --- |
| type | 29 |
| value | Pow |
| selectionItems | 7 |

| # | Name | Value |
| --- | --- | --- |
| 1 | Annual compound percentage | Pow |
| 2 | Annual linear percentage | Linear |
| 3 | No aged derate | None |
| 4 | Monthly straight line | FlatMonth |
| 5 | Annual straight line | FlatYear |
| 6 | Ignore production guarantee | NoProdGuarantee |
| 7 | Annual linear straight line | LinearFlatYear |

<a id="chart-18-44-production-comparison"></a>
### Production Comparison

| Field | Value |
| --- | --- |
| chartType | 44 |
| isAdvanced | true |
| chartDescription | Compare production between multiple sites |
| parameters | 3 |

#### Parameters

| # | Id | Type | Value | Selection Items |
| --- | --- | --- | --- | --- |
| 1 | [10](#param-18-44-production-comparison-10) | 16 | False | 0 |
| 2 | [6](#param-18-44-production-comparison-6) | 16 | True | 0 |
| 3 | [52](#param-18-44-production-comparison-52) | 29 | Pow | 7 |

<a id="param-18-44-production-comparison-52"></a>
#### Parameter 52 Selection Items

| Field | Value |
| --- | --- |
| type | 29 |
| value | Pow |
| selectionItems | 7 |

| # | Name | Value |
| --- | --- | --- |
| 1 | Annual compound percentage | Pow |
| 2 | Annual linear percentage | Linear |
| 3 | No aged derate | None |
| 4 | Monthly straight line | FlatMonth |
| 5 | Annual straight line | FlatYear |
| 6 | Ignore production guarantee | NoProdGuarantee |
| 7 | Annual linear straight line | LinearFlatYear |

<a id="chart-18-90-site-production-comparison"></a>
### Site Production Comparison

| Field | Value |
| --- | --- |
| chartType | 90 |
| isAdvanced | true |
| chartDescription | Production for each site compared against the expected production, and estimated production. Shows individual site results. |
| parameters | 2 |

#### Parameters

| # | Id | Type | Value | Selection Items |
| --- | --- | --- | --- | --- |
| 1 | [52](#param-18-90-site-production-comparison-52) | 29 | Pow | 7 |
| 2 | [21](#param-18-90-site-production-comparison-21) | 16 | False | 0 |

<a id="param-18-90-site-production-comparison-52"></a>
#### Parameter 52 Selection Items

| Field | Value |
| --- | --- |
| type | 29 |
| value | Pow |
| selectionItems | 7 |

| # | Name | Value |
| --- | --- | --- |
| 1 | Annual compound percentage | Pow |
| 2 | Annual linear percentage | Linear |
| 3 | No aged derate | None |
| 4 | Monthly straight line | FlatMonth |
| 5 | Annual straight line | FlatYear |
| 6 | Ignore production guarantee | NoProdGuarantee |
| 7 | Annual linear straight line | LinearFlatYear |

<a id="chart-18-91-site-production-total"></a>
### Site Production Total

| Field | Value |
| --- | --- |
| chartType | 91 |
| isAdvanced | true |
| chartDescription | Total site production compared against the expected and estimated production.  Adds results for multiple sites. |
| parameters | 2 |

#### Parameters

| # | Id | Type | Value | Selection Items |
| --- | --- | --- | --- | --- |
| 1 | [52](#param-18-91-site-production-total-52) | 29 | Pow | 7 |
| 2 | [21](#param-18-91-site-production-total-21) | 16 | False | 0 |

<a id="param-18-91-site-production-total-52"></a>
#### Parameter 52 Selection Items

| Field | Value |
| --- | --- |
| type | 29 |
| value | Pow |
| selectionItems | 7 |

| # | Name | Value |
| --- | --- | --- |
| 1 | Annual compound percentage | Pow |
| 2 | Annual linear percentage | Linear |
| 3 | No aged derate | None |
| 4 | Monthly straight line | FlatMonth |
| 5 | Annual straight line | FlatYear |
| 6 | Ignore production guarantee | NoProdGuarantee |
| 7 | Annual linear straight line | LinearFlatYear |

<a id="chart-18-173-site-projected-vs-actual"></a>
### Site Projected vs. Actual

| Field | Value |
| --- | --- |
| chartType | 173 |
| isAdvanced | true |
| chartDescription | Production for each site compared against the projected production. Shows individual site results. |
| parameters | 2 |

#### Parameters

| # | Id | Type | Value | Selection Items |
| --- | --- | --- | --- | --- |
| 1 | [52](#param-18-173-site-projected-vs-actual-52) | 29 | Pow | 7 |
| 2 | [21](#param-18-173-site-projected-vs-actual-21) | 16 | False | 0 |

<a id="param-18-173-site-projected-vs-actual-52"></a>
#### Parameter 52 Selection Items

| Field | Value |
| --- | --- |
| type | 29 |
| value | Pow |
| selectionItems | 7 |

| # | Name | Value |
| --- | --- | --- |
| 1 | Annual compound percentage | Pow |
| 2 | Annual linear percentage | Linear |
| 3 | No aged derate | None |
| 4 | Monthly straight line | FlatMonth |
| 5 | Annual straight line | FlatYear |
| 6 | Ignore production guarantee | NoProdGuarantee |
| 7 | Annual linear straight line | LinearFlatYear |

<a id="chart-18-45-site-yield"></a>
### Site Yield

| Field | Value |
| --- | --- |
| chartType | 45 |
| isAdvanced | true |
| chartDescription | Total site output divided by DC system size |
| parameters | 3 |

#### Parameters

| # | Id | Type | Value | Selection Items |
| --- | --- | --- | --- | --- |
| 1 | [10](#param-18-45-site-yield-10) | 16 | False | 0 |
| 2 | [6](#param-18-45-site-yield-6) | 16 | True | 0 |
| 3 | [52](#param-18-45-site-yield-52) | 29 | Pow | 7 |

<a id="param-18-45-site-yield-52"></a>
#### Parameter 52 Selection Items

| Field | Value |
| --- | --- |
| type | 29 |
| value | Pow |
| selectionItems | 7 |

| # | Name | Value |
| --- | --- | --- |
| 1 | Annual compound percentage | Pow |
| 2 | Annual linear percentage | Linear |
| 3 | No aged derate | None |
| 4 | Monthly straight line | FlatMonth |
| 5 | Annual straight line | FlatYear |
| 6 | Ignore production guarantee | NoProdGuarantee |
| 7 | Annual linear straight line | LinearFlatYear |

<a id="chart-18-43-total-production"></a>
### Total Production

| Field | Value |
| --- | --- |
| chartType | 43 |
| isAdvanced | true |
| chartDescription | The Total Production chart shows a summary of inverter output at the meter for multiple sites. |
| parameters | 3 |

#### Parameters

| # | Id | Type | Value | Selection Items |
| --- | --- | --- | --- | --- |
| 1 | [10](#param-18-43-total-production-10) | 16 | False | 0 |
| 2 | [6](#param-18-43-total-production-6) | 16 | True | 0 |
| 3 | [52](#param-18-43-total-production-52) | 29 | Pow | 7 |

<a id="param-18-43-total-production-52"></a>
#### Parameter 52 Selection Items

| Field | Value |
| --- | --- |
| type | 29 |
| value | Pow |
| selectionItems | 7 |

| # | Name | Value |
| --- | --- | --- |
| 1 | Annual compound percentage | Pow |
| 2 | Annual linear percentage | Linear |
| 3 | No aged derate | None |
| 4 | Monthly straight line | FlatMonth |
| 5 | Annual straight line | FlatYear |
| 6 | Ignore production guarantee | NoProdGuarantee |
| 7 | Annual linear straight line | LinearFlatYear |

<a id="chart-18-60-total-production-estimate"></a>
### Total Production & Estimate

| Field | Value |
| --- | --- |
| chartType | 60 |
| isAdvanced | true |
| chartDescription |  |
| parameters | 3 |

#### Parameters

| # | Id | Type | Value | Selection Items |
| --- | --- | --- | --- | --- |
| 1 | [10](#param-18-60-total-production-estimate-10) | 16 | True | 0 |
| 2 | [6](#param-18-60-total-production-estimate-6) | 16 | False | 0 |
| 3 | [52](#param-18-60-total-production-estimate-52) | 29 | Pow | 7 |

<a id="param-18-60-total-production-estimate-52"></a>
#### Parameter 52 Selection Items

| Field | Value |
| --- | --- |
| type | 29 |
| value | Pow |
| selectionItems | 7 |

| # | Name | Value |
| --- | --- | --- |
| 1 | Annual compound percentage | Pow |
| 2 | Annual linear percentage | Linear |
| 3 | No aged derate | None |
| 4 | Monthly straight line | FlatMonth |
| 5 | Annual straight line | FlatYear |
| 6 | Ignore production guarantee | NoProdGuarantee |
| 7 | Annual linear straight line | LinearFlatYear |

<a id="chart-18-67-total-production-model-estimate"></a>
### Total Production & Model Estimate

| Field | Value |
| --- | --- |
| chartType | 67 |
| isAdvanced | true |
| chartDescription |  |
| parameters | 0 |

(No parameters)

<a id="chart-18-169-uptime-comparison-unweighted"></a>
### Uptime Comparison (unweighted)

| Field | Value |
| --- | --- |
| chartType | 169 |
| isAdvanced | true |
| chartDescription | The uptime for each site is calculated as an average percentage of each inverter (or each meter if no inverters are present), when the required minimum irradiance is configured within the Site Setup Performance options (default = 100 w/m²).  |
| parameters | 3 |

#### Parameters

| # | Id | Type | Value | Selection Items |
| --- | --- | --- | --- | --- |
| 1 | [10](#param-18-169-uptime-comparison-unweighted-10) | 16 | False | 0 |
| 2 | [6](#param-18-169-uptime-comparison-unweighted-6) | 16 | True | 0 |
| 3 | [52](#param-18-169-uptime-comparison-unweighted-52) | 29 | Pow | 7 |

<a id="param-18-169-uptime-comparison-unweighted-52"></a>
#### Parameter 52 Selection Items

| Field | Value |
| --- | --- |
| type | 29 |
| value | Pow |
| selectionItems | 7 |

| # | Name | Value |
| --- | --- | --- |
| 1 | Annual compound percentage | Pow |
| 2 | Annual linear percentage | Linear |
| 3 | No aged derate | None |
| 4 | Monthly straight line | FlatMonth |
| 5 | Annual straight line | FlatYear |
| 6 | Ignore production guarantee | NoProdGuarantee |
| 7 | Annual linear straight line | LinearFlatYear |

<a id="chart-18-170-uptime-comparison-weighted"></a>
### Uptime Comparison (weighted)

| Field | Value |
| --- | --- |
| chartType | 170 |
| isAdvanced | true |
| chartDescription | The uptime for each site is calculated as a weighted average percentage of each inverter (or each meter if no inverters are present), when the required minimum irradiance is configured within the Site Setup Performance options (default = 100 w/m²).  |
| parameters | 3 |

#### Parameters

| # | Id | Type | Value | Selection Items |
| --- | --- | --- | --- | --- |
| 1 | [10](#param-18-170-uptime-comparison-weighted-10) | 16 | False | 0 |
| 2 | [6](#param-18-170-uptime-comparison-weighted-6) | 16 | True | 0 |
| 3 | [52](#param-18-170-uptime-comparison-weighted-52) | 29 | Pow | 7 |

<a id="param-18-170-uptime-comparison-weighted-52"></a>
#### Parameter 52 Selection Items

| Field | Value |
| --- | --- |
| type | 29 |
| value | Pow |
| selectionItems | 7 |

| # | Name | Value |
| --- | --- | --- |
| 1 | Annual compound percentage | Pow |
| 2 | Annual linear percentage | Linear |
| 3 | No aged derate | None |
| 4 | Monthly straight line | FlatMonth |
| 5 | Annual straight line | FlatYear |
| 6 | Ignore production guarantee | NoProdGuarantee |
| 7 | Annual linear straight line | LinearFlatYear |

<a id="section-20-admin"></a>
## Admin

| Field | Value |
| --- | --- |
| sectionCode | 20 |
| hardwareOptions |  |
| predefinedCharts | 7 |

### Charts

| # | Display Name | Chart Type | Advanced | Parameters | Description |
| --- | --- | --- | --- | --- | --- |
| 1 | [Archive Summary](#chart-20-65-archive-summary) | 65 | false | 0 |  |
| 2 | [MassCEC CPTS Report](#chart-20-254-masscec-cpts-report) | 254 | true | 1 | Special query for MassCEC's Clean Peak Tracking System |
| 3 | [SGIP Report](#chart-20-125-sgip-report) | 125 | true | 1 | Special query for CSE's Self-Generation Incentive Program |
| 4 | [Site Stats Performance Index](#chart-20-269-site-stats-performance-index) | 269 | true | 0 | Ratio of site production energy and expected energy, used to calculate the last 24 hour PR for the Portfolio view. |
| 5 | [Site Stats Performance Ratio](#chart-20-261-site-stats-performance-ratio) | 261 | true | 0 | Ratio of site production energy to DC size and irradiance, used to calculate the last 24 hour PR for the Portfolio view. |
| 6 | [Site Stats Power, Energy, Irradiance](#chart-20-172-site-stats-power-energy-irradiance) | 172 | true | 1 | PowerTrack internal query for comparing actual, expected and estimated production, for the most recent 15 minute and 24 hour time spans. |
| 7 | [Site Stats Temperature Adjusted Performance Ratio](#chart-20-268-site-stats-temperature-adjusted-performance-ratio) | 268 | true | 0 | Ratio of site production energy to temperature adjusted DC size and irradiance, used to calculate the last 24 hour PR for the Portfolio view. |

<a id="chart-20-65-archive-summary"></a>
### Archive Summary

| Field | Value |
| --- | --- |
| chartType | 65 |
| isAdvanced | false |
| chartDescription |  |
| parameters | 0 |

(No parameters)

<a id="chart-20-254-masscec-cpts-report"></a>
### MassCEC CPTS Report

| Field | Value |
| --- | --- |
| chartType | 254 |
| isAdvanced | true |
| chartDescription | Special query for MassCEC's Clean Peak Tracking System |
| parameters | 1 |

#### Parameters

| # | Id | Type | Value | Selection Items |
| --- | --- | --- | --- | --- |
| 1 | [21](#param-20-254-masscec-cpts-report-21) | 16 | False | 0 |

<a id="chart-20-125-sgip-report"></a>
### SGIP Report

| Field | Value |
| --- | --- |
| chartType | 125 |
| isAdvanced | true |
| chartDescription | Special query for CSE's Self-Generation Incentive Program |
| parameters | 1 |

#### Parameters

| # | Id | Type | Value | Selection Items |
| --- | --- | --- | --- | --- |
| 1 | [21](#param-20-125-sgip-report-21) | 16 | False | 0 |

<a id="chart-20-269-site-stats-performance-index"></a>
### Site Stats Performance Index

| Field | Value |
| --- | --- |
| chartType | 269 |
| isAdvanced | true |
| chartDescription | Ratio of site production energy and expected energy, used to calculate the last 24 hour PR for the Portfolio view. |
| parameters | 0 |

(No parameters)

<a id="chart-20-261-site-stats-performance-ratio"></a>
### Site Stats Performance Ratio

| Field | Value |
| --- | --- |
| chartType | 261 |
| isAdvanced | true |
| chartDescription | Ratio of site production energy to DC size and irradiance, used to calculate the last 24 hour PR for the Portfolio view. |
| parameters | 0 |

(No parameters)

<a id="chart-20-172-site-stats-power-energy-irradiance"></a>
### Site Stats Power, Energy, Irradiance

| Field | Value |
| --- | --- |
| chartType | 172 |
| isAdvanced | true |
| chartDescription | PowerTrack internal query for comparing actual, expected and estimated production, for the most recent 15 minute and 24 hour time spans. |
| parameters | 1 |

#### Parameters

| # | Id | Type | Value | Selection Items |
| --- | --- | --- | --- | --- |
| 1 | [0](#param-20-172-site-stats-power-energy-irradiance-0) | 16 | False | 0 |

<a id="chart-20-268-site-stats-temperature-adjusted-performance-ratio"></a>
### Site Stats Temperature Adjusted Performance Ratio

| Field | Value |
| --- | --- |
| chartType | 268 |
| isAdvanced | true |
| chartDescription | Ratio of site production energy to temperature adjusted DC size and irradiance, used to calculate the last 24 hour PR for the Portfolio view. |
| parameters | 0 |

(No parameters)

<a id="section-21-alert"></a>
## Alert

| Field | Value |
| --- | --- |
| sectionCode | 21 |
| hardwareOptions |  |
| predefinedCharts | 4 |

### Charts

| # | Display Name | Chart Type | Advanced | Parameters | Description |
| --- | --- | --- | --- | --- | --- |
| 1 | [Alert, AC voltage](#chart-21-85-alert-ac-voltage) | 85 | true | 0 | Detects missing or imbalanced AC voltages |
| 2 | [Alert, Energy estimate](#chart-21-86-alert-energy-estimate) | 86 | true | 0 | Detects low energy production of the site relative to the site production estimates. |
| 3 | [Alert, Performance index](#chart-21-87-alert-performance-index) | 87 | true | 0 | Detects low performance relative to the PV model for individual production meters.  If the site doesn't contain production meters, then the inverters are used. |
| 4 | [Alert, Soiling](#chart-21-152-alert-soiling) | 152 | true | 1 | Detects lost production due to soiling |

<a id="chart-21-85-alert-ac-voltage"></a>
### Alert, AC voltage

| Field | Value |
| --- | --- |
| chartType | 85 |
| isAdvanced | true |
| chartDescription | Detects missing or imbalanced AC voltages |
| parameters | 0 |

(No parameters)

<a id="chart-21-86-alert-energy-estimate"></a>
### Alert, Energy estimate

| Field | Value |
| --- | --- |
| chartType | 86 |
| isAdvanced | true |
| chartDescription | Detects low energy production of the site relative to the site production estimates. |
| parameters | 0 |

(No parameters)

<a id="chart-21-87-alert-performance-index"></a>
### Alert, Performance index

| Field | Value |
| --- | --- |
| chartType | 87 |
| isAdvanced | true |
| chartDescription | Detects low performance relative to the PV model for individual production meters.  If the site doesn't contain production meters, then the inverters are used. |
| parameters | 0 |

(No parameters)

<a id="chart-21-152-alert-soiling"></a>
### Alert, Soiling

| Field | Value |
| --- | --- |
| chartType | 152 |
| isAdvanced | true |
| chartDescription | Detects lost production due to soiling |
| parameters | 1 |

#### Parameters

| # | Id | Type | Value | Selection Items |
| --- | --- | --- | --- | --- |
| 1 | [63](#param-21-152-alert-soiling-63) | 16 | False | 0 |
