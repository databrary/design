# SRCD Presentation

## Databrary Solutions

Walk-through of Databrary functionality

### Website Development Process: Prototyping

* Prototyping is a strategy for efficiently adapting to unpredictable and dynamic requirements
    - Gather use cases from potential users
    - Generate design proposals, mockups
    - Get feedback from users, update, iterate
* Organization vs. flexibility
    - Standardize structure and terminology

---

* Functional design: what should it do?
* Interface descriptions: how should it look?
    - **Wireframes**: rough sketches of web pages
    - Quickly see what's missing, easy to update
* Open source, open process
    - [github.com/databrary](http://github.com/databrary)

### Wireframes

#### Front page

![front page](home-page.png)

- links
- search

---

#### Study

* Dataset/package
* Structural top unit

![study page, public view, excerpts tab active](study-public-view-excerpts.png)

- title
- description
- owner
- funders
- article
- excerpts
- sign in/register

---

#### Register

![registration page](register.png)

---

#### Sign In

* Username
* Password
* Shibboleth SSO
* OpenID

![front page](home-page.png)

- sign in

---

#### Search

* Any terms

![search results](search-basic-results-authenticated.png)

- signed in
- search box

---

* Matching studies
* Specific critera

![search results](search-basic-results-authenticated.png)

- excerpts
- species
- demographics

---

#### Study

* Document list

![study page, authorized view, documents tab active](study-authorized-view-documents.png)

- metrics
- cite
- tags
- comments
- documents

---

* Participant list
* Next structure level

![study page, authorized view, data tab active](study-authorized-view-data.png)

- data
- participant 2

---

#### Participant

![participant page](study-participant.png)

- breadcrumbs
- demographics
- tags/comments
- files

---

#### Video data

![video page](study-participant-viewer.png)

- breadcrumbs
- permissions
- source

- download

---

#### Dashboard

* Popular, interesting, new
* Manage

![dashboard](investigator-dashboard.png)

- lab
- jones
- word-learning
- authorize

---

#### Authorize

![user authorization](user-permissions-management-tree.png)

- investigator
- affiliate
- request
- delegation

---

#### Contribute

![add study](study-authorized-new.png)

- funding
- data

---

#### Participant

![add participant](study-participant-new.png)

---

#### Upload

![upload page](study-upload-page.png)

- permissions

---

#### Permissions

![study permissions](study-permissions-management-tree.png)

- owner
- member
- all
- smith

---

## Databrary System Architecture

Storage, Preservation, and Identity

### System Architecture

![system architecture](architecture.svg)

#### Database Schema
