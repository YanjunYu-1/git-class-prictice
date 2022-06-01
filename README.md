//Exercise 4 - Adding Components总结

1.将项目中的每一个部分分开写，方便整理

2.每一部分将需要的数据传入

//快捷键sfc

```java
const  = () => {
    return (  );
}
 
export default ;
```

//代码
```java
cuisines: ["japanese", "sushi","1111", "2222"],//源代码
<p>{cuisines.join(",")}</p>//join方法
japanese,sushi,1111,2222//显示结果
```

//GitHub

1.git --version//查看版本

git config --global --list//查看name和email

git init//创建git文件用来上传文件

2."+"=>...=>commit=>commit all=>填写说明

git log//查看提交的说明

"TIMELINE"中查看修改的细节

如果再次修改选择"+"=>...=>commit=>commit all（Amend）

3.在GitHub上建立新的仓库，注意名字是git-name

git remote add origin https://github.com/YanjunYu-1/git-test.git

git remote

git push -u origin master   

//REACT

node -v 查看node版本号

npm i -g create-react-app@1.5.2

npx create-react-app react-app（名字不能有大写字母）

进入文件夹才能运行npm start

npm i bootstrap@4.1.1 
