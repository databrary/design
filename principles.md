# Philosophy

## User Interface

### Open Access

As much data as ethically and legally possible should be open access, providing unrestricted access to everything that does not contain any personal or sensitive data.  

This ensures that Databrary will be discoverable and easy to link externally, while at the same time respecting the wishes of researchers and participants.

### Automated Curation

The amount of centralized manual moderation needs to be minimised to ensure long term sustainability of Databrary. Wherever possible 'social' techniques should be employed to distribute curation tasks amongst the user community. For example:

* Avoiding strict ontologies that require many fields correctly filled for all datasets in order for some features to work correctly (search, browsing, etc).
* Metadata and object relationships should be derived from existing, available sources as much as possible, without burdening the researcher with excessive constraints.
While we want to allow advanced users to supply as much structure and detail as they would like, much of this collection should happen as a natural part of interaction with the site.
* The community should be empowered with the tools they need to police abuse of Databrary and the content held within. 
* I know this one is contentious: But I still believe that the community needs to be the ones to grant and vet access to their data. I think we need to minimise the amount of centralised bureaucracy involved in granting new users access to the data. This needs to be a very streamlined and fast process in order to attract and retain researchers. 

## Internals

### Robustness

Code should be portable, defensive, accessible, and degrade gracefully.
Websites should never require specific browsers or enabled features.  

Follow good web design practices:

* Use a front-end framework such as [bootstrap][1] or [skeleton][2]
* Follow standards whenever possible (HTML5, CSS3, etc)
* The design should be 'responsive', and scale to suit many form factors and platforms.
* Use unobtrusive Javascript, or better yet [Coffeescript][3]
Don't make assumptions about platforms, cookies, plugins, or user agents.
Use unobtrusive JavaScript and follow open standards whenever possible.

### Database

Use open, established, and stable technologies with flexible upgrade paths. Something like an ActiveRecord pattern should also be used to avoid a tight coupling between the Databrary application code and the underlying database technology.  

### Storage

Replication and recoverability.

### Documentation

Fully document all data storage formats for future extraction

### Security

Use an existing web-development framework such as [Rails][4], [Django][5] or similar. These frameworks are 'battle tested' and already build in protections for many security vulnerabilities such as SQL injection and remote code execution. My personal preference is for Rails since the developer community is vibrant and large. 

Default SSL to always on for serving Databrary and related pages.

Use industry standard configuration management tools such as chef or puppet to maintain and restrict access to production servers (really only one account is needed to deploy code to production servers). 

Notoriously difficult to secure services like email and ftp should be avoided from being installed on production servers.

Use basic change management procedures such as the use of a staging server, TDD, BDD and code reviews to vet and test code changes before they reach the production servers. Use automated deploy tools such as Capistrano[6] to automate the process of pushing changes from development, to staging to production.

Encryption - most of this comes for free when using something like Rails. But anyone trying to store passwords or similar in plain text should be repeatedly flogged so that they never forget the errors of their ways.


[1]: http://twitter.github.com/bootstrap/
[2]: http://www.getskeleton.com/
[3]: http://coffeescript.org/
[4]: http://rubyonrails.org/
[5]: https://www.djangoproject.com/
[6]: https://github.com/capistrano/capistrano




