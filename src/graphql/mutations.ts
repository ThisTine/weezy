/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createWork = /* GraphQL */ `
  mutation CreateWork(
    $input: CreateWorkInput!
    $condition: ModelWorkConditionInput
  ) {
    createWork(input: $input, condition: $condition) {
      id
      userID
      title
      time
      detail
      link
      createdAt
      updatedAt
    }
  }
`;
export const updateWork = /* GraphQL */ `
  mutation UpdateWork(
    $input: UpdateWorkInput!
    $condition: ModelWorkConditionInput
  ) {
    updateWork(input: $input, condition: $condition) {
      id
      userID
      title
      time
      detail
      link
      createdAt
      updatedAt
    }
  }
`;
export const deleteWork = /* GraphQL */ `
  mutation DeleteWork(
    $input: DeleteWorkInput!
    $condition: ModelWorkConditionInput
  ) {
    deleteWork(input: $input, condition: $condition) {
      id
      userID
      title
      time
      detail
      link
      createdAt
      updatedAt
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      firstname
      lastname
      email
      aka
      role
      description
      works {
        items {
          id
          userID
          title
          time
          detail
          link
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      firstname
      lastname
      email
      aka
      role
      description
      works {
        items {
          id
          userID
          title
          time
          detail
          link
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      firstname
      lastname
      email
      aka
      role
      description
      works {
        items {
          id
          userID
          title
          time
          detail
          link
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createProject = /* GraphQL */ `
  mutation CreateProject(
    $input: CreateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    createProject(input: $input, condition: $condition) {
      id
      name
      description
      other
      designtool
      designdata
      ownerID
      owner {
        id
        firstname
        lastname
        email
        aka
        role
        description
        works {
          nextToken
        }
        createdAt
        updatedAt
      }
      status
      developerID
      dev {
        id
        firstname
        lastname
        email
        aka
        role
        description
        works {
          nextToken
        }
        createdAt
        updatedAt
      }
      offers {
        items {
          id
          projectID
          description
          price
          offerOwnerID
          createdAt
          updatedAt
        }
        nextToken
      }
      updates {
        items {
          id
          projectID
          title
          subtitle
          description
          createdAt
          devID
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateProject = /* GraphQL */ `
  mutation UpdateProject(
    $input: UpdateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    updateProject(input: $input, condition: $condition) {
      id
      name
      description
      other
      designtool
      designdata
      ownerID
      owner {
        id
        firstname
        lastname
        email
        aka
        role
        description
        works {
          nextToken
        }
        createdAt
        updatedAt
      }
      status
      developerID
      dev {
        id
        firstname
        lastname
        email
        aka
        role
        description
        works {
          nextToken
        }
        createdAt
        updatedAt
      }
      offers {
        items {
          id
          projectID
          description
          price
          offerOwnerID
          createdAt
          updatedAt
        }
        nextToken
      }
      updates {
        items {
          id
          projectID
          title
          subtitle
          description
          createdAt
          devID
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteProject = /* GraphQL */ `
  mutation DeleteProject(
    $input: DeleteProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    deleteProject(input: $input, condition: $condition) {
      id
      name
      description
      other
      designtool
      designdata
      ownerID
      owner {
        id
        firstname
        lastname
        email
        aka
        role
        description
        works {
          nextToken
        }
        createdAt
        updatedAt
      }
      status
      developerID
      dev {
        id
        firstname
        lastname
        email
        aka
        role
        description
        works {
          nextToken
        }
        createdAt
        updatedAt
      }
      offers {
        items {
          id
          projectID
          description
          price
          offerOwnerID
          createdAt
          updatedAt
        }
        nextToken
      }
      updates {
        items {
          id
          projectID
          title
          subtitle
          description
          createdAt
          devID
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createDeveloperUpdate = /* GraphQL */ `
  mutation CreateDeveloperUpdate(
    $input: CreateDeveloperUpdateInput!
    $condition: ModelDeveloperUpdateConditionInput
  ) {
    createDeveloperUpdate(input: $input, condition: $condition) {
      id
      projectID
      title
      subtitle
      description
      createdAt
      devID
      dev {
        id
        firstname
        lastname
        email
        aka
        role
        description
        works {
          nextToken
        }
        createdAt
        updatedAt
      }
      updatedAt
    }
  }
`;
export const updateDeveloperUpdate = /* GraphQL */ `
  mutation UpdateDeveloperUpdate(
    $input: UpdateDeveloperUpdateInput!
    $condition: ModelDeveloperUpdateConditionInput
  ) {
    updateDeveloperUpdate(input: $input, condition: $condition) {
      id
      projectID
      title
      subtitle
      description
      createdAt
      devID
      dev {
        id
        firstname
        lastname
        email
        aka
        role
        description
        works {
          nextToken
        }
        createdAt
        updatedAt
      }
      updatedAt
    }
  }
`;
export const deleteDeveloperUpdate = /* GraphQL */ `
  mutation DeleteDeveloperUpdate(
    $input: DeleteDeveloperUpdateInput!
    $condition: ModelDeveloperUpdateConditionInput
  ) {
    deleteDeveloperUpdate(input: $input, condition: $condition) {
      id
      projectID
      title
      subtitle
      description
      createdAt
      devID
      dev {
        id
        firstname
        lastname
        email
        aka
        role
        description
        works {
          nextToken
        }
        createdAt
        updatedAt
      }
      updatedAt
    }
  }
`;
export const createOffer = /* GraphQL */ `
  mutation CreateOffer(
    $input: CreateOfferInput!
    $condition: ModelOfferConditionInput
  ) {
    createOffer(input: $input, condition: $condition) {
      id
      projectID
      description
      price
      offerOwnerID
      offerOwner {
        id
        firstname
        lastname
        email
        aka
        role
        description
        works {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateOffer = /* GraphQL */ `
  mutation UpdateOffer(
    $input: UpdateOfferInput!
    $condition: ModelOfferConditionInput
  ) {
    updateOffer(input: $input, condition: $condition) {
      id
      projectID
      description
      price
      offerOwnerID
      offerOwner {
        id
        firstname
        lastname
        email
        aka
        role
        description
        works {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteOffer = /* GraphQL */ `
  mutation DeleteOffer(
    $input: DeleteOfferInput!
    $condition: ModelOfferConditionInput
  ) {
    deleteOffer(input: $input, condition: $condition) {
      id
      projectID
      description
      price
      offerOwnerID
      offerOwner {
        id
        firstname
        lastname
        email
        aka
        role
        description
        works {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
