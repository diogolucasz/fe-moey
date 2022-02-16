import { createServer, Factory, Model } from 'miragejs';
import { faker } from '@faker-js/faker';

type Transaction = {
    id: number,
    title: string
    amount: number,
    type: string
    category: string
    created_at: string,
}

export function runServer() {

    const server = createServer({

        models: {
            transaction: Model.extend<Partial<Transaction>>({})
        },

        factories: {
            transaction: Factory.extend({
                id(i: number) {
                    return faker.datatype.uuid();
                 },
                title() {
                    return faker.commerce.product();
                 },
                amount() {
                    return faker.finance.amount();
                 },
                type(i) { 
                    let genres = ["deposit", "withdraw"]

                    return genres[i % genres.length]
                },
                category() {
                    return faker.commerce.department();
                },
                created_at() { 
                    return faker.date.recent(30)
                }
            })
        },

        seeds(server){
            server.createList('transaction',100)
        },

        routes() {
            this.namespace = 'api';
            this.timing = 750;

            this.get('/transactions');
            //this.post('users')

            // this.get('/transactions', () => {
            //     return [
            //         {
            //             id: 1,
            //             title: 'Transction 1',
            //             amount: 400,
            //             type: 'deposit',
            //             category: 'Food',
            //             createdAt: new Date()
            //         }
            //     ]
            // })

            this.passthrough();
        }
    });

    return server;
}