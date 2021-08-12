/* This example requires Tailwind CSS v2.0+ */
const navigation = [
    { name: 'Dashboard', href: '#', current: true },
    { name: 'Team', href: '#', current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'Calendar', href: '#', current: false },
    { name: 'Documents', href: '#', current: false },
    { name: 'Reports', href: '#', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function VerticalNavigation() {
    return (
        <>
            <div className="text-2xl font-bold">Content</div>
            <div className="h-1 w-10 bg-indigo-500 mb-4"></div>
            <nav className="space-y-1" aria-label="Sidebar">
                {navigation.map((item) => (
                    <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                            item.current ? 'bg-indigo-100 text-gray-900' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900',
                            'flex items-center px-3 py-2 text-sm font-medium rounded-md'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                    >
                        <span className="truncate">{item.name}</span>
                    </a>
                ))}
            </nav>

            <div>
                <div className="text-2xl font-bold mt-8">Related Terms</div>
                <div className="h-1 w-10 bg-indigo-500 mb-4"></div>
                <span className="inline-block py-1 px-2 mr-2 my-1 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">fafa</span>
                <span className="inline-block py-1 px-2 mr-2 my-1 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">f4afa</span>
                <span className="inline-block py-1 px-2 mr-2 my-1 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">ff4aafa</span>
                <span className="inline-block py-1 px-2 mr-2 my-1 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">fafa</span>
                <span className="inline-block py-1 px-2 mr-2 my-1 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">1243fafa</span>
                <span className="inline-block py-1 px-2 mr-2 my-1 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">fafa</span>
                <span className="inline-block py-1 px-2 mr-2 my-1 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">faf124gaa</span>
                <span className="inline-block py-1 px-2 mr-2 my-1 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">faagafa</span>
                <span className="inline-block py-1 px-2 mr-2 my-1 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">fa12agafa</span>
                <span className="inline-block py-1 px-2 mr-2 my-1 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">f32afa</span>


            </div>
        </>
    )
}
