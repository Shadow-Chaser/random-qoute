document.getElementById('generate-btn')
    .addEventListener('click', () =>{
        generateQuote();
    })

const generateQuote = () =>{
    toggleSpinner(true);
    fetch(`https://api.quotable.io/random`)
    .then(res => res.json())
    .then(data => showQuote(data))
    }


const showQuote = (data) =>{
    document.getElementById('quote-area').classList.remove("d-none")
    document.getElementById('speech').innerText = data.content;
    document.getElementById('author').innerText = data.author;

   let tagsInnerHtml = "";
    data.tags.forEach (()=>
    {
      tagsInnerHtml = `<p class="text-center tag">#${data.tags} </p>`
      document.getElementById('tag-list').innerHTML = tagsInnerHtml;

    })

    toggleSpinner(false);
}

const toggleSpinner = (show) => {
    const spinner = document.getElementById("loading-spinner");
    if(show){
      spinner.classList.remove("d-none");
    }
    else{
      spinner.classList.add("d-none");
    }
      
  }