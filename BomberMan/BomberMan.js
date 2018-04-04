var drawGame = document.getElementById("drawGame");
var ctx = drawGame.getContext("2d");

var drawGame2 = document.getElementById("drawGame2");
var ctx2 = drawGame2.getContext("2d"); 

var drawGame3 = document.getElementById("drawGame3");
var ctx3 = drawGame3.getContext("2d"); 

var drawGame4 = document.getElementById("drawGame4");
var ctx4 = drawGame4.getContext("2d"); 

var logoEnd = new Image();
logoEnd.src = "font/gameOver.png";

var heroR = new Image();
heroR.src = "sprites/bombermanSprite_right.png";
var heroL = new Image();
heroL.src = "sprites/bombermanSprite_left.png";
var heroU = new Image();
heroU.src = "sprites/bombermanSprite_up.png";
var heroD = new Image();
heroD.src = "sprites/bombermanSprite_down.png"
var heroDeath = new Image();
heroDeath.src = "sprites/bombermanSprite_death.png"
var bomb = new Image();
bomb.src = "sprites/bomb.png";

var cyborgR = new Image();
cyborgR.src = "sprites/cyborg_right.png";
var cyborgL = new Image();
cyborgL.src = "sprites/cyborg_left.png";
var cyborgU = new Image();
cyborgU.src = "sprites/cyborg_up.png";
var cyborgD = new Image();
cyborgD.src = "sprites/cyborg_down.png";
var cyborgDeath = new Image();
cyborgDeath.src = "sprites/cyborg_death.png"

var rocketR = new Image();
rocketR.src = "sprites/rocket_right.png";
var rocketL = new Image();
rocketL.src = "sprites/rocket_left.png";
var rocketU = new Image();
rocketU.src = "sprites/rocket_up.png";
var rocketD = new Image();
rocketD.src = "sprites/rocket_down.png";
var rocketDeath = new Image();
rocketDeath.src = "sprites/rocket_death.png"

var maceR = new Image();
maceR.src = "sprites/mace_right.png";
var maceL = new Image();
maceL.src = "sprites/mace_left.png";
var maceU = new Image();
maceU.src = "sprites/mace_up.png";
var maceD = new Image();
maceD.src = "sprites/mace_down.png";
var maceDeath = new Image();
maceDeath.src = "sprites/mace_death.png"

var ladyR = new Image();
ladyR.src = "sprites/lady_right.png";
var ladyL = new Image();
ladyL.src = "sprites/lady_left.png";
var ladyU = new Image();
ladyU.src = "sprites/lady_up.png";
var ladyD = new Image();
ladyD.src = "sprites/lady_down.png";
var ladyDeath = new Image();
ladyDeath.src = "sprites/lady_death.png"

var fireLR = new Image();
fireLR.src = "sprites/fire_leftRight.png"

var fireUD = new Image();
fireUD.src = "sprites/fire_upDown.png"

var steel = new Image();
steel.src = "sprites/steel.png";

var grass = new Image();
grass.src = "sprites/grass.png";

var isRunning = false;
var gameTime;
var count = 0;
var score = 0;
var cycleCyborg = 0;
var cycleRocket = 0;
var cycleMace = 0;
var cycleLady = 0;
var genDecisionCyborg = 0;
var genDecisionRocket = 0;
var genDecisionMace = 0;
var genDecisionLady =0;
var range = 30;
var arrayBomb = [];
var newBomb;
var arrayFireX = [];
var arrayFireY = [];
var newFireX;
var newFireY;
var lives = 3;
var timerGame;
var deathCycle = 0;
var spriteBombX = 19, spriteBombY = 20;
var spriteFireLRX = 80, spriteFireLRY = 17;
var spriteFireUDX = 19, spriteFireUDY = 81;
var gameUpdate;
var updateTimer;



var spriteHeroX = 18, spriteHeroY = 23;	
var player = {
	x: 30,
	y: 40,
	startX: 30,
	startY: 40,
	spdX: 4,
	spdY: 4,
	width: 23,
	height: 29,
	id: "player",
	isDead: false,
};

var spriteCyborgX= 20, spriteCyborgY = 27;
var cyborg = {
	x: 25,
	y: 520,
	startX: 25,
	startY: 520,
	spdX: 4,
	spdY: 4,
	width: 23,
	height: 29,
	isDead: false,
	id: "cyborg",
	deathCycle:0,
	death: function(){
		this.deathCycle = (this.deathCycle + 1) % 5;
		ctx2.clearRect(0, 0, drawGame2.width, drawGame2.height);
		ctx2.drawImage(cyborgDeath, cycleCyborg * spriteCyborgX, 0, spriteCyborgX, spriteCyborgY, cyborg.x, cyborg.y, cyborg.width, cyborg.height);
	},
};

var spriteRocketX = 17, spriteRocketY = 28
var rocket ={
	x: 540,
	y: 30,
	startX: 540,
	startY: 30,
	spdX: 4,
	spdY: 4,
	width: 23,
	height: 29,
	isDead: false,
	id: "rocket",
	deathCycle:0,
	death: function(){
		this.deathCycle = (this.deathCycle + 1) % 5;
		ctx2.clearRect(0, 0, drawGame2.width, drawGame2.height);
		ctx2.drawImage(rocketDeath, cycleRocket * spriteRocketX, 0, spriteRocketX, spriteRocketY, rocket.x, rocket.y, rocket.width, rocket.height);
	},
}

var spriteMaceX = 20, spriteMaceY = 27;
var mace ={
	x: 540,
	y: 520,
	startX: 540,
	startY: 520,
	spdX: 4,
	spdY: 4,
	width: 23,
	height: 29,
	isDead: false,
	id: "mace",
	deathCycle:0,
	death: function(){
		this.deathCycle = (this.deathCycle + 1) % 5;
		ctx2.clearRect(0, 0, drawGame2.width, drawGame2.height);
		ctx2.drawImage(maceDeath, cycleMace * spriteMaceX, 0, spriteMaceX, spriteMaceY, mace.x, mace.y, mace.width, mace.height);
	},
}

var spriteLadyX = 17, spriteLadyY = 27;
var lady={
	x:258,
	y: 280,
	spdX: 4,
	startX: 290,
	startY: 280,
	spdY: 4,
	width: 23,
	height: 29,
	isDead: false,
	id: "lady",
	deathCycle:0,
	death: function(){
		this.deathCycle = (this.deathCycle + 1) % 5;
		ctx2.clearRect(0, 0, drawGame2.width, drawGame2.height);
		ctx2.drawImage(ladyDeath, cycleLady * spriteLadyX, 0, spriteLadyX, spriteLadyY, lady.x, lady.y, lady.width, lady.height);
	},	
}

var mapArray =[
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
	[0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0],
	[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
	[0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0],
	[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
	[0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0],
	[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
	[0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0],
	[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
	[0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0],
	[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
	[0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0],
	[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
];

function wallCollision(entity){
	for(var row = 0; row < mapArray.length; row++){
		for(var column = 0; column < mapArray[row].length; column++){
			var wallTop = row * 40, wallBottom = (row + 1) * 40;
			var wallLeft = column * 28.5, wallRight = (column + 1) * 28.5;	
			if(mapArray[row][column]===0){
				if (!(entity.x+entity.width <= wallLeft  ||
					entity.x>= wallRight ||
					entity.y+entity.height <= wallTop || 
					entity.y >= wallBottom)){
					return true
				}
			}
		}
	}
	return false
}

function drawStage(){
	var posX = 0;
	var posY = 0;
	for(var i = 0; i < mapArray.length; i++){
		for(var j = 0; j < mapArray[i].length; j++){
			if(mapArray[i][j]==0){
				ctx.drawImage(steel, posX, posY, 250,338);
			}
			if(mapArray[i][j]==1){
				ctx.drawImage(grass, posX, posY, 250,338);
			}
			posX+=28.5;
		}
		posX=0;
		posY+=40;
	}
}

function decision(){	
	setInterval(function(){
		genDecisionCyborg = Math.round(Math.random()*3);
		genDecisionRocket = Math.round(Math.random()*3);
		genDecisionMace = Math.round(Math.random()*3);
		genDecisionLady = Math.round(Math.random()*3);
	},3000);
}
	
function moveHero(direction){
	ctx3.clearRect(0, 0, drawGame3.width, drawGame3.height);
	ctx3.drawImage(direction, count * spriteHeroX, 0, spriteHeroX, spriteHeroY, player.x, player.y, player.width, player.height);
}

function movementMace(enemy){
	turnsMace = 0;	
	if(genDecisionMace === 0){
		if(enemy.x >= 30){
			if(turnsMace <= range){
				cycleMace = (cycleMace + 1) % 3;
				enemy.x = enemy.x - enemy.spdX;
				ctx2.drawImage(maceL, cycleMace * spriteMaceX, 0, spriteMaceX, spriteMaceY, enemy.x, enemy.y, enemy.width, enemy.height);
				turnsMace++;
			}
			turnsMace = 0;
		}else{
			ctx2.drawImage(maceL, 0 * spriteMaceX, 0, spriteMaceX, spriteMaceY, enemy.x, enemy.y, enemy.width, enemy.height);
		}
	}		
	if(genDecisionMace === 1){
		if(enemy.x <=540){
			if(turnsMace <= range){
				cycleMace = (cycleMace + 1) % 3;
				enemy.x = enemy.x + enemy.spdX;
				ctx2.drawImage(maceR, cycleMace * spriteMaceX, 0, spriteMaceX, spriteMaceY, enemy.x, enemy.y, enemy.width, enemy.height);
				turnsMace++;
			}
			turnsMace = 0;
		}else{
			ctx2.drawImage(maceR, 0 * spriteMaceX, 0, spriteMaceX, spriteMaceY, enemy.x, enemy.y, enemy.width, enemy.height);
		}
	}
	if(genDecisionMace === 2){
		if(enemy.y <=520){
			if(turnsMace <= range){
				cycleMace = (cycleMace + 1) % 3;
				enemy.y = enemy.y + enemy.spdY;
				ctx2.drawImage(maceD, cycleMace * spriteMaceX, 0, spriteMaceX, spriteMaceY, enemy.x, enemy.y, enemy.width, enemy.height);
				turnsMace++;
			}
			turnsMace = 0;
		}else{
		ctx2.drawImage(maceD, 0 * spriteMaceX, 0, spriteMaceX, spriteMaceY, enemy.x, enemy.y, enemy.width, enemy.height);
		}
	}
	if(genDecisionMace === 3){
		if(enemy.y >=30){
			if(turnsMace <= range){
				cycleMace = (cycleMace + 1) % 3;
				enemy.y = enemy.y - enemy.spdY;
				ctx2.drawImage(maceU, cycleMace * spriteMaceX, 0, spriteMaceX, spriteMaceY, enemy.x, enemy.y, enemy.width, enemy.height);
				turnsMace++;
			}
			turnsMace = 0;
		}else{
		ctx2.drawImage(maceU, 0 * spriteMaceX, 0, spriteMaceX, spriteMaceY, enemy.x, enemy.y, enemy.width, enemy.height);
		}
	}
	
}

function movementRocket(enemy){
	turns = 0;	
	if(genDecisionRocket === 0){
		if(enemy.x >= 30){
			if(turns <= range){
				cycleRocket = (cycleRocket + 1) % 3;
				enemy.x = enemy.x - enemy.spdX;
				ctx2.drawImage(rocketL, cycleRocket * spriteRocketX, 0, spriteRocketX, spriteRocketY, enemy.x, enemy.y, enemy.width, enemy.height);
				turns++;
			}
			turns = 0;
		}else{
			ctx2.drawImage(rocketL, 0 * spriteRocketX, 0, spriteRocketX, spriteRocketY, enemy.x, enemy.y, enemy.width, enemy.height);
		}
	}		
	if(genDecisionRocket === 1){
		if(enemy.x <=540){
			if(turns <= range){
				cycleRocket = (cycleRocket + 1) % 3;
				enemy.x = enemy.x + enemy.spdX;
				ctx2.drawImage(rocketR, cycleRocket * spriteRocketX, 0, spriteRocketX, spriteRocketY, enemy.x, enemy.y, enemy.width, enemy.height);
				turns++;
			}
			turns = 0;
		}else{
			ctx2.drawImage(rocketR, 0 * spriteRocketX, 0, spriteRocketX, spriteRocketY, enemy.x, enemy.y, enemy.width, enemy.height);
		}
	}
	if(genDecisionRocket === 2){
		if(enemy.y <=520){
			if(turns <= range){
				cycleRocket = (cycleRocket + 1) % 3;
				enemy.y = enemy.y + enemy.spdY;
				ctx2.drawImage(rocketD, cycleRocket * spriteRocketX, 0, spriteRocketX, spriteRocketY, enemy.x, enemy.y, enemy.width, enemy.height);
				turns++;
			}
			turns = 0;
		}else{
			ctx2.drawImage(rocketD, 0 * spriteRocketX, 0, spriteRocketX, spriteRocketY, enemy.x, enemy.y, enemy.width, enemy.height);
		}
	}
	if(genDecisionRocket === 3){
		if(enemy.y >=30){
			if(turns <= range){
				cycleRocket = (cycleRocket + 1) % 3;
				enemy.y = enemy.y - enemy.spdY;
				ctx2.drawImage(rocketU, cycleRocket * spriteRocketX, 0, spriteRocketX, spriteRocketY, enemy.x, enemy.y, enemy.width, enemy.height);
				turns++;
			}
			turns = 0;
		}else{
			ctx2.drawImage(rocketU, 0 * spriteRocketX, 0, spriteRocketX, spriteRocketY, enemy.x, enemy.y, enemy.width, enemy.height);
		}
	}
	
}

function movementCyborg(enemy){
	turns = 0;		
	if(genDecisionCyborg === 0){
		if(enemy.x >= 30){
			if(turns <= range){
				cycleCyborg = (cycleCyborg + 1) % 3;
				enemy.x = enemy.x - enemy.spdX;
				ctx2.drawImage(cyborgL, cycleCyborg * spriteCyborgX, 0, spriteCyborgX, spriteCyborgY, enemy.x, enemy.y, enemy.width, enemy.height);
				turns++;
			}
			turns = 0;
		}else{
			ctx2.drawImage(cyborgL, 0 * spriteCyborgX, 0, spriteCyborgX, spriteCyborgY, enemy.x, enemy.y, enemy.width, enemy.height);
		}
	}		
	if(genDecisionCyborg === 1){
		if(enemy.x <=540){
			if(turns <= range){
				cycleCyborg = (cycleCyborg + 1) % 3;
				enemy.x = enemy.x + enemy.spdX;
				ctx2.drawImage(cyborgR, cycleCyborg * spriteCyborgX, 0, spriteCyborgX, spriteCyborgY, enemy.x, enemy.y, enemy.width, enemy.height);
				turns++;
			}
			turns = 0;
		}else{
			ctx2.drawImage(cyborgR, 0 * spriteCyborgX, 0, spriteCyborgX, spriteCyborgY, enemy.x, enemy.y, enemy.width, enemy.height);
		}
	}
	if(genDecisionCyborg === 2){
		if(enemy.y <=520){
			if(turns <= range){
				cycleCyborg = (cycleCyborg + 1) % 3;
				enemy.y = enemy.y + enemy.spdY;
				ctx2.drawImage(cyborgD, cycleCyborg * spriteCyborgX, 0, spriteCyborgX, spriteCyborgY, enemy.x, enemy.y, enemy.width, enemy.height)
				turns++;
			}
			turns = 0;
		}else{
			ctx2.drawImage(cyborgD, 0 * spriteCyborgX, 0, spriteCyborgX, spriteCyborgY, enemy.x, enemy.y, enemy.width, enemy.height);
		}
	}
	if(genDecisionCyborg === 3){
		if(enemy.y >=30){
			if(turns <= range){
				cycleCyborg = (cycleCyborg + 1) % 3;
				enemy.y = enemy.y - enemy.spdY;
				ctx2.drawImage(cyborgU, cycleCyborg * spriteCyborgX, 0, spriteCyborgX, spriteCyborgY, enemy.x, enemy.y, enemy.width, enemy.height);
				turns++;
			}
			turns = 0;
		}else{
			ctx2.drawImage(cyborgU, 0 * spriteCyborgX, 0, spriteCyborgX, spriteCyborgY, enemy.x, enemy.y, enemy.width, enemy.height);
		}
	}
	
}

function movementLady(enemy){
	turns = 0;	
	if(genDecisionLady === 0){
		if(enemy.x >= 30){
			if(turns <= range){
				cycleLady = (cycleLady + 1) % 3;
				enemy.x = enemy.x - enemy.spdX;
				ctx2.drawImage(ladyL, cycleLady * spriteLadyX, 0, spriteLadyX, spriteLadyY, enemy.x, enemy.y, enemy.width, enemy.height);
				turns++;
			}
			turns = 0;
		}else{
			ctx2.drawImage(ladyL, 0 * spriteLadyX, 0, spriteLadyX, spriteLadyY, enemy.x, enemy.y, enemy.width, enemy.height);
		}
	}		
	if(genDecisionLady === 1){
		if(enemy.x <=540){
			if(turns <= range){
				cycleLady = (cycleLady + 1) % 3;
				enemy.x = enemy.x + enemy.spdX;
				ctx2.drawImage(ladyR, cycleLady * spriteLadyX, 0, spriteLadyX, spriteLadyY, enemy.x, enemy.y, enemy.width, enemy.height);
				turns++;
			}
			turns = 0;
		}else{
			ctx2.drawImage(ladyR, 0 * spriteLadyX, 0, spriteLadyX, spriteLadyY, enemy.x, enemy.y, enemy.width, enemy.height);
		}
	}
	if(genDecisionLady === 2){
		if(enemy.y <=520){
			if(turns <= range){
				cycleLady = (cycleLady + 1) % 3;
				enemy.y = enemy.y + enemy.spdY;
				ctx2.drawImage(ladyD, cycleLady * spriteLadyX, 0, spriteLadyX, spriteLadyY, enemy.x, enemy.y, enemy.width, enemy.height)
				turns++;
			}
			turns = 0;
		}else{
			ctx2.drawImage(ladyD, 0 * spriteLadyX, 0, spriteLadyX, spriteLadyY, enemy.x, enemy.y, enemy.width, enemy.height);
		}
	}
	if(genDecisionLady === 3){
		if(enemy.y >=30){
			if(turns <= range){
				cycleLady = (cycleLady + 1) % 3;
				enemy.y = enemy.y - enemy.spdY;
				ctx2.drawImage(ladyU, cycleLady * spriteLadyX, 0, spriteLadyX, spriteLadyY, enemy.x, enemy.y, enemy.width, enemy.height);
				turns++;
			}
			turns = 0;
		}else{
			ctx2.drawImage(ladyU, 0 * spriteLadyX, 0, spriteLadyX, spriteLadyY, enemy.x, enemy.y, enemy.width, enemy.height);
		}
	}
	
}

function moveEntity(entity, x, y, image){
	entity.x += x;
	entity.y += y;
	if(wallCollision(entity)) {
		entity.x -= x;
		entity.y -= y;
	}
	count = (count + 1) % 3;
	moveHero(image);
}

function keyboard(){
	addEventListener("keydown", function(event){
		if(isRunning === true){
			if(event.keyCode === 37){
				moveEntity(player, -player.spdX, 0, heroL)
			}
			else if(event.keyCode === 39){
				moveEntity(player, player.spdX, 0, heroR)
			}
			else if(event.keyCode === 40){
				moveEntity(player, 0, player.spdY, heroD)
			}
			else if(event.keyCode === 38){
				moveEntity(player, 0, -player.spdY, heroU)
			}
			else if(event.keyCode === 32){
				placeBomb();
			}	
		}
	});
}

function Bomb(x, y, width, height){
	this.x = x;
	this.y = y;
	this.width = width+8;
	this.height = height+8;
	this.explodeAt = Date.now()+3000;
	this.times = 0;
	this.draw = function(){	
		ctx4.drawImage(bomb, this.times * spriteBombX, 0, spriteBombX, spriteBombY, this.x, this.y, this.width, this.height);
		this.times = (this.times + 1)%4;
	}
}

function FireLR (x, y, width, height){
	this.x = x-50;
	this.y = y;
	this.width = width+40;
	this.height = height+25;
	this.fireAt = Date.now()+3000;
	this.times = 0;
	this.draw = function(){
		ctx4.drawImage(fireLR, this.times * spriteFireLRX, 0, spriteFireLRX, spriteFireLRY, this.x,  this.y, this.width, this.height);
		this.times = (this.times + 1)%4;
	}
}	

function FireUD(x, y, width, height){
	this.x = x-13;
	this.y = y-45;
	this.width = width+40;
	this.height = height+130
	this.fireAt = Date.now()+3000;
	this.times = 0;
	this.draw = function(){
		ctx4.drawImage(fireUD, this.times * spriteFireUDX, 0, spriteFireUDX, spriteFireUDY, this.x,  this.y, this.width, this.height);
		this.times = (this.times + 1)%4;
	}
}

function placeBomb (){ 
	newBomb = new Bomb(player.x, player.y, spriteBombX, spriteBombY);
	arrayBomb.push(newBomb);
	newFireX = new FireLR(player.x, player.y,spriteFireLRX, spriteFireLRY, 0 ,0);
	arrayFireX.push(newFireX);
	newFireY = new FireUD(player.x, player.y, 0, 0,spriteFireUDX, spriteFireUDY);
	arrayFireY.push(newFireY);
}

function searchBomb(){
	for(var i = 0; i < arrayBomb.length; i++){
		if(Date.now() > arrayBomb[i].explodeAt){
			arrayBomb.splice(i,1);
			i--;	
		}else{
			arrayBomb[i].draw();	
		}
	}
}

function searchFire(){
	for(var i = 0; i < arrayFireX.length; i++){
		if(Date.now() > arrayFireX[i].fireAt && Date.now() > arrayFireY[i].fireAt){
			arrayFireX[i].draw();	
			arrayFireY[i].draw();	
			collisionBomb(arrayFireX[i], lady);
			collisionBomb(arrayFireY[i], lady);
			collisionBomb(arrayFireX[i], mace);
			collisionBomb(arrayFireY[i], mace);
			collisionBomb(arrayFireX[i], rocket);
			collisionBomb(arrayFireY[i], rocket);
			collisionBomb(arrayFireX[i], cyborg);
			collisionBomb(arrayFireY[i], cyborg);
			collisionBomb(arrayFireX[i], player);
			collisionBomb(arrayFireY[i], player);
			arrayFireX.splice(i,1);
			arrayFireY.splice(i,1);
			i--;				
		}
	}
}

function collision(player, enemy){
	if (player.x < enemy.x+enemy.width &&
		player.x+player.width > enemy.x &&
		player.y < enemy.y+enemy.height && 
		player.y+player.height > enemy.y){
			heroDies();
			if(deathCycle === 4){
				resetHero();
				lives --;
				showLives();
			}
	}
}

function collisionBomb(bomb, enemy){
	if(bomb != undefined){
		if (bomb.x < enemy.x+enemy.width &&
			bomb.x+bomb.width > enemy.x &&
			bomb.y < enemy.y+enemy.height && 
			bomb.y+bomb.height > enemy.y){
				enemy.isDead = true;
				if(enemy.isDead === true){
					if(enemy.id === "cyborg"){
						resetEnemy(cyborg, cyborgR, cycleCyborg, spriteCyborgX, spriteCyborgY);
						score += 100;
					}	
					if(enemy.id === "mace"){
						resetEnemy(mace, maceL, cycleMace, spriteMaceX, spriteMaceY);
						score += 100;
					}
					if(enemy.id === "lady"){
						resetEnemy(lady, ladyD, cycleLady, spriteLadyX, spriteLadyY);
						score += 100;
					}
					if(enemy.id === "rocket"){
						resetEnemy(rocket, rocketL, cycleRocket, spriteRocketX, spriteRocketY);
						score += 100;
					}
					if(enemy.id === "player"){
						heroDies();
						resetHero();
						lives --;
						showLives();
					}
				}
		}
	}
}

function showLives(){
	var showLives = document.getElementById("lives");
	showLives.innerHTML = lives;
	if(lives <=0){
		stopGame();
		lives = 0;
	}
}

function timer(){
	var time = 240;
	var min = Math.floor(time/60);
	var sec = time%60;
	var showTime = document.getElementById("time");
	setInterval(function(){
		time--;
		min =Math.floor(time/60);
		sec = time%60;
		showTime.innerHTML = min+":"+ sec;
		if(time === 0){
			stopGame();
			clearInterval(timerGame)
		}
	},1000);
}

function showScore(){
	var display = document.getElementById("score");
	display.innerHTML = score;
	return score;
}

function heroDies(){
	deathCycle = (deathCycle + 1) % 5;
	ctx3.clearRect(0, 0, drawGame.width, drawGame.height);
	ctx3.drawImage(heroDeath, deathCycle * (spriteHeroX+11), 0, spriteHeroX+5, spriteHeroY, player.x, player.y, player.width, player.height);
}

function resetHero(){
	player.x = player.startX;
	player.y = player.startY
	ctx3.clearRect(0, 0, drawGame3.width, drawGame3.height);
	ctx3.drawImage(heroR, 0 * spriteHeroX, 0, spriteHeroX, spriteHeroY, player.x, player.y, player.width, player.height);
}

function enemyDies(enemy,deathSprite, cycle, spriteX, spriteY){
	deathCycle = (deathCycle + 1) % 5;
	ctx2.clearRect(0, 0, drawGame2.width, drawGame2.height);
	ctx2.drawImage(deathSprite, cycle * spriteX, 0, spriteX, spriteY, enemy.x, enemy.y, enemy.width, enemy.height);
}

function resetEnemy(enemy, direction, cycle, spriteX, spriteY){
	enemy.x = enemy.startX;
	enemy.y = enemy.startY
	enemy.isDead = false;
	ctx2.clearRect(0, 0, drawGame2.width, drawGame2.height);
	ctx2.drawImage(direction, cycle * spriteX, 0, spriteX, spriteY, enemy.x, enemy.y, enemy.width, enemy.height);
}

function updateBomb(){
	ctx4.clearRect(0, 0, drawGame4.width, drawGame4.height);
	searchBomb();
}
 
function update(){
	updateBomb();
	searchFire();
	drawStage();
	showLives();
	ctx2.clearRect(0, 0, drawGame2.width, drawGame2.height);
	showScore();
	movementCyborg(cyborg);
	movementRocket(rocket);
	movementMace(mace);
	movementLady(lady);
	collision(player, lady);
	collision(player, cyborg);
	collision(player, rocket);
	collision(player, mace);
}

function startGame(){ 
	setTimeout(function(){
		isRunning = true;
		drawStage();
		moveHero(heroD);
		gameUpdate = setInterval(function(){ update() }, 100);
		updateTimer = setInterval(function(){timer()}, 1000);
		
	},5000);
}

function stopGame() {
	isRunning = false;
	clearInterval(gameUpdate);
	clearInterval(updateTimer);
	ctx.font = "50px ArcadeClassic";
	ctx.fillText("Game Over", 180, 250);
	ctx.font = "40px ArcadeClassic";
	ctx.fillText("Your Score was: " +showScore(), 150, 350);
	
}


ctx.font = "50px ArcadeClassic";
ctx.fillText("Bomber Man Arena!", 80, 250);
ctx.font = "35px ArcadeClassic";
ctx.fillText("Your game will start in   5 seconds", 30, 350);


clearInterval(gameUpdate);
clearInterval(updateTimer);
decision();
keyboard();








