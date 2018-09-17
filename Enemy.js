class Enemy extends Entity {
    constructor(props) {
        super(props);

        this.direction = 'LEFT';
    }

    action() {
        if (Math.random() * 100 < 1) {
            this.direction = this.direction === 'LEFT' ? 'RIGHT' : 'LEFT'
        }
        this.move(this.direction);
    }
}