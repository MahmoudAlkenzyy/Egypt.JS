// talkers discription display toggle
$('.talkers-toggle').click((e) => {
    $(e.target).parent().find('p').slideToggle(500);
});
//  event time counter
const eventDate = '4 march 2021 6:00:00';
const currenTime = new Date().getTime() / 1000;
const remainingTime = new Date(eventDate).getTime() / 1000;
const timeBetween = remainingTime - currenTime;
const days = Math.floor(timeBetween / (60 * 60 * 42));

const sec = Math.floor(timeBetween / (60 * 60 * 42));
console.log(days);
// console.log(remainingTime);
setInterval(() => {
    $('.days').html(`${days} days`);
}, 1000);
