import { ModalType } from '@/types'
import React from 'react'
import Modal from 'react-modal'

const SaylerModal = ({ isOpen, onClose }: ModalType) => {
     return (
          <Modal
               isOpen={isOpen}
               onRequestClose={onClose}
               ariaHideApp={false}
               className="bg-white w-1/4 mx-auto mt-20 rounded-lg p-5 shadow-lg outline-none"
               overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
          >
               <div className="flex flex-col space-y-5">
                    <h2 className="text-lg font-semibold text-center">Information</h2>
                    <form className='px-5 flex flex-col space-y-4'>
                         <input type="text" placeholder='Name of product' name="title" id="title" className='w-full border outline-none rounded-lg px-3 py-2' />
                         <input type="text" placeholder='Category' name="category" id="category" className='w-full border outline-none rounded-lg px-3 py-2' />
                         <input type="file" placeholder='Image of product' name="image" id="image" className='w-full border outline-none rounded-lg px-3 py-2' />
                         <button
                              className="bg-[rgb(137,62,249)] text-white py-2 px-4 rounded-lg"
                         >
                              Publish Product
                         </button>
                    </form>
               </div>
          </Modal>
     )
}

export default SaylerModal;
