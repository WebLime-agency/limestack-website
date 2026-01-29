<script lang="ts">
	import { IconSun, IconMoon } from '@tabler/icons-svelte';
	import { toggle, getTheme } from '$lib/theme.svelte';
</script>

<button
	onclick={toggle}
	class="relative inline-flex h-7 w-14 shrink-0 cursor-pointer items-center rounded-full bg-gray-200 transition-colors duration-300 dark:bg-gray-600"
	aria-label="Toggle dark mode"
>
	<span class="pointer-events-none absolute left-[7px] z-0">
		<IconSun size={14} class="text-amber-500" />
	</span>
	<span class="pointer-events-none absolute right-[7px] z-0">
		<IconMoon size={14} class="text-slate-400 dark:text-slate-300" />
	</span>
	<span
		class="pointer-events-none z-10 h-5 w-5 rounded-full bg-white shadow-sm transition-transform duration-300 ease-in-out {getTheme() === 'dark' ? 'translate-x-8' : 'translate-x-1'}"
	></span>
</button>
