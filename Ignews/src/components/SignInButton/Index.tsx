// AUTENTICAÇÃO
import { signIn, signOut, useSession } from 'next-auth/react'

// ÍCONES
import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'

// ESTILOS
import styles from './styles.module.scss'

export function SignInButton () {
    const { data: session } = useSession()

    return session ? (
        <button 
            type="button"
            className={styles['signInButton']}
            onClick={() => signOut()}
        >
            <FaGithub color='#04D361'/>
            {session.user.name}
            <FiX color='#737388' className={styles['closeIcon']}/>
        </button>
    ) : (
        <button 
            type="button"
            className={styles['signInButton']}
            onClick={() => signIn('github')}
        >
            <FaGithub color='#EBA417'/>
            Sign in with Github
        </button>
    )
}