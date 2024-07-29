var currency = {
    //create function
    toDolar:function(rupees){
        //create local variable
        let dollar = rupees / 83.71;
        return dollar;
    },
    toYen:function(rupees){
        let yen = rupees * 1.83;
        return yen;
    },
    toPound:function(rupees){
        let pound = rupees / 107.85;
        return pound;
    }
}
module.exports = currency;