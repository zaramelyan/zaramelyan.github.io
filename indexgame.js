var counter = 0;
var reset = document.querySelector('.reset')
var start = document.querySelector('.start')

var randomX = 0;
var randomY = 0;

var container = document.querySelector('.container')

function starter() {
    
if (counter === 10 ) {
    document.querySelector('.container').innerHTML = '<p class="backgroundtext" >You win</p>'
}

if (counter === 0) {
    document.querySelector('.container').innerHTML = '<p class="backgroundtext">find the spot</p>'
}
    randomX = Math.floor(Math.random() * (screen.width - 100));
    randomY = Math.floor(169 + Math.random() * (screen.height - 300)) ;
    console.log('position ' + randomX, randomY);
   
}


var dots = [];
var colors = ['red', 'blue', 'orange', 'purple', 'green', 'yellow', 'pink']

let screenLog = document.querySelector('.container');
screenLog.addEventListener('mousemove', function(e) {
console.log(e.screenX, e.screenY)
    
    if(
        e.screenX <= randomX+30 &&
        e.screenX >= randomX-30 &&
        e.screenY <= randomY+30 &&
        e.screenY >= randomY-30 
    ) {
        counter += 1;
        document.querySelector('.counters').innerHTML = 'Score: ' + counter;
        
        var dot =  '<span class="dot" style="position: absolute; top: ' + randomY + 'px; left:  ' + randomX + 'px;"></span>'
        dots.push(dot)
        console.log(dots)
        background = '<p class="backgroundtext">find the spot</p>';
        document.querySelector('.container').innerHTML = background + dots.join(' ');
        
        starter();
    } 
});



function resetter() {
    counter = 0;
    document.querySelector('.counters').innerHTML = 'Score: ' + counter;
    document.querySelector('.container').innerHTML = '<p class="backgroundtext">press start</p>'
    dots = [];
}

reset.addEventListener('click', resetter)

start.addEventListener('click', starter)


