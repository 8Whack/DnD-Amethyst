axios.get('https://www.dnd5eapi.co/api/spells')
    .then((res)=>{
        console.log(res)
        for(i=0; i< res.data.count; i++){
            newSpell = document.createElement('li');
            newSpell.textContent = res.data.results[i].name;
            document.getElementById('spellsList').appendChild(newSpell)
        }
    })
    .catch((err)=>{
        console.log('Error getting spells')
    })



function spellSearch(e){
    spellName = document.getElementById('spellSearchName').value;
    spellName = spellName.toLowerCase()
    spellName = spellName.replace(/[^a-z, ']/g, ' ')
    spellName = spellName.replace(/[']/g, '')
    arr = spellName.split(' ')
    spellName = arr.join('-')
    console.log(spellName)
    axios.get(`https://www.dnd5eapi.co/api/spells/${spellName}`)
    .then((res)=>{
        document.getElementById('searchResults').innerHTML = ''
        console.log(res)
        let {name, attack_type, casting_time, components, concentration, damage, desc, duration, higher_level, level, material, range, ritual, school, area_of_effect} = res.data;
        
        console.log(name, attack_type, casting_time, components, concentration, damage, desc, duration, higher_level, level, material, range, ritual, school)

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
    document.getElementById('spellSearchName').value = ''
}

document.getElementById('spellSearchBtn').addEventListener('click', spellSearch)