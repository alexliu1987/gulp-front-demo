# 基于gulp搭建前端组件化的示例项目

### 安装
Homebrew:
```sh
$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

ruby:
```sh
$ brew install ruby
```

设置ruby镜像:
```sh
$ gem sources --add https://ruby.taobao.org/ --remove https://rubygems.org/
```

sass:
```sh
$ gem install sass
```

Gulp:
```sh
$ npm install -g gulp
```

### 运行
```sh
$ npm start
```

### 开发
新建页面：
```sh
$ gulp add-html --name xxx/xxx
```

新建组件：
```sh
$ gulp add-component --name xxx/xxx
```

License
----

MIT
