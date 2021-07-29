import React from 'react'

function Italic({ editor }) {
    return (
        <div>
            <button onClick={() => editor.chain().focus().toggleItalic().run()}><span class="material-icons">
                format_italic
            </span>
            </button>
        </div>
    )
}

export default Italic
