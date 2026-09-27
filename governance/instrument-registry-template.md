---
layout: item
title: "Instrument Registry Template"
layer_label: "Governance infrastructure · Cross-cutting"
layer_key: gov
summary: "The standard form every ALiF instrument uses to declare what it measures, how, for whom and how well it has been validated."
status: current
status_label: "Current (v1.2)"
version: "v1.2, February 2026 · v2.0 in development"
audience: "Instrument developers, reviewers, adopters choosing instruments"
updated: "October 2026"
v2_note: "Version 2.0 would add a field declaring whether an instrument is self-report, supporting the proposed disclosure duty for self-report instruments and the rule that self-assessment results are not used in decisions about individuals."
related:
  - {title: "Architecture Document", url: "/governance/architecture-document/"}
  - {title: "Endorsement tiers", url: "/governance/endorsement-tiers/"}
  - {title: "ALiF self-assessment questionnaire", url: "/instruments/alif-saq/"}
  - {title: "HP Readiness Survey", url: "/instruments/hp-readiness-survey/"}
---

## What it is for

Every instrument in the ALiF measurement ecosystem, whatever its endorsement tier, must have a registry entry on file with the core team or a designated ALiF Hub. The entry is the instrument's formal identity. The registry is not a quality gate but a transparency mechanism: it lets adopters and researchers see what each instrument claims and how far the evidence goes before they decide to use it.

## What a registry entry records

| Section | Content |
|:---|:---|
| 1. Identification | Name, version, developers, contact, endorsement tier, and the full three-axis classification |
| 2. Construct coverage | What is measured, the theory behind it, and what it explicitly does not measure |
| 3. Component mapping | Coverage of each ALiF component: direct, partial, indirect or none |
| 4. Population and use | Target population, roles, intended use, administration, time, consent, and for organization-level instruments the data owner and authorized respondent |
| 5. Validation status | Current stage, evidence, content validity index, sample, known limitations and planned work |
| 6. Scoring and interpretation | Scoring method, profiles produced, recommended uses and cautioned uses |
| 7. Version history | Changes and their rationale |
| 8. Access and localization | Access model and license, languages and the validation status of each |
| 9. Key relationships | Links to other instruments and to the programs that use the instrument |

Some fields are required for all tiers; others only for ALiF Endorsed and ALiF Core. Known limitations are always required: the template treats them as a transparency obligation, not an option.

## Classification comes first

Developers settle all three axes (construct alignment, assessment method, unit of analysis) before completing anything else. Misclassifying the unit of analysis in particular causes errors in instrument selection, ethical review and program alignment. Organization-level entries must also state how institutional consent is obtained, who may respond on the organization's behalf, and who owns the data.

## Worked examples and the quick form

The template includes worked entries for the [ALiF self-assessment questionnaire]({{ '/instruments/alif-saq/' | relative_url }}) and the [HP Readiness Survey]({{ '/instruments/hp-readiness-survey/' | relative_url }}), and planned entries for the [OLD Maturity Assessment]({{ '/instruments/old-maturity-assessment/' | relative_url }}) and the [OLD Infrastructure and Culture Audit]({{ '/instruments/old-infrastructure-culture-audit/' | relative_url }}). A shorter Quick Registry Form is used for entry at the ALiF Referenced tier.

## Versions

Version 1.0 introduced the template with two classification axes. Version 1.1 strengthened validation guidance after expert panel review. Version 1.2 (February 2026) added the unit of analysis axis and ethical guidance for organization-level instruments.
