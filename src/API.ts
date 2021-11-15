/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateWorkInput = {
  id?: string | null,
  userID: string,
  title: string,
  time: string,
  detail: string,
  link?: string | null,
};

export type ModelWorkConditionInput = {
  userID?: ModelIDInput | null,
  title?: ModelStringInput | null,
  time?: ModelStringInput | null,
  detail?: ModelStringInput | null,
  link?: ModelStringInput | null,
  and?: Array< ModelWorkConditionInput | null > | null,
  or?: Array< ModelWorkConditionInput | null > | null,
  not?: ModelWorkConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Work = {
  __typename: "Work",
  id: string,
  userID: string,
  title: string,
  time: string,
  detail: string,
  link?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateWorkInput = {
  id: string,
  userID?: string | null,
  title?: string | null,
  time?: string | null,
  detail?: string | null,
  link?: string | null,
};

export type DeleteWorkInput = {
  id: string,
};

export type CreateUserInput = {
  id?: string | null,
  firstname: string,
  lastname: string,
  email: string,
  aka?: string | null,
  role: string,
  description?: string | null,
};

export type ModelUserConditionInput = {
  firstname?: ModelStringInput | null,
  lastname?: ModelStringInput | null,
  email?: ModelStringInput | null,
  aka?: ModelStringInput | null,
  role?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type User = {
  __typename: "User",
  id: string,
  firstname: string,
  lastname: string,
  email: string,
  aka?: string | null,
  role: string,
  description?: string | null,
  works?: ModelWorkConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelWorkConnection = {
  __typename: "ModelWorkConnection",
  items?:  Array<Work | null > | null,
  nextToken?: string | null,
};

export type UpdateUserInput = {
  id: string,
  firstname?: string | null,
  lastname?: string | null,
  email?: string | null,
  aka?: string | null,
  role?: string | null,
  description?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateProjectInput = {
  id?: string | null,
  name: string,
  description?: string | null,
  other?: string | null,
  designtool: string,
  designdata?: string | null,
  ownerID: string,
  status: string,
  developerID?: string | null,
};

export type ModelProjectConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  other?: ModelStringInput | null,
  designtool?: ModelStringInput | null,
  designdata?: ModelStringInput | null,
  ownerID?: ModelIDInput | null,
  status?: ModelStringInput | null,
  developerID?: ModelIDInput | null,
  and?: Array< ModelProjectConditionInput | null > | null,
  or?: Array< ModelProjectConditionInput | null > | null,
  not?: ModelProjectConditionInput | null,
};

export type Project = {
  __typename: "Project",
  id: string,
  name: string,
  description?: string | null,
  other?: string | null,
  designtool: string,
  designdata?: string | null,
  ownerID: string,
  owner?: User | null,
  status: string,
  developerID?: string | null,
  dev?: User | null,
  offers?: ModelOfferConnection | null,
  updates?: ModelDeveloperUpdateConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelOfferConnection = {
  __typename: "ModelOfferConnection",
  items?:  Array<Offer | null > | null,
  nextToken?: string | null,
};

export type Offer = {
  __typename: "Offer",
  id: string,
  projectID: string,
  description: string,
  price: number,
  offerOwnerID: string,
  offerOwner?: User | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelDeveloperUpdateConnection = {
  __typename: "ModelDeveloperUpdateConnection",
  items?:  Array<DeveloperUpdate | null > | null,
  nextToken?: string | null,
};

export type DeveloperUpdate = {
  __typename: "DeveloperUpdate",
  id: string,
  projectID: string,
  title: string,
  subtitle?: string | null,
  description: string,
  createdAt: string,
  devID: string,
  dev: User,
  updatedAt: string,
};

export type UpdateProjectInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  other?: string | null,
  designtool?: string | null,
  designdata?: string | null,
  ownerID?: string | null,
  status?: string | null,
  developerID?: string | null,
};

export type DeleteProjectInput = {
  id: string,
};

export type CreateDeveloperUpdateInput = {
  id?: string | null,
  projectID: string,
  title: string,
  subtitle?: string | null,
  description: string,
  createdAt?: string | null,
  devID: string,
};

export type ModelDeveloperUpdateConditionInput = {
  projectID?: ModelIDInput | null,
  title?: ModelStringInput | null,
  subtitle?: ModelStringInput | null,
  description?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  devID?: ModelIDInput | null,
  and?: Array< ModelDeveloperUpdateConditionInput | null > | null,
  or?: Array< ModelDeveloperUpdateConditionInput | null > | null,
  not?: ModelDeveloperUpdateConditionInput | null,
};

export type UpdateDeveloperUpdateInput = {
  id: string,
  projectID?: string | null,
  title?: string | null,
  subtitle?: string | null,
  description?: string | null,
  createdAt?: string | null,
  devID?: string | null,
};

export type DeleteDeveloperUpdateInput = {
  id: string,
};

export type CreateOfferInput = {
  id?: string | null,
  projectID: string,
  description: string,
  price: number,
  offerOwnerID: string,
};

export type ModelOfferConditionInput = {
  projectID?: ModelIDInput | null,
  description?: ModelStringInput | null,
  price?: ModelIntInput | null,
  offerOwnerID?: ModelIDInput | null,
  and?: Array< ModelOfferConditionInput | null > | null,
  or?: Array< ModelOfferConditionInput | null > | null,
  not?: ModelOfferConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateOfferInput = {
  id: string,
  projectID?: string | null,
  description?: string | null,
  price?: number | null,
  offerOwnerID?: string | null,
};

export type DeleteOfferInput = {
  id: string,
};

export type ModelWorkFilterInput = {
  id?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  title?: ModelStringInput | null,
  time?: ModelStringInput | null,
  detail?: ModelStringInput | null,
  link?: ModelStringInput | null,
  and?: Array< ModelWorkFilterInput | null > | null,
  or?: Array< ModelWorkFilterInput | null > | null,
  not?: ModelWorkFilterInput | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  firstname?: ModelStringInput | null,
  lastname?: ModelStringInput | null,
  email?: ModelStringInput | null,
  aka?: ModelStringInput | null,
  role?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items?:  Array<User | null > | null,
  nextToken?: string | null,
};

export type ModelProjectFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  other?: ModelStringInput | null,
  designtool?: ModelStringInput | null,
  designdata?: ModelStringInput | null,
  ownerID?: ModelIDInput | null,
  status?: ModelStringInput | null,
  developerID?: ModelIDInput | null,
  and?: Array< ModelProjectFilterInput | null > | null,
  or?: Array< ModelProjectFilterInput | null > | null,
  not?: ModelProjectFilterInput | null,
};

export type ModelProjectConnection = {
  __typename: "ModelProjectConnection",
  items?:  Array<Project | null > | null,
  nextToken?: string | null,
};

export type ModelDeveloperUpdateFilterInput = {
  id?: ModelIDInput | null,
  projectID?: ModelIDInput | null,
  title?: ModelStringInput | null,
  subtitle?: ModelStringInput | null,
  description?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  devID?: ModelIDInput | null,
  and?: Array< ModelDeveloperUpdateFilterInput | null > | null,
  or?: Array< ModelDeveloperUpdateFilterInput | null > | null,
  not?: ModelDeveloperUpdateFilterInput | null,
};

export type ModelOfferFilterInput = {
  id?: ModelIDInput | null,
  projectID?: ModelIDInput | null,
  description?: ModelStringInput | null,
  price?: ModelIntInput | null,
  offerOwnerID?: ModelIDInput | null,
  and?: Array< ModelOfferFilterInput | null > | null,
  or?: Array< ModelOfferFilterInput | null > | null,
  not?: ModelOfferFilterInput | null,
};

export type SearchableProjectFilterInput = {
  id?: SearchableIDFilterInput | null,
  name?: SearchableStringFilterInput | null,
  description?: SearchableStringFilterInput | null,
  other?: SearchableStringFilterInput | null,
  designtool?: SearchableStringFilterInput | null,
  designdata?: SearchableStringFilterInput | null,
  ownerID?: SearchableIDFilterInput | null,
  status?: SearchableStringFilterInput | null,
  developerID?: SearchableIDFilterInput | null,
  and?: Array< SearchableProjectFilterInput | null > | null,
  or?: Array< SearchableProjectFilterInput | null > | null,
  not?: SearchableProjectFilterInput | null,
};

export type SearchableIDFilterInput = {
  ne?: string | null,
  gt?: string | null,
  lt?: string | null,
  gte?: string | null,
  lte?: string | null,
  eq?: string | null,
  match?: string | null,
  matchPhrase?: string | null,
  matchPhrasePrefix?: string | null,
  multiMatch?: string | null,
  exists?: boolean | null,
  wildcard?: string | null,
  regexp?: string | null,
  range?: Array< string | null > | null,
};

export type SearchableStringFilterInput = {
  ne?: string | null,
  gt?: string | null,
  lt?: string | null,
  gte?: string | null,
  lte?: string | null,
  eq?: string | null,
  match?: string | null,
  matchPhrase?: string | null,
  matchPhrasePrefix?: string | null,
  multiMatch?: string | null,
  exists?: boolean | null,
  wildcard?: string | null,
  regexp?: string | null,
  range?: Array< string | null > | null,
};

export type SearchableProjectSortInput = {
  field?: SearchableProjectSortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchableProjectSortableFields {
  id = "id",
  name = "name",
  description = "description",
  other = "other",
  designtool = "designtool",
  designdata = "designdata",
  ownerID = "ownerID",
  status = "status",
  developerID = "developerID",
}


export enum SearchableSortDirection {
  asc = "asc",
  desc = "desc",
}


export type SearchableProjectConnection = {
  __typename: "SearchableProjectConnection",
  items?:  Array<Project | null > | null,
  nextToken?: string | null,
  total?: number | null,
};

export type CreateWorkMutationVariables = {
  input: CreateWorkInput,
  condition?: ModelWorkConditionInput | null,
};

export type CreateWorkMutation = {
  createWork?:  {
    __typename: "Work",
    id: string,
    userID: string,
    title: string,
    time: string,
    detail: string,
    link?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateWorkMutationVariables = {
  input: UpdateWorkInput,
  condition?: ModelWorkConditionInput | null,
};

export type UpdateWorkMutation = {
  updateWork?:  {
    __typename: "Work",
    id: string,
    userID: string,
    title: string,
    time: string,
    detail: string,
    link?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteWorkMutationVariables = {
  input: DeleteWorkInput,
  condition?: ModelWorkConditionInput | null,
};

export type DeleteWorkMutation = {
  deleteWork?:  {
    __typename: "Work",
    id: string,
    userID: string,
    title: string,
    time: string,
    detail: string,
    link?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    firstname: string,
    lastname: string,
    email: string,
    aka?: string | null,
    role: string,
    description?: string | null,
    works?:  {
      __typename: "ModelWorkConnection",
      items?:  Array< {
        __typename: "Work",
        id: string,
        userID: string,
        title: string,
        time: string,
        detail: string,
        link?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    firstname: string,
    lastname: string,
    email: string,
    aka?: string | null,
    role: string,
    description?: string | null,
    works?:  {
      __typename: "ModelWorkConnection",
      items?:  Array< {
        __typename: "Work",
        id: string,
        userID: string,
        title: string,
        time: string,
        detail: string,
        link?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    firstname: string,
    lastname: string,
    email: string,
    aka?: string | null,
    role: string,
    description?: string | null,
    works?:  {
      __typename: "ModelWorkConnection",
      items?:  Array< {
        __typename: "Work",
        id: string,
        userID: string,
        title: string,
        time: string,
        detail: string,
        link?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateProjectMutationVariables = {
  input: CreateProjectInput,
  condition?: ModelProjectConditionInput | null,
};

export type CreateProjectMutation = {
  createProject?:  {
    __typename: "Project",
    id: string,
    name: string,
    description?: string | null,
    other?: string | null,
    designtool: string,
    designdata?: string | null,
    ownerID: string,
    owner?:  {
      __typename: "User",
      id: string,
      firstname: string,
      lastname: string,
      email: string,
      aka?: string | null,
      role: string,
      description?: string | null,
      works?:  {
        __typename: "ModelWorkConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    status: string,
    developerID?: string | null,
    dev?:  {
      __typename: "User",
      id: string,
      firstname: string,
      lastname: string,
      email: string,
      aka?: string | null,
      role: string,
      description?: string | null,
      works?:  {
        __typename: "ModelWorkConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    offers?:  {
      __typename: "ModelOfferConnection",
      items?:  Array< {
        __typename: "Offer",
        id: string,
        projectID: string,
        description: string,
        price: number,
        offerOwnerID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    updates?:  {
      __typename: "ModelDeveloperUpdateConnection",
      items?:  Array< {
        __typename: "DeveloperUpdate",
        id: string,
        projectID: string,
        title: string,
        subtitle?: string | null,
        description: string,
        createdAt: string,
        devID: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateProjectMutationVariables = {
  input: UpdateProjectInput,
  condition?: ModelProjectConditionInput | null,
};

export type UpdateProjectMutation = {
  updateProject?:  {
    __typename: "Project",
    id: string,
    name: string,
    description?: string | null,
    other?: string | null,
    designtool: string,
    designdata?: string | null,
    ownerID: string,
    owner?:  {
      __typename: "User",
      id: string,
      firstname: string,
      lastname: string,
      email: string,
      aka?: string | null,
      role: string,
      description?: string | null,
      works?:  {
        __typename: "ModelWorkConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    status: string,
    developerID?: string | null,
    dev?:  {
      __typename: "User",
      id: string,
      firstname: string,
      lastname: string,
      email: string,
      aka?: string | null,
      role: string,
      description?: string | null,
      works?:  {
        __typename: "ModelWorkConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    offers?:  {
      __typename: "ModelOfferConnection",
      items?:  Array< {
        __typename: "Offer",
        id: string,
        projectID: string,
        description: string,
        price: number,
        offerOwnerID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    updates?:  {
      __typename: "ModelDeveloperUpdateConnection",
      items?:  Array< {
        __typename: "DeveloperUpdate",
        id: string,
        projectID: string,
        title: string,
        subtitle?: string | null,
        description: string,
        createdAt: string,
        devID: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteProjectMutationVariables = {
  input: DeleteProjectInput,
  condition?: ModelProjectConditionInput | null,
};

export type DeleteProjectMutation = {
  deleteProject?:  {
    __typename: "Project",
    id: string,
    name: string,
    description?: string | null,
    other?: string | null,
    designtool: string,
    designdata?: string | null,
    ownerID: string,
    owner?:  {
      __typename: "User",
      id: string,
      firstname: string,
      lastname: string,
      email: string,
      aka?: string | null,
      role: string,
      description?: string | null,
      works?:  {
        __typename: "ModelWorkConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    status: string,
    developerID?: string | null,
    dev?:  {
      __typename: "User",
      id: string,
      firstname: string,
      lastname: string,
      email: string,
      aka?: string | null,
      role: string,
      description?: string | null,
      works?:  {
        __typename: "ModelWorkConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    offers?:  {
      __typename: "ModelOfferConnection",
      items?:  Array< {
        __typename: "Offer",
        id: string,
        projectID: string,
        description: string,
        price: number,
        offerOwnerID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    updates?:  {
      __typename: "ModelDeveloperUpdateConnection",
      items?:  Array< {
        __typename: "DeveloperUpdate",
        id: string,
        projectID: string,
        title: string,
        subtitle?: string | null,
        description: string,
        createdAt: string,
        devID: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateDeveloperUpdateMutationVariables = {
  input: CreateDeveloperUpdateInput,
  condition?: ModelDeveloperUpdateConditionInput | null,
};

export type CreateDeveloperUpdateMutation = {
  createDeveloperUpdate?:  {
    __typename: "DeveloperUpdate",
    id: string,
    projectID: string,
    title: string,
    subtitle?: string | null,
    description: string,
    createdAt: string,
    devID: string,
    dev:  {
      __typename: "User",
      id: string,
      firstname: string,
      lastname: string,
      email: string,
      aka?: string | null,
      role: string,
      description?: string | null,
      works?:  {
        __typename: "ModelWorkConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    updatedAt: string,
  } | null,
};

export type UpdateDeveloperUpdateMutationVariables = {
  input: UpdateDeveloperUpdateInput,
  condition?: ModelDeveloperUpdateConditionInput | null,
};

export type UpdateDeveloperUpdateMutation = {
  updateDeveloperUpdate?:  {
    __typename: "DeveloperUpdate",
    id: string,
    projectID: string,
    title: string,
    subtitle?: string | null,
    description: string,
    createdAt: string,
    devID: string,
    dev:  {
      __typename: "User",
      id: string,
      firstname: string,
      lastname: string,
      email: string,
      aka?: string | null,
      role: string,
      description?: string | null,
      works?:  {
        __typename: "ModelWorkConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    updatedAt: string,
  } | null,
};

export type DeleteDeveloperUpdateMutationVariables = {
  input: DeleteDeveloperUpdateInput,
  condition?: ModelDeveloperUpdateConditionInput | null,
};

export type DeleteDeveloperUpdateMutation = {
  deleteDeveloperUpdate?:  {
    __typename: "DeveloperUpdate",
    id: string,
    projectID: string,
    title: string,
    subtitle?: string | null,
    description: string,
    createdAt: string,
    devID: string,
    dev:  {
      __typename: "User",
      id: string,
      firstname: string,
      lastname: string,
      email: string,
      aka?: string | null,
      role: string,
      description?: string | null,
      works?:  {
        __typename: "ModelWorkConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    updatedAt: string,
  } | null,
};

export type CreateOfferMutationVariables = {
  input: CreateOfferInput,
  condition?: ModelOfferConditionInput | null,
};

export type CreateOfferMutation = {
  createOffer?:  {
    __typename: "Offer",
    id: string,
    projectID: string,
    description: string,
    price: number,
    offerOwnerID: string,
    offerOwner?:  {
      __typename: "User",
      id: string,
      firstname: string,
      lastname: string,
      email: string,
      aka?: string | null,
      role: string,
      description?: string | null,
      works?:  {
        __typename: "ModelWorkConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateOfferMutationVariables = {
  input: UpdateOfferInput,
  condition?: ModelOfferConditionInput | null,
};

export type UpdateOfferMutation = {
  updateOffer?:  {
    __typename: "Offer",
    id: string,
    projectID: string,
    description: string,
    price: number,
    offerOwnerID: string,
    offerOwner?:  {
      __typename: "User",
      id: string,
      firstname: string,
      lastname: string,
      email: string,
      aka?: string | null,
      role: string,
      description?: string | null,
      works?:  {
        __typename: "ModelWorkConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteOfferMutationVariables = {
  input: DeleteOfferInput,
  condition?: ModelOfferConditionInput | null,
};

export type DeleteOfferMutation = {
  deleteOffer?:  {
    __typename: "Offer",
    id: string,
    projectID: string,
    description: string,
    price: number,
    offerOwnerID: string,
    offerOwner?:  {
      __typename: "User",
      id: string,
      firstname: string,
      lastname: string,
      email: string,
      aka?: string | null,
      role: string,
      description?: string | null,
      works?:  {
        __typename: "ModelWorkConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetWorkQueryVariables = {
  id: string,
};

export type GetWorkQuery = {
  getWork?:  {
    __typename: "Work",
    id: string,
    userID: string,
    title: string,
    time: string,
    detail: string,
    link?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListWorksQueryVariables = {
  filter?: ModelWorkFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListWorksQuery = {
  listWorks?:  {
    __typename: "ModelWorkConnection",
    items?:  Array< {
      __typename: "Work",
      id: string,
      userID: string,
      title: string,
      time: string,
      detail: string,
      link?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    firstname: string,
    lastname: string,
    email: string,
    aka?: string | null,
    role: string,
    description?: string | null,
    works?:  {
      __typename: "ModelWorkConnection",
      items?:  Array< {
        __typename: "Work",
        id: string,
        userID: string,
        title: string,
        time: string,
        detail: string,
        link?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items?:  Array< {
      __typename: "User",
      id: string,
      firstname: string,
      lastname: string,
      email: string,
      aka?: string | null,
      role: string,
      description?: string | null,
      works?:  {
        __typename: "ModelWorkConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetProjectQueryVariables = {
  id: string,
};

export type GetProjectQuery = {
  getProject?:  {
    __typename: "Project",
    id: string,
    name: string,
    description?: string | null,
    other?: string | null,
    designtool: string,
    designdata?: string | null,
    ownerID: string,
    owner?:  {
      __typename: "User",
      id: string,
      firstname: string,
      lastname: string,
      email: string,
      aka?: string | null,
      role: string,
      description?: string | null,
      works?:  {
        __typename: "ModelWorkConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    status: string,
    developerID?: string | null,
    dev?:  {
      __typename: "User",
      id: string,
      firstname: string,
      lastname: string,
      email: string,
      aka?: string | null,
      role: string,
      description?: string | null,
      works?:  {
        __typename: "ModelWorkConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    offers?:  {
      __typename: "ModelOfferConnection",
      items?:  Array< {
        __typename: "Offer",
        id: string,
        projectID: string,
        description: string,
        price: number,
        offerOwnerID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    updates?:  {
      __typename: "ModelDeveloperUpdateConnection",
      items?:  Array< {
        __typename: "DeveloperUpdate",
        id: string,
        projectID: string,
        title: string,
        subtitle?: string | null,
        description: string,
        createdAt: string,
        devID: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListProjectsQueryVariables = {
  filter?: ModelProjectFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProjectsQuery = {
  listProjects?:  {
    __typename: "ModelProjectConnection",
    items?:  Array< {
      __typename: "Project",
      id: string,
      name: string,
      description?: string | null,
      other?: string | null,
      designtool: string,
      designdata?: string | null,
      ownerID: string,
      owner?:  {
        __typename: "User",
        id: string,
        firstname: string,
        lastname: string,
        email: string,
        aka?: string | null,
        role: string,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      status: string,
      developerID?: string | null,
      dev?:  {
        __typename: "User",
        id: string,
        firstname: string,
        lastname: string,
        email: string,
        aka?: string | null,
        role: string,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      offers?:  {
        __typename: "ModelOfferConnection",
        nextToken?: string | null,
      } | null,
      updates?:  {
        __typename: "ModelDeveloperUpdateConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetDeveloperUpdateQueryVariables = {
  id: string,
};

export type GetDeveloperUpdateQuery = {
  getDeveloperUpdate?:  {
    __typename: "DeveloperUpdate",
    id: string,
    projectID: string,
    title: string,
    subtitle?: string | null,
    description: string,
    createdAt: string,
    devID: string,
    dev:  {
      __typename: "User",
      id: string,
      firstname: string,
      lastname: string,
      email: string,
      aka?: string | null,
      role: string,
      description?: string | null,
      works?:  {
        __typename: "ModelWorkConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    updatedAt: string,
  } | null,
};

export type ListDeveloperUpdatesQueryVariables = {
  filter?: ModelDeveloperUpdateFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDeveloperUpdatesQuery = {
  listDeveloperUpdates?:  {
    __typename: "ModelDeveloperUpdateConnection",
    items?:  Array< {
      __typename: "DeveloperUpdate",
      id: string,
      projectID: string,
      title: string,
      subtitle?: string | null,
      description: string,
      createdAt: string,
      devID: string,
      dev:  {
        __typename: "User",
        id: string,
        firstname: string,
        lastname: string,
        email: string,
        aka?: string | null,
        role: string,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetOfferQueryVariables = {
  id: string,
};

export type GetOfferQuery = {
  getOffer?:  {
    __typename: "Offer",
    id: string,
    projectID: string,
    description: string,
    price: number,
    offerOwnerID: string,
    offerOwner?:  {
      __typename: "User",
      id: string,
      firstname: string,
      lastname: string,
      email: string,
      aka?: string | null,
      role: string,
      description?: string | null,
      works?:  {
        __typename: "ModelWorkConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListOffersQueryVariables = {
  filter?: ModelOfferFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOffersQuery = {
  listOffers?:  {
    __typename: "ModelOfferConnection",
    items?:  Array< {
      __typename: "Offer",
      id: string,
      projectID: string,
      description: string,
      price: number,
      offerOwnerID: string,
      offerOwner?:  {
        __typename: "User",
        id: string,
        firstname: string,
        lastname: string,
        email: string,
        aka?: string | null,
        role: string,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type SearchProjectsQueryVariables = {
  filter?: SearchableProjectFilterInput | null,
  sort?: SearchableProjectSortInput | null,
  limit?: number | null,
  nextToken?: string | null,
  from?: number | null,
};

export type SearchProjectsQuery = {
  searchProjects?:  {
    __typename: "SearchableProjectConnection",
    items?:  Array< {
      __typename: "Project",
      id: string,
      name: string,
      description?: string | null,
      other?: string | null,
      designtool: string,
      designdata?: string | null,
      ownerID: string,
      owner?:  {
        __typename: "User",
        id: string,
        firstname: string,
        lastname: string,
        email: string,
        aka?: string | null,
        role: string,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      status: string,
      developerID?: string | null,
      dev?:  {
        __typename: "User",
        id: string,
        firstname: string,
        lastname: string,
        email: string,
        aka?: string | null,
        role: string,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      offers?:  {
        __typename: "ModelOfferConnection",
        nextToken?: string | null,
      } | null,
      updates?:  {
        __typename: "ModelDeveloperUpdateConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    total?: number | null,
  } | null,
};

export type OnCreateWorkSubscription = {
  onCreateWork?:  {
    __typename: "Work",
    id: string,
    userID: string,
    title: string,
    time: string,
    detail: string,
    link?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateWorkSubscription = {
  onUpdateWork?:  {
    __typename: "Work",
    id: string,
    userID: string,
    title: string,
    time: string,
    detail: string,
    link?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteWorkSubscription = {
  onDeleteWork?:  {
    __typename: "Work",
    id: string,
    userID: string,
    title: string,
    time: string,
    detail: string,
    link?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    firstname: string,
    lastname: string,
    email: string,
    aka?: string | null,
    role: string,
    description?: string | null,
    works?:  {
      __typename: "ModelWorkConnection",
      items?:  Array< {
        __typename: "Work",
        id: string,
        userID: string,
        title: string,
        time: string,
        detail: string,
        link?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    firstname: string,
    lastname: string,
    email: string,
    aka?: string | null,
    role: string,
    description?: string | null,
    works?:  {
      __typename: "ModelWorkConnection",
      items?:  Array< {
        __typename: "Work",
        id: string,
        userID: string,
        title: string,
        time: string,
        detail: string,
        link?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    firstname: string,
    lastname: string,
    email: string,
    aka?: string | null,
    role: string,
    description?: string | null,
    works?:  {
      __typename: "ModelWorkConnection",
      items?:  Array< {
        __typename: "Work",
        id: string,
        userID: string,
        title: string,
        time: string,
        detail: string,
        link?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateProjectSubscription = {
  onCreateProject?:  {
    __typename: "Project",
    id: string,
    name: string,
    description?: string | null,
    other?: string | null,
    designtool: string,
    designdata?: string | null,
    ownerID: string,
    owner?:  {
      __typename: "User",
      id: string,
      firstname: string,
      lastname: string,
      email: string,
      aka?: string | null,
      role: string,
      description?: string | null,
      works?:  {
        __typename: "ModelWorkConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    status: string,
    developerID?: string | null,
    dev?:  {
      __typename: "User",
      id: string,
      firstname: string,
      lastname: string,
      email: string,
      aka?: string | null,
      role: string,
      description?: string | null,
      works?:  {
        __typename: "ModelWorkConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    offers?:  {
      __typename: "ModelOfferConnection",
      items?:  Array< {
        __typename: "Offer",
        id: string,
        projectID: string,
        description: string,
        price: number,
        offerOwnerID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    updates?:  {
      __typename: "ModelDeveloperUpdateConnection",
      items?:  Array< {
        __typename: "DeveloperUpdate",
        id: string,
        projectID: string,
        title: string,
        subtitle?: string | null,
        description: string,
        createdAt: string,
        devID: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateProjectSubscription = {
  onUpdateProject?:  {
    __typename: "Project",
    id: string,
    name: string,
    description?: string | null,
    other?: string | null,
    designtool: string,
    designdata?: string | null,
    ownerID: string,
    owner?:  {
      __typename: "User",
      id: string,
      firstname: string,
      lastname: string,
      email: string,
      aka?: string | null,
      role: string,
      description?: string | null,
      works?:  {
        __typename: "ModelWorkConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    status: string,
    developerID?: string | null,
    dev?:  {
      __typename: "User",
      id: string,
      firstname: string,
      lastname: string,
      email: string,
      aka?: string | null,
      role: string,
      description?: string | null,
      works?:  {
        __typename: "ModelWorkConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    offers?:  {
      __typename: "ModelOfferConnection",
      items?:  Array< {
        __typename: "Offer",
        id: string,
        projectID: string,
        description: string,
        price: number,
        offerOwnerID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    updates?:  {
      __typename: "ModelDeveloperUpdateConnection",
      items?:  Array< {
        __typename: "DeveloperUpdate",
        id: string,
        projectID: string,
        title: string,
        subtitle?: string | null,
        description: string,
        createdAt: string,
        devID: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteProjectSubscription = {
  onDeleteProject?:  {
    __typename: "Project",
    id: string,
    name: string,
    description?: string | null,
    other?: string | null,
    designtool: string,
    designdata?: string | null,
    ownerID: string,
    owner?:  {
      __typename: "User",
      id: string,
      firstname: string,
      lastname: string,
      email: string,
      aka?: string | null,
      role: string,
      description?: string | null,
      works?:  {
        __typename: "ModelWorkConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    status: string,
    developerID?: string | null,
    dev?:  {
      __typename: "User",
      id: string,
      firstname: string,
      lastname: string,
      email: string,
      aka?: string | null,
      role: string,
      description?: string | null,
      works?:  {
        __typename: "ModelWorkConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    offers?:  {
      __typename: "ModelOfferConnection",
      items?:  Array< {
        __typename: "Offer",
        id: string,
        projectID: string,
        description: string,
        price: number,
        offerOwnerID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    updates?:  {
      __typename: "ModelDeveloperUpdateConnection",
      items?:  Array< {
        __typename: "DeveloperUpdate",
        id: string,
        projectID: string,
        title: string,
        subtitle?: string | null,
        description: string,
        createdAt: string,
        devID: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateDeveloperUpdateSubscription = {
  onCreateDeveloperUpdate?:  {
    __typename: "DeveloperUpdate",
    id: string,
    projectID: string,
    title: string,
    subtitle?: string | null,
    description: string,
    createdAt: string,
    devID: string,
    dev:  {
      __typename: "User",
      id: string,
      firstname: string,
      lastname: string,
      email: string,
      aka?: string | null,
      role: string,
      description?: string | null,
      works?:  {
        __typename: "ModelWorkConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    updatedAt: string,
  } | null,
};

export type OnUpdateDeveloperUpdateSubscription = {
  onUpdateDeveloperUpdate?:  {
    __typename: "DeveloperUpdate",
    id: string,
    projectID: string,
    title: string,
    subtitle?: string | null,
    description: string,
    createdAt: string,
    devID: string,
    dev:  {
      __typename: "User",
      id: string,
      firstname: string,
      lastname: string,
      email: string,
      aka?: string | null,
      role: string,
      description?: string | null,
      works?:  {
        __typename: "ModelWorkConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    updatedAt: string,
  } | null,
};

export type OnDeleteDeveloperUpdateSubscription = {
  onDeleteDeveloperUpdate?:  {
    __typename: "DeveloperUpdate",
    id: string,
    projectID: string,
    title: string,
    subtitle?: string | null,
    description: string,
    createdAt: string,
    devID: string,
    dev:  {
      __typename: "User",
      id: string,
      firstname: string,
      lastname: string,
      email: string,
      aka?: string | null,
      role: string,
      description?: string | null,
      works?:  {
        __typename: "ModelWorkConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    updatedAt: string,
  } | null,
};

export type OnCreateOfferSubscription = {
  onCreateOffer?:  {
    __typename: "Offer",
    id: string,
    projectID: string,
    description: string,
    price: number,
    offerOwnerID: string,
    offerOwner?:  {
      __typename: "User",
      id: string,
      firstname: string,
      lastname: string,
      email: string,
      aka?: string | null,
      role: string,
      description?: string | null,
      works?:  {
        __typename: "ModelWorkConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateOfferSubscription = {
  onUpdateOffer?:  {
    __typename: "Offer",
    id: string,
    projectID: string,
    description: string,
    price: number,
    offerOwnerID: string,
    offerOwner?:  {
      __typename: "User",
      id: string,
      firstname: string,
      lastname: string,
      email: string,
      aka?: string | null,
      role: string,
      description?: string | null,
      works?:  {
        __typename: "ModelWorkConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteOfferSubscription = {
  onDeleteOffer?:  {
    __typename: "Offer",
    id: string,
    projectID: string,
    description: string,
    price: number,
    offerOwnerID: string,
    offerOwner?:  {
      __typename: "User",
      id: string,
      firstname: string,
      lastname: string,
      email: string,
      aka?: string | null,
      role: string,
      description?: string | null,
      works?:  {
        __typename: "ModelWorkConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
