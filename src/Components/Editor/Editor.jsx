import React from 'react';
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit';
import Placeholder from '@tiptap/extension-placeholder';
import Underline from '@tiptap/extension-underline';
import Link from '@tiptap/extension-link'
import './Editor.css'
import Image from '@tiptap/extension-image'
import { useState } from 'react';
import Menu from '../Menu/Menu';

import Modal from '../Modal/Modal';



function Editor() {
    // const [editorContent, setEditorContent] = useState("")

    const editor = useEditor({
        extensions: [
            StarterKit,
            Placeholder,
            Image,
            Underline,
            Link
        ],

    })
    return (

        <>
            <Menu editor={editor} />
            <EditorContent editor={editor} />

        </>

    )
}

export default Editor
