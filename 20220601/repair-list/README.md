//20200601项目详解

一、布局

1.建立文件夹 npx create-react-app repair-list

2.删除无用的文件和链接

3.将有用的代码copy到App.js中

（1）直接copy会有格式问题可以用快捷键修复
```java
Alt + shift + F
```
(2)在app.js中input标签需要闭合“/”

4.将css文件内容粘贴到App.css中

5.建立组件components，建最简单的Header和Footer放入

6.此时浏览器有错误，不需要修改，错误是因为rander造成的

7.在components中放入RepairList修复列表

8.再次细分Header，将Form提取出来，并正确显示

9.在此使用新的方法在app.js中使用Form.jsx

10.完成全部的代码布局

二、详细代码

2-1设定最小子集repair，针对要展示的信息，设定所需要的props，然后再repairList中设定props，进行信息的初始化

2-2 设定初始状态useState(专有词，不可写错)，设定初始值，并以参数的形式传递到子集

2-3考虑点击删除键时，删除相应的项目

（1）最小子集repair添加删除事件onClick，并向父类repaiList请求参数，没有再向父类app请求

2-4添加项目

（1）阻止局部刷新
```java
event.preventDefault();//阻止链接打开 URL阻止刷新
```

(2)app可以传导方法，所以主方法写在app中，在各部分只要调用就行

（3）有个问题，新添加的项目无法删除

已经解决，问题是：回调函数中，参数缺少（），导致无法选择参数

2-5关于复选框

（1）阻止局部刷新
```java
定义和使用
该findIndex()方法为每个数组元素执行一个函数。

该findIndex()方法返回通过测试的第一个元素的索引（位置）。

findIndex()如果未找到匹配项，则 该方法返回 -1。

该findIndex()方法不执行空数组元素的函数。

该findIndex()方法不会更改原始数组。
```

3.删除复选框选定的项目

3-1 useEffect使用时有以下4种情况
```java
1、不传递
useEffect不传递第二个参数会导致每次渲染都会运行useEffect。然后，当它运行时，它获取数据并更新状态。然后，一旦状态更新，组件将重新呈现，这将再次触发useEffect，这就是问题所在。
//1
  useEffect(()=>{
    console.log(props.number)
    setNumber(props.number)
  }) //所有更新都执行

2、传递空数组
//2
  useEffect(()=>{
    console.log(props)
  },[]) //仅在挂载和卸载的时候执行

3、传递一个值
//3
  useEffect(()=>{
    console.log(count)
  },[count]) //count更新时执行

4、传递多个
//4
const Asynchronous : React.FC<PropsType>=({number})=>{
  const [number2,setNumber2] = useState(number);
  useEffect(()=>{
    console.log(number)
    setNumber2(number)
  },[number,setNumber2]) //监听props对象number的更改
  //setNumber2是useState返回的setter，所以不会在每次渲染时重新创建它，因此effect只会运行一次
 }

5、传递props的对象 传递的useState返回的setter

6、return 方法

const timer = setInterval(() => {
		setCount(count + 1)
	}, 1000)
	// useEffect方法的第一个参数是一个函数，函数可以return一个方法，这个方法就是在组件销毁的时候会被调用
	useEffect(() => {
		return () => {
			clearInterval(timer)
		}
	}, [])

```

3-2 localStorage特性
```java
在HTML5中，新加入了一个localStorage特性，这个特性主要是用来作为本地存储来使用的，解决了cookie存储空间不足的问题(cookie中每条cookie的存储空间为4k)，localStorage中一般浏览器支持的是5M大小，这个在不同的浏览器中localStorage会有所不同。

在HTML5中，本地存储是一个window的属性，包括localStorage和sessionStorage，从名字应该可以很清楚的辨认二者的区别，前者是一直存在本地的，后者只是伴随着session，窗口一旦关闭就没了。以下是localStorage 和sessionStorage的区别

(1)localStorage和sessionStorage一样都是用来存储客户端临时信息的对象。

(2)他们均只能存储字符串类型的对象（虽然规范中可以存储其他原生类型的对象，但是目前为止没有浏览器对其进行实现）。

(3)localStorage生命周期是永久，这意味着除非用户显示在浏览器提供的UI上清除localStorage信息，否则这些信息将永远存在。

(4)sessionStorage生命周期为当前窗口或标签页，一旦窗口或标签页被永久关闭了，那么所有通过sessionStorage存储的数据也就被清空了。

(5)不同浏览器无法共享localStorage或sessionStorage中的信息。相同浏览器的不同页面间可以共享相同的localStorage（页面属于相同域名和端口），但是不同页面或标签页间无法共享sessionStorage的信息。这里需要注意的是，页面及标签页仅指顶级窗口，如果一个标签页包含多个iframe标签且他们属于同源页面，那么他们之间是可以共享sessionStorage的。
```
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
