module Main exposing (Model, Msg(..), main, update, view)

import Browser
import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (onClick, onInput)
import Pagination exposing (pagination)


main =
    Browser.sandbox { init = init, update = update, view = view }


init =
    initialModel


initialModel =
    { users = users
    , query = ""
    , currentPage = 1
    }


defaultPerPage =
    5


type alias User =
    { name : String
    , email : String
    }


type Msg
    = SearchInput String
    | ChangePage Int
    | Noop


type alias Model =
    { users : List User
    , query : String
    , currentPage : Int
    }


users : List User
users =
    [ { name = "Mads L. Klausen", email = "MadsLKlausen@jourrapide.com" }
    , { name = "Alfred K. Krogh", email = "AlfredKKrogh@armyspy.com" }
    , { name = "Silas L. Bertelsen", email = "SilasLBertelsen@armyspy.com" }
    , { name = "Mia A. Johnsen", email = "MiaAJohnsen@dayrep.com" }
    , { name = "Alfred S. Schou", email = "AlfredSSchou@jourrapide.com" }
    , { name = "Emilie T. Lassen", email = "EmilieTLassen@rhyta.com" }
    , { name = "Maria C. Eriksen", email = "MariaCEriksen@armyspy.com" }
    , { name = "Julius K. Kristiansen", email = "JuliusKKristiansen@rhyta.com" }
    , { name = "Nicklas M. Vestergaard", email = "NicklasMVestergaard@rhyta.com" }
    , { name = "August N. Frandsen", email = "AugustNFrandsen@rhyta.com" }
    , { name = "Bertram L. Brandt", email = "BertramLBrandt@teleworm.us" }
    ]


update msg model =
    case msg of
        Noop ->
            model

        ChangePage page ->
            { model | currentPage = page }

        SearchInput query ->
            { model | query = query }


listItem user =
    li [ class "data-list-item" ]
        [ a [ href "#" ] [ text user.name ]
        , br [] []
        , small [] [ text user.email ]
        ]


filteredValues : List User -> String -> List User
filteredValues items searchQuery =
    List.filter (\v -> matchQuery searchQuery v) items


matchQuery : String -> User -> Bool
matchQuery needle user =
    let
        term =
            String.toLower needle
    in
    String.contains term (String.toLower user.name)
        || String.contains term (String.toLower user.email)


pagedItems : Model -> List User
pagedItems model =
    let
        items =
            filteredItems model
    in
    Pagination.paginateList items model.currentPage defaultPerPage


searchField =
    div [ class "p-b-1" ]
        [ input
            [ class "form-control"
            , placeholder "Søg brugere"
            , name "search"
            , onInput SearchInput
            ]
            []
        ]


usersList model =
    ul [ class "data-list" ] (List.map listItem (pagedItems model))


filteredItems model =
    filteredValues model.users model.query


pager model =
    Pagination.pagination ChangePage (filteredItems model) model.currentPage defaultPerPage


view : Model -> Html Msg
view model =
    div [ class "container mt-3" ]
        [ searchField, usersList model, pager model ]
