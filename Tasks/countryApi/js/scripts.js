
async function getCountries() {
    try {
      const response = await fetch('https://restcountries.com/v3.1/all');
      const countries = await response.json();
      console.log(countries);

      const countrySelect = document.getElementById('countrySelect');
      countries.forEach(country => {
        const option = document.createElement('option');
        option.value = country.name.common;
        option.textContent = country.name.common;
        countrySelect.appendChild(option);
      });
    } catch (error) {
      console.error('Error fetching countries:', error);
    }
  }

  async function getCountryInfo() {
    const countrySelect = document.getElementById('countrySelect');
    const selectedCountry = countrySelect.value;

    if (!selectedCountry) {
      return;
    }

    try {
      const response = await fetch(`https://restcountries.com/v3.1/name/${selectedCountry}`);
      const countryInfo = await response.json();
      console.log(countryInfo);

      const countryInfoDiv = document.getElementById('countryInfo');
      const country = countryInfo[0];
      console.log(country);
      const flagUrl = country.flags.png;

      countryInfoDiv.innerHTML = `
        <h2>${country.name.common}</h2>
        <img src="${flagUrl}" alt="Flag">
        <p>Capital: ${country.capital[0]}</p>
        <p>Population: ${country.population}</p>
        <p>Region: ${country.region}</p>
        <p>Timezone: ${country.timezones}</p>
      `;
    } catch (error) {
      console.error(`Error fetching information for ${selectedCountry}:`, error);
    }
  }
  getCountries();