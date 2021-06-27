document.getElementById("searchInput").addEventListener("keyup", function(event){
    let query = event.target.value.toLowerCase();

    let names = document.getElementsByClassName("name");

    for(let i=0; i<names.length; i++){
        names[i].style.display = "none"

        if(names[i].textContent.toLowerCase().indexOf(query) >= 0){
            names[i].style.display = "inline-block";
        }
    }
})

