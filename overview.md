This is an informal, high-level, functional description of the project.
The primary goal of this document is breadth: to identify the full range of features currently planned that provide a complete product.
A secondary goal is to define a consistent set of *terms* or vocabulary that can be used to internally describe parts of the system.
It also may occasionally make design recommendations.

# Scope

This project consists of two aspects which may be more-or-less integrated or separate: Databrary and Labnanny.
Databrary will be a centrally-hosted website, while Labnanny may be a desktop application, web appliance, part of Databrary, or some combination thereof.
It seems likely that the majority of the Labnanny functionality will be provided in some way by the Databrary website, perhaps in addition to other interfaces, so this distinction will largely be ignored and the project referred to as *the site*.
Similarly, Datavyu, while it will likely be integrated with the site via APIs, is considered a separate project for these purposes and will not be described here.

# User management

Various *entities* representing real world identities may be associated with the site.

The total population of potential users of the site is estimated to be in the thousands. This estimate comes from the fact that The Society for Research in Child Development (SRCD) has 5,500 members in various disciplines.

## Accounts

Any individual accessing content hosted on the site will require an *account*: for the initial release there will be no anonymous access.
However, not all entities will have active accounts. 
 
Public entity information (name, affiliation, etc.) is public data (VIEW), while account information (username, email, etc.) is protected (DOWNLOAD).

### Account Registration

Potential users will be required to register an account and provide:
- An email address, to be verified with token-based email confirmation
- A real name, perhaps with some first/last structure, similar to journal standards
- Possibly a captcha if unverified users are allowed to post comments, but probably this will not be necessary
- Other optional user details which may be set and changed later (timezone, URL, personal/profile stuff, ...)

Successful registration results in an unverified account.

## Permissions

There are four basic permission levels:
- VIEW: can search, view studies, see metadata, but not access or download protected data in any way.
- DOWNLOAD/BROWSE: full read access to all data and metadata.
- CONTRIBUTE/EDIT: can create and edit studies of their own.
- ADMIN: can change permissions and perform other administrative tasks.

These permission levels apply to the following aspects of the site:
- The whole site, specifying the primary user access level, which distinguishes public anonymous users (VIEW), associate researchers (DOWNLOAD), authorized researchers (CONTRIBUTE), and administrators (ADMIN).
- Individual studies, which determines the type of access granted to that volume: viewing metadata (VIEW), accessing protected data (DOWNLOAD), editing and uploading new data (CONTRIBUTE), or data ownership and changing volume permissions (ADMIN).
- Individual objects within studies have further permissions determining whether VIEW, DOWNLOAD, or CONTRIBUTE volume access is necessary to view them.

### Authorization

Each entity (except root) may be associated with one or more parent entities of a higher level.
Each association represents a trust relationship from parent to child, called an *authorization*, and is associated with an inherited site permission level, which specifies the maximum level of site access that may be inherited by the child from the parent.
That is, the level of site access of a user is the maximum over parents of (the smaller of (the parent's site access) and (the inherited site permission)).
The root user implicitly has ADMIN site access.

Each authorization is also associated with a non-inherited delegation, granting the child users equivalent permissions to the parent up to the specified level.
This applies only to users and studies, so that a user's effective permissions are their own plus (their parents' intersected with the delegation level).
In the case of ADMIN delegation, this includes any operation the parent can perform including changing authorizations and permissions (excepting perhaps some personal account details, passwords, etc.)

The entity-parent relationship forms a DAG: no authorizations that would form a loop are permitted.
These levels allow arbitrary and flexible relationships between entities, and thus account permissions.
However, in practice there will only be a small number of [roles](user-roles.md) with pre-defined relationships.

### Entity Authorization

Authorization verifies, establishes, and maintains the affiliation between an entity and a parent entity, and possibly the association between that child entity and an account.
Entity relationships establish a "web of trust" wherein by authorizing another entity as a child represents a trust relationship.
Only entities with a global Authorize permission can authorize other entities.

#### Requesting

The list of entity levels above naturally sets up a hierarchy of authority.
Users may additionally complete one or more authorization steps that, if successful, will result in creation of their entity and affiliation with another entity.
To do this, users must identify the parent entity they wish to be affiliated with.  
* For institutions and administrators, this affiliation (with root or an administrator) will have to be created on demand or manually by site administrators.
* For PIs, this means selecting an institution (which may be an "unaffiliated" meta-institution).
* For students and research staff, this means selecting a PI.

Searching for potential parent entities can be done hierarchically: by geographical region, to institute, to PI.
This may also require providing additional details, for example university-provided account information (e.g., NYU NetID).

#### Granting

This request will notify all accounts with ADMIN permission over the selected parent.
Each account will have access to an authorization page, showing an (expandable) tree rooted at the highest entities over which they have ADMIN control.
This page will include all descendants of those entities, as well as all requested descendants.
From here, users may add or remove authorizations or permissions on these authorizations.
Periodic reauthorization may be necessary for continued affiliation, according to the policies established by some higher entity.  

Authorizing an affiliation indicates that the authorizing agent has confirmed that the identity of the account matches the (possibly new) entity, and establishes some level responsibility for that account.
Other details may be required during the authorization:
- Specific role of the account (IRB, PI, post-doc, grad student, staff, undergrad, etc.)

## Authentication

Various options here:
* Standard passwords with good strength, hashing, and salting standards (should not unnecessarily restrict special characters or length)
* [OpenID](http://wiki.openid.net/w/page/12995211/OpenID_Authentication_2) provided by users
* [BrowserID](https://browserid.org/)
* Multifactor something
* Delegation to university authentication systems through Shibboleth (not a complete solution)

Authentication should not be overly burdensome, while still ensuring security.
Entities (universities in particular) may be able to establish additional restrictions, for example restricting access of descendant accounts to particular IP subnets.

## Contributor agreements

Becoming a contributor involves accepting a contributor agreement, and may require additional authorization by institutional IRBs.

## Auditing

The site will keep records of all important activity on the site, including account and timestamp for at least the following events:
* login, logout: IP (does not imply consistency throughout session, could log first visit per time period)
* changing account info (name, email, openid): field, old/new value
* authorizations: action (add/delete/change), parent, child, permissions, expiry
* all data changes, uploads, downloads

Most of these do not need to exposed, but versioning of studies could be made explicit with the ability to view and roll back to previous versions.

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

### Volume

The central organizational unit for the site is the concept of a *volume*, or study, project, or experimental protocol, representing concurrently an research paradigm and a set of data objects collected under this paradigm.
In particular, this is likely to be the first object the user enters in the system, either when preparing to upload a set of data to Databrary or when starting a new project in Labnanny.  

While not all objects associated with a volume will have the same sharing or read permissions, they will all have the same write permissions.
Studies will be comprised of the following components / metadata:

* One or more designated *principal owners*, likely a PI users, who have long-term stewardship of the data
* Zero or more volume *members*, who must be affiliated with and maintained by the principal owner, and will usually be the students, grads and post grads who collected the data and have full access to create and modify everything associated with the volume
* An owner-specified sharing level, one of: owners only, lab only (all descendants of owners), all databrary users, public; along with a set of additional users that have access
* An owner-specified metadata identification data for non-identifiable data: de-identified (still mappable to identified data somewhere, even if not on datarbrary) or anonymized (no way to connect to identified data at all, not subject to HS rules)
* A collection status: ongoing, exempt (completed/shelved)
* Title, abstract-level description text, creation date
* A schema for what information and data will be collected for each slot in the volume, which may be determined explicitly through user interrogation or, preferably, implicitly derived from the materials or built as slots are added
* A heterogeneous collection of *materials* describing the research procedures, usually created before data collection starts
* Zero or many *articles* that represent the scholarly output from data contained within this volume.
* Zero or many *slots* represented the collected data
* Zero or more other studies that provide data to this volume, e.g., for meta-analyses, longitudinal studies, or other more complex experiments involving multiple protocols  

Note that volume permissions assigned to members are in addition to (ORed with) permissions granted by parents.

Collecting example materials from a broad set of labs will inform how studies and slots should be structured, but are expected to include:

   * lab notebooks describing procedures, goals, etc. (usually documents)
   * stimuli that are presented to participants (consent forms, instruction documents, images, or videos)
   * analysis or experiment *programs* or code (so-named to distinguish them from coding data)

#### Slot

A volume consists of some number of *slots* (alternatives for this term: "acquisitions", "clips", "trials", "collections", "sessions", "cases", "units").
These slots are usually individual participants or sessions of the experiment.

Importantly, each slot in a volume involves the same experimental procedures for collecting data. However, not all slots will necessarily have the same set of objects, as some may be missing for various reasons.  

An slot can include both raw data collected at the time of the experiment and summary data that has been extracted from these objects later by researchers or programs. These may include:

* Permissions collected from the participant, including sharing rights and consent forms, which apply (at least) to all raw (non-anonymized?) data
* Demographic information for participant(s), which may be represented as measurements:
	* age/birthdate
	* gender
	* ethnicity
* Zero or more video, audio, eye-tracking, motion-tracking, skin conductance, EEG, and other multi-dimensional *time-series* objects
* Zero or more associated markup or *coding data* metadata files from Datavyu, treated (at least initially) as opaque objects

#### Participant?

In general participants are treated as anonymous entities associated with a single slot.
Eventually, Labnanny may wish to provide more recruiting and scheduling functionality, however this is potentially a very complex component that would should avoid for the time being.

The best practice would be to completely separate the concept of participant for Labnanny from those participants in slots, so that there are no links between them.
A best case would if Labnanny information is stored in a local application or appliance, that this is never sent to Databrary.
Participant data from Labnanny may be used, carefully and selectively, to automatically fill in participant slot data, but this must be limited to gender, age/birthdate, demographic information.  

Longitudinal experiments may also wish to explicitly maintain the association between identical participants in different slots (studies?).

#### IRB protocol?

We may also want to allow researchers to manage their IRB *protocols*, including the actual protocol documents, renewals, and affected studies.
Protocols should be associated with PIs, additional listed entities, expiration dates, and any number of studies which use them.

#### Object

Each data object in an slot is associated with some amount of metadata stored in the database.
Much of this metadata will be extracted from the object itself via processing specific to the object's format.
This includes (but is not limited to):
- object size, date, ownership, history
- video length, format, resolution
- related, synchronized, and derived objects 
- ...

A page representing any object (which may also form a part of its containing volume page) should include this information, along with a generated preview or summary of the data (if available) and a download link (depending on permissions).
Conversions between formats (when uploading or downloading) may also be available for some objects.

#### Measurement

Arbitrary measurements (typed metadata) may be associated with slots (and possibly other levels at all).
Each volume may describe a set of measurements (a template) expected to be reported with each slot.
This may include participant birthdate(s), acquisition dates, participant demographics, and any other collected information.
Users should be able to choose from the set of existing measurements already used in other studies in order to encourage normalization.
Each measurement description is associated with a name, description, consent level, and type (which may map directly to database types in separate tables).

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
* An optional annotation on each volume link describing how the volume contributed to the article.

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
For example, a volume can be presented as rows of slots with columns for scalar metadata and objects.
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

In particular each object and measurement will be associated with one of the following consent levels:
* PRIVATE: not released for sharing on Databrary; only accessible to volume members
* SHARED: released to authorized Databrary users, but not available to the public
* EXCERPTS: certain excerpts from this object may be released publicly if specified
* DEIDENTIFIED: contains participant data but no personal identifiers; candidate for public release
* PUBLIC: no participant data and no restrictions on release

These permissions are intersected with any other permissions that might apply to the object, such as volume access permissions.

#### Public Excerpts

Slots which have appropriately granted participant permissions allow the data owner to specify excerpts.
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

## Excerpts

A primary method by which users may share, highlight, suggest, and comment on data is through excerpts.
These excerpts include but are not limited to publicly available excerpts allowed by sharing permissions.
Ideally, a tag, comment, study document, or any other communication on the site should be able to link to an excerpt.
Unless that excerpt is explicitly labeled public, the same permissions apply to the excerpt as the original object.
An excerpt is a single time point or time range in a video object.
Ideally these can be served directly from the original file.

## Tags

Users can add *tags* or keywords to studies, slots, data objects, excerpts, materials, and articles.
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

# Interface

## I18n

Users should be able to configure their own timezone and time/date format.

Do we need to support any other translations?
