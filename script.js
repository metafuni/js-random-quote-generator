$(document).ready(function () {
    // initial color
    const $color = "#" + ((1 << 24) * Math.random() | 0).toString(16);
    $('.color').css('color', $color);
    $('.bg-color').css('background-color', $color);

    // random color with quote and author
    $('.btn').on('click', function () {
        const $newcolor = "#" + ((1 << 24) * Math.random() | 0).toString(16);
        $('.color').css('color', $newcolor);
        $('.bg-color').css('background-color', $newcolor);

        $.ajax({
            method: 'GET',
            url: '/Database-Quotes-JSON-master/quotes.json',
            dataType: 'json'        
        }).done(function (data) {
            var $index = Math.floor(Math.random() * data.length);

            if (!data[$index].quoteAuthor) {
                $('h3').text("Anonymous").prepend("- ");
            } else {
                $('h1').html(data[$index].quoteText).prepend('<i class="fa fa-quote-left fa-pull-left"></i>');
                $('h3').html(data[$index].quoteAuthor).prepend("- ");
            }
        })
    });
});