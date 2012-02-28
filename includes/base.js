if (-1 != window.location.href.indexOf('vk.com/away.php'))
{
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
			var domains = event.data;
			//console.log(domains);
			//opera.postError("recieved " + domains);
			for (var i in domains)
			{
				var domain = domains[i];
				//console.log(redirUrl + ":" + domain);
				if ((domain) && (-1 != redirUrl.indexOf(domain)))
				{
					//console.log('redirected to ' + redirUrl);
					window.location = redirUrl;
					return true;
				}
			}
			//console.log('white-list miss');
			return false;
		}
	}
}
