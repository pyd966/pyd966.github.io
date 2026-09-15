# Personal homepage

一个与博客分离的、可以直接部署到 GitHub Pages 的静态个人主页。当前内容是占位示例，视觉方向是舒展的编辑式排版，加上适合学生和 researcher 的信息结构。页面无框架、无构建步骤、无外部字体依赖。

## 本地预览

直接打开 `index.html` 即可。为了获得与线上一致的效果，也可以在本目录运行：

```powershell
python -m http.server 8000
```

然后访问 `http://localhost:8000`。

## 首次修改清单

在 `index.html` 中按需补充或修改：

- 个人简介、研究兴趣和所在城市
- Email、GitHub、Google Scholar 与博客链接
- News、Selected Work、Experience 和 Awards 中的真实内容
- `assets/cv.pdf`（准备好简历后再自行添加 CV 导航）

页面分区的推荐顺序是：About / News / Blog 入口 / Selected Work / Background。Background 使用统一的 CV 风格，不再把 Experience、Education、Awards 做成三种颜色的卡片；每个分区用横向标题栏和年份对齐的记录行呈现，内容变长时只会继续向下展开。这样项目和研究经历是主线，教育背景和奖项作为可信度补充；Blog 则同时有三处入口，便于读者在首屏就找到。

头像区域目前是一个内置 SVG 插画；如果想换成自己的图片，可以替换为：

```html
<img src="assets/profile.webp" alt="Yiduo Pang" />
```

## GitHub Pages 部署

将 `personal-homepage` 作为独立仓库推送到 GitHub。推荐仓库名使用：

```text
pyd966.github.io
```

仓库已经包含 `.github/workflows/pages.yml`。推送到 `main` 后，Actions 会自动上传并发布静态文件。

首次配置时，在仓库的 **Settings → Pages** 中将 **Source** 设置为 **GitHub Actions**。之后每次推送到 `main` 都会自动部署。

博客继续部署在单独仓库，并通过主页中的 Blog 链接跳转。当前博客地址为 `pyd966.github.io/blog/`。

## 文件结构

```text
personal-homepage/
├── assets/
│   ├── favicon.svg
├── .github/
│   └── workflows/pages.yml
├── .gitignore
├── index.html
├── styles.css
├── script.js
└── README.md
```
