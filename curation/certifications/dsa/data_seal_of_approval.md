0 - Repository Context
=====================
>Please provide a brief general description of the functions and activities undertaken by the repository with particular regard to specialised aspects of your repository and services that might not be familiar to a peer reviewer. Where possible refer to standard OAIS functions and terms.
>
>Please provide a concise list of any Outsource Partners referenced in the Self-Assessment and their relationship (organisational/contractual, etc.) with your repository including whether or not they have the Data Seal of Approval or have undertaken some other Trusted Digital Repository assessment. List the Guidelines for which they provide all or part of the relevant functionality/service. Define the relationship with/control over the outsourced functions under the relevant Guideline including any contracts or Service Level Agreements (SLAs) which are in place.
>
>Because outsourcing will almost always be partial, you will still need to provide appropriate evidence for functions under the Guideline which are not outsourced, for example, “documented processes and procedures for managing data storage” and “explicit workflows” for the parts of the data lifecycle which you control. 

Databrary is a research data repository for the management, sharing, and long-term storage of video assets collected by researchers in the feilds of the developmental and learning sciences (i.e. both the Designated Community and data producers).

The National Science Foundation and National Institue of Child Health and Human Development provide grant funding for this repository. It's staff is housed at New York University's Steinhardt School with substantial operational and infrastructural support from NYU Libraris and Information Technology Services (the latter provide support for the archival storage and preservation planning functional components defined by OAIS reference model)

Databrary staff (i.e. ingest, access, data management, and the administrative functional components as defined by OAIS reference model) are responsible for the development and maintenance of a web-based platform for uploading, browsing, and sharing repository contents, support and development of its intended community of researchers, manual and automated digtial data curation and ingestion, and maintenance and monitoring of the infrastructure used to store and preserve assets in the repository.


1 - The data producer deposits the data in a data repository with sufficient information for others to assess the quality of the data, and compliance with disciplinary and ethical norms. 
==========================================================================================================================================================================================

The minimum required Statement of Compliance is: 3. In progress: We are in the implementation phase. 

>As regards this Guideline, how do you support the data producer (and/or depositor) before and during submission to the repository?

>Sector-specific quality criteria indicate to what degree the data are of interest to consumers. The assessment by experts and colleagues in a field is the main deciding factor for the quality of data. Transparency in terms of adherence to ethical norms in relevant disciplines facilitates the assessment of data content. Therefore, it is the responsibility of the data producer to provide sufficient information to enable data consumers to assess the data.

>Does the repository define the full package of information that should be deposited to facilitate assessment? What is required and what is optional?

>Does the repository ask for:

>- A methodology report or other information regarding the methods and techniques used, including those for data collection and subsequent structural or content amendments?
>- Information about official approval for data collection to confirm adherence to legal or ethical requirements?
>- Evidence/confirmation that data collection or creation was carried out in accordance with legal and ethical criteria prevailing in the data producers geographical location or discipline (e.g., Ethical Review Committee or Data Protection legislation)?
>- Data regarding, or references to, the data producer and/or their affiliated organisation(s)
>- Evidence/confirmation that the data is based on work performed by the data producer (researcher or institution that makes the data available)
>- Citations to publications based on the data?
>
>How much of this information collected from the data producer is passed on to data consumers to let them make independent assessments?

Databrary provides a number of methods and policies to facilitate deposit of appropriate digital assets and ensure that these assets are of a baseline quality and accessiblity for its designated community. In response to the above bullet points, they are:
- Data producers are encouraged to upload any number of documents that outline their research and data coding protocol (these can be a coding manuals - suggestions for developing these are provided [here](http://datavyu.org/user-guide/best-practices/tutorials/develop-a-coding-manual.html), research stimuli, flatfile data used in the analysis of video recordings etc.).
- (points 2 & 3) In order to contibute data to Databrary all data producers and their institutions must sign off on a [Databrary Access Agreement](http://databrary.org/access/policies/agreement.html) which outlines their ethical and legal responsibilities in participating in the Databrary community. Additionally any data added to Databrary must meet the ethical and legal IRB requirements of the data producer's home institution. Databrary also provides template language for data producers to use when approaching their research subjects about adding data collected about them to Databrary (see: [Databrary Participant Release Template](http://databrary.org/access/policies/release-template.html)).
- All Databrary users must provide and seek approval from their affiliated orgainization in order to participate and share data through Databrary.
- As mentioned above, all users must be authorized by their institution to participate in Databrary, confirming that they have rights to the data which the contribute.
- Each dataset can be associated with a publication based on the data collected and we provide connect to external services for providing access to those publicatiosn through Digital Object Identifiers (DOIs)


2 - The data producer provides the data in formats recommended by the data repository. 
======================================================================================

The minimum required Statement of Compliance is: 3. In progress: We are in the implementation phase.

>As regards this Guideline, how does the repository support the data producer before and during submission to the repository?
>
>formats are those that a data repository can reasonably assure will remain readable and usable. Typically, these are the de facto standards employed by a particular discipline.
>
>- Does the repository publish a list of preferred formats?
>- Are quality control checks in place to ensure that data producers adhere to the preferred formats?
>- Are tools used to check the compliance with official specifications of the formats?
>- What is the approach towards data that are deposited in non-preferred formats?
>- Does the repository ask data producers to provide detailed information about their file formats and the tools and methods by which the files were created?


In response to the above bullet points:
- Yes, Databrary accepted formats can be found [here](https://nyu.databrary.org/asset/formats)
- Yes, formats that are not supported by Databrary cannot be uploaded.
- Yes, ffmpeg is used to transcode video files once they are uploaded to a common codec and container (h.264/mp4). Errors from the transcode are logged
- See above
- Beyond the file extension, we do not ask data producers to provide information about their file formats and the tools and methods.


3 - The data producer provides the data together with the metadata requested by the data repository. 
====================================================================================================

The minimum required Statement of Compliance is: 4. Implemented: This guideline has been fully implemented for the needs of our repository. 

>As regards this Guideline, how does the repository support the Data Producer before and during submission to the repository?
>
>It is the responsibility of the data producer to provide the data with information about the context of the data (metadata). There is a distinction between descriptive, structural and administrative metadata. These must be provided in accordance with the Guidelines of the data repository.
>
>- Descriptive metadata consist of information required to find data and add transparency to their meaning (definition and value) and importance. Examples of descriptive metadata are the data elements of the Dublin Core Element Set, ([1]) with fields such as creator, type, and date.
>- Structural metadata indicate how different components of a set of associated data relate to one another. These metadata are needed to be able to process the data. When data are coded, the codebook will be a component of the structural metadata.
>- Administrative metadata are required to enable permanent access to the data. This concerns the descripttion of intellectual property, conditions for use and access and the preservation metadata needed for durable archiving of the data.
>
>The data repository specifies the level of producer-created metadata required and provides the tools for its effective capture.
>
>- If deposit forms are used which metadata do they capture?
>- Are there other user-friendly ways for data producers to provide metadata?
>- Does the repository have quality control checks to ensure required metadata are provided?
>- Does the repository provide standard, guidance or tools for the creation of metadata at the file level?
>- Are metadata elements derived from established metadata standards, registries or conventions? If so list >the standards, and show the level of adherence to them.
>- How are these metadata items relevant for the data consumers e.g. supporting resource discovery and secondary analysis rather than simply meeting the needs of the repository?
>- What is the repository’s approach if the metadata provided are insufficient for long-term preservation?

>[1]  See: [http://www.dublincore.org](http://www.dublincore.org) [accessed July 19, 2013].

- An online form guides users through the addition of metadata on the study dataset level. These metadata include: Title, Creators (in the form of authors on a study), Year of study, Description, Alias name for study, and Digital Object Identifier for a paper associated with the study.
- Data can only be contributed by researchers who own that data and who have become registered and authorized users of Databrary, as such study owners are inherent in the creation of a dataset. Data producers can also add Keywords, and Funder information at the study level. Within a study, data producers can add metadata to sessions (a container for files) through the application interface with either a spreadsheet view (to see all sessions at once), or in the container view. The metadata includes participant details (date of birth, ethnicity, race, ID, language, gender), and other measures associated with a session (e.g. tasks, conditions, session location and context, release and access information, tags (community contributed labels), etc.).
- File level metadata is automatically associated to session metadata and study level metadata. The only other metadata at the file level is a name for the file object, whether the file is restricted access or not, and segment data (time ranges) as to where the file should be positioned to other files in the same container (as container objects are displayed on a timeline much like that found in video editing software).
- The metadata schema is not derived from a preexisting schema. It can be found [here](https://github.com/databrary/databrary/blob/master/conf/schema.sql)
- The metadata schema was designed with search and discovery in mind. Metadata is captured at a generalized level to allow for researchers (e.g. the Designated Community) of different academic backgrounds within the developmental and learning sciences to find video data from one research context that might be useful in a different research context.
- We currently do not have automation around insufficient metadata for long-term preservation. Although video file metadata (not including content of file metadata) is automatically captured and stored during the ingest and transcode process [need to confirm this] 

4 - The data repository has an explicit mission in the area of digital archiving and promulgates it.
====================================================================================================

The minimum required Statement of Compliance is: 4. Implemented: This guideline has been fully implemented for the needs of our repository. 

>This Guideline relates to the level of authority which the repository has.
>
>- Is there a Mission Statement which references digital preservation and archiving? Under whose authority (government, funding body, chief executive etc.) is the statement released?
>- Is succession planning in place for your digital assets? If so, please describe the plan and reference if possible.
>- How is the mission statement implemented?
>- Do you carry out related promotional activities?
>- If compliance to this Guideline is outsourced please provide compelling evidence that the third party complies to DSA or DIN/ISO standards.

- See Library & ITS [short statement here about indefinite preservation](http://databrary.org/access/policies/dmp-template.html)
- See Library & ITS and above
- TBD
- Yes, conferences, workshops, publications in academic journals
- Is it outsourced if we are using our own Library system and campus file storage locations?

5 - The data repository uses due diligence to ensure compliance with legal regulations and contracts including, when applicable, regulations governing the protection of human subjects. 
========================================================================================================================================================================================

The minimum required Statement of Compliance is: 4. Implemented: This guideline has been fully implemented for the needs of our repository. 

>This Guideline relates to the legal regulations which impact on the repository.
>
>- Is the repository a legal entity? Please describe its legal/organisational status.
>- Does the repository use standard/template/model contract(s) with data producers?
>- Does the repository use standard/template/model contract(s) with data consumers?
>- Are the repository’s conditions or terms of use published?
>- Are there measures in place if the conditions are not complied with?
>- Does the repository ensure knowledge of and compliance with national and international laws? How?
>- Are special procedures applied to manage data with disclosure risk?
>- Are data with disclosure risk stored appropriately to limit access?
>- Are data with disclosure risk distributed under appropriate conditions?
>- Are procedures in place to review disclosure risk in data and to take the necessary steps to either anonymise files or to provide access in a secure way?
>- Are staff trained in the management of data with disclosure risk?

- Yes it's legal...what? 
- Yes, we have documents to explain the rights and responsibilities of Databrary data producers and provide language for them to augment their participant and lab release language. See: [Databrary Access Agreement](http://databrary.org/access/policies/agreement.html), [Participant Release Template](http://databrary.org/access/policies/release-template.html), [Staff Release](http://databrary.org/access/policies/staff-release.html)
- See above
- Yes: [Bill of Rights](http://databrary.org/access/policies/bill-of-rights.html), [Rights and Responsibilities](http://databrary.org/access/responsibilities.html), [Data Sharing Manifesto](http://databrary.org/access/policies/data-sharing-manifesto.html), [Best Practices for Data Security](http://databrary.org/access/policies/best-practices.html)
- We do have the ability to audit use of the site, each action (involving data access and download) can be traced back to a site user, though we do not have abilities in place around enforcement other than relying on the professional discretion of authorized site users. 
- Primarily through ethics guidelines as outlined by NYU IRB, NYU Legal, and IRBs of sponsoring institutions.
- The metadata schema includes restrictions and release levels such that sessions and files within them can be restricted to only parties that can view them, based on an approximation of the original study consent forms signed by the research participants 
- Data with specified release levels and restrictions can only be accessed through the web interface by registered and authorized users who have the permissions to view those datasets.
- Yes, data are distributed via permission checks through the web interface behind authentication measures.
- Yes, the curation process includes steps to review the original release levels of files to be deposited and clips out parts of video files that contain Personally Identifying Information that should not be shared via the web interface under any circumstances.
- Yes all staff are required to take Collaborative Institutional Training Initiative (CITI) training prior to working with data that involve human subjects (ref: https://www.citiprogram.org/)

6 - The data repository applies documented processes and procedures for managing data storage. 
==============================================================================================

The minimum required Statement of Compliance is: 4. Implemented: This guideline has been fully implemented for the needs of our repository. 

>This Guideline relates to the ability of the repository to manage data.
>
>- Does the repository have a preservation policy?
>- Does the repository have a strategy for backup / multiple copies? If so, please describe.
>- Are data recovery provisions in place? What are they?
>- Are risk management techniques used to inform the strategy?
>- What checks are in place to ensure consistency across archival copies.
>- What levels of security are required and how are these supported?
>- How is deterioration of storage media handled and monitored?

- Yes, the repository, as stored, has a mandate to preserve its contents indefinitely. 
- Original and transcoded for web access copies are stored through NYU Libraries and ITS. This setup stores files in two mirrored and geographically distributed locations, and a third copy on offsite tape.
- Yes, via backups and fixity checks we can recover lost, or corrupted files. See Libraries and ITS
- See Libraries and ITS
- Regular fixity checks, other? See Libraries and ITS
- See Libraries and ITS
- See Libraries and ITS

7 - The data repository has a plan for long-term preservation of its digital assets.
====================================================================================

The minimum required Statement of Compliance is: 3. In progress: We are in the implementation phase. 

>This Guideline relates to the ability of the repository providing continued access to data.
>
>- Are there provisions in place to take into account the future obsolescence of file formats? Please describe.
>- Are there provisions in place to ensure long-term data usability? Please describe.

- Preferred file formats will no doubt change over time. Current storage provides a format migration capacity for making sure that we will always have a readidly accessible copy into the future. 


8 - Archiving takes place according to explicit work flows across the data life cycle. 
======================================================================================

The minimum required Statement of Compliance is: 3. In progress: We are in the implementation phase. 

>This Guideline relates to the levels of procedural documentation for the repository.
>
>Does the repository have procedural documentation for archiving data? Provide references to:
>
>- Workflows
>- Decision-making process for archival data transformations
>- Skills of employees
>- Describe the types of data within the repository and any relevant impact on workflow
>- Selection process
>- Approach towards data that do not fall within the mission
>- Guarding privacy of subjects, etc.
>- Clarity to data producers about handling of the data

- Draft copies of [staff](https://github.com/databrary/design/blob/master/curation/ingest_workflows/staff_ingest.md) and [curation](https://github.com/databrary/design/blob/master/curation/ingest_workflows/curation_ingest_guide.md) ingest guides available on github. 
- All data are taken in in their original format. All video files are transcoded on ingest to a common, web-streamable format (h.264 in an MP4 wrapper with AAC for audio).
- Software and web development, collection development, metadata standards, digital file conversion skills, data ETL skills...(not sure what this is asking for, exactly)
- The repository is composed largely of video files, as per its mission. This has the impact of making large data tranfer and video file transcoding an automated process. 
- Selection largely comes down to interested data conrtibutors who have video data that _can_ be shared as per our release and consent language [see release levels](http://databrary.org/access/guide/investigators/release/release-levels.html) as well as [Databrary release template](http://databrary.org/access/policies/release-template.html)
- We can store some data data that don't fall into our mission if we deem it important to the community or possibly supported down the road. Determined on a case-by-case basis. 
- We have designed our collection and storage policy around IRB protocols and existing researcher ethical practices to guide collection development and access. Only birthdate, gender, race, ethnicity and language are stored for human subjects.
- See [Data Management Plan Template](http://databrary.org/access/policies/dmp-template.html) and [Databrary Access Agreement](http://databrary.org/access/policies/agreement.html)

9 - The data repository assumes responsibility from the data producers for access and availability of the digital objects.
==========================================================================================================================

The minimum required Statement of Compliance is: 4. Implemented: This guideline has been fully implemented for the needs of our repository. 

>This Guideline relates to the levels of responsibility which the repository takes for its data.
>
>- Does the repository have licences / contractual agreements with data producers? Please describe.
>- Does the repository enforce licences with the data producer? How?
>- Does the repository have a crisis management plan? Please describe.

<answer here> 


10 - The data repository enables the users to discover and use the data and refer to them in a persistent way. 
==============================================================================================================

The minimum required Statement of Compliance is: 3. In progress: We are in the implementation phase. 

>This Guideline relates to the formats in which the repository provides its data and its identifiers.
>
>- Are data provided in formats used by the designated community? In what forms?
>- Does the repository offer search facilities? Is OAI harvesting permissible? Is deep searching possible?
>- Does the repository offer persistent identifiers?

<answer here>

11 - The data repository ensures the integrity of the digital objects and the metadata. 
=======================================================================================

The minimum required Statement of Compliance is: 3. In progress: We are in the implementation phase. 

>This Guideline relates to the information contained in the digital objects and metadata and whether it is complete, whether all changes are logged and whether intermediate versions are present.
>
>- Does the repository utilise checksums to verify data integrity? What type?
>- How is the integrity of data and metadata monitored?
>- Does the repository deal with multiple versions of the data? If so, how? Please describe the versioning strategy.

<answer here>

12 - The data repository ensures the authenticity of the digital objects and the metadata. 
==========================================================================================

The minimum required Statement of Compliance is: 3. In progress: We are in the implementation phase.

>This Guideline refers to the degree of reliability of the original and to the provenance of the data including relationship between the original data and that disseminated, and whether or not existing relationships between datasets and/or metadata are maintained.
>
>- Does the repository have a strategy for data changes? Are data producers made aware of this strategy?
>- Does the repository maintain provenance data and related audit trails?
>- Does the repository maintain links to metadata and to other datasets, and if so, how?
>- Does the repository compare the essential properties of different versions of the same file? How?
>- Does the repository check the identities of depositors?

<answer here>

13 - The technical infrastructure explicitly supports the tasks and functions described in internationally accepted archival standards like OAIS. 
=================================================================================================================================================

The minimum required Statement of Compliance is: 3. In progress: We are in the implementation phase. 

>This Guideline refers to the level of conformance with accepted standards. The technical infrastructure constitutes the foundation of a Trusted Digital Repository. The OAIS reference model,[1] an ISO standard, is the de facto standard for using digital archiving terminology and defining the functions that a data repository fulfils.
>
>- What standards does the repository use for reference?
>- How are the standards implemented? Please note any significant deviations from the standard with explanations.
>- Does the repository have a plan for infrastructure development? Please describe.
>
>
>[1]  Details regarding the OAIS reference model can be found at: [http://public.ccsds.org/publications/archive/650x0m2.pdf.](http://public.ccsds.org/publications/archive/650x0m2.pdf) [accessed January 31, 2013].

<answer here>

14 - The data consumer complies with access regulations set by the data repository. 
===================================================================================

The minimum required Statement of Compliance is: 4. Implemented: This guideline has been fully implemented for the needs of our repository. 

>This Guideline refers to the responsibility of the repository to create legal access agreements which relate to relevant national (and international) legislation and the levels to which the repository informs the data consumer about the access conditions of the repository.

>- Does the repository use End User Licence(s) with data consumers?
>- Are there any particular special requirements which the repository’s holdings require?
>- Are contracts provided to grant access to restricted-use (confidential) data?
>- Does the repository make use of special licences, e.g., Creative Commons?
>- Are there measures in place if the conditions are not complied with?

<answer here>

15 - The data consumer conforms to and agrees with any codes of conduct that are generally accepted in the relevant sector for the exchange and proper use of knowledge and information. 
========================================================================================================================================================================================

The minimum required Statement of Compliance is: 4. Implemented: This guideline has been fully implemented for the needs of our repository. 

>This Guideline refers to the responsibility of the repository to inform data consumers about any relevant codes of conduct.
>
>- Does the repository need to deal with any relevant codes of conduct?
>- Does the repository need to deal with codes of conduct specifically pertaining to protection of human subjects?
>- What are the terms of use to which data consumers agree?
>- Are institutional bodies involved?
>- Are there measures in place if these requirements are not complied with?
>- Does the repository provide guidance in the responsible use of confidential data?

<answer here>

16 - The data consumer respects the applicable licences of the data repository regarding the use of the data. 
=============================================================================================================

The minimum required Statement of Compliance is: 4. Implemented: This guideline has been fully implemented for the needs of our repository. 

>This Guideline refers to the responsibility of the repository to inform data consumers regarding the applicable licences.
>
>The quality of the use of data is determined by the degree to which the data can be used without limitation by the various target groups, while complying with applicable codes of conduct.
>
>The open and free use of data takes place within the relevant legal frameworks and the policy Guidelines as determined by relevant national authorities.
>
>With regard to accessing information, the data consumer is bound by relevant national legislation. The data repository may have separate access regulations, which include restrictions imposed by the laws of the country in which the data repository is located. Access regulations should be based on relevant international access standards (e.g., Creative Commons) as much as possible.
>
>Most nations have legal frameworks relating to the ethical use and re-use of data. These frameworks range from the statutory — which protect the privacy of individuals — to formal codes of conduct which inform ethical issues. Repositories must be aware of these local legal frameworks and ensure that they are taken into account when providing data for re-use.
>
>- Are there relevant licences in place?
>- Are there measures in place if these licences are not complied with?

<answer here>
