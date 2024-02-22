const headText = document.querySelector(".Heading")
const blackbox = document.querySelector('.black')
const yellowkbox = document.querySelector('.yellow')
const bluebox = document.querySelector('.blue')
console.log(headText)


const blackBox = document.querySelectorAll(".button");

blackBox.forEach(function (e) {
    console.log(e);
e.addEventListener('click', function(e){
    console.log(e.target.id)
    if(e.target.id === 'yellow' ){
        yellowkbox.style.backgroundColor = e.target.id;
    }
    else if(e.target.id === 'black' ){

        blackbox.style.backgroundColor = e.target.id;
    }
    else{
        bluebox.style.backgroundColor = e.target.id
    }
})
});