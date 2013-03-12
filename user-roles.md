# Roles

## Access levels

### Anonymous user

On first visit to the site (with no valid authentication token: cookie, browser id, etc.) access is treated as anonymous.
Anonymous users get access to public content, including search, researcher (entity) pages, publications, studies (skeleton, no data) that have been granted public access, and public excerpts.
Users may transition to another level through a "login" link in the header of every page, or by attempting to access non-public data through a "get access" link of some kind.

#### Login page

The login page allows users to authenticate or register, transitioning to *registered user* or *authorized user*.

### Registered user

Once a user has successfully created an account and logged into that account, and before they have been authorized by another entity (or whenever there is no path of trust from root to their entity), they are considered registered (but unauthorized).
Registration may require an extra step of validating an email account before the account is created/active.
Registered users get access to the same content as anonymous users, plus an authorization area, reachable from a link in the header of every page, or by attempting to access non-public data through a "request access" link of some kind.

> Can registered users create studies?  Upload data?  Get access to their own previously uploaded data?  Be granted access explicitly to other studies?  Consider when a researcher leaves an institute (no longer authorized).

#### Authorization request

In the authorization area, users may search for a parent entity to request authorization from.
This page presents the following options:
- I am an administrator at a university, IRB, or other research institute.  This presents a search for the institute, and generates a request to the site administrators to establish the appropriate relationships.
- I am a PI (or eligible to be a PI) at a university or other research institute.  This presents a search for the institute, and generates a request to the institute administrator.
- I work with a PI as a student, postdoc, staff, RA, or other researcher.  This presents a search for the PI (possibly by institute) and generates a request to them.
- I am an independent researcher.  This generates a request to the site administrators.

If the appropriate entity is not found, the user is provided a link to request it, generating a request to the site administrators.

#### Authorization granting

In the authorization area, users are presented with a list of users who have requested or been granted authorization by them or their descendants (recursive tree, so root sees everything).
From here they can change any status, level, grant and remove authorizations, and also search for other entities to add.
Users may only set levels below their own level, and must set permissions inheritance for each child to one of:
- None: no permissions are inherited, but the user is still authorized to use the site.
- Read: any data viewable by the parent can be viewed by the child.
- Admin: the child can perform any operation the parent can (including modifying studies and user authorization, but excluding account administration).

> Do we want to make the Admin inheritance level generally available?
> It seems preferable over e.g., having PIs give their password to members.
> It is also useful for institute administrators (depending on which direction the administrator - institute relationship goes).

### Authorized user

Once a user has been appropriately authorized by another entity, and there exists a path from root to their entity, they are considered authorized.
Authorized users can get access to all data shared publicly or specifically with them or one of their parents (if so marked).
Each authorized user has a [level](overview.md#user-management) as set by their authorizing user.

## Roles mentioned in user stories

(assume that these will be combined/streamlined and could be the basis for personae.)
(see if roles below can be replaced by entity levels listed [here](overview.md#user-management)

* Principal Investigator
* Investigator
* Student
* Postdoc
* Study Lead
* Experimenter
* Coder
* Researcher

