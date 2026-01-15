<script lang="ts">
	import { IconMail, IconMessageCircle, IconClock, IconBrandX, IconBrandLinkedin, IconMapPin, IconSend } from '@tabler/icons-svelte';

	let formData = $state({
		name: '',
		email: '',
		subject: 'general',
		message: ''
	});

	let isSubmitting = $state(false);
	let isSubmitted = $state(false);

	const subjects = [
		{ value: 'general', label: 'General Inquiry' },
		{ value: 'sales', label: 'Sales Question' },
		{ value: 'support', label: 'Technical Support' },
		{ value: 'partnership', label: 'Partnership Opportunity' },
		{ value: 'press', label: 'Press Inquiry' }
	];

	const contactMethods = [
		{
			icon: IconMail,
			title: 'Email Us',
			description: 'For general inquiries and support',
			contact: 'hello@limestack.io',
			action: 'mailto:hello@limestack.io'
		},
		{
			icon: IconMessageCircle,
			title: 'Live Chat',
			description: 'Chat with our team in real-time',
			contact: 'Available in-app',
			action: '#'
		},
		{
			icon: IconClock,
			title: 'Response Time',
			description: 'We typically respond within',
			contact: '24 hours',
			action: null
		}
	];

	async function handleSubmit(e: Event) {
		e.preventDefault();
		isSubmitting = true;

		// Simulate form submission
		await new Promise((resolve) => setTimeout(resolve, 1500));

		isSubmitting = false;
		isSubmitted = true;
	}
</script>

<svelte:head>
	<title>Contact Us - LimeStack</title>
	<meta name="description" content="Get in touch with the LimeStack team. We're here to help with any questions about our platform." />
</svelte:head>

<!-- Hero -->
<section class="bg-gradient-to-b from-gray-50 to-white py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-3xl text-center">
			<span class="text-sm font-semibold uppercase tracking-wider text-primary-600">Contact</span>
			<h1 class="mt-3 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
				Get in touch
			</h1>
			<p class="mt-6 text-lg text-gray-600">
				Have a question, feedback, or just want to say hello? We'd love to hear from you.
			</p>
		</div>
	</div>
</section>

<!-- Contact Methods -->
<section class="pb-12">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="grid gap-6 sm:grid-cols-3">
			{#each contactMethods as method}
				<div class="rounded-xl border border-gray-200 bg-white p-6 text-center">
					<div class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100">
						<method.icon size={24} class="text-primary-600" />
					</div>
					<h3 class="font-semibold text-gray-900">{method.title}</h3>
					<p class="mt-1 text-sm text-gray-500">{method.description}</p>
					{#if method.action}
						<a href={method.action} class="mt-2 block font-medium text-primary-600 hover:text-primary-700">
							{method.contact}
						</a>
					{:else}
						<p class="mt-2 font-medium text-gray-900">{method.contact}</p>
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
				<h2 class="text-2xl font-bold text-gray-900">Send us a message</h2>
				<p class="mt-2 text-gray-600">
					Fill out the form below and we'll get back to you as soon as possible.
				</p>

				{#if isSubmitted}
					<div class="mt-8 rounded-xl bg-primary-50 p-8 text-center">
						<div class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-100">
							<IconSend size={32} class="text-primary-600" />
						</div>
						<h3 class="text-xl font-semibold text-gray-900">Message sent!</h3>
						<p class="mt-2 text-gray-600">
							Thanks for reaching out. We'll get back to you within 24 hours.
						</p>
						<button
							onclick={() => {
								isSubmitted = false;
								formData = { name: '', email: '', subject: 'general', message: '' };
							}}
							class="mt-6 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
						>
							Send another message
						</button>
					</div>
				{:else}
					<form onsubmit={handleSubmit} class="mt-8 space-y-6">
						<div class="grid gap-6 sm:grid-cols-2">
							<div>
								<label for="name" class="mb-1 block text-sm font-medium text-gray-700">Name</label>
								<input
									type="text"
									id="name"
									bind:value={formData.name}
									required
									class="block w-full rounded-lg border border-gray-300 px-4 py-3 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
									placeholder="Your name"
								/>
							</div>
							<div>
								<label for="email" class="mb-1 block text-sm font-medium text-gray-700">Email</label>
								<input
									type="email"
									id="email"
									bind:value={formData.email}
									required
									class="block w-full rounded-lg border border-gray-300 px-4 py-3 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
									placeholder="you@example.com"
								/>
							</div>
						</div>

						<div>
							<label for="subject" class="mb-1 block text-sm font-medium text-gray-700">Subject</label>
							<select
								id="subject"
								bind:value={formData.subject}
								class="block w-full rounded-lg border border-gray-300 px-4 py-3 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
							>
								{#each subjects as subject}
									<option value={subject.value}>{subject.label}</option>
								{/each}
							</select>
						</div>

						<div>
							<label for="message" class="mb-1 block text-sm font-medium text-gray-700">Message</label>
							<textarea
								id="message"
								bind:value={formData.message}
								required
								rows="5"
								class="block w-full resize-none rounded-lg border border-gray-300 px-4 py-3 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
								placeholder="How can we help you?"
							></textarea>
						</div>

						<button
							type="submit"
							disabled={isSubmitting}
							class="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary-600 px-6 py-3 font-medium text-white transition-colors hover:bg-primary-700 disabled:cursor-not-allowed disabled:opacity-50"
						>
							{#if isSubmitting}
								<svg class="h-5 w-5 animate-spin" viewBox="0 0 24 24" fill="none">
									<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
									<path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
								</svg>
								Sending...
							{:else}
								<IconSend size={18} />
								Send Message
							{/if}
						</button>
					</form>
				{/if}
			</div>

			<!-- Info -->
			<div class="lg:pl-12">
				<div class="rounded-xl bg-gray-50 p-8">
					<h3 class="text-lg font-semibold text-gray-900">Other ways to reach us</h3>

					<div class="mt-6 space-y-6">
						<div>
							<h4 class="font-medium text-gray-900">Sales inquiries</h4>
							<p class="mt-1 text-sm text-gray-600">
								Interested in our Business plan or have questions about pricing?
							</p>
							<a href="mailto:sales@limestack.io" class="mt-2 inline-block text-sm font-medium text-primary-600 hover:text-primary-700">
								sales@limestack.io
							</a>
						</div>

						<div>
							<h4 class="font-medium text-gray-900">Technical support</h4>
							<p class="mt-1 text-sm text-gray-600">
								Having issues with your account? Our support team is here to help.
							</p>
							<a href="mailto:support@limestack.io" class="mt-2 inline-block text-sm font-medium text-primary-600 hover:text-primary-700">
								support@limestack.io
							</a>
						</div>

						<div>
							<h4 class="font-medium text-gray-900">Press & media</h4>
							<p class="mt-1 text-sm text-gray-600">
								For press inquiries, interviews, or media requests.
							</p>
							<a href="mailto:press@limestack.io" class="mt-2 inline-block text-sm font-medium text-primary-600 hover:text-primary-700">
								press@limestack.io
							</a>
						</div>
					</div>

					<hr class="my-6 border-gray-200" />

					<div>
						<h4 class="font-medium text-gray-900">Follow us</h4>
						<div class="mt-3 flex gap-4">
							<a href="#" class="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-gray-600 shadow-sm transition-colors hover:text-primary-600">
								<IconBrandX size={20} />
							</a>
							<a href="#" class="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-gray-600 shadow-sm transition-colors hover:text-primary-600">
								<IconBrandLinkedin size={20} />
							</a>
						</div>
					</div>

					<hr class="my-6 border-gray-200" />

					<div class="flex items-start gap-3">
						<IconMapPin size={20} class="mt-0.5 shrink-0 text-gray-400" />
						<div>
							<h4 class="font-medium text-gray-900">Our location</h4>
							<p class="mt-1 text-sm text-gray-600">
								123 Market Street<br />
								San Francisco, CA 94105<br />
								United States
							</p>
						</div>
					</div>
				</div>

				<!-- FAQ callout -->
				<div class="mt-6 rounded-xl border border-primary-200 bg-primary-50 p-6">
					<h3 class="font-semibold text-gray-900">Looking for answers?</h3>
					<p class="mt-2 text-sm text-gray-600">
						Check out our FAQ section for answers to common questions about pricing, features, and more.
					</p>
					<a href="/pricing#faq" class="mt-4 inline-block text-sm font-medium text-primary-600 hover:text-primary-700">
						View FAQ →
					</a>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Map placeholder -->
<section class="py-12">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="h-80 overflow-hidden rounded-xl bg-gray-200">
			<div class="flex h-full items-center justify-center">
				<div class="text-center">
					<IconMapPin size={48} class="mx-auto text-gray-400" />
					<p class="mt-2 text-gray-500">Map placeholder</p>
					<p class="text-sm text-gray-400">San Francisco, CA</p>
				</div>
			</div>
		</div>
	</div>
</section>
