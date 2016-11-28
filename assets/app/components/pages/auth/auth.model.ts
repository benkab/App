export class User{

    constructor(
        public email : String,
        public password : String,
        public position? : String,
        public firstname? : String,
        public lastname? : String,
        public description? : String,
        public avatar? : String
    ){}
}