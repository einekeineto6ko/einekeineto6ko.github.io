class Body {
    constructor(props) {
        Object.assign(this, props);
    }

    draw() {
        let image = new Image();
        image.src = this.imageUrl;
        this.game.context.drawImage(image, this.x, this.y, this.width, this.height);
    }

    collidesWith(body) {
        return this.x < (body.x + body.width) &&
               (this.x + this.width) > body.x &&
               this.y < (body.y + body.height) &&
               (this.y + this.height) > body.y;
    }
}