import { shallowMount } from '@vue/test-utils';
import Goals from '../Goals.vue';

describe('Navbar', () => {
  const wrapper = shallowMount(Goals);
  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
