import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				display: ['Unbounded', 'sans-serif'],
				body: ['Golos Text', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-14px)' }
				},
				'glow-pulse': {
					'0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
					'50%': { opacity: '1', transform: 'scale(1.08)' }
				},
				'mouth-talk': {
					'0%, 100%': { transform: 'scaleY(0.3)' },
					'50%': { transform: 'scaleY(1)' }
				},
				'wave-bar': {
					'0%, 100%': { transform: 'scaleY(0.25)' },
					'50%': { transform: 'scaleY(1)' }
				},
				'spin-slow': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				},
				'breathe': {
					'0%, 100%': { transform: 'scale(1)' },
					'50%': { transform: 'scale(1.025)' }
				},
				'blink': {
					'0%, 90%, 100%': { transform: 'scaleY(1)' },
					'95%': { transform: 'scaleY(0.05)' }
				},
				'head-idle': {
					'0%':   { transform: 'rotate(0deg) translateX(0px)' },
					'20%':  { transform: 'rotate(1.2deg) translateX(2px)' },
					'45%':  { transform: 'rotate(-0.8deg) translateX(-1px)' },
					'70%':  { transform: 'rotate(0.5deg) translateX(1px)' },
					'100%': { transform: 'rotate(0deg) translateX(0px)' }
				},
				'head-talk': {
					'0%':   { transform: 'rotate(0deg) translateY(0px)' },
					'15%':  { transform: 'rotate(-1.5deg) translateY(-2px)' },
					'30%':  { transform: 'rotate(1deg) translateY(1px)' },
					'50%':  { transform: 'rotate(-0.8deg) translateY(-1px)' },
					'70%':  { transform: 'rotate(1.2deg) translateY(2px)' },
					'85%':  { transform: 'rotate(-0.5deg) translateY(-1px)' },
					'100%': { transform: 'rotate(0deg) translateY(0px)' }
				},
				'listen-pulse': {
					'0%, 100%': { boxShadow: '0 0 0 0 hsla(190 95% 55% / 0.5)' },
					'50%': { boxShadow: '0 0 0 18px hsla(190 95% 55% / 0)' }
				},
				'shimmer': {
					'0%': { backgroundPosition: '-200% center' },
					'100%': { backgroundPosition: '200% center' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out forwards',
				'float': 'float 5s ease-in-out infinite',
				'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
				'mouth-talk': 'mouth-talk 0.28s ease-in-out infinite',
				'wave-bar': 'wave-bar 0.9s ease-in-out infinite',
				'spin-slow': 'spin-slow 24s linear infinite',
				'breathe': 'breathe 4s ease-in-out infinite',
				'blink': 'blink 4.5s ease-in-out infinite',
				'head-idle': 'head-idle 8s ease-in-out infinite',
				'head-talk': 'head-talk 1.4s ease-in-out infinite',
				'listen-pulse': 'listen-pulse 1.2s ease-in-out infinite',
				'shimmer': 'shimmer 2.5s linear infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;