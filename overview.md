This document includes *defined terms* and many open questions.

# Scope

This project consists of two aspects which may be more-or-less integrated or separate: Databrary and Labnanny.
Databrary will be a centrally-hosted website, while Labnanny may be a desktop application, web appliance, part of Databrary, or some combination thereof.
It seems likely that the majority of the Labnanny functionality will be provided in some way by the Databrary website, perhaps in addition to other interfaces, so this distinction will largely be ignored and the project referred to as *the site*.

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
These may include:
- Video, audio, EEG and other multi-dimensional time-series objects
- Coding data (associated with one or more time-series objects)
- Written scholarly research, including PDFs of technical notes and links (DOI) to published articles (referencing one or more study or more specific dataset)
- A *study* or protocol, representing concurrently an research paradigm and a set of data objects collected under this paradigm
- Lab notebooks, stimuli, and other research *materials* (associated with a study)
- Subject metadata, including age, gender, demographics, etc. (associated with one or more data objects)
- Tabular or other structured data
- Analysis or experiment programs and code
- Arbitrary opaque files of unknown format

The possible relationships, only briefly highlighted above, may be potentially unlimited, and arbitrary many-to-many relationships may be required.
However, there are specific groupings that are of primary importance and will each have individual pages on the site:
- Data objects into an *acquisition* representing part of a study, e.g., a single subject or session
- Acquisitions made within a study and materials associated with that study
- Studies performed by researchers
- Articles produced by researchers

## Storage

Primary storage consists of a structured database.
Objects that are represented by files will be assigned IDs via the database, and then stored as files such (by ID?) on a filesystem of some kind and treated as opaque data for most purposes (i.e., no on-line searching, only atomic downloading).  

New objects may be created by an explicit user upload, or by offline processing of other objects (e.g., transcoding).

## Metadata

Each object may be associated with some amount of metadata stored in the database.
Much of this metadata will be extracted from the object itself via processing specific to the object's format.
This includes:
- object size, date, ownership, history
- video length, format, resolution
- full-text indices of all textual data
- ...

## Searching

All textual materials, articles, documents, code, and really anything at all passable should be available to a full-text search.
Additionally, there will be more specific "advanced" searches for objects of particular types with appropriate metadata conditions.

## I/O

How data moves into and out of the system.

### Data entry

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
