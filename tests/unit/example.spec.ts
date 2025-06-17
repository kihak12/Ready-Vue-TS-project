import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';

import Home from '@/home/primary/home/Home.vue';

describe('Home.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = mount(Home, {
      props: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
