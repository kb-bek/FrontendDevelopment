
function ipProtocol() {
    document.getElementById("page-name").innerHTML = 'IP Протокол';
    document.getElementById("content").innerHTML = `
    <div class="ip" style="margin-left: 100px; font-family: Arial, Helvetica, sans-serif; width: 500px; padding: 10px; border: 1px solid gainsboro; border-radius: 5px; box-shadow: 5px 5px 10px gainsboro;">
        <h3 style="color: red;">Вариант 2</h3>

        
        <p><strong>Cуроо:</strong>Төмөндө бир хосттун IP адреси жана subnet mask берилген. Бул хостко туура келген
            subnet адрести аныктагыла. Бул subnet ичинде максимум канча хост болушу
            мүмкүн?Хосттор үчүн IP адрестердин диапазонун аныктап бергиле.Чыгаруу жолун
            толук жазып, жообуңузду түшүндүрүңүз.
            </p>


        
        <strong>Жооп: </strong><pre>
            subnet mask: 255.255.192.0
            Максимум хост саны n = 262142
            subnet address: 17.12.0.0
            host 1 address: 17.12.0.1
            host n address: 17.12.63.254
        </pre>
    </div>
    `;
    document.getElementById("countries").style.display = "none";
}


function questions() {
    document.getElementById("page-name").innerHTML = 'Жалпы суроолор';
    document.getElementById("content").innerHTML = `
    <div class="ip" style="margin-left: 100px; font-family: Arial, Helvetica, sans-serif; width: 500px; padding: 10px; border: 1px solid gainsboro; border-radius: 5px; box-shadow: 5px 5px 10px gainsboro;">
        <h3 style="color: red;">Вариант 2</h3>

        
        <p><strong>Cуроо:</strong>CSS стилдеринин жардамы менен таблицалардын көрүнүшүн башкаруу (CSS Tables)
            тууралуу баяндап бериңиз. Мисал келтириңиз
            </p>


        
        <p><strong>Жооп: </strong>CSSтин жардамы менен биз таблицанын коп корунушторун озгортуп алабыз. Мисалы: <span style="color: blue;">border</span> аттуу касиети мн биз таблицанын чек арасынын олчомун, тусун жана формасын озгортсок болот. <span style="color: blue;">background-color</span> менен таблицанын фонунун тусун озгортсо болот, ал эми color касиети менен таблицанын ичиндеги жазуулардын тусун озгортсо болот. Дагы <span style="color: blue;">border-collapse</span> касиети таблица чектерин бир чекке жыйыштыруу керекпи же жокпу аныктайт.
        Ошондой эле таблицанын ички жана боштуктарынын олчомун <span style="color: blue;">margin</span> (сырткы) , <span style="color: blue;">padding</span> (ички) касиеттери менен озгорто алабыз. Ал эми таблицанын ичиндеги жазуулардын шрифттерин <span style="color: blue;">font-family</span> касиети аркылуу озубуз каалаган шрифтке озгортсок болот, дагы <span style="color: blue;">font-size</span> менен жазуунун олчомун озгорто алабыз. Ушул касиеттер негизгилер деп ойлойм дагы мындан башка таблицанын стилдерин озгорту учун коп касиеттер бар 
        </p>
    </div>
    `;
    document.getElementById("countries").style.display = "none";
}

function fetchHanler() {
    const apiKey = 'dpaBTeX3fXru17thK2T-tp3oQ2pA_9';
    const url = 'https://data-api.oxilor.com/rest/countries';

    const headers = new Headers({
        'Authorization': `Bearer ${apiKey}`
      });

    fetch(url,{
        method: 'GET',
        headers: headers,
    }) 
        .then(function(res) { 
            return res.json();
        })

        .then(function(data){
            const countriesDiv = document.getElementById("countries");
            for (let d in data) {
                
                const item = document.createElement('div');
                item.classList.add('country-card');
                item.innerHTML = `
                    <span><strong>Олконун аты: </strong>${data[d].name}</span><br>
                    <span><strong>Олконун коду: </strong>${data[d].countryCode}</span><br>
                    <span><strong>Убакыт зонасы: </strong>${data[d].timezone}</span><br>
                    <span><strong>Континент: </strong>${data[d].parentRegions[0].name}</span><br>
                    <span><strong>Калкынын саны: </strong>${data[d].population}</span><br>
                    
                `;
                countriesDiv.appendChild(item);
            }
        })

}


fetchHanler();


