/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getWork = /* GraphQL */ `
  query GetWork($id: ID!) {
    getWork(id: $id) {
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
export const listWorks = /* GraphQL */ `
  query ListWorks(
    $filter: ModelWorkFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWorks(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getProject = /* GraphQL */ `
  query GetProject($id: ID!) {
    getProject(id: $id) {
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
export const listProjects = /* GraphQL */ `
  query ListProjects(
    $filter: ModelProjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          createdAt
          updatedAt
        }
        offers {
          nextToken
        }
        updates {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getDeveloperUpdate = /* GraphQL */ `
  query GetDeveloperUpdate($id: ID!) {
    getDeveloperUpdate(id: $id) {
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
export const listDeveloperUpdates = /* GraphQL */ `
  query ListDeveloperUpdates(
    $filter: ModelDeveloperUpdateFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDeveloperUpdates(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
          createdAt
          updatedAt
        }
        updatedAt
      }
      nextToken
    }
  }
`;
export const getOffer = /* GraphQL */ `
  query GetOffer($id: ID!) {
    getOffer(id: $id) {
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
export const listOffers = /* GraphQL */ `
  query ListOffers(
    $filter: ModelOfferFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOffers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const searchProjects = /* GraphQL */ `
  query SearchProjects(
    $filter: SearchableProjectFilterInput
    $sort: SearchableProjectSortInput
    $limit: Int
    $nextToken: String
    $from: Int
  ) {
    searchProjects(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
    ) {
      items {
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
          createdAt
          updatedAt
        }
        offers {
          nextToken
        }
        updates {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
      total
    }
  }
`;
