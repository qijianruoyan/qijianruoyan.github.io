(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{320:function(_,t,a){"use strict";a.r(t);var v=a(13),s=Object(v.a)({},(function(){var _=this,t=_.$createElement,a=_._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[a("h2",{attrs:{id:"介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[_._v("#")]),_._v(" 介绍")]),_._v(" "),a("p",[_._v("Linux 中所有的内容都是以文件的形式保存和管理的，即一切皆文件，普通是文件，目录是文件，硬件设备（显示器、键盘、硬盘、打印机）是文件，就连套接字（socket）、网络通信等资源也都是文件。")]),_._v(" "),a("h2",{attrs:{id:"文件类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文件类型"}},[_._v("#")]),_._v(" 文件类型")]),_._v(" "),a("h3",{attrs:{id:"_1-普通文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-普通文件"}},[_._v("#")]),_._v(" 1. 普通文件")]),_._v(" "),a("p",[_._v("符号："),a("code",[_._v("-")]),_._v(" 。")]),_._v(" "),a("p",[_._v("类似 mp4、pdf、html 这样，可以直接拿来使用的文件都属于普通文件，Linux 用户根据访问权限的不同可以对这些文件进行查看、删除及更改操作。")]),_._v(" "),a("h3",{attrs:{id:"_2-目录文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-目录文件"}},[_._v("#")]),_._v(" 2. 目录文件")]),_._v(" "),a("p",[_._v("符号："),a("code",[_._v("d")]),_._v(" 。")]),_._v(" "),a("p",[_._v("Linux 系统中，目录文件包含了此目录中各个文件的文件名及指向这些文件的指针，打开目录等同于打开目录文件，只要你有权限，可以访问目录中的任何文件。")]),_._v(" "),a("h3",{attrs:{id:"_3-字符设备文件和块设备文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-字符设备文件和块设备文件"}},[_._v("#")]),_._v(" 3. 字符设备文件和块设备文件")]),_._v(" "),a("p",[_._v("符号："),a("code",[_._v("c（字符）")]),_._v("、"),a("code",[_._v("b（块）")]),_._v(" 。")]),_._v(" "),a("p",[_._v("这些文件通常隐藏在 "),a("code",[_._v("/dev/")]),_._v(" 目录下，当进行设备读取或外设交互才会被使用。Linux 系统中的设备，要么是字符设备文件，要么是块设备文件。")]),_._v(" "),a("h3",{attrs:{id:"_4-套接字文件（socket）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-套接字文件（socket）"}},[_._v("#")]),_._v(" 4. 套接字文件（socket）")]),_._v(" "),a("p",[_._v("符号："),a("code",[_._v("s")]),_._v(" 。")]),_._v(" "),a("p",[_._v("套接字文件一般隐藏在 "),a("code",[_._v("/var/run/")]),_._v(" 目录下，用于进程间的网络通信。")]),_._v(" "),a("h3",{attrs:{id:"_5-符号链接文件（symbolic-link）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-符号链接文件（symbolic-link）"}},[_._v("#")]),_._v(" 5. 符号链接文件（symbolic link）")]),_._v(" "),a("p",[_._v("符号："),a("code",[_._v("l")]),_._v(" 。")]),_._v(" "),a("p",[_._v("类似与 Windows 的快捷方式，是指向另一文件的指针（软连接）。")]),_._v(" "),a("h3",{attrs:{id:"_6-管道文件（pipe）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-管道文件（pipe）"}},[_._v("#")]),_._v(" 6. 管道文件（pipe）")]),_._v(" "),a("p",[_._v("符号："),a("code",[_._v("p")]),_._v(" 。")]),_._v(" "),a("p",[_._v("主要用于进程间通信。管道是由内核管理的一个缓冲区，一端链接一个进程的输出，一端链接一个进程的输入。当管道中没有信息的时候，读取进程会等待；当管道中存满信息的时候，输入进程会等待。当两个进程都终结的时候，管道会自动消失。")]),_._v(" "),a("h2",{attrs:{id:"利弊"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#利弊"}},[_._v("#")]),_._v(" 利弊")]),_._v(" "),a("h3",{attrs:{id:"_1-利"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-利"}},[_._v("#")]),_._v(" 1. 利")]),_._v(" "),a("p",[_._v("这需要结合文件这个概念来谈，文件的特性无非是读、写、权限、字符流。这样不管是文件还是硬件资源都使用同一套管理机制。比如几乎所有读取（读文件、读系统状态、读 socket、读 pipe），都可以使用 read 函数来进行；write 函数同理。")]),_._v(" "),a("h3",{attrs:{id:"_2-弊"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-弊"}},[_._v("#")]),_._v(" 2. 弊")]),_._v(" "),a("p",[_._v("弊端在于使用任何硬件设备都必须和根目录下某一目录执行挂载操作，否则无法使用。")]),_._v(" "),a("blockquote",[a("p",[_._v("挂载，指的就是将设备文件中的顶级目录链接到 Linux 目录下的某一目录，访问此目录就等同于访问设备文件。因为 Linux 具有一个以根目录为树根的文件目录结构，每个设备也同样如此，它们是相互独立的。如果我们想通过 Linux 上的根目录找到设备文件的目录结构，就必须将这两个文件系统目录合二为一。就类似古代的藩国策略吧。")]),_._v(" "),a("p",[_._v("当然，挂载并非随便选一个目录就可以挂载，挂载操作会导致原有目录文件被隐藏，如果你挂载到了系统重要的目录甚至是根目录，那么系统就会造成异常甚至崩溃")])])])}),[],!1,null,null,null);t.default=s.exports}}]);