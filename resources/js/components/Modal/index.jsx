import React, { Fragment } from 'react'
import { IconContext } from 'react-icons';
import { IoAlertCircleOutline } from 'react-icons/io5';

const ModalDelete = ({ closemodal, deleterow, info }) => {
  return (
    <Fragment>
      <div tabindex="-1" className="bg-gray-900 bg-opacity-80 flex items-center justify-center overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 md:inset-0 h-modal md:h-full">
        <div className="relative p-4 w-full max-w-md h-full md:h-auto">
          <div className="relative bg-white rounded-md shadow">
            <button onClick={closemodal} type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center">
              <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              <span className="sr-only">Close modal</span>
            </button>
            <div className="p-6 text-center">
              <IconContext.Provider value={{ color: "", className: "font-bold text-6xl text-red-400" }}>
                <div className="flex items-center justify-center">
                  <IoAlertCircleOutline />
                </div>
              </IconContext.Provider>
              <h3 className="mb-5 text-lg font-normal text-gray-500 py-4">
                Tem certeza de que deseja excluir {info}?
              </h3>
              <button onClick={deleterow} type="button" className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                Sim, tenho certeza
              </button>
              <button onClick={closemodal} type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10">
                Não, cancelar
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default ModalDelete;