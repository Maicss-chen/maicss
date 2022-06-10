
const lute = Lute.New();

function loadPost(markdownURL) {
    let httpRequest = new XMLHttpRequest();
    httpRequest.open('GET', markdownURL, true);
    httpRequest.send();
    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState === 4 && httpRequest.status === 200) {
            let md = httpRequest.responseText;
            document.getElementById("post").innerHTML = lute.MarkdownStr("", md);
        }
    };
}
window.onload = function () {
    let url = document.location.href;
    let hash = url.substring(url.lastIndexOf("#") + 1, url.length);
    loadPost("../posts/" + hash);

}