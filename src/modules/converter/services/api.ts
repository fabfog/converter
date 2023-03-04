
export function fetchConversionRates() {
    // TODO move url from hard-coded to env variable
    return fetch('https://www.ecb.europa.eu/stats/eurofxref/eurofxref-daily.xml', {
        method: 'GET',
        headers: new Headers({
            'Accept': 'application/xml',
            'content-type': 'application/x-www-form-urlencoded',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT',
            'Access-Control-Allow-Headers': 'Content-Type',
        })
    })
    .then(response => {
        console.log('response is', response);
        return response.text();
    })
    .then(text => {
        console.log('text is', text);
        return {};
    })
}

/* I had problems with the fetch (opaque response, honestly I never encountered it)
* so I decided to mock the response to be able to go on with the remaining part of the challenge
*/
export function mockedFetchConversionRates() {
    return Promise.resolve({
        USD: 1.0615,
        JPY: 144.55,
        BGN: 1.9558,
        CZK: 23.508,
        DKK: 7.4412,
        GBP: 0.88530,
        HUF: 378.71,
        PLN: 4.7080,
        RON: 4.9235,
        SEK: 11.1430,
        CHF: 0.9958,
        ISK: 150.30,
        NOK: 11.0610,
        TRY: 20.0628,
        AUD: 1.5728,
        BRL: 5.5248,
        CAD: 1.4437,
        CNY: 7.3326,
        HKD: 8.3325,
        IDR: 16256.46,
        ILS: 3.8913,
        INR: 86.9185,
        KRW: 1383.24,
        MXN: 19.1997,
        MYR: 4.7513,
        NZD: 1.7069,
        PHP: 58.128,
        SGD: 1.4296,
        THB: 36.781,
        ZAR: 19.2837,
    })
}