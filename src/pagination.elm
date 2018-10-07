module Pagination exposing (paginateList, pagination)

import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (onClick, onInput)


type alias PaginatedItem =
    { label : Int
    , current : Bool
    }


paginateList items page perPage =
    let
        pageIndex =
            page - 1
    in
    List.drop (pageIndex * perPage) items
        |> List.take perPage


pagination toMsg items currentPage perPage =
    let
        itemsCount =
            List.length items

        pagedItems =
            paginationItems itemsCount currentPage perPage
    in
    ul [ class "pagination" ] (List.map (paginationItem toMsg) pagedItems)


paginationItem toMsg item =
    let
        className =
            if item.current then
                "page-link button-outline"

            else
                "page-link"
    in
    li
        [ class "page-item mr-1" ]
        [ button
            [ class className
            , onClick (toMsg item.label)
            ]
            [ text (String.fromInt item.label) ]
        ]


paginationItems items currentPage perPage =
    let
        totalPages =
            ceiling (toFloat items / toFloat perPage)
    in
    List.range 1 totalPages
        |> List.map (\i -> { label = i, current = currentPage == i })
