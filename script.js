const loveMe = document.querySelector('.loveMe')
const times = document.getElementById('times')

let clickedTime = 0
let likedTimes = 0


//a customized double click listener (could use simply 'dbclick')
loveMe.addEventListener('click', (e) => {
    if (clickedTime === 0) {
        clickedTime = new Date().getTime()
        
    } else  {
        if ((new Date().getTime() - clickedTime) < 800) {
            createHeart(e)  
            clickedTime = 0    
        } else {
            clickedTime = new Date().getTime()
        }
          
    }
})

const createHeart = (e) => {
    const heart = document.createElement('i')
    heart.classList.add('fas')
    heart.classList.add('fa-heart')

    //getting the position of the clicked spot
    const x = e.clientX
    const y = e.clientY

    const left = e.target.offsetLeft
    const top = e.target.offsetTop

    const Xinside = x - left
    const Yinside = y - top

    //assigning the position to the heart element
    heart.style.top = `${Yinside}px`
    heart.style.left = `${Xinside}px`

    //appending the heart element
    loveMe.appendChild(heart)


    //removing the heart element from dom after 1 sec
    setTimeout(() => heart.remove(), 1000)

    times.innerText = ++likedTimes
    // same as
    // likedTimes++
    // times.innerText = likedTimes
}