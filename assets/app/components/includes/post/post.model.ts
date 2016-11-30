export class Post{

    constructor(
        public content : String,
        public image? : String,
        public id? : String,
        public created_at? : String,
        public user_firstname? : String,
        public user_lastname? : String,
        public user_id? : String,
        public user_position? : String,
        public user_avatar? : String
    ){}
}