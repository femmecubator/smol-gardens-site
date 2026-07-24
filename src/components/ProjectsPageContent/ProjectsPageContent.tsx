import React, { useState } from 'react'

import Title from './Title'
import ProjectCard from './ProjectCard'

import styles from './ProjectsPageContent.module.css'
import projectsConfig from '../../../docs/projects/_configs'
import { SelectedFilter } from './types'
import {
  FILTER_VAL_DELIMITER,
  createFilterButtons,
  filterProjects,
  getUniqueFilters,
} from './helpers'

const ProjectsPageContent = () => {
  const [selectedFilter, setSelectedFilter] = useState<SelectedFilter | null>(
    null
  )
  const filters = getUniqueFilters(projectsConfig)

  const handleFilterButtonClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent> & {
      target: HTMLButtonElement
    }
  ) => {
    const [filter, value] = e.target.value.split(FILTER_VAL_DELIMITER)
    setSelectedFilter({ filter, value })
  }

  const filterButtons = createFilterButtons({
    filters,
    selectedFilter,
    onClick: handleFilterButtonClick,
  })

  const filteredProjects = filterProjects(selectedFilter)

  const resetFilters = () => {
    setSelectedFilter(null)
  }

  return (
    <div>
      <div className={styles.filter_and_reset_wrapper}>
        <Title>Filters</Title>
        <button onClick={resetFilters} className={styles.reset_button}>
          <div>
            Reset Filter
          </div>
          <div>
            ✖
          </div>
        </button>
      </div>

      <div className={styles.buttons_wrapper}>{filterButtons}</div>
      <Title>Projects</Title>
      <div className={styles.projects_wrapper}>
        {filteredProjects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </div>
  )
}

export default ProjectsPageContent
