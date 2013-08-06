# Internet Video Formats

Two formats meet the needs of most browsers:  
* H.264+AAC+MP4  
* WebM

[Browser format support](http://diveintohtml5.info/video.html#what-works)

## Is a third format necessary?

Firefox < 4.0 and Opera < 10.6 requires a third format (Theora+Vorbis+Ogg), but we shouldn't waste our resources...

Firefox < 16 accounts for 3.3% of market, what fraction uses < 4.0?  
Opera < 11.0 accounts for 0.0% of market.

[Browser usage statistics](http://www.w3schools.com/browsers/browsers_stats.asp)

## Sticking to just one format?

WebM is necessary for Firefox < 21 (6.5%) and Opera (1.6%) users  
H.264 is necessary for Safari (3.6%) and iPhone (1.03%) users

Either way, we aren't sacrificing much to get rid of one format. But which should we choose?

Mike suggests we keep H.264.

### License

The best thing WebM has going for it is that it's open source, but H.264's license makes it free for our purposes. 

"Only the parties at the top and bottom of the H.264 tool chain are generally required to pay royalties; that is, the party who makes the encoder, and the party who distributes the encoded file to the end users."

[Article on H.264 license](http://www.engadget.com/2010/05/04/know-your-rights-h-264-patent-licensing-and-you/)
[Older article](http://www.streamingmedia.com/Articles/Editorial/Featured-Articles/The-H.264-Licensing-Labyrinth-65403.aspx)

### Performance and Quality

H.264 encoding and decoding require far less resources than WebM. This is going to be important for video excerpts and for viewing/seeking on older machines. The compression quality of H.264 is also better, which makes it better for archival. (We'll see what MIAP says soon.) 

[H.264 vs WebM](http://www.streamingmedia.com/Articles/ReadArticle.aspx?ArticleID=69351&PageNum=1)  
[H.264 vs WebM (a closer look)](http://www.streamingmedia.com/Articles/Editorial/Featured-Articles/WebM-vs.-H.264-A-Closer-Look-68594.aspx)

### Excerpts

In both WebM and H.264, minimum keyframe rate can be specified. For H.264, it's possible using [FFmpeg](https://sites.google.com/site/linuxencoding/x264-ffmpeg-mapping) with or without the x264 encoder.

### Containers

For compatibility, H.264 should be pared with AAC audio in an mp4 container:
[MP4 format intro](http://thompsonng.blogspot.com/2010/11/mp4-file-format.html)

WebM video uses Vorbis audio in a unique file format:
[WebM format](http://www.webmproject.org/docs/container/)
