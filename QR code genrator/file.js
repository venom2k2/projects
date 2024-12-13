let inputdata=document.getElementById("inputfield");
let start_tag=document.getElementById("tag");
let qrbox=document.getElementById("qr");
//using jquery to add slideup,down feature
$(document).ready(function(){
    let cnt=0;
   let id= setInterval(function(){
        $("#tag").slideUp(1500).slideDown(1500)
        cnt++;
        if(cnt>=2)
            clearInterval(id);
        })      
        $("#tag").css({"fontStyle":"italic","color":"grey"})
    });

        showspinner=()=>
        {
            if(inputdata.value.trim()!="")
                {
                    qrbox.classList.add("opacity");
            start_tag.style.display="none";
            document.getElementById("spin").style.display="block";
            qrbox.style.display="none"
            setTimeout(()=>{
                document.getElementById("spin").style.display="none";
                qrbox.style.display="block"
                generateQR();
            },1000)
        }
        else{
         $(document).ready(function(){
            $("#inputfield").addClass("error")
        
            // inputdata.classList.add("error");
            setTimeout(()=>{
                $("#inputfield").removeClass("error")
                //inputdata.classList.remove("error");
            },1000)
        })
        }
     } 
 generateQR = () =>{
    
    qrbox.src=" https://api.qrserver.com/v1/create-qr-code/?size=200x200&data="+inputdata.value;
   
}
