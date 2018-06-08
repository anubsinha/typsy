export class Likes {
    constructor(private _count: number, private _isLiked: boolean) {
    }

    get numLikes() {
        return this._count;
    }

    get toggleState() {
        return this._isLiked;
    }

    toggle() {

        this._count += this._isLiked ? -1 : 1;
        this._isLiked = !this._isLiked;
        console.log('likes = ' + this._count);
        console.log('toggle state = ' + this._isLiked);
    }

}