Notifications requirements

User panel/page for controlling notifications and the format they are received. 
Some will be required and cannot be turned off. 
Some email notifications can be turned off.

Notifications will be displayed sitewide, potentially in a different way than we currently handle messages.

## Notifications

Template:

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

### AccountChange

> `USER` changed `PARTY`'s [account information](/profile/edit?page=account).

> `PARTY`'s email or password has been changed. To review or update your account information, go to: /profile/edit?page=account.
> If you did not make this change, please contact us immediately.

### AuthorizeRequest

> `USER` requested [authorization](/profile/edit?page=apply) from `PARTY`.

> You have requested authorization from `PARTY`. ... To review the status of this request, go to: /profile/edit?page=apply

### AuthorizeGranted

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

### AuthorizeExpiring

> Your [authorization](/profile/edit?page=apply) through `PARTY` will expire soon.

>

### AuthorizeExpired

> Your [authorization](/profile/edit?page=apply) through `PARTY` is expired.

>

### AuthorizeChildRequest

> `USER` requested [authorization](/profile/edit?page=grant) for `PARTY`.

> `PARTY` requested to be authorized. To approve or reject this authorization request, go to: /profile/edit?page=grant

### AuthorizeChildGranted

> `USER` granted/revoked [authorization](/profile/edit?page=grant) to `PARTY`.

> `USER` granted/revoked authorization to `PARTY`.

### AuthorizeChildExpiring

> `PARTY`'s [authorization](/profile/edit?page=grant) will expire soon.

>

### AuthorizeChildExpired

> `PARTY`'s [authorization](/profile/edit?page=grant) is expired.

>

### VolumeAssist

> `USER` requested [assistance](/volume/1/edit?page=assist) with `VOLUME`.

> `USER` requested curation assistance with `VOLUME`.
> `INFO...`

### VolumeCreated

> `USER` created `VOLUME` on `PARTY`'s behalf.,

>

### VolumeSharing

> `USER` changed `VOLUME` to [`LEVEL`](/volume/1/edit?page=access).

>

### VolumeAccessOther

> `USER` set `PARTY`'s [access to `LEVEL`](/volume/1/edit?page=access) on `VOLUME`.

>

### VolumeAccess

> `USER` set `PARTY`'s [access to `LEVEL`](/volume/1/edit?page=access) on `VOLUME`.

>

### ReleaseSlot

> `USER` set a [folder](/volume/1/slot/1) in `VOLUME` to `LEVEL`.

>

### ReleaseAsset

> `USER` set a [file](/volume/1/slot/1?asset=1) in `VOLUME` to `LEVEL`.

>

### ReleaseExcerpt

> `USER` set a [highlight](/volume/1/slot/1?asset=1) in `VOLUME` to `LEVEL`.

>

### ExcerptVolume

> `USER` created a [highlight](/volume/1/slot/1?asset=1) in `VOLUME`.

>

### CommentVolume

> `USER` [commented](/volume/1/slot/1?comment=1) on `VOLUME`.

>

### CommentReply

> `USER` [replied](/volume/1/slot/1?comment=1) to your comment on `VOLUME`.

>

### TagVolume

> `USER` [tagged](/volume/1/slot/1?tag) `VOLUME` with `TAG`.

>

### SharedVolume

> `USER` shared `VOLUME`.

>
