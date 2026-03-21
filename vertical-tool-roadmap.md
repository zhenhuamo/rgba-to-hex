# 垂直工具更新路线图

这份文档用于沉淀 `rgbatohex.com` 后续的垂直更新方向，包括新增工具优先级、页面标题与关键词建议，以及结合当前仓库结构的开发落地方案，方便后续持续参考。

## 项目定位

- 网站主线聚焦在 `Web Color`、`Accessibility`、`Design Tokens`
- 停止继续扩展与颜色工作流弱相关的泛工具
- 所有新工具尽量围绕一条主流程展开：
  - 选择颜色
  - 生成可用色阶
  - 验证可访问性
  - 导出到代码或设计令牌

## 工具优先级清单

### P0

#### 1. APCA 对比度检查器

- 当前最值得做的可访问性升级工具
- 能直接承接现有对比度工具，而不是再做一个孤立的新页面
- 非常适合前端开发者、设计师和设计系统团队

#### 2. OKLCH 色阶生成器

- 最适合把网站升级成“现代 CSS 颜色工具站”的工具
- 能自然串联 `color-shades`、`palette-generator` 以及现有多种颜色格式转换功能

#### 3. Design Token 导出器

- 非常贴近真实开发工作流
- 用户选好颜色或生成色板后，可以直接导出为前端和设计系统可用格式

### P1

#### 4. 可访问性色板生成器

- 从一个基础色生成满足 `AA`、`AAA`、`APCA` 的可用色板
- 适合按钮、文字、背景、边框、暗色模式等场景

#### 5. 明暗主题生成器

- 从一个品牌色自动生成 Light / Dark 两套主题色令牌
- 和 Design Token 导出器联动价值很高

#### 6. 品牌颜色审计工具

- 输入一组品牌色，检测对比度、明度层级和 UI 可用性
- 很适合设计系统团队、品牌团队和咨询类场景

### P2

#### 7. 色阶 / 深浅变化生成器

- 把现有 `color-shades` 能力进一步产品化、工具化
- 支持从任意颜色生成 `tints`、`tones`、`shades` 和 `50-950` 色阶

#### 8. 截图转 UI 色板工具

- 从截图或图片里提取更适合 UI 的可用色板，而不只是简单取色
- 实现成本比前几个高，建议排在后面

## 推荐上线顺序

### 第一批

- APCA 对比度检查器
- OKLCH 色阶生成器

### 第二批

- Design Token 导出器
- 可访问性色板生成器

### 第三批

- 明暗主题生成器
- 品牌颜色审计工具

### 第四批

- 色阶 / 深浅变化生成器
- 截图转 UI 色板工具

## 每个工具对应的页面标题与关键词

### APCA 对比度检查器

- 建议路由：`/tools/apca-contrast-checker`
- 标题：`APCA Contrast Checker | WCAG & APCA Color Accessibility Tool`
- 描述：`Check APCA and WCAG contrast scores for text and background colors. Generate accessible color pairs for web UI, design systems, and dark mode themes.`
- 关键词：
  - `apca contrast checker`
  - `wcag contrast checker`
  - `accessible color checker`
  - `text background contrast`
  - `apca vs wcag`
  - `color accessibility tool`

### OKLCH 色阶生成器

- 建议路由：`/tools/oklch-scale-generator`
- 标题：`OKLCH Scale Generator | Create 50-950 Color Scales`
- 描述：`Generate smooth OKLCH color scales from a base color. Export 50-950 palettes to HEX, CSS variables, Tailwind, and design tokens.`
- 关键词：
  - `oklch scale generator`
  - `oklch palette generator`
  - `50 950 color scale`
  - `tailwind color scale generator`
  - `brand color scale`
  - `oklch to hex palette`

### Design Token 导出器

- 建议路由：`/tools/design-token-color-exporter`
- 标题：`Design Token Color Exporter | CSS Variables, Tailwind, JSON`
- 描述：`Convert colors and palettes into design tokens for CSS variables, Tailwind config, JSON, and style dictionaries.`
- 关键词：
  - `design token color exporter`
  - `css variable generator`
  - `tailwind color token generator`
  - `color token json`
  - `style dictionary color tokens`
  - `design system color export`

### 可访问性色板生成器

- 建议路由：`/tools/accessible-palette-generator`
- 标题：`Accessible Palette Generator | Build AA, AAA, APCA UI Colors`
- 描述：`Generate accessible palettes from a base color for buttons, text, surfaces, and dark mode interfaces.`
- 关键词：
  - `accessible palette generator`
  - `aa aaa palette`
  - `accessible ui colors`
  - `button color accessibility`
  - `design system accessible colors`

### 明暗主题生成器

- 建议路由：`/tools/light-dark-theme-generator`
- 标题：`Light & Dark Theme Generator | Create Color Tokens for UI`
- 描述：`Generate matching light and dark theme color tokens from one brand color. Export ready-to-use UI palettes.`
- 关键词：
  - `light dark theme generator`
  - `dark mode color palette`
  - `theme token generator`
  - `brand color dark mode`
  - `ui theme colors`

### 品牌颜色审计工具

- 建议路由：`/tools/brand-color-audit`
- 标题：`Brand Color Audit Tool | Test Contrast, Range, and Usability`
- 描述：`Audit your brand colors for accessibility, tonal balance, UI usability, and design system readiness.`
- 关键词：
  - `brand color audit`
  - `brand palette checker`
  - `design system color audit`
  - `color contrast audit`
  - `ui color review`

### 色阶 / 深浅变化生成器

- 建议路由：`/tools/color-shades-generator`
- 标题：`Color Shades Generator | Tints, Tones, and Shades from Any Color`
- 描述：`Generate tints, tones, shades, and full UI scales from any HEX, RGB, HSL, or OKLCH color.`
- 关键词：
  - `color shades generator`
  - `tints and shades generator`
  - `tone generator`
  - `hex shades generator`
  - `brand color shades`

### 截图转 UI 色板工具

- 建议路由：`/tools/screenshot-to-ui-palette`
- 标题：`Screenshot to UI Palette | Extract Design System Colors from Images`
- 描述：`Upload a screenshot or image and extract a clean UI-ready palette with roles for text, surface, accent, and border.`
- 关键词：
  - `screenshot to color palette`
  - `ui palette extractor`
  - `image to design token colors`
  - `extract ui colors from image`

## 结合当前仓库结构的开发落地方案

## 当前结构观察

- 大量工具页面已经位于 `src/app/tools`
- 当前同时存在多种页面模式：
  - 只有 `page.tsx`
  - `page.tsx + metadata.ts`
  - SEO 落地页通过 iframe 嵌入真实工具页
- 工具清单目前在导航和工具索引里存在重复维护
- `src/utils/colorConverter.ts` 已经承担了较多颜色逻辑，不适合继续无节制膨胀

## 新工具推荐目录结构

后续新增重点工具，尽量统一采用下面这种结构：

```text
src/app/tools/<slug>/page.tsx
src/app/tools/<slug>/client.tsx
src/app/tools/<slug>/metadata.ts
src/app/tools/<slug>/layout.tsx    # 可选
```

这套结构和当前 `color-temperature` 这种较清晰的实现方式一致，后续维护也更稳定。

## 工具函数层建议

保留 `src/utils/colorConverter.ts` 作为基础颜色转换能力，但新的核心能力建议单独拆分文件：

- `src/utils/apcaContrast.ts`
- `src/utils/oklchScale.ts`
- `src/utils/designTokens.ts`
- `src/utils/themeGenerator.ts`
- `src/utils/brandAudit.ts`

这样可以避免所有逻辑继续堆到一个大文件里，方便复用和测试。

## 共享组件建议

建议新增一个更聚焦的颜色工具组件目录：

```text
src/components/color-tools/ColorInputPanel.tsx
src/components/color-tools/ContrastScoreCard.tsx
src/components/color-tools/ScalePreview.tsx
src/components/color-tools/TokenExportPanel.tsx
src/components/color-tools/ColorRolePreview.tsx
```

同时尽量复用当前已有的颜色输入和展示组件，避免重复造轮子。

## 路由与 SEO 策略

- 每个新工具尽量只有 1 个主路由
- 不建议继续大量创建 `-tool`、`-converter`、`-embed` 这种近义重复路由
- 如果要覆盖更多关键词，优先通过博客文章承接，而不是复制多个近似工具页

示例：

- 主工具页：`/tools/apca-contrast-checker`
- 配套文章页：`/blog/apca-vs-wcag`

## toolRegistry 建议

当前工具列表存在重复维护问题，建议新增统一配置文件：

```text
src/data/toolRegistry.ts
```

建议字段：

- `name`
- `href`
- `category`
- `priority`
- `keywords`
- `status`
- `featured`

后续可用来统一驱动：

- `src/app/tools/page.tsx`
- `src/components/Navigation.tsx`
- 将来的 sitemap 自动生成逻辑

## 每次新增重点工具时建议同步更新的文件

新增一个重点工具后，建议至少检查并更新下面这些位置：

- `src/app/sitemap.ts`
- `src/app/robots.ts`
- `src/components/Navigation.tsx`
- `src/app/tools/page.tsx`
- 当前工具自己的 `metadata.ts`

如果新工具需要支持外部 iframe 嵌入，还需要同步更新：

- `src/middleware.ts`

## 各工具的首批实现建议

### APCA 对比度检查器

建议新增文件：

- `src/app/tools/apca-contrast-checker/page.tsx`
- `src/app/tools/apca-contrast-checker/client.tsx`
- `src/app/tools/apca-contrast-checker/metadata.ts`
- `src/utils/apcaContrast.ts`
- `src/components/color-tools/ContrastScoreCard.tsx`

建议功能：

- 前景色 / 背景色输入
- WCAG 分数输出
- APCA 分数输出
- 常见 UI 场景 pass / fail 标签
- 正文、弱化文字、按钮、暗色模式等示例预览

### OKLCH 色阶生成器

建议新增文件：

- `src/app/tools/oklch-scale-generator/page.tsx`
- `src/app/tools/oklch-scale-generator/client.tsx`
- `src/app/tools/oklch-scale-generator/metadata.ts`
- `src/utils/oklchScale.ts`
- `src/components/color-tools/ScalePreview.tsx`
- `src/components/color-tools/TokenExportPanel.tsx`

建议功能：

- 基础色输入
- 自动生成 `50-950` 色阶
- 每一级同时显示 `HEX`、`RGB`、`HSL`、`OKLCH`
- 支持导出为 `CSS variables`、`Tailwind`、`JSON`

### Design Token 导出器

建议新增文件：

- `src/app/tools/design-token-color-exporter/page.tsx`
- `src/app/tools/design-token-color-exporter/client.tsx`
- `src/app/tools/design-token-color-exporter/metadata.ts`
- `src/utils/designTokens.ts`
- `src/components/color-tools/TokenExportPanel.tsx`

建议功能：

- 单色和色板输入
- 支持角色映射，如 `primary`、`surface`、`text`、`border`
- 支持导出为 `CSS`、`Tailwind`、Token JSON

## 建议的 30 天更新节奏

### 第 1 周

- 创建 `toolRegistry`
- 上线 APCA 对比度检查器

### 第 2 周

- 上线 OKLCH 色阶生成器

### 第 3 周

- 上线 Design Token 导出器

### 第 4 周

- 补配套博客内容
- 用新的 registry 模式整理导航和 sitemap

## 明确不建议继续做的事情

- 继续新增与颜色主线弱相关的泛工具
- 为同一个工具创建大量近义路由
- 持续把所有新增逻辑塞进 `src/utils/colorConverter.ts`
- 让首页长期停留在“只有 RGBA to HEX 单工具”的旧定位里

## 总结

网站最合理的垂直升级方向，是成为一个面向前端开发者与设计系统团队的专业颜色工作流工具站。第一阶段应重点投入在：可访问性、现代色阶生成、以及设计令牌导出这三条主线。
