class Projectile extends Body {
    constructor(props) {
        super(props);
    }

    move() {
        if(this.owner === 'PLAYER') {
            this.y -= this.speed;
            if(this.collidesWith(this.game.enemy) || this.y + this.height < 0) {
                this.game.removeProjectile(this);
            }
        } else {
            this.y += this.speed;
            if(this.collidesWith(this.game.player) || this.y - this.height > this.game.canvas.height) {
                this.game.removeProjectile(this);
            }
        }
    }

    action() {
        this.move();

    }
}