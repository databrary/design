(function ($, window, document) {
    // TOTALLY WRONG HACK!
    var framerate = 25;

    var cell = $('#col1 .cell');
    cell.remove();

    var stampToSeconds = function (val) {
        try {
            val = String(val).split(':');

            var temp, total = 0;

            if (val.length > 0 && (temp = val.pop()))
                total += parseInt(temp) / framerate;

            if (val.length > 0 && (temp = val.pop()))
                total += parseInt(temp);

            if (val.length > 0 && (temp = val.pop()))
                total += parseInt(temp) * 60;

            if (val.length > 0 && (temp = val.pop()))
                total += parseInt(temp) * 24;

            val = total;
        } catch (e) {
        }

        if (isNaN(val))
            val = 0;

        return val;
    };

    var secondsToView = function (seconds) {
        if (isNaN(seconds))
            return false;

        return '<span class="hours">' +
            ('00' + (parseInt(seconds / 3600) % 24)).slice(-2) +
            '</span>:<span class="minutes">' +
            ('00' + (parseInt(seconds / 60) % 60)).slice(-2) +
            '</span>:<span class="seconds">' +
            ('00' + parseInt(seconds % 60)).slice(-2) +
            '</span>:<span class="frames">' +
            ('00' + Math.floor((seconds % 1) * framerate)).slice(-2) +
            '</span>';
    };

    $.extend($, {
        isString: function (string) {
            return (typeof string == 'string' || string instanceof String);
        },

        isNumber: function (number) {
            return (!isNaN(parseFloat(number)) && isFinite(number));
        }
    });

    $.extend($.fn, {
        exists: function () {
            return this.length !== 0;
        },

        labnanny: function (args) {
            //options
            var opts = $.extend({}, args);

            // records
            var $labnanny = this,
                $pad = $labnanny.find('#pad'),
                $seekbar = $pad.find('#seekbar'),
                $time = $pad.find('#time'),
                $playrateVal = $pad.find('#playrate-div .val'),
                $videos, $buttons, $keys = {},
                $sheet = $('#sheet');

            // methods
            var options = function (args) {
                if ($.isString(args))
                    return opts[args];
                else
                    return opts = $.extend(opts, args);
            };

            var videos = function (filter) {
                $videos = $labnanny.find('video');

                if ($.isNumber(filter))
                    return $videos.filter('#video-' + filter);
                else if ($.isString(filter))
                    return $videos.filter(filter);
                else
                    return $videos;
            };

            var bind = function () {
                $buttons = $pad.find('button');

                $pad.on('click', 'button', function () {
                    var action = $labnanny.data('labnanny')[$(this).attr('data-do')];

                    if (typeof action == 'function')
                        return action();

                    return false;
                });

                $buttons.each(function () {
                    $keys[$(this).attr('data-do')] = $(this).attr('data-key');
                });

                $(document).bind('keydown', function (e) {
                    for (var fn in $keys) {
                        if ($keys.hasOwnProperty(fn) && $keys[fn] == e.keyCode && typeof $labnanny.data('labnanny')[fn] == 'function')
                            return $labnanny.data('labnanny')[fn]();
                    }

                    return true;
                });

                $videos.first().bind('timeupdate', function () {
                    if ($('#loop').is(':checked'))
                        loop();

                    seekUpdate();
                });

                $seekbar.find('.seekbar').bind('click', function (e) {
                    seekClick(e, $(this));
                });

                $pad.find('#playrate').on('focusout',function () {
                    var $input = $(this);

                    updatePlayrate($input.val());

                    $input.val('');
                }).on('keydown', function (e) {
                        if (e.keyCode == 13)
                            $(this).trigger('focusout');
                    });

                $pad.find('#seekoffset').on('focusout',function () {
                    var $input = $(this);

                    updateSeekoffset($input.val());

                    $input.val('');
                }).on('keydown', function (e) {
                        if (e.keyCode == 13)
                            $(this).trigger('focusout');
                    });

                $pad.find('#loopstart').on('focusout',function () {
                    var $input = $(this);

                    if ($input.val() != '')
                        updateLoopStart($input.val());

                    $input.val('');
                }).on('keydown', function (e) {
                        if (e.keyCode == 13)
                            $(this).trigger('focusout');
                    });

                $pad.find('#loopend').on('focusout',function () {
                    var $input = $(this);

                    if ($input.val() != '')
                        updateLoopEnd($input.val());

                    $input.val('');
                }).on('keydown', function (e) {
                        if (e.keyCode == 13)
                            $(this).trigger('focusout');
                    });
            };

            var updateLoopStart = function (val) {
                val = stampToSeconds(val);

                $videos.each(function () {
                    var video = this,
                        $video = $(this);

                    $video.data('video').loopStart(val);
                });
            };

            var updateLoopEnd = function (val) {
                val = stampToSeconds(val);

                $videos.each(function () {
                    var video = this,
                        $video = $(this);

                    $video.data('video').loopEnd(val);
                });
            };

            var updateLoop = function (on, off) {
                $videos.each(function () {
                    var video = this,
                        $video = $(this);

                    $video.data('video').loopStart(on);
                    $video.data('video').loopEnd(off);
                });
            };

            var seekClick = function (e, $seek) {
                var width = $seek.width(),
                    position = e.pageX - $seek.offset().left;

                $videos.each(function () {
                    var video = this;

                    video.currentTime = position / width * video.duration;
                });

            };

            var seekUpdate = function () {
                var seekData = [],
                    seekSum = [0, 0, 0, 0, 0, 0, 0, 0],
                    seekAvg = [0, 0, 0, 0, 0, 0, 0, 0];

                $videos.each(function () {
                    var video = this;

                    seekData.push([
                        video.duration,
                        video.currentTime,

                        video.buffered.start(0),
                        video.buffered.end(0),

                        video.playbackRate
                    ]);
                });

                seekAvg = seekData[0];

                var $seekshows = $seekbar.find('.seekshow');

                $seekshows.filter('#seek_buffered').css({
                    left: (100 * (seekAvg[2] / seekAvg[0])) + '%',
                    right: (100 - (100 * (seekAvg[3] / seekAvg[0]))) + '%'
                });

                $seekshows.filter('#seek_current').css({
                    left: '0%',
                    right: (100 - (100 * (seekAvg[1] / seekAvg[0]))) + '%'
                });

                $time.html(timeDisplay(seekAvg[1]) + ' / ' + timeDisplay(seekAvg[0]));

                $playrateVal.html(playrateDisplay(seekAvg[4]));
            };

            var timeDisplay = function (seconds) {
                return '<span class="hours">' +
                    ('00' + (parseInt(seconds / 3600) % 24)).slice(-2) +
                    '</span>:<span class="minutes">' +
                    ('00' + (parseInt(seconds / 60) % 60)).slice(-2) +
                    '</span>:<span class="seconds">' +
                    ('00' + parseInt(seconds % 60)).slice(-2) +
                    '</span>:<span class="frames">' +
                    ('00' + Math.floor((seconds % 1) * framerate)).slice(-2) +
                    '</span>';
            };

            var playrateDisplay = function (playrate) {
                var show, neg = '';

                if (playrate <= -1) {
                    show = Math.abs(Math.floor(playrate));
                } else if (playrate <= -1 / 2) {
                    show = '1/2'
                } else if (playrate <= -1 / 4) {
                    show = '1/4'
                } else if (playrate <= -1 / 8) {
                    show = '1/8'
                } else if (playrate <= -1 / 16) {
                    show = '1/16'
                } else if (playrate <= -1 / 32) {
                    show = '1/32'
                } else if (playrate >= 1) {
                    show = Math.abs(Math.floor(playrate));
                } else if (playrate >= 1 / 2) {
                    show = '1/2'
                } else if (playrate >= 1 / 4) {
                    show = '1/4'
                } else if (playrate >= 1 / 8) {
                    show = '1/8'
                } else if (playrate >= 1 / 16) {
                    show = '1/16'
                } else if (playrate >= 1 / 32) {
                    show = '1/32'
                }

                if (playrate < 0)
                    neg = '-';

                return 'x' + neg + show;
            };

            var updatePlayrate = function (val) {
                try {
                    val = Number(eval(val));
                } catch (e) {
                }

                if (!isNaN(val)) {
                    $videos.each(function () {
                        $(this).data('video').rate(val);
                    });
                }
            };

            var updateSeekoffset = function (val) {
                try {
                    val = val.split(':');

                    var temp, total = 0;

                    if (val.length > 0 && (temp = val.pop()))
                        total += parseInt(temp) / 25;

                    if (val.length > 0 && (temp = val.pop()))
                        total += parseInt(temp);

                    if (val.length > 0 && (temp = val.pop()))
                        total += parseInt(temp) * 60;

                    if (val.length > 0 && (temp = val.pop()))
                        total += parseInt(temp) * 24;

                    val = total;
                } catch (e) {
                }

                if (!isNaN(val)) {
                    $videos.each(function () {
                        this.currentTime = val;
                    });
                }
            };

            var seek = function (val) {
                if (!isNaN(val)) {
                    $videos.each(function () {
                        this.currentTime = val;
                    });
                }
            };

            // actions
            var loop = function () {
                $videos.each(function () {
                    $(this).data('video').loop();
                })
            };

            var play = function () {
                $videos.each(function () {
                    $(this).data('video').play();
                });
            };

            var stop = function () {
                $videos.each(function () {
                    $(this).data('video').stop();
                });
            };

            var pause = function () {
                $videos.each(function () {
                    $(this).data('video').pause();
                });
            };

            var fast_reverse = function () {
                $videos.each(function () {
                    $(this).data('video').fast_reverse();
                });
            };

            var fast_forward = function () {
                $videos.each(function () {
                    $(this).data('video').fast_forward();
                });
            };

            var shuttle_reverse = function () {
                $videos.each(function () {
                    $(this).data('video').shuttle_reverse();
                });
            };

            var shuttle_forward = function () {
                $videos.each(function () {
                    $(this).data('video').shuttle_forward();
                });
            };

            var jog_reverse = function () {
                $videos.each(function () {
                    $(this).data('video').jog_reverse();
                });
            };

            var jog_forward = function () {
                $videos.each(function () {
                    $(this).data('video').jog_forward();
                });
            };

            var cell_new = function () {
                var $cell = $('<div>');

                $cell = $cell.cell('0:', $('video').get(0).duration + ':', '...');
                $cell.data('cell').active();
            };

            var cell_new_onset = function () {
                var $cell = $('<div>');

                $cell = $cell.cell($('video').get(0).currentTime + ':', $('video').get(0).duration + ':', '...');
                $cell.data('cell').active();
            };

            var cell_onset = function () {
                if ($sheet.find('.cell.active').exists())
                    $sheet.find('.cell.active').data('cell').update($('video').get(0).currentTime + ':', false, false);
            };

            var cell_offset = function () {
                if ($sheet.find('.cell.active').exists())
                    $sheet.find('.cell.active').data('cell').update(false, $('video').get(0).currentTime + ':', false);
            };

            // setup
            options(args);

            $videos = videos();
            $videos.each(function () {
                $(this).videoPlayer();
            });

            bind();

            // api
            $labnanny.data('labnanny', {
                options: options,
                videos: videos,
                play: play,
                stop: stop,
                pause: pause,
                loop: loop,
                fast_reverse: fast_reverse,
                fast_forward: fast_forward,
                shuttle_reverse: shuttle_reverse,
                shuttle_forward: shuttle_forward,
                jog_reverse: jog_reverse,
                jog_forward: jog_forward,
                seek: seek,
                cell_onset: cell_onset,
                cell_offset: cell_offset,
                cell_new_onset: cell_new_onset,
                cell_new: cell_new,
                updateLoop: updateLoop
            });

            return $labnanny;
        },

        videoPlayer: function (args) {
            //options
            var opts = $.extend({
                offset: 0
            }, args);

            // records
            var $video = this,
                video = $video.get(0),
                last, loopStartVal, loopEndVal;

            // methods
            var options = function (args) {
                if ($.isString(args))
                    return opts[args];
                else
                    return opts = $.extend(opts, args);
            };

            var loop = function () {
                if (isNaN(loopStart()))
                    loopStart(0);

                if (isNaN(loopEnd()))
                    loopEnd(video.duration);

                console.log(loopStart(), video.currentTime, loopEnd());

                if (video.currentTime >= (loopEnd() - ((1 / framerate) / 3)))
                    video.currentTime = loopStart();
            };

            var loopStart = function (val) {
                if (typeof val === 'undefined')
                    return loopStartVal;

                if (isNaN(val) || val >= loopEnd())
                    val = 0;

                loopStartVal = val;

                return loopStartVal;
            };

            var loopEnd = function (val) {
                if (typeof val === 'undefined')
                    return loopEndVal;

                if (isNaN(val) || val <= loopStart())
                    val = video.duration;

                loopEndVal = val;

                return loopEndVal;
            };

            var play = function () {
                rate(1);

                playBunk(); // video.play();

                last = 'play';
            };

            var stop = function () {
                video.pause();

                last = 'stop';
            };

            var pause = function () {
                rate(1);

                if (video.paused)
                    playBunk(); // video.play();
                else
                    video.pause();

                last = 'pause';
            };

            var fast_reverse = function () {
                // non-functional in chrome
                rate(-32);

                playBunk(); // video.play();

                last = 'fast';
            };

            var fast_forward = function () {
                rate(32);

                playBunk(); // video.play();

                last = 'fast';
            };

            var shuttle_reverse = function () {
                var newRate;

                if (last != 'shuttle')
                    newRate = -1 / 32;
                else if (video.playbackRate > 0)
                    if (video.playbackRate <= 1 / 32) {
                        newRate = -1 / 32;
                    } else {
                        newRate = video.playbackRate / 2;
                    }
                else
                    newRate = video.playbackRate * 2;

                if (newRate >= -32) {
                    rate(newRate);
                    playBunk(); // video.play();
                } else {
                    rate(-1 / 32);
                    playBunk(); // video.play();
                }

                last = 'shuttle';
            };

            var shuttle_forward = function () {
                var newRate;

                if (last != 'shuttle')
                    newRate = 1 / 32;
                else if (video.playbackRate < 0)
                    if (video.playbackRate >= -1 / 32) {
                        newRate = 1 / 32;
                    } else {
                        newRate = video.playbackRate / 2;
                    }
                else
                    newRate = video.playbackRate * 2;

                if (newRate <= 32) {
                    rate(newRate);
                    playBunk(); // video.play();
                } else {
                    rate(1 / 32);
                    playBunk(); // video.play();
                }

                last = 'shuttle';
            };

            var jog_reverse = function () {
                rate(1);
                video.pause();
                video.currentTime -= 1 / framerate;

                last = 'jog';
            };

            var jog_forward = function () {
                rate(1);
                video.pause();
                video.currentTime += 1 / framerate;

                last = 'jog';
            };

            var rate = function (rate) {
                if (rate == undefined) rate = 1;

                if (rate > 0)
                    clearNegativePlayrate();

                video.playbackRate = rate;
            };

            // setup
            //video.loop = true;
            loopStart(0);
            loopEnd(video.duration);

            // listeners
            $video.on('ended', function () {
                video.currentTime = 0;

                if ($('#loop').is(':checked'))
                    play();
            });

            $('input[data-for="#' + $video.attr('id') + '"]').on('change', function () {
                var newOffset = $(this).val();

                video.currentTime += newOffset - opts.offset;

                opts.offset = newOffset;
            });

            // WORKAROUND!
            var negativePlayrate;

            var playBunk = function () {
                if (video.playbackRate > 0) {
                    clearNegativePlayrate();
                    video.play();
                } else {
                    video.pause();
                    clearNegativePlayrate();
                    negativePlayrate = setInterval(function () {
                        video.currentTime += (video.playbackRate * framerate) / 1000;

                        if (video.currentTime <= 0) {
                            clearNegativePlayrate();
                            rate(1);
                        }
                    }, 1);
                }
            };

            var clearNegativePlayrate = function () {
                clearInterval(negativePlayrate);
            };

            // api
            $video.data('video', {
                options: options,
                play: play,
                stop: stop,
                pause: pause,
                loop: loop,
                fast_reverse: fast_reverse,
                fast_forward: fast_forward,
                shuttle_reverse: shuttle_reverse,
                shuttle_forward: shuttle_forward,
                jog_reverse: jog_reverse,
                jog_forward: jog_forward,
                rate: rate,
                loopStart: loopStart,
                loopEnd: loopEnd
            });

            return $video;
        },

        cell: function (on, off, body, args) {
            //options
            var opts = $.extend({
                offset: 0
            }, args);

            var onsetTime, offsetTime, bodyContent;

            // records
            var $cell = this;

            // methods
            var options = function (args) {
                if ($.isString(args))
                    return opts[args];
                else
                    return opts = $.extend(opts, args);
            };

            // actions
            var onset = function (val) {
                if (typeof val === 'undefined')
                    return onsetTime;

                if (typeof (val = stampToSeconds(val)) !== 'undefined')
                    onsetTime = val;

                update();

                return onsetTime;
            };

            var offset = function (val) {
                if (typeof val === 'undefined')
                    return offsetTime;

                if (typeof (val = stampToSeconds(val)) !== 'undefined')
                    offsetTime = val;

                update();

                return offsetTime;
            };

            var remove = function () {
                $cell.remove();
            };

            var update = function (on, off, body) {
                if (on !== false)
                    onsetTime = stampToSeconds(on);

                if (off !== false)
                    offsetTime = stampToSeconds(off);

                $cell.find('.start').html('onset: ' + secondsToView(onsetTime));
                $cell.find('.end').html('offset: ' + secondsToView(offsetTime));
                $labnanny.data('labnanny').updateLoop(onsetTime, offsetTime);

                if (body !== false)
                    $cell.find('.args').html(body);

                positionCell();
            };

            var positionCell = function () {
                $('#col1 .cells').append($cell);

                var duration = $('video').get(0).duration;

                $cell.css({
                    top: (100 * (onsetTime / duration)) + '%',
                    bottom: (100 - (100 * (offsetTime / duration))) + '%'
                });
            };

            // setup
            $cell = cell.clone();
            $cell.attr('id', 'cell-' + Math.floor(Math.random() * 1000));

            $cell.find('.start').click(function () {
                $labnanny.data('labnanny').seek(onsetTime);
            });
            $cell.find('.end').click(function () {
                $labnanny.data('labnanny').seek(offsetTime);
            });

            var active = function () {
                $('#sheet .cell').removeClass('active');
                $cell.addClass('active');
            };

            $cell.click(function () {
                active();
            });

            $cell.dblclick(function () {
                $('#loop').prop('checked', true);
                $labnanny.data('labnanny').updateLoop(onsetTime, offsetTime);
            });

            update(on, off, body);

            // api
            $cell.data('cell', {
                options: options,
                onset: onset,
                offset: offset,
                remove: remove,
                update: update,
                active: active
            });

            return $cell;
        }
    });
})(jQuery, window, document);

// initialization
var $labnanny;

$(document).ready(function () {
    // global interfaces
    $labnanny = $('body').labnanny({});
});
