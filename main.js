function one() {
    const array = [5, 9, 8, 14, 6, 50, 7, 8, 10]
    const min = Math.min(...array)
    console.log(min)
}

function two() {
    const array = [5, 9, 8, 14, 6, 50, 7, 8, 10]
    const max = Math.max(...array)
    console.log(max)
}

function three() {
    const array = [5, 9, 8, 14, 6, 50, 7, 8, 10]
    var indexMin = array.indexOf(Math.min(...array))
    console.log(indexMin)
}

function four() {
    const array = [5, 9, 8, 14, 6, 50, 7, 8, 10]
    var indexMax = array.indexOf(Math.max(...array))
    console.log(indexMax)
}

function five() {
    const array = [5, 9, 8, 14, 6, 50, 7, 8, 10]
    let sum=0;
    for (let index = 1; index < array.length; index = index +2) {
       sum = sum + array[index];
        
    }
    console.log(sum)
}

function six() {
    let array = [5, 9, 8, 14, 6, 50, 7, 8, 10]
    console.log(array.reverse())
}

function seven() {
    const array = [5, 9, 8, 14, 6, 50, 7, 8, 10]
    let sum=0;
    for (let index = 0; index < array.length; index++) {
        if( array[index] % 2 != 0) {
            sum = sum + 1;
        }
    }
    console.log(sum)
}

function eight() {
    let array = [5, 9, 8, 14, 6, 50, 7, 8, 10 ]
    let array1 = []
    let array2 = []
        if( array.length % 2 == 0) {
            let a = array.length/2;
            let b = array.length 
            array1 = array.slice(0, a);
            array2 = array.slice(a, b);
            const newArray = array2.concat(array1);
            console.log(newArray)
        } else {
          /*   let a = Math.floor(array.length / 2);
            let b = a + 1;
            let c = b + 1;
            let d = array.length;
            array1 = array.slice(0, a);
            array1.unshift(array[b]);
            array2 = array.slice(c, d); */
            const newArray = array2.concat(array1);
            console.log(newArray)
        }    
}

function nine() {
    //bubble sort
    let array = [5, 9, 8, 14, 6, 50, 7, 8, 10 ]
        for(var i = 0; i < array.length; i++){        
          for(var j = 0; j < ( array.length - i -1 ); j++){           
            if(array[j] > array[j+1]){
              var temp = array[j]
              array[j] = array[j + 1]
              array[j+1] = temp
            }
          }
        }
        console.log(array);
       
}

function ten() {
    let array = [5, 9, 8, 14, 6, 50, 7, 8, 10 ]
        for(let i = 0; i < array.length - 1; i++){
           for(let j = i + 1; j < array.length; j++){
              if(array[j] > array[i]){
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
              }     
           }
        }
        console.log(array);
}

ten()