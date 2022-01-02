import React from 'react'
import styles from './index.module.scss'

interface Props {
    href: string
    text: string
}

export function Link({ text, href }: Props) {
    return (
        <a href={href} className={styles.link}>
            {text}
        </a>
    )
}
