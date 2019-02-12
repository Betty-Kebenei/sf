import { shallowMount } from '@vue/test-utils';
import Navbar from '../Navbar.vue';

describe('Navbar', () => {
  const wrapper = shallowMount(Navbar);
  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
