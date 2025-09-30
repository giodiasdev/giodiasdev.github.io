declare module '*.mdx' {
    import type { Metadata } from "next";
    import { Element, MDXProps } from "mdx/types";

    export const metadata: Metadata;
    export default function MDXContent(props: MDXProps): Element;
}
