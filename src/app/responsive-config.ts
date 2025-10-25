// Configuración responsiva para la aplicación
export const RESPONSIVE_CONFIG = {
    breakpoints: {
        xs: 475,
        sm: 640,
        md: 768,
        lg: 1024,
        xl: 1280,
        '2xl': 1536
    },

    // Configuración de texto responsivo
    textSizes: {
        xs: {
            mobile: '0.75rem',
            tablet: '0.75rem',
            desktop: '0.75rem'
        },
        sm: {
            mobile: '0.875rem',
            tablet: '0.875rem',
            desktop: '0.875rem'
        },
        base: {
            mobile: '1rem',
            tablet: '1rem',
            desktop: '1.125rem'
        },
        lg: {
            mobile: '1.125rem',
            tablet: '1.25rem',
            desktop: '1.5rem'
        },
        xl: {
            mobile: '1.25rem',
            tablet: '1.5rem',
            desktop: '1.875rem'
        },
        '2xl': {
            mobile: '1.5rem',
            tablet: '2rem',
            desktop: '2.25rem'
        },
        '3xl': {
            mobile: '1.875rem',
            tablet: '2.5rem',
            desktop: '3rem'
        },
        '4xl': {
            mobile: '2.25rem',
            tablet: '3rem',
            desktop: '3.75rem'
        },
        '5xl': {
            mobile: '3rem',
            tablet: '4rem',
            desktop: '4.5rem'
        }
    },

    // Configuración de espaciado responsivo
    spacing: {
        xs: {
            mobile: '0.5rem',
            tablet: '0.75rem',
            desktop: '1rem'
        },
        sm: {
            mobile: '0.75rem',
            tablet: '1rem',
            desktop: '1.25rem'
        },
        base: {
            mobile: '1rem',
            tablet: '1.5rem',
            desktop: '2rem'
        },
        lg: {
            mobile: '1.5rem',
            tablet: '2rem',
            desktop: '2.5rem'
        },
        xl: {
            mobile: '2rem',
            tablet: '3rem',
            desktop: '4rem'
        }
    },

    // Configuración de grid responsivo
    grid: {
        cols: {
            mobile: 1,
            tablet: 2,
            desktop: 3
        },
        gap: {
            mobile: '1rem',
            tablet: '1.5rem',
            desktop: '2rem'
        }
    },

    // Configuración de contenedores
    containers: {
        maxWidth: {
            mobile: '100%',
            tablet: '768px',
            desktop: '1200px'
        },
        padding: {
            mobile: '1rem',
            tablet: '1.5rem',
            desktop: '2rem'
        }
    }
};

// Utilidades para detectar el tamaño de pantalla
export class ResponsiveUtils {
    static getCurrentBreakpoint(): string {
        if (typeof window === 'undefined') return 'desktop';

        const width = window.innerWidth;

        if (width < RESPONSIVE_CONFIG.breakpoints.sm) return 'mobile';
        if (width < RESPONSIVE_CONFIG.breakpoints.md) return 'sm';
        if (width < RESPONSIVE_CONFIG.breakpoints.lg) return 'md';
        if (width < RESPONSIVE_CONFIG.breakpoints.xl) return 'lg';
        if (width < RESPONSIVE_CONFIG.breakpoints['2xl']) return 'xl';
        return '2xl';
    }

    static isMobile(): boolean {
        return this.getCurrentBreakpoint() === 'mobile';
    }

    static isTablet(): boolean {
        const breakpoint = this.getCurrentBreakpoint();
        return breakpoint === 'sm' || breakpoint === 'md';
    }

    static isDesktop(): boolean {
        const breakpoint = this.getCurrentBreakpoint();
        return breakpoint === 'lg' || breakpoint === 'xl' || breakpoint === '2xl';
    }

    static getTextSize(size: keyof typeof RESPONSIVE_CONFIG.textSizes, device?: 'mobile' | 'tablet' | 'desktop'): string {
        const deviceType = device || (this.isMobile() ? 'mobile' : this.isTablet() ? 'tablet' : 'desktop');
        return RESPONSIVE_CONFIG.textSizes[size][deviceType];
    }

    static getSpacing(size: keyof typeof RESPONSIVE_CONFIG.spacing, device?: 'mobile' | 'tablet' | 'desktop'): string {
        const deviceType = device || (this.isMobile() ? 'mobile' : this.isTablet() ? 'tablet' : 'desktop');
        return RESPONSIVE_CONFIG.spacing[size][deviceType];
    }
}

// Directiva para aplicar estilos responsivos dinámicamente
export function getResponsiveClasses(
    baseClasses: string,
    mobileClasses?: string,
    tabletClasses?: string,
    desktopClasses?: string
): string {
    let classes = baseClasses;

    if (ResponsiveUtils.isMobile() && mobileClasses) {
        classes += ` ${mobileClasses}`;
    } else if (ResponsiveUtils.isTablet() && tabletClasses) {
        classes += ` ${tabletClasses}`;
    } else if (ResponsiveUtils.isDesktop() && desktopClasses) {
        classes += ` ${desktopClasses}`;
    }

    return classes;
}

