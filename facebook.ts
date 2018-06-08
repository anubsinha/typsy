export class Likes {
    constructor(private _numLikes: number, private _toggleState: boolean) {
    }

    get numLikes() {
        return this._numLikes;
    }

    get toggleState() {
        return this._toggleState;
    }

    toggle() {

        this._numLikes += this.toggleState ? -1 : 1;
        this._toggleState = !this._toggleState;
        console.log('likes = ' + this._numLikes);
        console.log('toggle state = ' + this._toggleState);
    }

}