/*
=    x=y
+=   x += y  x= x + y
-=   x -= y  x= x - y
=*   x *= y  x= x * y
/=   x /= y  x= x / y


arithmetic operators
Addition(+): a + b
Subtraction(-): a - b
Multiplication(*): a * b
Division(/): a / b
Modulus(%): a % b
Exponential(**): a ** b


comparison operators

== eşit x==y
!= eşit değil x!=y
> büyüktür x>y
< küçüktür x<y
<= küçük eşit x<=y
>= büyük eşit x>=y



logical operators 

&&  ve

|| ya da 

! olumsuz

ternary operators 
koşul yazarken kullanırız
*/

let a=4
let b=10
a+=b //a=

let check = 4<5 && 10 >5 //false
let chechk1 = 4<5 || 10 >5 //true

let isRaining=true
isRaining
? console.log('you need a umbrella')
: console.log('no need for a umbrella')

/* WINDOWS ALERT */
alert('bu bir test mesajı')
/*WINDOWS PROMPT */
prompt('açılan alert ekranında yazıyo, bir sayı giriniz:')
/* WINDOWS CONFIRM */
let isDelete= confirm('silmek istediğinize emin misiniz?')
console.log(
    isDelete ?'silme işlemi başarılı' :'silme işlemi iptal edildi'   
)


/* DATE OBJECT */

/*
getFullYear()   2000
getMonth()      2
getDate()       7
getHours()      14
getMinutes()    23
getSeconds()    41

*/

const date = new Date()
let year=date.getFullYear(),
month=date.getMonth(),
day=date.getDate(),
dayNumber=date.getDay(),
hour=date.getHours()

let months= [
    'ocak','şubat','mart','nisan','mayıs','haziran',
    'temmuz','ağustos','eylül','ekim','kasım','aralık'
]

let days =[
    'pazartesi','salı','çarşamba','perşembe','cuma','cumartes,','pazar'
]

let dateRead='${day} ${months[month]} ${year} ${days[dayNumber]}'
//7 Şubat 2024 Çarşamba


