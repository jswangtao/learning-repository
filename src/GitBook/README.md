# GitBook 基本命令

### 创建书籍

```
npm install gitbook -g    //安装GitBook
gitbook init              //初始化书籍目录
gitbook serve            //编译书籍 可以用浏览器打开 http://127.0.0.1:4000 查看书籍的效果
gitbook build            //打包书籍
```

### 发布到 GitHub Pages

1. 构建书籍:
   首先，使用 gitbook build 将书籍内容输出到默认目录，也就是当前目录下的 \_book 目录。
   ```
   gitbook build
   ```
2. 创建 gh-pages 分支:
   执行如下命令来创建分支，并且删除不需要的文件：
   ```
   git checkout --orphan gh-pages
   git rm --cached -r .
   git clean -df
   rm -rf *~
   ```
3. 现在，目录下应该只剩下 \_book 目录了，首先，忽略一些文件：

   ```
   echo "*~" > .gitignore
   echo "_book" >> .gitignore
   git add .gitignore
   git commit -m "Ignore some files"
   ```

4. 然后，加入 \_book 下的内容到分支中：

   ```
   cp -r _book/* .
   git add .
   git commit -m "Publish book"
   ```

5. 上传书籍内容到 GitHub

   ```
   git push -u origin gh-pages
   ```

### 总结

- 参考文档：[GitBook 简明教程](http://www.chengweiyang.cn/gitbook/index.html)
