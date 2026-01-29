<script lang="ts">
	import {
		IconArrowRight,
		IconCheck,
		IconBell,
		IconPackage,
		IconTag,
		IconTruck,
		IconSearch,
		IconCoin,
		IconChartBar,
		IconSparkles,
		IconClockHour4,
		IconTargetArrow,
		IconHeart
	} from '@tabler/icons-svelte';

	const features = [
		{
			icon: IconPackage,
			title: 'Inventory Management',
			description: 'Your single source of truth for every item you buy and sell.',
			href: '/features#inventory'
		},
		{
			icon: IconTag,
			title: 'Listing Management',
			description: 'Create, manage, and optimize all your eBay listings from one dashboard.',
			href: '/features#listings'
		},
		{
			icon: IconTruck,
			title: 'Orders & Shipping',
			description: 'Track orders in real time and buy shipping labels—no separate subscription needed.',
			href: '/features#orders'
		},
		{
			icon: IconSearch,
			title: 'Source Deals',
			description: 'Find underpriced inventory from your favorite sellers.',
			href: '/features#source'
		},
		{
			icon: IconCoin,
			title: 'Offer Management',
			description: 'Accept, decline, or counter offers from one dashboard.',
			href: '/features#offers'
		},
		{
			icon: IconChartBar,
			title: 'Analytics & Insights',
			description: 'Track sales, profits, and inventory performance.',
			href: '/features#analytics'
		}
	];

	const whyLimestack = [
		{
			icon: IconSparkles,
			title: 'Built by Resellers',
			description: "We know the hustle because we've lived it. Every feature solves a real problem we faced ourselves."
		},
		{
			icon: IconClockHour4,
			title: 'Save Hours Every Week',
			description: 'Automate the tedious stuff—listing, tracking, reporting—so you can focus on finding deals.'
		},
		{
			icon: IconTargetArrow,
			title: 'Know Your Numbers',
			description: 'See true profit margins, track every cost, and make decisions based on real data.'
		},
		{
			icon: IconHeart,
			title: 'Made for Side Hustlers & Pros',
			description: "Whether you flip 10 items or 10,000 a month, LimeStack scales with your business."
		}
	];
</script>

<svelte:head>
	<title>LimeStack - Inventory & Listing Management for eBay Sellers</title>
	<meta name="description" content="LimeStack is the all-in-one platform for eBay resellers. Source deals, manage inventory, create listings, ship orders, and track profits — all from one place." />
</svelte:head>

<!-- Hero Section -->
<section class="relative overflow-hidden">
	<!-- Background -->
	<div class="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-white dark:from-primary-950/30 dark:via-gray-900 dark:to-gray-900"></div>
	<div class="absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-primary-100/50 dark:bg-primary-900/20 blur-3xl"></div>
	<div class="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-primary-100/30 dark:bg-primary-900/10 blur-3xl"></div>

	<div class="relative mx-auto max-w-7xl px-4 pt-36 pb-20 sm:px-6 sm:pt-44 sm:pb-28 lg:px-8 lg:pt-52 lg:pb-36">
		<div class="grid items-center gap-12 lg:grid-cols-2">
			<!-- Left: Content -->
			<div>
				<!-- Badge -->
				<div class="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-200 dark:border-primary-700 bg-primary-50 dark:bg-primary-950/30 px-4 py-1.5">
					<span class="h-2 w-2 animate-pulse rounded-full bg-primary-500"></span>
					<span class="text-sm font-medium text-primary-700 dark:text-primary-300">AI built right in</span>
				</div>

				<!-- Headline -->
				<h1 class="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-5xl lg:text-6xl">
					The all-in-one platform for
					<span class="bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
						resellers
					</span>
				</h1>

				<!-- Subheadline -->
				<p class="mt-6 text-lg text-gray-600 dark:text-gray-300 sm:text-xl">
					Source deals, manage inventory, create listings, ship orders—all from one place. Stop juggling spreadsheets and extra subscriptions.
				</p>

				<!-- CTA Buttons -->
				<div class="mt-10 flex flex-col gap-4 sm:flex-row">
					<a
						href="https://app.limestack.io/auth/login"
						class="inline-flex items-center justify-center gap-2 rounded-xl bg-primary-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-primary-600/30 transition-all hover:bg-primary-700 hover:shadow-xl hover:shadow-primary-600/40"
					>
						Start Free Today
						<IconArrowRight size={20} />
					</a>
					<a
						href="/features"
						class="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-8 py-4 text-base font-semibold text-gray-700 dark:text-gray-200 transition-all hover:border-gray-300 dark:hover:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800"
					>
						Explore Features
					</a>
				</div>

				<!-- Trust badges -->
				<div class="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-gray-500 dark:text-gray-400">
					<div class="flex items-center gap-2">
						<IconCheck size={18} class="text-primary-600" />
						<span>Free forever plan</span>
					</div>
					<div class="flex items-center gap-2">
						<IconCheck size={18} class="text-primary-600" />
						<span>No credit card required</span>
					</div>
					<div class="flex items-center gap-2">
						<IconCheck size={18} class="text-primary-600" />
						<span>Setup in 2 minutes</span>
					</div>
				</div>
			</div>

			<!-- Right: Dashboard Preview -->
			<div class="relative">
				<div class="overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-2xl shadow-gray-900/10 dark:shadow-gray-900/50">
					<!-- Browser chrome -->
					<div class="flex items-center gap-2 border-b border-gray-100 dark:border-gray-700/80 bg-gray-50 dark:bg-gray-800 px-4 py-3">
						<div class="h-3 w-3 rounded-full bg-red-400"></div>
						<div class="h-3 w-3 rounded-full bg-yellow-400"></div>
						<div class="h-3 w-3 rounded-full bg-green-400"></div>
						<div class="ml-4 flex-1 rounded-md bg-white dark:bg-gray-900 px-4 py-1 text-center text-sm text-gray-400 dark:text-gray-500">
							app.limestack.io
						</div>
					</div>
					<!-- Dashboard mockup -->
					<div class="bg-gray-50 dark:bg-gray-800 p-4">
						<div class="grid gap-3 sm:grid-cols-2">
							<div class="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-4">
								<p class="text-sm text-gray-500 dark:text-gray-400">Total Inventory</p>
								<p class="text-2xl font-bold text-gray-900 dark:text-gray-50">1,247</p>
								<p class="text-sm text-primary-600">+23 this week</p>
							</div>
							<div class="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-4">
								<p class="text-sm text-gray-500 dark:text-gray-400">This Month</p>
								<p class="text-2xl font-bold text-gray-900 dark:text-gray-50">$4,820</p>
								<p class="text-sm text-primary-600">+12% vs last</p>
							</div>
						</div>
						<div class="mt-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
							<div class="border-b border-gray-100 dark:border-gray-700/80 px-4 py-2">
								<span class="text-sm font-medium text-gray-900 dark:text-gray-50">Recent Orders</span>
							</div>
							{#each [
								{ item: 'Topps Chrome Box', price: '$249.99', time: '2m ago' },
								{ item: 'Nike Air Max 90', price: '$189.00', time: '15m ago' },
								{ item: 'PS5 Bundle', price: '$549.99', time: '1h ago' }
							] as order}
								<div class="flex items-center justify-between border-b border-gray-50 dark:border-gray-700/80 px-4 py-2 last:border-0">
									<span class="text-sm text-gray-700 dark:text-gray-200">{order.item}</span>
									<div class="text-right">
										<span class="text-sm font-medium text-gray-900 dark:text-gray-50">{order.price}</span>
										<span class="ml-2 text-xs text-gray-400 dark:text-gray-500">{order.time}</span>
									</div>
								</div>
							{/each}
						</div>
					</div>
				</div>

				<!-- Floating notification -->
				<div class="absolute -left-4 bottom-24 hidden animate-bounce rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-3 shadow-lg sm:block">
					<div class="flex items-center gap-3">
						<div class="flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 dark:bg-primary-900/40">
							<IconBell size={20} class="text-primary-600" />
						</div>
						<div>
							<p class="text-sm font-medium text-gray-900 dark:text-gray-50">New Sale!</p>
							<p class="text-xs text-gray-500 dark:text-gray-400">$89.99 - Sports Card</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Features Overview -->
<section class="py-20 sm:py-28">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<!-- Section header -->
		<div class="mx-auto max-w-2xl text-center">
			<span class="text-sm font-semibold uppercase tracking-wider text-primary-600">Features</span>
			<h2 class="mt-3 text-3xl font-bold text-gray-900 dark:text-gray-50 sm:text-4xl">
				Everything you need to run your reselling business
			</h2>
			<p class="mt-4 text-lg text-gray-600 dark:text-gray-300">
				From sourcing to shipping, LimeStack handles every step of your workflow.
			</p>
		</div>

		<!-- Features grid -->
		<div class="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
			{#each features as feature}
				<a
					href={feature.href}
					class="group rounded-2xl border border-gray-100 dark:border-gray-700/80 bg-white dark:bg-gray-900 p-8 transition-all hover:border-primary-100 dark:hover:border-primary-800 hover:shadow-lg hover:shadow-primary-100/50"
				>
					<div class="mb-5 inline-flex rounded-xl bg-primary-50 dark:bg-primary-950/30 p-3 transition-colors group-hover:bg-primary-100 dark:group-hover:bg-primary-900/40">
						<feature.icon size={28} class="text-primary-600" />
					</div>
					<h3 class="mb-2 text-xl font-semibold text-gray-900 dark:text-gray-50">{feature.title}</h3>
					<p class="text-gray-600 dark:text-gray-300">{feature.description}</p>
					<div class="mt-4 flex items-center gap-1 text-sm font-medium text-primary-600">
						Learn more
						<IconArrowRight size={16} class="transition-transform group-hover:translate-x-1" />
					</div>
				</a>
			{/each}
		</div>

		<!-- CTA -->
		<div class="mt-12 text-center">
			<a
				href="/features"
				class="inline-flex items-center gap-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-6 py-3 font-medium text-gray-700 dark:text-gray-200 transition-all hover:border-gray-300 dark:hover:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800"
			>
				View All Features
				<IconArrowRight size={18} />
			</a>
		</div>
	</div>
</section>

<!-- How it Works (Brief) -->
<section class="bg-gray-50 dark:bg-gray-800 py-20 sm:py-28">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-2xl text-center">
			<span class="text-sm font-semibold uppercase tracking-wider text-primary-600">How it works</span>
			<h2 class="mt-3 text-3xl font-bold text-gray-900 dark:text-gray-50 sm:text-4xl">
				Get started in minutes
			</h2>
		</div>

		<div class="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
			{#each [
				{ step: 1, title: 'Connect', desc: 'Link your eBay account with one click' },
				{ step: 2, title: 'Import', desc: 'Sync existing listings or add new inventory' },
				{ step: 3, title: 'Manage', desc: 'List, track, and fulfill from one dashboard' },
				{ step: 4, title: 'Grow', desc: 'Use insights to scale your business' }
			] as item}
				<div class="text-center">
					<div class="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary-600 text-xl font-bold text-white">
						{item.step}
					</div>
					<h3 class="mb-2 text-lg font-semibold text-gray-900 dark:text-gray-50">{item.title}</h3>
					<p class="text-gray-600 dark:text-gray-300">{item.desc}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Why LimeStack -->
<section class="py-20 sm:py-28">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-2xl text-center">
			<span class="text-sm font-semibold uppercase tracking-wider text-primary-600">Why LimeStack</span>
			<h2 class="mt-3 text-3xl font-bold text-gray-900 dark:text-gray-50 sm:text-4xl">
				Software built for the way you work
			</h2>
			<p class="mt-4 text-lg text-gray-600 dark:text-gray-300">
				We built LimeStack because we couldn't find the tools we needed.
				Now we're sharing it with resellers everywhere.
			</p>
		</div>

		<div class="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
			{#each whyLimestack as item}
				<div class="text-center">
					<div class="mx-auto mb-4 inline-flex rounded-xl bg-primary-100 dark:bg-primary-900/40 p-4">
						<item.icon size={28} class="text-primary-600" />
					</div>
					<h3 class="mb-2 text-lg font-semibold text-gray-900 dark:text-gray-50">{item.title}</h3>
					<p class="text-gray-600 dark:text-gray-300">{item.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- CTA Section -->
<section class="bg-gradient-to-br from-primary-600 to-primary-700 py-20 sm:py-28">
	<div class="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
		<h2 class="text-3xl font-bold text-white sm:text-4xl">
			Ready to scale your reselling business?
		</h2>
		<p class="mx-auto mt-4 max-w-2xl text-lg text-primary-100">
			Stop juggling spreadsheets and browser tabs. Get everything you need to run your reselling business in one place.
		</p>
		<div class="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
			<a
				href="https://app.limestack.io/auth/login"
				class="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-semibold text-primary-700 shadow-lg transition-all hover:bg-primary-50 sm:w-auto"
			>
				Start Free Today
				<IconArrowRight size={20} />
			</a>
			<a
				href="/pricing"
				class="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-primary-400 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-primary-500 sm:w-auto"
			>
				View Pricing
			</a>
		</div>
		<p class="mt-6 text-sm text-primary-200">
			No credit card required · Free forever plan · Setup in 2 minutes
		</p>
	</div>
</section>
