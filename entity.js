class Entity {
    constructor(props) {
        this.speed = 1;
        Object.assign(this, props);
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

    draw() {
        let image = new Image();
        image.src = this.imageUrl;
        this.game.context.drawImage(image, this.x, this.y, this.width, this.height);
    }

}