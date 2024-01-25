//open side nav and close it

 $('nav').animate({ left: -$('nav').innerWidth() }, 0);
$('.nav-close').click(() => {
    $('nav').animate({ left: -$('nav').innerWidth() }, 1000);
});
$('.nav-open').click(() => {
    $('nav').animate({ left: '0' }, 1000);
});

$('nav a').click((e) => {
    e.preventDefault();
    const sec = $(e.target).attr('href');

    const topOfset = $(sec).offset().top;

    $('html,body').animate({ scrollTop: topOfset }, 1000);
});

// talkers discription display toggle
$('.talkers-toggle').click((e) => {
    $(e.target).parent().find('p').slideToggle(500);
});
//  event time counter
function timeCounter() {
    const eventDate = '4 march 2024 6:00:00';
    const currenTime = new Date().getTime() / 1000;
    const remainingTime = new Date(eventDate).getTime() / 1000;
    const timeBetween = remainingTime - currenTime;
    const days = Math.floor(timeBetween / (60 * 60 * 24));
    const hours = Math.floor((timeBetween - days * (60 * 60 * 24)) / 3600);
    const mins = Math.floor(
        (timeBetween - days * (60 * 60 * 24) - hours * 3600) / 60
    );

    const secs = Math.floor(
        timeBetween - days * (60 * 60 * 24) - hours * 3600 - mins * 60
    );
    $('.days').html(`${days} d`);
    $('.hours').html(`${hours} h`);
    $('.mins').html(`${mins} m`);
    $('.secs').html(`${secs} s`);
}

setInterval(() => {
    timeCounter();
}, 1000);
// Charcter counter
console.log($('.contact textarea'));
$('.contact textarea').keyup(() => {
    const messageLength = $('.contact textarea').val().length;

    if (messageLength < 100) {
        $('.charNum').html(100 - messageLength);
    } else {
        $('.charNum').html('your available character finished ');
    }
});
