export default class Items {
    static async getItems(amount){
        
        const response = await (await fetch(`http://localhost:8080/item?amount=${amount}`)).json()
        //console.log(response)
        return response
    }
}