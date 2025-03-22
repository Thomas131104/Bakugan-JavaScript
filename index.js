import { Bakugan, BakuganType } from "./dist/bakugan.js";

Bakugan.setRange(100, 10);

const dragonoid = new Bakugan("Dragonoid", BakuganType.RED, 80, 60, 70);
const pegatrix = new Bakugan("Pegatrix", BakuganType.BLUE, 60, 50, 60);
const trox = new Bakugan("Trox", BakuganType.GREEN, 80, 80, 50);
const cyber_dragon = new Bakugan("Cyber Dragon", BakuganType.RED, 90, 90, 90)

const bakugans = [dragonoid, pegatrix, trox, cyber_dragon]

console.table(bakugans.map(b => b.toObject()));