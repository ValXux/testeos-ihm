const Info = () => {
    return <nav class="col-md-4 d-none d-md-block text-white p-4 bg-dark">

        <i data-feather="star"></i>
        <i data-feather="heart"></i>

        <div class="position-fixed">
        <h3 class="sidebar-heading text-black">Aqui van cositas xd </h3>
        <ul class="nav flex-column">
            <li class="nav-item">
                <button class="btn btn-primary mb-2">Button 1</button>
            </li>
            <li class="nav-item">
                <button class="btn btn-secondary mb-2">Button 2</button>
            </li>
            <li class="nav-item">
                <button class="btn btn-success mb-2">Button 3</button>
            </li>
            <li class="nav-item">
                <button class="btn btn-danger mb-2">Button 4</button>
            </li>
        </ul>
        </div>
    </nav>
}

export default Info;