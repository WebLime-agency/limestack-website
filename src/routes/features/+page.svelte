<script lang="ts">
	import {
		IconPackage,
		IconTag,
		IconTruck,
		IconSearch,
		IconCoin,
		IconChartBar,
		IconCheck,
		IconArrowRight,
		IconPhoto,
		IconSparkles,
		IconHistory,
		IconBell,
		IconRefresh,
		IconFilter,
		IconHeart,
		IconTrendingUp,
		IconShieldCheck,
		IconDevices,
		IconCloud,
		IconBolt
	} from '@tabler/icons-svelte';

	const features = [
		{
			id: 'inventory',
			icon: IconPackage,
			title: 'Inventory Management',
			tagline: 'Your single source of truth',
			description: 'Track every item from the moment you buy it to the moment it sells. Know your costs, margins, and performance at a glance.',
			highlights: [
				{ icon: IconPhoto, title: 'Photo Management', desc: 'Upload, organize, and manage product photos with drag-and-drop ease' },
				{ icon: IconSparkles, title: 'AI Descriptions', desc: 'Generate professional listing descriptions with one click using AI' },
				{ icon: IconHistory, title: 'Cost Tracking', desc: 'Track purchase price, fees, and shipping to know your true margins' },
				{ icon: IconFilter, title: 'Smart Filters', desc: 'Find any item instantly with powerful search and filter options' }
			],
			screenshot: {
				title: 'Inventory Dashboard',
				stats: [
					{ label: 'Total Items', value: '1,247' },
					{ label: 'Listed', value: '892' },
					{ label: 'Sold (30d)', value: '156' }
				]
			}
		},
		{
			id: 'listings',
			icon: IconTag,
			title: 'Listing Management',
			tagline: 'List smarter, sell faster',
			description: 'Create and manage your eBay listings from one central dashboard. Draft, publish, and revise with ease.',
			highlights: [
				{ icon: IconRefresh, title: 'Auto-Sync', desc: 'Inventory updates automatically when items sell' },
				{ icon: IconSparkles, title: 'Bulk Operations', desc: 'List, revise, or end multiple items at once' },
				{ icon: IconPhoto, title: 'Photo Optimization', desc: 'Automatically format and optimize photos for your listings' },
				{ icon: IconHistory, title: 'Draft Management', desc: 'Save listings as drafts and publish when ready' }
			],
			screenshot: {
				title: 'Listing Manager',
				items: [
					{ name: 'Topps Chrome Box', status: 'Active', marketplace: 'eBay' },
					{ name: 'Nike Air Max', status: 'Draft', marketplace: 'eBay' },
					{ name: 'PS5 Bundle', status: 'Active', marketplace: 'eBay' }
				]
			}
		},
		{
			id: 'orders',
			icon: IconTruck,
			title: 'Orders & Shipping',
			tagline: 'Never miss a sale',
			description: 'Real-time order notifications, centralized tracking, and built-in shipping. Buy and print labels directly—no separate Shippo or ShippingEasy subscription needed.',
			highlights: [
				{ icon: IconBell, title: 'Instant Notifications', desc: 'Get notified immediately when orders come in' },
				{ icon: IconRefresh, title: 'Real-Time Sync', desc: 'Orders sync every 15 seconds from eBay' },
				{ icon: IconTruck, title: 'Shipping Integration', desc: 'Purchase and print shipping labels for eBay orders or ad hoc shipments' },
				{ icon: IconChartBar, title: 'Sales Analytics', desc: 'Track daily, weekly, and monthly sales performance' }
			],
			screenshot: {
				title: 'Orders',
				orders: [
					{ item: 'Pokemon Box', buyer: 'card_collector', price: '$89.99', status: 'Awaiting Shipment' },
					{ item: 'Vintage Jersey', buyer: 'sports_fan_22', price: '$124.00', status: 'Shipped' },
					{ item: 'Sealed Game', buyer: 'retro_gamer', price: '$67.50', status: 'Delivered' }
				]
			}
		},
		{
			id: 'source',
			icon: IconSearch,
			title: 'Source Deals',
			tagline: 'Find your next flip',
			description: 'Monitor your favorite sellers, track opportunities, and discover underpriced inventory before anyone else.',
			highlights: [
				{ icon: IconHeart, title: 'Seller Monitoring', desc: 'Follow your favorite sellers and see their new listings first' },
				{ icon: IconBell, title: 'Deal Alerts', desc: 'Get notified when items match your saved search criteria' },
				{ icon: IconTrendingUp, title: 'Price Tracking', desc: 'See historical pricing to identify real deals' },
				{ icon: IconFilter, title: 'Saved Searches', desc: 'Save and organize your sourcing strategies' }
			],
			screenshot: {
				title: 'Source - Opportunities',
				deals: [
					{ item: 'Vintage Pokemon Box', seller: 'cardking_deals', price: '$899', market: '$1,200' },
					{ item: 'Sealed GameCube', seller: 'retro_gaming', price: '$350', market: '$475' },
					{ item: 'Jordan 1 Chicago', seller: 'sneaker_vault', price: '$420', market: '$580' }
				]
			}
		},
		{
			id: 'offers',
			icon: IconCoin,
			title: 'Offer Management',
			tagline: 'Handle offers like a pro',
			description: 'Accept, decline, or counter buyer offers from a single dashboard. Never miss an opportunity to close a deal.',
			highlights: [
				{ icon: IconBell, title: 'Offer Alerts', desc: 'Get notified immediately when new offers come in' },
				{ icon: IconBolt, title: 'Quick Actions', desc: 'Accept, decline, or counter with one click' },
				{ icon: IconHistory, title: 'Offer History', desc: 'See all past offers and negotiations for each item' },
				{ icon: IconTrendingUp, title: 'Smart Counters', desc: 'See suggested counter prices based on market data' }
			],
			screenshot: {
				title: 'Offers',
				offers: [
					{ item: 'Vintage Card Lot', offer: '$450', asking: '$599', buyer: 'collector_99' },
					{ item: 'Nike Dunks', offer: '$180', asking: '$220', buyer: 'sneakerhead' },
					{ item: 'Sealed Box', offer: '$320', asking: '$399', buyer: 'investor_cards' }
				]
			}
		},
		{
			id: 'analytics',
			icon: IconChartBar,
			title: 'Analytics & Insights',
			tagline: 'Know your numbers',
			description: 'Track sales trends, profit margins, and inventory performance with beautiful, actionable dashboards.',
			highlights: [
				{ icon: IconTrendingUp, title: 'Sales Trends', desc: 'Visualize your sales performance over time' },
				{ icon: IconChartBar, title: 'Profit Analysis', desc: 'See true profit after all fees and costs' },
				{ icon: IconPackage, title: 'Inventory Insights', desc: 'Identify slow-moving items and top performers' },
				{ icon: IconHistory, title: 'Export Reports', desc: 'Download data for taxes or further analysis' }
			],
			screenshot: {
				title: 'Analytics Dashboard',
				metrics: [
					{ label: 'Revenue (30d)', value: '$4,820' },
					{ label: 'Profit (30d)', value: '$1,890' },
					{ label: 'Avg Margin', value: '39.2%' }
				]
			}
		}
	];

	const additionalFeatures = [
		{ icon: IconShieldCheck, title: 'Secure & Private', desc: 'Bank-level encryption protects your data' },
		{ icon: IconDevices, title: 'Works Everywhere', desc: 'Access from desktop, tablet, or phone' },
		{ icon: IconCloud, title: 'Always Synced', desc: 'Your data is backed up and available 24/7' },
		{ icon: IconBolt, title: 'Lightning Fast', desc: 'Built for speed with instant updates' }
	];
</script>

<svelte:head>
	<title>Features - LimeStack</title>
	<meta name="description" content="Explore all the features that make LimeStack the best platform for eBay resellers." />
</svelte:head>

<!-- Hero -->
<section class="bg-gradient-to-b from-primary-50 to-white py-20 sm:py-28">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-3xl text-center">
			<span class="text-sm font-semibold uppercase tracking-wider text-primary-600">Features</span>
			<h1 class="mt-3 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
				Everything you need to run your reselling business
			</h1>
			<p class="mt-6 text-lg text-gray-600">
				From sourcing inventory to shipping orders, LimeStack gives you the tools to work smarter, not harder.
			</p>
		</div>

		<!-- Feature nav -->
		<div class="mt-12 flex flex-wrap justify-center gap-2">
			{#each features as feature}
				<a
					href="#{feature.id}"
					class="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-all hover:border-primary-200 hover:bg-primary-50 hover:text-primary-700"
				>
					<feature.icon size={16} />
					{feature.title}
				</a>
			{/each}
		</div>
	</div>
</section>

<!-- Feature Sections -->
{#each features as feature, index}
	<section id={feature.id} class="scroll-mt-20 py-20 {index % 2 === 1 ? 'bg-gray-50' : 'bg-white'}">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="grid items-center gap-12 lg:grid-cols-2 {index % 2 === 1 ? 'lg:grid-flow-dense' : ''}">
				<!-- Content -->
				<div class="{index % 2 === 1 ? 'lg:col-start-2' : ''}">
					<div class="inline-flex items-center gap-2 rounded-full bg-primary-50 px-4 py-1.5 text-sm font-medium text-primary-700">
						<feature.icon size={16} />
						{feature.tagline}
					</div>
					<h2 class="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">{feature.title}</h2>
					<p class="mt-4 text-lg text-gray-600">{feature.description}</p>

					<div class="mt-8 grid gap-4 sm:grid-cols-2">
						{#each feature.highlights as highlight}
							<div class="flex gap-3">
								<div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-100">
									<highlight.icon size={20} class="text-primary-600" />
								</div>
								<div>
									<h3 class="font-semibold text-gray-900">{highlight.title}</h3>
									<p class="text-sm text-gray-600">{highlight.desc}</p>
								</div>
							</div>
						{/each}
					</div>
				</div>

				<!-- Screenshot mockup -->
				<div class="{index % 2 === 1 ? 'lg:col-start-1' : ''}">
					<div class="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl">
						<div class="flex items-center gap-2 border-b border-gray-100 bg-gray-50 px-4 py-3">
							<div class="h-3 w-3 rounded-full bg-red-400"></div>
							<div class="h-3 w-3 rounded-full bg-yellow-400"></div>
							<div class="h-3 w-3 rounded-full bg-green-400"></div>
							<span class="ml-4 text-sm font-medium text-gray-600">{feature.screenshot.title}</span>
						</div>
						<div class="bg-gray-50 p-4">
							{#if feature.screenshot.stats}
								<div class="grid grid-cols-3 gap-3">
									{#each feature.screenshot.stats as stat}
										<div class="rounded-lg border border-gray-200 bg-white p-3 text-center">
											<p class="text-xs text-gray-500">{stat.label}</p>
											<p class="text-lg font-bold text-gray-900">{stat.value}</p>
										</div>
									{/each}
								</div>
								<div class="mt-3 space-y-2">
									{#each [1, 2, 3] as _}
										<div class="flex items-center gap-3 rounded-lg border border-gray-200 bg-white p-3">
											<div class="h-10 w-10 rounded bg-gray-100"></div>
											<div class="flex-1">
												<div class="h-3 w-32 rounded bg-gray-200"></div>
												<div class="mt-1 h-2 w-20 rounded bg-gray-100"></div>
											</div>
											<div class="h-6 w-16 rounded bg-primary-100"></div>
										</div>
									{/each}
								</div>
							{:else if feature.screenshot.items}
								<div class="space-y-2">
									{#each feature.screenshot.items as item}
										<div class="flex items-center justify-between rounded-lg border border-gray-200 bg-white p-3">
											<div class="flex items-center gap-3">
												<div class="h-10 w-10 rounded bg-gray-100"></div>
												<div>
													<p class="font-medium text-gray-900">{item.name}</p>
													<p class="text-xs text-gray-500">{item.marketplace}</p>
												</div>
											</div>
											<span class="rounded-full px-2 py-1 text-xs font-medium {item.status === 'Active' ? 'bg-primary-100 text-primary-700' : 'bg-gray-100 text-gray-600'}">
												{item.status}
											</span>
										</div>
									{/each}
								</div>
							{:else if feature.screenshot.orders}
								<div class="space-y-2">
									{#each feature.screenshot.orders as order}
										<div class="rounded-lg border border-gray-200 bg-white p-3">
											<div class="flex items-center justify-between">
												<span class="font-medium text-gray-900">{order.item}</span>
												<span class="font-semibold text-gray-900">{order.price}</span>
											</div>
											<div class="mt-1 flex items-center justify-between text-sm">
												<span class="text-gray-500">{order.buyer}</span>
												<span class="rounded-full px-2 py-0.5 text-xs {order.status === 'Awaiting Shipment' ? 'bg-yellow-100 text-yellow-700' : order.status === 'Shipped' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'}">
													{order.status}
												</span>
											</div>
										</div>
									{/each}
								</div>
							{:else if feature.screenshot.deals}
								<div class="space-y-2">
									{#each feature.screenshot.deals as deal}
										<div class="rounded-lg border border-gray-200 bg-white p-3">
											<div class="flex items-center justify-between">
												<span class="font-medium text-gray-900">{deal.item}</span>
												<span class="rounded-full bg-primary-100 px-2 py-0.5 text-xs font-medium text-primary-700">
													+${parseInt(deal.market.replace(/\D/g, '')) - parseInt(deal.price.replace(/\D/g, ''))}
												</span>
											</div>
											<div class="mt-1 flex items-center justify-between text-sm">
												<span class="text-gray-500">{deal.seller}</span>
												<span class="text-gray-600">{deal.price} → <span class="text-primary-600">{deal.market}</span></span>
											</div>
										</div>
									{/each}
								</div>
							{:else if feature.screenshot.offers}
								<div class="space-y-2">
									{#each feature.screenshot.offers as offer}
										<div class="rounded-lg border border-gray-200 bg-white p-3">
											<div class="flex items-center justify-between">
												<span class="font-medium text-gray-900">{offer.item}</span>
												<div class="flex gap-2">
													<button class="rounded bg-primary-600 px-2 py-1 text-xs font-medium text-white">Accept</button>
													<button class="rounded border border-gray-300 px-2 py-1 text-xs font-medium text-gray-600">Counter</button>
												</div>
											</div>
											<div class="mt-1 flex items-center justify-between text-sm">
												<span class="text-gray-500">{offer.buyer}</span>
												<span class="text-gray-600"><span class="font-medium text-gray-900">{offer.offer}</span> / {offer.asking}</span>
											</div>
										</div>
									{/each}
								</div>
							{:else if feature.screenshot.metrics}
								<div class="grid grid-cols-3 gap-3">
									{#each feature.screenshot.metrics as metric}
										<div class="rounded-lg border border-gray-200 bg-white p-3 text-center">
											<p class="text-xs text-gray-500">{metric.label}</p>
											<p class="text-lg font-bold text-primary-600">{metric.value}</p>
										</div>
									{/each}
								</div>
								<div class="mt-3 rounded-lg border border-gray-200 bg-white p-4">
									<div class="mb-2 flex items-center justify-between text-sm">
										<span class="font-medium text-gray-700">Sales This Month</span>
										<span class="text-primary-600">+12%</span>
									</div>
									<div class="flex h-24 items-end gap-1">
										{#each [40, 55, 45, 70, 60, 85, 75, 90, 80, 95, 88, 100] as height}
											<div class="flex-1 rounded-t bg-primary-500" style="height: {height}%"></div>
										{/each}
									</div>
								</div>
							{/if}
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
{/each}

<!-- Integrations -->
<section id="integrations" class="bg-white py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-2xl text-center">
			<span class="text-sm font-semibold uppercase tracking-wider text-primary-600">Integrations</span>
			<h2 class="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
				Seamless eBay integration
			</h2>
			<p class="mt-4 text-lg text-gray-600">
				Connect your eBay account and manage everything from one place.
			</p>
		</div>

		<div class="mt-12 flex flex-wrap items-center justify-center gap-8">
			<div class="flex flex-col items-center gap-3">
				<div class="flex h-24 w-24 items-center justify-center rounded-2xl border border-gray-200 bg-white shadow-sm">
					<svg class="h-16" viewBox="0 0 300 120" fill="none">
						<path d="M35.9 65.2c0-15.4 8.8-26.2 25.4-26.2 14.9 0 23.6 9.1 23.6 24.8v4.1H47.6c.7 9.2 6.2 14 14.5 14 6.9 0 11.4-3.2 13.1-8.4h9.2c-2.1 10.1-11.3 16.4-22.5 16.4-17.1 0-26-11.1-26-24.7zm37.8-5.4c-.4-8.1-5.5-12.9-13.2-12.9-7.4 0-12.8 4.8-14 12.9h27.2z" fill="#E53238"/>
						<path d="M91.7 89.3V25.5h10.4v25.7h.3c2.9-6.8 9.8-12.2 19.3-12.2 15.1 0 24.7 11.8 24.7 26.1 0 14.2-9.6 26-24.7 26-9.5 0-16.4-5.4-19.3-12.2h-.3v10.4H91.7zm28.5-6.8c10.4 0 16.3-8.4 16.3-17.4 0-9-5.9-17.4-16.3-17.4-10.4 0-16.3 8.4-16.3 17.4 0 9 5.9 17.4 16.3 17.4z" fill="#0064D2"/>
						<path d="M192.9 89.3c-5.2 0-8.6-3.4-8.6-8.8v-.8h-.3c-2.5 6.5-9.7 11.4-18.3 11.4-10.5 0-17.5-6.1-17.5-15 0-10.4 8.8-15.5 22.2-16.8l13.9-1.4v-2c0-6.4-4.3-9.8-11.1-9.8-6.5 0-10.8 3.1-11.6 8.1h-10c.7-10.5 9.6-16.4 22-16.4 13.5 0 21.1 6.5 21.1 18.2v24.6c0 1.8.8 2.7 2.5 2.7h1.8v8c-1.7.5-3.8 0-6.1 0zm-10.2-24.7l-12.4 1.4c-8.1.9-11.6 3.8-11.6 8.8 0 4.5 3.6 7.5 9.8 7.5 8.8 0 14.2-5.9 14.2-13.8v-3.9z" fill="#F5AF02"/>
						<path d="M232.1 103.5c-12.9 0-22.8-5.1-24.3-15h10.5c1.2 4.8 6.1 7.4 14 7.4 10.4 0 15.7-5.4 15.7-14.9v-8h-.3c-2.8 6.1-9.5 10.7-18.5 10.7-14.7 0-24-11.1-24-25.1 0-14 9.3-25.1 24-25.1 9 0 15.7 4.6 18.5 10.7h.3V40.8h10.4v40.2c0 15.1-10.8 22.5-26.3 22.5zm1.5-28.7c9.9 0 15.8-7.8 15.8-16.3 0-8.5-5.9-16.3-15.8-16.3-9.9 0-15.8 7.8-15.8 16.3 0 8.5 5.9 16.3 15.8 16.3z" fill="#86B817"/>
					</svg>
				</div>
				<span class="font-medium text-gray-900">eBay</span>
				<span class="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">Available</span>
			</div>
		</div>
	</div>
</section>

<!-- Additional Features -->
<section class="bg-gray-50 py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-2xl text-center">
			<h2 class="text-3xl font-bold text-gray-900 sm:text-4xl">
				Built for modern resellers
			</h2>
			<p class="mt-4 text-lg text-gray-600">
				Everything you need to run your business with confidence.
			</p>
		</div>

		<div class="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
			{#each additionalFeatures as feature}
				<div class="rounded-xl border border-gray-200 bg-white p-6 text-center">
					<div class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100">
						<feature.icon size={24} class="text-primary-600" />
					</div>
					<h3 class="font-semibold text-gray-900">{feature.title}</h3>
					<p class="mt-2 text-sm text-gray-600">{feature.desc}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- CTA -->
<section class="bg-primary-600 py-20">
	<div class="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
		<h2 class="text-3xl font-bold text-white sm:text-4xl">
			Ready to try LimeStack?
		</h2>
		<p class="mx-auto mt-4 max-w-2xl text-lg text-primary-100">
			Start your free account today and streamline your reselling workflow.
		</p>
		<div class="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
			<a
				href="/signup"
				class="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-semibold text-primary-700 shadow-lg transition-all hover:bg-primary-50"
			>
				Start Free Today
				<IconArrowRight size={20} />
			</a>
			<a
				href="/pricing"
				class="inline-flex items-center gap-2 rounded-xl border border-primary-400 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-primary-500"
			>
				View Pricing
			</a>
		</div>
	</div>
</section>
