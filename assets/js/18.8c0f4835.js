(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{428:function(t,s,e){"use strict";e.r(s);var a=e(20),v=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"static-修饰函数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#static-修饰函数"}},[t._v("#")]),t._v(" static 修饰函数")]),t._v(" "),e("p",[t._v("它是一个普通的"),e("strong",[t._v("全局的静态函数")]),t._v("（此说法仅在 C 语言下生效，C++有更复杂的情况）")]),t._v(" "),e("p",[t._v("这样的"),e("code",[t._v("static")]),t._v("函数与普通函数的区别是：用"),e("code",[t._v("static")]),t._v("修饰的函数，限定在"),e("strong",[t._v("本源码文件")]),t._v("中，不能被本源码文件以外的代码文件调用。而普通的函数，默认是"),e("code",[t._v("extern")]),t._v("的，也就是说它可以被其它代码文件调用。")]),t._v(" "),e("p",[t._v("在函数的返回类型前加上关键字"),e("code",[t._v("static")]),t._v("，函数就被定义成为静态函数。普通函数的定义和声明默认情况下是"),e("code",[t._v("extern")]),t._v("的，但静态函数只是在声明他的文件当中可见，不能被其他文件所用。因此定义静态函数有以下好处：")]),t._v(" "),e("ul",[e("li",[t._v("其他文件中可以定义相同名字的函数，不会发生冲突")]),t._v(" "),e("li",[t._v("静态函数不能被其他文件所用")])]),t._v(" "),e("h2",{attrs:{id:"volatile-关键字"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#volatile-关键字"}},[t._v("#")]),t._v(" volatile 关键字")]),t._v(" "),e("blockquote",[e("p",[t._v("此部分内容转载自 C 语言网")])]),t._v(" "),e("p",[e("code",[t._v("volatile")]),t._v(" 是易变的、不稳定的意思。很多人根本就没见过这个关键字，不知道它的存在。也有很多程序员知道它的存在，但从来没用过它。我对它有种“杨家有女初长成,养在深闺人未识” 的感觉。")]),t._v(" "),e("p",[e("code",[t._v("volatile")]),t._v(" 关键字和"),e("code",[t._v("const")]),t._v("一样是一种类型修饰符，用它修饰的变量表示可以被某些编译器未知的因素更改，比如操作系统、硬件或者其它线程等。遇到这个关键字声明的变量，编译器对访问该变量的代码就不再进行优化，从而可以提供对特殊地址的稳定访问。")]),t._v(" "),e("p",[t._v("先看看下面的例子：")]),t._v(" "),e("div",{staticClass:"language-c line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-c"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" j "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" i； "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//(1)语句  ")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" k "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" i； "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//(2)语句")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])]),e("p",[t._v("这时候编译器对代码进行优化，因为在 (1)、(2) 两条语句中，"),e("code",[t._v("i")]),t._v("没有被用作左值。这时候编译器认为"),e("code",[t._v("i")]),t._v(" 的值没有发生改变，所以在 (1) 语句时从内存中取出"),e("code",[t._v("i")]),t._v(" 的值赋给"),e("code",[t._v("j")]),t._v(" 之后，这个值并没有被丢掉，而是在 (2) 语句时继续用这个值给"),e("code",[t._v("k")]),t._v("赋值。编译器不会生成出汇编代码重新从内存里取"),e("code",[t._v("i")]),t._v("的值，这样提高了效率。但要注意：(1)、(2) 语句之间"),e("code",[t._v("i")]),t._v("没有被用作左值才行")]),t._v(" "),e("p",[t._v("再看另一个例子：")]),t._v(" "),e("div",{staticClass:"language-c line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-c"}},[e("code",[t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("volatile")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" j "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" i；"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//(3)语句  ")]),t._v("\n "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" k "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" i；"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//(4)语句  ")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])]),e("p",[e("code",[t._v("volatile")]),t._v(" 关键字告诉编译器i 是随时可能发生变化的，每次使用它的时候必须从内存中取出i的值，因而编译器生成的汇编代码会重新从i 的地址处读取数据放在k 中。")]),t._v(" "),e("p",[t._v("这样看来，如果i 是一个寄存器变量或者表示一个端口数据或者是多个线程的共享数据，就容易出错，所以说"),e("code",[t._v("volatile")]),t._v(" 可以保证对特殊地址的稳定访问。")]),t._v(" "),e("p",[t._v("但是注意：在VC++6.0 中，一般Debug 模式没有进行代码优化，所以这个关键字的作用有可能看不出来。你可以同时生成Debug 版和Release 版的程序做个测试。")])])}),[],!1,null,null,null);s.default=v.exports}}]);