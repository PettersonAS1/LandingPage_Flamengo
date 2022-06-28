$(document).ready(function () {

    let containerA = document.getElementById("circleA");

    let = circleA = new ProgressBar.Circle(containerA, {

        color: '#fefeeb',
        strokeWidth: 8,
        duration: 1500,
        from: { color: '#000000' },
        to: { color: '#fefeeb' },

        step: function (state, circle) {

            circle.path.setAttribute('stroke', state.color);
            // Socios Torcedores
            let value = Math.round(circle.value() * 6220);

            circle.setText(value);

        }

    });

    let containerB = document.getElementById("circleB");

    let = circleB = new ProgressBar.Circle(containerB, {

        color: '#fefeeb',
        strokeWidth: 8,
        duration: 2000,
        from: { color: '#000000' },
        to: { color: '#fefeeb' },

        step: function (state, circle) {

            circle.path.setAttribute('stroke', state.color);
            // Torcida
            let value = Math.round(circle.value() * 3541);

            circle.setText(value);

        }

    });

    let containerC = document.getElementById("circleC");

    let = circleC = new ProgressBar.Circle(containerC, {

        color: '#fefeeb',
        strokeWidth: 8,
        duration: 2500,
        from: { color: '#000000' },
        to: { color: '#fefeeb' },

        step: function (state, circle) {

            circle.path.setAttribute('stroke', state.color);
            // Trofeus
            let value = Math.round(circle.value() * 137);

            circle.setText(value);

        }

    });

    let containerD = document.getElementById("circleD");

    let = circleD = new ProgressBar.Circle(containerD, {

        color: '#fefeeb',
        strokeWidth: 8,
        duration: 3000,
        from: { color: '#000000' },
        to: { color: '#fefeeb' },

        step: function (state, circle) {

            circle.path.setAttribute('stroke', state.color);
            // idolos
            let value = Math.round(circle.value() * 30);

            circle.setText(value);

        }

    });

    let dataAreaOffset = $('#data-area').offset();
    let stop = 0;

    $(window).scroll(function (e) {
        let scroll = $(window).scrollTop();

        if (scroll > (dataAreaOffset.top - 500) && stop == 0) {

            circleA.animate(1.0);
            circleB.animate(1.0);
            circleC.animate(1.0);
            circleD.animate(1.0);

            stop = 1;

        }
    });

    // Parallax

    setTimeout(function () {

        $('#data-area').parallax({ imageSrc: 'img/parallax.jpg' })

    }, 250);

    // Jogos Historicos

    $('.filter-btn').on('click', function () {

        let type = $(this).attr('id');
        let boxes = $('.project-box');

        $('.main-btn').removeClass('active');
        $(this).addClass('active');

        if (type == 'carioca-btn') {
            eachBoxes('carioca', boxes)
        } else if (type == 'liberta-btn') {
            eachBoxes('liberta', boxes);
        } else if (type == 'brasileiro-btn') {
            eachBoxes('brasileiro', boxes);
        } else {
            eachBoxes('all', boxes);
        }

    });

    function eachBoxes(type, boxes) {
        if (type == 'all') {
            $(boxes).fadeIn();
        } else {
            $(boxes).each(function () {
                if (!$(this).hasClass(type)) {
                    $(this).fadeOut('slow');
                } else {
                    $(this).fadeIn();
                }
            });
        }
    }


});