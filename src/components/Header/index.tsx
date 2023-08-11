import { FiMenu } from 'react-icons/fi';
import { BiSearch } from 'react-icons/bi'
import Logo from '../../assets/logo.svg'
import Image from 'next/image'
import Link from 'next/link'
export function Header() {
    return (
        <header className='flex justify-around backgroundColorHeader shadow-lg shadow-indigo-500/50 items-center'>
            <button type='button' className='text-white'>
                <FiMenu size={24} />
            </button>


            <Link href="/">
                <Image src={Logo} alt='' width={100}
                />
            </Link>

            {/*   <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Sobre</a></li>
                    <li><a href="#">Serviços</a></li>
                    <li><a href="#">Contato</a></li>
                </ul>
            </nav> */}

            <div className='border-0 rounded-md flex  bg-white p-2 w-' >
                <BiSearch size={24} className='text-black' />
                <input type="text" placeholder="Pesquisar" className='outline-0 bg-inherit' />
            </div>
        </header>
    );
}