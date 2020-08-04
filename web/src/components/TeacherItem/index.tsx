import React from 'react'

import whatsappIcon from '../../assets/icons/whatsapp.svg'

import './styles.css'

function TeacherItem()
{
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars1.githubusercontent.com/u/65172325?s=460&u=5bbaf1ba8bdcd59d65ce20eff48cd5498b6a9d73&v=4" alt="Iago Mendes"/>
                <div>
                    <strong>Iago Mendes</strong>
                    <span>Física</span>
                </div>
            </header>

            <p>
                Entusiasta de Física, Astronomia, Astrofísica, e Cosmologia.
                <br /> <br />
                Apaixonado por apontar telescópios para observar a imensidão do nosso magnífico universo e seus astros. Astrofotógrafo e Dev nas horas vagas.
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 100,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem