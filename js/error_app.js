document.getElementById("try_it_again").addEventListener("click", function(){

	//return a value extracted from URI parameter zebuhost (example, https://www.zebu.io?zebuhost=myhost.zebu.io)
	function _get_zebu_host(webview_src) {
		var id = webview_src.indexOf('?zebuhost=');
		if (id < 0) return;
		var result = webview_src.substring(id+10, webview_src.length);
		if (result.indexOf('http') !== 0)
			result = window.location.protocol + '//' + result;
		return result;
	}	
	
	var url = _get_zebu_host(window.location.href);
	if (!url) url = 'https://www.zebu.io';
	window.location.replace(url);
});
