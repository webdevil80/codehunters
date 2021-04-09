let button = document.querySelector('#checkbox');

button.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark-mode'); 
    let imgs = document.getElementsByTagName('img');
    for (img of imgs) {
        img.classList.toggle('dark-mode');
    }
})