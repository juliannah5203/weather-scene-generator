function Rain() {
    this.x = random(0, width);
    this.y = random(0, -height);
    
    this.show = function() {
      noStroke();
      fill(255);
      ellipse(this.x, this.y, random(1, 3), random(3, 7));   
    }
    this.update = function() {
      this.speed = 25;
      this.gravity = 1.05;
      this.y = this.y + this.speed*this.gravity;  
      
      if (this.y > height) {
        this.y = random(0, -height);
        this.gravity = 0;
  }
  }
  }
  
  function Snow() {
    this.posX = random(0, width);
    this.posY = random(0, -height);
    this.initialangle = random(0, 2 * PI);
    this.size = random(1,2);
  
    this.radius = sqrt(random(pow(width / 2, 2)));
  
      this.update = function(time) {
      let w = 0.6; // angular speed
      let angle = w * time + this.initialangle;
      this.posX = width / 2 + this.radius * sin(angle);
      this.speed = 10;
      this.gravity = 1.05;
  
      this.posY += pow(this.size, 0.5) + this.speed * this.gravity;
      
      if (this.posY > height) {
        this.posY = random(0, -height);
        this.gravity = 0;
  }
    };
  
    this.display = function() {
      fill(240);
    noStroke();
      rotate(PI/5);
      push();
  
      rect(this.posX-this.size/4, this.posY-this.size*5/2, this.size/2, this.size*5);
      rect(this.posX-this.size*5/2, this.posY-this.size/4, this.size*5, this.size/2);
      ellipse(this.posX, this.posY, this.size*2);
  
      pop();
    };
  }
  
  function Fog() {
   
    this.x = random(0,width);
    this.y = random(0, height);
    this.colour = color(400, 400, 400, random(25,75));
  let size = random(150);
  
  
  this.move = function() {
    this.x += random(0,20);
    this.y += random(-10,0);
    // this.y += random(0,3);
    if (this.x+20 > width || this.y > height) {
      this.x = random(0,width);
      this.y = random(30, height-50);
    }
  }
  
  this.display= function() {
    noStroke()
    fill(this.colour);
    
    
    ellipse(this.x, this.y, size, size-10);
    ellipse(this.x+30, this.y+20, size, size+20);
    ellipse(this.x-40, this.y+15, size, size-30);
  
  }
  
  }
  function Cloud(cloudx, cloudy) {
    let size = random(50, 80);
    let opacity = random(100,200);
    this.display = function() {
      fill(color(250, 250, 250, opacity));
    noStroke();
    ellipse(cloudx, cloudy, size, 20);
    ellipse(cloudx + 10, cloudy + 10, size, 20);
    ellipse(cloudx - 20, cloudy + 10, size, 20);
    }
    this.update = function() {
      cloudx += random(10,25);
      if (cloudx > width){
        cloudx = 0;
      }
    }
  
  }
  function Sun(posX, posY, incX, incY) {
    let size = 50;
    this.x = posX;
    this.y = posY;
    this.display = function() {
      
      fill(200, 255, 255, 50);
      ellipse(this.x, this.y, (random(60,100)% 500)*2, (random(50,100) % 500)*2);
      ellipse(this.x, this.y, (random(60,100) % 500)*4, (random(50,100) % 500)*4);
      ellipse(this.x, this.y, (random(60,100) % 500)*8, (random(50,100) % 500)*8);
      ellipse(this.x, this.y, (random(60,100) % 500)*16, (random(50,100) % 500)*16);
      ellipse(this.x, this.y, (random(60,100) % 500)*24, (random(50,100) % 500)*24);
      fill(250, 250, 0,150);
      ellipse(this.x, this.y, size, size);
      fill(250, 255, 225,250);
      ellipse(this.x, this.y, size - 7, size - 7);
  
    }
    this.update = function(){
      this.x += incX;
      this.y += incY;
    // this.y += random(0,3);
    if (this.x >= (posX+100) ) {
      this.x = posX;
      this.y = posY;
    }
    }
  }
  
  function Moon(posX, posY) {
    let size = 30;
    this.x = posX;
    this.y = posY;
    let size1 = random(15, 25);
    this.display = function() {
   
     
      fill(210, 210, 255,150);
      ellipse(this.x, this.y, size-4, size-4);
      fill(10,15, 50);
      ellipse(this.x+6, this.y, size1 , size1 );
  
    }
    this.update = function(){
      this.x += 2;
      this.y += 1;
    // this.y += random(0,3);
    if (this.x >=(posX+100) ) {
      this.x = posX;
      this.y = posY;
    }
    }
  }