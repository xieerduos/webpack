## webpack4
```t
    webpack4详细入门教程
```

### 快速开始
```s 
    $  npm install webpack webpack-cli webpack-dev-server -g
    $  cd webpack-course
    $  npm install
    $  npm run build
```

### webpack4的详细步骤（window环境）`
    

### 1-全局安装
```s
	$  npm install  webpack webpack-cli  webpack-dev-server -g
```

### 2-创建文件夹
```s
	$  cd Desktop/
	$  mkdir  webpack-course      mkdir 创建一个文件夹
	$  cd webpack-course
	$  mkdir src
	$  mkdir dist
	$  mkdir config
	$  ls         查看文件列表（有多少个 文件、文件夹）
```

### 3-
```s
    $  git init .       初始化一个空的本地仓库（Git），便于后器对代码的管理

```
### 4-
```s
    $  npm init -y  创建一个package.json文件
```

### 5-
```s
	$  echo >dist/index.html   Ctrl + c              进入dist文件夹并创建一个文件为index.html 
```

### 6-
```s
    $  echo >src/index.js   Ctrl + c
```


### 7-
```s
    $  ls src/     查看src下的文件  列表
```


### 8-
```s
    $  ls  dist/
```


### 9-
```s
    $  code .     命令行方式打开vscode
```


### 10-
```s
    $  webpack --mode=development   开发环境
```

### 11-
```s
    $  webpack --mode=production  生产环境，非常小，只会打包用到的东西
```



### 12-
```s
    $  cls   清空终端历史的  命令行
```


### 13-
```s
    $  echo >config/webpack.dev.js        创建一个配置文件
```


### 14-
```s
    $  rm  dist/main.js  删除dist下的main.js文件
```

### 15-
```s
    $  rm  src/index.js   删除src下的index.js文件
```


### 16-编写webpack.dev.js文件配置
```javascript
	const path = require("path");
	module.exports = {
		// 入口：有并且可以有多个
		entry: {
			main:"./src/main.js"
		},
		// 打包环境：开发 & 生产
		mode:"",
		// 出口：有且只能有一个
		output:{
			filename: "[name]-bundle.js", // main-bound.js
			path: path.resolve(__dirname, "../dist")
		}
	}
```
### 17-
```s
    $  echo  >src/main.js  创建一个入口文件
```

### 18-
```s
    $  webpack --config=config/webpack.dev.js
```

```javascript
	报错
	Invalid configuration object. Webpack has been initialised using a configuration object that does not match the API schema.
	 - configuration.mode should be one of these:
	   "development" | "production" | "none"
	   -> Enable production optimizations or development hints.
```

### 19-修改webpack.dev.js配置文件，因为没有配置mode:""
```javascript
	const path = require("path");
	module.exports = {
		// 入口：有并且可以有多个
		entry: {
			main:"./src/main.js"
		},
		// 打包环境：开发 & 生产
		mode:"development",
		// 出口：有且只能有一个
		output:{
			filename: "[name]-bundle.js", // main-bound.js
			path: path.resolve(__dirname, "../dist")
		}
    }
```


### 20-修改index.html文件
```html
	<body>
		<h1>Hello World!</h1>
    </body>
```


### 21-修改src/main.js文件
```javascript
    alert("Hello World!");
```


### 22-修改webpack.dev.js文件
```javascript
	const path = require("path");
	module.exports = {
		// 入口：有并且可以有多个
		entry: {
			main:"./src/main.js"
		},
		// 打包环境：开发 & 生产
		mode:"development",
		// 出口：有且只能有一个
		output:{
			filename: "[name]-bundle.js", // main-bound.js
			path: path.resolve(__dirname, "../dist"),
			publicPath:"/" // 如果“/”，在index.html文件中引入main-bundle.js。这么写：<script src="/main-bundle.js"></script> 。 如果写的是：“/js”，在index.html文件中引入main-bundle.js。这么写：<script src="/js/main-bundle.js"></script>
		}
    }
```


### 23-修改index.html
```html
	<body>
		<h1>Hello World!</h1>
		<script src="/main-bundle.js"></script>
    </body>
```
### 24-安装本地的webpack，webpack-cli以及webpack-dev-server
```s
	$  npm install webpack  webpack-cli  webpack-dev-server  回车
```

### 25-启动项目，热更新（热加载）
```s
	$  webpack-dev-server   --config=config/webpack.dev.js  
```

### 26-在浏览器打开，刚刚 控制台 自动生成的地址，默认是localhost:8080
![Image text](https://raw.githubusercontent.com/xieerduos/webpack4-images/master/26.png)

### 27-发现错误，没有达到预期效果，需要点击dist文件才能打开index.html
![Image text](https://raw.githubusercontent.com/xieerduos/webpack4-images/master/27.png)

### 28-配置webpack.dev.js文件中  配置本地服务器
```javascript
	const path = require("path");
	module.exports = {
		// 入口：有并且可以有多个
		entry: {
			main:"./src/main.js"
		},
		// 打包环境：开发 & 生产
		mode:"development",
		// 出口：有且只能有一个
		output:{
			filename: "[name]-bundle.js", // main-bound.js
			path: path.resolve(__dirname, "../dist"),
			publicPath:"/" // 如果“/”，在index.html文件中引入main-bundle.js。这么写：<script src="/main-bundle.js"></script> 。 如果写的是：“/js”，在index.html文件中引入main-bundle.js。这么写：<script src="/js/main-bundle.js"></script>
		},
		// 本地服务器
		devServer:{
			contentBase:"dist" // 服务器 默认进入dist文件夹下
		}
    }
```


### 29-终端，退出服务器
![Image text](https://raw.githubusercontent.com/xieerduos/webpack4-images/master/29.png)

### 30-重新启动服器
```s
	$ webpack-dev-server  --config=config/webpack.dev.js
```
![Image text](https://raw.githubusercontent.com/xieerduos/webpack4-images/master/30.png)


### 31-在浏览器窗口输入 localhost:8080
![Image text](https://raw.githubusercontent.com/xieerduos/webpack4-images/master/31.png)


### 32-修改一下main.js文件，在浏览器窗口输入 localhost:8080
![Image text](https://raw.githubusercontent.com/xieerduos/webpack4-images/master/32.png)



```javascript
    alert("Hello World!！！！！！！！！！！");
```
>浏览器实现了，自动刷新功能！
	



