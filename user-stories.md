# Databrary User Stories

## Create supporting files for a study.

---
**Story:**

As an investigator (PI, postdoc, graduate student),
I want to be able to create and manage studies. Assigning graduate students and undergrads to collect and code data.

**Scenario steps:**

Given that I am signed in as a study lead (PI, postdoc or GradStudent) and I am on my personal profile (home) page

When I

1. Create a new study
2. Enter a title and abstract for the study.
3. And add additional members to the study 

Then I will be on the study overview page that contains the specified title and abstract. It will otherwise be 'empty', and contain no trials (acquisitions). The members I nominated will be listed has having read/write access as will the user and PI parent.

---

**Story:**

As an investigator,
I want to be able to at a glance see how progress is being made towards completing a particular study.

**Scenario steps:**

Given that I am signed in, and looking at specific study overview page.

Then I should be able to see all the trials collected for the study, grouped by progress (or status):

* scheduled. (participant due to come on certain day)
* collected. (acquisition collected and uploaded to system)
* coded. (additional metadata )
* completed. (any additional post processing or analysis has been performed.)

When all trials in a study reach the 'completed' status, collection and analysis is complete and the study is ready for writing.   

---

**Story:**

As a principal investigator,
I want to be able to manage the accounts for all the people who work in my lab and have access to the data.

**Scenario steps:**



1. Go to member authorization page
2. Displays (nested) list of members, account renewal dates, and new requests for membership
3. ...  

As a principal investigator,
I want to be able to ensure that all data is stored and collected in accordance with IRB rules and regulations. 
* Does labnanny manage IRB protocols, expirations dates, etc. that can be added to a study?

As an investigator,
I want to be able to create collection protocols (procedures) and coding manuals.

1. Go to study page
2. Upload materials, consent forms, manuals
3. (Optional, unknown) Describe study schema, layout, interview questions, data types  
    * Drag-and-drop interface to describe "all the information that will be collected for each acquisition/subject/session"
    * Add data "containers" for participant information, video data, interview questions, measurements
    * Add analysis "containers" for coding spreadsheets

As an investigator, 
I want members of my research team to receive notifications when there are changes in my study protocol. 
Those reminders might also prompt me to consider whether I need to revise my formal IRB protocol.

### Work day to day collecting data.

As an investigator,
I want to be able to refine collection protocols (procedures), based on experience and pilot studies / participants. 
* This may involve editing study materials (documents) or design

As an experimenter,
I want to be able to add data for a new trial in a particular study. Adding details about consent, any demographic information as well as the raw video and sensor data.

1. Go to study page
2. Add acquisition
3. Fill in fields, automatically derived from study design and/or previous acquisitions
4. Upload data files, by web form or syncing application

As an experimenter,
I want to be able to be able to perform any post-processing (quad mixing, etc) to create completed datasets that need to be coded or marked up.
* Does this happen entirely in Datavyu?

### Work day to day coding study.

As an experimenter,
I want to be able to refine coding manuals, based on experience, ambiguities and inter-rater reliability of trials that have already been coded.

As a coder,
I want to be able to see what trials need to be coded (marked up) using datavyu.

As a coder,
I want to automatically create and download everything I need to start coding a new trial within a study.

1. Go to study page
2. Select acquisition
3. Download automatically-generated archive of all data

As a coder,
I want to be able to submit my coded data to be stored alongside the rest of a study.

As an investigator,
I want the coding activities of my lab members tracked and recorded so I can monitor progress of a study.

### Publish

As a researcher,
I want to publish written articles based on data collected for the study.

As an investigator,
I want to publish (share) datasets that are referenced in published articles. 

1. Go to study page
2. "Flip switch" to give public access  

As an investigator
I want to be able to cite datasets that have been shared with the wider community.

1. Find study
2. Look at/copy/export cite section of page (can choose from standard formats for export: RIS, bibtex, etc.)


### Discovery

As a User,
I want to find studies tagged by a particular Researcher.

As a User,
I want to find studies with a particular tag or tags.

As a User,
I want to search by various attributes, 
see list [here](https://github.com/databrary/design/blob/master/pages.md#data-view)



### User Authentication and Authorization

As an Investigator,
I want to sign up to access data held within databrary.

As an Investigator,
I want to sign up to share data with databrary.



As an Investigator,
I want to authenticate using my home institution's identity provider 
so that I don't have to remember another set of credentials.

As an Investigator,
I want to delegate authority to one of my students
so that they can perform tasks on my behalf.

1. Student applies for and obtains account
2. Student goes to authorization request page
3. Student searches for and finds PI
4. Student requests membership under PI
5. PI goes to authorization review page
6. Selects student request, selects appropriate user level, and approves




As an Investigator,
I want to change the access level on one of my studies.

1. Go to access controls for study
2. Select or search for databrary user(s) to apply to
3. Add or remove allowed user groups

As an authorised member of databrary,
I want to renew my annual access to the library each year.


### Preservation

As the Preservation Subsystem,
I want to enact preservation workflows on the incoming Databrary submission information packages
so that the content can remain accessible for the foreseeable future.



## Extended demonstration scenarios

### Contribution

0. Apply, sign contributor agreement...?
1. Create new study, enter title, details, members
2. Create new acquisition, enter participant demographics
3. Upload video file


### Discovery

1. Search page: Search for some terms
2. Search results: View list of matching studies and select one
3. Study page: View study details and list of participants/data files (acquisitions)
3. Request access to study? Switch to non-public view?
4. Data page: View acquired data for one participant and select video data
5. Video page: Preview/download video



