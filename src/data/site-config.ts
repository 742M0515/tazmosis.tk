export type Image = {
    src: string;
    alt?: string;
};

export type Link = {
    href: string;
    text: string;
};

export type SocialLink = Link & {
    icon: 'codepen' | 'dev' | 'facebook' | 'github' | 'instagram' | 'linkedin' | 'medium' | 'x-twitter';
};

export type Hero = {
    title?: string;
    text?: string;
    avatar?: Image;
    backgroundImage?: Image;
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    description: string;
    image?: Image;
    primaryNavLinks?: Link[];
    secondaryNavLinks?: Link[];
    socialLinks?: SocialLink[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
};

const siteConfig: SiteConfig = {
    logo: {
        src: '/logo.svg',
        alt: 'Ovidius logo'
    },
    title: 'Ovidius',
    description: 'Astro.js and Tailwind CSS theme for blogging by justgoodui.com',
    image: {
        src: '/ovidius-preview.jpg',
        alt: 'Ovidius - Astro.js and Tailwind CSS theme'
    },
    primaryNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        },
        {
            text: 'Download Theme',
            href: 'https://github.com/JustGoodUI/ovidius-astro-theme'
        }
    ],
    secondaryNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Terms of Service',
            href: '/terms'
        },
        {
            text: 'Contact',
            href: '/contact'
        },
        {
            text: 'Download Theme',
            href: 'https://github.com/JustGoodUI/ovidius-astro-theme'
        }
    ],
    socialLinks: [
        {
            text: 'Go to GitHub repo',
            href: 'https://github.com/JustGoodUI/ovidius-astro-theme',
            icon: 'github'
        },
        {
            text: 'Follow on Instagram',
            href: 'https://instagram.com/',
            icon: 'instagram'
        },
        {
            text: 'Follow on X',
            href: 'https://twitter.com/justgoodui',
            icon: 'x-twitter'
        }
    ],
    hero: {
        title: 'supcunce,',
        text: "my name is tazmosis. but you can call me tip-top... coz i'm good on ya mum.",
        avatar: {
            src: '/avatar.jpg',
            alt: 'tazmosis'
        },
        backgroundImage: {
            src: '/hero.webp'
        }
    }
};

export default siteConfig;
