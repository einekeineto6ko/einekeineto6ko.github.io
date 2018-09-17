class Projectile extends Body {
    constructor(props) {
        super(props);
    }

    action() {
        if(this.owner === 'PLAYER') {
            this.y -= this.speed;
        } else {
            this.y += this.speed;
        }
    }
}