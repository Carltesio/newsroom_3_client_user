import React, { Component } from 'react';
import axios from 'axios'

class ArticlesList extends Component {

  state = {
    articlesIndex: []
  }

  componentDidMount() {
    axios.get('/articles').then(response => {
      this.setState({
        articlesIndex: response.data.articles
      })
    })
  }

  render() {
    const articlesIndex = this.state.articlesIndex
    let showArticles

    if (articlesIndex !== []) {
      showArticles = articlesIndex.map(article => {
        return (
          <>
            <div key={article.id} className='article'>
              <div className=".article-title" id="title"><h3>{article.title}</h3></div>
              <div className=".article-content" id="snippet"><p>{article.snippet}</p></div>
            </div>
          </>
        )
      })
    }
    return (
      <div>
        <div id="title">{showArticles}</div>
      </div>
    )
  }
}

export default ArticlesList