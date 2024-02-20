import React, { Component } from 'react'

export class NewsItem extends Component {

    render() {
        let { title, description, imageurl, newsUrl} = this.props;
        return (
            <div className="container my-3" style={{overflow:"hidden"}}>
             
                <div className="card" style={{ width: "18rem" }}>
                    <img src={!imageurl?"https://media.assettype.com/bloombergquint%2F2024-02%2Fb27ab83b-5a89-43ec-a9df-a5500e11a06a%2F8326327_1_.jpg?w=1200&auto=format%2Ccompress&ogImage=true": imageurl} className="card-img-top" alt=""/>
                    <div className="card-body">
                        <h5 className="card-title"> {title}...</h5>
                        <p className="card-text">{description}...</p>
                        <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
