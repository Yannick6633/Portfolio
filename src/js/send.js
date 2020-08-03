// Envoi email

$('#send_email').click(function(e){
    e.preventDefault();
    var data = { 
        firstname: $('#firstname').val(),
        name: $('#name').val(),
        email: $('#email').val(),
        message: $('#message').val()
    };

    $.ajax({
        url: "/mail.php",
        type: 'POST',
        data: data,
        success: function(data) {
            $('#js_alert_success').css({'display' : 'block'});
            setTimeout(function(){
                $('#js_alert_success').css({'display' : 'none'});
                $('#firstname').val("");
                $('#name').val("");
                $('#email').val("");
                $('#message').val("");
            }, 3000);
        },
        error: function(data) {
            $('#js_alert_danger').css({'display' : 'block'});
            setTimeout(function(){
                $('#js_alert_danger').css({'display' : 'none'});
                $('#firstname').val("");
                $('#name').val("");
                $('#email').val("");
                $('#message').val("");
            }, 3000);
        }
    });
});
        
    

    // AJAX
    
    
