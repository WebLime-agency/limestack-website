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
		IconPlayerPlay,
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
			title: 'Multi-Marketplace Listings',
			description: 'Manage listings across marketplaces from one central dashboard.',
			href: '/features#listings'
		},
		{
			icon: IconTruck,
			title: 'Order Management',
			description: 'Real-time notifications and centralized order tracking.',
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
	<title>LimeStack - Multi-Marketplace Inventory Management for eBay Sellers</title>
</svelte:head>

<!-- Hero Section -->
<section class="relative overflow-hidden">
	<!-- Background -->
	<div class="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-white"></div>
	<div class="absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-primary-100/50 blur-3xl"></div>
	<div class="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-primary-100/30 blur-3xl"></div>

	<div class="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
		<div class="grid items-center gap-12 lg:grid-cols-2">
			<!-- Left: Content -->
			<div>
				<!-- Badge -->
				<div class="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-200 bg-primary-50 px-4 py-1.5">
					<span class="h-2 w-2 animate-pulse rounded-full bg-primary-500"></span>
					<span class="text-sm font-medium text-primary-700">Now with AI-powered descriptions</span>
				</div>

				<!-- Headline -->
				<h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
					The all-in-one platform for
					<span class="bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
						resellers
					</span>
				</h1>

				<!-- Subheadline -->
				<p class="mt-6 text-lg text-gray-600 sm:text-xl">
					Source deals, manage inventory, create listings, and track orders—all from one place.
					Stop juggling spreadsheets and start scaling your business.
				</p>

				<!-- CTA Buttons -->
				<div class="mt-10 flex flex-col gap-4 sm:flex-row">
					<a
						href="/signup"
						class="inline-flex items-center justify-center gap-2 rounded-xl bg-primary-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-primary-600/30 transition-all hover:bg-primary-700 hover:shadow-xl hover:shadow-primary-600/40"
					>
						Start Free Today
						<IconArrowRight size={20} />
					</a>
					<a
						href="/features"
						class="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-8 py-4 text-base font-semibold text-gray-700 transition-all hover:border-gray-300 hover:bg-gray-50"
					>
						<IconPlayerPlay size={20} />
						Watch Demo
					</a>
				</div>

				<!-- Trust badges -->
				<div class="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-gray-500">
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
				<div class="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl shadow-gray-900/10">
					<!-- Browser chrome -->
					<div class="flex items-center gap-2 border-b border-gray-100 bg-gray-50 px-4 py-3">
						<div class="h-3 w-3 rounded-full bg-red-400"></div>
						<div class="h-3 w-3 rounded-full bg-yellow-400"></div>
						<div class="h-3 w-3 rounded-full bg-green-400"></div>
						<div class="ml-4 flex-1 rounded-md bg-white px-4 py-1 text-center text-sm text-gray-400">
							app.limestack.io
						</div>
					</div>
					<!-- Dashboard mockup -->
					<div class="bg-gray-50 p-4">
						<div class="grid gap-3 sm:grid-cols-2">
							<div class="rounded-lg border border-gray-200 bg-white p-4">
								<p class="text-sm text-gray-500">Total Inventory</p>
								<p class="text-2xl font-bold text-gray-900">1,247</p>
								<p class="text-sm text-primary-600">+23 this week</p>
							</div>
							<div class="rounded-lg border border-gray-200 bg-white p-4">
								<p class="text-sm text-gray-500">This Month</p>
								<p class="text-2xl font-bold text-gray-900">$4,820</p>
								<p class="text-sm text-primary-600">+12% vs last</p>
							</div>
						</div>
						<div class="mt-3 rounded-lg border border-gray-200 bg-white">
							<div class="border-b border-gray-100 px-4 py-2">
								<span class="text-sm font-medium text-gray-900">Recent Orders</span>
							</div>
							{#each [
								{ item: 'Topps Chrome Box', price: '$249.99', time: '2m ago' },
								{ item: 'Nike Air Max 90', price: '$189.00', time: '15m ago' },
								{ item: 'PS5 Bundle', price: '$549.99', time: '1h ago' }
							] as order}
								<div class="flex items-center justify-between border-b border-gray-50 px-4 py-2 last:border-0">
									<span class="text-sm text-gray-700">{order.item}</span>
									<div class="text-right">
										<span class="text-sm font-medium text-gray-900">{order.price}</span>
										<span class="ml-2 text-xs text-gray-400">{order.time}</span>
									</div>
								</div>
							{/each}
						</div>
					</div>
				</div>

				<!-- Floating notification -->
				<div class="absolute -left-4 bottom-24 hidden animate-bounce rounded-lg border border-gray-200 bg-white p-3 shadow-lg sm:block">
					<div class="flex items-center gap-3">
						<div class="flex h-10 w-10 items-center justify-center rounded-full bg-primary-100">
							<IconBell size={20} class="text-primary-600" />
						</div>
						<div>
							<p class="text-sm font-medium text-gray-900">New Sale!</p>
							<p class="text-xs text-gray-500">$89.99 - Sports Card</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Social Proof -->
<section class="border-y border-gray-100 bg-white py-12">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<p class="mb-8 text-center text-sm font-medium text-gray-500">TRUSTED BY RESELLERS SELLING ON</p>
		<div class="flex flex-wrap items-center justify-center gap-8 sm:gap-16">
			<!-- eBay -->
			<div class="flex flex-col items-center gap-2">
				<svg class="h-10" viewBox="0 0 300 120" fill="none">
					<path d="M35.9 65.2c0-15.4 8.8-26.2 25.4-26.2 14.9 0 23.6 9.1 23.6 24.8v4.1H47.6c.7 9.2 6.2 14 14.5 14 6.9 0 11.4-3.2 13.1-8.4h9.2c-2.1 10.1-11.3 16.4-22.5 16.4-17.1 0-26-11.1-26-24.7zm37.8-5.4c-.4-8.1-5.5-12.9-13.2-12.9-7.4 0-12.8 4.8-14 12.9h27.2z" fill="#E53238"/>
					<path d="M91.7 89.3V25.5h10.4v25.7h.3c2.9-6.8 9.8-12.2 19.3-12.2 15.1 0 24.7 11.8 24.7 26.1 0 14.2-9.6 26-24.7 26-9.5 0-16.4-5.4-19.3-12.2h-.3v10.4H91.7zm28.5-6.8c10.4 0 16.3-8.4 16.3-17.4 0-9-5.9-17.4-16.3-17.4-10.4 0-16.3 8.4-16.3 17.4 0 9 5.9 17.4 16.3 17.4z" fill="#0064D2"/>
					<path d="M192.9 89.3c-5.2 0-8.6-3.4-8.6-8.8v-.8h-.3c-2.5 6.5-9.7 11.4-18.3 11.4-10.5 0-17.5-6.1-17.5-15 0-10.4 8.8-15.5 22.2-16.8l13.9-1.4v-2c0-6.4-4.3-9.8-11.1-9.8-6.5 0-10.8 3.1-11.6 8.1h-10c.7-10.5 9.6-16.4 22-16.4 13.5 0 21.1 6.5 21.1 18.2v24.6c0 1.8.8 2.7 2.5 2.7h1.8v8c-1.7.5-3.8 0-6.1 0zm-10.2-24.7l-12.4 1.4c-8.1.9-11.6 3.8-11.6 8.8 0 4.5 3.6 7.5 9.8 7.5 8.8 0 14.2-5.9 14.2-13.8v-3.9z" fill="#F5AF02"/>
					<path d="M232.1 103.5c-12.9 0-22.8-5.1-24.3-15h10.5c1.2 4.8 6.1 7.4 14 7.4 10.4 0 15.7-5.4 15.7-14.9v-8h-.3c-2.8 6.1-9.5 10.7-18.5 10.7-14.7 0-24-11.1-24-25.1 0-14 9.3-25.1 24-25.1 9 0 15.7 4.6 18.5 10.7h.3V40.8h10.4v40.2c0 15.1-10.8 22.5-26.3 22.5zm1.5-28.7c9.9 0 15.8-7.8 15.8-16.3 0-8.5-5.9-16.3-15.8-16.3-9.9 0-15.8 7.8-15.8 16.3 0 8.5 5.9 16.3 15.8 16.3z" fill="#86B817"/>
				</svg>
			</div>
			<!-- More marketplaces indicator -->
			<div class="flex items-center gap-2 text-gray-400">
				<span class="text-lg">+</span>
				<span class="text-sm font-medium">more marketplaces</span>
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
			<h2 class="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
				Everything you need to run your reselling business
			</h2>
			<p class="mt-4 text-lg text-gray-600">
				From sourcing to shipping, LimeStack handles every step of your workflow.
			</p>
		</div>

		<!-- Features grid -->
		<div class="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
			{#each features as feature}
				<a
					href={feature.href}
					class="group rounded-2xl border border-gray-100 bg-white p-8 transition-all hover:border-primary-100 hover:shadow-lg hover:shadow-primary-100/50"
				>
					<div class="mb-5 inline-flex rounded-xl bg-primary-50 p-3 transition-colors group-hover:bg-primary-100">
						<feature.icon size={28} class="text-primary-600" />
					</div>
					<h3 class="mb-2 text-xl font-semibold text-gray-900">{feature.title}</h3>
					<p class="text-gray-600">{feature.description}</p>
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
				class="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-6 py-3 font-medium text-gray-700 transition-all hover:border-gray-300 hover:bg-gray-50"
			>
				View All Features
				<IconArrowRight size={18} />
			</a>
		</div>
	</div>
</section>

<!-- How it Works (Brief) -->
<section class="bg-gray-50 py-20 sm:py-28">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-2xl text-center">
			<span class="text-sm font-semibold uppercase tracking-wider text-primary-600">How it works</span>
			<h2 class="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
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
					<h3 class="mb-2 text-lg font-semibold text-gray-900">{item.title}</h3>
					<p class="text-gray-600">{item.desc}</p>
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
			<h2 class="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
				Software built for the way you work
			</h2>
			<p class="mt-4 text-lg text-gray-600">
				We built LimeStack because we couldn't find the tools we needed.
				Now we're sharing it with resellers everywhere.
			</p>
		</div>

		<div class="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
			{#each whyLimestack as item}
				<div class="text-center">
					<div class="mx-auto mb-4 inline-flex rounded-xl bg-primary-100 p-4">
						<item.icon size={28} class="text-primary-600" />
					</div>
					<h3 class="mb-2 text-lg font-semibold text-gray-900">{item.title}</h3>
					<p class="text-gray-600">{item.description}</p>
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
				href="/signup"
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
