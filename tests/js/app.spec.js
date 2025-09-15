import { shallowMount } from '@vue/test-utils';
import App from '@/App.vue';

describe('App.vue', () => {
  it('is a vue instance', () => {
    const wrapper = shallowMount(App, {
      stubs: {
        'router-view': {
          template: '<div></div>',
        },
      },
    });
    expect(wrapper.vm).toBeTruthy();
  });
});
