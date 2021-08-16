export const domainShortcutToLongname = (shortcut: string): string | null => {
    if (!shortcut) return null;

    let shortcutLower = shortcut.toLowerCase().trim();
    if (shortcutLower === 'ds') {
        return 'Data Science'
    }
    if (shortcutLower === 'mle') {
        return 'Machine Learning'
    }
    if (shortcutLower === 'de') {
        return 'Data Engineering'
    }
    if (shortcutLower === 'finance') {
        return 'Finance & Business'
    }
    if (shortcutLower === 'block') {
        return 'Blockchain'
    }
    if (shortcutLower === 'cloud') {
        return 'Cloud'
    }
    return null
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
    if (shortcutLower === 'finance') {
        return 'business-and-finance'
    }
    if (shortcutLower === 'block') {
        return 'blockchain'
    }
    if (shortcutLower === 'cloud') {
        return 'cloud'
    }
    return null
}





export const captializeWords = (sentence: string): string => {
    return sentence.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
}