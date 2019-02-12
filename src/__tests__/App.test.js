import { shallowMount } from '@vue/test-utils';
import App from '../App.vue';

describe('App', () => {
  const wrapper = shallowMount(App);
  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
