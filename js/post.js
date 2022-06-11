
const lute = Lute.New();

function loadPost(markdownURL) {
    let httpRequest = new XMLHttpRequest();
    httpRequest.open('GET', markdownURL, true);
    httpRequest.send();
    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState === 4 && httpRequest.status === 200) {
            let md = httpRequest.responseText;
            let postDiv = document.getElementById("post");
            postDiv.innerHTML = lute.MarkdownStr("", md);
            let postHead = postDiv.getElementsByTagName("blockquote")[0];
            let head = JSON.parse(postHead.getElementsByTagName("p")[0].innerHTML.replaceAll("<br>",""));
            postHead.remove();
            document.title = head.title;
            document.getElementById("post-title").innerText = head.title;
            document.getElementById("post-time").innerText = head.datetime;

            hljs.highlightAll();
        }
    };
}
window.onload = function () {
    let url = document.location.href;
    let hash = url.substring(url.lastIndexOf("#") + 1, url.length);
    loadPost("../posts/" + hash);
}