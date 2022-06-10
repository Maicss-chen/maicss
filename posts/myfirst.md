# 一、JSP

## 什么是JSP？

> JSP全称Java Server Pages，是一种动态网页开发技术。它使用JSP标签在HTML网页中插入Java代码。标签通常以<%开头以%>结束。

1. sad
   1. asd
      1. sf
## JSP的运行原理

本质是一个Servlet，tomcat将jsp文件翻译为java文件，后编译为class文件。用于向客户端out.writer html代码。

## JSP的语法结构

- <% %>包括Java代码
- <%! %> 是声明
- <%= %> 是输出
- <%--内容--%> 是注释

## JSP和Servlet的关系

JSP经过编译变成Servlet。

JSP更擅长表现页面显示，Servlet更擅长逻辑控制。

Servlet没有内置对象，JSP是一种Servlet的简化。

JSP是Servlet技术的扩展，本质上是Servlet的简易方式，更强调应用的外表表达。JSP编译后是"类servlet"。Servlet和JSP最主要的不同点在于，Servlet的应用逻辑是在Java文件中，并且完全从表示层中的HTML里分离开来。而JSP的情况是Java和HTML可以组合成一个扩展名为.jsp的文件。JSP侧重于视图，Servlet主要用于控制逻辑。

## 九大内置对象

- request 用户端请求，此请求会包含来自GET/POST请求的参数 ，对应HttpServletRequest类

- response 网页传回用户端的回应 ，对应ServletResponse类

- pageContext 网页的属性是在这里管理

- application servlet 正在执行的内容 。application对应ServletContext类

- out 用来传送回应的输出 ，对应object类

- config servlet的构架部件 ，config对应ServletConfig类

- page JSP网页本身

- exception 针对错误网页，未捕捉的例外。

## **JSP的内置对象及方法**

### 输入输出对象

- request表示HttpServletRequest对象。它包含了有关浏览器请求的信息，并且提供了几个用于获取cookie, header, 和session数据的有用的方法,
- response表示HttpServletResponse对象，并提供了几个用于设置送回 浏览器的响应的方法（如cookies,头信息等）.

- out对象是javax.jsp.JspWriter的一个实例，并提供了几个方法使你能用于向浏览器回送输出结果。


### 通信控制对象

- pageContext表示一个javax.servlet.jsp.PageContext对象。它是用于方便存取各种范围的名字空间、
- session表示一个请求的javax.servlet.http.HttpSession对象。Session可以存贮用户的状态信息
- applicaton 表示一个javax.servle.ServletContext对象。这有助于查找有关servlet引擎和servlet环境的信息。

### Servlet对象

- servlet相关的对象的API，并且包装了通用的servlet相关功能的方法。

- config表示一个javax.servlet.ServletConfig对象。该对象用于存取servlet实例的初始化参数。


### 错误处理对象

- page表示从该页面产生的一个servlet实例。

## **四种范围**

- page否是代表与一个页面相关的对象和属性。一个页面由一个编译好的 Java servlet 类（可以带有任何的 include 指令，但是没有 include 动作）表示。这既包括 servlet 又包括被编译成 servlet 的 JSP 页面
- request是是代表与 Web 客户机发出的一个请求相关的对象和属性。一个请求可能跨越多个页面，涉及多个 Web 组件（由于 forward 指令和 include 动作的关系）

- session是是代表与用于某个 Web 客户机的一个用户体验相关的对象和属性。一个 Web 会话可以也经常会跨越多个客户机请求

- application是是代表与整个 Web 应用程序相关的对象和属性。这实质上是跨越整个 Web 应用程序，包括多个页面、请求和会话的一个全局作用域

## JSP动作

- jsp:include：在页面被请求的时候引入一个文件。

- jsp:useBean：寻找或者实例化一个JavaBean。

- jsp:setProperty：设置JavaBean的属性。

- jsp:getProperty：输出某个JavaBean的属性。

- jsp:forward：把请求转到一个新的页面。

- jsp:plugin：根据浏览器类型为Java插件生成OBJECT或EMBED标记。

## 常用指令

```text
<%@page language=”java” contenType=”text/html;charset=gb2312” session=”true” buffer=”64kb” autoFlush=”true” isThreadSafe=”true” info=”text” errorPage=”error.jsp” isErrorPage=”true” isELIgnored=”true” pageEncoding=”gb2312” import=”java.sql.*”%>
isErrorPage(是否能使用Exception对象)，isELIgnored(是否忽略表达式) 
<%@include file=”filename”%>
<%@taglib prefix=”c”uri=”http://……”%>
```

## J**sp中request和response区别**

request是请求的载体，它附带着，请求的参数，ip，cookie，表单，字符编码，或者上传文件。  
你可以通过request去获得你所需要的信息。


response是响应的载体，你可以设置，表头，报文，响应文件类型，字符编码，response，自带一个输出流，当你需要将一个页面或者一个文件传到客户端时，你可以通过这个流来进行操作。

## 两种页面跳转方式

- request.getRequestDispatcher("url").forward(request,response)
    - 属于请求转发； 其地址栏的URL不会改变； 向服务器发送一次请求；
- response.sendRedirect("url");
    - 属于重定向请求   其地址栏的URL会改变； 会向服务器发送两次请求；

### JAVA SERVLET API中forward() 与redirect()的区别：

前者仅是容器中控制权的转向，在客户端浏览器地址栏中不会显示出转向后的地址；后者则是完全的跳转，浏览器将会得到跳转的地址，并重新发送请求链接。这样，从浏览器的地址栏中可以看到跳转后的链接地址。所以，前者更加高效，在前者可以满足需要时，尽量使用forward()方法，并且，这样也有助于隐藏实际的链接。在有些情况下，比如，需要跳转到一个其它服务器上的资源，则必须使用sendRedirect()方法。

## 两种跳转方式分别是什么?有什么区别：

答：有两种，分别为：  
<jsp:include page="included.jsp" flush="true">  
<jsp:forward page= "nextpage.jsp"/>  
前者页面不会转向include所指的页面，只是显示该页的结果，主页面还是原来的页面。执行完后还会回来，相当于函数调用。并且可以带参数.后者完全转向新页面，不会再回来。相当于go to 语句。

## JSP中动态INCLUDE与静态INCLUDE的区别：

- 动态INCLUDE用jsp:include动作实现，它总是会检查所含文件中的变化，适合用于包含动态页面，并且可以带参数：
  <jsp:include page="included.jsp" flush="true" />
- 静态INCLUDE用include伪码实现，不会检查所含文件的变化，适用于包含静态页面：
  <%@ include file="included.htm" %>。

# 二、Cookie

## Cookie**是啥**

存储在用户本地终端上的数据

## C**ookie的优点和缺点**

**使用Cookie的优点**

1. **Cookie易于使用和实现，**实现cookie的使用要比任何其他Internet协议容易得多。
2. **占用更少的内存，**不需要任何服务器资源，并存储在用户的计算机上，因此不会给服务器带来额外的负担。
3. **持久性，**Cookie最强大的一个方面就是持久性。当在客户端的浏览器上设置Cookie时，它可以持续数天，数月甚至数年。这样可以轻松保存用户首选项和访问信息，并在用户每次返回站点时保持此信息可用。此外，由于Cookie存储在客户端的硬盘上，因此如果服务器崩溃，它们仍然可用。
4. **透明性，**Cookie透明地工作，用户不知道需要存储的信息。
5. **易于管理，**大多数浏览器都可以让用户轻松清除浏览历史记录。只需转到工具，清除历史记录并选择Cookie即可。Cookie存储在用户硬盘驱动器上的cookie.txt下的文本文件中，因为它是一个文本文件，我们可以使用任何查看器或文本编辑器来显示，编辑和删除它们。

**使用Cookie的缺点**

1. **隐私问题，**大多数用户主要关心的是隐私。启用Cookie的Web浏览器会跟踪您访问过的所有网站。这意味着，经许可（或不在Google的情况下），第三方可以访问这些cookie存储的信息。在某些情况下，这些第三方可以是广告商，其他用户。。。。
2. **不安全，**Cookie安全性是一个大问题，因为它们是以明文形式存储，可能会造成安全风险，因为任何人都可以打开并篡改cookie。
3. Cookie容易在客户端被发现意味着它们很容易被黑客入侵和修改。
4. **难以解密，**我们可以手动加密和解密cookie，但由于加密和解密所需的时间，它需要额外的编码并影响应用程序性能。
5. **大小有限制，只能储存简单字符串信息，**cookie文本的大小（一般为4kb），cookie的数量（一般每个站点20个）存在一些限制，每个站点只能容纳20个cookie。
6. Cookie仅限于简单的字符串信息，他们无法存储复杂的信息。
7. **可以被禁用，**用户可以选择从浏览器设置中禁用其计算机上的cookie。这意味着用户可以决定不在他的浏览器上使用cookie，这可能会在浏览器的运行中产生一些问题。
8. **可以被删除，**用户可以从其计算机中删除cookie，这使他们可以更好地控制cookie。没作用了。#

## **Cookie用法**

```Java
Cookie cookie = new Cookie("key","value");
response.addCookie(cookie); //添加cookie
Cookie[] cookies = request.getCookies(); //获取cookie
```

## **Cookie和se**ssion的区别

相同点：

- 都是存储用于私人数据
- 都是针对单独的客户

不同点：

- Cookie把数据存在客户端，session存于服务器
- 给客户端发一个sessionid 这个id 存于cookie中，因此cookie默认存在一个sessionid值。

# 三、Session

## **什么是Session**

session即会话，是服务器对每个客户端创建的一块内存，每个session都有一个id，用于保存客户端的信息。

保存信息的方法叫`setAttribute`

## **Session应用场景**

- 购物车
- 登录验证

# 四、Servlet

## 什么是Serv**let**

是一个Java类，实现javax.servlet.Servlet接口，也可继承于javax.servlet.http.HttpServlet

可以响应任何请求，大部分情况下用于扩展基于Http的Web服务器。

## 生命周期

答:servlet有良好的生存期的定义，包括加载和实例化、初始化、处理请求以及服务结束。这个生存期由javax.servlet.Servlet接口的init,service和destroy方法表达。

## 说出Servlet的生命周期，并说出Servlet和CGI的区别。

Servlet被服务器实例化后，容器运行其init方法，请求到达时运行其service方法，service方法自动派遣运行与请求对应的doXXX方法（doGet，doPost）等，当服务器决定将实例销毁的时候调用其destroy方法。  
与cgi的区别在于servlet处于服务器进程中，它通过多线程方式运行其service方法，一个实例可以服务于多个请求，并且其实例一般不会销毁，而CGI对每个请求都产生新的进程，服务完成后就销毁，所以效率上低于servlet。

## Servlet声明时实现哪几个方法？

```Java
public void init(ServletConfig config)；

public ServletConfig getServletConfig()；

public String getServletInfo()；

public void service(ServletRequest request,ServletResponse response)；

public void destroy()
```

## Http**Servlet的基本架构**

```Java
public class ServletName extends HttpServlet {
    @Override
    protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        super.service(req, resp);
    }
}
```

或

```Java
public class ServletName extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        super.doPost(req, resp);
    }
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        super.doGet(req, resp);
    }
}
```

## **什么情况下调用doGet()和doPost()？**

JSP页面中的form标签里的method属性为get时调用doGet()，为post时调用doPost()。

## **servlet的配置**

```XML
<servlet>
    <servlet-name>data</servlet-name>
    <servlet-class>com.maicss.studentmanager.MyServlet</servlet-class>
</servlet>
<servlet-mapping>
    <servlet-name>data</servlet-name>
    <url-pattern>/data</url-pattern>
</servlet-mapping>
```

## **如何现实servlet的单线程模式**

```text
<%@ page isThreadSafe=”false”%>
```

## **页面间对象传递的方法**

request，session，application，cookie等

# 五、数据库

## J**DBC的执行步骤**

1. 加载驱动
2. 创建连接
3. 创建Statement对象
4. 执行SQL语句
5. 处理结果集
6. 关闭连接

## **Class.forName的作用?为什么要用：**

调用该访问返回一个以字符串指定类名的类的对象。

## **Statement和PreparedStatement之间的区别。**

PreparedStatement对象与Statement对象的不同点在于它的SQL语句是预编译过的，并且可以有占位符使用运行时参数。

# 其他

## **什么是MVC**

MVC模式（Model–view–controller）是软件工程中的一种软件架构模式，把软件系统分为三个基本部分：

- 模型（Model） - 程序员编写程序应有的功能（实现算法等等）、数据库专家进行数据管理和数据库设计(可以实现具体的功能)。
- 视图（View） - 界面设计人员进行图形界面设计。
- 控制器（Controller）- 负责转发请求，对请求进行处理。

## **四种会话跟踪技术**

cookie,url重写,session,隐藏域

## **什么是JavaBean**

JavaBeans是Java中一种特殊的类，可以将多个对象封装到一个对象（bean）中。特点是可序列化，提供无参构造器，提供getter方法和setter方法访问对象的属性。名称中的“Bean”是用于Java的可重用软件组件的惯用叫法。

## bean 实例的生命周期

对于Stateless Session Bean、Entity Bean、Message Driven Bean一般存在缓冲池管理，而对于Entity Bean和Statefull Session Bean存在Cache管理，通常包含创建实例，设置上下文、创建EJB Object（create）、业务方法调用、remove等过程，对于存在缓冲池管理的Bean，在create之后实例并不从内存清除，而是采用缓冲池调度机制不断重用实例，而对于存在Cache管理的Bean则通过激活和去激活机制保持Bean的状态并限制内存中实例数量。

## **bean 实例的生命周期对于**

Stateless Session Bean、Entity Bean、Message Driven Bean一般存在缓冲池管理，而对于Entity Bean和Statefull Session Bean存在Cache管理，通常包含创建实例，设置上下文、创建EJB Object（create）、业务方法调用、remove等过程，对于存在缓冲池管理的Bean，在create之后实例并不从内存清除，而是采用缓冲池调度机制不断重用实例，而对于存在Cache管理的Bean则通过激活和去激活机制保持Bean的状态并限制内存中实例数量。

## **Request对象的主要方法：**

setAttribute(String name,Object)：设置名字为name的request的参数值

getAttribute(String name)：返回由name指定的属性值

getAttributeNames()：返回request对象所有属性的名字集合，结果是一个枚举的实例

getCookies()：返回客户端的所有Cookie对象，结果是一个Cookie数组

getCharacterEncoding()：返回请求中的字符编码方式

getContentLength()：返回请求的Body的长度

getHeader(String name)：获得HTTP协议定义的文件头信息

getHeaders(String name)：返回指定名字的request Header的所有值，结果是一个枚举的实例

getHeaderNames()：返回所以request Header的名字，结果是一个枚举的实例

getInputStream()：返回请求的输入流，用于获得请求中的数据

getMethod()：获得客户端向服务器端传送数据的方法

getParameter(String name)：获得客户端传送给服务器端的有name指定的参数值

getParameterNames()：获得客户端传送给服务器端的所有参数的名字，结果是一个枚举的实例

getParameterValues(String name)：获得有name指定的参数的所有值

getProtocol()：获取客户端向服务器端传送数据所依据的协议名称

getQueryString()：获得查询字符串

getRequestURI()：获取发出请求字符串的客户端地址

getRemoteAddr()：获取客户端的IP地址

getRemoteHost()：获取客户端的名字

getSession([Boolean create])：返回和请求相关Session

getServerName()：获取服务器的名字

getServletPath()：获取客户端所请求的脚本文件的路径

getServerPort()：获取服务器的端口号

removeAttribute(String name)：删除请求中的一个属性

## **java中有几种类型的流？JDK为每种类型的流提供了一些抽象类以供继承，请说出他们分别是哪些类：**

- 字节流继承于`InputStream\OutputStream`。
- 字符流继承于`InputStreamReader\OutputStreamWriter`。

> 在java.io包中还有许多其他的流，主要是为了提高性能和使用方便。

## 文件读写的基本类

答：File Reader 类和FileWriter类分别继承自Reader类和Writer类。FileReader类用于读取文件，File Writer类用于将数据写入文件，这两各类在使用前，都必须要调用其构造方法创建相应的对象，然后调用相应的read()或 write()方法。

## **说出在JSP页面里是怎么分页的?**

页面需要保存以下参数：总行数：根据sql语句得到总行数  每页显示行数：设定值当前页数：请求参数  
页面根据当前页数和每页行数计算出当前页第一行行数，定位结果集到此行，对结果集取出每页显示行数的行即可。

数据库方面：1.存储过程和函数的区别存储过程是用户定义的一系列sql语句的集合，涉及特定表或其它对象的任务，用户可以调用存储过程，而函数通常是数据库已定义的方法，它接收参数并返回某种类型的值并且不涉及特定用户表。

## 事务

事务是作为一个逻辑单元执行的一系列操作，一个逻辑工作单元必须有四个属性，称为 ACID（原子性、一致性、隔离性和持久性）属性，只有这样才能成为一个事务：原子性，事务必须是原子工作单元；对于其数据修改，要么全都执行，要么全都不执行。一致性，事务在完成时，必须使所有的数据都保持一致状态。在相关数据库中，所有规则都必须应用于事务的修改，以保持所有数据的完整性。事务结束时，所有的内部数据结构（如 B 树索引或双向链表）都必须是正确的。隔离性，由并发事务所作的修改必须与任何其它并发事务所作的修改隔离。事务查看数据时数据所处的状态，要么是另一并发事务修改它之前的状态，要么是另一事务修改它之后的状态，事务不会查看中间状态的数据。这称为可串行性，因为它能够重新装载起始数据，并且重播一系列事务，以使数据结束时的状态与原始事务执行的状态相同。持久性，事务完成之后，它对于系统的影响是永久性的。该修改即使出现系统故障也将一直保持。

## 何为“事务处理”，谈谈你对它的理解

事务处理是指一个单元的工作，这些工作要么全做，要么全部不做。作为一个逻辑单元，必须具备四个属性：自动性、一致性、独立性和持久性。自动性是指事务必须是一个自动的单元工作，要么执行全部数据的修改，要么全部数据的修改都不执行。一致性是指当事务完成时，必须使所有数据都具有一致的状态。在关系型数据库中，所有的规则必须应用到事务的修改上，以便维护所有数据的完整性。所有的内部数据结构，在事务结束之后，必须保证正确。独立性是指并行事务的修改必须与其他并行事务的修改相互独立。一个事务看到的数据要么是另外一个事务修改这些事务之前的状态，要么是第二个事务已经修改完成的数据，但是这个事务不能看到正在修改的数据。

## B/S和C/S的优缺点


B/S优点：  
①、具有分布性特点，可以随时随地进行查询，浏览等业务处理；  
②、业务扩展简单方便，通过增加网页即可增加服务器功能；  
③、维护简单方便，只需要改变网页，即可实现所有用户的同步更新；  
④、开发简单，共享性强。  
B/S缺点：  
①、在跨浏览器上B/S架构不尽如人意；  
②、表现要达到C/S程序的程度要花费不少的精力；  
③、在速度和安全性上需要花费巨大的设计成本，这是B/S架构的最大问题；  
④、客户端服务端的交互是请求-响应模式，需要刷新页面；  
C/S优点：  
①、C/S架构的界面和操作可以很丰富；  
②、安全性能可以很容易保证，实现多层认证也不难；  
③、由于只有一层交互，因此响应速度较快；  
C/S缺点：  
①、适用面窄，通常用于局域网中。  
②、用户群固定。由于程序需要安装才可使用，因此不适合面向一些不可知的用户。  
③、维护成本高，发生一次升级，则所有客户端的程序都需要改变。

## B/S和C/S的区别

1、c/s架构主要应用于局域网内，而b/s架构主要应用于广域网中；2、c/s架构一般面向相对固定的用户群，对信息安全的控制能力很强，而b/s架构对安全的控制能力相对弱；3、B/S架构维护升级比较简单，而C/S架构维护升级相对困难。

# 代码示例

## MyServlet.java

```Java

@WebServlet("/data")
public class MyServlet extends HttpServlet {
    @Override
    public void service(ServletRequest servletRequest, ServletResponse servletResponse) throws ServletException, IOException {
        servletRequest.setCharacterEncoding("UTF-8");
        servletResponse.setCharacterEncoding("UTF-8");
        String type = servletRequest.getParameter("type");
        switch (type) {
            case "addStudent":
                addStudentServer(servletRequest, servletResponse);
                break;
            case "queryStudent":
                queryStudentServer(servletRequest, servletResponse);
                break;
            case "editStudent":
                editStudentServer(servletRequest,servletResponse);
                break;
            case "deleteStudent":
                deleteStudentServer(servletRequest,servletResponse);
                break;
        }
    }
     public void addStudentServer(ServletRequest servletRequest, ServletResponse servletResponse) throws ServletException, IOException {
        servletRequest.setCharacterEncoding("UTF-8");
        servletResponse.setCharacterEncoding("UTF-8");

        Student student = new Student();
        student.setId(Integer.parseInt(servletRequest.getParameter("sid")));
        student.setName(servletRequest.getParameter("sname"));
        student.setSex(servletRequest.getParameter("ssex"));
        student.setSclass(servletRequest.getParameter("sclass"));

        boolean res = StudentDao.addUser(student.getId(),student.getName(),student.getSex(),student.getSclass());

        if (res){
            servletRequest.setAttribute("message","录入成功");
        }else {
            servletRequest.setAttribute("message","录入失败");
        }
        servletRequest.getRequestDispatcher("message.jsp").forward(servletRequest,servletResponse);
    }
    public void queryStudentServer(ServletRequest servletRequest, ServletResponse servletResponse) throws ServletException, IOException {
        List<Student> list = StudentDao.queryStudent();
        servletRequest.setAttribute("data",list);
        servletRequest.getRequestDispatcher("quaryStudent.jsp").forward(servletRequest,servletResponse);
    }
    public void editStudentServer(ServletRequest servletRequest, ServletResponse servletResponse) throws ServletException, IOException {
        servletRequest.setCharacterEncoding("UTF-8");
        servletResponse.setCharacterEncoding("UTF-8");

        String step = servletRequest.getParameter("step");
        if (step.equals("edit")){
            Student student = StudentDao.findById(Integer.parseInt(servletRequest.getParameter("sid")));
            servletRequest.setAttribute("student",student);
            servletRequest.getRequestDispatcher("editStudent.jsp").forward(servletRequest,servletResponse);
        }else if (step.equals("update")){
            Student student = new Student();
            student.setId(Integer.parseInt(servletRequest.getParameter("sid")));
            student.setName(servletRequest.getParameter("sname"));
            student.setSex(servletRequest.getParameter("ssex"));
            student.setSclass(servletRequest.getParameter("sclass"));
            boolean res = StudentDao.editUser(student.getId(),student.getName(),student.getSex(),student.getSclass());
            if (res){
                servletRequest.setAttribute("message","修改成功");
            }else {
                servletRequest.setAttribute("message","修改失败");
            }
            servletRequest.getRequestDispatcher("message.jsp").forward(servletRequest,servletResponse);
        }
    }
    public void deleteStudentServer(ServletRequest servletRequest, ServletResponse servletResponse) throws ServletException, IOException {
        servletRequest.setCharacterEncoding("UTF-8");
        servletResponse.setCharacterEncoding("UTF-8");

        int id = Integer.parseInt(servletRequest.getParameter("sid"));

        boolean res = StudentDao.deleteStudent(id);

        if (res){
            servletRequest.setAttribute("message","删除成功");
        }else {
            servletRequest.setAttribute("message","删除失败");
        }
        servletRequest.getRequestDispatcher("message.jsp").forward(servletRequest,servletResponse);
    }
}
```

## SqlConnect.java

```Java
public class SqlConnect {
    public static Connection getConnection(){
        Connection c = null;
        try{
            Class.forName("com.mysql.cj.jdbc.Driver");
            c = DriverManager.getConnection("jdbc:mysql://localhost:3306/StudentManager?characterEncoding=UTF-8","root","root");
        } catch (SQLException | ClassNotFoundException e) {
            e.printStackTrace();
        }
        return c;
    }
}

```

## StudentDao.java

```Java
public class StudentDao {
    public static boolean addUser(int id, String name, String sex, String sclass){
        Connection conn = SqlConnect.getConnection();
        if(conn==null){
            return false;
        }
        String sql = "insert into students(sid, sname, ssex, sclass) VALUES (%d,'%s','%s','%s')";
        sql = String.format(sql ,id,name,sex,sclass);
        try {
            Statement st = conn.createStatement();
            st.execute(sql);
            return true;
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return false;
    }
    public static List<Student> queryStudent(){
        String sql = "select * from students";
        List<Student> res = new ArrayList<Student>();

        Connection c = SqlConnect.getConnection();

        if (c==null){
            return res;
        }
        try {
            Statement st = c.createStatement();
            ResultSet rs = st.executeQuery(sql);
            while (rs.next()){
                Student student = new Student(
                        rs.getInt("sid"),
                        rs.getString("sname"),
                        rs.getString("ssex"),
                        rs.getString("sclass")
                );
                res.add(student);
            }
            return res;
        } catch (SQLException e) {
            e.printStackTrace();
            return null;
        }
    }
    public static boolean editUser(int id, String name, String sex, String sclass){
        Connection conn = SqlConnect.getConnection();
        if(conn==null){
            return false;
        }

        String sql = "UPDATE students SET SNAME='%s',SSEX='%s',SCLASS='%s' WHERE SID=%d";
        sql = String.format(sql ,name,sex,sclass,id);
        try {
            Statement st = conn.createStatement();
            st.execute(sql);
            return true;
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return false;
    }
    public static boolean deleteStudent(int id){
        String sql = "delete from students where SID="+ id;
        Connection c = SqlConnect.getConnection();
        try {
            Statement st = c.createStatement();
            st.execute(sql);
            return true;
        } catch (SQLException e) {
            e.printStackTrace();
            return false;
        }
    }
    public static Student findById(int id){
        String sql = "select * from students where SID="+ id;

        Student student;

        Connection c = SqlConnect.getConnection();

        try {
            Statement st = c.createStatement();
            ResultSet rs = st.executeQuery(sql);
            rs.next();
            student = new Student(
                    rs.getInt("sid"),
                    rs.getString("sname"),
                    rs.getString("ssex"),
                    rs.getString("sclass")
            );
            return student;
        } catch (SQLException e) {
            e.printStackTrace();
            return null;
        }
    }
}

```

## addStudent.jsp

```HTML
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>录入学生</title>
    <link href="addstyle.css" rel="stylesheet" type="text/css">
</head>
<body>
    <form action="data?type=addStudent" method="post" class="mainForm">
        <table>
            <tr>
                <td>学号：</td>
                <td><input type="number" name="sid" ></td>
            </tr>
            <tr>
                <td>姓名：</td>
                <td><input type="text" name="sname"></td>
            </tr>
            <tr>
                <td>性别：</td>
                <td><input type="radio" name="ssex" value="男">男 <input type="radio" name="ssex" value="女">女</td>
            </tr>
            <tr>
                <td>班级：</td>
                <td><input type="text" name="sclass"></td>
            </tr>
            <tr>
                <td colspan="2" id="td_submit"><input type="submit" value="提交"></td>
            </tr>
        </table>
    </form>
</body>
</html>

```

## editStudent.jsp

```HTML
<%@ page import="com.maicss.data.Student" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>编辑学生</title>
    <link href="addstyle.css" rel="stylesheet" type="text/css">
</head>
<body>
<% Student student = (Student)request.getAttribute("student");%>
<form action="data?type=editStudent&step=update" method="post" class="mainForm">
    <table>
        <tr>
            <td>学号：</td>
            <td><input type="number" name="sid" value="<%=student.getId()%>" readonly="readonly"></td>
        </tr>
        <tr>
            <td>姓名：</td>
            <td><input type="text" name="sname" value="<%=student.getName()%>"></td>
        </tr>
        <tr>
            <td>性别：</td>
            <%if(student.getSex().equals("男")){%>
            <td><input type="radio" name="ssex" value="男" checked="checked">男 <input type="radio" name="ssex" value="女">女</td>
            <%}else{%>
            <td><input type="radio" name="ssex" value="男">男 <input type="radio" name="ssex" value="女" checked="checked">女</td>
            <%}%>
        </tr>
        <tr>
            <td>班级：</td>
            <td><input type="text" name="sclass" value="<%=student.getSclass()%>"></td>
        </tr>
        <tr>
            <td colspan="2" id="td_submit"><input type="submit" value="提交"></td>
        </tr>
    </table>
</form>
</body>
</html>
```

## quaryStudent.jsp

```HTML
<%@ page import="com.maicss.data.Student" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
    <link href="quarystyle.css" rel="stylesheet" type="text/css">
</head>
<body>

<% List<Student> list = (List<Student>) request.getAttribute("data");%>
<h1>查询到：</h1>
<table>
    <tr>
        <th>学号</th>
        <th>姓名</th>
        <th>性别</th>
        <th>班级</th>
        <th>操作</th>
    </tr>
    <% for (Student student: list) {%>
    <tr>
        <td><%=student.getId()%></td>
        <td><%=student.getName()%></td>
        <td><%=student.getSex()%></td>
        <td><%=student.getSclass()%></td>
        <td><a href="data?type=editStudent&step=edit&sid=<%=student.getId()%>">编辑</a><a href="data?type=deleteStudent&sid=<%=student.getId()%>">删除</a></td>
    </tr>
</table>
</body>
</html>

```

## web.xml

```XML
<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns="http://xmlns.jcp.org/xml/ns/javaee"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee http://xmlns.jcp.org/xml/ns/javaee/web-app_4_0.xsd"
         version="4.0">
    <servlet>
        <servlet-name>data</servlet-name>
        <servlet-class>com.maicss.studentmanager.MyServlet</servlet-class>
    </servlet>
    <servlet-mapping>
        <servlet-name>data</servlet-name>
        <url-pattern>/data</url-pattern>
    </servlet-mapping>


</web-app>
```

## 文件上传

### UploadServlet.java

```Java
package com.maicss.studentmanager;

import org.apache.commons.fileupload.DiskFileUpload;
import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.FileItemFactory;
import org.apache.commons.fileupload.FileUploadException;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.io.IOException;
import java.util.List;

@WebServlet("/upload")
public class UploadServlet extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        FileItemFactory factory = new DiskFileItemFactory();
        ServletFileUpload upload = new ServletFileUpload(factory);
        upload.setHeaderEncoding("UTF-8");
        upload.setFileSizeMax(10*1024*1024);

        if (ServletFileUpload.isMultipartContent(req)) {
            try {
                List<FileItem> list = upload.parseRequest(req);

                for (FileItem it : list){
                    String fname = it.getName();
                    String SavePath = this.getServletContext().getRealPath("upload");

                    File d = new File(SavePath);
                    if (!d.exists()){
                        if (d.mkdir()){
                            System.out.println("创建文件夹成功");
                        }
                    }
                    File f = new File(SavePath,fname);

                    it.write(f);
                    it.delete();
                    resp.setContentType("text/html;charset=UTF-8");
                    resp.getWriter().println("上传 " + fname + " 成功!");

                }
            } catch (Exception e) {
                throw new RuntimeException(e);
            }
        }
    }
}

```

### upload.jsp

```HTML
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>上传文件</title>
</head>
<body>
    <form action="upload" method="post" enctype="multipart/form-data">
        <input type="file" name="myfile">
        <input type="submit">
    </form>
</body>
</html>

```

## 查询分页

### quaryCourse.jsp（el写法）

```HTML
<%@ page import="java.util.List" %>
<%@ page import="com.maicss.data.Course" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<head>
    <title>Title</title>
    <link href="quarystyle.css" rel="stylesheet" type="text/css">
</head>
<body>
<%--    <% List<Course> list = (List<Course>) request.getAttribute("data");%>--%>
    <h1>查询到：</h1>
    <table>
        <tr>
            <th>课程号</th>
            <th>课程名</th>
            <th>课程分数</th>
            <th>操作</th>
        </tr>
        <jsp:useBean id="data" scope="request" type="java.util.List<com.maicss.data.Course>"/>
        <c:forEach items="${data }" var="course">
            <tr>
                <td>${course.cid }</td>
                <td>${course.name }</td>
                <td>${course.cscore }</td>
                <td><a href="data?type=editCourse&step=edit&cid=${course.cid }">编辑</a><a href="data?type=deleteCourse&cid=${course.cid }">删除</a></td>
            </tr>
        </c:forEach>
    </table>
<jsp:useBean id="page" scope="request"/>
    <a href="data?type=queryCourse&page=${page-1}">上一页</a>
    <a href="data?type=queryCourse&page=${page+1}">下一页</a>
</body>
</html>

```

### MyServlet.java

```Java
public void queryCourseServer(ServletRequest servletRequest, ServletResponse servletResponse) throws ServletException, IOException {
    String p = servletRequest.getParameter("page");
    if (p==null){
        p="1";
    }
    int page = Integer.parseInt(p);
    int count = CourseDao.getCount();
    page = PageNumber.getValidPage(page,count);
    List<Course> list = CourseDao.queryCourse(PageNumber.getTop(page),PageNumber.getEnd(page));
    servletRequest.setAttribute("data",list);
    servletRequest.setAttribute("page",page);
    servletRequest.getRequestDispatcher("quaryCourse.jsp").forward(servletRequest,servletResponse);
}
```

### CourseDao.java

```Java
package com.maicss.dao;

import com.maicss.data.Course;
import com.maicss.studentmanager.SqlConnect;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

public class CourseDao {
/*........*/
    public static List<Course> queryCourse(int start, int end){
        String sql = "select * from course limit "+start+","+end;
        List<Course> res = new ArrayList<Course>();
        Connection c = SqlConnect.getConnection();
        if (c==null){
            return res;
        }
        try {
            Statement st = c.createStatement();
            ResultSet rs = st.executeQuery(sql);
            while (rs.next()){
                Course course = new Course(
                        rs.getInt("cid"),
                        rs.getString("cname"),
                        rs.getInt("cscore")
                );
                res.add(course);
            }
            return res;
        } catch (SQLException e) {
            e.printStackTrace();
            return null;
        }
    }
    public static int getCount(){
        String sql = "select COUNT(*) from course";
        Connection c = SqlConnect.getConnection();
        Integer count = null;
        try {
            Statement st = c.createStatement();
            ResultSet rs = st.executeQuery(sql);
            rs.next();
            count = rs.getInt(1);
            return count;
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return 0;
    }
/*........*/
}

```