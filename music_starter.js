
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {

// Background

let bgShade = (0, 0)
background(bgShade)

rectMode(CENTER);
ellipseMode(CENTER);

// Middle circle that changes size with the vocals

let aura = map(vocal, 0, 100, 150, 400);
noFill();
stroke(0, 200, 255, 150);
strokeWeight(6);
ellipse(width / 2, height / 2, aura);

}