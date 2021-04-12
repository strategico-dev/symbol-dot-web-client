export default {
    state: {
        themes: [
            {name: 'Темная тема', className: 'table-dark'},
            {name: 'Светлая тема', className: 'table-light'},
            {name: 'Синия тема', className: 'table-primary'}
        ],
        currentTheme: localStorage.getItem('table_theme') ? localStorage.getItem('table_theme') : 'light'
    },
    getters: {
        themes(state) {
            return state.themes.map(theme => {
                if(theme.className === state.currentTheme) {
                    theme.active = true;
                }
                return theme;
            });
        },
        currentTheme(state) {
            return state.currentTheme;
        }
    },
    mutations: {
        setCurrentTheme(state, theme) {
            state.themes.forEach(theme => theme.active = false);

            state.currentTheme = theme;
            localStorage.setItem('table_theme', theme);
        }
    }
}