const allImg = [
    'my-img/pxfuel (1).jpg',
    'my-img/pxfuel (3).jpg',
    'my-img/pxfuel (5).jpg',
    'my-img/pxfuel (13).jpg',
    'my-img/pxfuel (15).jpg',
    'my-img/pxfuel (17).jpg',
    'my-img/pxfuel (18).jpg',
    'my-img/pxfuel (21).jpg'
];


let imgIndex = 0;
const firstImg = document.getElementById('first-img');

setInterval(() =>{
    if(imgIndex === allImg.length){
        imgIndex = 0;
    }

    const imgLink = allImg[imgIndex];
    firstImg.setAttribute('src', imgLink);
    
    imgIndex++;

}, 1000);