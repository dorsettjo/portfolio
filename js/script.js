
// Step3

jQuery(document).ready(function($) {
	$('.toggle-menu').jPushMenu();
});

function crisisList(){
        $.getJSON("/api/crisiss/").done(function(results){
            var source = $("#handlebarsTest").html();
            var template = Handlebars.compile(source);
            var html = template(results.results);
            $('#crisisResults').append(html);
        })
}


crisisList()
