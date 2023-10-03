import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import NavigationMenu from '../NavigationMenu.vue'

describe('NavigationMenu', () => {
  it('renders properly', () => {
    const wrapper = mount(NavigationMenu, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
