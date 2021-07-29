import React from 'react';
import axios from 'axios';
import Bold from '../TextStyleButtons/Bold';
import Italic from '../TextStyleButtons/Italic';
import Underline from '@tiptap/extension-underline';
import UnderlineButton from '../TextStyleButtons/UnderlineButton';
import AddLink from '../TextStyleButtons/AddLink';
import AddImage from '../TextStyleButtons/AddImage';
import AddGif from '../TextStyleButtons/AddGif';


function Menu({ editor }) {


    if (!editor) {
        return null
    }

    // function addImage() {
    //     const url = window.prompt('URL')

    //     if (url) {
    //         editor.chain().focus().setImage({ src: url }).run()
    //     }
    // }
    // function addLink() {
    //     const url = window.prompt('Link')
    //     console.log(url)
    //     if (url) {
    //         // const editorContent = editor.getHTML();
    //         // const newContent = editorContent + url;
    //         // editor.commands.setContent(newContent)

    //         editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run()
    //     }
    // }

    // async function callMemeApi(searchString) {
    //     console.log(searchString);
    //     const API_KEY = `QrkreA4UXcvcBELGbxkKdJK6xqdcnY23`

    //     const { data: { data } } = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${searchString}&api_key=${API_KEY}&limit=5`)
    //     console.log(data)
    //     const memeImageUrl = data[0].images.original.webp
    //     console.log(memeImageUrl)
    //     editor.chain().focus().setImage({ src: memeImageUrl }).run()
    // }
    // function addMeme() {
    //     // console.log("adding meme")
    //     const regexPattern = /\{\{(.+?)_meme\}\}/
    //     const editorContent = editor.getHTML();
    //     const memeString = editorContent.match(regexPattern)

    //     if (memeString !== null) {
    //         const searchString = memeString[1];
    //         const newContent = editorContent.replace(regexPattern, "")
    //         editor.commands.setContent(newContent)

    //         callMemeApi(searchString)

    //         console.log(editor)
    //     }



    // }





    return (
        <div className={`w-full bg-gray-100 p-4`}>
            <div className={`w-2/5 flex justify-evenly`}>
                <Bold editor={editor} />
                <Italic editor={editor} />
                <UnderlineButton editor={editor} />
                <AddLink editor={editor} />
                <AddImage editor={editor} />
                <AddGif editor={editor} />

            </div>
        </div>

    )

}

export default Menu
