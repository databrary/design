# Datavyu 2.0

For now just a random collection of thoughts/resources about how to build web-based coding. Only some of these are essential for 2.0.

## Scripting

We could just make people write scripts in js.
There are some security implications of this (running others' scripts), but they may be more manageable.

### Backwards compatibility (Ruby)

* Run scripts off-line via the API.  Transfer entire columns.
* A crazy solution: http://opalrb.org/

### Separate "analytics" server

* Allow authenticated users to run R, Python, other analysis (or computer vision-related) scripts on Databrary assets.
* Support for transparent and reproducible workflows (RMarkdown via RStudio or Jupyter notebooks) and visualization.
* See Google's new [Cloud Datalab](https://cloud.google.com/datalab/).

## Import/export

* Import/export Datavyu desktop
* Import Mangold, Noldus, Elan, Transana depending on feasibility, community interest/demand.

## Code types

### Continuous (high frequency sampling)

- For example, Dan Messinger's tool.
- Or, physio/eye tracking.

### Spatial ROIs, bounding boxes

- (x,y,diameter) or (x1,y1,x2,y2) regions, plus tags

## Coding manuals

* Web-based coding manuals, with version control.
* Have tooltips pop-up to suggest allowable codes, code definitions.
* Build coding manual interactively from codes, video snippets.

## Temporal alignment

* Allow 'loose' alignment rather than millisecond level (change precision/rounding for display purposes).

## Offline coding

* Could be substantial number of users who want coding tool, but aren't ready/don't want to share with Databrary.
* Offline tool (optionally) synchronizes with Databrary. Or, local instance of Databrary.

## User support

* Existing search within support forum not very flexible.

