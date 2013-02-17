$(document).ready(function(){
    $('.navanimation').lavaLamp({
        fx : 'swing',
        speed : 200,
        click : function(){
            console.log("click");
            return true;
        }
    });
    $("[data-toggle=\"tooltip\"]").tooltip();
});
