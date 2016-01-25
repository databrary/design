# Making the Hidden Visible: Searching Within Video Data

## PROJECT SUMMARY



## PROJECT DESCRIPTION

The widespread capacity to search databases connected to the internet has begun to transform scholarship in multiple domains.
Researchers may search Google Scholar with just a few snippets of information about an author or topic and within seconds have returned to them a clickable list of publications that match the terms.
Clicking on one of the links brings the searcher to a specific journal article, where depending on one's institutional affiliation and the type of journal, that person might begin to read the full paper and examine high quality electronic versions of the figures and tables.
Search empowers scholars with similar powers when seeking specific images or videos for teaching or demonstration purposes.
Indeed, the development and application of new image analysis techniques from computer vision focused on the automated tagging of large datasets of static images have become a significant priority for the providers of large scale image and video databases (Google, Microsoft, Facebook).
The profound changes that search engines have brought to literature research and teaching have not extended to other facets of scholarship such as data gathering.
With few exceptions (Gilmore, in press), a behavioral scientist who searches for scientific datasets to analyze or extend upon will find little material to work with.
That is, despite significant growth in repositories (OSF, Databrary, Dataverse, ICSPR, FigShare) for sharing data and increased interest in open, transparent, and reproducible scientific practices in psychology (Science, 2015), data remains hard to find, and thus, hard to reuse.

A recent survey of the developmental and learning science community (Gilmore & Adolph, 2016) shows that most researchers collect video as raw data, 5-15 hours per week.
Video powerfully depicts the ways that behavior unfolds in real time and how it changes cross development.
Video collected for one purpose can be readily re-used for other purposes beyond those envisioned by the original researchers (e.g., Raudies et al. 2012; Gilmore et al. 2015; others).

To characterize and quantify behavioral patterns, developmental scientists apply text or numeric codes to segments of video using specialized software tools and carefully trained cadres of research assistants.
X% of survey respondents code video using a specialized commerical (Mangold Interact; Noldus Observer) or academic tool (Datavyu; ELAN; Transana).
The coded data files contain information about what happened in the videos and when or how long it occurred.
Some labs make multiple passes through the same videos, extracting new information with each pass, and adding new columns to the spreadsheets.
The spreadsheets form the basis of quantitative and qualitative analyses researchers report in journal articles, talks, and presentations.
Beyond this, the spreadsheets contain invaluable, expensive-to-acquire, human-validated text-based information about the contents of the raw video recordings.
As such, the spreadsheets provide the basis for searching *within* videos for specific codes or behaviors.
That functionality, offered by most of the specialized coding tools, works well for researchers who share the same laboratory and use the same tools.
But, the coding tools store data in incompatible native formats that are not readily interoperable, and so the hard-won information contained within the spreadsheets remains locked away, its potential for reuse by others largely unrealized.

Other barriers to sharing coded videos exist.
Video contains identifiable information such as faces and voices.
Special care must be taken to secure permission from research participants before sharing videos outside of a research team.
The sensitive nature of video recordings and large file sizes pose technical challenges related to the location and capacity of video storage.
Varied video file formats, and the increasing availability of HD video formats pose additional challenges for storage and preservation.
Based on our recent community survey, the video-using developmental scientists  use local file servers, cloud-based storage, and even email or snail mail to share videos and coded spreadsheets with colleagues outside their laboratories.

The Databrary (databrary.org) digital library, created by the applicants with support from NSF (BCS-1238599) and NICHD (U01-HD-076595) overcomes many barriers to sharing research videos collected by developmental and learning scientists, including policy/permission and technical challenges.
See section X (pp. X-X) for more information about Databrary and its progress.
But, while Databrary currently allows users to search across the library for studies matching specific characteristics or terms, the system cannot return results based on information within the videos themselves.
Thus, even while a video might contain examples of child speech and mother speech, and Databrary might contain a coded spreadsheet that marks those segments time-locked to the video, a user cannot search for the segments.

The applicants contend that expanding the Databrary digital library's capabilities to enable search within videos will lead to substantial new research opportunities and accelerated discovery.
As such, the project has four aims.

### Project Aims

1. Design and implement a user interface and database structure that empowers authorized Databrary users to search for specific segments of video based on codes, tags, or keywords linked to those segments. Expand and extend Databrary's system for visualizing user-defined video codes.

Databrary currently allows users to search across videos or collections of videos for selected terms.
We will design, implement, test, and refine back-end technologies and and user interfaces that return within-video search results in ways that makes it easy for users to click on and preview video segments the search engine finds. The interface will allow users to select and copy to their own Databrary workspace selected segments for future reanalysis.
Databrary will keep track of the source(s) of the selected videos and generate electronic "reference lists" of the materials a user searches for and copies.
Databrary's existing "timeline" interface for depicting tagged video segments will be modified to allow users to select the sets of tags that have been applied to shared videos.
These features will make it easy for Databrary users to discover, preview, copy, and reanalyze video datasets that meet the specific requirements of their research question while keeping careful track of data sources and provenance.

2. Enable codes and annotations from selected existing video and audio coding tools to be imported into, visualized within, and searched across the Databrary digital library. Enable Databrary codes to be exported along with videos in an open format that may be imported back into existing coding tools.

Databrary currently stores spreadsheet files in a small number number of formats, but even if the files are well-structured, the information within them is not searchable.
Working closely with a technical advisory group from a selected subset of coding tool developers (see pp. X-X) commonly used by developmental researchers, Databrary will develop ways for users to upload coding spreadsheets linked to videos and make the codes available for visualization and search across the library.
Databrary will build the capacity to export imported codes in an open, text-based file format (probably XML, CSV, and/or JSON) that could in principle be imported back into any desktop tool that supported the format.
These features will provide information for the search capabilities described in Aim 1, and they will reduce barriers to sharing coded videos across labs that use different coding tools.

3. Design and implement ways for authorized Databrary users to create electronic code manuals that link text-based or numeric tags to richer descriptions of code definitions, including video snippets or exemplars.

Most columns in video coding spreadsheets consist of letters or numbers coupled to time stamps or time interval.
These minimal codes simplify the laborious task of coding video.
Researchers provide richer, narrative based definitions of codes -- "m" means baby is in motion or "m" means mother is speaking -- in separate coding manuals or in specialized fields within coding tools.
Databrary will develop ways for users to create or upload rich, text-based code definitions.
The code definitions will thereby become searchable.
This will help the search engine return more relevant and useful information to users.
Further, the creation of code- (Aim 2) and coding-manual (Aim 3) import capabilities will establish the technical foundation for communities of researchers to create conceptual ontologies.
Researchers who share interests in particular phenomena or constructs can search Databrary for illustrative video segments and have meaningful, data-driven discussions about whether the codes, definitions, and segments describe the same phenomenon.

4. Design interfaces for Databrary that enable users to collaborate on coding video or audio recordings, share coding spreadsheets, maintain version control over coding information, and track data provenance.

Databrary will become an even more powerful and attractive tool for video data storage and sharing if it can be used by researchers to facilitate coding in geographically separate locations.
Most video coding will continue to occur offline using desktop tools.
Databrary will develop ways for researchers to share coding with collaborators in different locations, by keeping track of information about different coding passes on the same videos.
This will allow coders in one lab, for example, to carry out reliability coding on videos coded in a collaborator's lab.
Similarly, as more users search Databrary for selected segments and reanalyze them, new or revised codes will be applied to existing shared video segments.
Databrary will develop ways to store and represent information from coding passes added by others to shared video segments.
Databrary will track and report version changes in coding spreadsheets and coding passes, and track and report information about data reuse.

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

We will start by making Databrary capable of importing spreadsheets generated by Datavyu (datavyu.org), the free, open-source video coding tool created by Databrary's founder, Karen Adolph.

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

----

## CUTS

More text available to Databrary search engine, the more relevant and powerful the searches can become.
Establishes framework for future extensions that would link to online (HTML-based) versions of published papers for data mining (e.g., neurosynth.org).
Further, Acknowledges growth in text-based data mining and analysis procedures.
Without access to text-based annotations of video segments, these tools can't yet be readily applied to video.
