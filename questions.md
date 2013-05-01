# Questions

Open system design decisions and questions.
Many of these questions are interrelated.

## Video

### Storage Format

What is the standard format used for storing videos?

Requirements:

- maintain incoming resolution, which could be anything, at any frame-rate
- reasonable space requirements: ideally incoming quality can be roughly maintained to avoid unnecessary storage bloat
- long-term preservation: want to avoid having to change formats in the future

Nice to have:

- efficient extraction of temporal subsections
- (efficient conversion to) widely supported streaming format

### Incoming Format

What formats do we accept?
What do we recommend?

We want to accept as many formats as possible.

### Streaming Format

How do we stream video data to web-browsers?

Options:

- HTML5
- custom player (flash/java/plugin)

### Excerpts

How do we deal with excerpts?

Requirements:

- security: access to excerpt should not allow access to full video
- dynamic: users can select sections of existing videos for excerpts, tags, annotations

Nice to have:

- minimal storage overhead

Options:

- client-side cueing to selected time-point (cannot address security)
- fully on-the-fly
- on-the-fly with caching
- pre-generation

Resources:

- paper mentioned at board meeting?

## Storage

### Medium

Where is the video/blob data physically stored?

Requirements:

- high-bandwidth
- secure

Nice to have:

- low latency

Options:

- cloud storage
- Isilon
- other local NAS

### Layout

Where is the video/blob data logically stored?

Options:

- object storage (e.g., cloud, Atmos)
- filesystem (e.g., NAS)

## Upload

### Bulk

How can users upload datasets in bulk?

## Users

### Authorization

How is site access/authorization granted to primary Investigators?

Options:

- via institutional admins
- through other users
- manually
