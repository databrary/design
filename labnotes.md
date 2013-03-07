Notes from observations in the "field."
Meta-science.

# Adolph lab

Obviously an extreme case.

- One directory per study, with some subset of everything: IRB, videos, documents, data, scripts, references, manuscript (could save a lot of space with dedup!)
- Total about 1TB
- Mostly organized by type (videos, coding, scripts, documents) or source (DataFromX), but some "Old" and per user, and then usually by subject within data
- In particular, videos and openshapa files stored separately
- Why are all openshapa scripts copies of Datavyu\_API.rb?  Shouldn't this be a module?
- No specific organization of metadata, largely because measures vary study to study
- Many spreadsheets (xls, xlsx) with clear but per-study organization
- Detailed coding standards included in procedures, coding manual (doc, docx)
- Much metadata is kept in unnamed tuples in the "id" field in OpenSHAPA, described in the coding manual
- Often need tristate values (Maybe (Maybe a)), especially with dates, e.g. to differentiate between "unknown/unavailable" and "no/never", currently using special designated values outside normal range
- Use a custom-built (PHP, mysql) participant recruiting/scheduling database with lots of metadata

# 2012/02/28

- One directory per top-study, sub-directories per procedural study
- Strict organization within study folder: intro file (abstract), documentation (instructions, procedures), videos (mixed and encoded, low bit rate), data
- Strict file naming includes: subject id, subject initials, file class (coding data, counterbalance, etc.), last modification date, last modification user initials
- Manual file versioning, progress, mutexes
- Most data in excel
- Subject info, demographics, inventories, all on paper (ask: ipad app)
- Processed videos contain intro slide with subject id, DOB, initials, etc.

# 2012/03/07

- Possible seed data
- 250 children, 9 ages, 20-60 min continuous video each, 10MB/min, around 1TB
- some videos split into descriptive segments, partially consistent
- earlier ages on "external" storage somewhere
- videos named by ETHNICITYID-AGEID-SUBJID, sometimes coded by ETHNICITYID\*1000+SUBJID
- non-video data (all documents, XLS, SPSS, some video clips) on separate space
- metadata spreadsheet with DOB, visit progress; other metadata spread out, more difficult to track down
- interview sheets (mother and child) per visit, lots of information, unknown standardization, possible scans
- transcriptions and coding per video, unknown format/location
