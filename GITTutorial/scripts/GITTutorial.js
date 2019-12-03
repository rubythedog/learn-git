function get_Menu() {
    var str = "";
	str +="<nav class=\"navbar navbar-expand-sm navbar-light\">";
	str +="<ul class=\"navbar-nav\">";
	str +="<li class=\"nav-item dropdown\">";
	str +="<a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbardrop\" data-toggle=\"dropdown\">Home</a>";
	str +="<div class=\"dropdown-menu\">";
	str +="<a class=\"dropdown-item\" href=\"Welcome.html\">Welcome</a>";
	str +="<a class=\"dropdown-item\" href=\"About.html\">About</a>";
	str +="</div>";
	str +="</li>";
	str +="<li class=\"nav-item\"><a class=\"nav-link\" href=\"GettingStarted.html\" >Getting Started</a></li>";
	str += "<li class=\"nav-item\"><a class=\"nav-link\" href=\"HowDoI.html\" >How Do I...</a></li>";
	str += "<li class=\"nav-item\"><a class=\"nav-link\" href=\"local_actions.html\" >Local Actions</a></li>";
	str += "<li class=\"nav-item\"><a class=\"nav-link\" href=\"server_actions.html\" >Server Actions</a></li>";
	str +="<li class=\"nav-item\"><a class=\"nav-link\" href=\"Resources.html\" >Resources</a></li>";
	str +="<li class=\"nav-item\"><a class=\"nav-link\" href=\"FAQ.html\" >FAQ</a></li>";
	str +="</ul>";
	str +="</nav>";
	return str;
}
function inject_Top_Level_Menu() {
    var str = get_Menu();
    $("#menu").html(str);
}

function inject_Sub_Folder_Menu() {
	// https://flaviocopes.com/javascript-regular-expressions/#groups

	var str = get_Menu();
	var replacedStr = get_Menu();
	
	replacedStr = replacedStr.replace('href=\"#\"','hrXef=\"#\"');
	replacedStr = replacedStr.replace(/href=\"/g,'href=\"..//');
	replacedStr = replacedStr.replace('hrXef=\"#\"','href=\"#\"');
    $("#menu").html(replacedStr);
}

