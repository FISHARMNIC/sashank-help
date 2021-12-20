var int;
var timer = 0;

async function makeRequest(callBackFunc) {
    //make your requests and parsing etc. here
    try {
      const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY');
      parsed = await response.json()
      callBackFunc(parsed)
    } catch (error) {
      console.log("rip bozo", error)
    }
}

function main() {
    int = setInterval(() => timer++, 1) // this is just to show you the timestamps
    document.getElementById("start").innerHTML = `yo i just started: TIMESTAMP ${timer}`
    makeRequest(afterWards) //make the request, but run all of that stuff on a sperate thread
    // after its done, callback to the finish function
    document.getElementById("dontFreeze").innerHTML = `check it out I wrote this while I was making the requests!: TIMESTAMP ${timer}`
    //as seen, the website is still running!
}
function afterWards(result) {
    // continue normal control flow here
    document.getElementById("done").innerHTML = `Finished! heres the GET result [${result.explanation.slice(0,46)}]: TIMESTAMP ${timer}`
    clearInterval(int)
}


main() //this is you submit.addEventlistener function is