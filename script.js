
function openHam() {
  document.getElementById("open").style.display = "block";
}
function closeHam() {
  document.getElementById("open").style.display = "none";
}
function openSlide() {
  document.getElementById("r-slide").style.display = "block";
}
function closeSlide() {
  document.getElementById("r-slide").style.display = "none";
}
//    Search Functionality
function myFunction() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  ul = document.getElementById("mybrands");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

function loadDataFromFile() {
    
    fetch("./data.json")
                .then((res) => {
                    return res.json();
                })
                .then((data) => {
                    console.log("DATA HERE===>"+JSON.stringify(data))
                    input = document.getElementById("myInput");
                    filter = input.value.toUpperCase();
                    ul = document.getElementById("mybrands");
                    li = ul.getElementsByTagName("li");
                    for (i = 0; i < li.length; i++) {
                      a = li[i].getElementsByTagName("a")[0];
                      txtValue = a.textContent || a.innerText;
                      txtValue.display = data[i]["brandName"]
                    }
                })
                   
               
}
