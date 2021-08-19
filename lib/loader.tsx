import fs from 'fs'
import { parseISO, format } from 'date-fns'
// import { formatWithOptions } from 'date-fns/fp'
import { enUS } from 'date-fns/locale'
import { join } from 'path'
import matter from 'gray-matter';
import sha1 from 'js-sha1';
import { ITerm, IMatterResult, IAuthor } from './loaderInterface';
import { ITermSuggestions } from '../components/Landing/TermSuggestions';
import { domainShortcutToLongname, domainShortcutToDomainHref } from './transformer';

const termsDir = join(process.cwd(), 'content/terms')
const authorsDir = join(process.cwd(), 'content/authors')
const articleDir = join(process.cwd(), 'content/articles')
const allTags: string[] = [];

export function getSlugsFromFilenames(dir: string): string[] {
    return fs.readdirSync(dir).filter(file => file.toLowerCase() !== '_template.md')
}

export function matterReadFile(fileName: string, dir: string): IMatterResult & { realSlug: string } {
    const realSlug = fileName.replace(/\.md$/, '')
    const fullPath = join(dir, `${realSlug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, excerpt, content }: IMatterResult = matter(fileContents, { excerpt: true })

    return { data, excerpt, content, realSlug }
}

export function loadTermsFile(fileName: string) {
    const { data, excerpt, content, realSlug } = matterReadFile(fileName, termsDir);

    allTags.push(data.tags)
    let contentWithoutExcerpt = content

    if (excerpt) {
        contentWithoutExcerpt = content.replace(excerpt, '').replace('---\n', '')
    }

    if (data.title.length == 0) {
        data.title = realSlug.replace(/-/g, ' ');
    }

    if (data.created.length == 0) {
        data.created = new Date().toISOString().substr(0, 10)
    }

    const items = {
        data,
        excerpt,
        content: contentWithoutExcerpt,
        hash: sha1(data.title),
        slug: realSlug.toLowerCase().replace(/[^a-zA-Z0-9-]/g, '')
    }

    return items as ITerm
}

var ALL_TERMS: ITerm[];

export function getTerms(): ITerm[] {
    const fileNames: string[] = getSlugsFromFilenames(termsDir)

    const allTerms: ITerm[] = fileNames
        .map(fileName => loadTermsFile(fileName)) // load every file
        .filter(term => !term.data?.draft) // drop if in draft mode
        .sort((term1, term2) => (term1.data.title.toLowerCase() > term2.data.title.toLowerCase() ? 1 : -1)) // sort alpha asc

    ALL_TERMS = allTerms

    const hashes: string[] = []
    const titles: string[] = []
    allTerms.map(term => {
        hashes.push(term.hash)
        titles.push(term.data.title.toLowerCase().replace(/[^a-zA-Z0-9]/g, '')) // strip any special char
    })

    // @ts-ignore
    if (hashes.length !== [... new Set(hashes)].length) {
        console.error('Error duplicate hash: Duplicate terms titles')
    }

    return allTerms

}

export function getMostRecentTerms(): ITermSuggestions[] {
    // console.log(typeof ALL_TERMS);

    return ALL_TERMS
        .sort((term1, term2) => (term1.data.created > term2.data.created ? 1 : -1))
        .slice(0, 4)
        .map(item => {
            return {
                title: item.data.title,
                slug: item.slug,
                domain: domainShortcutToLongname(item.data.domain),
                domainHref: domainShortcutToDomainHref(item.data.domain),
            }
        }) as ITermSuggestions[];
}


export function loadAuthorFile(fileName: string): IAuthor {
    const { data, excerpt, content, realSlug } = matterReadFile(fileName, authorsDir);

    const authorObj = { ...data, profile: excerpt } as IAuthor;
    authorObj.slug = realSlug;

    return authorObj
}


export function getAuthors(): IAuthor[] {
    const fileNames: string[] = getSlugsFromFilenames(authorsDir)
    const allAuthors: IAuthor[] = fileNames.map((fileName) => loadAuthorFile(fileName))

    return allAuthors
}

export function getArticles() {

}