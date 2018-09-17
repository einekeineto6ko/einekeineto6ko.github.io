class Entity extends Body {
    constructor(game, imageUrl, x, y, speed=5) {
        super(game, imageUrl, x, y, speed);
    }

    moveLeft() {
        if(this.x > 0) {
            this.x -= this.speed;
        }
    }
    moveRight() {
        if(this.x + this.width < this.game.canvas.width) {
            this.x += this.speed;
        }
    }
    move(direction) {
        direction === 'LEFT' ? this.moveLeft() : this.moveRight();
    }
}