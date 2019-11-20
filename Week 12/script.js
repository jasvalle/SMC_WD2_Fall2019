$(document).ready(function () {
    $('input, label').focus(function () {
        console.log($(this).attr('id'));
        if ($(this).val() == "") {
            $('main section.notification-area').append('<p>Please Fill ' + $(this).attr('id') + ' out</p>')
        }
    });

    $('input, label').blur(function () {
        $('p').remove()
    });

    $('select#FX').change(function(){
        var currentSelection = $(this).val();
        console.log(currentSelection);
        if(currentSelection === 'show'){
            $('.box').show(1000);
        }
        
        if(currentSelection === 'hide'){

            $('.box').hide(1000, fucntion()
                $('main section.notification-area').append('<p>Please Fill ' + $(this).attr('id') + ' out</p>')
        
        
        if(currentSelection === 'slideup'){
            $('.box').slideUp(1000);
        }
     
        if(currentSelection === 'slidedown'){
            $('.box').slideDown(1000);
        }
    })
});