# SRCD Presentation

## Databrary Solutions

Walk-through of Databrary functionality

> build, quickly and easily solve.

### Website Development Process: Prototyping

* Prototyping is a strategy for efficiently adapting to unpredictable and dynamic requirements
    - Gather use cases from potential users
    - Generate design proposals, mockups
    - Get feedback from users, update, iterate
* Organization vs. flexibility
    - Standardize structure and terminology

> how approach development, where we are.
> design phase, prototype.
> not just demo, toy; tool, dealing with, responding to, changing, emerging.
> 
> a lot don't know.
> users doing today, kind of data, how organized, what want.
> proposals for what could do, how work.
> take back to users, improve.
> 
> tension kept running into.
> mean: diverse set users, developmental psych, clinicians, animal researchers, admins.
> different needs, kinds data, ways working, terminology; support all.
> provide enough structure, faithfully represent relationships, provide context, find, understand.
> 
> hierarchical structure, set of terms, not everyone uses, intuitive.

---

* Functional design: what should it do?
* Interface descriptions: how should it look?
    - **Wireframes**: rough sketches of web pages
    - Quickly see what's missing, easy to update
* Open source, open process
    - [github.com/databrary](http://github.com/databrary)

> working on two things: technical, features, knobs, fit internally; how can be used.
> not real content, storyboards, proposals, describe layout, components.
> useful generating dialog users, questions, what, how.
> update, integrate, improve, close enough to build.
> 
> open technologies, documents, conversations, comment.
> hope encourage technical, look, adapt, involved.

### Wireframes

#### Front page

![front page](home-page.png)

> splash. *links* aspects.
> every page *search*, anyone; what public, often:

---

#### Study

* Dataset/package
* Structural top unit

![study page, public view, excerpts tab active](study-public-view-excerpts.png)

> basic unit organization, container for experiment, protocol, other dataset.
> *title*, *description* of data, how collected, *owner* PI responsible, *funders* supported.
> about data rather results research, paper published, *article* journal.
> 
> *contents* data themselves, as public, one part excerpts.
> selections from raw data, short video clips, chosen highlight aspect, representative, demonstrate, interesting.
> approved, participant.
> summary, watch.
> full data, authorized, *sign in/register*.

---

#### Register

![registration page](register.png)

> provide info, sign.
> suzy q, completed process:

---

#### Sign In

* Username
* Password
* Shibboleth SSO
* OpenID

![front page](home-page.png)

> leverage standard single sign-on technologies, universities.

---

#### Search

* Any terms

![search results](search-basic-results-authenticated.png)

> *signed in*.
> *search*: Karen, researcher collaborate, name; paper, original data, see for self, replicate; 
> whatever, example: *jones joint attention*.

---

* Matching studies
* Specific critera

![search results](search-basic-results-authenticated.png)

> each study, page like earlier, highlighted.
> whichever interested, look at data.
> 
> more specific, Karen, teaching, find excerpt example, *excerpts* limit, pre-selected, short.
> *species*, primate, rodent.
> *metadata*, age range, other, new types metadata, add.
> 
> fixed URL, google, email.
> ask Karen, send link.

---

#### Study

* Document list

![study page, authorized view, documents tab active](study-authorized-view-documents.png)

> go back, point out few more.
> *metrics* popular.
> want use, reference, *citation* format, download manager.
> 
> community: *tagging*, anyone add keywords, "sitting", not originally relevant, search.
> *commenting* notes, discussions.
> 
> *data*, two types:
> documents, overall organization, process, forms, video displays, stimuli, not participant;

---

* Participant list
* Next structure level

![study page, authorized view, data tab active](study-authorized-view-data.png)

> *data*, list of participants, sub-folders.
> acquisitions, sessions, individuals, groups, participants in experiment.
> each associated metadata.
> *participant 2*

---

#### Participant

![participant page](study-participant.png)

> *title*, inside study.
> *demographics* supplied; *community*; *data* files.
> videos, coding spreadsheets, tabular measurements, surveys, associated with participant.
> *video*:

---

#### Video data

![video page](study-participant-viewer.png)

> *title*, specific file, participant, study; demographics reference.
> *permissions*: come back, identified, faces, personally identifiable; shared, excerpts.
> 
> watch video, decide collaborate, follow-up, integrative analysis; *download*.
> interesting parts, comment, tag, excerpts.
> 
> might notice, *source*, originally collected, reuse, repurpose, reanalyze; go back, context.
> 
> it for core, browsing, finding, viewing; other important parts.

---

#### Dashboard

* Popular, interesting, new
* Manage

![dashboard](investigator-dashboard.png)

> first log in, twitter feeds, amazon recommendations, keep up, popular.
> your own *lab* studies, go back, keep track.
> *jones* collaborator, old advisor, keep up.
> *word-learning* monitor, reference.
> 
> management, *authorizing* lab members, access.

---

#### Authorize

![user authorization](user-permissions-management-tree.png)

> busy, two parts:
> own level access, *investigator*, within institution, full, browse, contribute;
> grant, *affiliate*, browse, through you.
> *request* new grad applied.
> 
> *delegate* privileges own studies, file server:
> read-only see, create/edit behalf, administer account.
> PI ultimately responsible actions, data, under authority.

---

#### Contribute

![add study](study-authorized-new.png)

> important, create study, describe, *funding*.
> indexed, searching, reporting: all NIH, all participants/demographics specific grant/year.

---

#### Participant

![add participant](study-participant-new.png)

> next step, provide metadata.
> optional, other information specific study, measurements, survey answers, multiple conditions, group.

---

#### Upload

![upload page](study-upload-page.png)

> finally, upload.
> acquisition date, *permissions* required, classify contents/uses.
> public, no participant, study manual;
> de-identified, participant, no personal identifiers, summary;
> identified, videos, recordings, health, sensitive personal.
> specify permissions, shared, excerpts.
> can't ensure permissions, should not release outside lab, private.
> upload.

---

#### Permissions

![study permissions](study-permissions-management-tree.png)

> single file, control who see study.
> *owner*, control permissions, responsibility, typically PI, multiple collaborators.
> *members*, edit, upload, collecting/analyzing.
> 
> default studies public, data authorized investigators; not ready/comfortable, change.
> search, add other *users*, access

---

## Databrary System Architecture

Storage, Preservation, and Identity

### System Architecture

![system architecture](architecture.svg)

#### Database Schema
