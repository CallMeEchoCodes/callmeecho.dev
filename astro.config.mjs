import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import latte from "@catppuccin/vscode/themes/latte.json" with { type: "json" };
import mocha from "@catppuccin/vscode/themes/mocha.json" with { type: "json" };
import expressiveCode from "astro-expressive-code";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	site: "https://callmeecho.dev",
	markdown: {
		shikiConfig: {
			themes: {
				light: "catppuccin-latte",
				dark: "catppuccin-mocha",
			},
		},
	},
	integrations: [
		tailwind({
			config: {
				applyBaseStyles: false,
			},
		}),
		icon(),
		sitemap(),
		expressiveCode({
			themes: [latte, mocha],
			themeCssRoot: "html",
			themeCssSelector: (theme) => `.${theme.type == "light" ? "latte" : "mocha"}`,
			customizeTheme: (theme) => {
				theme.colors["editor.background"] = theme.colors["textBlockQuote.background"];
				theme.colors["tab.activeBackground"] = theme.colors["textBlockQuote.background"];
				theme.colors["tab.activeForeground"] = theme.colors["extensionIcon.sponsorForeground"];
				theme.colors["tab.activeBorderTop"] = theme.colors["extensionIcon.sponsorForeground"];
			},
		}),
		mdx(),
	],
});
