import { FiX } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';
import { signIn, useSession, signOut } from 'next-auth/react';
import styles from './styles.module.scss';


export function SignInButton() {

    const {data: session} = useSession()


    return session ? (
        <button className={styles.signInButton} type="button" onClick={() => signOut()}>
            <FaGithub color="#04d361" />
            {session.user?.name}
            <FiX color="#737380" className={styles.closeIcon} />
        </button>
    ) : (
        <button
            className={styles.signInButton}
            type="button" onClick={() => signIn('github')}
        >
            <FaGithub color="#eba417" />
            Sign in with Github
        </button>
    );
}
