interface Props {
    imageLink: string;
    title: string;
    subHeading: string;
}

const Header = ({ imageLink, title, subHeading }: Props) => {
    return (
        <header className="intro-header" style={{ backgroundImage: `url(${imageLink})` }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                        <div className="site-heading">
                            <h1>{title}</h1>
                            <hr className="small" />
                            <span className="subheading">{subHeading}</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;