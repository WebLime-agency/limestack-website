<script lang="ts">
	import { page } from '$app/stores';
	import { IconArrowRight } from '@tabler/icons-svelte';
</script>

<section class="flex min-h-[80vh] items-center justify-center px-4 pt-16">
	<div class="text-center">
		<p class="text-8xl font-bold text-primary-600 sm:text-9xl">{$page.status}</p>
		<h1 class="mt-4 text-3xl font-bold text-gray-900 dark:text-gray-50 sm:text-4xl">
			{#if $page.status === 404}
				Page not found
			{:else}
				Something went wrong
			{/if}
		</h1>
		<p class="mt-4 text-lg text-gray-600 dark:text-gray-300">
			{#if $page.status === 404}
				Sorry, we couldn't find the page you're looking for.
			{:else}
				{$page.error?.message || 'An unexpected error occurred.'}
			{/if}
		</p>
		<div class="mt-10">
			<a
				href="/"
				class="inline-flex items-center gap-2 rounded-xl bg-primary-600 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:bg-primary-700"
			>
				Back to Home
				<IconArrowRight size={20} />
			</a>
		</div>
	</div>
</section>
