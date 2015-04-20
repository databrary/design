Functional Requirements for Excerpts UX Changes
===============================================

1. Overall, show if highlight (excerpt) can be used in an educational setting or not (e.g. "Use in talks but cannot make public")
1. On the volume landing page, demonstrate one of three statuses for a given highlight:
     - Highlight is fully public
     - Highlight is educational, but cannot be distributed publically
     - Highlight is for use within Databrary only
1. If user chooses a highlight setting that violates the release level already applied, they should get an alert
1. Upon download, reinforce through messaging and filenames what the highlight setting is (e.g. "By downloading this, you understand that you may only view this clip in an educational setting" etc.)


###Sample Language

-"Highlight on Volume" -> "Create a Clip of this segment"?
-Can we show which release is on the clip being highlighted? e.g. "Shared with appropriate participant release" -> "Shared with current participant release (Private|Databrary Only...)"
-We will probably need some further details about what constitutes educational or research purposes
-What are examples of unrestricted use?

####Level 1 - Databrary Only

-"These clips can only be viewed by registered Databrary users in the same way that it's original clip may be viewed."
-"This clip provides and exemplary highlight of this volume. It may not be used outside of Databrary for viewing in an educational setting."


####Level 2 - May be viewed apart from Databrary within Educational settings

-"This clip may be downloaded and used outside of Databrary for educational purposes such as in the classroom or at a conference."


####Level 3 - Public, no restrictions

-"These clips are available to anybody for unrestricted use."
-"These highlights are publically available, even to users not registered on Databrary"

####When selecting a share level that is more permissive than the current session share & file restrictions?

-"You are creating a clip that will be more accessible than the file it comes from. Confirm that you have the permission to make this change"
-Should langauge be different if it is public or of it is for educational purposes only?



####Current Language on file restrictions:

**Classification***
[checkbox] Never share this file: only available to collaborators.
  |
  |_[checkbox] This file contains identifiable data such as faces, voices, or dates.
    |
    |_[checkbox] Only share this file with authorized Databrary users for educational or research purposes.
      
      |_This file may be available to anybody for unrestricted use.

###Examples

Probably need to have a document that provides some examples of the above sharing levels

####Level 1

PI Quinn wants to create clips that provide succinct and valuable samples of her dataset, but she does not wish to allow other researchers to download these clips and view them in an educational setting. She will choose this sharing level for clips.

####Level 2

PI Quinn has a dataset that for which she does want other Databrary authorized users to download and show in an educational setting (e.g. use it to demonstrate an argument or point in a classroom or at a conference with other researchers). Though she does not want users uploading this clip to public sites such as YouTube. She will choose this level of sharing in so far as she has the authority and capacity. 

####Level 3

PI Quinn wants to create a clip of a video in her dataset that she would like to share completely unrestricted, meaning even non-registered users of the site will be able to access and download this clip for any purpose. However, the original video will not be shared publically and will retain its original restrictions.  

###Other considerations
-How to see all files that are available for educational purposes
-For the file classification checkboxes, how many people are going to adjust those accordingly, any way to do so in batches?
-All files that have identifiable data (faces, voices, dates) will have to pop a warning if one is going to excerpt them?