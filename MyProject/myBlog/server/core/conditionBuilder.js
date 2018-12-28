class conditionBuilderModel {
    constructor(param) {
        this.param = param;
        this.resultObj = {};
    }
    _build(ObjName, ObjAttrName, ObjVal, ObjType) {
        var val = this.param[ObjVal];
        if (val === undefined) {
            return this;
        }

        if (ObjType === "DateTime") {
            val = new Date(val);
        }

        if (this.resultObj[ObjName] === undefined) {
            this.resultObj[ObjName] = {};
        }

        this.resultObj[ObjName][ObjAttrName] = val;

        return this;
    }
    set(name, val) {
        if (val === undefined) {
            val = name;
        }
        if (this.param[val] !== undefined) {
            this.resultObj[name] = this.param[val];
        }
        return this;

    }
    setDateInObj(ObjName, ObjAttrName, ObjVal) {
        return this._build(ObjName, ObjAttrName, ObjVal, "DateTime");
    }
    setInObj(ObjName, ObjAttrName, ObjVal) {

        return this._build(ObjName, ObjAttrName, ObjVal);
    }
    result() {
        return this.resultObj;
    }
}

function conditionBuilder(param) {
    return new conditionBuilderModel(param);
}

module.exports = conditionBuilder;

