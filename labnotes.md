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
