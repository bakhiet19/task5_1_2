const array_img = ["./assets/img/1.jpg" , "./assets/img/2.jpg" , './assets/img/3.jpg' , './assets/img/4.jpg'];
let imgs = document.getElementById('img');
let left = document.querySelector('#left');
let right = document.querySelector('#right');
var count = 0;



right.addEventListener('click' , function(e){
    if(count == array_img.length - 1){
        count = 0
        imgs.setAttribute('src' , array_img[count])
    }
    else{
     ++ count;
     imgs.setAttribute('src' , array_img[count])
    }
 })


left.addEventListener('click' , function(e){
   if(count == 0){
    count = array_img.length -1
    imgs.setAttribute('src' , array_img[count])
   }
   else{
    -- count;
    imgs.setAttribute('src' , array_img[count])
   }
})



let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');
let four = document.getElementById('four');


one.addEventListener('click' , function(){
    imgs.setAttribute('src' , array_img[0])
})

two.addEventListener('click' , function(){
    imgs.setAttribute('src' , array_img[1])
})


three.addEventListener('click' , function(){
    imgs.setAttribute('src' , array_img[2])
})

four.addEventListener('click' , function(){
    imgs.setAttribute('src' , array_img[3])
})
