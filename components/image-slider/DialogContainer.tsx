"use client"
import React, { ReactNode, useRef } from 'react'


const DialogContainer = ({ children }: { children: ReactNode }) => {
    const dialogRef = useRef<HTMLDialogElement>(null)

    const openModal = () => {
        if (dialogRef.current) {
            dialogRef.current.showModal()
        }
        return
    }
    return (
        <>
            <button className="daisy_btn" onClick={openModal}>open modal</button>
            <dialog className="daisy_modal w-full max-w-3/5" ref={dialogRef}>
                <form method="dialog" className="daisy_modal-box w-full h-full max-h-full max-w-[60rem] m-12p-10">
                    <button className="daisy_btn daisy_btn-sm daisy_btn-circle daisy_btn-ghost absolute right-0 top-0">✕</button>
                    {children}
                </form>
                <form method="dialog" className="daisy_modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </>
    )
}

export default DialogContainer