function hello() {
    console.log('script is loaded')
}
hello()

function loadMe() {
    // run this block script initially in devtools
    // you can invoke this function subsequently for reloading an edit
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'script.js';
    document.head.appendChild(script);
}

function getComments(bEcho=false) {
    let cards = Array.from(document.getElementsByClassName('athing'))

    let sCards = cards.map(card => {
        try {return (card
            .getElementsByClassName('comment')[0]
            .getElementsByTagName('span')[0]
            .textContent
        )}
        catch {return ''}
    }
    )
    if (bEcho) console.log(sCards)
    return sCards
    }

function sendData(data, port=3003) {
        fetch(`http://localhost:${port}/filewrite`, 
            {method: 'POST', 
            headers: {
                'Content-Type': 'application/json'},
             body: JSON.stringify(data)})
            .then(res => res.text())
            .then(text => console.log(text))
}

function run(port=3003) {
    const comments = getComments()
    sendData(data=comments, port=port)
}