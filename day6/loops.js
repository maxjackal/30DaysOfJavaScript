// for Loop

for (let i =1; i<10;i++){
    console.log(i)
}

for (let i=0; i<=6;i++){
    console.log(`${i}*${i}=${i*i}`)
}

let names=['ahsen','sinem','nisa','emir','yusuf','gülhanım','durmuş']
for(let i=0;i<names.length;i++){
    console.log(names[i])
}

for(let name of names){
    console.log('Adı:',name)
}

//dizideki elemanları toplamak
const number=[1,5,7,6,2,30]
let sum=0
for(let i=0;i<number.length;i++){
    sum=sum+number[i]
}
console.log(sum)

//while Loop
let i = 0
while (i <= 5) {
  console.log(i)
  i++
}// 0 1 2 3 4 5

//do while Loop
let j = 0
do {
  console.log(j)
  j++
} while (j <= 5)

// 0 1 2 3 4 5

//break-->döngüyü kesmek için
for(let i = 0; i <= 5; i++){
    if(i == 3){
      break
    }
    console.log(i)
  } // 0 1 2

//continue-->belirlenen iterasyonu atlayıp devam etmek için
for(let i = 0; i <= 5; i++){
    if(i == 3){
      continue
    }
    console.log(i)
  } // 0 1 2 4 5