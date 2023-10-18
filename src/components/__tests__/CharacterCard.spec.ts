import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import CharacterCard from '../CharacterCard.vue'

describe('CharacterCard', () => {
  it('renders properly', () => {
    const wrapper = mount(CharacterCard, {
      props: {
        name: 'Rick',
        image: '',
        status: '',
        specie: '',
        location: {
          name: ''
        }
      }
    })

    expect(wrapper.text()).toContain('Rick')
  })
})
