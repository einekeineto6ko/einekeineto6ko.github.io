class Projectile extends Body {
    constructor(game, imageUrl, x, y, owner, speed=10) {
        super(game, imageUrl, x, y, speed);
        
        this.owner = owner;
    }

    move() {
        if(this.owner === 'PLAYER') {
            this.y -= this.speed;
            if(this.collidesWith(this.game.enemy)) {
                this.game.removeProjectile(this);

                this.game.enemy.life -= 1;
                document.getElementById('enemyLifeBar').setAttribute('value', this.game.enemy.life);
                if(this.game.enemy.life <= 0) {
                    this.game.stop('PLAYER');
                }
            }
            if(this.y + this.height < 0) {
                this.game.removeProjectile(this);
            }
        } else {
            this.y += this.speed;
            if(this.collidesWith(this.game.player)) {
                this.game.removeProjectile(this);

                this.game.player.life -= 1;
                document.getElementById('playerLifeBar').setAttribute('value', this.game.player.life);
                if(this.game.player.life <= 0) {
                    this.game.stop('ENEMY');
                }
            }
            if(this.y - this.height > this.game.canvas.height) {
                this.game.removeProjectile(this);
            }
        }
    }

    action() {
        this.move();

    }
}