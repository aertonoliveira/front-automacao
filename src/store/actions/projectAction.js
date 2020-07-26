export const ProjectActionTypes = {
    selectedCategory: '[PROJECT] SELECTED CATEGORY',
    selectedProject: '[PROJECT] SELECTED PROJECT',
    addProject: '[PROJECT] ADD',
    updateProject: '[PROJECT] UPDATE',
    deleteProject: '[PROJECT] DELETE'
}

export function selectedCategoryAction(category_id) {
    return {type: ProjectActionTypes.selectedCategory, category_id}
}

export function selectedProjectAction(project_id) {
    return {type: ProjectActionTypes.selectedProject, project_id}
}

export function addProjectAction(project) {
    return {type: ProjectActionTypes.addProject, project}
}

export function updateProjectAction(project) {
    return {type: ProjectActionTypes.updateProject, project}
}

export function deleteProjectAction(project) {
    return {type: ProjectActionTypes.deleteProject, project}
}

