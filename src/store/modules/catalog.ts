import { GetterTree, MutationTree, ActionContext, CommitOptions } from "vuex";

import { initialState } from "../initialState";

/*
   ---------------------- Mutations -------------------------------
 */

export type MutationPayload = {
    setListCatalog: void;
};

/*
   ---------------------- Getters -------------------------------
 */

export type Getters = {
    getListCatalog(state: State): number;
};

/*
   ---------------------- Actions -------------------------------
 */

export type ActionsPayload = {
    setListCatalog: [payload: void, returnVal: void];
};

export const actions: Actions = {
    setListCatalog({ commit }): void {
        commit("setListCatalog", (null as unknown) as void);
    },
};


type Actions = {
    [Property in keyof ActionsPayload]: (
        augContext: AugmentedActionContext,
        payload: ActionsPayload[Property][0]
    ) => ActionsPayload[Property][1];
};

type AugmentedActionContext = {
    commit<K extends keyof MutationPayload>(
        key: K,
        payload: MutationPayload[K],
        options?: CommitOptions
    ): void;
} & Omit<ActionContext<State, State>, "commit">;

/*
   ---------------------- Mutations - no change code ------------------------
 */

type Mutations = {
    [Property in keyof MutationPayload]: (
        state: State,
        payload: MutationPayload[Property]
    ) => void;
};

/*
   ---------------------- Getters - no change code -------------------------------
 */
type State = typeof initialState;