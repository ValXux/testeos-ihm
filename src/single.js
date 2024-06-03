import Code_img from './data/code-img.json';

const Single = () => {
    const currentRoute = window.location.pathname;
    const CodeImg = Code_img.find(it => currentRoute.includes(it.slug));

    return (
        <>
            <h1>{CodeImg.name}</h1>
            <hr></hr>
            <img src={CodeImg.picture}></img>
            <p>{CodeImg.description}</p>
        </>
    );
}

export default Single;