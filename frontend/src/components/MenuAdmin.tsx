"use client";
import { Link } from '@mui/material';

import Person3Icon from '@mui/icons-material/Person3';
import HomeIcon from '@mui/icons-material/Home';
import PhotoIcon from '@mui/icons-material/Photo';

export default function MenuAdmin({ active}) {

    const handleClick = (e: any): void => {
        if (e === null) return
        const x = document.querySelector("." + e.target.dataset.id) as HTMLDivElement | null;
        if (x === null) return
        if (x.style.display === "none" || x.style.display === '') {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }

    const handleSubItem = (e: any): void => {
        const x = document.querySelector("." + e.target.dataset.id) as HTMLDivElement | null;
        if (x === null) return
        if (x.style.display === "none" || x.style.display === '') {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }

    return (
        <>
            <div className="menuVertical">
                <div className='sidebar'>
                    <ul className="nav">
                        <li className="nav-profile cflx">
                            <div className="image" >
                                <img src="../../images/carlos-m0-u5-r5.jpg" alt="Avatar" />
                            </div>
                            <div className="info" >
                                Carlos Garcia
                                <div className='sF'>Felicidade Eterna</div>
                            </div>
                        </li>
                    </ul>
                    <ul className="nav">
                        <li className={ active === '' ? 'active' : ""}>
                            <Link href="/admin" variant="body2">
                                <HomeIcon className='smallIcon' />
                                Dashboard
                            </Link>
                        </li>
                    </ul>
                    <ul className="nav">
                        <li className={ active === 'conteudo' ? 'active' : "" + " hasSub"}>
                            <a onClick={handleClick} data-id='mn1'>
                                <b className="caret pull-right"></b>
                                <PhotoIcon className='smallIcon' />
                                Conteúdo
                            </a>
                            <ul className="sub-menu mn1">
                                <li className="has-sub active">
                                    <a onClick={handleSubItem} data-id='sub1'><b className="caret pull-right"></b> Paginas</a>
                                    <ul className="sub-menu sub1">
                                        <li className='active'><a>Cadastrar</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <ul className="nav">
                        <li className={ active === 'image' ? 'active' : "" + " hasSub"}>
                            <a onClick={handleClick} data-id='mn2'>
                                <b className="caret pull-right"></b>
                                <PhotoIcon className='smallIcon' />
                                Imagens
                            </a>
                            <ul className="sub-menu mn2">
                                <li className="has-sub active">
                                    <a onClick={handleSubItem} data-id='sub2'><b className="caret pull-right"></b> Banners</a>
                                    <ul className="sub-menu sub2">
                                        <li className='active'><a>Cadastrar</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <ul className="nav">
                        <li className={ active === 'users' ? 'active' : "" + " hasSub"}>
                            <a onClick={handleClick} data-id='mn3'>
                                <b className="caret pull-right"></b>
                                <Person3Icon className='smallIcon' />
                                Usuários
                            </a>
                            <ul className="sub-menu mn3" style={ active === 'users' ?  {display: 'block'} : {display: 'none'}} >
                                <li className="has-sub active">
                                    <Link href="/admin/users/list" variant="body2">
                                        Listar
                                    </Link>
                                    <Link href="/admin/users/signup" variant="body2">
                                        Cadastrar
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

