var tmz = tmz || {};

tmz.wd = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

//city,country,standard time zone(minutes),daylight saving time(minutes)
//right now the DST is not use
tmz.D = [
    //------ Asia ------- //
    {
        city:"Beijing",
        country:"China",
        stz:480,
        dst:0
    },
    {
        city:"Taipei",
        country:"China",
        stz:480,
        dst:0
    },
    {
        city:"HongKong",
        country:"China",
        stz:480,
        dst:0
    },
    {
        city:"Tokyo",
        country:"Japan",
        stz:540,
        dst:0
    },
    {
        city:"New Delhi",
        country:"India",
        stz:330,
        dst:0
    },
    {
        city:"Ankara",
        country:"Turkey",
        stz:120,
        dst:0  //(GMT is +3 in 5-10,need to +60)
    },
    {
        city:"Katmandu",
        country:"Nepal",
        stz:345,
        dst:0
    },
    {
        city:"Jakarta",
        country:"Indonesia",
        stz:480,
        dst:0
    },
    {
        city:"Bangkok",
        country:"Thailand",
        stz:420,
        dst:0
    },
    {
        city:"Kuala Lumpur",
        country:"Malaysia",
        stz:480,
        dst:0
    },
    {
        city:"Manila",
        country:"Philippines",
        stz:480,
        dst:0
    },
    {
        city:"Singapore",
        country:"Singapore",
        stz:480,
        dst:0
    },
    //------ /Asia ------- //

    //------ America ------- //
    {
        city:"St. Johns",
        country:"Canada",
        stz:-210,
        dst:0 //(GMT is -2.5 in month 4-10,need to +60)
    },
    {
        city:"Goose Bay",
        country:"Canada",
        stz:-240,
        dst:0 //(GMT is -3 in month 4-10,need to +60)
    },
    {
        city:"Toronto",
        country:"Canada",
        stz:-300,
        dst:0 //(GMT is -4 in month 4-10,need to +60)
    },
    {
        city:"Winnipeg",
        country:"Canada",
        stz:-360,
        dst:0 //(GMT is -5 in month 4-10,need to +60)
    },
    {
        city:"Calgary",
        country:"Canada",
        stz:-420,
        dst:0 //(GMT is -6 in month 4-10,need to +60)
    },
    {
        city:"Vancouver",
        country:"Canada",
        stz:-480,
        dst:0 //(GMT is -7 in month 4-10,need to +60)
    },
    {
        city:"Managua",
        country:"Nicaragua",
        stz:-360,
        dst:0
    },
    {
        city:"Guatemala",
        country:"Guatemala",
        stz:-360,
        dst:0
    },
    {
        city:"Tegucigalpa",
        country:"Honduras",
        stz:-360,
        dst:0
    },
    {
        city:"New York",
        country:"U.S.A.",
        stz:-300,
        dst:0 //(GMT is -4 in month 4-10,need to +60)
    },
    {
        city:"Chicago",
        country:"U.S.A.",
        stz:-360,
        dst:0 //(GMT is -5 in month 4-10,need to +60)
    },
    {
        city:"Salt Lake City",
        country:"U.S.A.",
        stz:-420,
        dst:0 //(GMT is -6 in month 4-10,need to +60)
    },
    {
        city:"Los Angeles",
        country:"U.S.A.",
        stz:-480,
        dst:0 //(GMT is -7 in month 4-10,need to +60)
    },
    {
        city:"Anchorage",
        country:"U.S.A.",
        stz:-540,
        dst:0 //(GMT is -8 in month 4-10,need to +60)
    },
    {
        city:"Honolulu",
        country:"U.S.A.",
        stz:-600,
        dst:0 //(GMT is -9 in month 4-10,need to +60)
    },
    {
        city:"San Jose",
        country:"Costa Rica",
        stz:-360,
        dst:0
    },
    {
        city:"San Salvador",
        country:"El Salvador",
        stz:-360,
        dst:0
    },
    {
        city:"Mexico City",
        country:"Mexico",
        stz:-360,
        dst:0 //(GMT is -5 in month 4-10,need to +60)
    },
    //------ /America ------- //

    //------ Europe ------- //
    {
        city:"Copenhagen",
        country:"Denmark",
        stz:60,
        dst:0 //(GMT is +2 in month 3-9,need to +60)
    },
    {
        city:"Brussels",
        country:"Belgium",
        stz:60,
        dst:0 //(GMT is +2 in month 3-9,need to +60)
    },
    {
        city:"Reykjavik",
        country:"Iceland",
        stz:0,
        dst:0
    },
    {
        city:"Budapest",
        country:"Hungary",
        stz:60,
        dst:0 //(GMT is +2 in month 3-9,need to +60)
    },
    {
        city:"Madrid",
        country:"Spain",
        stz:60,
        dst:0 //(GMT is +2 in month 3-9,need to +60)
    },
    {
        city:"Athens",
        country:"Greece",
        stz:60,
        dst:0 //(GMT is +2 in month 3-9,need to +60)
    },
    {
        city:"Warsaw",
        country:"Poland",
        stz:60,
        dst:0 //(GMT is +2 in month 3-9,need to +60)
    },
    {
        city:"Paris",
        country:"France",
        stz:60,
        dst:0 //(GMT is +2 in month 3-9,need to +60)
    },
    {
        city:"Helsinki",
        country:"Finland",
        stz:120,
        dst:0 //(GMT is +3 in month 4-10,need to +60)
    },
    {
        city:"London",
        country:"Great Britain",
        stz:0,
        dst:0 //(GMT is +1 in month 3-9,need to +60)
    },
    {
        city:"Oslo",
        country:"Norway",
        stz:60,
        dst:0 //(GMT is +2 in month 3-9,need to +60)
    },
    {
        city:"Prague",
        country:"Czech",
        stz:60,
        dst:0 //(GMT is +2 in month 3-9,need to +60)
    },
    {
        city:"Vatican City",
        country:"Vatican",
        stz:60,
        dst:0 //(GMT is +2 in month 3-9,need to +60)
    },
    {
        city:"Amsterdam",
        country:"Netherlands",
        stz:60,
        dst:0 //(GMT is +2 in month 3-9,need to +60)
    },
    {
        city:"Bratislava",
        country:"Slovak",
        stz:60,
        dst:0 //(GMT is +2 in month 3-9,need to +60)
    },
    {
        city:"Vienna",
        country:"Austria",
        stz:60,
        dst:0 //(GMT is +2 in month 3-9,need to +60)
    },
    {
        city:"Bern",
        country:"Switzerland",
        stz:60,
        dst:0 //(GMT is +2 in month 3-9,need to +60)
    },
    {
        city:"Stockholm",
        country:"Sweden",
        stz:60,
        dst:0 //(GMT is +2 in month 3-9,need to +60)
    },
    {
        city:"Rome",
        country:"Italy",
        stz:60,
        dst:0 //(GMT is +2 in month 3-9,need to +60)
    },
    {
        city:"Berlin",
        country:"Germany",
        stz:60,
        dst:0 //(GMT is +2 in month 3-9,need to +60)
    },
    {
        city:"Monaco-Ville",
        country:"Monaco",
        stz:60,
        dst:0 //(GMT is +2 in month 3-9,need to +60)
    },
    {
        city:"Luxembourg",
        country:"Luxembourg",
        stz:60,
        dst:0 //(GMT is +2 in month 3-9,need to +60)
    },
    {
        city:"Bucharest",
        country:"Roumania",
        stz:60,
        dst:0 //(GMT is +2 in month 3-9,need to +60)
    },

    //------ /Europe ------- //

    //------ Oceania ------- //
    {
        city:"Wellington",
        country:"New Zealand",
        stz:720,
        dst:0 //(GMT is +13 in month 3-10,need to +60)
    },
    {
        city:"Sydney",
        country:"Australia",
        stz:600,
        dst:0 //(GMT is +11 in month 4-9,need to +60)
    },
    {
        city:"Adelaide",
        country:"Australia",
        stz:570,
        dst:0 //(GMT is +9.5 in month 4-9,need to +60)
    },
    {
        city:"Perth",
        country:"Australia",
        stz:480,
        dst:0 //(GMT is +9 in month 3-9,need to +60)
    },
    {
        city:"Agana",
        country:"Guam",
        stz:600,
        dst:0
    },
    {
        city:"Luxembourg",
        country:"Luxembourg",
        stz:60,
        dst:0 //(GMT is +2 in month 3-9,need to +60)
    },
    //------ /Oceania ------- //

    //------ Africa ------- //
    {
        city:"Pretoria",
        country:"South Africa",
        stz:120,
        dst:0
    },
    {
        city:"Cairo",
        country:"Egypt",
        stz:120,
        dst:0
    }
    //------ /Africa ------- //

]