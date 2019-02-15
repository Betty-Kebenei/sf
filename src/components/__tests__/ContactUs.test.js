import { shallowMount } from '@vue/test-utils';
import ContactUs from '../ContactUs.vue';

describe('Navbar', () => {
  const wrapper = shallowMount(ContactUs);
  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
