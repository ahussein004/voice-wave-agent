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
				// Voice agent theme colors
				voice: {
					purple: {
						light: '#9b87f5',
						DEFAULT: '#7E69AB',
						dark: '#6E59A5',
					},
					cream: '#f8f0e5',
					dark: '#1A1F2C',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' },
				},
				'float-subtle': {
					'0%, 100%': { transform: 'translateY(0) rotate(0)' },
					'50%': { transform: 'translateY(-5px) rotate(1deg)' },
				},
				'pulse-slow': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.7' },
				},
				'wave': {
					'0%': { transform: 'scaleY(1)' },
					'50%': { transform: 'scaleY(0.5)' },
					'100%': { transform: 'scaleY(1)' },
				},
				'counter': {
					'0%': { content: '0' },
					'100%': { content: 'attr(data-value)' },
				},
				'gradient-x': {
					'0%, 100%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
				},
				'gradient-radial-pulse': {
					'0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
					'50%': { opacity: '0.7', transform: 'scale(1.1)' },
				},
				'particle-flow': {
					'0%': { transform: 'translateY(0) translateX(0)', opacity: '0' },
					'50%': { opacity: '0.8' },
					'100%': { transform: 'translateY(-100px) translateX(20px)', opacity: '0' }
				},
				'quote-slide': {
					'0%': { transform: 'translateX(20px)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' }
				},
				'shimmer': {
					'0%': { backgroundPosition: '-500px 0' },
					'100%': { backgroundPosition: '500px 0' },
				},
				'ping-slow': {
					'75%, 100%': { transform: 'scale(1.5)', opacity: '0' },
				},
				'glow-pulse': {
					'0%, 100%': { opacity: '0.6', filter: 'blur(10px)' },
					'50%': { opacity: '1', filter: 'blur(15px)' },
				},
				'audio-wave': {
					'0%': { transform: 'scaleY(0.3)' },
					'50%': { transform: 'scaleY(1)' },
					'100%': { transform: 'scaleY(0.3)' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'float-subtle': 'float-subtle 5s ease-in-out infinite',
				'pulse-slow': 'pulse-slow 3s ease-in-out infinite',
				'wave': 'wave 1.5s infinite ease-in-out',
				'gradient-x': 'gradient-x 15s ease infinite',
				'gradient-radial-pulse': 'gradient-radial-pulse 8s ease infinite',
				'particle-flow': 'particle-flow 8s ease-in-out infinite',
				'quote-slide': 'quote-slide 0.5s ease-out',
				'shimmer': 'shimmer 2s infinite linear',
				'ping-slow': 'ping-slow 2s ease-in-out infinite',
				'glow-pulse': 'glow-pulse 4s ease-in-out infinite',
				'audio-wave': 'audio-wave 1.2s ease-in-out infinite',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'hero-pattern': 'linear-gradient(to bottom right, rgba(110, 89, 165, 0.8), rgba(26, 31, 44, 0.95))',
				'shimmer-gradient': 'linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.2) 20%, rgba(255, 255, 255, 0.5) 60%, rgba(255, 255, 255, 0) 100%)',
				'dots-pattern': 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
