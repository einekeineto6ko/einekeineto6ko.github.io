class Body {
    constructor(props) {
        Object.assign(this, props);
    }

    draw() {
        let image = new Image();
        image.src = this.imageUrl;
        this.game.context.drawImage(image, this.x, this.y, this.width, this.height);
    }
}