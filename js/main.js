function myfunc() {
    var category = document.getElementById("category").value;
fetch(`https://sv443.net/jokeapi/v2/joke/${category}`)
    .then(data=> {
        const res= data.json();
        console.log(res);
        return res;
    }).then(
        res => {
            document.getElementById("setup").innerHTML = res.setup || res.joke;
            if(res.setup){
            setInterval( document.getElementById("deliever").innerHTML = res.delivery,5000)
            }
        }
    )
    .catch(err =>console.log(err))
}