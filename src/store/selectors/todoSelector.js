
// Categories
export const getCategories = (state) => state.todo.categories;
export const selectedCategoryIndex = (state) => state.todo.selectedCategory;
export const selectedCategory = (state) => state.todo.categories[state.todo.selectedCategory];

// Projects
export const getProjects = (state) => state.todo.projects;
export const selectedProjectIndex = (state) => state.todo.selectedProject;
export const selectedProject = (state) => state.todo.projects[state.todo.selectedProject];

// Tasks
export const getTasks = (state) => {
    const projectId = state.todo.projects[state.todo.selectedProject].id;
    const categoryId = state.todo.categories[state.todo.selectedCategory].id;

    return state.todo.tasks.filter((task) =>
        (task.projectId === projectId && (categoryId === '1' ? 1 : task.categoryId === categoryId))
    );
};
export const openedTasks = (state) => state.todo.tasks.filter((task) => task.status);
export const closedTasks = (state) => state.todo.tasks.filter((task) => !task.status);