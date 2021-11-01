
function zoomOut(int, id){
    var i = int
    var animation = setInterval(() => {
        if (i > 120){
            i-=0.1
            document.getElementById(id).style.backgroundSize = i + '%'
        }
        else {
            clearInterval(animation)
        }
    }, 30);
}

zoomOut(150, 'main-background')

aboutAnimated = false
skillsAnimated = false

document.onscroll = function() {
    if (aboutAnimated == false){
        if (window.scrollY >= 300){
            aboutAnimated = true
            animateX('image1', 'vh', 0, 10, 1)
            animateYtop('image2', 'vh', 10, -10, 1.5)
            animateX('image3', 'vw', 70, 50, 2)
            animateOpacity('about-me', 0, 1)
        }
    }
    if (skillsAnimated == false){
        if (window.scrollY >= 1200){
            skillsAnimated = true
            setTimeout(() => {animateYmargin('skill1', 'vh', 10, 0, 1)}, 0)
            setTimeout(() => {animateYmargin('skill2', 'vh', 10, 0, 1)}, 700)
            setTimeout(() => {animateYmargin('skill3', 'vh', 10, 0, 1)}, 1400)
            setTimeout(() => {animateYmargin('skill4', 'vh', 10, 0, 1)}, 2100)
            setTimeout(() => {animateYmargin('skill5', 'vh', 10, 0, 1)}, 2800)
            setTimeout(() => {animateYmargin('skill6', 'vh', 10, 0, 1)}, 3500)
        }
    }
}

function animateX(id, value, start, stop, velocity){
    var i = start
    var opasity = 0
    var animation = setInterval(() => {
        if (start < stop){
            if (i < stop){
                i+=(0.1 * velocity)
                document.getElementById(id).style.left = i + value
                if (opasity < 1){
                    opasity += (0.01 * velocity)
                    document.getElementById(id).style.opacity = opasity
                }
            }
            else if(opasity < 1){
                opasity += (0.01 * velocity)
                document.getElementById(id).style.opacity = opasity
            }
            else {
                clearInterval(animation)
            }
        }
        else {
            if (i > stop){
                i-=(0.1 * velocity)
                document.getElementById(id).style.left = i + value
                if (opasity < 1){
                    opasity += (0.01 * velocity)
                    document.getElementById(id).style.opacity = opasity
                }
            }
            else if(opasity < 1){
                opasity += (0.01 * velocity)
                document.getElementById(id).style.opacity = opasity
            }
            else {
                clearInterval(animation)
            }
        }
    }, 15);
}

function animateYtop(id, value, start, stop, velocity){
    var i = start
    var opasity = 0
    var animation = setInterval(() => {
        if (start < stop){
            if (i < stop){
                i+=(0.1 * velocity)
                document.getElementById(id).style.top = i + value
                if (opasity < 1){
                    opasity += (0.01 * velocity)
                    document.getElementById(id).style.opacity = opasity
                }
            }
            else if(opasity < 1){
                opasity += (0.01 * velocity)
                document.getElementById(id).style.opacity = opasity
            }
            else {
                clearInterval(animation)
            }
        }
        else {
            if (i > stop){
                i-=(0.1 * velocity)
                document.getElementById(id).style.top = i + value
                if (opasity < 1){
                    opasity += (0.001 * velocity)
                    document.getElementById(id).style.opacity = opasity
                }
            }
            else if(opasity < 1){
                opasity += (0.01 * velocity)
                document.getElementById(id).style.opacity = opasity
            }
            else {
                clearInterval(animation)
            }
        }
    }, 5);
}

function animateYmargin(id, value, start, stop, velocity){
    var i = start
    var opasity = 0
    var animation = setInterval(() => {
        if (start < stop){
            if (i < stop){
                i+=(0.1 * velocity)
                document.getElementById(id).style.marginTop = i + value
                if (opasity < 1){
                    opasity += (0.01 * velocity)
                    document.getElementById(id).style.opacity = opasity
                }
            }
            else if(opasity < 1){
                opasity += (0.01 * velocity)
                document.getElementById(id).style.opacity = opasity
            }
            else {
                clearInterval(animation)
            }
        }
        else {
            if (i > stop){
                i-=(0.1 * velocity)
                document.getElementById(id).style.marginTop = i + value
                if (opasity < 1){
                    opasity += (0.001 * velocity)
                    document.getElementById(id).style.opacity = opasity
                }
            }
            else if(opasity < 1){
                opasity += (0.01 * velocity)
                document.getElementById(id).style.opacity = opasity
            }
            else {
                clearInterval(animation)
            }
        }
    }, 5);
}


function animateOpacity(id, start, stop){
    var animation = setInterval(() => {
        if (start < stop){
            start+=0.01
            document.getElementById(id).style.opacity = start
        }
        else {
            clearInterval(animation)
        }
    }, 15);
}