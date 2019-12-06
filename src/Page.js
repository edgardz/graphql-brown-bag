import React from 'react'

import client from './client'

const Page = React.memo(({ data }) => {
  return (
    <div className="Page">
      <div className="left">
        {data &&
          data.map((book, i) => (
            <div key={`book-${i}`} className="book">
              {book.name && <div className="book-name">{book.name}</div>}
              {book.genre && <div className="book-genre">Genre: {book.genre}</div>}
              {book.author && (
                <div className="author">
                  {book.author.name && <div className="author-name">Author: {book.author.name}</div>}
                  {book.author.age && <div className="author-age">Age: {book.author.age}</div>}
                  {book.author.books && (
                    <div className="author-books">
                      {book.author.books && 'Books:'}
                      {book.author.books.map((b, j) => (
                        <div key={`author-book-${j}`} className="author-book">
                          {b.name && <div className="author-book-name">- {b.name}</div>}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
      </div>
      <div className="right">
        <pre>{JSON.stringify(data, undefined, 2)}</pre>
      </div>
    </div>
  )
})

export default client(Page)
