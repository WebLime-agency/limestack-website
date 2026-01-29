<script lang="ts">
	import { IconArrowRight, IconClock, IconUser } from '@tabler/icons-svelte';

	const featuredPost = {
		slug: 'how-to-source-inventory-like-a-pro',
		title: 'How to Source Inventory Like a Pro: 10 Strategies That Actually Work',
		excerpt: 'Finding profitable inventory is the foundation of any successful reselling business. In this guide, we share the top 10 strategies used by full-time resellers to source inventory consistently.',
		category: 'Guides',
		author: 'Emily Rodriguez',
		authorRole: 'Head of Customer Success',
		date: 'January 5, 2025',
		readTime: '8 min read',
		image: null
	};

	const posts = [
		{
			slug: 'ebay-best-offer-strategies',
			title: 'Mastering eBay Best Offers: A Complete Guide',
			excerpt: 'Learn how to use Best Offers to close more sales and maximize your profits on eBay.',
			category: 'eBay Tips',
			author: 'Alex Chen',
			date: 'January 3, 2025',
			readTime: '6 min read'
		},
		{
			slug: 'inventory-management-mistakes',
			title: '5 Inventory Management Mistakes That Are Killing Your Profits',
			excerpt: 'Are you making these common inventory mistakes? Here\'s how to fix them and boost your bottom line.',
			category: 'Business',
			author: 'Sarah Kim',
			date: 'December 28, 2024',
			readTime: '5 min read'
		},
		{
			slug: 'sports-card-flipping-guide',
			title: 'The Ultimate Guide to Sports Card Flipping in 2025',
			excerpt: 'Everything you need to know about buying and selling sports cards for profit in the current market.',
			category: 'Guides',
			author: 'Marcus Johnson',
			date: 'December 20, 2024',
			readTime: '12 min read'
		},
		{
			slug: 'shipping-tips-resellers',
			title: 'Shipping Tips Every Reseller Should Know',
			excerpt: 'Save money and time with these proven shipping strategies from experienced resellers.',
			category: 'Operations',
			author: 'Emily Rodriguez',
			date: 'December 15, 2024',
			readTime: '7 min read'
		},
		{
			slug: 'pricing-strategies-ebay',
			title: 'How to Price Your Items for Maximum Profit on eBay',
			excerpt: 'A data-driven approach to pricing that helps you sell faster while maintaining healthy margins.',
			category: 'eBay Tips',
			author: 'Alex Chen',
			date: 'December 10, 2024',
			readTime: '6 min read'
		},
		{
			slug: 'holiday-selling-strategies',
			title: 'Holiday Selling Strategies: Q4 Playbook for Resellers',
			excerpt: 'Maximize your sales during the busiest shopping season of the year with these proven strategies.',
			category: 'Seasonal',
			author: 'Sarah Kim',
			date: 'December 5, 2024',
			readTime: '9 min read'
		}
	];

	const categories = [
		{ name: 'All', count: 15 },
		{ name: 'Guides', count: 5 },
		{ name: 'eBay Tips', count: 4 },
		{ name: 'Business', count: 3 },
		{ name: 'Operations', count: 2 },
		{ name: 'Seasonal', count: 1 }
	];

	let selectedCategory = $state('All');
</script>

<svelte:head>
	<title>Blog - LimeStack</title>
	<meta name="description" content="Tips, guides, and insights for eBay resellers. Learn how to grow your reselling business." />
</svelte:head>

<!-- Hero -->
<section class="bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 pt-36 pb-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-3xl text-center">
			<span class="text-sm font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400">Blog</span>
			<h1 class="mt-3 text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-5xl">
				Insights for resellers
			</h1>
			<p class="mt-6 text-lg text-gray-600 dark:text-gray-300">
				Tips, guides, and strategies to help you grow your reselling business.
			</p>
		</div>
	</div>
</section>

<!-- Featured Post -->
<section class="pb-12">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<a
			href="/blog/{featuredPost.slug}"
			class="group block overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm transition-all hover:shadow-lg"
		>
			<div class="grid lg:grid-cols-2">
				<!-- Image -->
				<div class="aspect-video bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900/40 dark:to-primary-800/40 lg:aspect-auto lg:h-full">
					<div class="flex h-full items-center justify-center">
						<div class="text-center">
							<span class="text-6xl">📦</span>
							<p class="mt-2 font-medium text-primary-700 dark:text-primary-300">Featured Article</p>
						</div>
					</div>
				</div>
				<!-- Content -->
				<div class="p-8 lg:p-12">
					<div class="flex items-center gap-3">
						<span class="rounded-full bg-primary-100 dark:bg-primary-900/40 px-3 py-1 text-xs font-medium text-primary-700 dark:text-primary-300">{featuredPost.category}</span>
						<span class="text-sm text-gray-500 dark:text-gray-400">Featured</span>
					</div>
					<h2 class="mt-4 text-2xl font-bold text-gray-900 dark:text-gray-50 group-hover:text-primary-600 dark:group-hover:text-primary-400 sm:text-3xl">
						{featuredPost.title}
					</h2>
					<p class="mt-4 text-gray-600 dark:text-gray-300">
						{featuredPost.excerpt}
					</p>
					<div class="mt-6 flex items-center gap-4">
						<div class="flex items-center gap-2">
							<div class="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 text-xs font-medium text-gray-600 dark:text-gray-300">
								{featuredPost.author.split(' ').map(n => n[0]).join('')}
							</div>
							<div>
								<p class="text-sm font-medium text-gray-900 dark:text-gray-50">{featuredPost.author}</p>
								<p class="text-xs text-gray-500 dark:text-gray-400">{featuredPost.authorRole}</p>
							</div>
						</div>
						<span class="text-gray-300 dark:text-gray-600">|</span>
						<div class="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
							<span>{featuredPost.date}</span>
							<span class="flex items-center gap-1">
								<IconClock size={14} />
								{featuredPost.readTime}
							</span>
						</div>
					</div>
					<div class="mt-6 flex items-center gap-1 font-medium text-primary-600 dark:text-primary-400 group-hover:gap-2">
						Read article
						<IconArrowRight size={18} class="transition-transform group-hover:translate-x-1" />
					</div>
				</div>
			</div>
		</a>
	</div>
</section>

<!-- Blog Grid -->
<section class="py-12">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="grid gap-8 lg:grid-cols-4">
			<!-- Sidebar -->
			<aside class="lg:col-span-1">
				<div class="sticky top-24">
					<h3 class="font-semibold text-gray-900 dark:text-gray-50">Categories</h3>
					<ul class="mt-4 space-y-2">
						{#each categories as category}
							<li>
								<button
									onclick={() => (selectedCategory = category.name)}
									class="flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm transition-colors {selectedCategory === category.name ? 'bg-primary-50 dark:bg-primary-950/30 font-medium text-primary-700 dark:text-primary-300' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'}"
								>
									{category.name}
									<span class="rounded-full bg-gray-100 dark:bg-gray-700 px-2 py-0.5 text-xs text-gray-500 dark:text-gray-400">{category.count}</span>
								</button>
							</li>
						{/each}
					</ul>

					<hr class="my-6 border-gray-200 dark:border-gray-700" />

					<!-- Newsletter -->
					<div class="rounded-xl bg-primary-50 dark:bg-primary-950/30 p-6">
						<h3 class="font-semibold text-gray-900 dark:text-gray-50">Stay updated</h3>
						<p class="mt-2 text-sm text-gray-600 dark:text-gray-300">
							Get the latest tips and strategies delivered to your inbox.
						</p>
						<form class="mt-4 space-y-3">
							<input
								type="email"
								placeholder="Enter your email"
								class="block w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-3 py-2 text-sm shadow-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
							/>
							<button
								type="submit"
								class="w-full rounded-lg bg-primary-600 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-700"
							>
								Subscribe
							</button>
						</form>
					</div>
				</div>
			</aside>

			<!-- Posts Grid -->
			<div class="lg:col-span-3">
				<div class="grid gap-6 sm:grid-cols-2">
					{#each posts as post}
						<a
							href="/blog/{post.slug}"
							class="group flex flex-col overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 transition-all hover:shadow-lg"
						>
							<!-- Image placeholder -->
							<div class="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600">
								<div class="flex h-full items-center justify-center">
									<span class="text-4xl">📝</span>
								</div>
							</div>
							<!-- Content -->
							<div class="flex flex-1 flex-col p-6">
								<div class="flex items-center gap-2">
									<span class="rounded-full bg-gray-100 dark:bg-gray-700 px-2 py-0.5 text-xs font-medium text-gray-600 dark:text-gray-300">{post.category}</span>
									<span class="flex items-center gap-1 text-xs text-gray-400 dark:text-gray-500">
										<IconClock size={12} />
										{post.readTime}
									</span>
								</div>
								<h3 class="mt-3 font-semibold text-gray-900 dark:text-gray-50 group-hover:text-primary-600 dark:group-hover:text-primary-400">
									{post.title}
								</h3>
								<p class="mt-2 flex-1 text-sm text-gray-600 dark:text-gray-300">
									{post.excerpt}
								</p>
								<div class="mt-4 flex items-center justify-between text-sm">
									<div class="flex items-center gap-2">
										<div class="flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 text-xs font-medium text-gray-600 dark:text-gray-300">
											{post.author.split(' ').map(n => n[0]).join('')}
										</div>
										<span class="text-gray-600 dark:text-gray-300">{post.author}</span>
									</div>
									<span class="text-gray-400 dark:text-gray-500">{post.date}</span>
								</div>
							</div>
						</a>
					{/each}
				</div>

				<!-- Pagination -->
				<div class="mt-12 flex items-center justify-center gap-2">
					<button class="rounded-lg border border-gray-300 dark:border-gray-600 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800">
						Previous
					</button>
					<button class="rounded-lg bg-primary-600 px-4 py-2 text-sm font-medium text-white">1</button>
					<button class="rounded-lg border border-gray-300 dark:border-gray-600 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800">2</button>
					<button class="rounded-lg border border-gray-300 dark:border-gray-600 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800">3</button>
					<button class="rounded-lg border border-gray-300 dark:border-gray-600 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800">
						Next
					</button>
				</div>
			</div>
		</div>
	</div>
</section>
