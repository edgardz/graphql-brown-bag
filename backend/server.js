const express = require('express')
const graphqlHTTP = require('express-graphql')

const { books, authors } = require('./data.json')

const schema = require('./schema')

const app = express()

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true
  })
)

app.get('/rest/books', function(req, res) {
  res.json(
    books.map(book => ({
      id: book.id,
      authorId: book.authorId,
      name: book.name
    }))
  )
})

app.get('/rest/books/:id', function(req, res) {
  res.json(books.find(book => book.id === req.params.id))
})

app.get('/rest/authors', function(req, res) {
  res.json(
    authors.map(author => ({
      id: author.id,
      name: author.name
    }))
  )
})

app.get('/rest/authors/:id', function(req, res) {
  const author = authors.find(author => author.id === req.params.id)
  res.json(author)
})

app.listen(4000, () => {
  console.log('now listening for requests on port 4000')
})
