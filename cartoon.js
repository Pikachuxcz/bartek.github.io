// Get the canvas and drawing context
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// Draw the sky background
ctx.fillStyle = "skyblue";
ctx.fillRect(0, 0, 800, 350);

// Draw the grass/ground
ctx.fillStyle = "lightgreen";
ctx.fillRect(0, 350, 800, 150);

// Draw the sun
ctx.beginPath();
ctx.arc(700, 80, 50, 0, Math.PI * 2);
ctx.fillStyle = "yellow";
ctx.fill();
ctx.strokeStyle = "orange";
ctx.stroke();

// Draw sun rays using lines
ctx.strokeStyle = "orange";
ctx.lineWidth = 3;

ctx.beginPath();
ctx.moveTo(700, 10);
ctx.lineTo(700, 0);
ctx.moveTo(700, 150);
ctx.lineTo(700, 170);
ctx.moveTo(630, 80);
ctx.lineTo(610, 80);
ctx.moveTo(770, 80);
ctx.lineTo(790, 80);
ctx.moveTo(650, 30);
ctx.lineTo(630, 10);
ctx.moveTo(750, 30);
ctx.lineTo(770, 10);
ctx.moveTo(650, 130);
ctx.lineTo(630, 150);
ctx.moveTo(750, 130);
ctx.lineTo(770, 150);
ctx.stroke();

// Draw the house body
ctx.fillStyle = "tan";
ctx.fillRect(250, 230, 300, 170);
ctx.strokeStyle = "black";
ctx.lineWidth = 2;
ctx.strokeRect(250, 230, 300, 170);

// Draw the roof using moveTo and lineTo
ctx.beginPath();
ctx.moveTo(220, 230);
ctx.lineTo(400, 120);
ctx.lineTo(580, 230);
ctx.closePath();
ctx.fillStyle = "brown";
ctx.fill();
ctx.strokeStyle = "black";
ctx.stroke();

// Draw the door
ctx.fillStyle = "saddlebrown";
ctx.fillRect(370, 310, 60, 90);
ctx.strokeStyle = "black";
ctx.strokeRect(370, 310, 60, 90);

// Draw door knob
ctx.beginPath();
ctx.arc(420, 355, 5, 0, Math.PI * 2);
ctx.fillStyle = "gold";
ctx.fill();
ctx.stroke();

// Draw left window
ctx.fillStyle = "lightyellow";
ctx.fillRect(285, 270, 60, 50);
ctx.strokeStyle = "black";
ctx.strokeRect(285, 270, 60, 50);

// Draw window cross lines
ctx.beginPath();
ctx.moveTo(315, 270);
ctx.lineTo(315, 320);
ctx.moveTo(285, 295);
ctx.lineTo(345, 295);
ctx.stroke();

// Draw right window
ctx.fillStyle = "lightyellow";
ctx.fillRect(455, 270, 60, 50);
ctx.strokeStyle = "black";
ctx.strokeRect(455, 270, 60, 50);

// Draw window cross lines
ctx.beginPath();
ctx.moveTo(485, 270);
ctx.lineTo(485, 320);
ctx.moveTo(455, 295);
ctx.lineTo(515, 295);
ctx.stroke();

// Draw a fence using a for loop and translate
for (let i = 0; i < 9; i++) {
    ctx.save();

    // Move each fence post over by 70 pixels
    ctx.translate(i * 70, 0);

    ctx.fillStyle = "white";
    ctx.fillRect(30, 360, 20, 70);
    ctx.strokeStyle = "black";
    ctx.strokeRect(30, 360, 20, 70);

    ctx.restore();
}

// Draw horizontal fence rails
ctx.fillStyle = "white";
ctx.fillRect(20, 380, 600, 15);
ctx.fillRect(20, 415, 600, 15);
ctx.strokeStyle = "black";
ctx.strokeRect(20, 380, 600, 15);
ctx.strokeRect(20, 415, 600, 15);

// Draw grass using a for loop and translate
for (let i = 0; i < 20; i++) {
    ctx.save();

    // Move each grass blade group over
    ctx.translate(i * 40, 0);

    ctx.beginPath();
    ctx.moveTo(20, 470);
    ctx.lineTo(25, 445);
    ctx.lineTo(30, 470);
    ctx.strokeStyle = "green";
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.restore();
}

// Draw clouds
ctx.fillStyle = "white";

ctx.beginPath();
ctx.arc(130, 90, 30, 0, Math.PI * 2);
ctx.arc(165, 90, 35, 0, Math.PI * 2);
ctx.arc(200, 90, 30, 0, Math.PI * 2);
ctx.fill();

ctx.beginPath();
ctx.arc(420, 70, 25, 0, Math.PI * 2);
ctx.arc(450, 70, 30, 0, Math.PI * 2);
ctx.arc(480, 70, 25, 0, Math.PI * 2);
ctx.fill();

// Draw caption text on the canvas
ctx.font = "28px Arial";
ctx.fillStyle = "black";
ctx.fillText("A Sunny Day at My Cartoon House", 220, 40);
