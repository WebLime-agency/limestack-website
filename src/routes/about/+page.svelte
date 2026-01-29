<script lang="ts">
	import { IconArrowRight, IconHeart, IconTarget, IconUsers, IconTrendingUp } from '@tabler/icons-svelte';


	const values = [
		{
			icon: IconHeart,
			title: 'Seller-First',
			description: "Every feature we build starts with a simple question: will this help resellers succeed? If not, we don't build it."
		},
		{
			icon: IconTarget,
			title: 'Simplicity',
			description: 'Powerful tools should be easy to use. We obsess over removing complexity so you can focus on what matters: selling.'
		},
		{
			icon: IconUsers,
			title: 'Community',
			description: 'We learn from our users every day. Your feedback shapes our roadmap, and your success is our success.'
		},
		{
			icon: IconTrendingUp,
			title: 'Growth',
			description: "Whether you're flipping your first item or running a six-figure business, we're here to help you grow."
		}
	];
</script>

<svelte:head>
	<title>About Us - LimeStack</title>
	<meta name="description" content="Learn about LimeStack's mission to help resellers build better businesses." />
</svelte:head>

<!-- Hero -->
<section class="bg-gradient-to-b from-primary-50 to-white dark:from-primary-950/30 dark:to-gray-900 pt-36 pb-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-3xl text-center">
			<span class="text-sm font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400">About Us</span>
			<h1 class="mt-3 text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-5xl">
				Built by resellers, for resellers
			</h1>
			<p class="mt-6 text-lg text-gray-600 dark:text-gray-300">
				LimeStack was born out of frustration with juggling multiple subscriptions and scattered tools just to run an eBay business. So we built the all-in-one platform we actually wanted to use.
			</p>
		</div>
	</div>
</section>

<!-- Story -->
<section class="py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="grid items-center gap-12 lg:grid-cols-2">
			<div>
				<span class="text-sm font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400">Our Story</span>
				<h2 class="mt-3 text-3xl font-bold text-gray-900 dark:text-gray-50 sm:text-4xl">
					Built out of frustration
				</h2>
				<div class="mt-6 space-y-4 text-gray-600 dark:text-gray-300">
					<p>
						Our founder has had a long relationship with eBay. It started years ago by sourcing parts, building computers from scratch, and selling them on eBay for extra income.
					</p>
					<p>
						When the selling ramped up, the cracks started to show. Managing sourcing, tracking expenses, handling orders, and printing shipping labels meant juggling multiple subscriptions and tools. One app for shipping, another for reports, another for sourcing. Data and details were scattered everywhere. The experience was completely fragmented.
					</p>
					<p>
						That's why LimeStack was built: one platform that handles inventory, listings, orders, shipping, and analytics together. No more bouncing between tabs and paying for three different services.
					</p>
					<p>
						LimeStack is software built by a reseller, for resellers. It's used every day to run a real eBay business.
					</p>
				</div>
			</div>
			<div class="relative">
				<div class="aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900/40 dark:to-primary-800/40">
					<div class="flex h-full items-center justify-center">
						<div class="text-center">
							<div class="mx-auto flex h-24 w-24 items-center justify-center rounded-2xl bg-primary-600">
								<span class="text-4xl font-bold text-white">L</span>
							</div>
							<p class="mt-4 font-semibold text-primary-700 dark:text-primary-300">LimeStack</p>
							<p class="text-sm text-primary-600 dark:text-primary-400">Est. 2025</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Values -->
<section class="bg-gray-50 dark:bg-gray-800 py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-2xl text-center">
			<span class="text-sm font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400">Our Values</span>
			<h2 class="mt-3 text-3xl font-bold text-gray-900 dark:text-gray-50 sm:text-4xl">
				What we believe
			</h2>
		</div>

		<div class="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
			{#each values as value}
				<div class="rounded-xl bg-white dark:bg-gray-900 p-6 shadow-sm">
					<div class="mb-4 inline-flex rounded-lg bg-primary-100 dark:bg-primary-900/40 p-3">
						<value.icon size={24} class="text-primary-600 dark:text-primary-400" />
					</div>
					<h3 class="mb-2 font-semibold text-gray-900 dark:text-gray-50">{value.title}</h3>
					<p class="text-sm text-gray-600 dark:text-gray-300">{value.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- CTA -->
<section class="bg-primary-600 py-20">
	<div class="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
		<h2 class="text-3xl font-bold text-white">
			Ready to try LimeStack?
		</h2>
		<p class="mx-auto mt-4 max-w-2xl text-lg text-primary-100">
			See how LimeStack can streamline your reselling workflow.
		</p>
		<div class="mt-10">
			<a
				href="/signup"
				class="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-semibold text-primary-700 shadow-lg transition-all hover:bg-primary-50"
			>
				Start Free Today
				<IconArrowRight size={20} />
			</a>
		</div>
	</div>
</section>
