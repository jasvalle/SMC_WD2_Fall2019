$(document).ready(function () {
    1
        $('select#FX').change(function () {
        var currentSelection = $(this).val();

        if (currentSelection === 'show') {
            $('.container-fo').show(1000);
            $('.container-fl').show(1000);
            $('.container-pu').show(1000);


        }

        if (currentSelection === 'flowers') {
            $('.container-fl').show(1000);
            $('.container-pu').slideUp(1000);
            $('.container-fo').slideUp(1000);

        }

        if (currentSelection === 'food') {
            $('.container-fo').show(1000);
            $('.container-fl').slideUp(1000);
            $('.container-pu').slideUp(1000);

        }

        if (currentSelection === 'puppies') {
            $('.container-pu').show(1000);
            $('.container-fl').slideUp(1000);
            $('.container-fo').slideUp(1000);

        }
    })
});