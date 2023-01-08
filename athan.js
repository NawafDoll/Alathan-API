
let parent = document.getElementsByClassName('parent')[0]
let city = document.getElementById('city');
let submit = document.getElementsByClassName('submit')[0]
let day = document.getElementById('day')
let today = document.getElementById('today')
let country = document.getElementsByClassName('country')[0]


submit.addEventListener('click',(e)=>{
fetch(` http://api.aladhan.com/v1/timingsByCity?city=${city.value}&country=ff `)
.then((res)=>res.json())
.then((res)=>{
    
    
    country.innerHTML = city.value.replace(city.value[0],city.value[0].toUpperCase())
    day.textContent = Object.values(res.data.date.gregorian.weekday).join('');
    
    today.textContent = res.data.date.gregorian.date
    console.log(res)
    let timings = []
    timings.push(Object.values(res.data.timings));
    timings = timings[0]
    timings.length = 7;
    console.log(timings)

    let athan =[]    
     athan.push(Object.keys(res.data.timings))
     athan[0].length = 7
    athan =athan[0]
    
   
    
    parent.innerHTML = '';
    for(i=0;i<timings.length;i++){
        let p = document.createElement('p')
        let h3 = document.createElement('h3')
        let div = document.createElement('div')
        div.setAttribute('class','pray')
        let hr = document.createElement('hr')
        p.innerHTML = `Time: ${timings[i]}`;
        h3.innerHTML = athan[i]
        div.append(h3)
        div.append(hr)
        div.append(p)
        parent.append(div)
        
    }
})

e.preventDefault()

})

let a = 'makkah'

console.log()