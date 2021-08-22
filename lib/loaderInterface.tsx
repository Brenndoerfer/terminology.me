enum PostTypeEnum {
    term = 'term',
    article = 'article',
}

enum DomainEnum {
    ds = 'ds',
    de = 'de',
    swe = 'swe',
    finance = 'finance',
    cloud = 'cloud',
    block = 'block',
}
export interface ITermData {
    title: string;
    draft: boolean;
    type: PostTypeEnum;
    created: string;
    domain: DomainEnum,
    author: string;

    tags?: string[];
    topics?: string[];
    references?: string[];

    abrv?: string;
    updated?: string;
}

export interface ITerm {
    data: ITermData;
    excerpt: string;
    content: string;
    hash: string;
    slug: string;
}

export interface IMatterResult {
    data: ({ [key: string]: any; } | ITermData);
    content: string;
    excerpt?: string;
}

export interface IAuthor {
    id: number,
    slug: string,
    firstname: string,
    lastname: string,
    img?: string,
    profile?: string

    email?: string,
    github?: string,
    linkedin?: string,
    homepage?: string,
    stackoverflow?: string,
}