module.exports = function toReadable (number) {
    numberStr = number.toString();
    let result;
    let l = numberStr.length;
    let nf = numberStr[0];
    let nt = numberStr[1];
    let ns = numberStr[2];
    var units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let tensBefTwenty = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  if (l === 1) {
    result =  units[number];
  }
  else if (l === 2) {
    if (number < 20) {
        result = tensBefTwenty[nt];
    } else { if (nt <= 0){
        result = tens[nf-2];
    } else {result = tens[nf-2] + ' '+ units[nt];}
    }
  } 
  else {
    var units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
 if (nt <= 0) { 
    if (ns <= 0){
    result = units[nf] + ' ' + "hundred"
    } else {result = units[nf] + ' ' + "hundred" + ' ' + units[ns];}
 }
    
 else if (nt == 1) {
    result = units[nf] + ' ' + "hundred" + ' ' + tensBefTwenty[ns];
    }
 else if (nt > 1) { 
    if (ns <= 0) {
        result = units[nf] + ' ' + "hundred" + ' ' + tens[nt-2];
    } 
    else if (ns > 0) {
        result = units[nf] + ' ' + "hundred" + ' ' + tens[nt-2] + ' ' + units[ns];
    } 
}
}
  return result;
}
