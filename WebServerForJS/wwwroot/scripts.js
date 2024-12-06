window.showQuote = async () => {
    let targetElement = document.getElementById('quoteContainer');
    await Blazor.rootComponents.add(targetElement, 'quote',
        {
            text: "Crow: I have my doubts that this movie is actually 'starring' " +
                "anybody. More like, 'camera is generally pointed at.'"
        });
}

const btn = document.querySelector("#showQuoteBtn");
btn.addEventListener("click", showQuote);