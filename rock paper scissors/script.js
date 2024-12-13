let drawans=0,userans=0,compans=0;
choices=["rock","paper","scissor"]
userchoice =(value) =>
{
    
    if(value==0)
       playGame(0);
    else if(value==1)
      playGame(1);
     else 
    playGame(2);
}
computerchoice=()=>
{
    let compchoice=Math.floor(Math.random()*3);
    return compchoice;
}
draw=(value1,value2)=>
{
    
   drawans++;
   document.getElementById("draw-score").innerText=drawans; 
   changetext=()=>
   {
    let originaltext=document.getElementById("msg").innerHTML;
    msg.innerHTML="Game draw.Play again!!"
    document.getElementById("msg").style.backgroundColor="yellow";
    document.getElementById("msg").style.color="black";
    setTimeout(()=>{
        msg.innerHTML=originaltext
        msg.style.backgroundColor="#7fff00"
    },2000);
   }
   if(value1=="rock")
    document.getElementById("rock").addEventListener("click",changetext());
else if(value1=="paper")
    document.getElementById("paper").addEventListener("click",changetext());
else
    document.getElementById("scissor").addEventListener("click",changetext()); 
    
    showAndHide=(buttonval)=>
    {
        document.getElementById("uresult").innerHTML=`<i>${buttonval}</i>`;
        document.getElementById("cresult").innerHTML=`<i>${value2}</i>`;
       uresult.style.display="block";
       cresult.style.display="block";
       setTimeout(function()
    {
        document.getElementById("uresult").style.display="none"
        document.getElementById("cresult").style.display="none"
    },2000);
    }
    if(value1=="rock")
        document.getElementById("rock").addEventListener("click",showAndHide("rock"));
    else if(value1=="paper")
        document.getElementById("paper").addEventListener("click",showAndHide("paper"));
    else
        document.getElementById("scissor").addEventListener("click",showAndHide("scissor"));
    
    
   console.log("draw")

}
compwin=(value1,value2)=>
{
    
    compans++;
    document.getElementById("comp-score").innerText=compans; 
    changetext=()=>
        {
         let originaltext=document.getElementById("msg").innerHTML;
           msg.innerText=" Oops! computer won"
           document.getElementById("msg").style.backgroundColor="Red";
           document.getElementById("msg").style.color="whitesmoke";
         setTimeout(()=>{
             msg.innerHTML=originaltext
              msg.style.backgroundColor="#7fff00"
         },2000);
        }
        if(value1=="rock")
            document.getElementById("rock").addEventListener("click",changetext());
        else if(value1=="paper")
            document.getElementById("paper").addEventListener("click",changetext());
        else
            document.getElementById("scissor").addEventListener("click",changetext()); 
   
     showAndHide=(buttonval)=>
        {
            document.getElementById("uresult").innerHTML=`<i>${buttonval}</i>`;
            document.getElementById("cresult").innerHTML=`<i>${value2}</i>`;
           uresult.style.display="block";
           cresult.style.display="block";
           setTimeout(function()
            {
                document.getElementById("uresult").style.display="none"
                document.getElementById("cresult").style.display="none"
            },2000);
        }
        if(value1=="rock")
            document.getElementById("rock").addEventListener("click",showAndHide("rock"));
        else if(value1=="paper")
            document.getElementById("paper").addEventListener("click",showAndHide("paper"));
        else
            document.getElementById("scissor").addEventListener("click",showAndHide("scissor"));   
     
    
    console.log("compwin")

}
userwin=(value1,value2)=>
{
    
    userans++;
    document.getElementById("user-score").innerText=userans; 
    changetext=()=>
        {
         let originaltext=document.getElementById("msg").innerHTML;
         msg.innerText=" Great! You won"
         document.getElementById("msg").style.backgroundColor="green";
         document.getElementById("msg").style.color="whitesmoke";
         setTimeout(()=>{
             msg.innerHTML=originaltext
              msg.style.backgroundColor="#7fff00"
         },2000);
        }
        if(value1=="rock")
            document.getElementById("rock").addEventListener("click",changetext());
        else if(value1=="paper")
            document.getElementById("paper").addEventListener("click",changetext());
        else
            document.getElementById("scissor").addEventListener("click",changetext()); 
        
     showAndHide=(buttonval)=>
        {
            document.getElementById("uresult").innerHTML=`<i>${buttonval}</i>`;
            document.getElementById("cresult").innerHTML=`<i>${value2}</i>`;
           uresult.style.display="block";
           cresult.style.display="block";
           setTimeout(function()
        {
            document.getElementById("uresult").style.display="none"
            document.getElementById("cresult").style.display="none"
        },2000);
        }
        if(value1=="rock")
            document.getElementById("rock").addEventListener("click",showAndHide("rock"));
        else if(value1=="paper")
            document.getElementById("paper").addEventListener("click",showAndHide("paper"));
        else
            document.getElementById("scissor").addEventListener("click",showAndHide("scissor")); 
        
        
    console.log("userwin")

}
playGame=(uchoice)=>
{    
    let compchoice=computerchoice();
    if(uchoice==compchoice)
        draw(choices[uchoice],choices[compchoice]);
   else  if(uchoice==1 && compchoice==2)
        compwin(choices[uchoice],choices[compchoice]);
    else if(uchoice==1 && compchoice==3)
        userwin(choices[uchoice],choices[compchoice])
    else if(uchoice==2 && compchoice==1)
        userwin(choices[uchoice],choices[compchoice])
    else if(uchoice==2 && compchoice==3)
        compwin(choices[uchoice],choices[compchoice])
    else if(uchoice==3 && compchoice==1)
        compwin(choices[uchoice],choices[compchoice])
    else if(uchoice==3 && compchoice==2)
        userwin(choices[uchoice],choices[compchoice])
}