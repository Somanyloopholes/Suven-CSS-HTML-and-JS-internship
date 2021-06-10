
const carouselSlide = document.querySelector('.carouselslide');
const carouselimages = document.querySelectorAll('.carouselslide img');

const prevBtn = document.querySelector('#prevbutton');
const nextBtn = document.querySelector('#nextbutton');

// Carousel

// counter
let counter = 1;
const size = 1152;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

// Button Listeners
nextBtn.addEventListener('click',()=>{
    carouselSlide.style.transition = 'transform 0.4s ease-in-out';
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click',()=>{
    if (counter <= 0) {
        return;
    }
    carouselSlide.style.transition = 'transform 0.4s ease-in-out';
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

carouselSlide.addEventListener('transitionend',()=>{
    if(carouselimages[counter].id === 'lastclone'){
        carouselSlide.style.transition = 'none';
        counter = carouselimages.length -2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'; 
    }

    if(carouselimages[counter].id === 'firstclone'){
        carouselSlide.style.transition = 'none';
        counter = carouselimages.length - counter;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'; 
    }
});

// -------------searchbar-----------

const searchBar = document.getElementById('searchbar');
const movieNameses = document.querySelectorAll('.mediabox');
const movieNamesArr = Array.from(movieNameses);

searchBar.addEventListener('keyup',(e) =>{

    const searchString = e.target.value.toLowerCase();
    
    for (let i = 0; i < movieNamesArr.length; i++) {
        const moviename = movieNamesArr[i].querySelector('b').textContent.toLowerCase();

        if (moviename.indexOf(searchString)>-1){
            movieNamesArr[i].style.display = '';
            console.log(moviename);
        }
        else{
            movieNamesArr[i].style.display = 'none';
        }
        
    }   
});

// -------genre button dropdown select

const genrebtn = document.querySelector('.showgenre');
const allbtn = document.querySelector('.all');
const scifibtn = document.querySelector('.scifi');
const dramabtn = document.querySelector('.drama');
const actionbtn = document.querySelector('.action');

allbtn.addEventListener('click',(e) => {
    console.log('all');

    for (let i = 0; i < movieNamesArr.length; i++) {
        
        movieNamesArr[i].style.display = '';
    }
});

scifibtn.addEventListener('click',(e) => {
    console.log('scifi');

    for (let i = 0; i < movieNamesArr.length; i++) {
        
        if (movieNamesArr[i].classList[1] === 'scifi'){
            movieNamesArr[i].style.display = '';
        }
        else{
            movieNamesArr[i].style.display = 'none';
        }
    }
    
});

dramabtn.addEventListener('click',(e) => {
    console.log('drama');

    for (let i = 0; i < movieNamesArr.length; i++) {
        
        if (movieNamesArr[i].classList[1] === 'drama'){
            movieNamesArr[i].style.display = '';
        }
        else{
            movieNamesArr[i].style.display = 'none';
        }
    }
});

actionbtn.addEventListener('click',(e) => {
    console.log('action');

    for (let i = 0; i < movieNamesArr.length; i++) {
        
        if (movieNamesArr[i].classList[1] === 'action'){
            movieNamesArr[i].style.display = '';
        }
        else{
            movieNamesArr[i].style.display = 'none';
        }
    }
});