let bathrooms = []; 
let bathroomTextures = []; 
let modelNum = 16;
let bathroomSelector;
let font;
let lastSliderValue = -1; 

function preload() {
  font = loadFont('fonts/Satoshi-Regular.otf');
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  frameRate(30);

  bathroomSelector = createSlider(0, modelNum - 1, 0);
  bathroomSelector.addClass('sliderStyle');
  bathroomSelector.parent('slider-container');

  textFont(font);
  textSize(18);
  createEasyCam();
  perspective(PI / 3.0, width / height, 0.5, 5000);

  for (let i = 0; i < modelNum; i++) {
    bathrooms[i] = null; 
    bathroomTextures[i] = null; 
  }
}

function draw() {
  
  background(255);

  let index = bathroomSelector.value();

  // Load model and texture on demand
  if (index !== lastSliderValue) {
    lastSliderValue = index;
    if (!bathrooms[index]) { 
      bathrooms[index] = loadModel('models/' + index + '.obj', true);
    }
    if (!bathroomTextures[index]) { 
      bathroomTextures[index] = loadImage('models/textures/' + index + '.jpg');
    }
  }

  if (bathrooms[index] && bathroomTextures[index]) {
    push();
    rotateX(radians(180));
    rotateY(radians(45));
    noStroke();
    texture(bathroomTextures[index]);
    model(bathrooms[index]);
    pop();
  }

  let descriptions = [
    "Salt Lake City, UT\nHSL Restaurant\n40.76 N, 111.88W\n\n18 March 2023\n10:00 PM", //model 0
    "Washington, UT\nMinute Mart\n37.13 N, 113.53 W\n\n23 April 2023\n11:49 AM", //model 1
    "Barstow, CA\nARCO am/pm\n34.88 N, 117.02W\n\n23 April 2023\n4:49 PM", //model 2
    "Los Angeles, CA\nIvanhoe Restaurant & Bar\n34.11 N, 118.26 W\n\n 25 April 2023\n7:56 PM", //model 3
    "Las Vegas, NV\nGreen Valley Grocery\n36.01 N, 115.17 W\n\n30 April 2023\n2:02 PM", //model 4
    "St. George, UT\nChipotle\n37.11 N, 113.55 W\n\n30 April 2023\n4:54 PM", //model 5
    "Rexburg, ID\nDairy Queen\n43.83 N, 111.78 W\n\n4 May 2023\n2:45 PM", //model 6
    "Yellowstone NP, WY\nYellowstone Lodge\n44.46 N, 110.83 W\n\n5 May 2023\n5:04 PM", //model 7
    "Pocatello, ID\nMaverick\n42.88 N, 112.42 W\n\n7 May 2023\n3:04 PM", //model 8
    "American Fork, UT\nCubby's\n40.38 N, 111.82 W\n\n1 June 2023\n6:31 PM", //model 9
    "Anaheim, CA\nTom Sawyer's Island, Disneyland\n33.81 N, 117.92 W\n\n24 June 2023\n4:40 PM", //model 10
    "Rangely, CO\nGio's Family Dining\n40.09 N, 108.79 W\n\n20 July 2023\n12:16 PM", //model 11
    "New Castle, CO\nLazy Bear Restaurant\n39.57 N, 107.53 W\n\n20 July 2023\n7:16 PM", //model 12
    "Salt Lake City, UT\nWater Witch\n40.75 N, 111.90 W\n40.75, 111.90 W\n\n17 November, 2023\n9:56 PM", //model 13
    "Provo, UT\nKneaders\n40.30 N, 111.66 W\n\n21 Decemeber 2023\n7:15 PM", //model 14
    "Salt Lake City, UT\nWildwood\n40.77 N, 111.87 W\n\n23 December, 2023\n9:36 PM" //model 15
  ];
  document.getElementById('model-description').innerText = descriptions[index];
}
