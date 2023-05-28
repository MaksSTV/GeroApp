export default class Items {
    static async getItems(countRow, gridCol){
        
        const response = await (await fetch(`http://localhost:8080/item?amount=${countRow * gridCol}`)).json()
        //console.log(response)
        return response
    }
}