<script lang="ts">
	import { IconCheck, IconX, IconArrowRight, IconShieldCheck, IconHeadset, IconRefresh } from '@tabler/icons-svelte';

	let billingPeriod = $state<'monthly' | 'yearly'>('monthly');

	const plans = [
		{
			name: 'Starter',
			description: 'Perfect for getting started with reselling',
			monthlyPrice: 0,
			yearlyPrice: 0,
			features: [
				{ name: 'Up to 100 inventory items', included: true },
				{ name: '1 eBay account', included: true },
				{ name: 'Basic analytics', included: true },
				{ name: 'Order tracking', included: true },
				{ name: 'Email support', included: true },
				{ name: 'Source deal finder', included: false },
				{ name: 'Offer management', included: false },
				{ name: 'Bulk operations', included: false },
				{ name: 'API access', included: false }
			],
			cta: 'Start Free',
			highlighted: false,
			badge: null
		},
		{
			name: 'Pro',
			description: 'For serious resellers ready to scale',
			monthlyPrice: 29,
			yearlyPrice: 24,
			features: [
				{ name: 'Unlimited inventory items', included: true },
				{ name: 'Up to 3 eBay accounts', included: true },
				{ name: 'Advanced analytics', included: true },
				{ name: 'Order tracking', included: true },
				{ name: 'Priority support', included: true },
				{ name: 'Source deal finder', included: true },
				{ name: 'Offer management', included: true },
				{ name: 'Bulk operations', included: true },
				{ name: 'API access', included: false }
			],
			cta: 'Start Free Trial',
			highlighted: true,
			badge: 'Most Popular'
		},
		{
			name: 'Business',
			description: 'For high-volume sellers and teams',
			monthlyPrice: 79,
			yearlyPrice: 66,
			features: [
				{ name: 'Unlimited inventory items', included: true },
				{ name: 'Unlimited eBay accounts', included: true },
				{ name: 'Advanced analytics', included: true },
				{ name: 'Order tracking', included: true },
				{ name: 'Dedicated support', included: true },
				{ name: 'Source deal finder', included: true },
				{ name: 'Offer management', included: true },
				{ name: 'Bulk operations', included: true },
				{ name: 'API access', included: true }
			],
			cta: 'Contact Sales',
			highlighted: false,
			badge: null
		}
	];

	const faqs = [
		{
			question: 'Is there really a free plan?',
			answer: "Yes! Our Starter plan is completely free forever. It's perfect for new resellers or those who want to try LimeStack before upgrading. No credit card required."
		},
		{
			question: 'How does the free trial work?',
			answer: 'When you sign up for Pro or Business, you get a 14-day free trial with full access to all features. No credit card required to start. At the end of your trial, you can choose to subscribe or continue with the free Starter plan.'
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
			question: 'How does eBay account counting work?',
			answer: "Each connected eBay account counts toward your plan's limit. For example, if you have a personal and business eBay account, that counts as 2 accounts. You can connect/disconnect accounts at any time."
		},
		{
			question: 'What happens to my data if I cancel?',
			answer: "If you cancel, you'll keep access until the end of your billing period. After that, your account will be downgraded to the Starter plan. Your data is retained for 30 days in case you want to resubscribe, then it's securely deleted."
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
			answer: "Of course! You can start with our free Starter plan to explore the platform, or contact our sales team for a personalized demo. We're happy to walk you through the features and answer any questions."
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
<section class="bg-gradient-to-b from-gray-50 to-white py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-3xl text-center">
			<span class="text-sm font-semibold uppercase tracking-wider text-primary-600">Pricing</span>
			<h1 class="mt-3 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
				Simple, transparent pricing
			</h1>
			<p class="mt-6 text-lg text-gray-600">
				Start free and scale as you grow. No hidden fees, no surprises.
			</p>

			<!-- Billing toggle -->
			<div class="mt-10 flex items-center justify-center gap-4">
				<span class="text-sm font-medium {billingPeriod === 'monthly' ? 'text-gray-900' : 'text-gray-500'}">Monthly</span>
				<button
					onclick={() => (billingPeriod = billingPeriod === 'monthly' ? 'yearly' : 'monthly')}
					class="relative h-6 w-12 rounded-full bg-primary-600 transition-colors"
				>
					<span
						class="absolute top-1 h-4 w-4 rounded-full bg-white shadow transition-all {billingPeriod === 'yearly' ? 'left-7' : 'left-1'}"
					></span>
				</button>
				<span class="text-sm font-medium {billingPeriod === 'yearly' ? 'text-gray-900' : 'text-gray-500'}">
					Yearly
					<span class="ml-1 rounded-full bg-primary-100 px-2 py-0.5 text-xs font-medium text-primary-700">Save 17%</span>
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
						? 'border-primary-500 shadow-xl shadow-primary-100'
						: 'border-gray-200'} bg-white"
				>
					{#if plan.badge}
						<div class="absolute -top-4 left-1/2 -translate-x-1/2">
							<span class="rounded-full bg-primary-600 px-4 py-1 text-sm font-medium text-white">{plan.badge}</span>
						</div>
					{/if}

					<div class="p-8">
						<h3 class="text-xl font-semibold text-gray-900">{plan.name}</h3>
						<p class="mt-2 text-gray-600">{plan.description}</p>

						<div class="mt-6">
							<span class="text-4xl font-bold text-gray-900">${getPrice(plan)}</span>
							<span class="text-gray-600">{plan.monthlyPrice === 0 ? '/forever' : '/month'}</span>
							{#if billingPeriod === 'yearly' && getSavings(plan) > 0}
								<p class="mt-1 text-sm text-primary-600">Save ${getSavings(plan)}/year</p>
							{/if}
						</div>

						<a
							href="/signup"
							class="mt-8 block w-full rounded-lg {plan.highlighted
								? 'bg-primary-600 text-white hover:bg-primary-700'
								: 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50'} py-3 text-center font-medium transition-colors"
						>
							{plan.cta}
						</a>
					</div>

					<div class="flex-1 border-t border-gray-100 p-8">
						<p class="mb-4 text-sm font-medium text-gray-900">What's included:</p>
						<ul class="space-y-3">
							{#each plan.features as feature}
								<li class="flex items-center gap-3">
									{#if feature.included}
										<IconCheck size={18} class="shrink-0 text-primary-600" />
										<span class="text-gray-700">{feature.name}</span>
									{:else}
										<IconX size={18} class="shrink-0 text-gray-300" />
										<span class="text-gray-400">{feature.name}</span>
									{/if}
								</li>
							{/each}
						</ul>
					</div>
				</div>
			{/each}
		</div>

		<!-- Trust badges -->
		<div class="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-gray-500">
			<div class="flex items-center gap-2">
				<IconShieldCheck size={20} class="text-primary-600" />
				<span>30-day money-back guarantee</span>
			</div>
			<div class="flex items-center gap-2">
				<IconHeadset size={20} class="text-primary-600" />
				<span>Cancel anytime</span>
			</div>
			<div class="flex items-center gap-2">
				<IconRefresh size={20} class="text-primary-600" />
				<span>No long-term contracts</span>
			</div>
		</div>
	</div>
</section>

<!-- Comparison Table -->
<section class="bg-gray-50 py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-2xl text-center">
			<h2 class="text-3xl font-bold text-gray-900">Compare plans</h2>
			<p class="mt-4 text-gray-600">See which plan is right for your business.</p>
		</div>

		<div class="mt-12 overflow-x-auto">
			<table class="w-full min-w-[640px] border-collapse">
				<thead>
					<tr>
						<th class="p-4 text-left font-medium text-gray-500">Features</th>
						<th class="p-4 text-center font-semibold text-gray-900">Starter</th>
						<th class="rounded-t-lg bg-primary-50 p-4 text-center font-semibold text-primary-700">Pro</th>
						<th class="p-4 text-center font-semibold text-gray-900">Business</th>
					</tr>
				</thead>
				<tbody class="divide-y divide-gray-200">
					<tr>
						<td class="p-4 text-gray-700">Inventory items</td>
						<td class="p-4 text-center text-gray-600">100</td>
						<td class="bg-primary-50/50 p-4 text-center text-gray-600">Unlimited</td>
						<td class="p-4 text-center text-gray-600">Unlimited</td>
					</tr>
					<tr>
						<td class="p-4 text-gray-700">eBay accounts</td>
						<td class="p-4 text-center text-gray-600">1</td>
						<td class="bg-primary-50/50 p-4 text-center text-gray-600">3</td>
						<td class="p-4 text-center text-gray-600">Unlimited</td>
					</tr>
					<tr>
						<td class="p-4 text-gray-700">Order tracking</td>
						<td class="p-4 text-center"><IconCheck size={18} class="mx-auto text-primary-600" /></td>
						<td class="bg-primary-50/50 p-4 text-center"><IconCheck size={18} class="mx-auto text-primary-600" /></td>
						<td class="p-4 text-center"><IconCheck size={18} class="mx-auto text-primary-600" /></td>
					</tr>
					<tr>
						<td class="p-4 text-gray-700">Analytics</td>
						<td class="p-4 text-center text-gray-600">Basic</td>
						<td class="bg-primary-50/50 p-4 text-center text-gray-600">Advanced</td>
						<td class="p-4 text-center text-gray-600">Advanced</td>
					</tr>
					<tr>
						<td class="p-4 text-gray-700">Source deal finder</td>
						<td class="p-4 text-center"><IconX size={18} class="mx-auto text-gray-300" /></td>
						<td class="bg-primary-50/50 p-4 text-center"><IconCheck size={18} class="mx-auto text-primary-600" /></td>
						<td class="p-4 text-center"><IconCheck size={18} class="mx-auto text-primary-600" /></td>
					</tr>
					<tr>
						<td class="p-4 text-gray-700">Offer management</td>
						<td class="p-4 text-center"><IconX size={18} class="mx-auto text-gray-300" /></td>
						<td class="bg-primary-50/50 p-4 text-center"><IconCheck size={18} class="mx-auto text-primary-600" /></td>
						<td class="p-4 text-center"><IconCheck size={18} class="mx-auto text-primary-600" /></td>
					</tr>
					<tr>
						<td class="p-4 text-gray-700">Bulk operations</td>
						<td class="p-4 text-center"><IconX size={18} class="mx-auto text-gray-300" /></td>
						<td class="bg-primary-50/50 p-4 text-center"><IconCheck size={18} class="mx-auto text-primary-600" /></td>
						<td class="p-4 text-center"><IconCheck size={18} class="mx-auto text-primary-600" /></td>
					</tr>
					<tr>
						<td class="p-4 text-gray-700">API access</td>
						<td class="p-4 text-center"><IconX size={18} class="mx-auto text-gray-300" /></td>
						<td class="bg-primary-50/50 p-4 text-center"><IconX size={18} class="mx-auto text-gray-300" /></td>
						<td class="p-4 text-center"><IconCheck size={18} class="mx-auto text-primary-600" /></td>
					</tr>
					<tr>
						<td class="p-4 text-gray-700">Team members</td>
						<td class="p-4 text-center"><IconX size={18} class="mx-auto text-gray-300" /></td>
						<td class="bg-primary-50/50 p-4 text-center"><IconX size={18} class="mx-auto text-gray-300" /></td>
						<td class="p-4 text-center"><IconCheck size={18} class="mx-auto text-primary-600" /></td>
					</tr>
					<tr>
						<td class="p-4 text-gray-700">Support</td>
						<td class="p-4 text-center text-gray-600">Email</td>
						<td class="bg-primary-50/50 p-4 text-center text-gray-600">Priority</td>
						<td class="p-4 text-center text-gray-600">Dedicated</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</section>

<!-- FAQ Section -->
<section class="py-20">
	<div class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
		<div class="text-center">
			<span class="text-sm font-semibold uppercase tracking-wider text-primary-600">FAQ</span>
			<h2 class="mt-3 text-3xl font-bold text-gray-900">
				Frequently asked questions
			</h2>
		</div>

		<div class="mt-12 space-y-4">
			{#each faqs as faq, index}
				<div class="rounded-xl border border-gray-200 bg-white">
					<button
						onclick={() => toggleFaq(index)}
						class="flex w-full items-center justify-between px-6 py-4 text-left"
					>
						<span class="font-medium text-gray-900">{faq.question}</span>
						<svg
							class="h-5 w-5 shrink-0 text-gray-500 transition-transform {openFaq === index ? 'rotate-180' : ''}"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
						</svg>
					</button>
					{#if openFaq === index}
						<div class="border-t border-gray-100 px-6 py-4">
							<p class="text-gray-600">{faq.answer}</p>
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
				href="/signup"
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
