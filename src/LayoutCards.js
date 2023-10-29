import React, { Component } from 'react';

class LayoutCards extends Component {
  state = {
    isHovered: false,
  };

  handleMouseEnter = () => {
    this.setState({ isHovered: true });
  };

  handleMouseLeave = () => {
    this.setState({ isHovered: false });
  };

  render() {
    const { imageSource, title, description,buttonText,link  } = this.props;

    return (
      <div className="image-text" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
        <div className={`image ${this.state.isHovered ? 'hovered' : ''}`}>
          <img src={imageSource} alt={title} />
          <div className={`hover-text ${this.state.isHovered ? 'visible' : ''}`}>
            <div className="font-def" style={{ color: '#918EF4', fontSize: '2rem' }}>
              <h1>{title}</h1>
            </div>
            <div className="font-reg" style={{ color: '#FFFFFF', fontSize: '1.2rem' }}>
              <h1>{description}</h1>
            </div>
            {buttonText &&link && this.state.isHovered && (
                <a href={link} target="_blank" rel="noopener noreferrer">

              <button className="form-submit" >{buttonText}</button>
              </a>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default LayoutCards;
