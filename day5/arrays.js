//DİZİLER


/*
boş bir dizi oluşturmak için
const arr=Array() 
console.log(arr)

const array=[]
console.log(array)

*/

let name=['ahsen','eser',24,2000]

let js ='JavaScript'
const splitIn= js.split('')
console.log(splitIn) //['J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't']

//modifying array

const countries=[
    'Türkiye',
    'Rusya',
    'Kore',
    'Almanya'
]
countries[2]='Amerika'
console.log(countries)

//boş array oluşturmak için
const arr = Array(6)
console.log(arr) // 6 değerlik boş bir dizi oluşturdu --> [empty × 6]

//fill-->statik bir değerle doldurma
const array = Array(6).fill('ahsen')
console.log(array) //dizinin içini doldurdu --> ['ahsen', 'ahsen', 'ahsen', 'ahsen', 'ahsen', 'ahsen']

//concat-->iki diziyi birleştirmek için
let names =['Ahsen','Sinem','Nisa','Emir']
let ages= [24,20,16,12]
let nameAndAges =names.concat(ages)
console.log(nameAndAges)

//lenght-->dizinin uzunluğunu bulma
const numbers=[56,4,5,8,9,22,366,49,56,11,44,79,5,892,0]
console.log(numbers.length)//15

//indexOf--> dizinin içinde istenen öğe var mı yok mu, varsa dizi döndürür yoksa -1 döndürür
const surnames=['Eser','Albayrak','Çalışkan','Yıldırım','Kanmaz']
console.log(surnames.indexOf('Bektaş'))//-1
console.log(surnames.indexOf('Çalışkan'))//2

let index=surnames.indexOf('Eser')
if(index==-1){
    console.log('this surname is does not exist in the array')
}else{
    console.log('this surname does exist in the array')
}//this surname does exist in the array

let index2=surnames.indexOf('Sivaslı')
index2 == -1 
?console.log('this surname is does not exist in the array'):console.log('this name does exist in the array')//this surname is does not exist in the array

//lastIndexOf-->dizinin son elemanını almak için
const numberss = [1, 2, 3, 4, 5, 3, 1, 2]
console.log(numberss.lastIndexOf(2)) // 7
console.log(numberss.lastIndexOf(0)) // -1
console.log(numberss.lastIndexOf(1)) //  6

//include--> dizinin içinde var mı yok mu true/false
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  console.log(webTechs.includes('Node'))  // true
  console.log(webTechs.includes('C'))     // false

//Array.isArray-->veri türünün dizi olup olmadığını kontrol eder
const numberArray = [1, 2, 3, 4, 5]
console.log(Array.isArray(numberArray)) // true
const number = 100
console.log(Array.isArray(number)) // false

//toString-->diziyi stringe dönüştürür
const surnamess=['Eser','Albayrak','Çalışkan','Yıldırım','Kanmaz']
console.log(surnamess.toString())//Eser,Albayrak,Çalışkan,Yıldırım,Kanmaz

//join-->dizi elemanlarını birleştirmek için kullanılır,birleştirilip string olarak geri döner
const names1 = ['Ahsen', 'Sinem', 'Nisa', 'Emir']
console.log(names.join()) // Ahsen,Sinem,Nisa,Emir
console.log(names.join('')) //AhsenSinemNisaEmir
console.log(names.join(' ')) //Ahsen Sinem Nisa Emir
console.log(names.join(' # '))//Ahsen # Sinem # Nisa # Emir

//slice--> istenilen aralıktaki ögeyi kesmek için başlangıç ve bitiş parametresleri belirlenir.
const numbers1 = [1,2,3,4,5]
  console.log(numbers1.slice()) // -> tümünü kopyalar
  console.log(numbers1.slice(0, numbers.length)) // tümünü kopyalar

//push-->sonuna öğe ekler
const arr1  = ['item1', 'item2','item3']
arr1.push('new item')
console.log(arr)// ['item1', 'item2','item3','new item']

//pop-->son elemanı siler
const numbers2 = [1, 2, 3, 4, 5]
numbers.pop() 
console.log(numbers2) // -> [1,2,3,4]

//shift-->ilk elemanı siler
const numbers3 = [1, 2, 3, 4, 5]
numbers.shift()
console.log(numbers3) // -> [2,3,4,5]

//unshift-->dizinin başına eleman ekleme
const numbers4 = [1, 2, 3, 4, 5]
numbers.unshift(0) 
console.log(numbers4) // -> [0,1,2,3,4,5]

//reverse--> diziyi ters çevirir
const numbers5 = [1, 2, 3, 4, 5]
numbers.reverse() 
console.log(numbers5) // [5, 4, 3, 2, 1]

//sort--> artan sırada sıralar
