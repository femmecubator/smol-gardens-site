import React from 'react'
import styles from './Banner.module.css';

const Banner = ({ goalStatement, projectTags }: {
    goalStatement: string,
    projectTags: string[]
}) => {
    const tags = projectTags.map(tag => (
        <li key={tag}>#{tag}</li>
    ))

    return (
        <div className={styles.container}>{goalStatement}
            <ul className={styles.tagList}>
                {tags}
            </ul>
        </div>
    )
}

export default Banner