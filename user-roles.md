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
See authorization request [page](pages.md), which generates a request to the responsible users.
If the appropriate entity is not found, the user is provided a link to request it, generating a request to the site administrators.

#### Authorization granting

In the authorization area, users are presented with a list of users who have requested or been granted authorization by them or their descendants (recursive tree, so root sees everything).
From here they can change any status, level, grant and remove authorizations, and also search for other entities to add.

### Authorized user

Once a user has been appropriately authorized by another entity, and there exists a path from root to their entity, they are considered authorized.
Authorized users can get access to all data shared publicly or specifically with them or one of their parents (if so marked).
Each authorized user has [permissions](overview.md#user-management) as set by their authorizing user.

## Specific roles

This section describes how specific roles relate to the entity permissions structure described in the [overview](overview.md).
While all authorized users have entities, not all entities are associated with accounts.

### Root

A special, singleton entity called "root" has no parents and no associated account, but full, unrestricted access to all aspects of the site.

### Site Administrators

Individuals responsible for administering Databrary itself are children of root with the Admin permission, granting them equivalent access to managing users and authorizations as root itself.

### Groups

Groups of individuals, for example representing a cohesive lab with collaborative data, may be represented as entities in the same way as institutions, with members delegated permissions much as they would be as co-owners to a set of studies.

### Institutions

Schools, universities, governments, and other organizations may have entities of their own, without associated accounts.
Any such entity with an institutional agreement with Databrary must have such an entity, which is a child of root with all permissions except Admin (Authorize, Contribute, Access, Site).
These entities and relationships are generally setup by Site Administrators.

### Administrators

Individuals responsible for administering Institutions, which may include IRB members and university administrators, are children of that Institution with Admin permission.
This allows them to authorize new users with that Institution, granting them appropriate permissions.

Administrators will not usually need Contribute permission or perform any research activities.

### Principal Investigators, Contributors

PI-eligible individuals wishing to participate in databrary must first obtain authorization from an authorized Institution.
As such, they will be children of an Institution with all permissions except Admin (Authorize, Contribute, Access, Site).

PIs may primarily create studies, and thus own studies and assign membership.
They may also perform all other research activities.

### Members

Students, postdocs, and research staff responsible to PIs may be authorized by PIs.
The PI may choose the exact permissions granted to members.
They will automatically be granted Site permission, giving the access to generally shared data.
They will often be granted Access permission, giving them read access to all studies owned or shared with the PI.
They may be granted Contribute permission, allowing them to create studies of their own and manage studies owned by the PI.
They may not be granted Authorize permission.

> Do we want to make the Admin permission available as well?
> It seems preferable over e.g., having PIs give their password to members.

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

