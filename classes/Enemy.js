class Enemy extends Entity {
    constructor(game, imageUrl, x, y, life, speed=5) {
        super(game, imageUrl, x, y, life, speed);

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
        this.game.projectiles.push(new Projectile(
            this.game, "assets/enemies/emil-ivanov/images/projectiles/email.jpg",
            this.x + this.width/2 - 10, this.y + 80,
            'ENEMY', 2));
    }
}