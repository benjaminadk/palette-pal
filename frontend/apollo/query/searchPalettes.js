import gql from 'graphql-tag'

export const perPage = 12

export const SEARCH_PALETTES_QUERY = gql`
  query SEARCH_PALETTES_QUERY(
    $searchTerm: String, 
    $first: Int = ${perPage}, 
    $skip: Int = 0, 
    $orderBy: PaletteOrderByInput = createdAt_DESC, 
    $ownerId: ID = ""
    ) {
    palettes(where: {
      AND: 
        [ 
          { owner: { id_contains: $ownerId } },  
            { 
              OR:  
                [ 
                  { title_contains: $searchTerm }, 
                  { tags_some: { text_contains: $searchTerm } },
                  { owner: { name_contains: $searchTerm } } 
                ]
            }
        ]
    }, first: $first, skip: $skip, orderBy: $orderBy) {
      id
      createdAt
      title
      colors
      names
      likes
      tags {
        id
        text
      }
      owner {
        id
        name
        image
      }
    }
    palettesConnection(where: {
      AND: 
        [ 
          { owner: { id_contains: $ownerId } },  
            { 
              OR:  
                [ 
                  { title_contains: $searchTerm }, 
                  { tags_some: { text_contains: $searchTerm } },
                  { owner: { name_contains: $searchTerm } } 
                ]
            }
        ]
    }, first: $first, skip: $skip, orderBy: $orderBy) {
      pageInfo {
        hasNextPage
        startCursor
        endCursor
      }
    }
  }
`
