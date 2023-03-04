$('document').ready(function(){
    $('.post-btn').click(function(){
        let title = $('#title').val();
        let secret_key = $('#secret-key').val();
        let msg = $('#msg').val();
        console.log(title);
        console.log(secret_key);
        console.log(msg);
    });



});