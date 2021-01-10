
![logo](http://i.imgur.com/Z4iPSgQ.png) BEAUTY - Node.js CMD管理器  

================================  
[![Travis][travis-badge]][travis-link]
[![Version][version-badge]][version-link]
[![Gitter][gitter-badge]][gitter-link]
[![Slack][slack-badge]][slack-link]
[![Jianliao][jianliao-badge]][jianliao-link]  
#### `BEAUTY` 是一个简单的 `Windows` 下 CMD 管理器 。  


特色
---
* 单文件，不依赖于任何环境。
* 下载即用，无需配置。
* 彩色日志输出。
* 支持 `NPM` 下载/安装/配置。

主页
---
[![Website][www-badge]][www-link]

文档
---
[中文](https://github.com/xianengzhi/beauty/blob/main/README.md)


安装
---
* 安装 Node.js 环境
  > 打开cmd 运行`npm install -g beauty`。


验证
---
* 在 `cmd` 下，输入 `beauty version`，输出 `版本说明` 则配置成功。

功能
---
```
color        配置交互窗口颜色
version      查看 beauty 版本
```
![功能一览](http://i.imgur.com/E7MvvQv.png)



例子
---
**1. 直接运行beauty 。**
```
c:\> beauty
Usage: cli [options] [command]

Options:
  -V, --version   output the version number
  -h, --help      display help for command

Commands:
  color           set your cmd interface`color.
  help [command]  display help for command
```



依赖
---
* <https://github.com/tj/commander.js>

第三方包
---
* <https://github.com/enquirer/enquirer>

下一步
---
- [ ] 自动升级，例如 `beauty upgrade` .
- [ ] `beauty.exe` 增加 `Chocolatey` 方案。
- [ ] 支持多系统。（ `MAC`, `Linux` ）

相关链接
---
* [更新日志](https://github.com/xianengzhi/beauty/blob/main/README.md)
* [联系方式](https://weibo.com/2744163510) | [邮件](xianengzhi@gmail.com) 
* [反馈](https://github.com/xianengzhi/beauty/issues)

感谢
---
* 图标来自 <http://www.easyicon.net> 。
* 页面设计参考 [You-Get](https://you-get.org/) 。

许可
---
[![license-badge]][license-link]

<!-- Link -->
[www-badge]:        https://img.shields.io/npm/l/beauty?style=plastic
[www-link]:         https://github.com/xianengzhi/beauty
[version-badge]:    https://img.shields.io/badge/lastest_version-0.2.0-blue.svg
[version-link]:     https://github.com/xianengzhi/beauty/releases
[travis-badge]:     https://img.shields.io/badge/lastest_version-0.2.0-blue.svg
[travis-link]:      https://github.com/xianengzhi/beauty/blob/main/README.md
[gitter-badge]:     https://img.shields.io/badge/lastest_version-0.2.0-blue.svg
[gitter-link]:      https://github.com/xianengzhi/beauty
[slack-badge]:      https://img.shields.io/badge/chat-slack-orange.svg
[slack-link]:       https://github.com/xianengzhi/beauty
[jianliao-badge]:   https://img.shields.io/badge/chat-jianliao-yellowgreen.svg
[jianliao-link]:    https://guest.jianliao.com/rooms/76dce8b01v
[license-badge]:    https://img.shields.io/github/license/mashape/apistatus.svg
[license-link]:     https://opensource.org/licenses/MIT
