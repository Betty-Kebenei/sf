import { shallowMount } from '@vue/test-utils';
import Home from '../Home.vue';

describe('Navbar', () => {
  const wrapper = shallowMount(Home);
  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
