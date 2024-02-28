function spawnIceCream () {
    // the loop in this function will put a new food sprite on top of all the white tiles in the tile map
    for (let value of scene.getTilesByType(1)) {
        mySprite = sprites.create(img`
            ............3333bb..bb33333.....
            ........3bb31111d3b311d111d33...
            .......3bdd11111dbd11d11111113..
            .......bdddd1111bd11d111dd11113.
            ......3d111dd111b11d111dd33d11d3
            ......3d11111dd1d11d111d11d33113
            ....bb3d111111dd13dd111d1dd3b31b
            ...b3d3dd111111dd13dd11d1dddbbdb
            ...3ddd31d111111dd133dddddddb.b.
            ..311111d1ddd1111dd11dddddd33...
            ..3111111d111dd111dd1111dd3313..
            ..bddd1111ddd11dd111d111111113..
            ..311ddd111dddd11dd11ddd1111ddb.
            ..31111dd111dddd11dd111dddddddb.
            ...bd1111d1113ddd11dd1111111d3b.
            ...4dd1111d1113ddd11ddd111d333b.
            ..4dbdddd11d11133ddddddddddddb..
            .4ddbddddd11d111d33ddddddddd3b..
            .4dddb11ddd11dd111d333dddd3bb...
            .4dd55b111d11dd11111d3333bbb....
            .445555b111d11dddd111111ddb.....
            .4455555bd1d311ddddddddddd3.....
            .45455555bb1d3111ddddddd113.....
            .4554555555b333d1111111113......
            455554555555bbb33d11111d33......
            4d555545555555dbbb3d11d33.......
            4dd5555455555ddddd43333.........
            45dd555544ddddddd4..............
            .45dd5555d44dddd4...............
            ..45dd55dddd4444................
            ...45dd55444....................
            ....44444.......................
            `, SpriteKind.Food)
        scene.place(value, mySprite)
    }
}
function spawnPlayer () {
    thePlayer = sprites.create(img`
        . . . . . . . . . b 5 b . . . . 
        . . . . . . . . . b 5 b . . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 5 5 5 5 5 b . . . 
        . . . . b b 5 b c 5 5 d 4 c . . 
        . b b b b 5 5 5 b f d d 4 4 4 b 
        . b d 5 b 5 5 b c b 4 4 4 4 b . 
        . . b 5 5 b 5 5 5 4 4 4 4 b . . 
        . . b d 5 5 b 5 5 5 5 5 5 b . . 
        . b d b 5 5 5 d 5 5 5 5 5 5 b . 
        b d d c d 5 5 b 5 5 5 5 5 5 b . 
        c d d d c c b 5 5 5 5 5 5 5 b . 
        c b d d d d d 5 5 5 5 5 5 5 b . 
        . c d d d d d d 5 5 5 5 5 d b . 
        . . c b d d d d d 5 5 5 b b . . 
        . . . c c c c c c c c b b . . . 
        `, SpriteKind.Player)
    controller.moveSprite(thePlayer)
    thePlayer.setVelocity(0, 50)
    scene.cameraFollowSprite(thePlayer)
    // puts Player on Yellow tile in the tile map to start
    scene.placeOnRandomTile(thePlayer, 5)
    // makes the yellow tile disappear (and non-interactive
    scene.setTile(5, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, false)
}
let thePlayer: Sprite = null
let mySprite: Sprite = null
scene.setTileMap(img`
    5...................
    ......1.............
    .....1...........1..
    ..1......1..1.......
    ....................
    77777777777777777777
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    `)
// wall on makes the player interact with all green tiles in the tile map
scene.setTile(7, img`
    7 7 7 7 5 7 7 7 7 7 7 7 7 7 7 7 
    7 7 5 7 5 5 7 7 7 7 7 7 7 7 7 7 
    7 6 5 5 7 5 7 5 5 7 7 7 7 7 7 7 
    7 7 6 5 7 7 5 5 6 7 7 7 7 7 7 7 
    7 7 7 6 7 7 5 6 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 5 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 5 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 6 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 5 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 5 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 6 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 5 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    `, true)
spawnIceCream()
spawnPlayer()
