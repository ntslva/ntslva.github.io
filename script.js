// Array of image paths
const images = [
    //Digital//
'images/9O.jpg',
'images/BasketballDust.jpg',
'images/Bushwick.jpg',
'images/Cloud.jpg',
'images/CourtSquare.jpg',
'images/CrownHeights.jpg',
'images/DT.jpg',
'images/Fore.jpg',
'images/Kyson.jpg',
'images/LaddersKarin.jpg',
'images/LaddersMaria.jpg',
'images/Mala.jpg',
'images/Marin.jpg',
'images/Muffler.jpg',
'images/Nap.jpg',
'images/NC.jpg',
'images/NewYears.jpg',
'images/PamelaDouble.jpg',
'images/Patrick.jpg',
'images/Pointe.jpg',
'images/Pout.jpg',
'images/Rayman.jpg',
'images/RiverStreet.jpg',
'images/TS1.jpg',
'images/TS2.jpg',

    //Film//
'images/Boots.jpg',
'images/BotanicEclipse.jpg',
'images/Bowl.jpg',
'images/Break.jpg',
'images/CitiBike.jpg',
'images/Couple.jpg',
'images/Crew.jpg',
'images/Father_Son.jpg',
'images/Fedaykin.jpg',
'images/Hit.jpg',
'images/Johann.jpg',
'images/LaddersGo.jpg',
'images/McCarrenDust.jpg',
'images/Nassau.jpg',
'images/Ollie.jpg',
'images/RooftopSunset.jpg',
'images/Runners.jpg',
'images/SantaMonica.jpg',
'images/Sawtelle.jpg',
'images/Silhouette.jpg',
'images/Skatepark.jpg',
'images/TK.jpg',
'images/TPA.jpg',
'images/VeniceBeach.jpg',
'images/Wash.jpg',
];

// Function to randomize image and apply orientation class
function randomizeImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    const imageElement = document.getElementById('random-image');
    const imageUrl = images[randomIndex];

    // Set the new image source
    imageElement.src = imageUrl;

    // Apply orientation class based on image dimensions
    applyOrientationClass(imageElement, imageUrl);
}

// Function to check image orientation and apply CSS class
function applyOrientationClass(imageElement, imageUrl) {
    const img = new Image();
    img.src = imageUrl;

    img.onload = function() {
        // Clear previous orientation classes
        imageElement.classList.remove('landscape', 'portrait');

        // Apply the appropriate class based on orientation
        if (img.width > img.height) {
            imageElement.classList.add('landscape');
        } else if (img.width < img.height) {
            imageElement.classList.add('portrait');
        } else if (img.width == img.height) {
            imageElement.classList.add('portrait');
        } else {
            imageElement.classList.remove('landscape', 'portrait');
        }
    };

    img.onerror = function() {
        console.log('Failed to load image.');
    };
}

// Randomize image on page load
window.onload = randomizeImage;
