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
