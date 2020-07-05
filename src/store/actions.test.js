import { addItemToStore, updateItemInStore, deleteItemFromStore } from "./budgetSlice";
import configureStore from 'redux-mock-store';

const mockStore = configureStore();
const store = mockStore();

//Test for Actions and Reducers.
describe('Budget Actions', () => {
    beforeEach(() => { // Runs before each test in the suite
        store.clearActions();
    });
    it('test for addItem action for income', () => {
        const payload = {
            id: 0,
            description: 'Salary',
            cost: 90,
            type: 'income'
        };

        const expectedActions = [
            {
                payload: {
                    id: 0,
                    description: 'Salary',
                    cost: 90,
                    type: 'income'
                },
                type: 'budget/addItemToStore',
            },
        ];
        store.dispatch(addItemToStore(payload));
        expect(store.getActions()).toEqual(expectedActions);
    });

    it('test for addItem action for expense', () => {
        const payload = {
            id: 0,
            description: 'House rent',
            cost: 90,
            type: 'expense'
        };

        const expectedActions = [
            {
                payload: {
                    id: 0,
                    description: 'House rent',
                    cost: 90,
                    type: 'expense'
                },
                type: 'budget/addItemToStore',
            },
        ];
        store.dispatch(addItemToStore(payload));
        expect(store.getActions()).toEqual(expectedActions);
    });

    it('test for update item action for income', () => {
        const payload = {
            id: 0,
            description: 'Salary',
            cost: 900,
            type: 'income'
        };
        const expectedActions = [
            {
                payload: {
                    id: 0,
                    description: 'Salary',
                    cost: 900,
                    type: 'income'
                },
                type: 'budget/updateItemInStore',
            },
        ];
        store.dispatch(updateItemInStore(payload));
        expect(store.getActions()).toEqual(expectedActions);
    });


    it('test for update item action for expense', () => {
        const payload = {
            id: 0,
            description: 'Salary',
            cost: 900,
            type: 'expense'
        };
        const expectedActions = [
            {
                payload: {
                    id: 0,
                    description: 'Salary',
                    cost: 900,
                    type: 'expense'
                },
                type: 'budget/updateItemInStore',
            },
        ];
        store.dispatch(updateItemInStore(payload));
        expect(store.getActions()).toEqual(expectedActions);
    });


    it('test for delete item action for income', () => {
        const payload = {
            id: 0, type: "income"
        };
        const expectedActions = [
            { type: "budget/deleteItemFromStore", payload: { id: 0, type: "income" } }
        ];
        store.dispatch(deleteItemFromStore(payload));
        expect(store.getActions()).toEqual(expectedActions);
    });
    it('test for delete item action for income', () => {
        const payload = {
            id: 0, type: "expense"
        };
        const expectedActions = [
            { type: "budget/deleteItemFromStore", payload: { id: 0, type: "expense" } }
        ];
        store.dispatch(deleteItemFromStore(payload));
        expect(store.getActions()).toEqual(expectedActions);
    });
});
