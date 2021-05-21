canvas = new fabric.canvas("myCanvas");

H_H = 30;
H_W = 30;
P_X = 10;
P_Y = 10;


var player_Ob = " ";

function Player_Update (){
    fabric.Image.fromURL("player.png", function (Img){
        player_Ob = img;

        player_Ob.scaleToHeight(140);
        player_Ob.scaleToWidth(150);

        player_Ob.set({
            top:P_Y,
            left:P_X
        });
        canvas.add(player_Ob);
    });

}

