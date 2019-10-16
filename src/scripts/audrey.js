const audrey = document.getElementById("audrey")



// Add an event listener to the `document` object to listen for the "scroll" event.
document.addEventListener("scroll", function () {
    // Adjust the width of audrey to be 1/3 the value of `window.scrollY`. 
    console.log(window.scrollY);
    if (window.scrollY * 0.333 < 50){
        // No lower than 50px width
        audrey.style.width = "50px";
    }
    else {
        audrey.style.width = `${(window.scrollY * 0.333)}px`;
    }
    // Adjust the height of audrey to be 1/4 the value of `window.scrollY`. 
    if (window.scrollY * 0.25 < 100){
        // No lower than 100px height
        audrey.style.height = "100px";
    }
    else {
        audrey.style.height = `${(window.scrollY * 0.25)}px`;
    }
})
