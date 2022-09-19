import React, { Fragment, useEffect, useState } from 'react';
import { ABox, AboxBody, AboxFooter, AboxHeader } from '../../components/Boxes';
import { AButomAdd, AButomBack, AButomReload, AButtonExcuir } from '../../components/Buttons';
import SubBar from '../../components/SubBar';
import { IoCheckmarkCircleSharp, IoCloseCircleSharp, IoSearch, IoSearchOutline, IoTimeOutline } from 'react-icons/io5';
import { ATable, ATd, ATh, ATr } from '../../components/Tables';
import { Inertia } from '@inertiajs/inertia';
import moment from 'moment';
import Layouts from '../../Layouts';

import ModalDelete from '../../components/Modal';
import Pagination from '../../components/Pagination';
import { AFormSearchDate } from '../../components/Form';

const Ciclos = ({ ciclos, isBack }) => {


    const [newSearch, setNewSearch] = useState(false);
    const [showModal, setShowModal] = useState(false)
    const [idDelete, setIdDelete] = useState()

    const deleteRow = ((id, e) => {
        e.preventDefault();
        Inertia.delete(route('ciclos.destroy', `${id}`))
        setShowModal(false);
    });

    const alterAction = ((e, id, active) => {
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
                            {isBack
                            ? <AButomBack url={'ciclos.index'} />
                            : <AButomAdd url='ciclos.create' />
                            }
                        </div>
                        <div className='w-full flex justify-end'>
                            {/* Formulário de busca */}
                            <AFormSearchDate />
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
                            {ciclos.data.map((item, index) => (
                                <ATr key={index} colorRow={index % 2}>
                                    <ATd>{item.id_ciclo}</ATd>
                                    <ATd>{moment(item.data_inicial).format('DD/MM/YYYY')}</ATd>
                                    <ATd>{item.semana_inicial}</ATd>
                                    <ATd>{0}</ATd>
                                    <ATd>2</ATd>
                                    <ATd>
                                        {item.ativo
                                            ? <IoCheckmarkCircleSharp size={25} color="green" onClick={(e) => alterAction(e, item.id_ciclo, 0)} className="cursor-pointer" />
                                            : <IoCloseCircleSharp size={25} color="red" onClick={(e) => alterAction(e, item.id_ciclo, 1)} className="cursor-pointer" />
                                        }
                                    </ATd>
                                    <ATd>
                                        <AButtonExcuir active={item.ativo} onclick={(e) => toggleModal(item.id_ciclo, e)} />
                                    </ATd>
                                </ATr>
                            ))}

                        </ATable>

                    </AboxBody>
                    {ciclos.total > ciclos.per_page &&
                        <AboxFooter>
                            <Pagination data={ciclos} />
                        </AboxFooter>
                    }
                </ABox>
                {showModal &&
                    <ModalDelete info="este ciclo" closemodal={() => setShowModal(!showModal)} deleterow={(e) => deleteRow(idDelete, e)} />
                }
            </Layouts>
        </Fragment>
    )
}

export default Ciclos;
