/*! live-0.0.0.js 2016-06-03 */
function Count_GetInfo () { var a = document.referrer ? document.referrer : '', b = a.split('.').length > 1 ? a.split('.')[1].toLowerCase() : '', c = '', d = ''; switch (b) { case 'baidu':d = '百度', grep = /wd\=.*\&/i, str = a.match(grep), c = str.toString().split('=')[1].split('&')[0]; break; case 'google':d = '谷歌', grep = /&q\=.*\&/i, str = a.match(grep), c = str.toString().split('&')[1].split('=')[1]; break; case 'sogou':d = '搜狗', grep = /query\=.*\&/i, str = a.match(grep), c = str.toString().split('&')[1].split('&')[2] }_Count.FromSite = d, _Count.FromSiteCode = b, _Count.FromUrl = a, _Count.FromKey = c, _Count.CurrentSite = location.host, iRoomID && (_Count.CurrentRID = iRoomID), _Count.CurrentUrl = location.href, _Count.InfoUID = iInfo.UserID, _Count.InfoUname = '', _Count.IsMobile = ibrowser.mobile ? 1 : 0, _Count.IsIos = ibrowser.iPhone || ibrowser.iPad ? 1 : 0, _Count.IsMobile == 1 && _Count.IsIos == 0 && (_Count.IsAndroid = 1), $.post('/handle/Visit.asp?ac=visit', {FromSite: _Count.FromSite, FromSiteCode: _Count.FromSiteCode, FromUrl: _Count.FromUrl, FromKey: _Count.FromKey, CurrentSite: _Count.CurrentSite, CurrentRID: _Count.CurrentRID, CurrentUrl: _Count.CurrentUrl, InfoUID: _Count.InfoUID, IsMobile: _Count.IsMobile, IsIos: _Count.IsIos, IsAndroid: _Count.IsAndroid}, function () {}) } var _Count = {}; _Count.FromSite = '', _Count.FromSiteCode = '', _Count.FromUrl = '', _Count.FromKey = '', _Count.StayTime = '', _Count.CurrentSite = '', _Count.CurrentRID = '', _Count.CurrentUrl = '', _Count.InfoUID = '', _Count.InfoUname = '', _Count.IsMobile = 0, _Count.IsIos = 0, _Count.IsAndroid = 0, Count_GetInfo()
