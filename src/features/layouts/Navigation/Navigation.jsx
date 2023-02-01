import React, { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate } from "react-router-dom";
import styles from './navigation.module.css'
import { BsSearch } from 'react-icons/bs'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useDisclosure } from '@chakra-ui/react'
import CartSidebar from '../cart/CartSidebar';
import { logout } from '../../authentication/google';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../../fireBase';

const list = [
    { id: 1, title: 'Ana Səhivə', path: '/' },
    { id: 2, title: 'Haqqımızda', path: '/haqqımızda' },
    { id: 3, title: 'Əlaqə', path: '/əlaqə' },
    { id: 4, title: 'Məhsullar', path: '/məhsullar' },
]

const SearchContent = (props) => {
    const [search, setSearch] = useState('')
    return (
        <div className={styles.Search_container} style={{transform:`translateY(${props.transleteY}%)`}} >
            <div>
            <button onClick={() => props.setTransleteY(pre => pre===-100 ? 0 : -100)}>
                <div className={styles.close_boxe}>
                    <div className={styles.bar1}></div>
                    <div className={styles.bar2}></div>
                </div>
            </button>
            <form className={styles.form_search}>
                <input type="text" name="search" placeholder="Search products..." value={search} onChange={e => setSearch(e.target.value)} />
                <button>
                    <BsSearch />
                </button>
            </form>
            </div>
        </div>
    )
}

const Navigation = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [transleteY,setTransleteY] = useState(-100)
    const [user,loading,error] = useAuthState(auth)
    const navigate = useNavigate()
   
    const renderedList = list.map(item => {
        return <li key={`list_${item.id}`}><Link to={item.path}>{item.title}</Link></li>
    })

    // useEffect(() => {
    //     if(loading)return
    //     if(!user) return navigate('/')
    // })

    return (
          
        <div className={styles.Navigation_Content}>
          <CartSidebar isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
            <SearchContent transleteY={transleteY} setTransleteY={setTransleteY}/>
          
            <div className={styles.Navigation_Logo}></div>
            <div className={styles.Navigation_Contents}>
                <div className={styles.Content_List}>
                    <ul>
                        {renderedList}
                    </ul>
                </div>
                <div className={styles.Content_Box}>
                    <div className={styles.icons_box}>
                        <button onClick={() => setTransleteY(pre => pre === -100 ? 0 : -100)}>
                            <BsSearch/>
                        </button>
                        <button  onClick={onOpen}>
                            <AiOutlineShoppingCart />
                        </button>
                    </div>
                    <button>get solution</button>
                    <button onClick={logout}>Çıxış</button>
                </div>
            </div>
            </div>
    )
}

export default Navigation