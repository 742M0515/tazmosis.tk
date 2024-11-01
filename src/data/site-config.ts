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
        alt: 'tazmosis.tk logo'
    },
    title: 'tazmosis.tk',
    description: 'just a cunt and some code...',

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
        }
    ],
    socialLinks: [
        {
            text: 'github',
            href: 'https://github.com/742M0515',
            icon: 'github'
        },
        {
            text: 'instagram',
            href: 'https://instagram.com/tazmosis',
            icon: 'instagram'
        },
        {
            text: 'twitter',
            href: 'https://twitter.com/742M0515',
            icon: 'x-twitter'
        }
    ],
    hero: {
        title: 'supcunce.',
        text: "my name is tazmosis, but you can call me tip-top... coz i'm good on ya mum.",
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
