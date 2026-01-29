import { browser } from '$app/environment';

const STORAGE_KEY = 'theme';

function getInitialTheme(): 'light' | 'dark' {
	if (!browser) return 'light';
	const stored = localStorage.getItem(STORAGE_KEY);
	if (stored === 'dark' || stored === 'light') return stored;
	return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

let theme = $state<'light' | 'dark'>(getInitialTheme());

function applyTheme(value: 'light' | 'dark'): void {
	if (!browser) return;
	document.documentElement.classList.toggle('dark', value === 'dark');
	localStorage.setItem(STORAGE_KEY, value);
}

if (browser) {
	applyTheme(theme);

	window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
		if (!localStorage.getItem(STORAGE_KEY)) {
			theme = e.matches ? 'dark' : 'light';
			applyTheme(theme);
		}
	});
}

export function toggle(): void {
	theme = theme === 'dark' ? 'light' : 'dark';
	applyTheme(theme);
}

export function getTheme(): 'light' | 'dark' {
	return theme;
}
