import fs from 'fs'
import { parseISO, format } from 'date-fns'
// import { formatWithOptions } from 'date-fns/fp'
import { enUS } from 'date-fns/locale'
import { join } from 'path'
import matter from 'gray-matter';
import sha1 from 'js-sha1';
import { Item, MatterResult } from './IItemData';

const itemsDirectory = join(process.cwd(), 'content/terms/ds')
const allTags: string[] = [];

export function getItemsSlugs() {
    return fs.readdirSync(itemsDirectory).filter(file => file.toLowerCase() !== '_.md')
}

// const dateToString = formatWithOptions({ locale: enUS }, 'D MMMM YYYY')

const transformDate = (date: string) => {
    try {
        const d = parseISO(date)
        return d
    } catch (e) {
        // console.log(`Error parsing date: ${e}`)
        return ''
    }

}

export function getItemsBySlug(slug: string): Item {
    const realSlug = slug.replace(/\.md$/, '')
    const fullPath = join(itemsDirectory, `${realSlug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, excerpt, content }: MatterResult = matter(fileContents, { excerpt: true })

    allTags.push(data.tags)

    // data.current = dateToString(data.current)
    // data.updated = dateToString(data.updated)

    // data.current = transformDate(data.current)
    // data.updated = transformDate(data.updated)
    // data.updated = format(parseISO(data.updated), 'D MMMM YYYY')

    let contentWithoutExcerpt = content
    if (excerpt) {
        contentWithoutExcerpt = content.replace(excerpt, '').replace('---\n', '')
    }

    if (data.title.length == 0) {
        data.title = realSlug.replace(/-/g, ' ');
    }
    const items = {
        data,
        excerpt,
        content: contentWithoutExcerpt,
        hash: sha1(data.title),
        slug: realSlug.toLowerCase().replace(/[^a-zA-Z0-9-]/g, '')
    }

    // console.log(items)
    return items as Item
}


// TOD remove fields
export function getAllItems(): Item[] {
    const slugs = getItemsSlugs()

    let hashes: string[] = []
    const items: Item[] = slugs
        .map(slug => getItemsBySlug(slug))
        .filter(post => !post.data?.draft)
        .sort((post1, post2) => (post1.data.title.toLowerCase() > post2.data.title.toLowerCase() ? 1 : -1))


    items.map(item => hashes.push(item.hash))

    // @ts-ignore
    if (hashes.length !== [... new Set(hashes)].length) {
        console.error('Error building terminologies: non unique hash. Most likely duplicate title/term')
    }

    return items
}
