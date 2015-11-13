# Desktop vs. Web

What are the advantages and disadvantages of building video annotation tools on the web vs. the desktop.
We are assuming any tool will be free and open source.

## Market analysis

The market for video annotation tools is broad and is currently covered by a large number of special-purpose tools each providing domain-specific and approach-specific features.
(Datavyu desktop is one of these tools, supporting flexible, fine-grained behavioral coding and offering advanced scripting functionality in favor of built-in features for more technical users.)
Most are desktop tools, though a few a web-based, and many labs use more than one.

## Development costs

The web provides a lot of theoretical advantages in terms of development costs.
Video playback functionality is largely handled by the browsers.
On the other hand, offerings are limited by what functionality browsers provide.
It may be significantly easier to hire developers interested in working on web tools, but this may also incur higher costs.
Both desktop and web technologies change rapidly, and ongoing development is required to keep up.
I believe this is currently a wash, but may end up moving more favorably towards web in the future.

## Installation

Simple use of a web tool requires no additional installation.
However, advanced functionality like scripting may require client-side support tools to be packaged and installed.

Coding a new video on a desktop tool is often straight-forward and immediate, assuming the tool supports the video format.
On the web, however, the video will need to be uploaded and transcoded (taking significant time) before the video can be used.
This may require a different work-flow.

## Usability

Web browsers provide an inherently more limited UI than desktop tools.
Creating multiple windows and adjustable layouts is more difficult, and what solutions there exist to these problems are often dependent on specific web browser extensions, which come and go far more rapidly than desktop technologies.

## Performance

Bandwidth is a huge concern for web-based coding, that ultimately we do not have total control over.
Video buffering is also a concern, as different browsers have different approaches here, and we have all but no control over this.
Desktop performance is theoretically maximal, but will involve additional development work to support multiple platform optimally, which is otherwise offloaded by the browsers.

## Carrying costs

While both approaches require some level of user support, web-based coding involves additional carrying costs and risk.
Each additional user of a web tool adds additional direct infrastructure costs for file storage, bandwith, and servers.
If funding runs out, users may theoretically be able to configure and run their own instance to continue using the software, but this would involve significant technical skill and additional cost.
On the other hand, a desktop tool can continue to be used in a specific environment indefinitely with no additional cost.

## Collaboration

The ability to collaborate on-line, share codes, simultaneously code and merge passes, and integrate annotations from others is a huge win for web-based coding.

## Hybrid approaches

A client-side web-based hybrid, in which the user installed a web-server and connected to it locally, may have some advantages and disadvantages of both approaches.
Development wise, it requires both desktop and web development, incurring the development costs and disadvantages of both.
Installation will be more difficult (either for development or usability) as a desktop tool, but videos may be coded immediately.
Performance and usability are still limited by the browsers, so equivalent to a web site.

# Datavyu Web

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

