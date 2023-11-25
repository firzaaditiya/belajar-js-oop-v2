/*
    kita bisa membuat sebuah object/instance menggunakan function, ini dinamakan "Constructor Function", dan biasanya ketika
    kita ingin membuat object nya kita menggunakan kata kunci "new" atau disebut new operator

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new

    setiap kita memanggil kata kunci "new" pada suatu function constructor

    contoh : new Color()

    Color() adalah constructor function misalnya, maka kata kunci "new" ini akan membuat beberapa hal
    1.  dia akan membuat object kosong atau disebut new Instance, dan new Instance tersebut akan berada di dalam prototype
        atau seolah olah instance itu registrasi ke javscript sebagai prototype bawaan dan jika kita menjalankan suatu
        constructor function / instance object dengan meberikan suatu argument atau binding sebuah data maka kita bisa
        mengaksesnya menggunakan kata kunci "this"
*/

// membuat constructor function
function Color(r, g, b) {
    // membuat property
    this.red = r;
    this.green = g;
    this.blue = b;
}

// ini akan Undefined
console.info(Color(11, 199, 4));

// namun ketika kita membuatnya dengan kata kunci "new" maka akan tampil sebuah object dari "Color"
console.info(new Color(11, 199, 4));

// menambahkan function ke dalam protype instance "Color"
Color.prototype.rgb = function() {
    // destructuring
    const {red, green, blue} = this;

    return `rgb(${red}, ${green}, ${blue})`;
};

Color.prototype.hex = function() {
    // destructuring
    const {red, green, blue} = this;

    return "#" + ((1 << 24) + (red << 16) + (green << 8) + blue).toString(16).slice(1);
};

// mengakses function
console.info(new Color(11, 199, 4).rgb());
console.info(new Color(11, 199, 4).hex());

// membuat object instance Color, dan disimpan ke variable
const objColor = new Color(255, 50, 27);

console.info(objColor.rgb());

/*
    pada protorype memiliki function yang sudah ditambahkan diatas, karena dia ditambahkan melewati "prototype" maka dia
    tidak akan menempel/melekat pada object property melaikan melekat pada prototype nya
*/
console.info(objColor);

// membuat function color rgba
Color.prototype.rgba = function(a = 1.0) {
    // destructuring
    const {red, green, blue} = this;

    return `rgba(${red}, ${green}, ${blue}, ${a})`;
};

// mengubah warna background body, dengan warna yang berasal dari function "rgba" dari instance "Color"
document.body.style.backgroundColor = new Color(255, 10, 125).rgba(0.5);

/*
    disarankan menggunakan constructor function dibandingkan dengan factory function

    karena pada factory function kita harus membuat sebuah object baru dimana ketika kita bandingkan function antara keduanya
    maka akan menghasilkan "false"

    namun ketika kita menggunakan constructor function maka dia akan menghasilkan true
*/

function convertColor(r, g, b) {
    // membuat object
    const color = {};

    // property
    color.red = r;
    color.green = g;
    color.blue = b;

    // mendefinisikan function rgb
    color.rgb = function() {
        // destructuring
        const {red, green, blue} = this;

        return `rgb(${red}, ${green}, ${blue})`;
    };

    // mendefinisikan function rgb to hex
    color.hex = function() {
        // destructuring
        const {red, green, blue} = this;

        return "#" + ((1 << 24) + (red << 16) + (green << 8) + blue).toString(16).slice(1);
    };

    return color;
}

const color1 = convertColor(11, 22, 33);
const color2 = convertColor(11, 22, 33);

/*
    membandingkan function "rgb" dari object yang dihasilkan dari factory function, dia akan menghasilkan "false" karena
    factory function akan membuat sebuah object baru yang mana tidak sama
*/
console.info(color1.rgb === color2.rgb); // false

const color3 = new Color(33, 41, 55);
const color4 = new Color(33, 44, 55);

/*
    membandingkan function "rgb" dari object yang dihasilkan dari constructor function, dia akan menghasilkan "true" karena
    sama sama berasal dari parent utama yaitu "Color" atau sumber object nya sama ada didalam prototype "Color"
*/
console.info(color3.rgb === color4.rgb) // true