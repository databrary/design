---
output: word_document
bibliography: ridir-16.bib
csl: pnas.csl
---
## PROJECT SUMMARY

The widespread capacity to share and exchange data over the internet has transformed scholarship, but technical problems with incompatible and proprietary file formats hinder the free exchange of data.
Video constitutes a primary means of recording behavior in home, lab, classroom, and museum settings for researchers in the behavioral sciences and related fields [@derry_conducting_2010; @goldman_video_2014; @alibali_embodiment_2012; @masats_rethinking_2011; @pasqualino_filming_2007; @qualitative_data_repo; @cmdbase_ethology_video_archive; @chaquet_survey_2013; @rautaray_vision_2012].
Video captures behavior in real time and depicts how it changes across context, learning, and development.
With minimal metadata, research videos can be reused to answer new questions outside the scope of the original project or never envisioned by the original investigators.
Most researchers enrich their video data by manually coding it: human coders use specialized software tools to tag specific segments of the video with text-based transcriptions, annotations, and codes to mark the type and duration of particular, user-defined events [@gilmore_video_2016].
Some tags are highly detailed, others are more general; the corresponding segments of video may last from milliseconds to minutes or longer durations.
Novel analyses could integrate across and build upon previously coded videos if the data were openly shared, but most researchers do not currently share video, and existing coding tools use proprietary or incompatible formats.

Databrary (databrary.org), an NSF- and NICHD-funded digital library, is a platform for sharing video data that hundreds of researchers have adopted.
The proposed project will enhance Databrary so that:
(1) Coded video stored in incompatible software tools can be uploaded, imported, visualized, searched, and downloaded from Databrary;
(2) Researchers can browse codes produced by others, share coding files across geographically distant locations, and build upon codes contributed by others;
(3) Detailed definitions of annotations and codes contained in separate coding manuals can be entered, indexed, visualized, searched, and downloaded from Databrary;
and (4) Researchers can search for specific datasets or video segments based on the codes, and browse, select, and download the datasets for analysis.

**Intellectual Merit.** The project will add significant value to Databrary, an existing, next-generation resource for video-based behavioral research by integrating a previously inaccessible set of expertly coded and micro-detailed annotations of research videos.
The new sources of data will be made accessible in a variety of formats for reuse, allowing researchers to use the tools of their choice, best suited to their research questions and analyses.
Increased interoperability among codes will enable new multidisciplinary research questions to be asked based on existing, already collected and shared videos.
By incorporating annotations and code definitions, the enhancements will enable Databrary users to readily reuse and build on shared video data.
The project will thereby create new opportunities for integrative and multidisciplinary research that is at present prohibitively expensive or impossible.

**Broader Impacts.**
The proposed enhancements will make datasets shared on Databrary, many of them previously funded by NSF and NIH, more findable, accessible, interoperable, and reusable [@_fair_2014].
The project will have broad impact across the behavioral, social, biological, and educational sciences that rely on video data.
The enhancements expand opportunities for scientists at institutions with limited resources to participate in scientific discourse about human behavior by building on the expensive-to-collect data gathered by others.
Because many institutions with limited resources serve students from underrepresented groups, the proposed project will expand research opportunities for them as well.
By making data sharing more attractive to scientists, the project will increase the quantity and quality of shared video datasets.
By making coding files and manuals more readily sharable, the project will improve transparency and boost reproducibility.
Finally, the project will raise the profile of video-based research and bolster interest in and support for the behavioral sciences among the public.

<!--Broader impacts may be accomplished through the research itself, through the activities that are directly related to specific research projects, or through activities that are supported by, but are complementary to the project. NSF values the advancement of scientific knowledge and activities that contribute to the achievement of societally relevant outcomes. Such outcomes include, but are not limited to: full participation of women, persons with disabilities, and underrepresented minorities in science, technology, engineering, and mathematics (STEM); improved STEM education and educator development at any level; increased public scientific literacy and public engagement with science and technology; improved well-being of individuals in society; development of a diverse, globally competitive STEM workforce; increased partnerships between academia, industry, and others; improved national security; increased economic competitiveness of the United States; and enhanced infrastructure for research and education.-->

## PROJECT DESCRIPTION

Video constitutes a primary means of recording behavior in home, lab, classroom and museum settings for researchers in the behavioral sciences and related fields [@derry_conducting_2010; @goldman_video_2014; @alibali_embodiment_2012; @masats_rethinking_2011; @pasqualino_filming_2007; @qualitative_data_repo; @cmdbase_ethology_video_archive; @chaquet_survey_2013; @rautaray_vision_2012].
Video captures behavior in real time and depicts how it changes across context, learning, and development.
With minimal metadata, video data collected for one purpose can be reused to address new questions outside the scope of the original study, outside the expertise of the original researcher, or never envisioned by the original researcher.
Most researchers enrich video data by spending hours meticulously coding the subset of behaviors relevant to their research.
Specialized software tools make it easy to apply text-based transcriptions, annotations, and codes [@gilmore_video_2016].
The coded data files then contain information about who was involved or spoke, what happened or was said, when, where, and for how long.
Novel analyses could integrate across and build upon these codes if the data were openly shared.
But, most researchers do not currently share video, and many coding tools use proprietary or incompatible formats.
The NSF- and NICHD-supported Databrary (databrary.org) digital library has created a platform for sharing video data that hundreds of researchers have adopted.
We now aim to expand the kind, depth, and diversity of analyses that researchers can conduct by enabling Databrary to store, share, and allow the exchange of coding files linked to shared videos.

### Challenge

Many behavioral researchers still use paper-and-pencil or make-shift programs such as Excel to extract information from video.
Others use specialized tools [@gilmore_video_2016] -- CLAN [@CLAN_2016], Datavyu [@datavyu_2016], ELAN [@ELAN_2016], Mangold Interact [@_mangold_2016], Noldus Observer XT [@_noldus_2016], and Transana [@transana_2016] -- that enable analysts to move backwards and forwards through digital videos at varied speeds and apply *codes* -- speech transcripts, comments, numeric ratings, single words or letters -- time-locked to particular video segments.
Most tools support the application of multiple codes in separate passes that focus on different behaviors, and the data are stored in data files we call *coding files*.
The codes form the basis of subsequent quantitative and qualitative analyses.
To ensure reliable, reproducible, and robust results, most researchers provide rich descriptions of the behaviors of interest captured by the codes.
*Coding manuals* saved in word processing or spreadsheet formats capture and organize the definitions.
Taken together, the coding files and manuals contain invaluable, expensive-to-acquire, human-validated, text-based information about the contents of raw research videos.

But, with a few notable exceptions (CHAT, ELAN, Transana), the tools store data in incompatible, proprietary, and non-interoperable formats.
Import and export among them can be difficult or impossible.
Researchers may need to hire technical experts simply to collaborate colleagues who use an incompatible tool.
Those without access to technical expertise or a compatible tool may abandon attempts to reuse shared data.
Few efficient and secure means exist for sharing videos with linked coding files; those that do exist support only a restricted set of file formats.

#### Opportunity

The videos linked to coding files and manuals generated by researchers constitute a substantial resource for new discovery with significant potential to catalyze novel research.
This potential is unrealized unless researchers make the materials available in interoperable formats.
Databrary has demonstrated that researchers will embrace video data sharing when barriers are reduced and appropriate incentives exist.
We believe this success will extend to coding files and manuals as well as long as we can make it easy for users to share and exchange these files.
This involves allowing users to upload and download coding files in whatever format best suits their purposes.
The hard-won information contained within the files can then be made fully accessible and available for myriad new uses.

Accordingly, we propose to expand Databrary's capabilities to import and export video coding files and manuals that are already collected by researchers, but not easily or readily shared.
We propose to make codes currently stored in incompatible file formats interoperable with one another.
Where the files contain metadata useful for search, we will import and add it to Databrary's search functionality.

These enhancements will accelerate the pace of video data sharing and reuse in the developmental and learning sciences where hundreds of researchers use video [@alibali_embodiment_2012; @goldman_video_2014; @adolph_observer_2016].
The project will leverage and increase the value of NSF's prior investments in Databrary and create opportunities for new research in other fields that use video recordings as raw data [@masats_rethinking_2011; @pasqualino_filming_2007; @qualitative_data_repo; @cmdbase_ethology_video_archive; @chaquet_survey_2013; @rautaray_vision_2012].
This will enable new, cross-disciplinary, multi-level, and integrative research on human behavior that is currently prohibitively expensive or impossible.

### Project Aims

The project has four aims.

#### Aim 1: Enable codes and annotations from targeted video coding tools to be imported into and exported from the Databrary video library.

Databrary currently supports uploading, storing, and sharing some coding files but cannot extract their contents or link them to videos.
Working closely with a technical advisory committee (TAC) representing the leading academic and commercial video coding software tools (see Appendix X) commonly used by the majority of developmental researchers [@gilmore_video_2016], we will expand Databrary's understanding of and ability to work with the coding files generated by these tools.
Databrary will develop ways for users to exchange files between formats and link files with the original video source.
Import functionality will bring the coding files into the Databrary system and make the information they contain available for visualization and search within a dataset and across the library.
Databrary will also build the capacity to export codes back into their native formats wherever possible as well as to more user-consumable and interoperable formats (e.g., CSV).

#### Aim 2: Expand and extend Databrary's system for visualizing user-defined video codes.

Databrary's existing "timeline" interface for depicting tagged video segments will be modified to allow users to display, filter, and download the codes that have been applied to shared videos.
This will require Databrary to store and represent information from multiple codes within the same coding file and codes from multiple files.
This will make it substantially easier to distribute coding efforts on shared videos across geographically separate labs and will maximize the transparency and reproducibility of codes applied to videos.

#### Aim 3: Design and implement ways for Databrary to edit, index, visualize, make available for search and export information about behavioral codes contained in coding manuals or coding templates.

Databrary currently allows users to upload and share coding manuals in word processing, spreadsheet, and text based file formats, but information in the files cannot be easily accessed or searched.
We will develop ways for users to enter and share coding manuals with Databrary, creating electronic equivalents that capture code definitions and make them searchable.
This will help users understand shared coding files, making it more likely shared videos can be reused and previous findings built upon.
Coding manual information will make Databrary's search engine return more relevant and useful information to users, and it will provide better, more human-readable information for visualizing codes while previewing recordings.

#### Aim 4: Design and implement a user interface and database structure that empowers authorized Databrary users to search for videos that meet specific criteria, view relevant videos, and download them for reanalysis and reuse.

Databrary currently allows users to search across datasets for selected terms.
We will design, implement, and validate back-end technologies and user interfaces that return search results in ways that make it easy for users to preview video segments the search engine finds.
The interface will allow users to discover relevant datasets for browsing or download for future reanalysis.
These features will make it easy for Databrary users to discover, explore, and reanalyze video datasets that meet the specific requirements of their research question.

### Background and Rationale

Open data sharing has become a scientific imperative across disciplines and a mandate from research funders [@nsf_data_sharing].
It is common practice in many areas of biomedical [@kaye_data_2009], physical [@young_crowd_2010], biological [@reichman_challenges_2011] and earth sciences [@kleiner2011data], and it is an emerging priority in neuroscience [@poldrack_making_2014, @poline_data_2012].
Despite notable efforts to make data sharing a norm in the behavioral sciences [@_aera_2011, @nosek_scientific_2012, @nosek_promoting_2015] most research on behavior remains shrouded in a culture of isolation [@adolph_toward_2012, @gilmore_big_2016].
Researchers share interpretations of distilled, not raw data, almost exclusively through publications and presentations.
The path from raw data to findings to conclusions can rarely be traced or validated by others, nor can other researchers easily pose new questions that build on the same raw materials.

#### The growth of video as data

<!-- is this whole section about video relevant and needed? shouldn't we be moving more quickly to talking about coding data, how people code, and the barriers they face with sharing coding data? the problems described here are either already solved by databrary or not being addressed by this grant. -->

Developmental researchers have always recognized the power of visual media to capture the richness and complexity of children’s behavior [@adolph_observer_2016].
As video replaced film as the recording medium, and with the advent of increasingly cheap and easy-to-use video technologies, video has become the backbone of most developmental research programs.
Video and audio recordings constitute the raw materials of research for hundreds, perhaps thousands of scientists who study learning and development.
More than 100 of the 259 respondents to a recent survey of developmental scientists report collecting more than 5 hours of video per week [@gilmore_video_2016] in their labs.
The scale of some large collaborative projects is even larger.
The Measures of Effective Teaching Project [@met_project], funded by the Gates Foundation, generated more than 1,000 videos from 3,000 K-12 classrooms over a 3-year period, covering core subjects such as mathematics and language arts from multiple camera angles.
The data, constituting tens of terabytes of storage, are hosted at the University of Michigan [@met_data_icspr] and streamed to registered viewers across the country.
The NSF-funded HomeBank project [@homebank], affiliated with the TalkBank/CHILDES archive [@talkbank_site], is collecting and sharing hundreds of hours of naturalistic audio recordings of children's speech, some of which will be accompanied by video.
The Autism and Beyond Project at Duke University [@autism_beyond] has deployed an iPhone application that will collect video images of children's facial expressions to evaluate the feasibility of using computer vision techniques to screen children in their homes for developmental disorders and risk of mental illness.
The widespread availability of low-cost, high-resolution cameras has made video a large and rapidly growing source of information about human behavior.

#### Video enables behavioral science research, but poses special challenges

Video documents the interactions between people and their environment unlike any other form of measurement.
It captures when, where, and how they look, gesture, move, and communicate, and interact.
Because of these characteristics, video--and before that, film--has a long history in the study of learning and development [@goldman_video_2014; @curtis_tangible_2011; @adolph_observer_2016].
Video closely mimics the visual and auditory experiences of live human observers, so recordings collected by one person for a particular purpose may be readily understood and reused for a different purpose.
Capitalizing on the unique potential of large-scale video data collections, however, requires overcoming a set of challenges associated with sharing video data.

**Videos contain personally identifiable information; this poses problems for the protection of participant privacy**.
For many years, policies have existed for sharing de-identified text-based data that if disclosed would pose risks to participants or violate their privacy [@NIH_HIPAA].
Video inherently contains identifiable information--faces, voices, spoken names, interiors of homes and classrooms--and removing identifiable information from video severely diminishes its value for reuse and puts additional burdens and costs on researchers.
Therefore, video sharing requires policies that protect the privacy of research participants while preserving the integrity of raw video for reuse by others (see pp. X-X).

**Large file sizes and diverse formats present technical challenges**.
Video files are large (one hour of HD video can consume 10 GB of storage) and come in various formats and sources (from cell phones to high-speed video).
Many studies require multiple camera views to capture desired behaviors from different angles.
The cameras and other data streams must be synchronized for detailed analysis.
Thus, sharing videos requires substantial storage capacity and significant computational resources for transcoding videos into common formats that can be preserved over the long term and for synchronizing multiple data streams.

**Video sharing poses practical challenges of data management**.
Researchers report lacking time to find, label, clean, organize, and copy their files into formats that can be used and understood by others [@ascoli_ups_2006].
Most researchers lack training and expertise in standard practices of data curation [@gordon_researcher-library_2015].
Study designs and lab data management practices vary.
Few researchers reliably or reproducibly document workflows or data provenance.
Video requires minimal metadata to be useful with the exception of participants' data sharing preferences.
When researchers do share, standard practice involves organizing data after a project is finished, perhaps when a paper goes to press.
This "preparing for sharing" after the fact presents a difficult and unrewarding chore for investigators, one that often exceeds the incremental cost and reasonable time frame contemplated under NSF's Data Sharing Policy [@nsf_data_sharing].
It also makes curating datasets a challenge for repositories [@gordon_researcher-library_2015].

**Technical and practical challenges involved in extracting behavioral patterns from videos present barriers**.
Videos contain rich and diverse information that requires time-consuming work by human observers to extract.
Researchers capture patterns in video by using paper and pencil or computerized coding software that helps translate observations into quantitative data.
In principle, these human-applied codes could be reviewed and built upon by other researchers.
In practice, video-coding tools employ largely incompatible data formats.
The coding files are not easily and rarely shared with other researchers outside the original team.
As a result, the hard-won, expensive-to-acquire human insights about research videos remain largely hidden to the greater scientific community.

#### Results from prior NSF support
<!--I think there are more specific things we have to say here, as required by the GPG for grantees that have had prior nsf funding in the past five years.

(iii)	Results from Prior NSF Support
http://www.nsf.gov/pubs/policydocs/pappguide/nsf13001/gpg_2.jsp
If any PI or co-PI identified on the project has received NSF funding (including any current funding) in the past five years, information on the award(s) is required, irrespective of whether the support was directly related to the proposal or not. Funding includes not just salary support, but any funding awarded by NSF. Each PI and co-PI who has received more than one award (excluding amendments) must report on the award most closely related to the proposal. The following information must be provided:

(a)	the NSF award number, amount and period of support;
(b)	the title of the project;
(c)	a summary of the results of the completed work, including accomplishments, described in two separate sections, related to the Intellectual Merit and Broader Impact activities supported by the award
(d)	publications resulting from the NSF award;
(e)	evidence of research products and their availability, including, but not limited to: data, publications, samples, physical collections, software, and models, as described in any Data Management Plan; and
(f)	if the proposal is for renewed support, a description of the relation of the completed work to the proposed work.

Reviewers will be asked to comment on the quality of the prior work described in this section of the proposal. Please note that the proposal may contain up to five pages to describe the results. Results may be summarized in fewer than five pages, which would give the balance of the 15 pages for the Project Description.-->

Mindful of these challenges but motivated by the scientific promise of video data sharing, the PIs established databrary.org, the first-of-its-kind library for storing and sharing video data and associated metadata.
Databrary was created with support from NSF (BCS-1238599) and NICHD (U01-HD-076595) and has garnered additional funding from the Society for Research in Child Development.
Databrary has created a secure platform for storing and sharing research videos in the developmental and learning sciences in order to foster widespread data reuse and to enhance scientific transparency.
Databrary targeted the developmental and learning sciences community that is the PI's intellectual home.
But, the team specifically designed Databrary to be adapted for and used by other researchers in the behavioral sciences.

Databrary began public operation in the spring of 2014.
The library has since grown to encompass 269 authorized investigators [@databrary_investigators] and 147 affiliate investigators from 165 institutions [@databrary_institutions] around the world.
These investigators have contributed more than 3,600 hours of video or audio recordings, representing some 3,400 participants ranging in age from 6 weeks to middle age.
The system stores 165 volumes or datasets, of which 55 are currently shared with the community of authorized researchers or with the public.

Databrary permits users to upload, store, organize, and share data with collaborators, the restricted community of authorized Databrary users, or the public, depending on the level of sharing permission granted by participants.
Users may also search for, browse, view, and download videos stored on the site.
They may view specific characteristics of videos such participant ages or recording context (e.g., home, lab, or school) for recoding and reanalysis.
Databrary empowers users to stream in the browser or download highlights--video excerpts that can be shown for educational or research purposes.
Thus, Databrary supports sharing, reanalysis, and pre/non-research uses of video  while solving some of the thorniest problems associated with sharing identifiable recordings with personally identifiable information.

##### Databrary's policies enable the sharing of identifiable data

Sharing research video demands policies for sharing identifiable data in ways that securely protect participants' privacy.
Databrary does not attempt to de-identify videos.
Instead, Databrary maximizes the potential for reuse by keeping recordings in their original unaltered form.
To make unaltered raw videos available to others, Databrary's two-pronged access model (a) restricts access to researchers who register and secure formal authorization from their institutions [@databrary_agreement] while (b) enabling access to identifiable data only with the explicit permission of the participants.
Databrary has created template language [@databrary_release] for seeking participants' permission to share data that researchers may adapt for their own use.
These policies are spelled out fully in an online user guide [@databrary_policies].
Unique among data repositories, the Databrary Access Agreement [@databrary_agreement] authorizes both data use and contribution.
However, users agree to store on Databrary only materials for which they have ethics board or IRB approval.
Data may be stored on Databrary for the contributing researcher's use regardless of whether the records are shared with others.
When a researcher chooses to share, Databrary makes the data available to the community of authorized researchers.
More than 160 institutions in North and South America, Europe, Asia, and Australia have agreed to Databrary's framework, and the number grows daily [@databrary_institutions].

##### Databrary overcomes technical barriers to video data sharing

To address the problem of diverse video formats, Databrary automatically transcodes each recording using NYU's high performance computing services into a common format suitable for web-based streaming (currently H.264+AAC in MP4 for video).
The system maintains a copy in the original format for long-term preservation.
To address file storage limitations, Databrary does not currently place limits on the number or size of files that can be uploaded.
As a web-based application fully compatible with modern web-browsers, Databrary does not require special software for access.
Databrary's current assets total 17TB and are stored on NYU's central IT storage which provides one off-site mirror and regular long-term tape backups.

##### Databrary's design overcomes practical barriers to sharing

Databrary has developed a novel active-curation framework that reduces the burden of post hoc data sharing [@gordon_researcher-library_2015].
The system empowers researchers to upload and organize data as it is collected.
Immediate uploading reduces the workload on investigators, minimizes the risk of data loss and corruption, and accelerates the speed with which materials become available.
Databrary employs familiar, easy-to-use spreadsheet and timeline-based interfaces that allow users to upload videos, add metadata about tasks, settings, and participants, link related files like coding files and manuals, and assign appropriate permission levels for sharing.
To encourage immediate uploading, Databrary provides a complete set of controls so that researchers can restrict access to their own labs or to other users of their choosing.
Datasets can be shared with the broader research community at a later point when data collection and ancillary materials are complete, whenever the contributor is comfortable sharing, or when journals or funders require it.

Active-curation poses no new burdens on researcher's time beyond current practices while offering significant benefits.
In effect, Databrary acts as a researcher's personal lab file server and cloud storage, enabling web-based sharing among research teams and ensuring secure off-site backup.

<!-- Add section about community outreach?-->

#### Remaining barriers this project will overcome

Despite Databrary's substantial advances in a short period of time, barriers to widespread video data sharing remain.
Most pressing are the difficulties associated with sharing, finding, understanding, retrieving, and building upon other researchers' codes.
So, we will enhance Databrary to allow the information contained in coding files and manuals to be uploaded, integrated with, visualized, shared, and downloaded from the library.
This will enable new, integrative, multidisciplinary research that is at present difficult, time consuming, and prohibitively expensive to conduct.
We describe implementation details in the next section.

### Implementation Plan

The implementation plan consists of four main projects aligned with the specific aims.
The sections below describe the main phases in general terms, with specific technical details provided in the Technical Plan addendum.
**Figure X** in that addendum depicts the project timeline.

#### Project 1: Code import, representation/visualization, and export

Project 1 focuses on importing coding files from the leading software coding tools used by developmental scientists, representing codes within Databrary, and exporting coding files in their native formats.
Despite significant variation across video-coding tools, most behavioral codes consists of a start time, an optional end time, and an associated value which may be a simple string or other data structure.
Coding files typically consist of one or more arrays of these codes, organized into separate, possibly hierarchical or nested "passes".
Databrary's existing data model includes an internal representation that allows users to apply multi-valued record data representing concepts such as depicted individuals or tasks to temporal segments of specific videos.
We will extend this foundation in building the coding-related capabilities that constitute Project 1.

As described in the technical plan, Co-I and Databrary Systems Architect Simon has extensive experience developing and deploying databases of the sort required to implement these features.
Simon also has available to him the resources of NYU's Digital Libraries staff through the contributions of Co-I Millman, including experts in data repositories, databases, and system administration.

##### Project 1.1: Import and export Datavyu coding files

We will start by making Databrary capable of importing spreadsheets generated by Datavyu (datavyu.org), the free, Java-based, multi-platform open-source video coding tool maintained by Databrary and supported by PI Adolph over many years.
Some 6 volumes or datasets on Databrary representing 230 video sessions contain spreadsheets coded in Datavyu.
The Datavyu file format is well-known to the Databrary team.
Reading Datavyu spreadsheet files will be a demonstration case for projects (1.2 - 1.6) focused on other data formats.
We will also build functionality to export codes in the Datavyu format.
At present, a user who downloads a Databrary volume containing videos with linked Datavyu files must manually re-link the video files to the coding file.
By developing capabilities within Databrary to read and write information to Datavyu files, we will eliminate this time-consuming step.
Datavyu has hundreds of users in the developmental community [@gilmore_video_2016], so enabling Datavyu import and export should have a significant impact on a large portion of the developmental science research community.

##### Project 1.2: Import ELAN coding files

ELAN [@ELAN_2016] is a free video and audio annotation tool developed by researchers at the Max Planck Institute for Psycholinguistics in the Netherlands.
It has special features that enable researchers who use it to encode language features from phonetics to pragmatics.
Han Sloetjes, one of the lead developer on ELAN, has agreed to serve on the TAC and assist the project team to overcome hurdles involved in importing and exporting ELAN files.
ELAN, like Datavyu, is built in Java, and the ELAN team has already consulted with the Databrary and Datavyu staff on challenges both tools face in importing and playing diverse video formats.
Import/export tools currently exist for converting ELAN files to and from the CHAT format used in CHILDES, TalkBank, and HomeBank (see Project 1.3 below).
ELAN coding data includes significantly more structure than Datavyu, including hierarchical and linked coding passes (called tiers), but we expect the basic coding information from ELAN files to be extractable, and simple versions to be exportable in the ELAN format.
Project staff will build on existing relationships and technical knowledge in developing ELAN import/export features for Databrary.
According to our survey and ELAN's internal data, hundreds of researchers in the developmental and language science communities use the tool and thus stand to benefit from the ability to share videos and coding files with Databrary.

##### Project 1.3: Import and export CHAT files

TalkBank [@talkbank_site] is a collection of language-related databases that include transcripts, audio, and video data from children and adults.
Many of TalkBank's audio or video files are linked to text-based transcripts in the CHAT format [@CHAT_files_2015], developed for the Child Language Data Exchange System (CHILDES) Project.
CHAT files can be used with the Computerized Language ANalysis (CLAN) [@CLAN_2016] suite of software tools, a recognized standard in the language community.
CHAT files are especially valuable because the format encodes speech transcripts, among other data.
CHAT is the dominant data format among language science researchers, and the format is a leader in interoperability with other language-related analysis tools.
TalkBank's founder and coordinator, Dr. Brian MacWhinney, serves on the Databrary advisory board and has agreed to serve on the TAC for the current proposal.
MacWhinney will work with project staff and PIs to enable CHAT-format transcripts linked with video or audio recordings to be imported into Databrary.
CHAT files are well structured; the file specification is open and known; and Databrary staff have already done some preliminary work with CHAT-format transcripts.
However, CHAT files are unique in that transcription data are not directly linked to specific temporal codes.
Rather, specific points in the transcription text can be associated with points in the video or audio time stream.
For this reason, the CHAT format may have unique restrictions on which files can be imported and exported.

Support for CHAT-formatted transcripts is essential for interoperability with the NSF-funded HomeBank data archive project.
Homebank focuses on collecting a large corpus of natural speech using the LENA [@LENA_foundation] recording device, linked with CHAT-formatted transcripts.
Databrary serves as a consultant on the HomeBank project, and works closely with its PIs, Dr. Anne Warlaumont (UC Merced), Dr. Mark VanDam (Washington State University), and Dr. Brian MacWhinney.
The leadership of both projects has made interoperability among the datasets an important priority given the considerable overlap in our research communities and the potential for multi-level, interdisciplinary research that could result.
LENA files are stored in a fairly well documented XML format that our HomeBank colleagues have already gained working familiarity with.
Databrary staff will build on our colleagues' expertise and contacts in developing CHAT-compatible features for Databrary.
MacWhinney estimates that more than 100 investigators active on TalkBank use video, and we have several active Databrary users who have previously requested support for CHAT-formatted files.
In addition to meeting the needs of a substantial existing community of researchers, enabling support for CHAT on Databrary will create an opportunity to enhance an existing video dataset that is already shared with Databrary [@demuth_phonbank] and which has CHAT-formatted transcript data available on TalkBank [@demuth_talkbank].

##### Project 1.4: Import and export files from Transana

Transana [@transana_2016] is an open source software package used by researchers in the educational, learning, and developmental sciences to analyze digital video and audio.
Earlier phases of the Transana project received support from both NSF and the TalkBank project at Carnegie Mellon.
Dr. David Woods, Transana's lead developer, has agreed to serve on the TAC.
Transana already enables the full export of project codes and related metadata into an open XML format.
Interoperability with CHAT, ELAN and other language-specific file formats can be achieved via a third-party tool [@transformer_software].
Transana offers multi-user versions for lab groups who want to share and collaborate on coding audio or video files and a fee-for-service cloud storage feature.
Its capabilities extend well beyond video coding features, but the applicants expect that restricted import and export functions for Transana files can be added to Databrary.
Transana's popularity among a large number of education researchers, including some existing Databrary users, gives the project team confidence that the proposed enhancements will have an impact on a substantial research community.

##### Project 1.5: Import and export Mangold Interact files

Mangold Interact [@mangold_interact] is a commercial video annotation tool used by more than 20% of respondents in our recent survey [@gilmore_video_2016].
Alongside its video collection, coding, and analysis software Mangold develops, sells, and supports integrated hardware and software laboratories for video and audio-based behavioral analyses.
Pascal Mangold, founder of Mangold International, has agreed to serve on the TAC.
Mangold Interact has several features the project team hopes to exploit in developing import and export functionality for Databrary.
The software has a user-scripting function that enables coding files to be exported in a variety of formats for subsequent data analysis.
It stores study/project-level metadata separately from session-specific data, and allows users to create coding templates that contain structured representations of coding definitions.
Project staff will work with Mangold and his experts first to enable uploading and downloading of Mangold Interact files.
We will then strive to develop tools that import and export these coding files in their native formats, or, in the worst case import files that have been exported by the Mangold software into an open, text-based (CSV or XML) format.

Beyond the project team's desire to serve an important segment of the research community, Databrary staff believe that import/export functionality for Mangold Interact is important for another reason.
One of the largest (*N*=344 participants, 1,344 sessions) and most diverse video datasets currently stored and shared on Databrary comes from an NSF-funded longitudinal study led by Catherine Tamis-LeMonda [@Tamis-LeMonda_data].
Tamis-LeMonda has Mangold Interact coding files linked to the videos which can be shared with Databrary.
Successful implementation of Mangold Interact import functionality should make it possible to store and share these coded spreadsheets with Databrary alongside the already-shared videos, thus augmenting the current value of the data.

##### Project 1.6: Import Noldus Observer XT files

Noldus Observer XT [@noldus_2016] is a commercial software package produced by Noldus Information Technology that is specialized for the collection, coding, and analysis of audio, video, eye tracking and physiological data streams.
Noldus, like Mangold, develops, sells, and supports complete integrated hardware and software packages for multi-measure behavioral analyses.
Niek Wilmink, Product Portfolio Manager at Noldus, has agreed to serve on the TAC.
Noldus Observer XT files are in a proprietary format, but supports exporting codes and short code definitions into a Microsoft Excel spreadsheet.
Project staff will work with Wilmink and the Noldus team to build support within Databrary for uploading and downloading coding files and templates.
With support from Noldus, project staff will investigate the feasibility of importing Noldus files from their native formats and exporting them in native formats.
In the worst case, Databrary will build functionality to import files that are exported by the Noldus software into an open or easy-to-read format, like the Excel spreadsheet format used by the coding template export function.
Hundreds of researchers in developmental science, human factors research, ethology, and market research use Noldus, so the proposed Databrary enhancements will have widespread impact.

#### Project 2: Timeline interface for viewing/selecting coding passes

Project 2 focuses on improvements to Databrary that make it easier for users to visualize what codes have been applied to shared sessions and by which researchers, explore these codes in conjunction with the videos, and upload new coding passes to their own sessions.
After a user has selected a particular session of interest, Databrary should enable visualization of existing coding passes linked with a testing session.
Databrary should support basic visualization and manipulation of these passes, so that users can preview the codes, select a subset of passes to download, or upload updated versions.

##### Project 2.1 User interface for displaying data about code sources

Databrary has already implemented a timeline interface (**FIGURE**) that allows users to visualize temporal relationships among multiple phases of a data collection (e.g., parallel data streams or multiple camera views).
Staff will augment this interface to allow users to visualize the different types of codes that have been applied to a particular session.
The interface will allow users to select or deselect specific code so only those codes of interest are displayed.
The interface will also support selective downloading of selected coding passes and the associated videos.
We will adopt an iterative UI/UX design approach for this project and other UI/UX related efforts.
The PIs and project staff will generate requirements for the interface.
A functional specification document with wireframes will be developed and reviewed, and the developers will implement and continue to iterate the design.
The project team will seek input from users, the TAC (Appendix A) and from the Databrary Advisory Board about the implemented design and revise it as necessary.

#### Project 3: Entering rich, text-based code definitions

This project involves enhancing Databrary's capacity to edit, represent, and export code definitions as coding manuals, and base these manuals on coding imports for a selected subset of coding tools.
The definitions will be indexed by the Databrary search engine, and thus become searchable metadata.
Sixty-three percent of developmental researchers who responded to our survey [@gilmore_video_2016] report they "always" create detailed coding manuals that define behavioral codes associated with a particular study's set of analyses.
Respondents most often report creating these manuals using word processing or spreadsheet software.
Consequently, we know that code definitions are widely available in electronic form and that many researchers want to share them.
We need ways to capture and organize the current idiosyncratically formatted information.

##### Project 3.1 Make existing Databrary functionality for storing coding manuals more salient to users

Databrary currently allows users to upload materials that apply across a study (such as coding manuals, data files, and sample images) in word processing, spreadsheet, PDF, and other formats.
Relatively few researchers use this capability now to upload coding manuals, but some may not understand how doing so enhances the value of a shared study to others.
The team will make changes to the site's text and design so that users are encouraged to upload coding manuals early in the research process.

##### Project 3.2: Design back-end representation of coding manual information

Although coding manuals are useful, unless the information contained in them can be extracted and linked to a dataset, their value is reduced.
Because parsing coding manual documents in varied and unstructured formats poses a serious challenge, we will start with a simpler approach.
Staff will enhance Databrary's back-end data model and front-end interface to allow code definitions and other information contained in coding manuals to be entered manually into a structured set of fields.
Project staff will need to modify Databrary's data model to allow the additional coding manual text to be associated with particular datasets.
With the exception of transcripts, most codes consist of simple values such as strings or numbers.
Researchers can compare code definitions across shared datasets to evaluate their clarity and consistency or initiate conversations among colleagues about opportunities to achieve consensus around conceptual ontologies.
This will also lay the groundwork for potential future enhancements to Databrary that involve linking code definitions to specific codes.

##### Project 3.3: Design user interfaces for uploading and visualizing coding manual information

Coding tools vary in the extent to which they capture and store code definitions.
For example, Datavyu does not currently store code definition information.
CHAT-formatted files employ a structured set of well-defined keywords that describe the content of speech transcripts and other metadata such as the speaker and context, and user-defined codes that are usually tagged as comments.
Transana, Mangold Interact, and Noldus Observer XT allow code definition information to be stored within the coding files or in linked files, but the tools limit the amount of text stored in code description fields.
As a result, even when a tool stores brief code definitions, researchers regularly augment them with more elaborate definitions contained in coding manuals.
Project 3.3 will design the interfaces that capture code information from both sources.

For tools that store definitions in the coding files, staff will build upon the coding file import functions developed as part of Project 1.
Developing an interface for users to enter code-specific information stored in coding manuals poses a bigger challenge.
The team has begun to collect sample coding manuals from volunteers who responded to our community survey.
These samples will shape the design of interfaces for uploading code definitions to Databrary.
Once code-specific information has been entered into Databrary, we will need to make available interfaces that allow users to view and edit the information.
In the best case, a subset of this coding information may be able to be exported along with codes to supported coding tools' data packages.
This will depend on the extent to which we are able to read from and write to native file formats.
The same iterative design and implementation process employed elsewhere will be used here.

#### Project 4: Search interface and functionality

Project 4 will focus on designing, implementing, testing, and polishing the user interface that returns video search results in powerful, flexible, and informative ways.
The project will also develop the back-end and user interface components that allow users to view, explore, and download clips of the videos they have found through search.

##### Project 4.1: Design search interface

Databrary's existing search interface returns text-based information about datasets--title, authors, a short description-- and thumbnail image information about users or institutions.
A search interface will need to be designed that returns information about which datasets or videos meet specific search requirements, including whether coding files are available and in what formats, whether coding manuals are available, and possibly specific codes within coding files.
Ideally, the interface would allow users to preview videos, possibly by clicking on thumbnail images.
The interface should allow a user to select and explore specific datasets or individual videos returned by the search.
The design of the search interface poses some complex problems that will be informed by work on Projects 1-3.
As a result, we plan to begin the design process early in the project but expect implementation to depend on progress in the other projects.
The same iterative design approach used elsewhere will be employed here.
We note that the Databrary team has at its disposal the expertise of Lee Giles, who sits on the Databrary Advisory Board, and Vasant Honavar who has agreed to serve on the project's TAC.
Both of these computer scientists have extensive experience in search, big data, and data mining.

### Coordination and Management Plan

The project will be overseen by the PIs, Gilmore and Adolph, with guidance from the Co-Is, Millman and Simon.
Simon also serves as Technical Director (see Appendix X: Technical Plan).
Gilmore and Adolph currently meet via phone or video conference several times each week to discuss Databrary project-related business matters with the Co-Is and with project staff.
Adolph and Gilmore collaborate on most decisions and regularly seek input from the Co-Is, but as overall Project Director, Adolph has the final say.
The Databrary project as a whole is and will be managed by a project manager, responsible for coordinating staff meetings and other internal decision processes, and reporting progress and getting feedback from the PIs.
This individual also is responsible for including coordinating and scheduling tasks, managing staff, integrating feedback from users and other external reviewers, and coordinating outreach, support, and documentation efforts.

In addition, the Databrary project as a whole has input from an advisory board.
The board (see Appendix X) consists of experts internal to PSU and NYU and external advisers who bring expertise in data sharing and developmental science.
The Databrary advisory board meets annually to hear project updates and provide guidance about policy and technical matters.

Because of the unique nature of this proposal, we have assembled a technical advisory committee (TAC) consisting of representatives from the leading video data coding software tools used by the developmental and learning sciences research communities (See Appendix X).
These advisors have agreed to provide technical assistance to the project staff via email, phone, or video conference for up to 1 hour per month.
The advisors have also agreed to participate in a half-day webinar meeting held annually in each of the three years of the proposed project period.

#### Evaluation and Assessment

We will evaluate progress on the project in several ways.
The PIs will report our progress for each of the specific projects, relative to the goals outlined in the timetable (Appendix X: Technical Plan) in the required annual project report.
Among other metrics, we will report the number of Databrary users who are sharing coding files and manuals, by coding tool used.
We will also develop estimates of data reuse based on download statistics.
The team will send out surveys to Databrary users once a year to solicit feedback about system operations, focusing on new features, and asking users the extent to which the new features change their willingness to share data, the ease of doing so, and the attractiveness of reusing others' data.
With the cooperation of our technical advisory team members, we will surveying the community of video coding tool users to ask similar questions.
The results of those surveys will be summarized in the annual NSF report and discussed at the annual Databrary advisory board meetings.

### Summary

Multiple barriers limit the adoption of video data sharing in the developmental and learning sciences.
With only a few years of operation, the large-scale, next-generation Databrary digital library has overcome many of these barriers, becoming an invaluable research resource for hundreds of developmental scientists.
The current proposal will enhance Databrary, making it possible for contributors to upload, store, and share the results of human-generated annotations of video segments along with text-based code definitions.
The data and metadata will accelerate the opportunities for users to reuse and build on the detailed annotations provided by other researchers.
The enhancements will catalyze new types of data-intensive cross-cutting research across multiple fields in the social, behavioral, and economic sciences and allied domains.

#### Intellectual Merit

The project will add significant value to an existing next-generation data resource for video-based behavioral research by integrating a previously inaccessible set of expertly coded and micro-detailed annotations describing the data.
The new sources of data will be made accessible in a variety of formats for reuse, allowing researchers to work with the tools of their choice that are best suited to their research questions and analyses.
Increased interoperability among codes will enable new multidisciplinary research questions to be asked based on existing, already collected and shared video data.
By incorporating annotations and code definitions, the enhancements will enable Databrary users to readily seek, find, reuse, and build on shared video data.
The project will thereby create new opportunities for integrative and multidisciplinary research that is at present prohibitively expensive or impossible.

#### Broader Impacts

The proposed enhancements will make datasets shared on Databrary, many of them previously funded by NSF and NIH, more findable, accessible, interoperable, and reusable [@_fair_2014].
The project will have impacts across the behavioral, social, biological, and educational sciences that collect video data.
The enhancements expand opportunities for scientists at institutions with limited research resources to participate in scientific discourse about human behavior by building on the expensive-to-collect data gathered by others.
Because many institutions with limited resources resources serve students from underrepresented groups, the proposal will expand research opportunities for them as well.
By making data sharing more attractive to scientists, the project will increase the quantity and quality of shared video datasets.
By making coding files and manuals more readily shared, the project will improve scientific transparency and boost reproducibility.
Finally, the project will raise the profile of video-based research and bolster interest in and support for the behavioral sciences among the public at large.

## REFERENCES
