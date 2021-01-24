/*function calculate(a,b, cb){
    return cb(a,b)
}

document.write(calculate(4, 8, function(value1, value2){

    return value1 + value2
}))*/


var divBlock = document.getElementById('ind')
var img = document.createElement('img')
img.src= "indgif.gif"



setTimeout(()=>{
    divBlock.innerHTML='10'
    setTimeout(()=>{
        divBlock.innerHTML='9'
        setTimeout(()=>{
            divBlock.innerHTML='8'
            setTimeout(()=>{
                divBlock.innerHTML='7'
                setTimeout(()=>{
                    divBlock.innerHTML='6'
                    setTimeout(()=>{
                        divBlock.innerHTML='5'
                        setTimeout(()=>{
                            divBlock.innerHTML='4'
                            setTimeout(()=>{
                                divBlock.innerHTML='3'
                                setTimeout(()=>{
                                    divBlock.innerHTML='2'
                                    setTimeout(()=>{
                                        divBlock.innerHTML='1'
                                        setTimeout(()=>{
                                            divBlock.innerHTML = ''
                                            divBlock.append(img)

                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
})