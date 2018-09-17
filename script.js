let game = {
    entityWidth: 80,
    entityHeight: 100,
    projectileWidth: 10,
    projectileHeight: 40,

    player: null,
    enemy: null,
    projectiles: [],

    canvas: null,
    context: null,

    startGame: function() {
        this.canvas = document.getElementById("gameCanvas");
        this.context = this.canvas.getContext("2d");

        this.player = new Player({imageUrl: "assets/player/images/head.jpg",
                                  game: this,
                                  speed: 5,
                                  x: (this.canvas.width - this.entityWidth) / 2,
                                  y: this.canvas.height - this.entityHeight,
                                  width: this.entityWidth,
                                  height: this.entityHeight});
        this.enemy = new Enemy({imageUrl: "assets/enemies/bobby-habib/images/head.jpg",
                                  game: this,
                                  speed: 5,
                                  x: (this.canvas.width - this.entityWidth) / 2,
                                  y: 0,
                                  width: this.entityWidth,
                                  height: this.entityHeight});

        this.interval = setInterval(this.updateCanvas, 20);
    },

    updateCanvas: function() {
        game.clearCanvas();
        game.drawCanvas();
    },

    drawCanvas: function() {
        this.player.action();
        this.player.draw();

        this.enemy.action();
        this.enemy.draw();

        this.projectiles.forEach((projectile) => {
            projectile.move();
            projectile.draw();
        })
    },

    clearCanvas: function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },

    stopGame: function() {
        clearInterval(this.interval);
    }
}
