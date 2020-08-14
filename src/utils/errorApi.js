export class errorApi {
    erroAuth(value){
        console.log(value.data.error)
        const i = value.data.error;
        for (var key in i) {
            console.log("key " + key + " has value " +i );
          }
        return "erro ao logar";
    }
}
export default new errorApi();