import React, { Component } from "react";

import PortfolioItem from "./portfolio-item"

export default class PortfolioContainer extends Component {
    constructor() {
        super();

        this.state = {
            pageTitle: "Welcome to my portfolio",
            isLoading: false,
            data: [
                {title:"Hermitcraft", category: "Minecraft Let's play", slug: 'Hermitcraft'},
                 {title: "Pokemon", category: "Games", slug: 'Pokemon'}, 
                 {title: "Coolstuff", category: "coolstuff", slug: 'Coolstuff'},
                  {title: "super smash bros", category: "Games", slug: 'super-smash-bros'}
            ]
        };
        this.handleFilter = this.handleFilter.bind(this);
    }

    handleFilter(filter) {
        this.setState({
            data: this.state.data.filter(item => {
                return item.category === filter;
            })
        })        
    }
        
        
    

        portfolioItems() {
            

            return this.state.data.map(item => {
            return <PortfolioItem title={item.title} url={"google.com"} slug= {item.slug} />;
            })
        }

        


    render() {
        if (this.state.isLoading){
            return <div>Loading...</div>;
        }
        return (
            <div>



                <h2>{this.state.pageTitle}</h2>
                
                <button onClick={() => this.handleFilter("Minecraft Let's play")}>
                 Minecraft Let's play</button>   
             <button onClick={() => this.handleFilter("Games")}>
                 Games</button> 
             <button onClick={() => this.handleFilter("coolstuff")}>
                 coolstuff</button> 


            {this.portfolioItems()}

             

            </div>
        );
    }
}



