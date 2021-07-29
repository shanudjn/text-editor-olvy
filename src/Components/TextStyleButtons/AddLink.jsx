import { useState } from 'react'
import Modal from '../Modal/Modal'

export default function AddLink({ editor }) {

    const [showModal, setShowModal] = useState(false)

    function addLink(url) {

        console.log(url)
        if (url) {

            console.log("adding")
            editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run()
        }
        setShowModal(false)
    }
    return (
        <div>
            <button onClick={() => setShowModal(true)} ><span class="material-icons">
                link
            </span>
            </button>
            {showModal && <Modal handleAdd={addLink} handleCancel={() => { console.log("close"); setShowModal(false) }} />}

            {editor.isActive('link') && (
                <button
                    className='btn btn-primary-black'
                    onClick={() => editor.chain().focus().unsetLink().run()}>
                    <span class="material-icons">
                        link_off
                    </span>
                </button>
            )}
        </div>
    )
}
// className={editor.isActive('link') ? "p-1" : "p-0"}