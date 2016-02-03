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

Databrary will build the capacity to export imported codes into their native formats in an open, text-based file format (probably XML, CSV, and/or JSON) that could in principle be imported back into any desktop tool that supported the format (*since most tools don't support import, we should probably just export to native formats where possible*).
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

Open data sharing has become a scientific imperative across disciplines.
Open data sharing is common practice in many areas of biomedical (Kaye, 2009), physical (Young, 2010), biological (Reichman, Jones, & Schildhauer, 2011) and earth sciences (Kleiner, 2011), and it is an emerging priority in areas like neuroscience (Poldrack & Gorgolewski, 2014; Poline et al., 2012).  
Open data sharing can help to translate insights from scientific research into applications that serve essential human needs.
Open data sharing bolsters transparency and peer oversight (Miguel et al., 2014), encourages diversity of analysis and opinion, accelerates the education of new researchers, and stimulates the exploration of new topics not envisioned by the original investigators.
Data sharing and reuse increases the impact of public and private investments in research and promises to lead to more effective public policy.
The value of open data sharing has been known for decades (Perneger, 2011), but a vigorous open science movement has gained momentum only in recent years.
Open access journals now address general scientific topics (e.g., PeerJ -- https://peerj.com, PLOSOne -- http://www.plosone.org, and; GigaScience -- http://www.gigasciencejournal.com), specific domains (e.g., Advances in Engineering Education -- http://advances.asee.org and BMJ Open -- http://bmjopen.bmj.com/), and even raw data (e.g., Nature Scientific Data -- http://www.nature.com/sdata/).

Data repositories from diverse areas of scholarly inquiry have begun to communicate with one another through groups such as the Research Data Alliance (https://www.rd-alliance.org/groups/domain-repositories-interest-group.html) and work jointly to achieve common goals such as publishing author guidelines for transparent and open research (Nosek et al., 2015). New web-based platforms now enable open sharing of slides from talks (SlideShare -- http://www.slideshare.net), data, and materials (Figshare -- http://figshare.com; Open Science Framework -- http://osf.io; F1000 Research -- http://f1000research.com). The emergence of greater interest in open data sharing has coincided with the increasing popularity of web-based software sharing and version control systems such as GitHub (http://github.com), open source data analysis languages such as R (http://cran.r-project.org) and Python (https://www.python.org), and with the initiation of training programs such as Software Carpentry (https://software-carpentry.org) that help working scientists acquire state-of-the-art data management skills. These initiatives seek to speed research progress, improve research practice, and foster greater scientific transparency.

Unfortunately, despite efforts to make data sharing a norm in the social and educational sciences (AERA Code of Ethics, 2011; Nosek & Bar-Anon, 2011) most research on human learning and development remains shrouded in a culture of isolation (Adolph, Gilmore, Freeman, Sanderson, & Millman, 2012).
Researchers share interpretations of distilled, not raw data, almost exclusively through publications and presentations.
The path from raw data to research findings to conclusions cannot be traced or validated by others.
Other researchers cannot easily pose new questions that build on the same raw materials.

The Databrary (databrary.org) data library has, with prior support from NSF (BCS-1238599) and NICHD (U01-HD-076595), overcome barriers to sharing video, a type of raw data collected by hundreds of researchers who study learning and development in classroom, museum, laboratory, and home contexts.
Video is a medium with unique potential for reuse by others, and this makes it critical to overcome barriers to open video data sharing in order to advance discovery in the behavioral sciences.
The success of the Databrary project to-date illustrates how open sharing of video data can improve scientific practice and advance research on learning and development.
The current proposal seeks to extend and enhance Databrary in ways that will make it even more powerful and useful to researchers who wish to share findings and build upon the prior work of others.
The proposed enhancements will make sharing video data more attractive to researchers and make substantially easier the reuse and repuposing of previously shared video.

#### The growth of video

More than 1 billion users worldwide upload more than 300 hours of video to YouTube every minute (https://www.youtube.com/yt/press/statistics.html).
Google, the owner of YouTube, has built an immense data infrastructure to upload, store, convert, tag, and stream video.
The current scale of video collection in research contexts is much smaller of course and more focused in purpose, but it is large and growing.
For example, the Measures of Effective Teaching Project (http://www.metproject.org/) funded by the Gates Foundation generated more than 1,000 videos from K-12 classrooms, covering core subjects such as mathematics and language arts from multiple camera angles.
The data, constituting tens of terabytes of storage, are hosted at the University of Michigan (http://soe.mivideo.it.umich.edu/) and streamed to registered viewers across the country.
A recent survey of researchers who study infant and child development carried out by the applicants (Gilmore & Adolph, 2016) suggests that there are hundreds of scientists who use video in their research programs, most collecting 5-10 hours per week per research group.
Beyond research on classroom practices, video recordings are becoming critical for teacher observation, evaluation and certification through tools such as Edthena (http://www.edthena.com) and the National Board for Professional Teaching Standards ATLAS initiative (http://www.nbpts.org/atlas).
The widespread availability of low-cost, high resolution video cameras has made video a rapidly growing source of information about human behavior with untapped potential for the sciences of human behavior.

#### Video enables behavioral science research

Video data are unique because video captures the richness and complexity of human behavior—-the interactions between people and their environment -- unlike any other form of measurement.
Video captures what people say and what they do.
It captures when, where, and how they look, gesture, move, and communicate, and how their looking, gesturing, moving, and communicating correspond to what others are doing.
Because of these characteristics, video —- and before that, film -— has a long history (Goldman et al., 2014; Curtis, 2011) in the study of learning and development.
Educators, teacher trainers and evaluators use video to record what teachers do to help improve teaching practices or to evaluate performance (Bakken & Pierroux, 2015; Blomberg et al., 2013; Masats & Dooly, 2011; Baecher, Kung, Jewkes, & Rosalia, 2013).
Researchers use video in home and laboratory contexts to study how infants, children, and adults behave in natural or experimenter-imposed tasks (Karasik, Tamis-LeMonda, & Adolph, 2014).
Researchers record videos of students in classrooms (Alibali & Nathan, 2012) to understand what teachers do and how students respond.
Because video closely mimics the multisensory experiences of live human observers, recordings collected by one person for a particular purpose may be readily understood by another person and reused for a different purpose. Moreover, the success of YouTube and other video-based social media demonstrates that web-based video storage and streaming systems are now sufficiently well developed to satisfy large-scale demand.

However, capitalizing on the unique potential of large scale video data collections requires overcoming technical, ethical, practical, and cultural challenges to sharing research video.

#### Meeting video's potential requires overcoming special challenges

Large file sizes and diverse formats present special technical challenges for sharing.
Video files are large (one hour of HD video can consume 10+ GB of storage) and come in varied formats (from cell phones to high-speed video).
Many studies require multiple camera views to capture desired behaviors.
Thus, sharing videos requires substantial storage capacity and significant computational resources for transcoding videos into common formats that can be preserved over the long term.

Open video sharing must overcome ethical challenges linked to sharing personally identifiable data.
Although policies exist for sharing de-identified data, video contains easily identifiable data: faces, voices, names, interiors of homes and classrooms, and so on.
Removing identifiable information from video severely diminishes its value for reuse and puts additional burdens on researchers.
So, open video sharing requires new policies that protect the privacy of research participants while preserving the integrity of raw video for reuse by others.
Open video sharing faces practical challenges of data management. Developmental and educational research is inundated by an explosion of data, most of which is inaccessible to other researchers.
Research video creates a data explosion: A typical lab studying infant or child development collects 8-12 hours of video/week (Gilmore & Adolph, 2012).  Researchers lack time to find, label, clean, organize, and copy their files into formats that can be used and understood by others (Ascoli, 2006a).
Study designs vary widely, and no two labs manage data in the same way. Idiosyncratic terminology, record-keeping, and data management practices are the norm. Few researchers document workflows or data provenance.
Although video requires minimal metadata to be useful, video files must be electronically linked to what relevant metadata exist including information about whether participants have given permission to share.

Perhaps the most important challenge is cultural.
Community practices must change. Most researchers in the education, learning, and developmental sciences do not reuse their own videos or videos collected by other researchers; they neither recognize nor endorse the value of open sharing.
Contributing data is anathema and justifications against sharing are many. Researchers cite intellectual property and privacy issues, the lack of data sharing requirements from funding agencies, and fears about the misuse, misinterpretation, or professional harm that might come from sharing (Ascoli, 2006b; Ferguson, 2014).
Data sharing diverts energy and resources from scholarly activities that are more heavily and frequently rewarded. These barriers must be overcome to make video data sharing a scientific norm.

Technical challenges involved in searching the contents of videos present barriers to sharing.
Videos contain rich and diverse information that requires significant effort by human observers to extract.
Researchers make use of videos by watching them and, using paper and pencil or more automated computerized coding software, translating observations into ideas and numbers.
In many cases, researchers assign codes to particular portions of videos.
In principle, these codes make the contents of videos searchable by others. However, researchers focus on different questions from varied theoretical perspectives and lack consensus on conceptual ontologies.
So, in practice, most coded data are not easily shared. Although human-centered video coding capitalizes on the unique abilities of trained observers to capture important dimensions of behavior, machine learning and computer vision tools may provide new avenues for tagging the contents of videos for educational and developmental research (Amso, Haas, Tenenbaum, Markant, & Sheinkopf, 2014; Yu & Smith, 2013; Fathi, Hodgins, & Rehg, 2012; Google Research, 2014; Raudies & Gilmore, 2014).

#### The Databrary digital library overcomes these barriers

With support from NSF (BCS-1238599) and NICHD (U01-HD-076595), PIs Adolph and Gilmore and Co-I Simon established Databrary.org, the first-of-its-kind library for storing and sharing video data and associated metadata.
From the beginning, Databrary sought to create a secure home for research videos in the developmental and learning sciences in order to foster widespread data reuse and enhance transparency in research.

Databrary began public operation in the spring of 2014.
The library has since grown to encompass 253 authorized investigators and 143 affiliate investigators from 157 institutions around the world.
These investigators have contributed more than 3,600 hours of video or audio recordings, representing some 3,300 participants ranging in age from 6 weeks to middle age.
The system supports 162 volumes or datasets, of which 55 are currently shared with the community of authorized researchers or with the public.

Databrary permits users to search for, browse, view, and download videos stored on the site.
Users may seek out videos with specific characteristics such participant ages or recording context (home, lab, or school) for recoding and reanalysis.
Databrary empowers users to search for and stream or download video highlights -- clips that may be shown in public settings for educational or research purposes like lectures or talks.

In addition, Databrary sought to overcome two critical barriers standing in the way of widespread open data sharing.

#### Policy Framework for sharing identifiable data

Video and audio recordings usually contain identifiable information -- faces and voices of research participants or others -- and may contain sensitive information -- images of participants' homes or behaviors that could cause embarrassment or harm if revealed outside a research context.
Video and audio recordings cannot be easily or inexpensively de-identified without reducing the value of the recordings to other researchers.
So, the Databrary team created a policy framework that allows identifiable data to be safely and securely shared for research purposes.

Policies for openly sharing identifiable data in ways that securely preserve participant privacy are essential for sharing research video. Databrary does not attempt to de-identify videos. Instead, Databrary maximizes the potential for video reuse by keeping recordings in their original unaltered form. To make unaltered raw videos available to others for reuse, Databrary has developed a two-pronged access model that (a) restricts access to authorized researchers, and (b) enables access to identifiable data only with the explicit permission of the participants.
To gain access to Databrary, a person must register (http://databrary.org/register) on the site. Applicants agree to uphold Databrary’s ethical principles and to follow accepted practices concerning the responsible use of sensitive data. Each applicant’s institution must co-sign an access agreement (https://databrary.org/access/policies/agreement.html). Full privileges are granted only to those applicants with independent researcher status at their institutions. Others may be granted privileges if they are affiliated with a researcher who agrees to sponsor their application and to supervise their use. Ethics board or IRB approval is not required to gain access to Databrary because many use cases do not involve research. IRB approval is required to contribute data and for research uses. Once authorized, a user has full access to shared data on the site, and may browse, tag, download for later viewing, and conduct non- or pre-research activities. These policies are spelled out fully in an online user guide (https://databrary.org/access/policies.html).
Unique among data repositories, the Databrary access agreement authorizes both data use and contribution. However, users agree to store on Databrary only materials for which they have ethics board or IRB approval. Data may be stored on Databrary for the contributing researcher’s use regardless of whether the records are shared with others or not. When a researcher chooses to share, Databrary makes the data openly available to the community of authorized researchers.
In addition to restricting access to authorized researchers, Databrary has extended the principle of informed consent to participate in research to encompass permission to share data with other researchers. To formalize the process of acquiring permission, Databrary has developed a Participant Release Template (https://databrary.org/access/policies/release-template.html) with standard language recommended for use with study participants. This language helps participants to understand what is involved in sharing video data, with whom the data will be shared, and the potential risks of releasing video and other identifiable data to other researchers.

- Video and audio recordings contain identifiable information -- faces, voices, etc.
- Databrary has developed a policy framework that builds on the principles of informed consent.
- The framework allows research participants to give permission for their identifiable information to be shared with other researchers.
- The framework also allows research participants to give permission for excerpts or clips from their recordings to be shown for research or educational purposes.
- In turn, the framework limits access to the bulk of Databrary's materials to researchers who are specifically authorized by their institutions to have access to the library and to conduct research and non-research activities using these materials.
- The framework, with minimal modification, has been agreed to by more than X institutions in North and South America, Europe, Asia, and Australia.

#### Data management tools

The project team sought to lower barriers to data sharing by creating data management functions that make it easy for researchers to organize data for subsequent sharing,

When researchers do share, standard practice involves organizing data after a project is finished, perhaps when a paper goes to press. This “preparing for sharing” after the fact presents a difficult and unrewarding chore for investigators. It makes curating and ingesting datasets challenging for repositories, as well. Databrary has created a different route to curation that reduces these barriers.
Databrary has developed a data management system that empowers researchers to upload and organize data as it is collected. Immediate uploading reduces the workload on investigators, minimizes the risk of data loss and corruption, and accelerates the speed with which materials become openly available. The system employs familiar, easy-to-use spreadsheet and timeline-based interfaces (Figures 2-3, and 5) that allow users to upload videos, add metadata about tasks, settings, and participants, link related files, and assign appropriate permission levels for sharing. To encourage immediate uploading, Databrary provides a complete set of controls so that researchers can restrict access to their own labs or to other users of their choosing. Datasets can be openly shared with the broader research community at a later point when data collection and ancillary materials are complete, whenever the contributor is comfortable sharing, or when journals or funders require it.

Databrary has developed a novel active-curation framework. Researchers are encouraged to upload videos (and, if desired, files in other formats) after each session of data collection and to fill relevant metadata fields in a flexible, modifiable spreadsheet to aid in data management and to facilitate search and reuse. With this active-curation framework, the cost in time and labor to researchers is equivalent to current lab practices of storing a copy of the video on a hard drive and entering the associated metadata into a spreadsheet. Moreover, with this method, Databrary acts as the researcher’s personal lab file server and cloud storage, enabling web-based sharing among members of the protocol and ensuring secure backup.

#### Building a Community

Data sharing works only when the scientific community embraces it. From the beginning, Databrary has sought to cultivate a community of researchers who support data sharing and commit to making sharing and reuse part of their work flows. Databrary's community building efforts involve many interacting components. These include active engagement with professional associations, conference-based exhibits and training workshops, communications with research ethics and administration staff, talks and presentations to diverse audiences, and one-on-one consultations with individual researchers and research teams. These activities are time and labor-intensive, they are critical to changing community attitudes toward data sharing in the educational and learning sciences. Looking ahead, it will be critical to engage funders, journals, and professional organizations in the effort to forge community consensus about the importance, feasibility, and potential of open video data sharing.
As it stands now, Databrary serves the community of researchers who study infant, child, and adolescent development, and the library is beginning to serve the needs of researchers who study K-12 education. However, the software is free and open source (http://github.com/databrary) and could readily be adapted for use by investigators interested in studying and sharing findings from research into best practices in engineering education or other fields.

#### Tools for Analyzing Video

- Tools allow text or numeric tags to be applied to segments of video by human observers.
- Transana as a model for free-form comments ...
- CLAN as a model for highly structured, strong regularized conceptual ontologies.
- Datavyu as a model for highly flexible tool, scripting capability (Mangold has scripting, as well), free and open source software.

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

#### Leadership and governance

The project will be coordinated and managed by the PIs, Gilmore and Adolph, with guidance from the Co-Is, Simon and Millman.
Gilmore and Adolph currently meet via phone or video conference several times each week to discuss Databrary project-related business matters with the Co-Is and with project staff.
That practice will continue under the proposed project.
Adolph and Gilmore collaborate on most decisions and regularly seek input from the Co-Is, but as overall Project Director, Adolph has the final say.

In addition, the Databrary project as a whole has input from an advisory board.
The board (see Appendix X) consists of experts internal to PSU and NYU and external advisers who bring expertise in data sharing and developmental science.
The Databrary advisory board meets annually to hear project updates and provide guidance about policy and technical matters.

Because of the unique nature of this proposal, we have assembled a technical advisory committee consisting of representatives from the leading video data coding software tools used by the developmental and learning sciences research communities (See Appendix X - <ridr-16-technical-advisory-comm-members.md>).
These advisors have agreed to provide technical assistance to the project staff via email, phone, or video conference for up to 1 hour per month.
The advisors have agreed to participate in a half-day webinar meeting held annually in each of the three years of the proposed project period.

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

Behavior, thought, feeling, and communication unfold in real time.
No other measure captures the dynamics of behavior like video.
Video and before it, film, has formed the core of research in human development for decades.

- uniquely captures complexity of behavior
- cheap to collect, largely self-documenting
- widely used
- flexible, can be used in many contexts
- high reuse potential
