
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {

// Background 

background(0);

rectMode(CENTER);
ellipseMode(CENTER);

// Drums
// Bones that move from left to right
let howManyBones = 7;         // number of bones 
let speed = 5;                // how fast they move
let spacing = 200;            // space between bones

for (let i = 0; i < howManyBones; i++) {

let x = (counter * speed + i * spacing) % width;
let y = 120 + i * 80;

// draw a bone at that spot
drawBone(x, y, 80, 20, color(255));
}

// Bass
// spinning blue bone in center 
push();
translate(width / 2, height / 2);

let spin = map(bass, 0, 100, 0, TWO_PI);
rotate(spin + counter * 0.05);

for (let i = 0; i < 4; i++) {
rotate(HALF_PI);
drawBone(0, 0, 180, 30, color(0, 200, 255));
}
pop();

// Vocals
// middle circle that changes size 
let aura = map(vocal, 0, 100, 150, 400);
noFill();
stroke(0, 200, 255, 150);
strokeWeight(6);
ellipse(width / 2, height / 2, aura);

}

// draw a bone shape
function drawBone(x, y, w, h, c) {
push();  
translate(x, y);
fill(c);
noStroke();

rectMode(CENTER);
rect(0, 0, w, h);

ellipse(-w / 2, 0, h, h);
ellipse(w / 2, 0, h, h);
pop();

}
