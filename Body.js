class Body {
    constructor(props) {
        Object.assign(this, props);

        this.image = new Image();
        this.image.src = this.imageUrl;
        this.image.addEventListener('load', () => {
            this.width = this.image.naturalWidth;
            this.height = this.image.naturalHeight;
        });
    }

    draw() {
        this.game.context.drawImage(this.image, this.x, this.y, this.width, this.height);
    }

    collidesWith(body) {
        return this.x < (body.x + body.width) &&
               (this.x + this.width) > body.x &&
               this.y < (body.y + body.height) &&
               (this.y + this.height) > body.y;
    }
}