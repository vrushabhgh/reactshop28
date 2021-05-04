export default function Navbar(){
    return <>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <h2 class="navbar-brand">Shope Homepage</h2>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07"
                aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarsExample07">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                        <h3 class="nav-link" >Home <span class="sr-only">(current)</span></h3>
                    </li>
                    <li class="nav-item">
                        <h3 class="nav-link" >about</h3>
                    </li>
                    <li class="nav-item">
                        <h3 class="nav-link " >service</h3>
                    </li>
                    <li class="nav-item">
                        <h3 class="nav-link " >contact</h3>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    </>
}