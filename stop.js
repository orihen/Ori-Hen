var images = [
    "imgs/1.jpg" ,
    "imgs/2.jpg"
]

var i =0;

function play() {

    setTimeout(() => {
        document.getElementById("image").src =images[i];
        i++;
        if (i < images.length){
            play()
        }
        else {
            i=0;
        }
    }, 500);
}
