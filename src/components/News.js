import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';

export class News extends Component {
  static defaultProps = {
    country: 'in', 
     pageSize: 6 ,
     category  : 'general' , 
  }
  constructor() {
    super();
    this.state = {
      articles: [],
       page :1 , 
       spinner : false 
    };
  }

  async componentDidMount() {
    console.log("cdm");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c07be657fe624345953e56d9d5c8ed78&page=1&pageSize=${this.props.pageSize}`;
     this.setState({spinner:true})
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles ,totalResults: parsedData.totalResults , 
     spinner : false}); // Change 'article' to 'articles'
  }
   
   handleNext = async ()=> {
      if( this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)){
      }
      else {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c07be657fe624345953e56d9d5c8ed78&page=${this.state.page +1}&pageSize=${this.props.pageSize}`;
      this.setState({spinner : true}) 
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({
        page : this.state.page + 1 ,
        articles: parsedData.articles ,  
        spinner : false 
      })
      } 
   }
   handlePrevious = async ()=> {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c07be657fe624345953e56d9d5c8ed78&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
      this.setState({spinner: true})
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({spinner : false})
       
      this.setState({
        page : this.state.page -1 ,
        articles: parsedData.articles ,
      })
   }
  render() {
    return (
      <div>
        <div className="container" > 
          <div className="container">
          <h2 className="my-3">Top Headlines</h2>
          </div>
          { this.state.spinner && <Spinner/>}
          <div className="row">
            { !this.state.spinner && this.state.articles.map((element) => (
              <div className="col-md-4  " key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 45) : ""}
                  description={element.description ? element.description.slice(0, 88) : ""}
                  imageurl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="container d-flex justify-content-between " style={{ overflow:"hidden" }}>
           <button disabled={this.state.page<= 1} className="btn btn-dark"  onClick={this.handlePrevious}>&larr; Previous</button>
           <button className="btn btn-dark" onClick={this.handleNext} disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)}> Next &rarr; </button>
        </div>
      </div>
    );
  }
}

export default News;
