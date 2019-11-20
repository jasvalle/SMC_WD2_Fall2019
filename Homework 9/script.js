$('select#FX').change(function () {
    var currentSelection = $(this).val();
    console.log(currentSelection);
    
    if (currentSelection === 'flowers') {
        $('.flower-img').show(1000);
    }


    if (currentSelection === 'hide') {

        $('.box').hide(1000 ,fucntion() 
                $('main section.notification-area').append('<p>Please Fill ' + $(this).attr('id') + ' out</p>')
            


            if (currentSelection === 'slideup') {
                $('.box').slideUp(1000);
            }

            if (currentSelection === 'slidedown') {
                $('.box').slideDown(1000);
            }
        })
});