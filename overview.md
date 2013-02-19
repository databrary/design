This is an informal, high-level, functional description of the project.
The primary goal of this document is breadth: to identify the full range of features currently planned that provide a complete product.
A secondary goal is to define a consistent set of *terms* or vocabulary that can be used to internally describe parts of the system.
It also may occasionally make design recommendations.

# Scope

This project consists of two aspects which may be more-or-less integrated or separate: Databrary and Labnanny.
Databrary will be a centrally-hosted website, while Labnanny may be a desktop application, web appliance, part of Databrary, or some combination thereof.
It seems likely that the majority of the Labnanny functionality will be provided in some way by the Databrary website, perhaps in addition to other interfaces, so this distinction will largely be ignored and the project referred to as *the site*.
Similarly, Datavyu, while it will likely be integrated with the site via APIs, is considered a separate project for these purposes and will not be described here.

## Inspiration

The following sites or projects provide approaches and interfaces that may be worth learning from.
Feel free to add more.  

Science:
* [OSF](http://openscienceframework.org/project/4znZP/) provides a file repository, RCS features, tagging, wiki.  Under development, will be open sourced?
* [Dataverse](http://dvn-demo.iq.harvard.edu/dvn/) provides a site-deployable web site for sharing tabular data, highly structured representation of publications, data, analyses.  Open source.

Non-science:
* [Last.fm](http://www.last.fm/home) is a public music exploration site that includes complex, implicitly derived item relationships, tagging, commenting, search, similarity, minimal curation, [APIs](http://www.last.fm/api), was once open-source but is no longer.
  Personally I think this is a well-done site that has added a lot of depth while keeping a fairly simple interface and is worth emulating.
* [MusicBrainz](http://musicbrainz.org/) at the other end of the spectrum is a music metadata site with highly complex metadata structure explicitly entered by users, moderation, APIs, fully open source.
  While this site is more satisfying from a database perspective, it scares many casual users off and has developed a wikipedia-like culture of perfectionist editors.

# User management

Various *entities* representing real world identities may be associated with the site.
Entities can belong to the following *levels*:

1. Site administrators (root)
2. IRB members and administrators managing one (or more) institution
2. Institutional entities representing various organizations, universities, or governments
3. Contributors: PIs who accepted the contributor agreement and have IRB-approved studies that can contribute data to the site
3. Principal Investigators (PI) who are not collecting contributing data to the site (but may be using data from it)
4. Students and research staff responsible to PIs
5. Other users who have not yet completed the authorization process (see below)  

All entities (except root) are affiliated with one or more parent entities of a higher level.  

Any individual accessing content hosted on the site will require an *account*: for the initial release there will be no anonymous access.
However, not all entities will have active accounts. 
 
The total population of potential users of the site is estimated to be in the thousands. This estimate comes from the fact that The Society for Research in Child Development (SRCD) has 5,500 members in various disciplines.

Are entities and account details public?

## Account Registration

Potential users will be required to register an account and provide:
- An email address, to be verified with token-based email confirmation
- A real name, perhaps with some first/last structure, similar to journal standards (but please [think this through](http://www.kalzumeus.com/2010/06/17/falsehoods-programmers-believe-about-names/))
- Possibly a captcha if unverified users are allowed to post comments, but probably this will not be necessary
- Other optional user details which may be set and changed later (timezone, URL, personal/profile stuff, ...)

Successful registration results in an unverified account.

## Entity Authorization

Authorization verifies, establishes, and maintains the affiliation between an entity and a parent entity, and possibly the association between that child entity and an account.

### Requesting

The list of entity levels above naturally sets up a hierarchy of authority.
Users may additionally complete one or more authorization steps that, if successful, will result in creation of their entity and affiliation with another entity.
To do this, users must identify the parent entity they wish to be affiliated with.  
* For institutions and administrators, this affiliation (with root or an administrator) will have to be created on demand or manually by site administrators.
* For PIs, this means selecting an institution (which may be an "unaffiliated" meta-institution).
* For students and research staff, this means selecting a PI.

Searching for potential parent entities can be done hierarchically: by geographical region, to institute, to PI.
This may also require providing additional details, for example university-provided account information (e.g., NYU NetID).

### Granting

This request will notify the selected parent entity.
If an account is associated with that entity, that user will be able to authorize the affiliation, and also select a level (below their own).
If no account is associated with an entity, an appropriate delegate account may instead do the authorization (i.e., a university administrator for a university, or a site administrator).
A page for each such parent account or delegate will be available listing all children and requests.
Periodic reauthorization may be necessary for continued affiliation, according to the policies established by some higher entity.  

University affiliation may be able to be automated by authentication with university account details.
How are delegates established?  

Authorizing an affiliation indicates that the authorizing agent has confirmed that the identity of the account matches the (possibly new) entity, and establishes some level responsibility for that account.
Other details may be required during the authorization:
- Specific role of the account (IRB, PI, post-doc, grad student, staff, undergrad, etc.)

## Authentication

Various options here:
* Standard passwords with good strength, hashing, and salting standards (should not unnecessarily restrict special characters or length)
* [OpenIDs](http://wiki.openid.net/w/page/12995211/OpenID_Authentication_2) supplied by users
* Multifactor something
* Delegation to university authentication systems (not a complete solution)

Authentication should not be overly burdensome, while still ensuring security.
Entities (universities in particular) may be able to establish additional restrictions, for example restricting access of descendant accounts to particular IP subnets.

## Contributor agreements

Becoming a contributor involves accepting a contributor agreement, and may require additional authorization by institutional IRBs.

# Data

The types of objects and associations between them that may be entered into the site are broad and diverse.
These may be files with known formats, arbitrary opaque files of unknown format, and structured matadata.
The possible relationships may be potentially unlimited, and arbitrary many-to-many relationships may be required.

## Storage

Primary storage consists of a structured database.
Objects that are represented by files will be assigned IDs via the database, and then stored as blobs (objects, files, by ID?) on a filesystem of some kind and treated as opaque data for most purposes (i.e., no on-line searching, only atomic downloading).  

New objects may be created by an explicit user upload, or by offline processing of other objects (e.g., transcoding).

## Organizational units

There are specific groupings and relationships that are of primary importance and will be represented by individual pages on the site.

### Study

The central organizational unit for the site is the concept of a *study*, or project, or experimental protocol, representing concurrently an research paradigm and a set of data objects collected under this paradigm.
In particular, this is likely to be the first object the user enters in the system, either when preparing to upload a set of data to Databrary or when starting a new project in Labnanny.  

While not all objects associated with a study will have the same sharing or read permissions, they will all have the same write permissions.
Studies will be comprised of the following components / metadata:

* One or more designated *principal owners*, likely a PI users, who have long-term stewardship of the data
* Zero or more study *members*, who must be affiliated with and maintained by the principal owner, and will usually be the students, grads and post grads who collected the data and have full access to create and modify everything associated with the study
* Title, abstract-level description text, creation date
* A schema for what information and data will be collected for each acquisition in the study, which may be determined explicitly through user interrogation or, preferably, implicitly derived from the materials or built as acquisitions are added
* A heterogeneous collection of *materials* describing the research procedures, usually created before data collection starts
* Zero or many *articles* that represent the scholarly output from data contained within this study.
* Zero or many *acquisitions* represented the collected data
* Zero or more other studies that provide data to this study, e.g., for meta-analyses, longitudinal studies, or other more complex experiments involving multiple protocols  

Collecting example materials from a broad set of labs will inform how studies and acquisitions should be structured, but are expected to include:

   * lab notebooks describing procedures, goals, etc. (usually documents)
   * stimuli that are presented to participants (consent forms, instruction documents, images, or videos)
   * analysis or experiment *programs* or code (so-named to distinguish them from coding data)

#### Acquisition

A study consists of some number of *acquisitions* (alternatives for this term: "clips", "trials", "collections", "sessions").
These acquisitions are usually individual participants or sessions of the experiment.

Importantly, each acquisition in a study involves the same experimental procedures for collecting data. However, not all acquisitions will necessarily have the same set of objects, as some may be missing for various reasons.  

An acquisition can include both raw data collected at the time of the experiment and summary data that has been extracted from these objects later by researchers or programs. These may include:

* Acquisition date
* Permissions collected from the participant, including sharing rights and consent forms, which apply (at least) to all raw (non-anonymized?) data
* Demographic information for participant(s):
	* age/birthdate
	* gender
	* ethnicity
* Zero or more video, audio, eye-tracking, motion-tracking, skin conductance, EEG, and other multi-dimensional *time-series* objects
* Zero or more associated markup or *coding data* metadata files from Datavyu, treated (at least initially) as opaque objects

#### Participant?

In general participants are treated as anonymous entities associated with a single acquisition.
However, for the purpose of Labnanny, there may be a desire to explicitly keep track of non-anonymous participants to help with recruiting and scheduling.
This raises a number of potential privacy concerns, however.  

The best practice would be to completely separate the concept of participant for Labnanny from those participants in acquisitions, so that there are no links between them.
A best case would if Labnanny information is stored in a local application or appliance, that this is never sent to Databrary.
Participant data from Labnanny may be used, carefully and selectively, to automatically fill in participant acquisition data, but this must be limited to gender, age/birthdate, demographic information.  

Longitudinal experiments may also wish to explicitly maintain the association between identical participants in different acquisitions (studies?).

#### IRB protocol?

We may also want to allow researchers to manage their IRB *protocols*, including the actual protocol documents, the expiration date of the protocol and any renewals, and studies using them.
Protocols should be associated with PIs, expiration dates, and any number of studies which use them.

#### Object and metadata

Each data object in an acquisition is associated with some amount of metadata stored in the database.
Much of this metadata will be extracted from the object itself via processing specific to the object's format.
This includes (but is not limited to):
- object size, date, ownership, history
- video length, format, resolution
- related, synchronized, and derived objects 
- ...

A page representing any object (which may also form a part of its containing study page) should include this information, along with a generated preview or summary of the data (if available) and a download link (depending on permissions).
Conversions between formats (when uploading or downloading) may also be available for some objects.

### Researcher

Each entity may have a page on the site that includes:
- Studies owned by that researcher
- Articles to which they contributed
- Other profile information from an associated account

#### Article

While not serving as a central repository by any means, we also want to keep simple references between research data and corresponding written scholarly research. 

At the minimum, however, articles will include:
* Only one link or citation ([DOI](http://www.doi.org/)) to the full text of a manuscript, usually as published in a journal or conference.

From this link, Databrary will automatically populate the following:
* The abstract for the article.
* The article title 
* The set of author entities, or at least those which exist in the system (this may have to be inferred with some manual intervention by users)

We may additionally wish to store:
* Publication date
* A PDF or text content of the article to allow for searching
* An optional annotation on each study link describing how the study contributed to the article.

## Citing Research Data

Databrary will provide stable URIs ("perma-links") for its various aspects which can be used for citations.
This should include at least studies, but should probably apply to all other levels of representation.
Standardization and appropriate user documentation describing these citations will be provided.

## Searching

All textual objects, materials, articles, documents, code, and really anything at all that can be parsed should be available to a full-text search.
Additionally, there will be more specific "advanced" searches for objects of particular types with appropriate metadata conditions.

## I/O

How data move into and out of the system.

### Data entry

Our goal is to have data (and metadata in particular) entered into the system early and with minimal interaction.
The more easily data get into the system, the less risk there is for it to be lost, converted, processed, or forgotten.
The less burden there is on the researcher when uploading data the more likely for them to follow through.
We would rather have them upload a video and permissions setting with no other information than get nothing at all.  

Labnanny provides the best-case scenario, wherein it acts as the sole repository and resource for an experimenter to collect and organize everything the produce and collect during a study.
In this case, all relevant data and metadata can be extracted directly from Labnanny with no further interaction with the user necessary.
In many labs this information is currently spread across a wide array of file servers, disks, spreadsheets, text files, pieces of paper, and even emails.
The better we can accommodate researchers' ways of working with Labnanny, the more of these data we can collect.
However, we must still be prepared both to allow users to upload and enter data from other sources and for any or all of it to be missing.  

Spreadsheets likely provide the best and most comfortable metaphor for data entry and representation, and we should make use of this wherever possible.
For example, a study can be presented as rows of acquisitions with columns for scalar metadata and objects.
Clicking cells may open further pages for details about individual objects.  

There may also be need for importing data from off-line sources.
This may be eased by providing template spreadsheets for off-line collection that can be more easily processed.

### Uploading

Users will be able upload objects and specify their associations through web forms or via special applications via an API.
Some objects may be quite large, and an rsync-like interface (which may be rsync itself) should be provided.  

Owners and automated processes may replace objects with new versions, to fix errors, update with new data, or change formats.
Previous versions of superseded objects will be kept for at least some period of time.

### Sharing

There will be a complex permissions system specifying which objects may be shared with which users at what times.
Various permissions documents will establish specifications for these.
This may also involve partial access, for example to metadata for an object but not its content, or to a restricted portion of a video.

#### Excerpts

Acquisitions which have appropriately granted participant permissions allow the data owner to specify excerpts.
Excerpts may be still images, a few seconds from a video, or some other spatially or temporally restricted part of a data object.
Each excerpts should be derived from an existing object in the database, a process which may be done on-demand or provided through separately uploaded files.
These excerpts may have broader availability than the original data, and in particular are the only (non-anonymized) participant data that may ever be public.

### Downloading

Some objects will be available for direct download.
This may involve special processing for certain objects, e.g., watermarking or explicit permission verification of some kind.

#### Time-series data

Time-series data, which primarily includes videos (and Datavyu spreadsheets) should allow on-the-fly sub-selection for downloading specific temporal ranges of them.
For example, a user may wish to download only a one-minute portion of an hour-long video.
This feature may also be useful for generating excerpts.

# Community

## Tags

Users can add *tags* or keywords to studies, acquisitions, data objects, materials, and articles.
Tagging provides an important resource for searching and browsing.
However, it is important to remember that the number of users will be quite small compared to many other tagging communities, and so aggregate information across may be more noisy and less reliable.
On the other hand, tagging by users is likely to be more accurate, and so the primary concern will be tagset normalization (i.e., collapsing different tags representing identical concepts).  

A tag consists of:
* A short keyword, comprised only of lower-case letters, hyphens, and spaces
* A free-form description of the various ways this tag may be used.

The site will keep track of each unique (tag, item, user) tuple, and this information will be public.

### Adding

Any authorized account can add a tag to an item.
When adding a tag, a full-text search of existing tags and descriptions will be available.
If a user adds a tag that has never been used before, they will be required to also write a description of how the tag may be used.
Other users may later edit this tag description, but will be encouraged only to correct errors and expand the scope of the description, rather than removing existing uses.
A history of description changes will be kept and presented to users for possible flagging.

## Comments

Some pages, including data objects and studies, have comment sections open to authorized accounts.

## Flagging

Ideally there will be limited curational involvement by site administrators in data and content as the population is limited and generally trustworthy.
However, there still should be a method for people to bring moderational attention to questionable content.
This may simply be an email/feedback interface that allows referencing specific pages.

