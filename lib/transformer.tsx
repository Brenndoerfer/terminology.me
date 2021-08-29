export const domainShortcutToLongname = (shortcut: string): string | null => {
    if (!shortcut) return null;

    let shortcutLower = shortcut.toLowerCase().trim();
    if (shortcutLower === 'ds') {
        return 'Data Science'
    }
    if (shortcutLower === 'de') {
        return 'Data Engineering'
    }
    if (shortcutLower === 'swe') {
        return 'Software Engineering'
    }
    if (shortcutLower === 'finance' || shortcutLower === 'business' || shortcutLower === 'biz') {
        return 'Business & Finance'
    }
    if (shortcutLower === 'block') {
        return 'Blockchain'
    }
    if (shortcutLower === 'cloud') {
        return 'Cloud'
    }
    throw new Error(`Cannot parse shortcut: ${shortcutLower}`)
}

export const domainShortcutToDomainHref = (shortcut: string): string | null => {
    if (!shortcut) return null;

    let shortcutLower = shortcut.toLowerCase().trim();
    if (shortcutLower === 'ds') {
        return 'data-science'
    }
    if (shortcutLower === 'de') {
        return 'data-engineering'
    }
    if (shortcutLower === 'swe') {
        return 'software-engineering'
    }
    if (shortcutLower === 'finance') {
        return 'business-and-finance'
    }
    if (shortcutLower === 'block') {
        return 'blockchain'
    }
    if (shortcutLower === 'cloud') {
        return 'cloud'
    }
    throw new Error(`Cannot parse shortcut: ${shortcutLower}`)

}

export const domainHrefToLongname = (href: string | undefined): string | null => {
    if (!href) return null;

    let hrefLower = href.toLowerCase().trim();
    if (hrefLower === 'data-science') {
        return 'Data Science'
    }
    if (hrefLower === 'data-engineering') {
        return 'Data Engineering'
    }
    if (hrefLower === 'software-engineering') {
        return 'Software Engineering'
    }
    if (hrefLower === 'business-and-finance') {
        return 'Business & Finance'
    }
    if (hrefLower === 'blockchain') {
        return 'Blockchain'
    }
    if (hrefLower === 'cloud') {
        return 'Cloud Technology'
    }
    throw new Error(`Cannot parse shortcut: ${hrefLower}`)

}

export const domainHrefToShortname = (href: string): string => {

    let hrefLower = href.toLowerCase().trim();
    if (hrefLower === 'data-science') {
        return 'ds'
    }
    if (hrefLower === 'data-engineering') {
        return 'de'
    }
    if (hrefLower === 'software-engineering') {
        return 'swe'
    }
    if (hrefLower === 'business-and-finance') {
        return 'finance'
    }
    if (hrefLower === 'blockchain') {
        return 'blockchain'
    }
    if (hrefLower === 'cloud') {
        return 'cloud'
    }
    throw new Error(`Cannot parse shortcut: ${hrefLower}`)

}

export interface IDomainToColor {
    lightBorder: string,
    mediumBorder: string,
    strongBorder: string,
    text: string,
}

export function domainShortToColor(domain: string): IDomainToColor {

    let lDomain = domain.toLowerCase().trim()
    let color = "indigo";

    switch (lDomain) {
        case "ds": color = 'blue'; break;
        case "de": color = 'red'; break;
        case "swe": color = 'orange'; break;
        case "finance": color = 'green'; break;
        case "cloud": color = 'blueGray'; break;
        case "blockchain": color = 'warmGray'; break;
        default: color = 'indigo'; break;
    }

    return {
        mediumBorder: `border-${color}-300`,
        lightBorder: `border-${color}-100`,
        strongBorder: `border-${color}-500`,
        text: `text-${color}-600`
    }
}


export const captializeWords = (sentence: string): string => {
    return sentence.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
}