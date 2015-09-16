metadata export notes
=====================

##Use cases for exporting metadata
- **Defining an AIP**: Full details for assets, full details for data itself?
- **Owner export**: Full details for data, may not need full details for assets (To accompany download of dataset, so may have to be all assets or just some)
- **Interoperabilty Export**: Similar to metadata creation for DataCite in creating DOIs, only sharing volume level details and access restrictions with entities like NYU library 


##Schemas and their application
| schema           | purpose                                                                           | location                                                                                  |
|------------------|-----------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------|
| Open annotations | for encoding tags, positioned (and unpositioned?)                                 | http://www.openannotation.org/spec/core/specific.html                                     |
| METS             | for structural metadata (how records, containers, and assets relate to eachother) | Contains other schemas for description http://www.loc.gov/standards/mets/METSOverview     |
| Dublin Core      | descriptive metadata for the volume itself                                        | http://dublincore.org/documents/dces/                                                     |
| DDI              | descriptive metadata(?) for volume slot-records and containers                    | http://www.ddialliance.org/Specification/                                                 |
| MODS???          | descriptive metadata for volume assets                                            | http://www.loc.gov/standards/mods/v3/mods-3-6.xsd                                         |
| MPEG-7           | describe multimedia assets                                                        | http://standards.iso.org/ittf/PubliclyAvailableStandards/MPEG-7_schema_files/mpeg7-v3.xsd |

##Design questions
- How do we accurately reflect rights when we are not 100% certain that the contributor is the original owner of the data
- should an AIP consist of just one big huge mets file, or a mets file for the study and then mets files for all of the assets in a study linking them to the study?
- regarding the above, it doesn't seem to make sense to make an individuals mets document for each file since there could be thousands of under-described assets that don't exactly have meaning outside of the context of the study...but, how to have administrative metadata for each file in the context of the study. That is: semantics attached to the dataset, administration attachd to the files.
- Where to add annotations on files (as well as on studies)?
- Link to JSON API as an external reference?
- URIs for databrary structMap TYPES? - see: https://github.com/cul/cul_hydra/blob/84be3a449d04c016509030472a43466a6f9e5e8f/fixtures/spec/STRUCTMAP/structmap-nested2.xml

##Links
overview - http://jodyderidder.com/metadata/mets.html
primer - http://www.loc.gov/standards/mets/METSPrimerRevised.pdf
research data alliance metadata directory - http://rd-alliance.github.io/metadata-directory/use_cases/
cdl guidelines for digital objects - http://www.cdlib.org/services/access_publishing/dsc/contribute/docs/GDO.pdf
OCLC descriptive metadata standards - http://www.oclc.org/content/dam/research/activities/culturalmaterials/RLG_desc_metadata.pdf


##Suitable examples
dataset example(?) - https://pythonhosted.org/MyTARDIS/ref/mets-example.html
profile example - https://github.com/pulibrary/BlueMountain/wiki/METS-profiles


##File_Directory_Template

├── <MAIN AIP PATH - VOLUME #>/
│   ├── databrary-#-aip.xml           # mets: overarching metadata map
│   ├── databrary-#-aip-rights.xml    # mets: for whole volume - owner/contributor
│   ├── databrary-#-aip-dmd.xml       # mods, dublin core: whole volume
│   ├── databrary-#-container-id.xml  # mets: file & md location for descriptive, rights, and technical md
│   ├── databrary-#-container-id.xml  # "
│   ├── databrary-#-container-id.xml  # "
│   ├── <ASSETS>
│   │   ├── <databrary-#-container-id>
│   │   │   ├── <data>
│   │   │   │    ├── <vol>_<container>_<asset> 
│   │   │   │    ├── <vol>_<container>_<asset>
│   │   │   │    ├── <vol>_<container>_<asset>
│   │   │   ├── <metadata>
│   │   │   │    ├── <vol>_<container>_<asset>.xml #METS/MODS?/PREMIS,REVTMD
│   │   │   │    ├── <vol>_<container>_<asset>.xml #METS/MODS?/PREMIS,REVTMD
│   │   │   │    ├── <vol>_<container>_<asset>.xml #METS/MODS?/PREMIS,REVTMD
│   │   ├── <databrary-#-container-id>
│   │   ├── <databrary-#-container-id>