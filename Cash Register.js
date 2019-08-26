//INCOMPLETE

const CURRENCY = {
    "PENNY"         :     1,
    "NICKEL"        :     5,
    "DIME"          :    10,
    "QUARTER"       :    25,
    "ONE"           :   100,
    "FIVE"          :   500,
    "TEN"           :  1000,
    "TWENTY"        :  2000,
    "ONE HUNDRED"   : 10000,
}

function floatToIntArray (cid) {
    for (let i of cid) {
        i[1] = Math.round(i[1]*100) 
    }
    return cid;
}

function unfloatToArray (cidObject) {
	if (Array.isArray(cidObject)) {
		for (let i of cidObject) {
			i[1] = i[1]/100
		}
		return cidObject;
	} else {	

		let keys = Object.keys(cidObject)
		let values = Object.values(cidObject)
		for (let i in keys) {
			cidObject[keys[i]] = values[i]/100;
		}
		return Object.entries(cidObject);
	}
}

function totalCashInDrawer (cid) {
    let sum = 0;
    for (let i of cid) {
        sum += i[1];
    }
    return sum;
}

function checkStatus (changeNeeded,totalCash) {
    if (totalCash === changeNeeded) {
        return 'CLOSED'
    }
    if (totalCash > changeNeeded) {
        return 'OPEN'
    } 
    return 'INSUFFICIENT_FUNDS'   
}

function changeList (changeNeeded, cid) {
		if (changeNeeded < totalCashInDrawer(cid)) {
        return manageChange(changeNeeded, cid);
    }    
    if(changeNeeded === totalCashInDrawer(cid)) {
        return unfloatToArray(cid);
    }
    return [];
}

function checkCashRegister(price, cash, cid) {
		cid = floatToIntArray (cid);
    price = Math.round(price*100);
    cash = Math.round(cash*100);
    const changeNeeded = cash - price;
    const totalCash = totalCashInDrawer(cid);
    let status = checkStatus(changeNeeded, totalCash);
		let change = changeList(changeNeeded, cid);
    return {status: status,
            change: change}
}

function manageChange(changeNeeded, cid) {
	let changeObject = {};
	console.log([changeNeeded, cid])
	function loopThis () {
		for (let i = cid.length-1;i >= 0 ;i--) {
			if ((changeNeeded - CURRENCY[cid[i][0]] >= 0) && cid[i][1]  >  0) 
			{ changeNeeded -= CURRENCY[cid[i][0]];
				cid[i][1] 	 -= CURRENCY[cid[i][0]];				
				if(changeObject[cid[i][0]]) {
					changeObject[cid[i][0]] += CURRENCY[cid[i][0]];
				} else{
					changeObject[cid[i][0]]  = CURRENCY[cid[i][0]]; 
				}
				break;
			}
		}
	}
	if (changeNeeded > 0 && totalCashInDrawer(cid) < 0) {return []}
	while (changeNeeded > 0) {loopThis()}
	return unfloatToArray(changeObject)
}

checkCashRegister(19.50, 20, [
	["PENNY", 0.01],
	["NICKEL", 0],
	["DIME", 0],
	["QUARTER", 0],
	["ONE", 1],
	["FIVE", 0],
	["TEN", 0],
	["TWENTY", 0],
	["ONE HUNDRED", 0]])
//{status: "INSUFFICIENT_FUNDS", change: []}.