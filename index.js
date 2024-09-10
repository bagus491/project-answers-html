


function datas()
{
    const data = [
        'https://upload.wikimedia.org/wikipedia/commons/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg/800px-Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/b/bb/Neymar_Jr._with_Al_Hilal%2C_3_October_2023_-_03_%28cropped%29.jpg',
        'https://cdn.motor1.com/images/mgl/zxQBp4/s1/2024-lamborghini-revuelto-exterior.webp',
        'https://cdn.motor1.com/images/mgl/rPR91/s3/ferrari-sf90-stradale-la-prova.jpg'
    ]

    const nameData = ["Lionel Messi","Cristiano Ronaldo","Neymar JR","Lamborghini","Ferrari"]

    return [data,nameData]
}




function cetakImg(value)
{
    if(!value)
    {
        return false
    }

    const image = document.querySelector('.image')
    const spinner = document.querySelector('.spinner')
    const reset = document.querySelector('.reset')
    const btnplay = document.querySelector('.btn-play')
    const tnd = document.querySelector('.image-tanya')
    const input = document.querySelector('.answers')
    const btnsubmit = document.querySelector('.submit')

    const data = datas()

    tnd.style.display = "none"
    spinner.style.display = "flex"
     btnplay.style.display = "none"
     input.style.display = "flex"
     btnsubmit.style.display = "flex"
      reset.style.display = "flex"

    setTimeout(() => {
        
        let angka = Math.floor(Math.random() * data[0].length)
        const newData = data[0].find((p,y) => y == angka)
        const answerName = data[1].find((k,l) => l == angka)

        Answers(answerName)
            const img = document.createElement('img')
            img.setAttribute('class','image-file')
            img.setAttribute('src', newData)
            
            image.appendChild(img)
            spinner.style.display = "none"
    },2000)
}

function Answers(value)
{
    const input = document.querySelector('.answers')
    const btnsubmit = document.querySelector('.submit')

    btnsubmit.addEventListener('click',function(){
        const userInput = input.value
        if(value.toLowerCase().includes(userInput.toLowerCase()))
        {
            alert("benar")
            location.reload()
        }else{
            alert("salah")
        }
    })
}

Answers()

function click()
{
    const btnplay = document.querySelector('.btn-play')
    let click = false

    btnplay.addEventListener("click",function(){
        click = true
        cetakImg(click)
    })
}

function resetClick()
{
    const reset = document.querySelector('.reset')
    
    reset.addEventListener("click",function(){
        location.reload()
    })
}


resetClick()
click()

