console.log(window);

const div = document.getElementById("block");

div.addEventListener("click", () => {
    // let url = new URL(location);
    // url.searchParams.set('text', 'hello');
    // history.pushState(null, "Wiki", url);

    //var url = new URL("https://google.com");
    //url.searchParams.set("value", JSON.stringify({mark: "Audi", year: 2020}));
    //console.log(url);
    let otherWindow = window.open("https://google.com", );
    window.setTimeout(() => otherWindow.close(), 5000);

    div.children[0].style.color = "green";
    div.children[1].style.color = "blue";
});