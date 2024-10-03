import { create } from "zustand";

export const useUserStore = create((set) => ({
    entity: {},
    setEntity: (entity) => {
        console.log("Atualizando entity com:", entity); // Log para ver os dados
        set({ entity });
    }
}));
// export const setEntity = (entity) => useUserStore.setState({entity: entity})