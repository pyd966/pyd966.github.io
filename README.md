# Personal homepage

一个与博客分离的、可以直接部署到 GitHub Pages 的静态个人主页。当前内容是占位示例，视觉方向是舒展的编辑式排版，加上适合学生和 researcher 的信息结构。页面无框架、无构建步骤、无外部字体依赖。

## 本地预览

直接打开 `index.html` 即可。为了获得与线上一致的效果，也可以在本目录运行：

```powershell
python -m http.server 8000
```

然后访问 `http://localhost:8000`。

## 首次修改清单

在 `index.html` 中搜索并替换：

- `Your Name`、`YN`
- `Your University`、`ABC Lab`
- `you@example.com`
- `github.com/yourname`
- `blog.example.com`（替换为独立博客地址，页面里有顶部导航、首屏入口和独立 Blog 横幅三处链接）
- 三个示例项目、News、Experience 和 Writing

页面分区的推荐顺序是：About / News / Blog 入口 / Selected Work / Background。Background 内部使用三张独立卡片展示 Experience、Education、Awards；宽屏并排，中等屏幕两列，手机单列。Experience 使用带编号和类型标签的经历记录，Education 使用“年份 + 学位 + 学校 + 补充信息”的记录格式，Awards 使用带编号、年份、授予方和说明的条目。这样项目和研究经历是主线，教育背景和奖项作为可信度补充；Blog 则同时有三处入口，便于读者在首屏就找到。

把头像区域的 SVG 替换为自己的图片：

```html
<img src="assets/profile.webp" alt="Your Name" />
```

把简历保存为 `assets/cv.pdf`，并将导航栏中的 `assets/cv-placeholder.txt` 改为 `assets/cv.pdf`。

## GitHub Pages 部署

将 `personal-homepage` 作为独立仓库推送到 GitHub。随后在仓库的 **Settings → Pages** 中选择：

- Source: `Deploy from a branch`
- Branch: `main`
- Folder: `/ (root)`

个人主页可以使用 `yourname.github.io`，博客继续部署在单独仓库，并绑定到 `blog.your-domain.com`。主页只通过链接跳转到博客。

## 文件结构

```text
personal-homepage/
├── assets/
│   ├── favicon.svg
│   └── cv-placeholder.txt
├── index.html
├── styles.css
├── script.js
└── README.md
```
