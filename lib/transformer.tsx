export const domainShortcutToLongname = (shortcut: string): string | null => {
    if (!shortcut) return null;

    let shortcutLower = shortcut.toLowerCase().trim();
    if (shortcutLower === 'ds') {
        return 'Data Science'
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





export const captializeWords = (sentence: string): string => {
    return sentence.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
}