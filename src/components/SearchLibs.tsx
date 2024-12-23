import React, { useEffect, useState } from 'react';
import Link from '@docusaurus/Link';

interface Library {
    name: string;
    title: string;
    tags: string[];
    logo: string;
}

const SearchLibs = () => {
    const [libraries, setLibraries] = useState<Library[]>([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetchLibraries();
    }, []);

    const fetchLibraries = async () => {
        try {
            const response = await fetch('https://raw.githubusercontent.com/kvexium/kvexium.github.io/refs/heads/main/src/kvex.libs.json');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            setLibraries(data);
        } catch (error) {
            console.error('Error fetching libraries:', error);
        }
    };

    const filteredLibraries = libraries.filter(lib =>
        lib.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lib.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    return (
      <div className={'libs content-all'}>
            <h1>Search for Libraries</h1>
            <input
                type="text"
                placeholder="Search for Libraries or Tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ marginBottom: '20px', padding: '10px', width: '300px' }}
            />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '40%' }}>
                {filteredLibraries.map(lib => (
                    <div key={lib.name} style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '15px', display: 'flex', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
                        <img
                            src={`https://raw.githubusercontent.com/${lib.name}/refs/heads/main/${lib.logo}`}
                            alt={`logo couldn't load`}
                            style={{ width: '50px', marginRight: '15px', marginLeft: '10px' }}
                        />
                        <div style={{ flexGrow: 1 }}>
                      <Link to={`/docs/libs?a=${lib.name.split('/')[0]}&l=${lib.name.split('/')[1]}`}>
                                <h2 className={'libs link'}>{lib.title}</h2>
                            </Link>
                            <p className={'libs author'}>{lib.name.split('/')[0]}</p>
                            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '5px' }}>
                                {lib.tags.map((tag, index) => (
                                    <div key={index} className='libs tag-div'>
                                        {tag}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SearchLibs;
