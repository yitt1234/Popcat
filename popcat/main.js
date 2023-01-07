const counted = localStorage.getItem("pop");
let n = counted;

function count(){
     uu = localStorage.getItem("pop")
    n++;

    localStorage.setItem("pop", n)
    document.getElementById("number").innerText = uu;
}
if(counted !== null){

    document.getElementById("number").innerText = counted;
} else {
    document.getElementById("number").innerText = "0"
}

$(document).ready(function(){
    $("#1").show();
    $("#2").hide();

$("#1").click(function(){
    $("#1").hide();
    $("#2").show();


    document.getElementById('sound').play();
    setTimeout(function() {
        $("#1").show();
        $("#2").hide();
    }, 100);

});

});
const shareButton = document.querySelector('.share');


shareButton.addEventListener('click', event => {
    if (navigator.share) {

        navigator.share({

            title: 'Popcat click the cat!',
            text: 'this person clicked the cat ' + uu + ' times!',
            url: 'https://popcat3.netlify.app/'

        }).then(() => {
           console.log("Thx for sharing")
        })
            .catch(console.error);
    } else {

    }
});

if(counted > 2000000){
    document.title="Nice try!"
}



