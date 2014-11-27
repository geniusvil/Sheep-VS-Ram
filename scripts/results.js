define(["jquery"], function ($) {
    var results = function () {
        var results = $(document.getElementById('result'));
        var par = $(document.createElement('p')).addClass('result');
var spanUserNumber = $(document.createElement('span')).addClass('userNumber');
        spanUserNumber.html(sessionStorage.getItem('userNumber'));
            par.append(spanUserNumber);

        var img = $(document.createElement('img')).css('width', '50').css('height', '50').css('float', 'right');
        for (var i = 0; i < sessionStorage.getItem('ram'); i++) {
            var currentImg = img.clone().attr('src', '../images/ram.png');
            par.append(currentImg);

        }
        if (sessionStorage.getItem('ram')-0 !== 4) {
            for (i = 0; i < sessionStorage.getItem('sheep'); i++) {
                currentImg = img.clone().attr('src', '../images/sheep.png');
                par.append(currentImg);
            }
        }
       results.append(par);
    };
    return  results;
});


