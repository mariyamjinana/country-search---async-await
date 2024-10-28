const search = async()=>{
    console.log(country.value);
    const response = await fetch(`https://restcountries.com/v3.1/name/${country.value}?fullText=true`)
    response.json().then((data)=>{

        console.log(data);
        common = data[0].name.common
        console.log(common);

        official = data[0].name.official
        console.log(official);

        for(var curr in data[0].currencies)
        {
            var currencyName = data[0].currencies[curr].name
            var symbol = data[0].currencies[curr].symbol
        }
        console.log(currencyName);
        console.log(symbol);
        
        capital = data[0].capital[0]
        console.log(capital);
        // console.log(data[0].languages);
        let language =[]
        for(var lang in data[0].languages)
        {
            language.push(data[0].languages[lang])
        }
        console.log(language);
        
        borders = data[0].borders
        console.log(borders);

        area = data[0].area
        console.log(area);

        maps = data[0].maps.googleMaps
        console.log(maps);

        population = data[0].population
        console.log(population);


        timezones = data[0].timezones
        console.log(timezones);

        continents = data[0].continents
        console.log(continents);

        flag = data[0].flags.png
        console.log(flag);

        result.innerHTML = ` <div class="card rounded-0" style="width: 18rem;" >
                <img src="${flag}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title text-center">${official}</h5>
                  <ul class="list-group">
                    <li class="list-group-item">NAME : ${common}</li>
                    <li class="list-group-item">CURRENCY : ${currencyName}<br> SYMBOL : ${symbol}</li>
                    <li class="list-group-item">CAPITAL : ${capital}</li>
                    <li class="list-group-item">LANGUAGES : ${language}</li>
                    <li class="list-group-item">BORDERS : ${borders}</li>
                    <li class="list-group-item">AREA : ${area}</li>
                    <li class="list-group-item">POPULATION : ${population}</li>
                    <li class="list-group-item">TIME ZONE : ${timezones}</li>
                    <li class="list-group-item">CONTINENTS : ${continents}</li>
                    <li class="list-group-item"><a href=${maps}>MAPS</a></li>


                  </ul>
                </div>
              </div>`
    })
    
}

 
//common official currency name symbol capital  languages borders area maps(google) population timezones continent flags(png) 