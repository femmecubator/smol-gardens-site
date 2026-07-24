import React from 'react'
import { useHistory } from '@docusaurus/router';
import { Project } from '@site/docs/projects/_configs'

import styles from './ProjectCard.module.css'
import Button from '../../Shared/Button';

type ProjectCardProps = {
  color?: string
} & Project;

const ProjectCard = ({
  id,
  emoji,
  headline,
  description,
  level_of_difficulty,
  roles,
  color = '#FFE0E0',
}: ProjectCardProps) => {
  const history = useHistory()

  return (
    <div className={styles.container}>
      <div className={styles.banner} style={{ backgroundColor: color }}>{emoji}</div>
      <div className={styles.info_container}>
        <div>
          <div className={styles.headline}>{headline}</div>
          <div>{description}</div>
          <div>Level of Difficulty: {level_of_difficulty}
            <br />
            <u>
              Role: {roles.join(', ')}
            </u>
          </div>
        </div>
        <Button onClick={() => { history.push(id) }}>Join this project</Button>
      </div>
    </div>
  )
}

export default ProjectCard