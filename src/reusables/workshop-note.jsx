
import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import Prism from 'prismjs';


export const WorkShopNote = ({file}) => {
    const [ markdown, setMarkdown] = useState('');

    useEffect(() => {
        const fetchFileContent = async () => {
            const fileContent = await fetch(file);
            const fileContentData = await fileContent.text();
            setMarkdown(fileContentData);
        }

        fetchFileContent();
    });

    useEffect(() => Prism.highlightAll());

    return (
        <div  className="workShopNote">
            <ReactMarkdown source={markdown} />
        </div>
    )
} 