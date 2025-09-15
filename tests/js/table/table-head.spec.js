import { mount, shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import store from '@/store/index.js'
import MoleculesTableHeadMain from '@/components/Molecules/Table/Head/Main.vue';
import MoleculesTableHeadRow from '@/components/Molecules/Table/Head/Row.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('Table head', () => {

    let mockStore;

    beforeEach(() => {

        mockStore = new Vuex.Store({
            state: Object.assign({}, store.state),
        });

    })

    it('Table head has content', () => {

        const wrapper = mount(MoleculesTableHeadMain, {
            localVue,
            store: mockStore,
        });

        const tableHead = wrapper.find('[data-testid=table-head]');

        expect(tableHead.exists()).toBe(true);

        const tableHeadRowChildren = wrapper.find('[data-testid=table-head-row]').findAll('th');

        expect(tableHeadRowChildren).toHaveLength(8);

        const hiddenColumns = tableHead.findAll('[data-testid=table-head-hidden-comlumn]');

        expect(hiddenColumns).toHaveLength(2);

        expect(hiddenColumns.at(0).element.style.display).toEqual('none');

        expect(hiddenColumns.at(1).element.style.display).toEqual('none');

    });

    it('Show table extra columns', () => {

        const wrapper = shallowMount(MoleculesTableHeadRow, {
            localVue,
            store: mockStore,
        });

        store.state.showPeriodDetails = true;

        const columns = wrapper.findAll('[data-testid=table-head-hidden-columns]');

        columns.filter((column) => {
            expect(column.element.style.display).toBe('');
        })

    })

});
