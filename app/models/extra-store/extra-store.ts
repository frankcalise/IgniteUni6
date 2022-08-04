import { Instance, types } from "mobx-state-tree"

import { withEnvironment } from "../extensions/with-environment"

export const ExtraStoreModel = types
  .model("CharacterStore")
  .props({
    userId: types.optional(types.number, 5),
  })
  .extend(withEnvironment)

export interface ExtraStore extends Instance<typeof ExtraStoreModel> {}
export const createExtraStoreDefaultModel = () => types.optional(ExtraStoreModel, {})
