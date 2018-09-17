class Player extends Entity {
    constructor(game, imageUrl, x, y, speed=5) {
        super(game, imageUrl, x, y, speed);

        this.leftArrowPressed = false;
        this.rightArrowPressed = false;

        document.addEventListener("keydown", (e) => {
            if(e.key === 'ArrowLeft') {
                this.leftArrowPressed = true;
            } else if(e.key === 'ArrowRight') {
                this.rightArrowPressed = true;
            }
        });
        document.addEventListener("keyup", (e) => {
            if(e.key === 'ArrowLeft') {
                this.leftArrowPressed = false;
            } else if(e.key === 'ArrowRight') {
                this.rightArrowPressed = false;
            }
        });
        document.addEventListener("keypress", (e) => {
            if(e.key === ' ') {
                this.fire();
            }
        });
    };

    fire() {
        this.game.projectiles.push(new Projectile(
            this.game, "assets/player/images/projectiles/bullet.png",
            this.x + this.width / 2 - 10, this.y - 20,
            'PLAYER'));
    }

    action() {
        if(this.leftArrowPressed && !this.rightArrowPressed) {
            this.moveLeft();
        } else if(this.rightArrowPressed && !this.leftArrowPressed) {
            this.moveRight();
        }
    }
}