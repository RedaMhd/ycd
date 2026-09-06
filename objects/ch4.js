const pr = require('prompt-sync')();

let point = {
    x : 3,
    y : 5,
    chage : function(pn, val){
        this[pn] = val;
    }
}

point.x = 44;
console.log('x:' + point.x + ' y:' + point.y);
point.chage('x', 11);
point.chage('y', 0);
console.log('x:' + point.x + ' y:' + point.y);