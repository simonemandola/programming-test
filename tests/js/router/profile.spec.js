import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import store from '@/store/index.js'
import OrganismsProfileMain from '@/components/Organisms/Profile/Main.vue';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('Route profile', () => {

    let mockStore;

    beforeEach(() => {

        mockStore = new Vuex.Store({
            state: Object.assign({}, store.state),
        });

    });


    it('Should redirect to index if query is empty.', () => {

        const mockRoute = {
            path: '/profile',
            query: { user: '' },
        }

        const mockRouter = {
            replace: jest.fn()
        }

        shallowMount(OrganismsProfileMain, {
            localVue,
            store: mockStore,
            mocks: {
                $route: mockRoute,
                $router: mockRouter,
            }
        });

        expect(mockRouter.replace).toHaveBeenCalledWith({ name: 'home' });

    });

    it('User not found.', () => {

        const mockRoute = {
            path: '/profile',
            query: { user: '100' },
        }

        const wrapper = shallowMount(OrganismsProfileMain, {
            localVue,
            store: mockStore,
            mocks: {
                $route: mockRoute,
            }
        });

        expect(wrapper.find('h1').text()).toMatch('User Not found.');

    });

    it('Should redirect to index if query does not exist.', () => {

        const mockRoute = {
            path: '/profile',
            query: {},
        }

        const mockRouter = {
            replace: jest.fn()
        }

        shallowMount(OrganismsProfileMain, {
            localVue,
            store: mockStore,
            mocks: {
                $route: mockRoute,
                $router: mockRouter,
            }
        });

        expect(mockRouter.replace).toHaveBeenCalledWith({ name: 'home' });

    });

});
