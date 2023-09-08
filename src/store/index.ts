import {
    createStore,
    Store as VuexStore,
    CommitOptions,
    DispatchOptions,
    createLogger,
} from "vuex";

import { initialState } from "./initialState";

import * as moduleCatalog from "./modules/catalog";
import * as CatalogItem from "@/models/CatalogItem";
import * as CatalogList from "@/models/CatalogList";

export type State = typeof initialState;

const plugins = [];
if (process.env.NODE_ENV === "development") {
    plugins.push(createLogger());
}

export const store = createStore({
    state: initialState,
    mutations: { ...moduleCatalog.mutations },
    getters: { ...moduleCatalog.getters },
    actions: { ...moduleCatalog.actions},
    plugins,
});

type MutationPayload = moduleCatalog.MutationPayload

type ActionsPayload = moduleCatalog.ActionsPayload;

type Getters = moduleCatalog.Getters;


export type Store = Omit<
    VuexStore<State>,
    "getters" | "commit" | "dispatch"
    > & {
    commit<K extends keyof MutationPayload>(
        key: K,
        payload: MutationPayload[K],
        options?: CommitOptions
    ): void;
} & {
    dispatch<K extends keyof ActionsPayload>(
        key: K,
        payload: ActionsPayload[K][0],
        options?: DispatchOptions
    ): ActionsPayload[K][1];
} & {
    getters: {
        [K in keyof Getters]: ReturnType<Getters[K]>;
    };
};

export function useStore(): Store {
    return store as Store;
}