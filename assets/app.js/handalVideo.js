 
 
 //use .one to ensure this only happens once
 document.querySelector("#playvideo").onclick = function( ) {
     document.querySelector(".modal-video-tour").style.display = 'flex';
     var htmls = `
        <iframe id="video1" width="960" height="540"
            src="http://www.youtube.com/embed/UZGmCLXpKfc?enablejsapi" 
            frameborder="0" allowtransparency="true" allowfullscreen>
        </iframe>
        `;
    document.querySelector(".modal-video-tour").innerHTML = htmls;
    // //as noted in addendum, check for querystring exitence
    // var symbol = document.querySelector("#video1").src.indexOf("?") > -1 ? "&" : "?";
    // //modify source to autoplay and start video
    // document.querySelector("#video1").src += symbol + "autoplay=1";
}


document.onclick = function(e) {
    if(e.target === document.querySelector(".modal-video-tour")) {
        document.querySelector(".modal-video-tour").style.display = 'none';
    }
}