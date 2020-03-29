(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{319:function(t,a,s){"use strict";s.r(a);var e=s(13),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),s("p",[t._v('firewalld 是 CentOS 7 新增的特性，其支持动态更新，且添加了防火墙 "zones" 的概念。')]),t._v(" "),s("p",[t._v("firewalld 与 iptables 自身并不具备防火墙的功能，都需要通过内核的 netfilter 来实现，它们的作用都是维护过滤的规则。")]),t._v(" "),s("p",[t._v("firewalld 的配置文件存放在 "),s("code",[t._v("/usr/lib/firewalld/")]),t._v(" 和 "),s("code",[t._v("/etc/firewalld/")]),t._v(" 里的 XML 文件中。")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装")]),t._v("\nyum "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" firewalld firewall-config\n")])])]),s("h2",{attrs:{id:"指令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#指令"}},[t._v("#")]),t._v(" 指令")]),t._v(" "),s("blockquote",[s("p",[t._v("可能需要先使用 systemctl 套件启用服务。")]),t._v(" "),s("p",[t._v("除了使用命令格式外，还可以使用 GUI，不过需要注意的是在登录时需要 "),s("code",[t._v("ssh -Y user@ip")]),t._v(" 。")])]),t._v(" "),s("div",{staticClass:"custom-block danger"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("firewall-cmd [Options ... ]")])]),t._v(" "),s("h3",{attrs:{id:"_1-状态选项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-状态选项"}},[t._v("#")]),t._v(" 1. 状态选项")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("option")]),t._v(" "),s("th",[t._v("effect")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("--state")]),t._v(" "),s("td",[t._v("firewalld 的状态。")])]),t._v(" "),s("tr",[s("td",[t._v("--reload")]),t._v(" "),s("td",[t._v("不中断服务的重新加载。")])]),t._v(" "),s("tr",[s("td",[t._v("--complete-reload")]),t._v(" "),s("td",[t._v("中断所有连接的重新加载。")])]),t._v(" "),s("tr",[s("td",[t._v("--runtime-to-permanent")]),t._v(" "),s("td",[t._v("将当前防火墙的规则永久保存。")])]),t._v(" "),s("tr",[s("td",[t._v("--check-config")]),t._v(" "),s("td",[t._v("检查配置正确性。")])])])]),t._v(" "),s("h3",{attrs:{id:"_2-日志选项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-日志选项"}},[t._v("#")]),t._v(" 2. 日志选项")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("option")]),t._v(" "),s("th",[t._v("effect")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("--get-log-denied")]),t._v(" "),s("td",[t._v("获取记录被拒绝的日志。")])]),t._v(" "),s("tr",[s("td",[t._v("--set-log-denied="),s("value")],1),t._v(" "),s("td",[t._v("设置记录被拒绝的日志，只能为 'all','unicast','broadcast','multicast','off' 其中的一个。")])])])]),t._v(" "),s("h2",{attrs:{id:"操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#操作"}},[t._v("#")]),t._v(" 操作")]),t._v(" "),s("p",[t._v("在开始操作前需要对 zone 有一定的了解。")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("zone")]),t._v(" "),s("th",[t._v("zh")]),t._v(" "),s("th",[t._v("effect")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("drop")]),t._v(" "),s("td",[t._v("丢弃")]),t._v(" "),s("td",[t._v("任何接收的网络数据包都被丢弃，没有任何回复。仅能有发送出去的网络连接。")])]),t._v(" "),s("tr",[s("td",[t._v("block")]),t._v(" "),s("td",[t._v("限制")]),t._v(" "),s("td",[t._v("任何接收的网络连接都被 "),s("code",[t._v("IPv4")]),t._v(" 的 icmp-host-prohibited 信息和 "),s("code",[t._v("IPv6")]),t._v(" 的 icmp6-adm-prohibited 信息所拒绝。")])]),t._v(" "),s("tr",[s("td",[t._v("public")]),t._v(" "),s("td",[t._v("公共")]),t._v(" "),s("td",[t._v("在公共区域内使用，不能相信网络内的其他计算机不会对您的计算机造成危害，只能接收经过选取的连接。")])]),t._v(" "),s("tr",[s("td",[t._v("external")]),t._v(" "),s("td",[t._v("外部")]),t._v(" "),s("td",[t._v("特别是为路由器启用了伪装功能的外部网。您不能信任来自网络的其他计算，不能相信它们不会对您的计算机造成危害，只能接收经过选择的连接。")])]),t._v(" "),s("tr",[s("td",[t._v("dmz")]),t._v(" "),s("td",[t._v("非军事区")]),t._v(" "),s("td",[t._v("用于您的非军事区内的电脑，此区域内可公开访问，可以有限地进入您的内部网络，仅仅接收经过选择的连接。")])]),t._v(" "),s("tr",[s("td",[t._v("work")]),t._v(" "),s("td",[t._v("工作")]),t._v(" "),s("td",[t._v("用于工作区。您可以基本相信网络内的其他电脑不会危害您的电脑。仅仅接收经过选择的连接。")])]),t._v(" "),s("tr",[s("td",[t._v("home")]),t._v(" "),s("td",[t._v("家庭")]),t._v(" "),s("td",[t._v("用于家庭网络。您可以基本信任网络内的其他计算机不会危害您的计算机。仅仅接收经过选择的连接。")])]),t._v(" "),s("tr",[s("td",[t._v("internal")]),t._v(" "),s("td",[t._v("内部")]),t._v(" "),s("td",[t._v("用于内部网络。您可以基本上信任网络内的其他计算机不会威胁您的计算机。仅仅接受经过选择的连接。")])]),t._v(" "),s("tr",[s("td",[t._v("trusted")]),t._v(" "),s("td",[t._v("信任")]),t._v(" "),s("td",[t._v("可接受所有的网络连接。")])])])]),t._v(" "),s("p",[s("code",[t._v("firewalld")]),t._v(" 里的默认区域被设定为公共区域。")]),t._v(" "),s("h3",{attrs:{id:"_1-service"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-service"}},[t._v("#")]),t._v(" 1. service")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 显示支持的 zone 列表：")]),t._v("\nfirewall-cmd --get-zones\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看所有 zone 详情：")]),t._v("\nfirewall-cmd --list-all-zones\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看某一 zone 详情：")]),t._v("\nfirewall-cmd --zone"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("public --list-all\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看默认 zone：")]),t._v("\nfirewall-cmd --get-default-zone\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 显示所有 services：")]),t._v("\nfirewall-cmd --get-services\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看某一服务（返回 yes/no）：")]),t._v("\nfirewall-cmd --query-service"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("service name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\nfirewall-cmd --query-service"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("http "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# no / 80")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 显示当前 service：")]),t._v("\nfirewall-cmd --list-services\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 添加服务：")]),t._v("\nfirewall-cmd --add-service"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("service name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 删除服务：")]),t._v("\nfirewall-cmd --remove-service"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("service name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 允许SSH服务通过：")]),t._v("\nfirewall-cmd --enable "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("service")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("ssh\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 禁止SSH服务通过：")]),t._v("\nfirewall-cmd --disable "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("service")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("ssh\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 添加服务至 zone：")]),t._v("\nfirewall-cmd --zone"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("public --add-service"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("service name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" --permanent\n")])])]),s("h3",{attrs:{id:"_2-port"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-port"}},[t._v("#")]),t._v(" 2. port")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看所有端口：")]),t._v("\nfirewall-cmd --list-port\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看某个端口：")]),t._v("\nfirewall-cmd --query-port"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("22")]),t._v("/tcp\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 添加某个端口：")]),t._v("\nfirewall-cmd --add-port"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("22")]),t._v("/tcp --permanent  \n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 删除某个端口：")]),t._v("\nfirewall-cmd --remove-port"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("22")]),t._v("/tcp\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 将 80 端口的流量转发至 8080：")]),t._v("\nfirewall-cmd --add-forward-port"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("port"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v(":proto"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("tcp:toport"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8080")]),t._v("   \n")])])]),s("h3",{attrs:{id:"_3-ip"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-ip"}},[t._v("#")]),t._v(" 3. IP")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 检查是否允许伪装 IP：")]),t._v("\nfirewall-cmd --query-masquerade\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 允许防火墙伪装 IP：")]),t._v("\nfirewall-cmd --add-masquerade\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 禁止防火墙伪装 IP：")]),t._v("\nfirewall-cmd --remove-masquerade\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 封禁某个 IP：")]),t._v("\nfirewall-cmd --permanent --add-rich-rule"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'rule family=ipv4 source address=\"ip\" drop'")]),t._v("\n")])])]),s("h3",{attrs:{id:"_4-rich-rule"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-rich-rule"}},[t._v("#")]),t._v(" 4. rich-rule")]),t._v(" "),s("p",[t._v("多规则命令的格式或结构如下（及"),s("a",{attrs:{href:"https://access.redhat.com/documentation/zh_cn/red_hat_enterprise_linux/7/html/security_guide/sec-using_firewalls#Configuring_Complex_Firewall_Rules_with_the_Rich-Language_Syntax",target:"_blank",rel:"noopener noreferrer"}},[t._v("解释"),s("OutboundLink")],1),t._v("）：")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("rule "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("family"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<rule family>"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("source")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("address")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<address>"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("invert"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"True"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" destination "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("address")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<address>"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("invert"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"True"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("element"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" log "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("prefix"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<prefix text>"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("level"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<log level>"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("limit "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("value")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"rate/duration"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" audit "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" accept"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("reject"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("drop "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);