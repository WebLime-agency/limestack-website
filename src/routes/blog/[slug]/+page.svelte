<script lang="ts">
	import { page } from '$app/stores';
	import { IconArrowLeft, IconClock, IconShare, IconBookmark, IconBrandX, IconBrandLinkedin, IconBrandFacebook } from '@tabler/icons-svelte';

	// In a real app, this would come from a CMS or database
	const post = {
		slug: 'how-to-source-inventory-like-a-pro',
		title: 'How to Source Inventory Like a Pro: 10 Strategies That Actually Work',
		excerpt: 'Finding profitable inventory is the foundation of any successful reselling business. In this guide, we share the top 10 strategies used by full-time resellers to source inventory consistently.',
		category: 'Guides',
		author: {
			name: 'Emily Rodriguez',
			role: 'Head of Customer Success',
			avatar: 'ER',
			bio: 'Former top-rated eBay seller with 10+ years of experience. Now helps LimeStack users succeed.'
		},
		date: 'January 5, 2025',
		readTime: '8 min read',
		content: `
			<p class="lead">Finding profitable inventory is the foundation of any successful reselling business. Whether you're just starting out or looking to scale, these 10 proven strategies will help you source inventory consistently and profitably.</p>

			<h2>1. Thrift Stores and Goodwill</h2>
			<p>Thrift stores remain one of the most reliable sources for resellers. The key is consistency—visit regularly, build relationships with staff, and learn what sells in your niche. Many stores have specific restock days, so ask and plan your visits accordingly.</p>
			<p><strong>Pro tip:</strong> Join your local Goodwill's "Good Stuff" email list to get notified about auctions and special items.</p>

			<h2>2. Estate Sales</h2>
			<p>Estate sales are goldmines for unique and valuable items. Use apps like EstateSales.net to find local sales and preview photos before you go. Arrive early for the best selection, or go on the last day for discounted prices.</p>
			<p>Estate sales are particularly good for:</p>
			<ul>
				<li>Vintage clothing and accessories</li>
				<li>Collectibles and antiques</li>
				<li>Electronics and media</li>
				<li>Sports equipment and memorabilia</li>
			</ul>

			<h2>3. Garage and Yard Sales</h2>
			<p>The classic sourcing method still works. Map out sales in advance using Facebook Marketplace and Craigslist. Start early—serious resellers often arrive before the listed start time.</p>
			<blockquote>
				"I made my first $10,000 month almost entirely from garage sale finds. The key is volume—hit 10-15 sales every weekend."
				<cite>— Marcus J., LimeStack user</cite>
			</blockquote>

			<h2>4. Retail Arbitrage</h2>
			<p>Retail arbitrage involves buying clearance and sale items from retail stores to resell at a profit. Use scanning apps to check prices in real-time. Target, Walmart, and CVS are popular stores for retail arbitrage.</p>

			<h2>5. Online Arbitrage</h2>
			<p>Similar to retail arbitrage, but done online. Tools like Keepa and CamelCamelCamel help you track prices and find deals. Watch for:</p>
			<ul>
				<li>Lightning deals on Amazon</li>
				<li>Clearance sections on major retailer websites</li>
				<li>Coupon stacking opportunities</li>
				<li>Credit card cashback and rewards</li>
			</ul>

			<h2>6. Wholesale and Liquidation</h2>
			<p>As you scale, wholesale and liquidation become more viable. Platforms like Liquidation.com, B-Stock, and BULQ offer pallets of returned and overstock merchandise. Start small to learn how to evaluate lots.</p>

			<h2>7. eBay (Yes, Really)</h2>
			<p>You can find underpriced items on the very platform you sell on. Use specific search techniques:</p>
			<ul>
				<li>Search for misspelled listings</li>
				<li>Filter by "newly listed" and act fast</li>
				<li>Look for auctions ending at odd hours</li>
				<li>Use LimeStack's Source feature to monitor favorite sellers</li>
			</ul>

			<h2>8. Facebook Marketplace and Local Groups</h2>
			<p>Facebook Marketplace has become one of the best sources for local deals. Set up alerts for keywords in your niche. Join local buy/sell/trade groups—they often have less competition than Marketplace.</p>

			<h2>9. Storage Unit Auctions</h2>
			<p>Made famous by reality TV, storage unit auctions can still be profitable if you know what you're doing. Attend a few auctions without bidding first to learn the process and set a strict budget.</p>

			<h2>10. Build Relationships</h2>
			<p>The best sourcing strategy is often the simplest: build relationships. Let friends and family know what you're looking for. Connect with other resellers for referrals. Build rapport with thrift store employees who might set items aside for you.</p>

			<h2>Putting It All Together</h2>
			<p>The most successful resellers use a mix of these strategies. Start with 2-3 methods that fit your schedule and capital, then expand as you learn what works for your niche.</p>
			<p>Track everything in LimeStack—where you source, what you pay, and what sells. Over time, you'll see patterns that help you focus on your most profitable sources.</p>

			<p class="lead">Ready to level up your sourcing game? Start your free LimeStack account and use our Source feature to find deals from your favorite eBay sellers.</p>
		`
	};

	const relatedPosts = [
		{
			slug: 'ebay-best-offer-strategies',
			title: 'Mastering eBay Best Offers',
			category: 'eBay Tips',
			readTime: '6 min'
		},
		{
			slug: 'inventory-management-mistakes',
			title: '5 Inventory Management Mistakes',
			category: 'Business',
			readTime: '5 min'
		},
		{
			slug: 'pricing-strategies-ebay',
			title: 'How to Price for Maximum Profit',
			category: 'eBay Tips',
			readTime: '6 min'
		}
	];
</script>

<svelte:head>
	<title>{post.title} - LimeStack Blog</title>
	<meta name="description" content={post.excerpt} />
</svelte:head>

<!-- Article Header -->
<article>
	<header class="bg-gradient-to-b from-gray-50 to-white py-12 sm:py-20">
		<div class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
			<!-- Back link -->
			<a href="/blog" class="mb-8 inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900">
				<IconArrowLeft size={16} />
				Back to Blog
			</a>

			<!-- Category & Meta -->
			<div class="mb-4 flex flex-wrap items-center gap-3">
				<span class="rounded-full bg-primary-100 px-3 py-1 text-sm font-medium text-primary-700">{post.category}</span>
				<span class="flex items-center gap-1 text-sm text-gray-500">
					<IconClock size={14} />
					{post.readTime}
				</span>
				<span class="text-sm text-gray-500">{post.date}</span>
			</div>

			<!-- Title -->
			<h1 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
				{post.title}
			</h1>

			<!-- Excerpt -->
			<p class="mt-6 text-xl text-gray-600">
				{post.excerpt}
			</p>

			<!-- Author -->
			<div class="mt-8 flex items-center justify-between border-t border-gray-100 pt-8">
				<div class="flex items-center gap-4">
					<div class="flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-lg font-semibold text-primary-700">
						{post.author.avatar}
					</div>
					<div>
						<p class="font-semibold text-gray-900">{post.author.name}</p>
						<p class="text-sm text-gray-500">{post.author.role}</p>
					</div>
				</div>
				<div class="flex items-center gap-2">
					<button class="rounded-lg border border-gray-200 p-2 text-gray-500 hover:bg-gray-50 hover:text-gray-700">
						<IconBookmark size={20} />
					</button>
					<button class="rounded-lg border border-gray-200 p-2 text-gray-500 hover:bg-gray-50 hover:text-gray-700">
						<IconShare size={20} />
					</button>
				</div>
			</div>
		</div>
	</header>

	<!-- Featured Image -->
	<div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
		<div class="aspect-video overflow-hidden rounded-2xl bg-gradient-to-br from-primary-100 to-primary-200">
			<div class="flex h-full items-center justify-center">
				<div class="text-center">
					<span class="text-8xl">📦</span>
					<p class="mt-4 text-xl font-medium text-primary-700">Sourcing Like a Pro</p>
				</div>
			</div>
		</div>
	</div>

	<!-- Article Content -->
	<div class="py-12">
		<div class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
			<div class="prose prose-lg prose-gray max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-600 prose-a:text-primary-600 prose-a:no-underline hover:prose-a:underline prose-blockquote:border-l-primary-500 prose-blockquote:bg-gray-50 prose-blockquote:py-1 prose-blockquote:pl-4 prose-blockquote:not-italic prose-li:text-gray-600">
				{@html post.content}
			</div>

			<!-- Tags -->
			<div class="mt-12 flex flex-wrap gap-2 border-t border-gray-100 pt-8">
				{#each ['Sourcing', 'Inventory', 'eBay', 'Beginners', 'Strategy'] as tag}
					<a href="/blog?tag={tag}" class="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-600 hover:bg-gray-200">
						#{tag}
					</a>
				{/each}
			</div>

			<!-- Share -->
			<div class="mt-8 flex items-center justify-between border-t border-gray-100 pt-8">
				<span class="font-medium text-gray-900">Share this article</span>
				<div class="flex gap-2">
					<a href="#" class="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200">
						<IconBrandX size={20} />
					</a>
					<a href="#" class="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200">
						<IconBrandLinkedin size={20} />
					</a>
					<a href="#" class="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200">
						<IconBrandFacebook size={20} />
					</a>
				</div>
			</div>

			<!-- Author Bio -->
			<div class="mt-8 rounded-xl bg-gray-50 p-6">
				<div class="flex items-start gap-4">
					<div class="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary-100 text-xl font-semibold text-primary-700">
						{post.author.avatar}
					</div>
					<div>
						<p class="font-semibold text-gray-900">{post.author.name}</p>
						<p class="text-sm text-primary-600">{post.author.role}</p>
						<p class="mt-2 text-sm text-gray-600">{post.author.bio}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</article>

<!-- Related Posts -->
<section class="border-t border-gray-100 bg-gray-50 py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<h2 class="text-2xl font-bold text-gray-900">Related Articles</h2>
		<div class="mt-8 grid gap-6 sm:grid-cols-3">
			{#each relatedPosts as relatedPost}
				<a
					href="/blog/{relatedPost.slug}"
					class="group rounded-xl border border-gray-200 bg-white p-6 transition-all hover:shadow-lg"
				>
					<span class="rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-600">{relatedPost.category}</span>
					<h3 class="mt-3 font-semibold text-gray-900 group-hover:text-primary-600">
						{relatedPost.title}
					</h3>
					<p class="mt-2 flex items-center gap-1 text-sm text-gray-500">
						<IconClock size={14} />
						{relatedPost.readTime}
					</p>
				</a>
			{/each}
		</div>
	</div>
</section>

<!-- Newsletter CTA -->
<section class="bg-primary-600 py-16">
	<div class="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
		<h2 class="text-2xl font-bold text-white sm:text-3xl">
			Get more tips in your inbox
		</h2>
		<p class="mx-auto mt-4 max-w-xl text-primary-100">
			Get our weekly newsletter with actionable tips, strategies, and insights for resellers.
		</p>
		<form class="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
			<input
				type="email"
				placeholder="Enter your email"
				class="flex-1 rounded-lg border-0 px-4 py-3 text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-300"
			/>
			<button
				type="submit"
				class="rounded-lg bg-white px-6 py-3 font-medium text-primary-700 transition-colors hover:bg-primary-50"
			>
				Subscribe
			</button>
		</form>
	</div>
</section>

<style>
	:global(.prose .lead) {
		font-size: 1.25rem;
		color: #4b5563;
	}
</style>
