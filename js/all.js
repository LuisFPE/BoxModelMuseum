fetch('common_html/header.html')
    .then(response => response.text())
    .then(data => {
    document.getElementById('Header').innerHTML = data;
});

fetch('common_html/footer.html')
    .then(response => response.text())
    .then(data => {
    document.getElementById('Footer').innerHTML = data;
});