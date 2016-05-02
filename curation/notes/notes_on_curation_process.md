# Notes on Curation Process

## What PIs need to know prior to contributing videos
###* What is the PI responsible for, what must the PI warrant?
* Permission levels
* OK with what's shared
* Provide point of contact, whether that's a PI or someone else in the lab

###* The difference between raw data and analysis materials, we can make the study/dataset distinction on the backend
* PI will provide info about excluded/pilot raw data

###* Assure PI that we will keep the PI in the loop for all representations of their data
* We will check with the PI at every step that leads to viewing by others, regardless of whether the PI delegates to lab personnel
  * Data may only be viewed by others if the PI explicitly shares it: we will never share data ourselves
 * We will remind the PI how to access their files in the Databrary (registration and passwords to beta library)
 	* Once beta site is up
 * PIs can edit their own data
 	* upload files
 	* assign groupings
 	* titles and descriptions
 	* images
 	* whatever else a PI wants to edit, we can build
* We will sent the PI (and any delegates) reminders about what we need and when

###* List of desirables for PI to deliver and ways we'll support the PI
* PIs need list of terms
  * Session
  * Dataset (Necessary?)
  * Study
  * Group 
 
 * Possible records/fields/groupings for each session to be specified in a table for PI to fill in  
   * Mandatory fields?
     * Tell PI that we want the birthdate/test date/sex and ask a) if they have the information and b) what other information they collect about their participants that is useful for them
    * Fields that Databrary desires (test date, birthdate, sex, etc.)
   *  Other fields that Databrary desires plus PI will want
   * Which published studies PI put this session into
 
   * Fields Databrary recommends for PI's sake
     * Study
     * Exclusion and reasons for
     * How to change tags (e.g., from inclusion to exclusion and vice versa from study for science reasons or because data are unsuitable)
   * Other data PI would like to share
* Dataset level description
  * Exemplars will help, specify types of information that should be included, guidelines for language
* Dataset name
  * These issues are especially important for Dylan
  * How will datasets sort under PI's name?
  * How to give datasets descriptive names that reveal what's on videos?
  * What job(s) are/will be carried by dataset name?
  * How do dataset names map into study names? Are study names the names of the papers?
  *What will show up in a search? Dataset name? Study name? Both? 
* Suggestions for other metadata to share
  * Guidelines for language and tags in all files (mindful of sharing, typical use of research terms and plain English language, don't use terms and tags idiosyncratic to your own lab)
  * Reminders about proofreading prior to sharing and the possibility of editing at any point (even after files download)
  * Exemplars of coding manuals, protocols
  * Anything deidentified can be shared, but some less useful to users so PI can spend less times on these things
* Ways Databrary can currently help PI to manage data
* Ways Databrary can minimize PI's workload: Remove need to enter data more than once

###* Standardized tags?
* For datasets, studies, sessions, segments of videos
  * Should we try to extract these from coding spreadsheets? 
  * Context of session, participant demographics, study design, etc?
  * Keywords at the dataset and study levels
* Balance the need for standard tags for searching against the desire to repurpose data
* APA
	* Field Guide http://www.apa.org/pubs/databases/training/field-guide.aspx
	* Methodology Fields http://www.apa.org/pubs/databases/training/method-values.aspx
	* Record Structure http://www.apa.org/pubs/databases/training/record-structure.pdf 	
	* Controlled vocabulary http://psycnet.apa.org/index.cfm?fa=termfinder.displayTerms&id=B45C31BC-AAA6-7D6E-2F25-BE2894D50CAA

###* Volumes
* Dataset
  * Top Level
  	* Funding
  	* Investigators
  	* Sharing
  	* Identified data
  		* Photos
  	* Materials
  	  * Stimuli
  	  * Protocols
  	  * Blank Questionnaires
  	  * Blank consent forms
  * Session
  	  * Identified data
  	    * Videos
* Study
	 * Top Level
	 	 * Funding
	 	 * Investigators
	 	 * Sharing
	 	 * Identified data
	 	   * Photos
	 	 * Publications
	 	 * Materials
	 	   * Coding manual
	 	   * Will we also pull materials from the datasets that share sessions with a study?
	 	 * Products
	 	   * Graphs
	 	   * Posters
	 	   * Presentations
	 	 * Analysis
	 	   * Coding
	 * Session
	   * Identified data
	     * Videos
	   * Excerpts
	   * Analysis
	     * Coding

###* Possible record categories for each session in a dataset
  * Session will always have test data and consent level
  * Participant
    * Birthdate
    * Sex
      * Male
      * Female
    * Race
      * American Indian or Alaska Native
      * Asian
      * Native Hawaiian or Other Pacific Islander
      * Black or African American
      * White
      * Multiple
    * Ethnicity
      * Not Hispanic or Latino
      * Hispanic or Latino
    * SES
    	* Are there standard ways of reporting this?
    	* Free text?
    * Languages in the home
      * free text 
    * Typical development/disability
      * Disability only, free text?
      * Y/N? for Disability with open text option if Y?
      * Standards?
    * Term (gestation) for infants
      * Numerical months? Days?
    * Experience with target behavior
      * Numeric?
    * Pull other relevant information from investigators' SPSS
* Task
  * Descriptive name of tasks
  * Experimental task, structured observation, free play, (naturalistic no manipulation)
  * Need time codes if clipping videos by task
* Condition
  * May be between or within
* Group
* Pilot
  * Need a way to tag whole datasets that are pilot studies, failed studies, unpublished studies
  * Some pilot data may be included in datasets (with consecutive S numbers)
  * And need a way to describe these to prevent PI embarrassment while facilitating repurposing of data
  * Notes from meeting with Athena 2013-12-10
* Excluded
  * Drop down with free text option
  * Note for excluded can be in SPSS data file in organization spreadsheets (counterbalance)
  * Fussing out, falling asleep
  * Unable to complete or did not qualify (can't comprehend, not-typical, disabled, make to many errors)
  * Noise
  * Experimenter error
  * Outliers
  * Equipment failure
* Location of testing 
	* HIPAA considers all geographic subdivisions smaller than state identifiable 
* Setting (home, lab, playground, classroom)
* People on video (single S, dyad, family, peers, etc)

###* Relations between datasets and studies: how to tag sessions within datasets as belonging to particular studies
* This is a major record for each session of high import to Databrary (transparency) and to PI (embarrassment)
* Implicitly by adding files or records (e.g. inclusion, exclusion)
* Explicitly by maintaining list of including sessions

###* Time considerations
* Maintaining a timeline within sessions (sequence of clips?)
* Or place tasks/conditions/etc at different sessions

###* File formats
* Videos
  * MP4
    * Spec is h.264 in a MP4 wrapper with AAC/ Tested in different browsers, does not work on Firefox on Mac. Not going to do a workaround
    * Eventually make the move to H.265 or VP9?
  * FFMPEG has, so far, converted mpeg, mov, mpg, mpeg2, mpeg-1, avi
  * Audio
  * Coding
  	* .opf
  	* .csv? other files from Manglod, Noldus, Elan
  * Other
  	* .xls
  	* .sps
  	* .sav
  	* .pdf
  	* .docx
  	* .doc
  	* .jpg
  	* .csv

###* Electronic release forms that link to videos
###* Uploading blank forms used, for reference and improving methods
    	  
