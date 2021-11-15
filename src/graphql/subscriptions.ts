/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateWork = /* GraphQL */ `
  subscription OnCreateWork {
    onCreateWork {
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
export const onUpdateWork = /* GraphQL */ `
  subscription OnUpdateWork {
    onUpdateWork {
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
export const onDeleteWork = /* GraphQL */ `
  subscription OnDeleteWork {
    onDeleteWork {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateProject = /* GraphQL */ `
  subscription OnCreateProject {
    onCreateProject {
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
export const onUpdateProject = /* GraphQL */ `
  subscription OnUpdateProject {
    onUpdateProject {
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
export const onDeleteProject = /* GraphQL */ `
  subscription OnDeleteProject {
    onDeleteProject {
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
export const onCreateDeveloperUpdate = /* GraphQL */ `
  subscription OnCreateDeveloperUpdate {
    onCreateDeveloperUpdate {
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
export const onUpdateDeveloperUpdate = /* GraphQL */ `
  subscription OnUpdateDeveloperUpdate {
    onUpdateDeveloperUpdate {
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
export const onDeleteDeveloperUpdate = /* GraphQL */ `
  subscription OnDeleteDeveloperUpdate {
    onDeleteDeveloperUpdate {
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
export const onCreateOffer = /* GraphQL */ `
  subscription OnCreateOffer {
    onCreateOffer {
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
export const onUpdateOffer = /* GraphQL */ `
  subscription OnUpdateOffer {
    onUpdateOffer {
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
export const onDeleteOffer = /* GraphQL */ `
  subscription OnDeleteOffer {
    onDeleteOffer {
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
