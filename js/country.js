const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => console.log(data))
}
loadCountries();

const displaCountries = countries => {
    for (const country of countries) {
        console.log('country');

    }

}