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



##Links
research data alliance metadata directory - http://rd-alliance.github.io/metadata-directory/use_cases/
cdl guidelines for digital objects - http://www.cdlib.org/services/access_publishing/dsc/contribute/docs/GDO.pdf
OCLC descriptive metadata standards - http://www.oclc.org/content/dam/research/activities/culturalmaterials/RLG_desc_metadata.pdf