let btn = document.querySelector(".btn")
let h = document.querySelector("#value")
let span = document.querySelectorAll("span")
let rr = []
for(let a=0 ;a<span.length;a++){
    span[a].addEventListener("click",function(){
        if(this.innerHTML == '='){
            h.innerHTML = eval(h.innerHTML)
            rr.push(h.innerHTML);
        }else{
            if(this.innerHTML == 'clear'){
                h.innerHTML = "";
            }else{
                if(this.innerHTML == 'Del'){
                   let curnt = h.textContent;
                    h.textContent = curnt.substring(0, curnt.length -1)

                }else{
                h.innerHTML += this.innerHTML;
                rr.push(h.innerHTML);

            }
        }
    }
    })
}
let bv = document.querySelector(".ss")


bv.onclick = function(){
    for(let i=2;i<rr.length -2;i++){
   console.log(rr[i+2],`=${rr[i+4]}`)

    }
}