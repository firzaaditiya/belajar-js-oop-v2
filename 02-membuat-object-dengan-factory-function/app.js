// sebuah function untuk mengubah RGB menjadi hex
const hex = (r, g, b) => {
    // code untuk mengkonversi RGB ke hex
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};

// mengembalikan rgb
const rgb = (r, g, b) => {
    return `rgb(${r}, ${g}, ${b})`;
};

// rgb ke hex
console.info(hex(106, 22, 90));

// return format rgb untuk style css
console.info(rgb(106, 22, 90));

// membuat factory function
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

// implementasi
const color = convertColor(123,123,123);

console.info(color);

// menampilkan nilai
console.info("RGB : ", color.rgb());
console.info("HEX : ", color.hex());