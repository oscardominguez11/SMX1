let imatges = document.querySelectorAll("#galeria img");

for (i = 0; i < imatges.length; i++){
    imatges[i].addEventListener("click", function OnClick(e){
        
        let imatgesgrans = document.getElementById("imatge-gran");
        imatgesgrans.innerHTML = `<img src="${e.target.dataset.gran}">`;
        
    })
}
