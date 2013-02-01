This is an informal, high-level, functional description of the project.
The primary goal of this document is breadth: to identify the full range of features currently planned to provide a complete product.
A secondary goal is to define a consistent set of *terms* or vocabulary that can be used to internally describe parts of the system.
It also may occasionally make design recommendations.

# Scope

This project consists of two aspects which may be more-or-less integrated or separate: Databrary and Labnanny.
Databrary will be a centrally-hosted website, while Labnanny may be a desktop application, web appliance, part of Databrary, or some combination thereof.
It seems likely that the majority of the Labnanny functionality will be provided in some way by the Databrary website, perhaps in addition to other interfaces, so this distinction will largely be ignored and the project referred to as *the site*.
Similarly, Datavyu, while it will likely be integrated with the site via APIs, is considered a separate project for these purposes and will not be described here.

# User management

Various *entities* representing real world identities may be associated with the site.
Entities can belong to the following *classes*:

1. Site administrators (root)
2. Institutional entities representing various organizations, universities, or governments
2. IRB members and administrators belonging to an institution
3. Principal Investigators (PI) engaged in collecting research data either from or for the site
4. Students and research staff responsible to PIs

All entities (except root) are affiliated with one or more parent entities of a higher class.  

Any individual accessing content hosted on the site will require an *account*: for the initial release there will be no anonymous access.
However, not all entities will have active accounts.  
The total population of potential users of the site is estimated to be in the thousands.

There will be multiple *levels* of accounts:
* Unverified users, who are not associated with an entity, do not belong to any class, and as such will have only limited access to publicly available data (if any)
* Authorized entities, who have full access to all data shared with them or users of their class
* Contributors, who have accepted the contributor agreement and have IRB-approved studies that can contribute data to the site.  This may only include PI users.

Are entities and account details public?

## Account Registration

Potential users will be required to register an account and provide:
- An email address, to be verified with token-based email confirmation
- A real name, perhaps with some first/last structure, similar to journal standards (but please [think this through](http://www.kalzumeus.com/2010/06/17/falsehoods-programmers-believe-about-names/))
- Possibly a captcha if unverified users are allowed to post comments, but probably this will not be allowed
- Other optional user details (URL, personal/profile stuff, ...)

Successful registration results in an unverified account.

## Entity Authorization

Authorization verifies, establishes, and maintains the affiliation between an entity and a parent entity, and possibly the association between that child entity and an account.

### Requesting

The list of classes above naturally sets up a hierarchy of authority.
Users may additionally complete one or more authorization steps that, if successful, will result in creation of their entity and affiliation with another entity.
To do this, users must identify the parent entity they wish to be affiliated with.  
* For institutions, this affiliation with root (or a particular administrator) will have to be setup on demand or manually by site administrators.
* For institute administrators and PIs, this means selecting an institution (which may be an "unaffiliated" meta-institution)
* For students and research staff, this means selecting a PI.

A form allowing some kind of efficient searching for entities will be provided.
This may require providing additional details, for example university-provided account information (e.g., NYU NetID).

### Granting

This request will generate a request to the selected parent entity.
If an account is associated with that entity, that user will be able to authorize the affiliation, and also select a level (below their own).
If no account is associated with an entity, an appropriate delegate account may instead do the authorization (i.e., a university administrator for a university, or a site administrator).
A page for each such parent account or delegate will be available listing all children and requests.
Periodic reauthorization may be necessary for continued affiliation, according to the policies established by some higher entity.  

University affiliation may be able to be automated by authentication with university account details.
How are delegates established?  

Authorizing an affiliation indicates that the authorizing agent has confirmed that the identity of the account matches the (possibly new) entity, and establishes some level responsibility for that account.
Other details may be required during the authorization:
- Specific role of the account (IRB, PI, post-doc, grad student, staff, undergrad, etc.)
- What else?

## Authentication

Various options here:
* Standard passwords with good strength, hashing, and salting standards (should not unnecessarily restrict special characters or length)
* [OpenIDs](http://wiki.openid.net/w/page/12995211/OpenID_Authentication_2) supplied by users
* Multifactor something
* Delegation to university authentication systems

Authentication should not be overly burdensome, while still ensuring secure.
Entities (universities in particular) may be able to establish additional restrictions, for example restricting access of descendant accounts to particular IP subnets.

## Contributor agreements

Becoming a contributor involves accepting a contributor agreement, and may require additional authorization by institutional IRBs.

# Data

The types of objects and associations between them that may be entered into the site are broad and diverse.
These may be files with known formats, arbitrary opaque files of unknown format, and structured matadata.
The possible relationships may be potentially unlimited, and arbitrary many-to-many relationships may be required.

## Storage

Primary storage consists of a structured database.
Objects that are represented by files will be assigned IDs via the database, and then stored as files such (by ID?) on a filesystem of some kind and treated as opaque data for most purposes (i.e., no on-line searching, only atomic downloading).  

New objects may be created by an explicit user upload, or by offline processing of other objects (e.g., transcoding).

## Metadata

Each object may be associated with some amount of metadata stored in the database.
Much of this metadata will be extracted from the object itself via processing specific to the object's format.
This includes (but is not limited to):
- object size, date, ownership, history
- video length, format, resolution
- full-text indices of all textual data
- ...

## Organizational units

There are specific groupings and relationships that are of primary importance and will be represented by individual pages on the site.

### Study

Perhaps the central organizational unit for the site is the concept of a *study*, or project, or experimental protocol, representing concurrently an research paradigm and a set of data objects collected under this paradigm.
In particular, this is likely to be the first object the user enters in the system, either when preparing to upload a set of data to Databrary or when starting a new project in Labnanny.
While not all data associated with a study will have the same sharing or read permissions, they will all have the same write permissions.  

Studies will have the following components:
- Some number of entity *owners*, usually the users who collected the data and have full access to create and modify associated data
- A designated *principal* owner, likely a PI user, who has long-term stewardship of the data
- A schema for what information and data will be collected for each acquisition in the study, which may be determined explicitly through user interrogation or implicitly as acquisitions are added
- A heterogeneous collection of *materials* describing the research procedures, including:
   - lab notebooks describing procedures, goals, etc. (usually documents)
   - stimuli that are presented to participants (consent forms, instruction documents, images, or videos)
   - analysis or experiment *programs* or code (so-named to distinguish them from coding data)

#### Experiment?

Occasionally experiments can involve more than one procedure, e.g., longitudinal experiments, pilot studies, control studies, or other cases when between-subjects conditions involve different procedures or quantities of data.
There may be scenarios where these procedures are so significantly different so as to require a new organization structure combining multiple studies into an *experiment*.
Longitudinal studies in particular are a good use-case to think about for a lot of assumptions here.
Requires further investigation.

### Acquisition

A study consists of some number of *acquisitions*.
These acquisitions are usually individual participant or sessions of the experiment.
Importantly, each acquisition in a study involved the same experimental procedures for collecting data.
However, not all acquisitions will necessarily have the same set of objects, as some may be missing for various reasons.  

An acquisition can include both raw data collected at the time of the experiment and summary data that has been extracted from these objects later by researchers or programs.
These may include:
- Acquisition date
- Permissions collected from the participant, including sharing rights and consent forms, which apply (at least) to all raw (non-anonymized?) data
- Information collected about the participant(s) involved, including age/birthdate, gender, demographics, etc.
- Video, audio, eye-tracking, motion-tracking, skin conductance, EEG, and other multi-dimensional *time-series* objects each with known (fixed?) temporal resolution
- Temporal synchronization relationships between time-series objects, in the form of sync points
- Coding data from Datavyu or similar programs that provide structured annotations about temporal regions of one or more synchronized time-series object
- Tabular or other array-structured data made either during the experiment or from analyses of other data

Of these, only a sharing permission is required (though of course pointless without at least one other object).

### Participant?

In general participants are treated as anonymous entities associated with a single acquisition.
However, for the purpose of Labnanny, there may be a desire to explicitly keep track of non-anonymous participants to help with recruiting and scheduling.
This raises a number of potential privacy concerns, however.  

The best practice would be to completely separate the concept of participant for Labnanny from those participants in acquisitions, so that there are no links between them.
A best case would if Labnanny information is stored in a local application or appliance, that this is never sent to Databrary.
Participant data from Labnanny may be used, carefully and selectively, to automatically fill in participant acquisition data, but this must be limited to gender, age/birthdate, demographic information.  

Longitudinal experiments may also wish to explicitly maintain the association between identical participants in different acquisitions (studies?).

### Researcher

Each entity may have a page on the site that includes:
- Studies owned by that researcher
- Written scholarly research, including PDFs and links ([DOI](http://www.doi.org/)) to published articles
- Other profile information from an associated account

### Article?

We may also want to keep more explicit track of written articles themselves, including the studies and researchers that contributed to them.
However, the primary motivation for articles is to allow expanded searching of studies.
We should not over-build any article management beyond simple external references as there are numerous other sites with this information.

## Searching

All textual materials, articles, documents, code, and really anything at all passable should be available to a full-text search.
Additionally, there will be more specific "advanced" searches for objects of particular types with appropriate metadata conditions.

## I/O

How data move into and out of the system.

### Data entry

Our goal is to have data (and metadata in particular) entered into the system early and with minimal interaction.
The earlier data get into the system, the less risk there is for it to be lost, converted, processed, or forgotten.
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

### Sharing

There will be a complex permissions system specifying which objects may be shared with which users at what times.
Various permissions documents will establish specifications for these.
This may also involve partial access, for example to metadata for an object but not its content, or to a restricted portion of a video.

### Downloading

Some objects will be available for direct download.
This may involve special processing for certain objects, e.g., watermarking or explicit permission verification of some kind.

# Community

## Tags

Users should be able to add free-form tag keywords to objects at most levels.
Tagging may provide an important resource for searching and browsing.
However, it is important to remember that the number of users will be quite small compared to many other tagging communities, and so aggregate information across may be more noisy and less reliable.
On the other hand, tagging by users is likely to be more accurate, and so the primary concern will be tagset normalization (i.e., collapsing different tags representing identical concepts).

## Comments

Some pages may have comment sections open to authorized accounts.
