Route Structure
===============

GET /api/OBJECT 
	=> query()
	<= [OBJECT,]

GET /api/OBJECT/:id 
	=> get(id)
	<= OBJECT

POST /api/OBJECT 
	=> create()
	<= OBJECT

POST /api/OBJECT/:id 
	=> update()
	<= OBJECT

DELETE /api/OBJECT/:id 
	=> delete()
	<= OBJECT

	
	
API Requirements
================

Party
-----
get(id) ? with=volumes,tags,comments,parents,children,network
update(id)

Volume
------
get(id) ? with=publications,people,tags,comments
create()
update(id)
delete()
updatePublications(id)

VolumeAccess
------------
query() ? name=STR
get(id)
create()
update(id)
delete(id)

Slot
----
get(id) ? with=assets,tags,comments
create()
update(id)
delete(id)
createComment(id)
updateTag(id)

Record
------
query() ? volume=ID & slot=ID & asset=ID
get(id) ? with=assets
create()
update(id)
delete(id)

Asset
-----
get(id)
create()
update(id)

SlotAsset
---------
query() ? volume=ID & slot=ID & record=ID
get(id)
create()
update(id)
delete(id)



Panel Requirements
==================

OverviewPartyPanel
------------------
=VIEW=
Party -> get(id)

=EDIT=
Party -> get(id)
Party -> update(id)

PartyDataPanel
--------------
=VIEW=
Party -> get(id) ? with=volumes

PartyNetworkPanel
-----------------
=VIEW=
Party -> get(id) ? with=parents,children,network

=EDIT=
Party -> get(id) ? with=parents,children
Party -> update(id)

OverviewVolumePanel
-------------------
=VIEW=
Volume -> get(id)

=EDIT=
Volume -> get(id)
Volume -> update(id)

=CREATE=
Volume -> create()

MaterialsPanel
--------------
=VIEW=
Volume -> get(id) ? with=assets
Slot -> get(id) ? with=assets
Record -> get(id) ? with=assets

PublicationsPanel
-----------------
=VIEW=
Volume -> get(id) ? with=publications

=EDIT=
Volume -> get(id) ? with=publications
Volume -> updatePublications(id) 

PeoplePanel
-----------
=VIEW=
Volume -> get(id) ? with=people

=EDIT=
Volume -> get(id) ? with=people
VolumeAccess -> query() ? name=STR
VolumeAccess -> get(id)
VolumeAccess -> create(id)
VolumeAccess -> update(id)
VolumeAccess -> delete(id)

TagsPanel
---------
=VIEW=
Party -> get(id) ? with=tags
Volume -> get(id) ? with=tags
Slot -> get(id) ? with=tags

Slot -> updateTag(id|name)

CommentsPanel
-------------
=VIEW=
Party -> get(id) ? with=comments
Volume -> get(id) ? with=comments
Slot -> get(id) ? with=comments

Slot -> createComment()

OverviewSlotPanel
-----------------
=VIEW=
Slot -> get(id)

=EDIT=
Slot -> get(id)
Slot -> update(id)

OverviewRecordPanel
-------------------
=VIEW=
Record -> get(id)

=EDIT=
Record -> get(id)
Record -> update(id)

OverviewAssetPanel
------------------
=VIEW=
Asset -> get(id)

=EDIT=
Asset -> get(id)
Asset -> update(id)

BrowserPanel
------------
=VIEW=
Record -> query() ? with=categories & volume=ID & slot=ID & asset=ID
Slot -> query() ? volume=ID & record=ID & asset=ID
Asset -> query() ? volume=ID & slot=ID & record=ID