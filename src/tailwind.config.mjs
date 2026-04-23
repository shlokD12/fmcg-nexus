/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', './public/**/*.html'],
    theme: {
        extend: {
            fontSize: {
                xs: ['0.75rem', { lineHeight: '1.25', letterSpacing: '0.02em', fontWeight: '400' }],
                sm: ['0.875rem', { lineHeight: '1.375', letterSpacing: '0.03em', fontWeight: '400' }],
                base: ['1rem', { lineHeight: '1.5', letterSpacing: '0.04em', fontWeight: '400' }],
                lg: ['1.125rem', { lineHeight: '1.625', letterSpacing: '0.04em', fontWeight: '500' }],
                xl: ['1.25rem', { lineHeight: '1.75', letterSpacing: '0.05em', fontWeight: '500' }],
                '2xl': ['1.5rem', { lineHeight: '2', letterSpacing: '0.05em', fontWeight: '600' }],
                '3xl': ['1.875rem', { lineHeight: '2.25', letterSpacing: '0.06em', fontWeight: '700' }],
                '4xl': ['2.25rem', { lineHeight: '2.5', letterSpacing: '0.07em', fontWeight: '700' }],
                '5xl': ['3rem', { lineHeight: '1', letterSpacing: '0.08em', fontWeight: '800' }],
                '6xl': ['3.75rem', { lineHeight: '1', letterSpacing: '0.09em', fontWeight: '800' }],
                '7xl': ['4.5rem', { lineHeight: '1', letterSpacing: '0.1em', fontWeight: '900' }],
                '8xl': ['6rem', { lineHeight: '1', letterSpacing: '0.11em', fontWeight: '900' }],
                '9xl': ['8rem', { lineHeight: '1', letterSpacing: '0.12em', fontWeight: '900' }],
            },
            fontFamily: {
                heading: "'Space Grotesk', 'Sora', sans-serif",
                paragraph: "'Sora', 'Helvetica Neue', sans-serif"
            },
            colors: {
                destructive: '#C84C3C',
                'destructive-foreground': '#F5F1ED',
                'accent-dark': '#1A1410',
                'accent-dark-foreground': '#F5F1ED',
                'manufacturer-accent': '#A67C52',
                'manufacturer-accent-foreground': '#F5F1ED',
                'stockist-accent': '#8B7355',
                'stockist-accent-foreground': '#F5F1ED',
                background: '#F5F1ED',
                secondary: '#3D3530',
                foreground: '#2B2520',
                'secondary-foreground': '#F5F1ED',
                'primary-foreground': '#F5F1ED',
                primary: '#A67C52'
            },
        },
    },
    future: {
        hoverOnlyWhenSupported: true,
    },
    plugins: [require('@tailwindcss/container-queries'), require('@tailwindcss/typography')],
}
