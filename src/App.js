import React from 'react';
import {withLightBox} from './components/withLightBox';
import './App.css';

const Button = ({openLightBox, closeLightBox, ...btnProps}) => (
  <button
    {...btnProps}
    onClick={openLightBox}
  />
);

const FooComponent = (props) => <strong>{props.item}</strong>;
const LightBoxButton = withLightBox(Button, FooComponent);

export default function App() {
  return (
    <div className="App">
      <LightBoxButton
        className="App__button"
        children="Open Modal"
        items={['foo', 'bar']}
      />
    </div>
  );
}
