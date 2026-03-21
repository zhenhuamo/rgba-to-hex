# SEO 实施顺序说明

这份文档用于把 `SEO-fix-checklist.md` 中的修复项进一步拆解为可执行的实施顺序，方便后续按周推进。本文档同样遵循以下约束：

- 不改页面文案
- 不改品牌名称
- 不改现有 URL
- 仅聚焦技术 SEO、结构 SEO、性能 SEO 的实现顺序

## 实施目标

- 把 SEO 修复事项从“建议清单”变成“执行顺序”
- 降低后续实施时的决策成本
- 让任意工程师都能按顺序推进，不需要再重新判断优先级

## 实施原则

- 先修复会直接影响索引与规范化的问题
- 再处理结构化数据和 sitemap 这类站点级信号
- 最后做性能、内部链接、多语言与治理类优化
- 每一阶段都尽量控制改动范围，避免多处同时改动导致难以验证

## 第 1 周：先修规范化与索引边界

### 目标

优先解决会直接影响收录、规范 URL、页面信号聚合的问题。这一阶段属于最高优先级，建议先完成再进入下一阶段。

### 任务 1：首页 canonical 自引用补齐

- **涉及文件**
  - `src/app/layout.tsx`
  - 如后续拆分首页独立 metadata，则涉及首页相关 metadata 文件
- **执行动作**
  - 明确输出首页 canonical 为 `https://rgbatohex.com/`
  - 确保首页不会因为参数、协议或尾斜杠产生规范化歧义
- **完成标准**
  - 首页源码中可见明确 canonical
  - 首页 canonical 指向唯一主 URL

### 任务 2：博客首页与文章页 canonical 分离

- **涉及文件**
  - `src/app/blog/layout.tsx`
  - `src/app/blog/*/page.tsx`
- **执行动作**
  - 保留博客首页 canonical 指向 `/blog`
  - 为每篇博客文章单独输出自引用 canonical
  - 避免文章页继承博客首页 canonical
- **完成标准**
  - 博客首页 canonical 仍为 `/blog`
  - 每篇文章页 canonical 均指向自身 URL

### 任务 3：博客双 H1 清理

- **涉及文件**
  - `src/app/blog/rgba-to-hex-converter/page.tsx`
  - 其他同类博客文章页
- **执行动作**
  - 保留正文 H1
  - 将隐藏 SEO 区块中的 H1/H2 改为非标题标签，或移除隐藏标题结构
  - 不调整已有文字内容
- **完成标准**
  - 每篇文章只保留一个主 H1
  - 页面标题语义清晰，无多重 H1

### 任务 4：重复页 canonical / noindex 规则梳理

- **涉及文件**
  - `src/app/tools/**/page.tsx`
  - `src/app/layout.tsx`
  - 如后续抽象，涉及 `src/data/toolRegistry.ts`
- **执行动作**
  - 列出同义页面组，例如 `xxx`、`xxx-converter`、`xxx-tool`、`xxx-embed`
  - 明确每组主页面
  - 为非主页面决定 canonical 或 `noindex,follow` 策略
- **完成标准**
  - 每组页面有唯一主版本
  - 非主版本不再与主版本争夺索引信号

### 第 1 周验收

- 首页 canonical 已补齐
- 博客文章 canonical 全部自引用
- 抽样博客文章无双 H1
- 核心工具重复页已有统一索引策略

## 第 2 周：补全站点级 SEO 信号

### 目标

在规范化基础上，进一步补齐搜索引擎理解页面的结构化信号，并重构 `sitemap`，让抓取和索引更稳定。

### 任务 1：重构 sitemap

- **涉及文件**
  - `src/app/sitemap.ts`
  - 如采用统一配置，涉及 `src/data/toolRegistry.ts`
- **执行动作**
  - 从手写列表迁移到统一生成逻辑
  - 仅保留主页面、可索引页面、核心内容页
  - 排除 embed 页、别名页、低价值重复页
- **完成标准**
  - sitemap 结构清晰
  - 不再包含明显重复或低价值页面
  - 核心工具页、博客页、色阶页覆盖完整

### 任务 2：首页补 `WebSite` schema

- **涉及文件**
  - `src/app/layout.tsx`
  - `src/app/page.tsx`
- **执行动作**
  - 为首页输出 `WebSite` JSON-LD
  - 复用现有 title、description、站点 URL
- **完成标准**
  - 首页源码中可见 `application/ld+json`
  - schema 内容与现有 metadata 一致

### 任务 3：工具页补 `WebApplication` / `SoftwareApplication` schema

- **涉及文件**
  - `src/app/tools/**/page.tsx`
  - 可选新增公共 schema 生成工具
- **执行动作**
  - 先覆盖最核心工具页，如：
    - 首页主工具
    - `color-contrast`
    - `palette-generator`
    - 其他重点工具页
  - 逐步扩展到其他主工具页
- **完成标准**
  - 核心工具页均具备工具类结构化数据
  - schema 与页面标题、描述、URL 保持一致

### 任务 4：博客页补 `Article` / `BlogPosting` schema

- **涉及文件**
  - `src/app/blog/*/page.tsx`
- **执行动作**
  - 为文章页输出文章类 JSON-LD
  - 使用已有标题、日期、分类、描述等信息
- **完成标准**
  - 抽样文章页可检测到 `Article` 或 `BlogPosting` schema

### 任务 5：FAQ schema 补充

- **涉及文件**
  - `src/app/page.tsx`
  - 含 FAQ 的工具页与落地页
- **执行动作**
  - 将已有 FAQ 区块映射为 `FAQPage` schema
  - 不改动问题和答案文案
- **完成标准**
  - FAQ 页源码中可见对应 JSON-LD
  - FAQ 条目与现有可见内容一致

### 任务 6：Breadcrumb schema 补充

- **涉及文件**
  - `src/app/tools/**/page.tsx`
  - `src/app/blog/*/page.tsx`
  - `src/app/color-shades/**/page.tsx`
- **执行动作**
  - 为主要内容页输出 `BreadcrumbList`
  - 路径使用现有站点层级和 URL
- **完成标准**
  - 抽样工具页、博客页、色阶页均能检测到 breadcrumb schema

### 第 2 周验收

- sitemap 已切换为统一生成逻辑
- 首页具备 `WebSite` schema
- 核心工具页具备工具类 schema
- 博客文章页具备文章类 schema
- FAQ 和 Breadcrumb schema 已在核心页面落地

## 第 3 周：做治理型与结构型优化

### 目标

把零散维护的问题收束成统一管理机制，并增强站内链接和语言版本信号，为后续持续扩展做准备。

### 任务 1：引入 `toolRegistry`

- **涉及文件**
  - `src/app/tools/page.tsx`
  - `src/components/Navigation.tsx`
  - 新增建议：`src/data/toolRegistry.ts`
- **执行动作**
  - 把工具元信息从页面内部抽离到统一注册表
  - 注册字段建议包含：
    - 工具名称
    - 路由
    - 分类
    - 是否主页面
    - 是否可索引
    - 是否进入 sitemap
    - 是否为别名页
- **完成标准**
  - 导航、工具页索引、sitemap 不再多处重复维护
  - SEO 策略可通过统一配置控制

### 任务 2：增强内部链接体系

- **涉及文件**
  - `src/app/page.tsx`
  - `src/app/tools/**/page.tsx`
  - `src/app/blog/*/page.tsx`
- **执行动作**
  - 首页增加更多静态可抓取工具链接
  - 工具页底部增加相关工具模块
  - 博客页底部增加相关文章和相关工具模块
  - 优先使用现有标题作为锚文本
- **完成标准**
  - 首页、博客页、工具页之间的互链更加系统化
  - 重要页面不依赖单一路径被发现

### 任务 3：补多语言 hreflang

- **涉及文件**
  - `src/app/tools/en/**`
  - `src/app/tools/es/**`
  - `src/app/tools/pt/**`
  - 对应 metadata 位置
- **执行动作**
  - 为已存在的多语言页面建立替代关系
  - 明确每种语言页面的自引用与互相引用逻辑
- **完成标准**
  - 同主题多语言页面存在清晰语言映射
  - 不同语言版本不再互相抢主题信号

### 任务 4：embed 页与主页面索引边界统一

- **涉及文件**
  - `src/middleware.ts`
  - 支持 embed 的工具页
- **执行动作**
  - 梳理哪些页面是“展示型主页面”，哪些页面只是“嵌入承载页”
  - 为 embed 页统一 canonical 或 robots 策略
- **完成标准**
  - embed 页不再作为独立 SEO 目标页参与竞争

### 第 3 周验收

- `toolRegistry` 已建立并开始被消费
- 内部链接结构明显增强
- 多语言页面具备 hreflang
- embed 页索引边界明确

## 第 4 周：做性能与页面体验优化

### 目标

在不改变文案和 URL 的前提下，进一步优化性能与页面体验，改善搜索引擎与真实用户访问质量。

### 任务 1：字体加载优化

- **涉及文件**
  - `src/app/layout.tsx`
  - 特殊字体使用页面
- **执行动作**
  - 将仅在少量页面使用的字体移出全局加载
  - 保留全站真正通用的基础字体
- **完成标准**
  - 首屏基础资源减少
  - 普通页面不再背负低频字体成本

### 任务 2：全局脚本加载优化

- **涉及文件**
  - `src/app/layout.tsx`
- **执行动作**
  - 重新审查统计、录屏、广告脚本的加载时机
  - 尽量推迟非关键脚本
  - 避免不必要的首屏主线程占用
- **完成标准**
  - 首页与内容页脚本负担下降
  - 非关键脚本不抢占首屏资源

### 任务 3：收缩 client component 范围

- **涉及文件**
  - `src/app/page.tsx`
  - `src/app/tools/page.tsx`
  - 各工具页入口
- **执行动作**
  - 将静态内容迁移为 server component
  - 保留最小必要交互区域为 client component
- **完成标准**
  - 页面客户端 JS 体积下降
  - 页面渲染结构更轻量

### 任务 4：广告引起的 CLS 控制

- **涉及文件**
  - 含广告位的页面
  - 广告相关组件
- **执行动作**
  - 为广告位预留稳定尺寸
  - 控制广告异步渲染导致的布局跳动
- **完成标准**
  - 广告位不再频繁触发布局偏移
  - 页面体验更稳定

### 第 4 周验收

- 字体加载已按需化
- 第三方脚本加载策略更合理
- 部分重型页面已完成 client/server 边界优化
- 广告引起的 CLS 有明确控制方案并已落地

## 推荐执行顺序总览

### 第一优先级

- 首页 canonical
- 博客文章 canonical
- 博客双 H1
- 重复页 canonical / noindex

### 第二优先级

- sitemap 重构
- 首页 schema
- 工具页 schema
- 博客页 schema
- FAQ schema
- Breadcrumb schema

### 第三优先级

- `toolRegistry`
- 内部链接增强
- hreflang
- embed 索引边界整理

### 第四优先级

- 字体优化
- 脚本优化
- client/server 边界优化
- 广告 CLS 控制

## 关键文件索引

后续执行时建议优先查看：

- `src/app/layout.tsx`
- `src/app/page.tsx`
- `src/app/blog/layout.tsx`
- `src/app/blog/rgba-to-hex-converter/page.tsx`
- `src/app/sitemap.ts`
- `src/app/robots.ts`
- `src/middleware.ts`
- `src/app/tools/page.tsx`
- `src/components/Navigation.tsx`

## 与其他文档的配套关系

- `vertical-tool-roadmap.md`
  - 用于网站长期垂直方向和新增工具路线规划
- `SEO-fix-checklist.md`
  - 用于沉淀 SEO 修复项本身
- `SEO-implementation-order.md`
  - 用于规定 SEO 修复项的具体实施顺序

## 验收方式

### 文档层

- 根目录存在 `SEO-implementation-order.md`
- 文档为中文
- 文档按周次或阶段拆分清晰
- 每个阶段都包含文件落点与完成标准

### 执行层

- 实施人员无需再重新判断优先级
- 能直接据此安排每周开发任务
- 能和 `SEO-fix-checklist.md` 一一对应
