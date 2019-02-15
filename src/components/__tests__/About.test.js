import { shallowMount } from '@vue/test-utils';
import About from '../About.vue';

describe('Navbar', () => {
  const wrapper = shallowMount(About);
  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
