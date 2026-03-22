# APCA 博客承接页任务文档

## 文档用途

这份文档用于补齐 `S1-8 / S1-5-1` 的内容承接任务，为已经上线的 `APCA Contrast Checker` 工具页准备对应的博客承接页规划。

本任务文档只做“任务沉淀与执行约定”，不直接创建博客页面代码。

默认约束：

- 不改品牌
- 不改既有 URL 策略
- 不新增重复近义博客路由
- 博客承接页服务于现有 APCA 工具，而不是独立做泛内容页

---

## 任务目标

为 APCA 工具同步规划一篇博客承接页，确保工具页上线后具备：

- 面向搜索的解释型内容入口
- 面向用户的概念澄清与使用场景说明
- 面向站内 SEO 的工具页 → 博客页 → 相关工具页内链闭环

---

## 基本信息

### 任务编号
- `S1-5-1`

### 计划博客 URL
- `/blog/apca-vs-wcag`

### 页面定位
- 解释型内容页
- 对比型关键词承接页
- APCA 工具页的内容配套页

### 页面目标
让用户在搜索：

- `apca vs wcag`
- `apca contrast checker`
- `wcag vs apca contrast`
- `dark mode contrast accessibility`

这类词时，既能进入工具页，也能进入对应的博客解释页。

---

## 页面标题与描述

### 页面标题
- `APCA vs WCAG: What Changes in Modern Contrast Checking?`

### 页面描述
- `Learn the difference between APCA and WCAG contrast scoring, when each method is useful, and how to test text/background color pairs with our APCA Contrast Checker.`

### canonical
- `https://rgbatohex.com/blog/apca-vs-wcag`

---

## 目标关键词

### 主关键词
- `apca vs wcag`
- `wcag vs apca`
- `apca contrast checker`

### 次关键词
- `apca accessibility`
- `apca contrast`
- `wcag contrast checker`
- `dark mode contrast checker`
- `accessible color contrast tool`
- `apca color contrast`
- `body text contrast apca`

### 搜索意图
以“概念解释 + 工具使用 + 场景判断”为主，不做纯学术内容。

---

## 页面结构建议

### 1. Hero 区
必须包含：

- 页面主标题 `H1`
- 一句话说明 APCA 与 WCAG 的核心差异
- 直达工具页 CTA

建议表达方向：

- WCAG 更适合传统 ratio 判断
- APCA 更强调真实阅读感受与明暗极性

### 2. What Is APCA
解释：

- APCA 是什么
- 为什么它和传统 contrast ratio 不一样
- 为什么在现代 UI、深色模式、细字文本里更常被讨论

### 3. APCA vs WCAG
对比说明：

- 计算思路差异
- 输出结果差异
- 适用场景差异
- 为什么同一组颜色，APCA 和 WCAG 可能给出不同判断

### 4. When To Use Each
至少覆盖：

- 正文文本
- Button / CTA
- Muted text
- Dark mode surfaces
- Design system review

### 5. How To Test With The Tool
说明当前工具可以做什么：

- 输入前景色 / 背景色
- 同时输出 WCAG 和 APCA
- 观察 4 个场景预览
- 快速判断 body text、button、dark surface 是否够用

### 6. Practical Guidance
提供执行导向建议，例如：

- 不要只看一个分数
- 先看正文，再看组件状态
- 深色模式不要直接沿用浅色模式的文字配色逻辑
- 设计系统要同时记录 WCAG 与 APCA 的判断口径

### 7. CTA 区
引导用户回到工具页执行检查。

---

## 工具页 CTA 位置要求

博客页内至少要有以下 3 个 CTA：

### CTA-1 Hero 首屏
- 文案方向：`Try the APCA Contrast Checker`
- 链接：`/tools/apca-contrast-checker`

### CTA-2 对比解释区之后
- 文案方向：`Compare APCA and WCAG on your colors`
- 链接：`/tools/apca-contrast-checker`

### CTA-3 文章结尾
- 文案方向：`Test your text and background pair now`
- 链接：`/tools/apca-contrast-checker`

---

## 站内内链要求

### 本页必须链接到
- `/tools/apca-contrast-checker`
- `/tools/color-contrast`
- `/tools/color-blindness-simulator`

### 允许补充链接到
- `/tools/palette-generator`
- `/blog/color-contrast-checker`

### 工具页反链要求
正式创建博客页代码后，需要把以下内链补齐：

- `src/lib/seo/internalLinks.ts` 中为 `/tools/apca-contrast-checker` 加上本博客页链接
- 如需要，也可在 `/tools/color-contrast` 的 related links 中加入 `/blog/apca-vs-wcag`

---

## 建议涉及文件

本任务真正实施时，预计会涉及：

- `src/app/blog/apca-vs-wcag/page.tsx`
- `src/app/blog/apca-vs-wcag/layout.tsx`
- `src/app/blog/apca-vs-wcag/metadata.ts`
- `src/lib/seo/internalLinks.ts`
- `src/lib/seo/siteRoutes.ts`

如博客目前沿用目录级 metadata/layout 模式，则继续保持一致，不单独发明新结构。

---

## metadata 要求

### title
- `APCA vs WCAG: What Changes in Modern Contrast Checking?`

### description
- `Learn the difference between APCA and WCAG contrast scoring, when each method is useful, and how to test text/background color pairs with our APCA Contrast Checker.`

### openGraph title
- 与标题保持一致或轻微压缩

### openGraph description
- 与 description 保持一致或轻微压缩

### robots
- `index,follow`

### canonical
- `https://rgbatohex.com/blog/apca-vs-wcag`

---

## SEO 与内容边界

### 应该做的
- 解释 APCA 与 WCAG 的差异
- 引导用户使用现有工具
- 形成工具页与博客页之间的主题闭环
- 承接 accessibility / contrast / dark mode 相关搜索

### 不应该做的
- 不扩展成纯学术论文风格页面
- 不引入和当前工具无关的大段规范史
- 不新增与品牌无关的对外叙事
- 不再拆第二个近义博客 URL

---

## 页面实现优先级

### P0
- 建立博客页目录
- 补 metadata
- 写主结构和 3 个工具 CTA
- 接内链

### P1
- 补 FAQ schema
- 补文章相关 structured data
- 精修段落结构和小标题

### P2
- 如果后续有 APCA 博客系列，再扩展相关文章互链

---

## 验收标准

### 内容层
- 页面标题明确表达 `APCA vs WCAG`
- 页面描述直接服务工具转化
- 页面至少包含 3 个工具 CTA
- 页面不偏离 APCA 工具使用场景

### SEO 层
- canonical 正确
- 可索引
- metadata 完整
- 页面进入 sitemap
- 与 APCA 工具页有双向内链关系

### 产品层
- 用户读完文章后，知道：
  - APCA 和 WCAG 有什么不同
  - 为什么同一对颜色会得出不同判断
  - 应该去哪里实际测试

---

## 交付说明

这份文档完成后，表示：

- APCA 工具的博客承接任务已经明确
- 后续实现博客页时，不需要再从零整理标题、关键词、CTA 和内链策略
- `S1` 的工具上线工作与内容承接工作之间已经建立清晰接口
