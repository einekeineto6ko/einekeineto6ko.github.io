class Entity extends Body {
    constructor(props) {
        super(props);
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