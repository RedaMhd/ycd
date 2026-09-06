let rect = {
    lon : 7,
    lar : 8,
    air : function(lon, lar){
        return (this.lon * this.lar);
    }
}

console.log(rect.air());

function calcAirRect(obj){
    return (obj.lon * obj.lar);
}

console.log(calcAirRect(rect));