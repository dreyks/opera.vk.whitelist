// ==UserScript==
// @include http://vk.com/away.php*
// ==/UserScript==

var url = window.location.search.substr(1) || '';
var redirUrl = '';
url = url.split('&');
for (var i in url)
{
	//console.log(url[i]);
	var tmp = url[i].split('=');
	if ('to' == tmp[0])
	{
		redirUrl = unescape(tmp[1]);
		break;
	}
}
if (redirUrl)
{
	opera.extension.onmessage = function(event){
		var domains = event.data.split(',').map(function(val){return val.replace(/^\s*|\s*$/g, '')}).filter(function(val){return val != ''});;
		opera.postError("recieved " + domains);
		for (var i in domains)
		{
			var domain = domains[i];
			//opera.postError(redirUrl + ":" + domain);
			if ((domain) && (-1 != redirUrl.indexOf(domain)))
			{
				opera.postError('redirected to ' + redirUrl);
				window.location = redirUrl;
				return true;
			}
		}
		opera.postError('white-list miss');
		return false;
	}
}
