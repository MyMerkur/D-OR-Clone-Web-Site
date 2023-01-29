
//LOCATİON DROPDOWN 
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
  }


  /*MOBİLE-RESPONSİVE-MENU*/
  const navShow = () => {
    const lines = document.querySelector(".lines");
    const nav = document.querySelector(".dro");

    lines.addEventListener("click",()=>{
      nav.classList.toggle("nav-active");
    })
  }
  navShow();

  /*SEARCH-BAR*/
 
  const searchIcon = document.querySelector('.search-icon');
  const searchContainer = document.querySelector('.search-container');
  
  searchIcon.addEventListener('click', function() {
    searchContainer.classList.toggle('show');
  });
  
  
/*CREATE-PROFİLE-ENTER-BUTTON*/


function giris(){
  let mail = document.getElementById("email").value
  let pass = document.getElementById("pwd").value
  if(mail== "" || pass == ""){
    alert ("Lütfen Bilgileriniz Kontrol Ediniz")
  }else{
    window.location.href = "../index.html";
    alert("Hoşgeldiniz. Anasayfaya Yönlendiriliyorsunuz")
  }
}

/*REGİSTER-CREATE-BUTTON*/
    
  function olustur(){
    let mail = document.getElementById("email").value;
    let pass = document.getElementById("pwd").value;
    let na = document.getElementById("name").value;
    let surname = document.getElementById("surname").value;
    let adress = document.getElementById("adress").value;
    let adress2 = document.getElementById("adress2").value;
    let city = document.getElementById("city").value;
    let number = document.getElementById("number").value;
    let birth = document.getElementById("birth").value;
    let a1 = document.getElementById("a1").value;
    let b1 = document.getElementById("b1").value;
    let c1 = document.getElementById("c1").value;
    let d1 = document.getElementById("d1").value;

    if(mail == "" || pass == "" || na == "" || surname == "" || adress == "" || adress2 == "" || city == "" || number == "" || birth == "" || a1 == "" || b1 == "" || c1 == "" || d1 == ""){
        alert("Lütfen tüm alanları doldurun!");
    }else{
        window.location.href = "./index.html";
        alert("Başarıyla kaydedildi! Anasayfaya yönlendiriliyorsunuz.");
    }
}

