import React from 'react'
// import Axios from 'axios'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'

const query = gql`
  {
    books {
      name
      genre
      author {
        name
        age
        books {
          name
        }
      }
    }
  }
`

const client = Component => props => {
  // const [data, setData] = React.useState([])

  // React.useEffect(() => {
  //   async function fetchData() {
  //     let result = []

  //     // get book list
  //     const books = await Axios.get('/rest/books')
  //     result = books.data

  //     // get authors names
  //     const authors = await Axios.get('/rest/authors')
  //     result.map(book => {
  //       book.author = authors.data.find(author => author.id === book.authorId)
  //       return book
  //     })

  //     // get book genres
  //     const fullBooks = await Promise.all(books.data.map(book => Axios.get(`/rest/books/${book.id}`)))
  //     result.forEach(book => {
  //       book.genre = fullBooks.find(b => b.data.id === book.id).data.genre
  //     })

  //     // get authors ages
  //     const fullAuthors = await Promise.all(authors.data.map(author => Axios.get(`/rest/authors/${author.id}`)))
  //     result.forEach(book => {
  //       book.author.age = fullAuthors.find(a => a.data.id === book.author.id).data.age
  //     })

  //     setData(result)
  //   }
  //   fetchData()
  // }, [])

  const result = useQuery(query)
  const data = (result.data && result.data.books) || []

  return <Component data={data} />
}

export default client
