<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';
	import { IconMenu2, IconX, IconChevronDown } from '@tabler/icons-svelte';

	let { children } = $props();

	let mobileMenuOpen = $state(false);
	let featuresDropdownOpen = $state(false);

	const navLinks = [
		{ href: '/features', label: 'Features', hasDropdown: true },
		{ href: '/pricing', label: 'Pricing' },
		{ href: '/about', label: 'About' },
		{ href: '/blog', label: 'Blog' },
		{ href: '/contact', label: 'Contact' }
	];

	const featureLinks = [
		{ href: '/features#inventory', label: 'Inventory Management', desc: 'Track every item from purchase to sale' },
		{ href: '/features#listings', label: 'Multi-Marketplace Listings', desc: 'List once, sell everywhere' },
		{ href: '/features#orders', label: 'Order Management', desc: 'Real-time sync and notifications' },
		{ href: '/features#source', label: 'Source Deals', desc: 'Find your next flip' },
		{ href: '/features#offers', label: 'Offer Management', desc: 'Handle Best Offers like a pro' },
		{ href: '/features#analytics', label: 'Analytics', desc: 'Know your numbers' }
	];

	function isActive(href: string): boolean {
		return $page.url.pathname === href || $page.url.pathname.startsWith(href + '/');
	}
</script>

<svelte:head>
	<title>LimeStack - Multi-Marketplace Inventory Management for eBay Sellers</title>
	<meta name="description" content="Source deals, manage listings, track orders across eBay and more. The all-in-one platform for resellers." />
</svelte:head>

<div class="min-h-screen bg-white">
	<!-- Navigation -->
	<nav class="fixed top-0 z-50 w-full border-b border-gray-100 bg-white/95 backdrop-blur-lg">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="flex h-16 items-center justify-between">
				<!-- Logo -->
				<a href="/" class="flex items-center gap-2">
					<div class="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-600">
						<span class="text-lg font-bold text-white">L</span>
					</div>
					<span class="text-xl font-bold text-gray-900">LimeStack</span>
				</a>

				<!-- Desktop Navigation -->
				<div class="hidden items-center gap-1 lg:flex">
					{#each navLinks as link}
						{#if link.hasDropdown}
							<div
								class="relative"
								onmouseenter={() => (featuresDropdownOpen = true)}
								onmouseleave={() => (featuresDropdownOpen = false)}
							>
								<a
									href={link.href}
									class="flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium transition-colors {isActive(link.href) ? 'text-primary-600' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}"
								>
									{link.label}
									<IconChevronDown size={16} class="transition-transform {featuresDropdownOpen ? 'rotate-180' : ''}" />
								</a>
								{#if featuresDropdownOpen}
									<div class="absolute left-0 top-full w-80 pt-2">
										<div class="rounded-xl border border-gray-100 bg-white p-2 shadow-xl">
											{#each featureLinks as feature}
												<a
													href={feature.href}
													class="block rounded-lg px-4 py-3 transition-colors hover:bg-gray-50"
												>
													<div class="font-medium text-gray-900">{feature.label}</div>
													<div class="text-sm text-gray-500">{feature.desc}</div>
												</a>
											{/each}
										</div>
									</div>
								{/if}
							</div>
						{:else}
							<a
								href={link.href}
								class="rounded-lg px-4 py-2 text-sm font-medium transition-colors {isActive(link.href) ? 'text-primary-600' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}"
							>
								{link.label}
							</a>
						{/if}
					{/each}
				</div>

				<!-- CTA Buttons -->
				<div class="hidden items-center gap-3 lg:flex">
					<a href="/login" class="rounded-lg px-4 py-2 text-sm font-medium text-gray-600 transition-colors hover:text-gray-900">
						Log in
					</a>
					<a href="/signup" class="rounded-lg bg-primary-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-700">
						Get Started Free
					</a>
				</div>

				<!-- Mobile menu button -->
				<button
					onclick={() => (mobileMenuOpen = !mobileMenuOpen)}
					class="rounded-lg p-2 text-gray-600 hover:bg-gray-100 lg:hidden"
				>
					{#if mobileMenuOpen}
						<IconX size={24} />
					{:else}
						<IconMenu2 size={24} />
					{/if}
				</button>
			</div>

			<!-- Mobile Navigation -->
			{#if mobileMenuOpen}
				<div class="border-t border-gray-100 py-4 lg:hidden">
					<div class="flex flex-col gap-1">
						{#each navLinks as link}
							<a
								href={link.href}
								class="rounded-lg px-4 py-2 text-sm font-medium {isActive(link.href) ? 'bg-primary-50 text-primary-600' : 'text-gray-600 hover:bg-gray-50'}"
								onclick={() => (mobileMenuOpen = false)}
							>
								{link.label}
							</a>
						{/each}
						<hr class="my-2 border-gray-100" />
						<a href="/login" class="rounded-lg px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50">
							Log in
						</a>
						<a href="/signup" class="mx-4 mt-2 rounded-lg bg-primary-600 px-4 py-2 text-center text-sm font-medium text-white">
							Get Started Free
						</a>
					</div>
				</div>
			{/if}
		</div>
	</nav>

	<!-- Main Content -->
	<main class="pt-16">
		{@render children()}
	</main>

	<!-- Footer -->
	<footer class="border-t border-gray-100 bg-gray-50">
		<div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
			<div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
				<!-- Brand -->
				<div class="lg:col-span-2">
					<a href="/" class="flex items-center gap-2">
						<div class="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-600">
							<span class="text-lg font-bold text-white">L</span>
						</div>
						<span class="text-xl font-bold text-gray-900">LimeStack</span>
					</a>
					<p class="mt-4 max-w-xs text-sm text-gray-600">
						The all-in-one platform for resellers. Source deals, manage inventory, and scale your business.
					</p>
					<div class="mt-6 flex gap-4">
						<a href="#" class="text-gray-400 transition-colors hover:text-gray-600">
							<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
						</a>
						<a href="#" class="text-gray-400 transition-colors hover:text-gray-600">
							<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
						</a>
						<a href="#" class="text-gray-400 transition-colors hover:text-gray-600">
							<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
						</a>
					</div>
				</div>

				<!-- Product -->
				<div>
					<h4 class="font-semibold text-gray-900">Product</h4>
					<ul class="mt-4 space-y-3 text-sm">
						<li><a href="/features" class="text-gray-600 transition-colors hover:text-gray-900">Features</a></li>
						<li><a href="/pricing" class="text-gray-600 transition-colors hover:text-gray-900">Pricing</a></li>
						<li><a href="/features#integrations" class="text-gray-600 transition-colors hover:text-gray-900">Integrations</a></li>
						<li><a href="/changelog" class="text-gray-600 transition-colors hover:text-gray-900">Changelog</a></li>
						<li><a href="/roadmap" class="text-gray-600 transition-colors hover:text-gray-900">Roadmap</a></li>
					</ul>
				</div>

				<!-- Company -->
				<div>
					<h4 class="font-semibold text-gray-900">Company</h4>
					<ul class="mt-4 space-y-3 text-sm">
						<li><a href="/about" class="text-gray-600 transition-colors hover:text-gray-900">About Us</a></li>
						<li><a href="/blog" class="text-gray-600 transition-colors hover:text-gray-900">Blog</a></li>
						<li><a href="/careers" class="text-gray-600 transition-colors hover:text-gray-900">Careers</a></li>
						<li><a href="/contact" class="text-gray-600 transition-colors hover:text-gray-900">Contact</a></li>
						<li><a href="/press" class="text-gray-600 transition-colors hover:text-gray-900">Press Kit</a></li>
					</ul>
				</div>

				<!-- Resources -->
				<div>
					<h4 class="font-semibold text-gray-900">Resources</h4>
					<ul class="mt-4 space-y-3 text-sm">
						<li><a href="/help" class="text-gray-600 transition-colors hover:text-gray-900">Help Center</a></li>
						<li><a href="/docs" class="text-gray-600 transition-colors hover:text-gray-900">Documentation</a></li>
						<li><a href="/guides" class="text-gray-600 transition-colors hover:text-gray-900">Guides</a></li>
						<li><a href="/api" class="text-gray-600 transition-colors hover:text-gray-900">API Reference</a></li>
						<li><a href="/status" class="text-gray-600 transition-colors hover:text-gray-900">System Status</a></li>
					</ul>
				</div>
			</div>

			<!-- Bottom bar -->
			<div class="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-8 sm:flex-row">
				<p class="text-sm text-gray-500">© 2025 LimeStack. All rights reserved.</p>
				<div class="flex flex-wrap justify-center gap-6 text-sm">
					<a href="/privacy" class="text-gray-500 transition-colors hover:text-gray-700">Privacy Policy</a>
					<a href="/terms" class="text-gray-500 transition-colors hover:text-gray-700">Terms of Service</a>
					<a href="/cookies" class="text-gray-500 transition-colors hover:text-gray-700">Cookie Policy</a>
				</div>
			</div>
		</div>
	</footer>
</div>
