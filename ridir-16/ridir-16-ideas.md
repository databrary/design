## Quotations from [program solicitation](http://www.nsf.gov/pubs/2015/nsf15602/nsf15602.htm)

>Databases which may be a new large scale database, a substantial expansion or revision of an extant database, or the merging of extant databases. Databases might include traditional relational data in digital form, collections of historical data, images, video recordings, administrative data/records or any other form of structured sets of data. The database must be accompanied by a usable interface that allows for the application of extant analytic tools or analytical tools that are developed as part of the project. Within this competition, the justification for the database rests on the potential it provides for enabling “data intensive SBE research”, which is amenable to utilization by substantial numbers of investigators. Central to the evaluation of proposals are the types, scope and potential significance of the research such a database would afford. For the purpose of this competition, data-intensive research is defined as research involving data resources that extend well beyond the storage requirements, computational intensiveness or complexity that is currently typical in SBE areas of research. Proposals should make clear how the proposed activities will enable promising SBE research that would not otherwise be possible. The investigations enabled by such data intensive research may be within or between any new or existing SBE field or fields. It may involve linkages between SBE science and other fields of science, although this is not required.
>Analytic tool(s) which would serve to enhance database use to address significant research questions within the SBE sciences. While a strong proposal would produce a tool of general utility it is required that the applicant link and discuss the tool within the context of a specific named database or set of databases. The tool must be made readily available to a broad research community at no more cost than is necessary to cover the expenses of its provision.

>Over the last three years, SBE has actively encouraged and supported communities to develop visions, teams, and capabilities dedicated to the creation of new, large-scale, next-generation data resources and relevant analytic techniques to advance fundamental research in the SBE sciences. This has been done both through the BCC-SBE/EHR competition and other mechanisms, such as Research Coordination Networks (RCNs). In 2015 SBE held the first RIDIR competition. This solicitation seeks to build upon those earlier efforts and describes a second and third year extension of the RIDIR competition.

## PROJECT SUMMARY

## PROJECT DESCRIPTION

- Big data and the "age of search"

### Project Aims

1. Design and implement a user interface and database structure that empowers authorized Databrary users to search for specific segments of video based on codes, tags, or keywords linked to those segments. Expand and extend Databrary's system for visualizing user-defined video codes.

Acknowledges growth in text-based data mining and analysis procedures.
Without access to text-based annotations of video segments, these tools can't yet be readily applied to video.

2. Enable codes and annotations from several existing video and audio coding tools to be imported into and visualized within the Databrary digital library. Enable Databrary codes to be exported along with videos in an open format that may be imported back into existing coding tools.

3. Design and implement ways for authorized Databrary users to create electronic code manuals that link text-based or numeric tags to richer descriptions of code definitions, including video snippets or exemplars.

Steps toward community-defined ontologies.
Text associated with coding manuals becomes searchable under the Databrary search engine.
More text available to Databrary search engine, the more relevant and powerful the searches can become.
Establishes framework for future extensions that would link to online (HTML-based) versions of published papers for data mining (e.g., neurosynth.org).

4. Design interfaces for Databrary that enable users to collaborate on coding video or audio recordings, share coding spreadsheets, and maintain version control over coding information.

### Background and Rationale

#### Why Video?

- uniquely captures complexity of behavior
- cheap to collect, largely self-documenting
- widely used
- flexible, can be used in many contexts
- high reuse potential

#### How Video Enables Behavioral Science Research

#### The Databrary Digital Library

#### Tools for Analyzing Video

- Tools allow text or numeric tags to be applied to segments of video by human observers.
- Transana as a model for free-form comments ...
- CLAN as a model for highly structured, strong regularized conceptual ontologies.
- Datavyu as a model for highly flexible tool, scripting capability (Mangold has scripting, as well), free and open source software.

#### Policy Framework for sharing identifiable data

- Video and audio recordings contain identifiable information -- faces, voices, etc.
- Databrary has developed a policy framework that builds on the principles of informed consent.
- The framework allows research participants to give permission for their identifiable information to be shared with other researchers.
- The framework also allows research participants to give permission for excerpts or clips from their recordings to be shown for research or educational purposes.
- In turn, the framework limits access to the bulk of Databrary's materials to researchers who are specifically authorized by their institutions to have access to the library and to conduct research and non-research activities using these materials.
- The framework, with minimal modification, has been agreed to by more than X institutions in North and South America, Europe, Asia, and Australia.

#### Gaps this project will fill

##### Enable search within videos, not just across them.

- Make Databrary more useful for a wider range of researchers.
- Enable search within videos, not just across them.

#### Enable interoperability among geographically dispersed researchers

- Databrary serves as cloud storage. Coders can be located anywhere.
- Version control over codes, coding manuals.

##### Enable interoperability among coding tools

- Existing video coding tools are not interoperable with one another.
- Existing tools capture project/dataset/volume metadata in different ways (e.g., Mangold) or do not capture it at all (e.g., Datavyu).
- Existing tools capture session-level metadata (e.g., Mangold) in different or non-systematic (e.g., KEA lab's use of session-level metadata in Datavyu spreadsheets).

##### Enable interoperability among codes

- Codes used by one research group cannot be compared to or built upon by other groups.
- Codes used by different research groups are poorly or inconsistently documented.
  - For example, some Databrary users upload detailed coding manuals, but not all, and formats are not readily searchable by others.

##### Transcoding videos into common format via Databrary

- There are a huge number of video formats; most coding tools struggle to support all of them. The increasing use of HD video poses additional problems for tools that offer forward/backward video playback at high speeds. A common complaint is that the timestamping provided by a coding tool can change depending on the format of the video. By transcoding videos into a common, web-compatible format on Databrary, we will make it easier for users to choose the coding tool that suits their research requirements.

#### Enhance reproducibility and transparency of video-based analyses

- By creating version control of coding manuals and spreadsheets.
- By creating electronic coding manuals.
- Have electronic coding manuals linked to scripts (e.g., Datavyu's Ruby or Mangold's scripting interface; Noldus?; ELAN?)

#### Create infrastructure that embodies best-practices in video coding

- Builds on Adolph's manuscript on best-practices.

#### Responds to identified needs among video-using developmental scientists

- Collect data about those needs.
- How justify/document?
- Existing projects that have intensive video foci are beginning to plan for similar sorts of infrastructure (ICSPR with the MET data; U Chicago gesture group).

#### Research this project will enable

- Cross-disciplinary research where tags from one domain can inform research in others.
  - Example: Researcher interested in cognitive development can build upon tags provided by language researchers.
- Research that involves video + other temporally dense data streams (eye tracking, kinematics, physiology)
- Enhances value of existing resources on Databrary; makes contributing to, using data from Databrary more attractive.
- Illustration of dynamic modeling of time series a la Nilam Ram and the stillface group at PSU.

### Project Plan

#### Project 1: Search interface and functionality.

##### Project 1.1: Design search interface

- Gather requirements, design ideas from user community.

##### Project 1.2: Adapt Databrary search functionality.

##### Project 1.3: Develop mechanisms for extracting and delivering tagged segments of video.

- How to deliver to researcher for reuse.
- How to maintain data provenance -- segment HH:MM:SSS.mmm-HH:MM:SSS.mmm from video nnn from volume vvv and user uuu.

#### Project 2: Code import and export

##### Project 2.1: Import and export Datavyu spreadsheets.

##### Project 2.3: Import ELAN spreadsheets.

##### Project 2.2: Import and export CLAN files.

##### Project 2.x: Import Transana files.

##### Project 2.x: Import Mangold Interact files

- Stores volume/study/project information separately from session-specific data.

##### Project 2.x: Import Noldus Observer files

##### Project 2.x: Export files from A, B, C, D

#### Project 3: Web-based coding manuals.

##### Project 3.1: Design coding manual specification

- Get user input on minimum requirements, ideal designs.
- How fit within the framework of existing coding tools, user workflows?
- When/how does coding manual data get entered?
  - Could users cut and paste info from existing desktop documents?
  - Could users cut and paste from HTML-format versions of published papers associated with a Databrary volume?

##### Project 3.2: Implement, test, and refine coding manual functionality.

##### Project 3.3: Incorporate coding manuals into Databrary search features.

#### Project 4: Sharing codes, documenting the history of changes.

### Coordination and Management Plan

#### Governance

- Databrary advisory board
  - Internal (NYU)
  - Internal (PSU)
  - External

#### User and Contributor Community

#### Coding tool advisors

- Get letters of commitment from tool providers

#### Evaluation and Assessment

#### Future Directions and Sustainability

### Summary

#### Intellectual Merit

#### Broader Impacts

----

## Questions to address

### Science:

- What broad, important, fundamental research questions will be addressed?
- What research communities would be interested in exploring these questions?

### Information technology:

- What kinds of data are to be involved, including the metadata and the broader infrastructure in which data are embedded?
- How will the data be collected?
- If the database structures are novel (e.g., not a relational database), what would be their design?
- What analytic or statistical approaches will be provided to analyze the data?
- What infrastructure and financial support is required to ensure access to and long-term maintenance of these large scale data?

### Governance:

- How will the research communities involved in the project address governance as they relate to issues such as sustainability, access and ethical use of data relating to privacy and data confidentiality?

- How will issues such as interoperability and potential integration with existing resources be addressed?
  - Collaborating with HomeBank, LookIt?

## Supplementary documents

In addition to the supplementary documents required in the NSF Grant Proposal Guide, this section of the proposal must include two additional documents uploaded under Other Supplementary Docs. Although, at the Principal Investigator’s discretion these issues may also be discussed in the proposal’s Project Description, they must be directly addressed in the supplementary documents.

### Technical Plan:

A specific and detailed plan and technical details must be presented for how the project goals will be achieved. For example technicians, either by name or by competence/job qualifications should be identified; how will participating students be trained?; how would the broader research community be informed of the product and trained in its use? A detailed schedule with milestones should be included. (This list is not intended to be complete.) (page limit: 2 pages)

### Sustainability Plan:

How will the product be sustained after the expiry of the award? How will it be maintained and made accessible to the research community? (page limit: 1 page) Every project must include an estimate of its annual operational cost if it were to become fully operational.
