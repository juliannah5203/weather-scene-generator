let bestDesign;
let currentDesign;
let currentScore;
let currentInspiration;
let currentCanvas;
let currentInspirationPixels;

function preload() {
  

  let allInspirations = sceneChanger();

  for (let i = 0; i < allInspirations.length; i++) {
    let insp = allInspirations[i];
    insp.image = loadImage(insp.assetUrl);
    let option = document.createElement("option");
    option.value = i;
    option.innerHTML = insp.name;
    scene.appendChild(option);
  }

  currentInspiration = allInspirations[0];

  confirmButton.onclick = () =>
  inspirationChanged(allInspirations[scene.value]);
  
  let allWeathers = weatherChanger();

    for (let j = 0; j < allWeathers.length; j++) {
      let insp = allWeathers[j];
      let option1 = document.createElement("option");
      option1.value = j;
      option1.innerHTML = insp.name;
      weather.appendChild(option1);
    }
   let allTimes = timeChanger();

    for (let i = 0; i < allTimes.length; i++) {
      let insp = allTimes[i];
      let option2 = document.createElement("option");
      option2.value = i;
      option2.innerHTML = insp.name;
      time.appendChild(option2);
    }
}

function inspirationChanged(nextInspiration) {
  currentInspiration = nextInspiration;
  currentDesign = undefined;
  // memory.innerHTML = "";
  setup();
}



function setup() {
  currentCanvas = createCanvas(width-10, height);
  currentCanvas.parent(document.getElementById("active"));
  currentScore = Number.NEGATIVE_INFINITY;
  currentDesign = p4_initialize(currentInspiration);
  bestDesign = currentDesign;
  image(currentInspiration.image, 0,0, width-10, height);
  loadPixels();
  currentInspirationPixels = pixels;
}

function evaluate() {
  loadPixels();

  let error = 0;
  let n = pixels.length;
  
  for (let i = 0; i < n; i++) {
    error += sq(pixels[i] - currentInspirationPixels[i]);
  }
  return 1/(1+error/n);
}



function memorialize() {

}

let mutationCount = 0;

function draw() {
  
  if(!currentDesign) {
    return;
  }
  randomSeed(mutationCount++);
  currentDesign = JSON.parse(JSON.stringify(bestDesign));
  
  randomSeed(0);
  p4_render(currentDesign, currentInspiration);
  let nextScore = evaluate();
  if (nextScore > currentScore) {
    currentScore = nextScore;
    bestDesign = currentDesign;
    
  }
  
}