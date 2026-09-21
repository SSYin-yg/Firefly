import type { SidebarLayoutConfig } from "../types/sidebarConfig";
import uiSettings from "./uiSettings.json";

export const sidebarLayoutConfig: SidebarLayoutConfig = {
	enable: true,
	position: (uiSettings.sidebarPosition as "left" | "right" | "both") || "both",
	tabletSidebar: (uiSettings.tabletSidebar as "left" | "right") || "left",
	hideSidebarOnPostPage: Boolean(uiSettings.hideSidebarOnPostPage),
	noSidebarContentWidth: 0.6,
	leftComponents: [
		{ type: "profile", enable: true, position: "top", showOnPostPage: true },
		{ type: "visitorInfo", enable: true, position: "top", showOnPostPage: true },
		{ type: "announcement", enable: true, position: "top", showOnPostPage: true },
		{ type: "music", enable: true, position: "top", showOnPostPage: true },
		{ type: "categories", enable: true, position: "sticky", showOnPostPage: true, specificConfig: { collapseThreshold: 5 } },
		{ type: "tags", enable: true, position: "sticky", showOnPostPage: true, specificConfig: { collapseThreshold: 10 } },
	],
	rightComponents: [
		{ type: "dynamic", enable: true, position: "top", showOnPostPage: true, specificConfig: { dynamic: { limit: 2 } } },
		{ type: "stats", enable: true, position: "top", showOnPostPage: false },
		{ type: "siteInfo", enable: true, position: "top", showOnPostPage: false },
		{ type: "calendar", enable: true, position: "sticky", showOnPostPage: true },
	],
	mobileBottomComponents: [
		{ type: "profile", enable: true, showOnPostPage: true },
		{ type: "announcement", enable: true, showOnPostPage: true },
		{ type: "categories", enable: true, showOnPostPage: true, specificConfig: { collapseThreshold: 5 } },
		{ type: "tags", enable: true, showOnPostPage: true, specificConfig: { collapseThreshold: 10 } },
		{ type: "dynamic", enable: true, showOnPostPage: true, specificConfig: { dynamic: { limit: 2 } } },
		{ type: "stats", enable: true, showOnPostPage: true },
		{ type: "siteInfo", enable: true, showOnPostPage: true },
	],
};
