// giphy API key:   k2JPGdnIS8oGCVWTrLqfdjtnNy5mqHLF



const form = $('form')
const $imgContainer = $('#imgContainer')
//VANILLA JS// const imgContainer = document.querySelector('#imgContainer')

//takes user input (str),and returns random gif URL with user input type of gif
async function getGifURL(userInput) {
    const res = await axios.get('https://api.giphy.com/v1/gifs/random',
        { params: { api_key: 'k2JPGdnIS8oGCVWTrLqfdjtnNy5mqHLF', tag: userInput } })

    const gifURL = res.data.data.images.original.url

    const $newImg = `<img src =${gifURL}></img>`
    $imgContainer.append($newImg)


    //VANILLA JS //const newImg = document.createElement('img')
    //VANILLA JS // newImg.src = gifURL
    //VANILLA JS // $imgContainer.append(newImg)
}


const $deleteBtn = $('#deleteBtn')

form.on('submit', function (e) {
    e.preventDefault()
    const userInput = $(this).children('input')

    getGifURL(userInput.val())
    userInput.val("")
})


$deleteBtn.on('click', function (e) {
    $('img').remove()
})





