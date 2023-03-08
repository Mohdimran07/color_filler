const colors = ['#DF2E38', '#ECF2FF', 'green', '#BE6DB7', '#2F58CD', '#FFA3FD', '#F9F54B'];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function(){
    // To get randomNumber 
    const randomNumber = getRandomNumber()
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})

function getRandomNumber (){
    return Math.floor(Math.random()*colors.length)
}