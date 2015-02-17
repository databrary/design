#Ingest Process for Manual Curation

This document serves as a step-by-step guide for our current ingestion workflow.

## Step one - Receiving files from PIs
* PIs upload videos to our dev server
* PIs send the Databrary template with the participant and session metadata

## Step two - Transcoding files
* Transfer videos to HPC (High Performance Computing)
* Get rid of spaces and irregular characters in filenames
* Kick off transcodes using ffmpeg
* Once all the transcodes complete, transfer originals and transcoded files to our dev server

## Step three - Checking files
* Run an automated technical cross-check, comparing original files to the transcoded files
*  Resolve any issues in the cross-check (ex: there's an original file but no transcoded file or the transcoded file and the original file have different lengths)
*  Manually cross-check the files we have with the files listed in the Databrary template 
*  Open and click through the videos to make sure every video has content, looks like the correct content, and the videos play
*  If there are any missing videos, videos that won't play or look incorrect contact PI 

## Step four - Preparing for ingest
* Create two csvs using the provided Databrary template: one for sessions and one for participants. This includes adding the file paths and checking for any inconsistencies
* Transfer files to our ITS server

## Step five - Ingest
* Once the files are in ITS, ingest transcoded files into Databrary using the csvs. 
* Check the newly created volume on Databrary

## Step six - Clean up
* Resolve any issues with ingest (inconsistent metadata, missing files, etc)
* Delete any files that are not needed for Databrary from the server

## Step seven - Circle back
* Let the PI know their dataset is viewable on Databrary and they can add any title, description information, materials, images, etc. 



