const click = document.querySelectorAll(".interest > label > .interest__check")
for (let i = 0; i < click.length; i++){
    click[i].addEventListener("change", function (){
        
        if (click[i].closest("label").nextElementSibling){
            const next = click[i].closest("label").nextElementSibling.querySelectorAll('.interest__check')
            for(let q = 0; q < next.length; q++){
              next[q].checked = click[i].checked
            }   
        }
      
    })
} 
