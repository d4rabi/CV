window.onscroll = function(){
    if(document.documentElement.scrollTop > 5){
        document.getElementById('navbar').classList.add('sticky-nav');
    }
    else{
        document.getElementById('navbar').classList.remove('sticky-nav');
    }
}