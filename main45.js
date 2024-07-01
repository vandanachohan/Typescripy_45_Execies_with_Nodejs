function create_car(manufacturer, model, ...options) {
    let car = {
        manufacturer,
        model
    };
    options.forEach(option => {
        let [key, value] = option.split(":");
        car[key.trim()] = value.trim();
    });
    return car;
}
let my_car = create_car("Toyota", "Corolla", "color: black", "Sunroof: True");
console.log(my_car);
export {};
