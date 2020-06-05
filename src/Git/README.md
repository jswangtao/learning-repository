# Git 基本命令

![git工作原理图](./images/git_three_rigon.png)

### 创建库

- git init 初始化仓库
- git config user.name wangtao 设置用户名
- git config user.email 331871902@qq.com 设置邮箱
- git config --global user.name wangtao 设置全局用户名（一般只设置一次）
- git config --global user.email 331871902@qq.com 设置全局邮箱（一般只设置一次）
- git remote add 别名 仓库地址
  - 例如：
    1. git remote add origin 仓库地址
    2. git remote add origin_ssh 仓库地址

> 以上几步做完会有.git 文件夹，并且内部有 config 文件，里面有所有相关的信息

### 运用库

1. 添加文件

   - git status 查看库的状态
   - git add filename 添加指定文件暂存区
   - git add . 添加所有文件到暂存区(不包括删除文件)
   - git add -A 添加所有文件到暂存区(包括删除文件)
   - git commit -m "提交注释" 提交到本地库

2. 删除文件

   - 先在文件管理器中删除文件
   - git rm filename 删除文件
   - git commit -m "删除注释" 删除到本地库

3. 版本回退

   - git reset --soft 参数 移动本地库 HEAD 指针
   - git reset --mixed 参数 移动本地库、暂存区 HEAD 指针
   - git reset --hard 参数 移动本地库、暂存区、工作区 HEAD 指针

4. 分支管理

   - git branch test(分支名) 创建新分支
   - git checkout test 切换分支
   - git branch 查看所有分支
   - git branch -a 查看所有分支(包括远程分支)
   - git branch -vv 查看本地分支与远程分支的关联
   - git checkout master 切换主分支
   - git merge test 合并分支
   - git branch -D test 删除分支

5. Bug 分支管理

   - git stash 储藏工作现场
   - git stash list 查看储藏列表
   - git stash pop 恢复储藏

6. 与 GitHub 交互

   - git push 仓库地址别名 分支名
     - git push origin master 推送本地库到远程库
   - git fetch 仓库地址别名 分支名
     - git fetch origin master 抓取远程库到本地库
   - git merge 仓库地址别名 分支名
     - git merge origin master 合并远程库到本地库
   - git pull 仓库地址别名 分支名
     - git pull origin master 抓取+合并远程库到本地库
   - git clone 仓库地址
     - git clone https://github.com/WTxiaomage/learning-repository.git 下载远程库到本地库
   - 设置本地 dev 分支与远程 dev 分支的追踪关系
     - 在 dev 分支下执行  
        git branch --set-upstream-to=origin/dev

### 项目中开发

> 通常去一家公司，需要 down 项目到本地，而我们通常将 dev 分支作为开发分支，clone 到本地后，需创建自己的分支开发

1. 第一种方法(麻烦，适合远程已有分支本地无的情况)：
   - git clone 仓库地址 (克隆下来只有 master 分支)
   - cd 本地文件夹名 (进入本地仓库)
   - git branch dev origin/dev(创建 dev 分支并与远程dev关联)
   - git checkout dev (切换到 dev 分支)
2. 第二种方法(推荐，适合clone新库)
   - git clone -b dev https://github.com/WTxiaomage/learning-repository.git
     > 这种方法只会 clone 远程仓库的 dev 分支到本地，本地只存在我们经常用的分支

### 总结

- 这只是个人在项目开发过程中经常用到的命令集合，方便快速记忆和查阅，如果想系统学习 git，推荐[《廖雪峰的 Git 教程》](https://www.liaoxuefeng.com/wiki/896043488029600)
