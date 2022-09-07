function matrixGenerator(matrixSize,grassCount,grEatCount,predatorCount){
          let matrix = [];

            for(let i = 0; i < matrixSize;i++){
                    matrix[i] = []
                for(let j = 0; j < matrixSize; j++){
                        matrix[i][j] = 0;
                }
            }

            for(let i = 0 ; i < grassCount; i++ ){
                  
                 let x  = Math.floor(Math.random() * matrixSize)
                 let y  = Math.floor(Math.random() * matrixSize)

                       if(matrix[y][x] == 0){
                           matrix[y][x] = 1;
                       }

            }

            for(let i = 0 ; i < grEatCount; i++ ){
                  
               let x  = Math.floor(Math.random() * matrixSize)
               let y  = Math.floor(Math.random() * matrixSize)

                     if(matrix[y][x] == 0){
                         matrix[y][x] = 2;
                     }

          }
          for(let i = 0 ; i < predatorCount; i++ ){
                  
               let x  = Math.floor(Math.random() * matrixSize)
               let y  = Math.floor(Math.random() * matrixSize)

                     if(matrix[y][x] == 0){
                         matrix[y][x] = 3;
                     }

          }


       return matrix ;     
}



let matrix = matrixGenerator(20,15,20,25);
console.log(matrix);

var side = 35;

var grassArr = []
var grassEaterArr = []
var predatorArr = []


function setup(){
    frameRate(10)
     createCanvas(matrix[0].length * side, matrix.length * side);

       for(var y = 0 ; y < matrix.length ;y++){
            for(var x = 0; x < matrix[y].length;x++){
                           if(matrix[y][x] == 1){
                                var gr = new Grass(x,y)

                                grassArr.push(gr)
                           }else  if(matrix[y][x] == 2){
                              var grEat = new GrassEater(x,y)

                              grassEaterArr.push(grEat)
                         }else  if(matrix[y][x] == 3){
                              var pre = new Predator(x,y)

                              predatorArr.push(pre)
                         }
            }
       }
}

function draw(){
       for(var y = 0; y < matrix.length; y++){
            for(var x = 0; x < matrix[y].length;x++){
                     if(matrix[y][x] == 1){
                            fill("green")
                     }else if(matrix[y][x] == 2){
                         fill("yellow")
                  }else if(matrix[y][x] == 3){
                    fill("red")
             }else {
                          fill("gray")
                     }
                     rect(x  * side ,y * side , side , side)
            }
       }

       for(var i in grassArr){
             grassArr[i].mul()
       }

       for (let j in grassEaterArr) {
          grassEaterArr[j].mul()
          grassEaterArr[j].eat()
      }

      for (let j in predatorArr) {
          predatorArr[j].mul()
          predatorArr[j].eat()
      }

}

class AmenaGrassEater {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 25;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

}        

function AddGrassEater() {
    for (let i = 0; i < 1; i++) {
        let x = Math.floor(random(matrixSize));
        let y = Math.floor(random(matrixSize));
        matrix[y][x] = 2;
    }
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 2) {
                let eater = new GrassEater(x, y);
                grassEaterArr.push(eater);
            }

        }
    }
}

function AddAmenaEater() {
    for (let i = 0; i < 1; i++) {
        let x = Math.floor(random(matrixSize));
        let y = Math.floor(random(matrixSize));
        matrix[y][x] = 3;
    }
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 3) {
                let amena = new AmenaGrassEater(x, y);
                amenaEaterArr.push(amena);
            }

        }
    }
}

