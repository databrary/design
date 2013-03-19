## list of wireframes and flow for presentation

### Discovery/Browsing

NEW : Databrary home page (add search box, full color)

- ala current databrary.org
- search box
- login/register link

HAVE: Search results page

- search for "walking" and/or "Adolph"
- refine by: age/race/ethnicity of participant, excerpts available, number of participants (range)
- example results: http://scholar.google.com/scholar?q=adolph+walking

CHANGE: Study page

- Documents tab: Study manual, IRB protocol, Blank consent form, Coding manual
- Data tab: Table of participants: participant ID, age at test, # videos, # data files
- comment/tagging template

NEW : Login/Register page

NEW : Study:Participant page

- age at test/race/ethnicity
- acquisition date
- permissions: "shared on databrary", "excerpts allowed"
- video "Session"
- data file "Summary measures.xls"
- coding spreadsheet "Datavyu"
- download all as zip file
- comment/tagging template

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

NEW : Study view: Access management

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

NEW : User view : Access management

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
