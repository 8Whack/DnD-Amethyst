//let {addPersonalityTrait} = require('./Functions.js')

function deleteElement(e){
    e.preventDefault()
    e.target.parentNode.remove()
}

function addPersonalityTrait (event){
    event.preventDefault();
    newPersonality = document.createElement('li')
    newPersonality.textContent = document.getElementById('inputPersonality').value

    let deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'X'
    deleteBtn.classList.add('right')
    deleteBtn.addEventListener('click', deleteElement)
    newPersonality.prepend(deleteBtn)

    document.getElementById('personalityList').appendChild(newPersonality);
    document.getElementById('inputPersonality').value = ''
}

document.getElementById('addPersonality').addEventListener('click', addPersonalityTrait)


function addIdeal (event){
    event.preventDefault();
    newIdeal = document.createElement('li')
    newIdeal.textContent = document.getElementById('inputIdeal').value
    document.getElementById('idealList').appendChild(newIdeal);
    document.getElementById('inputIdeal').value = ''
}

document.getElementById('addIdeal').addEventListener('click', addIdeal)

function addBond (event){
    event.preventDefault();
    newBond = document.createElement('li')
    newBond.textContent = document.getElementById('inputBond').value
    document.getElementById('bondList').appendChild(newBond);
    document.getElementById('inputBond').value = ''
}

document.getElementById('addBond').addEventListener('click', addBond)

function addFlaw (event){
    event.preventDefault();
    newFlaw = document.createElement('li')
    newFlaw.textContent = document.getElementById('inputFlaw').value
    document.getElementById('flawList').appendChild(newFlaw);
    document.getElementById('inputFlaw').value = ''
}

document.getElementById('addFlaw').addEventListener('click', addFlaw)

function addProfAndLang (event){
    event.preventDefault();
    newProf = document.createElement('li')
    newProf.textContent = document.getElementById('inputProfAndLang').value
    document.getElementById('profAndLangList').appendChild(newProf);
    document.getElementById('inputProfAndLang').value = ''
}

document.getElementById('addProfAndLang').addEventListener('click', addProfAndLang)

function addFeatAndTrait (event){
    event.preventDefault();
    newFeat = document.createElement('li')
    newFeat.textContent = document.getElementById('inputFeatAndTrait').value
    document.getElementById('featAndTraitList').appendChild(newFeat);
    document.getElementById('inputFeatAndTrait').value = ''
}

document.getElementById('addFeatAndTrait').addEventListener('click', addFeatAndTrait)

function addEquipment (event){
    event.preventDefault();
    newEquip = document.createElement('li')
    newEquip.textContent = document.getElementById('inputEquipment').value
    document.getElementById('equipmentList').appendChild(newEquip);

    newQty = document.createElement('input')
    newQty.classList.add('skills')
    newQty.type = 'number'
    newQty.value = document.getElementById('qtyEquipment').value;
    newEquip.prepend(newQty)

    document.getElementById('inputEquipment').value = ''
    document.getElementById('qtyEquipment').value = ''
}

document.getElementById('addEquipment').addEventListener('click', addEquipment)

function addAttack (event){
    event.preventDefault();
    newAttack = document.createElement('li')
    attackName = document.getElementById('attackName').value;
    attackBonus = document.getElementById('attackBonus').value;
    damage = document.getElementById('damage').value;
    newAttack.textContent = `${attackName}: Hit/DC = ${attackBonus}, Damage = ${damage}`

    document.getElementById('attackList').appendChild(newAttack)

    document.getElementById('attackName').value = ''
    document.getElementById('attackBonus').value = ''
    document.getElementById('damage').value = ''
}

document.getElementById('addAttack').addEventListener('click', addAttack)

function addSpell (event){
    event.preventDefault();
    newSpell = document.createElement('li');
    spellName = document.getElementById('spellName').value;
    level = document.getElementById('spellLevel').value;
    newSpell.textContent = `${spellName}: Max Level: ${level}`
    
    uses = +document.getElementById('spellUses').value;
    console.log(uses)
    for(i=0; i< uses; i++){
        use = document.createElement('input');
        use.type ='checkbox'
        newSpell.appendChild(use)
    }

    document.getElementById('spellsList').appendChild(newSpell)

    document.getElementById('spellName').value = ''
    document.getElementById('spellLevel').value = ''
    document.getElementById('spellUses').value = ''
}

document.getElementById('addSpell').addEventListener('click', addSpell)


function addArmor (event){
    event.preventDefault();
    armor = document.getElementById('armor').innerHTML
    amt = document.getElementById('armorScore').value
    if (amt === ''){
        armor = +armor + 1
    }else{
        armor = +armor + +amt
    }

    document.getElementById('armor').innerHTML = armor
    document.getElementById('armorScore').value = ''
}

document.getElementById('addArmor').addEventListener('click', addArmor)

function subArmor (event){
    event.preventDefault();
    armor = document.getElementById('armor').innerHTML
    amt = document.getElementById('armorScore').value
    if (amt === ''){
        armor = +armor - 1
    }else{
        armor = +armor - +amt
    }

    document.getElementById('armor').innerHTML = armor
    document.getElementById('armorScore').value = ''
}

document.getElementById('subArmor').addEventListener('click', subArmor)

function addInit (event){
    event.preventDefault();
    init = document.getElementById('init').innerHTML
    amt = document.getElementById('initScore').value
    if (amt === ''){
        init = +init + 1
    }else{
        init = +init + +amt
    }

    document.getElementById('init').innerHTML = init
    document.getElementById('initScore').value = ''
}

document.getElementById( 'addInit').addEventListener('click', addInit)

function subInit (event){
    event.preventDefault();
    init = document.getElementById('init').innerHTML
    amt = document.getElementById('initScore').value
    if (amt === ''){
        init = +init - 1
    }else{
        init = +init - +amt
    }

    document.getElementById('init').innerHTML = init
    document.getElementById('initScore').value = ''
}

document.getElementById('subInit').addEventListener('click', subInit)

function addSpeed (event){
    event.preventDefault();
    speed = document.getElementById('speed').innerHTML
    amt = document.getElementById('speedScore').value
    if (amt === ''){
        speed = +speed + 1
    }else{
        speed = +speed + +amt
    }

    document.getElementById('speed').innerHTML = speed
    document.getElementById('speedScore').value = ''
}

document.getElementById( 'addSpeed').addEventListener('click', addSpeed)

function subSpeed (event){
    event.preventDefault();
    speed = document.getElementById('speed').innerHTML
    amt = document.getElementById('speedScore').value
    if (amt === ''){
        speed = +speed - 1
    }else{
        speed = +speed - +amt
    }

    document.getElementById('speed').innerHTML = speed
    document.getElementById('speedScore').value = ''
}

document.getElementById('subSpeed').addEventListener('click', subSpeed)

function addHP (event){
    event.preventDefault();
    hp = document.getElementById('hp').innerHTML
    amt = document.getElementById('hpChange').value
    if (amt === ''){
        hp = +hp + 1
    }else{
        hp = +hp + +amt
    }

    document.getElementById('hp').innerHTML = hp
    document.getElementById('hpChange').value = ''
}

document.getElementById( 'hp+').addEventListener('click', addHP)

function subHP (event){
    event.preventDefault();
    hp = document.getElementById('hp').innerHTML
    amt = document.getElementById('hpChange').value
    if (amt === ''){
        hp = +hp - 1
    }else{
        hp = +hp - +amt
    }

    document.getElementById('hp').innerHTML = hp
    document.getElementById('hpChange').value = ''
}

document.getElementById( 'hp-').addEventListener('click', subHP)

function addTempHP (event){
    event.preventDefault();
    tempHP = document.getElementById('tempHP').innerHTML
    hp = document.getElementById('hp').innerHTML
    amt = document.getElementById('tempHPChange').value
    if (amt === ''){
        tempHP = +tempHP + 1
        hp = +hp + 1
    }else{
        tempHP = +tempHP + +amt
        hp = +hp + +amt
    }

    document.getElementById('tempHP').innerHTML = tempHP
    document.getElementById('hp').innerHTML = hp
    document.getElementById('tempHPChange').value = ''
}

document.getElementById( 'tempHP+').addEventListener('click', addTempHP)

function subTempHP (event){
    event.preventDefault();
    tempHP = document.getElementById('tempHP').innerHTML
    hp = document.getElementById('hp').innerHTML
    amt = document.getElementById('tempHPChange').value
    if (amt === ''){
        tempHP = +tempHP - 1
        hp = +hp - 1
    }else{
        tempHP = +tempHP - +amt
        hp = +hp - +amt
    }

    document.getElementById('tempHP').innerHTML = tempHP
    document.getElementById('hp').innerHTML = hp
    document.getElementById('tempHPChange').value = ''
}

document.getElementById( 'tempHP-').addEventListener('click', subTempHP)

function addHitDice (event){
    event.preventDefault();
    hd = document.getElementById('hitDice').innerHTML
    qty = document.getElementById('hitDiceQty').value
    shape = document.getElementById('dieShape').value
    if (qty === ''){
        alert('Please select the quanitity and shape of your hit dice.')
    }else{
        hd = `${qty} ${shape}`
    }

    document.getElementById('hitDice').innerHTML = hd
    document.getElementById('hitDiceQty').value = ''
    document.getElementById('dieShape').value = 'd4'
}

document.getElementById( 'addHitDice').addEventListener('click', addHitDice)

function addStr (event){
    event.preventDefault();
    str = document.getElementById('strDisplay').innerHTML
    
    amt = document.getElementById('strScore').value
    if (amt === ''){
        str = +str + 1
    }else{
        str = +str + +amt
    }
    if (str > 30){
        alert('Strength cannot be more than 30')
        str = 30;
    }
    mod = Math.floor((str-10)/2)
    if(mod > -1){
        mod = `+${mod}`
    }

    document.getElementById('strDisplay').innerHTML = str
    document.getElementById('strMod').innerHTML = mod
    document.getElementById('strScore').value = ''
}

document.getElementById( 'addStr').addEventListener('click', addStr)

function subStr (event){
    event.preventDefault();
    str = document.getElementById('strDisplay').innerHTML
    
    amt = document.getElementById('strScore').value
    if (amt === ''){
        str = +str - 1
    }else{
        str = +str - +amt
    }
    if (str < 0){
        alert('Strength cannot be less than 1')
        str = 1;
    }
    mod = Math.floor((str-10)/2)
    if(mod > -1){
        mod = `+${mod}`
    }

    document.getElementById('strDisplay').innerHTML = str
    document.getElementById('strMod').innerHTML = mod
    document.getElementById('strScore').value = ''
}

document.getElementById( 'subStr').addEventListener('click', subStr)

function addDex (event){
    event.preventDefault();
    dex = document.getElementById('dexDisplay').innerHTML
    
    amt = document.getElementById('dexScore').value
    if (amt === ''){
        dex = +dex + 1
    }else{
        dex = +dex + +amt
    }
    if (dex > 30){
        alert('Dexterity cannot be more than 30')
        dex = 30;
    }
    mod = Math.floor((dex-10)/2)
    if(mod > -1){
        mod = `+${mod}`
    }

    document.getElementById('dexDisplay').innerHTML = dex
    document.getElementById('dexMod').innerHTML = mod
    document.getElementById('dexScore').value = ''
}

document.getElementById( 'addDex').addEventListener('click', addDex)

function subDex (event){
    event.preventDefault();
    dex = document.getElementById('dexDisplay').innerHTML
    
    amt = document.getElementById('dexScore').value
    if (amt === ''){
        dex = +dex - 1
    }else{
        dex = +dex - +amt
    }
    if (dex < 0){
        alert('Dexterity cannot be less than 1')
        dex = 1;
    }
    mod = Math.floor((dex-10)/2)
    if(mod > -1){
        mod = `+${mod}`
    }

    document.getElementById('dexDisplay').innerHTML = dex
    document.getElementById('dexMod').innerHTML = mod
    document.getElementById('dexScore').value = ''
}

document.getElementById('subDex').addEventListener('click', subDex)

function addCon (event){
    event.preventDefault();
    con = document.getElementById('conDisplay').innerHTML
    
    amt = document.getElementById('conScore').value
    if (amt === ''){
        con = +con + 1
    }else{
        con = +con + +amt
    }
    if (con > 30){
        alert('Constitution cannot be more than 30')
        con = 30;
    }
    mod = Math.floor((con-10)/2)
    if(mod > -1){
        mod = `+${mod}`
    }

    document.getElementById('conDisplay').innerHTML = con
    document.getElementById('conMod').innerHTML = mod
    document.getElementById('conScore').value = ''
}

document.getElementById( 'addCon').addEventListener('click', addCon)

function subCon (event){
    event.preventDefault();
    con = document.getElementById('conDisplay').innerHTML
    
    amt = document.getElementById('conScore').value
    if (amt === ''){
        con = +con - 1
    }else{
        con = +con - +amt
    }
    if (con < 0){
        alert('Constitution cannot be less than 1')
        con = 1;
    }
    mod = Math.floor((con-10)/2)
    if(mod > -1){
        mod = `+${mod}`
    }

    document.getElementById('conDisplay').innerHTML = con
    document.getElementById('conMod').innerHTML = mod
    document.getElementById('conScore').value = ''
}

document.getElementById( 'subCon').addEventListener('click', subCon)

function addInt (event){
    event.preventDefault();
    int = document.getElementById('intDisplay').innerHTML
    
    amt = document.getElementById('intScore').value
    if (amt === ''){
        int = +int + 1
    }else{
        int = +int + +amt
    }
    if (int > 30){
        alert('Intelligence cannot be more than 30')
        int = 30;
    }
    mod = Math.floor((int-10)/2)
    if(mod > -1){
        mod = `+${mod}`
    }

    document.getElementById('intDisplay').innerHTML = int
    document.getElementById('intMod').innerHTML = mod
    document.getElementById('intScore').value = ''
}

document.getElementById( 'addInt').addEventListener('click', addInt)

function subInt (event){
    event.preventDefault();
    int = document.getElementById('intDisplay').innerHTML
    
    amt = document.getElementById('intScore').value
    if (amt === ''){
        int = +int - 1
    }else{
        int = +int - +amt
    }
    if (int < 0){
        alert('Intelligence cannot be less than 1')
        int = 1;
    }
    mod = Math.floor((int-10)/2)
    if(mod > -1){
        mod = `+${mod}`
    }

    document.getElementById('intDisplay').innerHTML = int
    document.getElementById('intMod').innerHTML = mod
    document.getElementById('intScore').value = ''
}

document.getElementById( 'subInt').addEventListener('click', subInt)

function addwis (event){
    event.preventDefault();
    wis = document.getElementById('wisDisplay').innerHTML
    
    amt = document.getElementById('wisScore').value
    if (amt === ''){
        wis = +wis + 1
    }else{
        wis = +wis + +amt
    }
    if (wis > 30){
        alert('Wisdom cannot be more than 30')
        wis = 30;
    }
    mod = Math.floor((wis-10)/2)
    if(mod > -1){
        mod = `+${mod}`
    }

    document.getElementById('wisDisplay').innerHTML = wis
    document.getElementById('wisMod').innerHTML = mod
    document.getElementById('wisScore').value = ''
}

document.getElementById( 'addWis').addEventListener('click', addwis)

function subwis (event){
    event.preventDefault();
    wis = document.getElementById('wisDisplay').innerHTML
    
    amt = document.getElementById('wisScore').value
    if (amt === ''){
        wis = +wis - 1
    }else{
        wis = +wis - +amt
    }
    if (wis < 0){
        alert('Wisdom cannot be less than 1')
        wis = 1;
    }
    mod = Math.floor((wis-10)/2)
    if(mod > -1){
        mod = `+${mod}`
    }

    document.getElementById('wisDisplay').innerHTML = wis
    document.getElementById('wisMod').innerHTML = mod
    document.getElementById('wisScore').value = ''
}

document.getElementById( 'subWis').addEventListener('click', subwis)

function addcha (event){
    event.preventDefault();
    cha = document.getElementById('chaDisplay').innerHTML
    
    amt = document.getElementById('chaScore').value
    if (amt === ''){
        cha = +cha + 1
    }else{
        cha = +cha + +amt
    }
    if (cha > 30){
        alert('Charisma cannot be more than 30')
        cha = 30;
    }
    mod = Math.floor((cha-10)/2)
    if(mod > -1){
        mod = `+${mod}`
    }

    document.getElementById('chaDisplay').innerHTML = cha
    document.getElementById('chaMod').innerHTML = mod
    document.getElementById('chaScore').value = ''
}

document.getElementById( 'addCha').addEventListener('click', addcha)

function subcha (event){
    event.preventDefault();
    cha = document.getElementById('chaDisplay').innerHTML
    
    amt = document.getElementById('chaScore').value
    if (amt === ''){
        cha = +cha - 1
    }else{
        cha = +cha - +amt
    }
    if (cha < 0){
        alert('Charisma cannot be less than 1')
        cha = 1;
    }
    mod = Math.floor((cha-10)/2)
    if(mod > -1){
        mod = `+${mod}`
    }

    document.getElementById('chaDisplay').innerHTML = cha
    document.getElementById('chaMod').innerHTML = mod
    document.getElementById('chaScore').value = ''
}

document.getElementById( 'subCha').addEventListener('click', subcha)


function saveCharacter(e){
    e.preventDefault
    
    let charObj = {
        name: document.getElementById('characterName').value,
        charClass: document.getElementById('classAndLevel').value,
        background: document.getElementById('background').value,
        race: document.getElementById('race').value,
        alignment: document.getElementById('alignment').value,
        experience: document.getElementById('charExperience').value,
        str: document.getElementById('strDisplay').innerHTML,
        dex: document.getElementById('dexDisplay').innerHTML,
        con: document.getElementById('conDisplay').innerHTML,
        int: document.getElementById('intDisplay').innerHTML,
        wis: document.getElementById('wisDisplay').innerHTML,
        cha: document.getElementById('chaDisplay').innerHTML,
        strMod: document.getElementById('strMod').innerHTML,
        dexMod: document.getElementById('dexMod').innerHTML,
        conMod: document.getElementById('conMod').innerHTML,
        intMod: document.getElementById('intMod').innerHTML,
        wisMod: document.getElementById('wisMod').innerHTML,
        chaMod: document.getElementById('chaMod').innerHTML,
        insp: document.getElementById('inspiration').checked,
        prof: document.getElementById('proficiency').value,
        passPercept: document.getElementById('passivePerception').value,
        strSavProf: document.getElementById('strSavProf').checked,
        dexSavProf: document.getElementById('dexSavProf').checked,
        conSavProf: document.getElementById('conSavProf').checked,
        intSavProf: document.getElementById('intSavProf').checked,
        wisSavProf: document.getElementById('wisSavProf').checked,
        chaSavProf: document.getElementById('chaSavProf').checked,
        strSav: document.getElementById('strSav').value,
        dexSav: document.getElementById('dexSav').value,
        conSav: document.getElementById('conSav').value,
        intSav: document.getElementById('intSav').value,
        wisSav: document.getElementById('wisSav').value,
        chaSav: document.getElementById('chaSav').value,
        acroProf: document.getElementById('acroProf').checked,
        AHProf: document.getElementById('AHProf').checked,
        arcProf: document.getElementById('arcProf').checked,
        athProf: document.getElementById('athProf').checked,
        decProf: document.getElementById('decProf').checked,
        hisProf: document.getElementById('hisProf').checked,
        insProf: document.getElementById('insProf').checked,
        intProf: document.getElementById('intProf').checked,
        invProf: document.getElementById('invProf').checked,
        medProf: document.getElementById('medProf').checked,
        natProf: document.getElementById('natProf').checked,
        percProf: document.getElementById('percProf').checked,
        perfProf: document.getElementById('perfProf').checked,
        persProf: document.getElementById('persProf').checked,
        relProf: document.getElementById('relProf').checked,
        sliProf: document.getElementById('sliProf').checked,
        steProf: document.getElementById('steProf').checked,
        surProf: document.getElementById('surProf').checked,
        acro: document.getElementById('acro').value,
        AH: document.getElementById('AH').value,
        arc: document.getElementById('arc').value,
        ath: document.getElementById('ath').value,
        dec: document.getElementById('dec').value,
        his: document.getElementById('his').value,
        ins: document.getElementById('ins').value,
        intel: document.getElementById('int').value,
        inv: document.getElementById('inv').value,
        med: document.getElementById('med').value,
        nat: document.getElementById('nat').value,
        perc: document.getElementById('perc').value,
        perf: document.getElementById('perf').value,
        pers: document.getElementById('pers').value,
        rel: document.getElementById('rel').value,
        sli: document.getElementById('sli').value,
        ste: document.getElementById('ste').value,
        sur: document.getElementById('sur').value,
        armor: document.getElementById('armor').innerHTML,
        init: document.getElementById('init').innerHTML,
        speed: document.getElementById('speed').innerHTML,
        hp: document.getElementById('hp').innerHTML,
        tempHP: document.getElementById('tempHP').innerHTML,
        hitDice: document.getElementById('hitDice').innerHTML,
        suc1: document.getElementById('suc1').checked,
        suc2: document.getElementById('suc2').checked,
        suc3: document.getElementById('suc3').checked,
        fail1: document.getElementById('fail1').checked,
        fail2: document.getElementById('fail2').checked,
        fail3: document.getElementById('fail3').checked,
        attacks: document.getElementById('attackList').innerHTML,
        spells: document.getElementById('spellsList').innerHTML,
        equipment: document.getElementById('equipmentList').innerHTML,
        personality: document.getElementById('personalityList').innerHTML,
        ideals: document.getElementById('idealList').innerHTML,
        bonds: document.getElementById('bondList').innerHTML,
        flaws: document.getElementById('flawList').innerHTML,
        profAndLang: document.getElementById('profAndLangList').innerHTML,
        featAndTrait: document.getElementById('featAndTraitList').innerHTML,

    }
    console.log(charObj)
    axios.post('http://localhost:4000/api/save/', charObj)
    .then((res)=>{
        console.log(res.data)
    })
    .catch(err=>console.log(err))
}

document.getElementById('saveCharacter').addEventListener('click', saveCharacter)

function loadChar(e){
    e.preventDefault()
    axios.get('http://localhost:4000/api/example/')
    .then((res)=>{
        console.log(res.data)

        let {name, charClass, background,race,alignment,experience,str,dex,con,int,wis,cha,strMod,dexMod,conMod,intMod,wisMod,chaMod,insp,prof,passPercept,strSavProf,dexSavProf,conSavProf,intSavProf,wisSavProf,chaSavProf,strSav,dexSav,conSav,intSav,wisSav,chaSav,acroProf,AHProf,arcProf,athProf,decProf,hisProf,insProf,intProf,invProf, medProf,natProf,percProf,perfProf,persProf,relProf,sliProf,steProf,surProf,acro,AH,arc,ath,dec,his,ins, intel ,inv,med,nat,perc,perf,pers,rel,sli,ste,sur,armor,init,speed,hp,tempHP,hitDice,suc1,suc2,suc3,fail1,fail2,fail3,attacks,spells,equipment,personality,ideals,bonds,flaws,profAndLang,featAndTrait} = res.data

        document.getElementById('characterName').value= name;
        document.getElementById('classAndLevel').value= charClass
        document.getElementById('background').value= background
        document.getElementById('race').value= race;
        document.getElementById('alignment').value=alignment; 
        document.getElementById('charExperience').value= experience;
        document.getElementById('strDisplay').innerHTML= str;
        document.getElementById('dexDisplay').innerHTML= dex;
        document.getElementById('conDisplay').innerHTML= con;
        document.getElementById('intDisplay').innerHTML= int;
        document.getElementById('wisDisplay').innerHTML= wis;
        document.getElementById('chaDisplay').innerHTML= cha;
        document.getElementById('strMod').innerHTML= strMod;
        document.getElementById('dexMod').innerHTML= dexMod;
        document.getElementById('conMod').innerHTML= conMod;
        document.getElementById('intMod').innerHTML= intMod;
        document.getElementById('wisMod').innerHTML= wisMod;
        document.getElementById('chaMod').innerHTML= chaMod;
        document.getElementById('inspiration').checked= insp;
        document.getElementById('proficiency').value= prof;
        document.getElementById('passivePerception').value= passPercept; 
        document.getElementById('strSavProf').checked=strSavProf; 
        document.getElementById('dexSavProf').checked= dexSavProf;
        document.getElementById('conSavProf').checked= conSavProf;
        document.getElementById('intSavProf').checked= intSavProf;
        document.getElementById('wisSavProf').checked= wisSavProf;
        document.getElementById('chaSavProf').checked= chaSavProf;
        document.getElementById('strSav').value= strSav
        document.getElementById('dexSav').value= dexSav
        document.getElementById('conSav').value= conSav
        document.getElementById('intSav').value= intSav
        document.getElementById('wisSav').value= wisSav
        document.getElementById('chaSav').value= chaSav
        document.getElementById('acroProf').checked= acroProf
        document.getElementById('AHProf').checked= AHProf
        document.getElementById('arcProf').checked= arcProf
        document.getElementById('athProf').checked= athProf
        document.getElementById('decProf').checked= decProf
        document.getElementById('hisProf').checked= hisProf
        document.getElementById('insProf').checked= insProf
        document.getElementById('intProf').checked= intProf
        document.getElementById('invProf').checked= invProf
        document.getElementById('medProf').checked= medProf
        document.getElementById('natProf').checked= natProf
        document.getElementById('percProf').checked= percProf
        document.getElementById('perfProf').checked= perfProf
        document.getElementById('persProf').checked= persProf
        document.getElementById('relProf').checked= relProf
        document.getElementById('sliProf').checked= sliProf
        document.getElementById('steProf').checked= steProf
        document.getElementById('surProf').checked= surProf
        document.getElementById('acro').value= acro
        document.getElementById('AH').value= AH
        document.getElementById('arc').value= arc
        document.getElementById('ath').value= ath
        document.getElementById('dec').value= dec
        document.getElementById('his').value= his
        document.getElementById('ins').value= ins
        document.getElementById('int').value= intel
        document.getElementById('inv').value= inv
        document.getElementById('med').value= med
        document.getElementById('nat').value= nat
        document.getElementById('perc').value= perc
        document.getElementById('perf').value= perf
        document.getElementById('pers').value= pers
        document.getElementById('rel').value= rel
        document.getElementById('sli').value= sli
        document.getElementById('ste').value= ste
        document.getElementById('sur').value= sur
        document.getElementById('armor').innerHTML=armor 
        document.getElementById('init').innerHTML= init
        document.getElementById('speed').innerHTML= speed
        document.getElementById('hp').innerHTML= hp
        document.getElementById('tempHP').innerHTML= tempHP
        document.getElementById('hitDice').innerHTML= hitDice
        document.getElementById('suc1').checked= suc1
        document.getElementById('suc2').checked= suc2
        document.getElementById('suc3').checked= suc3
        document.getElementById('fail1').checked= fail1
        document.getElementById('fail2').checked= fail2
        document.getElementById('fail3').checked= fail3
        document.getElementById('attackList').innerHTML= attacks
        document.getElementById('spellsList').innerHTML= spells
        document.getElementById('equipmentList').innerHTML= equipment
        document.getElementById('personalityList').innerHTML= personality
        document.getElementById('idealList').innerHTML= ideals
        document.getElementById('bondList').innerHTML= bonds
        document.getElementById('flawList').innerHTML= flaws
        document.getElementById('profAndLangList').innerHTML=profAndLang 
        document.getElementById('featAndTraitList').innerHTML= featAndTrait


    })
    .catch(err=> console.log(err))
}

document.getElementById('loadRandom').addEventListener('click', loadChar)