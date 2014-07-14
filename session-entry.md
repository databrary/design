# Upload As You Go

## Session entry

The central and most common part of data entry will be entering data about a session.
Therefore, this process should be as efficient as possible, requiring as little interaction as possible to collect the required information.
General principles to follow:

- Allow efficient and obvious keyboard-only navigation for the standard flow.
- Only request information we expect the user to have, but always allow more to be specified.

For the initial version, flexibility will be limited to preset metrics and categories.

### Data entry

There are some standard data-entry widgets we may want for entering data, with the following behaviors.
Regardless of the exact layout of fields, metric and category labels should be clear.

#### Free-form text measure entry

For text measures, the user can start typing and should auto-complete according to existing values of that measure (globally?).
The completion should automatically fill in the result, so that a tab-out of the field during entry leaves the completed values.
Menu selection should also be possible, as well as manually removing the rest of the completion to force a value.
See standard cell completion of many spreadsheets for an example.

#### Fixed text measure entry

For text measures with preset values, provide a drop-down with the preset options that responds clearly to keyboard entry (browsers should do this automatically).
There should always be a final "other/custom" option that converts the field to free-form.

#### Other measure types

Other measure types (currently only date and numeric) should probably do nothing special beyond the standard type-specific entry.

#### Defaulting measures

Some measures have implied default values, though we have not yet explicitly spelled out which these are.
When missing (including initially) these should always display filled in (maybe greyed out) with the default value but be skipped over.

#### Category-specific record entry

Entering records should limit to the existing record idents in the category via completion or drop-down, but also allow a new value to be entered which creates a new record with this ident.
For now we can assume that record idents are unique per category (even though this is demonstrably untrue in existing data).

Creating a new record may prompt for more information about the record.
How this works for participants will be the key issue in this design.

### Fields

When attaching records to the session, we assume they cover the entire session.
However, users can change this (later?) in the timeline view.

#### Session date

Standard date field, defaults to today.

#### Session release level

Fixed drop-down with obvious completions.
This field should be required, but may default to "missing".

#### Participant record(s)

This may be a simple field with subject id, where subject data is entered as a pop-up, or specified in-line.
Multiple participants may be specified.

#### Other records

For each category of records existing on the volume, a field will be provided where the user can specify zero or more records, or create new records.
There should also be a way to create a new record of a new category, but labeling here will be difficult.
It may be easier to always expose all existing categories for now.
