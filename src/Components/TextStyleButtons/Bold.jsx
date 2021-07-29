import React from 'react'

export default function Bold({ editor }) {
    return (
        <div>
            <button onClick={() => editor.chain().focus().toggleBold().run()}><span class="material-icons">
                format_bold
            </span>
            </button>
        </div>
    )
}
