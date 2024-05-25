export default {
    property1:1,
    someFunction(){
        this.property1 = 2;
        return this.property1; //so functions inside objets are able to modify the default value of properties
    }
}