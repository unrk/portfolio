document.addEventListener('DOMContentLoaded', function () {
    const imageFolder = 'images/';
    const images = [
        'img (1).JPG', 'img (2).JPG', 'img (3).JPG', 'img (4).JPG',
        'img (5).JPG', 'img (6).JPG', 'img (7).JPG', 'img (8).JPG',
        'img (9).JPG', 'img (10).JPG', 'img (11).JPG', 'img (12).JPG',
        'img (13).JPG', 'img (14).JPG', 'img (15).JPG', 'img (16).JPG',
        'img (17).JPG', 'img (18).JPG', 'img (19).JPG', 'img (20).JPG',
        'img (21).JPG'
    ];
    const mainElement = document.querySelector('main');
    const galleryGrid = document.createElement('div');
    galleryGrid.classList.add('gallery-grid');
    const loadingScreen = document.getElementById('loading-screen');
    let imagesLoaded = 0;

    function imageLoaded() {
        imagesLoaded++;
        if (imagesLoaded === images.length) {
            loadingScreen.style.display = 'none';
        }
    }

    images.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = imageFolder + image; 
        imgElement.alt = 'Gallery Image';
        imgElement.onload = imageLoaded; 
        imgElement.onerror = imageLoaded; 
        galleryGrid.appendChild(imgElement);
    });

    mainElement.appendChild(galleryGrid);
});