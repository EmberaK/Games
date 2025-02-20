let imageCat = document.querySelector('.cat'),
    imageCow = document.querySelector('.cow'),
    imageDog = document.querySelector('.dog'),
    imageFrog = document.querySelector('.frog'),
    imageHorse = document.querySelector('.horse'),
    imageSheep = document.querySelector('.sheep');

let audioCat = new Audio('../../music/mp3/StudyAnimals/cat.mp3'),
    audioCow = new Audio('../../music/mp3/StudyAnimals/cow.mp3'),
    audioDog = new Audio('../../music/mp3/StudyAnimals/dog.mp3'),
    audiozfrog = new Audio('../../music/mp3/StudyAnimals/frog.mp3'),
    audioHorse = new Audio('../../music/mp3/StudyAnimals/horse.mp3'),
    audioSheep = new Audio('../../music/mp3/StudyAnimals/sheep.mp3');
imageCat.addEventListener('mouseover', () => {
    audioCat.play();
});
imageCat.addEventListener('mouseleave', () => {
    audioCat.pause();
    audioCat.currentTime = 0;
});

imageCow.addEventListener('mouseover', () => {
    audioCow.play();
});
imageCow.addEventListener('mouseleave', () => {
    audioCow.pause();
    audioCow.currentTime = 0;
});

imageDog.addEventListener('mouseover', () => {
    audioDog.play();
});
imageDog.addEventListener('mouseleave', () => {
    audioDog.pause();
    audioDog.currentTime = 0;
});

imageFrog.addEventListener('mouseover', () => {
    audioFrog.play();
});
imageFrog.addEventListener('mouseleave', () => {
    audioFrog.pause();
    audioFrog.currentTime = 0;
});

imageHorse.addEventListener('mouseover', () => {
    audioHorse.play();
});
imageHorse.addEventListener('mouseleave', () => {
    audioHorse.pause();
    audioHorse.currentTime = 0;
});

imageSheep.addEventListener('mouseover', () => {
    audioSheep.play();
});
imageSheep.addEventListener('mouseleave', () => {
    audioSheep.pause();
    audioSheep.currentTime = 0;
});
