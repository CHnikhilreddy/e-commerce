import "reflect-metadata"
import { createConnection } from "typeorm"
import microConfig from "./microconfig"

const main = async ()=>{
    try{ 
        await createConnection(microConfig)
        console.log("connected to the DB")
    }
    catch(e){ console.log('got an error')
        console.log(e)
    }
}

main()