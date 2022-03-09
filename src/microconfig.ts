import {createConnection} from "typeorm"

 export default {
    type: "postgres",
    database: "e_commerce_test",
    logging: true,
    synchronize: true,
} as Parameters<typeof createConnection>[0]