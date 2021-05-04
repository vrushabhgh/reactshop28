export default function Card(props) {
    return (
      <>
         <div class="col-lg-4 col-md-6 mb-4">
                            <div class="card h-100">
                                <a href="#!"><img class="card-img-top" src="https://via.placeholder.com/700x400" alt="..."/></a>
                                <div class="card-body">
                                    <h4 class="card-title"><a href="#!">{props.data.name}</a></h4>
                                    <h5>${props.data.price}</h5>
                                    <p class="card-text">{props.data.description}</p>
                                </div>
                                <div class="card-footer"><small class="text-muted">★ ★ ★ ★ ☆</small>
                                <span><button type="button" class="btn btn-primary" onClick={()=>
                                props.handlecart(props.data)}>Add To Cart</button></span>
                                </div>
                            </div>

                        </div>
      </>
    );
  }