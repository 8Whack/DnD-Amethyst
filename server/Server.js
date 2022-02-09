const express = require('express');
const cors = require('cors');
const app = express();

<<<<<<< HEAD
// require('dotenv').config();
// const {CONNECTION_STRING} = process.env;
// const Sequelize = require('sequelize');
// const sequelize = new Sequelize(CONNECTION_STRING, {
//     dialect: 'postgres',
//     dialectOptions: {
//         ssl: {
//             rejectUnauthorized: false
//         }
//     }
//   })

app.use(cors());
app.use(express.json());

savedChar = [{
    name: "G'resh Jakanto",
    charClass: 'Level 9 Bloodhunter',
    background: 'Haunted One',
    race: 'Tiefling Male',
    alignment: 'Chaotic Neutral',
    experience: 'Milestone',
    str: '14',
    dex: '12',
    con: '15',
    int: '13',
    wis: '14',
    cha: '10',
    strMod: '+2',
    dexMod: '+1',
    conMod: '+2',
    intMod: '+1',
    wisMod: '+2',
    chaMod: '+0',
    insp: true,
    prof: '4',
    passPercept: '12',
    strSavProf: true,
    dexSavProf: false,
    conSavProf: false,
    intSavProf: true,
    wisSavProf: true,
    chaSavProf: false,
    strSav: '6',
    dexSav: '1',
    conSav: '2',
    intSav: '5',
    wisSav: '6',
    chaSav: '0',
    acroProf: false,
    AHProf: false,
    arcProf: true,
    athProf: true,
    decProf: false,
    hisProf: false,
    insProf: false,
    intProf: false,
    invProf: false,
    medProf: false,
    natProf: false,
    percProf: false,
    perfProf: false,
    persProf: false,
    relProf: false,
    sliProf: false,
    steProf: false,
    surProf: true,
    acro: '1',
    AH: '2',
    arc: '5',
    ath: '6',
    dec: '0',
    his: '1',
    ins: '2',
    intel: '0',
    inv: '1',
    med: '2',
    nat: '1',
    perc: '2',
    perf: '0',
    pers: '0',
    rel: '1',
    sli: '1',
    ste: '1',
    sur: '6',
    armor: '11',
    init: '1',
    speed: '30',
    hp: '81',
    tempHP: '5',
    hitDice: '9 d10',
    suc1: true,
    suc2: true,
    suc3: false,
    fail1: true,
    fail2: false,
    fail3: false,
    attacks: '\n' +
      '                    \n' +
      '                <li>Dagger: Hit/DC = +6, Damage = 1d4+2</li><li>Greatsword: Hit/DC = +6, Damage = 2d6+2</li><li>Unarmed Strike: Hit/DC = +6, Damage = 3</li>',
    spells: '\n' +
      '                   \n' +
      '                <li>Eldritch Blast: Max Level: Cantrip</li><li>Hellish Rebuke: Max Level: 1<input type="checkbox"><input type="checkbox"></li><li>Scorching Ray: Max Level: 2<input type="checkbox"><input type="checkbox"></li>',
    equipment: '\n' +
      '                    \n' +
      '                <li><input class="skills" type="number">Ring of Spell Turning</li><li><input class="skills" type="number">Armor of Force Resistance</li><li><input class="skills" type="number">Demonology Books</li><li><input class="skills" type="number">Holy Symbol</li><li><input class="skills" type="number">Rope, 50ft</li>',
    personality: '\n' +
      '                    \n' +
      '                <li>Somber</li><li>Quick to Anger</li><li>Insolent</li><li>Cocky</li><li>Always willing to fight </li>',
    ideals: '\n' +
      '                    \n' +
      '                <li>Monsters are Evil</li><li>Evil should be Purged</li>',
    bonds: '\n' +
      '                    \n' +
      '                <li>Revenge for Lost Lover</li><li>Sworn to serve Vaius, the Demon King</li>',
    flaws: '\n' +
      '                    \n' +
      '                <li>Stubborn</li><li>Sees the worst in others</li>',
    profAndLang: '\n' +
      '                    \n' +
      "                <li>Light &amp; Medium Armor</li><li>Shields</li><li>Firearms, Martial &amp; Simple Weapons</li><li>Alchemist's Supplies</li>",
    featAndTrait: '\n' +
      '                    \n' +
      '                <li>Hellish Resistance</li><li>Infernal Legacy</li><li>Darkvision</li>'
  }]

app.post('/api/save/', (req, res)=>{
=======
app.use(cors());
app.use(express.json());

savedChar= []

app.post('/api/save', (req, res)=>{
>>>>>>> 41871d6ac7edb82cf2eca594723326774c7120df
    console.log(req.body)
    savedChar.push(req.body)
    console.log(savedChar)
    res.status(200).send(savedChar)
    })


<<<<<<< HEAD
app.get('/api/example/', (req, res)=>{
=======
app.get('/api/example', (req, res)=>{
>>>>>>> 41871d6ac7edb82cf2eca594723326774c7120df
    let randomIndex = Math.floor(Math.random() * savedChar.length);
  let randomChar = savedChar[randomIndex];
    res.status(200).send(randomChar)
})

<<<<<<< HEAD
// app.post('/seed', ()=>{
//     sequelize.query(`
            
//             drop table if exists exampleChars;

//             create table exampleChars (
//                 char_id serial primary key, 
//                 name varchar
//             );`
//             )
    




=======
>>>>>>> 41871d6ac7edb82cf2eca594723326774c7120df
app.listen(4000, ()=> console.log('server running on 4000'))