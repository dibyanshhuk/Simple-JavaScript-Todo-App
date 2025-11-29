let btn = document.querySelector("button");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");

btn.addEventListener("click", function() {
    let item = document.createElement("li");
    item.innerText = inp.value;

    let delbtn = document.createElement("button");
    delbtn.innerText = "delete";
    delbtn.classList.add("delete");
    item.appendChild(delbtn);

    ul.append(item);
    console.log(inp.value);
    inp.value = "";

});

// let delbtn1 = document.querySelectorAll(".delete");
// for (delbtn of delbtn1) {
//     delbtn.addEventListener("click", function() {

//         let par = this.parentElement;
//         par.remove();
//         console.log("removed");

//     });
// }


ul.addEventListener("click", function(event) {
    if(event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("deleted");
    }
});