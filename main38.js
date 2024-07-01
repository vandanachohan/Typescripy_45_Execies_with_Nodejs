// Creating a function  describe_city
function describe_city(city, country = "Pakistan") {
    console.log(`${city} is in ${country}`);
}
// Called the function
describe_city("Karachi");
describe_city("Lahore");
describe_city("Perth", "Westan Australia");
export {};
