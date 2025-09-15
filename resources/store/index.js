import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    rawData: {
      users: null,
      propertyTypes: null,
      properties: null,
    },
    parsedData: [],
    parsedDataFiltered: [],
    filters: {
      show: false,
      active: [],
    },
    showPeriodDetails: false,
  },
  mutations: {
    setData(state, payload) {
      state.rawData = payload;
      function getPeriod(start, end) {
        const currentDate = new Date();
        if (!start) {
          return {
            text: '-',
            numeric: 0,
          };
        }
        const startDate = new Date(start);
        if (!end) {
          const result = (currentDate.getFullYear() - startDate.getFullYear())
              * 12 - (12 - startDate.getMonth()) - (12 - currentDate.getMonth());
          return {
            text: `~${result} months`,
            numeric: result,
          };
        }
        const endDate = new Date(end);
        const result = (endDate.getFullYear() - startDate.getFullYear())
          * 12 - ((12 - endDate.getMonth()) - (12 - startDate.getMonth()));
        return {
          text: `~${result} months`,
          numeric: result,
        };
      }
      function getType(id) {
        return state.rawData.propertyTypes.find((type) => type.id === id);
      }
      function getUser(id) {
        return state.rawData.users.find((user) => user.id === id);
      }
      function isCurrentlyRented(start, end) {
        let isRented = false;
        if (start && !end) isRented = true;
        return isRented;
      }
      state.rawData.properties.forEach((property) => {
        const element = {};
        element.id = property.id;
        element.name = property.name;
        element.type = getType(property.typeId);
        element.user = getUser(property.userId);
        element.rentedPeriod = {
          from: property.rentedFrom,
          to: property.rentedTo,
          total: getPeriod(property.rentedFrom, property.rentedTo),
          isRented: isCurrentlyRented(property.rentedFrom, property.rentedTo),
        };
        state.parsedData.push(element);
      });
      state.parsedDataFiltered = state.parsedData;
    },
    toggleShowFilters(state) {
      state.filters.show = !state.filters.show;
    },
  },
  actions: {
    async manageFilters({ state, dispatch }, payload) {
      if (payload.type === 'RESET') {
        state.filters.active = [];
        state.parsedDataFiltered = state.parsedData;
        return;
      }
      state.filters.active.forEach((item, index) => {
        if (item.type === payload.type) {
          state.filters.active.splice(index, 1);
        }
      });
      state.filters.active.push(payload);
      dispatch('applyFilters');
    },
    async applyFilters({ state, dispatch }) {
      let newFilteredData = state.parsedData;
      for (const filter of state.filters.active) {
        switch (filter.type) {
          case 'TYPE':
            if (filter.value === -1) break;
            newFilteredData = await dispatch('filterByType',
              (state, { data: newFilteredData, value: filter.value }));
            break;
          case 'RENT_PERIOD':
            newFilteredData = await dispatch('filterByRentPeriod',
              (state, { data: newFilteredData, value: filter.value }));
            break;
          case 'USER':
            newFilteredData = await dispatch('filterByUser',
              (state, { data: newFilteredData, value: filter.value }));
            break;
          case 'CURRENTLY_RENTED':
            newFilteredData = await dispatch('filterByRentedStatus',
              (state, { data: newFilteredData, value: filter.value }));
            break;
          default:
        }
      }
      state.parsedDataFiltered = newFilteredData;
    },
    filterByType(_, payload) {
      let { data } = payload;
      data = data.filter(
        (item) => item.type.id === payload.value,
      );
      return data;
    },
    filterByRentPeriod(_, payload) {
      let { data } = payload;
      const value = parseInt(payload.value, 10);
      data = data.filter(
        (item) => item.rentedPeriod.total.numeric <= (value === 0 ? 1000 : value),
      );
      return data;
    },
    filterByUser(_, payload) {
      let { data } = payload;
      if (!payload.value) return data;
      data = data.filter(
        (item) => item.user.name.toLowerCase().includes(payload.value.toLowerCase()),
      );
      return data.length === 0 ? payload.data : data;
    },
    filterByRentedStatus(_, payload) {
      let { data } = payload;
      if (!payload.value) {
        return data;
      }
      data = data.filter((item) => item.rentedPeriod.isRented);
      return data;
    },
  },
});
