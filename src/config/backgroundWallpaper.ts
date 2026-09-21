import type { BackgroundWallpaperConfig } from "@/types/backgroundWallpaper";
import uiSettings from "./uiSettings.json";

export const backgroundWallpaper: BackgroundWallpaperConfig = {
	mode: (uiSettings.wallpaperMode as "banner" | "fullscreen" | "overlay" | "none") || "banner",
	playerEnable: true,
	src: {
		desktop: [
			"assets/images/DesktopWallpaper/d1.avif",
			"assets/images/DesktopWallpaper/d2.avif",
			"assets/images/DesktopWallpaper/d3.avif",
			"assets/images/DesktopWallpaper/d4.avif",
			"assets/images/DesktopWallpaper/d5.avif",
			"assets/images/DesktopWallpaper/d6.avif",
		],
		mobile: [
			"assets/images/MobileWallpaper/m1.avif",
			"assets/images/MobileWallpaper/m2.avif",
			"assets/images/MobileWallpaper/m3.avif",
			"assets/images/MobileWallpaper/m4.avif",
			"assets/images/MobileWallpaper/m5.avif",
			"assets/images/MobileWallpaper/m6.avif",
		],
		playerUrl: "https://bed.twoleaf.cn/file/1785658612716_firefly.mp4",
	},
	common: {
		dimOpacity: 0.2,
		playerMode: "random",
		homeText: {
			enable: true,
			title: "Lovely firefly!",
			titleSize: "4.5rem",
			subtitle: ["From"],
		},
	},
} as BackgroundWallpaperConfig;
