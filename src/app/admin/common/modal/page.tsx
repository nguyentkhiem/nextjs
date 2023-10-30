'use client'
import Modal from '@/app/components/Modal'
import { useState } from 'react'

export default function ModalCommon() {
  const [open, setOpen] = useState<boolean>(false)
  return (
    <>
      <h1 className=" font-bold text-2xl">Modal</h1>
      <p> Click button to show Modal</p>

      <div className="flex justify-center">
        <button
          onClick={() => setOpen(true)}
          className="bg-blue-200 p-2 rounded-sm"
        >
          Open Modal
        </button>
      </div>
      <Modal isOpen={open} handleClose={() => setOpen(false)}>
        <h1>show modal</h1>
      </Modal>
    </>
  )
}
