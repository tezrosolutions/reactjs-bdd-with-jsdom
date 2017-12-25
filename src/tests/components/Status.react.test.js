import React from 'react';
import assert from 'assert';
import Status from '../../components/Status.react';
import ReactTestUtils from 'react-dom/test-utils';


describe('Status component', function(){
  before('render and locate element', function() {
    this.renderedComponent = ReactTestUtils.renderIntoDocument(
      <Status info="test"/>
    );

    // Get the DOM ref for the component wrapper div
    this.component = ReactTestUtils.findRenderedDOMComponentWithTag(
      this.renderedComponent,
      'div'
    );

    // Searching for <p> tag within rendered React component
    // Throws an exception if not found
    this.componentStatus = ReactTestUtils.findRenderedDOMComponentWithTag(
      this.renderedComponent,
      'p'
    );

  });

  it('upon render the info should match to test', function() {
    assert(this.componentStatus.innerHTML === 'test');
  });

  it('hovering over the component should change its class', function() {
    ReactTestUtils.Simulate.click(this.component);
    assert(this.component.className === 'hovered');
  });

});
