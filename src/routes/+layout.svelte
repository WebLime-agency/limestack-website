<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';
	import { browser } from '$app/environment';
	import { IconMenu2, IconX, IconChevronDown } from '@tabler/icons-svelte';
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';

	let { children } = $props();

	let mobileMenuOpen = $state(false);
	let featuresDropdownOpen = $state(false);
	let scrolled = $state(false);

	$effect(() => {
		if (!browser) return;

		function handleScroll() {
			scrolled = window.scrollY > 10;
		}

		handleScroll();
		window.addEventListener('scroll', handleScroll, { passive: true });

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});

	const navLinks = [
		{ href: '/features', label: 'Features', hasDropdown: true },
		{ href: '/pricing', label: 'Pricing' },
		{ href: '/about', label: 'About' },
		{ href: '/contact', label: 'Contact' }
	];

	const featureLinks = [
		{ href: '/features#inventory', label: 'Inventory Management', desc: 'Track every item from purchase to sale' },
		{ href: '/features#listings', label: 'Listing Management', desc: 'List smarter, sell faster' },
		{ href: '/features#orders', label: 'Orders & Shipping', desc: 'Track orders and print labels' },
		{ href: '/features#source', label: 'Source Deals', desc: 'Find your next flip' },
		{ href: '/features#offers', label: 'Offer Management', desc: 'Handle Best Offers like a pro' },
		{ href: '/features#analytics', label: 'Analytics', desc: 'Know your numbers' }
	];

	function isActive(href: string): boolean {
		return $page.url.pathname === href || $page.url.pathname.startsWith(href + '/');
	}

	let navOpaque = $derived(scrolled || mobileMenuOpen);
</script>

<svelte:head>
	<title>LimeStack - Inventory & Listing Management for eBay Sellers</title>
	<meta name="description" content="Source deals, manage listings, and track orders on eBay. The all-in-one platform for resellers." />

	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="LimeStack" />
	<meta property="og:title" content="LimeStack - Inventory & Listing Management for eBay Sellers" />
	<meta property="og:description" content="Source deals, manage inventory, create listings, ship orders, and track profits — all from one place." />
	<meta property="og:image" content="https://limestack.io/og-image.png" />
	<meta property="og:url" content="https://limestack.io{$page.url.pathname}" />
	<link rel="canonical" href="https://limestack.io{$page.url.pathname}" />

	<!-- Twitter / X -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="LimeStack - Inventory & Listing Management for eBay Sellers" />
	<meta name="twitter:description" content="Source deals, manage inventory, create listings, ship orders, and track profits — all from one place." />
	<meta name="twitter:image" content="https://limestack.io/og-image.png" />
</svelte:head>

<div class="min-h-screen bg-white dark:bg-gray-900">
	<!-- Navigation -->
	<nav class="fixed top-0 z-50 w-full transition-[background-color,border-color,backdrop-filter] duration-300 {navOpaque ? 'border-b border-gray-100 bg-white/95 backdrop-blur-lg dark:border-gray-700/80 dark:bg-gray-900/95' : 'border-b border-transparent bg-transparent'}">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="flex h-16 items-center justify-between">
				<!-- Logo -->
				<a href="/" class="flex items-center gap-2">
					<div class="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-600">
						<span class="text-lg font-bold text-white">L</span>
					</div>
					<span class="text-xl font-bold text-gray-900 dark:text-gray-50">LimeStack</span>
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
									class="flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium transition-colors {isActive(link.href) ? 'text-primary-600 dark:text-primary-400' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-50'}"
								>
									{link.label}
									<IconChevronDown size={16} class="transition-transform {featuresDropdownOpen ? 'rotate-180' : ''}" />
								</a>
								{#if featuresDropdownOpen}
									<div class="absolute left-0 top-full w-80 pt-2">
										<div class="rounded-xl border border-gray-100 bg-white p-2 shadow-xl dark:border-gray-700 dark:bg-gray-800">
											{#each featureLinks as feature}
												<a
													href={feature.href}
													class="block rounded-lg px-4 py-3 transition-colors hover:bg-gray-50 dark:hover:bg-gray-700"
												>
													<div class="font-medium text-gray-900 dark:text-gray-50">{feature.label}</div>
													<div class="text-sm text-gray-500 dark:text-gray-400">{feature.desc}</div>
												</a>
											{/each}
										</div>
									</div>
								{/if}
							</div>
						{:else}
							<a
								href={link.href}
								class="rounded-lg px-4 py-2 text-sm font-medium transition-colors {isActive(link.href) ? 'text-primary-600 dark:text-primary-400' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-50'}"
							>
								{link.label}
							</a>
						{/if}
					{/each}
				</div>

				<!-- CTA Buttons -->
				<div class="hidden items-center gap-3 lg:flex">
					<a href="https://app.limestack.io/auth/login" class="rounded-lg px-4 py-2 text-sm font-medium text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50">
						Log in
					</a>
					<a href="https://app.limestack.io/auth/login" class="rounded-lg bg-primary-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-700">
						Get Started Free
					</a>
				</div>

				<!-- Mobile menu button -->
				<button
					onclick={() => (mobileMenuOpen = !mobileMenuOpen)}
					class="rounded-lg p-2 text-gray-600 hover:bg-gray-100 lg:hidden dark:text-gray-300 dark:hover:bg-gray-800"
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
				<div class="border-t border-gray-100 py-4 lg:hidden dark:border-gray-700">
					<div class="flex flex-col gap-1">
						{#each navLinks as link}
							<a
								href={link.href}
								class="rounded-lg px-4 py-2 text-sm font-medium {isActive(link.href) ? 'bg-primary-50 text-primary-600 dark:bg-primary-950/30 dark:text-primary-400' : 'text-gray-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800'}"
								onclick={() => (mobileMenuOpen = false)}
							>
								{link.label}
							</a>
						{/each}
						<hr class="my-2 border-gray-100 dark:border-gray-700" />
						<a href="https://app.limestack.io/auth/login" class="rounded-lg px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800">
							Log in
						</a>
						<a href="https://app.limestack.io/auth/login" class="mx-4 mt-2 rounded-lg bg-primary-600 px-4 py-2 text-center text-sm font-medium text-white">
							Get Started Free
						</a>
					</div>
				</div>
			{/if}
		</div>
	</nav>

	<!-- Main Content -->
	<main>
		{@render children()}
	</main>

	<!-- Footer -->
	<footer class="border-t border-gray-100 bg-gray-50 dark:border-gray-700/80 dark:bg-gray-800">
		<div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
			<div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
				<!-- Brand -->
				<div class="lg:col-span-2">
					<a href="/" class="flex items-center gap-2">
						<div class="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-600">
							<span class="text-lg font-bold text-white">L</span>
						</div>
						<span class="text-xl font-bold text-gray-900 dark:text-gray-50">LimeStack</span>
					</a>
					<p class="mt-4 max-w-xs text-sm text-gray-600 dark:text-gray-300">
						The all-in-one platform for resellers. Source deals, manage inventory, and scale your business.
					</p>
					</div>

				<!-- Features -->
				<div>
					<h4 class="font-semibold text-gray-900 dark:text-gray-50">Features</h4>
					<ul class="mt-4 space-y-3 text-sm">
						<li><a href="/features#inventory" class="text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50">Inventory Management</a></li>
						<li><a href="/features#listings" class="text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50">Listing Management</a></li>
						<li><a href="/features#orders" class="text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50">Orders & Shipping</a></li>
						<li><a href="/features#source" class="text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50">Source Deals</a></li>
						<li><a href="/features#offers" class="text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50">Offer Management</a></li>
						<li><a href="/features#analytics" class="text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50">Analytics</a></li>
					</ul>
				</div>

				<!-- Company -->
				<div>
					<h4 class="font-semibold text-gray-900 dark:text-gray-50">Company</h4>
					<ul class="mt-4 space-y-3 text-sm">
						<li><a href="/about" class="text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50">About Us</a></li>
						<li><a href="/contact" class="text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50">Contact</a></li>
					</ul>
				</div>
			</div>

			<!-- Bottom bar -->
			<div class="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-8 sm:flex-row dark:border-gray-700">
				<p class="text-sm text-gray-500 dark:text-gray-400">© 2025 LimeStack. All rights reserved.</p>
				<div class="flex flex-wrap items-center justify-center gap-6 text-sm">
					<a href="/privacy" class="text-gray-500 transition-colors hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">Privacy Policy</a>
					<a href="/terms" class="text-gray-500 transition-colors hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">Terms of Service</a>
					<ThemeToggle />
				</div>
			</div>
		</div>
	</footer>
</div>
