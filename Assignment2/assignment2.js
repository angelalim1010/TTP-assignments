
Array.prototype.myEach = function(callback) {
    for(let i = 0; i < this.length; i++){
        callback(this[i]);
    }
};

Array.prototype.myMap = function(callback) {
    let newarray = this;
    for (let i = 0; i < this.length; i++) {
        newarray[i] = callback(this[i]);
    }
    return newarray;
}

Array.prototype.myFilter = function (callback) {
    let newArray = [];
    for(let i = 0; i < this.length; i++){
        if(callback(this[i]) == true){
            newArray.push(this[i]);
        }
    }
    return newArray;

};

Array.prototype.mySome = function(callback){
    for(let i = 0; i < this.length; i++){
        if(callback(this[i]) == true){
            return true;
        }
    }
    return false;
}



Array.prototype.myEvery = function(callback){
    for(let i = 0; i < this.length; i++){
        if(this.length == 0){
            return false;
        }
        if(callback(this[i]) != true){
            return false;
        }
    }
    return true;
}

Array.prototype.myReduce = function(callback){
    let val = this[0];
    for(let i = 1; i < this.length; i++){
        val = callback(this[i],val);
    }
    return val;
}

Array.prototype.myInclude = function(obj){
    for(let i = 0; i < this.length; i++){
        if(this[i] === obj){
            return true;
        }
    }
    return false;
}

Array.prototype.myIndexOf = function(obj){
    for(let i = 0; i < this.length; i++){
        if(this[i] === obj){
            return i;
        }
    }
    return -1;
}

Array.prototype.myPush = function(obj){
    this[this.length] = obj;
    return this;
}

Array.prototype.myUnshift = function(obj){
    for(let i = this.length; i >= 0; i--){
        if(this[i] == obj){
            return i;
        }
    }
    return -1;
}


Object.grabKeys = function(obj){
    let newArray = [];
    for (key in obj){
        newArray.myPush(key);
    }
    return newArray;
}

Object.grabValues = function (obj){
    let newArray = [];
    for (key in obj){
        newArray.myPush(obj[key])
    }
    return newArray;
}


//Test Cases for each function

function main(){
    let array = [1, 4, 9, 16];
    //Test for myEach
    array.myEach(console.log);
    //Test for myMap, returns an array
    const square = (x) => x*x;
    let newlist = array.myMap(square);
    console.log(newlist);
    //Test for myFilter, returns an array
    //callback
    function filterCallback(value) {
         return value >= 10;
    }
    let filterList = array.myFilter(filterCallback);
    console.log(filterList);

    //callback for mySome and myEvery, return boolean
    function isBiggerThan10(element, index, array) {
      return element > 10;
    }
    //Test for mySome
    let someList = array.mySome(isBiggerThan10);
    console.log(someList);
    //Test for myEvery
    let everyList = array.myEvery(isBiggerThan10);
    console.log(everyList);

    //Test for myReduce, return int
    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    let reduceVal = array.myReduce(reducer);
    console.log(reduceVal);
    //Test for myInclude,returns bool
    console.log(array.myInclude(2));
    //Test for myIndexOf, return int
    console.log(array.myIndexOf(1));
    //Test for myPush, return array
    console.log(array.myPush(10));
    //Test for myUnshift, return int
    console.log(array.myUnshift(16));

    let struct = {
      "college": "hunter",
      "city": "manhattan"
    };
    //Test for grabKeys
    console.log(Object.grabKeys(struct));
    //Test for grabValues
    console.log(Object.grabValues(struct));
}

main();
