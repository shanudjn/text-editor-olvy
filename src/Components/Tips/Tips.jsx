import React from 'react'

function Tips() {
    return (
        <div className={`text-left text-wrap `}>

            <ul className={`p-8 bg-blue-50`}>
                <p className={`font-bold`}>Instructions : </p>
                <br></br>
                <li> <span> 👉🏼 Click on </span><span class="material-icons">
                    format_bold
                </span>, <span class="material-icons">
                        format_italic
                    </span>,<span class="material-icons">
                        format_underlined
                    </span> <span>to style get bold, italics and underline formatting respectively</span></li>

                <li > <span>👉🏼 Click on </span><span class="material-icons">
                    image
                </span> <span> to add a link to an image</span></li>

                <li ><span>👉🏼 To add a link, select the text you want to make a link,and then click on </span> <span class="material-icons">
                    link
                </span> <span>to add the link in the modal</span></li>
                <li > <span>👉🏼 To add a meme, type your_meme_name + _meme inside double-braces and click</span> <span class="material-icons">
                    gif_box
                </span> <span>to add it to the editor.</span></li>

            </ul>
        </div>
    )
}

export default Tips
