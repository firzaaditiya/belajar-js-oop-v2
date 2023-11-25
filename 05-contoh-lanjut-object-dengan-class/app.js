// membuat Class
class Color {
    // membuat constructor
    constructor(r, g, b, name) {

        // membuat property
        this.red = r;
        this.green = g;
        this.blue = b;
        this.name = name;

        // memanggil function calcHSL
        this.calcHSL();
    }

    innerRGB() {
        // destructuring
        const {red, green, blue} = this;

        return `${red}, ${green}, ${blue}`;
    }

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

    /*
        fungsi untuk menghitung nilai rgb agar menjadi hsl (hue, saturation, lightness)
    */
    calcHSL() {
        // destructuring
        let {red, green, blue} = this;

        // Make r, g and b fractions of 1
        red /= 255;
        green /= 255;
        blue /= 255;

        // find greatest and smallest channel value
        let cmin = Math.min(red, green, blue),
            cmax = Math.max(red, green, blue),
            delta = cmax - cmin,
            hue = 0,
            saturation = 0,
            lightness = 0;

        if (delta == 0) {
            hue = 0;
        } else if (cmax == red) {
            // Red is Max
            hue = ((green - blue) / delta) % 6;
        } else if (cmax == green) {
            // Green is Max
            hue = (blue - red) / delta + 2;
        } else {
            // Blue is Max
            hue = (red - green) / delta + 4;
        }

        // Math.round = mengembalikan nilai angka yang dibulatkan ke bilangan bulat terdekat.
        hue = Math.round(hue * 60);

        // Make negative hues positive behind 360 derajat
        if (hue < 0) {
            hue += 360;
        }

        lightness = (cmax + cmin) / 2;

        // Calculate saturation
        saturation = (delta == 0) ? 0 : delta / (1 - Math.abs(2 * lightness - 1));

        // Multiply lightness and saturation by 100
        saturation = +(saturation * 100).toFixed(1);
        lightness = +(lightness * 100).toFixed(1);

        // menambah property baru
        this.hue = hue;
        this.saturation = saturation;
        this.lightness = lightness;
    }

    // fungsi/method untuk mendapatkan nilai format hsl
    hsl() {
        const {hue, saturation, lightness} = this;

        // mengembalikan format nilai hsl
        return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    }

    // fungsi untuk agar saturation dan lightness nya 100%
    fullySaturared() {
        const {hue, lightness} = this;

        // mengembalikan nilai format HSL dengan saturation 100 %
        return `hsl(${hue}, 100%, ${lightness}%)`;;
    }

    // function/method untuk memutar balik arah hue ke lawan arah agar warna nya menjadi kebalikan dari warna yang diberikan
    opposite() {
        const {hue, saturation, lightness} = this;

        const newHue = (hue + 180) % 360;

        return `hsl(${newHue}, ${saturation}%, ${lightness}%)`;
    }
}

// membuat object/instance dari class "Color"
const skyColor = new Color(185, 243, 252, "Sky");

console.info(skyColor);
console.info(skyColor.hsl());
console.info(skyColor.rgb());

// mengubah warna bg body dengan menggunakan format HSL
// document.body.style.backgroundColor = skyColor.hsl();

// mengubah warna bg body dengan menggunakan format HSL dengan saturation 100 %
// document.body.style.backgroundColor = skyColor.fullySaturared();
console.info(skyColor.fullySaturared());

// mengubah warna bg body dengan menggunakan format HSL dengan hasil dari nilai kebalikan warna hsl saat ini
document.body.style.backgroundColor = skyColor.opposite();
console.info(skyColor.opposite());