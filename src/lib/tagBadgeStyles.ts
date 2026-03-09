import { normalizeTag } from "./content";

// Keep these close to familiar ecosystem colors, but separated enough to avoid lookalike badges.
const TAG_NEON_BORDER_CLASSES: Record<string, string> = {
	alpinejs:
		"border-[#7dd3fc] shadow-[0_0_0_1px_rgba(125,211,252,0.55)_inset,0_0_14px_-8px_rgba(125,211,252,0.9)]",
	astro:
		"border-[#ff5d01] shadow-[0_0_0_1px_rgba(255,93,1,0.55)_inset,0_0_14px_-8px_rgba(255,93,1,0.9)]",
	axios:
		"border-[#8b5cf6] shadow-[0_0_0_1px_rgba(139,92,246,0.55)_inset,0_0_14px_-8px_rgba(139,92,246,0.9)]",
	bootstrap:
		"border-[#a855f7] shadow-[0_0_0_1px_rgba(168,85,247,0.55)_inset,0_0_14px_-8px_rgba(168,85,247,0.9)]",
	cloudinary:
		"border-[#4f7cff] shadow-[0_0_0_1px_rgba(79,124,255,0.55)_inset,0_0_14px_-8px_rgba(79,124,255,0.9)]",
	css:
		"border-[#3b82f6] shadow-[0_0_0_1px_rgba(59,130,246,0.55)_inset,0_0_14px_-8px_rgba(59,130,246,0.9)]",
	ejs:
		"border-[#d9f99d] shadow-[0_0_0_1px_rgba(217,249,157,0.6)_inset,0_0_14px_-8px_rgba(217,249,157,0.95)]",
	express:
		"border-[#d4d4d8] shadow-[0_0_0_1px_rgba(212,212,216,0.6)_inset,0_0_14px_-8px_rgba(212,212,216,0.9)]",
	figma:
		"border-[#f472b6] shadow-[0_0_0_1px_rgba(244,114,182,0.55)_inset,0_0_14px_-8px_rgba(244,114,182,0.9)]",
	firebase:
		"border-[#f59e0b] shadow-[0_0_0_1px_rgba(245,158,11,0.6)_inset,0_0_14px_-8px_rgba(245,158,11,0.95)]",
	html: "border-[#f97316] shadow-[0_0_0_1px_rgba(249,115,22,0.55)_inset,0_0_14px_-8px_rgba(249,115,22,0.9)]",
	javascript:
		"border-[#fde047] shadow-[0_0_0_1px_rgba(253,224,71,0.6)_inset,0_0_14px_-8px_rgba(253,224,71,0.95)]",
	mapbox:
		"border-[#6366f1] shadow-[0_0_0_1px_rgba(99,102,241,0.55)_inset,0_0_14px_-8px_rgba(99,102,241,0.9)]",
	mongodb:
		"border-[#22c55e] shadow-[0_0_0_1px_rgba(34,197,94,0.55)_inset,0_0_14px_-8px_rgba(34,197,94,0.9)]",
	mongoose:
		"border-[#fb7185] shadow-[0_0_0_1px_rgba(251,113,133,0.55)_inset,0_0_14px_-8px_rgba(251,113,133,0.9)]",
	nextjs:
		"border-[#e4e4e7] shadow-[0_0_0_1px_rgba(228,228,231,0.55)_inset,0_0_14px_-8px_rgba(228,228,231,0.9)]",
	nodejs:
		"border-[#84cc16] shadow-[0_0_0_1px_rgba(132,204,22,0.55)_inset,0_0_14px_-8px_rgba(132,204,22,0.9)]",
	openweathermapapi:
		"border-[#fdba74] shadow-[0_0_0_1px_rgba(253,186,116,0.55)_inset,0_0_14px_-8px_rgba(253,186,116,0.9)]",
	passport:
		"border-[#5eead4] shadow-[0_0_0_1px_rgba(94,234,212,0.55)_inset,0_0_14px_-8px_rgba(94,234,212,0.9)]",
	planetscale:
		"border-[#fbbf24] shadow-[0_0_0_1px_rgba(251,191,36,0.55)_inset,0_0_14px_-8px_rgba(251,191,36,0.9)]",
	prisma:
		"border-[#93c5fd] shadow-[0_0_0_1px_rgba(147,197,253,0.55)_inset,0_0_14px_-8px_rgba(147,197,253,0.9)]",
	react:
		"border-[#67e8f9] shadow-[0_0_0_1px_rgba(103,232,249,0.55)_inset,0_0_14px_-8px_rgba(103,232,249,0.9)]",
	solidjs:
		"border-[#60a5fa] shadow-[0_0_0_1px_rgba(96,165,250,0.55)_inset,0_0_14px_-8px_rgba(96,165,250,0.9)]",
	svelte:
		"border-[#fb7185] shadow-[0_0_0_1px_rgba(251,113,133,0.55)_inset,0_0_14px_-8px_rgba(251,113,133,0.9)]",
	sveltekit:
		"border-[#fca5a5] shadow-[0_0_0_1px_rgba(252,165,165,0.55)_inset,0_0_14px_-8px_rgba(252,165,165,0.9)]",
	tailwind:
		"border-[#22d3ee] shadow-[0_0_0_1px_rgba(34,211,238,0.55)_inset,0_0_14px_-8px_rgba(34,211,238,0.9)]",
	tailwindcss:
		"border-[#38bdf8] shadow-[0_0_0_1px_rgba(56,189,248,0.55)_inset,0_0_14px_-8px_rgba(56,189,248,0.9)]",
	trpc:
		"border-[#0ea5e9] shadow-[0_0_0_1px_rgba(14,165,233,0.55)_inset,0_0_14px_-8px_rgba(14,165,233,0.9)]",
	tsparticles:
		"border-[#c084fc] shadow-[0_0_0_1px_rgba(192,132,252,0.55)_inset,0_0_14px_-8px_rgba(192,132,252,0.9)]",
	typescript:
		"border-[#2563eb] shadow-[0_0_0_1px_rgba(37,99,235,0.55)_inset,0_0_14px_-8px_rgba(37,99,235,0.9)]",
	vantajs:
		"border-[#14b8a6] shadow-[0_0_0_1px_rgba(20,184,166,0.55)_inset,0_0_14px_-8px_rgba(20,184,166,0.9)]",
	vue: "border-[#34d399] shadow-[0_0_0_1px_rgba(52,211,153,0.55)_inset,0_0_14px_-8px_rgba(52,211,153,0.9)]",
};

const DEFAULT_NEON_BORDER_CLASSES =
	"border-[#a5f3fc] shadow-[0_0_0_1px_rgba(165,243,252,0.55)_inset,0_0_14px_-8px_rgba(165,243,252,0.9)]";

export const getTagNeonBorderClasses = (tag: string): string =>
	TAG_NEON_BORDER_CLASSES[normalizeTag(tag)] ?? DEFAULT_NEON_BORDER_CLASSES;
