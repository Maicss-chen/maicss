
const lute = Lute.New();
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
     * @param title 标题
     * @param brief 简介
     * @param datetime 时间和日期
     * @param url 点击该列表项需要打开的链接
     */
    init(title, brief, datetime, url) {

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

        this.box.addEventListener("click",function () {
            window.open(url)
        });
    }
    constructor(filename, parent){
        let postUrl = '../posts/'+filename;
        let self = this;
        let httpRequest = new XMLHttpRequest();//第一步：建立所需的对象
        httpRequest.open('GET', postUrl, true);//第二步：打开连接  将请求参数写在url中  ps:"./Ptest.php?name=test&nameone=testone"
        httpRequest.send();//第三步：发送请求  将请求参数写在URL中
        httpRequest.onreadystatechange = function () {
            console.log(httpRequest.status)
            if (httpRequest.readyState===4 && httpRequest.status === 200) {
                let tempPost = document.createElement("div");
                tempPost.innerHTML = lute.MarkdownStr("", httpRequest.responseText);
                let postHead = tempPost.getElementsByTagName("blockquote")[0];
                if (postHead === undefined) return;
                let head = JSON.parse(postHead.getElementsByTagName("p")[0].innerHTML.replaceAll("<br>",""));
                postHead.remove();
                let firstParagraph = tempPost.getElementsByTagName("p")[0];
                if (head.brief !== undefined) {
                    self.init(head.title,head.brief,head.datetime,"post.html#"+filename)
                }else {
                    self.init(head.title,firstParagraph.innerText,head.datetime,"post.html#"+filename)
                }
                parent.append(self.box);
            }
        };
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
                new ListItem(json[i], document.getElementById("post-list"))
            }
        }
    };
}
window.onload = function (){
    loadList();
}