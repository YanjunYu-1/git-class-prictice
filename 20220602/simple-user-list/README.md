useEffect使用时有以下4种情况
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
