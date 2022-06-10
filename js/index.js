/**
 * 首页中列表项类
 */
class ListItem{
    box;
    title;
    brief;
    datetime;
    /**
     * 构造函数
     * @param listEle 要加入的父级元素
     * @param title 标题
     * @param brief 简介
     * @param datetime 时间和日期
     * @param url 点击该列表项需要打开的链接
     */
    constructor(listEle, title, brief, datetime, url) {

        this.box = document.createElement("div");
        this.box.classList.add("list-item");

        this.title = document.createElement("h2");
        this.brief = document.createElement("p");
        this.datetime = document.createElement("h6");

        this.title.innerText = title;
        this.brief.innerText = brief;
        this.datetime.innerText = datetime;

        this.box.append(this.datetime);
        this.box.append(this.title);
        this.box.append(this.brief);

        listEle.append(this.box);
        this.box.addEventListener("click",function () {
            window.open(url)
        });
    }
}

/**
 * 加载列表
 */
function loadList(){
    let httpRequest = new XMLHttpRequest();//第一步：建立所需的对象
    httpRequest.open('GET', '../posts/postlist.json', true);//第二步：打开连接  将请求参数写在url中  ps:"./Ptest.php?name=test&nameone=testone"
    httpRequest.send();//第三步：发送请求  将请求参数写在URL中
    /**
     * 获取数据后的处理程序
     */
    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState === 4 && httpRequest.status === 200) {
            let json = JSON.parse(httpRequest.responseText);//获取到json字符串，还需解析
            for (let i = 0; i<json.length; i++){
                console.log(json[i]);
                new ListItem(document.getElementById("post-list"),
                    json[i].title,
                    json[i].brief,
                    json[i].datetime,
                    "post.html#" + json[i].post)
            }
        }
    };
}
window.onload = function (){
    loadList();
}