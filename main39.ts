// Describe Function with paremeters which retun a value is string

function city_country(city:string, country:string) : string{
    return `${city} ,${country}`;
}
// Calling a Function and print the returned value
console.log(city_country("Karachi", "Pakistan"));

console.log(city_country("Tokyo", "Japan"));

console.log(city_country("New York", "USA"));


