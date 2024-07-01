function create_car(
    manufacturer: string,
    model: string,
    ...options: string[]
  ): { manufacturer: string, model: string, [key: string]: string } {
    let car: { manufacturer: string, model: string, [key: string]: string } = {
      manufacturer,
      model
    };
  
    options.forEach(option => {
      let [key, value] = option.split(":");
      car[key.trim()] = value.trim();
    });
  
    return car;
  }
  
  let my_car = create_car("Toyota", "Corolla", "Color: Black", "Sunroof: True");
  console.log(my_car);
  
  