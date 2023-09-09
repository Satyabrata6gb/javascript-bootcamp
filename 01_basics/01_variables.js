const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // Not allowed
accountEmail = "hc@hc.com"
accountPassword = "12345678"
accountCity = "Bengaluru"

/*
Do not use Var
Because of issue in block scope and functional scope
 */

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

