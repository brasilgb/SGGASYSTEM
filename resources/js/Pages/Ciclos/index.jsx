import React, { Fragment, useEffect, useState } from 'react';
import { ABox, AboxBody, AboxFooter, AboxHeader } from '../../components/Boxes';
import { AButomAdd, AButomReload, AButtonExcuir } from '../../components/Buttons';
import SubBar from '../../components/SubBar';
import { IoCheckmarkCircleSharp, IoCloseCircleSharp, IoSearch, IoSearchOutline, IoTimeOutline } from 'react-icons/io5';
import { ATable, ATd, ATh, ATr } from '../../components/Tables';
import { Inertia } from '@inertiajs/inertia';
import moment from 'moment';
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.min.css";
import ptBR from "date-fns/locale/pt-BR";
import Layouts from '../../Layouts';
import { Link } from '@inertiajs/inertia-react';
import { IconContext } from 'react-icons/lib';
import ModalDelete from '../../components/Modal';
registerLocale("ptBR", ptBR);

const Ciclos = ({ ciclos }) => {

    const [startDate, setStartDate] = useState(new Date());
    const [newSearch, setNewSearch] = useState(false);
    const [showModal, setShowModal] = useState(false)
    const [idDelete, setIdDelete] = useState()

    const deleteRow = ((id, e) => {
        e.preventDefault();
        Inertia.delete(route('ciclos.destroy',`${ id }`))
        setShowModal(false);
    });

    const alterAction = ((id, active, e) => {
        e.preventDefault();
        Inertia.put(route('ciclos.active'), {
            'id': id, 
            'active': active
        });
    });

    const toggleModal = ((id, e) => {
        e.preventDefault();
        setShowModal(!showModal);
        setIdDelete(id);
    })
    return (
        <Fragment>
            <Layouts>
                <SubBar
                    titleBlock={[{
                        'title': "Ciclos",
                        'icon': <IoTimeOutline />
                    }]}
                    breadcumb={[
                        { 'value': 'Ciclos', 'url': false, 'separator': '' }
                    ]}
                />
                <ABox>
                    <AboxHeader>
                        <div className='w-full flex justify-start'>
                            {newSearch
                                ? <AButomReload reload="" />
                                : <AButomAdd url='ciclos.create' />
                            }

                        </div>
                        <div className='w-full flex justify-end'>
                            {/* Formulário de busca */}
                            <div className="p-0">
                                <label htmlFor="form-search" className="sr-only">Search</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 z-20">
                                        <Link
                                            type="button"
                                            as="button"
                                        >
                                            <IconContext.Provider value={{ color: "#666", className: "font-bold text-xl" }}>
                                                <div>
                                                    <IoSearchOutline />
                                                </div>
                                            </IconContext.Provider>
                                        </Link>
                                    </div>

                                    <DatePicker
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2 z-10"
                                        selected={startDate}
                                        onChange={(date) => setStartDate(date)}
                                        id="data_inicial"
                                        name="data_inicial"
                                        dateFormat="dd/MM/yyyy"
                                        locale='ptBR'
                                    />
                                </div>
                            </div>
                            {/* Formulário de busca */}
                        </div>
                    </AboxHeader>
                    <AboxBody>

                        <ATable>
                            <ATr>
                                <ATh>#ID</ATh>
                                <ATh>Data de Início</ATh>
                                <ATh>Semana de Início</ATh>
                                <ATh>Semana Atual</ATh>
                                <ATh>Semanas Percorridas</ATh>
                                <ATh>Ativo</ATh>
                                <ATh className={'w-20'}></ATh>
                            </ATr>
                            {ciclos.map((item, index) => (
                                <ATr key={index} colorRow={index % 2}>
                                    <ATd>{item.id_ciclo}</ATd>
                                    <ATd>{moment(item.data_inicial).format('DD/MM/YYYY')}</ATd>
                                    <ATd>{item.semana_inicial}</ATd>
                                    <ATd>{0}</ATd>
                                    <ATd>2</ATd>
                                    <ATd>
                                        {item.ativo
                                            ? <IoCheckmarkCircleSharp size={25} color="green" onClick={(e) => alterAction(item.id_ciclo, 0, e)} className="cursor-pointer" />
                                            : <IoCloseCircleSharp size={25} color="red" onClick={(e) => alterAction(item.id_ciclo, 1, e)} className="cursor-pointer" />
                                        }
                                    </ATd>
                                    <ATd>
                                        <AButtonExcuir onclick={(e) => toggleModal(item.id_ciclo, e)} />
                                        
                                    </ATd>
                                </ATr>
                            ))}

                        </ATable>

                    </AboxBody>

                    <AboxFooter>
                        Paginação
                    </AboxFooter>
                </ABox>
                {showModal &&
                    <ModalDelete closemodal={() => setShowModal(!showModal)} deleterow={(e) => deleteRow(idDelete, e)} />
                }
            </Layouts>
        </Fragment>
    )
}

export default Ciclos;
