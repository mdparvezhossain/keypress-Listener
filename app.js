count = 0;
document.getElementById("area").addEventListener("keypress",function(event){
    count++;
    event.key;
    document.querySelector("p").innerHTML = " type is word of : " + count;
});