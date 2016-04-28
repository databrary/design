Notifications requirements

User panel/page for controlling notifications and the format they are received.
Some will be required and cannot be turned off.
Some email notifications can be turned off.

Notifications will be displayed sitewide, potentially in a different way than we currently handle messages.

## Notifications

Description on preferences page.

> Site message.

> Email message.

Template for email:

> Subject: Databrary notifications
>
> Dear `USER`,
>
> `NOTIFICATIONS`
>
> You can change your notification settings or unsubscribe here: /profile/edit?page=notifications
>
> Sincerely,
> The Databrary Team
> --
> Databrary
> 196 Mercer Street, Suite 807
> 212-998-5536
> contact@databrary.org
> databrary.org

Open questions:

* Should email notifications include timestamps (if so, how and in what format)?
** No
* Should there be more information in AuthorizeRequest about "This may take some time for your school or PI to approve here's what to expect..."
** Yes, LS can help you finalize it
* Currently both are ordered by time.  Emails could be grouped by something like volume, but it's hard to make formatting that makes sense.  Suggestions.
* Should we switch AuthorizeChildRequest include the name of the parent rather than the child (for institution authorization emails)?
** Yes

### AccountChange

Your email or password changed

> `USER` changed `PARTY`'s [account information](/profile/edit?page=account).

> `PARTY`'s email or password has been changed. If you made this change, you may ignore this email. To review or update your account information, go to: /profile/edit?page=account. If you did not make this change, please contact us immediately.

### AuthorizeRequest

You submitted an authorization request

> `USER` requested [authorization](/profile/edit?page=apply) from `PARTY`.

> `USER` requested authorization from `PARTY`. To review the status of this request, go to: /profile/edit?page=apply

### AuthorizeGranted

You were authorized

> `USER` granted/revoked your [authorization](/profile/edit?page=apply) under `PARTY`.

If granted:

> You have been authorized by `PARTY`, as a Databrary Authorized Investigator/Affiliate.  *If databrary access:* Your authorization allows you to access all the shared data in Databrary. Our primary goal is to inspire you to reuse shared videos on Databrary to ask new questions outside the scope of the original study. You will also find illustrative video excerpts that you can use for teaching and to learn about researchers' methods and procedures.
>
> *If databrary access:* Databrary's unique "active curation" functionality allows you to upload your videos as you collect them so that your data are backed up and preserved in our free, secure library, your videos are immediately available to you and your collaborators offsite, and your data are organized and ready for sharing.  Your data will remain private and accessible only to your lab members and collaborators until you are ready to share with the Databrary community.  When you are ready, sharing is as easy as clicking a button!
>
> *If databrary access:* To share your data, you can use our template Databrary release form for obtaining permission for sharing from your participants, which can be found here: http://databrary.org/access/policies/release-template.html
> The release form can be added to new or existing IRB protocols. It is completely adaptable and can be customized to suit your needs. We also have lots of information and helpful tips about managing and sharing your video data in our User Guide: http://databrary.org/access/guide
> As soon as your protocol is amended to allow you to share data, you can start uploading your data from each new session. Don't wait until your study is complete to upload your videos. It's much easier to upload data after each data collection while your study is in progress!
>
> *If databrary access:* We are dedicated to providing assistance to the Databrary community. Please contact us at support@databrary.org with questions or for help getting started.

If revoked:

> Your authorization under `PARTY` has been revoked. To review and apply for authorizations, go to: /profile/edit?page=apply

### AuthorizeExpire

Your authorization is expiring

#### AuthorizeExpiring

Note that site messages all already have dates (in this case expiration date).

> Your [authorization](/profile/edit?page=apply) through `PARTY` will expire soon.

> Your authorization under `PARTY` will expire soon. Please contact `PARTY` and request that they renew your authorization.

#### AuthorizeExpired

> Your [authorization](/profile/edit?page=apply) through `PARTY` is expired.

> Your authorization under `PARTY` has expired. Please contact `PARTY` and request that they renew your authorization.

### AuthorizeChildRequest

Someone requested authorization

> `USER` requested [authorization](/profile/edit?page=grant) for `PARTY`.

> `PARTY` requested to be authorized through you. To approve or reject this authorization request, go to: /profile/edit?page=grant

### AuthorizeChildGranted

You authorized someone

> `USER` granted/revoked [authorization](/profile/edit?page=grant) to `PARTY`.

> `USER` granted/revoked authorization to `PARTY`.

### AuthorizeChildExpire

Your affiliate's authorization is expiring

#### AuthorizeChildExpiring

> `PARTY`'s [authorization](/profile/edit?page=grant) will expire soon.

> `PARTY`'s authorization will expire soon. If you would like to renew `PARTY`'s authorization, go to: /profile/edit?page=grant

#### AuthorizeChildExpired

> `PARTY`'s [authorization](/profile/edit?page=grant) is expired.

> `PARTY`'s authorization has expired. If you would like to renew `PARTY`'s authorization, go to: /profile/edit?page=grant

### VolumeAssist

An assistance request was submitted for your volume

> `USER` requested [assistance](/volume/1/edit?page=assist) with `VOLUME`.

> `USER` requested assistance with your volume, `VOLUME`.

### VolumeCreated

Someone created a volume on your behalf

> `USER` created `VOLUME` on `PARTY`'s behalf.

> `USER` created a volume, `VOLUME`, on `PARTY`'s behalf. To review this volume, go to: /volume/1

### VolumeAccessSharing

Someone changed the access permissions on your volume

#### VolumeSharing

> `USER` changed `VOLUME` to [`LEVEL`](/volume/1/edit?page=access).

> `USER` changed your volume, `VOLUME`, to `LEVEL`. To review, go to: /volume/1/edit?page=access.

#### VolumeAccessOther

> `USER` set `PARTY`'s [access to `LEVEL`](/volume/1/edit?page=access) on `VOLUME`.

> `USER` set `PARTY`'s access to `LEVEL` on your volume, `VOLUME`. To review, go to: /volume/1/edit?page=access

#### VolumeAccess

> `USER` set `PARTY`'s [access to `LEVEL`](/volume/1/edit?page=access) on `VOLUME`.

> `USER` set `PARTY`'s access to `LEVEL` on your volume, `VOLUME`. To review, go to: /volume/1/edit?page=access

### Release

Someone marked data on your volume publicly releasable

#### ReleaseSlot

> `USER` set a [folder](/volume/1/slot/1) in `VOLUME` to `LEVEL`.

> `USER` set the release level of a folder in `VOLUME` to `LEVEL`. To review, go to: /volume/1/slot/1

#### ReleaseAsset

> `USER` set a [file](/volume/1/slot/1?asset=1) in `VOLUME` to `LEVEL`.

> `USER` set the release level of a file in your volume (`VOLUME`) to `LEVEL`. To review, go to: /volume/1/slot/1?asset=1

#### ReleaseExcerpt

> `USER` set a [highlight](/volume/1/slot/1?asset=1) in `VOLUME` to `LEVEL`.

> `USER` set the release level of a highlight in your volume (`VOLUME`) to `LEVEL`. To review, go to: /volume/1/slot/1?asset=1

### ExcerptVolume

Someone created a highlight on your volume

> `USER` created a [highlight](/volume/1/slot/1?asset=1) in `VOLUME`.

> `USER` created a highlight in your volume (`VOLUME`). To review, go to: /volume/1/slot/1?asset=1

### Comment

Someone commented on your volume or replied to your comment

#### CommentVolume

> `USER` [commented](/volume/1/slot/1?comment=1) on `VOLUME`.

> `USER` commented on your volume (`VOLUME`). To review or reply, go to: /volume/1/slot/1?comment=1

#### CommentReply

> `USER` [replied](/volume/1/slot/1?comment=1) to your comment on `VOLUME`.

> `USER` replied to your comment on the volume, `VOLUME`. To review or reply, go to /volume/1/slot/1?comment=1

### TagVolume

Someone added a tag on your volume

> `USER` [tagged](/volume/1/slot/1?tag) `VOLUME` with `TAG`.

> `USER` tagged the volume, `VOLUME`, with `TAG`. To review tags, go to: /volume/1/slot/1?tag

### SharedVolume

A new volume was shared

> `USER` shared `VOLUME`.

> `USER` shared the following volume, `VOLUME`, on Databrary. To review, go to: /volume/1

### Newsletter

Subscribe to the newsletter
