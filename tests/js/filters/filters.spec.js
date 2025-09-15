import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import OrganismsFloatingLeftAside from '@/components/Organisms/FloatingLeftAside.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('Filters', () => {

    let mockStore;

    beforeEach(() => {

        mockStore = new Vuex.Store({
            state: {
                filters: {
                    show: false,
                },
            },
            mutations: {
                toggleShowFilters(state) {
                    state.filters.show = true;
                },
            },
        });

    })

    jest.useFakeTimers();

    it('Should show the filters on click button', async () => {

        const wrapper = shallowMount(OrganismsFloatingLeftAside, {
            localVue,
            store: mockStore,
        });

        wrapper.vm.$store.commit('toggleShowFilters');

        await wrapper.vm.$nextTick()

        jest.runAllTimers();

        const filters = wrapper.find('[data-test-id=filters]');
        
        expect(filters.element.classList.value).not.toContain('-translate-x-full');


    });

});
