axios.get('https://www.dnd5eapi.co/api/monsters/')
    .then((res)=>{
        console.log(res)
        for(i=0; i< res.data.count; i++){
            newMon = document.createElement('li');
            newMon.textContent = res.data.results[i].name;
            document.getElementById('monstersList').appendChild(newMon)
        }
    })
    .catch((err)=>{
        console.log('Error getting monsters' +  err)
    })


function monsterSearch(e){
    monsterName = document.getElementById('monsterSearchName').value;
    monsterName = monsterName.toLowerCase()
    monsterName = monsterName.replace(/[^a-z]/g, ' ')
    arr = monsterName.split(' ')
    monsterName = arr.join('-')
    console.log(monsterName)
    axios.get(`https://www.dnd5eapi.co/api/monsters/${monsterName}`)
    .then((res)=>{
        document.getElementById('searchResults').innerHTML = ''
        console.log(res)
        let {name, speed, ability_bonuses, alignment, age, size, size_description, starting_proficiencies, starting_proficiency_options, languages, languages_desc, traits, subraces} = res.data;
        
        console.log(name, speed, ability_bonuses, alignment, age, size, size_description, starting_proficiencies, starting_proficiency_options, languages, languages_desc, traits, subraces)

        let spellName = document.createElement('h3')
        spellName.innerHTML = name
        
        let atkType = document.createElement('p');
        atkType.innerHTML = `Attack Type: ${attack_type}`
        
        let castingTime = document.createElement('p')
        castingTime.innerHTML = `Casting Time: ${casting_time}`

        let comp = document.createElement('p');
        comp.innerHTML = `Components: ${components}`

        let conc = document.createElement('p');
        conc.innerHTML = `Requires Concentration: ${concentration}`

        let dmg = document.createElement('p')
        
        if(damage !== undefined){
            let dmgType = document.createElement('p');
            dmgType.innerHTML = `Damage Type: ${damage.damage_type.name}`;
            dmg.appendChild(dmgType)
        }

        if(damage !== undefined){
            let dmgList = document.createElement('ul')
            let listTitle = document.createElement('p')
            listTitle.innerHTML= 'Damage at Level:'
            dmgLvl = damage.damage_at_slot_level
            Object.keys(dmgLvl).forEach(key =>{
                let newDmg = document.createElement('p')
                newDmg.innerHTML = `${key}: ${dmgLvl[key]}`
                dmgList.appendChild(newDmg)
            })
            dmg.appendChild(listTitle)
            dmg.appendChild(dmgList)
        }
        

        let description = document.createElement('p');
        description.innerHTML = `Description: ${desc}`

        let dur = document.createElement('p')
        dur.innerHTML = `Durarion: ${duration}`
        
        let highLvl = document.createElement('p');
        highLvl.innerHTML = `At Higher Levels: ${higher_level}`

        let lvl = document.createElement('p')
        lvl.innerHTML = `Level: ${level}`

        let mat = document.createElement('p')
        mat. innerHTML= `Material: ${material}`

        let ran = document.createElement('p')
        ran.innerHTML = `Range: ${range}`

        let rit = document.createElement('p')
        rit.innerHTML = `Ritual: ${ritual}`

        let sch = document.createElement('p')
        sch.innerHTML = `School: ${school.name}`

        let area = document.createElement('p')

        if(area_of_effect !== undefined){
        area.innerHTML = `Area of Effect: ${area_of_effect.size} ft ${area_of_effect.type}`
        }
        
        if(name !== undefined){ 
            document.getElementById('searchResults').appendChild(spellName)
        }
        
        if(desc !== undefined){ 
            document.getElementById('searchResults').appendChild(description)
        }

        if(attack_type !== undefined){ 
            document.getElementById('searchResults').appendChild(atkType)
        }
        if(casting_time !== undefined){ 
            document.getElementById('searchResults').appendChild(castingTime)
        }
        if(components !== undefined){ 
            document.getElementById('searchResults').appendChild(comp)
        }
        if(concentration !== undefined){ 
            document.getElementById('searchResults').appendChild(conc)
        }
        if(damage !== undefined){ 
            document.getElementById('searchResults').appendChild(dmg)
        }
       
        if(duration !== undefined){ 
            document.getElementById('searchResults').appendChild(dur)
        }

        if(higher_level !== undefined){ 
            document.getElementById('searchResults').appendChild(highLvl)
        }

        if(level !== undefined){ 
            document.getElementById('searchResults').appendChild(lvl)
        }

        if(material !== undefined){ 
            document.getElementById('searchResults').appendChild(mat)
        }

        if(range !== undefined){ 
            document.getElementById('searchResults').appendChild(ran)
        }

        if(ritual !== undefined){ 
            document.getElementById('searchResults').appendChild(rit)
        }

        if(school !== undefined){ 
            document.getElementById('searchResults').appendChild(sch) 
        }

        if(area_of_effect !== undefined){ 
            document.getElementById('searchResults').appendChild(area)
        }
    })
    .catch((err) => {
        console.log(err)
        alert('Spell not found. Check spelling.')
    })
    document.getElementById('monsterSearchName').value = ''
}

document.getElementById('monsterSearchBtn').addEventListener('click', monsterSearch)