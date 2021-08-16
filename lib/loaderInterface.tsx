enum PostTypeEnum {
    term = 'term',
    article = 'article',
}

enum DomainEnum {
    ds = 'ds',
    ml = 'ml',
    de = 'de',
    block = 'blockchain',
    fb = 'fb',
    finance = 'finance',
    business = 'business',
    cloud = 'cliud',
}
export interface ITermData {
    title: string;
    draft: boolean;
    type: PostTypeEnum;

    domain?: DomainEnum,
    tags?: string[];
    topics?: string[];

    abrv?: string;
    created?: string;
    updated?: string;
    author?: string;
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
    slug: string,
    firstname: string,
    lastname: string,
    intro?: string
    email?: string,
    github?: string,
    linkedin?: string,
    homepage?: string,
    stackoverflow?: string,
}