// Add your code to this file
let learn = document.querySelector("h2")
learn.style.textAlign = "center";

let imagesarray = document.getElementsByClassName("pokemon_images")
for (let i = 0; i < imagesarray.length; i++)
{
    imagesarray[i].style.border = "dotted";
    imagesarray[i].style.borderColor = "yellow";
}
let image = document.querySelector("img")
image.style.border = "dotted";
image.style.borderColor = "yellow";

let back = document.querySelector("body")
back.style.backgroundColor = "blue";