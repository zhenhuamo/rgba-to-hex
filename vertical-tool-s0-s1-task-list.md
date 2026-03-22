# S0 + S1 可直接开工任务清单

这份文档是 `vertical-tool-execution-plan.md` 的进一步拆解版，只覆盖：

- `S0` 基础治理先行
- `S1` APCA 对比度检查器

目标不是继续讲方向，而是把任务拆到“工程师可以直接按顺序开工”的粒度。

默认约束：

- 不改品牌
- 不改既有 URL 策略
- 不引入重复近义路由
- 新工具沿用 `page.tsx + client.tsx + metadata.ts (+ layout.tsx)` 结构
- 开发时优先复用当前 SEO 基础设施：
  - `ToolSeoLayout`
  - `JsonLd`
  - `tool sitemap` 体系
  - 已有内链组件与 metadata 约定

---

## 一、总执行顺序

S0 和 S1 必须按下面顺序推进，不建议跳步：

1. `S0-1` 建立 `toolRegistry` 数据结构
2. `S0-2` 让 `tools/page.tsx` 先接入 registry
3. `S0-3` 为新工具目录结构建立约定模板
4. `S0-4` 抽出共享颜色工具组件骨架
5. `S1-1` 实现 APCA 核心算法模块
6. `S1-2` 搭建 APCA 工具页面骨架
7. `S1-3` 接入 APCA 结果卡片和场景预览
8. `S1-4` 接入导航、工具索引、sitemap
9. `S1-5` 补 APCA 工具页 schema / metadata / 内链
10. `S1-6` 预留 APCA 博客承接页任务
11. `S1-7` 跑构建与上线前检查

---

## 二、S0 可直接开工任务清单

## S0-1 建立 `toolRegistry` 基础文件

### 任务编号
- `S0-1-1`

### 目标
新增统一工具配置源，后续重点工具不再分散维护在：

- `src/app/tools/page.tsx`
- `src/components/Navigation.tsx`
- `src/lib/seo/siteRoutes.ts`

### 涉及文件
- 新增 `src/data/toolRegistry.ts`

### 必须完成的字段
每个工具对象至少包含：

- `name`
- `href`
- `category`
- `priority`
- `keywords`
- `status`
- `featured`
- `indexable`
- `changeFrequency`
- `sitemapPriority`

### 推荐类型定义
```ts
type ToolRegistryItem = {
  name: string
  href: string
  category: 'accessibility' | 'color-scale' | 'design-tokens' | 'color-conversion' | 'color-tools'
  priority: 'P0' | 'P1' | 'P2'
  keywords: string[]
  status: 'live' | 'planned' | 'draft'
  featured: boolean
  indexable: boolean
  changeFrequency: 'weekly' | 'monthly'
  sitemapPriority: number
}
```

### 首批必须写入的工具
这一轮不要一次性全站迁移，只需要先把“重点工具 + 现有核心工具”放进去：

- `/`
- `/tools/color-contrast`
- `/tools/palette-generator`
- `/tools/hex-to-rgba`
- `/tools/hsl-to-hex`
- `/tools/rgb-to-hsl`
- `/tools/rgb-to-cmyk`
- `/tools/cmyk-to-rgb`
- `/tools/cmyk-to-hex`
- `/tools/apca-contrast-checker`（先以 `planned` 写入）
- `/tools/oklch-scale-generator`（先以 `planned` 写入）
- `/tools/design-token-color-exporter`（先以 `planned` 写入）

### 验收标准
- `toolRegistry.ts` 存在
- 类型和数据结构可读、可扩展
- 后续新增工具时不需要先改 3 个地方再补 registry

---

## S0-2 让 `tools/page.tsx` 优先从 registry 读取重点工具

### 任务编号
- `S0-1-2`

### 目标
把工具索引页的“重点工具入口”先改为由 registry 驱动，而不是完全手写。

### 涉及文件
- `src/app/tools/page.tsx`
- `src/data/toolRegistry.ts`

### 实施方式
- 不要求一次性把整页所有分类全部改成 registry 驱动
- 本轮只先抽出一个“Featured / Core Tools”区块，用 registry 数据渲染
- 原来的大段工具分类列表可以暂时保留

### 必须新增的展示规则
只展示：

- `featured === true`
- `status !== 'draft'`

### 验收标准
- `tools/page.tsx` 至少已有一个区块来自 registry
- 后续新增 P0 工具时可以先在 registry 中上架，再决定是否补进全部分类列表

---

## S0-3 为新工具建立固定目录模板

### 任务编号
- `S0-1-3`

### 目标
让后续 APCA、OKLCH、Design Token 工具都使用统一目录结构。

### 涉及目录模板
```text
src/app/tools/<slug>/page.tsx
src/app/tools/<slug>/client.tsx
src/app/tools/<slug>/metadata.ts
src/app/tools/<slug>/layout.tsx
```

### 本轮处理方式
- 不需要先创建所有 P1 / P2 工具目录
- 只需要明确 APCA 工具会使用这套结构
- 如果仓库当前 metadata 更偏向直接 export `metadata`，则允许 `metadata.ts` 导出 metadata 对象并由 `page.tsx` 或 `layout.tsx` 引入

### 验收标准
- APCA 工具目录创建时不再临时决定结构
- 后续 PR review 有明确标准可对照

---

## S0-4 新增共享颜色工具组件骨架

### 任务编号
- `S0-2-1`

### 目标
为 APCA、OKLCH、Design Token 三个工具准备可复用组件。

### 涉及文件
- 新增 `src/components/color-tools/ContrastScoreCard.tsx`
- 新增 `src/components/color-tools/ColorInputPanel.tsx`
- 新增 `src/components/color-tools/ColorRolePreview.tsx`
- 可选新增 `src/components/color-tools/index.ts`

### 本轮只做骨架，不做全功能
#### `ColorInputPanel.tsx`
- 支持前景色 / 背景色输入区域
- 支持 HEX 文本输入
- 支持基础颜色预览块
- 不要求本轮接入所有格式转换输入

#### `ContrastScoreCard.tsx`
- 支持标题
- 支持评分值
- 支持状态标签（pass / fail / caution）
- 支持简短说明文本

#### `ColorRolePreview.tsx`
- 支持 text / background / button 的简单 UI 预览
- 用于 APCA 场景展示

### 验收标准
- APCA 工具页不需要在 `client.tsx` 中手写所有卡片 UI
- 组件命名和职责清晰，可复用

---

## S0-5 为 registry 后续接 sitemap 预留字段

### 任务编号
- `S0-1-4`

### 目标
确保 `toolRegistry` 后续能接入 `src/lib/seo/siteRoutes.ts`。

### 涉及文件
- `src/data/toolRegistry.ts`
- `src/lib/seo/siteRoutes.ts`

### 本轮要求
- 不强制立刻把整个 `siteRoutes.ts` 改成完全由 registry 生成
- 但必须保证 registry 已经包含：
  - `indexable`
  - `changeFrequency`
  - `sitemapPriority`

### 验收标准
- 后续 APCA 正式上线时，可以只增 registry + 少量 glue code 就进入 sitemap

---

## 三、S1 可直接开工任务清单

## S1-1 APCA 算法模块实现

### 任务编号
- `S1-1-1`

### 目标
新增 APCA 对比度计算模块，作为工具核心逻辑。

### 涉及文件
- 新增 `src/utils/apcaContrast.ts`

### 必须导出的函数
建议固定导出：

```ts
export function parseColorToRgb(input: string): { r: number; g: number; b: number } | null
export function calculateWcagContrast(foreground: string, background: string): number
export function calculateApcaContrast(foreground: string, background: string): number
export function getContrastVerdict(score: number, mode: 'wcag' | 'apca'): {
  label: string
  status: 'pass' | 'fail' | 'caution'
  description: string
}
```

### 本轮输入格式要求
至少支持：

- `#RRGGBB`
- `#RGB`
- 已有工具内部常用 RGB 结构（如果复用方便）

### 本轮不做
- 不追求支持所有稀有颜色格式
- 不在这里直接耦合 UI 文本

### 验收标准
- 可独立计算 APCA score
- 可同时产出 WCAG score
- 输入非法颜色时能稳定返回错误或 `null`

---

## S1-2 APCA 工具目录初始化

### 任务编号
- `S1-2-1`

### 目标
创建 APCA 工具目录和最小文件骨架。

### 涉及文件
- 新增 `src/app/tools/apca-contrast-checker/page.tsx`
- 新增 `src/app/tools/apca-contrast-checker/client.tsx`
- 新增 `src/app/tools/apca-contrast-checker/metadata.ts`
- 新增 `src/app/tools/apca-contrast-checker/layout.tsx`

### 每个文件职责固定
#### `page.tsx`
- 服务端页面壳
- 渲染标题区、工具容器、说明区
- 引入 `client.tsx`

#### `client.tsx`
- 颜色输入
- 实时计算
- 分数卡片
- 场景预览

#### `metadata.ts`
- title
- description
- canonical
- openGraph / twitter

#### `layout.tsx`
- 接入现有 `ToolSeoLayout`
- 输出 schema、breadcrumb、内链区

### 验收标准
- APCA 页面目录结构清晰
- 页面骨架跑通，即使功能还没完全接上

---

## S1-3 APCA 页面首版 UI 骨架

### 任务编号
- `S1-2-2`

### 目标
把 APCA 工具页做成可用的第一版，而不是只有算法无页面。

### 页面必须包含的区块
#### 1. Hero 区
- H1
- 一句话价值说明
- 简短辅助描述

#### 2. 输入区
- 前景色输入
- 背景色输入
- 颜色块预览

#### 3. 结果区
- WCAG 分数卡
- APCA 分数卡
- 状态标签

#### 4. 场景区
至少展示以下 4 个预览场景：
- Body Text
- Muted Text
- Button
- Dark Mode Surface

#### 5. 说明区
- 简短解释 APCA 与 WCAG 的差异
- 不需要在首版写很长内容

### 验收标准
- 页面打开即可交互
- 更换颜色时结果实时变化
- 场景预览能跟随更新

---

## S1-4 接入共享组件

### 任务编号
- `S1-3-1`

### 目标
让 APCA 工具首版就走可复用组件，而不是一次性页面代码。

### 涉及文件
- `src/components/color-tools/ContrastScoreCard.tsx`
- `src/components/color-tools/ColorInputPanel.tsx`
- `src/components/color-tools/ColorRolePreview.tsx`
- `src/app/tools/apca-contrast-checker/client.tsx`

### 本轮组件接入关系
- 输入区 → `ColorInputPanel`
- 结果区 → `ContrastScoreCard`
- 场景预览 → `ColorRolePreview`

### 验收标准
- `client.tsx` 主要负责状态与组合，不负责堆全部 UI

---

## S1-5 接入 SEO 与结构化布局

### 任务编号
- `S1-4-1`

### 目标
让 APCA 工具上线时就是完整 SEO 页面，而不是后补。

### 涉及文件
- `src/app/tools/apca-contrast-checker/metadata.ts`
- `src/app/tools/apca-contrast-checker/layout.tsx`
- 如需要：`src/components/seo/ToolSeoLayout.tsx`

### metadata 必须包含
- title
- description
- canonical
- openGraph.title
- openGraph.description
- twitter.title
- twitter.description

### layout 必须包含
- Tool SEO Layout 包装
- breadcrumb schema
- WebApplication schema
- related links 区块

### 建议 metadata 文案方向
- 标题：`APCA Contrast Checker | WCAG & APCA Color Accessibility Tool`
- 描述：`Check APCA and WCAG contrast scores for text and background colors. Generate accessible color pairs for web UI, design systems, and dark mode themes.`

### 验收标准
- 页面 head 中 canonical 正确
- 页面具备结构化数据
- 页面布局与现有工具 SEO 策略一致

---

## S1-6 接入导航、工具索引、sitemap

### 任务编号
- `S1-4-2`

### 目标
让 APCA 工具在站内真正可发现、可抓取。

### 涉及文件
- `src/data/toolRegistry.ts`
- `src/app/tools/page.tsx`
- `src/components/Navigation.tsx`
- `src/lib/seo/siteRoutes.ts`

### 执行动作
- 将 `/tools/apca-contrast-checker` 状态从 `planned` 改为 `live`
- 加入 featured 区或 accessibility 分类入口
- 写入 sitemap 路由

### 验收标准
- 可通过工具索引进入 APCA 工具页
- 导航中至少有分类入口可以到达
- sitemap 中存在该页面

---

## S1-7 增加站内内链闭环

### 任务编号
- `S1-4-3`

### 目标
让 APCA 工具不是孤立页面。

### 涉及文件
- `src/lib/seo/internalLinks.ts`
- `src/app/tools/apca-contrast-checker/layout.tsx`
- 如需要：`src/components/seo/InternalLinkSection.tsx`

### 至少增加的关联入口
APCA 工具页至少链接到：

- `/tools/color-contrast`
- `/tools/color-blindness-simulator`
- `/blog/apca-vs-wcag`（如果博客还没上线，可先保留任务，不先接死链）

### 验收标准
- 新工具页有明确 related links
- 与现有 accessibility 工具形成小闭环

---

## S1-8 博客承接页任务占位

### 任务编号
- `S1-5-1`

### 目标
为 APCA 工具同步创建内容承接任务，但本轮允许只建任务、不立即实现页面。

### 计划博客页
- `/blog/apca-vs-wcag`

### 必须沉淀的内容项
- 页面标题
- 页面描述
- 页面目标关键词
- 工具页 CTA 位置

### 验收标准
- APCA 工具上线时，内容任务已经明确，不会遗漏

---

## S1-9 开发完成后的固定验证

### 任务编号
- `S1-7-1`

### 必跑检查
- `npm run build`

### 必查页面
- `/tools/apca-contrast-checker`
- `/tools`
- `/sitemap.xml`

### 必查项
#### 页面渲染
- 无运行时报错
- 无 hydration mismatch
- 移动端首屏结构正常

#### SEO
- canonical 正确
- metadata 完整
- schema 存在
- sitemap 中存在主工具页

#### 工具功能
- 输入前景色 / 背景色后分数变化正常
- 场景预览同步变化
- WCAG 与 APCA 结果都能输出

---

## 四、S0 + S1 完成后的交付标准

完成 `S0 + S1` 后，必须达到下面的结果：

### 基础设施层
- `toolRegistry` 已存在并开始驱动至少一个页面区块
- 共享颜色工具组件目录已建立
- 新工具目录结构约定已落实到 APCA 工具上

### 工具层
- APCA 对比度检查器可访问、可交互、可索引
- APCA 工具已纳入导航 / 工具索引 / sitemap
- APCA 工具已具备 metadata、schema、内链

### 站点层
- 网站开始从“颜色转换站”进入“可访问性颜色工作流”升级路径
- 后续 `OKLCH 色阶生成器` 可以直接复用 S0 打下的基础

---

## 五、建议的开工方式

如果要直接进入实现，建议把开发分成 3 个 PR，而不是一个超大 PR：

### PR-1：基础治理
- `S0-1`
- `S0-2`
- `S0-3`
- `S0-4`
- `S0-5`

### PR-2：APCA 工具核心功能
- `S1-1`
- `S1-2`
- `S1-3`
- `S1-4`

### PR-3：APCA 上线接入
- `S1-5`
- `S1-6`
- `S1-7`
- `S1-8`
- `S1-9`

这样做的好处是：

- 每个 PR 范围清晰
- 更容易 review
- 更容易在出问题时定位回退点
- 不会把基础设施、算法、SEO、导航全部耦合在一次提交里
