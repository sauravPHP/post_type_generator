$(document).ready(function(){
    $("#generate").click(function(){
	$(".codeposttype").show();
        var functionName =  $("#function_name").val();
        var postType =  $("#post_type").val();
        var taxonomyName =  $("#taxonomy_name").val();
        var menuName =  $("#menu_name").val();
        var menuIcon =  $("#menu_icon").val();
        var menuLabel =  $("#menu_label").val();

		$(".fn").text(functionName);
		$(".ml").text(menuLabel);
		$(".tn").text(taxonomyName);
		$(".ptn").text(postType);
		$(".mn").text(menuName);
		$(".mI").text(menuIcon);
		
    });
});