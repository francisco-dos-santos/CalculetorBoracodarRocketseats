
const result= document.querySelector(' #resul-final p');
const mostra=document.querySelector('.cont-operation');
const buttons=document.querySelectorAll('#cont-buttons button');
console.log(buttons)

function clean(){
    mostra.textContent="";
}

buttons.forEach((button)=>{
    button.addEventListener('click',()=>{
        if(button.value==="ce") return false;
        if(button.id==="borrar"){
            mostra.textContent=mostra.textContent.slice(0,-1);
            return false;
        }
        if(button.id==="igual")
        {
            if((mostra.textContent.length>=2))
            {
                try { 
                    setTimeout(()=>{
                         mostra.textContent="";
                },1000)
                    result.textContent=eval(mostra.textContent);
                // return;
                } catch (error) {
                    result.textContent="Error";
                }
            }
            else{
                mostra.textContent="";
                result.textContent="Error";
            }
            return;
        }
        if(result.textContent==="Error"){
            result.textContent="0";
        }
        mostra.textContent+=button.value;
        // console.log(button.value)
    })
})
