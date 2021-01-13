//The idea of the plane and the clouds and the side scrolling idea came from "ByteSize Coding" Youtube channel I took there idea of the plane and the very cool and helpful video where I took ideas of how to make a side scroller, Plane and clouds and added on to it and made it as a cool flying simulator.
//Any other coding made in this p5.js was by me "Mohamed Azab"

// I have made a cool mini side scrolling simulator where you fly a plane around and ontop of the beutiful scene with clouds and a sun with a cool man/woman surfing under you. I made a simple starting screen where is loads in and shows you instructions and the concept also I added musci just for the cool vibe.I also made a cool and simple ending screen praising the pilot and and a little thank you. I am very proud that I was able to do my research and be able to make a mini game like this. 

let song

function preload() {
   song = loadSound('Slow Beat - Background Music.mp3');
  
}

let clouds;
let scroll;

let planeX = 200;
let planeY = 200;

let isLeft;
let isRight;

var mode;



//Set up
function setup() {
 //song
  song = loadSound('Slow Beat - Background Music.mp3');
  createCanvas(720, 200);
  background(255, 0, 0);
  
  mode = 0;

  createCanvas(600, 520);
  scroll = 0;
  isLeft = false;
  isRight = false;
  color(20, 20, 20, 20)
  background(135, 206, 205);


  clouds = [

    {
      x: -1000,
      y: 200,
      w: 100,
      h: 50
    },
    {
      x: -300,
      y: 500,
      w: 150,
      h: 60
    },
    {
      x: -500,
      y: 200,
      w: 100,
      h: 80
    },
    {
      x: 100,
      y: 600,
      w: 150,
      h: 40
    },
    {
      x: 300,
      y: 200,
      w: 100,
      h: 50
    },
    {
      x: 700,
      y: 400,
      w: 140,
      h: 50
    },
    {
      x: 1000,
      y: 100,
      w: 100,
      h: 30
    },
    {
      x: 1600,
      y: 300,
      w: 300,
      h: 80
    },
    {
      x: 2000,
      y: 500,
      w: 140,
      h: 60
    },
    {
      x: 1800,
      y: 200,
      w: 150,
      h: 70
    },
    {
      x: 400,
      y: 300,
      w: 150,
      h: 70
    },
    {
      x: 4000,
      y: 300,
      w: 150,
      h: 70
    },
     {
      x: 5000,
      y: 800,
      w: 150,
      h: 70
    },
      {
      x: 3000,
      y: 600,
      w: 150,
      h: 70
    },
      {
      x: 6000,
      y: 400,
      w: 150,
      h: 70
    },
      {
      x: 1900,
      y: 400,
      w: 150,
      h: 70
    },
      {
      x: 2000,
      y: 200,
      w: 150,
      h: 70
    },
      {
      x: 2200,
      y: 400,  
      w: 150,
      h: 70
    },
    {
      x: 3500,
      y:200,
      w: 150,
      h: 70
    },
    {
      x: 4500,
      y:400,
      w: 150,
      h: 70
    },
    {
      x: 6500,
      y:200,
      w:150,
      h: 70
    },
    {
      x: 600,
      y:100,
      w: 150,
      h: 70
    },
    {
      x: 3000,
      y:400,
      w: 150,
      h: 70
    },
    {
      x: 2000,
      y:300,
      w: 150,
      h: 70
    },


  ]
}

//Starter screen
function draw() {
  clear();
  if (mode == 0) {
    background(135, 206, 205);
    fill("blue")
     textSize(30);
    fill("red")
    rect(10,10,600,70)
    fill("blue")
    text('Welcome to Plane SIM Press Enter to FLY!!!', 10, 50)
    textSize(25)
    fill("red")
    rect(10,80,450,70)
    fill("blue")
    text('Press the left and right arrow to move', 10, 120)
    
    fill("red")
   rect(1,250,505,200)
    fill("blue")
    text('Have fun and when done press the up arrow', 10, 300)
 text('REMEBER HAVE FUN!!!!', 10, 350)
    text('Press right mouse button to play music',10,400)
    
    
    fill("blue")
    ellipse(planeX, planeY, 150, 40)
    arc(planeX + 55, planeY - 8, 25, 65, PI, 0)

    fill("white")
    arc(planeX - 10, planeY - 20, 30, 70, PI, 0)
    arc(planeX - 9, planeY, 30, 100, 0, PI)


  }

  //Game Screen
  if (mode == 1) {
    background(135, 206, 205);
    fill("red")
    ellipse(mouseX,mouseY,20,20)
    textSize(20)
    fill("blue")
    text('Right Arrow---> Left Arrow <--- Up Arrow to end ', 10, 50)
    text("Press right mouse button for music",10,30)
    fill("yellow")
    push();
    translate(scroll, 0)
    //clouds
    for (let i = 0; i < clouds.length; i++) {

      noStroke();
      ellipse(clouds[i].x, clouds[i].y - 20,
        clouds[i].w - 10, clouds[i].h)

      ellipse(clouds[i].x + 20, clouds[i].y,
        clouds[i].w, clouds[i].h)

      ellipse(clouds[i].x - 20, clouds[i].y,
        clouds[i].w, clouds[i].h)
    }
    pop();

    if (isLeft == true) {
      //part1

      //mini person
      fill("brown")
      rect(planeX, 320, 30, 10)
      rect(planeX, 330, 50, 10)

      fill("brown")
      arc(planeX - 10, 330, 30, 70, PI, 0)
      arc(planeX - 9, 330, 30, 100, 0, PI)


      fill("green")
      ellipse(planeX, 390, 150, 40)

      //plane 
      fill("blue")
      ellipse(planeX, planeY, 150, 40)
      arc(planeX + 55, planeY - 8, 25, 65, PI, 0)

      fill("white")
      arc(planeX - 10, planeY - 20, 30, 70, PI, 0)
      arc(planeX - 9, planeY, 30, 100, 0, PI)

      //sun and water
      fill("yellow")
      ellipse(600, 1, 200, 200)

      fill("blue")
      rect(0, 400, 599, 300)

    } else {

      //part2
      
      //plane
      fill("red")
      ellipse(planeX, planeY, 150, 40)
      arc(planeX - 55, planeY - 8, 25, 65, PI, 0)

      fill("blue")
      arc(planeX - 10, planeY - 20, 30, 70, PI, 0)
      arc(planeX - 9, planeY, 30, 100, 0, PI)

      //mini Person
      fill("yellow")
      rect(planeX, 320, 30, 10)
      rect(planeX, 330, 50, 10)

      fill("yellow")
      arc(planeX - 10, 330, 30, 70, PI, 0)
      arc(planeX - 9, 330, 30, 100, 0, PI)

      fill("purple")
      ellipse(planeX, 390, 150, 40)

      //sun and water
      fill("yellow")
      ellipse(600, 1, 200, 200)

      fill("blue")
      rect(0, 400, 599, 300)
 }


    //logic scroll
    if (isLeft) {
      if (planeX > width * 0.2) {
        planeX -= 5

      } else {

        scroll += 5
      }

    }

    if (isRight) {
      if (planeX < width * 0.8) {

        planeX += 5

      } else {

        scroll -= 5
      }

    }

  }

 //ending screen
  if (mode == 2) {
    background("purple");
    textSize(22)
    fill("red")
    text('Done soo soon well Come Back to fly any time!!', 10, 145)
    textSize(20)
    text('Hello thanks for playing my side scroller I hope you enjoyed', 10, 300)

    rect(30, 30, 450, 50)
    textSize(25)
    fill("yellow")
    text('Hey pilot great flying out there!!!', 30, 55)

    text('Or to continue press either the left or right arrow', 30, 400)

    //plane on ending
    fill("blue")
    ellipse(planeX, planeY, 150, 40)
    arc(planeX + 55, planeY - 8, 25, 65, PI, 0)

    fill("white")
    arc(planeX - 10, planeY - 20, 30, 70, PI, 0)
    arc(planeX - 9, planeY, 30, 100, 0, PI)




  }

}



//Button controlles
function keyPressed() {
  if (keyCode === ENTER);
  mode = 1;

  if (keyCode === UP_ARROW)
    mode = 2;


  if (keyCode == LEFT_ARROW) {

    isLeft = true;
  }
  if (keyCode == RIGHT_ARROW) {

    isRight = true;
  }

}



function keyReleased() {
  if (keyCode == LEFT_ARROW) {

    isLeft = false;
  }
  if (keyCode == RIGHT_ARROW) {

    isRight = false;
  }

}


//Click of the music
function mousePressed() {
  if (song.isPlaying()) {
    // .isPlaying() returns a boolean
    song.stop();
    background(255, 0, 0);
  } else {
    song.play();
    background(0, 255, 0);
  }
}


