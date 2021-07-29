import React from 'react'
import axios from 'axios';

function AddGif({ editor }) {

    async function callMemeApi(searchString) {
        console.log(searchString);

        const API_KEY = process.env.REACT_APP_API_KEY


        const { data: { data } } = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${searchString}&api_key=${API_KEY}&limit=5`)
        console.log(data)
        const memeImageUrl = data[0].images.original.webp
        console.log(memeImageUrl)
        editor.chain().focus().setImage({ src: memeImageUrl }).run()
    }
    function addMeme() {
        // console.log("adding meme")
        const regexPattern = /\{\{(.+?)_meme\}\}/
        const editorContent = editor.getHTML();
        const memeString = editorContent.match(regexPattern)

        if (memeString !== null) {
            const searchString = memeString[1];
            const newContent = editorContent.replace(regexPattern, "")
            editor.commands.setContent(newContent)

            callMemeApi(searchString)

            console.log(editor)
        }



    }

    return (
        <div>
            <button onClick={addMeme}><span class="material-icons">
                gif_box
            </span>
            </button>
        </div>
    )
}

export default AddGif
