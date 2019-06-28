import React from 'react';
import {useDidMount, useDidUpdate, useWillUnmount} from '..';
import {mount} from 'enzyme';

describe('use-lifecycle', () => {
  describe('useDidMount', () => {
    test('should work', () => {
      let mounts = 0;

      function Test() {
        useDidMount(() => {
          mounts += 1;
        });

        return null;
      }

      const component = mount(<Test />);
      component.setProps({hello: 'world'});
      component.unmount();

      expect(mounts).toEqual(1);
    });
  });

  describe('useDidUpdate', () => {
    test('should work', () => {
      const updates = [];

      function Test({count}) {
        useDidUpdate(prev => {
          updates.push([prev, count]);
        }, count);

        return null;
      }

      const component = mount(<Test count={0} />);
      component.setProps({count: 1});
      component.setProps({count: 2});
      component.unmount();

      expect(updates).toMatchObject([[0, 1], [1, 2]]);
    });
  });

  describe('useWillUnmount', () => {
    test('should work', () => {
      let unmounts = 0;

      function Test() {
        useWillUnmount(() => {
          unmounts += 1;
        });

        return null;
      }

      const component = mount(<Test count={0} />);
      component.setProps({count: 1});
      component.unmount();

      expect(unmounts).toEqual(1);
    });
  });
});
