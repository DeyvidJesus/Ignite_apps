/* eslint-disable @next/next/no-img-element */
import { SignInButton } from '../SignInButton/Index'
import { ActiveLink } from '../ActiveLink/Index'

// ESTILOS
import styles from './styles.module.scss'

export function Header() {
    return (
        <header className={styles['header-container']}>
            <div className={styles['header-content']}>
                <img src="/images/logo.svg" alt="ig.news logo" />
                <nav>
                    <ActiveLink activeClassName={styles.active} href='/'>
                        <a>Home</a>
                    </ActiveLink>
                    <ActiveLink activeClassName={styles.active} href='/posts'>
                        <a>Posts</a>
                    </ActiveLink>
                </nav>
                <SignInButton />
            </div>
        </header>
    )
}