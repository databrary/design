# Databrary User Stories

## Create supporting files for a study.

### Story

As an investigator (PI, postdoc, graduate student),
I want to be able to create and manage studies. Assigning graduate students and undergrads to collect and code data.

#### Steps

Given that I am signed in as a study lead (PI, postdoc or grad student) and I am on my personal profile (home) page.

When I

1. Create a new study
2. Enter a title and abstract for the study.
3. And add additional members to the study 

Then I will be on the study overview page that contains the specified title and abstract. It will otherwise be 'empty', and contain no trials (acquisitions). The members I nominated will be listed has having read/write access as will the user, while the PI parent (possibly user) will have ownership.

---

### Story

As a principal investigator,
I want to be able to manage the accounts for all the people who work in my lab and have access to the data.

#### Steps

Given than I am signed in, and on my personal profile (home) page.

I should be able see a list of 'sponsored members' to whom I have granted access to. Each sponsored member has details about:

* Name, email.
* Renewal date.
* Access/user level.
* Status (default sort):
    * pending requests/renewals first.
    * active users.
    * disabled users last.

Actions that a PI will be able to perform per member:

* approve membership request or access renewal.
* set access level.
* disable access.

---

### Story (Labnanny?)

As a principal investigator,
I want to be able to ensure that all data is stored and collected in accordance with IRB rules and regulations.

#### Steps

From lab management page, I can see:
* List of active IRB protocols including: expiration dates, links to protocol document, users on protocol?
* List of studies under each IRB with links to study pages

---

### Story

As an investigator,
I want to be able to create collection protocols (procedures) and coding manuals.

#### Steps

Given that I am signed in, have permissions to see a study and I am on my personal profile (home) page.

When I follow the link to the study from my profile page.

Then I should be able to refine the study by:
* adding a collection protocol.
* adding a coding manual / dictionary / schema.
* adding stimuli. 

In order to describe the study schema, I can:
* Describe all the information that will be collected for each acquisition/subject/session using a drag-and-drop interface to 
* Add data "containers" for participant information, video data, interview questions, measurements
* Add analysis "containers" for coding spreadsheets

---

### Story (Labnanny)

As an investigator, 
I want members of my research team to receive notifications when there are changes in my study protocol. 

Those reminders might also prompt me to consider whether I need to revise my formal IRB protocol.

## Work day to day collecting data.

### Story (Labnanny)

As an investigator,
I want to be able to refine collection protocols (procedures), based on experience and pilot studies / participants. 

#### Steps

Given I am signed in, have permissions to see a study and I am on my personal profile (home) page.

When I follow the link to the study from my profile page.

Then I should be able to edit the study by:
* editing the collection protocol.
* editing the coding manual.
* editing the stimuli.

This should also track which of the acquisitions/trials were collected and under what version of the protocol/coding manual. 

---

### Story

As an experimenter,
I want to be able to add data for a new trial in a particular study. Adding details about consent, any demographic information as well as the raw video and sensor data.

#### Steps

Given I am signed in, have permissions to see a study and I am on my personal profile (home) page.

When I follow the link to the study from my profile page.

Then I should be able to add a trial to the study. Specifying:

* Uploading one or many acquisitions (data files, video, etc) via web form or syncing application.
* Filling in relevant demographic information as well as nominating a permissions / level of sharing consent. 

## Work day to day coding study.

### Story

As an experimenter,
I want to be able to refine coding manuals, based on experience, ambiguities and inter-rater reliability of trials that have already been coded.

#### Steps

Given I am signed in, have permissions to see a study and I am on my personal profile page.

When I follow the link to the study from profile page

Then I should be able to edit the study by:

* editing the coding manual.

---

### Story (Labnanny)

As a coder,
I want to be able to see what trials need to be coded (marked up) using datavyu.

#### Steps

Given that I am signed in, have permissions to see a study and I am on my personal profile page.

When I follow the link to the study from the profile page.

Then I should be able to see which trials/acquisitions have been completed and those which are still in a 'collected' but uncoded state.

---

### Story (Labnanny?)

As a coder,
I want to automatically create and download everything I need to start coding a new trial within a study.

#### Steps

Given then I am signed in, have permissions to see a study and I am on my personal profile (home) page.

When I follow the link to the study from the profile page.

Then I should be able to see a list of all the trials, each with a download button/action. Pressing download pulls down:

* All associated acquisitions (video, other datafilee).
* Prepared Datavyu spreadsheet.
* Any datavyu scripts.
* All zipped into as a sensible project folder structure. 

---

### Story

As a coder,
I want to be able to submit my coded data to be stored alongside the rest of a study.

#### Steps

Given that I am signed in, have permissions to see a study and I am on my personal profile (home) page.

When I follow the link to the study from the profile page.

Then I should be able to see a list of all the trials, with a upload button / action. Pressing upload allows:

* The user to select the folder on their desktop containing the project folder structure. Which automatically uploads and updates the trial.
* We will probably also want sync tools or functionality built into datavyu.

---

### Story (Labnanny)

As an investigator,
I want the coding activities of my lab members tracked and recorded so I can monitor how progress is being made towards completing a particular study.

#### Steps

Given that I am signed in, have permissions to see a study and I am on my personal profile (home) page.

When I follow the link to the study from the profile page.

Then I should be able to see all the trials collected for the study, grouped by progress (or status):

* scheduled: participant due to come on certain day
* collected: acquisition collected and uploaded to system
* coded: additional metadata
* completed: any additional post processing or analysis has been performed

If I click on a trial to view more details I should be able to see a change log of who has done what to the trial since it was added to the system.

When all trials in a study reach the 'completed' status, collection and analysis is complete and the study is ready for writing.   

## Publish

### Story

As a researcher,
I want to publish written articles based on data collected for the study.

### Story

As an investigator,
I want to publish (share) datasets that are referenced in published articles. 

#### Steps

1. Go to study page
2. "Flip switch" to give public access  

### Story

As an investigator
I want to be able to cite datasets that have been shared with the wider community.

#### Steps

1. Find study
2. Look at/copy/export cite section of page (can choose from standard formats for export: RIS, bibtex, etc.)


## Discovery

### Story

As a User,
I want to find studies tagged by a particular Researcher.

### Story

As a User,
I want to find studies with a particular tag or tags.

### Story

As a User,
I want to search by various attributes, 
see list [here](https://github.com/databrary/design/blob/master/pages.md#data-view)



## User Authentication and Authorization

### Story

As an Investigator,
I want to sign up to access data held within databrary.

### Story

As an Investigator,
I want to sign up to share data with databrary.

### Story

As an Investigator,
I want to authenticate using my home institution's identity provider 
so that I don't have to remember another set of credentials.

### Story

As an Investigator,
I want to delegate authority to one of my students
so that they can perform tasks on my behalf.

#### Steps

1. Student applies for and obtains account
2. Student goes to authorization request page
3. Student searches for and finds PI
4. Student requests membership under PI
5. PI goes to authorization review page
6. Selects student request, selects appropriate user level, and approves

### Story

As an Investigator,
I want to change the access level on one of my studies.

#### Steps

1. Go to access controls for study
2. Select or search for databrary user(s) to apply to
3. Add or remove allowed user groups

### Story

As an authorised member of databrary,
I want to renew my annual access to the library each year.

## Preservation

As the Preservation Subsystem,
I want to enact preservation workflows on the incoming Databrary submission information packages
so that the content can remain accessible for the foreseeable future.

## Extended demonstration scenarios



### Discovery

1. Search page: Search for some terms, e.g., walking, Adolph
2. Search results: View list of matching studies and select one (ds: provide list of studies)
3. Study page: View study details and list of participants/data files (acquisitions)
4. (walk through tabs: ds: provide tab content details, documents tab, data tab go to next step)
5. (click on data row -> go to pop up : authenticate / register)
5. Apply, sign user agreement...?
6. (Databrary authorizes user)
7. (user notified that they've been approved)
8. user logs in
9. Data page: View acquired data for one participant and select video data
10. Video page: Preview/download video

### Contribution

1. Create new study, enter title, details, members
2. Create new acquisition, enter participant demographics
3. Upload video file
