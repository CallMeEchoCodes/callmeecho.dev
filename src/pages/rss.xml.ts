import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context: any) {
	const posts = await getCollection("blog");
	return rss({
		title: "Echo's Blog",
		description: "Echo's personal blog for random stuff",
		site: context.site,
		items: posts.map((post) => ({
			title: post.data.title,
			description: post.data.description,
			pubDate: post.data.date,
			updatedDate: post.data.updated,
			link: `/blog/${post.slug}`,
		})),
	});
}
