# Making the Hidden Visible: Searching Within Video Data

## PROJECT SUMMARY



## PROJECT DESCRIPTION

The widespread capacity to search databases connected to the internet has begun to transform scholarship in multiple domains.
Researchers may search Google Scholar with just a few snippets of information about an author or topic and within seconds have returned to them a list of links to publications that match the terms.
Each of the links targets a specific journal article, where, depending on one's institutional affiliation and the type of journal, the user might begin to read the full paper and examine the figures and tables.
Other types of search allow scholars to seek specific images or videos for teaching or demonstration purposes.
Indeed, the development and application of new image analysis techniques from computer vision, focused on the automated indexing of large datasets of static images, have become a priority for the providers of large scale image and video databases (Google, Microsoft, Facebook).
These profound changes that search engines have brought to literature research and teaching have largely not yet extended to other facets of scholarship such as data gathering (*with a number of notable exceptions in sociology, GIS, biology, genetics, literature, etc.*).
With few exceptions (Gilmore, in press), a behavioral scientist who searches for scientific datasets to analyze or extend upon will find little material to work with (*aside from things like NDAR, neuroimaging databases, a few large-scale surveys*).
That is, despite significant growth in repositories (OSF, Databrary, Dataverse, ICSPR, FigShare) for sharing data and increased interest in open, transparent, and reproducible scientific practices in psychology (Science, 2015), data remains hard to find, and thus, hard to reuse (*doesn't this oversell what we're offering -- it's still a very restricted type of search?*).

A recent survey of the developmental and learning science community (Gilmore & Adolph, 2016) shows that most researchers collect video as raw data, 5-15 hours per week.
Video powerfully depicts the ways that behavior unfolds in real time and how it changes across development.
Video collected for one purpose can be readily re-used for other purposes beyond those envisioned by the original researchers (e.g., Raudies et al. 2012; Gilmore et al. 2015; others).

To characterize and quantify behavioral patterns, developmental scientists apply text or numeric codes to segments of video using specialized software tools and carefully trained cadres of research assistants.
X% of survey respondents code video using a specialized commercial (Mangold Interact; Noldus Observer) or academic tool (Datavyu; ELAN; Transana).
The coded data files contain information about what happened in the videos and often when and for how long it occurred.
Some labs make multiple passes through the same videos, extracting new information with each pass, which may be represented as new columns in special-purpose spreadsheets or new timelines or tiers of annotations.
These codes form the basis of quantitative and qualitative analyses that researchers report in journal articles, talks, and presentations.
As a result, these codes contain invaluable, expensive-to-acquire, human-validated text-based information about the contents of the raw video recordings.
As such, they can provide the basis for searching *within* videos for specific codes or behaviors.
That functionality, offered by most of the specialized coding tools, works well for researchers who share the same laboratory and use the same tools.
But, the coding tools store data in incompatible native formats that are not readily interoperable, and so the hard-won information contained within the spreadsheets remains locked away, its potential for reuse by others largely unrealized.

Other barriers to sharing coded videos exist.
Video contains identifiable information such as faces and voices, and so special care must be taken to secure permission from research participants before sharing videos outside of a research team.
The sensitive nature of video recordings and large file sizes pose technical challenges related to the location and capacity of video storage.
Varied video file formats, and the increasing availability of HD video formats pose additional challenges for storage and preservation.
Inconsistencies in representation and encoding of timing information between coding and video formats can confound interpretation, review, and collation of these codes.
Based on our recent community survey, the video-using developmental scientists use local file servers, cloud-based storage, and even email or snail mail to share videos and coded spreadsheets with colleagues outside their laboratories.

The Databrary (databrary.org) digital library, created by the applicants with support from NSF (BCS-1238599) and NICHD (U01-HD-076595) overcomes many barriers to sharing research videos collected by developmental and learning scientists, including policy/permission and technical challenges.
See section X (pp. X-X) for more information about Databrary and its progress.
But, while Databrary currently allows users to search across the library for datasets matching specific characteristics or terms, the system cannot return results based on information within the videos themselves.
Thus, even while a video might contain examples of child speech and mother speech, and Databrary might contain a coded spreadsheet that marks those segments time-locked to the video, a user cannot search for the segments.

The applicants contend that expanding the Databrary digital library's capabilities to enable search within videos will lead to substantial new research opportunities and accelerated discovery.
As such, the project has four aims.

### Project Aims

1. Design and implement a user interface and database structure that empowers authorized Databrary users to search for specific segments of video based on codes, tags, or keywords linked to those segments. Expand and extend Databrary's system for visualizing user-defined video codes.

Databrary currently allows users to search across collections of videos for selected terms.
We will design, implement, test, and refine back-end technologies and user interfaces that return within-video search results in ways that makes it easy for users to click on and preview video segments the search engine finds.
The interface will allow users to select and copy to their own Databrary workspace selected segments for future reanalysis (*not sure this is in scope, and could be handled simpler with tagging*).
Databrary will keep track of the source(s) of the selected videos and generate electronic "reference lists" of the materials a user searches for and copies (*maybe just for search results?*).
Databrary's existing "timeline" interface for depicting tagged video segments will be modified to allow users to display the sets of tags that have been applied to shared video sessions.
These features will make it easy for Databrary users to discover, preview, copy, and reanalyze video datasets that meet the specific requirements of their research question while keeping careful track of data sources and provenance.

2. Enable codes and annotations from selected existing video and audio coding tools to be imported into, visualized within, and searched across the Databrary digital library. Enable Databrary codes to be exported along with videos in an open format that may be imported back into existing coding tools.

Databrary currently stores spreadsheet files in a small number number of formats, but even if the files are well-structured, the information within them is not searchable.
Working closely with a technical advisory group from a selected subset of coding tool developers (see pp. X-X) commonly used by developmental researchers, Databrary will develop ways for users to upload coding spreadsheets linked to videos and make the codes available for visualization and search across the library.
Databrary will build the capacity to export imported codes in an open, text-based file format (probably XML, CSV, and/or JSON) that could in principle be imported back into any desktop tool that supported the format (*since most tools don't support import, we should probably just export to native formats where possible*).
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
Similarly, as more users search Databrary for selected segments and reanalyze them, new or revised codes will be applied to existing shared video sessions.
Databrary will develop ways to store and represent information from coding passes added by others to shared video sessions.
Databrary will track and report version changes in coding spreadsheets and coding passes, and track and report information about data reuse (*maybe*).

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

### Implementation Plan

The implementation plan consists of four main projects aligned with the specific aims. The sections below describe the main phases in general terms, with specific technical details provided in the [Technical Plan](technical-plan.md) addendum. See Figure X in that addendum for a project timeline.

#### Project 1: Search interface and functionality.

This project will focus on building the capacity for Databrary's existing search engine to return results from within video segments and on designing and testing the interface for returning the results in a powerful and flexible way.

##### Project 1.1: Design search interface

The PIs and project staff will gather requirements for the search interface, drawing upon the existing community of Databrary users by convening web-based focus groups, and UI/UX expertise available to the PIs through the Databrary project's advisory board and institutional experts (e.g., Plass, PSU's Honavar, NYU Libraries).
A formal functional specification document with wireframes will be developed and circulated for feedback. Once finalized, the developers will implement the approved design.
(*We probably want to spec out a far more iterative approach. Plass seems unlikely to help with any of this.*)

##### Project 1.2: Adapt Databrary's search functionality.

Databrary's existing search architecture is based on Apache solr targeting entire datasets as documents.
The system has existing capabilities that enable users to add text based comments or tags to video segments selected by hand using a web-browser. Thus, Databrary already has the capacity to represent selected segments of video and to link video segments to text-based codes.
Staff will adapt the existing comment/tag functionality to permit tags from imported coding spreadsheets to be added to the text available to the search engine.
This will require extensive modifications to Databrary's back-end data model and search infrastructure to allow returning video segment results.

##### Project 1.3: Develop mechanisms for extracting and delivering tagged segments of video.

Once the search engine is able to seek specific text linked to particular video segments, the team will need to develop mechanisms for extracting and delivering the tagged segments in the interface designed as part of Project 1.1.
There are several technical challenges to overcome.
Databrary does not store or represent videos as sequences of frames or time segments.
So, if a user searches for the term "infant speech" and the system returns 100 segments with that tag, Databrary will need to determine what information to return to the user -- a small image (thumbnail) of the first frame of the entire video, a thumbnail image of the first frame of the found segment, or something else.
For the interface to return a thumbnail image, Databrary will need to take information about the video and compute the frame or frames that should be returned.
Similarly, if the user interface allows the user to click on thumbnail images and preview video segments or use mouse movements to scrub through the video segments forward and backward in time, the Databrary system will need to compute and render these frames (*or just deliver the entire video and allow the client to seek, as we do now*).
Solving these problems in ways that make the interface responsive to users will be critical for making the search capability useful.

#### Project 1.4 Develop mechanisms for selecting and storing for later analysis found video segments.

(*I'm not sure any of this is in scope.*)

Once the search engine is able to find video segments and return them to the user in a way that enables browsing or previewing, we will need to develop a mechanism that allows users to select videos for subsequent detailed evaluation.
From the user's point of view, we envision an interface with checkboxes or similar functionality, possibly including filters that, for example, select the top 10 or 50 hits.
Then, we will need to create a workspace where a user can preview, comment upon,  and further evaluate the videos found in the prior search.
Workspaces will build on Databrary's existing "volume" functionality, where volumes are containers within which users can store groups of materials.
Workspaces, like volumes, will be linked to metadata like a project description, funding source, and have places to store materials like coding manuals, statistical analyses, etc.
The specific search and filter criteria will be stored so that these might be reused in the future.
Workspaces and volumes can be shared with other specific researchers a user selects or at some future date more widely.
We envision needing to modify Databrary's existing volume interface to indicate the source(s) of materials, and perhaps the search term(s) that generated the materials.
There will also need to be provisions in place to allow any annotations, comments, notes, or codes a user adds to materials "borrowed" from Databrary's shared videos to be linked back to the original sources.
A user who searches for videos meeting specific terms will not be required to share private annotations or codes, but those who do make their annotations or codes available will allow future searchers to benefit from the work of past searchers.
Also, users will be able to discard specific videos from a workspace or to delete a workspace if it is not longer in use.
Databrary's existing volume audit/tracking tools will be modified to allow users to review the history of their own workspaces/volumes.

Project 4.1 will focus on creating mechanisms that track data provenance -- segment HH:MM:SSS.mmm-HH:MM:SSS.mmm from video nnn from volume vvv and user uuu.

#### Project 2: Code import, representation/visualization, and export

This project focuses on importing coding files from a selected set of academic and commercial tools, representing and visualizing them within Databrary, and exporting them in an open format.

##### Project 2.1: Import and export Datavyu spreadsheets.

We will start by making Databrary capable of importing spreadsheets generated by Datavyu (datavyu.org), the free, open-source video coding tool created by Databrary's founder, Karen Adolph.
Some 6 volumes on Databrary representing 230 video sessions contain spreadsheets coded in Datavyu.
Our survey of the video-using developmental science community suggests that there are hundreds of laboratories using Datavyu.
The Datavyu file format is well-known to the Databrary team, and so making Databrary capable of reading Datavyu spreadsheet files will be a test case, demonstrating the feasibility of other projects (2.2 - 2.x) focused on importing other data formats.
Because Datavyu uses a known format, we will also add to Databrary the capability of exporting codes in the Datavyu format.
This is important, because at present, users who download videos from Databrary with linked Datavyu spreadsheets have to relink the files on their desktop computers.
Jesse Lingeman, lead Datavyu developer and Clinton Freeman, the original Datavyu developer, and current Databrary project consultant, will help guide the effort.

##### Project 2.2: Import ELAN spreadsheets.

ELAN (https://tla.mpi.nl/tools/tla-tools/elan/) is a free video and audio annotation tool developed by researchers at the Max Planck Institute for Psycholinguistics in the Netherlands.
It is widely used in the psycholinguistics community, and has special features for language researchers.

##### Project 2.3: Import and export CHAT files.

TalkBank (talkbank.org) is a collection of language-related databases that include transcripts, audio, and video data from children and adults.
Many of TalkBank's audio or video files are linked to text-based transcripts in the CHAT format, developed for the Child Language Data Exchange System (CHILDES) Project.
CHAT files can be used with the Computerized Language ANalysis (CLAN) suite of software tools, a recognized standard in the language community.
TalkBank's founder and coordinator, Dr. Brian MacWhinney, serves on the Databrary advisory board.
X will work with the project staff and PIs to allow CHAT-format transcripts linked with video or audio recordings to be imported into Databrary.
CHAT files are well-structured; the file specification is open and known; and Databrary staff have done some preliminary work with CHAT-format transcripts.
For these reasons, we believe that it will be relatively straightforward to allow Databrary to import and export CHAT-formatted annotations.  
Support for CHAT-formatted transcripts is important for interoperability with the NSF-funded HomeBank data archive project that focuses on collecting a large corpus of natural speech using the LENA (http://www.lenafoundation.org) recording device, linked with CHAT-formatted transcripts.
Databrary serves as a consultant on the HomeBank project, and works closely with its PIs, Anne Warlaumont (UC Merced), X, and Brian MacWhinney.

##### Project 2.x: Import Mangold Interact files

- Stores volume/study/project information separately from session-specific data.
- Idea: Take Cathie T-L's data since we already have her videos and she uses Mangold.

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

----

## CUTS

More text available to Databrary search engine, the more relevant and powerful the searches can become.
Establishes framework for future extensions that would link to online (HTML-based) versions of published papers for data mining (e.g., neurosynth.org).
Further, Acknowledges growth in text-based data mining and analysis procedures.
Without access to text-based annotations of video segments, these tools can't yet be readily applied to video.
