class Enemy extends Entity {
    constructor(props) {
        super(props);

        this.direction = 'LEFT';
    }

    action() {
        if (Math.random() * 100 < 1) {
            this.direction = this.direction === 'LEFT' ? 'RIGHT' : 'LEFT'
        }
        this.move(this.direction);

        if (Math.random() * 100 < 1) {
            this.fire();
        }
    }

    fire() {
        this.game.projectiles.push(new Projectile({imageUrl: "assets/enemies/emil-ivanov/images/projectiles/email.jpg",
                                    game: this.game,
                                    owner: 'ENEMY',
                                    speed: 2,
                                    x: this.x + this.width/2 - this.game.projectileWidth/2,
                                    y: this.y + this.game.projectileHeight,
                                    width: this.game.projectileWidth,
                                    height: this.game.projectileHeight}));
    }
}