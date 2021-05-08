var timer = 180;
let spritedata;
let spritesheet;
let animation1 = [], animation2 = [], animation3 =[], animation4 =[], animation5 =[], animation6 =[], animation7 =[], animation8 =[], animation9 = [], animation10 = [], 
    animation11 = [], animation12 =[], animation13 =[], animation14 =[], animation15 =[], animation16 =[], animation17 = [], animation18 =[], animation19 =[], animation20 =[], 
    animation21 =[];

let shot1Btn;

function preload() {

  // shot middle/final pictures
  shot1_final = loadImage('./assets/shots/shot1_final.png');
  shot4_middle = loadImage('./assets/shots/shot4_middle.png');
  shot4_final = loadImage('./assets/shots/shot4_final.png');
  shot5_final = loadImage('./assets/shots/shot5_final.png');
  shot12_final = loadImage('./assets/shots/shot12_final.png');

  // acceptance image
  acceptance = loadImage('./assets/images/acceptance.png');

  // shot music
  openingMusic = loadSound('./assets/music/opening.mp3');
  musicFestival = loadSound('./assets/music/musicFestival.mp3');
  recall = loadSound('./assets/music/recall.mp3');

  // shot sounds
  shot3_music = loadSound('./assets/sounds/noise.mp3');
  shot4_music = loadSound('./assets/sounds/goodbye.mp3');
  festival = loadSound('./assets/sounds/festival.mp3');
  keyboard = loadSound('./assets/sounds/keyboard.wav');
  ringtone = loadSound('./assets/sounds/ringtone.mp3');

  // shots

  spritedata1 = loadJSON('./json/shot1.json');
  spritesheet1 = loadImage('./assets/shots/shot1.png');

  spritedata2 = loadJSON('./json/shot2.json');
  spritesheet2 = loadImage('./assets/shots/shot2.png');

  spritedata3 = loadJSON('./json/shot3.json');
  spritesheet3 = loadImage('./assets/shots/shot3.png');

  spritedata4 = loadJSON('./json/shot4.json');
  spritesheet4 = loadImage('./assets/shots/shot4.png');

  spritedata5 = loadJSON('./json/shot5.json');
  spritesheet5 = loadImage('./assets/shots/shot5.png');

  spritedata6 = loadJSON('./json/shot6.json');
  spritesheet6 = loadImage('./assets/shots/shot6.png');

  spritedata7 = loadJSON('./json/shot7.json');
  spritesheet7 = loadImage('./assets/shots/shot7.png');

  spritedata8 = loadJSON('./json/shot8.json');
  spritesheet8 = loadImage('./assets/shots/shot8.png');

  spritedata9 = loadJSON('./json/shot9.json');
  spritesheet9 = loadImage('./assets/shots/shot9.png');

  spritedata10 = loadJSON('./json/shot10.json');
  spritesheet10 = loadImage('./assets/shots/shot10.png');

  spritedata11 = loadJSON('./json/shot11.json');
  spritesheet11 = loadImage('./assets/shots/shot11.png');

  spritedata12 = loadJSON('./json/shot12.json');
  spritesheet12 = loadImage('./assets/shots/shot12.png');

  spritedata13 = loadJSON('./json/shot13.json');
  spritesheet13 = loadImage('./assets/shots/shot13.png');

  spritedata14 = loadJSON('./json/shot14.json');
  spritesheet14 = loadImage('./assets/shots/shot14.png');

  spritedata15 = loadJSON('./json/shot15.json');
  spritesheet15 = loadImage('./assets/shots/shot15.png');

  spritedata16 = loadJSON('./json/shot16.json');
  spritesheet16 = loadImage('./assets/shots/shot16.png');

  spritedata17 = loadJSON('./json/shot17.json');
  spritesheet17 = loadImage('./assets/shots/shot17.png');

  spritedata18 = loadJSON('./json/shot18.json');
  spritesheet18 = loadImage('./assets/shots/shot18.png');

  spritedata19 = loadJSON('./json/shot19.json');
  spritesheet19 = loadImage('./assets/shots/shot19.png');

  spritedata20 = loadJSON('./json/shot20.json');
  spritesheet20 = loadImage('./assets/shots/shot20.png');

  spritedata21 = loadJSON('./json/shot21.json');
  spritesheet21 = loadImage('./assets/shots/shot21.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  shot1Btn = createButton('Click here to continue');
  
  let frames1 = spritedata1.frames;
  for(let i = 0; i < frames1.length; i++){
    let pos = frames1[i].frame;
    let img = spritesheet1.get(pos.x, pos.y, pos.w, pos.h);
    animation1.push(img);
  }

  let frames2 = spritedata2.frames;
  for(let i = 0; i < frames2.length; i++){
    let pos = frames2[i].frame;
    let img = spritesheet2.get(pos.x, pos.y, pos.w, pos.h);
    animation2.push(img);
  }

  let frames3 = spritedata3.frames;
  for(let i = 0; i < frames3.length; i++){
    let pos = frames3[i].frame;
    let img = spritesheet3.get(pos.x, pos.y, pos.w, pos.h);
    animation3.push(img);
  }

  let frames4 = spritedata4.frames;
  for(let i = 0; i < frames4.length; i++){
    let pos = frames4[i].frame;
    let img = spritesheet4.get(pos.x, pos.y, pos.w, pos.h);
    animation4.push(img);
  }

  let frames5 = spritedata5.frames;
  for(let i = 0; i < frames5.length; i++){
    let pos = frames5[i].frame;
    let img = spritesheet5.get(pos.x, pos.y, pos.w, pos.h);
    animation5.push(img);
  }

  let frames6 = spritedata6.frames;
  for(let i = 0; i < frames6.length; i++){
    let pos = frames6[i].frame;
    let img = spritesheet6.get(pos.x, pos.y, pos.w, pos.h);
    animation6.push(img);
  }

  let frames7 = spritedata7.frames;
  for(let i = 0; i < frames7.length; i++){
    let pos = frames7[i].frame;
    let img = spritesheet7.get(pos.x, pos.y, pos.w, pos.h);
    animation7.push(img);
  }

  let frames8 = spritedata8.frames;
  for(let i = 0; i < frames8.length; i++){
    let pos = frames8[i].frame;
    let img = spritesheet8.get(pos.x, pos.y, pos.w, pos.h);
    animation8.push(img);
  }

  let frames9 = spritedata9.frames;
  for(let i = 0; i < frames9.length; i++){
    let pos = frames9[i].frame;
    let img = spritesheet9.get(pos.x, pos.y, pos.w, pos.h);
    animation9.push(img);
  }

  let frames10 = spritedata10.frames;
  for(let i = 0; i < frames10.length; i++){
    let pos = frames10[i].frame;
    let img = spritesheet10.get(pos.x, pos.y, pos.w, pos.h);
    animation10.push(img);
  }

  let frames11 = spritedata11.frames;
  for(let i = 0; i < frames11.length; i++){
    let pos = frames11[i].frame;
    let img = spritesheet11.get(pos.x, pos.y, pos.w, pos.h);
    animation11.push(img);
  }

  let frames12 = spritedata12.frames;
  for(let i = 0; i < frames12.length; i++){
    let pos = frames12[i].frame;
    let img = spritesheet12.get(pos.x, pos.y, pos.w, pos.h);
    animation12.push(img);
  }

  let frames13 = spritedata13.frames;
  for(let i = 0; i < frames13.length; i++){
    let pos = frames13[i].frame;
    let img = spritesheet13.get(pos.x, pos.y, pos.w, pos.h);
    animation13.push(img);
  }

  let frames14 = spritedata14.frames;
  for(let i = 0; i < frames14.length; i++){
    let pos = frames14[i].frame;
    let img = spritesheet14.get(pos.x, pos.y, pos.w, pos.h);
    animation14.push(img);
  }

  let frames15 = spritedata15.frames;
  for(let i = 0; i < frames15.length; i++){
    let pos = frames15[i].frame;
    let img = spritesheet15.get(pos.x, pos.y, pos.w, pos.h);
    animation15.push(img);
  }

  let frames16 = spritedata16.frames;
  for(let i = 0; i < frames16.length; i++){
    let pos = frames16[i].frame;
    let img = spritesheet16.get(pos.x, pos.y, pos.w, pos.h);
    animation16.push(img);
  }

  let frames17 = spritedata17.frames;
  for(let i = 0; i < frames17.length; i++){
    let pos = frames17[i].frame;
    let img = spritesheet17.get(pos.x, pos.y, pos.w, pos.h);
    animation17.push(img);
  }

  let frames18 = spritedata18.frames;
  for(let i = 0; i < frames18.length; i++){
    let pos = frames18[i].frame;
    let img = spritesheet18.get(pos.x, pos.y, pos.w, pos.h);
    animation18.push(img);
  }

  let frames19 = spritedata19.frames;
  for(let i = 0; i < frames19.length; i++){
    let pos = frames19[i].frame;
    let img = spritesheet19.get(pos.x, pos.y, pos.w, pos.h);
    animation19.push(img);
  }

  let frames20 = spritedata20.frames;
  for(let i = 0; i < frames20.length; i++){
    let pos = frames20[i].frame;
    let img = spritesheet20.get(pos.x, pos.y, pos.w, pos.h);
    animation20.push(img);
  }

  let frames21 = spritedata21.frames;
  for(let i = 0; i < frames21.length; i++){
    let pos = frames21[i].frame;
    let img = spritesheet21.get(pos.x, pos.y, pos.w, pos.h);
    animation21.push(img);
  }

  mother_1 = new Sprite(animation1, windowWidth - 700, windowHeight - 600, 0.04);
  mother_2 = new Sprite(animation2, windowWidth - 700, windowHeight - 600, 0.04);
  grow = new Sprite(animation3, windowWidth - 700, windowHeight - 600, 0.03);
  dispute = new Sprite(animation4, windowWidth - 700, windowHeight - 600, 0.03);
  depart_1 = new Sprite(animation5, windowWidth - 700, windowHeight - 600, 0.045);
  depart_2 = new Sprite(animation6, windowWidth - 700, windowHeight - 600, 0.028);
  depart_3 = new Sprite(animation7, windowWidth - 700, windowHeight - 600, 0.028);
  depart_4 = new Sprite(animation8, windowWidth - 700, windowHeight - 600, 0.05);
  musicfes_1 = new Sprite(animation9, windowWidth - 700, windowHeight - 600, 0.03);
  musicfes_2 = new Sprite(animation10, windowWidth - 700, windowHeight - 600, 0.04);
  musicfes_3 = new Sprite(animation11, windowWidth - 700, windowHeight - 600, 0.04);
  work_1 = new Sprite(animation12, windowWidth - 700, windowHeight - 600, 0.04);
  work_2 = new Sprite(animation13, windowWidth - 700, windowHeight - 600, 0.04);
  news_1 = new Sprite(animation14, windowWidth - 700, windowHeight - 600, 0.04);
  news_2 = new Sprite(animation15, windowWidth - 700, windowHeight - 600, 0.04);
  memory = new Sprite(animation16, windowWidth - 700, windowHeight - 600, 0.03);
  rest = new Sprite(animation17, windowWidth - 700, windowHeight - 600, 0.04);
  dream = new Sprite(animation18, windowWidth - 700, windowHeight - 600, 0.04);
  listen = new Sprite(animation19, windowWidth - 700, windowHeight - 600, 0.04);
  wakeup_1 = new Sprite(animation20, windowWidth - 700, windowHeight - 600, 0.05);
  wakeup_2 = new Sprite(animation21, windowWidth - 700, windowHeight - 600, 0.05);
}

function draw() {
  background(255);
  textSize(32);
  // text((floor)(frameCount / 60), 50, 50);
  // text((floor)(timer), 20, 20);

  if(timer > 100){
    drawFirstScene(); //Timeframe: 0 ~ 60 seconds;
  }else if(timer <= 100 && timer > 40){
    drawSecondScene(); //Timeframe: 61 ~ 120 seconds;
  }else if(timer <= 40 && timer >=-2){
    drawThirdScene(); //Timeframe: 121 ~ 180 seconds.
  }
 
}

function playshot1(){
   openingMusic.play();
}

//Welcome to Scene 1
function drawFirstScene(){
  if(timer > 0){
    // Scene 1 Shot 1
    if (timer <= 180 && timer >= 165){
      if(timer <= 180 && timer >= 177){
        mother_1.animate();
        mother_1.show();
        if(frameCount % 60 == 0)
        timer-=1;
      }
      if(timer == 176){
        image(shot1_final,windowWidth - 700, windowHeight - 600);
        
        shot1Btn.position(515, 290);
        
        let col = color(255, 0, 0, 0);
        shot1Btn.style('background-color', col);
        shot1Btn.size(150, 50);
        shot1Btn.mousePressed(playshot1);

      }
      if(openingMusic.isPlaying()){
        shot1Btn.remove();
        mother_2.animate();
        mother_2.show();   
        if(frameCount % 60 == 0)
        timer-=1;     
      }
    }
  

    //Scene 1 Shot 2
    if(timer < 165 && timer >= 150){
      grow.animate();
      grow.show();
      if(frameCount % 60 == 0)
      timer-=1; 
    }
    
    //Scene 1 Shot 3
    if(timer < 150 && timer >= 135){
      openingMusic.pause();
      dispute.animate();
      dispute.show();
      if(frameCount % 60 == 0 && timer == 145) shot3_music.play();
      if(frameCount % 60 == 0)
      timer-=1; 
    }

    // Scene 1 Shot 4
    if(timer < 135 && timer > 100){
      if(timer >= 131){
        depart_1.animate();
        depart_1.show();
        if(frameCount % 60 == 0)
        timer-=1; 
      }

      if(timer == 130){
        image(shot4_middle,windowWidth - 700, windowHeight - 600);
        textSize(30);
        text('Press "o" to Open Mail', 150, 200);
        if(keyIsPressed && key == 'o')timer-=1; 
      }

      if(timer<130&&timer>126){
          depart_2.animate();
          depart_2.show();
          if(frameCount % 60 == 0)
          timer-=1; 
      }

      if(timer == 126){
        image(shot4_final,windowWidth - 700, windowHeight - 600);
        textSize(30);
        text('Press "l" to Open Letter', 150, 200);
        if(keyIsPressed && key == 'l') timer -= 1
      }

      if(timer < 126 && timer >120){
        depart_3.animate();
        depart_3.show();
        if(frameCount % 60 == 0)
        timer-=1; 
      }

      if(timer <= 120 && timer >106){
        image(acceptance,windowWidth - 700, windowHeight - 600);
        if(frameCount % 60 == 0)
          timer-=1; 
      }

      if(timer <= 106 && timer > 99){
        if (frameCount % 60 == 0 && timer == 105){
          shot4_music.play();
        }
        depart_4.animate();
        depart_4.show();
        if(frameCount % 60 == 0)
        timer-=1; 
      }
    }
  }
}

//Welcome to Scene 2
function drawSecondScene(){
    //Scene 2 Shot 1
      if(timer < 101 && timer >= 91){
        if (frameCount % 60 == 0 && timer == 99)
          festival.play();
        
        if (frameCount % 60 == 0 && timer == 95)
          ringtone.play();
          musicfes_1.animate();
          musicfes_1.show();
          if(frameCount % 60 == 0)
          timer-=1; 
      }

      if(timer < 91 && timer > 85){
          musicfes_2.animate();
          musicfes_2.show();
          if(frameCount % 60 == 0)
          timer-=1; 
      }

      if(timer == 85){
        image(shot5_final,windowWidth - 700, windowHeight - 600);
        textSize(30);
        text('Press "a" to Accept Call', windowWidth - 529, 200);
        if(keyIsPressed && key == 'a'){
          ringtone.pause();
          timer -= 1
        } 
      }

      if(timer < 85 && timer >= 78){
        if (frameCount % 60 == 0 && timer == 84)
        musicFestival.play();
        festival.setVolume(0.3);
        musicfes_3.animate();
        musicfes_3.show(); 
        if(frameCount % 60 == 0)
        timer-=1; 
      }
    
    //Scene 2 Shot 2
    if(timer < 78 && timer >= 65){
        festival.pause();
        musicFestival.pause();
      if (frameCount % 60 == 0 && timer == 77)
        keyboard.play();

      if (frameCount % 60 == 0 && timer == 75)
      ringtone.play();

      if(timer <= 68 && timer >= 65){
        textSize(30);
        text('Sam missed his mom\'s call again because he was too busy...', windowWidth/2 - 100, 80);
      }
      work_1.animate();
      work_1.show();
      
      if(frameCount % 60 == 0)
      timer-=1; 
    }

    // Scene 2 Shot 3
    if(timer < 65 && timer >= 50){
        ringtone.pause();
        keyboard.pause();

        if(timer < 65 && timer >= 62){
          news_1.animate();
          news_1.show();
        }

        if(timer <= 62 && timer >= 50){
          if(timer == 62 && frameCount % 60 == 0) recall.play();
          textSize(30);
          text('Aunt: Sam, your mother got sick.', windowWidth/2 - 150, 80);
        }

        if(timer <= 59 && timer >= 50){
          textSize(30);
          text('Sam: What? When?', windowWidth/2 - 150, 150);
        }

        if(timer <= 56 && timer >= 50){
          textSize(30);
          text('Aunt: You didn\'t know that? Last week, it was very serious...', windowWidth/2 - 150, 220);
        }

        if(timer <= 53 && timer >= 50){
          textSize(30);
          text('Sam:......', windowWidth/2 - 150, 290);
        }

        if(frameCount % 60 == 0)
        timer-=1; 
    }

    //Scene 2 Shot 4
    if(timer < 50 && timer >= 40){
      memory.animate();
      memory.show();

      if(frameCount % 60 == 0)
      timer-=1; 
    }
  }

//Welcome to Scene 3
function drawThirdScene(){
    //Scene 3 Shot 1
    if(timer <= 40 && timer >= 30){
      rest.animate();
      rest.show();

      if(frameCount % 60 == 0)
      timer-=1; 
    }

    //Scene 3 Shot 2
    if(timer < 30 && timer >= 20){
      dream.animate();
      dream.show();
      if(frameCount % 60 == 0)
      timer-=1; 
    }

    //Scene 3 Shot 3
    if(timer < 20 && timer >= 10){
      listen.animate();
      listen.show();
      if(frameCount % 60 == 0)
      timer-=1; 
    }

    //Scene 3 Shot 4
    if(timer < 10 && timer >= 6){
      wakeup_1.animate();
      wakeup_2.show();
      if(frameCount % 60 == 0)
      timer-=1; 
    }

    if(timer < 6){
      image(shot12_final,windowWidth - 700, windowHeight - 600);
      if(frameCount % 60 == 0)
      timer-=1; 
    }
  }