import type { SiteConfig } from "@/types/siteConfig";
import { resolvePageToggles } from "../utils/page-toggle-utils";
import { resolveSiteLang } from "../utils/site-config-utils";
import uiSettings from "./uiSettings.json";

/** 将 hex 颜色转为 HSL 色相 (0-360) */
function hexToHue(hex: string): number {
	const m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex.trim());
	if (!m) return 165;
	const r = parseInt(m[1], 16) / 255;
	const g = parseInt(m[2], 16) / 255;
	const b = parseInt(m[3], 16) / 255;
	const max = Math.max(r, g, b);
	const min = Math.min(r, g, b);
	const d = max - min;
	if (d === 0) return 0;
	let h = 0;
	switch (max) {
		case r:
			h = ((g - b) / d + (g < b ? 6 : 0)) * 60;
			break;
		case g:
			h = ((b - r) / d + 2) * 60;
			break;
		default:
			h = ((r - g) / d + 4) * 60;
	}
	return Math.round(h) % 360;
}

const SITE_LANG = resolveSiteLang("zh_CN");

const pages = resolvePageToggles({
	friends: true,
	guestbook: true,
	dynamic: true,
	projects: true,
	gallery: true,
	booknav: true,
	bilibili: false,
	bangumi: false,
	vndb: false,
	mal: false,
	sponsor: true,
});

export const siteConfig: SiteConfig = {
	title: "Firefly",
	subtitle: "Demo site",
	site_url: "https://firefly.ssyin033.top",
	description:
		"Firefly 是一款基于 Astro 框架和 Fuwari 模板开发的清新美观且现代化个人博客主题模板，专为技术爱好者和内容创作者设计。该主题融合了现代 Web 技术栈，提供了丰富的功能模块和高度可定制的界面，让您能够轻松打造出专业且美观的个人博客网站。",
	keywords: [
		"Firefly",
		"Fuwari",
		"Astro",
		"ACGN",
		"博客",
		"技术博客",
		"静态博客",
	],
	themeColor: {
		hue: hexToHue(uiSettings.themeColor || "#00c9a7"),
		defaultMode: (uiSettings.defaultMode as "light" | "dark" | "system") || "system",
	},
	pageWidth: Number(uiSettings.pageWidth) || 100,
	card: {
		border: Boolean(uiSettings.cardBorder),
		followTheme: Boolean(uiSettings.cardFollowTheme),
	},
	favicon: [
		{
			src: "/favicon/firefly-32.png",
		},
	],
	navbar: {
		logo: {
			type: "icon",
			value: "material-symbols:home-pin-outline",
		},
		navbarMode: "dynamic",
	},
	lang: SITE_LANG,
	pages,
} as unknown as SiteConfig;
