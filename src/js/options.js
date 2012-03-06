window.addEventListener('DOMContentLoaded', function() {
	var input = document.getElementById('optionsForm').domains;
	input.value = widget.preferences.whiteDomains || ''; 
	input.addEventListener('keyup', function(){document.getElementById('settingsOk').style.display = 'none'})
}, false);

function save(form)
{
	widget.preferences.whiteDomains = form.domains.value;
	document.getElementById('settingsOk').style.display = 'inline';
	return false;
}