class Player extends Entity {
    constructor(props) {
        super(props);

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
        this.game.projectiles.push(new Projectile({imageUrl: "assets/player/images/projectiles/bullet.png",
                                    game: this.game,
                                    owner: 'PLAYER',
                                    speed: 10,
                                    x: this.x + this.width/2 - this.game.projectileWidth/2,
                                    y: this.y - this.game.projectileHeight,
                                    width: 20,
                                    height: 30}));
    }

    action() {
        if(this.leftArrowPressed && !this.rightArrowPressed) {
            this.moveLeft();
        } else if(this.rightArrowPressed && !this.leftArrowPressed) {
            this.moveRight();
        }
    }
}