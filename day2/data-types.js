//primitive data type---> bu veri tipleri değiştirilemez karşılaştırmalar yapılabilir
/*
Sayılar - Tamsayılar, kayan noktalar
Dizeler - Tek tırnak, çift tırnak veya geri tırnak işareti altındaki tüm veriler
Booleans - doğru veya yanlış değer
Boş - boş değer veya değer yok
Tanımsız - değeri olmayan bildirilen bir değişken
Sembol - Sembol yapıcısı tarafından oluşturulabilen benzersiz bir değer
*/
let num1=3
let num2=3

console.log(num1== num2) //true

let text='ahsen'
let text2='sinem'

console.log(text==text2) //false

//non primitive data type---> oluşturulduktan sonra düzenlenebilir

//dizi verilerden oluşan bir listedir.

let nums=[1,2,3,'ahsen',[1,2,5,8]]

nums[0] //1, indisler 0dan başlar

nums[3]=4 // dizinin 4. elemanını 4 yaptık primitivlerden farkı bu değiştirilebiilir

let user1={
    name:'ahsen',
    surname:'eser'
}

let user2={
    name:'ahsen',
    surname:'eser'
}

console.log(user1==user2)//false, referansları farklıdır bu yüzden karşılaştırma yapılamaz yanlış cıkar

let user3={
    name:'sinem',
    surname:'eser'
}
let user4= user3

console.log(user4==user3) // true burada user4 user3ten referans alıyor

/* DATA TYPES */

let age = 35
const gravity=9.81

//string methods 

let js = 'ahseneser'
console.log(js.length)// uzunlugunu bulmak için

let string ='Javascript'
let firstLetter=string[0]//ilk karakteri verir
console.log(string.toUpperCase)//BÜYÜK HARFE CEVİRİR

console.log(string.substring(0,4)) //Java
console.log(string.substring(4,10))//script//4ten sonra kaça kadar alsın
console.log(string.substring(4)) // script, burada 4ten sonraki tamamnını alır

'ahsen'.split('') // 'a','h','s','e','n'
'ahsen'.split('').reverse() // 'n','e','s','h','a'
'ahsen'.split('').reverse().join('') //'nesha'

  //boolean
let isLightOn=true
let isRaining=false 