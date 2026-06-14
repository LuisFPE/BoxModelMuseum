//Insertion of the Bauhaus
fetch('bauhaus/b1.html')
    .then(response => response.text())
    .then(data => {
    document.getElementById('f1').innerHTML = data;
});

fetch('bauhaus/b2.html')
    .then(response => response.text())
    .then(data => {
    document.getElementById('f2').innerHTML = data;
});

fetch('bauhaus/b3.html')
    .then(response => response.text())
    .then(data => {
    document.getElementById('f3').innerHTML = data;
});

fetch('bauhaus/b4.html')
    .then(response => response.text())
    .then(data => {
    document.getElementById('f4').innerHTML = data;
});

fetch('bauhaus/b5.html')
    .then(response => response.text())
    .then(data => {
    document.getElementById('f5').innerHTML = data;
});

fetch('bauhaus/b6.html')
    .then(response => response.text())
    .then(data => {
    document.getElementById('f6').innerHTML = data;
});