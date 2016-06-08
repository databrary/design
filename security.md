# Security

## Uploaded files

(Prepared in response to a question from Elika Bergelson, but possibly generally relevant.)

There is obviously reason to be concerned about this.  It is true that this is
mitigated because we only accept uploads from authorized researchers (and this
is one of the big reasons for this -- it is very risky to allow random people
on the internet to upload content to anywhere).  There are a few things we
worry about:

*  Malicious files targeting our infrastructure (Databrary server).  We are
   careful with how we handle uploaded content.  Processing is done only by
   certain applications that are kept patched and up-to-date.  Currently we only
   process things that look like video files and jpg images (though may start
   with datavyu and other coding files soon), and only with up-to-date, believed
   secure versions of ffmpeg.  We should be fairly safe here.
*  Malicious files targeting users (upon download from databrary).  All video
   files are transcoded with ffmpeg before any other users are allowed access to
   them.  This means that a malicious video would never be made available to
   users -- it would simply fail to transcode.  We restrict the other types of
   files that people can upload -- we don't allow .exe files for example or any
   that are executable or code.  However, something like a pdf or docx file could
   certainly have malicious code (like a virus), and in this case there's nothing
   we do to prevent it.  Ideally we could process all files the same way we do
   videos (which goes hand-in-hand with things like visualization and extracting
   content).  However, as with anything, users should be responsible for keeping
   their own machines up-to-date and being careful with files downloaded from the
   internet.
*  Copyrighted or other illegal material.  We're probably the least covered
   here, but of course only authorized users can upload content, and this would
   be a breach of our agreement terms.  We really should have a way for users to
   report content of this sort to us so we can take it down (and indeed under
   DMCA are required to respond to such requests), but we can't afford to screen
   all uploaded materials (especially since much of it is private/restricted in
   some way).
