// PLEASE DON'T change function name


module.exports = function makeExchange(currency) {
    let change = {};
    let nominal = ["H", "Q", "D", "N", "P"]
    let coins = [50,25,10,5,1];
    if(currency <= 0) return {};
    if(currency > 10000) return  {error: "You are rich, my friend! We don't have so much coins for exchange"}
    for (let i=0; i<coins.length; i++) {
        let money = Math.floor(currency/coins[i])
        if (money>0) {
            change[nominal[i]] = money;
            currency = currency - money * coins[i];
        }
    }
    return change;
}
