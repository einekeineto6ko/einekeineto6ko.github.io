class Entity {
    constructor(props) {
        Object.assign(this, props);
        this.speed = 1;
    }

    moveLeft() {
        if(this.x > 0) {
            this.x -= this.speed;
        }
    }
    moveRight() {
        if(this.x + this.width < this.canvas.width) {
            this.x += this.speed;
        }
    }
    move(direction) {
        if(direction === 'LEFT') {
            this.moveLeft();
        } else {
            this.moveRight();
        }
    }

    draw() {
        let image = new Image();
        image.src = this.imageUrl;
        this.context.drawImage(image, this.x, this.y, this.width, this.height);
    }

}