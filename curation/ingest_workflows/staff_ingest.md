Databrary Ingestion: A curation guide for staff
===============================================

This guide provides criteria and minimal requirements that a potential data contributor must meet in order to contribute data to Databrary. It also provides a base set of criteria for prioritizing datasets as a whole in the process of determining data relevance for Databrary.

#Confirming Permissions & Sharing

*These are most essential to avoiding setbacks and dissatisfaction with contributors after we've invested significant resources curating and ingesting data.*

- Is this or can this dataset be based on video recordings as a primary data source?

- Can this dataset be shared with a community of authorized researchers within the behavioral sciences?

- Are you permitted under your current IRB protocol to share with other researchers outside of the protocol?

- Has this dataset been cleared with IRB and has appropriate participant consents for sharing on Databrary (see: [Obtaining releases from participant](http://databrary.org/access/guide/investigators/release.html))? 

- Are you (and your IRB) okay with personally identifying information like date of birth and session date being shared with other authorized researchers who have permission to access this dataset?

- Can this dataset be downloaded by anyone who has permission to access this dataset?


#Rubric for Determining Priorities of Data

|  | 1 | 2 | 3 | 4 | Score |
|:------------------------------------------------------------------------------------------------------------------------------------------------------------:|-----------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------|-------|
| Video, audio, or still images are part of dataset | Video, audio, or images are not part of the dataset | Dataset includes images but no video or audio | Video and/or audio are a non-trivial part of the dataset | Video and/or audio make up the majority of the dataset |  |
| Permission/privacy issues - (see:[Grandfathering Already Collected Data](http://databrary.org/access/guide/investigators/release/grandfathering-data.html) ) | Privacy issues are not inline and with Databrary release standards and never will be | Privacy issues are not inline with Databrary release standards but might be with significant work | Privacy issues are not inline with Databrary release standards but might be with minimal work | Privacy issues are already in line with/eligible by Databrary release standards  |  |
| Dataset is from the Developmental/Behavioral Sciences | No | Yes. Participants are not humans. | Yes. Participants are adults or family members. | Yes. Participants are infants, children, or adolescents and/or parents or other family members. |  |
| Additional data or metadata beyond available video | No. Metadata not able to be culled from other sources. | No metadata, but some could be generated from elsewhere. | Some metadata and other data, with ability to draw metadata from elsewhere. | Yes, more data and existing metadata. |  |
| Topic/content has high interest or potential impact | No | -- | -- | Unique sample/population.  Topic that would benefit other researchers. New data type that is important or compelling to support. |  |
| Study has prior or current funding from NIH or NSF | No | No (qualified) | Yes (qualified) | Yes |  |
| Condition of dataset | Unsalvageable | - To be collected - Analog, but can be converted | - In process  - Digitized  - Needs converting, reformatting | - Archival / in process - Digitized - No conversion required |  |
| Characteristics of data provider | Not available to help | Somewhat available, but lacks deep knowledge of dataset | Available to answer questions | Available to help with questions and metadata preparation if necessary |  |
| Overall shareability of data | Difficult to share data as largely unable to de-identify without sacrificing data value | Can be shared with considerable work to de-identify. | Can be shared with minimal work to de-identify. | Can be shared with Databrary already. |  |

# Internal Workflow

This section outlines the procedures for taking in already completed datasets or bulk uploads of video data and metadata that should be ingested separately from Upload-As-You-Go.

[Assess Data](#assess_data)

[Pre-assisted Curation -- Gather Data](#gather_data)

[Pre-assisted Curation -- Process and Load Data](#process_data)

[Assisted Curation](#assisted_curation)

[Tracking Ingestion Progress and file sharing](#protocols)

## OVERVIEW FOR CURATING DATA
1. Get video data from contributor along with any existing metadata (PI/Curator)
1. Discuss metadata with contributor and demonstrate what a study looks like in Databrary. (Curator)
1. Determine how contributor data and metadata will map to Databrary schema. (Curator) 
1. Move existing metadata into Databrary ingest spreadsheet format (session/participants - see: [Curation Templates](https://github.com/databrary/curation/tree/master/spec/templates)) (Curation Assistant)
1. Review video data for any identifiable information and remove, store on staging server (should ideally be removed or not provided by contributor prior to obtaining) (Curation Assistant)
1. Review metadata and make final changes (Curator)
1. Get top level information and create volume in Databrary (PI/Curator)
1. Ingest Data (Curator)


## <a name="assess_data">Assess metadata</a>

1. Discuss metadata options with contributor:
  * Review the metadata that the contributor has and discuss what variables are important to them
  * Explain that not all variables can be reflected in Databrary the way that they may be in their own study. The value of this approach is in making datasets available for use beyond its original context, therefore we want to standardize wherever possible.
  * Identify any "must-have" or "preferred" representations of data that the contributor might have (e.g. which clips need to be private, or should sessions be divided in a way not immediately apparent by the media they are currently on.)
  * Determine whether or not contributors will continue to add to this dataset once it has been incorporated.

2. Create a metadata mapping and ingestion strategy.
  * Document crosswalk for which contributor variables map to which databrary record types
  * Generate ingest spreadsheet for this dataset.


## <a name="gather_data">Gather and estimate data ingest</a>

_this process, while still in use, might be deprecated for most cases where [assisted curation](#assisted_curation) (bulk uploading files and metadata in the browser) is a more preferable process to get data into Databrary many sessions at a time_

1. Have data provider upload data to shared server via rsync, or alternatively ftp or sftp where necessary.

2. Criteria for estimating priority (as well as time to full ingestion) will be based on the following:
 * Does dataset consist entirely or mostly of file formats and metadata we already support or can easily support --or-- will system require additional features to accommodate data and metadata?
 * Do video files have to be augemented in any way (e.g. removing clips to avoid uploading personally identifying information) 
 * How much Databrary staff time will be required to package data for ingestion?

3. Establish a point person on the contributor side who might be able to answer ongoing questions about the metadata or any missing or damaged resources. This might be different that the authorized owner of the study. This information does not need to be kept in Databrary and is for internal communication purposes only.

 * There is always only one Databrary point-of-contact (almost always the curator) that communicates with the contributor and/or their staff about any questions that come up.

4. Follow up with data provider, where possible and appropriate, to request additional information and provide an approximate idea of when their data will be included in Databrary referencing assessment criteria above.


## <a name="process_data">Processing and loading data</a>

_this process, while still in use, might be deprecated for most cases where [assisted curation](#assisted_curation) (bulk uploading files and metadata in the browser) is a more preferable process to get data into Databrary many sessions at a time_

Once a dataset has been approved for starting the ingestion process, the curator will:

* For each data set we will need to determine which metrics we will be able to add to the data and which cannot be reflected. For example, we currently do not support relationships between metrics across sessions or in sessions (e.g. would not be able to assert that participant 1 is the brother of participant 2 or so forth. Or if there are multiple tasks and multiple participants for a session but not all participants did all tasks, we cannot relate which tasks were performed specifically by which participants). For these reasons, longitudinal studies would be difficult to track currently in Databrary.
* Review video materials for content that will require creation of additional metadata as well as sensitive information not to be released
* Determine and enter data into spreadsheet based on video file and time ranges that comprise a "session"
* Enter and/or shape participant metadata into the established spreadsheet template ([current copy is here](https://github.com/databrary/curation/blob/master/spec/templates/ingest_template.xlsx))
* **TODO: Need to add additional requirements for ingest templates to process properly** 
* Ensure that participant metadata is assigned accurately with session metadata
* Flag any metadata that might need special attention for the ingest process (i.e. needs additional processing or could benefit from automated transformation)
* Arrange assets (videos and other materials) on the server as per asset directory template ([located here](https://github.com/databrary/curation/blob/master/spec/templates/asset_directory_template.md))

Once a dataset has been prepared:

* Transform spreadsheet metadata into ingestible JSON format via script `csv2json.py` found [here](https://github.com/databrary/curation/blob/master/tools/scripts/csv2json.py) and validate against [JSON schema](http://github.com/databrary/curation/spec/volume.json)(the latter is already built intot he databrary online ingest form). 
  - Example usage of `csv2json.py` for non-assisted curation: 
    `python csv2json.py -s [PATH TO SESSION .CSV FILE] -p [PATH TO PARTICIPANT .CSV FILE] -f [FILENAME FOR OUTPUT] -n ["FULL NAME OF VOLUME AS APPEARS ON DATABRARY"]`
* Ingest and transcode metadata and asset data via server scripts ([located here](https://github.com/databrary/curation/tree/master/tools/scripts)).
* Staff will then review materials as they appear on the site and correct any errors that occurred during the ingest process.
* Ensure that data has correct permissions applied to them.
* Reach out to contributor to set schedule a date and time to have a tour for their data, this will also give them a chance to ask questions about taking over the volume on Databrary and suggest any changes they would like to be made before everything is shared.

## <a name="assisted_curation">Assisted Curation</a>

* Users can submit a batch of videos to be organized on their volume by going to `/edit?page=assist` on their volume. There they can **1)** select the checkbox for assisted curation. **2)** Upload any files they want on their volume along with a spreadsheet that gives information about where the files should go (see ([Databrary Ingest Template Spreadsheet](https://github.com/databrary/curation/blob/master/spec/templates/ingest_template.xlsx)) and **3)** provide details and further information about the upload and click submit. This will send the curator a notification that someone has requested help with their contribution.

* Curator can then pull all uploaded content from the `top` folder with the following query:

    \copy (select a.*, c.id as container_id from asset a left join slot_asset sa on a.id = sa.asset left join container c on sa.container = c.id where a.volume = <volid> and c.top = true) to <csv_file_.csv> With CSV HEADER;

  Or by using the script `assisted.py` in [`curation/tools/scripts`](https://github.com/databrary/curation/blob/master/tools/scripts/assisted.py)

  **IMPORTANT**: ensure that data contributor has filenames that will allow you to connect which files go with which session. Usually this is made possible with a participant ID in the file name. 

* Clean up and standardize provided spreadsheet ([see Databrary Ingest Metadata Schema for requirements and formats](https://github.com/databrary/curation/blob/master/spec/metadata.md)) 

* Join the output of the top folder asset dump with the spreadsheet such that the filename provided matches to the asset id using [csvkit](https://github.com/wireservice/csvkit): `csvjoin -c name metadata_provided_by_lab.csv asset_metadata_pulled_from_db.csv > joine_metadata.csv` to create the file that will be used to run the ingest script (see: _Once a dataset has been prepared_) above. The asset id, in this case, will be the asset id for the ingest JSON (rather than the path to file on the staging server).

* Create ingest JSON file using `csv2json.py` as explained above. Add the `-a` flag for assisted curation:

    `python csv2json.py -a -s [PATH TO SESSION .CSV FILE] -p [PATH TO PARTICIPANT .CSV FILE] -f [FILENAME FOR OUTPUT] -n ["FULL NAME OF VOLUME AS APPEARS ON DATABRARY"]`


## <a name="protocols">Tracking ingestion progress and file sharing</a>

#### Storage of data and metadata
Storage for data and metadata will be different depending on what phase of the ingestion process the dataset is in. While data will come in from different sources, video and other media data that will be ingested should be placed in the staging directory on the development server if they are ready for ingestion. 

Metadata while in process, should be stored at a central location where members of staff working on it should be able to access. Curation staff may work with local copies of metadata but must save their changes to the shared location (for Karens lab motordocs:/Volumes/Motordocs/DATABRARY/Curation/Ingest/Spreadsheets) and specify in the filename which version of the data is the most recent.

#### Tracking datasets in curation

[OpenProject](https://databrary.org/project/projects/volumes)



