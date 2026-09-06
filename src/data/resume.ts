export type ResumeLink = {
    label: string;
    href: string;
    external?: boolean;
};

export type Experience = {
    role: string;
    company: string;
    period: string;
    highlights: string[];
};

export type SkillGroup = {
    name: string;
    skills: string;
};

export const resume = {
    name: 'Norbert István Cseh',
    title: 'Senior Software development engineer in Test at GoTo',
    image: {
        src: '/profile.jpg',
        alt: 'Norbert István Cseh',
    },
    contact: [
        { label: 'norbertcseh@proton.me', href: 'mailto:norbertcseh@proton.me' },
        { label: 'www.ncseh.hu', href: 'https://www.ncseh.hu', external: true },
        {
            label: 'LinkedIn',
            href: 'https://linkedin.com/in/norbertistvancseh/',
            external: true,
        },
        {
            label: 'GitHub',
            href: 'https://github.com/NorbertCseh',
            external: true,
        },
    ] satisfies ResumeLink[],
    location: 'Budapest, Hungary',
    badge: {
        src: 'https://tryhackme.com/api/v2/badges/public-profile?userPublicId=997703',
        title: 'TryHackMe public profile badge',
    },
    sections: {
        about: {
            id: 'about',
            title: 'About Me',
            content: 'Senior SDET with 7+ years of experience breaking software on purpose — and building the frameworks that make that repeatable. I specialize in TypeScript-based test automation with Playwright and WebdriverIO, integrated into CI/CD pipelines, and I led the framework migration that eliminated our oldest, most fragile dependencies. I use AI tooling daily for test authoring, code generation, and documentation.',
        },
        experience: {
            id: 'experience',
            title: 'Experience',
            entries: [
                {
                    role: 'Senior Software Developer Engineer in Test',
                    company: 'GoTo (formerly LogMeIn)',
                    period: 'Jan 2021 – Present',
                    highlights: [
                        'Develop and maintain automated web and API test suites in TypeScript, integrated into GitHub Actions CI/CD pipelines with cross-browser execution via BrowserStack',
                        'Built a dedicated Playwright-based API automation repository for the core product, complementing the existing UI automation suite',
                        'Led the migration of the UI automation framework from WebdriverIO v7 to v9, significantly reducing maintenance overhead by eliminating outdated dependencies',
                        'Mentored new colleagues joining the team and act as the go-to contact for the automation framework, supporting internal customers',
                        'Manage test cases and traceability in TestRail; track defects and sprint work in Jira',
                    ],
                },
                {
                    role: 'Quality Assurance Engineer',
                    company: 'KPMG',
                    period: 'Apr 2020 – Jan 2021',
                    highlights: [
                        'Automated end-to-end tests for a green-field corporate tax calculation platform using C# and Selenium',
                        'Built the initial automation suite from scratch for a system processing uploaded company data with background tax computation',
                    ],
                },
                {
                    role: 'Test Engineer',
                    company: 'Circeo',
                    period: 'Nov 2018 – Mar 2020',
                    highlights: [
                        'Tested a modular banking platform orchestrating customer-facing processes, from registration through to successful loan disbursement',
                        'Performed manual and automated testing of web applications using Java and Selenium',
                        'Provided first-level support and worked closely with banking customers',
                    ],
                },
            ] satisfies Experience[],
        },
        skills: {
            id: 'skills',
            title: 'Skills',
            groups: [
                { name: 'Languages', skills: 'TypeScript, Java, C#, SQL' },
                {
                    name: 'Test Automation',
                    skills: 'Playwright (API & UI), WebdriverIO, Selenium',
                },
                {
                    name: 'Tools & Platforms',
                    skills: 'GitHub Actions, BrowserStack, TestRail, Jira, Git',
                },
                {
                    name: 'AI',
                    skills: 'AI-assisted test development, code generation, technical documentation',
                },
            ] satisfies SkillGroup[],
        },
    },
} as const;

export type Resume = typeof resume;