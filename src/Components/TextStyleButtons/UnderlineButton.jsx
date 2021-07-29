import React from 'react'

function UnderlineButton({ editor }) {
    return (
        <div>
            <button onClick={() => editor.chain().focus().toggleUnderline().run()}><span class="material-icons">
                format_underlined
            </span>
            </button>
        </div>
    )
}

export default UnderlineButton
