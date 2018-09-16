class Player extends Entity {
    constructor(props) {
        super(props);

        this.leftArrowPressed = false;
        this.rightArrowPressed = false;

        document.addEventListener("keydown", (e) => {
            if(e.key === 'ArrowLeft') {
                this.leftArrowPressed = true;
            } else if(e.key === 'ArrowRight') {
                this.rightArrowPressed = true;
            }
        });
        document.addEventListener("keyup", (e) => {
            if(e.key === 'ArrowLeft') {
                this.leftArrowPressed = false;
            } else if(e.key === 'ArrowRight') {
                this.rightArrowPressed = false;
            }
        });
    };

    action() {
        if(this.leftArrowPressed && !this.rightArrowPressed) {
            this.moveLeft();
        } else if(this.rightArrowPressed && !this.leftArrowPressed) {
            this.moveRight();
        }
    }
}