import React from "react";
import FilterButton from "./FilterButton";

import projectsConfig, {
  ProjectsConfigProps,
} from "../../../docs/projects/_configs";
import { Filters, SelectedFilter } from "./types";
import { FilterButtonProps } from "./FilterButton/FilterButton";

export const FILTER_VAL_DELIMITER = "__";
const FILTERABLE_ATTRIBUTES = new Set([
  "project_tags",
  "level_of_difficulty",
  "roles",
]);

export const createFilterButtons = ({
  filters,
  selectedFilter,
  onClick,
}: {
  filters: Filters;
  selectedFilter: SelectedFilter;
  onClick: FilterButtonProps["onClick"];
}) => {
  const buttons = [];

  Object.entries(filters).forEach(([attribute, filterVals]) => {
    filterVals.forEach((val) => {
      const value = `${attribute}${FILTER_VAL_DELIMITER}${val}`;
      const isSelected =
        selectedFilter &&
        selectedFilter.filter === attribute &&
        selectedFilter.value.includes(val);

      buttons.push(
        <FilterButton
          key={value}
          value={value}
          onClick={onClick}
          isSelected={isSelected}
        >
          {val}
        </FilterButton>
      );
    });
  });
  return buttons;
};

const PROJECT_COLORS = ["#FFE0E0", "#FFEDCD", "#DED8FF"];

const projectsWithColors = Object.values(projectsConfig).map((project, idx) => {
  const color = PROJECT_COLORS[idx % PROJECT_COLORS.length];
  return { color, ...project };
});

export const filterProjects = (selectedFilter: SelectedFilter) => {
  return projectsWithColors.filter((projectInfo) => {
    if (!selectedFilter) return true;
    const currentFilterValue = projectInfo[selectedFilter.filter];
    return currentFilterValue.includes(selectedFilter.value);
  });
};

export const getUniqueFilters = (projectsConfig: ProjectsConfigProps) => {
  const uniqueFilters = {};
  Object.values(projectsConfig).forEach((projectData) => {
    const attributeKeysAndValues = Object.entries(projectData);
    attributeKeysAndValues.forEach(([attribute, value]) => {
      if (FILTERABLE_ATTRIBUTES.has(attribute)) {
        if (!uniqueFilters[attribute])
          uniqueFilters[attribute] = new Set<string>();

        if (Array.isArray(value)) {
          uniqueFilters[attribute].add(...value);
        } else {
          uniqueFilters[attribute].add(value);
        }
      }
    });
  });
  return uniqueFilters;
};
