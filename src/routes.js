const router = {
    auth: {
        auth: () => "/auth",
        login: () => "/login",
        register: () => "/register",
    },
    home: () => "/",
    about: () => "/Sobre",
    profile: () => "/Perfil",
    ia_mode: (gameId) => "/ia/"+gameId,
    online: (gameId) => "/Online/"+gameId,
};

export default router
