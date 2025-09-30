import type { MDXComponents } from 'mdx/types';

const components: MDXComponents = {
    h1: (props) => <h1 className="font-bold leading-tight tracking-tight mb-4 text-3xl" {...props} />,
    h2: (props) => <h2 className="font-semibold leading-tight tracking-tight mt-8 mb-4 text-2xl" {...props} />,
    h3: (props) => <h3 className="font-semibold leading-tight tracking-tight mt-5 mb-4 text-xl" {...props} />,
    h4: (props) => <h4 className="font-semibold leading-tight tracking-tight mt-2 mb-4 text-lg" {...props} />,
    h5: (props) => <h5 className="font-semibold leading-tight tracking-tight mt-2 mb-4 text-base" {...props} />,
    h6: (props) => <h6 className="font-semibold leading-tight tracking-tight mt-2 mb-4 text-sm" {...props} />,
    p: (props) => <p className="mb-4 last:mb-0" {...props} />,
    a: (props) => <a className="transition-colors text-[#4a4a4a] hover:text-[#1a1a1a] dark:text-[#b3b3b3] dark:hover:text-[#f0f0f0]" {...props} />,
    ol: (props) => <ol className="list-decimal list-inside mb-4 last:mb-0" {...props} />,
    ul: (props) => <ul className="list-disc list-inside mb-4 last:mb-0" {...props} />,
    li: (props) => <li className="mb-1 last:mb-0" {...props} />
};

export function useMDXComponents(): MDXComponents {
    return components
}
