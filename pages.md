List of individual Databrary web pages or interfaces and their contents.
Many of these will have stable, linkable URIs of a form like "http://databrary.org/TYPE/ID/ignored-stuff".
Others may just be tabs within other areas of the site.
Things that are not explicitly addressed here:
- URI link format specifications
- Precise exposed terminology
- Global site organization and navigation

# Home page

This may be a user's own entity page if they're logged in.

* Owned studies, sort:rev by date
* New relevant stuff

# Common components

## Top navigation bar

* link:home
* account info, link:entity, link:preferences

## tags

## comments

# Search

## Study search

## Tag cloud

# Data view

## study

[Wireframe](study-public-view.png)

* title
* owner(s) and members, link:entity
* description
* list of materials, link:object
* table of acquisitions, sort:index, link:acquisition
* list of included studies, link:study
* list of referencing articles, link:article
* link:tags
* comments

## acquisition

* study mini-view/container
* date of acquisition
* consent permissions
* participant demographics, if authorized
* table of data files, with types, length, link:object
* link:tags
* comments

## object

* name
* description
* type
* date
* link:study, if material
* link:acquisition, if data
* timeseries info, if timeseries
* download link, if authorized
* history of changes
* link:tags
* comments

## article

* authors, link:entity
* title
* abstract
* external link
* list of referenced studies

## entity

* name
* type, parent info, link:entity
* account status
* user info
* owned studies, link:study
* written articles, link:article

# Data input

Input pages largely parallel data view pages.

## study

## Study design

## acquisition

## Access control

For studies and possibly other objects with permissions,
a control allowing the owner to view and set the list of allow users as their permissions.

A table with columns:
* user group: "everyone", "Databrary users", specific user, specific user and their delegates/descendants/lab members
* permission: "view only", "edit", "owner"

Note: Only databrary users will be able to view videos and other sensitive participant data, and only if the participant consent permissions allows it.

# User management

## Login

## Registration

## Preferences

* change password
* change email
* change timezone
* link:authorization

## Authorization request

## Authorization review

* expandable tree of existing children, with actions (remove, renew, set level)
* expandable tree of requests, with actions (deny, approve, set level)
