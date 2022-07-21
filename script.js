// var drop = []
function sceneChanger() {
  let scene = [];

  scene[0] = {
        name: "Yellowstone National Park",
        assetUrl: "./assets/yellowstone.png"
    };
  scene[1] = {
        name: "Yosemite National Park",
        assetUrl: "./assets/yosemite.png"
    };
  scene[2] = {
        name: "Grand Canyon National Park",
        assetUrl: "./assets/grandcanyon.png"
    };
  scene[3] = {
      name: "Lake Tahoe",
      assetUrl: "./assets/laketahoe.png"
  };
  scene[4] = {
      name: "Niagara Falls",
      assetUrl: "./assets/niagarafalls.png"
  };
 

    return scene;
}
function weatherChanger() {
  let weather = [];

  weather[0] = {
        name: "Sunny"
    };
  weather[1] = {
        name: "Rainy"
    };
  weather[2] = {
        name: "Cloudy"
    };
  weather[3] = {
      name: "Foggy"
  };
  weather[4] = {
      name: "Snowy"
  };
  return weather;
}
function timeChanger() {
  let time = [];

  time[0] = {
      name: "Sunrise"
    };
  time[1] = {
      name: "Morning"
    };
  time[2] = {
      name: "Afternoon"
    };
  time[3] = {
      name: "Sunset"
  };
  time[4] = {
      name: "Night"
  };
 

    return time;
}
function initialize(inspiration) {
  
    let initial = {};
    resizeCanvas(inspiration.image.width/2, inspiration.image.height/2);
    if (inspiration.name == "Yosemite National Park"){
      initial = {opacity:{min: 130, max: 255}, intervals: 75};    
    }
  
    if (inspiration.name == "Yellowstone National Park"){
      initial = {opacity:{min: 130, max: 255}, intervals: 75};    
    }
  
    if (inspiration.name == "Niagara Falls"){
      initial = {opacity:{min: 130, max: 255}, intervals: 75};    
    }
   if (inspiration.name == "Lake Tahoe"){
      initial = {opacity:{min: 130, max: 255}, intervals: 75};    
    }
   if (inspiration.name == "Grand Canyon National Park"){
      initial = {opacity:{min: 130, max: 255}, intervals: 75};    
    }

    return initial;
}

function render(design, inspiration, time) {
  push();
  background(0);
  noStroke();
  scale(0.5);
  let xStep = inspiration.image.width / design.intervals;
  let yStep = inspiration.image.height / design.intervals;
  let xCoor = 4+20;
  let yCoor = 0;
  for (let i = 0; i < design.intervals; i++){
    yCoor = 0;
    for (let j = 0; j < design.intervals; j++){
      
      for (let n = 0; n < 50; n++){
        let pxColor = inspiration.image.get(xCoor+xStep, yCoor+yStep);
        if (inspiration.name == "Yellowstone National Park" && yCoor < 300){
          if(pxColor[2]>170){
          
          if (time.name == "Sunrise" ){
            pxColor = [90, 150, 225]
            pxColor[0]+=j*8
            pxColor[1]+=j*6
            pxColor[2]-=j*4
          }
          else if (time.name == "Morning"){
            pxColor = [95, 165, 235]
            pxColor[0]+=j*2
            pxColor[1]+=j*3
            pxColor[2]+=j*1

          }
          else if (time.name == "Afternoon"){
            pxColor = [60, 130, 210]
            pxColor[0]+=j*3
            pxColor[1]+=j*3
            pxColor[2]+=j*1
          }
          else if (time.name == "Sunset"){
            pxColor = [125, 90, 130]
            pxColor[0]+=j*4
            pxColor[1]+=j*3
            pxColor[2]-=j*2

          }
          else if (time.name == "Night"){
            pxColor = [10, 15, 30]
            pxColor[0]+=j*3
            pxColor[1]+=j*6
            pxColor[2]+=j*9

          }
          
          }


        }
        if (inspiration.name == "Yosemite National Park" && yCoor < 500){
          if(pxColor[2]>=150 && pxColor[0]<=200){
          
          if (time.name == "Sunrise" ){
            pxColor = [90, 150, 225]
            pxColor[0]+=j*4
            pxColor[1]+=j*3
            pxColor[2]-=j*2
          }
          else if (time.name == "Morning"){
            pxColor = [95, 165, 235]
            pxColor[0]+=j*2
            pxColor[1]+=j*3
            pxColor[2]+=j*1

          }
          else if (time.name == "Afternoon"){
            pxColor = [60, 130, 210]
            pxColor[0]+=j*3
            pxColor[1]+=j*3
            pxColor[2]+=j*1
          }
          else if (time.name == "Sunset"){
            pxColor = [125, 90, 130]
            pxColor[0]+=j*4
            pxColor[1]+=j*3
            pxColor[2]-=j*2

          }
          else if (time.name == "Night"){
            pxColor = [10, 15, 30]
              pxColor[0]+=j*1
              pxColor[1]+=j*2
              pxColor[2]+=j*3

          }
          
          }
          if(pxColor[2]>=210 && pxColor[0]>=200 &&pxColor[1]>=200){
          
            if (time.name == "Sunrise" ){
              pxColor = [90, 150, 225]
              pxColor[0]+=j*4
              pxColor[1]+=j*3
              pxColor[2]-=j*2
            }
            else if (time.name == "Morning"){
              pxColor = [95, 165, 235]
              pxColor[0]+=j*2
              pxColor[1]+=j*3
              pxColor[2]+=j*1
  
            }
            else if (time.name == "Afternoon"){
              pxColor = [60, 130, 210]
              pxColor[0]+=j*3
              pxColor[1]+=j*3
              pxColor[2]+=j*1
            }
            else if (time.name == "Sunset"){
              pxColor = [125, 90, 130]
              pxColor[0]+=j*4
              pxColor[1]+=j*3
              pxColor[2]-=j*2
  
            }
            else if (time.name == "Night"){
              pxColor = [10, 15, 30]
              pxColor[0]+=j*1
              pxColor[1]+=j*2
              pxColor[2]+=j*3
  
            }
            
            }


        }

        if (inspiration.name == "Grand Canyon National Park" && yCoor < 350){
          if(pxColor[2]>=210){
          
          if (time.name == "Sunrise" ){
            pxColor = [90, 150, 225]
            pxColor[0]+=j*4
            pxColor[1]+=j*3
            pxColor[2]-=j*2
          }
          else if (time.name == "Morning"){
            pxColor = [95, 165, 235]
            pxColor[0]+=j*2
            pxColor[1]+=j*3
            pxColor[2]+=j*1

          }
          else if (time.name == "Afternoon"){
            pxColor = [60, 130, 210]
            pxColor[0]+=j*3
            pxColor[1]+=j*3
            pxColor[2]+=j*1
          }
          else if (time.name == "Sunset"){
            pxColor = [125, 90, 130]
            pxColor[0]+=j*4
            pxColor[1]+=j*3
            pxColor[2]-=j*2

          }
          else if (time.name == "Night"){
            pxColor = [10, 15, 30]
            pxColor[0]+=j*3
            pxColor[1]+=j*6
            pxColor[2]+=j*9

          }
          
          }


        }

        if (inspiration.name == "Lake Tahoe" && yCoor < 220){
          if(pxColor[2]>170){
          
          if (time.name == "Sunrise" ){
            pxColor = [90, 150, 225]
            pxColor[0]+=j*5
            pxColor[1]+=j*4
            pxColor[2]-=j*3
          }
          else if (time.name == "Morning"){
            pxColor = [95, 165, 235]
            pxColor[0]+=j*2
            pxColor[1]+=j*3
            pxColor[2]+=j*1

          }
          else if (time.name == "Afternoon"){
            pxColor = [60, 130, 210]
            pxColor[0]+=j*3
            pxColor[1]+=j*3
            pxColor[2]+=j*1
          }
          else if (time.name == "Sunset"){
            pxColor = [125, 90, 130]
            pxColor[0]+=j*4
            pxColor[1]+=j*3
            pxColor[2]-=j*2

          }
          else if (time.name == "Night"){
            pxColor = [10, 15, 30]
            pxColor[0]+=j*3
            pxColor[1]+=j*6
            pxColor[2]+=j*9

          }
          
          }
          if(pxColor[1]>110 && pxColor[1] < 143){
          
            if (time.name == "Sunrise" ){
              pxColor = [90, 150, 225]
              pxColor[0]+=j*5
              pxColor[1]+=j*4
              pxColor[2]-=j*3
            }
            else if (time.name == "Morning"){
              pxColor = [95, 165, 235]
              pxColor[0]+=j*2
              pxColor[1]+=j*3
              pxColor[2]+=j*1
  
            }
            else if (time.name == "Afternoon"){
              pxColor = [60, 130, 210]
              pxColor[0]+=j*3
              pxColor[1]+=j*3
              pxColor[2]+=j*1
            }
            else if (time.name == "Sunset"){
              pxColor = [125, 90, 130]
              pxColor[0]+=j*4
              pxColor[1]+=j*3
              pxColor[2]-=j*2
  
            }
            else if (time.name == "Night"){
              pxColor = [10, 15, 30]
              pxColor[0]+=j*3
              pxColor[1]+=j*6
              pxColor[2]+=j*9
  
            }
          }


        }

        if (inspiration.name == "Niagara Falls" && yCoor < 200){
          if(pxColor[2]>150){
          
          if (time.name == "Sunrise" ){
            pxColor = [90, 150, 225]
            pxColor[0]+=j*8
            pxColor[1]+=j*6
            pxColor[2]-=j*4
          }
          else if (time.name == "Morning"){
            pxColor = [95, 165, 235]
            pxColor[0]+=j*2
            pxColor[1]+=j*3
            pxColor[2]+=j*1

          }
          else if (time.name == "Afternoon"){
            pxColor = [60, 130, 210]
            pxColor[0]+=j*3
            pxColor[1]+=j*3
            pxColor[2]+=j*1
          }
          else if (time.name == "Sunset"){
            pxColor = [125, 90, 130]
            pxColor[0]+=j*4
            pxColor[1]+=j*3
            pxColor[2]-=j*2

          }
          else if (time.name == "Night"){
            pxColor = [10, 15, 30]
            pxColor[0]+=j*3
            pxColor[1]+=j*6
            pxColor[2]+=j*9

          }
          
          }


        }

        
        
       
        
        // pxColor[3] = random(design.opacity.min, design.opacity.max);
        // console.log(pxColor[0], pxColor[1], pxColor[2], pxColor[3]);
        // console.log(pxColor);
        fill(pxColor);
        circle(xCoor, yCoor, 20);
        // pxColor[4] = random(design.opacity.min, design.opacity.max);
        // fill(pxColor);
        // circle(xCoor, yCoor, 20);
      }
      yCoor += yStep;
    }
    xCoor += xStep;
  }
  // filter(GRAY, 2);
  // filter(POSTERIZE, 2);
  pop();

}


// function opaController(param, mx, rate){
//   param.max = rate*param.max;
//   if(param.max < 0.3){
//     param.max = 0.3 + random(min(rate*param.max,mx));
//     param.min = 0.1;
//   }
//   return param;
// }
// function intController(mn, mx, rate){
//   return random(rate*mn, rate*mx);
// }

// function mutate(design, inspiration, time, weather) {

//   // design.opacity = opaController(design.opacity, 1, rate);
//   // design.intervals = intController(10, 100, rate);

// //   if (weather.name == "Rainy"){
// // //       for(var i = 0; i < 200; i++) {
// // //     drop[i] = new Drop();
// // // }
// //     for(var i = 0; i < 200; i++) {
// //     drop[i].show();
// //     drop[i].update();
// //   }
// //   }


  

// }

function Drop() {
  this.x = random(0, width);
  this.y = random(0, -height);
  
  this.show = function() {
    noStroke();
    fill(255);
    ellipse(this.x, this.y, random(1, 7), random(1, 7));   
  }
  this.update = function() {
    this.speed = random(5, 10);
    this.gravity = 1.05;
    this.y = this.y + this.speed*this.gravity;  
    
    if (this.y > height) {
      this.y = random(0, -height);
      this.gravity = 0;
}
}
}