<script lang="ts">
	import { IconMail, IconClock, IconBrandX, IconBrandLinkedin } from '@tabler/icons-svelte';

	const contactMethods = [
		{
			icon: IconMail,
			title: 'Email Us',
			description: 'For general inquiries and support',
			contact: 'hello@limestack.io',
			action: 'mailto:hello@limestack.io'
		},
		{
			icon: IconClock,
			title: 'Response Time',
			description: 'We typically respond within',
			contact: '24 hours',
			action: null
		}
	];
</script>

<svelte:head>
	<title>Contact Us - LimeStack</title>
	<meta name="description" content="Get in touch with the LimeStack team. We're here to help with any questions about our platform." />
</svelte:head>

<!-- Hero -->
<section class="bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 pt-36 pb-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-3xl text-center">
			<span class="text-sm font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400">Contact</span>
			<h1 class="mt-3 text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-5xl">
				Get in touch
			</h1>
			<p class="mt-6 text-lg text-gray-600 dark:text-gray-300">
				Have a question, feedback, or just want to say hello? We'd love to hear from you.
			</p>
		</div>
	</div>
</section>

<!-- Contact Methods -->
<section class="pb-12">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="grid gap-6 sm:grid-cols-2">
			{#each contactMethods as method}
				<div class="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-6 text-center">
					<div class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 dark:bg-primary-900/40">
						<method.icon size={24} class="text-primary-600 dark:text-primary-400" />
					</div>
					<h3 class="font-semibold text-gray-900 dark:text-gray-50">{method.title}</h3>
					<p class="mt-1 text-sm text-gray-500 dark:text-gray-400">{method.description}</p>
					{#if method.action}
						<a href={method.action} class="mt-2 block font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300">
							{method.contact}
						</a>
					{:else}
						<p class="mt-2 font-medium text-gray-900 dark:text-gray-50">{method.contact}</p>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Contact Form -->
<section class="py-12">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="grid gap-12 lg:grid-cols-2">
			<!-- Form -->
			<div>
				<h2 class="text-2xl font-bold text-gray-900 dark:text-gray-50">Send us a message</h2>
				<p class="mt-2 text-gray-600 dark:text-gray-300">
					Fill out the form below and we'll get back to you as soon as possible.
				</p>

				<div class="mt-8">
					<iframe
						src="https://limey.io/form/3aqm3Lo"
						width="100%"
						height="680"
						frameborder="0"
						scrolling="no"
						style="border: none; max-width: 100%; overflow: hidden;"
						title="Contact form"
					></iframe>
				</div>
			</div>

			<!-- Info -->
			<div class="lg:pl-12">
				<div class="rounded-xl bg-gray-50 dark:bg-gray-800 p-8">
					<h3 class="text-lg font-semibold text-gray-900 dark:text-gray-50">Other ways to reach us</h3>

					<div class="mt-6 space-y-6">
						<div>
							<h4 class="font-medium text-gray-900 dark:text-gray-50">Sales inquiries</h4>
							<p class="mt-1 text-sm text-gray-600 dark:text-gray-300">
								Interested in our Business plan or have questions about pricing?
							</p>
							<a href="mailto:sales@limestack.io" class="mt-2 inline-block text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300">
								sales@limestack.io
							</a>
						</div>

						<div>
							<h4 class="font-medium text-gray-900 dark:text-gray-50">Technical support</h4>
							<p class="mt-1 text-sm text-gray-600 dark:text-gray-300">
								Having issues with your account? Our support team is here to help.
							</p>
							<a href="mailto:support@limestack.io" class="mt-2 inline-block text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300">
								support@limestack.io
							</a>
						</div>

						<div>
							<h4 class="font-medium text-gray-900 dark:text-gray-50">Press & media</h4>
							<p class="mt-1 text-sm text-gray-600 dark:text-gray-300">
								For press inquiries, interviews, or media requests.
							</p>
							<a href="mailto:press@limestack.io" class="mt-2 inline-block text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300">
								press@limestack.io
							</a>
						</div>
					</div>

					<hr class="my-6 border-gray-200 dark:border-gray-700" />

					<div>
						<h4 class="font-medium text-gray-900 dark:text-gray-50">Follow us</h4>
						<div class="mt-3 flex gap-4">
							<a href="#" class="flex h-10 w-10 items-center justify-center rounded-lg bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 shadow-sm transition-colors hover:text-primary-600 dark:hover:text-primary-400">
								<IconBrandX size={20} />
							</a>
							<a href="#" class="flex h-10 w-10 items-center justify-center rounded-lg bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 shadow-sm transition-colors hover:text-primary-600 dark:hover:text-primary-400">
								<IconBrandLinkedin size={20} />
							</a>
						</div>
					</div>

					</div>

				<!-- FAQ callout -->
				<div class="mt-6 rounded-xl border border-primary-200 dark:border-primary-700 bg-primary-50 dark:bg-primary-950/30 p-6">
					<h3 class="font-semibold text-gray-900 dark:text-gray-50">Looking for answers?</h3>
					<p class="mt-2 text-sm text-gray-600 dark:text-gray-300">
						Check out our FAQ section for answers to common questions about pricing, features, and more.
					</p>
					<a href="/pricing#faq" class="mt-4 inline-block text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300">
						View FAQ →
					</a>
				</div>
			</div>
		</div>
	</div>
</section>

