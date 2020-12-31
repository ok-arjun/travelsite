const navSlide = ()=>{
  //const navItems = document.querySelector('.nav-items').style.transform='translateY(0%)';
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-items');
  const line1 = document.querySelector('.line1');
  const line2 = document.querySelector('.line2');
  const line3 = document.querySelector('.line3');
  burger.addEventListener('click',()=>{
     nav.classList.toggle('nav-active');
     line1.classList.toggle('lineA');
     line2.classList.toggle('lineB');
     line3.classList.toggle('lineC');
  });
 }
 navSlide();

function bookPopup(){
    document.querySelector(".popUp").style.display="block";
}
function popClose(){
    document.querySelector(".popUp").style.display="none";
}
function myFunction() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput1");
    filter = input.value.toUpperCase();
    table = document.getElementById("table");
    tr = table.getElementsByTagName("tr");
  
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
}
myFunction();