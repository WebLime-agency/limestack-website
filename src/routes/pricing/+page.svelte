<script lang="ts">
	import { IconCheck, IconX, IconArrowRight, IconShieldCheck, IconHeadset, IconRefresh } from '@tabler/icons-svelte';

	let billingPeriod = $state<'monthly' | 'yearly'>('monthly');

	const plans = [
		{
			name: 'Free',
			monthlyPrice: 0,
			yearlyPrice: 0,
			features: [
				{ name: 'Up to 10 active listings', included: true },
				{ name: '10 orders synced per month', included: true },
				{ name: '10 shipping labels per month', included: true },
				{ name: '10 AI generations per month', included: true },
				{ name: 'Weekly source scans', included: true },
				{ name: 'Daily offer checks', included: true },
				{ name: 'All future marketplaces', included: true },
				{ name: 'Analytics', included: false }
			],
			cta: 'Start Free',
			highlighted: false,
			badge: null
		},
		{
			name: 'Pro',
			monthlyPrice: 29,
			yearlyPrice: 24,
			features: [
				{ name: 'Up to 150 active listings', included: true },
				{ name: '150 orders synced per month', included: true },
				{ name: '150 shipping labels per month', included: true },
				{ name: '150 AI generations per month', included: true },
				{ name: 'Daily source scans', included: true },
				{ name: 'Daily offer checks', included: true },
				{ name: 'Basic analytics', included: true },
				{ name: 'All future marketplaces', included: true }
			],
			cta: 'Start Free Trial',
			highlighted: true,
			badge: 'Most Popular'
		},
		{
			name: 'Business',
			monthlyPrice: 59,
			yearlyPrice: 49,
			features: [
				{ name: 'Unlimited listings', included: true },
				{ name: 'Unlimited orders synced', included: true },
				{ name: 'Unlimited shipping labels', included: true },
				{ name: 'Unlimited AI generations', included: true },
				{ name: 'Source scans every 4 hours', included: true },
				{ name: 'Hourly offer checks', included: true },
				{ name: 'Advanced analytics', included: true },
				{ name: 'All future marketplaces', included: true }
			],
			cta: 'Start Free Trial',
			highlighted: false,
			badge: null
		}
	];

	const faqs = [
		{
			question: 'Is there really a free plan?',
			answer: "Yes! Our Free plan is completely free forever. It includes up to 10 active listings, shipping labels, and AI generations per month — perfect for getting started. No credit card required."
		},
		{
			question: 'How does the free trial work?',
			answer: 'When you sign up for Pro or Business, you get a 14-day free trial with full access to all features. No credit card required to start. At the end of your trial, you can choose to subscribe or continue with the Free plan.'
		},
		{
			question: 'Can I change plans later?',
			answer: "Absolutely! You can upgrade, downgrade, or cancel at any time. If you upgrade, you'll be prorated for the remainder of your billing period. If you downgrade, the change takes effect at your next billing date."
		},
		{
			question: 'What payment methods do you accept?',
			answer: 'We accept all major credit cards (Visa, Mastercard, American Express, Discover) as well as PayPal. For Business plans, we can also arrange invoicing for annual subscriptions.'
		},
		{
			question: 'What happens to my data if I cancel?',
			answer: "If you cancel, you'll keep access until the end of your billing period. After that, your account will be downgraded to the Free plan. Your data is retained for 30 days in case you want to resubscribe, then it's securely deleted."
		},
		{
			question: 'Do you offer refunds?',
			answer: "Yes, we offer a 30-day money-back guarantee on all paid plans. If you're not satisfied for any reason, contact support within 30 days of your first payment for a full refund."
		},
		{
			question: 'Is my data secure?',
			answer: 'Absolutely. We use bank-level encryption (AES-256) for all data at rest and in transit. We never store your marketplace passwords—we use secure OAuth tokens that you can revoke at any time. Your data is backed up daily across multiple secure data centers.'
		},
		{
			question: 'Do you offer discounts for annual billing?',
			answer: 'Yes! When you pay annually, you save about 17% compared to monthly billing. The discount is automatically applied when you select annual billing during checkout.'
		},
		{
			question: 'Can I get a demo before signing up?',
			answer: "Of course! You can start with our Free plan to explore the platform, or contact our sales team for a personalized demo. We're happy to walk you through the features and answer any questions."
		}
	];

	let openFaq = $state<number | null>(null);

	function toggleFaq(index: number) {
		openFaq = openFaq === index ? null : index;
	}

	function getPrice(plan: typeof plans[0]) {
		return billingPeriod === 'yearly' ? plan.yearlyPrice : plan.monthlyPrice;
	}

	function getSavings(plan: typeof plans[0]) {
		if (plan.monthlyPrice === 0) return 0;
		return (plan.monthlyPrice - plan.yearlyPrice) * 12;
	}
</script>

<svelte:head>
	<title>Pricing - LimeStack</title>
	<meta name="description" content="Simple, transparent pricing for resellers of all sizes. Start free and scale as you grow." />
</svelte:head>

<!-- Hero -->
<section class="bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 pt-36 pb-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-3xl text-center">
			<span class="text-sm font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400">Pricing</span>
			<h1 class="mt-3 text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-5xl">
				Simple, transparent pricing
			</h1>
			<p class="mt-6 text-lg text-gray-600 dark:text-gray-300">
				Start free and scale as you grow. No hidden fees, no surprises.
			</p>

			<!-- Billing toggle -->
			<div class="mt-10 flex items-center justify-center gap-4">
				<span class="text-sm font-medium {billingPeriod === 'monthly' ? 'text-gray-900 dark:text-gray-50' : 'text-gray-500 dark:text-gray-400'}">Monthly</span>
				<button
					onclick={() => (billingPeriod = billingPeriod === 'monthly' ? 'yearly' : 'monthly')}
					class="relative h-6 w-12 rounded-full bg-primary-600 transition-colors"
				>
					<span
						class="absolute top-1 h-4 w-4 rounded-full bg-white shadow transition-all {billingPeriod === 'yearly' ? 'left-7' : 'left-1'}"
					></span>
				</button>
				<span class="text-sm font-medium {billingPeriod === 'yearly' ? 'text-gray-900 dark:text-gray-50' : 'text-gray-500 dark:text-gray-400'}">
					Yearly
					<span class="ml-1 rounded-full bg-primary-100 dark:bg-primary-900/40 px-2 py-0.5 text-xs font-medium text-primary-700 dark:text-primary-300">Save 17%</span>
				</span>
			</div>
		</div>
	</div>
</section>

<!-- Pricing Cards -->
<section class="pb-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="grid gap-8 lg:grid-cols-3">
			{#each plans as plan}
				<div
					class="relative flex flex-col rounded-2xl border {plan.highlighted
						? 'border-primary-500 shadow-xl shadow-primary-100 dark:shadow-primary-900/20'
						: 'border-gray-200 dark:border-gray-700'} bg-white dark:bg-gray-900"
				>
					{#if plan.badge}
						<div class="absolute -top-4 left-1/2 -translate-x-1/2">
							<span class="rounded-full bg-primary-600 px-4 py-1 text-sm font-medium text-white">{plan.badge}</span>
						</div>
					{/if}

					<div class="p-8">
						<h3 class="text-xl font-semibold text-gray-900 dark:text-gray-50">{plan.name}</h3>

						<div class="mt-6 flex flex-wrap items-baseline gap-x-2">
							<span class="text-4xl font-bold text-gray-900 dark:text-gray-50">${getPrice(plan)}</span>
							<span class="text-gray-600 dark:text-gray-300">{plan.monthlyPrice === 0 ? '/forever' : '/month'}</span>
							{#if billingPeriod === 'yearly' && getSavings(plan) > 0}
								<span class="relative -top-px rounded-full bg-primary-100 px-2.5 py-0.5 text-xs font-semibold text-primary-700 dark:bg-primary-900/40 dark:text-primary-300">Save ${getSavings(plan)}/yr</span>
							{/if}
						</div>

						<a
							href="https://app.limestack.io/auth/login"
							class="mt-8 block w-full rounded-lg {plan.highlighted
								? 'bg-primary-600 text-white hover:bg-primary-700'
								: 'border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800'} py-3 text-center font-medium transition-colors"
						>
							{plan.cta}
						</a>
					</div>

					<div class="flex-1 border-t border-gray-100 dark:border-gray-700/80 p-8">
						<p class="mb-4 text-sm font-medium text-gray-900 dark:text-gray-50">What's included:</p>
						<ul class="space-y-3">
							{#each plan.features as feature}
								<li class="flex items-center gap-3">
									{#if feature.included}
										<IconCheck size={18} class="shrink-0 text-primary-600 dark:text-primary-400" />
										<span class="text-gray-700 dark:text-gray-200">{feature.name}</span>
									{:else}
										<IconX size={18} class="shrink-0 text-gray-300 dark:text-gray-600" />
										<span class="text-gray-400 dark:text-gray-500">{feature.name}</span>
									{/if}
								</li>
							{/each}
						</ul>
					</div>
				</div>
			{/each}
		</div>

		<!-- Trust badges -->
		<div class="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-gray-500 dark:text-gray-400">
			<div class="flex items-center gap-2">
				<IconShieldCheck size={20} class="text-primary-600 dark:text-primary-400" />
				<span>30-day money-back guarantee</span>
			</div>
			<div class="flex items-center gap-2">
				<IconHeadset size={20} class="text-primary-600 dark:text-primary-400" />
				<span>Cancel anytime</span>
			</div>
			<div class="flex items-center gap-2">
				<IconRefresh size={20} class="text-primary-600 dark:text-primary-400" />
				<span>No long-term contracts</span>
			</div>
		</div>
	</div>
</section>

<!-- Comparison Table -->
<section class="bg-gray-50 dark:bg-gray-800 py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-2xl text-center">
			<h2 class="text-3xl font-bold text-gray-900 dark:text-gray-50">Compare plans</h2>
			<p class="mt-4 text-gray-600 dark:text-gray-300">See which plan is right for your business.</p>
		</div>

		<div class="mt-12 overflow-x-auto">
			<table class="w-full min-w-[640px] border-collapse">
				<thead>
					<tr>
						<th class="p-4 text-left font-medium text-gray-500 dark:text-gray-400">Features</th>
						<th class="p-4 text-center font-semibold text-gray-900 dark:text-gray-50">Free</th>
						<th class="rounded-t-lg bg-primary-50 dark:bg-primary-950/30 p-4 text-center font-semibold text-primary-700 dark:text-primary-300">Pro</th>
						<th class="p-4 text-center font-semibold text-gray-900 dark:text-gray-50">Business</th>
					</tr>
				</thead>
				<tbody class="divide-y divide-gray-200 dark:divide-gray-700">
					<tr>
						<td class="p-4 text-gray-700 dark:text-gray-200">Active listings</td>
						<td class="p-4 text-center text-gray-600 dark:text-gray-300">10</td>
						<td class="bg-primary-50/50 dark:bg-primary-950/20 p-4 text-center text-gray-600 dark:text-gray-300">150</td>
						<td class="p-4 text-center text-gray-600 dark:text-gray-300">Unlimited</td>
					</tr>
					<tr>
						<td class="p-4 text-gray-700 dark:text-gray-200">Orders synced / month</td>
						<td class="p-4 text-center text-gray-600 dark:text-gray-300">10</td>
						<td class="bg-primary-50/50 dark:bg-primary-950/20 p-4 text-center text-gray-600 dark:text-gray-300">150</td>
						<td class="p-4 text-center text-gray-600 dark:text-gray-300">Unlimited</td>
					</tr>
					<tr>
						<td class="p-4 text-gray-700 dark:text-gray-200">Shipping labels / month</td>
						<td class="p-4 text-center text-gray-600 dark:text-gray-300">10</td>
						<td class="bg-primary-50/50 dark:bg-primary-950/20 p-4 text-center text-gray-600 dark:text-gray-300">150</td>
						<td class="p-4 text-center text-gray-600 dark:text-gray-300">Unlimited</td>
					</tr>
					<tr>
						<td class="p-4 text-gray-700 dark:text-gray-200">AI generations / month</td>
						<td class="p-4 text-center text-gray-600 dark:text-gray-300">10</td>
						<td class="bg-primary-50/50 dark:bg-primary-950/20 p-4 text-center text-gray-600 dark:text-gray-300">150</td>
						<td class="p-4 text-center text-gray-600 dark:text-gray-300">Unlimited</td>
					</tr>
					<tr>
						<td class="p-4 text-gray-700 dark:text-gray-200">Source scans</td>
						<td class="p-4 text-center text-gray-600 dark:text-gray-300">Weekly</td>
						<td class="bg-primary-50/50 dark:bg-primary-950/20 p-4 text-center text-gray-600 dark:text-gray-300">Daily</td>
						<td class="p-4 text-center text-gray-600 dark:text-gray-300">Every 4 hours</td>
					</tr>
					<tr>
						<td class="p-4 text-gray-700 dark:text-gray-200">Offer checks</td>
						<td class="p-4 text-center text-gray-600 dark:text-gray-300">Daily</td>
						<td class="bg-primary-50/50 dark:bg-primary-950/20 p-4 text-center text-gray-600 dark:text-gray-300">Daily</td>
						<td class="p-4 text-center text-gray-600 dark:text-gray-300">Hourly</td>
					</tr>
					<tr>
						<td class="p-4 text-gray-700 dark:text-gray-200">Analytics</td>
						<td class="p-4 text-center"><IconX size={18} class="mx-auto text-gray-300 dark:text-gray-600" /></td>
						<td class="bg-primary-50/50 dark:bg-primary-950/20 p-4 text-center text-gray-600 dark:text-gray-300">Basic</td>
						<td class="p-4 text-center text-gray-600 dark:text-gray-300">Advanced</td>
					</tr>
					<tr>
						<td class="p-4 text-gray-700 dark:text-gray-200">Future marketplaces</td>
						<td class="p-4 text-center"><IconCheck size={18} class="mx-auto text-primary-600 dark:text-primary-400" /></td>
						<td class="bg-primary-50/50 dark:bg-primary-950/20 p-4 text-center"><IconCheck size={18} class="mx-auto text-primary-600 dark:text-primary-400" /></td>
						<td class="p-4 text-center"><IconCheck size={18} class="mx-auto text-primary-600 dark:text-primary-400" /></td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</section>

<!-- FAQ Section -->
<section id="faq" class="py-20">
	<div class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
		<div class="text-center">
			<span class="text-sm font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400">FAQ</span>
			<h2 class="mt-3 text-3xl font-bold text-gray-900 dark:text-gray-50">
				Frequently asked questions
			</h2>
		</div>

		<div class="mt-12 space-y-4">
			{#each faqs as faq, index}
				<div class="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
					<button
						onclick={() => toggleFaq(index)}
						class="flex w-full items-center justify-between px-6 py-4 text-left"
					>
						<span class="font-medium text-gray-900 dark:text-gray-50">{faq.question}</span>
						<svg
							class="h-5 w-5 shrink-0 text-gray-500 dark:text-gray-400 transition-transform {openFaq === index ? 'rotate-180' : ''}"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
						</svg>
					</button>
					{#if openFaq === index}
						<div class="border-t border-gray-100 dark:border-gray-700/80 px-6 py-4">
							<p class="text-gray-600 dark:text-gray-300">{faq.answer}</p>
						</div>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- CTA -->
<section class="bg-primary-600 py-20">
	<div class="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
		<h2 class="text-3xl font-bold text-white">
			Ready to get started?
		</h2>
		<p class="mx-auto mt-4 max-w-2xl text-lg text-primary-100">
			Start with our free plan and upgrade as you grow. No credit card required.
		</p>
		<div class="mt-10">
			<a
				href="https://app.limestack.io/auth/login"
				class="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-semibold text-primary-700 shadow-lg transition-all hover:bg-primary-50"
			>
				Start Your Free Account
				<IconArrowRight size={20} />
			</a>
		</div>
		<p class="mt-6 text-sm text-primary-200">
			No credit card required · Free forever plan available
		</p>
	</div>
</section>
