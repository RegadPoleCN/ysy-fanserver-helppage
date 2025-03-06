import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    {
      "text": "概述",
      "link": "/info/aboutdoc.md",
      "collapsible": true,
      "prefix": "/info/",
      "children": [
        "aboutdoc.md",
        "basic.md",
        "world-structures.md"
      ]
    },
    {
      "text": "加入服务器",
      "link": "/join/README.md",
      "prefix": "/join/",
      "collapsible": true,
      "children": [
        "java.md",
        "bedrock.md",
        "bedrock-ne.md"
      ]
    },
    {
      "text": "注册与登录",
      "link": "/authme.md",
      "collapsible": true
    },
    {
      "text": "皮肤",
      "link": "/skin.md",
      "collapsible": true
    },
    {
      "text": "基础指令集",
      "link": "/playercommands.md",
      "collapsible": true
    },
    {
      "text": "经济体系",
      "link": "/economy/basic.md",
      "prefix": "/economy/",
      "collapsible": true,
      "children": [
        "basic.md",
        "coins.md",
        "points.md",
        "permissions.md",
        "market.md"
      ]
    },
    {
      "text": "服务器机制介绍",
      "link": "/feature/season.md",
      "prefix": "/feature/",
      "collapsible": true,
      "children": [
        "season.md",
        "dominion.md",
        "pvp.md",
        "bedwars.md",
        "title.md",
        "qq.md"
      ]
    },
    {
      "text": "FAQ",
      "link": "faq.md"
    }
  ],
});
