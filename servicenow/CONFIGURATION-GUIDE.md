# ServiceNow PDI Configuration Guide

## 1. Incident Categories

| Category | Example |
|---|---|
| Hardware | PC not powering on |
| Software | Application not launching |
| Network | Wi-Fi not connecting |
| Printer | Printer offline |

## 2. Suggested Assignment Groups

- Desktop Support
- Network Support
- Application Support
- Hardware Support

## 3. Priority Model

Priority can be derived from impact and urgency.

Example:
- High impact + High urgency → P1
- High impact + Medium urgency → P2
- Medium impact + Medium urgency → P3
- Low impact + Low urgency → P4

## 4. Assignment Rule Logic

```text
IF category = Network
    assignment_group = Network Support
ELSE IF category = Software
    assignment_group = Application Support
ELSE IF category = Printer
    assignment_group = Desktop Support
ELSE
    assignment_group = Desktop Support
```

## 5. SLA

Configure an incident SLA based on priority. Track:
- Start condition
- Stop condition
- Pause condition
- Target duration
- Breach status

## 6. Service Catalog Examples

Create request items such as:
- New Laptop Request
- Software Installation Request
- Peripheral Request

## 7. Knowledge Base

Example articles:
- Slow PC troubleshooting
- Wi-Fi not connecting
- Printer offline
- Application not launching

## 8. Dashboard

Recommended indicators:
- Open incidents
- Resolved incidents
- Incidents by priority
- Incidents by category
- SLA breaches
- Average resolution time
