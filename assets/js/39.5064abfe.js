(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{449:function(t,e,a){"use strict";a.r(e);var _=a(20),v=Object(_.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"硬件简要介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#硬件简要介绍"}},[t._v("#")]),t._v(" 硬件简要介绍")]),t._v(" "),a("blockquote",[a("p",[t._v("本文一些图片与资料来源于"),a("a",{attrs:{href:"http://www.doyoung.net/YT/",target:"_blank",rel:"noopener noreferrer"}},[t._v("杨桃电子"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("这是"),a("code",[t._v("STM32F103")]),t._v("的一个系列的数据手册的第一页：")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/CHANShu0508/images_shack/images/20200814194817.png",height:"450px",alt:"图片说明"}}),t._v(" "),a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/CHANShu0508/images_shack/images/20200814195654.png",height:"450px",alt:"图片说明"}})]),t._v("\n这些东西基本上就是一个单片机的内部硬件信息，为了能更加顺畅的了解一个单片机，有必要首先清楚其底细。\n"),a("p",[t._v("但是首先，你最好清楚一下计算机组成："),a("a",{attrs:{href:"https://juejin.im/post/6844904070751191047",target:"_blank",rel:"noopener noreferrer"}},[t._v("简易教程"),a("OutboundLink")],1),t._v("或"),a("a",{attrs:{href:"https://www.studytonight.com/computer-architecture/",target:"_blank",rel:"noopener noreferrer"}},[t._v("系统教程"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"_1-0-核心功能区"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-0-核心功能区"}},[t._v("#")]),t._v(" 1.0 核心功能区")]),t._v(" "),a("h3",{attrs:{id:"_1-1-内核"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-内核"}},[t._v("#")]),t._v(" 1.1 内核")]),t._v(" "),a("p",[t._v("很明显，这就是一个ARM架构的核心部分")]),t._v(" "),a("h3",{attrs:{id:"_1-2-存储器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-存储器"}},[t._v("#")]),t._v(" 1.2 存储器")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("中文名称")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("英文简写")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("英文全称")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("存储器")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Memory")])])])]),t._v(" "),a("p",[t._v("存储器在单片机中一般有两种："),a("code",[t._v("Flash")]),t._v("与"),a("code",[t._v("SRAM")]),t._v("，二者的作用请参考计算机组成原理中的部分：")]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("不同点与工作流程")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/CHANShu0508/images_shack/images/20200814201626.png",alt:"diff"}}),t._v(" "),a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/CHANShu0508/images_shack/images/20200814201826.png",alt:"workflow"}})])]),t._v(" "),a("h3",{attrs:{id:"_1-3-时钟、复位与电源管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-时钟、复位与电源管理"}},[t._v("#")]),t._v(" 1.3 时钟、复位与电源管理")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("中文名称")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("英文简写")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("英文全称")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("时钟")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Clock")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("a",{attrs:{href:"https://zh.wikipedia.org/wiki/%E5%AF%A6%E6%99%82%E6%99%82%E9%90%98",target:"_blank",rel:"noopener noreferrer"}},[t._v("实时时钟"),a("OutboundLink")],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("RTC")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Real-Time Clock")])])])]),t._v(" "),a("p",[t._v("时钟就相当于整个芯片的"),a("strong",[t._v("脉搏")]),t._v("和前进的队伍中的“一二一”口号，控制着时钟周期")]),t._v(" "),a("p",[t._v("时钟的来源主要有以下几种：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("中文名称")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("英文缩写")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("英文全称")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("外部高速晶体振荡器")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("HSE")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("High-Speed External clock signal")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("外部低速晶体振荡器")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("LSE")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Low-Speed External clock signal")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("内部高速RC振荡器")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("HSI")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("High-Speed Internal clock signal")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("内部低速RC振荡器")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("LSI")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Low-Speed Internal clock signal")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("锁相环倍频输出")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("PLL")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Phase-Locked Loop")])])])]),t._v(" "),a("p",[t._v("前四种可以"),a("strong",[t._v("产生时钟信号")]),t._v("，而PLL则是修改输入到其中的时钟信号而后输出，具体的不同请见下图：")]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("HSE, LSE, HSI, LSI的区别")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/CHANShu0508/images_shack/images/20200814204606.png",alt:"diff"}})])]),t._v(" "),a("h3",{attrs:{id:"_1-4-复位"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-复位"}},[t._v("#")]),t._v(" 1.4 复位")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("中文名称")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("英文简写")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("英文全称")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("复位")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Reset")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("a",{attrs:{href:"https://baike.baidu.com/item/POR/10912499",target:"_blank",rel:"noopener noreferrer"}},[t._v("上电复位"),a("OutboundLink")],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("POR")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Power-On Reset")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("a",{attrs:{href:"https://baike.baidu.com/item/PDR/13975159",target:"_blank",rel:"noopener noreferrer"}},[t._v("掉电复位"),a("OutboundLink")],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("PDR")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Power-Down Reset")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("a",{attrs:{href:"https://baike.baidu.com/item/PVD/18064203",target:"_blank",rel:"noopener noreferrer"}},[t._v("可编程电压监测器"),a("OutboundLink")],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("PVD")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Programmable Voltage Detector")])])])]),t._v(" "),a("p",[t._v("复位就是只单片机将重新从第一条指令开始运行；下方的几种复位方式就是当检测到"),a("strong",[t._v("某处的电压高于或低于某值")]),t._v("的时候将单片机复位。")]),t._v(" "),a("h2",{attrs:{id:"_2-0-重要功能区"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-0-重要功能区"}},[t._v("#")]),t._v(" 2.0 重要功能区")]),t._v(" "),a("h3",{attrs:{id:"_2-1-低功耗"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-低功耗"}},[t._v("#")]),t._v(" 2.1 低功耗")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("中文名称")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("英文简写")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("英文全称")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("低功耗")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Low power")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("睡眠")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Sleep")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("停机")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Stop")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("待机")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Standby")])])])]),t._v(" "),a("p",[t._v("正常工作的时候单片机处于正常模式。在我们需要的时候可以将其调节为三种低功耗模式，三种模式下节电的程度依次递增，具体的节点方式如下：")]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("节电方式")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/CHANShu0508/images_shack/images/20200814210846.png",alt:"power"}})]),t._v(" "),a("ul",[a("li",[t._v("值得注意的是：前两种方式下 SRAM 尚未停止运行，而在待机模式下 SRAM 会停止运行，导致唤醒时将从头开始执行指令")])])]),t._v(" "),a("h3",{attrs:{id:"_2-2-模数转换器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-模数转换器"}},[t._v("#")]),t._v(" 2.2 模数转换器")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("中文名称")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("英文缩写")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("英文全称")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("模数转换器")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("ADC")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("A/D Converter")])])])]),t._v(" "),a("p",[t._v("也就是模拟/数字信号转换器。在数字信号中，只有表示低电平的"),a("code",[t._v("0")]),t._v("与表示高电平的"),a("code",[t._v("1")]),t._v("两种状态，而"),a("code",[t._v("ADC")]),t._v("则可以将数字信号的中间电平读取出来从而达到目的。")]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("ADC的工作")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/CHANShu0508/images_shack/images/20200814211948.png",alt:""}})]),t._v(" "),a("p",[t._v("值得注意的是：")]),t._v(" "),a("ul",[a("li",[t._v("上方黑色的线路是传统的工作模式，ADC将读取的数据通过 CPU 存储进 SRAM 中")]),t._v(" "),a("li",[t._v("为了减少 CPU 的负担，人们加入了 DMA 作为 CPU 的“小秘书”，将数据直接存进 SRAM 供 CPU 随时调用")])])]),t._v(" "),a("h3",{attrs:{id:"_2-3-dma"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-dma"}},[t._v("#")]),t._v(" 2.3 DMA")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("中文名称")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("英文缩写")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("英文全称")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("直接内存访问")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("DMA")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Direct Memory Access")])])])]),t._v(" "),a("p",[t._v("在上面提到了： DMA 是 CPU 的“小秘书”，将读取到的数据直接存进 SRAM 供 CPU 随时调用")]),t._v(" "),a("p",[t._v("在数据手册上有一行文字说明：")]),t._v(" "),a("blockquote",[a("p",[t._v("支持的外设：定时器、ADC、SPI、I"),a("sup",[t._v("2")]),t._v("C、USART")])]),t._v(" "),a("p",[t._v("所以这些外设也和上面的 ADC 一样可以直接访问内存储存数据")]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("DMA 功能原理示意图")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/CHANShu0508/images_shack/images/20200814213150.png",alt:"DMA"}})])]),t._v(" "),a("h3",{attrs:{id:"_2-4-i-o-端口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-i-o-端口"}},[t._v("#")]),t._v(" 2.4 I/O 端口")]),t._v(" "),a("blockquote",[a("p",[t._v("51/80/112个多功能双向的I/O口，所有I/O口 可以映像到16个外部中断；"),a("strong",[t._v("几乎")]),t._v("所有端口均 可容忍 5V 信号")])]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("每个")]),t._v("GPIO引脚都可以由软件配置成输出(推挽或开漏)、输入(带或不带上拉或下拉)或复用的外设功能 端口。多数GPIO引脚都与数字或模拟的复用外设共用。除了具有模拟输入功能的端口，所有的GPIO 引脚都有大电流通过能力。")])]),t._v(" "),a("p",[t._v("以上两段摘自数据手册，STM32 中的输入输出端口通常称为 "),a("code",[t._v("GPIO")])]),t._v(" "),a("p",[t._v("STM32 种会将引脚分为"),a("code",[t._v("PA")]),t._v("到"),a("code",[t._v("DE")]),t._v("五个组，每个组最多可以有15个引脚，如图：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/CHANShu0508/images_shack/images/20200814215352.png",alt:"pins"}})]),t._v(" "),a("p",[t._v("每个引脚具体能做什么，以"),a("code",[t._v("STM32F103")]),t._v("为例：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/CHANShu0508/images_shack/images/20200814215518.jpg",alt:""}})]),t._v(" "),a("p",[t._v("而 GPIO 会有8种"),a("strong",[t._v("工作模式")]),t._v("，可通过以下几篇文章详细了解：")]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("文章列表")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://blog.csdn.net/kevinhg/article/details/17490273",target:"_blank",rel:"noopener noreferrer"}},[t._v("STM32中GPIO的8种工作模式"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://durant35.github.io/2017/11/30/TACouses_ES2017_MCU_GPIO/",target:"_blank",rel:"noopener noreferrer"}},[t._v("GPIO 的几种输入输出模式"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://blog.csdn.net/whalefall/article/details/80102173",target:"_blank",rel:"noopener noreferrer"}},[t._v("STM32 GPIO的8种工作模式及相关配置寄存器"),a("OutboundLink")],1)])])]),t._v(" "),a("h3",{attrs:{id:"_2-5-调试模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-调试模式"}},[t._v("#")]),t._v(" 2.5 调试模式")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("中文名称")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("英文缩写")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("英文全称")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("串行单线调试")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("SWD")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Serial wire Debug")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("JTAG 接口")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("JTAG interfaces")])])])]),t._v(" "),a("blockquote",[a("p",[t._v("内嵌ARM的SWJ-DP接口，这是一个"),a("strong",[t._v("结合了JTAG和串行单线调试的接口")]),t._v("，可以实现串行单线调试接口或JTAG接口的连接。JTAG的TMS和TCK信号分别与SWDIO和SWCLK共用引脚，TMS脚上的一 个特殊的信号序列用于在JTAG-DP和SW-DP间切换")])]),t._v(" "),a("p",[t._v("调试模式是内嵌于 ARM 内核中的，在调试的时候可以实时追踪到某些数据的变化情况。")]),t._v(" "),a("p",[t._v("从数据手册给出的资料中可以看出："),a("code",[t._v("SWJ-DP")]),t._v("这个接口能够兼容"),a("code",[t._v("SWD")]),t._v("模式与"),a("code",[t._v("JTAG")]),t._v("调试；但是需要注意的是"),a("code",[t._v("SWD")]),t._v("只需要两线就能调试，而"),a("code",[t._v("JTAG")]),t._v("则是标准的20引脚，简单的示意如图：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/CHANShu0508/images_shack/images/20200814221343.png",alt:"debug"}})]),t._v(" "),a("h3",{attrs:{id:"_2-6-定时器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-6-定时器"}},[t._v("#")]),t._v(" 2.6 定时器")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("中文名称")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("英文缩写")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("英文全称")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("定时器")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Timer")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("通用定时器")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("TIMx (x≠1)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("高级控制定时器")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("TIM1")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("看门狗定时器")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Watchdog timer")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("滴答定时器")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("SysTick timer")])])])]),t._v(" "),a("p",[t._v("定时器就相当于闹钟一样，可以计时一段时间，而且它独立于 CPU 可以省蛆 CPU 的工作从而忙于更重要的工作")]),t._v(" "),a("h4",{attrs:{id:"_2-6-1-通用定时器与高级定时器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-6-1-通用定时器与高级定时器"}},[t._v("#")]),t._v(" 2.6.1 通用定时器与高级定时器")]),t._v(" "),a("p",[t._v("二者性能稍有不同：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/CHANShu0508/images_shack/images/20200814222636.png",alt:"diff2"}})]),t._v(" "),a("h4",{attrs:{id:"_2-6-2-看门狗定时器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-6-2-看门狗定时器"}},[t._v("#")]),t._v(" 2.6.2 看门狗定时器")]),t._v(" "),a("p",[t._v("看门狗是一个很形象的比喻：")]),t._v(" "),a("p",[t._v("这个定时器在实时的监控着 CPU。假定设置一段时间周期"),a("code",[t._v("T")]),t._v("，在这段时间内，如果 CPU 正常工作则不会忘记给这个计时器一个反馈或者信号，也就相当于“喂狗”，则程序继续正常运行；若是 CPU 没有正常运行，也就没有办法“喂狗”，那么这个计时器将会复位 CPU")]),t._v(" "),a("p",[t._v("下面是两种看门狗计时器："),a("code",[t._v("独立看门狗")]),t._v("与"),a("code",[t._v("窗口看门狗")]),t._v("的参数（基于STM32F103）：")]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("独立的看门狗")]),t._v("是基于一个12位的递减计数器和一个8位的预分频器，它由一个内部独立的40kHz的RC 振荡器提供时钟；因为这个RC振荡器独立于主时钟，所以它可运行于停机和待机模式。它可以被当 成看门狗用于在发生问题时复位整个系统，或作为一个自由定时器为应用程序提供超时管理。通过 选项字节可以配置成是软件或硬件启动看门狗。在调试模式下，计数器可以被冻结。")]),t._v(" "),a("p",[a("strong",[t._v("窗口看门狗")]),t._v("内有一个7位的递减计数器，并可以设置成自由运行。它可以被当成看门狗用于在发生问 题时复位整个系统。它由主时钟驱动，具有早期预警中断功能；在调试模式下，计数器可以被冻结。")])]),t._v(" "),a("p",[t._v("二者除了做看门狗定时器作用外，也可以作为通用的普通计时器使用")]),t._v(" "),a("h4",{attrs:{id:"_2-6-3-滴答计时器-系统时基计时器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-6-3-滴答计时器-系统时基计时器"}},[t._v("#")]),t._v(" 2.6.3 滴答计时器（系统时基计时器）")]),t._v(" "),a("p",[t._v("操作系统的多任务处理并不是 CPU 真的可以同时处理多个任务，而是在一段很短的时间内只处理一个任务，而下一个很短的时间段处理另一个任务，而这样的快速切换就有了多任务处理的效果；")]),t._v(" "),a("p",[t._v("但是这个很小的时间段是由谁来定义的呢，就是"),a("code",[t._v("滴答计时器")]),t._v("，它专用于实时操作系统")]),t._v(" "),a("p",[a("strong",[t._v("总的来讲")]),t._v("，一个单片机内部的计时器大概就如图所示：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/CHANShu0508/images_shack/images/20200814225217.png",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"_3-0-通信功能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-0-通信功能"}},[t._v("#")]),t._v(" 3.0 通信功能")]),t._v(" "),a("h3",{attrs:{id:"_3-1-i2c-总线"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-i2c-总线"}},[t._v("#")]),t._v(" 3.1 I"),a("sup",[t._v("2")]),t._v("C 总线")]),t._v(" "),a("blockquote",[a("p",[t._v("多达2个I"),a("sup",[t._v("2")]),t._v("C总线接口，能够工作于多主模式或从模式，支持标准和快速模式。I"),a("sup",[t._v("2")]),t._v("C接口支持7位或10位寻址，7位从模式时支持双从地址寻址。内置了硬件CRC发生器/校验器。 它们可以使用DMA操作并支持SMBus总线2.0版/PMBus总线")])]),t._v(" "),a("p",[t._v("I"),a("sup",[t._v("2")]),t._v("C 连接的设备是并联连接，通过每个设备的地址来与特定的设备通信：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/CHANShu0508/images_shack/images/20200814225908.png",alt:"I2C"}})]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("ul",[a("li",[t._v("I"),a("sup",[t._v("2")]),t._v("C总线是板级总线，连接线一般不超2米")]),t._v(" "),a("li",[t._v("I"),a("sup",[t._v("2")]),t._v("C的数据线上理论上需要加2K的上拉电阻")]),t._v(" "),a("li",[t._v("所有设备与单片机需要共地")])])]),t._v(" "),a("h3",{attrs:{id:"_3-2-usart"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-usart"}},[t._v("#")]),t._v(" 3.2 USART")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("中文名称")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("英文缩写")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("英文全称")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("通用同步/异步收发器")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("USART")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Universal Synchronous Asynchronous Receiver Transmitter")])])])]),t._v(" "),a("blockquote",[a("p",[t._v("STM32F103xC、STM32F103xD和STM32F103xE增强型系列产品中，内置了3个通用同步/异步收发器(USART1、USART2和USART3)，和2个通用异步收发器(UART4和UART5).")]),t._v(" "),a("p",[t._v("这5个接口提供异步通信、支持IrDA SIR ENDEC传输编解码、多处理器通信模式、单线半双工通信 模式和LIN主/从功能。")]),t._v(" "),a("p",[t._v("USART1接口通信速率可达4.5兆位/秒，其他接口的通信速率可达2.25兆位/秒。")]),t._v(" "),a("p",[t._v("USART1、USART2和USART3接口具有硬件的CTS和RTS信号管理、兼容ISO7816的智能卡模式和 类SPI通信模式，除了UART5之外所有其他接口都可以使用DMA操作。")])]),t._v(" "),a("p",[t._v("USART只是一种协议方式，根据不同电平方式分为RS232和RS485等，连接简图如图所示：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/CHANShu0508/images_shack/images/20200814230815.png",alt:"USART"}})]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("ul",[a("li",[t._v("USART是通用同步/异步收发器（带同步时钟线USART_CK）")]),t._v(" "),a("li",[t._v("UART是通用异步收发器（没有同步时钟线）")]),t._v(" "),a("li",[t._v("但最常用的是异步模式，同步模式很少用，所以二者区别不大")])])]),t._v(" "),a("h3",{attrs:{id:"_3-3-spi"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-spi"}},[t._v("#")]),t._v(" 3.3 SPI")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("中文名称")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("英文缩写")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("英文全称")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("串行外设接口")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("SPI")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Serial Peripheral Interface")])])])]),t._v(" "),a("blockquote",[a("p",[t._v("多达3个SPI接口，在从或主模式下，全双工和半双工的通信速率可达18兆位/秒。3位的预分频器可产生8种主模式频率，可配置成每帧8位或16位。硬件的CRC产生/校验"),a("strong",[t._v("支持基本的SD卡和MMC模式")])]),t._v(" "),a("p",[t._v("所有的SPI接口都可以使用DMA操作。")])]),t._v(" "),a("p",[t._v("SPI 协议用于板级设备之间的通信，其特点是协议简单稳定、速度较快而且支持读取SD卡和TF卡")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/CHANShu0508/images_shack/images/20200814231646.png",alt:"SPI"}})]),t._v(" "),a("h3",{attrs:{id:"_3-4-can-总线"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-can-总线"}},[t._v("#")]),t._v(" 3.4 CAN 总线")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("中文名称")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("英文缩写")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("英文全称")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("控制器区域网络")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("CAN")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Controller Area Network")])])])]),t._v(" "),a("blockquote",[a("p",[t._v("CAN接口兼容规范2.0A和2.0B(主动)，位速率高达1兆位/秒。它可以接收和发送11位标识符的标准帧， 也可以接收和发送29位标识符的扩展帧。具有3个发送邮箱和2个接收FIFO，3级14个可调节的滤波器。")])]),t._v(" "),a("p",[t._v("CAN由于其通信速度快、距离远、稳定且自动查错的优点，用于汽车、工业的智能设备通信；且其不需要Host设备")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/CHANShu0508/images_shack/images/20200814231657.jpg",alt:"CAN"}})]),t._v(" "),a("h3",{attrs:{id:"_3-5-usb"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-usb"}},[t._v("#")]),t._v(" 3.5 USB")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("中文名称")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("英文缩写")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("英文全称")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("通用串行总线")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("USB")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Universal Serial Bus")])])])]),t._v(" "),a("blockquote",[a("p",[t._v("STM32F103xC、STM32F103xD和STM32F103xE增强型系列产品，内嵌一个兼容全速USB的设备 控制器，遵循全速USB设备(12兆位/秒)标准，端点可由软件配置，具有待机/唤醒功能。USB专用的48MHz时钟由内部主PLL直接产生(时钟源必须是一个HSE晶体振荡器)。")])]),t._v(" "),a("p",[t._v("USB 由于能够独立供电，接口用于做PC机的从设备如鼠标、键盘、打印机之类；且USB 的时钟需要专用的高速晶振产生")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/CHANShu0508/images_shack/images/20200814231703.png",alt:"USB"}})]),t._v(" "),a("p",[t._v("为什么不把接口统一成一个协议呢？因为它们各有优缺点，适用于不同的场合。")]),t._v(" "),a("h2",{attrs:{id:"_4-0-附加功能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-0-附加功能"}},[t._v("#")]),t._v(" 4.0 附加功能")]),t._v(" "),a("h3",{attrs:{id:"_4-1-crc校验"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-crc校验"}},[t._v("#")]),t._v(" 4.1 CRC校验")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("中文名称")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("英文缩写")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("英文全称")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("循环冗余校验")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("CRC")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Cyclic Redundancy Check")])])])]),t._v(" "),a("blockquote",[a("p",[t._v("CRC(循环冗余校验)计算单元使用一个固定的多项式发生器，从一个32位的数据字产生一个CRC码。 在众多的应用中，基于CRC的技术被用于验证数据传输或存储的一致性。在EN/IEC 60335-1标准的 范围内，它提供了一种检测闪存存储器错误的手段，CRC计算单元可以用于实时地计算软件的签名，并与在链接和生成该软件时产生的签名对比。")])]),t._v(" "),a("p",[t._v("归纳起来就是：")]),t._v(" "),a("ul",[a("li",[t._v("CRC 是用于数据正确性校验的")]),t._v(" "),a("li",[t._v("由一个32位的数据字产生")]),t._v(" "),a("li",[t._v("可应用在FLASH检测")]),t._v(" "),a("li",[t._v("可用于软件签名及对比")])]),t._v(" "),a("p",[t._v("直观的显示它的原理就是：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/CHANShu0508/images_shack/images/20200814233138.png",alt:"CRC"}})]),t._v(" "),a("h3",{attrs:{id:"_4-2-芯片id"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-芯片id"}},[t._v("#")]),t._v(" 4.2 芯片ID")]),t._v(" "),a("p",[t._v("每个 STM32 芯片都有唯一的一个96位的编码（24位16进制数），通过加密算法可以实现许多产品功能")]),t._v(" "),a("h2",{attrs:{id:"_5-0-其它补充"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-0-其它补充"}},[t._v("#")]),t._v(" 5.0 其它补充")]),t._v(" "),a("h3",{attrs:{id:"_5-1-nvic"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-nvic"}},[t._v("#")]),t._v(" 5.1 NVIC")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("中文名称")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("英文缩写")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("英文全称")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("嵌套的向量式中断控制器")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("NVIC")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Nested Vectored Interrupt Controller")])])])]),t._v(" "),a("blockquote",[a("p",[t._v("STM32F103xx增强型产品内置嵌套的向量式中断控制器，能够处理多达43个可屏蔽中断通道（不包括16个Cortex-M3的中断线）和16个优先级。")])]),t._v(" "),a("p",[t._v("NVIC就是将任务划分优先级的控制器，数据手册上写出的其特点是：")]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("NVIC特点")]),t._v(" "),a("ul",[a("li",[t._v("紧耦合的NVIC能够达到低延迟的中断响应处理")]),t._v(" "),a("li",[t._v("中断向量入口地址直接进入内核")]),t._v(" "),a("li",[t._v("紧耦合的NVIC接口")]),t._v(" "),a("li",[t._v("允许中断的早期处理")]),t._v(" "),a("li",[t._v("处理晚到的较高优先级中断")]),t._v(" "),a("li",[t._v("支持中断尾部链接功能")]),t._v(" "),a("li",[t._v("自动保存处理器状态")]),t._v(" "),a("li",[t._v("中断返回时自动恢复，无需额外指令开销")]),t._v(" "),a("li",[t._v("该模块以最小的中断延迟提供灵活的中断管理功能")])])]),t._v(" "),a("h3",{attrs:{id:"_5-2-exti"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-exti"}},[t._v("#")]),t._v(" 5.2 EXTI")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("中文名称")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("英文缩写")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("英文全称")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("外部中断/事件控制器")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("EXTI")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("External Interrupt")])])])]),t._v(" "),a("blockquote",[a("p",[t._v("外部中断/事件控制器包含19个边沿检测器，用于产生中断/事件请求。每个中断线都可以独立地配置它的触发事件（上升沿或下降沿或双边沿），并能够单独地被屏蔽；有一个挂起寄存器维持所有中断请求的状态。EXTI可以检测到脉冲宽度小于内部APB2的时钟周期。多达80个通用/O口连接到16个外部中断线。")])]),t._v(" "),a("h3",{attrs:{id:"_5-3-自举模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-自举模式"}},[t._v("#")]),t._v(" 5.3 自举模式")]),t._v(" "),a("p",[t._v("在启动时，通过自举引脚可以选择三种自举模式中的一种：")]),t._v(" "),a("ul",[a("li",[t._v("从程序闪存存储器自举")]),t._v(" "),a("li",[t._v("从系统存储器自举")]),t._v(" "),a("li",[t._v("从内部SRAM自举")])]),t._v(" "),a("p",[t._v("自举加载程序（Bootloader）存放于系统存储器中，可以通过USART1对闪存重新编程。")]),t._v(" "),a("h3",{attrs:{id:"_5-4-时钟和自启动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-4-时钟和自启动"}},[t._v("#")]),t._v(" 5.4 时钟和自启动")]),t._v(" "),a("blockquote",[a("p",[t._v("系统时钟的选择是在启动时进行，复位时内部8MHz的RC振荡器被选为默认的CPU时钟，随后可以选择外部的、具失效监控的4~16MHz时钟；当检测到外部时钟失效时，它将被隔离，系统将自动地切换到内部的RC振荡器，如果使能了中断，软件可以接收到相应的中断。同样，在需要时可以采取对PLL时钟完全的中断管理（如当一个间接使用的外部振荡器失效时）")]),t._v(" "),a("p",[t._v("多个预分频器用于配置AHB的频率、高速APB（APB2）和低速APB（APB1）区域。AHB和高速APB的最高频率是72MHz，低速APB的最高频率为36MHz。参考图2的时钟驱动框图")])]),t._v(" "),a("p",[t._v("这个部分与内部总线相关，因为一个芯片内部的各部分也需要通信，总结来讲就是：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("AHB")]),t._v("是高级高性能总线，用于CPU、DMA、DSP的通信")]),t._v(" "),a("li",[a("code",[t._v("APB")]),t._v("是外围总线，用于内部其他功能的通信")]),t._v(" "),a("li",[a("code",[t._v("APB")]),t._v("分为"),a("strong",[t._v("高速")]),a("code",[t._v("APB2")]),t._v("和"),a("strong",[t._v("低速")]),a("code",[t._v("APB1")])])]),t._v(" "),a("h2",{attrs:{id:"_6-0-end"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-0-end"}},[t._v("#")]),t._v(" 6.0 End")]),t._v(" "),a("p",[t._v("至此，在你大致了解这些名词之后，尝试着看懂这张图吧！可能会有点难，但是看懂之后很有帮助：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/CHANShu0508/images_shack/images/20200814235406.png",alt:"sructure"}})]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("详细分区")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/CHANShu0508/images_shack/images/20200814235414.png",alt:"details"}})])]),t._v(" "),a("p",[t._v("祝你好运！")])])}),[],!1,null,null,null);e.default=v.exports}}]);