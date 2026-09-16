const map = new Map()
map.set('in',"india")
map.set('usa',"america")
map.set('fr',"france")
map.set('in',"india")

// console.log(map);
for(const [key,value] of map)
    console.log(key,":-",value)

