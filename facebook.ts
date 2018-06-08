export class Likes {
    constructor(private _count: number, private _isLiked: boolean) {
    }

    get count() {
        return this._count;
    }

    get isLiked() {
        return this._isLiked;
    }

    toggle() {

        this._count += this._isLiked ? -1 : 1;
        this._isLiked = !this._isLiked;
        console.log('likes = ' + this.count);
        console.log('toggle state = ' + this.isLiked);
    }

}