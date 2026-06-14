//Insertion of the works of art
fetch('art/HollowKnight.html')
    .then(response => response.text())
    .then(data => {
    document.getElementById('f1').innerHTML = data;
});

fetch('art/Pikachu.html')
    .then(response => response.text())
    .then(data => {
    document.getElementById('f2').innerHTML = data;
});

fetch('art/Madeline.html')
    .then(response => response.text())
    .then(data => {
    document.getElementById('f3').innerHTML = data;
});

fetch('art/Link.html')
    .then(response => response.text())
    .then(data => {
    document.getElementById('f4').innerHTML = data;
});

fetch('art/Slugcat.html')
    .then(response => response.text())
    .then(data => {
    document.getElementById('f5').innerHTML = data;
});

fetch('art/StardewValley.html')
    .then(response => response.text())
    .then(data => {
    document.getElementById('f6').innerHTML = data;
});

fetch('art/WildFrost.html')
    .then(response => response.text())
    .then(data => {
    document.getElementById('f7').innerHTML = data;
});

fetch('art/Kirby.html')
    .then(response => response.text())
    .then(data => {
    document.getElementById('f8').innerHTML = data;
});