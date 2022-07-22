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
      name:"None"
    };
    weather[1] = {
          name: "Sunny"
      };
    weather[2] = {
          name: "Rainy"
      };
    weather[3] = {
          name: "Cloudy"
      };
    weather[4] = {
        name: "Foggy"
    };
    weather[5] = {
        name: "Snowy"
    };
   
    return weather;
  }
  function timeChanger() {
    let time = [];
  time[0] = {
      name:"None"
    };
    time[1] = {
        name: "Sunrise"
      };
    time[2] = {
        name: "Morning"
      };
    time[3] = {
        name: "Afternoon"
      };
    time[4] = {
        name: "Sunset"
    };
    time[5] = {
        name: "Night"
    };
    
   
  
      return time;
  }