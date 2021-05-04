export default function Navbar(){
    return <>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <a class="navbar-brand">Shope Homepage</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07"
                aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarsExample07">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                        <a class="nav-link" >Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" >about</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link " >service</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link " >contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    </>
}