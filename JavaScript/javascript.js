

       
function show1() { //function to display personal information
       
       document.getElementById("1").style.display = "block"; //show personal information
       document.getElementById("2").style.display = "none"; //hide Education and Qualification
       document.getElementById("3").style.display = "none"; //hide skills
       

     }

function show2() {//function to display Education and Qualification
       
       document.getElementById("2").style.display = "block";//Show Education and Qualification
       document.getElementById("1").style.display = "none";//hide Personal Information
       document.getElementById("3").style.display = "none";//hide skills
       
     }

function show3() {//function to display skills
       
       document.getElementById("3").style.display = "block";//Show skills
       document.getElementById("2").style.display = "none";//hide Education and Qualification
       document.getElementById("1").style.display = "none";//hide Personal Information
       
     }
      
       
  function showIntro() {//function to display introduction
       
       document.getElementById("1").style.display = "block";//Show introduction
       document.getElementById("2").style.display = "none";//hide advantages
       document.getElementById("3").style.display = "none";//hide disadvantages
       document.getElementById("4").style.display = "none";//hide Verdict
       

     }

function showAdv() {//function to display Advantages
       
       document.getElementById("2").style.display = "block";//Show Advantages
       document.getElementById("1").style.display = "none";//hide introduction
       document.getElementById("3").style.display = "none";//hide disadvantages
       document.getElementById("4").style.display = "none";//hide Verdict
       
     }

function showDisadv() {//function to display disadvantages
       
       document.getElementById("3").style.display = "block";//show disadvantages
       document.getElementById("2").style.display = "none";//hide Advantages
       document.getElementById("1").style.display = "none";//hide introduction
       document.getElementById("4").style.display = "none";//hide Verdict
       
     }
      

function showVerdict() {//function to display Verdict
       
       document.getElementById("4").style.display = "block";//Show Verdict
       document.getElementById("2").style.display = "none";//hide Advantages
       document.getElementById("1").style.display = "none";//hide introduction
       document.getElementById("3").style.display = "none";//hide disadvantages
       
     }


  







     