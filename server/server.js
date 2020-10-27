const path = require('path');
const fs = require('fs');
const request = require('request');
const chirpPath = path.join(__dirname, '../chirps.json');


let chirps = [
    {
        name: "Anthony",
        message: "All thesesd[bosb slibs sOuhORW borhbn aoidtrbnl"
    },
    {
        name: "Roy",
        message: "Why do i aejfgrb eoihw rogwr rg gg rgsrg sef frg oihjb"
    },
    {
        name: "Chandler",
        message: "Every time i am aeof ef rffg e wtrw gw r gwr gwrgetn sw rg"
    },
    {
        name: "Arthur",
        message: "You do know that i sjfgwv qer fqeeqgwrg wrgrwg erfq ewfvwrv"
    },
    {
        name: "Ryan",
        message: "I will always walk to rg wrg thdend steh tjyiky mdgrs fwaw wUG iugv"
    }
];


chirps = JSON.stringify(chirps)
fs.writeFile(chirpPath, JSON.stringify(chirps))