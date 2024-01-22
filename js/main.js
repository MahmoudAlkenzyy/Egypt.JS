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
    console.log(secs);
}

setInterval(() => {
    timeCounter();
}, 1000);
