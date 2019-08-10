import gql from 'graphql-tag'

export const perPage = 12

export const SEARCH_PALETTES_QUERY = gql`
  query SEARCH_PALETTES_QUERY(
    $term: String, 
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
                  { title_contains: $term }, 
                  { tags_some: { text_contains: $term } },
                  { owner: { name_contains: $term } } 
                ]
            }
        ]
    }, first: $first, skip: $skip, orderBy: $orderBy) {
      id
      createdAt
      title
      colors
      names
      totalLikes
      tags {
        id
        text
      }
      likes {
        id
        createdAt
        user {
          id
        }
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
                  { title_contains: $term }, 
                  { tags_some: { text_contains: $term } },
                  { owner: { name_contains: $term } } 
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
