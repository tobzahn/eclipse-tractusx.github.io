---
title: TRG 6.02 - API Versioning
sidebar_position: 1
---

:::caution
Proposed release date: "mandatory after": 01st of May 2024
:::

| Status     | Created      | Post-History                           |
|------------|--------------|----------------------------------------|
| Draft      | 30-Nov-2023  | Initial contribution                   |

## Why

For publicly available APIs a versioning mechanism is required, so that all APIs are versioned the same way.

Note that for APIs accessible only via EDC, the API-version is included in the EDC asset and not the URL. This is described in CX-0018.

## What

This TRG applies to all APIs created within Tractus-X, but does not apply where existing standards (e.g. Data Space Protocol) are implemented where contracticting behavoir is required in order to adhere to that standard.

For APIs that are called through an EDC asset, the version information hast to be included as a property in the EDC asset. This needs to be done in accordance with Catena-X standard CX-0018. More information and guidance is available there.

## Description

For public REST-APIs (= called through an EDC aspect), the Version number **must** be included in the URL.

Example:  `https://example.com/api/v2/customers`

A standard **should** offer the following aliases as well (meaning they all answer identically to HTTP requests):

`https://example.com/api/v2.1/customers`

`https://example.com/api/latest/customers`

For the version in the URL, semantic versioning **must** be used.

Old endpoints (that have been offered bevor) and are not supported anymore **should** respond with an appropriate HTTP 30x status code and the new location (URL).

For example, when v3 of an API is released, an request to `https://example.com/api/v2/customers` would return HTTP 301 (moved permanently) and point to `https://example.com/api/v3/customers`

Queries and fragments **may** be used, so the following example is valid:

        https://example.com:443/messaging/v1/messages?textContains=AMG#resultlist
        \___/   \______________/\___________________/\_______________/ \________/
          |              |                |                 |             |
        scheme       authority          path             query        fragment

Note that the structure of the URL needs to be chosen mindfully. For example:

* `https://example.com/api/customers/v2` → this is bad idea since you might want to rename 'customers' to something else in the future
* `https://example.com/api/customers/` → does not make it clear which version is used. It might be the latest, but some developers might not notice and assume the API is stable for ever
* `https://example.com/api/v2.4.8/customers/` → not recommended since a patch (according to semantic versioning) is always backward compatible the need for this can be questioned. Adding the patch level to the URL forces clients to frequently to adapt to a new URL.

Further rules and recommendations on URL design:

* It is **recommended** to use nouns over verbs. For example, use `/customers` instead of `/getCustomers/`
* It is **recommended** to use plural nouns. For example, use `/customers/` instead of `/customer/`
* It is **recommended** to use the concrete object, not a abstraction. For example, use `/customers/` instead of `/persons/`
* The technical identifier **should** be part of the path, not the query. For example, use `/customers/12345/` instead of `/customers?key=12345`
* Only English words **must** be used. For example, use `/customers/` instead of `/kunden/`
* Camel case **should not** be used in the URI, but it MAY be used in the query or fragment part. For example, use `/vehicleorders/`, `/vehicle-orders/` or `/vehicle_orders/` instead of `/VehicleOrders/`