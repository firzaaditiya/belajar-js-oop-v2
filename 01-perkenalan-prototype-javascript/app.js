/*
    https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

    sebenar ketika kita menggunakan sebuah array function, kita sudah menggunakan sebuah method yang ada di Prototype
    tipe data "Array"
*/

// membuat variable array
const arr = [1, 2, 3];

// menggunakan function pop()
arr.pop();

/*
    kita bisa lihat list apa saja function/property yang ada di prototype "Array" berada di __proto__

    bisa dibilang prototype ini adalah sebuah template dari struktur data array itu sendiri, jadi ketika kita menggunakan
    tipe data array maka variable/array itu sendiri telah mewarisi sebuah function/method yang telah dibuat untuk struktur
    data array, "Array" sebenarnya adalah sebuah object yang dibuat oleh JavaScript yang berisikan sebuah function/method

    jadi mekanisme protoytpe adalah kita bisa mewariskan sebuah function/property yang dimiliki oleh suatu object kepada
    object baru yang akan kita buat
*/
console.info(arr);

// melihat array prototype
console.info(Array.prototype);

// kita bisa menambahkan sebuah method pada variable "arr" yang akan disimpan di object array, namun tidak disimpan di proto
arr.hello = () => {
    console.info("Hello World");
};

console.info(arr);

// memanggil function hello
arr.hello();

/*
    ketika kita membuat sebuah variable dengan tipe data "Array" dan ingin menggunakan function hello yang sudah kita tambah
    diatas itu tidak akan bisa, karena kita membuat function "hello()" kepada variable itu saja "arr", jadi kita tidak akan
    bisa mengakses function itu, karena memang didefinisikan ke 1 object/variable saja bukan ke prototype yang dimana sifat
    nya bisa mewariskan ke object lain
*/
const arr2 = [3, 4, 6];

// arr2.hello(); ERROR

/*
    ketika kita mendefinisikan sebuah method "hello()" di prototype milik object "Array" maka kita bisa mewariskan method itu
    ke object yang akan kita buat dimasa depan karena kita mendefinisikan nya di Prototype dari object utama nya yaitu "Array"
    bukan ke object/variable baru yang kita buat dimasa depan
*/
Array.prototype.hello = () => {
    console.info("Hello World Prototype");
};

// membuat variable array baru
const arrBaru = [4, 7, 2, 7];

/*
    SUCCESS, karena pada prototype "Array" sudah kita tambahkan method "hello()"

    jadi ketika kita menambahkan sebuah method/property ke object utama nya, maka turunan nya akan memiliki nya juga, ketika
    kita membuat sebuah variable yang memiliki nilai "Array atau []" maka dia akan mewarisi apa yang dimiliki oleh object
    utamanya yaitu "Array", tidak hanya pada "Array" saja pada "String" dan yang lainnya juga memiliki nya
*/
arrBaru.hello();

/*
    kita juga tidak hanya bisa menambahkan sebuah protperty/method baru ke prototype, namun kita juga bisa menimpa/override
    function/method yang sudah ada, contohnya adalah "Array.pop()", dimana dia akan mengeluarkan/menghapus nilai yang paling
    akhir atau index paling akhir
*/
Array.prototype.pop = () => {
    console.info("POP dinonaktifkan");
};

// melihat nilai
console.table(arrBaru);

// menjalankan pop()
arrBaru.pop();

// nilai akan tetap sama
console.table(arrBaru);

/*
    javascript ini memiliki banyak sekali atau bisa dibilang javascript ini baik itu tipe data maupun struktur data lainnya
    semua bertipe data object, kenapa semua nya tipe data object atau merupakan sebuah object, karena setiap tipe data
    atau struktur data itu memiliki method dan property yang bisa kita manfaatkan dan kita juga bisa mengubah method atau
    property itu didalam object utama nya, sehingga object object baru yang kita definisikan akan langsung mewarisi
    behavior yang dimiliki oleh parent nya
*/