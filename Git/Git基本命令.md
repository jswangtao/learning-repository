# Git 基本命令

## 创建库
- git init  初始化仓库
- git config user.name wangtao 设置用户名
- git config user.email 331871902@qq.com 设置邮箱
- git config --global user.name wangtao 设置全局用户名（一般只设置一次）
- git config --global user.email 331871902@qq.com 设置全局邮箱（一般只设置一次）
- git remote add 别名 仓库地址
    - 例如：
        1. git remote add origin  仓库地址
        2. git remote add origin_ssh  仓库地址
> 以上几步做完会有.git文件夹，并且内部有config文件，里面有所有相关的信息

## 运用库

### 添加文件
> 工作区、暂存区、本地库 
- git status               查看库的状态
- git add filename         添加指定文件暂存区
- git add .                添加所有文件到暂存区 
- git commit -m "提交注释"  提交到本地库

### 删除文件
- 先在文件管理器中删除文件
- git rm filename          删除文件
- git commit -m "删除注释"  删除到本地库

### 版本回退
- git reset --soft 参数 移动本地库HEAD指针
- git reset --mixed 参数 移动本地库、暂存区HEAD指针
- git reset --hard 参数 移动本地库、暂存区、工作区HEAD指针

### 分支管理
- git branch test(分支名) 创建新分支
- git checkout test      切换分支
- git branch    		 查着分支
- git checkout master    切换主分支
- git merge test         合并分支
- git branch -d test     删除分支

### 与GitHub交互
- git push 仓库地址别名 分支名  
    - git push origin master   推送本地库到远程库
- git fetch 仓库地址别名 分支名
    - git fetch origin master  抓取远程库到本地库
- git merge 仓库地址别名 分支名
    - git merge origin master  合并远程库到本地库
- git pull 仓库地址别名 分支名  
    - git pull origin master   抓取+合并远程库到本地库

- git clone 仓库地址
    - git clone origin master  下载远程库到本地库