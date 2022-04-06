function myFunction() {
    var myMusic = {
    001: {
    artist: "Billy Joel",
    title: "Piano Man",
    release_year: 1973,
    formats: {
    1: "CD",
    2: "8T",
    3: "LP"
    },
    gold: true
    },
    002: {
        artist: "Haris Dzinovic",
        title: "Brko Man",
        release_year: 1966,
        formats: {
        1: "AD",
        2: "3T",
        3: "AD"
        },
        gold: false
    }
    };
    return myMusic;
    }
    myFunction()[2];
    module.exports = myFunction;