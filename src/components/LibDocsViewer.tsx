import React, { useEffect, useState } from 'react';
import { useLocation } from '@docusaurus/router';
import { useDocusaurusContext } from '@docusaurus/core';
import hocon from 'hocon-parser';

interface LangInfo {
    desc: string;
}

interface DocInfo {
    title: string;
    author: string;
    def_lang: string;
    base_dir: string;
    docs: {
        langs: Record<string, LangInfo>;
        index_file: string;
        files: string[];
    };
}

interface LibraryDocsProps {
    author: string;
    library: string;
}

const LibDocs: React.FC<LibraryDocsProps> = ({ author, library }) => {
    const location = useLocation();
    const { i18n } = useDocusaurusContext();
    const currentLang = i18n.currentLocale;

    const params = new URLSearchParams(location.search);
    const lib = params.get('lib');
    const [libInfo, setLibInfo] = useState<DocInfo | null>(null);
    const [content, setContent] = useState<string | null>(null);

    useEffect(() => {
        const fetchLibInfo = async () => {
            if (lib) {
                const url = `https://raw.githubusercontent.com/${author}/${library}/refs/heads/main/lib.docs.conf`;
                const response = await fetch(url);
                if (response.ok) {
                    const data = await response.text();
                    const parsedData = hocon.parse(data);
                    setLibInfo(parsedData.lib);
                    // Lade die Standardseite für die aktuelle Sprache
                    loadMDX(parsedData.lib.base_dir, parsedData.lib.docs.langs[currentLang].desc, parsedData.lib.docs.index_file);
                } else {
                    console.error('Fehler beim Laden der lib.docs.conf:', response.statusText);
                }
            }
        };

        fetchLibInfo();
    }, [lib, currentLang]);

    const loadMDX = async (baseDir: string, langDir: string, file: string) => {
        const url = `https://raw.githubusercontent.com/${author}/${library}/refs/heads/main/${baseDir}/${langDir}/${file}`;
        const response = await fetch(url);
        if (response.ok) {
            const mdxText = await response.text();
            setContent(mdxText);
        } else {
            console.error('Error on loading MDX-File:', response.statusText);
        }
    };

    return (
        <div>
            {libInfo && (
                <>
                    <h1>{libInfo.title}</h1>
                    <p>Autor: {libInfo.author}</p>
                    <h2>Inhalt</h2>
                    <div>{content}</div>
                </>
            )}
        </div>
    );
};

export default LibDocs;
