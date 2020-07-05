import budgetReducer from './budgetSlice';
import { addItemToStore, updateItemInStore, deleteItemFromStore } from "./budgetSlice";
import store from "./configureStore";


// { budget:
//     { allItems: { income: [], expense: [] },
//       totals: { income: 0, expense: 0 } } }

const state = store.getState().budget.allItems.income;


describe('Budget Reducer', () => {
    it('should return initial state', () => {
        const action = { type: 'dummyAction' };
        const initialState = {
            allItems: { income: [], expense: [] },
            totals: { income: 0, expense: 0 }
        }

        expect(budgetReducer(undefined, action)).toEqual(initialState);
    });

    it('should handle addItem for income', () => {
        const initialState = {
            allItems: { income: [], expense: [] },
            totals: { income: 0, expense: 0 }
        };

        const action = {
            type: addItemToStore.type,
            payload: {
                id: 0,
                description: 'Salary',
                cost: 90,
                type: 'income'
            }
        };

        const reducer = budgetReducer(initialState, action);

        const expectedState = {
            allItems: {
                income: [
                    {
                        id: 0,
                        description: 'Salary',
                        cost: 90
                    }
                ], expense: []
            },
            totals: { income: 0, expense: 0 }
        }

        expect(reducer).toEqual(expectedState);
    });

    it('should handle addItem for expense', () => {
        const initialState = {
            allItems: { income: [], expense: [] },
            totals: { income: 0, expense: 0 }
        };

        const action = {
            type: addItemToStore.type,
            payload: {
                id: 0,
                description: 'House rent',
                cost: 90,
                type: 'expense'
            }
        };

        const reducer = budgetReducer(initialState, action);

        const expectedState = {
            allItems: {
                income: [],
                expense: [
                    {
                        id: 0,
                        description: 'House rent',
                        cost: 90
                    }
                ]
            },
            totals: { income: 0, expense: 0 }
        }

        expect(reducer).toEqual(expectedState);
    });

    it('should handle updateItem for income', () => {
        const initialState = {
            allItems: {
                income: [
                    {
                        id: 0,
                        description: 'Salary',
                        cost: 90,
                    }
                ], expense: []
            },
            totals: { income: 0, expense: 0 }
        };

        const action = {
            type: updateItemInStore.type,
            payload: {
                id: 0,
                description: 'Salary 2',
                cost: 900,
                type: 'income'
            }
        };

        const reducer = budgetReducer(initialState, action);

        const expectedState = {
            allItems: {
                income: [
                    {
                        id: 0,
                        description: 'Salary 2',
                        cost: 900,
                    }
                ], expense: []
            },
            totals: { income: 0, expense: 0 }
        }

        expect(reducer).toEqual(expectedState);
    });

    it('should handle updateItem for expense', () => {
        const initialState = {
            allItems: {
                income: [],
                expense: [
                    {
                        id: 0,
                        description: 'House rent',
                        cost: 90,
                    }
                ]
            },
            totals: { income: 0, expense: 0 }
        };

        const action = {
            type: updateItemInStore.type,
            payload: {
                id: 0,
                description: 'House rent 2',
                cost: 900,
                type: 'expense'
            }
        };

        const reducer = budgetReducer(initialState, action);

        const expectedState = {
            allItems: {
                income: [],
                expense: [{
                    id: 0,
                    description: 'House rent 2',
                    cost: 900,
                }]
            },
            totals: { income: 0, expense: 0 }
        }

        expect(reducer).toEqual(expectedState);
    });

    it('should handle deleteItem for income', () => {
        const initialState = {
            allItems: {
                income: [
                    {
                        id: 0,
                        description: 'Salary',
                        cost: 90,
                    }
                ], expense: []
            },
            totals: { income: 0, expense: 0 }
        };

        const action = {
            type: deleteItemFromStore.type,
            payload: {
                id: 0,
                type: 'income'
            }
        };

        const reducer = budgetReducer(initialState, action);

        const expectedState = {
            allItems: {
                income: [],
                expense: []
            },
            totals: { income: 0, expense: 0 }
        }

        expect(reducer).toEqual(expectedState);
    });

    it('should handle deleteItem for expense', () => {
        const initialState = {
            allItems: {
                income: [],
                expense: [
                    {
                        id: 0,
                        description: 'House rent',
                        cost: 90,
                    }
                ]
            },
            totals: { income: 0, expense: 0 }
        };

        const action = {
            type: deleteItemFromStore.type,
            payload: {
                id: 0,
                type: 'expense'
            }
        };

        const reducer = budgetReducer(initialState, action);

        const expectedState = {
            allItems: {
                income: [],
                expense: []
            },
            totals: { income: 0, expense: 0 }
        }

        expect(reducer).toEqual(expectedState);
    });
});