# IT Helpdesk Incident Management System — ServiceNow

A portfolio project demonstrating an IT helpdesk workflow modeled around ServiceNow ITSM concepts.

## Project Scope

- Incident logging for PC, software, network, and printer issues
- Category, priority, assignment group, and status tracking
- Assignment routing rules
- SLA tracking
- Service catalog request examples
- Knowledge-base articles for common desktop issues
- Open vs. resolved ticket dashboard
- Sample incident data for demonstrating reporting

## ServiceNow Implementation

The intended implementation is a ServiceNow Personal Developer Instance (PDI) using Incident Management, Service Catalog, Knowledge Base, assignment rules, and SLA configuration.

The `servicenow/` directory contains portfolio documentation and example scripts/configuration logic that can be adapted in a PDI.

## Local Portfolio Demo

The `demo/` directory contains a lightweight browser demo showing the same workflow without requiring a ServiceNow account.

Open `demo/index.html` in a browser.

## Example Incident Flow

1. User submits an IT issue.
2. Incident is categorized and prioritized.
3. Assignment logic routes the ticket.
4. SLA timer tracks the response/resolution target.
5. Support agent troubleshoots and documents the resolution.
6. Knowledge-base guidance can be reused for recurring issues.
7. Incident is resolved and reflected in dashboard metrics.

## Technologies / Concepts

- ServiceNow
- ITSM
- Incident Management
- Service Catalog
- Knowledge Base
- SLA
- Assignment Rules
- HTML5
- CSS3
- JavaScript
- JSON

## Important

This repository is a portfolio companion to the ServiceNow project. It does not claim that ServiceNow platform configuration can be executed directly from GitHub.
