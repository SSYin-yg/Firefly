import type { SidebarLayoutConfig } from "../types/sidebarConfig";
import uiSettings from "./uiSettings.json";

/**
 * 侧边栏布局配置
 * 部分选项可由 CMS「界面设置」中的 uiSettings.json 覆盖
 */
export const sidebarLayoutConfig: SidebarLayoutConfig = {
	// 是否启用侧边栏功能
	enable: true,

	// 侧边栏位置：left / right / both（由 CMS 控制）
	position: (uiSettings.sidebarPosition as "left" | "right" | "both") || "both",

	// 平板端显示哪侧侧边栏（由 CMS 控制）
	tabletSidebar: (uiSettings.tabletSidebar as "left" | "right") || "left",

	// 文章详情页隐藏侧边栏（由 CMS 控制）
	hideSidebarOnPostPage: Boolean(uiSettings.hideSidebarOnPostPage),

	// 本页没有侧栏列时，内容栏占「侧栏 + 内容栏」总宽的比例（0–1），不设置或 ≥1 则铺满
	noSidebarContentWidth: 0.6,

	// 左侧边栏组件配置列表
	leftComponents: [
		{
			type: "profile",
			enable: true,
			position: "top",
			showOnPostPage: true,
		},
		{
			type: "announcement",
			enable: true,
			position: "top",
			showOnPostPage: true,
		},
		{
			type: "music",
			enable: true,
			position: "top",
			showOnPostPage: true,
		},
		{
			type: "categories",
			enable: true,
			position: "sticky",
			showOnPostPage: true,
			specificConfig: {
				collapseThreshold: 5,
			},
		},
		{
			type: "tags",
			enable: true,
			position: "sticky",
			showOnPostPage: true,
			specificConfig: {
				collapseThreshold: 20,
			},
		},
	],

	rightComponents: [
		{
			type: "latestPosts",
			enable: true,
			position: "top",
			showOnPostPage: true,
		},
		{
			type: "stats",
			enable: true,
			position: "top",
			showOnPostPage: true,
		},
		{
			type: "info",
			enable: true,
			position: "sticky",
			showOnPostPage: true,
		},
		{
			type: "calendar",
			enable: true,
			position: "sticky",
			showOnPostPage: true,
		},
	],
};
