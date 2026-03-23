# 垂直工具开发任务表

这份文档是 `vertical-tool-roadmap.md` 的执行版，用来把“方向”和“想法”拆成真正可以排期、开发、验收的任务表。

适用前提：

- 不改品牌
- 不改现有 URL 结构策略
- 新工具继续围绕 `Web Color`、`Accessibility`、`Design Tokens` 主线推进
- 优先做能形成“工具 → 内容 → SEO → 导出”闭环的功能

## 当前真实已完成能力

- `APCA Contrast Checker` 已上线，并已完成工具页、SEO、sitemap、博客承接页闭环
- `OKLCH Scale Generator` 已上线，并已完成色阶生成、导出基础、SEO、博客承接页
- `Design Token Color Exporter` 已上线，并已完成独立工具页、OKLCH 串联、SEO、博客承接页
- 上述三条能力已进入 `toolRegistry`、`siteRoutes`、`internalLinks`、`/tools` 与 `/blog` 分发体系
- 当前下一主工具应进入 `S4-1 Accessible Palette Generator`

---

## 一、执行原则

### 1. 先做主线，不做分散型新工具

执行顺序固定为：

1. APCA 对比度检查器
2. OKLCH 色阶生成器
3. Design Token 导出器
4. 可访问性色板生成器
5. 明暗主题生成器
6. 品牌颜色审计工具
7. 色阶 / 深浅变化生成器
8. 截图转 UI 色板工具

### 2. 每次只上线一个“主工具”

每一轮开发只允许一个主工具进入上线状态，避免：

- 导航更新过多
- sitemap 频繁扩张
- SEO 落地页与真实工具页不同步
- 技术债在 `tools/page.tsx`、`Navigation.tsx`、`sitemap` 中重复堆积

### 3. 每个工具上线必须同步完成 4 件事

每个重点工具上线时，必须同时完成：

- 工具页面开发完成
- metadata / canonical / schema 完成
- 导航与工具索引接入完成
- 至少 1 篇配套博客或内容承接页进入待发布状态

### 4. 新能力优先复用，不再继续堆到旧大文件

新增核心逻辑时，禁止继续向以下位置无节制追加：

- `src/utils/colorConverter.ts`
- `src/components/Navigation.tsx`
- `src/app/tools/page.tsx`

新增能力应优先落到：

- `src/utils/<domain>.ts`
- `src/components/color-tools/*`
- `src/data/toolRegistry.ts`

---

## 二、总任务拆分

## 阶段 S0：基础治理先行

这个阶段不是新工具本身，而是为后续连续上线做基础设施整理。

### S0-1 新增 `toolRegistry`

- **优先级**：P0
- **状态**：已完成
- **目标**：把工具目录、导航、工具索引、后续 sitemap 驱动统一到一份配置
- **涉及文件**：
  - `src/data/toolRegistry.ts`
  - `src/app/tools/page.tsx`
  - `src/components/Navigation.tsx`
  - `src/lib/seo/siteRoutes.ts`
- **执行动作**：
  - 新增统一 registry 数据源
  - 抽出工具基础字段：`name`、`href`、`category`、`priority`、`keywords`、`status`、`featured`
  - 让工具索引页优先从 registry 读取核心工具信息
  - 为后续 sitemap 生成预留 `indexable`、`changeFrequency`、`priority` 字段
- **产出物**：
  - 可用的 `toolRegistry`
  - 至少 `tools/page.tsx` 接入 registry
- **验收标准**：
  - 新增一个工具时，不需要再手写多份工具列表
  - `tools/page.tsx` 不再维护一份独立工具主清单

### S0-2 抽离颜色工具共享组件目录

- **优先级**：P0
- **状态**：已完成
- **目标**：为 APCA、OKLCH、Token Exporter 复用 UI 骨架
- **涉及文件**：
  - `src/components/color-tools/ColorInputPanel.tsx`
  - `src/components/color-tools/ContrastScoreCard.tsx`
  - `src/components/color-tools/ScalePreview.tsx`
  - `src/components/color-tools/TokenExportPanel.tsx`
  - `src/components/color-tools/ColorRolePreview.tsx`
- **执行动作**：
  - 先建立组件目录和基础接口
  - 不追求一次性做满全部功能
  - 优先抽出后续 3 个核心工具都会复用的输入、预览、导出卡片
- **产出物**：
  - 共享组件骨架
- **验收标准**：
  - APCA 和 OKLCH 新工具不需要复制旧页面的整段 UI

### S0-3 约定新工具目录结构

- **优先级**：P0
- **状态**：已完成
- **目标**：避免新工具继续出现多种不一致实现模式
- **涉及目录**：

```text
src/app/tools/<slug>/page.tsx
src/app/tools/<slug>/client.tsx
src/app/tools/<slug>/metadata.ts
src/app/tools/<slug>/layout.tsx
```

- **执行动作**：
  - 固定后续重点工具都使用 `page + client + metadata` 模式
  - `page.tsx` 负责 SEO 壳和服务端结构
  - `client.tsx` 负责交互逻辑
  - `metadata.ts` 负责标题、描述、canonical、开放图谱
- **验收标准**：
  - 新工具 PR 中不再出现“整个 page.tsx 顶部直接 use client 且同时塞满 SEO 内容”的实现

---

## 阶段 S1：APCA 对比度检查器

### S1-1 新增 APCA 算法工具函数

- **优先级**：P0
- **状态**：已完成
- **工具路由**：`/tools/apca-contrast-checker`
- **涉及文件**：
  - `src/utils/apcaContrast.ts`
- **执行动作**：
  - 实现 APCA 对比度计算函数
  - 同时暴露 WCAG 对比度辅助函数的统一调用接口
  - 统一输入格式为 HEX / RGB 可解析颜色值
- **产出物**：
  - APCA 计算工具模块
- **验收标准**：
  - 能输出 APCA score
  - 能与当前 WCAG 结果并列展示

### S1-2 新增 APCA 工具页面骨架

- **优先级**：P0
- **状态**：已完成
- **涉及文件**：
  - `src/app/tools/apca-contrast-checker/page.tsx`
  - `src/app/tools/apca-contrast-checker/client.tsx`
  - `src/app/tools/apca-contrast-checker/metadata.ts`
  - `src/app/tools/apca-contrast-checker/layout.tsx`
- **执行动作**：
  - `page.tsx` 输出工具落地页结构
  - `client.tsx` 负责颜色输入、实时计算、场景切换
  - metadata 接入 title / description / canonical / schema
  - layout 如有必要，统一输出 Tool SEO Layout
- **页面必须包含**：
  - 前景色输入
  - 背景色输入
  - WCAG 结果
  - APCA 结果
  - UI 场景预览
  - pass / fail 标签
- **验收标准**：
  - 工具页面可独立访问
  - SEO 元数据完整
  - 交互无控制台错误

### S1-3 新增 APCA 结果卡片组件

- **优先级**：P0
- **状态**：已完成
- **涉及文件**：
  - `src/components/color-tools/ContrastScoreCard.tsx`
- **执行动作**：
  - 抽象结果卡片 UI
  - 支持展示：
    - 评分
    - 合规标签
    - 场景说明
- **验收标准**：
  - 组件可复用于后续可访问性色板生成器

### S1-4 接入导航、工具索引与 sitemap

- **优先级**：P0
- **状态**：已完成
- **涉及文件**：
  - `src/data/toolRegistry.ts`
  - `src/components/Navigation.tsx`
  - `src/app/tools/page.tsx`
  - `src/lib/seo/siteRoutes.ts`
- **执行动作**：
  - 将 APCA 工具写入 registry
  - 在工具索引中加入入口
  - 纳入 sitemap
- **验收标准**：
  - 工具页能被导航和工具页访问到
  - sitemap 中存在主路由

### S1-5 配套内容承接页

- **优先级**：P1
- **状态**：已完成
- **建议博客页**：`/blog/apca-vs-wcag`
- **执行动作**：
  - 新增一篇解释 APCA 和 WCAG 区别的博客页
  - 工具页与博客页建立互链
- **验收标准**：
  - 工具页有内容承接入口
  - 博客页有工具 CTA

---

## 阶段 S2：OKLCH 色阶生成器

### S2-1 新增 OKLCH 色阶算法模块

- **优先级**：P0
- **状态**：已完成
- **工具路由**：`/tools/oklch-scale-generator`
- **涉及文件**：
  - `src/utils/oklchScale.ts`
- **执行动作**：
  - 支持从基础色生成 `50-950` 色阶
  - 输出每一级：`HEX`、`RGB`、`HSL`、`OKLCH`
- **验收标准**：
  - 给定基础色能稳定输出完整色阶
  - 数据结构可被导出器复用

### S2-2 新增 OKLCH 工具页

- **优先级**：P0
- **状态**：已完成
- **涉及文件**：
  - `src/app/tools/oklch-scale-generator/page.tsx`
  - `src/app/tools/oklch-scale-generator/client.tsx`
  - `src/app/tools/oklch-scale-generator/metadata.ts`
- **执行动作**：
  - 输入基础色
  - 展示 `50-950` 色阶
  - 展示格式切换
  - 增加复制按钮与导出面板
- **验收标准**：
  - 色阶生成结果可复制、可导出
  - 页面可作为新的现代颜色主力入口页

### S2-3 抽象色阶预览组件

- **优先级**：P0
- **状态**：已完成
- **涉及文件**：
  - `src/components/color-tools/ScalePreview.tsx`
- **执行动作**：
  - 支持 50-950 纵向展示
  - 支持每一级显示 token 名称和值
- **验收标准**：
  - 后续色板和主题工具可以复用

### S2-4 接入 Token 导出能力预留接口

- **优先级**：P1
- **状态**：已完成
- **涉及文件**：
  - `src/components/color-tools/TokenExportPanel.tsx`
  - `src/utils/designTokens.ts`
- **执行动作**：
  - 先支持简单导出：
    - CSS Variables
    - Tailwind 对象
    - JSON
- **验收标准**：
  - OKLCH 色阶结果可直接进入导出链路

### S2-5 配套内容承接页

- **优先级**：P1
- **状态**：已完成
- **建议博客页**：`/blog/oklch-color-scale`
- **验收标准**：
  - 页面解释为何 OKLCH 更适合色阶生成
  - 工具页与博客页建立互链

---

## 阶段 S3：Design Token 导出器

### S3-1 新增 Design Token 生成模块

- **优先级**：P0
- **状态**：已完成
- **工具路由**：`/tools/design-token-color-exporter`
- **涉及文件**：
  - `src/utils/designTokens.ts`
- **执行动作**：
  - 支持单色输入
  - 支持色板输入
  - 支持角色映射：
    - `primary`
    - `surface`
    - `text`
    - `border`
- **导出格式**：
  - CSS Variables
  - Tailwind Config 片段
  - Token JSON
- **验收标准**：
  - 用户可直接复制导出结果用于前端项目

### S3-2 新增导出器页面

- **优先级**：P0
- **状态**：已完成
- **涉及文件**：
  - `src/app/tools/design-token-color-exporter/page.tsx`
  - `src/app/tools/design-token-color-exporter/client.tsx`
  - `src/app/tools/design-token-color-exporter/metadata.ts`
- **执行动作**：
  - 接入颜色输入
  - 接入角色映射 UI
  - 接入导出结果面板
- **验收标准**：
  - 页面能完成输入 → 映射 → 导出的完整闭环

### S3-3 连接 OKLCH 色阶生成器

- **优先级**：P1
- **状态**：下一主工具 / 待开始
- **执行动作**：
  - 允许 OKLCH 色阶生成器的输出直接进入导出器
  - 后续可通过 query state 或复制 JSON 方式串联
- **验收标准**：
  - 两个工具不再是孤立页面

### S3-4 配套内容承接页

- **优先级**：P1
- **状态**：依赖 S4-1 结果 / 未开始
- **建议博客页**：`/blog/design-token-color-system`
- **验收标准**：
  - 用实际前端场景解释 token 输出价值

---

## 阶段 S4：可访问性与主题生成闭环

### S4-1 可访问性色板生成器

- **优先级**：P1
- **状态**：依赖 S4-1 + S4-2 / 未开始
- **建议路由**：`/tools/accessible-palette-generator`
- **目标**：从一个基础色生成满足 `AA / AAA / APCA` 的文本、背景、按钮、边框组合
- **关键依赖**：
  - `src/utils/apcaContrast.ts`
  - `src/components/color-tools/ContrastScoreCard.tsx`
  - `src/components/color-tools/ScalePreview.tsx`
- **验收标准**：
  - 能输出一组可用 UI 颜色角色

### S4-2 明暗主题生成器

- **优先级**：P1
- **状态**：待开始
- **建议路由**：`/tools/light-dark-theme-generator`
- **涉及文件**：
  - `src/utils/themeGenerator.ts`
  - `src/components/color-tools/ColorRolePreview.tsx`
- **验收标准**：
  - 从一个品牌色生成 light / dark 两套主题 token

### S4-3 品牌颜色审计工具

- **优先级**：P1
- **状态**：待开始
- **建议路由**：`/tools/brand-color-audit`
- **涉及文件**：
  - `src/utils/brandAudit.ts`
- **验收标准**：
  - 能对输入品牌色给出对比度、层级、可用性审计结果

---

## 阶段 S5：后续扩展工具

### S5-1 色阶 / 深浅变化生成器

- **优先级**：P2
- **状态**：待开始
- **建议路由**：`/tools/color-shades-generator`
- **目标**：把现有 `color-shades` 能力工具化
- **验收标准**：
  - 支持从任意颜色生成 `tints / tones / shades / 50-950`

### S5-2 截图转 UI 色板工具

- **优先级**：P2
- **状态**：待开始
- **建议路由**：`/tools/screenshot-to-ui-palette`
- **目标**：从截图提取 UI 可用色板，而不是单纯取色
- **验收标准**：
  - 输出包含 `text / surface / accent / border` 的角色化结果

---

## 三、每个工具上线时的固定检查清单

每次上线新工具，必须逐项打勾：

### 产品与开发

- [ ] 路由已确定且不与旧工具冲突
- [ ] `page.tsx / client.tsx / metadata.ts` 已建立
- [ ] 核心算法已独立到 `src/utils/<domain>.ts`
- [ ] 至少一个共享组件已复用，而不是复制旧页面

### SEO 与结构

- [ ] canonical 已设置
- [ ] metadata title / description 已设置
- [ ] schema 已接入
- [ ] 已写入 `toolRegistry`
- [ ] 已进入 `src/lib/seo/siteRoutes.ts`
- [ ] 已在 `src/app/tools/page.tsx` 出现入口
- [ ] 已在 `src/components/Navigation.tsx` 出现入口或分类入口

### 内容承接

- [ ] 至少规划 1 个博客页标题
- [ ] 工具页内已有博客入口或后续阅读入口
- [ ] 博客页规划中已有工具 CTA

### 技术验证

- [ ] `npm run build` 通过
- [ ] 无新增 TypeScript 报错
- [ ] 无新增 metadata / sitemap 报错
- [ ] 页面在移动端和桌面端首屏结构正常

---

## 四、建议的 30 天执行节奏

### 第 1 周

- 完成 `toolRegistry`
- 完成共享颜色工具组件骨架
- 开始 APCA 对比度检查器

### 第 2 周

- APCA 对比度检查器上线
- 配套博客页进入发布状态
- 开始 OKLCH 色阶生成器

### 第 3 周

- OKLCH 色阶生成器上线
- 开始 Design Token 导出器

### 第 4 周

- Design Token 导出器上线
- 开始整理导航、工具索引、sitemap 的 registry 驱动

---

## 五、明确不建议做的事情

- 不要再新增与颜色主线弱相关的泛工具
- 不要为一个工具做大量近义重复路由
- 不要继续把新增逻辑堆进 `src/utils/colorConverter.ts`
- 不要让首页长期只承接单一旧工具定位
- 不要在没有 `toolRegistry` 的前提下继续扩张工具数量

---

## 六、当前最推荐的后续开工顺序

当前仓库已经完成 `S0` 到 `S3` 的核心交付，接下来建议按下面顺序继续推进：

1. `S4-1` 上线 `Accessible Palette Generator`
2. `S4-2` 基于可访问角色生成 light / dark 主题
3. `S4-3` 做品牌颜色审计与风险提示
4. `S5-1` 把通用色阶 / 深浅变化能力独立工具化
5. `S5-2` 视资源情况再做截图转 UI 色板工具

这条顺序的核心目标不是“工具数量变多”，而是继续强化：

- 可访问性能力
- 现代颜色能力
- 设计令牌导出能力
- 主题生成与品牌审计能力
- 导航 / sitemap / 内容承接的统一机制

这样后面每新增一个工具，都会越来越轻，而不是越来越乱。
