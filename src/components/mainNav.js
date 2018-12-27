import React from 'react'
import { Link } from 'gatsby'
import image from '../pages/img/whitetips.svg'

const Nav = (props) => {
  const opacity = (props.opacity) ? Math.max(props.opacity, 0.2) : 0;
  const borderBottomWidth = (props.opacity === 1) ? props.borderBottomWidth : 0;

  return (
    <div className="navbar navbar-default navbar-static-top" role="navigation" style={{ opacity, borderBottomWidth }}>
      <div className="container">
        <div className="navbar-header">
          <a href="#" className="navbar-brand">HolyCulture</a>
        </div>
        <div className="collapse navbar-collapse" id="nav-id">
          <ul className="nav navbar-nav navbar-right">
            <li><a href="#">Videos</a></li>
            <li><a href="#">Articles</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const Top = (props) => (
  <div className="header" style={{ height: props.height, borderBottomWidth: props.borderBottomWidth }}>
    <div className="name">HolyCulture</div>
    <div className="description">Thorough Holiness</div>
    <img src={image} alt="Pheonix" />
    <div className="links">
      <a href="#">Videos</a>
      <a href="#">Articles</a>
    </div>
  </div>
);

const Content = () => (
  <div className="content">
    <div className="container">
      <div className="row">
        <div>
          <h1>Scroll Me</h1>
          <p>
            Phasellus scelerisque ante et odio egestas imperdiet.
            Mauris enim diam, accumsan bibendum nunc dictum, suscipit auctor quam.
            Quisque rhoncus arcu justo, non suscipit nunc condimentum vel.
            Nunc non viverra est, ac ultricies leo.
            Suspendisse dignissim eget sem a aliquet.
            Suspendisse vel dui et turpis mollis volutpat ut vitae odio.
            Aliquam dictum feugiat.
          </p>
          <p>
            Phasellus scelerisque ante et odio egestas imperdiet.
            Mauris enim diam, accumsan bibendum nunc dictum, suscipit auctor quam.
            Quisque rhoncus arcu justo, non suscipit nunc condimentum vel.
            Nunc non viverra est, ac ultricies leo.
            Suspendisse dignissim eget sem a aliquet.
            Suspendisse vel dui et turpis mollis volutpat ut vitae odio.
            Aliquam dictum feugiat.
          </p>
          <p>
            Phasellus scelerisque ante et odio egestas imperdiet.
            Mauris enim diam, accumsan bibendum nunc dictum, suscipit auctor quam.
            Quisque rhoncus arcu justo, non suscipit nunc condimentum vel.
            Nunc non viverra est, ac ultricies leo.
            Suspendisse dignissim eget sem a aliquet.
            Suspendisse vel dui et turpis mollis volutpat ut vitae odio.
            Aliquam dictum feugiat.
          </p>
          <p>
            Phasellus scelerisque ante et odio egestas imperdiet.
            Mauris enim diam, accumsan bibendum nunc dictum, suscipit auctor quam.
            Quisque rhoncus arcu justo, non suscipit nunc condimentum vel.
            Nunc non viverra est, ac ultricies leo.
            Suspendisse dignissim eget sem a aliquet.
            Suspendisse vel dui et turpis mollis volutpat ut vitae odio.
            Aliquam dictum feugiat.
          </p>
          <p>
            Phasellus scelerisque ante et odio egestas imperdiet.
            Mauris enim diam, accumsan bibendum nunc dictum, suscipit auctor quam.
            Quisque rhoncus arcu justo, non suscipit nunc condimentum vel.
            Nunc non viverra est, ac ultricies leo.
            Suspendisse dignissim eget sem a aliquet.
            Suspendisse vel dui et turpis mollis volutpat ut vitae odio.
            Aliquam dictum feugiat.
          </p>
        </div>
      </div>
    </div>
  </div>
);

class Sticky extends React.Component {
  static defaultProps = {
    bottomBorderWidth: 2,
    headerHeight: 600,
    fadeInDistance: 40
  };

  constructor(props) {
    super(props);
    this.state = { navOpacity: 0 };
    this.updateNavOpacity = this.updateNavOpacity.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.updateNavOpacity);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.updateNavOpacity);
  }

  updateNavOpacity() {
    const navbarHeight = 75; // Bootstrap default
    const { bottomBorderWidth, headerHeight, fadeInDistance } = this.props;
    const endFade = headerHeight - navbarHeight - bottomBorderWidth;
    const startFade = endFade - fadeInDistance;
    const scrolly = window.scrollY;

    if (scrolly < startFade) {
      if (this.state.opacity === 0) return;
      this.setState({ navOpacity: 0 });
      return;
    }

    if (scrolly > endFade) {
      if (this.state.opacity === 1) return;
      this.setState({ navOpacity: 1 });
      return;
    }

    const pxPastStartFade = scrolly - startFade;
    const navOpacity = pxPastStartFade / (endFade - startFade);
    this.setState({ navOpacity });
  }

  render() {
    return (
      <div>
        <Nav opacity={ this.state.navOpacity } borderBottomWidth={ this.props.bottomBorderWidth } />
        <Top height={ this.props.headerHeight } borderBottomWidth={ this.props.bottomBorderWidth } />
        <Content />
      </div>
    );
  }
}

export default Sticky;
