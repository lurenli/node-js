项目名称：后台新闻管理系统
作者：李欢欢
项目介绍：用户管理，分类管理，新闻管理，评论管理
		四个表名：user用户表；sort分类表，news新闻表 comment评论表
		models层，controllers层，routes

		1.在码云上面建一个仓库。=》tree；
		2.在仓库里面有两个文件夹一个是nodejsApi。操作1)express -e nodejsApi 2);cd nodejsApi ;3)npm i;
		4)npm i cors -S ;5)npm i mongoose -S    6)npm i mongoose- materialized -S （分类管理里面的id问题）  7)npm install mongoose-paginate-S;(用户管理中的分页)    启动mongod --dbpath ·1	2d:\mongodb
		3.另一个文件newsproject;里面有用户管理，分类管理，新闻管理，评论管理，和后端配合
		
技术栈：
	jq+jqeasyui+mongodb+git+moogoose+node.js+resetfulapi+comment.js+materialized+paginate+xheditor+jquery url parse+
疑难问题：解决方案：
1.list；中间会因为list报错的原因：1.重启一下bin;2.数据的没有对应的字段；

2.由于版本问题。最好用iframe；iframe=1；我在项目中用了1.3.4和1.5.3.

3.在新闻管理系统中，一个关键问题就是cartId;在新闻管理里面添加的时候有编辑器，注意要用$('#wu-form2 textarea').val(arr[i].content)，;

4.在新闻管理系统中如何跳转到对应新闻评论者的信息；如何传？
	1)利用地址栏传参，从一个模块跳转到另一个模块，从新闻跳到评论页，可以利用addTab函数事件iframe页面的新增tabs选项卡功能，在页面的html里面同时传入id，同时还有刷新问题;在评论模块里面传入的是整个地址栏，用正则的方法取到id;在进行ajax请求

5.使用在线编辑器
1）拷贝xheditor
2)前提是使用之前建议的ifrome;
3）在文件中引入js；在结构设置class

6.在跳转评论页面之后增加评论的要增加在对应的新闻下面；就是取到这个id。然后在自动获取；

7.在管理里面增加小按钮，主要是找出他的对应的class。等等


