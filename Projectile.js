class Projectile {
    constructor(props) {
        this.speed = 10;
        Object.assign(this, props);
    }

    move() {
        if(this.owner === 'PLAYER') {
            this.y -= this.speed;
        } else {
            this.y += this.speed;
        }
    }

    draw() {
        let image = new Image();
        image.src = this.imageUrl;
        this.game.context.drawImage(image, this.x, this.y, this.width, this.height);
    }

}