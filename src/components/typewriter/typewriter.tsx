import { Component, Prop, State } from '@stencil/core';


@Component({
  tag: 'web-typewriter',
  styleUrl: 'typewriter.css'
})
export class MyComponent {
  @Prop() words: string;

  @Prop() interval = 150;

  @State() currentString: string;

  componentWillLoad() {
    this.type( JSON.parse(this.words) );
  }

  type(values: Array<string>) {
    const margin = 2;

    let wCursor = 0;
    let sCursor = 0;
    let reverse = false;

    setInterval(() => {
      this.currentString = values[wCursor].substring(0, sCursor);

      sCursor = sCursor + (reverse ? -1 : 1);

      if (sCursor > values[wCursor].length + margin) {
        reverse = true;
      }

      if (sCursor < 0 && reverse) {
        reverse = false;
        sCursor = 0;
        wCursor = (wCursor + 1) % values.length;
      }
    }, +this.interval);
  }

  render() {
    return (
      <span class="typewriter">{this.currentString}</span>
    );
  }
}
