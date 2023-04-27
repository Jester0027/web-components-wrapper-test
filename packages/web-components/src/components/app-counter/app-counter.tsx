import { Component, ComponentInterface, State, h } from '@stencil/core';

@Component({
  tag: 'app-counter',
  shadow: true,
})
export class AppCounter implements ComponentInterface {
  @State() counter: number = 0;

  private decrement(): void {
    if (this.counter > 0) {
      --this.counter;
    }
  }

  private increment(): void {
    ++this.counter;
  }

  render() {
    return (
      <div>
        <button onClick={this.increment.bind(this)}>Increment</button>
        <button onClick={this.decrement.bind(this)}>Decrement</button>
        <p>{this.counter}</p>
      </div>
    );
  }
}
