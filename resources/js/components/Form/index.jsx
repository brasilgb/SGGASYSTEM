import React, { Fragment, useState } from 'react'
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.min.css";
import ptBR from "date-fns/locale/pt-BR";
registerLocale("ptBR", ptBR);
import { Link } from '@inertiajs/inertia-react';
import { IconContext } from 'react-icons/lib';
import { IoSearchOutline } from 'react-icons/io5';
import { Inertia } from '@inertiajs/inertia';
import moment from 'moment/moment';

export const AFormSearchDate = () => {

    const [startDate, setStartDate] = useState(new Date());

    const handleSearch = (handled) => {
        Inertia.post(route('ciclos.search'), {
            'data_inicial': moment(handled).format('YYYY-MM-DD'),
        });
    }

    return (
        <Fragment>
            <div className="p-0">
                <label htmlFor="form-search" className="sr-only">Search</label>
                <form className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 z-20">
                        <button
                            type="button"
                            onClick={() => handleSearch(startDate)}
                        >
                            <IconContext.Provider value={{ color: "#666", className: "font-bold text-xl" }}>
                                <div>
                                    <IoSearchOutline />
                                </div>
                            </IconContext.Provider>
                        </button>
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
                </form>
            </div>
        </Fragment>
    )
}
