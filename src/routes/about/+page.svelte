<script lang="ts">
	import { IconArrowRight, IconHeart, IconTarget, IconUsers, IconTrendingUp, IconBrandLinkedin, IconBrandX } from '@tabler/icons-svelte';


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

	const team = [
		{
			name: 'Alex Chen',
			role: 'Founder & CEO',
			bio: 'Former reseller who got frustrated with spreadsheets. Built LimeStack to solve his own problems.',
			avatar: 'AC'
		},
		{
			name: 'Sarah Kim',
			role: 'Head of Product',
			bio: 'Product leader who previously built tools at Shopify. Obsessed with user experience.',
			avatar: 'SK'
		},
		{
			name: 'Marcus Johnson',
			role: 'Head of Engineering',
			bio: 'Full-stack engineer with a passion for building fast, reliable software that scales.',
			avatar: 'MJ'
		},
		{
			name: 'Emily Rodriguez',
			role: 'Head of Customer Success',
			bio: 'Former top-rated seller. Knows the reselling game inside and out.',
			avatar: 'ER'
		}
	];

	const timeline = [
		{
			year: '2023',
			title: 'The Beginning',
			description: 'LimeStack was born out of frustration. Our founder, tired of managing inventory across spreadsheets and browser tabs, decided to build something better.'
		},
		{
			year: '2023',
			title: 'First Users',
			description: 'Launched to a small group of beta users. Their feedback shaped every feature we built next.'
		},
		{
			year: '2024',
			title: 'Marketplace Integration',
			description: 'Launched our first deep marketplace integration with real-time order sync, listing management, and offer tracking.'
		},
		{
			year: '2025',
			title: "What's Next",
			description: "We're expanding marketplace support, adding AI-powered features, and building the future of reselling software."
		}
	];
</script>

<svelte:head>
	<title>About Us - LimeStack</title>
	<meta name="description" content="Learn about LimeStack's mission to help resellers build better businesses." />
</svelte:head>

<!-- Hero -->
<section class="bg-gradient-to-b from-primary-50 to-white py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-3xl text-center">
			<span class="text-sm font-semibold uppercase tracking-wider text-primary-600">About Us</span>
			<h1 class="mt-3 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
				Built by resellers, for resellers
			</h1>
			<p class="mt-6 text-lg text-gray-600">
				We started LimeStack because we were frustrated with the tools available to resellers.
				Spreadsheets were clunky, existing software was overpriced, and nothing worked the way we needed it to.
				So we built something better.
			</p>
		</div>
	</div>
</section>

<!-- Story -->
<section class="py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="grid items-center gap-12 lg:grid-cols-2">
			<div>
				<span class="text-sm font-semibold uppercase tracking-wider text-primary-600">Our Story</span>
				<h2 class="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
					From side hustle to software
				</h2>
				<div class="mt-6 space-y-4 text-gray-600">
					<p>
						LimeStack started in 2023 when our founder, Alex, was running a side hustle flipping sports cards online.
						Like most resellers, he started with a spreadsheet to track inventory, costs, and profits.
					</p>
					<p>
						But as his business grew, the spreadsheet became a nightmare. Tracking hundreds of items across multiple accounts,
						managing offers, and knowing true profit margins became impossible. The tools that existed were either too expensive,
						too complicated, or built for enterprise sellers.
					</p>
					<p>
						So Alex decided to build something better—software designed specifically for resellers like him.
						Fast, intuitive, and affordable. That's how LimeStack was born.
					</p>
					<p>
						Today, we're on a mission to give every reseller the tools they need to run their business efficiently,
						regardless of whether they flip 10 items a month or 10,000.
					</p>
				</div>
			</div>
			<div class="relative">
				<div class="aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-primary-100 to-primary-200">
					<div class="flex h-full items-center justify-center">
						<div class="text-center">
							<div class="mx-auto flex h-24 w-24 items-center justify-center rounded-2xl bg-primary-600">
								<span class="text-4xl font-bold text-white">L</span>
							</div>
							<p class="mt-4 font-semibold text-primary-700">LimeStack</p>
							<p class="text-sm text-primary-600">Est. 2023</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Values -->
<section class="bg-gray-50 py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-2xl text-center">
			<span class="text-sm font-semibold uppercase tracking-wider text-primary-600">Our Values</span>
			<h2 class="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
				What we believe
			</h2>
		</div>

		<div class="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
			{#each values as value}
				<div class="rounded-xl bg-white p-6 shadow-sm">
					<div class="mb-4 inline-flex rounded-lg bg-primary-100 p-3">
						<value.icon size={24} class="text-primary-600" />
					</div>
					<h3 class="mb-2 font-semibold text-gray-900">{value.title}</h3>
					<p class="text-sm text-gray-600">{value.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Timeline -->
<section class="py-20">
	<div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
		<div class="text-center">
			<span class="text-sm font-semibold uppercase tracking-wider text-primary-600">Our Journey</span>
			<h2 class="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
				Timeline
			</h2>
		</div>

		<div class="mt-12">
			<div class="relative">
				<!-- Vertical line -->
				<div class="absolute left-8 top-0 h-full w-0.5 bg-primary-200 sm:left-1/2 sm:-translate-x-0.5"></div>

				{#each timeline as event, index}
					<div class="relative mb-8 {index % 2 === 0 ? 'sm:pr-1/2' : 'sm:pl-1/2 sm:ml-auto'}">
						<div class="flex items-start gap-4 sm:{index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}">
							<!-- Dot -->
							<div class="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary-600 text-sm font-bold text-white shadow-lg">
								{event.year}
							</div>
							<!-- Content -->
							<div class="flex-1 rounded-xl bg-white p-6 shadow-sm {index % 2 === 0 ? 'sm:text-right' : ''}">
								<h3 class="font-semibold text-gray-900">{event.title}</h3>
								<p class="mt-2 text-sm text-gray-600">{event.description}</p>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<!-- Team -->
<section class="bg-gray-50 py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-2xl text-center">
			<span class="text-sm font-semibold uppercase tracking-wider text-primary-600">Our Team</span>
			<h2 class="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
				Meet the people behind LimeStack
			</h2>
			<p class="mt-4 text-gray-600">
				A small team of resellers, engineers, and product builders on a mission to help sellers succeed.
			</p>
		</div>

		<div class="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
			{#each team as member}
				<div class="rounded-xl bg-white p-6 text-center shadow-sm">
					<div class="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary-100 text-xl font-bold text-primary-700">
						{member.avatar}
					</div>
					<h3 class="font-semibold text-gray-900">{member.name}</h3>
					<p class="text-sm text-primary-600">{member.role}</p>
					<p class="mt-3 text-sm text-gray-600">{member.bio}</p>
					<div class="mt-4 flex justify-center gap-3">
						<a href="#" class="text-gray-400 hover:text-gray-600">
							<IconBrandLinkedin size={20} />
						</a>
						<a href="#" class="text-gray-400 hover:text-gray-600">
							<IconBrandX size={20} />
						</a>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Join Us -->
<section class="py-20">
	<div class="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
		<h2 class="text-3xl font-bold text-gray-900">
			Want to join our team?
		</h2>
		<p class="mx-auto mt-4 max-w-2xl text-gray-600">
			We're always looking for passionate people who want to help resellers succeed.
			Check out our open positions or reach out if you think you'd be a great fit.
		</p>
		<div class="mt-8">
			<a
				href="/careers"
				class="inline-flex items-center gap-2 rounded-xl bg-primary-600 px-6 py-3 font-medium text-white transition-colors hover:bg-primary-700"
			>
				View Open Positions
				<IconArrowRight size={18} />
			</a>
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
