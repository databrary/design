# Making the Hidden Visible: Searching Within Video Data

## PROJECT SUMMARY (1 p)

## PROJECT DESCRIPTION (15 pp)

The widespread capacity to search databases connected to the internet has transformed scholarship.
Researchers may search Google Scholar with just a few snippets of information about an author or topic and within seconds begin to digest a list of links to publications that match the terms.
Each of the links targets a specific journal article.
Most academic users may begin to read the full paper and examine the figures and tables by clicking on the relevant link.
Other types of search empower scholars to seek specific images or videos for teaching or demonstration purposes.
These profound changes that search engines have brought to literature research and teaching have have left largely untouched the process of gathering data for researchers in many fields.
With few exceptions (Gilmore, 2016), a behavioral scientist who searches for previously collected datasets to analyze or build upon will rarely encounter data that are Findable, Accessible, Interoperable, and Reuseable (FAIR) (reference FAIR data principles).
That is, despite significant growth in the number and diversity of repositories (OSF, Databrary, Dataverse, ICSPR, FigShare) devoted to sharing data and increased interest in and focus on promoting open, transparent, and reproducible scientific practices in the behavioral sciences (Science, 2015), data about human behavior remains hard to find, access, use without proprietary software or knowledge, and repurpose to answer new questions.
This proposal seeks support for specific enhancements to the Databrary (databrary.org) digital library that will make it easier for researchers who use video and audio recordings to study behavior to find, access and reuse relevant segments.
We will do so by making the library interoperable with the dominant software tools used today by human coders for annotating video and by electronically capturing and indexing these data and other metadata researchers already have at hand.

(*I still feel like the above is setting up a big problem (discoverability of datasets) and then not doing anything to actually address it, but instead proposing something that makes the problem worse (increasing fragmentation) without actually mentioning existing solutions (re3data.org).  If we're going to try to sell this as a discoverability problem, we need to build other things to try to address it.*)

Video constitutes a primary means of recording behavior in home, lab, classroom and museum settings for hundreds of researchers in the developmental and learning sciences and in other fields from anthropology to linguistics, ethology to human-computer interaction.
Video is popular largely because it powerfully captures behavior unfolding in real time and can depict how it changes across development.
High quality video can be collected with inexpensive devices available to most researchers, including those who lack substantial research resources.
Further, video collected for one purpose can be readily re-used for other purposes beyond those envisioned by the original researchers (e.g., Raudies et al. 2012; Gilmore et al. 2015; others), usually without the need for extensive metadata.

(*Doesn't it look bad only to be citing the PI's own papers? Or will a more thourough lit review follow?*)

To characterize and quantify behavioral patterns in video requires that researchers apply text or numeric codes to time-delimited segments of video.
Most researchers use paper and pencil, spreadsheet software, or tools specialized for coding video (Gilmore & Adolph, 2016) for this purpose.
A recent survey of the developmental science community by the applicants (Gilmore & Adolph, 2016 (*which publication are these referencing?*)) suggests that the majority of researchers collecting video use or have used one or more specialized video coding tools (Datavyu, ELAN, Mangold Interact, Noldus Observer, Transana) (*needs integrating with previous sentence*).
These tools enable specially trained cadres of research assistants to move backwards and forwards through digital videos at varied speeds of playback and apply annotations or codes to selected points or segments in time.
The annotations are saved electronically, time-locked to the video segments to which they apply.
Thus coded, the data files contain information about the behaviors of participants, including who was involved, what happened, when, and sometimes for how long.

Some labs make multiple passes through the same videos, extracting new information with each pass.
The passes may be represented as new columns in special-purpose spreadsheets or new timelines or tiers of annotations.
These codes form the basis of subsequent quantitative and qualitative analyses that researchers later report in journal articles, talks, and presentations.
To ensure reliability, reproducibility, and robustness of results, most researchers (Gilmore & Adolph, 2016) augment the codes with rich, textual descriptions of the behaviors of interest, codified in formal coding manuals that are usually saved in word processing or spreadsheet formats.
Taken together, the coding files and coding manuals contain invaluable, expensive-to-acquire, human-validated, text-based information about the contents of raw video recordings.
More important, they provide the foundation for searching *within* videos for specific codes or behaviors.

Clearly, behavioral science research across multiple fields would be substantially advanced if researchers shared their raw videos, coding files, and coding manuals with others (*is this clear?*).
The Databrary (databrary.org) digital library was created by the applicants with support from NSF (BCS-1238599) and NICHD (U01-HD-076595) to make this ideal a reality.
We describe our progress to-date below (pp. X-X), but note that several unresolved barriers stand in the way of widespread video data sharing.

The ability to search across a coded video for specific codes is offered by most of the specialized tools (*except Datavyu? I'm not even sure others do, either*) and works well for researchers who share the same laboratory and use the same tool.
But, the coding tools store data in incompatible formats so the hard-won information contained within the files remains locked away, its potential for reuse by others largely unrealized.
Databrary allows users to upload and share coding files, but cannot extract the information contained within these files, making those codes inaccessible without downloading both video and coding file, and having the appropriate coding tool.
Databrary allows users to upload and share coding manuals in Microsoft Word, Excel, PDF, or text-based formats, but lacks the capacity to search within those coding manuals for key terms or code definitions.
Databrary currently allows users to search across the library for datasets matching specific characteristics or terms, but the system cannot return results based on information within the videos themselves.
Thus, even while a video might contain examples of child speech and mother speech, and Databrary might contain a Datavyu coding file that marks those segments time-locked to the video along with text-based transcripts, a user cannot efficiently find the segments.

Accordingly, we propose to expand the Databrary digital library's capabilities to enable search within videos.
To do so, we must enhance the library to allow it to import and index data and metadata about videos that is already collected and coded by researchers, and encourage users to share these files.
This will accelerate the pace of video data sharing and reuse in the developmental and learning sciences, a field where there is a well-identified, substantial community of researchers who use video as a primary means of data collection.
It will leverage and increase the value of NSF's prior investments in Databrary and create opportunities for new research in other areas of behavioral sciences that use video or audio recordings as raw data.
The project will make possible new, cross-disciplinary, multi-level, and integrative research on human behavior that is currently prohibitively expensive, if not impossible.

### Project Aims

The project is organized around five aims.

1.  Design and implement a user interface and database structure that empowers authorized Databrary users to search for specific segments of video based on codes, tags, or keywords linked to those segments.

    Databrary currently allows users to search across collections of videos for selected terms.
    We will design, implement, test, and refine back-end technologies and user interfaces that return within-video search results in ways that makes it easy for users to click on and preview video segments the search engine finds.
    The interface will allow users to select and download selected segments for future reanalysis using the desktop video coding tools that are part of a user's current workflow.
    These features will make it easy for Databrary users to discover, preview, copy, and reanalyze video datasets that meet the specific requirements of their research question while keeping careful track of data sources and provenance.

1.  Expand and extend Databrary's system for visualizing user-defined video codes.

    Databrary's existing "timeline" interface for depicting tagged video segments will be modified to allow users to display, filter, and download the sets of tags that have been applied to shared video sessions.

2.  Enable codes and annotations from selected existing video and audio coding tools with large user bases to be uploaded to, imported into, visualized within, searched across, and downloaded from the Databrary digital library.
    Enable Databrary codes from one tool to be exported along with videos to other tools in native file formats.

    Working closely with a technical advisory group representing the leading academic and commercial video coding software tools (see pp. X-X) commonly used by developmental researchers, Databrary will develop ways for users to upload and download coding files linked to videos.
    Import functionality will bring the codes into the Databrary system and make the codes available for visualization and search within a dataset and across the library.

    Databrary will build the capacity to export imported codes back into their native formats wherever possible, as well as exported to more user-consumable formats (e.g., CSV).
    These features will be indexed by Databrary's new search engine as described in Aim 1.
    The features will reduce barriers to sharing coded videos across labs that use different coding tools and allow users to build upon codes generated by others.

3.  Design and implement ways for Databrary to upload, import, index, visualize, make available for search, and export the information about specific behavioral codes contained in coding manuals or coding file templates.
    Create electronic code manuals based on this information that links text-based or numeric tags to richer descriptions of code definitions.

    Most columns in video coding spreadsheets or data files consist of letter or numeric codes coupled to time stamps or a time interval.
    These minimal codes simplify the laborious task of manually coding video by allowing users to press single buttons on a computer keyboard to record specific behavioral events.
    Single character codes make for efficient coding, but lack transparency and make search and reuse difficult.
    "M" may mean a baby is in motion in one study but "Mother is speaking" in another.
    To resolve this ambiguity for themselves and their collaborators, researchers regularly generate richer, narrative or even image or video-segment-based definitions of codes in separate coding manual files.
    Some coding tools store code definitions in specialized fields.
    These coding manuals are rarely shared with other researchers outside the original team.

    We will develop ways for users to enter and share coding manuals.
    We will also develop ways to extract code definitions from those coding tools whose files store them.
    We will also develop ways for these code definitions in coding manuals to be searchable on the Databrary platform itself.
    The code definitions will thereby become indexable and searchable.
    This will help the search engine return more relevant and useful information to users than the simple single-character codes, and it will provide better, more human-readble information for visualizing the codes while previewing recordings.

4.  Design interfaces for Databrary that enable users to collaborate on coding video or audio recordings, share coding spreadsheets, maintain version control over coding information, and track data provenance.

    (*Reconcile this with Project 4 text--Rick's newest visioning doesn't quite fit this. We may want to drop it entirely.*)

    Databrary will become an even more powerful and attractive tool for video data storage and sharing if it can be used by researchers to facilitate coding in geographically separate locations.
    Bandwidth and browser performance constraints mean that most video coding will continue to occur offline using desktop tools for the foreseeable future.
    Databrary will develop ways for researchers to share coding with collaborators in different locations, by keeping track of information about different coding passes on the same videos.
    This will allow coders in one lab, for example, to carry out reliability coding on videos coded in a collaborator's lab.
    Similarly, as more users search Databrary for selected segments and reanalyze them, new or revised codes will be applied to existing shared video sessions.
    Databrary will develop ways to store and represent information from coding passes added by others to shared video sessions.
    Databrary will track and report version changes in coding spreadsheets and coding passes.

### Background and Rationale

Open data sharing has become a scientific imperative across disciplines.
It is common practice in many areas of biomedical (Kaye, 2009), physical (Young, 2010), biological (Reichman, Jones, & Schildhauer, 2011) and earth sciences (Kleiner, 2011), and it is an emerging priority in neuroscience (Poldrack & Gorgolewski, 2014; Poline et al., 2012).  
Despite notable efforts to make data sharing a norm in the behavioral sciences (AERA Code of Ethics, 2011; Nosek & Bar-Anon, 2011) most research on human learning and development remains shrouded in a culture of isolation (Adolph, Gilmore, Freeman, Sanderson, & Millman, 2012; Gilmore, 2016).
Researchers share interpretations of distilled, not raw data, almost exclusively through publications and presentations.
The path from raw data to findings to conclusions can rarely be traced or validated by others, nor can other researchers easily pose new questions that build on the same raw materials.
Clearly, strengthening infrastructure that makes data sharing common practice in the behavioral sciences is an essential priority for NSF.

#### The growth and potential of video as data

Hundreds of researchers (Gilmore & Adolph, 2016) who study learning and development collect video recordings in home, laboratory, classroom, and museum contexts.
The scale of data collection varies -- most individual labs collect 5-10 hours of video per week, but substantial numbers, especially large-scale collaborations, collect even more (Gilmore & Adolph, 2016).
The Measures of Effective Teaching Project (http://www.metproject.org/), funded by the Gates Foundation, generated more than 1,000 videos from K-12 classrooms, covering core subjects such as mathematics and language arts from multiple camera angles.
The data, constituting tens of terabytes of storage, are hosted at the University of Michigan (http://soe.mivideo.it.umich.edu/) and streamed to registered viewers across the country.
The NSF-funded HomeBank project, affiliated with the TalkBank/CHILDES archive, is collecting and sharing hundreds of hours of naturalistic audio recordings of children's speech, some of which will be accompanied by video.
The widespread availability of low-cost, high resolution cameras has made video a large and rapidly growing source of information about human behavior.

#### Video enables behavioral science research, but poses special challenges

Video documents the richness and complexity of human behavior -- the interactions between people and their environment -- unlike any other form of measurement.
Video records what people say and what they do.
It captures when, where, and how they look, gesture, move, and communicate, and how their looking, gesturing, moving, and communicating correspond to what others are doing.
Because of these characteristics, video -- and before that, film -- has a long history (Goldman et al., 2014; Curtis, 2011) in the study of learning and development.
Because video closely mimics the visual and audio experiences of live human observers, recordings collected by one person for a particular purpose may be readily understood by another person and reused for a different purpose.
Capitalizing on the unique potential of large-scale video data collections, however, requires overcoming a set of challenges associated with sharing video data.

**Videos contain personally identifiable information; this poses problems for the protection of participant privacy**.
Although policies exist for sharing de-identified text-based data, video contains easily identifiable information: faces, voices, spoken names, interiors of homes and classrooms, and so on.
Removing identifiable information from video severely diminishes its value for reuse and puts additional burdens on researchers.
So, video sharing requires policies that protect the privacy of research participants while preserving the integrity of raw video for reuse by others (see pp. X-X).

**Large file sizes and diverse formats present technical challenges**.
Video files are large (one hour of HD video can consume 10 GB of storage) and come in varied formats (from cell phones to high-speed video).
Many studies require multiple camera views to capture desired behaviors from different angles.
The cameras and other data streams must be synchronized for detailed analysis.
Thus, sharing videos requires substantial storage capacity and significant computational resources for transcoding videos into common formats that can be preserved over the long term and for synchronizing multiple streams.

**Video sharing poses practical challenges of data management**.
Researchers lack time to find, label, clean, organize, and copy their files into formats that can be used and understood by others (Ascoli, 2006a), and most lack training or expertise in standard practices of data curation.
Study designs vary widely, and no two labs manage data in the same way.
Idiosyncratic terminology, record-keeping, and data management practices are the norm.
Few researchers reliably document workflows or data provenance.
Although video requires minimal metadata to be useful, video files must be electronically linked to what relevant metadata exist including information about whether participants have given permission to share.
When researchers do share, standard practice involves organizing data after a project is finished, perhaps when a paper goes to press.
This "preparing for sharing" after the fact presents a difficult and unrewarding chore for investigators.
It makes curating and ingesting datasets challenging for repositories, as well.

**Technical and practical challenges involved in extracting behavioral patterns from videos present barriers**.
Videos contain rich and diverse information that requires time consuming work by human observers to extract.
Researchers make use of videos by watching them and, using paper and pencil or more automated computerized coding software, translating observations into ideas and numbers.
In principle, human-applied codes and annotations could make the contents of videos searchable by others.
However, researchers focus on different questions from varied theoretical perspectives and lack consensus on conceptual ontologies.
The software coding tools many researchers use to put annotations in a digital form employ incompatible data formats.
So, in practice, most coded video data are not easily shared.
Moreover, human-centered video coding capitalizes on the unique abilities of trained observers to capture important dimensions of behavior.
Machine learning and computer vision tools may one day provide new avenues for tagging the contents of videos for educational and developmental research (Amso, Haas, Tenenbaum, Markant, & Sheinkopf, 2014; Yu & Smith, 2013; Fathi, Hodgins, & Rehg, 2012; Google Research, 2014; Raudies & Gilmore, 2014), but these tools are not yet capable of efficiently replacing the judgments of trained human coders.

#### The Databrary digital library overcomes many of these barriers

Mindful of these challenges but motivated by the scientific promise of video data sharing, PIs established databrary.org, the first-of-its-kind library for storing and sharing video data and associated metadata with support from NSF (BCS-1238599) and NICHD (U01-HD-076595).
From the beginning, Databrary sought to create a secure home for research videos in the developmental and learning sciences in order to foster widespread data reuse and enhance transparency.
Databrary began public operation in the spring of 2014.
The library has since grown to encompass 259 authorized investigators and 145 affiliate investigators from 160 institutions around the world.
These investigators have contributed more than 3,600 hours of video or audio recordings, representing some 3,400 participants ranging in age from 6 weeks to middle age.
The system supports 162 volumes or datasets, of which 55 are currently shared with the community of authorized researchers or with the public.

Databrary permits users to upload, store, organize, and share data with collaborators, the full community of authorized Databrary users, or the public.
Users may also search for, browse, view, and download videos stored on the site.
Users may view specific characteristics of videos such participant ages or recording context (home, lab, or school) for recoding and reanalysis.
Databrary empowers users to stream in the browser or download videos or video highlights -- clips that may be shown for educational or research purposes like lectures or talks.
Thus, Databrary supports data sharing, data reuse, and pre/non-research uses of shared videos and associated materials.
The system does so while solving the thorniest problems associated with sharing video.

##### Databrary's policies enable the sharing of identifiable data

(*Need Lisa's review here (and probably elsewhere).*)

Policies for sharing identifiable data in ways that securely preserve participant privacy are essential for sharing research video.
Databrary does not attempt to de-identify videos.
Instead, Databrary maximizes the potential for video reuse by keeping recordings in their original unaltered form.
To make unaltered raw videos available to others for reuse, Databrary has developed a two-pronged access model that (a) restricts access to researchers who register (http://databrary.org/register) and are granted formal authorization by their institutions (https://databrary.org/access/policies/agreement.html), and (b) enables access to identifiable data only with the explicit permission of the participants (https://databrary.org/access/policies/release-template.html), an extension of the principle of informed consent.
These policies are spelled out fully in an online user guide (https://databrary.org/access/policies.html).

Unique among data repositories, the Databrary access agreement authorizes both data use and contribution.
However, users agree to store on Databrary only materials for which they have ethics board or IRB approval.
Data may be stored on Databrary for the contributing researcher's use regardless of whether the records are shared with others or not.
When a researcher chooses to share, Databrary makes the data available to the community of authorized researchers.

The framework, with minimal modification, has been agreed to by more than 160 institutions in North and South America, Europe, Asia, and Australia (https://nyu.databrary.org/search?volume=false&f.party_authorization=5&f.party_is_institution=true), and the number grows daily.

##### Databrary's technology overcomes technical barriers to video data sharing

To address the problem of diverse video formats, Databrary automatically transcodes each recording using NYU's high performance computing services into a common format suitable for web-based streaming (currently H.264+AAC in MP4 for video).
The system maintains a copy in the original format for long-term preservation.
To address file storage limitations, Databrary does not currently place limits on the number or size of files that can be uploaded.
Databrary's current assets total 17TB and are stored on NYU's central IT storage which provides one off-site mirror and regular long-term tape backups.

##### Databrary's design overcomes practical barriers to sharing

Databrary has developed a novel active-curation framework that reduces the burden of post hoc data sharing.
The system empowers researchers to upload and organize data as it is collected.
Immediate uploading reduces the workload on investigators, minimizes the risk of data loss and corruption, and accelerates the speed with which materials become available.
Databrary employs familiar, easy-to-use spreadsheet and timeline-based interfaces that allow users to upload videos, add metadata about tasks, settings, and participants, link related files, and assign appropriate permission levels for sharing.
To encourage immediate uploading, Databrary provides a complete set of controls so that researchers can restrict access to their own labs or to other users of their choosing.
Datasets can be shared with the broader research community at a later point when data collection and ancillary materials are complete, whenever the contributor is comfortable sharing, or when journals or funders require it.

With this active-curation framework, the cost in time and labor to researchers is equivalent to current lab practices of storing a copy of the video on a hard drive and entering the associated metadata into a spreadsheet.
Moreover, with this method, Databrary acts as the researcher's personal lab file server and cloud storage, enabling web-based sharing among members of the protocol and ensuring secure off-site backup.

#### Remaining gaps this project will fill

Despite these advances over the past three years, the Databrary team recognizes that there are barriers to widespread data sharing that we have not yet been able to address systematically.
Our survey (Gilmore & Adolph, 2016) indicated that most developmental and learning scientists who collect video use a specialized tool to code it (Datavyu, CHAT, ELAN, Mangold Interact, Noldus Observer XT, or Transana).
Almost all researchers augment information stored in the coding tools with text or image-based information about specific codes, stored in coding manuals.
The tools vary in their strengths, weaknesses, cost, customizability, and optimal use cases, but with few exceptions remain largely unable to talk to one another.
So, we think it is critical to enhance Databrary so that the information contained in coding files and coding manuals can be uploaded and stored on Databrary.
These enhancements will result in the following outcomes:

- Enabling Databrary to import, store, and share coding files from the leading video coding tools used by researchers in the developmental and learning sciences.
- Enabling search within videos based on these codes.
- Increasing interoperability among video coding tools.
- Making it substantially easier for geographically dispersed researchers to share the burden of coding video and to collaborate on projects.
- Making it easier for labs that use multiple coding tools to move and export data between them for analysis.
- Making it easier for researchers who use incompatible video coding tools to collaborate and build upon one another's findings.
- Capturing currently "hidden-to-outsiders" code definitions and related metadata vital for understanding and building upon a shared project's analyses.
- Encouraging standardization of documentation practices and documentation formats for coding definitions, and as a result making it possible for codes used by one research group to be compared with or built upon by other groups.
- Creating infrastructure that embodies recognized best-practices in video coding (Adolph XXX) and data management.
- Reducing the barrier posed by incompatible video formats by exploiting Databrary's existing infrastructure for transcoding.
- Filling gaps in current research workflows and reducing barriers that make sharing and reuse of video data harder than it needs to be.
- Enhancing the reproducibility and transparency of video-based analyses of human behavior.
- Laying the groundwork for future enhancements that involve the integration of other temporally dense data streams, such as eye tracking, physiological measurements, kinematics.
- Positioning Databrary to take advantage of rapid developments in computer vision that focus on the automated or semi-automated tagging of static images or video segments.
- Making Databrary more useful and attractive to an even wider range of researchers across the behavioral sciences.
- Leveraging the existing investments that NSF and NICHD have made in creating Databrary.
(*Talk about Project 4 benefits -- provenance, sharing*)

In turn, the project will enable new, integrative, multidisciplinary research that is at present difficult, time consuming, and prohibitively expensive to conduct.
It may soon be possible for researchers who are interested in, for example, children's laughter, to search across the library for examples of children laughing.
From the returned videos, the researcher may select only those with coded language transcripts or which show the children's face so that facial expressions can be coded.
Based on summary, participant- and dataset-level metadata stored in Databrary, the researcher can evaluate the geographic (region of origin) and demographic (race, ethnicity, languages spoken, sex/gender) characteristics of the sample to ensure that it suits her needs.
She notes that the sample includes many children from bilingual homes, and she makes a note to talk with the cultural anthropologist colleague she has been wanting to collaborate with.
The researcher can compare code definitions from the set of shared coding manuals to determine whether she agrees with other researchers' definitions of what constitutes child laughter.
In browsing the videos found in the search, the researcher discovers that one dataset includes codes related to children's gestures.
The researcher hadn't considered coding motor behavior, but since a detailed coding manual was shared, she decides to select those materials, as well.
Satisfied that the search has yielded useful data for her project, the researcher downloads the relevant videos, coding files in the format of her choice, coding manuals, and other materials.
The researcher begins annotating the downloaded videos using her own coding scheme and, since it is easy to do, the researcher shares the resulting coding files back to Databrary.

We describe how this scenario can be realized in the Implementation Plan.

### Implementation Plan

The implementation plan consists of four main projects aligned with the specific aims.
The sections below describe the main phases in general terms, with specific technical details provided in the [Technical Plan](technical-plan.md) addendum.
See Figure X in that addendum for a project timeline.

#### Project 1: Search interface and functionality.

This project will focus on designing, implementing, and verifying the user interface that returns within and across video search results in powerful, flexible, and informative ways.
Project 1 will also focus on building the back-end capacity for Databrary's existing Apache solr-based search engine (see <technical-plan.md>) to return results from within video segments based on the information contained in imported coding files and coding manuals.
Finally, the project will develop both the back-end and user interface components that allow users to use the videos they have found through search.

##### Project 1.1: Design search interface

The PIs and project staff will gather requirements for the search interface.
A functional specification document with wireframes will be developed and circulated for feedback.
Once finalized, the developers will implement the approved design.

##### Project 1.2: Adapt Databrary's search functionality.

Databrary's existing search architecture is based on Apache solr targeting entire datasets as documents.
The system has existing capabilities that enable users to add text based comments or tags to video segments selected by hand using a web-browser.
Thus, Databrary already has the capacity to represent selected segments of video and to link video segments to text-based codes.
Staff will adapt the existing comment/tag functionality to permit tags from imported coding spreadsheets to be added to the text available to the search engine.
This will require extensive modifications to Databrary's back-end data model and search infrastructure to allow returning video segment results.

##### Project 1.3: Develop mechanisms for extracting and delivering tagged segments of video.

Once the search engine is able to seek specific text linked to particular video segments, the team will need to develop mechanisms for extracting and delivering the tagged segments in the interface designed as part of Project 1.1.
There are several technical challenges to overcome.
Databrary does not store or represent videos as sequences of frames or time segments.
So, if a user searches for the term "infant speech" and the system returns 100 segments with that tag, Databrary will need to determine what information to return to the user -- a small image (thumbnail) of the first frame of the entire video, a thumbnail image of the first frame of the found segment, or something else.
For the interface to return a thumbnail image, Databrary will need to take information about the video and compute the frame or frames that should be returned.
Similarly, if the user interface allows the user to click on thumbnail images and preview video segments or use mouse movements to scrub through the video segments forward and backward in time, the Databrary system may need to compute and re-encode these frames in cases that the entire video cannot be delivered to the user.
Solving these problems in ways that make the interface responsive to users will be critical for making the search capability useful.

#### Project 1b: Timeline interface for viewing/selecting coding passes

Once the user has identified a particular session of interest, we need to enable visualization of existing coding passes uploaded with this session.
Databrary needs to allow basic visualization and manipulation of these passes, so that users can preview the codes, select a subset of passes for download, and potentially upload newer versions of the coding passes.

#### Project 2: Code import, representation/visualization, and export

This project focuses on importing coding files from a selected set of academic and commercial tools, representing and visualizing them within Databrary, and exporting in their native formats.
Despite significant variation across coding tool platforms, at one level, all of the codes we intend to import are usually simple data structures.
Each code consists of a start time, an optional end time, and an associated set of alphanumeric characters or data structures.
Coding files consist of one or more arrays of these codes, organized into separate, possibly hierarchical or nested "passes".
Databrary's existing data model includes an internal representation that allows users to apply simple text-based tags to temporal segments of specific videos.
We will build upon this foundation in building the coding file import capabilities that are part of Project 2.

##### Project 2.1: Import and export Datavyu coding files.

We will start by making Databrary capable of importing spreadsheets generated by Datavyu (datavyu.org), the free, Java-based, open-source video coding tool maintained by Databrary and Project PI, Adolph.
Some 6 volumes on Databrary representing 230 video sessions contain spreadsheets coded in Datavyu.
Internal download data, support forum comments, and our survey of the video-using developmental science community (Gilmore & Adolph, 2016) suggests that there are hundreds of laboratories using Datavyu.
The Datavyu file format is well-known to the Databrary team, and so making Databrary capable of reading Datavyu spreadsheet files will be a test case, demonstrating the feasibility of other projects (2.2 - 2.x) focused on other data formats.
Because Datavyu uses a known format, we will also add to Databrary the capability of exporting codes in the Datavyu format.
Jesse Lingeman, lead Datavyu developer and Clinton Freeman, a previous Datavyu developer, and current Databrary project consultant, will help guide the effort.

##### Project 2.2: Import ELAN coding files.

ELAN (https://tla.mpi.nl/tools/tla-tools/elan/) is a free video and audio annotation tool developed by researchers at the Max Planck Institute for Psycholinguistics in the Netherlands.
It is widely used in the psycholinguistics community, including respondents in our recent survey (Gilmore & Adolph, 2016), and has special features for language researchers who often use it to study language features from phonetics to pragmatics.
Han Sloetjes, Lead Developer on ELAN, has agreed to serve on the technical advisory team and assist the project team to overcome hurdles involved in importing and exporting ELAN formatted files.
ELAN is built in Java, like Datavyu, and the ELAN team has already consulted with the Databrary and Datavyu staff on challenges both tools face in importing and playing diverse video formats.
Import/export tools currently exist for converting ELAN files to and from the CHAT format used in CHILDES, TalkBank, and HomeBank (see Project 2.3 below).
ELAN coding data includes significantly more structure than Datavyu, including hierarchical and linked coding passes (called tiers), but we expect the basic coding information from ELAN files to be extractable, and simple versions to be exportable.
Project staff will build on these existing links in developing ELAN import/export features for Databrary.

##### Project 2.3: Import and export CHAT files.

TalkBank (talkbank.org) is a collection of language-related databases that include transcripts, audio, and video data from children and adults.
Many of TalkBank's audio or video files are linked to text-based transcripts in the CHAT format, developed for the Child Language Data Exchange System (CHILDES) Project.
CHAT files can be used with the Computerized Language ANalysis (CLAN) suite of software tools, a recognized standard in the language community.
TalkBank's founder and coordinator, Dr. Brian MacWhinney, serves on the Databrary advisory board and has agreed to serve on the technical advisory committee for the current proposal.
Professor MacWhinney will work with the project staff and PIs to allow CHAT-format transcripts linked with video or audio recordings to be imported into Databrary.
CHAT files are well-structured; the file specification is open and known; and Databrary staff have already done some preliminary work with CHAT-format transcripts.
However, CHAT files are unique in that transcription data is not directly linked to specific temporal codes, but instead specific points in the transcription text can be associated with points in the video or audio timestream.
For this reason, this format may have unique restrictions on which files can be imported and exported.

Support for CHAT-formatted transcripts is essential for interoperability with the NSF-funded HomeBank data archive project that focuses on collecting a large corpus of natural speech using the LENA (http://www.lenafoundation.org) recording device, linked with CHAT-formatted transcripts.
Databrary serves as a consultant on the HomeBank project, and works closely with its PIs, Anne Warlaumont (UC Merced), X, and Brian MacWhinney, and the leadership of both projects has determined that interoperability is an important priority for both efforts.
LENA files are stored in a fairly well documented XML format, so Databrary staff will also investigated importing LENA data directly into Databrary.

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
We will then strive to develop tools that import and export these coding files in their native format, or, in the worst case import files that have been exported by the Mangold software into an open, text-based (CSV or XML) format.

Beyond the project team's desire to serve this important segment of the developmental and learning sciences research community, Databrary staff believe that import/export functionality for Mangold Interact is important for another reason.
One of the largest (n=344 participants, 1,344 sessions) and most diverse video datasets currently stored and shared on Databrary comes from an NSF-funded longitudinal study (http://doi.org/10.17910/B7CC74) led by Catherine Tamis-LeMonda.
Professor Tamis-LeMonda has available Mangold Interact format coding files, but has not yet shared these with Databrary.
Successful implementation of Mangold Interact import functionality may make it eventually possible to store and share these coded spreadsheets with Databrary alongside the already-shared videos, thus augmenting the current value of the shared data.
Unfortunately, some intermediate data from coding these videos that would allow the codes to be linked with the videos on Databrary has been lost, so this process may require significant additional effort, if it is indeed feasible.

##### Project 2.6: Import Noldus Observer XT files

Noldus Observer XT (http://www.noldus.com/human-behavior-research/products/the-observer-xt) is a commercial software package produced by Noldus Information Technology that is specialized for the collection, coding, and analysis of audio, video, eye tracking and physiological data streams.
Noldus also develops, sells, and supports complete integrated hardware and software packages for multi-measure behavioral analyses.
Niek Wilmink, Product Portfolio Manager at Noldus, has agreed to serve on the project's technical advisory committee (see Appendix X).

Noldus Observer XT files are in a proprietary format, but the software has the capability of exporting codes and short code definitions stored in coding template files into a spreadsheet (Microsoft Excel) format.
Project staff will work with Mr. Wilmink and the Noldus team to build support within Databrary for uploading and downloading coding files.
With support from our Noldus partners, project staff will investigate the possibility of functionality that allows Databrary to import Noldus files from their native formats into the Databrary back-end.
In the worst case, Databrary will build functionality to import files that are exported by the Noldus software into an open or easy-to-read format, like the Excel spreadsheet format used by the coding template export function.

#### Project 3: Importing rich, text-based code definitions

This project involves enhancing the capacity of Databrary so that the rich, text-based descriptions of behavioral codes, formalized in coding manuals often (but not always) stored separately from coding files, can be imported into Databrary.
The text in the manuals will be indexed by the Databrary search engine, and thus become searchable metadata.

The vast majority of developmental researchers who responded to our survey (Gilmore & Adolph, 2016) regularly create detailed coding manuals that define behavioral codes associated with a particular study's set of analyses.
Respondents most often report creating these manuals using word processing or spreadsheet software.
Consequently, we know that coding manual information about videos is available; we just need ways to capture it systematically.

##### Project 3.1 Make existing Databrary functionality for storing coding manuals more salient to users

Databrary currently allows users to upload word processing, spreadsheet, PDF and other materials.
Relatively few researchers use this capability now to upload coding manuals.
So, the project team will explore design and styling changes to the site that make coding manuals visually distinctive when they are uploaded.
The team will also explore changes to the site's documentation, especially in the study design and active/self-curation portions, so that users are encouraged to upload coding manuals early on in the research process.

##### Project 3.2: Design back-end representation of coding manual information

While textual coding manuals are useful, unless the information contained therein can be associated with specific coding data, they cannot be used to enhance searching within videos.
Accordingly, project staff must enhance Databrary's back-end data model and front-end interface to allow new coding manuals to be entered directly on the web.
Project staff will need to modify the data model to allow the additional text available in the coding manuals to be associated with specific codes *across* a video and *across* an entire dataset.
These links are crucial because most *coding files* contain single alphanumeric characters.
Thus, in one context 'm' might mean 'mother is speaking' and in another 'm' might mean 'participant is manipulating an object'.
Only by linking richer, text-based descriptions to the specific codes can the search engine return meaningful results to a user who enters 'mother speaking' into a search box.
In this way, if users enter their coding manuals online directly on Databrary, rather than uploading them as separate files, we can further enhance videa search.

##### Project 3.3: Design user interfaces for uploading and visualizing coding manual information.

The target coding tools vary in the extent to which they capture and store code definitions.
Datavyu does not store code definition information at all.
CHAT-formatted files employ a structured set of well-defined keywords that describe the content of speech transcripts and other metadata such as the speaker, context, etc., and user-defined codes are usually tagged as comments.
Transana, Mangold Interact, and Noldus Observer XT allow code definition information to be stored within the coding files or in linked files, but there are often size limits on the amount of text that may be inserted into the code description or definition fields.
As a result, researchers who use these tools regularly augment the information about specific codes or coding schemes in external word processing or spreadsheet documents (Gilmore & Adolph, 2016).

For tools that store code-specific definitions in the coding files, the project team will build upon the import functions developed as part of Project 2.
Developing an interface for users to enter code-specific information stored in coding manuals poses a somewhat bigger challenge.
The team has already begun to collect coding manuals from volunteers who responded to our community survey.
We will also consider the viability and utility of creating and encouraging the use of template coding manuals, as we have done for Data Management Plans (https://databrary.org/access/policies/dmp-template.html) and for Video Data Sharing Releases (https://databrary.org/access/policies/release-template.html).

Once code-specific information has been entered into Databrary, we will need to make available interfaces that allow users to view and edit the information.
One interface will need to allow users to view and edit the code definitions in a document-like form similar to a coding manual.
It will be easier to provide users ways to edit information stored in coding manuals than to enable users to edit code definition fields that are part of the data package associated with specific coding files in tools like Transana, Noldus Observer XT, and Mangold.
So, the extent to which users can edit or export information normally contained in these coding files or code templates will depend on the extent to which we are able to read from and write to native (or importable) file formats.

A second type of interface will be needed that allows users who are viewing a particular video in a specific session to view what codes have been applied to what segments of video.
Project 1b describes how we intend to tackle the problem of displaying the *sources* of the codes (coding file type, contributor, etc.).
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

We will evaluate progress on the project in several ways.
The PIs will report on progress meeting each of the specific projects, relative to the goals outlined in the timetable (See <technical-plan.md>) in the required annual project report.
Among other metrics, we will report the number of Databrary users who are sharing coding spreadsheets and coding manuals, by coding tool used.
We will also develop measures of data reuse based on download statistics.
The team will send out surveys to Databrary users once a year to solicit feedback about system operations, focusing on new features, and asking users the extent to which the new features change their willingness to share data, the ease of doing so, and the attractiveness of reusing others' data.
With the cooperation of our technical advisory team members, we will explore the possibility of surveying the community of video coding tool users to ask similar questions.
The results of those surveys will be summarized in the annual NSF report and discussed at the annual Databrary advisory board meetings.
Finally, project staff will ask for an independent evaluation of our user interfaces from a group of UI/UX experts at the NYU Libraries who conduct these evaluations for others on a regular basis.

#### Future Directions and Sustainability

The first Databrary grant was funded by NSF in 2012, and our current NIH funding runs through the spring of 2018.
NYU libraries have committed to preserving the data stored on Databrary indefinitely beyond the end of grant-related funding for the project.
We note that TalkBank, one of the most successful data repositories in the behavioral sciences, has been funded by competitive NIH and NSF grants for more than 30 years.
Accordingly, we see that grant-seeking remains the most viable and promising means of sustaining and building the Databrary library over the short to medium term.

The current proposal, if funded, would sustain Databrary through the fall of 2019.
We are planning new grant submissions to NICHD and to the Sloan and Gates Foundations, and we have other ideas about ways to engage other units at NSF, NIH, and other Federal agencies.
The PIs have successful track records of seeking NSF and NIH funding, so we are optimistic about these prospects.

In the long-term, we are working with NYU development staff to seek a private endowment fund for Databrary that would ensure there are resources for storage, maintenance, and development staff for an indefinite period.
We continue to work with other entities like ICSPR, TalkBank, and others to advocate for long-term, stable funding sources for data repositories.
Databrary is very early in its development, so we think that charging institutional or researcher-specific subscription fees is premature, nor do we think that advertising is appropriate to our mission.
But, we will continue to monitor the changing landscape of data repository funding, and make adjustments accordingly.

### Summary

There are multiple barriers that limit the adoption of video data sharing in the developmental and learning sciences.
In only its first few years of operation, Databrary has overcome many of them, but several remain.
The current proposal will enhance the Databrary digital library, making it possible for contributors to upload, store, and share the results of human-generated annotations of video segments along with text-based definitions of the annotation codes.
These data and metadata will make it possible for users to search for specific codes or keywords across videos within a dataset and across videos across the entire library.
No longer will the choice of video coding tool prevent researchers from sharing the burden of coding with their collaborators, nor will differences in tool file formats prevent the insights one lab draws from being shared with the entire community.

#### Intellectual Merit

This project will enhance the Databrary digital library, a "user-friendly large-scale next-generation data resource" serving already serving a community of several hundred developmental and learning scientists across the globe.
The contribution of a particular dataset will no longer depend on the private analytic and interpretive activities of researchers from one laboratory or the specific resources available to them, but instead benefit from the critique of many researchers with different viewpoints.
This will strengthen the credibility of the behavioral science research enterprise as a whole.
The enhancements to Databrary will enable new research questions to be asked based on existing, already collected and shared video data.
The project will make it possible for researchers to readily assess the feasibiilty of asking new questions by searching for relevant shared data, and evaluating the prospects of a new analysis without undergoing expensive pilot testing.
The project extends to the domain of video data the demonstrated power and utility of text-based search.
It lays the groundwork for reseach using analytical techniques that evaluate the temporal relationships between multiple time series measurements.
Finally, In order to deliver actionable information to users, the project will develop, test, and deploy new interfaces that allow complex data patterns to be visualized and manipulated.

#### Broader Impacts

The proposed enhancements will make resources on Databrary, many of them funded by NSF and NIH, more findable, accessible, interoperable, and reusable -- core principles that are the inspiration for next-generation data sharing initiatives.
The infrastructure will have impacts beyond the developmental science community.
Video and audio recordings are used by researchers in linguistics, anthropology, political science, behavioral economics, cognitive science, neuroscience, social psychology, clinical psychology, movement science, education, ethology, and human-computer interaction, and computer vision, among other fields.
Therefore, the project has wide-ranging potential to lead to new research within and across fields, including those in the social, behavioral, and economic sciences.
Databrary is currently open to all qualified investigators without cost.
That includes researchers at institutions with few resources to support research.
The proposed enhancements will make it substantially easier for these scientists to contribute to the body of knowlege about human behavior by building on the expensive-to-collect data gathered by others.
The enhancements to Databrary will benefit all researchers by making data sharing more appealing, and these incentives will increase the number of researchers who share, the diversity of the data sets they share, and the pace of data sharing.
Finally, since some datasets will be available for public viewing, we will raise the profile of video-based research and bolster interest in and support for science in the behavioral sciences among the public at large.
