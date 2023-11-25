// membuat Class
class Color {
    // membuat constructor
    constructor(r, g, b, name) {
        /*
            constructor pada class adalah sebuah fungsi/function yang akan dijalankan pertama kali ketika suatu object atau
            object dari class nya dibuat, jadi ketika kita membuat object class "Color" maka disaat itu constructor ini akan
            dijalankan
        */

        // membuat property
        this.red = r;
        this.green = g;
        this.blue = b;
        this.name = name;

        // console.info("Hi, ini adalah proses constructor");
        // console.info(`${this.red}, ${g}`);
    }

    innerRGB() {
        // destructuring
        const {red, green, blue} = this;

        return `${red}, ${green}, ${blue}`;
    }

    /*
        membuat sebuah method, istilah method sebenarnya sama saja seperti function namun, ketika kita menyebutkan nya
        "method" maka function tersebut ada didalam suatu Class

        function/method ini akan secara otomatis ditambahkan ke Prototype dari class nya, seperti functin/method "rgb" ini
        dia akan langsung berada didalam Prototype class "Color"
    */
    rgb() {
        return `rgb(${this.innerRGB()})`;
    }

    colorName() {
        console.info(`The color name is ${this.name}`);
    }

    hex() {
        // destructuring
        const {red, green, blue} = this;

        return "#" + ((1 << 24) + (red << 16) + (green << 8) + blue).toString(16).slice(1);
    }

    rgba(a = 1.0) {
        // destructuring
        const {red, green, blue} = this;

        return `rgba(${this.innerRGB()}, ${a})`;
    }
}

// membuat object/instance dari class "Color"
const skyColor = new Color(185, 243, 252, "Sky");

console.info(skyColor);
console.info(skyColor.hex());
console.info(skyColor.rgb());
console.info(skyColor.rgba());
console.info(skyColor.colorName());

// merubah warna background body
document.body.style.backgroundColor = skyColor.rgba(0.5);