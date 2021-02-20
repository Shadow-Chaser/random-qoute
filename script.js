document.getElementById('generate-btn')
    .addEventListener('click', () =>{
        generateQuote();
    })

const generateQuote = () =>{
    fetch(`https://api.quotable.io/random`)
    .then(res => res.json())
    .then(data => showQuote(data))
    }


const showQuote = (data) =>{
    document.getElementById('speech').innerText = data.content;
    document.getElementById('author').innerText = data.author;

}