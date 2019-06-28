use-lifecycle ![build](https://travis-ci.org/alanhoff/use-lifecycle.svg?branch=master)
==============

A collection of hooks that helps you to track the lifecycle of your components
in a similar way to class components.

### `useDidMount`

This hook is a replacement for the [`componentDidMount`][0] method.

```javascript
import {useDidMount} from 'use-lifecycle';

export default function MyComponent() {
  useDidMount(() => {
    console.log('MyComponent mounted');
  });
}
```

### `useDidUpdate`

This hook is similar to the [`componentDidUpdate`][1] method, the only difference
is that you need to specify what variable you want to keep track of updates.

```javascript
import {useDidUpdate} from 'use-lifecycle';

export default function MyComponent(props) {
  useDidUpdate(prevProps => {
    console.log('Previous props', prevProps);
    console.log('Current props', props);
  }, props);
}
```

It can also be used multiple times for tracking different things separately.

```javascript
export default function MyComponent(props) {
  const [state, setState] = useState();

  useDidUpdate(prevState => {
    console.log('State changed', state, prevState);
  }, state);

  useDidUpdate(prevProps => {
    console.log('Props changed', props, prevProps);
  }, props);

  useDidUpdate(prevFoo => {
    console.log('foo changed', props.foo, prevFoo);
  }, props.foo);
}
```

### `useWillUnmount`

A hook that's a replacement for the [`componentWillUnmount`][2] method.

```javascript
import {useWillUnmount} from 'use-lifecycle';

export default function MyComponent(props) {
  useWillUnmount(prevProps => {
    console.log('MyComponent will unmount');
  }, props);
}
```

### ISC License

Copyright 2019 Alan Hoffmeister <alanhoffmeister@gmail.com>

Permission to use, copy, modify, and/or distribute this software for any purpose
with or without fee is hereby granted, provided that the above copyright notice
and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND
FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS
OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER
TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF
THIS SOFTWARE.

[0]: https://reactjs.org/docs/react-component.html#componentdidmount
[1]: https://reactjs.org/docs/react-component.html#componentdidupdate
[2]: https://reactjs.org/docs/react-component.html#componentwillunmount
