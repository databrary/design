## critical user stories

Full citation, permanent URL, download, citing.
- study page, citation section

Access statistics: # of views/downloads, most viewed, most cited, etc.
- add statistics to study page
- dashboard lists top

Grant access to new lab member, add to study.
- dashboard: shows request, links to...
- user authorization page

Searching by keywords, attributes.
- search results page, options on sidebar

Find out how a previous study was done, viewing stimuli and videos.
- study page, documents tab

Recode/expand coding spreadsheet for existing video.
- participant page, example of this having been done already

Find excerpts to use in presentations, classes.
- search results page, excerpts option

## list of wireframes and flow for presentation

### General Questions
- [x]:?: what to use for "User contributions licensed under ???": can we leave this out for now?
- [x]:?: do we need a "logged-in" view of various pages? if so, which ones?: only study needs both views, everything else is either agnostic or logged-in only
- [x]:?: what username to use for logged-in view?: Karen Adolph
- [x]:?: do we still need "study-public-request" wireframe/image?: we might want something like it, "pending investigator authorization", but I think we can leave it out for now.

### Discovery/Browsing

CREATED : Databrary home page (add search box, full color)   
- ala current databrary.org
- search box
- login/register link
- [image: home page](./home-page.png)
- [x]: fix NSF link with grant #



UPDATED: Search results page   
- search for "walking" and/or "Adolph"
- refine by: age/race/ethnicity of participant, excerpts available, number of participants (range)
- example results: http://scholar.google.com/scholar?q=adolph+walking
- [x]:ds: could you provide a list of sample data set names, or should I just use paper titles?: if you can copy the google scholar abstract excerpts that's probably sufficient
- [ ]:stretch goal: and maybe add some random details about # of participants, videos, etc. (random numbers 10~50)
- [image: basic search results](./search-basic-results.png)
   


UPDATED: Study page (Public View)

- Documents tab: Study manual, IRB protocol, Blank consent form, Coding manual   
- [image: study, public view, documents tab active](./study-public-view-documents.png)
- Data tab: Table of participants: participant ID, age at test, # videos, # data files   
- [image: study, public view, data tab active](./study-public-view-data.png)
- [x]: citation format, instructions, download in RIS/bibtex/etc.
- [x]: change "Shared on November 2000" to "Shared November 2011"
- [x]: reduce # video file to 1 each participant, data files to 2


UPDATED: Study page (Authorized View)

- Documents tab: Study manual, IRB protocol, Blank consent form, Coding manual, Video display
  - [image: study, authorized view, documents tab active](./study-authorized-view-documents.png)
- Data tab: Table of participants: participant ID, age at test, # videos, # data files   
  - [x]:?: labels for participants?: labels like tags? not on this view (see below). labels like names? 1, 2, 3, is fine.
  - [image: study, authorized view, data tab active](./study-authorized-view-data.png)


- comment/tagging template
  - [x]:?: sign-in to tag / comment: Yes.
  - [x]:?: comment/tagging granularity? at study level, or data/file level?: For now, separate comments/tags at both levels, but the only need to visible on each page.
  - [ ]:jgp: So: the study page, participant page, and video/datafile page each have their own tags and comments, but they don't need to visible from elsewhere; we may want to consolidate later, but we don't have to decide that now.
- [x]:?: does "request access" workflow via e-mail still hold? or should user sign-in first?: Let's require logins
- [x]:?: is "collection details" the correct term?: I think we can use the word "study"; perhaps "study contents"
- [x]:jgp: logged-in view: make filenames "links" for download, and also add "download all documents as zip file" link.

CREATED : Login/Register page

- [image: sign-in](./sign-in.png)
- [image: registration page](./register.png)
- [x]: fields on registration page: "Full Name", "Institution" (search/dropdown/other), "Postal address", "Email", "Phone #", password, continue button is "View User Agreement"

CREATED : Study:Participant page

- age at test/race/ethnicity
- acquisition date
- permissions: "shared on databrary", "excerpts allowed"
- video "Session"
- data file "Summary measures.xls"
- coding spreadsheet "Datavyu"
- download all as zip file
- comment/tagging template
- [image: study-participant](./study-participant.png)
  



NEW : Video page (viewer, download link)

- comment/tagging template

### Contribution

NEW : Dashboard (post login)

- studies
- search
- user authorization


NEW : Blank study page (base on Study page)

- same as study page with blank fields, edit links
- Documents tab: "new document"
- Data tab: "new participant"
- link to access management


NEW : Blank participant page

- same as participant page with blank fields, edit links
- highlight permissions settings: 2 checkboxes
- "add new file" link

NEW : Upload page

- description
- acquisition date

### Access management

CREATED : Study view: Access management

- expandable tree with columns: "Name" (text/textbox), "Permissions" (dropdown), "Individual only" (checkbox)
- "All Databrary Users", "View Only", unchecked, with brace on right covering all entries
  - "NYU", blank, blank
    - "Me", "Owner", checked (no brace)
      - "Jane Postdoc", "Member", unchecked
      - "Mary Gradstudent", "Member", checked
      - "Pete Undergrad", blank, blank
  - "PSU", blank, blank
    - "Rick Gilmore", "Share Data", unchecked
  - Search box with add button, blank, blank
- Key at bottom with permissions:
  - No Access: cannot see this study
  - View Only: can see the study but no data
  - Share Data: can see the entire study and data, unless participant permissions specify otherwise
  - Member: can edit and upload data
  - Owner: full access and responsibility for study
  - Individual only: should only this person be granted access, or everyone in the group?
- [image: study permissions tree](./study-permissions-management-tree.png)


IN PROGRESS : User view : Access management

- expandable tree with columns: "Name" (text/textbox), "Expiration", "Permissions", "Action"
- "Databrary", blank
  - "NYU", "2 years", "Full", reapply
    - "Me"
      - "Joe Labmanager", "1 year", "Admin", renew/remove
      - "Jane Postdoc", "1 year", "Contribute", renew/remove
      - "Mary Gradstudent", "8 months", "Contribute", renew/remove
      - "Pete Undergrad", "2 weeks", "Browse", renew/remove
      - "New Gradstudent", "requested", none, accept/reject
      - Search box with add button
- Key at bottom with permissions:
  - Browse: standard access to Databrary, but no access to my data
  - Access: view any studies I have access to
  - Contribute: create and edit studies I own
  - Full: full access to Databrary as an authorized investigator
  - Admin: delegate all my permissions to edit and authorize users
- [image: user permissions tree](./user-permissions-management-tree.png)
