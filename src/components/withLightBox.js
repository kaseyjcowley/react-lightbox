import React, {PropTypes, Component} from 'react';
import {LightBox} from './LightBox';

export function withLightBox(WrappedComponent, ContentComponent) {
  class WithLightBox extends Component {
    state = {
      lightBoxIsOpen: false,
      selectedItemIndex: 0,
    }

    openLightBox = () => {
      this.setState({lightBoxIsOpen: true});
    }

    closeLightBox = () => {
      this.setState({lightBoxIsOpen: false});
    }

    prev = () => {
      this.setState(({selectedItemIndex}) => ({
        selectedItemIndex: selectedItemIndex > 0 
          ? --selectedItemIndex
          : this.props.items.length-1,
      }));
    }

    next = () => {
      this.setState(({selectedItemIndex}) => ({
        selectedItemIndex: ++selectedItemIndex % this.props.items.length,
      }));
    }

    render() {
      const {
        props: {items},
        state: {lightBoxIsOpen, selectedItemIndex},
      } = this;

      return (
        <div>
          <WrappedComponent
            {...this.props}
            openLightBox={this.openLightBox}
            closeLightBox={this.closeLightBox}
          />

          <LightBox
            isOpen={lightBoxIsOpen}
            close={this.closeLightBox}
            prev={this.prev}
            next={this.next}
          >
            <ContentComponent item={items[selectedItemIndex]} />
          </LightBox>
        </div>
      );
    }
  }

  WithLightBox.propTypes = {
    items: PropTypes.array.isRequired,
  }

  return WithLightBox;
}