// membuat suatu class yang General atau bisa dijadikan parent dari class lain
class Peliharaan { // parent class/object
    constructor(name, age) {
        console.info("Parent Executed");

        // membuat property
        this.name = name;
        this.age = age;
    }

    eat() {
        return `${this.name} lagi makan`;
    }
}

/*
    kita bisa memanfaatkan class yang general seperti "Peliharaan" untuk class "Kucing" dan "Anjing" yang mana mereka mekiliki
    sebuah kesamaan pada constructor, property dan function eat, dan agar kita tidak mengulangin code code yang seharusnya
    bisa disingkat, kita bisa menggunakan kata kunci "extends" dimana ketika kita membuat suatu class dan diikuti dengan
    kata kunci "extends" maka dia akan mewarisi suatu property ataupun method dari parent class nya

    contoh dibawah class "Kucing" dn "Anjing" akan mewarisi behavior (property, method) dari class "Peliharaan"
*/

// membuat class Kucing
class Kucing extends Peliharaan{ // child class/object
    // code yang berulang ulang
    /*
    constructor(name, age) {
        // membuat property
        this.name = name;
        this.age = age;
    }
    */

    // code yang berulang ulang
    /*
    eat() {
        return `${this.name} lagi makan`;
    }
    */

    /*
        kita juga bisa menimpa atau override sesuatu misalnya "constructor" dan ini hanya berdampak pada object saat ini saja
        disini kita akan menambahkan suatu property yaitu "lives", jadi kita menimpa constructor yang ada pada parent class
        yaitu "Peliharaan"
    */
    constructor(name, age, lives) {
        console.info("Child Executed");

        /*
            mengganti atau memasukan nilai baru property ke parent class yang akan diwariskan ke child class jadi kita tidak
            perlu melakukan

            this.name = name;
            this.age = age;

            karena kita sudah memiliki property ini pada parent class, jadi kita hanya perlu menimpa nya dengan nilai yang
            akan diberikan ketika object class Kucing dibuat, property name, age yang diwariskan oleh parent class akan
            diberikan nilai dari paramater constructor yang ada di class Kucing
        */
        super(name, age); /*
            pada saat function "super()" ini dipanggil maka constructor pada parent class akan dijalankan
        */

        // menambahkan suatu property baru
        this.lives = lives;
    }

    meong() {
        return "Meeonnng!";
    }
}

// membuat class Anjing
class Anjing extends Peliharaan { // child class/object
    // code yang berulang ulang
    /*
    constructor(name, age) {
        // membuat property
        this.name = name;
        this.age = age;
    }
    */

    // code yang berulang ulang
    /*
    eat() {
        return `${this.name} lagi makan`;
    }
    */

    gongong() {
        return "guk guk!!";
    }
}

// membuat object dari class Kucing
const kucing = new Kucing("Mbul", 4, 9);

console.info(kucing);
console.info(kucing.name);
console.info(kucing.eat());
console.info(kucing.meong());

// membuat object dari class Anjing
const anjing = new Anjing("Dwight", 10);
console.info(anjing);
console.info(anjing.name);
console.info(anjing.eat());
console.info(anjing.gongong());