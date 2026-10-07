# ECAD_Design — Engineering Suite Membership

Status: **FOUNDATION-ACTIVE**

ECAD_Design is the electronic-design member of the Blue Dragon Engineering Suite.

Canonical ownership remains inside ECAD_Design:

- schematic;
- symbols/pins/nets;
- PCB stackup/outline/layout;
- ERC/DRC evidence;
- BOM/manufacturing intent.

It may consume CAD mechanical constraints and publish PCB mechanical packages through the suite interoperability contract. It must not import CAD source code or become the owner of CAD feature history.

Mechanical interchange uses explicit millimeter units and a right-handed Z-up frame unless an artifact declares otherwise.

Application Management may coordinate operational policy/device metadata under namespace `ECAD-`, but it may not own or mirror private schematic/PCB project content.

No shared-core repository is permitted until at least two real suite consumers prove a stable neutral contract needs extraction.
