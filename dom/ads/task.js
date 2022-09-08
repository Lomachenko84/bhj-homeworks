const rotator = document.getElementsByClassName("rotator__case");
let i = 0;
setInterval(() => {
    if (i == 0){
        rotator[rotator.length-1].classList.remove('rotator__case_active'); 
        rotator[i].classList.add("rotator__case_active");      
    } else {
        rotator[i-1].classList.remove('rotator__case_active');
        rotator[i].classList.add("rotator__case_active");  
    }
    
    ++ i

    if (i >= rotator.length){
        i = 0;
    }
}, 1000) 
