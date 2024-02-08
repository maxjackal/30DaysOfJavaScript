//KOŞULLAR

/*
if(condition){

}
*/

let num=3
if(num>0){
    console.log(`${num} is a positive number`)
} //3 is a positive number

/*
if(condition){

}else{

}
 */

let number=-5
if(num>5){
    console.log(`'${number} is a positive'`)
} else{
    console.log(`'${number} is a negative'`)
}

let result= prompt('2+5 kaç yapar')
if(result==7){
    console.log('doğru cevap')
}else{
    console.log('hatalı cevap')
}
//SWİTCH
/*
switch(caseValue){
  case 1:
    code
    break
  case 2:
    code
   break
  case 3:
    code
   break
  default:
    code
}
*/
switch (result) {
    case '7':
        console.log('sonuç doğru')
        break
    case '9':
        console.log('hatalı tekrar dene')
        break
    default:
        console.log('hatalı cevap-switch')
        break
}

