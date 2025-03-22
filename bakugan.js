"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bakugan = exports.BakuganType = void 0;
var BakuganType;
(function (BakuganType) {
    BakuganType[BakuganType["RED"] = 0] = "RED";
    BakuganType[BakuganType["GREEN"] = 1] = "GREEN";
    BakuganType[BakuganType["BLUE"] = 2] = "BLUE";
    BakuganType[BakuganType["DARK"] = 3] = "DARK";
    BakuganType[BakuganType["LIGHT"] = 4] = "LIGHT";
})(BakuganType || (exports.BakuganType = BakuganType = {}));
var Bakugan = /** @class */ (function () {
    function Bakugan(name, type, attack, defense, speed) {
        if (attack < 0 || defense < 0 || speed < 0) {
            throw new Error("Attack, defense, and speed must be non-negative values.");
        }
        if (attack > 100 || defense > 100 || speed > 100) {
            throw new Error("Attack, defense, and speed must not exceed 100.");
        }
        this.name = name;
        this.type = type;
        this.attack = attack;
        this.defense = defense;
        this.speed = speed;
        this.point = this.attack + this.defense + this.speed;
    }
    Bakugan.prototype.toObject = function () {
        return {
            "name": this.name,
            "type": this.type,
            "attack": this.attack,
            "defense": this.defense,
            "speed": this.speed,
            "point": this.point
        };
    };
    Bakugan.prototype.toJSON = function () {
        return JSON.stringify(this.toObject());
    };
    return Bakugan;
}());
exports.Bakugan = Bakugan;
