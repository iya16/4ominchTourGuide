import React from 'react';
import { Component } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

class HotelCard extends Component{
    render(){
        return(
            <div>
                <h2 className='text-center text-success my-5'>Recommended Hotel and Resort</h2>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-3'>
                        <div class="card">
                            <img src="..." class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">See More</a>
                            </div>
                        </div>
                    </div>
                     <div className='col-md-3'>
                         <div class="card">
                            <img src="..." class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">See More</a>
                             </div>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div class="card">
                            <img src="..." class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">See More</a>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
         </div>
        )

}
}

class CardPlace extends Component{
    render(){
        return(
            <div> 
                <h2 className='text-center text-success my-5'>Recommended Place</h2>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-3'>
                         <div class="card">
                            <img src="..." class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">See More</a>
                             </div>
                        </div>
                    </div>
                    <div className='col-md-3'> 
                        <div class="card">
                             <img src="..." class="card-img-top" alt="..."/>
                             <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">See More</a>
                              </div>
                         </div>
                    </div>
                    <div className='col-md-3'>
                        <div class="card">
                            <img src="..." class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">See More</a>
                             </div>
                        </div>
                    </div>
                 </div>
            </div>
        </div>
        )
    }
}


class Card extends Component{
    render(){
        return(
            <div>
                <HotelCard />
                <CardPlace />
            </div>
        )
    }
}
export default Card;