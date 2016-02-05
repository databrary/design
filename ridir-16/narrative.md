# Making the Hidden Visible: Searching Within Video Data

## PROJECT SUMMARY

## PROJECT DESCRIPTION

The widespread capacity to search databases connected to the internet has begun to transform scholarship.
Researchers may search Google Scholar with just a few snippets of information about an author or topic and within seconds have returned to them a list of links to publications that match the terms.
Each of the links targets a specific journal article, where, depending on one's institutional affiliation and the type of journal, the user might begin to read the full paper and examine the figures and tables.
Other types of search allow scholars to seek specific images or videos for teaching or demonstration purposes.
Indeed, the development and application of new image analysis techniques from computer vision, focused on the automated indexing of large datasets of static images, have become a priority for the providers of large scale image and video databases (Google, Microsoft, Facebook).
These profound changes that search engines have brought to literature research and teaching have have left largely untouched the process of gathering data for researchers in many fields.
With few exceptions (Gilmore, in press), a behavioral scientist who searches for previously collected datasets to analyze or build upon will rarely find Findable, Accessible, Interoperable, and Reuseable (FAIR) data (reference FAIR data principles).
That is, despite significant growth in the number and diversity of repositories (OSF, Databrary, Dataverse, ICSPR, FigShare) devoted to sharing data and increased interest in and focus on promoting open, transparent, and reproducible scientific practices in the behavioral sciences (Science, 2015), data human behavior remains hard to find, access, use without proprietary software or knowledge, and repurpose to answer new questions.
This proposal seeks support for specific enhancements to the Databrary (databrary.org) digital library that will make it easier for researchers who use video and audio recordings to study behavior, to find, access and reuse relevant segments by making the library interoperable with the dominant software tools used today by human coders for annotating video.

Video constitutes a primary means of recording behavior in home, lab, classroom and museum settings for hundreds of researchers in the developmental and learning sciences.
Its popularity arises in part because video powerfully depicts the ways that behavior unfolds in real time and how it changes across development.
High quality video can be collected with inexpensive devices available to most researchers, including those who lack substantial resources for research.
Further, video collected for one purpose can be readily re-used for other purposes beyond those envisioned by the original researchers (e.g., Raudies et al. 2012; Gilmore et al. 2015; others).

To characterize and quantify behavioral patterns in video requires that researchers apply text or numeric codes to segments of video.
Most researchers use paper and pencil, spreadsheet software, or tools specialized for coding video (Gilmore & Adolph, 2016) for this purpose.
A recent survey of the developmental science community by the applicants (Gilmore & Adolph, 2016) suggests that the majority of researchers collecting video use or have used one or more specialized video coding tools (Datavyu, ELAN, Mangold Interact, Noldus Observer, Transana).
These tools enable specially trained cadres of research assistants to move backwards and forwards through digital videos at varied speeds of playback and apply annotations or codes to selected points or segments in time.
The annotations are saved electronically, time-locked to the video segments to which they apply.
Thus coded, the data files contain information about who did what when, and sometimes for how long.

Some labs make multiple passes through the same videos, extracting new information with each pass.
The passes may be represented as new columns in special-purpose spreadsheets or new timelines or tiers of annotations.
These codes form the basis of subsequent quantitative and qualitative analyses that researchers later report in journal articles, talks, and presentations.
To ensure reliability, reproducibility, and robustness of results, most researchers (Gilmore & Adolph, 2016) augment the codes with rich, textual descriptions of the behaviors of interest, codified in formal coding manuals that are usually saved in word processing or spreadsheet formats.
Taken together, the coding files and coding manuals contain invaluable, expensive-to-acquire, human-validated, text-based information about the contents of raw video recordings.
More important, they provide the foundation for searching *within* videos for specific codes or behaviors.

It appears relatively straightforward then to conclude that behavioral science research would be substantially advanced if researchers shared their videos, coding files, and coding manuals with other researchers.
Indeed, the Databrary (databrary.org) digital library was created by the applicants with support from NSF (BCS-1238599) and NICHD (U01-HD-076595) to realize this exact vision.
Despite the progress the Databrary project has made in overcoming the technical, policy, and practical barriers to widespread sharing of research video (see section X, pp. X-X) notable barriers remain.

The ability to search across a coded video for specific codes is offered by most of the specialized tools works well for researchers who share the same laboratory and use the same tool.
But, the coding tools store data in incompatible native formats that are not readily interoperable, and so the hard-won information contained within the coding files remains locked away, its potential for reuse by others largely unrealized.

Databrary allows users to upload and share coding files, but only from one of the major specialized coding tools, the free, open source Datavyu (datavyu.org) which the Databrary team also develops and maintains.
Still the Databrary system cannot read effectively the information contained in Datavyu files, making those codes inaccessible without downloading both video and coding files.
Databrary allows users to upload and share coding manuals in Microsoft Word, Excel, PDF, or text-based formats.
But, Databrary lacks the capacity to search within those coding manuals for key terms or code definitions.

Databrary currently allows users to search across the library for datasets matching specific characteristics or terms, but the system cannot return results based on information within the videos themselves.
Thus, even while a video might contain examples of child speech and mother speech, and Databrary might contain a coding file that marks those segments time-locked to the video, a user cannot search effectively for the segments.

Accordingly, we propose to expand the Databrary digital library's capabilities to enable search within videos using data and metadata about the videos that is locked away in coding files and coding manuals that are rarely shared and largely non-interoperable.
Doing so will move Databrary closer to realizing the ideal of representing a repository whose valuable data about human behavior is Findable, Accessible, Interoperable, and Reusable.
And, it will further accelerate the pace of video data sharing and reuse in the developmental and learning sciences, a field where there is a well-identified, substantial community of researchers who use video as a primary means of data collection.

The project has four aims.

### Project Aims

1. Design and implement a user interface and database structure that empowers authorized Databrary users to search for specific segments of video based on codes, tags, or keywords linked to those segments. Expand and extend Databrary's system for visualizing user-defined video codes.

Databrary currently allows users to search across collections of videos for selected terms.
We will design, implement, test, and refine back-end technologies and user interfaces that return within-video search results in ways that makes it easy for users to click on and preview video segments the search engine finds.
The interface will allow users to select and download selected segments for future reanalysis using the desktop video coding tools that are part of a user's current workflow.
Databrary will keep track of the source(s) of the selected videos and generate electronic "reference lists" of the materials a user searches for and copies (*maybe just for search results?*).
Databrary's existing "timeline" interface for depicting tagged video segments will be modified to allow users to display the sets of tags that have been applied to shared video sessions.
These features will make it easy for Databrary users to discover, preview, copy, and reanalyze video datasets that meet the specific requirements of their research question while keeping careful track of data sources and provenance.

2. Enable codes and annotations from selected existing video and audio coding tools to be imported into, visualized within, and searched across the Databrary digital library. Enable Databrary codes to be exported along with videos in an open format that may be imported back into existing coding tools.

Databrary currently stores spreadsheet files in a small number number of formats, but even if the files are well-structured, the information within them is not searchable.
Working closely with a technical advisory group from a selected subset of coding tool developers (see pp. X-X) commonly used by developmental researchers, Databrary will develop ways for users to upload coding spreadsheets linked to videos and make the codes available for visualization and search across the library.

Databrary will build the capacity to export imported codes back into their native formats wherever possible. In addition, we will support export into an open, text-based file format (probably XML, CSV, and/or JSON) that could in principle be imported back into any desktop tool that supported the format.
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

Technical challenges involved in searching the contents of videos present barriers to sharing.
Videos contain rich and diverse information that requires significant effort by human observers to extract.
Researchers make use of videos by watching them and, using paper and pencil or more automated computerized coding software, translating observations into ideas and numbers.
In many cases, researchers assign codes to particular portions of videos.
In principle, these codes make the contents of videos searchable by others. However, researchers focus on different questions from varied theoretical perspectives and lack consensus on conceptual ontologies.
So, in practice, most coded data are not easily shared. Although human-centered video coding capitalizes on the unique abilities of trained observers to capture important dimensions of behavior, machine learning and computer vision tools may provide new avenues for tagging the contents of videos for educational and developmental research (Amso, Haas, Tenenbaum, Markant, & Sheinkopf, 2014; Yu & Smith, 2013; Fathi, Hodgins, & Rehg, 2012; Google Research, 2014; Raudies & Gilmore, 2014).

#### The Databrary digital library overcomes these barriers

With support from NSF (BCS-1238599) and NICHD (U01-HD-076595), PIs Adolph and Gilmore and Co-Is Millman and Simon established Databrary.org, the first-of-its-kind library for storing and sharing video data and associated metadata.
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

This project will fill numerous gaps in current research workflows and reduce barriers that make open sharing of video data harder than it needs to be.
The project will expand upon Databrary's current search capabilities to enable
search within videos, not just across them.
This will make Databrary more useful to a wider range of researchers, and it will leverage the existing investments NSF and NICHD have made in creating the data library.
Within-video search depends upon enabling Databrary to import, store, and share coding files from the leading video coding tools used by researchers in the developmental and learning sciences.
This will contribute to the within-video search capability, and should lead to greater numbers of researchers registering for and using Databrary to share and reuse video data.
The project will make the leading video coding tools more readily interoperable with one another.
This will make it substantially easier for geographically dispersed researchers to share the burden of coding video and to collaborate on projects.
Since Databrary serves as cloud storage for videos and as the "lingua franca" that connects coding files, video coders can be located anywhere.
The existing video coding tools capture project/dataset and video-level data and metadata in different ways.
Developing the capacity to import and export coding files in the major tool formats will reduce the barriers to sharing and reuse posed by incompatible formats.
The project will enable interoperability among coding schemes used by different research groups to study the same phenomena.
This will move to standardize documentation practices and documentation formats for coding definitions, and as a result will make it possible for codes used by one research group to be compared with or built upon by other groups.

This project will facilitate long-term video data reuse and preservation by using Databrary's existing technology pipeline to transcode videos into common and presevable formats.
There are a huge number of video formats; most coding tools struggle to support all of them.
The increasing use of HD video poses additional problems for tools that offer forward/backward video playback at high speeds.
A common complaint is that the timestamping provided by a coding tool can change depending on the format of the video.
By transcoding videos into a common, web-compatible format on Databrary, we will make it easier for users to choose the coding tool that suits their research requirements.

The project will enhance the reproducibility and transparency of video-based analyses of human behavior, create infrastructure that embodies best-practices in video coding (Adolph XXX), and responds to identified needs among video-using developmental scientists (Results from follow-up survey; letters of support).

In turn, this project will enable new, integrative, multidisciplinary research that is at present difficult, time consuming, and prohibitively expensive to conduct.
(*Illustrative use case combining transcripts with annotations of emotion, action...*)
It lays the groundwork for future enhancements to Databrary that involve the integration and synchronization with video of other temporally dense data streams that are increasingly common in developmental research such as eye tracking, physiological measurements, kinematics.
The project also positions Databrary to take advantage of rapid developments in computer vision that focus on the automated or semi-automated tagging of static images or video segments.

### Implementation Plan

The implementation plan consists of four main projects aligned with the specific aims. The sections below describe the main phases in general terms, with specific technical details provided in the [Technical Plan](technical-plan.md) addendum. See Figure X in that addendum for a project timeline.

#### Project 1: Search interface and functionality.

This project will focus on designing and testing the user interface that that returns within and across video search results in powerful, flexible, and informative ways.
Project 1 will also focus on building the back-end capacity for Databrary's existing Apache solr-based search engine (see <technical-plan.md>) to return results from within video segments based on the information contained in imported coding files and coding manuals.
Finally, the project will develop both the back-end and user interface components that allow users to use the videos they have found through search.

##### Project 1.1: Design search interface

The PIs and project staff will gather requirements for the search interface, drawing upon the existing community of Databrary users by convening web-based focus groups, and UI/UX expertise available to the PIs through the Databrary project's advisory board.
A formal functional specification document with wireframes will be developed and circulated for feedback.
Working template versions will be developed and tested by staff and external advisers.
Once finalized, the developers will implement the approved design.

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

#### Project 2: Code import, representation/visualization, and export

This project focuses on importing coding files from a selected set of academic and commercial tools, representing and visualizing them within Databrary, and exporting them in both in their native formats and an open, non-proprietary format.
Despite significant variation across coding tool platforms, at one level, all of the codes we intend to import are relatively simple data structures.
Each code consists of a start time, an optional end time, and an associated set of alphanumeric characters.
Coding files consist of arrays of these codes.
Databrary's existing data model includes an internal representation that allows users to apply simple text-based tags to temporal segments of specific videos. We will build upon this foundation in building the coding file import capabilities that are part of Project 2.

##### Project 2.1: Import and export Datavyu coding files.

We will start by making Databrary capable of importing spreadsheets generated by Datavyu (datavyu.org), the free, Java-based, open-source video coding tool created by Databrary and Project PI, Adolph.
Some 6 volumes on Databrary representing 230 video sessions contain spreadsheets coded in Datavyu.
Internal download data, support forum comments, and our survey of the video-using developmental science community (Gilmore & Adolph, 2016) suggests that there are hundreds of laboratories using Datavyu.
The Datavyu file format is well-known to the Databrary team, and so making Databrary capable of reading Datavyu spreadsheet files will be a test case, demonstrating the feasibility of other projects (2.2 - 2.x) focused on other data formats.
Because Datavyu uses a known format, we will also add to Databrary the capability of exporting codes in the Datavyu format.
This is important, because at present, users who download videos from Databrary with linked Datavyu spreadsheets have to relink the files on their desktop computers.
Jesse Lingeman, lead Datavyu developer and Clinton Freeman, the original Datavyu developer, and current Databrary project consultant, will help guide the effort.

##### Project 2.2: Import ELAN coding files.

ELAN (https://tla.mpi.nl/tools/tla-tools/elan/) is a free video and audio annotation tool developed by researchers at the Max Planck Institute for Psycholinguistics in the Netherlands.
It is widely used in the psycholinguistics community, including respondents in our recent survey (Gilmore & Adolph, 2016), and has special features for language researchers who often use it to study language features from phonetics to pragmatics.
Han Sloetjes, Lead Developer on ELAN, has agreed to serve on the technical advisory team and assist the project team to overcome hurdles involved in importing and exporting ELAN formatted files.
ELAN is built in Java, like Datavyu, and the ELAN team has already consulted with the Databrary and Datavyu staff on challenges both tools face in importing and playing diverse video formats.
Import/export tools currently exist for converting ELAN files to and from the CHAT format used in CHILDES, TalkBank, and HomeBank (see Project 2.3 below).
Project staff will build on these existing links in developing ELAN import/export features for Databrary.

##### Project 2.3: Import and export CHAT files.

TalkBank (talkbank.org) is a collection of language-related databases that include transcripts, audio, and video data from children and adults.
Many of TalkBank's audio or video files are linked to text-based transcripts in the CHAT format, developed for the Child Language Data Exchange System (CHILDES) Project.
CHAT files can be used with the Computerized Language ANalysis (CLAN) suite of software tools, a recognized standard in the language community.
TalkBank's founder and coordinator, Dr. Brian MacWhinney, serves on the Databrary advisory board and has agreed to serve on the technical advisory committee for the current proposal.
Professor MacWhinney will work with the project staff and PIs to allow CHAT-format transcripts linked with video or audio recordings to be imported into Databrary.
CHAT files are well-structured; the file specification is open and known; and Databrary staff have already done some preliminary work with CHAT-format transcripts.
For these reasons, we believe that it will be relatively straightforward to allow Databrary to import and export CHAT-formatted annotations.  
Support for CHAT-formatted transcripts is essential for interoperability with the NSF-funded HomeBank data archive project that focuses on collecting a large corpus of natural speech using the LENA (http://www.lenafoundation.org) recording device, linked with CHAT-formatted transcripts.
Databrary serves as a consultant on the HomeBank project, and works closely with its PIs, Anne Warlaumont (UC Merced), X, and Brian MacWhinney, and the leadership of both projects has determined that interoperability is an important priority for both efforts.
The TalkBank technical staff have already developed a tool that converts the native LENA files into an XML format.
Databrary staff plan to adapt that tool for use with Databrary.

##### Project 2.4: Import and export files from Transana

Transana (http://www.transana.org/) is an open source software package that is used by researchers in the educational, learning, and developmental sciences to analyze digital video and audio.
Earlier phases of the project have received support from both NSF and the TalkBank project at Carnegie Mellon.
Transana's lead developer, David Woods, has agreed to serve on the project's technical advisory committee (see Appendix X).
Transana already enables the full export of project codes and related metadata into an open XML format.
Transana also offers multi-user versions for lab groups who want to share and collaborate on coding audio or video files and a fee-for-service cloud storage feature.

##### Project 2.5: Import and export Mangold Interact files

Mangold Interact (http://www.mangold-international.com/en/software/interact) is a commercial video annotation tool used by a significant fraction of developmental researchers (Gilmore & Adolph, 2016).
Alongside its video collection, coding, and analysis software Mangold develops, sells, and supports integrated hardware and software laboratories for video and audio-based behavioral analyses.
Pascal Mangold, founder of Mangold International, has agreed to serve on the project's technical advisory committee.
Mangold Interact has several features the project team hopes to exploit in developing the import and export functionality for Databrary.
The software has a user-scripting function that enables coding files to be exported in a variety of formats for subsequent data analysis.
It stores study/project-level information separately from session-specific data, and allows users to create coding templates that contain structured representations of some of the information users now store in separate coding manuals.
Project staff will work with Mr. Mangold and his experts first to enable uploading and downloading of Mangold Interact files.
We will then develop tools that import coding files that have been exported by the Mangold software into an open, text-based (CSV or XML) format.
Last, we will work with Mangold to explore the feasibility of importing and exporting Mangold Interact files in their native, proprietary formats.

Beyond the project team's desire to serve this important segment of the developmental and learning sciences research community, Databrary staff believe that import/export functionality for Mangold Interact is important for another reason.
One of the largest (n=344 participants, 1,344 sessions) and most diverse video datasets currently stored and shared on Databrary comes from an NSF-funded longitudinal study (http://doi.org/10.17910/B7CC74) led by Catherine Tamis-LeMonda.
Professor Tamis-LeMonda has available Mangold Interact format coding files, but has not yet shared these with Databrary.
Successful implementation of Mangold Interact import functionality will make it possible to store and share these coded spreadsheets with Databrary alongside the already-shared videos, thus augmenting the current value of the shared data.
(*Mention technical challenge of aligning video segments with coding files? What about staff time for curation?*)

##### Project 2.6: Import Noldus Observer XT files

Noldus Observer XT (http://www.noldus.com/human-behavior-research/products/the-observer-xt) is a commercial software package produced by Noldus Information Technology that is specialized for the collection, coding, and analysis of audio, video, eye tracking and physiological data streams.
Noldus also develops, sells, and supports complete integrated hardware and software packages for multi-measure behavioral analyses.
Niek Wilmink, Product Portfolio Manager at Noldus, has agreed to serve on the project's technical advisory committee (see Appendix X).

Noldus Observer XT files are in a proprietary format, but the software has the capability of exporting codes and short code definitions stored in coding template files into a spreadsheet (Microsoft Excel) format.
Project staff will work with Mr. Wilmink and the Noldus team to build support within Databrary for uploading and downloading coding files.
The next step will involve building the capacity for Databrary to import files that are exported by the Noldus software into an open or easy-to-read format, like the Excel spreadsheet format used by the coding template export function.
Then, with support from our Noldus partners, project staff will build functionality that allows Databrary to import Noldus files from their native formats into the Databrary back-end.

#### Project 3: Importing rich, text-based code definitions

This project involves enhancing the capacity of Databrary so that the rich, text-based descriptions of behavioral codes, formalized in coding manuals often (but not always) stored separately from coding files, can be imported into Databrary.
The text in the manuals will be indexed by the Databrary search engine, and thus become searchable metadata.

The vast majority of developmental researchers who responded to our survey (Gilmore & Adolph, 2016) regularly create detailed coding manuals that define behavioral codes associated with a particular study's set of analyses.
Respondents most often report creating these manuals using word processing or spreadsheet software.
Consequently, we know that coding manual information about videos is available; we just need ways to capture it systematically.

Project 3.1 involves the design of the back-end representation of coding manual information.
Project 3.2 involves the design of user interfaces for uploading coding manual information and for visualizing it within Databrary.
Project 3.3 involves developing a way of exporting coding manual information in an open format (CSV, XML, or JSON).

##### Project 3.1 Make existing Databrary functionality for storing coding manuals more salient to users

Databrary currently allows users to upload word processing, spreadsheet, PDF and other documents as Materials.
Relatively few researchers use this capability now to upload coding manuals.
So, the project team will explore design and styling changes to the site that make coding manuals visually distinctive when they are uploaded.
The team will also explore changes to the site's documentation, especially in the study design and active/self-curation portions, so that users are encouraged to upload coding manuals early on in the research process.
In turn, the project team will enable version control features on coding manuals, and possibly other documents stored as Materials so that users can revise and update coding manuals, but retain access to prior versions.

##### Project 3.2: Design back-end representation of coding manual information

To make shared coding manuals even more valuable, project staff must enhance Databrary's back-end data model in ways that allow information about specific codes contained in the manuals to be linked to information about the codes.
As mentioned in the context of Project 2, Databrary already has the capacity to associate text-based tags with temporal segments of video.
Project staff will need to modify the data model to allow the additional text available in the coding manuals to be associated with specific codes *across* a video and *across* an entire dataset.
These links are crucial because most *coding files* contain single alphanumeric characters.
Thus, in one context 'm' might mean 'mother is speaking' and in another 'm' might mean 'participant is manipulating an object'.
Only by linking richer, text-based descriptions to the specific codes can the search engine return meaningful results to a user who enters 'mother speaking' into a search box.
(*Do we need a conceptual figure here to show how this will likely work?*)

##### Project 3.3: Design user interfaces for uploading and visualizing coding manual information.

The target coding tools vary in the extent to which they capture and store code definitions.
Datavyu does not store code definition information at all.
CHAT-formatted files employ a structured set of well-defined keywords that describe the content of speech transcripts and other metadata such as the speaker, context, etc., and user-defined codes are usually tagged as comments.
Transana, Mangold Interact, and Noldus Observer XT allow code definition information to be stored within the coding files or in linked files, but there are often size limits on the amount of text that may be inserted into the code description or definition fields.
As a result, researchers who use these tools regularly augment the information about specific codes or coding schemes in external word processing or spreadsheet documents (Gilmore & Adolph, 2016).

For tools that store code-specific definitions in the coding files, the project team will build upon the import functions developed as part of Project 2.
Developing an interface for users to enter code-specific information stored in coding manuals poses a somewhat bigger challenge.
The team has already begun to collect coding manuals from volunteers who responded to our community survey.
Based on our initial assessment of these materials, we envision developing an interface that will sequentially display the codes imported into Databrary in one panel and the MS Word/text-file/spreadsheet coding manual in another panel. Users would then use cut and paste functions to populate the fields specific to each code.
This semi-automated solution is necessary because coding manual formats vary so widely in format and detail across research groups.
We will also consider the viability and utility of creating and encouraging the use of template coding manuals, as we have done for Data Management Plans (https://databrary.org/access/policies/dmp-template.html) and for Video Data Sharing Releases (https://databrary.org/access/policies/release-template.html).

Once code-specific information has been entered into Databrary, we will need to make available interfaces that allow users to view and edit the information.
One interface will need to allow users to view and edit the code definitions in a document-like form similar to a coding manual.
The interface will also allow users to export the coding manual definitions in open, interoperable formats (CSV, XML/HTML, JSON, or Markdown).
It will be easier to provide users ways to edit information stored in coding manuals than to enable users to edit code definition fields that are part of the data package associated with specific coding files in tools like Transana, Noldus Observer XT, and Mangold.
So, the extent to which users can edit or export information normally contained in these coding files or code templates will depend on the extent to which we are able to read from and write to native (or importable) file formats.

A second type of interface will be needed that allows users who are viewing a particular video in a specific session to view what codes have been applied to what segments of video.
Project 4 describes how we intend to tackle the problem of displaying the *sources* of the codes (coding file type, contributor, etc.).
This interface will likely build upon Databrary's existing video segment tagging feature, but it will have to include the ability to toggle on or off the visibility of individual code definitions, or the visibility of a separate "code definition" panel.
Consistent with other UI components of Databrary and this proposal, we will proceed iteratively in developing and testing these designs, guided by input from the Databrary advisory board, our technical advisory committee, and user feedback.

#### Project 4: Sharing codes, documenting the history of changes.

Project 4 focuses on improvements to Databrary that make it easier for users to visualize what codes have been applied by others to shared video, to share codes with other users, to distribute in time and space the burden of labor involved in human tagging of video, and to do so with mechanisms in place that provide version control over coding files and coding manuals/definitions.

##### Project 4.1 User interface for displaying data about code sources

Databrary has already implemented a timeline interface (*FIGURE*) that allows users to visualize temporal relationships among multiple phases of a data collection or data streams such as multiple camera views.
Project staff will augment this interface to allow users to visualize the different types of codes that have been applied to a particular video segment the source(s) of the codes (linked to specific users or Databrary volumes; provided using what coding tool), and perhaps information about the when the codes were last shared/revised (see Project 4.2).
In addition, the interface will allow users to select or deselect specific codes so only those codes of interest are displayed.
We will explore allowing users to change the display styling (color, font, size) and relative spatial position of the depicted codes to make visualization of the temporal relationships across codes more informative.

The same iterative UI/UX design approach adopted in other parts of the project (1.3, 2.x, 3.1, 3.3) will be employed here.

##### Project 4.2 Back-end modifications to track changes to uploaded coding files

We aim to make Databrary the home for ongoing video coding projects to reduce the burdens of uploading and curating data for sharing after a project is complete.
This requires that we modify Databrary so that it can track when new or modified coding files or coding manuals (Project 3.3) are uploaded and by whom.
Project staff will implement a form of coding file-level version control comparable to the dataset-level coding manual version control described in Project 3.3.
To do so, staff will modify Databrary's existing back-end auditing/event-reporting features and will develop ways to display version information to users.

A particular challenge this raises is how to track codes applied by Databrary users as part of a study that reuses or repurposes data collected and shared by another investigator.
We are in the early phases of designing back-end and UI/UX components that enable Databrary users to create their own studies from shared videos, but those details are not yet fully worked out.
So, at a minimum, we will provide and display version control information about coding files if those files were uploaded and shared by a researcher with write privileges on a dataset, in other words, the original data owner.

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
