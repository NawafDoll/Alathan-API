
let parent = document.getElementsByClassName('parent')[0]
let city = document.getElementById('city');
let submit = document.getElementsByClassName('submit')[0]
submit.addEventListener('click',(e)=>{
fetch(` http://api.aladhan.com/v1/calendarByAddress?address= ${city.value}`)
.then((res)=>res.json())
.then((res)=>{
    let today = document.getElementById('today')
    today.textContent = res.data[0].date.gregorian.date
    let timings = []
    timings.push(Object.values(res.data[0].timings));
    timings = timings[0]
    timings.length = 7;
    console.log(timings)

    let athan =[]
     athan.push(Object.keys(res.data[0].timings))
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