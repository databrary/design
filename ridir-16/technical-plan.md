# Technical Plan

>A specific and detailed plan and technical details must be presented for how the project goals will be achieved. For example technicians, either by name or by competence/job qualifications should be identified; how will participating students be trained?; how would the broader research community be informed of the product and trained in its use? A detailed schedule with milestones should be included. (This list is not intended to be complete.) (page limit: 2 pages)

## Expertise

### Dylan Simon, Ph.D., Co-Investigator

Dr. Simon, Databrary's System Architect and Technical Lead, will spearhead the technical development of the project.
Simon earned his Ph.D. in psychology from NYU and his Bachelor's degree in engineering and applied science from Caltech.
Dr. Simon designed and implemented the Databrary digital library.
He has expertise in a wide range of technologies critical to the project's success.
Dr. Simon will devote 50% of his effort to building the proposed new features, and he will help hire, train and supervise the Front-end Developer (TBN).

### Front-end Developer (TBN)

<!-- why not gladys? do we have the budget for an entire new hire? if so, with Gladys I wouldn't recommend a pure front-end developer. -->

A front-end developer, not yet identified, will be hired.
The developer must have extensive experience with JavaScript (CoffeeScript), HTML5 (audio/video API), and CSS3 (Stylus), practice with AngularJS or other modern client-side MVC framework, familiarity with git and standard UNIX development tools, and an understanding of security and ethical concerns around sensitive data.

## Databrary Architecture

Databrary is an open-source web application built in Haskell using wai/warp.
The backend is a PostgreSQL relational database.
Apache Solr supports search.
The user interface is built primarily on the AngularJS JavaScript framework, and all data access is performed through a JSON API.

Databrary stores at least two versions of each item of Databrary video content: a copy for access and the received or originally digitized file.
Currently, the access version format is H.264 with AAC audio in an MPEG-4 container, although we expect the appropriate video formats to change over time, as has been the case with many recent digital video formats.
The system uses NYU’s High Performance Computing (HPC) cluster to transcode videos upon ingest using FFmpeg.
Databrary uses NYU central IT to store files in two mirrored and geographically distributed locations and a third copy on offsite tape.

<!-- this stuff is currently unplanned, pending library support and scheduling:
For preservation, the original file will be stored in a long-term preservation repository managed jointly by the NYU Libraries and the central Information Technology Services unit.
This repository ensures that each content item has a Metadata Encoding and Transmission Standard (METS) file that associates the digital asset with its metadata.
It performs regular fixity checks; and it provides a format migration capacity, in the event that a stored format becomes at risk of obsolescence.
-->

<!-- How import, represent coding files, coding manuals -->

## Communication with Target Community

Community engagement has been the focus of the Databrary project from the beginning.
New Databrary features will be announced via the Databrary and Datavyu mailing lists, and with the cooperation of our TAC partners directly to their users.
We will also gather feedback from users via electronic surveys  to the same audiences.
Project staff will provide email, phone, webinar, and in-person support to Databrary users, continuing current practices.
Staff will demonstrate new features at training workshops, supported by NSF and SRCD, held at scientific conferences and in targeted regional locations chosen for their high concentrations of video-using researchers.

## Schedule and timeline

<img src="timeline.png"/>
