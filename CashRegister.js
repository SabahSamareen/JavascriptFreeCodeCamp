/*
Cash Register
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.
cid is a 2D array listing available currency.
The checkCashRegister() function should always return an object with a status key and a change key.
Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.
Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.
Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.
Currency Unit	Amount
Penny	$0.01 (PENNY)
Nickel	$0.05 (NICKEL)
Dime	$0.1 (DIME)
Quarter	$0.25 (QUARTER)
Dollar	$1 (ONE)
Five Dollars	$5 (FIVE)
Ten Dollars	$10 (TEN)
Twenty Dollars	$20 (TWENTY)
One-hundred Dollars	$100 (ONE HUNDRED)


See below for an example of a cash-in-drawer array:
[
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]


*/

function checkCashRegister(price, cash, cid) {
  var total_available=0, i=0, j=0, balance=cash-price, denom_value=[0.01,0.05,0.1,0.25,1,5,10,20,100];
  let return_object={
    "status":"",
    change:[] 
  };
  for(i;i<cid.length;i++){
    total_available+=cid[i][1];
  }
  if(total_available<balance){
    return_object["status"]="INSUFFICIENT_FUNDS";
    return_object.change=[];
  }
  else if(total_available==balance){
    return_object["status"]="CLOSED";
    return_object.change=cid;
  }
  else if(total_available>(balance)){
    return_object["status"]="OPEN";
    for(j=cid.length-1;j>=0;j--){
        var new_balance=0, value_used=0, value_left=cid[j][1];
        if(balance>=denom_value[j]){
            while(balance>=denom_value[j] && value_left>=denom_value[j]){
                new_balance=parseFloat((balance-denom_value[j]).toFixed(2));
                balance=new_balance;
                value_used+=denom_value[j];
                value_left-=denom_value[j];
            }
            return_object.change.push([cid[j][0],value_used]);
        }
    }
    if(balance>0){
      return_object["status"]="INSUFFICIENT_FUNDS";
      return_object.change=[];
    }
  }

  return return_object;
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
