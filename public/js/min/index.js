/*! live-0.0.0.js 2016-06-03 */
function LiveCast_Do (a) { LiveCastRoomID = UnSecret(a), liveUrl = '/swf/Play.swf?Live_Type=2&Live_NG_ID=' + LiveCastRoomID + '&' + swf_version, isYY = !1, _Dis_Live(0), $('#LiveChange').hide() } function LiveCast_End () { LiveCastRoomID = '', pubUrl = '/swf/LivePlayer_2.3.swf?Live_Type=1&Live_NG_ID=' + iRoomID + '&' + swf_version, liveUrl = '/swf/Play.swf?Live_Type=2&Live_NG_ID=' + iRoomID + '&' + swf_version, _Dis_Live(0), iInfo.IsZber && $('#LiveChange').show() } function LiveCast_Do_YY (a) { LiveCastRoomID = a; var b = a.split(','); liveUrl = b.length > 1 ? 'http://yy.com/s/' + b[0] + '/' + b[1] + '/mini.swf' : 'http://yy.com/s/' + LiveCastRoomID + '/' + LiveCastRoomID + '/mini.swf', isYY = !0, _Dis_Live(0), $('#LiveChange').hide() } function LiveCast_End_YY () { LiveCastRoomID = '', pubUrl = '/swf/LivePlayer_2.3.swf?Live_Type=1&Live_NG_ID=' + iRoomID + '&' + swf_version, liveUrl = '/swf/Play.swf?Live_Type=2&Live_NG_ID=' + iRoomID + '&' + swf_version, isYY = !1, _Dis_Live(0), iInfo.IsZber && $('#LiveChange').show() } function LiveCast_Do_Other (a, b, c, d) { LiveCastRoomID = a, liveUrl = '/swf/Play.swf?Live_Type=2&Live_NG_ID=' + a + '&SnKey=' + b + '&MsgUrl=' + c + '&WatchUrl=' + d + '&' + swf_version, isYY = !1, _Dis_Live(0), $('#LiveChange').hide() } function LiveCast_End_Other () { LiveCastRoomID = '', pubUrl = '/swf/LivePlayer_2.3.swf?Live_Type=1&Live_NG_ID=' + iRoomID + '&' + swf_version, liveUrl = '/swf/Play.swf?Live_Type=2&Live_NG_ID=' + iRoomID + '&' + swf_version, isYY = !1, _Dis_Live(0), iInfo.IsZber && $('#LiveChange').show() } function ChangeLiveMode () { $('#i_Live_Player').attr('t') == 'pub' ? ($('#LiveChange').html('切换到发布模式'), _Dis_Live(0)) : ($('#LiveChange').html('切换到观看模式'), _Dis_Live(1)) } function LiveSetPubUserInfo (a) { clearTimeout(_Config.LivePubUserInfo_TimeOut), a = unescape(a).split(','), $('#LivePubUserInfo').text(a[0]), $('#LivePubUserInfo').attr({uname: a[0], uid: a[1], title: '【' + a[0] + '】正在直播...'}), $('#LivePubUserInfo').css({visibility: 'visible'}), $('#LivePubUserInfo').animate({top: 0, opacity: 1}, 200), _Config.LivePubUserInfo_TimeOut = setTimeout(function () { $('#LivePubUserInfo').animate({top: -35, opacity: 0}, 200) }, 2e3); var b = {}; b.UID = a[1], b.NickName = a[0], SetCurrentLiveUID(b) } function ShowPubUserInfo () { clearTimeout(_Config.LivePubUserInfo_TimeOut), $('#LivePubUserInfo').animate({top: 0, opacity: 1}, 200) } function LiveRefresh () { $('#i_Live_Player').attr('t') == 'pub' ? _Dis_Live(1) : _Dis_Live(0) } function LiveZoom () { var a = $('#LiveZoom').text() == '放大'; $('#LiveZoom').text(a ? '缩小' : '放大'); var b = $('#Live_Title'), c = $('#LiveDiv'), d = $('.Y_Right').css('float') == 'right'; a ? ($('.Y_Right').css({overflow: 'visible'}), $('#LiveDiv').css({height: '396px', width: '480px', position: 'absolute', 'z-index': '9999', top: '0px', bottom: 'auto', left: d ? 'auto' : '512px', right: d ? '512px' : 'auto', 'margin-bottom': '0px'}), $('#LiveArea').css({height: '360px', width: '480px'}), b.mousedown(function (a) { var b = $(this).offset(), e = a.pageX - b.left, f = a.pageY - b.top, g = c.position().left, h = c.position().top; $(document.body)[0].onselectstart = function () { return !1 }, $('body').addClass('NoSelect'), $(document).bind('mousemove', function (a) { var i = a.pageX - e - b.left, j = a.pageY - f - b.top, k = g + i, l = h + j; l < 0 && (l = 0), l + c.height() > $('.Y_Main').height() && (l = $('.Y_Main').height() - c.height()), d == 1 ? (Math.abs(k) + $('.Y_Right').width() > $('.Y_Main').width() && (k = $('.Y_Right').width() - $('.Y_Main').width()), k > 1 && (k = 0)) : (Math.abs(k) > $('.Y_Main').width() - $('#LiveDiv').width() - $('.Y_Show').width() - 22 && (k = $('.Y_Main').width() - $('#LiveDiv').width() - $('.Y_Show').width() - 22), k < 0 - $('.Y_Show').width() - 10 && (k = 0 - $('.Y_Show').width() - 10)), c.css('left', k), c.css('top', l) }), $(document).bind('mouseup', function (a) { $(document).unbind('mousemove'), $(document.body)[0].onselectstart = function () {}, $('body').removeClass('NoSelect') }) }), $('#LiveTool').show()) : ($('.Y_Right').css({overflow: 'hidden'}), $('#LiveDiv').css({height: 'auto', width: '100%', position: 'relative', 'z-index': '999', top: '0px', left: '0px'}), $('#LiveArea').css({height: _oldHeight != '' ? _oldHeight : '200px', width: '100%', 'margin-bottom': '10px'}), b.unbind('mousedown'), $('#LiveTool').hide()), isYY && $('#i_Live_Player').height($('#LiveArea').height() + 36), RightList_Height() } function OnZoomMode () { var a = $('#Live_Title'), b = $('#LiveDiv'), c = $('#LiveDiv').css('position') == 'absolute'; $('#LiveZoom').text(c ? '缩小' : '放大'), c ? a.mousedown(function (a) { var c = $(this).offset(), d = a.pageX - c.left, e = a.pageY - c.top, f = b.position().left, g = b.position().top; $(document.body)[0].onselectstart = function () { return !1 }, $('body').addClass('NoSelect'), $(document).bind('mousemove', function (a) { var h = a.pageX - d - c.left, i = a.pageY - e - c.top, j = f + h, k = g + i; k < 0 && (k = 0), k + b.height() > $('.Y_Main').height() && (k = $('.Y_Main').height() - b.height()), Math.abs(j) + $('.Y_Right').width() > $('.Y_Main').width() && (j = $('.Y_Right').width() - $('.Y_Main').width()), Math.abs(j) < $('#LiveDiv').width() - $('.Y_Right').width() && (j = -($('#LiveDiv').width() - $('.Y_Right').width())), b.css('left', j), b.css('top', k) }), $(document).bind('mouseup', function (a) { $(document).unbind('mousemove'), $(document.body)[0].onselectstart = function () {}, $('body').removeClass('NoSelect') }) }) : (_oldHeight = $('#LiveArea').height(), a.unbind('mousedown'), $('#LiveTool').hide()), RightList_Height() } function LivePlayerOver () { ShowPubUserInfo() } function LivePlayerOut () { clearTimeout(_Config.LivePubUserInfo_TimeOut), _Config.LivePubUserInfo_TimeOut = setTimeout(function () { $('#LivePubUserInfo').animate({top: -35, opacity: 0}, 200) }, 2e3) } function LiveResizeOver () {} function LiveResizeOut () {} var i_LiveCastRoomID = '', swf_version = '14.4.22', pubUrl = '/swf/LivePlayer_2.3.swf?Live_Type=1&PubName=&Live_NG_ID=7000', liveUrl = 'http://yy.com/s/28120210/2265383044/yyscene.swf', isYY = !0; document.write('&nbsp;&nbsp;&nbsp;&nbsp;<a href="javascript:void(0)" id="LiveZoom" onclick="LiveZoom()" title="放大/缩小">放大</a>'), document.write('&nbsp;&nbsp;&nbsp;&nbsp;<a href="javascript:void(0)" id="LiveRefresh" onclick="LiveRefresh()" title="刷新视频">刷新</a>'), iInfo.IsZber && document.write('&nbsp;&nbsp;&nbsp;&nbsp;<a href="javascript:void(0)" id="LiveChange" onclick="ChangeLiveMode()" title="切换发布/观看模式">切换到发布模式</a>'); var _oldHeight = ''; $(function () { $('#Live_Title').mouseover(function () {}), $('#Live_Title').mouseout(function () {}), $('#LiveTool_Resize').mouseover(function () { LiveResizeOver() }), $('#LiveTool_Resize').mouseout(function () { LiveResizeOut() }), $('#LiveTool_Resize').mousedown(function (a) { _Config.LiveResize_Downing = !0; var b = $(this).offset(), c = a.pageX - b.left, d = a.pageY - b.top, e = $('#LiveDiv'), f = e.height(), g = e.width(), h = $('#LiveArea'), i = h.height(), j = h.width(); $('body')[0].onselectstart = function () { return !1 }, $('body').addClass('NoSelect'), $(document).bind('mousemove', function (a) { var k = a.pageX - c - b.left, l = a.pageY - d - b.top; return a.pageX > $('body').width() - ($('body').width() - $('.Page').width()) / 2 - 10 ? !1 : f + l < 100 || f + l > $('.Y_Main').height() - 6 || g + k < 100 || g + k > $('.Y_Main').width() - 6 ? !1 : (e.height(f + l), e.width(g + k), h.height(i + l), h.width(j + k), void (isYY && $('#i_Live_Player').height(h.height() + 36))) }), $(document).bind('mouseup', function (a) { $(document).unbind('mousemove'), $('body')[0].onselectstart = function () {}, $('body').removeClass('NoSelect'), _Config.LiveResize_Downing = !1 }) }), OnZoomMode() })
