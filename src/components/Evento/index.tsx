import React from 'react';

import { useSetRecoilState } from 'recoil';

import { IEvento } from '../../interfaces/IEvento';
import { listaDeEventosState } from '../../state/atom';
import style from './Evento.module.scss';
import EventoCheckbox from './EventoCheckbox';

const Evento: React.FC<{
	evento: IEvento;
}> = ({ evento }) => {
	const estilos = [style.Evento];

	const setListaDeEventos = useSetRecoilState<IEvento[]>(listaDeEventosState);

	const excluirEvento = () => {
		setListaDeEventos((oldList) => oldList.filter((e) => e.id !== evento.id));
	};

	if (evento.completo) {
		estilos.push(style.completo);
	}

	return (
		<div className={estilos.join(' ')}>
			<EventoCheckbox evento={evento} />
			<div className="cards-info">
				<h3 className={style.descricao}>
					{evento.descricao} - {evento.inicio.toLocaleDateString()}
				</h3>
			</div>
			<i
				className="far fa-times-circle fa-2x"
				onClick={() => excluirEvento()}
			></i>
		</div>
	);
};

export default Evento;
